import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5194;
const CHROME_PORT = 9467;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-rendering-remediation');

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

async function verifyBrowser() {
  console.log('=== Domain 2 Browser Verification: Rendering Quality & Title De-duplication ===\n');

  const server = await startServer();
  console.log(`[1] Server started on http://127.0.0.1:${PORT}/`);

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

  if (!versionData) {
    chromeProcess.kill();
    server.close();
    throw new Error(`Failed to connect to Chrome on port ${CHROME_PORT}`);
  }

  const newTabRes = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();
  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  console.log('[2] Chrome CDP connected. Mounting app and navigating to Domain 2...');
  await new Promise(r => setTimeout(r, 1200));

  // Navigate to Domain 2 Reading Notes
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
    const d2Select = document.querySelector('[data-select-domain="2"]');
    if (d2Select) d2Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  const domainHeader = await cdp.eval(`(() => {
    const title = document.querySelector('.reading-article-title');
    return title ? title.textContent.trim() : null;
  })()`);
  console.log('[3] Active Domain Article verified:', domainHeader);
  if (domainHeader !== 'Domain 2: Security Governance') {
    throw new Error(`Expected Domain 2: Security Governance, got: ${domainHeader}`);
  }

  const configs = [
    { name: '1366x768-dark', width: 1366, height: 768, theme: 'dark', mobile: false },
    { name: '1366x768-light', width: 1366, height: 768, theme: 'light', mobile: false },
    { name: '1920x1080-dark', width: 1920, height: 1080, theme: 'dark', mobile: false },
    { name: '1920x1080-light', width: 1920, height: 1080, theme: 'light', mobile: false },
    { name: '390x844-dark', width: 390, height: 844, theme: 'dark', mobile: true },
    { name: '390x844-light', width: 390, height: 844, theme: 'light', mobile: true }
  ];

  const results = [];
  const manifest = [];

  for (const cfg of configs) {
    console.log(`\n--- Inspecting ${cfg.name} (${cfg.width}x${cfg.height}, theme: ${cfg.theme}) ---`);

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: cfg.width,
      height: cfg.height,
      deviceScaleFactor: 2,
      mobile: cfg.mobile
    });

    await cdp.eval(`
      document.documentElement.setAttribute('data-theme', '${cfg.theme}');
      if ('${cfg.theme}' === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    `);
    await new Promise(r => setTimeout(r, 300));

    // Live DOM Audit
    const audit = await cdp.eval(`
      (() => {
        // 1. Check H1 count in entire DOM
        const allH1s = Array.from(document.querySelectorAll('h1')).map(h => ({
          className: h.className,
          text: h.textContent.trim()
        }));

        // 2. Check for H1s inside .reading-body
        const bodyH1s = Array.from(document.querySelectorAll('.reading-body h1')).map(h => h.textContent.trim());

        // 3. Check for visible HTML comment tokens in visible page text
        const bodyText = document.body.innerText;
        const hasVisibleCommentOpen = bodyText.includes('<!--');
        const hasVisibleCommentClose = bodyText.includes('-->');
        const hasVisibleEscapedOpen = bodyText.includes('&lt;!--');
        const hasVisibleSeparatorBars = /={7,}/.test(bodyText);

        // 4. Check lead paragraph presence and positioning
        const lead = document.querySelector('.reading-lead');
        const leadText = lead ? lead.textContent.trim().slice(0, 50) : null;

        // 5. Check Objective 2.1 heading
        const obj21H2 = document.querySelector('#obj-2-1 h2');
        const obj21Text = obj21H2 ? obj21H2.textContent.trim() : null;

        return {
          totalH1Count: allH1s.length,
          allH1s,
          bodyH1Count: bodyH1s.length,
          bodyH1s,
          hasVisibleCommentOpen,
          hasVisibleCommentClose,
          hasVisibleEscapedOpen,
          hasVisibleSeparatorBars,
          hasLead: Boolean(lead),
          leadText,
          obj21Text
        };
      })()
    `);

    let pass = true;
    if (audit.totalH1Count !== 1) {
      console.error(`  FAIL: Expected exactly 1 H1 on page, found ${audit.totalH1Count}:`, audit.allH1s);
      pass = false;
    }
    if (audit.bodyH1Count !== 0) {
      console.error(`  FAIL: Expected 0 H1s inside .reading-body, found ${audit.bodyH1Count}:`, audit.bodyH1s);
      pass = false;
    }
    if (audit.hasVisibleCommentOpen || audit.hasVisibleCommentClose || audit.hasVisibleEscapedOpen) {
      console.error('  FAIL: Visible HTML comment delimiters detected in innerText!');
      pass = false;
    }
    if (audit.hasVisibleSeparatorBars) {
      console.error('  FAIL: Visible separator bars (=======) detected in innerText!');
      pass = false;
    }
    if (!audit.hasLead) {
      console.error('  FAIL: .reading-lead paragraph missing!');
      pass = false;
    }

    console.log(`  Total H1s on page: ${audit.totalH1Count} (Title: "${audit.allH1s[0]?.text}")`);
    console.log(`  H1s inside article body: ${audit.bodyH1Count}`);
    console.log(`  Visible HTML comments in body text: ${audit.hasVisibleCommentOpen ? 'DETECTED' : 'None (0)'}`);
    console.log(`  Visible separator bars (===) in body text: ${audit.hasVisibleSeparatorBars ? 'DETECTED' : 'None (0)'}`);
    console.log(`  Lead paragraph: "${audit.leadText}..."`);
    console.log(`  Status: ${pass ? 'PASS' : 'FAIL'}`);

    results.push({ config: cfg.name, pass, audit });

    // Capture screenshots of Top Header (Title + Lead + Objective 2.1 boundary)
    await cdp.eval(`window.scrollTo(0, 0);`);
    await new Promise(r => setTimeout(r, 200));

    const shot1 = await cdp.send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: 0,
        width: cfg.width,
        height: Math.min(cfg.height, 900),
        scale: 1
      }
    });

    const headerShotFile = `header-hero-${cfg.name}.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, headerShotFile), Buffer.from(shot1.data, 'base64'));
    manifest.push({ config: cfg.name, section: 'header-hero', file: headerShotFile });

    // Capture screenshot of Objective 2.2 Boundary area
    await cdp.eval(`(() => {
      const el = document.getElementById('obj-2-2');
      if (el) el.scrollIntoView({ block: 'start' });
    })()`);
    await new Promise(r => setTimeout(r, 200));

    const shot2 = await cdp.send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: 0,
        width: cfg.width,
        height: Math.min(cfg.height, 700),
        scale: 1
      }
    });

    const obj22ShotFile = `objective-2-2-boundary-${cfg.name}.png`;
    fs.writeFileSync(path.join(ARTIFACTS_DIR, obj22ShotFile), Buffer.from(shot2.data, 'base64'));
    manifest.push({ config: cfg.name, section: 'objective-2-2-boundary', file: obj22ShotFile });
  }

  fs.writeFileSync(
    path.join(ARTIFACTS_DIR, 'manifest.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), manifest, results }, null, 2),
    'utf8'
  );
  console.log(`\n[4] Manifest written to ${path.join(ARTIFACTS_DIR, 'manifest.json')}`);

  cdp.close();
  chromeProcess.kill();
  server.close();

  const allPassed = results.every(r => r.pass);
  console.log(`\n=== Verification Finished: ${allPassed ? 'ALL CONFIGURATIONS PASSED' : 'FAILURES DETECTED'} ===`);
  if (!allPassed) process.exit(1);
}

verifyBrowser().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});

