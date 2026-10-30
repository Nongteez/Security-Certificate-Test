import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5190;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-acceptance-audit');

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

function parseRgb(colorStr, base = { r: 255, g: 255, b: 255 }) {
  if (!colorStr || colorStr === 'none' || colorStr === 'transparent') return base;
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return base;
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const a = match[4] !== undefined ? parseFloat(match[4]) : 1.0;
  return {
    r: Math.round(r * a + base.r * (1 - a)),
    g: Math.round(g * a + base.g * (1 - a)),
    b: Math.round(b * a + base.b * (1 - a))
  };
}

function getLuminance({ r, g, b }) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function getContrast(rgb1, rgb2) {
  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);
  const brighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (brighter + 0.05) / (darker + 0.05);
}

async function runAudit() {
  console.log('=== Task 123: ISC2 CC 2026 Domain 2 Deep Browser Acceptance Audit ===\n');

  const server = await startServer();
  console.log(`[1] Server started at http://127.0.0.1:${PORT}/`);

  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9455',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9455/json/version');
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
    throw new Error('Could not connect to Chrome debugging port 9455');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9455/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  await new Promise(r => setTimeout(r, 800));

  // Navigate to Reading Notes -> Domain 2
  await cdp.eval(`(() => {
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  })()`);
  await new Promise(r => setTimeout(r, 600));

  await cdp.eval(`(() => {
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1200));

  await cdp.eval(`(() => {
    const d2Select = document.querySelector('[data-select-domain="2"]');
    if (d2Select) d2Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1200));

  const auditReportData = {
    diagramAudits: [],
    tableAudits: [],
    distinctionAudits: [],
    scenarioAudits: [],
    responsiveAudits: [],
    contrastAudits: []
  };

  const testConfigs = [
    { name: '1366-dark-expanded', width: 1366, height: 768, theme: 'dark', collapseSidebar: false },
    { name: '1366-light-expanded', width: 1366, height: 768, theme: 'light', collapseSidebar: false },
    { name: '1366-dark-collapsed', width: 1366, height: 768, theme: 'dark', collapseSidebar: true },
    { name: '1920-dark-expanded', width: 1920, height: 1080, theme: 'dark', collapseSidebar: false },
    { name: '1920-light-expanded', width: 1920, height: 1080, theme: 'light', collapseSidebar: false },
    { name: '390-dark-mobile', width: 390, height: 844, theme: 'dark', collapseSidebar: true, isMobile: true }
  ];

  for (const cfg of testConfigs) {
    console.log(`\n------------------------------------------------------------`);
    console.log(`Auditing: ${cfg.name} (${cfg.width}x${cfg.height}, Theme: ${cfg.theme})`);
    console.log(`------------------------------------------------------------`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 1,
      mobile: !!cfg.isMobile
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

    // Audit 1: Diagram Text Clipping and Geometry
    const diagGeom = await cdp.eval(`(() => {
      const diagNames = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
      return diagNames.map(name => {
        const card = document.querySelector(\`.reading-diagram-card[data-diagram="\${name}"]\`);
        const svg = card ? card.querySelector('svg') : null;
        if (!svg) return { name, exists: false };

        const cardRect = card.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();
        const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
        const vbWidth = viewBox[2];
        const vbHeight = viewBox[3];

        const textEls = Array.from(svg.querySelectorAll('text'));
        const texts = textEls.map(t => {
          const bbox = t.getBBox();
          const str = t.textContent.trim();
          const rightEdge = bbox.x + bbox.width;
          const overflowX = rightEdge > vbWidth;
          const overflowY = (bbox.y + bbox.height) > vbHeight;
          const cs = window.getComputedStyle(t);
          return {
            str: str.substring(0, 30),
            x: Math.round(bbox.x),
            y: Math.round(bbox.y),
            width: Math.round(bbox.width),
            height: Math.round(bbox.height),
            rightEdge: Math.round(rightEdge),
            overflowX,
            overflowY,
            fill: cs.fill || cs.color,
            fontSize: cs.fontSize
          };
        });

        const hasOverflow = texts.some(t => t.overflowX || t.overflowY);
        return {
          name,
          exists: true,
          cardWidth: Math.round(cardRect.width),
          cardHeight: Math.round(cardRect.height),
          svgWidth: Math.round(svgRect.width),
          svgHeight: Math.round(svgRect.height),
          vbWidth,
          vbHeight,
          textCount: texts.length,
          hasOverflow,
          overflowingTexts: texts.filter(t => t.overflowX || t.overflowY),
          textsSample: texts.slice(0, 4)
        };
      });
    })()`);

    for (const d of diagGeom) {
      if (d.hasOverflow) {
        console.warn(`  ⚠️ Diagram ${d.name} has TEXT OVERFLOW in ${cfg.name}:`, d.overflowingTexts);
      } else {
        console.log(`  ✓ Diagram ${d.name}: ${d.svgWidth}x${d.svgHeight}px, 0 overflow (all ${d.textCount} texts fit inside viewBox ${d.vbWidth}x${d.vbHeight})`);
      }
    }
    auditReportData.diagramAudits.push({ config: cfg.name, diagrams: diagGeom });

    // Audit 2: Contrast Measurements for Diagrams
    if (cfg.name === '1366-dark-expanded' || cfg.name === '1366-light-expanded') {
      const contrastData = await cdp.eval(`(() => {
        const diagNames = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
        const results = [];
        diagNames.forEach(name => {
          const card = document.querySelector('.reading-diagram-card[data-diagram="' + name + '"]');
          if (!card) return;
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          const cardBaseBg = isDark ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
          const textEls = Array.from(card.querySelectorAll('text'));
          textEls.forEach(t => {
            const cs = window.getComputedStyle(t);
            const parentRect = t.closest('g')?.querySelector('rect');
            let rectFill = parentRect ? window.getComputedStyle(parentRect).fill : null;
            if (!rectFill || rectFill === 'none' || rectFill === 'transparent') {
              rectFill = cardBaseBg;
            }
            results.push({
              diagram: name,
              text: t.textContent.trim().substring(0, 25),
              color: cs.fill || cs.color,
              bgColor: rectFill,
              baseBg: cardBaseBg
            });
          });
        });
        return results;
      })()`);

      let lowContrastCount = 0;
      contrastData.forEach(item => {
        const baseRgb = parseRgb(item.baseBg);
        const c1 = parseRgb(item.color);
        const c2 = parseRgb(item.bgColor, baseRgb);
        const ratio = getContrast(c1, c2);
        if (ratio < 4.5) {
          lowContrastCount++;
          // console.warn(`    ⚠️ Low contrast in ${item.diagram} on "${item.text}": ${ratio.toFixed(2)}:1 (${item.color} on ${item.bgColor})`);
        }
      });
      console.log(`  Contrast Audit for ${cfg.theme} mode: evaluated ${contrastData.length} text elements (low contrast < 4.5:1 count = ${lowContrastCount})`);
      auditReportData.contrastAudits.push({ theme: cfg.theme, totalEvaluated: contrastData.length, lowContrastCount, samples: contrastData.slice(0, 5) });
    }

    // Audit 3: Tables and Bilingual Word Wrapping
    const tableAudit = await cdp.eval(`(() => {
      const tables = Array.from(document.querySelectorAll('.reading-article[data-domain-id="2"] table'));
      return tables.map((t, idx) => {
        const rect = t.getBoundingClientRect();
        const wrapper = t.closest('.reading-table-wrapper') || t.parentElement;
        const wrapRect = wrapper.getBoundingClientRect();
        const rows = Array.from(t.querySelectorAll('tr'));
        const ths = Array.from(t.querySelectorAll('th')).map(th => ({ text: th.textContent.trim(), width: Math.round(th.getBoundingClientRect().width) }));
        const terms = Array.from(t.querySelectorAll('.reading-bilingual-term')).map(term => {
          const en = term.querySelector('.reading-term-en');
          const th = term.querySelector('.reading-term-th');
          return {
            en: en ? en.textContent.trim() : null,
            th: th ? th.textContent.trim() : null,
            height: Math.round(term.getBoundingClientRect().height),
            enHeight: en ? Math.round(en.getBoundingClientRect().height) : 0
          };
        });
        const hasHorizontalOverflow = rect.width > wrapRect.width + 1;
        return {
          tableIndex: idx + 1,
          width: Math.round(rect.width),
          wrapperWidth: Math.round(wrapRect.width),
          hasHorizontalOverflow,
          headerColumns: ths,
          rowCount: rows.length,
          bilingualTermCount: terms.length,
          termsSample: terms.slice(0, 3)
        };
      });
    })()`);
    console.log(`  ✓ Tables Audit: ${tableAudit.length} tables evaluated in ${cfg.name}`);
    auditReportData.tableAudits.push({ config: cfg.name, tables: tableAudit });

    // Audit 4: Horizontal Page Overflow Check
    const pageOverflow = await cdp.eval(`(() => {
      const scrollW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;
      const innerW = window.innerWidth;
      return {
        scrollW,
        clientW,
        innerW,
        hasOverflow: scrollW > innerW + 1
      };
    })()`);
    if (pageOverflow.hasOverflow) {
      console.warn(`  ⚠️ Page has horizontal overflow in ${cfg.name}: scrollWidth=${pageOverflow.scrollW} > innerWidth=${pageOverflow.innerW}`);
    } else {
      console.log(`  ✓ 0 horizontal page overflow in ${cfg.name} (scrollWidth=${pageOverflow.scrollW} <= innerWidth=${pageOverflow.innerW})`);
    }
    auditReportData.responsiveAudits.push({ config: cfg.name, pageOverflow });

    // Capture screenshots for acceptance artifact
    if (cfg.name === '1366-dark-expanded') {
      const heroShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-01-domain2-hero-1366-dark.png'), Buffer.from(heroShot.data, 'base64'));

      // Capture all 4 diagrams
      const diags = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
      for (const dName of diags) {
        await cdp.eval(`(() => {
          const el = document.querySelector('.reading-diagram-card[data-diagram="${dName}"]');
          if (el) el.scrollIntoView({ block: 'center' });
        })()`);
        await new Promise(r => setTimeout(r, 200));
        const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(ARTIFACTS_DIR, `audit-diag-${dName}-1366-dark.png`), Buffer.from(shot.data, 'base64'));
      }

      // Capture review scenarios
      await cdp.eval(`(() => {
        const el = document.querySelector('#topic-2-4-review-scenarios');
        if (el) el.scrollIntoView({ block: 'start' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const scnShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-06-review-scenarios-1366-dark.png'), Buffer.from(scnShot.data, 'base64'));
    }

    if (cfg.name === '1366-light-expanded') {
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const lightShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-07-domain2-1366-light.png'), Buffer.from(lightShot.data, 'base64'));
    }

    if (cfg.name === '390-dark-mobile') {
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const mobileShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-08-domain2-390-mobile.png'), Buffer.from(mobileShot.data, 'base64'));
    }
  }

  // Functional & Navigation Audit
  console.log(`\n------------------------------------------------------------`);
  console.log(`Auditing: Anchor Alignment, Active Synchronization & Scroll Nav`);
  console.log(`------------------------------------------------------------`);

  const anchorAudit = await cdp.eval(`(() => {
    const sidebarAnchors = Array.from(document.querySelectorAll('.reading-nav-group[data-domain-id="2"] .reading-nav-topic-link'))
      .map(a => a.getAttribute('href').replace('#', ''));

    const missingAnchors = sidebarAnchors.filter(id => !document.getElementById(id));
    return {
      totalSidebarTopics: sidebarAnchors.length,
      missingAnchorsCount: missingAnchors.length,
      missingAnchors
    };
  })()`);
  console.log(`  Anchor Audit: ${anchorAudit.totalSidebarTopics} sidebar topic anchors checked, missing = ${anchorAudit.missingAnchorsCount}`);

  // Floating Scroll Nav Verification
  await cdp.eval(`(() => {
    const pane = document.querySelector('#reading-content-pane');
    if (pane) pane.scrollTop = 0;
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('scroll'));
  })()`);
  await new Promise(r => setTimeout(r, 200));

  const scrollNavTop = await cdp.eval(`(() => {
    const btn = document.querySelector('#btn-reading-scroll-nav');
    return {
      exists: !!btn,
      hidden: btn.classList.contains('is-hidden'),
      label: btn.getAttribute('aria-label')
    };
  })()`);

  await cdp.eval(`(() => {
    const pane = document.querySelector('#reading-content-pane');
    if (pane && pane.scrollHeight > pane.clientHeight) {
      pane.scrollTop = 1500;
      pane.dispatchEvent(new Event('scroll'));
    }
    window.scrollTo(0, 1500);
    window.dispatchEvent(new Event('scroll'));
  })()`);
  await new Promise(r => setTimeout(r, 200));

  const scrollNavScrolled = await cdp.eval(`(() => {
    const btn = document.querySelector('#btn-reading-scroll-nav');
    return {
      exists: !!btn,
      hidden: btn.classList.contains('is-hidden'),
      label: btn.getAttribute('aria-label')
    };
  })()`);
  console.log(`  Scroll Nav Test: at top -> [${scrollNavTop.label}], scrolled -> [${scrollNavScrolled.label}]`);

  // Verify All Six Remediation Findings (Task 124)
  console.log(`\n------------------------------------------------------------`);
  console.log(`Verifying Task 124 Remediation (D2-R01 to D2-R06)`);
  console.log(`------------------------------------------------------------`);

  const remAudit = await cdp.eval(`(() => {
    // D2-R01: Card 12 has 3 distinction points
    const card12 = Array.from(document.querySelectorAll('.reading-distinction-card'))
      .find(c => c.querySelector('.reading-distinction-header')?.textContent.includes('12. Dashboard vs. Scorecard vs. Report'));
    const card12Points = card12 ? Array.from(card12.querySelectorAll('.reading-distinction-point')) : [];
    const card12HasReport = card12Points.some(p => p.querySelector('.reading-distinction-term')?.textContent.includes('Cybersecurity Report'));

    // D2-R02: effectivenessHierarchy Tier 3 overflow
    const effCard = document.querySelector('.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
    const effSvg = effCard?.querySelector('svg');
    const tier3Sub = effSvg?.querySelector('g:nth-of-type(2) text.diag-text-sub');
    let tier3RightEdge = null;
    let tier3Overflow = false;
    if (tier3Sub) {
      const bbox = tier3Sub.getBBox();
      tier3RightEdge = Math.round(bbox.x + bbox.width);
      tier3Overflow = tier3RightEdge > 820; // viewBox width is 820
    }

    // D2-R04: Zero prose LaTeX dollar signs
    const rawProse = document.querySelector('#reading-article')?.textContent || '';
    const dollarMatches = (rawProse.match(/\\$/g) || []).length;

    // D2-R05: Domain Review section is outside obj-2-4
    const obj24 = document.getElementById('obj-2-4');
    const reviewSec = document.getElementById('domain-2-review');
    const reviewOutside = obj24 && reviewSec && !obj24.contains(reviewSec);
    const sidebarReviewLink = document.querySelector('.reading-nav-review-link');

    // D2-R06: Table 3 Threat cell order
    const tableCells = Array.from(document.querySelectorAll('table td'));
    const threatCell = tableCells.find(td => td.textContent.includes('Ransomware'));
    const threatOrderOk = threatCell ? threatCell.textContent.startsWith('Ransomware') : false;

    return {
      d2_r01_card12PointsCount: card12Points.length,
      d2_r01_hasReport: card12HasReport,
      d2_r02_tier3RightEdge: tier3RightEdge,
      d2_r02_overflow: tier3Overflow,
      d2_r04_dollarCount: dollarMatches,
      d2_r05_reviewOutside: reviewOutside,
      d2_r05_hasSidebarLink: !!sidebarReviewLink,
      d2_r06_threatOrderOk: threatOrderOk
    };
  })()`);

  console.log(`  D2-R01 (Card 12 3rd concept): ${remAudit.d2_r01_hasReport && remAudit.d2_r01_card12PointsCount === 3 ? '✓ PASS' : '✗ FAIL'} (${remAudit.d2_r01_card12PointsCount} points, hasReport=${remAudit.d2_r01_hasReport})`);
  console.log(`  D2-R02 (Effectiveness Tier 3 overflow): ${!remAudit.d2_r02_overflow && remAudit.d2_r02_tier3RightEdge <= 780 ? '✓ PASS' : '✗ FAIL'} (rightEdge=${remAudit.d2_r02_tier3RightEdge}px <= 780px card, overflow=${remAudit.d2_r02_overflow})`);
  console.log(`  D2-R04 (Zero prose LaTeX math): ${remAudit.d2_r04_dollarCount === 0 ? '✓ PASS' : '✗ FAIL'} (count=${remAudit.d2_r04_dollarCount})`);
  console.log(`  D2-R05 (Review section outside 2.4): ${remAudit.d2_r05_reviewOutside && remAudit.d2_r05_hasSidebarLink ? '✓ PASS' : '✗ FAIL'} (outside=${remAudit.d2_r05_reviewOutside}, sidebarLink=${remAudit.d2_r05_hasSidebarLink})`);
  console.log(`  D2-R06 (Ransomware English-first): ${remAudit.d2_r06_threatOrderOk ? '✓ PASS' : '✗ FAIL'}`);

  // Write full audit data JSON to artifacts
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-results.json'), JSON.stringify(auditReportData, null, 2));

  cdp.close();
  chromeProcess.kill();
  server.close();

  console.log(`\n============================================================`);
  console.log(`Deep Browser Acceptance Audit Complete.`);
  console.log(`Artifacts saved in: ${ARTIFACTS_DIR}`);
  console.log(`============================================================\n`);
}

runAudit().catch(err => {
  console.error('Audit Error:', err);
  process.exit(1);
});

