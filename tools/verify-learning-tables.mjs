/**
 * Verification Suite: Learning Slides Table Typography, Spacing, and Rendering.
 * Validates table styling across Domains 1–5, presentation mode, reading mode,
 * dark and light Info modal themes, and mobile viewport responsiveness.
 */

import fs from 'node:fs';

async function main() {
  const cdpPort = process.env.CDP_PORT || 9245;
  const targets = await (await fetch(`http://127.0.0.1:${cdpPort}/json/list`)).json();
  const page = targets.find(t => t.type === 'page');
  if (!page) throw new Error('No page target found on CDP port ' + cdpPort);

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const msgId = ++id;
    const timeout = setTimeout(() => reject(new Error('Timeout ' + method)), 15000);
    const onMsg = ({ data }) => {
      const m = JSON.parse(data);
      if (m.id === msgId) {
        clearTimeout(timeout);
        ws.removeEventListener('message', onMsg);
        if (m.error) reject(new Error(m.error.message));
        else resolve(m.result);
      }
    };
    ws.addEventListener('message', onMsg);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  const evalExpr = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (res.exceptionDetails) throw new Error(res.exceptionDetails.exception?.description || res.exceptionDetails.text);
    return res.result?.value;
  };

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const screenshot = async (path) => {
    const r = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path, Buffer.from(r.data, 'base64'));
    console.log('  Saved screenshot:', path);
  };

  // Ensure output artifact directory exists
  fs.mkdirSync('artifacts/qa/learning-slides-tables', { recursive: true });

  // Disable cache & reload page
  await send('Network.enable');
  await send('Network.setCacheDisabled', { cacheDisabled: true });
  await send('Page.reload', { ignoreCache: true });
  await sleep(1500);

  // Set standard desktop viewport
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

  const testCases = [
    {
      domain: 1,
      name: 'Domain 1 Lesson 2 Slide 4 (AAA Event Table)',
      objectiveId: '1.2',
      lessonId: 'lesson-d1-02-aaa-mfa',
      slideId: 'slide-04-activity-trail',
      selector: '.learning-slide table.aaa-event-table',
      screenshot: 'artifacts/qa/learning-slides-tables/d1-l2-s4-aaa-table.png'
    },
    {
      domain: 3,
      name: 'Domain 3 Lesson 2 Slide 1 (IAM Review Mover Table)',
      objectiveId: '3.1',
      lessonId: 'lesson-d3-02-review-deprovisioning',
      slideId: 'slide-d3-02-01-mover-before-after',
      selector: '.learning-slide table.d3r-table',
      screenshot: 'artifacts/qa/learning-slides-tables/d3-l2-s1-review.png'
    },
    {
      domain: 4,
      name: 'Domain 4 Lesson 1 Slide 6 (Network TCP/UDP Comparison)',
      objectiveId: '4.1',
      lessonId: 'lesson-d4-01-network-request',
      slideId: 'slide-d4-01-06-tcp-udp',
      selector: '.learning-slide table.d4-table',
      screenshot: 'artifacts/qa/learning-slides-tables/d4-l1-s6-network.png'
    },
    {
      domain: 5,
      name: 'Domain 5 Lesson 1 Slide 1 (Data Classification Labels Table)',
      objectiveId: '5.1',
      lessonId: 'lesson-d5-01-data-handling',
      slideId: 'slide-d5-01-01-classification-labels',
      selector: '.learning-slide table.d5-table',
      screenshot: 'artifacts/qa/learning-slides-tables/d5-l1-s1-datahandling.png'
    }
  ];

  console.log('\n=== 1. VERIFYING PRESENTATION TABLES ACROSS DOMAINS ===');
  const results = [];
  let failures = 0;

  for (const tc of testCases) {
    console.log(`\nTesting ${tc.name}...`);
    // Navigate to lesson and slide
    await evalExpr(`(async () => {
      const stateMod = await import('./js/core/state.js');
      const rendererMod = await import('./js/ui/renderer.js');
      stateMod.selectLearningScreen('learning-viewer', {
        domainId: ${tc.domain},
        objectiveId: '${tc.objectiveId}',
        lessonId: '${tc.lessonId}',
        slideId: '${tc.slideId}'
      });
      await rendererMod.renderApp();
    })()`);
    await sleep(800);

    // If the viewer restored a previous slide, navigate to target slide using overview or previous/next
    await evalExpr(`(async () => {
      for (let i = 0; i < 8; i++) {
        const curTable = document.querySelector('${tc.selector}');
        if (curTable) break;
        const prev = document.querySelector('[data-action="previous"]');
        if (prev && !prev.disabled) {
          prev.click();
          await new Promise(r => setTimeout(r, 150));
        } else {
          break;
        }
      }
    })()`);
    await sleep(400);

    const data = await evalExpr(`(() => {
      const table = document.querySelector('${tc.selector}');
      if (!table) return { error: 'Table not found for selector: ${tc.selector}' };
      const th = table.querySelector('thead th');
      const td = table.querySelector('tbody td');
      const csTh = th ? getComputedStyle(th) : null;
      const csTd = td ? getComputedStyle(td) : null;
      return {
        tableClass: table.className,
        thText: th ? th.innerText.trim() : '',
        thStyles: csTh ? {
          fontSize: csTh.fontSize,
          fontWeight: csTh.fontWeight,
          letterSpacing: csTh.letterSpacing,
          textTransform: csTh.textTransform,
          verticalAlign: csTh.verticalAlign,
          lineHeight: csTh.lineHeight,
          padding: csTh.padding,
          color: csTh.color,
          background: csTh.backgroundColor,
          borderBottom: csTh.borderBottom
        } : null,
        tdStyles: csTd ? {
          fontSize: csTd.fontSize,
          padding: csTd.padding,
          color: csTd.color,
          borderBottom: csTd.borderBottom
        } : null
      };
    })()`);

    if (data.error) {
      console.error('  ERROR:', data.error);
      failures++;
      continue;
    }

    const th = data.thStyles;
    const checks = [
      { name: 'fontWeight >= 700', pass: parseInt(th.fontWeight, 10) >= 700, val: th.fontWeight },
      { name: 'letterSpacing === normal', pass: th.letterSpacing === 'normal', val: th.letterSpacing },
      { name: 'textTransform === none', pass: th.textTransform === 'none', val: th.textTransform },
      { name: 'verticalAlign === bottom', pass: th.verticalAlign === 'bottom', val: th.verticalAlign }
    ];

    for (const c of checks) {
      if (c.pass) {
        console.log(`  ✔ [PASS] ${c.name} (${c.val})`);
      } else {
        console.error(`  ✖ [FAIL] ${c.name} (${c.val})`);
        failures++;
      }
    }

    await screenshot(tc.screenshot);
    results.push({ testCase: tc, data });
  }

  // 2. VERIFY READING MODE (TEXT VIEW)
  console.log('\n=== 2. VERIFYING READING MODE (TEXT VIEW) TABLE ===');
  await evalExpr(`(async () => {
    const readingBtn = document.querySelector('[data-action="reading"]');
    if (readingBtn && !document.querySelector('.learning-viewer')?.classList.contains('learning-reading-mode')) {
      readingBtn.click();
    }
  })()`);
  await sleep(600);

  const readingData = await evalExpr(`(() => {
    const isReading = document.querySelector('.learning-viewer')?.classList.contains('learning-reading-mode');
    const table = document.querySelector('.learning-slide table, .learning-viewer table');
    const th = table ? table.querySelector('thead th') : null;
    const td = table ? table.querySelector('tbody td') : null;
    const csTh = th ? getComputedStyle(th) : null;
    const csTd = td ? getComputedStyle(td) : null;
    return {
      isReading,
      tableFound: !!table,
      thText: th ? th.innerText.trim() : '',
      thStyles: csTh ? {
        fontSize: csTh.fontSize,
        fontWeight: csTh.fontWeight,
        letterSpacing: csTh.letterSpacing,
        textTransform: csTh.textTransform,
        verticalAlign: csTh.verticalAlign,
        lineHeight: csTh.lineHeight,
        padding: csTh.padding,
        color: csTh.color,
        background: csTh.backgroundColor,
        borderBottom: csTh.borderBottom
      } : null,
      tdStyles: csTd ? {
        fontSize: csTd.fontSize,
        padding: csTd.padding,
        color: csTd.color,
        borderBottom: csTd.borderBottom
      } : null
    };
  })()`);

  if (readingData.thStyles) {
    const th = readingData.thStyles;
    const checks = [
      { name: 'reading isReading === true', pass: readingData.isReading === true },
      { name: 'reading fontWeight >= 700', pass: parseInt(th.fontWeight, 10) >= 700, val: th.fontWeight },
      { name: 'reading letterSpacing === normal', pass: th.letterSpacing === 'normal', val: th.letterSpacing },
      { name: 'reading textTransform === none', pass: th.textTransform === 'none', val: th.textTransform },
      { name: 'reading verticalAlign === bottom', pass: th.verticalAlign === 'bottom', val: th.verticalAlign },
      { name: 'reading padding === 11px 16px', pass: th.padding === '11px 16px', val: th.padding }
    ];
    for (const c of checks) {
      if (c.pass) console.log(`  ✔ [PASS] ${c.name}`);
      else { console.error(`  ✖ [FAIL] ${c.name} (${c.val})`); failures++; }
    }
  } else {
    console.error('  ✖ [FAIL] No reading mode table found');
    failures++;
  }
  await screenshot('artifacts/qa/learning-slides-tables/reading-mode-table.png');

  // Toggle back to presentation view
  await evalExpr(`(() => {
    const readingBtn = document.querySelector('[data-action="reading"]');
    if (readingBtn) readingBtn.click();
  })()`);
  await sleep(400);

  // 3. VERIFY INFO MODAL (DARK AND LIGHT THEMES)
  console.log('\n=== 3. VERIFYING INFO MODAL (DARK & LIGHT THEMES) ===');
  await evalExpr(`(async () => {
    // Open info dialog via lesson-info action
    const infoBtn = document.querySelector('[data-action="lesson-info"]');
    if (infoBtn) infoBtn.click();
    await new Promise(r => setTimeout(r, 600));

    // Open source explanations
    const d = document.querySelector('.learning-info-source-explanations');
    if (d) d.open = true;

    // Open slide explanation with table
    const exps = document.querySelectorAll('.learning-info-slide-explanation');
    for (const exp of exps) {
      if (exp.querySelector('table')) {
        exp.open = true;
        exp.scrollIntoView();
        break;
      }
    }
  })()`);
  await sleep(600);

  // Dark Theme Check
  const infoDark = await evalExpr(`(() => {
    const table = document.querySelector('.learning-info-panel table');
    const th = table ? table.querySelector('thead th') : null;
    const csTh = th ? getComputedStyle(th) : null;
    return {
      theme: document.documentElement.getAttribute('data-theme') || 'dark',
      thText: th ? th.innerText.trim() : '',
      thStyles: csTh ? {
        fontWeight: csTh.fontWeight,
        color: csTh.color,
        background: csTh.backgroundColor,
        letterSpacing: csTh.letterSpacing,
        textTransform: csTh.textTransform,
        verticalAlign: csTh.verticalAlign,
        fontSize: csTh.fontSize,
        borderBottom: csTh.borderBottom
      } : null
    };
  })()`);

  if (infoDark.thStyles) {
    const th = infoDark.thStyles;
    const checks = [
      { name: 'info dark fontWeight >= 700', pass: parseInt(th.fontWeight, 10) >= 700, val: th.fontWeight },
      { name: 'info dark letterSpacing === normal', pass: th.letterSpacing === 'normal', val: th.letterSpacing },
      { name: 'info dark textTransform === none', pass: th.textTransform === 'none', val: th.textTransform },
      { name: 'info dark background elevated', pass: th.background.includes('rgba(255, 255, 255, 0.06)'), val: th.background }
    ];
    for (const c of checks) {
      if (c.pass) console.log(`  ✔ [PASS] ${c.name}`);
      else { console.error(`  ✖ [FAIL] ${c.name} (${c.val})`); failures++; }
    }
  } else {
    console.error('  ✖ [FAIL] No info dark table found');
    failures++;
  }
  await screenshot('artifacts/qa/learning-slides-tables/info-modal-dark.png');

  // Light Theme Check
  await evalExpr(`document.documentElement.setAttribute('data-theme', 'light')`);
  await sleep(400);

  const infoLight = await evalExpr(`(() => {
    const table = document.querySelector('.learning-info-panel table');
    const th = table ? table.querySelector('thead th') : null;
    const csTh = th ? getComputedStyle(th) : null;
    return {
      theme: document.documentElement.getAttribute('data-theme'),
      thText: th ? th.innerText.trim() : '',
      thStyles: csTh ? {
        fontWeight: csTh.fontWeight,
        color: csTh.color,
        background: csTh.backgroundColor,
        letterSpacing: csTh.letterSpacing,
        textTransform: csTh.textTransform,
        verticalAlign: csTh.verticalAlign,
        fontSize: csTh.fontSize,
        borderBottom: csTh.borderBottom
      } : null
    };
  })()`);

  if (infoLight.thStyles) {
    const th = infoLight.thStyles;
    const checks = [
      { name: 'info light fontWeight >= 700', pass: parseInt(th.fontWeight, 10) >= 700, val: th.fontWeight },
      { name: 'info light letterSpacing === normal', pass: th.letterSpacing === 'normal', val: th.letterSpacing },
      { name: 'info light textTransform === none', pass: th.textTransform === 'none', val: th.textTransform },
      { name: 'info light background is #f1f5f9', pass: th.background === 'rgb(241, 245, 249)', val: th.background }
    ];
    for (const c of checks) {
      if (c.pass) console.log(`  ✔ [PASS] ${c.name}`);
      else { console.error(`  ✖ [FAIL] ${c.name} (${c.val})`); failures++; }
    }
  } else {
    console.error('  ✖ [FAIL] No info light table found');
    failures++;
  }
  await screenshot('artifacts/qa/learning-slides-tables/info-modal-light.png');

  // Reset to dark and close info
  await evalExpr(`(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('[data-action="close-info"]')?.click();
  })()`);
  await sleep(400);

  // 4. VERIFY RESPONSIVE / MOBILE VIEWPORT (390x844)
  console.log('\n=== 4. VERIFYING RESPONSIVE / MOBILE VIEWPORT (390x844) ===');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await sleep(600);

  const mobileCheck = await evalExpr(`(() => {
    const table = document.querySelector('.learning-slide table, .learning-viewer table');
    const scroll = table ? table.closest('.learning-table-scroll') : null;
    const body = document.documentElement;
    return {
      viewportWidth: window.innerWidth,
      bodyScrollWidth: body.scrollWidth,
      tableScrollWidth: scroll ? scroll.scrollWidth : null,
      tableClientWidth: scroll ? scroll.clientWidth : null,
      tableHasHorizontalScroll: scroll ? scroll.scrollWidth > scroll.clientWidth : false,
      bodyHasHorizontalOverflow: body.scrollWidth > window.innerWidth
    };
  })()`);

  const mobilePass = !mobileCheck.bodyHasHorizontalOverflow;
  if (mobilePass) {
    console.log(`  ✔ [PASS] Mobile 390px: No page horizontal overflow (bodyScrollWidth: ${mobileCheck.bodyScrollWidth}px, viewportWidth: ${mobileCheck.viewportWidth}px)`);
  } else {
    console.error(`  ✖ [FAIL] Mobile 390px: Page horizontal overflow detected!`);
    failures++;
  }
  await screenshot('artifacts/qa/learning-slides-tables/mobile-390px-verified.png');

  // Summary
  console.log(`\n========================================`);
  console.log(`AUDIT COMPLETE: ${failures === 0 ? 'ALL CHECKS PASSED' : failures + ' CHECKS FAILED'}`);
  console.log(`========================================\n`);

  fs.writeFileSync(
    'artifacts/qa/learning-slides-tables/verification-summary.json',
    JSON.stringify({ results, readingData, infoDark, infoLight, mobileCheck, failures }, null, 2),
    'utf8'
  );

  ws.close();
  if (failures > 0) process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

