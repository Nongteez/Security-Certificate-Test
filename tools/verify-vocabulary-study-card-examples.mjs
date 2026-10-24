/**
 * tools/verify-vocabulary-study-card-examples.mjs
 * Verification suite for Vocabulary Study Card Example alignment and typography.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

console.log('--- Test 1: CSS Sizing & Spacing Properties ---');
const cssPath = path.join(root, 'css', 'vocabulary.css');
const css = fs.readFileSync(cssPath, 'utf8');

// Match .dict-example-box desktop rule
const exBoxMatch = css.match(/\.dict-example-box\s*\{([^}]+)\}/);
assert.ok(exBoxMatch, '.dict-example-box rule must exist in css/vocabulary.css');
const exBoxBody = exBoxMatch[1];

assert.ok(
  /margin-top\s*:\s*auto\s*;?/.test(exBoxBody),
  '.dict-example-box must specify margin-top: auto to position toward bottom of flex card'
);
assert.ok(
  /min-height\s*:\s*120px\s*;?/.test(exBoxBody),
  '.dict-example-box must specify min-height: 120px for shared horizontal alignment and breathing room'
);
assert.ok(
  /padding\s*:\s*10px\s+14px\s*;?/.test(exBoxBody),
  '.dict-example-box must have generous padding (10px 14px)'
);
assert.ok(
  /gap\s*:\s*6px\s*;?/.test(exBoxBody),
  '.dict-example-box must have 6px gap between lead and text'
);

// Match .dict-example-text desktop rule
const exTextMatch = css.match(/\.dict-example-text\s*\{([^}]+)\}/);
assert.ok(exTextMatch, '.dict-example-text rule must exist in css/vocabulary.css');
const exTextBody = exTextMatch[1];

assert.ok(
  /line-height\s*:\s*1\.6\s*;?/.test(exTextBody),
  '.dict-example-text must specify line-height: 1.6 for comfortable Thai typography'
);
assert.ok(
  /overflow-wrap\s*:\s*break-word\s*;?/.test(exTextBody) && /word-break\s*:\s*break-word\s*;?/.test(exTextBody),
  '.dict-example-text must allow natural word wrapping'
);

console.log('PASS: Desktop .dict-example-box and .dict-example-text properties verified.');

console.log('--- Test 2: Mobile Responsive Behavior ---');
// Match mobile media query overrides
const mobileMatch = css.match(/@media\s*\(\s*max-width\s*:\s*480px\s*\)\s*\{([\s\S]+?)\n\}/);
assert.ok(mobileMatch, 'Mobile 480px media query must exist');
const mobileBlock = mobileMatch[1];

assert.ok(
  /\.dict-example-box\s*\{[^}]*min-height\s*:\s*auto\s*;?/.test(mobileBlock),
  'Mobile .dict-example-box must reset min-height to auto for single column cards'
);
assert.ok(
  /\.dict-example-text\s*\{[^}]*line-height\s*:\s*(?:1\.55|1\.6|1\.65)\s*;?/.test(mobileBlock),
  'Mobile .dict-example-text must have appropriate mobile line-height'
);
console.log('PASS: Mobile responsive adaptations verified.');

console.log('--- Test 3: Data Parity & Markup Integrity ---');
const d1 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-1.json'), 'utf8'));
const d2 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-2.json'), 'utf8'));
const d3 = JSON.parse(fs.readFileSync(path.join(root, 'content/isc2-cc-2026/vocabulary/domain-3.json'), 'utf8'));
const all = [...d1.entries, ...d2.entries, ...d3.entries];

assert.equal(all.length, 313, 'Total entries must be 313');
const missingEx = all.filter(e => !(e.example_th && e.example_th.trim()));
assert.equal(missingEx.length, 0, 'Every entry must have a non-empty example_th');

const screenVocab = fs.readFileSync(path.join(root, 'js/ui/screen-vocabulary.js'), 'utf8');
assert.ok(screenVocab.includes('class="dict-example-box"'), 'Markup must render dict-example-box');
assert.ok(screenVocab.includes('class="dict-example-lead"'), 'Markup must render dict-example-lead');
assert.ok(screenVocab.includes('class="dict-example-text"'), 'Markup must render dict-example-text');
console.log('PASS: All 313 entries confirmed with Thai example markup.');

console.log('--- Test 4: Preservation of Uncommitted Customizations ---');
assert.ok(css.includes('gap: 35px;'), 'User uncommitted change on .flashcard-back-body (gap: 35px) preserved');
assert.ok(css.includes('.vocab-filters-collapse'), 'Redesigned filter controls preserved');
console.log('PASS: All uncommitted customizations and existing features preserved intact.');

console.log('\n======================================================');
console.log('ALL VOCABULARY STUDY CARD EXAMPLE ALIGNMENT TESTS PASSED!');
console.log('======================================================\n');
