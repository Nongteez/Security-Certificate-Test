import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5199;
const DEBUG_PORT = 9256;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-domains-1-4-audit');

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
      }, 20000);
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

  async screenshot(filePath) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('================================================================');
  console.log('=== Task 142 — Reading Notes (Domains 1–4) Full Chrome Audit ===');
  console.log('================================================================\n');

  console.log('[1] Starting local server...');
  const server = await startServer();
  console.log(`Server listening on http://127.0.0.1:${PORT}`);

  console.log('[2] Launching headless Chrome...');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--no-sandbox',
    'about:blank'
  ]);

  let cdp = null;

  try {
    let versionData = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
        if (res.ok) {
          versionData = await res.json();
          break;
        }
      } catch {}
      await sleep(200);
    }

    if (!versionData) {
      throw new Error(`Failed to connect to Chrome debug port ${DEBUG_PORT}`);
    }

    const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
    const tabData = await newTabRes.json();
    cdp = new CDPClient(tabData.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('[3] Connected to Chrome CDP target.');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');
    await sleep(1500);

    // Initial desktop viewport
    await cdp.setViewport(1366, 768, false);

    console.log('\n[4] Functional & UI Navigation Audit...');

    // 4.1 Entry point navigation
    const entryResult = await cdp.eval(`(() => {
      const certCard = document.querySelector('.cert-card-available');
      if (certCard) certCard.click();
      return { clickedCert: !!certCard };
    })()`);
    await sleep(600);

    const versionResult = await cdp.eval(`(() => {
      const readBtn = document.querySelector('.btn-reading-entry') || document.querySelector('[data-action="read"]');
      if (readBtn) readBtn.click();
      return { clickedRead: !!readBtn };
    })()`);
    await sleep(1000);

    const onReadingScreen = await cdp.eval(`(() => {
      const screen = document.querySelector('.reading-screen');
      const article = document.querySelector('.reading-article');
      const title = document.querySelector('.reading-article-title');
      return {
        hasScreen: !!screen,
        hasArticle: !!article,
        title: title ? title.textContent.trim() : null
      };
    })()`);
    console.log(`  Entry to Reading Notes: Screen=${onReadingScreen.hasScreen}, Article=${onReadingScreen.hasArticle}, Title="${onReadingScreen.title}"`);

    // 4.2 Domain Switching
    console.log('\n[5] Domain Selection & Switching Audit...');
    const domainSwitchResults = [];
    for (const dId of [1, 2, 3, 4, 5, 1]) {
      const switchRes = await cdp.eval(`(() => {
        const btn = document.querySelector('[data-select-domain="${dId}"]');
        if (btn) btn.click();
        return { clicked: !!btn };
      })()`);
      await sleep(700);

      const stateAfter = await cdp.eval(`(() => {
        const title = document.querySelector('.reading-article-title');
        const emptyNotice = document.querySelector('.reading-empty-notice');
        const sidebarActive = document.querySelector('.reading-domain-header.active');
        return {
          title: title ? title.textContent.trim() : null,
          emptyNotice: emptyNotice ? emptyNotice.textContent.trim() : null,
          sidebarActiveText: sidebarActive ? sidebarActive.textContent.trim() : null
        };
      })()`);
      console.log(`  Switched to Domain ${dId}: Title="${stateAfter.title || stateAfter.emptyNotice}" (Sidebar active: ${stateAfter.sidebarActiveText?.substring(0, 20)}...)`);
      domainSwitchResults.push({ domainId: dId, ...stateAfter });
    }

    // 4.3 Sidebar Accordion Collapse/Expand Check
    console.log('\n[6] Sidebar Accordion State & Computed Visibility Audit...');
    const accordionCheck = await cdp.eval(`(() => {
      // Find Domain 1 Objective 1.1 chevron
      const chevron = document.querySelector('.reading-nav-accordion-toggle');
      const topicsList = document.querySelector('.reading-nav-topics');
      if (!chevron || !topicsList) return { error: 'No chevron or topics list found' };

      const initDisplay = window.getComputedStyle(topicsList).display;
      const initHeight = parseFloat(window.getComputedStyle(topicsList).height);
      const initHidden = topicsList.hidden;

      // Click to collapse
      chevron.click();
      const collDisplay = window.getComputedStyle(topicsList).display;
      const collHeight = parseFloat(window.getComputedStyle(topicsList).height);
      const collHidden = topicsList.hidden;

      // Click to re-expand
      chevron.click();
      const expDisplay = window.getComputedStyle(topicsList).display;
      const expHeight = parseFloat(window.getComputedStyle(topicsList).height);
      const expHidden = topicsList.hidden;

      return {
        initDisplay, initHeight, initHidden,
        collDisplay, collHeight, collHidden,
        expDisplay, expHeight, expHidden,
        isCollapseWorking: collDisplay === 'none' || collHeight === 0
      };
    })()`);
    console.log(`  Accordion Collapse Check: Initial Height=${accordionCheck.initHeight}px -> Collapsed Height=${accordionCheck.collHeight}px (Display: ${accordionCheck.collDisplay}) -> Re-expanded Height=${accordionCheck.expHeight}px. Accordion functioning: ${accordionCheck.isCollapseWorking}`);

    // 4.4 Desktop Sidebar Collapse/Expand Toggle
    console.log('\n[7] Desktop Sidebar Collapse/Expand Toggle Audit...');
    const sidebarToggleCheck = await cdp.eval(`(() => {
      const toggleBtn = document.querySelector('#btn-reading-sidebar-toggle');
      const layout = document.querySelector('.reading-layout');
      if (!toggleBtn || !layout) return { error: 'Toggle button or layout not found' };

      const initCollapsed = layout.classList.contains('sidebar-collapsed');
      toggleBtn.click();
      const afterClickCollapsed = layout.classList.contains('sidebar-collapsed');
      toggleBtn.click();
      const restoredCollapsed = layout.classList.contains('sidebar-collapsed');

      return {
        initCollapsed,
        afterClickCollapsed,
        restoredCollapsed,
        toggleWorking: afterClickCollapsed !== initCollapsed && restoredCollapsed === initCollapsed
      };
    })()`);
    console.log(`  Sidebar Toggle Check: Toggle working=${sidebarToggleCheck.toggleWorking} (collapsed toggles ${sidebarToggleCheck.initCollapsed} -> ${sidebarToggleCheck.afterClickCollapsed} -> ${sidebarToggleCheck.restoredCollapsed})`);

    // 4.5 Floating Scroll Navigation Button
    console.log('\n[8] Floating Scroll Navigation Button Audit...');
    const floatingScrollCheck = await cdp.eval(`(() => {
      const btn = document.querySelector('#btn-reading-scroll-nav');
      if (!btn) return { error: 'Floating scroll nav button not found' };

      const atTopVisible = window.getComputedStyle(btn).display !== 'none';
      const atTopLabel = btn.getAttribute('aria-label');

      // Scroll down
      window.scrollTo(0, 1500);
      const scrolledLabel = btn.getAttribute('aria-label');

      // Scroll back
      window.scrollTo(0, 0);

      return {
        hasBtn: !!btn,
        atTopVisible,
        atTopLabel,
        scrolledLabel
      };
    })()`);
    console.log(`  Floating Scroll Nav: Visible=${floatingScrollCheck.atTopVisible}, Top Label="${floatingScrollCheck.atTopLabel}", Scrolled Label="${floatingScrollCheck.scrolledLabel}"`);

    // 4.6 Reading Progress Persistence
    console.log('\n[9] Reading Progress Persistence & LocalStorage Audit...');
    const progressCheck = await cdp.eval(`(() => {
      const raw = localStorage.getItem('sec_cert_reading_progress') || localStorage.getItem('sec_cert_test_reading');
      return {
        hasProgressKey: !!raw,
        rawContent: raw
      };
    })()`);
    console.log(`  Reading progress in localStorage: exists=${progressCheck.hasProgressKey}, content=${progressCheck.rawContent}`);

    // 5. EXHAUSTIVE VIEWPORT x THEME x DOMAIN MATRIX AUDIT
    console.log('\n================================================================');
    console.log('=== [10] Comprehensive Viewport x Theme x Domain Matrix Audit ===');
    console.log('================================================================\n');

    const viewports = [
      { name: '1920x1080', width: 1920, height: 1080, mobile: false, label: 'Full HD Desktop' },
      { name: '1366x768', width: 1366, height: 768, mobile: false, label: 'HD Laptop' },
      { name: '1024x768', width: 1024, height: 768, mobile: false, label: 'iPad Landscape' },
      { name: '768x1024', width: 768, height: 1024, mobile: true, label: 'iPad Portrait' },
      { name: '390x844', width: 390, height: 844, mobile: true, label: 'iPhone 14/15' },
      { name: '375x812', width: 375, height: 812, mobile: true, label: 'iPhone X/12m' },
      { name: '320x568', width: 320, height: 568, mobile: true, label: 'iPhone SE 1st' }
    ];

    const themes = ['dark', 'light'];
    const domains = [1, 2, 3, 4];

    const matrixResults = [];
    const defectFindings = [];

    // Helper to select domain and wait
    async function selectDomain(dId) {
      await cdp.eval(`(() => {
        const btn = document.querySelector('[data-select-domain="${dId}"]');
        if (btn) btn.click();
      })()`);
      await sleep(600);
    }

    for (const dId of domains) {
      console.log(`\n----------------------------------------------------------------`);
      console.log(`>>> Auditing Domain ${dId} Across Viewports and Themes <<<`);
      console.log(`----------------------------------------------------------------`);

      // Switch to domain
      await selectDomain(dId);

      for (const vp of viewports) {
        await cdp.setViewport(vp.width, vp.height, vp.mobile);

        for (const theme of themes) {
          // Set theme
          await cdp.eval(`document.documentElement.setAttribute('data-theme', '${theme}')`);
          await sleep(200);

          // Deep DOM, Overflow, Diagram & Table Evaluation
          const auditData = await cdp.eval(`(() => {
            const docEl = document.documentElement;
            const body = document.body;
            const scrollW = docEl.scrollWidth;
            const innerW = window.innerWidth;
            const hasHorizontalOverflow = scrollW > innerW + 1;

            // Audit Subsections
            const subsections = [...document.querySelectorAll('h3[id^="topic-"]')].map(h => ({
              id: h.id,
              text: h.textContent.trim()
            }));

            // Audit Diagrams
            const diagrams = [...document.querySelectorAll('.reading-semantic-diagram')].map(d => {
              const diagramId = d.getAttribute('data-diagram');
              const svg = d.querySelector('svg');
              const mobStack = d.querySelector('.reading-mob-tier-stack, .reading-diagram-mobile-stack, .reading-mob-stack');
              let svgWidth = 0;
              let svgHeight = 0;
              let illegalHtmlInSvg = 0;
              let zeroWidthTexts = 0;
              let squishedHeights = 0;
              let pairwiseTextOverlap = 0;

              if (svg) {
                const rect = svg.getBoundingClientRect();
                svgWidth = rect.width;
                svgHeight = rect.height;

                // Check illegal HTML inside SVG
                illegalHtmlInSvg = svg.querySelectorAll('strong, b, span, div, p, em').length;

                // Check text nodes
                const textNodes = [...svg.querySelectorAll('text')];
                for (const t of textNodes) {
                  try {
                    const bb = t.getBBox();
                    if (bb.width === 0 && t.textContent.trim().length > 0) zeroWidthTexts++;
                    if (bb.height < 5 && t.textContent.trim().length > 0) squishedHeights++;
                  } catch (e) {}
                }

                // Check pairwise overlap in text elements with same Y coordinate
                for (let i = 0; i < textNodes.length; i++) {
                  for (let j = i + 1; j < textNodes.length; j++) {
                    try {
                      const b1 = textNodes[i].getBBox();
                      const b2 = textNodes[j].getBBox();
                      if (Math.abs(b1.y - b2.y) < 6) {
                        const overlap = Math.max(0, Math.min(b1.x + b1.width, b2.x + b2.width) - Math.max(b1.x, b2.x));
                        if (overlap > 10) pairwiseTextOverlap++;
                      }
                    } catch (e) {}
                  }
                }
              }

              const isMobStackVisible = mobStack ? window.getComputedStyle(mobStack).display !== 'none' : false;
              const isSvgVisible = svg ? window.getComputedStyle(svg).display !== 'none' : false;

              return {
                diagramId,
                hasSvg: !!svg,
                hasMobStack: !!mobStack,
                isSvgVisible,
                isMobStackVisible,
                svgWidth,
                svgHeight,
                illegalHtmlInSvg,
                zeroWidthTexts,
                squishedHeights,
                pairwiseTextOverlap
              };
            });

            // Audit Tables
            const tables = [...document.querySelectorAll('table')].map((t, idx) => {
              const rect = t.getBoundingClientRect();
              const container = t.closest('.reading-table-container, .reading-article');
              const containerW = container ? container.getBoundingClientRect().width : window.innerWidth;
              const isOverflown = rect.width > containerW + 2;
              const cols = [...t.querySelectorAll('th, td')].map(c => c.getBoundingClientRect().width);
              const minColW = cols.length ? Math.min(...cols) : 0;
              return {
                tableIndex: idx,
                tableWidth: rect.width,
                isOverflown,
                minColW
              };
            });

            // Audit Distinction Cards
            const distinctionCards = [...document.querySelectorAll('.reading-distinction-card')].map(c => {
              const rect = c.getBoundingClientRect();
              return { width: rect.width, height: rect.height };
            });

            // Audit Scenarios
            const scenarios = [...document.querySelectorAll('.reading-scenario-card')].map((s, idx) => {
              const q = s.querySelector('.reading-scenario-question');
              const a = s.querySelector('.reading-scenario-answer');
              const r = s.querySelector('.reading-scenario-reasoning');
              return {
                idx,
                hasQuestion: !!q,
                hasAnswer: !!a,
                hasReasoning: !!r
              };
            });

            return {
              scrollW,
              innerW,
              hasHorizontalOverflow,
              subsectionsCount: subsections.length,
              subsections,
              diagrams,
              tables,
              distinctionCardsCount: distinctionCards.length,
              scenariosCount: scenarios.length
            };
          })()`);

          // Capture selective screenshots for visual audit evidence
          const shouldCaptureScreenshot =
            (vp.width === 1920 && theme === 'dark') ||
            (vp.width === 1366 && theme === 'light') ||
            (vp.width === 768 && theme === 'dark') ||
            (vp.width === 390 && theme === 'dark') ||
            (vp.width === 320 && theme === 'light');

          let screenshotFile = null;
          if (shouldCaptureScreenshot) {
            screenshotFile = `domain-${dId}-${vp.name}-${theme}.png`;
            await cdp.screenshot(path.join(ARTIFACTS_DIR, screenshotFile));
          }

          const record = {
            domainId: dId,
            viewport: vp.name,
            theme,
            scrollW: auditData.scrollW,
            innerW: auditData.innerW,
            hasHorizontalOverflow: auditData.hasHorizontalOverflow,
            subsectionsCount: auditData.subsectionsCount,
            diagrams: auditData.diagrams,
            tables: auditData.tables,
            scenariosCount: auditData.scenariosCount,
            screenshot: screenshotFile
          };
          matrixResults.push(record);

          // Check defects
          if (auditData.hasHorizontalOverflow) {
            defectFindings.push({
              domainId: dId,
              severity: 'P1',
              type: 'H04_HORIZONTAL_OVERFLOW',
              detail: `Domain ${dId} has horizontal overflow on ${vp.name} (${theme}): scrollWidth ${auditData.scrollW}px > innerWidth ${auditData.innerW}px`
            });
            console.log(`    [DEFECT] Horizontal Overflow on Domain ${dId} (${vp.name}, ${theme}): ${auditData.scrollW} > ${auditData.innerW}`);
          }

          // Check diagram defects
          for (const diag of auditData.diagrams) {
            if (diag.illegalHtmlInSvg > 0) {
              defectFindings.push({
                domainId: dId,
                severity: 'P1',
                type: 'H01_ILLEGAL_HTML_IN_SVG',
                detail: `Domain ${dId} diagram "${diag.diagramId}" contains ${diag.illegalHtmlInSvg} illegal HTML tags inside SVG on ${vp.name}`
              });
              console.log(`    [DEFECT] Illegal HTML in SVG in Domain ${dId} diagram ${diag.diagramId}`);
            }
            if (diag.squishedHeights > 0 && diag.isSvgVisible) {
              defectFindings.push({
                domainId: dId,
                severity: 'P1',
                type: 'H01_SQUISHED_TEXT',
                detail: `Domain ${dId} diagram "${diag.diagramId}" has ${diag.squishedHeights} squished text elements (<5px) on ${vp.name}`
              });
              console.log(`    [DEFECT] Squished text in Domain ${dId} diagram ${diag.diagramId} (${diag.squishedHeights} nodes)`);
            }
            if (diag.pairwiseTextOverlap > 0 && diag.isSvgVisible) {
              defectFindings.push({
                domainId: dId,
                severity: 'P2',
                type: 'H01_TEXT_COLLISION',
                detail: `Domain ${dId} diagram "${diag.diagramId}" has ${diag.pairwiseTextOverlap} overlapping text pairs on ${vp.name}`
              });
              console.log(`    [DEFECT] Text collision in Domain ${dId} diagram ${diag.diagramId} (${diag.pairwiseTextOverlap} overlaps)`);
            }
          }
        }
      }
    }

    console.log('\n================================================================');
    console.log('=== Final Audit Execution Summary ===');
    console.log('================================================================\n');

    console.log(`Total Matrix Checks: ${matrixResults.length} configurations`);
    const overflowChecks = matrixResults.filter(r => r.hasHorizontalOverflow);
    console.log(`Horizontal Overflow Failures: ${overflowChecks.length}`);
    console.log(`Total Defects Found: ${defectFindings.length}`);

    // Compile and save manifest
    const manifest = {
      timestamp: new Date().toISOString(),
      task: 'Task 142 — Reading Notes Complete Audit (Domains 1–4)',
      commit: 'b7412a15e00b6492b665df4559a5df2a4ae3f28b',
      functional: {
        entry: onReadingScreen,
        domainSwitching: domainSwitchResults,
        accordion: accordionCheck,
        sidebarToggle: sidebarToggleCheck,
        floatingScrollNav: floatingScrollCheck,
        progressPersistence: progressCheck
      },
      defectFindings,
      matrixResults
    };

    fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`Audit manifest saved to: ${path.join(ARTIFACTS_DIR, 'audit-manifest.json')}`);

  } finally {
    if (cdp) cdp.close();
    chrome.kill();
    server.close();
  }
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});

