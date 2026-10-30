import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5198;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-3-comprehensive-audit');

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
    '--remote-debugging-port=9458',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const newTabRes = await fetch(`http://127.0.0.1:9458/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
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
  await new Promise(r => setTimeout(r, 800));

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

  const captures = [
    { name: '1366x768', w: 1366, h: 768, mobile: false, theme: 'dark' },
    { name: '1366x768', w: 1366, h: 768, mobile: false, theme: 'light' },
    { name: '1920x1080', w: 1920, h: 1080, mobile: false, theme: 'light' },
    { name: '390x844', w: 390, h: 844, mobile: true, theme: 'dark' },
    { name: '390x844', w: 390, h: 844, mobile: true, theme: 'light' },
    { name: '320x568', w: 320, h: 568, mobile: true, theme: 'light' },
    { name: '320x568-overflow-detail', w: 320, h: 568, mobile: true, theme: 'dark', scrollTarget: '.reading-distinction-grid' }
  ];

  for (const cap of captures) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: cap.w,
      height: cap.h,
      deviceScaleFactor: 1,
      mobile: cap.mobile
    });
    await evaluate(`document.documentElement.setAttribute('data-theme', '${cap.theme}')`);
    if (cap.scrollTarget) {
      await evaluate(`(() => {
        const el = document.querySelector('${cap.scrollTarget}');
        if (el) el.scrollIntoView();
      })()`);
    } else {
      await evaluate(`window.scrollTo(0, 0)`);
    }
    await new Promise(r => setTimeout(r, 400));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, `audit-${cap.name}-${cap.theme}.png`), Buffer.from(shot.data, 'base64'));
    console.log(`Captured: audit-${cap.name}-${cap.theme}.png`);
  }

  ws.close();
  chromeProcess.kill();
  server.close();
  process.exit(0);
});

