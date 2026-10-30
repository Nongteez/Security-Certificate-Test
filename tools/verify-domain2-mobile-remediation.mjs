import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5192;
const CHROME_PORT = 9465;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-mobile-remediation');

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

// Contrast Calculation Helpers
function parseRgb(colorStr, baseBg = [255, 255, 255]) {
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return [0, 0, 0];
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const a = match[4] !== undefined ? parseFloat(match[4]) : 1.0;
  if (a >= 0.99) return [r, g, b];
  return [
    Math.round(r * a + baseBg[0] * (1 - a)),
    Math.round(g * a + baseBg[1] * (1 - a)),
    Math.round(b * a + baseBg[2] * (1 - a))
  ];
}

function getLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(rgb1, rgb2) {
  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

async function verify() {
  console.log('=== Task 126: Domain 2 Mobile Diagram Readability Verification ===\n');

  const server = await startServer();
  console.log(`[1] Local test server started at http://127.0.0.1:${PORT}/`);

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

  if (!versionData) {
    chromeProcess.kill();
    server.close();
    throw new Error(`Failed to connect to Chrome on port ${CHROME_PORT}`);
  }

  const newTabRes = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();
  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  console.log('[2] Chrome CDP connected. Waiting for app mount...');
  await new Promise(r => setTimeout(r, 1200));

  // Navigate to Reading Notes
  console.log('[2.1] Clicking cert card...');
  await cdp.eval(`(() => {
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));

  console.log('[2.2] Clicking Reading Notes button...');
  await cdp.eval(`(() => {
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  console.log('[2.3] Selecting Domain 2: Security Governance...');
  await cdp.eval(`(() => {
    const d2Select = document.querySelector('[data-select-domain="2"]');
    if (d2Select) d2Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  const domainHeader = await cdp.eval(`(() => {
    const title = document.querySelector('.reading-article-title');
    return title ? title.textContent.trim() : null;
  })()`);
  console.log('[2.4] Verified active Domain article:', domainHeader);
  if (domainHeader !== 'Domain 2: Security Governance') {
    throw new Error(`Expected Domain 2: Security Governance, got: ${domainHeader}`);
  }

  const targetDiagrams = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
  const testResults = [];
  const manifest = [];

  // Viewport configurations to test
  const configs = [
    { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true },
    { name: '390x844-light', width: 390, height: 844, theme: 'light', mobile: true },
    { name: '375x812-dark', width: 375, height: 812, theme: 'dark', mobile: true },
    { name: '375x812-light', width: 375, height: 812, theme: 'light', mobile: true },
    { name: '768x1024-dark', width: 768, height: 1024, theme: 'dark', mobile: true, note: 'Tablet boundary (<= 768px)' },
    { name: '769x1024-dark', width: 769, height: 1024, theme: 'dark', mobile: false, note: 'Desktop boundary (>= 769px)' },
    { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
    { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
    { name: '1920x1080-dark', width: 1920, height: 1080, theme: 'dark', mobile: false }
  ];

  for (const cfg of configs) {
    console.log(`\n--- Testing ${cfg.name} (${cfg.width}x${cfg.height}, theme: ${cfg.theme}) ---`);

    // Set viewport
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 2,
      mobile: cfg.mobile
    });

    // Set theme
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

    // Check display switching and measurements for all 4 diagrams
    const diagReport = await cdp.eval(`
      (() => {
        const diagrams = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
        const report = [];

        for (const diagId of diagrams) {
          const card = document.querySelector('.reading-diagram-card[data-diagram="' + diagId + '"]');
          if (!card) {
            report.push({ id: diagId, error: 'Card not found' });
            continue;
          }

          const desktopWrap = card.querySelector('.reading-diag-desktop');
          const mobileWrap = card.querySelector('.reading-diag-mobile');

          const desktopStyle = desktopWrap ? window.getComputedStyle(desktopWrap) : null;
          const mobileStyle = mobileWrap ? window.getComputedStyle(mobileWrap) : null;

          const isDesktopVisible = desktopWrap && desktopStyle.display !== 'none';
          const isMobileVisible = mobileWrap && mobileStyle.display !== 'none';

          // Extract text items from mobile if visible
          let mobileFontSizes = [];
          let textSamples = [];
          if (isMobileVisible) {
            const allElements = mobileWrap.querySelectorAll('*');
            for (const el of allElements) {
              const text = el.innerText?.trim();
              // Check elements that have direct text
              if (text && el.children.length === 0) {
                const cs = window.getComputedStyle(el);
                const fz = parseFloat(cs.fontSize);
                mobileFontSizes.push({
                  tag: el.tagName,
                  className: el.className,
                  text: text.slice(0, 30),
                  fontSize: fz,
                  color: cs.color,
                  backgroundColor: cs.backgroundColor
                });
              }
            }
          }

          // Check card overflow
          const cardBox = card.getBoundingClientRect();
          const cardScrollWidth = card.scrollWidth;
          const cardClientWidth = card.clientWidth;
          const hasCardOverflow = cardScrollWidth > cardClientWidth + 1;

          report.push({
            id: diagId,
            isDesktopVisible,
            isMobileVisible,
            cardWidth: Math.round(cardBox.width),
            hasCardOverflow,
            mobileElementCount: mobileFontSizes.length,
            minMobileFontSize: mobileFontSizes.length ? Math.min(...mobileFontSizes.map(m => m.fontSize)) : null,
            maxMobileFontSize: mobileFontSizes.length ? Math.max(...mobileFontSizes.map(m => m.fontSize)) : null,
            sampleElements: mobileFontSizes.slice(0, 5)
          });
        }

        // Global page overflow
        const docScrollWidth = document.documentElement.scrollWidth;
        const windowWidth = window.innerWidth;
        const pageOverflow = docScrollWidth > windowWidth;

        return {
          diagrams: report,
          docScrollWidth,
          windowWidth,
          pageOverflow
        };
      })()
    `);

    // Verify expectations
    let cfgPass = true;
    for (const d of diagReport.diagrams) {
      if (cfg.mobile) {
        if (!d.isMobileVisible) {
          console.error(`  FAIL [${d.id}]: Mobile HTML wrap should be visible at width ${cfg.width}`);
          cfgPass = false;
        }
        if (d.isDesktopVisible) {
          console.error(`  FAIL [${d.id}]: Desktop SVG wrap should be HIDDEN at width ${cfg.width}`);
          cfgPass = false;
        }
        if (d.minMobileFontSize < 10) {
          console.error(`  FAIL [${d.id}]: Min mobile font size is too small: ${d.minMobileFontSize}px`);
          cfgPass = false;
        }
      } else {
        if (d.isMobileVisible) {
          console.error(`  FAIL [${d.id}]: Mobile HTML wrap should be HIDDEN on desktop at width ${cfg.width}`);
          cfgPass = false;
        }
        if (!d.isDesktopVisible) {
          console.error(`  FAIL [${d.id}]: Desktop SVG wrap should be VISIBLE on desktop at width ${cfg.width}`);
          cfgPass = false;
        }
      }

      if (d.hasCardOverflow) {
        console.error(`  FAIL [${d.id}]: Card has horizontal overflow`);
        cfgPass = false;
      }
    }

    if (diagReport.pageOverflow) {
      console.error(`  FAIL: Document has horizontal page overflow (${diagReport.docScrollWidth} > ${diagReport.windowWidth})`);
      cfgPass = false;
    }

    console.log(`  Visibility: ${cfg.mobile ? 'Mobile HTML active, SVG hidden' : 'SVG active, Mobile HTML hidden'}`);
    console.log(`  Page overflow: ${diagReport.pageOverflow ? 'DETECTED' : 'None (0px)'}`);
    if (cfg.mobile) {
      const minFz = Math.min(...diagReport.diagrams.map(d => d.minMobileFontSize).filter(Boolean));
      const maxFz = Math.max(...diagReport.diagrams.map(d => d.maxMobileFontSize).filter(Boolean));
      console.log(`  Mobile text size range: ${minFz}px – ${maxFz}px (Prev SVG was 3.6px–4.8px)`);
    }
    console.log(`  Status: ${cfgPass ? 'PASS' : 'FAIL'}`);

    testResults.push({ config: cfg.name, pass: cfgPass, details: diagReport });

    // Capture screenshots for 390x844 (Dark & Light) and 1366x768
    if (['390x844-dark', '390x844-light', '1366x768-dark'].includes(cfg.name)) {
      for (const diagId of targetDiagrams) {
        // Scroll to card
        await cdp.eval(`
          (() => {
            const el = document.querySelector('.reading-diagram-card[data-diagram="${diagId}"]');
            if (el) el.scrollIntoView({ block: 'center' });
          })()
        `);
        await new Promise(r => setTimeout(r, 200));

        const clip = await cdp.eval(`
          (() => {
            const el = document.querySelector('.reading-diagram-card[data-diagram="${diagId}"]');
            if (!el) return null;
            const r = el.getBoundingClientRect();
            return {
              x: Math.max(0, r.left),
              y: Math.max(0, r.top),
              width: r.width,
              height: r.height,
              scale: 1
            };
          })()
        `);

        if (clip && clip.width > 0 && clip.height > 0) {
          const shot = await cdp.send('Page.captureScreenshot', {
            format: 'png',
            clip: {
              x: clip.x,
              y: clip.y,
              width: clip.width,
              height: clip.height,
              scale: 1
            }
          });

          const filename = `${diagId}-${cfg.name}.png`;
          const filePath = path.join(ARTIFACTS_DIR, filename);
          fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));

          manifest.push({
            diagram: diagId,
            config: cfg.name,
            file: filename,
            width: clip.width,
            height: clip.height,
            mode: cfg.mobile ? 'Mobile HTML' : 'Desktop SVG'
          });
        }
      }
    }
  }

  // Detailed Contrast Check on Mobile
  console.log('\n--- Quantitative Mobile Contrast Audit (390x844, Dark & Light) ---');
  for (const theme of ['dark', 'light']) {
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await cdp.eval(`
      document.documentElement.setAttribute('data-theme', '${theme}');
      if ('${theme}' === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    `);
    await new Promise(r => setTimeout(r, 200));

    const contrastData = await cdp.eval(`
      (() => {
        const results = [];
        const mobileWraps = document.querySelectorAll('.reading-diag-mobile');
        for (const wrap of mobileWraps) {
          const card = wrap.closest('.reading-diagram-card');
          const diagId = card ? card.getAttribute('data-diagram') : 'unknown';
          const items = wrap.querySelectorAll('h5, h6, p, span, strong, div');
          for (const item of items) {
            if (item.children.length === 0 && item.innerText.trim()) {
              const cs = window.getComputedStyle(item);
              // Find effective background
              let cur = item;
              let bg = cs.backgroundColor;
              while (cur && (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent')) {
                cur = cur.parentElement;
                if (cur) bg = window.getComputedStyle(cur).backgroundColor;
              }
              results.push({
                diagId,
                tag: item.tagName,
                className: item.className,
                text: item.innerText.trim().slice(0, 25),
                color: cs.color,
                bgColor: bg,
                fontSize: cs.fontSize,
                fontWeight: cs.fontWeight
              });
            }
          }
        }
        return results;
      })()
    `);

    const baseBg = theme === 'dark' ? [27, 27, 34] : [241, 245, 249];
    let contrastPass = 0;
    let contrastWarn = 0;
    const samples = [];

    for (const item of contrastData) {
      const fgRgb = parseRgb(item.color, baseBg);
      const bgRgb = parseRgb(item.bgColor, baseBg);
      const ratio = getContrast(fgRgb, bgRgb);
      const isLarge = parseFloat(item.fontSize) >= 18 || (parseFloat(item.fontSize) >= 14 && parseInt(item.fontWeight, 10) >= 700);
      const threshold = isLarge ? 3.0 : 4.5;
      const pass = ratio >= threshold;
      if (pass) contrastPass++;
      else contrastWarn++;

      if (samples.length < 6) {
        samples.push({
          diagId: item.diagId,
          text: item.text,
          fontSize: item.fontSize,
          ratio: ratio.toFixed(2) + ':1',
          pass
        });
      }
    }

    console.log(`  Theme: ${theme.toUpperCase()}`);
    console.log(`  Items audited: ${contrastData.length}`);
    console.log(`  Meeting WCAG AA (>= 4.5:1 / 3:1): ${contrastPass} / ${contrastData.length}`);
    console.log(`  Below threshold: ${contrastWarn}`);
    console.log('  Sample Measurements:');
    for (const s of samples) {
      console.log(`    [${s.diagId}] "${s.text}" (${s.fontSize}) -> ${s.ratio} (${s.pass ? 'PASS' : 'FAIL'})`);
    }
  }

  // Write manifest
  fs.writeFileSync(
    path.join(ARTIFACTS_DIR, 'manifest.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), manifest, testResults }, null, 2),
    'utf8'
  );
  console.log(`\n[3] Manifest written to ${path.join(ARTIFACTS_DIR, 'manifest.json')}`);

  cdp.close();
  chromeProcess.kill();
  server.close();

  const allPassed = testResults.every(t => t.pass);
  console.log(`\n=== Verification Finished: ${allPassed ? 'ALL CONFIGURATIONS PASSED' : 'FAILURES DETECTED'} ===`);
  if (!allPassed) process.exit(1);
}

verify().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});
