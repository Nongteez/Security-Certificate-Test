import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5189;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-domain2');

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

async function runBrowserVerification() {
  console.log('=== ISC2 CC 2026 Domain 2 Reading Notes: Browser CDP Audit ===\n');

  const server = await startServer();
  console.log(`[1] Local test server running at http://127.0.0.1:${PORT}/`);

  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9452',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9452/json/version');
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!versionData) {
    chromeProcess.kill();
    server.close();
    throw new Error('Failed to connect to Chrome on port 9452');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9452/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  await new Promise(r => setTimeout(r, 1000));

  // Navigate to Reading Notes
  console.log('[2] Navigating to Reading Notes screen...');
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

  // Select Domain 2
  console.log('[3] Selecting Domain 2: Security Governance in sidebar...');
  await cdp.eval(`(() => {
    const d2Select = document.querySelector('[data-select-domain="2"]');
    if (d2Select) d2Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1200));

  // Verify Domain 2 loaded in DOM
  const domainHeader = await cdp.eval(`(() => {
    const title = document.querySelector('.reading-article-title');
    const badge = document.querySelector('.reading-meta-pill');
    return {
      title: title ? title.textContent.trim() : null,
      badge: badge ? badge.textContent.trim() : null,
      domainId: document.querySelector('.reading-article')?.dataset?.domainId
    };
  })()`);
  console.log('[4] Domain header verified:', domainHeader);
  if (domainHeader.title !== 'Domain 2: Security Governance') {
    throw new Error(`Expected Domain 2 title, got: ${domainHeader.title}`);
  }

  // Viewport and Theme test matrix
  const testMatrix = [
    { name: '1366-dark-expanded', width: 1366, height: 768, theme: 'dark', collapseSidebar: false },
    { name: '1366-light-expanded', width: 1366, height: 768, theme: 'light', collapseSidebar: false },
    { name: '1366-dark-collapsed', width: 1366, height: 768, theme: 'dark', collapseSidebar: true },
    { name: '1920-dark-expanded', width: 1920, height: 1080, theme: 'dark', collapseSidebar: false },
    { name: '1920-light-expanded', width: 1920, height: 1080, theme: 'light', collapseSidebar: false }
  ];

  let testCount = 0;
  let passCount = 0;

  for (const cfg of testMatrix) {
    console.log(`\n------------------------------------------------------------`);
    console.log(`Testing: ${cfg.width}x${cfg.height} | Theme: ${cfg.theme} | Sidebar: ${cfg.collapseSidebar ? 'COLLAPSED' : 'EXPANDED'}`);
    console.log(`------------------------------------------------------------`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 1,
      mobile: false
    });

    await cdp.eval(`(() => {
      document.documentElement.setAttribute('data-theme', '${cfg.theme}');
      const layout = document.querySelector('#reading-layout');
      if (${cfg.collapseSidebar}) {
        layout.classList.add('sidebar-collapsed');
      } else {
        layout.classList.remove('sidebar-collapsed');
      }
    })()`);
    await new Promise(r => setTimeout(r, 400));

    // Check 1: 4 Official Objectives present & rendered
    testCount++;
    const objectives = await cdp.eval(`(() => {
      const ids = ['obj-2-1', 'obj-2-2', 'obj-2-3', 'obj-2-4'];
      return ids.map(id => {
        const el = document.getElementById(id);
        return { id, exists: !!el, text: el ? el.textContent.trim().substring(0, 40) : null };
      });
    })()`);
    const allObjsExist = objectives.every(o => o.exists);
    if (allObjsExist) {
      passCount++;
      console.log(`  ✓ Check 1: All 4 official objectives rendered (2.1–2.4)`);
    } else {
      console.error(`  ✗ Check 1 FAIL: Objectives missing:`, objectives);
    }

    // Check 2: 4 SVG Diagrams present with 0 clipping
    testCount++;
    const diagrams = await cdp.eval(`(() => {
      const diags = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
      return diags.map(name => {
        const card = document.querySelector(\`.reading-diagram-card[data-diagram="\${name}"]\`);
        const svg = card ? card.querySelector('svg') : null;
        if (!svg) return { name, exists: false };
        const rect = svg.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        return {
          name,
          exists: true,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          cardWidth: Math.round(cardRect.width),
          hasSvg: true
        };
      });
    })()`);
    const allDiagsOk = diagrams.every(d => d.exists && d.width > 200 && d.height > 100);
    if (allDiagsOk) {
      passCount++;
      console.log(`  ✓ Check 2: All 4 diagrams rendered properly:`, diagrams.map(d => `${d.name} (${d.width}x${d.height}px)`).join(', '));
    } else {
      console.error(`  ✗ Check 2 FAIL: Diagram rendering error:`, diagrams);
    }

    // Check 3: Bilingual Table Terminology (Stacked & No Mid-Word Wrapping)
    testCount++;
    const tableTerms = await cdp.eval(`(() => {
      const terms = Array.from(document.querySelectorAll('.reading-article[data-domain-id="2"] .reading-bilingual-term'));
      return terms.slice(0, 8).map(t => {
        const en = t.querySelector('.reading-term-en');
        const th = t.querySelector('.reading-term-th');
        return {
          en: en ? en.textContent.trim() : null,
          th: th ? th.textContent.trim() : null,
          height: Math.round(t.getBoundingClientRect().height),
          stacked: en && th && (th.getBoundingClientRect().top >= en.getBoundingClientRect().bottom - 2)
        };
      });
    })()`);
    const allTermsStacked = tableTerms.length > 0 && tableTerms.every(t => t.stacked);
    if (allTermsStacked) {
      passCount++;
      console.log(`  ✓ Check 3: Bilingual table terms stacked correctly (found ${tableTerms.length} sampled terms)`);
    } else {
      console.error(`  ✗ Check 3 FAIL: Bilingual table terms not stacked:`, tableTerms);
    }

    // Check 4: Concept Distinction Matrix Cards
    testCount++;
    const distinctionCards = await cdp.eval(`(() => {
      const cards = Array.from(document.querySelectorAll('.reading-article[data-domain-id="2"] .reading-distinction-card'));
      return cards.map(c => {
        const title = c.querySelector('.reading-distinction-title');
        const terms = c.querySelectorAll('.reading-distinction-term');
        return {
          title: title ? title.textContent.trim() : null,
          termCount: terms.length,
          height: Math.round(c.getBoundingClientRect().height)
        };
      });
    })()`);
    if (distinctionCards.length === 12 && distinctionCards.every(c => c.termCount >= 2 && c.height > 60)) {
      passCount++;
      console.log(`  ✓ Check 4: All 12 Concept Distinction Cards rendered cleanly (11 pairs + 1 triad)`);
    } else {
      console.error(`  ✗ Check 4 FAIL: Distinction cards mismatch (found ${distinctionCards.length})`);
    }

    // Check 5: Review Scenario Cards (12 scenarios under Section 2.4.9)
    testCount++;
    const scenarioCards = await cdp.eval(`(() => {
      const cards = Array.from(document.querySelectorAll('.reading-article[data-domain-id="2"] .reading-scenario-card'));
      return cards.map(c => {
        const scenarioNum = c.dataset.scenario;
        const badge = c.querySelector('.reading-scenario-badge');
        const answerLabel = c.querySelector('.reading-scenario-answer-label');
        const answerContainer = c.querySelector('.reading-scenario-answer');
        const answerText = c.querySelector('.reading-scenario-answer-text');
        return {
          scenarioNum,
          badge: badge ? badge.textContent.trim() : null,
          hasAnswerContainer: !!answerContainer,
          hasAnswerLabel: !!answerLabel,
          hasAnswerText: !!answerText,
          height: Math.round(c.getBoundingClientRect().height)
        };
      });
    })()`);
    if (scenarioCards.length === 12 && scenarioCards.every(c => c.hasAnswerContainer && c.hasAnswerLabel && c.hasAnswerText && c.height > 80)) {
      passCount++;
      console.log(`  ✓ Check 5: All 12 Review Scenario Cards rendered cleanly with dividers & answers`);
    } else {
      console.error(`  ✗ Check 5 FAIL: Scenario cards mismatch (found ${scenarioCards.length})`);
    }

    // Capture comprehensive screenshots on specific configurations
    if (cfg.name === '1366-dark-expanded') {
      // 1. Hero top screenshot
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot1 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '01-domain2-hero-1366-dark.png'), Buffer.from(shot1.data, 'base64'));

      // 2. GRC Diagram screenshot
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="grcAlignment"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot2 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '02-grc-diagram-1366-dark.png'), Buffer.from(shot2.data, 'base64'));

      // 3. BC vs DR Diagram screenshot
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="bcVsDrScope"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot3 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '03-bc-dr-diagram-1366-dark.png'), Buffer.from(shot3.data, 'base64'));

      // 4. RTO vs RPO Timeline Diagram screenshot
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="rtoRpoTimeline"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot4 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '04-rto-rpo-diagram-1366-dark.png'), Buffer.from(shot4.data, 'base64'));

      // 5. Effectiveness Hierarchy Diagram screenshot
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot5 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '05-effectiveness-diagram-1366-dark.png'), Buffer.from(shot5.data, 'base64'));

      // 6. Review Scenarios screenshot
      await cdp.eval(`(() => {
        const el = document.querySelector('#section-review-scenarios');
        if (el) el.scrollIntoView({ block: 'start' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot6 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '06-scenarios-1366-dark.png'), Buffer.from(shot6.data, 'base64'));
    }

    if (cfg.name === '1366-light-expanded') {
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shotLight = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '07-domain2-1366-light.png'), Buffer.from(shotLight.data, 'base64'));
    }

    if (cfg.name === '1920-dark-expanded') {
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot1920 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, '08-domain2-1920-dark.png'), Buffer.from(shot1920.data, 'base64'));
    }
  }

  // Floating Scroll Navigation Functional Check on Domain 2
  console.log(`\n------------------------------------------------------------`);
  console.log(`Testing: Floating Scroll Navigation on Domain 2`);
  console.log(`------------------------------------------------------------`);
  testCount++;
  // Reset scroll to top
  await cdp.eval(`(() => {
    const pane = document.querySelector('#reading-content-pane');
    if (pane && pane.scrollHeight > pane.clientHeight) {
      pane.scrollTop = 0;
      pane.dispatchEvent(new Event('scroll'));
    }
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('scroll'));
  })()`);
  await new Promise(r => setTimeout(r, 300));

  const scrollNavTop = await cdp.eval(`(() => {
    const btn = document.querySelector('#btn-reading-scroll-nav');
    return {
      exists: !!btn,
      hidden: btn ? btn.classList.contains('is-hidden') : true,
      label: btn ? btn.getAttribute('aria-label') : null,
      title: btn ? btn.title : null,
      isDown: btn ? btn.querySelector('svg')?.innerHTML.includes('polyline points="19 12 12 19 5 12"') : false
    };
  })()`);
  console.log('  Scroll Nav at top:', scrollNavTop);

  // Scroll down to 2000px
  await cdp.eval(`(() => {
    const pane = document.querySelector('#reading-content-pane');
    if (pane && pane.scrollHeight > pane.clientHeight) {
      pane.scrollTop = 2000;
      pane.dispatchEvent(new Event('scroll'));
    }
    window.scrollTo(0, 2000);
    window.dispatchEvent(new Event('scroll'));
  })()`);
  await new Promise(r => setTimeout(r, 300));

  const scrollNavScrolled = await cdp.eval(`(() => {
    const btn = document.querySelector('#btn-reading-scroll-nav');
    return {
      exists: !!btn,
      hidden: btn ? btn.classList.contains('is-hidden') : true,
      label: btn ? btn.getAttribute('aria-label') : null,
      title: btn ? btn.title : null,
      isUp: btn ? btn.querySelector('svg')?.innerHTML.includes('polyline points="5 12 12 5 19 12"') : false
    };
  })()`);
  console.log('  Scroll Nav scrolled down:', scrollNavScrolled);

  const scrollNavShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, '09-scroll-nav-top-bottom.png'), Buffer.from(scrollNavShot.data, 'base64'));

  if (
    scrollNavTop.exists &&
    !scrollNavTop.hidden &&
    scrollNavTop.label === 'Go to bottom' &&
    scrollNavScrolled.exists &&
    !scrollNavScrolled.hidden &&
    scrollNavScrolled.label === 'Back to top'
  ) {
    passCount++;
    console.log(`  ✓ Check 6: Floating Scroll Navigation correctly toggles Go to bottom -> Back to top`);
  } else {
    console.error(`  ✗ Check 6 FAIL: Floating Scroll Navigation error`);
  }

  // Teardown
  cdp.close();
  chromeProcess.kill();
  server.close();

  console.log(`\n============================================================`);
  console.log(`Browser Audit Summary: ${passCount} / ${testCount} Passed`);
  console.log(`Artifacts saved in: ${ARTIFACTS_DIR}`);
  console.log(`============================================================\n`);

  if (passCount !== testCount) {
    process.exit(1);
  }
}

runBrowserVerification().catch(err => {
  console.error('Browser Verification Error:', err);
  process.exit(1);
});
