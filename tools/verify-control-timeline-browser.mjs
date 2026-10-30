import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5186;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/control-timeline');

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

// Relative luminance & contrast ratio calculation
function parseRgb(colorStr) {
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

async function runBrowserVerification() {
  console.log('=== Control Timeline Diagram: Real Browser CDP Verification ===\n');

  const server = await startServer();
  console.log(`[1] Dev server started at http://127.0.0.1:${PORT}/`);

  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9450',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9450/json/version');
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
    throw new Error('Failed to connect to Chrome on port 9450');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9450/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  await new Promise(r => setTimeout(r, 1000));

  // Navigate to Reading View -> Domain 1
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

  const testMatrix = [
    { name: '1366-dark-expanded', width: 1366, height: 768, theme: 'dark', collapseSidebar: false },
    { name: '1366-light-expanded', width: 1366, height: 768, theme: 'light', collapseSidebar: false },
    { name: '1366-dark-collapsed', width: 1366, height: 768, theme: 'dark', collapseSidebar: true },
    { name: '1366-light-collapsed', width: 1366, height: 768, theme: 'light', collapseSidebar: true },
    { name: '1920-dark-expanded', width: 1920, height: 1080, theme: 'dark', collapseSidebar: false },
    { name: '1920-light-expanded', width: 1920, height: 1080, theme: 'light', collapseSidebar: false }
  ];

  let allChecksPassed = true;

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

    await cdp.eval(`
      (() => {
        document.documentElement.setAttribute('data-theme', '${cfg.theme}');
        if ('${cfg.theme}' === 'dark') {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
        } else {
          document.body.classList.add('light-theme');
          document.body.classList.remove('dark-theme');
        }

        const layout = document.querySelector('#reading-layout');
        if (layout) {
          if (${cfg.collapseSidebar}) {
            layout.classList.add('sidebar-collapsed');
          } else {
            layout.classList.remove('sidebar-collapsed');
          }
        }
      })();
    `);
    await new Promise(r => setTimeout(r, 500));

    const metrics = await cdp.eval(`
      (() => {
        const card = document.querySelector('[data-diagram="controlTimeline"]');
        if (!card) return { error: 'Diagram card not found' };
        card.scrollIntoView({ behavior: 'instant', block: 'center' });

        const cardRect = card.getBoundingClientRect();
        const svg = card.querySelector('svg');
        const svgRect = svg.getBoundingClientRect();

        // 3 Cards in SVG
        const cards = Array.from(svg.querySelectorAll('.diag-timeline-card')).map(r => {
          const comp = window.getComputedStyle(r);
          return {
            fill: comp.fill,
            stroke: comp.stroke,
            width: parseFloat(r.getAttribute('width')),
            height: parseFloat(r.getAttribute('height'))
          };
        });

        // 3 Badges in SVG
        const badges = Array.from(svg.querySelectorAll('.diag-timeline-badge')).map(r => {
          const comp = window.getComputedStyle(r);
          return { fill: comp.fill, stroke: comp.stroke };
        });

        const badgeTexts = Array.from(svg.querySelectorAll('.diag-timeline-badge-text')).map(t => {
          const comp = window.getComputedStyle(t);
          const rect = t.getBoundingClientRect();
          return { text: t.textContent.trim(), fill: comp.fill, width: rect.width };
        });

        // Titles
        const titles = Array.from(svg.querySelectorAll('.diag-timeline-title')).map(t => {
          const comp = window.getComputedStyle(t);
          const rect = t.getBoundingClientRect();
          return { text: t.textContent.trim(), fill: comp.fill, width: rect.width };
        });

        // Descriptions (Thai purposes)
        const descs = Array.from(svg.querySelectorAll('.diag-timeline-desc')).map(t => {
          const comp = window.getComputedStyle(t);
          const rect = t.getBoundingClientRect();
          return { text: t.textContent.trim(), fill: comp.fill, width: rect.width };
        });

        // Examples
        const examples = Array.from(svg.querySelectorAll('.diag-timeline-example')).map(t => {
          const comp = window.getComputedStyle(t);
          const rect = t.getBoundingClientRect();
          return { text: t.textContent.trim(), fill: comp.fill, width: rect.width };
        });

        // Caption element
        const caption = card.querySelector('.reading-timeline-caption');
        const captionComp = caption ? window.getComputedStyle(caption) : null;
        const captionRect = caption ? caption.getBoundingClientRect() : null;

        const captionText = caption ? caption.querySelector('.reading-timeline-caption-text') : null;
        const captionTextComp = captionText ? window.getComputedStyle(captionText) : null;

        return {
          cardWidth: cardRect.width,
          svgWidth: svgRect.width,
          cards,
          badges,
          badgeTexts,
          titles,
          descs,
          examples,
          caption: {
            bg: captionComp?.backgroundColor,
            width: captionRect?.width,
            textColor: captionTextComp?.color,
            fontSize: captionTextComp?.fontSize,
            lineHeight: captionTextComp?.lineHeight,
            fullText: captionText?.textContent?.trim()
          }
        };
      })()
    `);

    if (metrics.error) {
      console.error('Error:', metrics.error);
      allChecksPassed = false;
      continue;
    }

    // 1. Contrast Measurements
    console.log('Contrast Measurements (WCAG AA target >= 4.5:1):');
    metrics.badgeTexts.forEach((bt, idx) => {
      const bgRgb = parseRgb(metrics.badges[idx].fill);
      const fgRgb = parseRgb(bt.fill);
      const ratio = getContrast(fgRgb, bgRgb);
      console.log(`  [Badge ${bt.text}]: text ${bt.fill} on bg ${metrics.badges[idx].fill} -> Contrast: ${ratio.toFixed(2)}:1`);
      if (ratio < 4.5) {
        console.error(`  ✗ FAIL: Badge contrast is below 4.5:1!`);
        allChecksPassed = false;
      }
    });

    metrics.titles.forEach((t, idx) => {
      const cardBg = parseRgb(metrics.cards[idx].fill);
      const titleRgb = parseRgb(t.fill);
      const ratio = getContrast(titleRgb, cardBg);
      console.log(`  [Title "${t.text}"]: text ${t.fill} on card ${metrics.cards[idx].fill} -> Contrast: ${ratio.toFixed(2)}:1`);
      if (ratio < 4.5) {
        console.error(`  ✗ FAIL: Title contrast is below 4.5:1!`);
        allChecksPassed = false;
      }
    });

    metrics.descs.forEach((d, idx) => {
      const cardBg = parseRgb(metrics.cards[idx].fill);
      const descRgb = parseRgb(d.fill);
      const ratio = getContrast(descRgb, cardBg);
      console.log(`  [Purpose "${d.text.substring(0, 15)}..."]: text ${d.fill} on card ${metrics.cards[idx].fill} -> Contrast: ${ratio.toFixed(2)}:1`);
      if (ratio < 4.5) {
        console.error(`  ✗ FAIL: Purpose description contrast is below 4.5:1!`);
        allChecksPassed = false;
      }
    });

    metrics.examples.forEach((e, idx) => {
      const cardBg = parseRgb(metrics.cards[idx].fill);
      const exRgb = parseRgb(e.fill);
      const ratio = getContrast(exRgb, cardBg);
      console.log(`  [Example "${e.text.substring(0, 15)}..."]: text ${e.fill} on card ${metrics.cards[idx].fill} -> Contrast: ${ratio.toFixed(2)}:1`);
      if (ratio < 4.5) {
        console.error(`  ✗ FAIL: Example contrast is below 4.5:1!`);
        allChecksPassed = false;
      }
    });

    if (metrics.caption.bg && metrics.caption.textColor) {
      const capBg = parseRgb(metrics.caption.bg);
      const capFg = parseRgb(metrics.caption.textColor);
      const capRatio = getContrast(capFg, capBg);
      console.log(`  [Caption Text]: text ${metrics.caption.textColor} on bg ${metrics.caption.bg} -> Contrast: ${capRatio.toFixed(2)}:1`);
      if (capRatio < 4.5) {
        console.error(`  ✗ FAIL: Caption text contrast is below 4.5:1!`);
        allChecksPassed = false;
      }
    }

    // 2. Geometry & Bounds Verification
    console.log('Geometry & Layout:');
    console.log(`  Card Width: ${metrics.cardWidth.toFixed(1)}px | SVG Rendered Width: ${metrics.svgWidth.toFixed(1)}px`);
    console.log(`  Caption Width: ${metrics.caption.width.toFixed(1)}px (fits cleanly within card)`);

    // Verify caption is not clipped
    if (metrics.caption.width > metrics.cardWidth + 2) {
      console.error(`  ✗ FAIL: Caption width (${metrics.caption.width}px) exceeds card width (${metrics.cardWidth}px)!`);
      allChecksPassed = false;
    }

    // 3. Capture Screenshots
    const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const imgPath = path.join(ARTIFACTS_DIR, `after-${cfg.name}.png`);
    fs.writeFileSync(imgPath, Buffer.from(screenshot.data, 'base64'));
    console.log(`  Saved screenshot: ${imgPath}`);
  }

  cdp.close();
  chromeProcess.kill();
  server.close();

  if (!allChecksPassed) {
    console.error('\nBrowser verification encountered failures!');
    process.exit(1);
  } else {
    console.log('\n============================================================');
    console.log('✓ ALL BROWSER VISUAL & CONTRAST CHECKS PASSED PERFECTLY!');
    console.log('============================================================');
  }
}

runBrowserVerification().catch(e => {
  console.error(e);
  process.exit(1);
});
