import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5208;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-3-final-acceptance');
fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

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
    '--remote-debugging-port=9468',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const newTabRes = await fetch(`http://127.0.0.1:9468/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
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

  // Navigate to Reading Notes properly
  await evaluate(`(() => {
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));

  await evaluate(`(() => {
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  // Select Domain 3
  await evaluate(`(() => {
    const d3Select = document.querySelector('[data-select-domain="3"]');
    if (d3Select) d3Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  // 1366x768 Dark mode - Inspect Section 3.2.8
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await evaluate(`document.documentElement.setAttribute('data-theme', 'dark')`);
  
  await evaluate(`(() => {
    const diag = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
    if (diag) diag.scrollIntoView({ block: 'center' });
  })()`);
  await new Promise(r => setTimeout(r, 400));

  const diagData = await evaluate(`(() => {
    const card = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
    if (!card) return { error: 'Card not found' };
    const svg = card.querySelector('svg');
    const texts = Array.from(card.querySelectorAll('text')).map(t => {
      const r = t.getBoundingClientRect();
      const style = window.getComputedStyle(t);
      return {
        text: t.textContent.trim().substring(0, 50),
        innerHTML: t.innerHTML,
        x: t.getAttribute('x'),
        y: t.getAttribute('y'),
        rect: { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) },
        whiteSpace: style.whiteSpace,
        inlineSize: style.inlineSize,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily
      };
    });
    return {
      svgRect: svg ? svg.getBoundingClientRect() : null,
      viewBox: svg ? svg.getAttribute('viewBox') : null,
      texts
    };
  })()`);

  console.log('SVG Rect & ViewBox:', diagData.svgRect, diagData.viewBox);
  console.log('Text elements in accessControlModels:');
  diagData.texts?.forEach((t, i) => {
    console.log(`[${i}] "${t.text}" -> rect: [${t.rect.x}, ${t.rect.y}, w=${t.rect.width}, h=${t.rect.height}] font=${t.fontSize} inner=${t.innerHTML.substring(0, 40)}`);
  });

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'before-stageA-access-control-defect-1366-dark.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved: before-stageA-access-control-defect-1366-dark.png');

  // Also capture in Light theme
  await evaluate(`document.documentElement.setAttribute('data-theme', 'light')`);
  await new Promise(r => setTimeout(r, 300));
  const shotLight = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'before-stageA-access-control-defect-1366-light.png'), Buffer.from(shotLight.data, 'base64'));
  console.log('Saved: before-stageA-access-control-defect-1366-light.png');

  ws.close();
  chromeProcess.kill();
  server.close();
  process.exit(0);
});
