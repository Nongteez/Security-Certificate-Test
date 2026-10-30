import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5210;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const fullPath = path.join(ROOT, reqPath);
  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404); res.end('Not found'); return;
    }
    res.writeHead(200);
    fs.createReadStream(fullPath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', async () => {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9470',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const newTabRes = await fetch(`http://127.0.0.1:9470/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const ws = new WebSocket(tabData.webSocketDebuggerUrl);
  await new Promise(resolve => { ws.onopen = resolve; });

  let id = 0;
  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = ++id;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return r.result?.value;
  };

  await send('Page.enable');
  await new Promise(r => setTimeout(r, 600));

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

  await evaluate(`(() => {
    const d3Select = document.querySelector('[data-select-domain="3"]');
    if (d3Select) d3Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  const cardHtml = await evaluate(`document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]').innerHTML`);
  console.log('--- Rendered innerHTML of accessControlModels ---');
  console.log(cardHtml.substring(0, 1800));

  ws.close();
  chromeProcess.kill();
  server.close();
  process.exit(0);
});

