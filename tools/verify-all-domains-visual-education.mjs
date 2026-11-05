import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'artifacts', 'qa', 'reading-notes-visual-education-domains-1-to-5');
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

const DEBUG_PORT = 9229;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-vis-qa-'));
const chromeProc = spawn(chromePath, [
  `--remote-debugging-port=${DEBUG_PORT}`,
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-background-networking',
  'about:blank'
]);

const sleep = ms => new Promise(r => setTimeout(r, ms));

let connected = false;
for (let i = 0; i < 30; i++) {
  try {
    const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    if (res.ok) { connected = true; break; }
  } catch {
    await sleep(200);
  }
}
if (!connected) {
  console.error('Failed to connect to Chrome CDP');
  server.close();
  process.exit(1);
}

const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`, { method: 'PUT' });
const tab = await newTabRes.json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((res, rej) => {
  ws.onopen = res;
  ws.onerror = rej;
});

let msgId = 1;
const callbacks = new Map();
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.id && callbacks.has(data.id)) {
    const cb = callbacks.get(data.id);
    callbacks.delete(data.id);
    if (data.error) cb.rej(data.error);
    else cb.res(data.result);
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

console.log('[2] Initializing app and navigating to Reading Notes...');
await send('Emulation.setDeviceMetricsOverride', {
  width: 1920,
  height: 1080,
  deviceScaleFactor: 1,
  mobile: false
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
await waitForElement('[data-cert-id="isc2-cc"]');
await evalJs(`(() => {
  const btn = document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]') || document.querySelector('[data-cert-id="isc2-cc"]');
  if (btn) btn.click();
})()`);

await waitForElement('[data-version-id="isc2-cc-reading-notes"]');
await evalJs(`(() => {
  const rnBtn = document.querySelector('[data-version-id="isc2-cc-reading-notes"]');
  if (rnBtn) rnBtn.click();
})()`);

await waitForElement('.reading-screen');
await waitForElement('.reading-article');
console.log('  ✓ Reading screen mounted successfully');

const viewports = [
  { name: 'desktop-1920', width: 1920, height: 1080, mobile: false },
  { name: 'laptop-1366', width: 1366, height: 768, mobile: false },
  { name: 'tablet-768', width: 768, height: 1024, mobile: true },
  { name: 'mobile-390', width: 390, height: 844, mobile: true }
];

const themes = ['dark', 'light'];
const manifest = {
  timestamp: new Date().toISOString(),
  testRun: 'Complete Reading Notes Visual Education Enhancement (Domains 1-5)',
  viewports,
  themes,
  domainsVerified: [1, 2, 3, 4, 5],
  domainVisuals: {},
  screenshots: []
};

let totalChecks = 0;
let passedChecks = 0;

for (let domainId = 1; domainId <= 5; domainId++) {
  console.log(`\n============================================================`);
  console.log(`Auditing Domain ${domainId} Visual Learning Architecture`);
  console.log(`============================================================`);

  // Switch to domain
  await evalJs(`(() => {
    const btn = document.querySelector('button[data-select-domain="${domainId}"]');
    if (btn) btn.click();
  })()`);
  await waitForElement(`.reading-article[data-domain-id="${domainId}"]`);
  await sleep(400);

  manifest.domainVisuals[`domain-${domainId}`] = {};

  for (const vp of viewports) {
    for (const theme of themes) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });

      // Set theme
      await evalJs(`(() => {
        document.documentElement.setAttribute('data-theme', '${theme}');
        if ('${theme}' === 'light') {
          document.body.classList.add('light-theme');
          document.body.classList.remove('dark-theme');
        } else {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
        }
      })()`);

      await sleep(200);

      // Verify 0px horizontal page overflow
      const overflow = await evalJs(`(() => {
        const docEl = document.documentElement;
        const body = document.body;
        const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
        const winW = window.innerWidth;
        return {
          scrollW,
          winW,
          hasOverflow: scrollW > winW + 1,
          diff: scrollW - winW
        };
      })()`);

      totalChecks++;
      if (overflow.hasOverflow) {
        console.error(`  [FAIL] D${domainId} ${vp.name} (${theme}): Horizontal overflow detected: +${overflow.diff}px`);
      } else {
        passedChecks++;
        console.log(`  [PASS] D${domainId} ${vp.name} (${theme}): 0px horizontal overflow (scrollWidth=${overflow.scrollW}px <= ${overflow.winW}px)`);
      }

      // Check specific visual assets per domain
      if (domainId === 1) {
        const d1 = await evalJs(`(() => {
          const yubikey = document.querySelector('img[src*="yubikey-5-nfc-token.png"]');
          const biometric = document.querySelector('img[src*="datacenter-biometric-scanner.jpg"]');
          const turnstile = document.querySelector('img[src*="optical-access-turnstiles.jpg"]');
          const masking = document.querySelector('.reading-masking-card');
          const riskFlow = document.querySelector('[data-diagram="riskTreatmentDecisionFlow"]');
          return {
            yubikey: !!yubikey,
            biometric: !!biometric,
            turnstile: !!turnstile,
            masking: !!masking,
            riskFlow: !!riskFlow
          };
        })()`);
        totalChecks += 5;
        if (d1.yubikey && d1.biometric && d1.turnstile && d1.masking && d1.riskFlow) {
          passedChecks += 5;
        } else {
          console.error('    [FAIL] Missing D1 visual asset:', d1);
        }
      } else if (domainId === 2) {
        const d2 = await evalJs(`(() => {
          const backup = document.querySelector('[data-diagram="backupRestoreChains"]');
          const site = document.querySelector('[data-diagram="drSiteTiers"]');
          return {
            backupChains: !!backup,
            siteTiers: !!site
          };
        })()`);
        totalChecks += 2;
        if (d2.backupChains && d2.siteTiers) {
          passedChecks += 2;
        } else {
          console.error('    [FAIL] Missing D2 visual asset:', d2);
        }
      } else if (domainId === 3) {
        const d3 = await evalJs(`(() => {
          const smartCard = document.querySelector('img[src*="piv-smart-card-features.jpg"]');
          const cerCurve = document.querySelector('[data-diagram="biometricSensitivityCurve"]');
          return {
            smartCard: !!smartCard,
            cerCurve: !!cerCurve
          };
        })()`);
        totalChecks += 2;
        if (d3.smartCard && d3.cerCurve) {
          passedChecks += 2;
        } else {
          console.error('    [FAIL] Missing D3 visual asset:', d3);
        }
      } else if (domainId === 4) {
        const d4 = await evalJs(`(() => {
          const fiberOptic = document.querySelector('img[src*="fiber-optic-connectors.jpg"]');
          const tcpUdp = document.querySelector('[data-diagram="tcpHandshakeVsUdp"]');
          const idsIps = document.querySelector('[data-diagram="idsVsIpsInspectionFlow"]');
          return {
            fiberOptic: !!fiberOptic,
            tcpUdp: !!tcpUdp,
            idsIps: !!idsIps
          };
        })()`);
        totalChecks += 3;
        if (d4.fiberOptic && d4.tcpUdp && d4.idsIps) {
          passedChecks += 3;
        } else {
          console.error('    [FAIL] Missing D4 visual asset:', d4);
        }
      } else if (domainId === 5) {
        const d5 = await evalJs(`(() => {
          const shredder = document.querySelector('img[src*="physically-destroyed-hard-drive.jpg"]');
          const crypto = document.querySelector('[data-diagram="cryptographyPipelines"]');
          const siem = document.querySelector('[data-diagram="siemTelemetryPipeline"]');
          const purple = document.querySelector('[data-diagram="purpleTeamLoop"]');
          return {
            shredder: !!shredder,
            cryptoPipelines: !!crypto,
            siemPipeline: !!siem,
            purpleTeamLoop: !!purple
          };
        })()`);
        totalChecks += 4;
        if (d5.shredder && d5.cryptoPipelines && d5.siemPipeline && d5.purpleTeamLoop) {
          passedChecks += 4;
        } else {
          console.error('    [FAIL] Missing D5 visual asset:', d5);
        }
      }

      // Capture screenshot for Desktop and Mobile representations
      if (vp.name === 'desktop-1920' || vp.name === 'mobile-390') {
        const ssName = `d${domainId}-${vp.name}-${theme}.png`;
        const ssPath = path.join(outDir, ssName);
        const screenshot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(ssPath, Buffer.from(screenshot.data, 'base64'));
        manifest.screenshots.push({
          domain: domainId,
          viewport: vp.name,
          theme,
          file: ssName
        });
      }
    }
  }
}

manifest.totalChecks = totalChecks;
manifest.passedChecks = passedChecks;
manifest.successRate = `${((passedChecks / totalChecks) * 100).toFixed(1)}%`;

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

console.log('\n============================================================');
console.log(`Browser CDP QA Complete: ${passedChecks} / ${totalChecks} checks passed (${manifest.successRate})`);
console.log(`Captured ${manifest.screenshots.length} screenshots in artifacts/qa/reading-notes-visual-education-domains-1-to-5/`);
console.log('============================================================\n');

ws.close();
chromeProc.kill();
server.close();
