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

const PORT = 5214;
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

const DEBUG_PORT = 9241;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-contrast-blended-'));
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

await send('Emulation.setDeviceMetricsOverride', {
  width: 1366,
  height: 768,
  deviceScaleFactor: 1,
  mobile: false
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });

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

await waitForElement('[data-cert-id="isc2-cc"]');
await evalJs(`document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]').click()`);
await waitForElement('[data-version-id="isc2-cc-reading-notes"]');
await evalJs(`document.querySelector('[data-version-id="isc2-cc-reading-notes"]').click()`);
await waitForElement('.reading-screen');

const accurateContrastScript = `
(() => {
  function getLuminance(r, g, b) {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function parseRgba(colorStr) {
    if (!colorStr) return null;
    const match = colorStr.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?\\)/);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
        a: match[4] !== undefined ? parseFloat(match[4]) : 1.0
      };
    }
    return null;
  }

  function blendRgba(fg, bg) {
    if (!fg) return bg;
    const alpha = fg.a;
    return {
      r: Math.round(fg.r * alpha + bg.r * (1 - alpha)),
      g: Math.round(fg.g * alpha + bg.g * (1 - alpha)),
      b: Math.round(fg.b * alpha + bg.b * (1 - alpha)),
      a: 1.0
    };
  }

  function getContrastRatio(rgb1, rgb2) {
    if (!rgb1 || !rgb2) return null;
    const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  const results = [];
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  const pageBg = theme === 'light' ? { r: 255, g: 255, b: 255, a: 1 } : { r: 19, g: 19, b: 24, a: 1 };

  const diagrams = document.querySelectorAll('.reading-diagram-card, .reading-semantic-diagram');

  diagrams.forEach(diag => {
    const diagId = diag.getAttribute('data-diagram') || 'unknown';
    const svg = diag.querySelector('svg');
    if (!svg) return;

    const cardStyle = window.getComputedStyle(diag);
    const cardBgParsed = parseRgba(cardStyle.backgroundColor);
    const diagBaseBg = blendRgba(cardBgParsed, pageBg);

    const textEls = svg.querySelectorAll('text');
    textEls.forEach(t => {
      const textContent = t.textContent.trim();
      if (!textContent) return;

      const style = window.getComputedStyle(t);
      const textFill = parseRgba(style.fill);
      if (!textFill) return;

      let effectiveBg = diagBaseBg;

      let parent = t.parentElement;
      while (parent && parent !== svg) {
        const rect = parent.querySelector('rect');
        if (rect && rect !== t) {
          const rectStyle = window.getComputedStyle(rect);
          const rectFill = parseRgba(rectStyle.fill);
          if (rectFill) {
            effectiveBg = blendRgba(rectFill, effectiveBg);
          }
          break;
        }
        parent = parent.parentElement;
      }

      const ratio = getContrastRatio(textFill, effectiveBg);
      const fontSizePx = parseFloat(style.fontSize) || 12;
      const isBold = parseInt(style.fontWeight) >= 700 || style.fontWeight === 'bold';
      const isLargeText = fontSizePx >= 18 || (fontSizePx >= 14 && isBold);
      const targetRatio = isLargeText ? 3.0 : 4.5;

      if (ratio !== null && ratio < targetRatio) {
        results.push({
          diagram: diagId,
          element: 'text',
          content: textContent.slice(0, 45),
          fill: style.fill,
          effectiveBg: 'rgb(' + effectiveBg.r + ',' + effectiveBg.g + ',' + effectiveBg.b + ')',
          contrastRatio: parseFloat(ratio.toFixed(2)),
          targetRatio,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight
        });
      }
    });

    const lines = svg.querySelectorAll('line, path');
    lines.forEach(l => {
      const style = window.getComputedStyle(l);
      const stroke = parseRgba(style.stroke);
      const strokeWidth = parseFloat(style.strokeWidth) || 0;
      if (!stroke || strokeWidth <= 0 || style.stroke === 'none') return;

      const ratio = getContrastRatio(stroke, diagBaseBg);
      if (ratio !== null && ratio < 3.0) {
        results.push({
          diagram: diagId,
          element: l.tagName,
          stroke: style.stroke,
          effectiveBg: 'rgb(' + diagBaseBg.r + ',' + diagBaseBg.g + ',' + diagBaseBg.b + ')',
          contrastRatio: parseFloat(ratio.toFixed(2)),
          targetRatio: 3.0
        });
      }
    });
  });

  return results;
})()
`;

const accurateReport = {};

for (let d = 1; d <= 5; d++) {
  accurateReport[`domain-${d}`] = {};

  await evalJs(`document.querySelector('button[data-select-domain="${d}"]').click()`);
  await waitForElement(`.reading-article[data-domain-id="${d}"]`);
  await sleep(400);

  for (const theme of ['light', 'dark']) {
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
    await sleep(250);

    const issues = await evalJs(accurateContrastScript);
    accurateReport[`domain-${d}`][theme] = {
      issueCount: issues.length,
      issues
    };
  }
}

fs.mkdirSync('artifacts/qa', { recursive: true });
fs.writeFileSync('artifacts/qa/reading-notes-contrast-audit-accurate.json', JSON.stringify(accurateReport, null, 2), 'utf8');

console.log('Accurate Blended Contrast Audit:');
for (const [dom, themes] of Object.entries(accurateReport)) {
  console.log(`\n=== ${dom} ===`);
  for (const [th, data] of Object.entries(themes)) {
    console.log(`  Theme: ${th} -> ${data.issueCount} confirmed WCAG contrast failures`);
    if (data.issueCount > 0) {
      data.issues.slice(0, 8).forEach(iss => {
        if (iss.element === 'text') {
          console.log(`    [${iss.diagram}] "${iss.content}" (${iss.fontSize}, ${iss.fontWeight}) -> ratio: ${iss.contrastRatio}:1 (target ${iss.targetRatio}:1, fill: ${iss.fill}, bg: ${iss.effectiveBg})`);
        } else {
          console.log(`    [${iss.diagram}] ${iss.element} (stroke: ${iss.stroke}) -> ratio: ${iss.contrastRatio}:1 (target 3.0:1)`);
        }
      });
    }
  }
}

ws.close();
chromeProc.kill();
server.close();
