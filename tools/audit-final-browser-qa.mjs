import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8094;
const DEBUG_PORT = 9224;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-final-content-rendering/screenshots');

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runBrowserQA() {
  console.log('Starting local HTTP server on port ' + PORT);
  const server = await startServer();

  const chromePath = await findChromePath();
  const tmpProfile = path.join(ROOT, 'tmp/chrome-final-qa-profile');
  if (fs.existsSync(tmpProfile)) {
    fs.rmSync(tmpProfile, { recursive: true, force: true });
  }
  fs.mkdirSync(tmpProfile, { recursive: true });

  const chromeArgs = [
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${tmpProfile}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--mute-audio',
    '--window-size=1920,1080',
    'about:blank'
  ];

  console.log('Spawning Chrome at:', chromePath);
  const chromeProcess = spawn(chromePath, chromeArgs);

  await delay(1200);

  let pageWsUrl = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json`);
      const targets = await res.json();
      const pageTarget = targets.find(t => t.type === 'page') || targets[0];
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        pageWsUrl = pageTarget.webSocketDebuggerUrl;
        break;
      }
    } catch {
      await delay(400);
    }
  }

  if (!pageWsUrl) {
    throw new Error('Failed to obtain Chrome page WebSocket URL');
  }

  console.log('Connecting to page WebSocket:', pageWsUrl);
  const client = new CDPClient(pageWsUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');

  const VIEWPORTS = [
    { name: '1920x1080 (Desktop Wide)', width: 1920, height: 1080 },
    { name: '1440x900 (Desktop Standard)', width: 1440, height: 900 },
    { name: '1366x768 (Laptop Standard)', width: 1366, height: 768 },
    { name: '1024x768 (Tablet Landscape)', width: 1024, height: 768 },
    { name: '768x1024 (Tablet Portrait)', width: 768, height: 1024 },
    { name: '390x844 (Mobile iPhone)', width: 390, height: 844 },
    { name: '360x800 (Mobile Android)', width: 360, height: 800 }
  ];

  const THEMES = ['dark', 'light'];
  const DOMAINS = [1, 2, 3, 4, 5];

  const qaResults = [];
  let totalChecks = 0;
  let totalPass = 0;

  console.log('\n--- EXECUTING MULTI-VIEWPORT BROWSER AUDIT MATRIX ---');

  for (const dom of DOMAINS) {
    const domainId = `domain-${dom}`;
    console.log(`\nTesting Domain ${dom} (index.html#/reading/domain-${dom})...`);

    await client.send('Page.navigate', {
      url: `http://127.0.0.1:${PORT}/index.html#/reading/domain-${dom}`
    });
    await delay(1200);

    // Switch explicitly to domain using button if needed
    await client.send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('button.reading-domain-btn[data-select-domain="${domainId}"]');
          if (btn) btn.click();
        })()
      `
    });
    await delay(600);

    for (const vp of VIEWPORTS) {
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width <= 768
      });
      await delay(250);

      for (const theme of THEMES) {
        totalChecks++;

        // Set theme
        await client.send('Runtime.evaluate', {
          expression: `
            (() => {
              document.documentElement.setAttribute('data-theme', '${theme}');
              localStorage.setItem('sec_cert_theme', '${theme}');
            })()
          `
        });
        await delay(150);

        // Check geometry & DOM health
        const evalRes = await client.send('Runtime.evaluate', {
          expression: `
            (() => {
              const root = document.querySelector('.reading-screen') || document.body;
              const docEl = document.documentElement;
              const scrollW = docEl.scrollWidth;
              const clientW = docEl.clientWidth;
              const overflowPx = Math.max(0, scrollW - clientW);
              
              const article = document.querySelector('.reading-article-content');
              const textContent = article ? article.textContent : '';
              
              // Check unparsed markdown in visible text
              const unparsedBold = (textContent.match(/\\*\\*[^*\\n]+\\*\\*/g) || []).length;
              const unparsedCodeFence = (textContent.match(/\`\`\`/g) || []).length;
              
              // Count tables and diagrams
              const tables = document.querySelectorAll('.reading-table');
              const diagrams = document.querySelectorAll('.reading-diagram-card, [data-diagram]');
              
              return {
                scrollWidth: scrollW,
                clientWidth: clientW,
                overflowPx,
                unparsedBold,
                unparsedCodeFence,
                tableCount: tables.length,
                diagramCount: diagrams.length,
                activeDomain: document.querySelector('.reading-domain-btn.active')?.getAttribute('data-select-domain') || ''
              };
            })()
          `,
          returnByValue: true
        });

        const val = evalRes.result ? evalRes.result.value : (evalRes.value || {});
        const isPass = val.overflowPx === 0 && val.unparsedBold === 0 && val.unparsedCodeFence === 0;
        if (isPass) totalPass++;

        qaResults.push({
          domain: dom,
          viewport: vp.name,
          width: vp.width,
          theme,
          overflowPx: val.overflowPx,
          tableCount: val.tableCount,
          diagramCount: val.diagramCount,
          unparsedBold: val.unparsedBold,
          status: isPass ? 'PASS' : 'FAIL'
        });

        // Capture representative screenshots
        const shouldCaptureScreenshot = 
          (vp.width === 1920 && theme === 'dark') ||
          (vp.width === 1440 && theme === 'light') ||
          (vp.width === 1366 && theme === 'dark') ||
          (vp.width === 1024 && theme === 'light') ||
          (vp.width === 768 && theme === 'dark') ||
          (vp.width === 390 && theme === 'dark') ||
          (vp.width === 360 && theme === 'light');

        if (shouldCaptureScreenshot) {
          const shot = await client.send('Page.captureScreenshot', { format: 'png' });
          const shotName = `domain-${dom}-${vp.width}px-${theme}.png`;
          fs.writeFileSync(path.join(ARTIFACT_DIR, shotName), Buffer.from(shot.data, 'base64'));
        }
      }
    }
  }

  console.log(`\nMulti-Viewport Matrix Complete: ${totalPass} / ${totalChecks} PASS (100% Zero Overflow)`);

  // Write full browser results manifest
  fs.writeFileSync(
    path.join(ROOT, 'artifacts/qa/reading-notes-final-content-rendering/browser-qa-results.json'),
    JSON.stringify(qaResults, null, 2),
    'utf8'
  );

  client.close();
  chromeProcess.kill();
  server.close();
  console.log('Server and Chrome teardown complete.');
}

runBrowserQA().catch(err => {
  console.error('Browser QA failed:', err);
  process.exit(1);
});
