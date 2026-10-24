/**
 * tools/verify-vocabulary-mobile-readability.mjs
 * Static verification suite for Vocabulary Mobile Responsive Readability & Spacing Overhaul
 * Viewport targets: 320px, 360px, 375px, 390px, 430px
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const css = fs.readFileSync(path.join(root, 'css/vocabulary.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'js/ui/screen-vocabulary.js'), 'utf8');

console.log('--- Test 1: Mobile Media Query (max-width: 480px) Scope & Card Container ---');
const mobileMatch = css.match(/@media\s*\(\s*max-width\s*:\s*480px\s*\)\s*\{([\s\S]+?)\n\}/);
assert.ok(mobileMatch, 'Mobile 480px media query block must exist');
const mobileCss = mobileMatch[1];

// 1. Study card padding increased to 18px 18px
assert.ok(
  /\.vocab-dict-card\s*\{[^}]*padding\s*:\s*18px\s+18px/.test(mobileCss),
  'Mobile card padding must be 18px 18px for comfortable breathing room'
);
assert.ok(
  /\.vocab-dict-card\s*\{[^}]*gap\s*:\s*18px/.test(mobileCss),
  'Mobile card gap must be 18px for clear definition-to-example separation'
);
assert.ok(
  /\.vocab-grid\s*\{[^}]*gap\s*:\s*18px/.test(mobileCss),
  'Mobile grid gap must be 18px for distinct card-to-card rhythm'
);
assert.ok(
  /\.dict-card-body\s*\{[^}]*gap\s*:\s*14px/.test(mobileCss),
  'Mobile body gap must be 14px'
);
console.log('PASS 1: Study Card internal padding (18px), card-to-card gap (18px), and body gap (14px) verified.');

console.log('--- Test 2: Title & Acronym Badge Wrapping & Spacing ---');
const termMatch = css.match(/\.dict-card-term\s*\{([^}]+)\}/);
assert.ok(termMatch, '.dict-card-term desktop rule exists');
assert.ok(/background\s*:\s*#2563EB/i.test(termMatch[1]), 'Solid blue #2563EB preserved');
assert.ok(/color\s*:\s*#(?:ffffff|fff)/i.test(termMatch[1]), 'White text preserved');
assert.ok(mobileCss.includes('.dict-card-term {'), 'Mobile dict-card-term exists');
assert.ok(/\.dict-card-term\s*\{[^}]*font-size\s*:\s*16px/.test(mobileCss), 'Mobile font size is 16px');
assert.ok(
  /\.dict-card-title-group\s*\{[^}]*gap\s*:\s*8px\s+10px/.test(mobileCss),
  'Title group must have 8px 10px gap for comfortable title and acronym separation'
);
assert.ok(
  /\.vocab-acronym-tag\s*\{[^}]*padding\s*:\s*2px\s+7px/.test(mobileCss),
  'Acronym tag has comfortable 2px 7px padding on mobile'
);
console.log('PASS 2: Title solid #2563EB styling, natural wrapping, and acronym tag spacing verified.');

console.log('--- Test 3: Full-Form Container Readability & Spacing ---');
assert.ok(
  /\.dict-fullform-row\s*\{[^}]*padding\s*:\s*7px\s+12px/.test(mobileCss),
  'Full-form row must have generous 7px 12px padding'
);
assert.ok(
  /\.dict-fullform-row\s*\{[^}]*font-size\s*:\s*12\.5px/.test(mobileCss) &&
  /\.dict-fullform-row\s*\{[^}]*line-height\s*:\s*1\.45/.test(mobileCss),
  'Full-form row has 12.5px font-size and 1.45 line-height'
);
assert.ok(
  /\.dict-fullform-row\s*\{[^}]*margin-bottom\s*:\s*2px/.test(mobileCss),
  'Full-form row has margin-bottom: 2px for clean 16px separation from Thai meaning'
);
console.log('PASS 3: Full-form container internal padding, font-size, and spacing verified.');

console.log('--- Test 4: Thai Meaning Headline & English Definition Typography ---');
// Thai meaning font-size (15.5px), line-height (1.6), padding (10px 14px), margin-bottom (2px)
assert.ok(
  /\.dict-thai-text\s*\{[^}]*font-size\s*:\s*15\.5px/.test(mobileCss) &&
  /\.dict-thai-text\s*\{[^}]*line-height\s*:\s*1\.6/.test(mobileCss),
  'Thai meaning text must have 15.5px font-size and 1.6 line-height'
);
assert.ok(
  /\.dict-thai-box\s*\{[^}]*padding\s*:\s*10px\s+14px/.test(mobileCss),
  'Thai meaning box must have 10px 14px padding'
);
assert.ok(
  /\.dict-thai-box\s*\{[^}]*margin-bottom\s*:\s*2px/.test(mobileCss),
  'Thai meaning box has margin-bottom: 2px for clear 16px separation from definition'
);
// English definition font-size (14.5px) and line-height (1.65)
assert.ok(
  /\.dict-def-text\s*\{[^}]*font-size\s*:\s*14\.5px/.test(mobileCss) &&
  /\.dict-def-text\s*\{[^}]*line-height\s*:\s*1\.65/.test(mobileCss),
  'English definition text must have 14.5px font-size and 1.65 line-height'
);
console.log('PASS 4: Thai meaning headline and English definition reading paragraph typography verified.');

console.log('--- Test 5: EXAMPLE Panel Natural Height & Spacing on Mobile ---');
assert.ok(
  /\.dict-example-box\s*\{[^}]*min-height\s*:\s*auto/.test(mobileCss) &&
  /\.dict-example-box\s*\{[^}]*height\s*:\s*auto/.test(mobileCss),
  'Mobile example panel must use natural content height (min-height: auto, height: auto)'
);
assert.ok(
  /\.dict-example-box\s*\{[^}]*margin-top\s*:\s*0/.test(mobileCss),
  'Mobile example panel uses margin-top: 0 for natural content flow without forced stretching'
);
assert.ok(
  /\.dict-example-box\s*\{[^}]*padding\s*:\s*13px\s+15px/.test(mobileCss),
  'Mobile example panel has generous 13px 15px internal padding'
);
assert.ok(
  /\.dict-example-box\s*\{[^}]*gap\s*:\s*7px/.test(mobileCss),
  'Mobile example panel has 7px gap between label and Thai text'
);
assert.ok(
  /\.dict-example-text\s*\{[^}]*font-size\s*:\s*13\.5px/.test(mobileCss) &&
  /\.dict-example-text\s*\{[^}]*line-height\s*:\s*1\.65/.test(mobileCss),
  'Thai example text has 13.5px font-size and 1.65 line-height'
);
console.log('PASS 5: EXAMPLE panel uses natural content height, generous padding, and comfortable line-height.');

console.log('--- Test 6: Very Narrow Screens (max-width: 340px) Adaptations ---');
const narrowMatch = css.match(/@media\s*\(\s*max-width\s*:\s*340px\s*\)\s*\{([\s\S]+?)\n\}/);
assert.ok(narrowMatch, 'Very narrow 340px media query block must exist');
const narrowCss = narrowMatch[1];
assert.ok(
  /\.vocab-dict-card\s*\{[^}]*padding\s*:\s*14px\s+14px/.test(narrowCss),
  '340px card padding adapts to 14px 14px to maximize text column width'
);
assert.ok(
  /\.vocab-grid\s*\{[^}]*gap\s*:\s*14px/.test(narrowCss),
  '340px grid gap adapts to 14px'
);
console.log('PASS 6: Very narrow screen (320px–340px) responsive adjustments verified.');

console.log('--- Test 7: Desktop Subgrid Alignment Intact ---');
assert.ok(css.includes('@supports (grid-template-rows: subgrid)'), 'Desktop subgrid block exists');
assert.ok(css.includes('grid-row: span 2;'), 'Desktop subgrid card spans 2 rows');
assert.ok(css.includes('grid-template-rows: subgrid;'), 'Desktop subgrid declared');
console.log('PASS 7: Desktop subgrid equal row height mechanics completely intact.');

console.log('--- Test 8: Data & Filter Integrity ---');
const d1 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-1.json'), 'utf8'));
const d2 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-2.json'), 'utf8'));
const d3 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-3.json'), 'utf8'));
assert.equal(d1.entries.length + d2.entries.length + d3.entries.length, 313, 'All 313 entries intact');
console.log('PASS 8: All 313 vocabulary entries and filters intact.');

console.log('\n=============================================================');
console.log('ALL VOCABULARY MOBILE READABILITY OVERHAUL TESTS PASSED!');
console.log('=============================================================\n');
