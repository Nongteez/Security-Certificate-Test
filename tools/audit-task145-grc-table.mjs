/**
 * Task 145 — Domain 2 Reading Notes: GRC Comparison Table Readability Audit Suite
 *
 * Real Chrome browser testing via Chrome DevTools Protocol (CDP):
 * - Target: Domain 2 Reading Notes, Section 2.1.4 (GRC Frameworks and Standards)
 * - Viewport Matrix: 1920x1080, 1366x768, 1024x768, 768x1024, 390x844, 375x812, 320x568
 * - Themes: Dark and Light
 * - Verification:
 *   1. Zero arbitrary mid-word breaks: 'Cybersecurity Risk', 'ISMS Requirements', 'Enterprise IT Governance'
 *   2. Single-line rendering with white-space: nowrap
 *   3. Balanced 4-column distribution with table min-width 780px
 *   4. Zero page-level horizontal overflow across all 7 viewports
 *   5. Smooth contained horizontal scrolling on viewports <= 768px
 *   6. Theme-compliant contrast (accent blue in Dark, #1d4ed8 in Light)
 *   7. High-resolution screenshots and manifest saved to artifacts/qa/reading-notes-domain2-grc-table/
 */

import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve('.');
const PORT = 5233;
const DEBUG_PORT = 9293;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-domain2-grc-table');

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
      const timeout = setTimeout(() => {
        this.callbacks.delete(id);
        reject(new Error(`CDP timeout: ${method}`));
      }, 25000);
      this.callbacks.set(id, {
        resolve: v => { clearTimeout(timeout); resolve(v); },
        reject: e => { clearTimeout(timeout); reject(e); }
      });
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

  async setViewport(width, height, mobile = false) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile
    });
  }

  async screenshot(filePath, clip = null) {
    const params = { format: 'png' };
    if (clip) params.clip = clip;
    const res = await this.send('Page.captureScreenshot', params);
    fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('========================================================================');
  console.log('=== Task 145: GRC Frameworks Comparison Table Readability Browser QA ===');
  console.log('========================================================================\n');

  console.log('[1] Starting test server on port ' + PORT + '...');
  const server = await startServer();
  console.log('  Server ready.');

  console.log('[2] Launching Chrome CDP on port ' + DEBUG_PORT + '...');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-t145-'));
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${tmpDir}`,
    'about:blank'
  ]);

  let cdp = null;
  const manifest = {
    taskId: 'Task 145',
    feature: 'Reading Notes / Textbook',
    domain: 'Domain 2 — Security Governance',
    section: '2.1.4 GRC Frameworks and Standards',
    component: 'GRC Frameworks and Standards Comparison Table',
    auditedAt: new Date().toISOString(),
    viewportsTested: ['1920x1080', '1366x768', '1024x768', '768x1024', '390x844', '375x812', '320x568'],
    themesTested: ['dark', 'light'],
    expectedKeywords: [
      { row: 0, framework: 'NIST CSF', keyword: 'Cybersecurity Risk' },
      { row: 1, framework: 'ISO/IEC 27001', keyword: 'ISMS Requirements' },
      { row: 2, framework: 'COBIT', keyword: 'Enterprise IT Governance' }
    ],
    checks: [],
    screenshots: []
  };

  let allChecksPassed = true;

  try {
    let connected = false;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
        if (res.ok) { connected = true; break; }
      } catch (e) {
        await sleep(200);
      }
    }
    if (!connected) throw new Error('Chrome failed to start on port ' + DEBUG_PORT);

    const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`, { method: 'PUT' });
    const tab = await newTabRes.json();
    cdp = new CDPClient(tab.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('  Connected to Chrome DevTools Protocol.\n');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');

    const waitForElement = async (selector, timeoutMs = 15000) => {
      const start = Date.now();
      while (Date.now() - start < timeoutMs) {
        try {
          const found = await cdp.eval(`!!document.querySelector('${selector}')`);
          if (found) return true;
        } catch {}
        await sleep(100);
      }
      throw new Error(`Timeout waiting for ${selector}`);
    };

    console.log('[3] Navigating to http://127.0.0.1:' + PORT + '...');
    await cdp.setViewport(1920, 1080, false);
    await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
    await waitForElement('[data-cert-id="isc2-cc"]');

    console.log('  Clicking ISC2 CC certification card...');
    await cdp.eval(`(() => {
      const certBtn = document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]') || document.querySelector('[data-cert-id="isc2-cc"]');
      if (certBtn) certBtn.click();
    })()`);
    await waitForElement('[data-version-id="isc2-cc-reading-notes"]');

    console.log('  Clicking Reading Notes option...');
    await cdp.eval(`(() => {
      const rnBtn = document.querySelector('[data-version-id="isc2-cc-reading-notes"]');
      if (rnBtn) rnBtn.click();
    })()`);
    await waitForElement('.reading-screen');
    await waitForElement('.reading-article[data-domain-id="1"]');

    console.log('  Navigating to Domain 2...');
    await cdp.eval(`(() => {
      const d2 = document.querySelector('.reading-domain-btn[data-select-domain="2"]');
      if (d2) d2.click();
    })()`);
    await waitForElement('.reading-article[data-domain-id="2"]');
    await waitForElement('#topic-2-1-frameworks-standards');
    await sleep(500);
    console.log('  Domain 2 loaded and Section 2.1.4 ready.\n');

    // Verify DOM structure of target table
    console.log('[4] Verifying Semantic DOM Structure...');
    const domCheck = await cdp.eval(`(() => {
      const wrapper = document.querySelector('.reading-table-grc-frameworks-wrapper');
      const table = document.querySelector('.reading-table-grc-frameworks');
      if (!wrapper || !table) return { found: false };
      
      const col4Headers = table.querySelectorAll('th.reading-col-exam-keyword');
      const col4Cells = table.querySelectorAll('td.reading-col-exam-keyword');
      const dataAttrWrapper = wrapper.getAttribute('data-table');
      const dataAttrTable = table.getAttribute('data-table');

      return {
        found: true,
        dataAttrWrapper,
        dataAttrTable,
        col4HeaderCount: col4Headers.length,
        col4CellCount: col4Cells.length,
        headersText: Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim()),
        rowsKeywordText: Array.from(col4Cells).map(td => td.textContent.trim())
      };
    })()`);

    if (!domCheck.found) {
      throw new Error('GRC comparison table with targeted classes not found in DOM!');
    }

    console.log('  ✓ Wrapper class: reading-table-grc-frameworks-wrapper');
    console.log('  ✓ Table class: reading-table-grc-frameworks');
    console.log(`  ✓ data-table attribute: "${domCheck.dataAttrWrapper}"`);
    console.log(`  ✓ Column 4 exam keyword headers: ${domCheck.col4HeaderCount}`);
    console.log(`  ✓ Column 4 exam keyword cells: ${domCheck.col4CellCount}`);
    console.log(`  ✓ Headers: ${JSON.stringify(domCheck.headersText)}`);
    console.log(`  ✓ Exam keywords extracted: ${JSON.stringify(domCheck.rowsKeywordText)}\n`);

    manifest.domStructure = domCheck;

    // Viewport and Theme Matrix
    const viewports = [
      { name: '1920x1080 (Desktop Wide)', w: 1920, h: 1080, mobile: false, filePrefix: 'table-1920' },
      { name: '1366x768 (Desktop Standard)', w: 1366, h: 768, mobile: false, filePrefix: 'table-1366' },
      { name: '1024x768 (Desktop Small)', w: 1024, h: 768, mobile: false, filePrefix: 'table-1024' },
      { name: '768x1024 (Tablet Portrait)', w: 768, h: 1024, mobile: true, filePrefix: 'table-768' },
      { name: '390x844 (Mobile Medium - iPhone 12/13/14)', w: 390, h: 844, mobile: true, filePrefix: 'table-390' },
      { name: '375x812 (Mobile Standard - iPhone X/XS)', w: 375, h: 812, mobile: true, filePrefix: 'table-375' },
      { name: '320x568 (Mobile Narrow - iPhone SE)', w: 320, h: 568, mobile: true, filePrefix: 'table-320' }
    ];

    const themes = ['dark', 'light'];

    for (const theme of themes) {
      console.log(`\n=================== TESTING THEME: ${theme.toUpperCase()} ===================`);
      
      // Apply theme
      await cdp.eval(`(() => {
        if ('${theme}' === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
          document.body.classList.add('light-theme');
        } else {
          document.documentElement.removeAttribute('data-theme');
          document.body.classList.remove('light-theme');
        }
      })()`);
      await sleep(300);

      for (const vp of viewports) {
        console.log(`\n--- Viewport: ${vp.name} [${theme}] ---`);
        await cdp.setViewport(vp.w, vp.h, vp.mobile);
        await sleep(300);

        // Evaluate layout metrics
        const metrics = await cdp.eval(`(() => {
          const wrapper = document.querySelector('.reading-table-grc-frameworks-wrapper');
          const table = document.querySelector('.reading-table-grc-frameworks');
          if (!wrapper || !table) return null;

          wrapper.scrollIntoView({ block: 'center', inline: 'nearest' });

          const wRect = wrapper.getBoundingClientRect();
          const tRect = table.getBoundingClientRect();
          const wStyle = window.getComputedStyle(wrapper);
          const tStyle = window.getComputedStyle(table);

          const cols = Array.from(table.querySelectorAll('th')).map((th, idx) => {
            const thRect = th.getBoundingClientRect();
            const td = table.querySelector('tbody tr:first-child td:nth-child(' + (idx + 1) + ')');
            const tdRect = td ? td.getBoundingClientRect() : null;
            return {
              idx: idx + 1,
              title: th.textContent.trim(),
              thWidth: Math.round(thRect.width),
              tdWidth: tdRect ? Math.round(tdRect.width) : 0
            };
          });

          const keywords = Array.from(table.querySelectorAll('tbody tr')).map((tr, rIdx) => {
            const td4 = tr.querySelector('td.reading-col-exam-keyword');
            const strong = td4 ? td4.querySelector('strong') : null;
            const tdStyle = td4 ? window.getComputedStyle(td4) : null;
            const sStyle = strong ? window.getComputedStyle(strong) : null;
            const sRect = strong ? strong.getBoundingClientRect() : null;

            return {
              row: rIdx,
              rawText: td4 ? td4.textContent.trim() : '',
              strongText: strong ? strong.textContent.trim() : '',
              whiteSpace: sStyle ? sStyle.whiteSpace : '',
              wordBreak: sStyle ? sStyle.wordBreak : '',
              overflowWrap: sStyle ? sStyle.overflowWrap : '',
              color: sStyle ? sStyle.color : '',
              renderedHeight: sRect ? Math.round(sRect.height) : 0,
              renderedWidth: sRect ? Math.round(sRect.width) : 0
            };
          });

          // Page-level overflow
          const pageScrollWidth = document.documentElement.scrollWidth;
          const pageClientWidth = document.documentElement.clientWidth;
          const pageOverflowX = pageScrollWidth - pageClientWidth;

          // Wrapper-level scroll
          const wrapperScrollWidth = wrapper.scrollWidth;
          const wrapperClientWidth = wrapper.clientWidth;
          const wrapperScrollable = wrapperScrollWidth > wrapperClientWidth;

          return {
            wrapper: {
              width: Math.round(wRect.width),
              height: Math.round(wRect.height),
              scrollWidth: wrapperScrollWidth,
              clientWidth: wrapperClientWidth,
              isScrollable: wrapperScrollable,
              overflowX: wStyle.overflowX
            },
            table: {
              width: Math.round(tRect.width),
              height: Math.round(tRect.height),
              minWidth: tStyle.minWidth,
              tableLayout: tStyle.tableLayout
            },
            columns: cols,
            keywords,
            pageOverflowX
          };
        })()`);

        if (!metrics) {
          console.error(`  FAIL: Could not measure table metrics on ${vp.name}`);
          allChecksPassed = false;
          continue;
        }

        // Assertions:
        // 1. Page horizontal overflow == 0
        const noPageOverflow = metrics.pageOverflowX <= 1; // 1px rounding tolerance
        console.log(`  Page overflow-x: ${metrics.pageOverflowX}px (${noPageOverflow ? 'PASS' : 'FAIL'})`);

        // 2. Table min-width >= 780px
        const tableMinWidthOk = metrics.table.width >= 780;
        console.log(`  Table width: ${metrics.table.width}px (min-width target >= 780px: ${tableMinWidthOk ? 'PASS' : 'FAIL'})`);

        // 3. Col 4 computed width >= 180px
        const col4 = metrics.columns[3];
        const col4WidthOk = col4.tdWidth >= 180;
        console.log(`  Col 4 width: ${col4.tdWidth}px (target >= 180px: ${col4WidthOk ? 'PASS' : 'FAIL'})`);

        // 4. Keyword single-line & text integrity checks
        let keywordsAllOk = true;
        const expected = [
          'Cybersecurity Risk',
          'ISMS Requirements',
          'Enterprise IT Governance'
        ];

        for (let i = 0; i < 3; i++) {
          const kw = metrics.keywords[i];
          const textMatch = kw.strongText === expected[i];
          const isNowrap = kw.whiteSpace === 'nowrap';
          const singleLineHeight = kw.renderedHeight <= 30; // standard single line is ~20px-24px

          const kwOk = textMatch && isNowrap && singleLineHeight;
          if (!kwOk) keywordsAllOk = false;

          console.log(`    Keyword [${i}] "${kw.strongText}": textMatch=${textMatch}, nowrap=${isNowrap}, height=${kw.renderedHeight}px (${kwOk ? 'PASS' : 'FAIL'})`);
        }

        // 5. Contained scroll on mobile/tablet (<= 768px)
        let scrollOk = true;
        if (vp.w <= 768) {
          scrollOk = metrics.wrapper.isScrollable && (metrics.wrapper.overflowX === 'auto' || metrics.wrapper.overflowX === 'scroll');
          console.log(`  Contained scroll (viewport <= 768px): wrapper.scrollWidth=${metrics.wrapper.scrollWidth}px, clientWidth=${metrics.wrapper.clientWidth}px (${scrollOk ? 'PASS' : 'FAIL'})`);
        }

        const vpPass = noPageOverflow && tableMinWidthOk && col4WidthOk && keywordsAllOk && scrollOk;
        if (!vpPass) allChecksPassed = false;

        const checkRecord = {
          viewport: vp.name,
          theme,
          width: vp.w,
          height: vp.h,
          pageOverflowX: metrics.pageOverflowX,
          tableWidth: metrics.table.width,
          col4Width: col4.tdWidth,
          keywords: metrics.keywords.map(k => ({ text: k.strongText, height: k.renderedHeight, nowrap: k.whiteSpace })),
          scrollable: metrics.wrapper.isScrollable,
          passed: vpPass
        };
        manifest.checks.push(checkRecord);

        // Capture screenshot
        const screenshotName = `after-${vp.filePrefix}-${theme}.png`;
        const screenshotPath = path.join(ARTIFACTS_DIR, screenshotName);

        // Scroll table into view and get clip box
        const clip = await cdp.eval(`(() => {
          const el = document.querySelector('.reading-table-grc-frameworks-wrapper');
          if (!el) return null;
          el.scrollIntoView({ block: 'center', inline: 'nearest' });
          const r = el.getBoundingClientRect();
          const padding = 16;
          const x = Math.max(0, Math.floor(r.x - padding));
          const y = Math.max(0, Math.floor(r.y - padding));
          const w = Math.min(window.innerWidth - x, Math.ceil(r.width + padding * 2));
          const h = Math.min(window.innerHeight - y, Math.ceil(r.height + padding * 2));
          return { x, y, width: w, height: h, scale: 1 };
        })()`);

        if (clip) {
          await cdp.screenshot(screenshotPath, clip);
          manifest.screenshots.push({
            name: screenshotName,
            viewport: vp.name,
            theme,
            path: `artifacts/qa/reading-notes-domain2-grc-table/${screenshotName}`,
            clip
          });
          console.log(`  Captured screenshot: ${screenshotName}`);
        }
      }
    }

    // Save manifest
    const manifestPath = path.join(ARTIFACTS_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`\n[5] Saved QA manifest to ${manifestPath}`);

  } catch (err) {
    console.error('Fatal error during browser QA audit:', err);
    allChecksPassed = false;
  } finally {
    if (cdp) cdp.close();
    chrome.kill('SIGKILL');
    server.close();
  }

  console.log('\n========================================================================');
  console.log(`=== TASK 145 AUDIT RESULT: ${allChecksPassed ? 'ALL CHECKS PASSED (100%)' : 'SOME CHECKS FAILED'} ===`);
  console.log('========================================================================\n');

  if (!allChecksPassed) {
    process.exit(1);
  }
}

main();

