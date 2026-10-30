import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';

const root = process.cwd();
const outDir = path.join(root, 'artifacts/qa/domain-3-lesson-1-acceptance');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2'
};

const PORT = 4218;
const CDP_PORT = 9248;

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
    let pathname = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const p = path.resolve(root, '.' + pathname);
    if (!p.startsWith(root + path.sep) || p.includes(path.sep + '.git' + path.sep) || !fs.statSync(p).isFile()) {
      throw Error('Invalid path: ' + p);
    }
    res.writeHead(200, {
      'Content-Type': (mime[path.extname(p)] || 'application/octet-stream') + '; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    fs.createReadStream(p).pipe(res);
  } catch (err) {
    res.writeHead(404);
    res.end('Not found');
  }
});

await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(PORT, '127.0.0.1', resolve);
});
console.log(`[1] Local test server running on http://127.0.0.1:${PORT}/`);

const chromeProfile = path.join(outDir, 'chrome-profile');
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  `--remote-debugging-address=127.0.0.1`,
  `--remote-debugging-port=${CDP_PORT}`,
  `--user-data-dir=${chromeProfile}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-background-networking',
  'about:blank'
], { stdio: 'ignore', windowsHide: true });

let targets;
for (let i = 0; i < 50; i++) {
  try {
    targets = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`)).json();
    break;
  } catch {
    await new Promise(r => setTimeout(r, 150));
  }
}
if (!targets) throw Error('Chrome CDP endpoint unavailable');

const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});

let seq = 0;
const pending = new Map();
const exceptions = [];

ws.onmessage = ({ data }) => {
  const m = JSON.parse(data);
  if (m.id) {
    const p = pending.get(m.id);
    if (p) {
      pending.delete(m.id);
      m.error ? p.reject(Error(m.error.message)) : p.resolve(m.result);
    }
  } else if (m.method === 'Runtime.exceptionThrown') {
    exceptions.push(m.params);
  }
};

const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++seq;
  const timeout = setTimeout(() => {
    pending.delete(id);
    reject(Error('CDP timeout: ' + method));
  }, 15000);
  pending.set(id, {
    resolve: v => { clearTimeout(timeout); resolve(v); },
    reject: e => { clearTimeout(timeout); reject(e); }
  });
  ws.send(JSON.stringify({ id, method, params }));
});

const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
  return r.result?.value;
};

const screenshot = async (filename, full = false) => {
  let clip;
  if (full) {
    const m = await send('Page.getLayoutMetrics');
    clip = { x: 0, y: 0, width: m.cssContentSize.width, height: m.cssContentSize.height, scale: 1 };
  }
  const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: full, ...(clip ? { clip } : {}) });
  fs.writeFileSync(path.join(outDir, filename), Buffer.from(r.data, 'base64'));
  return filename;
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

const click = async (selector) => {
  const ok = await evaluate(`(()=>{
    const el = document.querySelector(${JSON.stringify(selector)});
    if (!el) return false;
    el.focus();
    el.click();
    return true;
  })()`);
  if (!ok) throw Error('Element not found to click: ' + selector);
  await sleep(250);
};

const press = async (key, code, vk) => {
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code, windowsVirtualKeyCode: vk });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: vk });
  await sleep(150);
};

console.log('[2] Initializing CDP Page...');
await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
await sleep(1200);

const auditReportData = {
  timestamp: new Date().toISOString(),
  viewports: [],
  slides: [],
  scenarios: [],
  keyboardAndA11y: {},
  persistence: {},
  summary: { pass: 0, fail: 0, findings: [] }
};

try {
  // Navigation: Home -> Certification -> Learning -> Domain 3 -> Obj 3.1 -> Start Learning
  console.log('[3] Navigating to Domain 3 Learning Slides...');
  await evaluate(`[...document.querySelectorAll('button')].find(b => b.innerText.includes('Open Certification'))?.click()`);
  await sleep(300);
  await evaluate(`[...document.querySelectorAll('button')].find(b => b.innerText.includes('Learning →'))?.click()`);
  await sleep(500);

  // Click Domain 3 card
  await click('#learning-domain-3');
  await sleep(400);

  // Check objective 3.1
  const objStatus = await evaluate(`({
    obj31Checked: document.querySelector('#learning-objective-3-1')?.getAttribute('aria-checked'),
    obj32Disabled: document.querySelector('#learning-objective-3-2')?.getAttribute('aria-disabled'),
    startLessonId: document.querySelector('#btn-start-learning')?.getAttribute('data-lesson-id')
  })`);
  console.log('Objective selection status:', objStatus);

  await click('#btn-start-learning');
  await sleep(600);

  // Verify we are on learning viewer
  const viewerInfo = await evaluate(`({
    onViewer: !!document.querySelector('.learning-viewer'),
    lessonId: document.querySelector('.learning-viewer')?.getAttribute('data-lesson-id'),
    view: document.querySelector('[data-view]')?.getAttribute('data-view')
  })`);
  console.log('Viewer loaded:', viewerInfo);

  // Viewport matrix to test
  const testViewports = [
    { width: 1920, height: 1080, name: '1080p Desktop', mobile: false },
    { width: 1366, height: 768, name: 'Standard HD Laptop', mobile: false },
    { width: 1024, height: 768, name: 'iPad Landscape', mobile: false },
    { width: 768, height: 1024, name: 'iPad Portrait', mobile: true },
    { width: 390, height: 844, name: 'iPhone 14/15', mobile: true },
    { width: 375, height: 812, name: 'iPhone X/12m', mobile: true },
    { width: 320, height: 568, name: 'iPhone SE 1st', mobile: true }
  ];

  console.log('\n[4] Running Multi-Viewport and Theme Verification...');

  for (const vp of testViewports) {
    console.log(`\n--- Testing ${vp.width}x${vp.height} (${vp.name}) ---`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.mobile
    });
    await sleep(200);

    for (const theme of ['dark', 'light']) {
      await evaluate(`document.documentElement.setAttribute('data-theme', '${theme}')`);
      await sleep(150);

      for (const lang of ['en', 'th']) {
        await click(`#learning-language-${lang}`);
        await sleep(150);

        // Check slide 1 presentation
        // Ensure on slide 1
        await evaluate(`(()=>{
          const prev = document.querySelector('[data-action="previous"]');
          while (prev && !prev.disabled) prev.click();
        })()`);
        await sleep(250);

        const currentSlideId = await evaluate(`document.querySelector('.learning-slide')?.getAttribute('data-slide-id')`);
        const overflowCheck = await evaluate(`({
          docScrollW: document.documentElement.scrollWidth,
          innerW: window.innerWidth,
          overflow: document.documentElement.scrollWidth > window.innerWidth + 1
        })`);

        const vpMetric = {
          viewport: `${vp.width}x${vp.height}`,
          name: vp.name,
          theme,
          lang,
          slideId: currentSlideId,
          horizontalOverflow: overflowCheck.overflow,
          scrollWidth: overflowCheck.docScrollW,
          innerWidth: overflowCheck.innerW
        };

        if (overflowCheck.overflow) {
          auditReportData.summary.fail++;
          auditReportData.summary.findings.push(`Horizontal overflow on ${vp.width}x${vp.height} (${theme}, ${lang})`);
        } else {
          auditReportData.summary.pass++;
        }

        // Capture screenshot for key viewports
        if ((vp.width === 1920 || vp.width === 1366 || vp.width === 390 || vp.width === 320) && theme === 'dark' && lang === 'en') {
          const shotName = `viewport-${vp.width}-${theme}-${lang}-S1.png`;
          await screenshot(shotName);
          vpMetric.screenshot = shotName;
        }

        auditReportData.viewports.push(vpMetric);
      }
    }
  }

  // Restore 1366x768 for detailed slide-by-slide audit
  console.log('\n[5] Running In-Depth 7-Slide Audit (Presentation, Reading, Info, Dark & Light)...');
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });

  for (let sIdx = 0; sIdx < 7; sIdx++) {
    // Navigate to slide
    await evaluate(`(()=>{
      const prev = document.querySelector('[data-action="previous"]');
      while (prev && !prev.disabled) prev.click();
      const next = document.querySelector('[data-action="next"]');
      for (let i = 0; i < ${sIdx}; i++) next.click();
    })()`);
    await sleep(250);

    const slideData = await evaluate(`(()=>{
      const slide = document.querySelector('.learning-slide');
      const composition = document.querySelector('[data-iam-provisioning-composition]');
      const title = document.querySelector('.d3p-title')?.innerText || document.querySelector('.learning-slide-title')?.innerText;
      const lead = document.querySelector('.d3p-lead')?.innerText;
      const foot = document.querySelector('.d3p-foot')?.innerText;
      const copies = [...document.querySelectorAll('.d3p-copy, .d3p-option-copy')].map(c => ({
        text: c.innerText.substring(0, 40),
        fontSize: getComputedStyle(c).fontSize,
        lineHeight: getComputedStyle(c).lineHeight
      }));
      return {
        id: slide?.getAttribute('data-slide-id'),
        composition: composition?.getAttribute('data-iam-provisioning-composition'),
        title,
        lead,
        foot,
        copiesCount: copies.length,
        minFont: copies.length ? Math.min(...copies.map(c => parseFloat(c.fontSize))) : null
      };
    })()`);

    console.log(`Slide ${sIdx + 1}: ${slideData.id} (${slideData.composition})`);

    // Capture Presentation Dark & Light
    await evaluate(`document.documentElement.setAttribute('data-theme', 'dark')`);
    await click('#learning-language-en');
    const sPresDark = `slide-${sIdx + 1}-pres-1366-dark-en.png`;
    await screenshot(sPresDark);

    await evaluate(`document.documentElement.setAttribute('data-theme', 'light')`);
    const sPresLight = `slide-${sIdx + 1}-pres-1366-light-en.png`;
    await screenshot(sPresLight);

    // Test Reading Mode
    await click('[data-action="reading"]');
    await sleep(200);
    const readingData = await evaluate(`({
      view: document.querySelector('[data-view]')?.getAttribute('data-view'),
      hasMarkdownArticle: !!document.querySelector('.learning-reading-content, .reading-article, .learning-slide'),
      readingTextSample: document.querySelector('.learning-slide')?.innerText.substring(0, 150)
    })`);
    const sReadingShot = `slide-${sIdx + 1}-reading-1366-light-en.png`;
    await screenshot(sReadingShot, true);

    // Switch back to Presentation
    await click('[data-action="reading"]');
    await sleep(200);

    // Test Info Mode
    await click('[data-action="lesson-info"]');
    await sleep(200);
    const infoData = await evaluate(`({
      isOpen: !!document.querySelector('.learning-info-overlay') || !!document.querySelector('.learning-info-panel'),
      title: document.querySelector('.learning-info-header h2')?.innerText
    })`);
    const sInfoShot = `slide-${sIdx + 1}-info-1366-light-en.png`;
    await screenshot(sInfoShot);

    // Close Info modal
    await click('[data-action="close-info"]');
    await sleep(150);

    auditReportData.slides.push({
      index: sIdx + 1,
      ...slideData,
      reading: readingData,
      info: infoData,
      screenshots: {
        presDark: sPresDark,
        presLight: sPresLight,
        reading: sReadingShot,
        info: sInfoShot
      }
    });
  }

  // Slide 7 Interactive Scenario Deep Audit
  console.log('\n[6] Auditing Slide 7 Interactive Decision Scenario (Choices A, B, C, D & Reset)...');
  await evaluate(`(()=>{
    const next = document.querySelector('[data-action="next"]');
    while (next && !next.disabled) next.click();
  })()`);
  await sleep(250);

  const scenarioResults = [];
  for (let c = 0; c < 4; c++) {
    await evaluate(`document.querySelector('[data-iam-choice="${c}"]').click()`);
    await sleep(150);
    const feedbackState = await evaluate(`({
      choice: ${c},
      pressed: document.querySelector('[data-iam-choice="${c}"]').getAttribute('aria-pressed'),
      outcome: document.querySelector('[data-iam-feedback]').getAttribute('data-outcome'),
      title: document.querySelector('[data-iam-feedback] .d3p-term')?.innerText,
      copy: document.querySelector('[data-iam-feedback] .d3p-copy')?.innerText
    })`);
    const shot = `scenario-choice-${c}.png`;
    await screenshot(shot);
    feedbackState.screenshot = shot;
    scenarioResults.push(feedbackState);
    console.log(`Choice ${String.fromCharCode(65 + c)} outcome:`, feedbackState.outcome, `| title: ${feedbackState.title}`);
  }

  // Reset button test
  await click('[data-iam-reset]');
  await sleep(150);
  const resetState = await evaluate(`({
    outcome: document.querySelector('[data-iam-feedback]').getAttribute('data-outcome'),
    title: document.querySelector('[data-iam-feedback] .d3p-term')?.innerText
  })`);
  console.log('Reset outcome:', resetState.outcome, `(expected: idle)`);
  auditReportData.scenarios = { choices: scenarioResults, reset: resetState };

  // Keyboard, Accessibility & Fullscreen Audit
  console.log('\n[7] Auditing Keyboard Controls, Escape, Fullscreen & A11y Focus...');
  await evaluate(`document.querySelector('.presentation-workspace').focus()`);
  await press('ArrowLeft', 'ArrowLeft', 37);
  const leftSlide = await evaluate(`document.querySelector('.learning-slide')?.getAttribute('data-slide-id')`);
  await press('ArrowRight', 'ArrowRight', 39);
  const rightSlide = await evaluate(`document.querySelector('.learning-slide')?.getAttribute('data-slide-id')`);

  // Info modal Escape key test
  await click('[data-action="lesson-info"]');
  await sleep(150);
  await press('Escape', 'Escape', 27);
  await sleep(150);
  const escapeHandled = await evaluate(`({
    overlayClosed: !document.querySelector('.learning-info-overlay'),
    focusRestored: document.activeElement?.getAttribute('data-action') === 'lesson-info'
  })`);

  // Touch targets check on mobile (390px)
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await sleep(200);
  const mobileTouchTargets = await evaluate(`(()=>{
    const btns = Array.from(document.querySelectorAll('.viewer-toolbar button, .viewer-navigation button, .d3p-option, .d3p-reset'));
    return btns.map(b => {
      const rect = b.getBoundingClientRect();
      return {
        text: b.innerText.substring(0, 20),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        touchOk: rect.width >= 36 && rect.height >= 36
      };
    });
  })()`);
  const smallTargets = mobileTouchTargets.filter(t => !t.touchOk);
  console.log(`Mobile touch targets checked: ${mobileTouchTargets.length} total, ${smallTargets.length} < 36px`);

  auditReportData.keyboardAndA11y = {
    arrowLeftTo: leftSlide,
    arrowRightTo: rightSlide,
    infoEscapeClosed: escapeHandled.overlayClosed,
    infoFocusRestored: escapeHandled.focusRestored,
    mobileTargetsChecked: mobileTouchTargets.length,
    smallTargetsCount: smallTargets.length
  };

  // Direct Resume & Progress Persistence Audit
  console.log('\n[8] Auditing LocalStorage Progress & Direct Resume...');
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  // Navigate to slide 5
  await evaluate(`(()=>{
    const prev = document.querySelector('[data-action="previous"]');
    while (prev && !prev.disabled) prev.click();
    const next = document.querySelector('[data-action="next"]');
    for (let i = 0; i < 4; i++) next.click();
  })()`);
  await sleep(250);

  const slide5Id = await evaluate(`document.querySelector('.learning-slide')?.getAttribute('data-slide-id')`);
  const progressBefore = await evaluate(`JSON.parse(localStorage.getItem('sec_cert_learning_progress_v1'))`);

  // Reload page
  await send('Page.reload', { ignoreCache: true });
  await sleep(600);

  // Re-navigate to Learning
  await evaluate(`[...document.querySelectorAll('button')].find(b => b.innerText.includes('Open Certification'))?.click()`);
  await sleep(250);
  await evaluate(`[...document.querySelectorAll('button')].find(b => b.innerText.includes('Learning →'))?.click()`);
  await sleep(500);

  const continueBtnText = await evaluate(`document.querySelector('[data-action="continue-learning"]')?.innerText`);
  await click('[data-action="continue-learning"]');
  await sleep(500);

  const resumedSlideId = await evaluate(`document.querySelector('.learning-slide')?.getAttribute('data-slide-id')`);
  console.log(`Direct resume result: Before reload = ${slide5Id}, Resumed = ${resumedSlideId}`);

  auditReportData.persistence = {
    slideBeforeReload: slide5Id,
    resumedSlide: resumedSlideId,
    match: slide5Id === resumedSlideId,
    continueBtnLabel: continueBtnText
  };

  fs.writeFileSync(path.join(outDir, 'acceptance-audit-metrics.json'), JSON.stringify(auditReportData, null, 2));
  console.log('\n[9] Comprehensive Audit Completed! Metrics saved to acceptance-audit-metrics.json');

} finally {
  try { await send('Browser.close'); } catch {}
  ws.close();
  server.close();
  if (!chrome.killed) chrome.kill();
}

