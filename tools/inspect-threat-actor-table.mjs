import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8099;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-table-rendering');
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
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '360x800',   width: 360,  height: 800 }
];

async function run() {
  const server = await startServer();
  const chromePath = await findChromePath();
  const debugPort = 9247;
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

    for (const vp of VIEWPORTS) {
      for (const theme of ['dark', 'light']) {
        await client.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.width <= 768
        });

        const themeEval = theme === 'dark'
          ? "localStorage.setItem('sec_cert_theme', 'dark'); document.documentElement.setAttribute('data-theme', 'dark');"
          : "localStorage.setItem('sec_cert_theme', 'light'); document.documentElement.setAttribute('data-theme', 'light');";

        await client.send('Page.navigate', {
          url: `http://127.0.0.1:${PORT}/index.html#reading/domain-5/topic-5-2-threat-actors-motivations`
        });
        await sleep(800);
        await client.send('Runtime.evaluate', { expression: themeEval });
        await sleep(300);

        // Find the threat actor table and inspect it
        const evalRes = await client.send('Runtime.evaluate', {
          expression: `(() => {
            const heading = document.querySelector('#topic-5-2-threat-actors-motivations');
            if (!heading) return { found: false };
            const section = heading.closest('section');
            const tbl = section ? section.querySelector('table') : null;
            if (!tbl) return { found: false };

            const wrapper = tbl.closest('.reading-table-wrapper');
            const parentWrapper = wrapper && wrapper.parentElement ? wrapper.parentElement.closest('.reading-table-wrapper') : null;

            const rect = tbl.getBoundingClientRect();
            const wrapRect = wrapper ? wrapper.getBoundingClientRect() : null;
            const parentWrapRect = parentWrapper ? parentWrapper.getBoundingClientRect() : null;

            const thList = Array.from(tbl.querySelectorAll('th')).map(th => {
              const cs = window.getComputedStyle(th);
              return {
                text: th.innerText,
                w: cs.width,
                font: cs.fontFamily,
                size: cs.fontSize,
                weight: cs.fontWeight,
                lh: cs.lineHeight,
                padding: cs.padding,
                align: cs.textAlign,
                valign: cs.verticalAlign,
                bg: cs.backgroundColor
              };
            });

            const firstRow = Array.from(tbl.querySelectorAll('tbody tr:first-child td')).map(td => {
              const cs = window.getComputedStyle(td);
              return {
                text: td.innerText,
                w: cs.width,
                font: cs.fontFamily,
                size: cs.fontSize,
                weight: cs.fontWeight,
                lh: cs.lineHeight,
                padding: cs.padding,
                align: cs.textAlign,
                valign: cs.verticalAlign
              };
            });

            return {
              found: true,
              isNested: Boolean(parentWrapper),
              outerWrapStyles: parentWrapper ? {
                margin: window.getComputedStyle(parentWrapper).margin,
                padding: window.getComputedStyle(parentWrapper).padding,
                border: window.getComputedStyle(parentWrapper).border,
                bg: window.getComputedStyle(parentWrapper).backgroundColor
              } : null,
              innerWrapStyles: wrapper ? {
                margin: window.getComputedStyle(wrapper).margin,
                padding: window.getComputedStyle(wrapper).padding,
                border: window.getComputedStyle(wrapper).border,
                bg: window.getComputedStyle(wrapper).backgroundColor
              } : null,
              tableWidth: rect.width,
              wrapperWidth: wrapRect ? wrapRect.width : 0,
              parentWrapWidth: parentWrapRect ? parentWrapRect.width : 0,
              thList,
              firstRow
            };
          })()`,
          returnByValue: true
        });

        const detail = evalRes.result.value;
        if (detail && detail.found) {
          console.log(`[${vp.name} - ${theme}] isNested: ${detail.isNested}, tableWidth: ${Math.round(detail.tableWidth)}px, wrapWidth: ${Math.round(detail.wrapperWidth)}px`);

          // Scroll table into view
          await client.send('Runtime.evaluate', {
            expression: `(() => {
              const heading = document.querySelector('#topic-5-2-threat-actors-motivations');
              const section = heading ? heading.closest('section') : null;
              const target = section ? (section.querySelector('.reading-table-wrapper') || section.querySelector('table')) : null;
              if (target) target.scrollIntoView({ block: 'center' });
            })()`
          });
          await sleep(250);

          const clipRes = await client.send('Runtime.evaluate', {
            expression: `(() => {
              const heading = document.querySelector('#topic-5-2-threat-actors-motivations');
              const section = heading ? heading.closest('section') : null;
              let target = section ? section.querySelector('.reading-table-wrapper') : null;
              if (target && target.parentElement && target.parentElement.classList.contains('reading-table-wrapper')) {
                target = target.parentElement; // capture outer wrapper
              }
              if (!target && section) target = section.querySelector('table');
              if (!target) return null;
              const r = target.getBoundingClientRect();
              return {
                x: Math.max(0, r.x - 10),
                y: Math.max(0, r.y - 10),
                width: Math.min(window.innerWidth, r.width + 20),
                height: Math.min(window.innerHeight, r.height + 20)
              };
            })()`,
            returnByValue: true
          });

          if (clipRes.result.value) {
            const clip = clipRes.result.value;
            const ss = await client.send('Page.captureScreenshot', {
              format: 'png',
              clip: { x: clip.x, y: clip.y, width: clip.width, height: clip.height, scale: 1 }
            });
            const filename = `threat-actor-table-before-${vp.name}-${theme}.png`;
            fs.writeFileSync(path.join(SCREENSHOT_DIR, filename), Buffer.from(ss.data, 'base64'));
          }

          if (vp.name === '1920x1080' && theme === 'dark') {
            fs.writeFileSync(path.join(ARTIFACT_DIR, 'threat-actor-table-detail.json'), JSON.stringify(detail, null, 2));
          }
        }
      }
    }

    client.close();
    console.log('Inspection complete.');
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

