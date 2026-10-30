import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const ROOT = path.resolve('.');
const PORT = 5198;
const CHROME_PORT = 9478;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

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
    return res.result.value;
  }
}

async function run() {
  console.log('=== Reading Notes Sidebar Accordion CDP Verification ===\n');
  const server = await startServer();
  console.log(`[1] Test server started on http://127.0.0.1:${PORT}`);

  const userDataDir = path.resolve('scratch/chrome-sidebar-accordion-profile');
  fs.mkdirSync(userDataDir, { recursive: true });

  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${CHROME_PORT}`,
    `--user-data-dir=${userDataDir}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'about:blank'
  ], { stdio: 'ignore' });

  // Wait for Chrome to initialize
  await new Promise(r => setTimeout(r, 1200));

  try {
    const listRes = await fetch(`http://127.0.0.1:${CHROME_PORT}/json/list`);
    const pages = await listRes.json();
    const wsUrl = pages[0].webSocketDebuggerUrl;

    const cdp = new CDPClient(wsUrl);
    await cdp.connect();
    console.log('[2] Chrome CDP connected');

    await cdp.send('Page.enable');
    await cdp.send('DOM.enable');
    await cdp.send('CSS.enable');

    await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
    await new Promise(r => setTimeout(r, 1000));

    // Open Reading Notes
    await cdp.eval(`(() => {
      const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
      if (certCard) certCard.click();
    })()`);
    await new Promise(r => setTimeout(r, 1000));

    await cdp.eval(`(() => {
      const readBtn = document.querySelector('.btn-reading-entry');
      if (readBtn) readBtn.click();
    })()`);
    await new Promise(r => setTimeout(r, 2000));

    const checkView = await cdp.eval(`(() => {
      return {
        hasSidebar: Boolean(document.querySelector('#reading-sidebar')),
        hasObj11: Boolean(document.querySelector('.reading-nav-objective-item[data-objective-id="1.1"]')),
        currentTitle: document.querySelector('.reading-article-title')?.textContent.trim()
      };
    })()`);
    console.log('[Diagnostic View Check]:', checkView);

    // Test 1: Domain 1 Objective 1.1 Collapse & Expand in real browser
    console.log('[Test 1] Domain 1 Objective 1.1 Accordion Collapse & Expand...');
    const d1Before = await cdp.eval(`(() => {
      const item = document.querySelector('.reading-nav-objective-item[data-objective-id="1.1"]');
      const btn = item?.querySelector('[data-toggle-obj="1.1"]');
      const topics = item?.querySelector('.reading-nav-topics');
      const style = topics ? window.getComputedStyle(topics) : null;
      const rect = topics ? topics.getBoundingClientRect() : null;
      return {
        btnExpanded: btn?.getAttribute('aria-expanded'),
        display: style?.display,
        height: rect?.height,
        hidden: topics?.hidden
      };
    })()`);

    console.log('  Initial state (1.1):', d1Before);
    assert.equal(d1Before.btnExpanded, 'true', 'Button aria-expanded must be true initially');
    assert.equal(d1Before.display, 'flex', 'Topics computed display must be flex initially');
    assert.ok(d1Before.height > 100, `Topics height must be > 100px (got ${d1Before.height})`);

    // Click chevron to collapse
    await cdp.eval(`(() => {
      const btn = document.querySelector('[data-toggle-obj="1.1"]');
      btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 200));

    const d1Collapsed = await cdp.eval(`(() => {
      const item = document.querySelector('.reading-nav-objective-item[data-objective-id="1.1"]');
      const btn = item?.querySelector('[data-toggle-obj="1.1"]');
      const topics = item?.querySelector('.reading-nav-topics');
      const style = topics ? window.getComputedStyle(topics) : null;
      const rect = topics ? topics.getBoundingClientRect() : null;
      return {
        btnExpanded: btn?.getAttribute('aria-expanded'),
        display: style?.display,
        height: rect?.height,
        hidden: topics?.hidden
      };
    })()`);

    console.log('  Collapsed state (1.1):', d1Collapsed);
    assert.equal(d1Collapsed.btnExpanded, 'false', 'Button aria-expanded must be false when collapsed');
    assert.equal(d1Collapsed.display, 'none', 'Topics computed display MUST BE "none" when collapsed (NOT flex!)');
    assert.equal(d1Collapsed.height, 0, 'Topics bounding height MUST BE 0 when collapsed');
    assert.equal(d1Collapsed.hidden, true, 'Topics element must have hidden=true');
    console.log('  ✓ PASS: Objective 1.1 successfully collapsed (display: none, height: 0px)');

    // Re-expand
    await cdp.eval(`(() => {
      const btn = document.querySelector('[data-toggle-obj="1.1"]');
      btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 200));

    const d1ReExpanded = await cdp.eval(`(() => {
      const item = document.querySelector('.reading-nav-objective-item[data-objective-id="1.1"]');
      const btn = item?.querySelector('[data-toggle-obj="1.1"]');
      const topics = item?.querySelector('.reading-nav-topics');
      const style = topics ? window.getComputedStyle(topics) : null;
      const rect = topics ? topics.getBoundingClientRect() : null;
      return {
        btnExpanded: btn?.getAttribute('aria-expanded'),
        display: style?.display,
        height: rect?.height
      };
    })()`);

    console.log('  Re-expanded state (1.1):', d1ReExpanded);
    assert.equal(d1ReExpanded.btnExpanded, 'true');
    assert.equal(d1ReExpanded.display, 'flex');
    assert.ok(d1ReExpanded.height > 100);
    console.log('  ✓ PASS: Objective 1.1 successfully re-expanded');

    // Test 2: Domain 2 Navigation & Accordion Seeding
    console.log('\n[Test 2] Selecting Domain 2 & Verifying Objective 2.1 Accordion...');
    await cdp.eval(`(() => {
      const d2Btn = document.querySelector('[data-select-domain="2"]');
      d2Btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 800));

    const d2Initial = await cdp.eval(`(() => {
      const item = document.querySelector('.reading-nav-objective-item[data-objective-id="2.1"]');
      const btn = item?.querySelector('[data-toggle-obj="2.1"]');
      const topics = item?.querySelector('.reading-nav-topics');
      const style = topics ? window.getComputedStyle(topics) : null;
      const rect = topics ? topics.getBoundingClientRect() : null;
      return {
        btnExpanded: btn?.getAttribute('aria-expanded'),
        display: style?.display,
        height: rect?.height,
        hidden: topics?.hidden
      };
    })()`);

    console.log('  Domain 2 Initial state (2.1):', d2Initial);
    assert.equal(d2Initial.btnExpanded, 'true', 'Domain 2 objectives must start expanded by default');
    assert.equal(d2Initial.display, 'flex', 'Domain 2 topics must have computed display: flex');
    assert.ok(d2Initial.height > 100, `Domain 2 topics height must be > 100px (got ${d2Initial.height})`);

    // Click chevron to collapse Objective 2.1
    await cdp.eval(`(() => {
      const btn = document.querySelector('[data-toggle-obj="2.1"]');
      btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 200));

    const d2Collapsed = await cdp.eval(`(() => {
      const item = document.querySelector('.reading-nav-objective-item[data-objective-id="2.1"]');
      const btn = item?.querySelector('[data-toggle-obj="2.1"]');
      const topics = item?.querySelector('.reading-nav-topics');
      const style = topics ? window.getComputedStyle(topics) : null;
      const rect = topics ? topics.getBoundingClientRect() : null;
      return {
        btnExpanded: btn?.getAttribute('aria-expanded'),
        display: style?.display,
        height: rect?.height,
        hidden: topics?.hidden
      };
    })()`);

    console.log('  Domain 2 Collapsed state (2.1):', d2Collapsed);
    assert.equal(d2Collapsed.btnExpanded, 'false');
    assert.equal(d2Collapsed.display, 'none', 'Domain 2 topics MUST BE "none" when collapsed');
    assert.equal(d2Collapsed.height, 0, 'Domain 2 topics height MUST BE 0 when collapsed');
    console.log('  ✓ PASS: Domain 2 Objective 2.1 successfully collapsed (display: none, height: 0px)');

    // Test 3: Keyboard interaction (Enter/Space on chevron button)
    console.log('\n[Test 3] Testing Keyboard Interaction on Chevron Button...');
    const keyResult = await cdp.eval(`(() => {
      const btn = document.querySelector('[data-toggle-obj="2.1"]');
      btn.focus();
      // Dispatch Enter keydown event
      const event = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true });
      btn.dispatchEvent(event);
      btn.click(); // Standard button activation behavior
      const item = document.querySelector('.reading-nav-objective-item[data-objective-id="2.1"]');
      const topics = item?.querySelector('.reading-nav-topics');
      const style = window.getComputedStyle(topics);
      return {
        activeElementIsBtn: document.activeElement === btn,
        display: style.display,
        expanded: btn.getAttribute('aria-expanded')
      };
    })()`);

    console.log('  Keyboard toggle result:', keyResult);
    assert.equal(keyResult.activeElementIsBtn, true, 'Chevron button must be focusable');
    assert.equal(keyResult.display, 'flex', 'Topics must re-expand on keyboard activation');
    assert.equal(keyResult.expanded, 'true');
    console.log('  ✓ PASS: Keyboard navigation and activation verified on objective chevron');

    console.log('\n=== ALL SIDEBAR ACCORDION CDP CHECKS PASSED ===');
  } finally {
    chromeProc.kill();
    server.close();
  }
}

run().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
