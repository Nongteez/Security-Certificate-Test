/**
 * tools/capture-domain2-cross-domain-evidence.mjs
 *
 * Captures comprehensive visual evidence across desktop, tablet, and mobile
 * viewports in Dark and Light themes for the Domain 2 Cross-Domain Quality Audit.
 */

import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5194;
const CHROME_PORT = 9476;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-cross-domain-audit');

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
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

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval exception: ${res.exceptionDetails.text} (${res.exceptionDetails.exception?.description || ''})`);
    }
    return res.result?.value;
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function captureEvidence() {
  console.log('=== Capturing Domain 2 Cross-Domain Audit Evidence ===\n');

  const server = await startServer();
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${CHROME_PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/version`);
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!versionData) throw new Error('Could not connect to Chrome CDP');

  const targetsRes = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/list`);
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page');
  const cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');

  await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
  await new Promise(r => setTimeout(r, 1200));

  // Navigate to Domain 2
  await cdp.eval(`(() => {
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));

  await cdp.eval(`(() => {
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  await cdp.eval(`(() => {
    const d2Select = document.querySelector('[data-select-domain="2"]');
    if (d2Select) d2Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  const manifest = [];

  const capturePoints = [
    { id: 'top-lead', sel: '.reading-article-header', name: '01-top-header-lead' },
    { id: 'grc-diag', sel: '.reading-diagram-card[data-diagram="grcAlignment"]', name: '02-grc-alignment' },
    { id: 'bc-dr-diag', sel: '.reading-diagram-card[data-diagram="bcVsDrScope"]', name: '03-bc-vs-dr-scope' },
    { id: 'rto-rpo-diag', sel: '.reading-diagram-card[data-diagram="rtoRpoTimeline"]', name: '04-rto-rpo-timeline' },
    { id: 'effectiveness-diag', sel: '.reading-diagram-card[data-diagram="effectivenessHierarchy"]', name: '05-measurement-architecture' },
    { id: 'trigger-matrix', sel: '#topic-2-4-memory-aid', name: '06-exam-trigger-matrix' },
    { id: 'distinction-cards', sel: '#topic-2-review-scenarios', name: '07-concept-distinctions' }
  ];

  const configs = [
    { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
    { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
    { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true }
  ];

  for (const cfg of configs) {
    console.log(`Setting viewport ${cfg.name}...`);
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 2,
      mobile: cfg.mobile
    });

    await cdp.eval(`(() => {
      document.documentElement.setAttribute('data-theme', '${cfg.theme}');
      if ('${cfg.theme}' === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    })()`);
    await new Promise(r => setTimeout(r, 250));

    for (const cp of capturePoints) {
      await cdp.eval(`(() => {
        const el = document.querySelector('${cp.sel}');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));

      const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const filename = `${cp.name}-${cfg.name}.png`;
      const outPath = path.join(ARTIFACTS_DIR, filename);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));

      manifest.push({
        file: filename,
        point: cp.id,
        viewport: `${cfg.width}x${cfg.height}`,
        theme: cfg.theme,
        sizeKb: Math.round(shot.data.length * 0.75 / 1024)
      });
    }
  }

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'evidence-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Captured ${manifest.length} screenshots. Saved manifest to evidence-manifest.json.`);

  cdp.close();
  chromeProcess.kill();
  server.close();
  console.log('=== Evidence Capture Complete ===');
}

captureEvidence().catch(err => {
  console.error('Evidence Capture Failed:', err);
  process.exit(1);
});

