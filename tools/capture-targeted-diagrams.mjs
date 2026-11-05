import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'artifacts', 'qa', 'reading-notes-full-visual-qa-theme-refinement');
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

const PORT = 5220;
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

const DEBUG_PORT = 9245;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-diagram-qa-'));
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

const targets = [
  // Domain 1
  { domain: 1, selector: '[data-diagram="threatChain"]', name: 'd1-threatChain' },
  { domain: 1, selector: '[data-diagram="ciaTriad"]', name: 'd1-ciaTriad' },
  { domain: 1, selector: '.reading-masking-card', name: 'd1-dataMaskingCard' },
  { domain: 1, selector: '[data-diagram="riskTreatmentDecisionFlow"]', name: 'd1-riskTreatmentDecisionFlow' },
  // Domain 2
  { domain: 2, selector: '[data-diagram="rtoRpoTimeline"]', name: 'd2-rtoRpoTimeline' },
  { domain: 2, selector: '[data-diagram="backupRestoreChains"]', name: 'd2-backupRestoreChains' },
  { domain: 2, selector: '[data-diagram="drSiteTiers"]', name: 'd2-drSiteTiers' },
  // Domain 3
  { domain: 3, selector: '[data-diagram="iamLifecycle"]', name: 'd3-iamLifecycle' },
  { domain: 3, selector: '[data-diagram="biometricSensitivityCurve"]', name: 'd3-biometricSensitivityCurve' },
  { domain: 3, selector: '[data-diagram="accessControlModels"]', name: 'd3-accessControlModels' },
  // Domain 4
  { domain: 4, selector: '[data-diagram="osiVsTcpIpModel"]', name: 'd4-osiVsTcpIpModel' },
  { domain: 4, selector: '[data-diagram="tcpHandshakeVsUdp"]', name: 'd4-tcpHandshakeVsUdp' },
  { domain: 4, selector: '[data-diagram="idsVsIpsInspectionFlow"]', name: 'd4-idsVsIpsInspectionFlow' },
  { domain: 4, selector: '[data-diagram="dmzFirewallArchitecture"]', name: 'd4-dmzFirewallArchitecture' },
  // Domain 5
  { domain: 5, selector: '[data-diagram="cryptographyPipelines"]', name: 'd5-cryptographyPipelines' },
  { domain: 5, selector: '[data-diagram="siemTelemetryPipeline"]', name: 'd5-siemTelemetryPipeline' },
  { domain: 5, selector: '[data-diagram="purpleTeamLoop"]', name: 'd5-purpleTeamLoop' }
];

let currentDomain = 1;
const manifest = [];

for (const t of targets) {
  if (t.domain !== currentDomain) {
    currentDomain = t.domain;
    await evalJs(`document.querySelector('button[data-select-domain="${currentDomain}"]').click()`);
    await waitForElement(`.reading-article[data-domain-id="${currentDomain}"]`);
    await sleep(400);
  }

  for (const theme of ['dark', 'light']) {
    await evalJs(`
      document.documentElement.setAttribute('data-theme', '${theme}');
      if ('${theme}' === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    `);
    await sleep(200);

    // Scroll element into view and get its bounding box
    const clip = await evalJs(`
      (() => {
        const el = document.querySelector('${t.selector}');
        if (!el) return null;
        el.scrollIntoView({ block: 'center', inline: 'center' });
        const rect = el.getBoundingClientRect();
        return {
          x: Math.max(0, rect.x - 12),
          y: Math.max(0, rect.y - 12),
          width: Math.min(rect.width + 24, 1440),
          height: rect.height + 24,
          scale: 1
        };
      })()
    `);

    if (!clip || clip.width <= 0 || clip.height <= 0) {
      console.warn(`Element not found or hidden: ${t.selector}`);
      continue;
    }

    await sleep(150);

    const filename = `${t.name}-${theme}.png`;
    const filePath = path.join(outDir, filename);

    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip
    });

    fs.writeFileSync(filePath, Buffer.from(ss.data, 'base64'));
    console.log(`Captured: ${filename} (${Math.round(clip.width)}x${Math.round(clip.height)})`);

    manifest.push({
      target: t.name,
      domain: t.domain,
      theme,
      file: filename,
      dimensions: { width: Math.round(clip.width), height: Math.round(clip.height) }
    });
  }
}

fs.writeFileSync(path.join(outDir, 'manifest-targeted.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log(`\nSuccessfully captured ${manifest.length} targeted visual screenshots.`);

ws.close();
chromeProc.kill();
server.close();

