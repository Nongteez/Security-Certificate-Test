import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8100;
const ROOT = process.cwd();
const SCREENSHOT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-table-rendering/screenshots');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png'
};

function startServer() {
  return new Promise((resolve, reject) => {
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

async function findChromePath() {
  return 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
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

async function run() {
  const server = await startServer();
  const chromePath = await findChromePath();
  const debugPort = 9249;
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
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

    // Get exact document bounding box
    const boxRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const h3 = document.querySelector('#topic-5-2-threat-actors-motivations');
        const section = h3 ? h3.closest('section') : null;
        let wrapper = section ? section.querySelector('.reading-table-wrapper') : null;
        if (wrapper && wrapper.parentElement && wrapper.parentElement.classList.contains('reading-table-wrapper')) {
          wrapper = wrapper.parentElement;
        }
        if (!wrapper && section) wrapper = section.querySelector('table');
        if (!wrapper) return null;

        const rect = wrapper.getBoundingClientRect();
        return {
          x: Math.round(rect.x + window.scrollX),
          y: Math.round(rect.y + window.scrollY),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        };
      })()`,
      returnByValue: true
    });

    console.log('Target element box:', boxRes.result.value);
    const box = boxRes.result.value;

    const ss = await client.send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, box.x - 10),
        y: Math.max(0, box.y - 10),
        width: box.width + 20,
        height: box.height + 20,
        scale: 1
      },
      captureBeyondViewport: true
    });

    const filePath = path.join(SCREENSHOT_DIR, 'threat-actor-table-test.png');
    fs.writeFileSync(filePath, Buffer.from(ss.data, 'base64'));
    console.log('Saved to', filePath, 'Size:', fs.statSync(filePath).size, 'bytes');

    client.close();
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(console.error);

