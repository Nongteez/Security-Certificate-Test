import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5198;
const CHROME_PORT = 9471;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-math-audit');

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
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

async function runMathAudit() {
  console.log('=== Mathematical & Relationship Symbols Browser CDP Audit ===\n');

  const server = await startServer();
  console.log(`[1] Server listening on http://127.0.0.1:${PORT}/`);

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
  console.log('[2] Chrome CDP connected.');

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');

  await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
  await new Promise(r => setTimeout(r, 1200));

  // Navigate to Domain 2 reading notes
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

  const domainHeader = await cdp.eval(`(() => {
    const title = document.querySelector('.reading-article-title');
    return title ? title.textContent.trim() : null;
  })()`);
  console.log('[3] Active Domain Article verified:', domainHeader);
  if (domainHeader !== 'Domain 2: Security Governance') {
    throw new Error(`Expected Domain 2: Security Governance, got: ${domainHeader}`);
  }

  const configs = [
    { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
    { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
    { name: '1920x1080-dark', width: 1920, height: 1080, theme: 'dark', mobile: false },
    { name: '1920x1080-light', width: 1920, height: 1080, theme: 'light', mobile: false },
    { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true },
    { name: '390x844-light', width: 390, height: 844, theme: 'light', mobile: true }
  ];

  const results = [];
  const manifest = [];

  for (const cfg of configs) {
    console.log(`\n--- Inspecting & Auditing Mathematical Symbols: ${cfg.name} (${cfg.width}x${cfg.height}, theme: ${cfg.theme}) ---`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 1,
      mobile: cfg.mobile
    });

    await cdp.eval(`
      document.documentElement.setAttribute('data-theme', '${cfg.theme}');
      if ('${cfg.theme}' === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    `);
    await new Promise(r => setTimeout(r, 300));

    // Live Math DOM Audit
    const audit = await cdp.eval(`
      (() => {
        const bodyText = document.body.innerText;

        // Check 1: RTO ≤ MTD in visible text
        const hasRtoLeMtd = bodyText.includes('RTO ≤ MTD');

        // Check 2: DR ⊂ BC in visible text
        const hasDrSubsetBc = bodyText.includes('DR ⊂ BC');

        // Check 3: Raw LaTeX command leaks
        const rawLatexMatch = bodyText.match(/\\\\[a-zA-Z]+|\\\$(?!\\d)/);
        const hasRawLatex = Boolean(rawLatexMatch);

        // Check 4: Raw dollar leaks
        const rawDollarMatch = bodyText.match(/(?<!\\d)\\$(?!\\d)/);
        const hasRawDollar = Boolean(rawDollarMatch);

        // Check 5: HTML entity literal leaks (&sub;, &le;, &rarr;, &amp;)
        const hasLiteralEntity = /&(?:sub|le|ge|rarr|larr|times|divide|ne);/.test(bodyText) ||
                                 bodyText.includes('&sub;') ||
                                 bodyText.includes('&le;') ||
                                 bodyText.includes('&rarr;') ||
                                 bodyText.includes('&larr;');

        // Check 6: Horizontal overflow
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const horizontalOverflow = Math.max(0, docWidth - winWidth);

        // Check 7: Specific Section Nodes
        const biaSection = document.querySelector('#topic-2-2-bia');
        const bcDrSection = document.querySelector('#topic-2-2-bc-vs-dr');
        const rtoRpoSection = document.querySelector('#topic-2-2-rto-rpo');
        const distinctionGrid = document.querySelector('.reading-distinction-grid');

        return {
          hasRtoLeMtd,
          hasDrSubsetBc,
          hasRawLatex,
          rawLatexSnippet: rawLatexMatch ? rawLatexMatch[0] : null,
          hasRawDollar,
          hasLiteralEntity,
          horizontalOverflow,
          nodes: {
            bia: !!biaSection,
            bcDr: !!bcDrSection,
            rtoRpo: !!rtoRpoSection,
            distinction: !!distinctionGrid
          }
        };
      })()
    `);

    let pass = true;
    if (!audit.hasRtoLeMtd) {
      console.error('  FAIL: "RTO ≤ MTD" not found in visible text!');
      pass = false;
    }
    if (!audit.hasDrSubsetBc) {
      console.error('  FAIL: "DR ⊂ BC" not found in visible text!');
      pass = false;
    }
    if (audit.hasRawLatex) {
      console.error(`  FAIL: Raw LaTeX leaked: ${audit.rawLatexSnippet}`);
      pass = false;
    }
    if (audit.hasRawDollar) {
      console.error('  FAIL: Unparsed raw dollar delimiter found in text!');
      pass = false;
    }
    if (audit.hasLiteralEntity) {
      console.error('  FAIL: Escaped HTML entity visible literally in text!');
      pass = false;
    }
    if (audit.horizontalOverflow > 0) {
      console.error(`  FAIL: Horizontal overflow detected: ${audit.horizontalOverflow}px!`);
      pass = false;
    }

    console.log(`  "RTO ≤ MTD" Visible: ${audit.hasRtoLeMtd ? 'PASS (Preserved)' : 'FAIL'}`);
    console.log(`  "DR ⊂ BC" Visible: ${audit.hasDrSubsetBc ? 'PASS (Preserved)' : 'FAIL'}`);
    console.log(`  Zero Raw LaTeX Leaks: ${!audit.hasRawLatex ? 'PASS (0 leaks)' : 'FAIL'}`);
    console.log(`  Zero Escaped Entity Leaks: ${!audit.hasLiteralEntity ? 'PASS (0 leaks)' : 'FAIL'}`);
    console.log(`  Horizontal Overflow: ${audit.horizontalOverflow}px`);
    console.log(`  Status: ${pass ? 'PASS' : 'FAIL'}`);

    results.push({ config: cfg.name, pass, audit });

    // Target Screenshot 1: Section 2.2.3 BIA & RTO ≤ MTD Inequality
    await cdp.eval(`
      (() => {
        const el = document.querySelector('#topic-2-2-bia');
        if (el) el.scrollIntoView({ block: 'start' });
      })()
    `);
    await new Promise(r => setTimeout(r, 250));

    const shotBia = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const fileBia = `math-01-rto-le-mtd-bia-${cfg.name}.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, fileBia), Buffer.from(shotBia.data, 'base64'));
    manifest.push({ config: cfg.name, target: 'RTO ≤ MTD (Section 2.2.3 BIA)', file: fileBia });

    // Target Screenshot 2: Section 2.2.5 BC vs. DR Scope Diagram (DR ⊂ BC)
    await cdp.eval(`
      (() => {
        const el = document.querySelector('#topic-2-2-bc-vs-dr');
        if (el) el.scrollIntoView({ block: 'start' });
      })()
    `);
    await new Promise(r => setTimeout(r, 250));

    const shotBcDr = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const fileBcDr = `math-02-dr-subset-bc-${cfg.name}.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, fileBcDr), Buffer.from(shotBcDr.data, 'base64'));
    manifest.push({ config: cfg.name, target: 'DR ⊂ BC (Section 2.2.5 Scope Diagram)', file: fileBcDr });

    // Target Screenshot 3: Section 2.2.6 RTO vs. RPO Timeline
    await cdp.eval(`
      (() => {
        const el = document.querySelector('#topic-2-2-rto-rpo');
        if (el) el.scrollIntoView({ block: 'start' });
      })()
    `);
    await new Promise(r => setTimeout(r, 250));

    const shotRtoRpo = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const fileRtoRpo = `math-03-rto-rpo-timeline-${cfg.name}.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, fileRtoRpo), Buffer.from(shotRtoRpo.data, 'base64'));
    manifest.push({ config: cfg.name, target: 'RTO vs RPO Timeline & Inequality', file: fileRtoRpo });

    // Target Screenshot 4: Concept Distinctions (Cards 5 & 6)
    await cdp.eval(`
      (() => {
        const el = document.querySelector('.reading-distinction-grid');
        if (el) el.scrollIntoView({ block: 'start' });
      })()
    `);
    await new Promise(r => setTimeout(r, 250));

    const shotDistinction = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const fileDistinction = `math-04-distinctions-${cfg.name}.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, fileDistinction), Buffer.from(shotDistinction.data, 'base64'));
    manifest.push({ config: cfg.name, target: 'Concept Distinctions Card 5 & 6', file: fileDistinction });
  }

  // Write manifest
  fs.writeFileSync(
    path.join(ARTIFACTS_DIR, 'manifest.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), manifest, results }, null, 2),
    'utf8'
  );
  console.log(`\n[4] Manifest and ${manifest.length} screenshots written to: ${ARTIFACTS_DIR}`);

  cdp.close();
  chromeProcess.kill();
  server.close();

  const allPassed = results.every(r => r.pass);
  console.log(`\n=== Verification Finished: ${allPassed ? 'ALL CONFIGURATIONS PASSED (100%)' : 'FAILURES DETECTED'} ===`);
  if (!allPassed) process.exit(1);
}

runMathAudit().catch(err => {
  console.error('Error during math audit:', err);
  process.exit(1);
});

