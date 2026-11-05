import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8108;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-table-rendering');
const SCREENSHOT_DIR = path.join(ARTIFACT_DIR, 'screenshots');
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png'
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

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

const VIEWPORTS = [
  { name: '1920x1080', width: 1920, height: 1080 },
  { name: '1366x768',  width: 1366, height: 768 },
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '360x800',   width: 360,  height: 800 }
];

const TABLES_TO_AUDIT = [
  { domain: 1, name: 'D1-Table-1-Vocabulary', anchor: 'topic-1-1-core-concepts' },
  { domain: 2, name: 'D2-Table-1-GRC', anchor: 'topic-2-1-frameworks-standards' },
  { domain: 2, name: 'D2-Table-4-BackupStrategies', anchor: 'topic-2-2-drp-backup-sites' },
  { domain: 3, name: 'D3-Table-1-Roles', anchor: 'topic-3-1-roles-definition' },
  { domain: 3, name: 'D3-Table-4-AccessControlModels', anchor: 'topic-3-2-access-control-models' },
  { domain: 4, name: 'D4-Table-1-OSI-TCPIP', anchor: 'topic-4-1-tcp-ip-mapping' },
  { domain: 5, name: 'D5-Table-8-ThreatActors', anchor: 'topic-5-2-threat-actors-motivations' }
];

async function run() {
  const server = await startServer();
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const debugPort = 9265;
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
        await sleep(200);
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

    console.log('=== PART 1: 42-Table Full Integrity Audit (All Domains 1–5) ===');
    const fullAudit = [];

    for (let d = 1; d <= 5; d++) {
      await client.send('Page.navigate', {
        url: `http://127.0.0.1:${PORT}/index.html#reading/domain-${d}`
      });
      await sleep(1000);

      const domainEval = await client.send('Runtime.evaluate', {
        expression: `(() => {
          const tables = Array.from(document.querySelectorAll('.reading-table'));
          return tables.map((tbl, idx) => {
            const wrapper = tbl.closest('.reading-table-wrapper');
            const parentWrapper = wrapper && wrapper.parentElement ? wrapper.parentElement.closest('.reading-table-wrapper') : null;
            const ths = Array.from(tbl.querySelectorAll('th'));
            const firstRowTds = Array.from(tbl.querySelectorAll('tbody tr:first-child td'));
            const rect = tbl.getBoundingClientRect();
            const wrapRect = wrapper ? wrapper.getBoundingClientRect() : null;

            return {
              idx: idx + 1,
              isNestedWrapper: Boolean(parentWrapper),
              headers: ths.map(th => th.innerText.replace(/\\n/g, ' ')),
              headerCount: ths.length,
              tableWidth: Math.round(rect.width),
              wrapWidth: wrapRect ? Math.round(wrapRect.width) : 0,
              thStyles: ths.map(th => {
                const s = window.getComputedStyle(th);
                return {
                  text: th.innerText.replace(/\\n/g, ' '),
                  fontFamily: s.fontFamily,
                  fontSize: s.fontSize,
                  fontWeight: s.fontWeight,
                  lineHeight: s.lineHeight,
                  verticalAlign: s.verticalAlign,
                  padding: s.padding,
                  borderBottom: s.borderBottom
                };
              }),
              firstRowColCount: firstRowTds.length
            };
          });
        })()`,
        returnByValue: true
      });

      const tablesData = domainEval.result.value || [];
      console.log(`Domain ${d}: Found ${tablesData.length} tables`);
      const nestedCount = tablesData.filter(t => t.isNestedWrapper).length;
      console.log(`  Nested wrappers: ${nestedCount}`);
      tablesData.forEach(t => {
        if (t.isNestedWrapper) {
          console.error(`  [DEFECT] D${d} Table ${t.idx} is nested!`);
        }
      });

      fullAudit.push({ domain: d, tableCount: tablesData.length, tables: tablesData });
    }

    fs.writeFileSync(
      path.join(ARTIFACT_DIR, 'tables-rendered-after-audit.json'),
      JSON.stringify(fullAudit, null, 2)
    );

    console.log('\n=== PART 2: Responsive Matrix & After Screenshots (7 Key Audit Tables) ===');
    const responsiveMatrix = [];

    for (const tTarget of TABLES_TO_AUDIT) {
      console.log(`\nTesting ${tTarget.name}...`);

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
              const anchorEl = document.getElementById('${tTarget.anchor}');
              let tbl = null;
              if (anchorEl) {
                const section = anchorEl.closest('section, .reading-topic, .reading-section');
                if (section) tbl = section.querySelector('table');
                if (!tbl) {
                  let sib = anchorEl.nextElementSibling;
                  while (sib) {
                    if (sib.tagName === 'TABLE') { tbl = sib; break; }
                    const sub = sib.querySelector ? sib.querySelector('table') : null;
                    if (sub) { tbl = sub; break; }
                    if (sib.tagName === 'H2' || sib.tagName === 'H3') break;
                    sib = sib.nextElementSibling;
                  }
                }
              }
              if (!tbl) tbl = document.querySelector('table');
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
                  verticalAlign: window.getComputedStyle(th).verticalAlign,
                  fontFamily: window.getComputedStyle(th).fontFamily,
                  padding: window.getComputedStyle(th).padding
                }))
              };
            })()`,
            returnByValue: true
          });

          const res = evalRes.result.value;
          if (res && res.found) {
            console.log(`[${tTarget.name} | ${vp.name} | ${theme}] tblW: ${res.tableWidth}px, wrapW: ${res.wrapWidth}px, nested: ${res.isNested}, overflow: ${res.overflowPx}px, vAlign: ${res.headers[0]?.verticalAlign}`);

            // Capture screenshot for key viewports
            if (['1920x1080', '1366x768', '390x844'].includes(vp.name)) {
              const boxRes = await client.send('Runtime.evaluate', {
                expression: `(() => {
                  const anchorEl = document.getElementById('${tTarget.anchor}');
                  let tbl = null;
                  if (anchorEl) {
                    const section = anchorEl.closest('section, .reading-topic, .reading-section');
                    if (section) tbl = section.querySelector('table');
                    if (!tbl) {
                      let sib = anchorEl.nextElementSibling;
                      while (sib) {
                        if (sib.tagName === 'TABLE') { tbl = sib; break; }
                        const sub = sib.querySelector ? sib.querySelector('table') : null;
                        if (sub) { tbl = sub; break; }
                        if (sib.tagName === 'H2' || sib.tagName === 'H3') break;
                        sib = sib.nextElementSibling;
                      }
                    }
                  }
                  if (!tbl) tbl = document.querySelector('table');
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
                const filename = `${tTarget.name}-after-${vp.name}-${theme}.png`;
                fs.writeFileSync(path.join(SCREENSHOT_DIR, filename), Buffer.from(ss.data, 'base64'));
              }
            }

            responsiveMatrix.push({
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
    fs.writeFileSync(
      path.join(ARTIFACT_DIR, 'table-responsive-matrix-after.json'),
      JSON.stringify(responsiveMatrix, null, 2)
    );
    console.log('\nSaved after responsive matrix to table-responsive-matrix-after.json');
  } finally {
    chromeProcess.kill();
    server.close();
  }
}

run().catch(console.error);

