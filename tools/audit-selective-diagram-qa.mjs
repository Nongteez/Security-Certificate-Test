import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8094;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/selective-diagram-remediation');
const SCREENSHOT_DIR = path.join(ARTIFACT_DIR, 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
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

  close() {
    if (this.ws) this.ws.close();
  }
}

async function findChromePath() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('Chrome executable not found');
}

async function getWebSocketDebuggerUrl(debugPort) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
      const data = await res.json();
      return data.webSocketDebuggerUrl;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  throw new Error('Failed to connect to Chrome debug port');
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const VIEWPORTS = [
  { name: '1920x1080', width: 1920, height: 1080, expectedMode: 'desktop' },
  { name: '1440x900',  width: 1440, height: 900,  expectedMode: 'desktop' },
  { name: '1366x768',  width: 1366, height: 768,  expectedMode: 'desktop' },
  { name: '1024x768',  width: 1024, height: 768,  expectedMode: 'adaptive' }, // container width ~680px -> mobile fallback
  { name: '768x1024',  width: 768,  height: 1024, expectedMode: 'mobile' },
  { name: '390x844',   width: 390,  height: 844,  expectedMode: 'mobile' },
  { name: '360x800',   width: 360,  height: 800,  expectedMode: 'mobile' }
];

const THEMES = ['dark', 'light'];

const DIAGRAMS_TO_TEST = [
  { id: 'osiVsTcpIpModel', domain: 4, anchor: '#topic-4-1-tcp-ip-mapping', title: 'OSI vs TCP/IP Mapping' },
  { id: 'dmzFirewallArchitecture', domain: 4, anchor: '#topic-4-2-dmz-perimeter', title: 'DMZ Perimeter Architecture' },
  { id: 'aaaLifecycle', domain: 1, anchor: '#topic-1-1-identification-authentication', title: 'AAA Framework & Access Lifecycle' },
  { id: 'controlTimeline', domain: 1, anchor: '#topic-1-4-control-types', title: 'Security Control Functions Timeline' },
  { id: 'bcVsDrScope', domain: 2, anchor: '#topic-2-2-bc-vs-dr', title: 'BC vs DR Scope Relationship' },
  { id: 'effectivenessHierarchy', domain: 2, anchor: '#topic-2-4-cybersecurity-metrics', title: 'Cybersecurity Measurement Hierarchy' },
  { id: 'iamLifecycle', domain: 3, anchor: '#topic-3-1-jml-lifecycle', title: 'JML IAM Lifecycle' },
  { id: 'defenseInDepth', domain: 1, anchor: '#topic-1-1-zero-trust-defense-in-depth', title: 'Defense in Depth (Threshold Check)' }
];

async function runAudit() {
  console.log('================================================================');
  console.log('SEC-CERT-TEST: Selective Diagram Remediation Real-Browser QA');
  console.log('================================================================');

  const server = await startServer();
  console.log(`Static server running at http://127.0.0.1:${PORT}`);

  const chromePath = await findChromePath();
  const debugPort = 9226;
  const userDataDir = path.join(ROOT, 'tmp/chrome-diagram-remediation-qa');
  if (fs.existsSync(userDataDir)) {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  }

  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--mute-audio',
    '--window-size=1920,1080'
  ]);

  const wsUrl = await getWebSocketDebuggerUrl(debugPort);
  console.log('Connected to Chrome WebSocket');

  const targetsRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');

  async function evalInPage(expression) {
    const res = await client.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval failed: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result.value;
  }

  async function setViewport(width, height) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
    await sleep(250);
  }

  async function setTheme(theme) {
    await evalInPage(`(() => {
      document.documentElement.setAttribute('data-theme', '${theme}');
      if ('${theme}' === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
      } else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
      }
    })()`);
    await sleep(150);
  }

  async function navigateToDomain(domainNum) {
    await client.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/#/reading/domain-${domainNum}` });
    await sleep(1200);
    // ensure article and content rendered
    await evalInPage(`(() => {
      const card = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]');
      if (card) card.click();
      const readBtn = document.querySelector('.btn-reading-entry');
      if (readBtn) readBtn.click();
      const dSel = document.querySelector('[data-select-domain="${domainNum}"]');
      if (dSel) dSel.click();
    })()`);
    await sleep(1200);
  }

  const manifest = [];
  let totalChecks = 0;
  let passedChecks = 0;
  let failedChecks = 0;

  for (const diag of DIAGRAMS_TO_TEST) {
    console.log(`\n----------------------------------------------------------------`);
    console.log(`Auditing Diagram: [${diag.id}] in Domain ${diag.domain}`);
    console.log(`----------------------------------------------------------------`);

    await navigateToDomain(diag.domain);

    for (const vp of VIEWPORTS) {
      await setViewport(vp.width, vp.height);

      for (const theme of THEMES) {
        await setTheme(theme);
        totalChecks++;

        // Measure layout & diagram visibility in page
        const diagState = await evalInPage(`(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
          const innerW = window.innerWidth;
          const overflowPx = Math.max(0, scrollW - innerW);

          const card = document.querySelector('.reading-diagram-card[data-diagram="${diag.id}"]');
          if (!card) {
            return { found: false, overflowPx };
          }

          // Scroll into view
          card.scrollIntoView({ block: 'center', inline: 'nearest' });

          const rect = card.getBoundingClientRect();
          const desktopWrap = card.querySelector('.reading-diag-desktop');
          const mobileWrap = card.querySelector('.reading-diag-mobile');
          const svg = card.querySelector('svg.reading-diagram-svg');

          const desktopDisp = desktopWrap ? window.getComputedStyle(desktopWrap).display : 'none';
          const mobileDisp = mobileWrap ? window.getComputedStyle(mobileWrap).display : 'none';

          const svgW = svg ? svg.getBoundingClientRect().width : 0;
          const svgH = svg ? svg.getBoundingClientRect().height : 0;

          // osiVsTcpIpModel specific check
          let osiMobileSubLayersCount = 0;
          if ('${diag.id}' === 'osiVsTcpIpModel' && mobileWrap) {
            osiMobileSubLayersCount = mobileWrap.querySelectorAll('[data-osi-layer]').length;
          }

          return {
            found: true,
            overflowPx,
            cardRect: { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) },
            desktopDisp,
            mobileDisp,
            svgSize: { width: Math.round(svgW), height: Math.round(svgH) },
            osiMobileSubLayersCount
          };
        })()`);

        await sleep(150);

        if (!diagState.found) {
          console.error(`  ✗ [${diag.id} @ ${vp.name} ${theme}] Card NOT found in DOM`);
          failedChecks++;
          continue;
        }

        // Evaluate expectations
        let pass = true;
        let reasons = [];

        if (diagState.overflowPx > 0) {
          pass = false;
          reasons.push(`Page horizontal overflow: ${diagState.overflowPx}px`);
        }

        if (vp.expectedMode === 'desktop') {
          if (diagState.desktopDisp !== 'flex') {
            pass = false;
            reasons.push(`Expected desktopDisp 'flex', got '${diagState.desktopDisp}'`);
          }
          if (diagState.mobileDisp !== 'none') {
            pass = false;
            reasons.push(`Expected mobileDisp 'none', got '${diagState.mobileDisp}'`);
          }
          if (diagState.svgSize.width <= 0 || diagState.svgSize.height <= 0) {
            pass = false;
            reasons.push(`SVG dimensions zero: ${JSON.stringify(diagState.svgSize)}`);
          }
        } else if (vp.expectedMode === 'mobile') {
          if (diagState.mobileDisp !== 'flex') {
            pass = false;
            reasons.push(`Expected mobileDisp 'flex', got '${diagState.mobileDisp}'`);
          }
          if (diagState.desktopDisp !== 'none') {
            pass = false;
            reasons.push(`Expected desktopDisp 'none', got '${diagState.desktopDisp}'`);
          }
        }

        if (diag.id === 'osiVsTcpIpModel' && vp.expectedMode === 'mobile') {
          if (diagState.osiMobileSubLayersCount !== 7) {
            pass = false;
            reasons.push(`Expected 7 data-osi-layer items in mobile stack, got ${diagState.osiMobileSubLayersCount}`);
          }
        }

        // Capture screenshot for key viewports: 1920, 1366, 390 (and 1440 for dark)
        let screenshotRelPath = null;
        if (['1920x1080', '1366x768', '390x844'].includes(vp.name) || (vp.name === '1440x900' && theme === 'dark')) {
          const filename = `${diag.id}-${vp.name}-${theme}.png`;
          const screenshotRes = await client.send('Page.captureScreenshot', { format: 'png' });
          const buffer = Buffer.from(screenshotRes.data, 'base64');
          const filePath = path.join(SCREENSHOT_DIR, filename);
          fs.writeFileSync(filePath, buffer);
          screenshotRelPath = `artifacts/qa/selective-diagram-remediation/screenshots/${filename}`;
        }

        if (pass) {
          passedChecks++;
          console.log(`  ✓ PASS: [${diag.id} @ ${vp.name} ${theme}] overflow=0px, D=${diagState.desktopDisp}, M=${diagState.mobileDisp}, svgW=${diagState.svgSize.width}`);
        } else {
          failedChecks++;
          console.error(`  ✗ FAIL: [${diag.id} @ ${vp.name} ${theme}] ${reasons.join(', ')}`);
        }

        manifest.push({
          diagramId: diag.id,
          domain: diag.domain,
          viewport: vp.name,
          theme,
          passed: pass,
          overflowPx: diagState.overflowPx,
          desktopDisplay: diagState.desktopDisp,
          mobileDisplay: diagState.mobileDisp,
          svgDimensions: diagState.svgSize,
          osiLayersCount: diagState.osiMobileSubLayersCount,
          screenshot: screenshotRelPath,
          failureReasons: reasons
        });
      }
    }
  }

  // Write manifest
  const manifestPath = path.join(ARTIFACT_DIR, 'remediation-evidence-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalConfigurationsTested: totalChecks,
    passed: passedChecks,
    failed: failedChecks,
    successRate: `${((passedChecks / totalChecks) * 100).toFixed(1)}%`,
    entries: manifest
  }, null, 2));

  console.log('\n================================================================');
  console.log(`Browser QA Completed: ${passedChecks}/${totalChecks} PASS (${failedChecks} FAIL)`);
  console.log(`Evidence manifest: ${manifestPath}`);
  console.log('================================================================');

  await client.send('Browser.close');
  client.close();
  server.close();

  if (failedChecks > 0) {
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error('Fatal error during browser QA:', err);
  process.exit(1);
});

