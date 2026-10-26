import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve('.');
const PORT = 5173;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/v3-browser-review');

// Ensure artifacts directory exists
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
    this.eventHandlers = new Map();
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
        } else if (msg.method) {
          const handlers = this.eventHandlers.get(msg.method) || [];
          handlers.forEach(h => h(msg.params));
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

  on(event, handler) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event).push(handler);
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

async function runQA() {
  console.log('--- ISC2 CC 2026 Presentation Viewer V3: Real Browser QA ---');

  // 1. Start Dev Server
  const server = await startServer();
  console.log(`[1] Dev server started at http://127.0.0.1:${PORT}/`);

  // 2. Launch Chrome
  const userDataDir = path.join(ROOT, '.tmp-chrome-profile');
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9444',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ]);

  // Wait for Chrome debugging port
  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9444/json/version');
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!versionData) {
    throw new Error('Failed to connect to Chrome remote debugging port 9444');
  }

  console.log(`[2] Chrome launched: ${versionData.Browser}`);
  console.log(`    User-Agent: ${versionData['User-Agent']}`);

  // Create new target tab
  const newTabRes = await fetch(`http://127.0.0.1:9444/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const cdp = new CDPClient(tabData.webSocketDebuggerUrl);
  await cdp.connect();

  const consoleLogs = [];
  const networkErrors = [];

  cdp.on('Console.messageAdded', p => consoleLogs.push(p.message));
  cdp.on('Runtime.consoleAPICalled', p => consoleLogs.push({ type: p.type, args: p.args?.map(a => a.value) }));
  cdp.on('Network.loadingFailed', p => networkErrors.push(p));

  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Console.enable');
  await cdp.send('Network.enable');

  // Set default desktop viewport 1440x900
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  console.log('[3] Page opened, waiting for app initialization...');
  await new Promise(r => setTimeout(r, 600));

  // Helper to click selector
  const click = async sel => {
    return cdp.eval(`(() => {
      const el = document.querySelector(${JSON.stringify(sel)});
      if (!el) throw new Error("Element not found: " + ${JSON.stringify(sel)});
      el.click();
      return true;
    })()`);
  };

  // Helper to take screenshot
  const takeScreenshot = async (name) => {
    const res = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const filePath = path.join(ARTIFACTS_DIR, name);
    fs.writeFileSync(filePath, buffer);
    console.log(`    Captured screenshot: ${name} (${buffer.length} bytes)`);
    return filePath;
  };

  // 4. Navigate flow: Landing -> Version Selection -> Learning Slides -> Domain 1 -> Start Learning
  console.log('[4] Navigating learning flow...');
  
  // Click Open Certification on Landing Screen
  await click('.btn-open-cert');
  console.log('    Clicked Open Certification →');
  await new Promise(r => setTimeout(r, 1200));

  const versionScreenState = await cdp.eval(`(() => {
    return {
      screenClass: document.querySelector('.screen')?.className || document.body.className,
      cards: Array.from(document.querySelectorAll('.version-card')).map(c => {
        const btn = c.querySelector('button');
        return {
          title: c.querySelector('h2, h3, .version-title')?.textContent?.trim(),
          btnText: btn?.textContent?.trim(),
          btnDisabled: btn?.disabled,
          action: btn?.getAttribute('data-action'),
          version: btn?.getAttribute('data-version')
        };
      }),
      allButtons: Array.from(document.querySelectorAll('button')).map(b => ({
        text: b.textContent.trim(),
        action: b.getAttribute('data-action'),
        version: b.getAttribute('data-version'),
        disabled: b.disabled
      }))
    };
  })()`);
  console.log('[Version Screen State]:', JSON.stringify(versionScreenState, null, 2));

  // Click Learning Slides version
  await click('button.btn-learning-entry');
  console.log('    Opened Learning Center');
  await new Promise(r => setTimeout(r, 600));

  // In Learning Center, click Domain 1 card
  await click('#learning-domain-1');
  console.log('    Opened Domain 1 Overview');
  await new Promise(r => setTimeout(r, 600));

  // In Domain Overview, click Start Learning
  await click('#btn-start-learning');
  console.log('    Clicked Start Learning →');
  await new Promise(r => setTimeout(r, 800));

  console.log('[5] Presentation Viewer mounted!');

  // Measure initial geometry in 1440x900
  const getGeometry = async () => {
    return cdp.eval(`(() => {
      const viewer = document.querySelector('.learning-viewer');
      const toolbar = document.querySelector('.viewer-toolbar');
      const leftZone = document.querySelector('.viewer-zone-left');
      const centerZone = document.querySelector('.viewer-zone-center');
      const rightZone = document.querySelector('.viewer-zone-right');
      const workspace = document.querySelector('.presentation-workspace');
      const slot = document.querySelector('.presentation-stage-slot');
      const slide = document.querySelector('.learning-slide');
      
      const rect = el => {
        if (!el) return null;
        const b = el.getBoundingClientRect();
        return { left: Math.round(b.left*10)/10, top: Math.round(b.top*10)/10, width: Math.round(b.width*10)/10, height: Math.round(b.height*10)/10, right: Math.round(b.right*10)/10, bottom: Math.round(b.bottom*10)/10 };
      };

      const tb = rect(toolbar);
      const sl = rect(slide);
      const ws = rect(workspace);
      const vr = rect(viewer);

      // Check intersection
      const intersects = (r1, r2) => {
        if (!r1 || !r2) return false;
        return !(r2.left >= r1.right || r2.right <= r1.left || r2.top >= r1.bottom || r2.bottom <= r1.top);
      };

      return {
        viewport: { width: window.innerWidth, height: window.innerHeight, dpr: window.devicePixelRatio },
        toolbar: tb,
        leftZone: rect(leftZone),
        centerZone: rect(centerZone),
        rightZone: rect(rightZone),
        backBtn: rect(document.querySelector('.viewer-back-btn')),
        langButtons: Array.from(document.querySelectorAll('.lang-btn')).map(b => ({ text: b.textContent.trim(), lang: b.getAttribute('data-lang'), active: b.classList.contains('active') })),
        workspace: ws,
        slot: rect(slot),
        slide: sl,
        slideRatio: sl ? Math.round((sl.width / sl.height) * 100) / 100 : null,
        toolbarSlideOverlap: intersects(tb, sl),
        centerAlignedRelative: tb && centerZone ? Math.round((rect(centerZone).left + rect(centerZone).width/2) - (vr.left + vr.width/2)) : null,
        counterText: document.querySelector('.learning-counter')?.textContent?.trim(),
        titleText: document.querySelector('.viewer-lesson-heading')?.textContent?.trim(),
        kickerText: document.querySelector('.viewer-lesson-kicker')?.textContent?.trim(),
        hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth || document.body.scrollWidth > window.innerWidth
      };
    })()`);
  };

  const geo1440 = await getGeometry();
  console.log('[Geometry 1440x900]:', JSON.stringify(geo1440, null, 2));

  // Set Language to TH
  console.log('[6] Testing language switching & capturing slides...');
  await cdp.eval(`(() => {
    const thBtn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.textContent.trim() === 'TH');
    if (thBtn) thBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('desktop-viewer-th.png');

  // Set Language to EN
  await cdp.eval(`(() => {
    const enBtn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.textContent.trim() === 'EN');
    if (enBtn) enBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('desktop-viewer-en.png');

  // Check Slide 2
  await click('[data-action="next"]');
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('slide-02-pillars.png');

  // Navigate to Slide 6
  await click('[data-action="next"]'); // slide 3
  await new Promise(r => setTimeout(r, 200));
  await click('[data-action="next"]'); // slide 4
  await new Promise(r => setTimeout(r, 200));
  await click('[data-action="next"]'); // slide 5
  await new Promise(r => setTimeout(r, 200));
  await click('[data-action="next"]'); // slide 6
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('slide-06-incident-flow.png');

  // Slide 7 (Scenario decision)
  await click('[data-action="next"]'); // slide 7
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('slide-07-scenario.png');

  // Test Slides Overview Dialog
  console.log('[7] Testing Slides overview dialog...');
  await click('[data-action="slides"]');
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('slides-overview.png');
  // Jump to slide 1 from dialog
  await cdp.eval(`(() => {
    const firstSlide = document.querySelector('.viewer-slides-dialog [data-slide-id="slide-01-cia-intro"]');
    if (firstSlide) firstSlide.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));

  // Test Keyboard Help Dialog
  console.log('[8] Testing Keyboard help popup...');
  await click('[data-action="help"]');
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('keyboard-help-dialog.png');
  // Dismiss with Escape
  await cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape' });
  await cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape' });
  await new Promise(r => setTimeout(r, 400));

  // Test Light Theme
  console.log('[9] Testing Light Theme toggle...');
  await click('#viewer-theme-toggle');
  await new Promise(r => setTimeout(r, 400));
  await takeScreenshot('desktop-light-theme.png');
  // Toggle back to dark
  await click('#viewer-theme-toggle');
  await new Promise(r => setTimeout(r, 300));

  // Test Viewports Matrix
  console.log('[10] Testing Viewports Matrix...');
  const viewports = [
    { name: 'large-desktop-1920x1080', w: 1920, h: 1080, dpr: 1, mobile: false },
    { name: 'laptop-1366x768', w: 1366, h: 768, dpr: 1, mobile: false },
    { name: 'tablet-768x1024', w: 768, h: 1024, dpr: 1, mobile: false },
    { name: 'mobile-390x844', w: 390, h: 844, dpr: 3, mobile: true },
    { name: 'small-mobile-375x667', w: 375, h: 667, dpr: 2, mobile: true },
    { name: 'desktop-zoom-200', w: 1440, h: 900, dpr: 2, mobile: false }
  ];

  const viewportResults = {};

  for (const vp of viewports) {
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: vp.w,
      height: vp.h,
      deviceScaleFactor: vp.dpr,
      mobile: vp.mobile
    });
    // Trigger resize in window
    await cdp.eval(`window.dispatchEvent(new Event('resize'))`);
    await new Promise(r => setTimeout(r, 500));
    const geo = await getGeometry();
    viewportResults[vp.name] = geo;
    await takeScreenshot(`${vp.name}.png`);
  }

  // Inspect all 8 slides for overflow/content issues
  console.log('[11] Inspecting all 8 slides from 1 to 8 in EN and TH...');
  // Reset to 1440x900
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await cdp.eval(`window.dispatchEvent(new Event('resize'))`);
  await new Promise(r => setTimeout(r, 400));

  // Open slides overview and jump to slide 1
  await click('[data-action="slides"]');
  await new Promise(r => setTimeout(r, 400));
  await cdp.eval(`(() => {
    const s1 = document.querySelector('.viewer-slides-dialog [data-slide-id="slide-01-orientation"]');
    if (s1) {
      s1.click();
    } else {
      const closeBtn = document.querySelector('.viewer-slides-dialog header button');
      if (closeBtn) closeBtn.click();
    }
  })()`);
  await new Promise(r => setTimeout(r, 500));

  // Double check we are at slide 1, if not rewind with previous
  await cdp.eval(`(() => {
    let prev = document.querySelector('[data-action="previous"]');
    while (prev && !prev.disabled) {
      prev.click();
      prev = document.querySelector('[data-action="previous"]');
    }
  })()`);
  await new Promise(r => setTimeout(r, 400));

  const slidesInspection = [];
  for (let s = 1; s <= 8; s++) {
    // Check in EN
    await cdp.eval(`(() => {
      const btn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.textContent.trim() === 'EN');
      if (btn) btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 200));

    const infoEN = await cdp.eval(`(() => {
      const slide = document.querySelector('.learning-slide');
      const title = document.querySelector('.learning-slide-title')?.textContent?.trim();
      const hasVerticalScroll = slide ? slide.scrollHeight > slide.clientHeight : false;
      const paragraphs = Array.from(document.querySelectorAll('.learning-slide p')).map(p => p.textContent.trim());
      const lists = Array.from(document.querySelectorAll('.learning-slide li')).map(l => l.textContent.trim());
      const hasDiagram = !!document.querySelector('.learning-diagram');
      const hasStructuredCards = !!document.querySelector('.pillars-grid, .incident-stages-row, .scenario-options-grid');
      return {
        slideNumber: ${s},
        counter: document.querySelector('.learning-counter')?.textContent?.trim(),
        title,
        scrollHeight: slide?.scrollHeight,
        clientHeight: slide?.clientHeight,
        hasVerticalScroll,
        paragraphsCount: paragraphs.length,
        bulletsCount: lists.length,
        hasDiagram,
        hasStructuredCards,
        visualType: hasStructuredCards ? 'Structured Cards' : hasDiagram ? 'Diagram' : 'Textbook/Bullets'
      };
    })()`);

    // Check in TH
    await cdp.eval(`(() => {
      const btn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.textContent.trim() === 'TH');
      if (btn) btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 200));

    const infoTH = await cdp.eval(`(() => {
      const slide = document.querySelector('.learning-slide');
      const title = document.querySelector('.learning-slide-title')?.textContent?.trim();
      const hasVerticalScroll = slide ? slide.scrollHeight > slide.clientHeight : false;
      return {
        titleTH: title,
        scrollHeightTH: slide?.scrollHeight,
        clientHeightTH: slide?.clientHeight,
        hasVerticalScrollTH: hasVerticalScroll
      };
    })()`);

    if (s === 1 || s === 2 || s === 6) {
      await takeScreenshot(`slide-0${s}-th.png`);
    }

    // Switch back to EN for EN screenshot
    await cdp.eval(`(() => {
      const btn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.textContent.trim() === 'EN');
      if (btn) btn.click();
    })()`);
    await new Promise(r => setTimeout(r, 200));
    const ssName = `slide-0${s}.png`;
    await takeScreenshot(ssName);

    slidesInspection.push({
      ...infoEN,
      ...infoTH,
      screenshot: ssName
    });

    if (s < 8) {
      await click('[data-action="next"]');
      await new Promise(r => setTimeout(r, 300));
    }
  }

  // Check last slide complete button & next disabled
  const lastSlideCheck = await cdp.eval(`(() => {
    const nextBtn = document.querySelector('[data-action="next"]');
    const prevBtn = document.querySelector('[data-action="previous"]');
    const completeBtn = document.querySelector('[data-action="complete"]');
    return {
      nextDisabled: nextBtn?.disabled,
      prevDisabled: prevBtn?.disabled,
      hasCompleteBtn: !!completeBtn,
      completeDisabled: completeBtn?.disabled
    };
  })()`);

  // Final summary object
  const report = {
    browser: versionData.Browser,
    userAgent: versionData['User-Agent'],
    baseline1440: geo1440,
    viewports: viewportResults,
    slides: slidesInspection,
    lastSlideCheck,
    consoleLogs,
    networkErrors
  };

  const reportPath = path.join(ARTIFACTS_DIR, 'browser-qa-results.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`[12] Full report written to: ${reportPath}`);

  // Cleanup
  cdp.close();
  chromeProcess.kill();
  server.close();
  console.log('--- Browser QA Complete ---');
}

runQA().catch(err => {
  console.error('Browser QA Error:', err);
  process.exit(1);
});
