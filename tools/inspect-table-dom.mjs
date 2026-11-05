import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8101;
const ROOT = process.cwd();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/index.html';
      const fullPath = path.join(ROOT, reqPath);
      fs.stat(fullPath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.writeHead(404);
          res.end('Not Found');
          return;
        }
        const ext = path.extname(fullPath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        fs.createReadStream(fullPath).pipe(res);
      });
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
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

async function run() {
  const server = await startServer();
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const debugPort = 9251;
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,1080',
    'about:blank'
  ]);

  try {
    let wsUrl = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
        const data = await res.json();
        wsUrl = data.webSocketDebuggerUrl;
        break;
      } catch (e) {
        await new Promise(r => setTimeout(r, 200));
      }
    }
    const targetsRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('DOM.enable');
    await client.send('Runtime.enable');

    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      mobile: false
    });

    await client.send('Page.navigate', {
      url: `http://127.0.0.1:${PORT}/index.html#reading/domain-5/topic-5-2-threat-actors-motivations`
    });
    await new Promise(r => setTimeout(r, 1200));

    const checkRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const h3 = document.querySelector('#topic-5-2-threat-actors-motivations');
        const section = h3 ? h3.closest('section') : null;
        const tbl = section ? section.querySelector('table') : null;
        if (!tbl) return { error: 'table not found' };

        const ths = Array.from(tbl.querySelectorAll('th'));
        const rows = Array.from(tbl.querySelectorAll('tbody tr'));

        return {
          tableHTML: tbl.outerHTML.slice(0, 500),
          outerWrapperHTML: tbl.parentElement.parentElement ? tbl.parentElement.parentElement.outerHTML.slice(0, 200) : 'none',
          innerWrapperHTML: tbl.parentElement.outerHTML.slice(0, 200),
          thDetails: ths.map(th => ({
            text: th.innerText,
            scrollHeight: th.scrollHeight,
            clientHeight: th.clientHeight,
            scrollWidth: th.scrollWidth,
            clientWidth: th.clientWidth,
            lineHeight: window.getComputedStyle(th).lineHeight,
            fontSize: window.getComputedStyle(th).fontSize,
            fontFamily: window.getComputedStyle(th).fontFamily,
            fontWeight: window.getComputedStyle(th).fontWeight,
            color: window.getComputedStyle(th).color,
            bg: window.getComputedStyle(th).backgroundColor,
            letterSpacing: window.getComputedStyle(th).letterSpacing,
            textTransform: window.getComputedStyle(th).textTransform
          })),
          rowsDetails: rows.map((tr, rIdx) => ({
            rIdx,
            cells: Array.from(tr.querySelectorAll('td')).map(td => ({
              text: td.innerText,
              fontFamily: window.getComputedStyle(td).fontFamily,
              fontSize: window.getComputedStyle(td).fontSize,
              fontWeight: window.getComputedStyle(td).fontWeight,
              lineHeight: window.getComputedStyle(td).lineHeight,
              padding: window.getComputedStyle(td).padding
            }))
          }))
        };
      })()`,
      returnByValue: true
    });

    console.log(JSON.stringify(checkRes.result.value, null, 2));
    client.close();
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(console.error);

