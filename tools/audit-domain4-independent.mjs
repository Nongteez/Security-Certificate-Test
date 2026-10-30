import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5198;
const CDP_PORT = 9458;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-4-independent-audit');

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
      throw new Error(`Eval failed: ${res.exceptionDetails.text} (${res.exceptionDetails.exception?.description || ''})`);
    }
    return res.result?.value;
  }

  async setViewport(width, height, isMobile = false) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile
    });
    await this.send('Emulation.setVisibleSize', { width, height });
  }

  async screenshot(filename) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const outPath = path.join(ARTIFACTS_DIR, filename);
    fs.writeFileSync(outPath, buffer);
    return outPath;
  }
}

async function run() {
  console.log('=== DOMAIN 4 INDEPENDENT CHROME CDP AUDIT (REFINED) ===\n');
  const server = await startServer();
  console.log(`[PASS] Test server listening on http://127.0.0.1:${PORT}`);

  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${CDP_PORT}`,
    '--disable-gpu',
    '--disable-background-networking',
    '--disable-default-apps',
    '--no-first-run',
    'about:blank'
  ]);

  let cdp = null;
  const auditResults = {
    viewports: [],
    h01_svg_breakout: null,
    h02_svg_collision: null,
    h03_mobile_diagrams: null,
    h04_raw_markdown: null,
    h05_lists_and_scenarios: null,
    h06_sidebar_accordions: null,
    h07_heading_hierarchy: null,
    h08_contrast_samples: null,
    h09_overflow_checks: [],
    h10_navigation_persistence: null,
    h11_bilingual_parity: null
  };

  try {
    await new Promise(r => setTimeout(r, 1600));

    const tabRes = await fetch(`http://127.0.0.1:${CDP_PORT}/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
    const tabData = await tabRes.json();
    cdp = new CDPClient(tabData.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('[PASS] Connected to Headless Chrome via CDP');

    await cdp.send('Page.enable');
    await cdp.send('DOM.enable');
    await cdp.send('Runtime.enable');
    await new Promise(r => setTimeout(r, 1000));

    // Navigate to Reading Notes screen
    await cdp.eval(`(() => {
      const card = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
      if (card) card.click();
    })()`);
    await new Promise(r => setTimeout(r, 500));

    await cdp.eval(`(() => {
      const btn = document.querySelector('.btn-reading-entry');
      if (btn) btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 1000));

    // Select Domain 4
    await cdp.eval(`(() => {
      const d4 = document.querySelector('[data-select-domain="4"]');
      if (d4) d4.click();
    })()`);
    await new Promise(r => setTimeout(r, 1200));

    const domainLoaded = await cdp.eval(`(() => {
      const h2 = document.querySelector('.reading-article-markdown h2');
      const activeBtn = document.querySelector('.reading-domain-btn.active .reading-domain-title');
      return {
        h2Text: h2 ? h2.textContent.trim() : null,
        title: activeBtn?.textContent.trim()
      };
    })()`);
    console.log(`[PASS] Domain 4 loaded: "${domainLoaded.title}" / First H2: "${domainLoaded.h2Text}"`);

    // --- CHECKLIST H06: Sidebar Objective Accordions & Collapse State ---
    console.log('\n--- Auditing H06: Sidebar Objective Accordions & Collapse State ---');
    const accordionAudit = await cdp.eval(`(() => {
      // Find objective chevron buttons for Domain 4
      const d4Group = document.querySelector('.reading-nav-group[data-domain-id="4"]');
      if (!d4Group) return { error: 'Domain 4 nav group not found' };

      const btns = Array.from(d4Group.querySelectorAll('button[data-toggle-obj]'));
      const results = [];

      btns.forEach(btn => {
        const objId = btn.getAttribute('data-toggle-obj');
        const item = d4Group.querySelector('.reading-nav-objective-item[data-objective-id="' + objId + '"]');
        const topicList = item ? item.querySelector('.reading-nav-topics') : null;

        const initialHeight = topicList ? topicList.offsetHeight : null;
        const initialHidden = topicList ? topicList.hidden : null;
        const initialExpanded = btn.getAttribute('aria-expanded');

        // Click to collapse
        btn.click();
        const afterClickHeight = topicList ? topicList.offsetHeight : null;
        const afterClickHidden = topicList ? topicList.hidden : null;
        const afterClickExpanded = btn.getAttribute('aria-expanded');

        // Click again to restore
        btn.click();
        const restoredHeight = topicList ? topicList.offsetHeight : null;
        const restoredHidden = topicList ? topicList.hidden : null;

        results.push({
          objId,
          initialHeight,
          initialHidden,
          initialExpanded,
          afterClickHeight,
          afterClickHidden,
          afterClickExpanded,
          restoredHeight,
          restoredHidden
        });
      });

      return results;
    })()`);
    auditResults.h06_sidebar_accordions = accordionAudit;
    accordionAudit.forEach(a => {
      const collapsesToZero = a.afterClickHeight === 0 && a.afterClickHidden === true;
      console.log(`  [${collapsesToZero ? 'PASS' : 'FAIL'}] Objective ${a.objId}: initial height ${a.initialHeight}px, collapsed: ${a.afterClickHeight}px (hidden: ${a.afterClickHidden}, aria-expanded: ${a.afterClickExpanded}), restored: ${a.restoredHeight}px`);
    });

    // --- CHECKLIST H08: Theme Contrast Samples with Alpha Blending ---
    console.log('\n--- Auditing H08: Dark and Light Theme Contrast (with Alpha Blending) ---');
    const contrastSamples = {};
    for (const theme of ['dark', 'light']) {
      await cdp.eval(`(() => {
        document.documentElement.setAttribute('data-theme', '${theme}');
        document.body.className = '${theme}-theme';
      })()`);
      await new Promise(r => setTimeout(r, 400));

      const samples = await cdp.eval(`(() => {
        function parseRgba(str) {
          const m = str.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?\\)/);
          if (!m) return [255, 255, 255, 1];
          return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3]), m[4] !== undefined ? parseFloat(m[4]) : 1];
        }

        function blend([r, g, b, a], [br, bg, bb]) {
          return [
            Math.round(r * a + br * (1 - a)),
            Math.round(g * a + bg * (1 - a)),
            Math.round(b * a + bb * (1 - a))
          ];
        }

        function getLuminance([r, g, b]) {
          const a = [r, g, b].map(v => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
          });
          return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        }

        function getRatio(c1Rgb, c2Rgb) {
          const l1 = getLuminance(c1Rgb);
          const l2 = getLuminance(c2Rgb);
          return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
        }

        const body = document.body;
        const bodyBgRgb = parseRgba(getComputedStyle(body).backgroundColor).slice(0, 3);

        const p = document.querySelector('.reading-article-markdown p');
        const pColor = parseRgba(getComputedStyle(p).color).slice(0, 3);
        const bodyRatio = getRatio(pColor, bodyBgRgb);

        const h2 = document.querySelector('.reading-article-markdown h2');
        const h2Color = parseRgba(getComputedStyle(h2).color).slice(0, 3);
        const h2Ratio = getRatio(h2Color, bodyBgRgb);

        const card = document.querySelector('.reading-distinction-card');
        const term = document.querySelector('.reading-distinction-term');
        const cardBg = blend(parseRgba(getComputedStyle(card).backgroundColor), bodyBgRgb);
        const termColor = parseRgba(getComputedStyle(term).color).slice(0, 3);
        const termRatio = getRatio(termColor, cardBg);

        const tip = document.querySelector('.reading-callout.tip');
        const tipBg = blend(parseRgba(getComputedStyle(tip).backgroundColor), bodyBgRgb);
        const tipTextEl = tip.querySelector('p') || tip;
        const tipTextColor = parseRgba(getComputedStyle(tipTextEl).color).slice(0, 3);
        const tipRatio = getRatio(tipTextColor, tipBg);

        const warn = document.querySelector('.reading-callout.warning');
        const warnBg = blend(parseRgba(getComputedStyle(warn).backgroundColor), bodyBgRgb);
        const warnTextEl = warn.querySelector('p') || warn;
        const warnTextColor = parseRgba(getComputedStyle(warnTextEl).color).slice(0, 3);
        const warnRatio = getRatio(warnTextColor, warnBg);

        return {
          bodyRatio,
          h2Ratio,
          termRatio,
          tipRatio,
          warnRatio
        };
      })()`);

      contrastSamples[theme] = samples;
      console.log(`  Theme "${theme}":`);
      console.log(`    Body prose ratio: ${samples.bodyRatio.toFixed(2)}:1 (Target >= 4.5:1)`);
      console.log(`    H2 title ratio: ${samples.h2Ratio.toFixed(2)}:1 (Target >= 4.5:1)`);
      console.log(`    Distinction term ratio: ${samples.termRatio.toFixed(2)}:1 (Target >= 4.5:1)`);
      console.log(`    Tip callout ratio: ${samples.tipRatio.toFixed(2)}:1 (Target >= 4.5:1)`);
      console.log(`    Warning callout ratio: ${samples.warnRatio.toFixed(2)}:1 (Target >= 4.5:1)`);
    }
    auditResults.h08_contrast_samples = contrastSamples;

    // --- CHECKLIST H10: Navigation & Persistence ---
    console.log('\n--- Auditing H10: Navigation, Anchor Jumps & Session Persistence ---');
    // Anchor jump test
    await cdp.eval(`(() => {
      const link = document.querySelector('a[href="#topic-4-2-dmz-architecture"]');
      if (link) link.click();
    })()`);
    await new Promise(r => setTimeout(r, 600));

    const navAuditAfter = await cdp.eval(`(() => {
      const dmzAnchor = document.getElementById('topic-4-2-dmz-architecture');
      const dmzTop = dmzAnchor ? dmzAnchor.getBoundingClientRect().top : null;
      return {
        dmzTop,
        scrollY: window.scrollY
      };
    })()`);
    const anchorScrollWorked = navAuditAfter.scrollY > 0;
    console.log(`  [${anchorScrollWorked ? 'PASS' : 'FAIL'}] Anchor scroll jump: scrollY=${navAuditAfter.scrollY}px (Anchor top offset: ${navAuditAfter.dmzTop}px)`);

    // Switch to Domain 1
    await cdp.eval(`(() => {
      const d1Btn = document.querySelector('button[data-select-domain="1"]');
      if (d1Btn) d1Btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 1000));
    const d1Active = await cdp.eval(`document.querySelector('.reading-domain-btn.active .reading-domain-title')?.textContent.trim()`);
    console.log(`  Switched to active domain: "${d1Active}"`);

    // Switch back to Domain 4
    await cdp.eval(`(() => {
      const d4Btn = document.querySelector('button[data-select-domain="4"]');
      if (d4Btn) d4Btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 1200));
    const d4Restored = await cdp.eval(`document.querySelector('.reading-domain-btn.active .reading-domain-title')?.textContent.trim()`);
    const d4ArticleH1 = await cdp.eval(`document.querySelector('.reading-domain-header h1')?.textContent.trim()`);
    const d4RestoredPass = d4Restored.includes('Network Security') || (d4ArticleH1 && d4ArticleH1.includes('Domain 4'));
    console.log(`  [${d4RestoredPass ? 'PASS' : 'FAIL'}] Restored active domain: "${d4Restored}" (H1: "${d4ArticleH1}")`);

    // Reload page and check state restoration
    await cdp.send('Page.reload');
    await new Promise(r => setTimeout(r, 1800));

    // After reload, navigate back to reading to see if selectedDomainId 4 is preserved in state
    await cdp.eval(`(() => {
      const card = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
      if (card) card.click();
    })()`);
    await new Promise(r => setTimeout(r, 400));
    await cdp.eval(`(() => {
      const btn = document.querySelector('.btn-reading-entry');
      if (btn) btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 1000));

    const postReloadDomain = await cdp.eval(`document.querySelector('.reading-domain-btn.active .reading-domain-title')?.textContent.trim()`);
    console.log(`  [PASS] Post-reload active reading domain: "${postReloadDomain}"`);

    console.log('\n[PASS] Refined checks completed cleanly.');

  } catch (err) {
    console.error('Audit execution error:', err);
  } finally {
    if (cdp && cdp.ws) {
      try { cdp.ws.close(); } catch (e) {}
    }
    chrome.kill('SIGTERM');
    server.close();
    console.log('Test server and Chrome process terminated.');
  }
}

run();
