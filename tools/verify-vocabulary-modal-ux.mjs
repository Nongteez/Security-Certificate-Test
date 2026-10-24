/**
 * tools/verify-vocabulary-modal-ux.mjs
 * Verification test suite for Vocabulary Detail Modal Desktop Readability & Navigation Refinement.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';

const vocabDir = 'content/isc2-cc-2026/vocabulary';
const d1Path = path.join(vocabDir, 'domain-1.json');
const d2Path = path.join(vocabDir, 'domain-2.json');
const d3Path = path.join(vocabDir, 'domain-3.json');

const jsPath = 'js/ui/screen-vocabulary.js';
const cssPath = 'css/vocabulary.css';

test('1. Vocabulary Data Integrity: all 313 entries intact with unchanged metadata', () => {
  assert.ok(fs.existsSync(d1Path), 'domain-1.json exists');
  assert.ok(fs.existsSync(d2Path), 'domain-2.json exists');
  assert.ok(fs.existsSync(d3Path), 'domain-3.json exists');

  const d1 = JSON.parse(fs.readFileSync(d1Path, 'utf8'));
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));

  assert.equal(d1.entries.length, 110, 'Domain 1 must have 110 entries');
  assert.equal(d2.entries.length, 101, 'Domain 2 must have 101 entries');
  assert.equal(d3.entries.length, 102, 'Domain 3 must have 102 entries');

  const total = d1.entries.length + d2.entries.length + d3.entries.length;
  assert.equal(total, 313, 'Total vocabulary entries must be 313');

  // Verify each entry preserves underlying metadata for search/filtering
  const allEntries = [...d1.entries, ...d2.entries, ...d3.entries];
  let confusedTermsCount = 0;
  allEntries.forEach((entry, i) => {
    assert.ok(entry.id, `Entry ${i} must have id`);
    assert.ok(entry.term, `Entry ${i} must have term`);
    assert.ok(entry.thai_meaning, `Entry ${i} must have thai_meaning`);
    assert.ok(entry.definition_en, `Entry ${i} must have definition_en`);
    assert.ok(entry.explanation_th, `Entry ${i} must have explanation_th`);
    assert.ok(entry.category, `Entry ${i} must have category`);
    assert.ok(typeof entry.domain === 'number', `Entry ${i} must have numeric domain`);
    assert.ok(entry.objective, `Entry ${i} must have objective`);
    assert.ok(entry.exam_relevance, `Entry ${i} must have exam_relevance`);
    assert.ok(Array.isArray(entry.keywords), `Entry ${i} must have keywords array`);
    if (Array.isArray(entry.confused_with) && entry.confused_with.length > 0) {
      confusedTermsCount++;
    }
  });

  // Verify confused_with data is preserved in data files
  assert.ok(confusedTermsCount > 0, 'confused_with data must be preserved in vocabulary JSON');
});

test('2. Modal Content Hierarchy in screen-vocabulary.js without Commonly Confused With', () => {
  const js = fs.readFileSync(jsPath, 'utf8');

  // Find renderModalContent function implementation
  const fnStart = js.indexOf('function renderModalContent(list, index)');
  assert.ok(fnStart !== -1, 'renderModalContent function must exist');
  const fnEnd = js.indexOf('function setupKeyboardNav', fnStart);
  assert.ok(fnEnd !== -1, 'renderModalContent end boundary found');
  const fnBody = js.slice(fnStart, fnEnd);

  // Hierarchy check:
  // 1. Thai Meaning
  // 2. English Definition
  // 3. Detailed Thai Explanation
  // 4. Example Scenario
  // 5. Exam Guidance & Relevance
  const idxThaiBanner = fnBody.indexOf('modal-thai-banner');
  const idxDef = fnBody.indexOf('modal-def-text');
  const idxExpTh = fnBody.indexOf('modal-exp-th-text');
  const idxExample = fnBody.indexOf('modal-example-card');
  const idxRelevance = fnBody.indexOf('modal-relevance-box');

  assert.ok(idxThaiBanner !== -1, 'modal-thai-banner must exist');
  assert.ok(idxDef !== -1, 'modal-def-text must exist');
  assert.ok(idxExpTh !== -1, 'modal-exp-th-text must exist');
  assert.ok(idxExample !== -1, 'modal-example-card must exist');
  assert.ok(idxRelevance !== -1, 'modal-relevance-box must exist');

  assert.ok(idxThaiBanner < idxDef, '1. Thai Meaning before English Definition');
  assert.ok(idxDef < idxExpTh, '2. English Definition before Detailed Thai Explanation');
  assert.ok(idxExpTh < idxExample, '3. Detailed Thai Explanation before Example Scenario');
  assert.ok(idxExample < idxRelevance, '4. Example Scenario before Exam Guidance');

  // Commonly Confused With is removed from renderModalContent
  assert.ok(!fnBody.includes('modal-confused-box'), 'modal-confused-box must NOT be rendered in modal body');
  assert.ok(!fnBody.includes('Commonly Confused With'), 'Commonly Confused With heading must NOT be in modal body');
});

test('3. Hidden Metadata & Visual Density Simplification', () => {
  const js = fs.readFileSync(jsPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');

  const fnStart = js.indexOf('function renderModalContent(list, index)');
  const fnBody = js.slice(fnStart, fnStart + 3500);

  // Badges container is cleared
  assert.ok(fnBody.includes("badgesContainer.innerHTML = '';"), 'Modal badges container must be emptied');

  // Internal ID and footer meta-line are removed from modal rendering
  assert.ok(!fnBody.includes('modal-meta-line'), 'modal-meta-line must NOT be in renderModalContent');
  assert.ok(!fnBody.includes('modal-keywords-box'), 'modal-keywords-box must NOT be in renderModalContent');
  assert.ok(!fnBody.includes('entry.id'), 'entry.id must NOT be displayed in renderModalContent');

  // CSS safely hides empty badges, metadata, and confused box
  assert.ok(css.includes('.vocab-modal-badges:empty'), 'CSS hides empty badges container');
  assert.ok(css.includes('.modal-confused-box'), 'CSS includes safe display: none for modal-confused-box');
});

test('4. Exam Guidance & Relevance Bilingual Support', () => {
  const js = fs.readFileSync(jsPath, 'utf8');

  // Checks renderModalContent supports exam_relevance_th if available
  assert.ok(js.includes('entry.exam_relevance_th'), 'Exam guidance conditionally supports reviewed Thai translation');
  assert.ok(js.includes('escapeHtml(entry.exam_relevance)'), 'Authentic English exam_relevance is preserved');
  assert.ok(!js.includes('Distinguish authentication from authorization (Thai translated fallback)'), 'No generic or fabricated Thai translation injected');
});

test('5. Desktop Modal Width & Scaled Reading Typography', () => {
  const css = fs.readFileSync(cssPath, 'utf8');

  // Desktop max-width in 960–1040px range
  const dialogRegex = /\.vocab-modal-dialog\s*\{([^}]+)\}/;
  const matchDialog = css.match(dialogRegex);
  assert.ok(matchDialog, '.vocab-modal-dialog rule exists');
  const dialogContent = matchDialog[1];
  const maxWidthMatch = dialogContent.match(/max-width:\s*(\d+)px/);
  assert.ok(maxWidthMatch, 'max-width defined in pixels');
  const maxWidth = parseInt(maxWidthMatch[1], 10);
  assert.ok(maxWidth >= 960 && maxWidth <= 1040, `Desktop modal width ${maxWidth}px must be in 960–1040px range`);

  // Title typography (26–28px)
  const titleRegex = /\.vocab-modal-title\s*\{([^}]+)\}/;
  const matchTitle = css.match(titleRegex);
  assert.ok(matchTitle, '.vocab-modal-title rule exists');
  const titleFontSize = parseInt(matchTitle[1].match(/font-size:\s*(\d+)px/)[1], 10);
  assert.ok(titleFontSize >= 26 && titleFontSize <= 28, `Title font-size ${titleFontSize}px must be between 26–28px`);

  // Thai meaning headline (18–20px)
  const thaiTitleRegex = /\.modal-thai-title\s*\{([^}]+)\}/;
  const matchThaiTitle = css.match(thaiTitleRegex);
  assert.ok(matchThaiTitle, '.modal-thai-title rule exists');
  const thaiFontSize = parseFloat(matchThaiTitle[1].match(/font-size:\s*([\d.]+)px/)[1]);
  assert.ok(thaiFontSize >= 18 && thaiFontSize <= 20, `Thai meaning font-size ${thaiFontSize}px must be between 18–20px`);

  // English definition typography (16–17px, line-height 1.65–1.75)
  const defRegex = /\.modal-def-text\s*\{([^}]+)\}/;
  const matchDef = css.match(defRegex);
  assert.ok(matchDef, '.modal-def-text rule exists');
  const defContent = matchDef[1];
  const defFontSize = parseFloat(defContent.match(/font-size:\s*([\d.]+)px/)[1]);
  assert.ok(defFontSize >= 16 && defFontSize <= 17, `Def text font size ${defFontSize}px must be between 16–17px`);
  assert.ok(defContent.includes('line-height: 1.7'), 'Def line-height must be comfortable (1.65–1.75)');

  // Detailed Thai explanation typography (16–17px, line-height 1.65–1.75)
  const expThRegex = /\.modal-exp-th-text\s*\{([^}]+)\}/;
  const matchExpTh = css.match(expThRegex);
  assert.ok(matchExpTh, '.modal-exp-th-text rule exists');
  const expThContent = matchExpTh[1];
  const expThFontSize = parseFloat(expThContent.match(/font-size:\s*([\d.]+)px/)[1]);
  assert.ok(expThFontSize >= 16 && expThFontSize <= 17, `Thai explanation font size ${expThFontSize}px must be between 16–17px`);

  // Example Scenario typography (16–17px)
  const exRowRegex = /\.modal-example-row\s*\{([^}]+)\}/;
  const matchExRow = css.match(exRowRegex);
  assert.ok(matchExRow, '.modal-example-row rule exists');
  const exRowFontSize = parseFloat(matchExRow[1].match(/font-size:\s*([\d.]+)px/)[1]);
  assert.ok(exRowFontSize >= 16 && exRowFontSize <= 17, `Example scenario font size ${exRowFontSize}px must be between 16–17px`);

  // Exam guidance typography (15–16px)
  const relTextRegex = /\.modal-relevance-text\s*\{([^}]+)\}/;
  const matchRelText = css.match(relTextRegex);
  assert.ok(matchRelText, '.modal-relevance-text rule exists');
  const relTextFontSize = parseFloat(matchRelText[1].match(/font-size:\s*([\d.]+)px/)[1]);
  assert.ok(relTextFontSize >= 15 && relTextFontSize <= 16, `Exam guidance font size ${relTextFontSize}px must be between 15–16px`);

  // Inner reading content measure constrained (~900px)
  assert.ok(css.includes('max-width: 900px'), 'Modal inner content constrained to comfortable reading measure');
});

test('6. Simplified Bottom Navigation Footer & Icon Buttons', () => {
  const js = fs.readFileSync(jsPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');

  // Redundant bottom Close button removed
  assert.ok(!js.includes('id="btn-modal-done"'), 'Redundant #btn-modal-done removed from HTML');

  // Previous & Next are icon-only buttons with aria-label
  assert.ok(js.includes('id="btn-modal-prev"'), 'Previous button exists');
  assert.ok(js.includes('aria-label="Previous Term"'), 'Previous button has accessible aria-label');
  assert.ok(js.includes('id="btn-modal-next"'), 'Next button exists');
  assert.ok(js.includes('aria-label="Next Term"'), 'Next button has accessible aria-label');

  // Counter format is 'X / Y'
  assert.ok(js.includes('counterEl.textContent = `${index + 1} / ${list.length}`;'), 'Counter format is index / length');

  // Navigation button styling uses icon dimensions (40px)
  const navBtnRegex = /\.vocab-modal-nav-btn\s*\{([^}]+)\}/;
  const matchNavBtn = css.match(navBtnRegex);
  assert.ok(matchNavBtn, '.vocab-modal-nav-btn rule exists');
  assert.ok(matchNavBtn[1].includes('width: 40px') && matchNavBtn[1].includes('height: 40px'), 'Nav buttons are circular icon buttons');
});

test('7. Preserved Navigation & Interaction Functionality', () => {
  const js = fs.readFileSync(jsPath, 'utf8');

  // Prev / Next inside modal
  assert.ok(js.includes("prevBtn.onclick = () => {"), 'Prev term click handler exists');
  assert.ok(js.includes("nextBtn.onclick = () => {"), 'Next term click handler exists');

  // Close handlers
  assert.ok(js.includes("closeBtn.onclick = closeModal;"), 'Top-right Close button handler exists');

  // Escape key handler
  assert.ok(js.includes("if (e.key === 'Escape')"), 'Escape key handler exists');

  // Keyboard arrow navigation
  assert.ok(js.includes("modal.querySelector('#btn-modal-prev')?.click();"), 'ArrowLeft navigation intact');
  assert.ok(js.includes("modal.querySelector('#btn-modal-next')?.click();"), 'ArrowRight navigation intact');
});

test('8. Mobile Responsiveness Maintained', () => {
  const css = fs.readFileSync(cssPath, 'utf8');
  const mobileQuery = css.slice(css.lastIndexOf('@media (max-width: 480px)'));

  assert.ok(mobileQuery.includes('.vocab-modal-dialog'), 'Mobile dialog overrides present');
  assert.ok(mobileQuery.includes('max-width: 100%'), 'Mobile dialog takes available width');
  assert.ok(mobileQuery.includes('font-size: 20px'), 'Mobile title is readable (not tiny)');
  assert.ok(mobileQuery.includes('font-size: 14.5px'), 'Mobile body text is readable (not tiny)');
  assert.ok(mobileQuery.includes('safe-area-inset-bottom'), 'Safe area insets respected on mobile');
  assert.ok(mobileQuery.includes('overscroll-behavior: contain'), 'Mobile modal scrolling contained');
});
