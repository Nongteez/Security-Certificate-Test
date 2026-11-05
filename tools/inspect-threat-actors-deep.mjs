import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8105;
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
  return new Promise(resolve => {
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
  const debugPort = 9260;
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,1080',
    'about:blank'
  ]);

  try {
    for (let i = 0; i < 30; i++) {
      try {
        await fetch(`http://127.0.0.1:${debugPort}/json/version`);
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
      url: `http://127.0.0.1:${PORT}/index.html#reading/domain-5`
    });
    await new Promise(r => setTimeout(r, 1200));

    const result = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const anchor = document.getElementById('topic-5-2-threat-actors-motivations');
        const section = anchor ? anchor.closest('section') : null;
        const tbl = section ? section.querySelector('table') : document.querySelector('table');
        if (!tbl) return null;

        const wrapper = tbl.closest('.reading-table-wrapper');
        const parentWrapper = wrapper.parentElement ? wrapper.parentElement.closest('.reading-table-wrapper') : null;

        const ths = Array.from(tbl.querySelectorAll('th')).map(th => {
          const r = th.getBoundingClientRect();
          const s = window.getComputedStyle(th);
          return {
            html: th.innerHTML,
            text: th.innerText,
            x: r.x, y: r.y, w: r.width, h: r.height,
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            lineHeight: s.lineHeight,
            verticalAlign: s.verticalAlign,
            padding: s.padding,
            bg: s.backgroundColor,
            color: s.color,
            borderBottom: s.borderBottom
          };
        });

        const rows = Array.from(tbl.querySelectorAll('tbody tr')).map(tr => {
          return Array.from(tr.querySelectorAll('td')).map(td => {
            const r = td.getBoundingClientRect();
            const s = window.getComputedStyle(td);
            return {
              html: td.innerHTML,
              text: td.innerText,
              x: r.x, y: r.y, w: r.width, h: r.height,
              fontFamily: s.fontFamily,
              fontSize: s.fontSize,
              fontWeight: s.fontWeight,
              lineHeight: s.lineHeight,
              verticalAlign: s.verticalAlign,
              padding: s.padding
            };
          });
        });

        return {
          nested: Boolean(parentWrapper),
          outerWrapper: parentWrapper ? {
            margin: window.getComputedStyle(parentWrapper).margin,
            border: window.getComputedStyle(parentWrapper).border,
            padding: window.getComputedStyle(parentWrapper).padding
          } : null,
          innerWrapper: {
            margin: window.getComputedStyle(wrapper).margin,
            border: window.getComputedStyle(wrapper).border,
            padding: window.getComputedStyle(wrapper).padding
          },
          ths,
          rows
        };
      })()`,
      returnByValue: true
    });

    console.log(JSON.stringify(result.result.value, null, 2));
    client.close();
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(console.error);

