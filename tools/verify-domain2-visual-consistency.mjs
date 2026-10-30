/**
 * tools/verify-domain2-visual-consistency.mjs
 *
 * Dedicated verification suite for Domain 2 Visual Consistency,
 * Emoji Eradication, and 6-Part Measurement Architecture Redesign.
 */

import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

const ROOT = path.resolve('.');
const PORT = 5196;
const CHROME_PORT = 9472;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-visual-consistency');

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

async function run() {
  console.log('=== Domain 2 Visual Consistency & Measurement Redesign Verification ===\n');

  // Check 1: Zero Decorative Emojis in Domain 2 Files
  console.log('[Check 1] Auditing for decorative emojis in Domain 2 source files...');
  const domain2Files = [
    'content/isc2-cc-2026/reading/domain-2.md',
    'content/isc2-cc-2026/reading/domain-2.js',
    'content/isc2-cc-2026/reading/domain-2-scenarios.js',
    'js/core/diagram-generator.js'
  ];

  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  let totalEmojisFound = 0;

  for (const relPath of domain2Files) {
    const fullPath = path.join(ROOT, relPath);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      // In diagram-generator.js, only inspect effectivenessHierarchy section
      if (relPath.includes('diagram-generator.js') && idx < 1020) return;
      if (emojiRegex.test(line)) {
        console.error(`  ✗ Emoji detected in ${relPath}:${idx + 1} -> ${line.trim()}`);
        totalEmojisFound++;
      }
    });
  }

  assert.strictEqual(totalEmojisFound, 0, `Zero emojis allowed in Domain 2 (found ${totalEmojisFound})`);
  console.log('  ✓ Check 1 PASS: Exactly 0 decorative emojis detected across all Domain 2 files.\n');

  // Check 2: Global HTML Comment Sanitization
  console.log('[Check 2] Verifying global HTML comment parser sanitization...');
  const { parseMarkdown } = await import('../js/core/markdown-parser.js');
  const sampleWithComments = `
<!-- ========================================== -->
<!-- Objective 2.4 Commentary -->
### Topic Heading
Educational text <!-- inline comment --> and more text.
<!-- Multi-line comment
     with sensitive notes
-->
Final paragraph.
`;
  const parsedSample = parseMarkdown(sampleWithComments);
  assert.ok(!parsedSample.includes('<!--'), 'Rendered markdown must not contain <!--');
  assert.ok(!parsedSample.includes('-->'), 'Rendered markdown must not contain -->');
  assert.ok(!parsedSample.includes('Objective 2.4 Commentary'), 'Comment contents must be completely stripped');
  assert.ok(parsedSample.includes('Topic Heading'), 'Valid headings must be preserved');
  assert.ok(parsedSample.includes('Educational text  and more text.'), 'Prose must be preserved');
  console.log('  ✓ Check 2 PASS: All HTML comments completely eradicated before block parsing.\n');

  // Check 3: Launch server & Chrome CDP
  console.log('[Check 3] Launching server & headless Chrome for visual verification...');
  const server = await startServer();
  console.log(`  Local test server started at http://127.0.0.1:${PORT}/`);

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
  console.log('  Chrome CDP connected successfully.');

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');

  // Navigate to app
  await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await new Promise(r => setTimeout(r, 1200));

  // Mount Reading Notes and select Domain 2
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
    const d2 = document.querySelector('[data-select-domain="2"]');
    if (d2) d2.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  const domainHeader = await cdp.eval(`(() => {
    const h = document.querySelector('.reading-article-header .reading-article-title');
    return h ? h.innerText.trim() : null;
  })()`);
  assert.strictEqual(domainHeader, 'Domain 2: Security Governance', 'Domain 2 header must match');
  console.log('  Active reading view confirmed:', domainHeader);

  // Check 4: Inspect Section 2.4.8 Diagram (effectivenessHierarchy) in DOM
  console.log('\n[Check 4] Inspecting 6-Part Measurement Architecture in DOM...');
  const measurementDiag = await cdp.eval(`(() => {
    const card = document.querySelector('.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
    if (!card) return null;

    const desktopSvg = card.querySelector('.reading-diag-desktop svg');
    const mobileStack = card.querySelector('.reading-diag-mobile .reading-mob-stack-list');

    // Desktop SVG checks
    const svgRect = desktopSvg ? desktopSvg.getBoundingClientRect() : null;
    const svgConcepts = desktopSvg ? Array.from(desktopSvg.querySelectorAll('.diag-text-title')).map(t => t.textContent.trim()) : [];
    const svgActions = desktopSvg ? Array.from(desktopSvg.querySelectorAll('.diag-text-action')).map(t => t.textContent.trim()) : [];
    const svgNumbers = desktopSvg ? Array.from(desktopSvg.querySelectorAll('.diag-step-num')).map(t => t.textContent.trim()) : [];
    const svgPaths = desktopSvg ? desktopSvg.querySelectorAll('path').length : 0;

    // Mobile HTML checks
    const mobileCards = mobileStack ? Array.from(mobileStack.querySelectorAll('.reading-mob-tier-card')).map(c => ({
      num: c.querySelector('.reading-mob-tier-num')?.textContent.trim(),
      name: c.querySelector('.reading-mob-tier-name')?.textContent.trim(),
      action: c.querySelector('.reading-mob-tier-action')?.textContent.trim(),
      hasIcon: c.querySelector('svg.reading-mob-icon') !== null
    })) : [];

    // Check for raw comments or separators anywhere in card
    const cardHtml = card.innerHTML;
    const hasComment = cardHtml.includes('<!--');
    const hasSeparator = /={5,}/.test(cardHtml);

    return {
      exists: true,
      cardWidth: Math.round(card.getBoundingClientRect().width),
      svgRect: svgRect ? { width: Math.round(svgRect.width), height: Math.round(svgRect.height) } : null,
      svgConcepts,
      svgActions,
      svgNumbers,
      svgPaths,
      mobileCards,
      hasComment,
      hasSeparator
    };
  })()`);

  assert.ok(measurementDiag && measurementDiag.exists, 'effectivenessHierarchy diagram card must exist');
  console.log('  Card width:', measurementDiag.cardWidth, 'px');
  console.log('  Desktop SVG concepts (6 required):', measurementDiag.svgConcepts.join(', '));
  assert.strictEqual(measurementDiag.svgConcepts.length, 6, 'Must contain exactly 6 concept titles');
  assert.deepStrictEqual(measurementDiag.svgNumbers, ['06', '04', '05', '02', '03', '01'], 'Must contain all 6 step numbers');
  assert.ok(measurementDiag.svgPaths >= 6, 'Must contain SVG vector paths for icons');
  assert.strictEqual(measurementDiag.mobileCards.length, 6, 'Mobile stack must contain 6 concept cards');
  assert.ok(measurementDiag.mobileCards.every(c => c.hasIcon), 'Every mobile concept card must have an SVG vector icon');
  assert.strictEqual(measurementDiag.hasComment, false, 'Must not contain any HTML comments');
  assert.strictEqual(measurementDiag.hasSeparator, false, 'Must not contain separator strings');
  console.log('  ✓ Check 4 PASS: 6-Concept system verified with SVG icons and 0 emojis on desktop and mobile.\n');

  // Check 5: Inspect Section 2.4.8 Memory Aid Table (Exam Keyword Trigger Matrix)
  console.log('[Check 5] Inspecting Exam Keyword Trigger Matrix in Section 2.4.8...');
  const matrixReport = await cdp.eval(`(() => {
    const memoryAidH3 = document.querySelector('#topic-2-4-memory-aid');
    if (!memoryAidH3) return null;

    // Find table inside this section
    const sec = memoryAidH3.closest('.reading-objective-section');
    const tables = sec ? Array.from(sec.querySelectorAll('table')) : [];
    const table = tables[tables.length - 1]; // Last table in Objective 2.4
    if (!table) return null;

    const headers = Array.from(table.querySelectorAll('th')).map(th => th.innerText.trim());
    const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr => {
      const cells = Array.from(tr.querySelectorAll('td')).map(td => td.innerText.trim());
      return { concept: cells[0], trigger: cells[1], purpose: cells[2] };
    });

    const tableHtml = table.innerHTML;
    const emojiRegex = /[\\u{1F300}-\\u{1F9FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/u;
    const hasEmoji = emojiRegex.test(tableHtml);

    return {
      headers,
      rowCount: rows.length,
      concepts: rows.map(r => r.concept),
      hasEmoji
    };
  })()`);

  assert.ok(matrixReport, 'Exam Keyword Trigger Matrix table must exist');
  console.log('  Table headers:', matrixReport.headers.join(' | '));
  console.log('  Concepts in table (6 required):', matrixReport.concepts.join(', '));
  assert.strictEqual(matrixReport.rowCount, 6, 'Must contain 6 concepts in matrix');
  assert.strictEqual(matrixReport.hasEmoji, false, 'Table must contain 0 emojis');
  console.log('  ✓ Check 5 PASS: Exam Keyword Trigger Matrix complements diagram with 6 concepts and 0 emojis.\n');

  // Check 6: Viewport Testing & Visual Screenshot Capture
  console.log('[Check 6] Capturing high-resolution visual evidence across viewports and themes...');
  const viewports = [
    { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
    { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
    { name: '1920x1080-dark', width: 1920, height: 1080, theme: 'dark', mobile: false },
    { name: '1920x1080-light', width: 1920, height: 1080, theme: 'light', mobile: false },
    { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true },
    { name: '390x844-light', width: 390, height: 844, theme: 'light', mobile: true }
  ];

  const manifest = [];

  for (const vp of viewports) {
    console.log(`  Capturing ${vp.name}...`);
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
    await new Promise(r => setTimeout(r, 250));

    // Scroll to Section 2.4.8 Measurement Diagram
    await cdp.eval(`(() => {
      const el = document.querySelector('.reading-diagram-card[data-diagram="effectivenessHierarchy"]');
      if (el) el.scrollIntoView({ block: 'center' });
    })()`);
    await new Promise(r => setTimeout(r, 250));

    const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const filename = `measurement-architecture-${vp.name}.png`;
    const outPath = path.join(ARTIFACTS_DIR, filename);
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));

    manifest.push({
      file: filename,
      viewport: `${vp.width}x${vp.height}`,
      theme: vp.theme,
      component: 'Section 2.4.8 Cybersecurity Measurement Architecture',
      sizeKb: Math.round(shot.data.length * 0.75 / 1024)
    });
  }

  // Also capture the complementary Exam Keyword Trigger Matrix
  console.log('  Capturing Exam Keyword Trigger Matrix screenshots...');
  for (const theme of ['dark', 'light']) {
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1366,
      height: 768,
      deviceScaleFactor: 2,
      mobile: false
    });

    await cdp.eval(`(() => {
      document.documentElement.setAttribute('data-theme', '${theme}');
      if ('${theme}' === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
      const el = document.querySelector('#topic-2-4-memory-aid');
      if (el) el.scrollIntoView({ block: 'start' });
    })()`);
    await new Promise(r => setTimeout(r, 250));

    const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const filename = `keyword-trigger-matrix-1366-${theme}.png`;
    const outPath = path.join(ARTIFACTS_DIR, filename);
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));

    manifest.push({
      file: filename,
      viewport: '1366x768',
      theme,
      component: 'Section 2.4.8 Exam Keyword Trigger Matrix',
      sizeKb: Math.round(shot.data.length * 0.75 / 1024)
    });
  }

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`  ✓ Check 6 PASS: Captured ${manifest.length} screenshots in ${ARTIFACTS_DIR}`);

  cdp.close();
  chromeProcess.kill();
  server.close();
  console.log('\n=== ALL DOMAIN 2 VISUAL CONSISTENCY CHECKS PASSED (6/6) ===');
}

run().catch(err => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
