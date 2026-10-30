import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5195;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-human-acceptance');

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

async function runCapture() {
  console.log('=== Task 125: Domain 2 Reading Notes Visual Acceptance Evidence Capture ===\n');

  const server = await startServer();
  console.log(`[1] Local server running at http://127.0.0.1:${PORT}/`);

  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9460',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9460/json/version');
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
    throw new Error('Could not connect to Chrome debugging port 9460');
  }

  const newTabRes = await fetch(`http://127.0.0.1:9460/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();
  console.log('[2] CDP connection established to tab');

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
  await new Promise(r => setTimeout(r, 1000));

  const manifest = [];

  async function takeScreenshot(filename, description, selector, block = 'center') {
    if (selector) {
      await cdp.eval(`(() => {
        const el = document.querySelector('${selector}');
        if (el) el.scrollIntoView({ block: '${block}', inline: 'nearest' });
      })()`);
      await new Promise(r => setTimeout(r, 350));
    }
    const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const filePath = path.join(ARTIFACTS_DIR, filename);
    fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
    const stats = fs.statSync(filePath);
    manifest.push({ filename, description, sizeKb: Math.round(stats.size / 1024) });
    console.log(`  ✓ Saved: ${filename} (${Math.round(stats.size / 1024)} KB) - ${description}`);
  }

  // 1. Viewport: 1366x768 Dark (Default Desktop)
  console.log('\n--- Capturing 1366x768 Desktop Dark ---');
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await cdp.eval(`document.documentElement.setAttribute('data-theme', 'dark');`);
  await new Promise(r => setTimeout(r, 300));

  await takeScreenshot('1366-dark-01-hero-overview-obj21.png', 'Domain 2 Hero Overview & Objective 2.1 (Desktop Dark)', '#reading-hero', 'start');
  await takeScreenshot('1366-dark-02-diag-grcAlignment.png', 'GRC Alignment 3-Pillars Diagram (Desktop Dark)', '.reading-diagram-card[data-diagram="grcAlignment"]');
  await takeScreenshot('1366-dark-03-diag-bcVsDrScope.png', 'BC vs DR Concentric Scope Diagram (Desktop Dark)', '.reading-diagram-card[data-diagram="bcVsDrScope"]');
  await takeScreenshot('1366-dark-04-diag-rtoRpoTimeline.png', 'RTO vs RPO 17:00 Timeline Diagram (Desktop Dark)', '.reading-diagram-card[data-diagram="rtoRpoTimeline"]');
  await takeScreenshot('1366-dark-05-diag-effectivenessHierarchy.png', 'Effectiveness Hierarchy Stack Diagram with D2-R02 Fix (Desktop Dark)', '.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
  await takeScreenshot('1366-dark-06-table-risk-register.png', 'Risk Register Table with English-first Ransomware Term (Desktop Dark)', '#topic-2-1-risk-register + .reading-table-wrapper, #topic-2-1-risk-register ~ .reading-table-wrapper');
  await takeScreenshot('1366-dark-07-distinction-card12.png', 'Concept Distinction Card 12 with Cybersecurity Report Triad (Desktop Dark)', '.reading-distinction-card:last-child');
  await takeScreenshot('1366-dark-08-exam-traps-scenarios.png', 'Exam Traps & Review Scenario Cards (Desktop Dark)', '.reading-scenario-card:first-child');
  await takeScreenshot('1366-dark-09-domain2-review-section.png', 'Dedicated Domain 2 Summary & Review Section outside 2.4 (Desktop Dark)', '#domain-2-review', 'start');

  // 2. Viewport: 1366x768 Light
  console.log('\n--- Capturing 1366x768 Desktop Light ---');
  await cdp.eval(`document.documentElement.setAttribute('data-theme', 'light');`);
  await new Promise(r => setTimeout(r, 300));

  await takeScreenshot('1366-light-01-hero-overview-obj21.png', 'Domain 2 Hero Overview & Objective 2.1 (Desktop Light)', '#reading-hero', 'start');
  await takeScreenshot('1366-light-02-diag-grcAlignment.png', 'GRC Alignment Diagram (Desktop Light)', '.reading-diagram-card[data-diagram="grcAlignment"]');
  await takeScreenshot('1366-light-03-diag-effectivenessHierarchy.png', 'Effectiveness Hierarchy with WCAG AA High Contrast (Desktop Light)', '.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
  await takeScreenshot('1366-light-04-distinction-card12.png', 'Distinction Card 12 Dashboard/Scorecard/Report Triad (Desktop Light)', '.reading-distinction-card:last-child');
  await takeScreenshot('1366-light-05-domain2-review-section.png', 'Domain 2 Summary & Review Section (Desktop Light)', '#domain-2-review', 'start');

  // 3. Viewport: 1920x1080 Desktop Dark & Light
  console.log('\n--- Capturing 1920x1080 Wide Desktop ---');
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
  await cdp.eval(`document.documentElement.setAttribute('data-theme', 'dark');`);
  await new Promise(r => setTimeout(r, 300));

  await takeScreenshot('1920-dark-01-hero-overview-obj21.png', 'Domain 2 Hero & Architecture (1080p Dark)', '#reading-hero', 'start');
  await takeScreenshot('1920-dark-02-diag-effectivenessHierarchy.png', 'Effectiveness Hierarchy Diagram (1080p Dark)', '.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
  await takeScreenshot('1920-dark-03-domain2-review-section.png', 'Domain 2 Summary & Review Layout (1080p Dark)', '#domain-2-review', 'start');

  await cdp.eval(`document.documentElement.setAttribute('data-theme', 'light');`);
  await new Promise(r => setTimeout(r, 300));
  await takeScreenshot('1920-light-01-hero-overview-obj21.png', 'Domain 2 Hero & Architecture (1080p Light)', '#reading-hero', 'start');
  await takeScreenshot('1920-light-02-diag-effectivenessHierarchy.png', 'Effectiveness Hierarchy Diagram (1080p Light)', '.reading-diagram-card[data-diagram="effectivenessHierarchy"]');

  // 4. Viewport: 390x844 Mobile Dark & Light
  console.log('\n--- Capturing 390x844 Mobile ---');
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await cdp.eval(`document.documentElement.setAttribute('data-theme', 'dark');`);
  await new Promise(r => setTimeout(r, 300));

  await takeScreenshot('390-dark-01-hero-obj21.png', 'Mobile Hero & Objective 2.1 (Mobile Dark 390x844)', '#reading-hero', 'start');
  await takeScreenshot('390-dark-02-diag-grcAlignment.png', 'GRC Alignment Diagram Scaled to Mobile Width (Mobile Dark)', '.reading-diagram-card[data-diagram="grcAlignment"]');
  await takeScreenshot('390-dark-03-diag-bcVsDrScope.png', 'BC vs DR Concentric Diagram on Mobile (Mobile Dark)', '.reading-diagram-card[data-diagram="bcVsDrScope"]');
  await takeScreenshot('390-dark-04-diag-rtoRpoTimeline.png', 'RTO vs RPO Timeline on Mobile (Mobile Dark)', '.reading-diagram-card[data-diagram="rtoRpoTimeline"]');
  await takeScreenshot('390-dark-05-diag-effectivenessHierarchy.png', 'Effectiveness Hierarchy Diagram on Mobile (Mobile Dark)', '.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
  await takeScreenshot('390-dark-06-bilingual-table.png', 'Bilingual Table Responsive Scroll/Wrap on Mobile (Mobile Dark)', 'table');
  await takeScreenshot('390-dark-07-distinction-card12.png', 'Distinction Card 12 Triad on Mobile (Mobile Dark)', '.reading-distinction-card:last-child');
  await takeScreenshot('390-dark-08-scenarios.png', 'Review Scenario Card on Mobile (Mobile Dark)', '.reading-scenario-card:first-child');
  await takeScreenshot('390-dark-09-domain2-review-section.png', 'Summary & Review Section Header on Mobile (Mobile Dark)', '#domain-2-review', 'start');

  await cdp.eval(`document.documentElement.setAttribute('data-theme', 'light');`);
  await new Promise(r => setTimeout(r, 300));
  await takeScreenshot('390-light-01-hero-obj21.png', 'Mobile Hero & Objective 2.1 (Mobile Light 390x844)', '#reading-hero', 'start');
  await takeScreenshot('390-light-02-diag-effectivenessHierarchy.png', 'Effectiveness Hierarchy on Mobile (Mobile Light)', '.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
  await takeScreenshot('390-light-03-distinction-card12.png', 'Distinction Card 12 on Mobile (Mobile Light)', '.reading-distinction-card:last-child');
  await takeScreenshot('390-light-04-domain2-review.png', 'Summary & Review Section on Mobile (Mobile Light)', '#domain-2-review', 'start');

  // Detailed Mobile Readability Analysis
  console.log('\n--- Analyzing Mobile SVG Text Readability ---');
  const mobileReadability = await cdp.eval(`(() => {
    const diags = ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'];
    return diags.map(name => {
      const card = document.querySelector('.reading-diagram-card[data-diagram="' + name + '"]');
      const svg = card ? card.querySelector('svg') : null;
      if (!svg) return { name, exists: false };
      const svgRect = svg.getBoundingClientRect();
      const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
      const scale = svgRect.width / viewBox[2];

      const texts = Array.from(svg.querySelectorAll('text')).map(t => {
        const textStr = t.textContent.trim();
        const cs = window.getComputedStyle(t);
        const specifiedSize = parseFloat(cs.fontSize);
        const actualRenderedPx = specifiedSize * scale;
        return {
          text: textStr.substring(0, 25),
          specifiedSize: specifiedSize + 'px',
          actualRenderedPx: Math.round(actualRenderedPx * 10) / 10 + 'px',
          isLegible: actualRenderedPx >= 7.0 // standard minimal mobile legibility threshold
        };
      });

      return {
        name,
        svgWidth: Math.round(svgRect.width) + 'px',
        svgHeight: Math.round(svgRect.height) + 'px',
        scale: Math.round(scale * 1000) / 1000,
        textCount: texts.length,
        minRenderedPx: Math.min(...texts.map(t => parseFloat(t.actualRenderedPx))) + 'px',
        maxRenderedPx: Math.max(...texts.map(t => parseFloat(t.actualRenderedPx))) + 'px',
        smallTextsCount: texts.filter(t => !t.isLegible).length,
        samples: texts.slice(0, 4)
      };
    });
  })()`);

  console.log('Mobile Readability Results:', JSON.stringify(mobileReadability, null, 2));

  // Write manifest and readability report
  const manifestData = {
    generatedAt: new Date().toISOString(),
    totalScreenshots: manifest.length,
    manifest,
    mobileReadability
  };

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'manifest.json'), JSON.stringify(manifestData, null, 2));

  cdp.close();
  chromeProcess.kill();
  server.close();

  console.log(`\n============================================================`);
  console.log(`Visual Acceptance Evidence Captured Successfully!`);
  console.log(`Total Screenshots: ${manifest.length}`);
  console.log(`Artifacts saved in: ${ARTIFACTS_DIR}`);
  console.log(`============================================================\n`);
}

runCapture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
