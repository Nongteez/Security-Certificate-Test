/**
 * tools/verify-domain2-phase6-evidence.mjs
 *
 * Comprehensive Phase 6 Browser Verification Suite for Domain 2 Remediation.
 * Tests across 1366x768, 1920x1080, 390x844, 375x812, and 768px tablet in Light & Dark.
 */

import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const ROOT = path.resolve('.');
const PORT = 5202;
const CHROME_PORT = 9482;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-remediation');

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
    return res.result.value;
  }
}

async function run() {
  console.log('=== Task 128 Phase 6: Domain 2 Browser Verification ===\n');
  const server = await startServer();
  console.log(`[1] Test server listening on http://127.0.0.1:${PORT}`);

  const userDataDir = path.resolve('scratch/chrome-phase6-profile');
  fs.mkdirSync(userDataDir, { recursive: true });

  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${CHROME_PORT}`,
    `--user-data-dir=${userDataDir}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'about:blank'
  ], { stdio: 'ignore' });

  await new Promise(r => setTimeout(r, 1200));

  try {
    const listRes = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/list`);
    const pages = await listRes.json();
    const wsUrl = pages[0].webSocketDebuggerUrl;

    const cdp = new CDPClient(wsUrl);
    await cdp.connect();
    console.log('[2] Chrome CDP connected');

    await cdp.send('Page.enable');
    await cdp.send('DOM.enable');
    await cdp.send('CSS.enable');

    await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
    await new Promise(r => setTimeout(r, 1200));

    // Mount Reading Notes and select Domain 2
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

    // Wait for reading view to be fully mounted
    let ready = false;
    for (let i = 0; i < 20; i++) {
      const isReady = await cdp.eval(`(() => {
        const title = document.querySelector('.reading-article-header .reading-article-title');
        const d2Active = document.querySelector('.reading-nav-group[data-domain-id="2"].active');
        return Boolean(title && d2Active);
      })()`);
      if (isReady) {
        ready = true;
        break;
      }
      // Re-trigger navigation steps if not ready
      await cdp.eval(`(() => {
        const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
        if (certCard) certCard.click();
        const readBtn = document.querySelector('.btn-reading-entry');
        if (readBtn) readBtn.click();
        const d2Btn = document.querySelector('[data-select-domain="2"]');
        if (d2Btn) d2Btn.click();
      })()`);
      await new Promise(r => setTimeout(r, 500));
    }
    console.log('[3] Reading view ready:', ready);

    const viewports = [
      { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
      { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
      { name: '1920x1080-dark', width: 1920, height: 1080, theme: 'dark', mobile: false },
      { name: '1920x1080-light', width: 1920, height: 1080, theme: 'light', mobile: false },
      { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true },
      { name: '390x844-light', width: 390, height: 844, theme: 'light', mobile: true },
      { name: '375x812-dark', width: 375, height: 812, theme: 'dark', mobile: true },
      { name: '375x812-light', width: 375, height: 812, theme: 'light', mobile: true },
      { name: '768x1024-dark', width: 768, height: 1024, theme: 'dark', mobile: false },
      { name: '768x1024-light', width: 768, height: 1024, theme: 'light', mobile: false }
    ];

    const sectionsToCapture = [
      { id: 'top-hero', sel: '.reading-article-header', name: '01-top-header' },
      { id: 'sec-2-1-grc', sel: '#obj-2-1', name: '02-obj-2-1-grc' },
      { id: 'sec-2-1-grc-list', sel: '#obj-2-1 ol', name: '03-grc-ordered-list-123' },
      { id: 'sec-2-2-bc-dr', sel: '.reading-diagram-card[data-diagram="bcVsDrScope"]', name: '04-bc-vs-dr-concentric' },
      { id: 'sec-2-2-rto-rpo', sel: '.reading-diagram-card[data-diagram="rtoRpoTimeline"]', name: '05-rto-rpo-timeline' },
      { id: 'sec-2-3-awareness', sel: '#obj-2-3', name: '06-obj-2-3-awareness' },
      { id: 'sec-2-4-measurement', sel: '.reading-diagram-card[data-diagram="effectivenessHierarchy"]', name: '07-measurement-6part' },
      { id: 'sec-2-4-matrix', sel: '#topic-2-4-memory-aid', name: '08-keyword-trigger-matrix' },
      { id: 'domain-review', sel: '#domain-2-review', name: '09-domain-review' },
      { id: 'card-12', sel: '.reading-distinction-card:nth-child(12)', name: '10-card-12-report-triad' }
    ];

    const manifest = [];
    const evaluationResults = [];

    for (const vp of viewports) {
      console.log(`\n--- Auditing Viewport: ${vp.name} (${vp.width}x${vp.height}, theme: ${vp.theme}) ---`);
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.mobile
      });

      await cdp.eval(`(() => {
        document.documentElement.setAttribute('data-theme', '${vp.theme}');
        if ('${vp.theme}' === 'light') {
          document.body.classList.add('light-theme');
          document.body.classList.remove('dark-theme');
        } else {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
        }
      })()`);
      await new Promise(r => setTimeout(r, 250));

      // Viewport-specific DOM & layout audit
      const vpAudit = await cdp.eval(`(() => {
        // 1. Horizontal page overflow
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const pageOverflow = docWidth > winWidth + 1;

        // 2. Headings audit
        const allH1s = Array.from(document.querySelectorAll('h1'));
        const bodyH1s = Array.from(document.querySelectorAll('.reading-body h1'));

        // 3. Comments audit in DOM
        const bodyHtml = document.body.innerHTML;
        const hasVisibleComment = bodyHtml.includes('&lt;!--') || bodyHtml.includes('--&gt;');

        // 4. Ordered list in Section 2.1.1 (GRC 3 Pillars)
        const sec21Ol = document.querySelector('#obj-2-1 ol');
        const sec21Lis = sec21Ol ? Array.from(sec21Ol.children).filter(el => el.tagName === 'LI') : [];
        const sec21ItemCount = sec21Lis.length;

        // 5. Diagram responsive dual presentation
        const diagCards = Array.from(document.querySelectorAll('.reading-diagram-card'));
        const diagramReports = diagCards.map(card => {
          const key = card.getAttribute('data-diagram');
          const desktop = card.querySelector('.reading-diag-desktop');
          const mobile = card.querySelector('.reading-diag-mobile');
          const desktopDisplay = desktop ? window.getComputedStyle(desktop).display : null;
          const mobileDisplay = mobile ? window.getComputedStyle(mobile).display : null;
          return { key, desktopDisplay, mobileDisplay };
        });

        // 6. Math formula nowrap verification
        const formulas = Array.from(document.querySelectorAll('.reading-math-formula')).map(f => {
          const style = window.getComputedStyle(f);
          return {
            text: f.textContent.trim(),
            whiteSpace: style.whiteSpace,
            display: style.display
          };
        });

        return {
          winWidth,
          docWidth,
          pageOverflow,
          h1Count: allH1s.length,
          bodyH1Count: bodyH1s.length,
          hasVisibleComment,
          sec21ItemCount,
          diagramReports,
          formulaCount: formulas.length,
          allFormulasNowrap: formulas.every(f => f.whiteSpace === 'nowrap')
        };
      })()`);

      console.log(`  Page overflow: ${vpAudit.pageOverflow ? 'FAIL (overflowing)' : 'PASS (0 overflow)'} (scrollWidth=${vpAudit.docWidth}, innerWidth=${vpAudit.winWidth})`);
      console.log(`  H1 count: ${vpAudit.h1Count} (Body H1s: ${vpAudit.bodyH1Count})`);
      console.log(`  Sec 2.1.1 GRC list items: ${vpAudit.sec21ItemCount} in single <ol>`);
      console.log(`  Math formulas checked: ${vpAudit.formulaCount} (all nowrap: ${vpAudit.allFormulasNowrap})`);

      assert.equal(vpAudit.pageOverflow, false, `Page must not overflow in ${vp.name}`);
      assert.equal(vpAudit.h1Count, 1, `Must have exactly 1 H1 in ${vp.name}`);
      assert.equal(vpAudit.bodyH1Count, 0, `Must have 0 H1s in article body in ${vp.name}`);
      assert.equal(vpAudit.hasVisibleComment, false, `Must have 0 visible comments in ${vp.name}`);
      assert.equal(vpAudit.sec21ItemCount, 3, `Sec 2.1.1 must have 3 list items in single <ol> in ${vp.name}`);
      assert.equal(vpAudit.allFormulasNowrap, true, `All math formulas must have white-space: nowrap in ${vp.name}`);

      // Verify responsive display rules
      if (vp.width <= 768) {
        // Mobile/tablet breakpoint
        for (const dr of vpAudit.diagramReports) {
          assert.equal(dr.desktopDisplay, 'none', `Desktop SVG must be display: none at ${vp.width}px for ${dr.key}`);
          assert.equal(dr.mobileDisplay, 'flex', `Mobile card stack must be display: flex at ${vp.width}px for ${dr.key}`);
        }
        console.log(`  ✓ Responsive verification: Desktop SVGs display=none, Mobile cards display=flex`);
      } else {
        for (const dr of vpAudit.diagramReports) {
          assert.equal(dr.desktopDisplay, 'flex', `Desktop SVG must be display: flex at ${vp.width}px for ${dr.key}`);
          assert.equal(dr.mobileDisplay, 'none', `Mobile card stack must be display: none at ${vp.width}px for ${dr.key}`);
        }
        console.log(`  ✓ Responsive verification: Desktop SVGs display=flex, Mobile cards display=none`);
      }

      evaluationResults.push({ viewport: vp.name, audit: vpAudit });

      // Capture screenshots for manifest
      for (const sec of sectionsToCapture) {
        await cdp.eval(`(() => {
          const el = document.querySelector('${sec.sel}');
          if (el) el.scrollIntoView({ block: 'center' });
        })()`);
        await new Promise(r => setTimeout(r, 150));

        const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
        const filename = `${sec.name}-${vp.name}.png`;
        const outPath = path.join(ARTIFACTS_DIR, filename);
        fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));

        manifest.push({
          file: filename,
          section: sec.name,
          viewport: vp.name,
          width: vp.width,
          height: vp.height,
          theme: vp.theme
        });
      }
    }

    // Write manifest
    fs.writeFileSync(path.join(ARTIFACTS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`\n[3] Successfully captured ${manifest.length} screenshots. Manifest written to ${path.join(ARTIFACTS_DIR, 'manifest.json')}`);

    console.log('\n=== ALL PHASE 6 BROWSER CHECKS PASSED (10/10 Viewport/Theme Configurations) ===');
  } finally {
    chromeProc.kill();
    server.close();
  }
}

run().catch(err => {
  console.error('Phase 6 verification failed:', err);
  process.exit(1);
});
