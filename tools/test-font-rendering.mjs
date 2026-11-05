import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8106;
const ROOT = process.cwd();

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
        res.writeHead(200);
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

async function testFont() {
  const server = await startServer();
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const debugPort = 9262;
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

    await client.send('Page.navigate', {
      url: `http://127.0.0.1:${PORT}/index.html#reading/domain-5`
    });
    await new Promise(r => setTimeout(r, 1200));

    // Test font rendering and computed font-family
    const res = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const h3 = document.getElementById('topic-5-2-threat-actors-motivations');
        const section = h3 ? h3.closest('section') : null;
        const tbl = section ? section.querySelector('table') : null;
        if (!tbl) return 'table not found';

        // Check fonts used for th
        const th = tbl.querySelector('th');
        return {
          thText: th.innerText,
          computedFont: window.getComputedStyle(th).fontFamily,
          renderedWidth: th.getBoundingClientRect().width,
          renderedHeight: th.getBoundingClientRect().height
        };
      })()`,
      returnByValue: true
    });

    console.log(res.result.value);
    client.close();
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

testFont().catch(console.error);

