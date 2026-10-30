import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5202;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-3-remediation');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const fullPath = path.join(ROOT, reqPath);
  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
    fs.createReadStream(fullPath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', async () => {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9462',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const newTabRes = await fetch(`http://127.0.0.1:9462/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const ws = new WebSocket(tabData.webSocketDebuggerUrl);

  await new Promise(resolve => { ws.onopen = resolve; });

  let id = 0;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const curId = ++id;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text);
    return r.result?.value;
  };

  await send('Page.enable');
  await send('DOM.enable');
  await new Promise(r => setTimeout(r, 600));

  await evaluate(`(() => {
    window.location.hash = '#reading';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  })()`);
  await new Promise(r => setTimeout(r, 800));

  await evaluate(`(() => {
    const d3Btn = document.querySelector('.reading-domain-card[data-domain-id="3"]') ||
                  document.querySelector('.reading-sidebar-domain-item[data-domain-id="3"]');
    if (d3Btn) d3Btn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1000));

  // 1. Capture before D3-Q01: 320x568 horizontal overflow on distinction grid
  await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 568, deviceScaleFactor: 1, mobile: true });
  await evaluate(`document.documentElement.setAttribute('data-theme', 'dark')`);
  await evaluate(`(() => {
    const grid = document.querySelector('.reading-distinction-grid');
    if (grid) grid.scrollIntoView();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  const shot1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'before-D3-Q01-overflow-320.png'), Buffer.from(shot1.data, 'base64'));
  console.log('Captured: before-D3-Q01-overflow-320.png');

  // 2. Capture before D3-Q02: iamLifecycle mobile stack missing Continuous Governance
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await evaluate(`(() => {
    const diag = document.querySelector('.reading-diagram-card[data-diagram="iamLifecycle"]');
    if (diag) diag.scrollIntoView();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  const shot2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'before-D3-Q02-iam-lifecycle-mobile.png'), Buffer.from(shot2.data, 'base64'));
  console.log('Captured: before-D3-Q02-iam-lifecycle-mobile.png');

  // 3. Capture before D3-Q03: MAC section before clarification
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await evaluate(`(() => {
    const sec = document.querySelector('#topic-3-2-mac');
    if (sec) sec.scrollIntoView();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  const shot3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'before-D3-Q03-mac-section.png'), Buffer.from(shot3.data, 'base64'));
  console.log('Captured: before-D3-Q03-mac-section.png');

  // 4. Capture before D3-Q04: PoLP badge on 320x568
  await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 568, deviceScaleFactor: 1, mobile: true });
  await evaluate(`(() => {
    const diag = document.querySelector('.reading-diagram-card[data-diagram="leastPrivilegeVsSod"]');
    if (diag) diag.scrollIntoView();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  const shot4 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'before-D3-Q04-polp-badge-320.png'), Buffer.from(shot4.data, 'base64'));
  console.log('Captured: before-D3-Q04-polp-badge-320.png');

  ws.close();
  chromeProcess.kill();
  server.close();
  process.exit(0);
});

