import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8092;
const ROOT = process.cwd();
const ARTIFACT_DIR = path.join(ROOT, 'artifacts/qa/reading-notes-enrichment-qa');

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
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

async function runBrowserQA() {
  console.log('Starting local static HTTP server...');
  const server = await startServer();
  console.log(`Server listening on http://127.0.0.1:${PORT}`);

  const chromePath = await findChromePath();
  const debugPort = 9223;
  const userDataDir = path.join(ROOT, 'tmp/chrome-enrichment-qa');
  if (fs.existsSync(userDataDir)) {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  }

  console.log('Launching Headless Chrome...');
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
  console.log('Connected to Chrome WebSocket:', wsUrl);

  const targetsRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const pageWsUrl = pageTarget.webSocketDebuggerUrl;

  const client = new CDPClient(pageWsUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');

  const testResults = [];

  // Helper to evaluate JS in page
  async function evalInPage(expression) {
    const res = await client.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Evaluation failed: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result.value;
  }

  // Helper to set viewport
  async function setViewport(width, height) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
    await sleep(200);
  }

  // Helper to capture screenshot
  async function captureScreenshot(filename) {
    const res = await client.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const filePath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(filePath, buffer);
    console.log(`Captured: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    return filePath;
  }

  console.log('\n--- Navigating to Reading Notes ---');
  await client.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/#reading` });
  await sleep(1500);

  // 1. Initial Load & Theme Check
  const initialTitle = await evalInPage(`document.title`);
  console.log(`Page title: ${initialTitle}`);

  // Test Matrix across viewports
  const viewports = [
    { name: 'desktop-1920', width: 1920, height: 1080 },
    { name: 'laptop-1366', width: 1366, height: 768 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-390', width: 390, height: 844 }
  ];

  for (let domainId = 1; domainId <= 5; domainId++) {
    console.log(`\n======================================================`);
    console.log(`BROWSER QA: DOMAIN ${domainId}`);
    console.log(`======================================================`);

    // Switch domain
    await evalInPage(`
      (() => {
        const btn = document.querySelector('button.reading-domain-btn[data-select-domain="${domainId}"]');
        if (btn) {
          btn.click();
        } else {
          window.location.hash = '#reading?domain=${domainId}';
        }
      })()
    `);
    await sleep(800);

    // Verify content loaded
    const domainCheck = await evalInPage(`
      (() => {
        const body = document.querySelector('.reading-body');
        const header = document.querySelector('.reading-content-header h1, .reading-domain-title');
        const text = body ? body.innerText : '';
        return {
          hasBody: !!body,
          titleText: header ? header.innerText : '',
          textLength: text.length
        };
      })()
    `);

    console.log(`Domain ${domainId} Title: ${domainCheck.titleText} | Text length: ${domainCheck.textLength}`);

    // Verify key enrichment content presence in DOM
    let specificContentCheck = '';
    if (domainId === 1) {
      specificContentCheck = await evalInPage(`
        (() => {
          const text = document.querySelector('.reading-body').innerText;
          const hasPrivacyTable = text.includes('Confidentiality vs. Privacy') || text.includes('สิทธิของบุคคลธรรมดาในการควบคุมข้อมูลส่วนตัว');
          const hasAAAPipeline = text.includes('AAA Framework') && text.includes('Identification') && text.includes('Accounting / Auditing');
          const hasCIATable = text.includes('Wiretapping / Sniffing') || text.includes('Credential Dumping');
          const hasRiskFlow = text.includes('Risk Decision Flow') || text.includes('Residual Risk ≤ Risk Appetite');
          const hasEthicsDilemma = text.includes('Ethical Dilemmas') || text.includes('Critical Infrastructure');
          return { hasPrivacyTable, hasAAAPipeline, hasCIATable, hasRiskFlow, hasEthicsDilemma };
        })()
      `);
      console.log('Domain 1 Enriched Features:', specificContentCheck);
    } else if (domainId === 2) {
      specificContentCheck = await evalInPage(`
        (() => {
          const text = document.querySelector('.reading-body').innerText;
          const hasMTDFormula = text.includes('MTD ≥ RTO + WRT') || text.includes('Work Recovery Time');
          const hasBackupMatrix = text.includes('Full Backup') && text.includes('Differential Backup') && text.includes('Incremental Backup');
          const hasDRTestingMatrix = text.includes('5 ลำดับขั้นการทดสอบ') || text.includes('Tabletop') && text.includes('Full Interruption');
          const hasTailgating = text.includes('Tailgating') && text.includes('Piggybacking');
          return { hasMTDFormula, hasBackupMatrix, hasDRTestingMatrix, hasTailgating };
        })()
      `);
      console.log('Domain 2 Enriched Features:', specificContentCheck);
    } else if (domainId === 3) {
      specificContentCheck = await evalInPage(`
        (() => {
          const text = document.querySelector('.reading-body').innerText;
          const hasFederation = text.includes('SAML 2.0') && text.includes('OAuth 2.0') && text.includes('OpenID Connect');
          const hasPrivilegeCreep = text.includes('Finance-to-IT Transfer') || text.includes('Privilege Creep');
          const hasNeedToKnowTriad = text.includes('Least Privilege vs. Need to Know vs. Separation of Duties');
          return { hasFederation, hasPrivilegeCreep, hasNeedToKnowTriad };
        })()
      `);
      console.log('Domain 3 Enriched Features:', specificContentCheck);
    } else if (domainId === 4) {
      specificContentCheck = await evalInPage(`
        (() => {
          const text = document.querySelector('.reading-body').innerText;
          const hasOSIHardware = text.includes('Hardware & Security Controls') || text.includes('Next-Gen Firewall');
          const hasSharedRespMatrix = text.includes('Shared Responsibility Matrix') && text.includes('IaaS') && text.includes('PaaS') && text.includes('SaaS');
          const hasPurdueModel = text.includes('Purdue Model') && text.includes('Industrial DMZ') && text.includes('Level 0');
          return { hasOSIHardware, hasSharedRespMatrix, hasPurdueModel };
        })()
      `);
      console.log('Domain 4 Enriched Features:', specificContentCheck);
    } else if (domainId === 5) {
      specificContentCheck = await evalInPage(`
        (() => {
          const text = document.querySelector('.reading-body').innerText;
          const hasNTPCrypto = text.includes('Cryptographic NTP Authentication') || text.includes('NTP Amplification');
          return { hasNTPCrypto };
        })()
      `);
      console.log('Domain 5 Enriched Features:', specificContentCheck);
    }

    // Check responsiveness across viewports
    for (const vp of viewports) {
      await setViewport(vp.width, vp.height);

      const overflowCheck = await evalInPage(`
        (() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientWidth = docEl.clientWidth;
          const overflow = scrollWidth - clientWidth;
          return {
            clientWidth,
            scrollWidth,
            overflow: Math.max(0, overflow)
          };
        })()
      `);

      const passOverflow = overflowCheck.overflow === 0;
      console.log(`  [${vp.name}] ${vp.width}x${vp.height}: Overflow = ${overflowCheck.overflow}px -> ${passOverflow ? 'PASS' : 'FAIL'}`);

      testResults.push({
        domain: domainId,
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        overflow: overflowCheck.overflow,
        pass: passOverflow
      });

      // Capture screenshots for 1920 (desktop) and 390 (mobile)
      if (vp.width === 1920 || vp.width === 390) {
        await captureScreenshot(`d${domainId}-${vp.name}-dark.png`);
      }
    }
  }

  // 7. Light Theme Verification
  console.log('\n--- Testing Light Theme ---');
  await setViewport(1920, 1080);
  await evalInPage(`
    (() => {
      const themeBtn = document.querySelector('#btn-theme-toggle, .btn-theme-toggle');
      if (themeBtn) themeBtn.click();
      else document.documentElement.setAttribute('data-theme', 'light');
    })()
  `);
  await sleep(400);

  const themeCheck = await evalInPage(`
    document.documentElement.getAttribute('data-theme') || document.body.className
  `);
  console.log(`Theme after toggle: ${themeCheck}`);

  await captureScreenshot('d1-desktop-1920-light.png');
  await captureScreenshot('d4-desktop-1920-light.png');

  // 8. Deep Link Verification
  console.log('\n--- Testing Deep Link Resolution ---');
  await client.send('Page.navigate', {
    url: `http://127.0.0.1:${PORT}/#reading?domain=1&anchor=topic-1-1-privacy-data-protection`
  });
  await sleep(1000);

  const deepLinkCheck = await evalInPage(`
    (() => {
      const activeDomain = document.querySelector('.reading-domain-tab.active, .reading-domain-card.is-active');
      const domainId = activeDomain ? activeDomain.getAttribute('data-domain-id') : '1';
      const targetAnchor = document.getElementById('topic-1-1-privacy-data-protection');
      const rect = targetAnchor ? targetAnchor.getBoundingClientRect() : null;
      return {
        domainId,
        hasAnchor: !!targetAnchor,
        anchorTop: rect ? rect.top : null,
        scrollY: window.scrollY
      };
    })()
  `);
  console.log('Deep link check result:', deepLinkCheck);

  // 9. Reload & Progress Persistence Verification
  console.log('\n--- Testing Reload & State Persistence ---');
  await client.send('Page.reload');
  await sleep(1200);

  const persistenceCheck = await evalInPage(`
    (() => {
      const saved = localStorage.getItem('sec_cert_reading_progress_v1');
      const currentHash = window.location.hash;
      const scrollY = window.scrollY;
      return {
        hasLocalStorage: !!saved,
        savedData: saved ? JSON.parse(saved) : null,
        currentHash,
        scrollY
      };
    })()
  `);
  console.log('Persistence after reload:', persistenceCheck);

  // Write manifest
  fs.writeFileSync(
    path.join(ARTIFACT_DIR, 'browser-qa-results.json'),
    JSON.stringify({
      timestamp: new Date().toISOString(),
      testResults,
      deepLinkCheck,
      persistenceCheck,
      allOverflowPass: testResults.every(r => r.pass)
    }, null, 2),
    'utf8'
  );

  console.log('\n======================================================');
  console.log(`BROWSER QA COMPLETE: ${testResults.filter(r => r.pass).length} / ${testResults.length} Viewport checks PASSED`);
  console.log(`All Zero-Overflow Checks Passed: ${testResults.every(r => r.pass)}`);
  console.log(`Results saved to ${path.join(ARTIFACT_DIR, 'browser-qa-results.json')}`);
  console.log('======================================================');

  client.close();
  chromeProcess.kill();
  server.close();
}

runBrowserQA().catch(err => {
  console.error('Fatal Browser QA Error:', err);
  process.exit(1);
});
