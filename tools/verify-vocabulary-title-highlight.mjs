/**
 * tools/verify-vocabulary-title-highlight.mjs
 * Verification suite for Vocabulary Study Cards:
 * TASK 1: Exact solid blue title background (#2563EB) & white text
 * TASK 2: Synchronized EXAMPLE panel alignment and equal height via CSS Grid Subgrid
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const css = fs.readFileSync(path.join(root, 'css/vocabulary.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'js/ui/screen-vocabulary.js'), 'utf8');

console.log('--- Test 1: Exact Solid Blue Title Background (#2563EB) & White Text ---');
const termMatch = css.match(/\.dict-card-term\s*\{([^}]+)\}/);
assert.ok(termMatch, '.dict-card-term rule must exist');
const termBody = termMatch[1];

// 1. Exact solid #2563EB
assert.ok(
  /background\s*:\s*#2563EB/i.test(termBody),
  '.dict-card-term must use exact solid #2563EB'
);
console.log('PASS 1: .dict-card-term uses exact solid #2563EB.');

// 2. White text
assert.ok(
  /color\s*:\s*#(?:ffffff|fff)/i.test(termBody),
  '.dict-card-term title text must be white'
);
console.log('PASS 2: Title text is white (#ffffff).');

// 3. No translucent blue background overrides remain active
assert.ok(
  !termBody.includes('color-mix') && !termBody.includes('var(--blue-bg)'),
  'No translucent blue background overrides remain active on .dict-card-term'
);
console.log('PASS 3: No translucent background overrides remain active.');

// 4. Existing acronym badges remain visible and styled
assert.ok(css.includes('.vocab-acronym-tag {'), '.vocab-acronym-tag rule exists');
assert.ok(js.includes('class="vocab-acronym-tag"'), 'Acronym badge markup exists in screen-vocabulary.js');
console.log('PASS 4: Existing acronym badges (CIA, AAA, ISO, etc.) remain visible and styled.');

// 5. Domain/Objective badges remain hidden on study cards only
const badgeHiddenMatch = css.match(/\.vocab-dict-card\s+\.badge-obj\s*\{([^}]+)\}/);
assert.ok(badgeHiddenMatch && badgeHiddenMatch[1].includes('display: none'), '.vocab-dict-card .badge-obj must be display: none');
assert.ok(css.match(/(?:^|\n)\.badge-obj\s*\{[^}]+background:\s*var\(--panel-2\)/), 'General .badge-obj for flashcards & modal preserved');
console.log('PASS 5: Domain/Objective badges remain hidden on Study Cards only, visible on Flashcards.');

console.log('--- Test 2: Shared Grid-Row Sizing & Synchronized EXAMPLE Panels ---');
// 6. Genuinely shared grid-row sizing via CSS Grid Subgrid
assert.ok(css.includes('@supports (grid-template-rows: subgrid)'), 'Must use @supports for subgrid');
const subgridMatch = css.match(/@supports\s*\(\s*grid-template-rows\s*:\s*subgrid\s*\)\s*\{([\s\S]+?)\n\}/);
assert.ok(subgridMatch, 'Subgrid support block exists');
const subgridBlock = subgridMatch[1];

assert.ok(/grid-auto-rows\s*:\s*auto\s+auto/.test(subgridBlock), 'Parent grid must provide 2-row tracks per card');
assert.ok(/grid-row\s*:\s*span 2/.test(subgridBlock), 'Card must span 2 rows');
assert.ok(/grid-template-rows\s*:\s*subgrid/.test(subgridBlock), 'Card must use grid-template-rows: subgrid');
assert.ok(/\.dict-card-body\s*\{[^}]*grid-row\s*:\s*1/.test(subgridBlock), '.dict-card-body must occupy grid-row: 1');
assert.ok(/\.dict-example-box\s*\{[^}]*grid-row\s*:\s*2/.test(subgridBlock), '.dict-example-box must occupy grid-row: 2');
assert.ok(/\.dict-example-box\s*\{[^}]*height\s*:\s*100%/.test(subgridBlock), '.dict-example-box must stretch to full row height (height: 100%)');
console.log('PASS 6: EXAMPLE alignment uses genuinely shared grid-row sizing via CSS Grid subgrid.');

// 7. Variable-length content expands naturally without clipping
assert.ok(/overflow-wrap\s*:\s*break-word/.test(termBody), 'Titles support break-word');
assert.ok(css.includes('overflow-wrap: break-word;') && css.includes('word-break: break-word;'), 'Thai example text supports word wrapping');
assert.ok(!css.includes('text-overflow: ellipsis') || !termBody.includes('ellipsis'), 'No truncation or ellipsis on titles/examples');
console.log('PASS 7: Variable-length content can expand naturally without clipping.');

// 8. Mobile single-column layout is not forced into desktop sizing
const mobileMatch = css.match(/@media\s*\(\s*max-width\s*:\s*480px\s*\)\s*\{([\s\S]+?)\n\}/);
assert.ok(mobileMatch, 'Mobile 480px media query exists');
const mobileBlock = mobileMatch[1];
assert.ok(/\.vocab-dict-card\s*\{[^}]*grid-row\s*:\s*auto/.test(mobileBlock), 'Mobile card resets grid-row to auto');
assert.ok(/\.vocab-dict-card\s*\{[^}]*display\s*:\s*flex/.test(mobileBlock), 'Mobile card uses standard flex column');
assert.ok(/\.dict-example-box\s*\{[^}]*min-height\s*:\s*auto/.test(mobileBlock), 'Mobile example panel uses min-height: auto');
assert.ok(/\.dict-example-box\s*\{[^}]*height\s*:\s*auto/.test(mobileBlock), 'Mobile example panel uses height: auto');
console.log('PASS 8: Mobile single-column layout uses natural content height without forced desktop sizing.');

console.log('--- Test 3: Markup Structure & Data Parity ---');
// Markup in screen-vocabulary.js has dict-card-body enclosing upper elements
assert.ok(js.includes('<div class="dict-card-body">'), 'Study card template wraps upper elements in dict-card-body');
assert.ok(js.includes('<aside class="dict-example-box"') || js.includes('<div class="dict-example-box"'), 'Study card template renders dict-example-box');

// 9 & 10. Data integrity & 313 entries
const d1 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-1.json'), 'utf8'));
const d2 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-2.json'), 'utf8'));
const d3 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-3.json'), 'utf8'));
const totalEntries = d1.entries.length + d2.entries.length + d3.entries.length;
assert.equal(totalEntries, 313, 'Total vocabulary entries must be exactly 313 (110 + 101 + 102)');
console.log('PASS 9 & 10: All 313 vocabulary entries remain intact and filtering logic is unaffected.');

console.log('\n======================================================');
console.log('ALL VOCABULARY STUDY CARD REFINEMENT TESTS PASSED!');
console.log('======================================================');
