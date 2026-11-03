import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8097;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-threat-chain-simplification');
const SCREENSHOT_DIR = path.join(ARTIFACT_DIR, 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/index.html';
      const fullPath = path.join(ROOT, reqPath);
      if (!fullPath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      fs.stat(fullPath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end(`Not Found: ${reqPath}`);
          return;
        }
        const ext = path.extname(fullPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
        fs.createReadStream(fullPath).pipe(res);
      });
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 0;
    this.callbacks = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = err => reject(err);
      this.ws.onmessage = event => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.id;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function findChromePath() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('Chrome executable not found');
}

async function getWebSocketDebuggerUrl(debugPort) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
      const data = await res.json();
      return data.webSocketDebuggerUrl;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  throw new Error('Failed to connect to Chrome debug port');
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const VIEWPORTS = [
  { name: '1920x1080', width: 1920, height: 1080 },
  { name: '1440x900',  width: 1440, height: 900 },
  { name: '1366x768',  width: 1366, height: 768 },
  { name: '1024x768',  width: 1024, height: 768 },
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '360x800',   width: 360,  height: 800 }
];

const THEMES = ['dark', 'light'];

const phase = process.argv[2] || 'after'; // 'before' or 'after'

async function run() {
  console.log(`=== Running Threat Chain QA Phase: ${phase} ===`);
  const server = await startServer();
  const chromePath = await findChromePath();
  const debugPort = 9243;
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--window-size=1920,1080',
    'about:blank'
  ]);

  try {
    await getWebSocketDebuggerUrl(debugPort);
    const targetsRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('DOM.enable');
    await client.send('CSS.enable');
    await client.send('Runtime.enable');

    const results = [];

    for (const vp of VIEWPORTS) {
      for (const theme of THEMES) {
        process.stdout.write(`Testing ${vp.name} (${theme})... `);

        await client.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.width <= 768
        });

        // Set theme in localStorage before navigating
        const themeEval = theme === 'dark'
          ? "localStorage.setItem('sec_cert_theme', 'dark'); document.documentElement.setAttribute('data-theme', 'dark');"
          : "localStorage.setItem('sec_cert_theme', 'light'); document.documentElement.setAttribute('data-theme', 'light');";

        await client.send('Page.navigate', {
          url: `http://127.0.0.1:${PORT}/index.html#reading/domain-1/topic-1-1-core-concepts`
        });

        await sleep(900);
        await client.send('Runtime.evaluate', { expression: themeEval });
        await sleep(300);

        // Audit DOM and layout for threatChain
        const evalRes = await client.send('Runtime.evaluate', {
          expression: `(() => {
            const card = document.querySelector('[data-diagram="threatChain"]');
            if (!card) return { found: false };
            const rect = card.getBoundingClientRect();
            const bodyScrollWidth = document.body.scrollWidth;
            const windowInnerWidth = window.innerWidth;
            const overflowPx = Math.max(0, bodyScrollWidth - windowInnerWidth);

            const desktopWrap = card.querySelector('.reading-diag-desktop');
            const mobileWrap = card.querySelector('.reading-diag-mobile');
            const svg = card.querySelector('svg.reading-diagram-svg') || card.querySelector('svg');
            const tableAbove = document.querySelector('#topic-1-1-core-concepts + * table, table');

            let desktopDisplay = desktopWrap ? window.getComputedStyle(desktopWrap).display : null;
            let mobileDisplay = mobileWrap ? window.getComputedStyle(mobileWrap).display : null;

            return {
              found: true,
              rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
              overflowPx,
              hasSvg: Boolean(svg),
              desktopDisplay,
              mobileDisplay,
              hasTableAbove: Boolean(tableAbove),
              notePresent: Boolean(document.querySelector('#threatChain-note'))
            };
          })()`,
          returnByValue: true
        });

        const data = evalRes.result.value;
        const pass = data.found && data.overflowPx === 0;

        // Screenshot the diagram region
        const screenshotFileName = `threatChain-${phase}-${vp.name}-${theme}.png`;
        const screenshotFilePath = path.join(SCREENSHOT_DIR, screenshotFileName);

        // Take screenshot of viewport or clipped card
        if (data.found && data.rect.height > 0) {
          // Scroll diagram into view
          await client.send('Runtime.evaluate', {
            expression: `document.querySelector('[data-diagram="threatChain"]').scrollIntoView({ block: 'center' });`
          });
          await sleep(200);

          const cardClipRes = await client.send('Runtime.evaluate', {
            expression: `(() => {
              const card = document.querySelector('[data-diagram="threatChain"]');
              const r = card.getBoundingClientRect();
              const note = document.querySelector('#threatChain-note');
              const noteH = note ? note.getBoundingClientRect().height + 20 : 0;
              return {
                x: Math.max(0, r.x - 10),
                y: Math.max(0, r.y - 10),
                width: r.width + 20,
                height: r.height + noteH + 20
              };
            })()`,
            returnByValue: true
          });

          const clip = cardClipRes.result.value;

          const ss = await client.send('Page.captureScreenshot', {
            format: 'png',
            clip: {
              x: clip.x,
              y: clip.y,
              width: Math.min(clip.width, vp.width),
              height: clip.height,
              scale: 1
            }
          });
          fs.writeFileSync(screenshotFilePath, Buffer.from(ss.data, 'base64'));
        }

        console.log(pass ? 'PASS' : 'FAIL', `(overflow: ${data.overflowPx}px, height: ${Math.round(data.rect?.height || 0)}px)`);

        results.push({
          phase,
          viewport: vp.name,
          theme,
          pass,
          data,
          screenshot: `artifacts/qa/reading-notes-threat-chain-simplification/screenshots/${screenshotFileName}`
        });
      }
    }

    client.close();

    const manifestPath = path.join(ARTIFACT_DIR, `threat-chain-${phase}-manifest.json`);
    fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2));
    console.log(`Saved ${results.length} checks and screenshots to ${manifestPath}`);

  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
