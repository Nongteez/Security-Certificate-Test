import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5196;
const CHROME_PORT = 9469;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/bc-vs-dr-redesign');

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

async function runCapture() {
  console.log('=== BC vs. DR Diagram Redesign: Comprehensive Verification & Screenshot Capture ===\n');

  // Copy prior "before" screenshots for side-by-side comparison
  const priorDark1366 = path.resolve('artifacts/qa/domain-2-human-acceptance/1366-dark-03-diag-bcVsDrScope.png');
  const priorDark390 = path.resolve('artifacts/qa/domain-2-human-acceptance/390-dark-03-diag-bcVsDrScope.png');
  if (fs.existsSync(priorDark1366)) {
    fs.copyFileSync(priorDark1366, path.join(ARTIFACTS_DIR, 'before-1366-dark-bcVsDrScope.png'));
  }
  if (fs.existsSync(priorDark390)) {
    fs.copyFileSync(priorDark390, path.join(ARTIFACTS_DIR, 'before-390-dark-bcVsDrScope.png'));
  }

  const server = await startServer();
  console.log(`[1] Test server listening on http://127.0.0.1:${PORT}/`);

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
    console.log(`\n--- Inspecting & Capturing: ${cfg.name} (${cfg.width}x${cfg.height}, theme: ${cfg.theme}) ---`);

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

    // Scroll to Section 2.2.5
    await cdp.eval(`
      (() => {
        const target = document.querySelector('#topic-2-2-bc-vs-dr') || document.querySelector('[data-diagram="bcVsDrScope"]');
        if (target) {
          target.scrollIntoView({ block: 'start' });
        }
      })()
    `);
    await new Promise(r => setTimeout(r, 300));

    // Audit live dimensions & layout
    const audit = await cdp.eval(`
      (() => {
        const diagramCard = document.querySelector('[data-diagram="bcVsDrScope"]');
        if (!diagramCard) return { found: false };

        const cardRect = diagramCard.getBoundingClientRect();
        const desktopSvg = diagramCard.querySelector('.reading-diag-desktop svg');
        const mobileHtml = diagramCard.querySelector('.reading-diag-mobile');

        const isMobile = window.innerWidth <= 768;
        const desktopVisible = desktopSvg ? window.getComputedStyle(diagramCard.querySelector('.reading-diag-desktop')).display !== 'none' : false;
        const mobileVisible = mobileHtml ? window.getComputedStyle(mobileHtml).display !== 'none' : false;

        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const horizontalOverflow = Math.max(0, docWidth - winWidth);

        let details = {};
        if (!isMobile && desktopSvg) {
          const svgRect = desktopSvg.getBoundingClientRect();
          const outerBox = desktopSvg.querySelector('.diag-bc-outer');
          const innerBox = desktopSvg.querySelector('.diag-dr-inner');
          const pills = desktopSvg.querySelectorAll('.diag-scope-pills > g');
          const examplesRect = desktopSvg.querySelector('.diag-examples-rect');

          details = {
            svgWidth: Math.round(svgRect.width),
            svgHeight: Math.round(svgRect.height),
            hasOuterBc: !!outerBox,
            hasInnerDr: !!innerBox,
            pillCount: pills.length,
            hasExamplesSubPanel: !!examplesRect
          };
        } else if (isMobile && mobileHtml) {
          const outerMob = mobileHtml.querySelector('.reading-mob-scope-outer');
          const innerMob = mobileHtml.querySelector('.reading-mob-scope-inner');
          const tags = mobileHtml.querySelectorAll('.reading-mob-tag-item');
          const examples = mobileHtml.querySelectorAll('.reading-mob-examples-list li');

          details = {
            hasOuterBc: !!outerMob,
            hasInnerDr: !!innerMob,
            tagCount: tags.length,
            exampleItemCount: examples.length
          };
        }

        return {
          found: true,
          isMobile,
          desktopVisible,
          mobileVisible,
          horizontalOverflow,
          cardWidth: Math.round(cardRect.width),
          cardHeight: Math.round(cardRect.height),
          details
        };
      })()
    `);

    let pass = true;
    if (!audit.found) {
      console.error('  FAIL: [data-diagram="bcVsDrScope"] not found in DOM!');
      pass = false;
    }
    if (audit.horizontalOverflow > 0) {
      console.error(`  FAIL: Horizontal overflow detected: ${audit.horizontalOverflow}px!`);
      pass = false;
    }
    if (cfg.mobile && !audit.mobileVisible) {
      console.error('  FAIL: Mobile HTML view expected but not visible!');
      pass = false;
    }
    if (!cfg.mobile && !audit.desktopVisible) {
      console.error('  FAIL: Desktop SVG view expected but not visible!');
      pass = false;
    }

    console.log(`  Target Found: ${audit.found}`);
    console.log(`  Layout Mode: ${audit.isMobile ? 'Mobile Responsive' : 'Desktop SVG'}`);
    console.log(`  Diagram Dimensions: ${audit.cardWidth}x${audit.cardHeight}px`);
    console.log(`  Horizontal Overflow: ${audit.horizontalOverflow}px`);
    console.log(`  Structural Details:`, audit.details);
    console.log(`  Status: ${pass ? 'PASS' : 'FAIL'}`);

    results.push({ config: cfg.name, pass, audit });

    // Scroll cleanly to show Section 2.2.5 heading and diagram
    await cdp.eval(`
      (() => {
        const h3 = document.querySelector('#topic-2-2-bc-vs-dr');
        if (h3) {
          h3.scrollIntoView({ block: 'start' });
        } else {
          const card = document.querySelector('[data-diagram="bcVsDrScope"]');
          if (card) card.scrollIntoView({ block: 'start' });
        }
      })()
    `);
    await new Promise(r => setTimeout(r, 350));

    // Capture full visible viewport showing Section 2.2.5
    const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });

    const shotFileName = `after-${cfg.name}-bcVsDrScope.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, shotFileName), Buffer.from(shot.data, 'base64'));
    manifest.push({
      config: cfg.name,
      file: shotFileName,
      width: cfg.width,
      height: cfg.height,
      theme: cfg.theme,
      mode: cfg.mobile ? 'mobile-html' : 'desktop-svg'
    });
  }

  // Write manifest
  fs.writeFileSync(
    path.join(ARTIFACTS_DIR, 'manifest.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), manifest, results }, null, 2),
    'utf8'
  );
  console.log(`\n[3] Manifest and ${manifest.length} screenshots written to: ${ARTIFACTS_DIR}`);

  cdp.close();
  chromeProcess.kill();
  server.close();

  const allPassed = results.every(r => r.pass);
  console.log(`\n=== Verification Finished: ${allPassed ? 'ALL CONFIGURATIONS PASSED (100%)' : 'FAILURES DETECTED'} ===`);
  if (!allPassed) process.exit(1);
}

runCapture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
