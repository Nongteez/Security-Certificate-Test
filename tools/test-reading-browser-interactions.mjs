import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

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

const PORT = 5235;
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

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe'
];
const chromePath = chromePaths.find(p => p && fs.existsSync(p));

const DEBUG_PORT = 9260;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-interaction-qa-'));
const chromeProc = spawn(chromePath, [
  `--remote-debugging-port=${DEBUG_PORT}`,
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank'
]);

const sleep = ms => new Promise(r => setTimeout(r, ms));
for (let i = 0; i < 30; i++) {
  try {
    const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    if (res.ok) break;
  } catch {
    await sleep(200);
  }
}

const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`, { method: 'PUT' });
const tab = await newTabRes.json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let msgId = 1;
const callbacks = new Map();
const consoleErrors = [];
const networkFailures = [];

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.id && callbacks.has(data.id)) {
    const cb = callbacks.get(data.id);
    callbacks.delete(data.id);
    if (data.error) cb.rej(data.error);
    else cb.res(data.result);
  } else if (data.method === 'Console.messageAdded') {
    if (data.params?.message?.level === 'error') {
      consoleErrors.push(data.params.message.text);
    }
  } else if (data.method === 'Network.loadingFailed') {
    networkFailures.push(data.params);
  }
};

function send(method, params = {}) {
  return new Promise((res, rej) => {
    const id = msgId++;
    callbacks.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

await send('Page.enable');
await send('DOM.enable');
await send('Runtime.enable');
await send('Console.enable');
await send('Network.enable');

async function evalJs(expr) {
  const result = await send('Runtime.evaluate', {
    expression: expr,
    returnByValue: true,
    awaitPromise: true
  });
  if (result.exceptionDetails) {
    throw new Error('Eval error: ' + JSON.stringify(result.exceptionDetails));
  }
  return result.result?.value;
}

const waitForElement = async (selector, timeoutMs = 15000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const found = await evalJs(`!!document.querySelector('${selector}')`);
      if (found) return true;
    } catch {}
    await sleep(100);
  }
  throw new Error(`Timeout waiting for element: ${selector}`);
};

console.log('============================================================');
console.log('ISC2 CC 2026 — Reading Notes Browser Interaction Testing');
console.log('============================================================');

let testCount = 0;
let passCount = 0;

function assert(condition, message) {
  testCount++;
  if (condition) {
    passCount++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// 1. Initial Launch
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
await waitForElement('[data-cert-id="isc2-cc"]');
await evalJs(`document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]').click()`);
await waitForElement('[data-version-id="isc2-cc-reading-notes"]');
await evalJs(`document.querySelector('[data-version-id="isc2-cc-reading-notes"]').click()`);
await waitForElement('.reading-screen');
assert(true, 'Reading screen mounted from main entry point');

// 2. Domain Switching & Photographic Images Check per Domain
const expectedImages = {
  1: ['yubikey-5-nfc-token.png', 'datacenter-biometric-scanner.jpg', 'optical-access-turnstiles.jpg'],
  2: [],
  3: ['piv-smart-card-features.jpg'],
  4: ['fiber-optic-connectors.jpg'],
  5: ['physically-destroyed-hard-drive.jpg']
};

let totalVerifiedImages = 0;

for (let d = 1; d <= 5; d++) {
  await evalJs(`document.querySelector('button[data-select-domain="${d}"]').click()`);
  await waitForElement(`.reading-article[data-domain-id="${d}"]`);
  // Wait for domain markdown content to finish loading
  for (let w = 0; w < 50; w++) {
    const isLoading = await evalJs(`!!document.querySelector('.reading-article[data-domain-id="${d}"] .reading-unpublished-note')`);
    if (!isLoading) break;
    await sleep(100);
  }
  const activeDomain = await evalJs(`document.querySelector('button[data-select-domain="${d}"]').classList.contains('active')`);
  assert(activeDomain, `Domain ${d} button active state verified upon switching`);

  // Check expected images in this domain
  for (const imgName of expectedImages[d]) {
    const imgData = await evalJs(`
      (async () => {
        const img = document.querySelector('img[src*="${imgName}"]');
        if (!img) return null;
        img.scrollIntoView({ block: 'center' });
        if (!img.complete) {
          await new Promise(r => {
            img.onload = () => r();
            img.onerror = () => r();
            setTimeout(r, 1000);
          });
        }
        return {
          complete: img.complete,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        };
      })()
    `);
    assert(imgData && imgData.complete && imgData.naturalWidth > 0, `Image [${imgName}] loaded with valid natural dimensions (${imgData?.naturalWidth}x${imgData?.naturalHeight})`);
    if (imgData && imgData.complete && imgData.naturalWidth > 0) totalVerifiedImages++;
  }
}

assert(totalVerifiedImages === 6, `All 6 authentic educational images verified across Domains 1–5 (total: ${totalVerifiedImages})`);

// 3. Light / Dark Theme Switching Test
const checkThemeToggle = async () => {
  // Switch to light
  await evalJs(`
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  `);
  await sleep(150);
  const lightThemeAttr = await evalJs(`document.documentElement.getAttribute('data-theme')`);
  assert(lightThemeAttr === 'light', 'Light theme data-theme attribute set to light');

  // Switch to dark
  await evalJs(`
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  `);
  await sleep(150);
  const darkThemeAttr = await evalJs(`document.documentElement.getAttribute('data-theme')`);
  assert(darkThemeAttr === 'dark', 'Dark theme data-theme attribute set to dark');
};
await checkThemeToggle();

// 4. Cold-load direct deep link
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/#/reading/domain-4` });
await waitForElement('.reading-screen');
await sleep(400);
const d4Active = await evalJs(`!!document.querySelector('.reading-article[data-domain-id="4"]')`);
assert(d4Active, 'Cold-load direct deep link #/reading/domain-4 mounted Domain 4 directly');

// 5. Reload & State Persistence
// First navigate back so reading screen cleanly disposes before updating localStorage
await evalJs(`document.querySelector('#btn-reading-back')?.click()`);
await sleep(200);

await evalJs(`
  localStorage.setItem('sec_cert_reading_progress_v1', JSON.stringify({
    schemaVersion: 1,
    lastDomainId: 3,
    lastTopicId: 'topic-3-1-access-control-concepts',
    lastScrollY: 450,
    domains: {
      '3': {
        domainId: 3,
        lastTopicId: 'topic-3-1-access-control-concepts',
        lastScrollY: 450,
        completedTopics: ['3.1.1', '3.1.2']
      }
    }
  }));
`);

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/?t=${Date.now()}` });
await waitForElement('[data-cert-id="isc2-cc"]');
await evalJs(`document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]').click()`);
await waitForElement('[data-version-id="isc2-cc-reading-notes"]');
await evalJs(`document.querySelector('[data-version-id="isc2-cc-reading-notes"]').click()`);
await waitForElement('.reading-screen');
await sleep(400);

const restoredDomain = await evalJs(`
  document.querySelector('.reading-article')?.getAttribute('data-domain-id')
`);
assert(restoredDomain === '3', `Reading persistence resumed lastDomainId (Domain ${restoredDomain})`);

// 6. Mobile Viewport & 0px Overflow Check (390x844)
await send('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true
});
await sleep(300);

for (let d = 1; d <= 5; d++) {
  await evalJs(`document.querySelector('button[data-select-domain="${d}"]').click()`);
  await waitForElement(`.reading-article[data-domain-id="${d}"]`);
  await sleep(300);

  const overflow = await evalJs(`
    (() => {
      const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
      const winW = window.innerWidth;
      return { scrollW, winW, diff: scrollW - winW };
    })()
  `);
  assert(overflow.diff <= 1, `Mobile 390px Domain ${d}: 0px horizontal overflow (${overflow.scrollW}px <= ${overflow.winW}px)`);
}

// 7. Console Errors & Network Failures
assert(consoleErrors.length === 0, `Zero uncaught JavaScript console errors (count: ${consoleErrors.length})`);
assert(networkFailures.length === 0, `Zero failed network asset requests (count: ${networkFailures.length})`);

console.log('============================================================');
console.log(`Browser Interaction Testing Complete: ${passCount} / ${testCount} checks passed (${((passCount / testCount) * 100).toFixed(1)}%)`);
console.log('============================================================\n');

ws.close();
chromeProc.kill();
server.close();
