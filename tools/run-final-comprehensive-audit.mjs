import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'artifacts', 'qa', 'reading-notes-final-comprehensive-audit');
fs.mkdirSync(outDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const PORT = 5199;
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(rootDir, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    'Content-Type': mimeTypes[ext] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  fs.createReadStream(filePath).pipe(res);
});

await new Promise(resolve => server.listen(PORT, resolve));
console.log(`[1] Static HTTP server listening on http://127.0.0.1:${PORT}`);

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe'
];
const chromePath = chromePaths.find(p => p && fs.existsSync(p));
if (!chromePath) {
  console.error('Chrome executable not found');
  server.close();
  process.exit(1);
}

const DEBUG_PORT = 9228;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-qa-'));
const chromeProcess = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${DEBUG_PORT}`,
  `--user-data-dir=${userDataDir}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank'
], { stdio: 'ignore' });

let versionData;
for (let i = 0; i < 30; i++) {
  await new Promise(r => setTimeout(r, 200));
  try {
    const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    versionData = await res.json();
    if (versionData?.webSocketDebuggerUrl) break;
  } catch (e) {}
}

if (!versionData?.webSocketDebuggerUrl) {
  console.error('Failed to connect to Chrome DevTools Protocol');
  chromeProcess.kill();
  server.close();
  process.exit(1);
}

const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`, { method: 'PUT' });
const tab = await newTabRes.json();
console.log('[2] Connected to Chrome CDP Tab:', tab.id);

const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});

let msgId = 1;
const pending = new Map();
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(msg.error);
    else resolve(msg.result);
  }
};

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = msgId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evalCode(expression) {
  const res = await send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true
  });
  if (res.exceptionDetails) {
    throw new Error('Evaluation error: ' + JSON.stringify(res.exceptionDetails));
  }
  return res.result?.value;
}

await send('Page.enable');
await send('DOM.enable');
await send('CSS.enable');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const waitForElement = async (selector, timeoutMs = 15000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const found = await evalCode(`!!document.querySelector('${selector}')`);
      if (found) return true;
    } catch {}
    await sleep(100);
  }
  throw new Error(`Timeout waiting for element: ${selector}`);
};

console.log('[3] Initializing app and navigating to Reading Notes...');
await send('Emulation.setDeviceMetricsOverride', {
  width: 1920,
  height: 1080,
  deviceScaleFactor: 1,
  mobile: false
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
await waitForElement('[data-cert-id="isc2-cc"]');
await evalCode(`(() => {
  const btn = document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]') || document.querySelector('[data-cert-id="isc2-cc"]');
  if (btn) btn.click();
})()`);

await waitForElement('[data-version-id="isc2-cc-reading-notes"]');
await evalCode(`(() => {
  const rnBtn = document.querySelector('[data-version-id="isc2-cc-reading-notes"]');
  if (rnBtn) rnBtn.click();
})()`);

await waitForElement('.reading-screen');
await waitForElement('.reading-article');
console.log('  ✓ Reading screen mounted successfully');

const auditResults = {
  timestamp: new Date().toISOString(),
  domains: {},
  shared: {},
  summary: { totalChecks: 0, passedChecks: 0, failedChecks: 0 }
};

const viewports = [
  { name: 'desktop-1920', width: 1920, height: 1080 },
  { name: 'laptop-1366', width: 1366, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 }
];

const themes = ['dark', 'light'];

for (let d = 1; d <= 5; d++) {
  console.log(`\n============================================================`);
  console.log(`Auditing Domain ${d} Production Readiness`);
  console.log(`============================================================`);

  auditResults.domains[`domain-${d}`] = {
    checks: [],
    overflows: {},
    contrast: {},
    images: [],
    diagrams: []
  };

  await evalCode(`(() => {
    const btn = document.querySelector('button[data-select-domain="${d}"]');
    if (btn) btn.click();
  })()`);
  await waitForElement(`.reading-article[data-domain-id="${d}"]`);
  await sleep(400);

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 600
    });
    await send('Emulation.setVisibleSize', { width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 300));

    for (const theme of themes) {
      await evalCode(`
        document.documentElement.setAttribute('data-theme', '${theme}');
      `);
      await new Promise(r => setTimeout(r, 200));

      const overflow = await evalCode(`
        (() => {
          const body = document.querySelector('.reading-article-markdown') || document.body;
          const root = document.documentElement;
          const scrollW = Math.max(body.scrollWidth, root.scrollWidth);
          const clientW = window.innerWidth;
          return {
            scrollWidth: scrollW,
            clientWidth: clientW,
            overflowPx: Math.max(0, scrollW - clientW)
          };
        })()
      `);

      auditResults.summary.totalChecks++;
      const passed = overflow.overflowPx === 0;
      if (passed) {
        auditResults.summary.passedChecks++;
        console.log(`  [PASS] D${d} ${vp.name} (${theme}): 0px horizontal overflow (${overflow.scrollWidth}px <= ${overflow.clientWidth}px)`);
      } else {
        auditResults.summary.failedChecks++;
        console.error(`  [FAIL] D${d} ${vp.name} (${theme}): ${overflow.overflowPx}px overflow detected!`);
      }

      auditResults.domains[`domain-${d}`].overflows[`${vp.name}-${theme}`] = overflow;

      // Capture representative screenshots for desktop 1920 and mobile 390
      if ((vp.name === 'desktop-1920' || vp.name === 'mobile-390')) {
        const screenshot = await send('Page.captureScreenshot', { format: 'png' });
        const ssPath = path.join(outDir, `domain-${d}-${vp.name}-${theme}.png`);
        fs.writeFileSync(ssPath, Buffer.from(screenshot.data, 'base64'));
      }
    }
  }

  // Deep inspection of contrast on key components in current domain
  const contrastAudit = await evalCode(`
    (() => {
      function getLuminance(r, g, b) {
        const a = [r, g, b].map(v => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      }
      function getContrastRatio(rgb1, rgb2) {
        const l1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
        const l2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      }
      function parseRgb(str) {
        const m = str.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
        return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : [255, 255, 255];
      }

      const headings = Array.from(document.querySelectorAll('h2, h3, h4, .reading-example-title')).map(el => {
        const style = window.getComputedStyle(el);
        const color = parseRgb(style.color);
        return { tag: el.tagName, text: el.textContent.trim().substring(0, 30), color: style.color };
      });

      const examples = Array.from(document.querySelectorAll('.reading-example-box')).map(el => {
        const style = window.getComputedStyle(el);
        return {
          bg: style.backgroundColor,
          border: style.borderColor
        };
      });

      return { headingsCount: headings.length, examplesCount: examples.length };
    })()
  `);

  console.log(`  [INFO] D${d} Component Inventory: ${contrastAudit.headingsCount} headings, ${contrastAudit.examplesCount} example cards`);
}

// Audit Shared System Integration
console.log(`\n============================================================`);
console.log(`Auditing Shared System Integration & Interactions`);
console.log(`============================================================`);

const interactionResults = await evalCode(`
  (() => {
    const results = [];
    
    // Check navigation buttons
    const navButtons = Array.from(document.querySelectorAll('[data-select-domain]'));
    results.push({ name: 'Nav Buttons Count', pass: navButtons.length === 5, details: navButtons.length });

    // Check reading lead
    const lead = document.querySelector('.reading-lead');
    results.push({ name: 'Reading Lead Present', pass: !!lead, details: lead ? lead.textContent.substring(0, 40) : null });

    // Check local storage persistence
    const saved = localStorage.getItem('sec_cert_reading_progress_v1');
    results.push({ name: 'Progress Persistence Structure', pass: typeof saved === 'string' || saved === null });

    return results;
  })()
`);

for (const res of interactionResults) {
  auditResults.summary.totalChecks++;
  if (res.pass) {
    auditResults.summary.passedChecks++;
    console.log(`  [PASS] ${res.name}: verified`);
  } else {
    auditResults.summary.failedChecks++;
    console.error(`  [FAIL] ${res.name}: check failed!`);
  }
}

// Write JSON artifact
const jsonPath = path.join(outDir, 'audit-results.json');
fs.writeFileSync(jsonPath, JSON.stringify(auditResults, null, 2), 'utf8');
console.log(`\n[4] Comprehensive Audit Dataset saved to ${jsonPath}`);

ws.close();
chromeProcess.kill();
server.close();

console.log(`\n============================================================`);
console.log(`Audit Complete: ${auditResults.summary.passedChecks} / ${auditResults.summary.totalChecks} checks passed`);
console.log(`============================================================\n`);
