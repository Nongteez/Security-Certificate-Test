import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5182;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/mfa-cards');

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
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

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval exception: ${res.exceptionDetails.text} (${res.exceptionDetails.exception?.description || ''})`);
    }
    return res.result?.value;
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runBrowserVerification() {
  console.log('--- MFA Inline Title Layout: Real Browser Verification ---');

  const server = await startServer();
  console.log(`[1] Dev server started at http://127.0.0.1:${PORT}/`);

  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9446',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9446/json/version');
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!versionData) {
    chromeProcess.kill();
    server.close();
    throw new Error('Could not connect to Chrome on port 9446');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9446/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  // Wait for initial render
  await new Promise(r => setTimeout(r, 1000));

  // Click ISC2 CC card
  await cdp.eval(`
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  `);
  await new Promise(r => setTimeout(r, 800));

  // Click Reading Notes button
  await cdp.eval(`
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  `);
  // Wait for Domain 1 content to load & render
  await new Promise(r => setTimeout(r, 2000));

  const testConfigs = [
    { name: '1366-dark', width: 1366, height: 768, theme: 'dark' },
    { name: '1366-light', width: 1366, height: 768, theme: 'light' },
    { name: '1920-dark', width: 1920, height: 1080, theme: 'dark' },
    { name: '1920-light', width: 1920, height: 1080, theme: 'light' }
  ];

  let allChecksPassed = true;

  for (const cfg of testConfigs) {
    console.log(`\nVerifying layout at ${cfg.width}x${cfg.height} [Theme: ${cfg.theme}]...`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 1,
      mobile: false
    });

    await cdp.eval(`
      document.documentElement.setAttribute('data-theme', '${cfg.theme}');
      if ('${cfg.theme}' === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    `);
    await new Promise(r => setTimeout(r, 500));

    // Measure geometry of MFA cards
    const metrics = await cdp.eval(`
      (() => {
        const stack = document.querySelector('.reading-mfa-stack');
        if (!stack) return { error: 'No .reading-mfa-stack found' };
        stack.scrollIntoView({ behavior: 'instant', block: 'center' });

        const cards = Array.from(stack.querySelectorAll('.reading-mfa-item'));
        return cards.map((card, idx) => {
          const icon = card.querySelector('.reading-mfa-icon');
          const num = card.querySelector('.reading-mfa-num');
          const titleGroup = card.querySelector('.reading-mfa-title-group');
          const title = card.querySelector('.reading-mfa-title');
          const subtitle = card.querySelector('.reading-mfa-subtitle');

          const iconRect = icon.getBoundingClientRect();
          const numRect = num.getBoundingClientRect();
          const groupRect = titleGroup.getBoundingClientRect();
          const titleRect = title.getBoundingClientRect();
          const subRect = subtitle.getBoundingClientRect();

          const iconCenterY = iconRect.top + iconRect.height / 2;
          const numCenterY = numRect.top + numRect.height / 2;
          const groupCenterY = groupRect.top + groupRect.height / 2;

          return {
            factor: idx + 1,
            titleText: title.innerText.trim(),
            subText: subtitle.innerText.trim(),
            // Title & Subtitle inline check
            isInline: Math.abs(titleRect.top - subRect.top) < 10 && subRect.left >= (titleRect.right - 2),
            gapPx: subRect.left - titleRect.right,
            titleTop: titleRect.top,
            subTop: subRect.top,
            // Vertical centering check across icon, num, and group
            iconCenterY,
            numCenterY,
            groupCenterY,
            iconNumCenterDiff: Math.abs(iconCenterY - numCenterY),
            numGroupCenterDiff: Math.abs(numCenterY - groupCenterY)
          };
        });
      })()
    `);

    if (metrics.error) {
      console.error(`  ✗ FAIL: ${metrics.error}`);
      allChecksPassed = false;
      continue;
    }

    metrics.forEach(m => {
      console.log(`  Factor ${m.factor}: "${m.titleText}" + "${m.subText}"`);
      console.log(`    Inline: ${m.isInline} (gap: ${m.gapPx.toFixed(1)}px, titleTop: ${m.titleTop.toFixed(1)}, subTop: ${m.subTop.toFixed(1)})`);
      console.log(`    Vertical center diff: icon-num=${m.iconNumCenterDiff.toFixed(1)}px, num-group=${m.numGroupCenterDiff.toFixed(1)}px`);

      if (!m.isInline) {
        console.error(`    ✗ FAIL: Factor ${m.factor} title and subtitle are NOT on the same line!`);
        allChecksPassed = false;
      }
      if (m.numGroupCenterDiff > 6) {
        console.error(`    ✗ FAIL: Factor ${m.factor} title group center deviation is too large (${m.numGroupCenterDiff.toFixed(1)}px)!`);
        allChecksPassed = false;
      }
    });

    // Capture screenshot
    const screenshot = await cdp.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    const buf = Buffer.from(screenshot.data, 'base64');
    const specificPath = path.join(ARTIFACTS_DIR, `inline-${cfg.name}.png`);
    const afterCompatPath = path.join(ARTIFACTS_DIR, `after-${cfg.name}.png`);
    fs.writeFileSync(specificPath, buf);
    fs.writeFileSync(afterCompatPath, buf);
    console.log(`  Saved screenshot: ${specificPath} & ${afterCompatPath}`);
  }

  // Cleanup
  cdp.close();
  chromeProcess.kill();
  server.close();

  if (!allChecksPassed) {
    console.error('\nBrowser verification encountered failures!');
    process.exit(1);
  } else {
    console.log('\n✓ All browser layout and visual centering checks PASSED!');
  }
}

runBrowserVerification().catch(err => {
  console.error('Fatal browser verification error:', err);
  process.exit(1);
});
