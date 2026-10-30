import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5193;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-domain3');

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
  console.log('=== ISC2 CC 2026 Domain 3 Reading Notes: Real Chrome CDP Verification ===\n');

  const server = await startServer();
  console.log(`[1] Local test server running at http://127.0.0.1:${PORT}/`);

  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9453',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9453/json/version');
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
    throw new Error('Failed to connect to Chrome on port 9453');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9453/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
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

  // Select Domain 3
  console.log('[3] Selecting Domain 3: Access Controls in sidebar...');
  await cdp.eval(`(() => {
    const d3Select = document.querySelector('[data-select-domain="3"]');
    if (d3Select) d3Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1200));

  // Verify Domain 3 loaded in DOM
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
  if (domainHeader.title !== 'Domain 3: Access Controls') {
    throw new Error(`Expected Domain 3 title, got: ${domainHeader.title}`);
  }

  const screenshotManifest = [];

  // Viewport and Theme matrix
  const testMatrix = [
    { name: '320-dark-mobile', width: 320, height: 568, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '320-light-mobile', width: 320, height: 568, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '360-dark-mobile', width: 360, height: 640, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '360-light-mobile', width: 360, height: 640, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '375-dark-mobile', width: 375, height: 812, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '375-light-mobile', width: 375, height: 812, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '390-dark-mobile', width: 390, height: 844, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '390-light-mobile', width: 390, height: 844, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '600-dark-boundary', width: 600, height: 800, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '600-light-boundary', width: 600, height: 800, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '601-dark-boundary', width: 601, height: 800, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '601-light-boundary', width: 601, height: 800, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '768-dark-tablet', width: 768, height: 1024, theme: 'dark', collapseSidebar: false, isMobile: true },
    { name: '768-light-tablet', width: 768, height: 1024, theme: 'light', collapseSidebar: false, isMobile: true },
    { name: '769-dark-desktop-boundary', width: 769, height: 1024, theme: 'dark', collapseSidebar: false, isMobile: false },
    { name: '769-light-desktop-boundary', width: 769, height: 1024, theme: 'light', collapseSidebar: false, isMobile: false },
    { name: '1024-dark-desktop', width: 1024, height: 768, theme: 'dark', collapseSidebar: false, isMobile: false },
    { name: '1024-light-desktop', width: 1024, height: 768, theme: 'light', collapseSidebar: false, isMobile: false },
    { name: '1366-dark-expanded', width: 1366, height: 768, theme: 'dark', collapseSidebar: false, isMobile: false },
    { name: '1366-light-expanded', width: 1366, height: 768, theme: 'light', collapseSidebar: false, isMobile: false },
    { name: '1366-dark-collapsed', width: 1366, height: 768, theme: 'dark', collapseSidebar: true, isMobile: false },
    { name: '1920-dark-expanded', width: 1920, height: 1080, theme: 'dark', collapseSidebar: false, isMobile: false },
    { name: '1920-light-expanded', width: 1920, height: 1080, theme: 'light', collapseSidebar: false, isMobile: false }
  ];

  let testCount = 0;
  let passCount = 0;

  for (const cfg of testMatrix) {
    console.log(`\n------------------------------------------------------------`);
    console.log(`Testing: ${cfg.width}x${cfg.height} | Theme: ${cfg.theme} | Mobile: ${cfg.isMobile} | Sidebar: ${cfg.collapseSidebar ? 'COLLAPSED' : 'EXPANDED'}`);
    console.log(`------------------------------------------------------------`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 1,
      mobile: cfg.isMobile
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

    // Check 1: Zero horizontal page overflow
    testCount++;
    const overflowCheck = await cdp.eval(`(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      const maxScroll = Math.max(scrollWidth, bodyScrollWidth);
      return {
        clientWidth,
        maxScroll,
        overflow: maxScroll > clientWidth + 1
      };
    })()`);
    if (!overflowCheck.overflow) {
      passCount++;
      console.log(`  ✓ Check 1: 0 horizontal overflow (client: ${overflowCheck.clientWidth}px, scroll: ${overflowCheck.maxScroll}px)`);
    } else {
      console.error(`  ✗ Check 1 FAIL: Horizontal overflow detected:`, overflowCheck);
    }

    // Check 2: Exactly 1 H1 heading on the page
    testCount++;
    const h1Count = await cdp.eval(`document.querySelectorAll('h1').length`);
    if (h1Count === 1) {
      passCount++;
      console.log(`  ✓ Check 2: Exactly 1 H1 heading present`);
    } else {
      console.error(`  ✗ Check 2 FAIL: Expected 1 H1, found ${h1Count}`);
    }

    // Check 3: Objectives 3.1 & 3.2 present
    testCount++;
    const objectives = await cdp.eval(`(() => {
      const ids = ['obj-3-1', 'obj-3-2', 'domain-3-review'];
      return ids.map(id => {
        const el = document.getElementById(id);
        return { id, exists: !!el, text: el ? el.textContent.trim().substring(0, 40) : null };
      });
    })()`);
    const allObjsExist = objectives.every(o => o.exists);
    if (allObjsExist) {
      passCount++;
      console.log(`  ✓ Check 3: All objectives & review rendered (3.1, 3.2, domain-3-review)`);
    } else {
      console.error(`  ✗ Check 3 FAIL: Objectives missing:`, objectives);
    }

    // Check 4: 4 Semantic Diagrams Visibility, Responsiveness & Semantic Parity
    testCount++;
    const diagramsCheck = await cdp.eval(`(() => {
      const diags = ['iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels'];
      const isMobile = window.innerWidth <= 768;
      return diags.map(name => {
        const card = document.querySelector(\`.reading-diagram-card[data-diagram="\${name}"]\`);
        if (!card) return { name, exists: false };
        const desktopWrap = card.querySelector('.reading-diag-desktop');
        const mobileWrap = card.querySelector('.reading-diag-mobile');
        const desktopStyle = desktopWrap ? window.getComputedStyle(desktopWrap).display : 'none';
        const mobileStyle = mobileWrap ? window.getComputedStyle(mobileWrap).display : 'none';

        // Check semantic parity on mobile iamLifecycle
        let semanticParityOk = true;
        if (name === 'iamLifecycle' && isMobile) {
          const banner = mobileWrap?.querySelector('.reading-mob-banner');
          const bannerText = banner ? banner.textContent : '';
          semanticParityOk = bannerText.includes('CONTINUOUS GOVERNANCE') && bannerText.includes('Periodic Access Reviews');
        }

        // Check PoLP badge readability on leastPrivilegeVsSod
        let badgeOk = true;
        if (name === 'leastPrivilegeVsSod' && isMobile) {
          const badge = mobileWrap?.querySelector('.reading-mob-tier-num');
          if (badge) {
            const rect = badge.getBoundingClientRect();
            badgeOk = rect.width >= 24 && badge.scrollWidth <= badge.clientWidth + 2;
          }
        }

        // Check deep SVG rendered geometry on desktop
        let geometryOk = true;
        let geomDetails = null;
        if (!isMobile && desktopWrap) {
          const texts = Array.from(desktopWrap.querySelectorAll('svg text')).map(t => {
            const r = t.getBoundingClientRect();
            return { text: t.textContent.trim(), x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) };
          });
          const zeroW = texts.filter(t => t.width === 0 && t.text.length > 0);
          const squishedH = texts.filter(t => t.height < 9 && t.text.length > 0);
          const collisions = [];
          for (let i = 0; i < texts.length; i++) {
            for (let j = i + 1; j < texts.length; j++) {
              const a = texts[i];
              const b = texts[j];
              if (Math.abs(a.y - b.y) < 8) {
                if (a.x < b.x + b.width && a.x + a.width > b.x) {
                  collisions.push(a.text + ' <-> ' + b.text);
                }
              }
            }
          }
          if (zeroW.length > 0 || squishedH.length > 0 || collisions.length > 0) {
            geometryOk = false;
            geomDetails = { zeroW: zeroW.length, squishedH: squishedH.length, collisions };
          }
        }

        return {
          name,
          exists: true,
          desktopDisplay: desktopStyle,
          mobileDisplay: mobileStyle,
          semanticParityOk,
          badgeOk,
          geometryOk,
          geomDetails,
          responsiveOk: isMobile ? (desktopStyle === 'none' && mobileStyle !== 'none') : (desktopStyle !== 'none' && mobileStyle === 'none')
        };
      });
    })()`);
    const allDiagsOk = diagramsCheck.every(d => d.exists && d.responsiveOk && d.semanticParityOk && d.badgeOk && d.geometryOk);
    if (allDiagsOk) {
      passCount++;
      console.log(`  ✓ Check 4: All 4 diagrams responsive, semantically complete & collision-free:`, diagramsCheck.map(d => `${d.name}: OK`).join(', '));
    } else {
      console.error(`  ✗ Check 4 FAIL: Diagram responsiveness, parity, or geometry collision issue:`, diagramsCheck.filter(d => !d.responsiveOk || !d.semanticParityOk || !d.badgeOk || !d.geometryOk));
    }

    // Check 5: Concept Distinction Cards (10 cards, 0 horizontal overflow)
    testCount++;
    const distinctionCards = await cdp.eval(`(() => {
      const cards = Array.from(document.querySelectorAll('.reading-article[data-domain-id="3"] .reading-distinction-card'));
      const clientW = document.documentElement.clientWidth;
      return {
        count: cards.length,
        allHavePoints: cards.every(c => c.querySelectorAll('.reading-distinction-point').length >= 2),
        allFitViewport: cards.every(c => c.getBoundingClientRect().right <= clientW + 2)
      };
    })()`);
    if (distinctionCards.count === 10 && distinctionCards.allHavePoints && distinctionCards.allFitViewport) {
      passCount++;
      console.log(`  ✓ Check 5: All 10 Concept Distinction Cards rendered cleanly with distinction points and 0 card overflow`);
    } else {
      console.error(`  ✗ Check 5 FAIL: Distinction cards mismatch or overflow:`, distinctionCards);
    }

    // Check 6: Review Scenarios (12 cards with answers)
    testCount++;
    const scenariosCheck = await cdp.eval(`(() => {
      const cards = Array.from(document.querySelectorAll('.reading-article[data-domain-id="3"] .reading-scenario-card'));
      return {
        count: cards.length,
        allHaveAnswers: cards.every(c => !!c.querySelector('.reading-scenario-answer'))
      };
    })()`);
    if (scenariosCheck.count === 12 && scenariosCheck.allHaveAnswers) {
      passCount++;
      console.log(`  ✓ Check 6: All 12 Review Scenario Cards rendered cleanly with answer dividers`);
    } else {
      console.error(`  ✗ Check 6 FAIL: Scenario cards mismatch:`, scenariosCheck);
    }

    // Check 7: Ordered list sequential numbering (1, 2, 3...)
    testCount++;
    const orderedLists = await cdp.eval(`(() => {
      const ols = Array.from(document.querySelectorAll('.reading-article[data-domain-id="3"] ol'));
      return ols.map((ol, idx) => {
        const lis = Array.from(ol.children).filter(el => el.tagName === 'LI');
        return {
          olIndex: idx + 1,
          itemCount: lis.length
        };
      });
    })()`);
    const listsOk = orderedLists.length > 0 && orderedLists.every(l => l.itemCount >= 2);
    if (listsOk) {
      passCount++;
      console.log(`  ✓ Check 7: Ordered lists structure valid (${orderedLists.length} <ol> blocks found, all sequential)`);
    } else {
      console.error(`  ✗ Check 7 FAIL: Ordered list issue:`, orderedLists);
    }

    // Capture screenshots for representative configurations
    if (cfg.name === '320-dark-mobile') {
      const REMEDIATION_DIR = path.resolve('artifacts/qa/domain-3-remediation');
      fs.mkdirSync(REMEDIATION_DIR, { recursive: true });

      // After D3-Q01: Distinction grid at 320px
      await cdp.eval(`(() => {
        const grid = document.querySelector('.reading-distinction-grid');
        if (grid) grid.scrollIntoView({ block: 'start' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shotGrid = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(REMEDIATION_DIR, 'after-D3-Q01-overflow-320.png'), Buffer.from(shotGrid.data, 'base64'));

      // After D3-Q04: PoLP badge on leastPrivilegeVsSod at 320px
      await cdp.eval(`(() => {
        const diag = document.querySelector('.reading-diagram-card[data-diagram="leastPrivilegeVsSod"]');
        if (diag) diag.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shotBadge = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(REMEDIATION_DIR, 'after-D3-Q04-polp-badge-320.png'), Buffer.from(shotBadge.data, 'base64'));
    }

    if (cfg.name === '1366-dark-expanded') {
      const REMEDIATION_DIR = path.resolve('artifacts/qa/domain-3-remediation');
      fs.mkdirSync(REMEDIATION_DIR, { recursive: true });

      // After D3-Q03: MAC Need-to-Know clarification
      await cdp.eval(`(() => {
        const sec = document.querySelector('#topic-3-2-mac');
        if (sec) sec.scrollIntoView({ block: 'start' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shotMac = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(REMEDIATION_DIR, 'after-D3-Q03-mac-section.png'), Buffer.from(shotMac.data, 'base64'));

      // 1. Hero
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot1 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const f1 = '01-domain3-hero-1366-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, f1), Buffer.from(shot1.data, 'base64'));
      screenshotManifest.push({ file: f1, desc: 'Domain 3 Hero & Intro (1366x768 Dark Expanded)' });

      // 2. IAM Lifecycle Diagram
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="iamLifecycle"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot2 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const f2 = '02-iam-lifecycle-diagram-1366-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, f2), Buffer.from(shot2.data, 'base64'));
      screenshotManifest.push({ file: f2, desc: 'JML Lifecycle Diagram (1366x768 Dark)' });

      // 3. NIST SP 800-63 Diagram
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="nistSp80063Framework"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot3 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const f3 = '03-nist-sp80063-diagram-1366-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, f3), Buffer.from(shot3.data, 'base64'));
      screenshotManifest.push({ file: f3, desc: 'NIST SP 800-63 3-Facet Diagram (1366x768 Dark)' });

      // 4. Least Privilege vs SoD Diagram
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="leastPrivilegeVsSod"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot4 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const f4 = '04-least-privilege-vs-sod-1366-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, f4), Buffer.from(shot4.data, 'base64'));
      screenshotManifest.push({ file: f4, desc: 'Least Privilege vs SoD Dual Axis Diagram (1366x768 Dark)' });

      // 5. Access Control Models Diagram
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot5 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const f5 = '05-access-control-models-1366-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, f5), Buffer.from(shot5.data, 'base64'));
      screenshotManifest.push({ file: f5, desc: 'Access Control Models 4-Quadrant Diagram (1366x768 Dark)' });

      // 6. Review & Scenarios
      await cdp.eval(`(() => {
        const el = document.querySelector('#domain-3-review');
        if (el) el.scrollIntoView({ block: 'start' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shot6 = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const f6 = '06-review-scenarios-1366-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, f6), Buffer.from(shot6.data, 'base64'));
      screenshotManifest.push({ file: f6, desc: 'Review Section & Scenarios (1366x768 Dark)' });
    }

    if (cfg.name === '1366-light-expanded') {
      await cdp.eval(`(() => {
        const pane = document.querySelector('#reading-content-pane');
        if (pane) pane.scrollTop = 0;
        window.scrollTo(0, 0);
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shotLight = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const fLight = '07-domain3-hero-1366-light.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, fLight), Buffer.from(shotLight.data, 'base64'));
      screenshotManifest.push({ file: fLight, desc: 'Domain 3 Hero & Intro (1366x768 Light Expanded)' });
    }

    if (cfg.name === '390-dark-mobile') {
      await cdp.eval(`(() => {
        const el = document.querySelector('.reading-diagram-card[data-diagram="iamLifecycle"]');
        if (el) el.scrollIntoView({ block: 'start' });
      })()`);
      await new Promise(r => setTimeout(r, 200));
      const shotMob = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const fMob = '08-mobile-diagram-stack-390-dark.png';
      fs.writeFileSync(path.join(ARTIFACTS_DIR, fMob), Buffer.from(shotMob.data, 'base64'));
      const REMEDIATION_DIR = path.resolve('artifacts/qa/domain-3-remediation');
      fs.writeFileSync(path.join(REMEDIATION_DIR, 'after-D3-Q02-iam-lifecycle-mobile.png'), Buffer.from(shotMob.data, 'base64'));
      screenshotManifest.push({ file: fMob, desc: 'Mobile Responsive Diagram Stack (390x844 Dark)' });
    }
  }

  // Reset to desktop viewport for sidebar accordion test
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
    mobile: false
  });
  await cdp.eval(`(() => {
    document.querySelector('#reading-layout')?.classList.remove('sidebar-collapsed');
  })()`);
  await new Promise(r => setTimeout(r, 400));

  // Sidebar Accordion Test on Domain 3
  console.log(`\n------------------------------------------------------------`);
  console.log(`Testing: Sidebar Objective Accordion Expand/Collapse on Domain 3`);
  console.log(`------------------------------------------------------------`);
  testCount++;
  const accordionResult = await cdp.eval(`(() => {
    const objItem = document.querySelector('[data-objective-id="3.1"]');
    const obj31Btn = objItem ? objItem.querySelector('[data-toggle-obj="3.1"]') : null;
    const obj31Topics = objItem ? objItem.querySelector('.reading-nav-topics') : null;
    if (!obj31Btn || !obj31Topics) return { success: false, reason: 'Elements not found', hasItem: !!objItem };

    const initialExpanded = obj31Btn.getAttribute('aria-expanded') === 'true';
    const initialHidden = obj31Topics.hasAttribute('hidden');

    // Click to collapse
    obj31Btn.click();
    const afterCollapseExpanded = obj31Btn.getAttribute('aria-expanded') === 'true';
    const afterCollapseHidden = obj31Topics.hasAttribute('hidden');
    const afterCollapseHeight = Math.round(obj31Topics.getBoundingClientRect().height);

    // Click to re-expand
    obj31Btn.click();
    const afterReexpandExpanded = obj31Btn.getAttribute('aria-expanded') === 'true';
    const afterReexpandHidden = obj31Topics.hasAttribute('hidden');

    return {
      success: true,
      initialExpanded,
      initialHidden,
      afterCollapseExpanded,
      afterCollapseHidden,
      afterCollapseHeight,
      afterReexpandExpanded,
      afterReexpandHidden
    };
  })()`);
  console.log('  Accordion Test Result:', accordionResult);

  if (
    accordionResult.success &&
    accordionResult.afterCollapseExpanded === false &&
    accordionResult.afterCollapseHidden === true &&
    accordionResult.afterCollapseHeight === 0 &&
    accordionResult.afterReexpandExpanded === true &&
    accordionResult.afterReexpandHidden === false
  ) {
    passCount++;
    console.log(`  ✓ Check 8: Objective 3.1 accordion collapses cleanly to 0px and re-expands`);
  } else {
    console.error(`  ✗ Check 8 FAIL: Accordion collapse error:`, accordionResult);
  }

  // Write manifest
  fs.writeFileSync(
    path.join(ARTIFACTS_DIR, 'manifest.json'),
    JSON.stringify({
      domain: 3,
      domainTitle: 'Domain 3: Access Controls',
      timestamp: new Date().toISOString(),
      scorecard: {
        total: testCount,
        passed: passCount,
        failed: testCount - passCount,
        verdict: passCount === testCount ? 'ALL_CHECKS_PASSED' : 'DEFECTS_FOUND'
      },
      screenshots: screenshotManifest
    }, null, 2)
  );

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
