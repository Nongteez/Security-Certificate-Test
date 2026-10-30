/**
 * tools/audit-domain2-cross-domain.mjs
 *
 * Comprehensive Read-Only Browser CDP Audit for Domain 2 Reading Notes
 * testing against the full catalog of Domain 1 historical defect patterns.
 */

import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5199;
const CHROME_PORT = 9475;
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

async function runAudit() {
  console.log('=== Domain 2 Cross-Domain Quality Audit (Browser CDP) ===\n');

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

  console.log('[3] Domain 2 reading notes mounted.');

  // Configurations to audit
  const viewports = [
    { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
    { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
    { name: '1920x1080-dark', width: 1920, height: 1080, theme: 'dark', mobile: false },
    { name: '1920x1080-light', width: 1920, height: 1080, theme: 'light', mobile: false },
    { name: '768x1024-dark', width: 768, height: 1024, theme: 'dark', mobile: true },
    { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true },
    { name: '390x844-light', width: 390, height: 844, theme: 'light', mobile: true },
    { name: '375x812-dark', width: 375, height: 812, theme: 'dark', mobile: true },
    { name: '375x812-light', width: 375, height: 812, theme: 'light', mobile: true }
  ];

  const auditResults = {
    viewports: {},
    deepInspection: {}
  };

  for (const vp of viewports) {
    console.log(`\n--- Auditing ${vp.name} (${vp.width}x${vp.height}, theme: ${vp.theme}) ---`);

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
    await new Promise(r => setTimeout(r, 300));

    // Audit metrics in this viewport
    const vpData = await cdp.eval(`(() => {
      const docScrollWidth = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const hasHorizontalOverflow = docScrollWidth > windowWidth;

      // Headings check
      const h1s = Array.from(document.querySelectorAll('.reading-article h1, .reading-article .reading-article-title')).map(h => h.innerText.trim());
      const allH1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim());

      // Raw comments and delimiter check
      const articleHtml = document.querySelector('.reading-article')?.innerHTML || '';
      const hasRawComment = articleHtml.includes('<!--');
      const hasSeparator = /={5,}/.test(articleHtml);

      // Emoji check
      const emojiRegex = /[\\u{1F300}-\\u{1F9FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/u;
      const hasEmoji = emojiRegex.test(articleHtml);

      // Diagrams check
      const diagrams = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'].map(id => {
        const card = document.querySelector('.reading-diagram-card[data-diagram="' + id + '"]');
        if (!card) return { id, exists: false };

        const desktop = card.querySelector('.reading-diag-desktop');
        const mobile = card.querySelector('.reading-diag-mobile');
        const isDesktopVisible = desktop && window.getComputedStyle(desktop).display !== 'none';
        const isMobileVisible = mobile && window.getComputedStyle(mobile).display !== 'none';

        const svg = desktop ? desktop.querySelector('svg') : null;
        let svgBox = null;
        if (svg) {
          const rect = svg.getBoundingClientRect();
          svgBox = { width: Math.round(rect.width), height: Math.round(rect.height) };
        }

        const cardRect = card.getBoundingClientRect();
        return {
          id,
          exists: true,
          cardWidth: Math.round(cardRect.width),
          isDesktopVisible,
          isMobileVisible,
          svgBox
        };
      });

      // Table columns & word breaking
      const tables = Array.from(document.querySelectorAll('.reading-article table')).map((t, idx) => {
        const rect = t.getBoundingClientRect();
        const ths = Array.from(t.querySelectorAll('th')).map(th => th.innerText.trim());
        const multilineEnTerms = Array.from(t.querySelectorAll('.reading-bilingual-term .reading-term-en')).filter(el => {
          return el.clientHeight > 25; // More than 1 line of height
        }).map(el => el.innerText.trim());

        return {
          tableIndex: idx + 1,
          width: Math.round(rect.width),
          headers: ths,
          multilineEnTerms
        };
      });

      // Math symbols check
      const mathFormulas = Array.from(document.querySelectorAll('.reading-math-formula')).map(el => el.innerText.trim());
      const hasRtoMtd = articleHtml.includes('RTO ≤ MTD') || articleHtml.includes('RTO \\le MTD');
      const hasDrSubsetBc = articleHtml.includes('DR ⊂ BC') || articleHtml.includes('DR \\subset BC');

      return {
        hasHorizontalOverflow,
        overflowDelta: docScrollWidth - windowWidth,
        h1s,
        allH1s,
        hasRawComment,
        hasSeparator,
        hasEmoji,
        diagrams,
        tables,
        mathFormulas,
        hasRtoMtd,
        hasDrSubsetBc
      };
    })()`);

    auditResults.viewports[vp.name] = vpData;

    console.log(`  Horizontal overflow: ${vpData.hasHorizontalOverflow ? `YES (+${vpData.overflowDelta}px)` : 'NO (0px)'}`);
    console.log(`  Visible H1 count: ${vpData.h1s.length} (${vpData.h1s.join('; ')})`);
    console.log(`  Raw comments in DOM: ${vpData.hasRawComment ? 'YES' : 'NONE'}`);
    console.log(`  Separators in DOM: ${vpData.hasSeparator ? 'YES' : 'NONE'}`);
    console.log(`  Emojis in DOM: ${vpData.hasEmoji ? 'YES' : 'NONE'}`);
    console.log(`  Diagrams: ${vpData.diagrams.map(d => `${d.id} [desk:${d.isDesktopVisible}, mob:${d.isMobileVisible}]`).join(', ')}`);
  }

  // Deep inspection on Desktop 1366
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1366,
    height: 768,
    deviceScaleFactor: 2,
    mobile: false
  });
  await cdp.eval(`(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  })()`);
  await new Promise(r => setTimeout(r, 300));

  const deepData = await cdp.eval(`(() => {
    // 1. Objectives coverage
    const objectives = Array.from(document.querySelectorAll('.reading-objective-section')).map(sec => {
      const h2 = sec.querySelector('h2');
      const id = sec.id;
      const h3s = Array.from(sec.querySelectorAll('h3')).map(h3 => ({ id: h3.id, title: h3.innerText.trim() }));
      return { id, title: h2 ? h2.innerText.trim() : null, topicCount: h3s.length, topics: h3s };
    });

    // 2. Distinction Cards
    const distinctionCards = Array.from(document.querySelectorAll('.reading-distinction-card')).map(card => {
      const title = card.querySelector('.reading-distinction-header')?.innerText.trim();
      const terms = Array.from(card.querySelectorAll('.reading-distinction-term')).map(t => t.innerText.trim());
      return { title, termCount: terms.length, terms };
    });

    // 3. Review Scenarios
    const scenarioCards = Array.from(document.querySelectorAll('.reading-scenario-card')).map(sc => {
      const num = sc.querySelector('.reading-scenario-num')?.innerText.trim();
      const title = sc.querySelector('.reading-scenario-title')?.innerText.trim();
      const hasAnswer = sc.querySelector('.reading-scenario-answer') !== null;
      return { num, title, hasAnswer };
    });

    // 4. Spacing and Alignment
    const lead = document.querySelector('.reading-lead');
    const firstH2 = document.querySelector('.reading-objective-section h2');
    const leadRect = lead ? lead.getBoundingClientRect() : null;
    const h2Rect = firstH2 ? firstH2.getBoundingClientRect() : null;

    // 5. Contrast measurements in Dark theme
    function getContrast(fg, bg) {
      function lum(r, g, b) {
        const a = [r, g, b].map(v => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      }
      function parse(rgbStr) {
        const m = rgbStr.match(/\\d+/g);
        return m ? [parseInt(m[0]), parseInt(m[1]), parseInt(m[2])] : [255, 255, 255];
      }
      const c1 = parse(fg);
      const c2 = parse(bg);
      const l1 = lum(c1[0], c1[1], c1[2]);
      const l2 = lum(c2[0], c2[1], c2[2]);
      const brightest = Math.max(l1, l2);
      const darkest = Math.min(l1, l2);
      return Math.round(((brightest + 0.05) / (darkest + 0.05)) * 100) / 100;
    }

    const contrastSamples = [];
    const elementsToAudit = [
      { sel: '.reading-article-title', name: 'Article Title' },
      { sel: '.reading-lead', name: 'Lead Paragraph' },
      { sel: '.reading-objective-section h2', name: 'Objective H2' },
      { sel: '.reading-concept-heading', name: 'Concept H5' },
      { sel: '.reading-diagram-title', name: 'Diagram Title' },
      { sel: '.reading-distinction-term', name: 'Distinction Term' },
      { sel: '.reading-scenario-title', name: 'Scenario Title' },
      { sel: '.reading-table th', name: 'Table Header' },
      { sel: '.reading-term-en strong', name: 'Bilingual Term EN' },
      { sel: '.reading-term-th', name: 'Bilingual Term TH' }
    ];

    for (const item of elementsToAudit) {
      const el = document.querySelector(item.sel);
      if (el) {
        const cs = window.getComputedStyle(el);
        const cr = getContrast(cs.color, 'rgb(15, 23, 42)'); // Dark theme bg #0f172a
        contrastSamples.push({ name: item.name, color: cs.color, contrastAgainstBg: cr, passAA: cr >= 4.5 });
      }
    }

    return {
      objectives,
      distinctionCardsCount: distinctionCards.length,
      distinctionCards,
      scenarioCardsCount: scenarioCards.length,
      scenarioCards,
      leadWidth: leadRect ? Math.round(leadRect.width) : null,
      contrastSamples
    };
  })()`);

  auditResults.deepInspection = deepData;

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-results.json'), JSON.stringify(auditResults, null, 2));
  console.log(`\n[4] Full audit data saved in: ${path.join(ARTIFACTS_DIR, 'audit-results.json')}`);

  cdp.close();
  chromeProcess.kill();
  server.close();
  console.log('=== Audit Execution Completed Successfully ===');
}

runAudit().catch(err => {
  console.error('Audit Script Failed:', err);
  process.exit(1);
});

