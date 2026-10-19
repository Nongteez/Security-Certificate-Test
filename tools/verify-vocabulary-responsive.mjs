/** Real-browser regression: all vocabulary entries, both faces, study grid and modal.
 * Requires Playwright (NODE_PATH is supported) and an installed browser.
 * BROWSER_EXECUTABLE can select a Chromium executable; defaults to Edge.
 * Starts and closes its own temporary localhost server.
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
const { chromium } = createRequire(import.meta.url)('playwright');
const output = path.resolve(process.env.VOCAB_REPORT_DIR || 'docs/verification/vocabulary-responsive');
fs.mkdirSync(output, { recursive: true });
const root = path.resolve('.');
const server = http.createServer((req, res) => {
  const file = path.resolve(root, '.' + (new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', ({ '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.html': 'text/html' })[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const url = process.env.VOCAB_URL || `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch({ headless: true, ignoreDefaultArgs: ['--hide-scrollbars'], ...(process.env.BROWSER_EXECUTABLE
  ? { executablePath: process.env.BROWSER_EXECUTABLE } : { channel: 'msedge' }) }).catch(error => { server.close(); throw error; });
const results = [];
const errors = [];
const viewports = [[320, 568], [375, 667], [390, 844], [430, 932], [768, 1024], [1024, 768], [1440, 900], [667, 375]]
  .filter(([width]) => !process.env.VOCAB_WIDTH || width === Number(process.env.VOCAB_WIDTH));
try {
  for (const [width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height }, hasTouch: width < 768 });
    const page = await context.newPage();
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(url);
    await page.evaluate(async () => {
      const { state } = await import('/js/core/state.js');
      const { renderApp } = await import('/js/ui/renderer.js');
      state.screen = 'vocabulary';
      await renderApp();
    });
    await page.locator('.vocab-dict-card').first().waitFor();
    await page.evaluate(() => document.fonts.ready);
    const study = await page.evaluate(() => {
      const bad = [...document.querySelectorAll('.vocab-dict-card')].filter(e => e.scrollWidth > e.clientWidth + 1);
      const outside = [...document.querySelectorAll('.vocab-screen button, .vocab-screen input, .vocab-hero-card')]
        .filter(e => !e.closest('[hidden], .vocab-filter-pills')).filter(e => {
          const r = e.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1;
        });
      return { count: document.querySelectorAll('.vocab-dict-card').length, overflow: bad.length,
        outside: outside.map(e => e.id || e.className), pageOverflow: document.documentElement.scrollWidth > innerWidth };
    });
    await page.screenshot({ path: path.join(output, `${width}-study.png`) });
    await page.locator('#tab-flashcards').click();
    // Disable only the card transition during exhaustive synchronous geometry checks.
    const style = await page.addStyleTag({ content: '.flashcard-card { transition: none !important; }' });
    const geometry = await page.evaluate(() => {
      const failures = [];
      const scrollers = [];
      const rect = e => e.getBoundingClientRect();
      const check = (ok, message, term) => { if (!ok) failures.push({ term, message }); };
      for (let i = 0; i < 110; i++) {
        const card = document.querySelector('#flashcard-card');
        const term = document.querySelector('.flashcard-front-term').textContent;
        const front = rect(document.querySelector('.flashcard-front'));
        const title = rect(document.querySelector('.flashcard-front-term'));
        check(title.left >= front.left && title.right <= front.right && title.bottom <= front.bottom, 'front term outside face', term);
        document.querySelector('#btn-card-flip').click();
        const face = rect(document.querySelector('.flashcard-back'));
        const body = document.querySelector('.flashcard-back-body');
        const b = rect(body);
        const footer = rect(document.querySelector('.flashcard-back-bottom'));
        const nav = rect(document.querySelector('.flashcard-nav-controls'));
        check(b.bottom <= footer.top + 1, 'body overlaps details footer', term);
        check(footer.bottom <= face.bottom + 1, 'footer outside card', term);
        check(face.bottom <= nav.top + 1, 'card overlaps navigation', term);
        check(body.scrollWidth <= body.clientWidth + 1, 'body horizontal overflow', term);
        check(b.height >= 40, 'no usable body region', term);
        body.scrollTop = body.scrollHeight;
        const last = rect(body.lastElementChild);
        check(last.bottom <= b.bottom + 1, 'last content unreachable by internal scroll', term);
        if (body.scrollHeight > body.clientHeight + 1) scrollers.push(term);
        check(document.documentElement.scrollWidth <= innerWidth, 'horizontal page overflow', term);
        document.querySelector('[data-open-detail]').click();
        const modal = document.querySelector('.vocab-modal-dialog');
        const m = rect(modal);
        const modalBody = document.querySelector('.vocab-modal-body');
        const modalFooter = rect(document.querySelector('.vocab-modal-footer'));
        check(m.top >= -1 && m.bottom <= innerHeight + 1 && m.left >= 0 && m.right <= innerWidth, 'modal outside viewport', term);
        check(modalBody.scrollWidth <= modalBody.clientWidth + 1, 'modal horizontal overflow', term);
        check(rect(modalBody).bottom <= modalFooter.top + 1, 'modal body overlaps footer', term);
        for (const e of document.querySelectorAll('.vocab-modal-footer button, .vocab-modal-counter')) {
          const r = rect(e);
          check(r.left >= m.left && r.right <= m.right && r.bottom <= m.bottom, 'modal control outside dialog', term);
        }
        modalBody.scrollTop = modalBody.scrollHeight;
        check(rect(modalBody.lastElementChild).bottom <= rect(modalBody).bottom + 1, 'modal final content unreachable', term);
        document.querySelector('#btn-modal-done').click();
        if (i < 109) document.querySelector('#btn-card-next').click();
      }
      return { entries: 110, failures, scrollers };
    });
    await style.evaluate(e => e.remove());
    await page.locator('#vocab-search-input').fill('AAA Model');
    await page.locator('#flashcard-card').scrollIntoViewIfNeeded();
    await page.locator('.flashcard-deck-layout').screenshot({ path: path.join(output, `${width}-front.png`) });
    await page.locator('#btn-card-flip').click();
    await page.waitForFunction(() => !document.querySelector('#flashcard-card').getAnimations().some(a => a.playState === 'running'));
    await page.locator('.flashcard-deck-layout').screenshot({ path: path.join(output, `${width}-back.png`) });
    await page.evaluate(() => { document.body.style.overflow = 'auto'; });
    await page.locator('[data-open-detail]').click();
    await page.waitForFunction(() => !document.querySelector('#vocab-detail-modal').getAnimations({ subtree: true }).some(a => a.playState === 'running'));
    const backgroundScroll = await page.evaluate(() => scrollY);
    await page.mouse.move(1, 1);
    await page.mouse.wheel(0, 500);
    await page.screenshot({ path: path.join(output, `${width}-modal.png`) });
    const backgroundScrollLocked = await page.evaluate(y => scrollY === y, backgroundScroll);
    const interaction = await page.evaluate(() => {
      const modal = document.querySelector('#vocab-detail-modal');
      const focusedOnOpen = modal.contains(document.activeElement);
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      return { focusedOnOpen, escapeCloses: modal.hidden,
        focusRestored: document.activeElement.matches('[data-open-detail]'), scrollLockRestored: document.body.style.overflow === 'auto' };
    });
    interaction.backgroundScrollLocked = backgroundScrollLocked;
    const answer = page.locator('.flashcard-back-body');
    await answer.hover();
    await page.mouse.wheel(0, 600);
    await page.waitForFunction(() => {
      const e = document.querySelector('.flashcard-back-body');
      return e.scrollHeight <= e.clientHeight || e.scrollTop > 0;
    });
    interaction.wheelDoesNotFlip = await page.locator('#flashcard-card').evaluate(e => e.classList.contains('is-flipped'));
    if (width < 768 && height > 480) {
      await answer.evaluate(e => { e.scrollTop = 0; });
      const r = await answer.boundingBox();
      const cdp = await context.newCDPSession(page);
      const x = r.x + r.width / 2;
      const y = r.y + r.height - 12;
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
      for (let dy = 20; dy <= 100; dy += 20) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y - dy }] });
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      interaction.touchScroll = await answer.evaluate(e => e.scrollTop > 0 || e.scrollHeight <= e.clientHeight);
      interaction.touchDoesNotFlip = await page.locator('#flashcard-card').evaluate(e => e.classList.contains('is-flipped'));
      await cdp.detach();
    }
    // Keyboard activation must preserve focused buttons' native actions.
    await page.locator('#btn-card-flip').focus();
    await page.keyboard.press('Space');
    interaction.spaceFlipsOnce = !await page.locator('#flashcard-card').evaluate(e => e.classList.contains('is-flipped'));
    await page.locator('#vocab-search-input').fill('');
    await page.locator('#btn-card-next').focus();
    await page.keyboard.press('Space');
    interaction.spaceNavigates = await page.locator('.flashcard-counter').innerText() === 'Card 2 of 110';
    interaction.navigationKeepsFocus = await page.locator('#btn-card-next').evaluate(e => e === document.activeElement);
    await page.locator('#flashcard-card').focus();
    await page.keyboard.press('Enter');
    interaction.enterFlips = await page.locator('#flashcard-card').evaluate(e => e.classList.contains('is-flipped'));
    await page.locator('#btn-card-shuffle').click();
    interaction.shuffle = await page.locator('#btn-card-reset-order').count() === 1;
    await page.locator('#btn-card-reset-order').click();
    interaction.resetOrder = await page.locator('.flashcard-front-term').innerText() === 'Confidentiality';
    await page.locator('[data-obj="exam_strategy"]').click();
    interaction.strategyFilter = await page.locator('.flashcard-counter').innerText() === 'Card 1 of 7';
    interaction.filterKeepsFocus = await page.locator('[data-obj="exam_strategy"]').evaluate(e => e === document.activeElement);
    interaction.filterKeepsSelectionVisible = await page.locator('[data-obj="exam_strategy"]').evaluate(e => {
      const r = e.getBoundingClientRect(), p = e.parentElement.getBoundingClientRect();
      return r.left >= p.left - 1 && r.right <= p.right + 1;
    });
    await page.locator('#btn-reset-filters').click();
    await page.locator('[data-cat="acronym"]').click();
    interaction.categoryFilter = await page.locator('.flashcard-counter').innerText() === 'Card 1 of 18';
    await page.locator('#btn-reset-filters').click();
    await page.locator('#btn-card-flip').click();
    await page.waitForFunction(() => !document.querySelector('#flashcard-card').getAnimations().some(a => a.playState === 'running'));
    await page.locator('[data-open-detail]').click();
    await page.keyboard.press('Shift+Tab');
    interaction.tabTrapBack = await page.locator('#btn-modal-done').evaluate(e => e === document.activeElement);
    await page.keyboard.press('Tab');
    interaction.tabTrapForward = await page.locator('#btn-vocab-modal-close').evaluate(e => e === document.activeElement);
    await page.keyboard.press('ArrowRight');
    interaction.modalNext = await page.locator('#vocab-modal-counter').innerText() === 'Term 2 of 110';
    await page.keyboard.press('Escape');
    await page.emulateMedia({ colorScheme: 'light' });
    await page.evaluate(() => document.documentElement.dataset.theme = 'light');
    await page.waitForFunction(() => !document.getAnimations().some(a => a.playState === 'running'));
    await page.locator('.flashcard-deck-layout').screenshot({ path: path.join(output, `${width}-light.png`) });
    await page.locator('#tab-cards').click();
    await page.evaluate(() => { document.activeElement.blur(); scrollTo(0, 0); });
    await page.keyboard.press('Space');
    await page.waitForFunction(() => scrollY > 0);
    interaction.studySpaceScroll = await page.evaluate(() => scrollY > 0);
    await page.locator('#tab-flashcards').click();
    await page.emulateMedia({ reducedMotion: 'reduce' });
    interaction.reducedMotion = await page.locator('#flashcard-card').evaluate(e => parseFloat(getComputedStyle(e).transitionDuration) <= 0.01);
    // Remove only optional fields from a real entry in the HTTP response, never the source JSON.
    await page.route('**/vocabulary/domain-1.json', async route => {
      const response = await route.fetch();
      const data = await response.json();
      const entry = data.entries.find(e => e.term === 'AAA Model');
      for (const key of ['acronym', 'full_form', 'explanation_th', 'example_en', 'example_th', 'exam_relevance', 'confused_with', 'keywords']) delete entry[key];
      await route.fulfill({ json: { ...data, entries: [entry], total_entries: 1 } });
    });
    await page.evaluate(async () => {
      const { clearVocabularyCache } = await import('/js/core/vocabulary-loader.js');
      clearVocabularyCache();
      const { renderApp } = await import('/js/ui/renderer.js');
      await renderApp();
    });
    await page.locator('.vocab-dict-card').waitFor();
    await page.locator('#tab-flashcards').click();
    await page.locator('#btn-card-flip').click();
    interaction.missingOptionalFields = await page.locator('.flashcard-back').evaluate(e => !e.textContent.includes('undefined') && !e.querySelector('.flashcard-back-fullform-wrap'));
    const pass = study.count === 110 && !study.overflow && !study.outside.length && !study.pageOverflow
      && !geometry.failures.length && Object.values(interaction).every(Boolean);
    results.push({ width, height, status: pass ? 'PASS' : 'FAIL', study, geometry, interaction });
    console.log(`${width}x${height}: ${pass ? 'PASS' : 'FAIL'} (${geometry.failures.length} geometry failures)`);
    await context.close();
  }
} finally {
  fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ browser: browser.version(), results, errors }, null, 2));
  await browser.close();
  server.close();
}
if (results.some(r => r.status !== 'PASS') || errors.length) process.exitCode = 1;
