import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8098;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-table-rendering');
const SCREENSHOT_DIR = path.join(ARTIFACT_DIR, 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
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

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('=== Starting Reading Notes Table Rendering Audit ===');
  const server = await startServer();
  const chromePath = await findChromePath();
  const debugPort = 9245;
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
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
    await client.send('CSS.enable');
    await client.send('Runtime.enable');

    const domains = [1, 2, 3, 4, 5];
    const domainAuditResults = [];

    for (const d of domains) {
      console.log(`\n--- Auditing Domain ${d} Tables ---`);
      await client.send('Page.navigate', {
        url: `http://127.0.0.1:${PORT}/index.html#reading/domain-${d}`
      });
      await sleep(1000);

      const tableDataRes = await client.send('Runtime.evaluate', {
        expression: `(() => {
          const tables = Array.from(document.querySelectorAll('.reading-article table, .reading-table'));
          return tables.map((tbl, idx) => {
            const wrapper = tbl.closest('.reading-table-wrapper');
            const parentWrapper = wrapper ? wrapper.parentElement.closest('.reading-table-wrapper') : null;
            const thList = Array.from(tbl.querySelectorAll('th'));
            const firstRowTds = Array.from(tbl.querySelectorAll('tbody tr:first-child td'));
            const rect = tbl.getBoundingClientRect();
            const wrapperRect = wrapper ? wrapper.getBoundingClientRect() : null;

            const thStyles = thList.map(th => {
              const cs = window.getComputedStyle(th);
              return {
                text: th.innerText.trim(),
                fontFamily: cs.fontFamily,
                fontSize: cs.fontSize,
                fontWeight: cs.fontWeight,
                lineHeight: cs.lineHeight,
                color: cs.color,
                background: cs.backgroundColor,
                padding: cs.padding,
                textAlign: cs.textAlign,
                verticalAlign: cs.verticalAlign,
                minWidth: cs.minWidth,
                width: cs.width,
                hasBilingualTerm: Boolean(th.querySelector('.reading-bilingual-term'))
              };
            });

            const tdStyles = firstRowTds.map(td => {
              const cs = window.getComputedStyle(td);
              return {
                text: td.innerText.trim().slice(0, 30),
                fontFamily: cs.fontFamily,
                fontSize: cs.fontSize,
                fontWeight: cs.fontWeight,
                lineHeight: cs.lineHeight,
                color: cs.color,
                padding: cs.padding,
                textAlign: cs.textAlign,
                verticalAlign: cs.verticalAlign,
                minWidth: cs.minWidth,
                width: cs.width
              };
            });

            return {
              idx: idx + 1,
              tableClass: tbl.className,
              wrapperClass: wrapper ? wrapper.className : 'NONE',
              isNestedWrapper: Boolean(parentWrapper),
              rect: { width: Math.round(rect.width), height: Math.round(rect.height) },
              wrapperRect: wrapperRect ? { width: Math.round(wrapperRect.width), height: Math.round(wrapperRect.height) } : null,
              headerCount: thList.length,
              headers: thList.map(th => th.innerText.trim()),
              thStyles,
              tdStyles
            };
          });
        })()`,
        returnByValue: true
      });

      const tables = tableDataRes.result.value;
      console.log(`Found ${tables.length} rendered tables in Domain ${d}`);
      domainAuditResults.push({ domain: d, tables });

      // If Domain 5, capture screenshot of Threat Actor table (topic-5-2-threat-actors-motivations)
      if (d === 5) {
        console.log('Capturing Domain 5 Threat Actor table screenshot...');
        await client.send('Runtime.evaluate', {
          expression: `(() => {
            const el = document.querySelector('#topic-5-2-threat-actors-motivations');
            if (el) el.scrollIntoView({ block: 'start' });
          })()`
        });
        await sleep(400);

        const clipRes = await client.send('Runtime.evaluate', {
          expression: `(() => {
            const header = document.querySelector('#topic-5-2-threat-actors-motivations');
            const tbl = header ? header.parentElement.querySelector('table') : null;
            if (!tbl) return null;
            const r = tbl.closest('.reading-table-wrapper') ? tbl.closest('.reading-table-wrapper').getBoundingClientRect() : tbl.getBoundingClientRect();
            return {
              x: Math.max(0, r.x - 10),
              y: Math.max(0, r.y - 10),
              width: r.width + 20,
              height: r.height + 20
            };
          })()`,
          returnByValue: true
        });

        if (clipRes.result.value) {
          const clip = clipRes.result.value;
          const ss = await client.send('Page.captureScreenshot', {
            format: 'png',
            clip: { x: clip.x, y: clip.y, width: Math.min(clip.width, 1920), height: clip.height, scale: 1 }
          });
          fs.writeFileSync(path.join(SCREENSHOT_DIR, 'threat-actor-table-before-1920x1080-dark.png'), Buffer.from(ss.data, 'base64'));
          console.log('Saved threat-actor-table-before-1920x1080-dark.png');
        }
      }
    }

    client.close();

    fs.writeFileSync(
      path.join(ARTIFACT_DIR, 'tables-rendered-audit.json'),
      JSON.stringify(domainAuditResults, null, 2)
    );
    console.log(`Saved audit results to ${path.join(ARTIFACT_DIR, 'tables-rendered-audit.json')}`);

  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

