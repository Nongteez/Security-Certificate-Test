import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5188;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain1-unresolved-audit');

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

// Contrast ratio helpers
function parseRgb(colorStr) {
  if (!colorStr) return { r: 0, g: 0, b: 0 };
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return { r: 0, g: 0, b: 0 };
  return { r: parseInt(match[1], 10), g: parseInt(match[2], 10), b: parseInt(match[3], 10) };
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
  console.log('============================================================');
  console.log('Reading Notes Domain 1: Unresolved Fixes & Verification Audit');
  console.log('============================================================\n');

  const server = await startServer();
  console.log(`[1] Dev server running at http://127.0.0.1:${PORT}/`);

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
    throw new Error('Failed to connect to Chrome remote debugging port 9452');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9452/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  await new Promise(r => setTimeout(r, 1000));

  // Navigate to Reading Domain 1
  await cdp.eval(`
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  `);
  await new Promise(r => setTimeout(r, 800));

  await cdp.eval(`
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  `);
  await new Promise(r => setTimeout(r, 2000));

  // Audit results collection
  const auditResults = {};

  const viewports = [
    { name: '1366-dark-expanded', width: 1366, height: 768, theme: 'dark', collapseSidebar: false },
    { name: '1366-light-expanded', width: 1366, height: 768, theme: 'light', collapseSidebar: false },
    { name: '1366-dark-collapsed', width: 1366, height: 768, theme: 'dark', collapseSidebar: true },
    { name: '1920-dark-expanded', width: 1920, height: 1080, theme: 'dark', collapseSidebar: false }
  ];

  for (const vp of viewports) {
    console.log(`\nAuditing at Viewport: ${vp.width}x${vp.height} | Theme: ${vp.theme} | Sidebar: ${vp.collapseSidebar ? 'COLLAPSED' : 'EXPANDED'}`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: false
    });

    await cdp.eval(`
      (() => {
        document.documentElement.setAttribute('data-theme', '${vp.theme}');
        if ('${vp.theme}' === 'dark') {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
        } else {
          document.body.classList.add('light-theme');
          document.body.classList.remove('dark-theme');
        }

        const layout = document.querySelector('#reading-layout');
        if (layout) {
          if (${vp.collapseSidebar}) {
            layout.classList.add('sidebar-collapsed');
          } else {
            layout.classList.remove('sidebar-collapsed');
          }
        }
      })();
    `);
    await new Promise(r => setTimeout(r, 500));

    // Execute audit inspection in page
    const inspection = await cdp.eval(`
      (() => {
        const results = {};

        // Item A: MFA Cards (Section 1.1.4)
        const mfaStack = document.querySelector('.reading-mfa-stack');
        if (mfaStack) {
          const cards = Array.from(mfaStack.querySelectorAll('.reading-mfa-item'));
          const cardData = cards.map((c, idx) => {
            const icon = c.querySelector('.reading-mfa-icon');
            const num = c.querySelector('.reading-mfa-num');
            const titleGroup = c.querySelector('.reading-mfa-title-group');
            const title = c.querySelector('.reading-mfa-title');
            const subtitle = c.querySelector('.reading-mfa-subtitle');

            const iconR = icon.getBoundingClientRect();
            const numR = num.getBoundingClientRect();
            const groupR = titleGroup.getBoundingClientRect();
            const titleR = title.getBoundingClientRect();
            const subR = subtitle.getBoundingClientRect();

            const cComp = window.getComputedStyle(c);
            const titleComp = window.getComputedStyle(title);

            return {
              factor: idx + 1,
              titleText: title.innerText.trim(),
              subText: subtitle.innerText.trim(),
              // Inline check: vertical alignment
              isInline: Math.abs(titleR.top - subR.top) < 10 && subR.left >= (titleR.right - 2),
              gap: subR.left - titleR.right,
              // Vertical center diff across icon, num, group
              iconCenterY: iconR.top + iconR.height / 2,
              numCenterY: numR.top + numR.height / 2,
              groupCenterY: groupR.top + groupR.height / 2,
              borderLeft: cComp.borderLeft,
              titleMarginTop: titleComp.marginTop
            };
          });
          results.itemA = { found: true, cards: cardData };
        } else {
          results.itemA = { found: false };
        }

        // Item B: Security Control Timeline (Section 1.4.2)
        const timelineCard = document.querySelector('[data-diagram="controlTimeline"]');
        if (timelineCard) {
          const svg = timelineCard.querySelector('svg');
          const svgRect = svg ? svg.getBoundingClientRect() : null;
          const badges = Array.from(timelineCard.querySelectorAll('.diag-timeline-badge')).map(r => window.getComputedStyle(r).fill);
          const badgeTexts = Array.from(timelineCard.querySelectorAll('.diag-timeline-badge-text')).map(t => {
            return { text: t.textContent.trim(), fill: window.getComputedStyle(t).fill };
          });
          const titles = Array.from(timelineCard.querySelectorAll('.diag-timeline-title')).map(t => {
            return { text: t.textContent.trim(), fill: window.getComputedStyle(t).fill };
          });
          const descs = Array.from(timelineCard.querySelectorAll('.diag-timeline-desc')).map(t => {
            return { text: t.textContent.trim(), fill: window.getComputedStyle(t).fill };
          });
          const examples = Array.from(timelineCard.querySelectorAll('.diag-timeline-example')).map(t => {
            return { text: t.textContent.trim(), fill: window.getComputedStyle(t).fill };
          });
          const caption = timelineCard.querySelector('.reading-timeline-caption');
          const captionRect = caption ? caption.getBoundingClientRect() : null;
          const captionText = caption ? caption.querySelector('.reading-timeline-caption-text') : null;

          results.itemB = {
            found: true,
            viewBox: svg?.getAttribute('viewBox'),
            svgWidth: svgRect?.width,
            badges,
            badgeTexts,
            titles,
            descs,
            examples,
            caption: {
              found: !!caption,
              width: captionRect?.width,
              cardWidth: timelineCard.getBoundingClientRect().width,
              text: captionText?.textContent?.trim()
            }
          };
        } else {
          results.itemB = { found: false };
        }

        // Item C: Security Document Hierarchy Diagram (Section 1.3.4)
        const docDiagram = document.querySelector('[data-diagram="documentHierarchy"]');
        if (docDiagram) {
          const svg = docDiagram.querySelector('svg');
          const viewBox = svg?.getAttribute('viewBox');
          const texts = Array.from(svg.querySelectorAll('text')).map(t => {
            const comp = window.getComputedStyle(t);
            const rect = t.getBoundingClientRect();
            return {
              text: t.textContent.trim(),
              x: t.getAttribute('x'),
              y: t.getAttribute('y'),
              className: t.getAttribute('class'),
              fill: comp.fill,
              fontSize: comp.fontSize,
              width: rect.width,
              rect: { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom }
            };
          });
          const polygons = Array.from(svg.querySelectorAll('polygon')).map(p => ({
            points: p.getAttribute('points'),
            className: p.getAttribute('class')
          }));
          const svgRect = svg.getBoundingClientRect();
          results.itemC = {
            found: true,
            viewBox,
            svgRect: { width: svgRect.width, height: svgRect.height, left: svgRect.left, right: svgRect.right },
            texts,
            polygons
          };
        } else {
          results.itemC = { found: false };
        }

        // Item D: Security Document Hierarchy Table (Section 1.3.4)
        // Find table under 1.3.4 (following documentHierarchy diagram)
        const docTableWrapper = docDiagram ? docDiagram.nextElementSibling : null;
        const docTable = docTableWrapper ? docTableWrapper.querySelector('table') : null;
        if (docTable) {
          const rows = Array.from(docTable.querySelectorAll('tbody tr')).map(tr => {
            const cells = Array.from(tr.querySelectorAll('td')).map((td, cIdx) => {
              const rect = td.getBoundingClientRect();
              const comp = window.getComputedStyle(td);
              return {
                col: cIdx + 1,
                html: td.innerHTML.trim(),
                text: td.textContent.trim(),
                width: rect.width,
                height: rect.height,
                wordBreak: comp.wordBreak,
                overflowWrap: comp.overflowWrap
              };
            });
            return cells;
          });

          // Check specifically for mid-word breaking of "Mandatory" or "Procedure"
          const enTerms = Array.from(docTable.querySelectorAll('.reading-term-en')).map(el => {
            const rect = el.getBoundingClientRect();
            const comp = window.getComputedStyle(el);
            return {
              text: el.textContent.trim(),
              width: rect.width,
              height: rect.height,
              lineHeight: parseFloat(comp.lineHeight) || 20,
              isMultiline: rect.height > (parseFloat(comp.lineHeight) || 20) * 1.5
            };
          });

          results.itemD = {
            found: true,
            rows,
            enTerms
          };
        } else {
          results.itemD = { found: false };
        }

        // Item E: General Bilingual Terminology Tables
        const allBilingualCells = Array.from(document.querySelectorAll('.reading-bilingual-term')).map(cell => {
          const en = cell.querySelector('.reading-term-en');
          const th = cell.querySelector('.reading-term-th');
          const enRect = en ? en.getBoundingClientRect() : null;
          const thRect = th ? th.getBoundingClientRect() : null;
          return {
            enText: en?.textContent?.trim(),
            thText: th?.textContent?.trim(),
            isStacked: enRect && thRect && (thRect.top >= enRect.bottom - 2),
            hasBold: !!en?.querySelector('strong')
          };
        });
        results.itemE = {
          count: allBilingualCells.length,
          sample: allBilingualCells.slice(0, 10),
          allStacked: allBilingualCells.every(c => c.isStacked),
          allBold: allBilingualCells.every(c => c.hasBold)
        };

        // Item F: Paragraph Alignment and Width
        const lead = document.querySelector('.reading-lead');
        const obj1Intro = document.querySelector('#obj-1-1')?.nextElementSibling;
        const section111P = document.querySelector('#topic-1-1-infosec-triad')?.nextElementSibling?.nextElementSibling;
        const table1 = document.querySelector('.reading-table-wrapper');

        const leadR = lead?.getBoundingClientRect();
        const obj1R = obj1Intro?.getBoundingClientRect();
        const p111R = section111P?.getBoundingClientRect();
        const tableR = table1?.getBoundingClientRect();

        results.itemF = {
          lead: { text: lead?.textContent?.substring(0, 40), left: leadR?.left, width: leadR?.width, maxWidth: lead ? window.getComputedStyle(lead).maxWidth : null },
          obj1: { text: obj1Intro?.textContent?.substring(0, 40), left: obj1R?.left, width: obj1R?.width, maxWidth: obj1Intro ? window.getComputedStyle(obj1Intro).maxWidth : null },
          p111: { text: section111P?.textContent?.substring(0, 40), left: p111R?.left, width: p111R?.width, maxWidth: section111P ? window.getComputedStyle(section111P).maxWidth : null },
          table1: { left: tableR?.left, width: tableR?.width }
        };

        // Item G: Review Scenario Cards (Section 1.5.4)
        const scenarioCards = Array.from(document.querySelectorAll('.reading-scenario-card')).map((sc, idx) => {
          const comp = window.getComputedStyle(sc);
          const answerBox = sc.querySelector('.reading-scenario-answer');
          const ansComp = answerBox ? window.getComputedStyle(answerBox) : null;
          const situation = sc.querySelector('.reading-scenario-situation');
          const question = sc.querySelector('.reading-scenario-question');

          return {
            scenario: idx + 1,
            borderLeft: comp.borderLeft,
            boxShadow: comp.boxShadow,
            hasBlueAccent: comp.borderLeft.includes('rgb(58, 134, 255)') || comp.borderLeft.includes('rgb(37, 99, 235)'),
            answerBorderLeft: ansComp?.borderLeft,
            answerBg: ansComp?.backgroundColor,
            hasGreenBorder: ansComp?.borderLeft.includes('rgb(16, 185, 129)'),
            hasNestedGrayBg: ansComp?.backgroundColor !== 'rgba(0, 0, 0, 0)' && ansComp?.backgroundColor !== 'transparent',
            hasSituation: !!situation,
            hasQuestion: !!question,
            hasAnswer: !!answerBox
          };
        });
        results.itemG = { count: scenarioCards.length, cards: scenarioCards };

        // Item H: Ethics Mnemonic (Section 1.5.3)
        const mnemonicHighlights = Array.from(document.querySelectorAll('.reading-mnemonic-highlight')).map(el => {
          const comp = window.getComputedStyle(el);
          return {
            text: el.textContent,
            color: comp.color,
            fontWeight: comp.fontWeight
          };
        });
        results.itemH = { count: mnemonicHighlights.length, items: mnemonicHighlights };

        // Item I: Concept Distinctions Matrix (Section 1.5.4)
        const distinctionGrid = document.querySelector('.reading-distinction-grid');
        const distinctionCards = distinctionGrid ? Array.from(distinctionGrid.querySelectorAll('.reading-distinction-card')).map((card, idx) => {
          const terms = Array.from(card.querySelectorAll('.reading-distinction-term')).map(t => {
            const comp = window.getComputedStyle(t);
            const rect = t.getBoundingClientRect();
            return { text: t.textContent.trim(), display: comp.display, marginBottom: comp.marginBottom, width: rect.width };
          });
          const descs = Array.from(card.querySelectorAll('.reading-distinction-desc')).map(d => {
            return { text: d.textContent.trim() };
          });
          return { cardIdx: idx + 1, terms, descs };
        }) : [];
        results.itemI = { found: !!distinctionGrid, count: distinctionCards.length, cards: distinctionCards };

        // Item J: Floating Scroll Navigation
        const scrollBtn = document.querySelector('#btn-reading-scroll-nav');
        const scrollBtnComp = scrollBtn ? window.getComputedStyle(scrollBtn) : null;
        results.itemJ = {
          found: !!scrollBtn,
          display: scrollBtnComp?.display,
          opacity: scrollBtnComp?.opacity,
          ariaLabel: scrollBtn?.getAttribute('aria-label'),
          title: scrollBtn?.getAttribute('title'),
          classList: Array.from(scrollBtn?.classList || [])
        };

        return results;
      })()
    `);

    auditResults[vp.name] = inspection;

    // Take screenshot of key sections for evidence
    // Scroll to Item C & D: Document hierarchy diagram and table
    await cdp.eval(`
      (() => {
        const el = document.querySelector('[data-diagram="documentHierarchy"]');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })();
    `);
    await new Promise(r => setTimeout(r, 400));
    const ssDoc = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, `doc-hierarchy-${vp.name}.png`), Buffer.from(ssDoc.data, 'base64'));

    // Scroll to Item A: MFA cards
    await cdp.eval(`
      (() => {
        const el = document.querySelector('.reading-mfa-stack');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })();
    `);
    await new Promise(r => setTimeout(r, 400));
    const ssMfa = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, `mfa-cards-${vp.name}.png`), Buffer.from(ssMfa.data, 'base64'));

    // Scroll to Item B: Control timeline
    await cdp.eval(`
      (() => {
        const el = document.querySelector('[data-diagram="controlTimeline"]');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })();
    `);
    await new Promise(r => setTimeout(r, 400));
    const ssTimeline = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, `control-timeline-${vp.name}.png`), Buffer.from(ssTimeline.data, 'base64'));

    // Scroll to Item G, H, I: Ethics & Scenarios & Distinction Matrix
    await cdp.eval(`
      (() => {
        const el = document.querySelector('.reading-distinction-grid');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })();
    `);
    await new Promise(r => setTimeout(r, 400));
    const ssDist = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACTS_DIR, `distinction-matrix-${vp.name}.png`), Buffer.from(ssDist.data, 'base64'));
  }

  // Scroll Nav interactive test:
  console.log('\nTesting Item J: Floating Scroll Navigation interactivity...');
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  // Scroll to top
  const scrollTest = await cdp.eval(`
    (() => {
      window.scrollTo(0, 0);
      const btn = document.querySelector('#btn-reading-scroll-nav');
      const state1 = {
        scrollTop: window.scrollY || document.documentElement.scrollTop,
        ariaLabel: btn.getAttribute('aria-label'),
        title: btn.getAttribute('title'),
        hasDownIcon: btn.innerHTML.includes('polyline points="6 9 12 15 18 9"')
      };

      // Scroll to 500px
      window.scrollTo(0, 800);
      window.dispatchEvent(new Event('scroll'));
      const state2 = {
        scrollTop: window.scrollY || document.documentElement.scrollTop,
        ariaLabel: btn.getAttribute('aria-label'),
        title: btn.getAttribute('title'),
        hasUpIcon: btn.innerHTML.includes('polyline points="18 15 12 9 6 15"')
      };

      return { state1, state2 };
    })()
  `);
  auditResults.scrollTest = scrollTest;

  // Save audit data to json
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'audit-inspection.json'), JSON.stringify(auditResults, null, 2));
  console.log(`\nAudit raw data saved to ${path.join(ARTIFACTS_DIR, 'audit-inspection.json')}`);

  cdp.close();
  chromeProcess.kill();
  server.close();
  console.log('[Dev server and browser closed]');
}

runAudit().catch(err => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
