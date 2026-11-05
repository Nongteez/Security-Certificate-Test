import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8102;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-table-rendering');
const SCREENSHOT_DIR = path.join(ARTIFACT_DIR, 'screenshots');

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

const VIEWPORTS = [
  { name: '1920x1080', width: 1920, height: 1080 },
  { name: '1366x768',  width: 1366, height: 768 },
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '360x800',   width: 360,  height: 800 }
];

const TABLES_TO_AUDIT = [
  { domain: 1, name: 'D1-Table-1-Vocabulary', selector: 'table' },
  { domain: 2, name: 'D2-Table-1-GRC', selector: 'table.reading-table-grc-frameworks' },
  { domain: 2, name: 'D2-Table-4-BackupStrategies', selector: '#topic-2-2-drp-backup-sites + * table, section:has(#topic-2-2-drp-backup-sites) table' },
  { domain: 3, name: 'D3-Table-1-Roles', selector: '#topic-3-1-roles-definition + * table, section:has(#topic-3-1-roles-definition) table' },
  { domain: 3, name: 'D3-Table-4-AccessControlModels', selector: '#topic-3-2-access-control-models + * table, section:has(#topic-3-2-access-control-models) table' },
  { domain: 4, name: 'D4-Table-1-OSI-TCPIP', selector: '#topic-4-1-tcp-ip-mapping + * table, section:has(#topic-4-1-tcp-ip-mapping) table' },
  { domain: 5, name: 'D5-Table-8-ThreatActors', selector: '#topic-5-2-threat-actors-motivations + * table, section:has(#topic-5-2-threat-actors-motivations) table' }
];

async function run() {
  const server = await startServer();
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const debugPort = 9253;
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

    const auditResults = [];

    for (const tTarget of TABLES_TO_AUDIT) {
      console.log(`\nAuditing ${tTarget.name}...`);

      for (const vp of VIEWPORTS) {
        for (const theme of ['dark', 'light']) {
          await client.send('Emulation.setDeviceMetricsOverride', {
            width: vp.width,
            height: vp.height,
            deviceScaleFactor: 1,
            mobile: vp.width <= 768
          });

          const themeEval = theme === 'dark'
            ? "localStorage.setItem('sec_cert_theme', 'dark'); document.documentElement.setAttribute('data-theme', 'dark');"
            : "localStorage.setItem('sec_cert_theme', 'light'); document.documentElement.setAttribute('data-theme', 'light');";

          await client.send('Page.navigate', {
            url: `http://127.0.0.1:${PORT}/index.html#reading/domain-${tTarget.domain}`
          });
          await sleep(700);
          await client.send('Runtime.evaluate', { expression: themeEval });
          await sleep(250);

          const evalRes = await client.send('Runtime.evaluate', {
            expression: `(() => {
              const tbl = document.querySelector('${tTarget.selector}') || document.querySelector('table');
              if (!tbl) return { found: false };

              const wrapper = tbl.closest('.reading-table-wrapper');
              const parentWrapper = wrapper && wrapper.parentElement ? wrapper.parentElement.closest('.reading-table-wrapper') : null;
              const ths = Array.from(tbl.querySelectorAll('th'));
              const rect = tbl.getBoundingClientRect();
              const wrapRect = wrapper ? wrapper.getBoundingClientRect() : null;

              const bodyScrollWidth = document.body.scrollWidth;
              const windowWidth = window.innerWidth;
              const hasPageOverflow = bodyScrollWidth > windowWidth;

              return {
                found: true,
                isNested: Boolean(parentWrapper),
                tableWidth: Math.round(rect.width),
                tableHeight: Math.round(rect.height),
                wrapWidth: wrapRect ? Math.round(wrapRect.width) : 0,
                hasPageOverflow,
                overflowPx: Math.max(0, bodyScrollWidth - windowWidth),
                colWidths: ths.map(th => Math.round(parseFloat(window.getComputedStyle(th).width))),
                headers: ths.map(th => ({
                  text: th.innerText.replace(/\\n/g, ' '),
                  w: Math.round(parseFloat(window.getComputedStyle(th).width)),
                  h: Math.round(parseFloat(window.getComputedStyle(th).height)),
                  fontSize: window.getComputedStyle(th).fontSize,
                  fontWeight: window.getComputedStyle(th).fontWeight,
                  lineHeight: window.getComputedStyle(th).lineHeight,
                  padding: window.getComputedStyle(th).padding
                }))
              };
            })()`,
            returnByValue: true
          });

          const res = evalRes.result.value;
          if (res && res.found) {
            console.log(`[${tTarget.name} | ${vp.name} | ${theme}] tblW: ${res.tableWidth}px, wrapW: ${res.wrapWidth}px, nested: ${res.isNested}, overflow: ${res.overflowPx}px`);

            // Capture screenshot for key cases (1920x1080 and 390x844)
            if (['1920x1080', '1366x768', '390x844'].includes(vp.name)) {
              // Find bounding box including document scroll offset
              const boxRes = await client.send('Runtime.evaluate', {
                expression: `(() => {
                  const tbl = document.querySelector('${tTarget.selector}') || document.querySelector('table');
                  if (!tbl) return null;
                  let target = tbl.closest('.reading-table-wrapper') || tbl;
                  if (target.parentElement && target.parentElement.classList.contains('reading-table-wrapper')) {
                    target = target.parentElement;
                  }
                  target.scrollIntoView({ block: 'center' });
                  const r = target.getBoundingClientRect();
                  return {
                    x: Math.round(r.x + window.scrollX),
                    y: Math.round(r.y + window.scrollY),
                    width: Math.round(r.width),
                    height: Math.round(r.height)
                  };
                })()`,
                returnByValue: true
              });
              await sleep(200);

              const box = boxRes.result.value;
              if (box && box.height > 0) {
                const ss = await client.send('Page.captureScreenshot', {
                  format: 'png',
                  clip: {
                    x: Math.max(0, box.x - 8),
                    y: Math.max(0, box.y - 8),
                    width: Math.min(box.width + 16, vp.width),
                    height: box.height + 16,
                    scale: 1
                  },
                  captureBeyondViewport: true
                });
                const filename = `${tTarget.name}-before-${vp.name}-${theme}.png`;
                fs.writeFileSync(path.join(SCREENSHOT_DIR, filename), Buffer.from(ss.data, 'base64'));
              }
            }

            auditResults.push({
              table: tTarget.name,
              viewport: vp.name,
              theme,
              ...res
            });
          }
        }
      }
    }

    client.close();
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'table-responsive-matrix.json'), JSON.stringify(auditResults, null, 2));
    console.log('\nSaved matrix to table-responsive-matrix.json');
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(console.error);

