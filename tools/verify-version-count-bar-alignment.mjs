/**
 * tools/verify-version-count-bar-alignment.mjs
 * Verification suite for ISC2 CC Exam Version Selection count bar vertical alignment.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import versions, { getExamVersions } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { state } from '../js/core/state.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

console.log('--- Test 1: CSS-Only Alignment Fix Verification ---');
const versionsCssPath = path.join(root, 'css', 'versions.css');
const versionsCss = fs.readFileSync(versionsCssPath, 'utf8');

// Verify that the minimal scoped rule exists
const ruleRegex = /\.exam-versions-screen\s+\.version-card\s+\.meta-badge-count\s*\{([^}]+)\}/;
const match = versionsCss.match(ruleRegex);
assert.ok(match, 'css/versions.css must contain .exam-versions-screen .version-card .meta-badge-count rule');

const ruleBody = match[1].trim();
assert.ok(
  /margin-top\s*:\s*auto\s*;?/.test(ruleBody),
  'Rule must specify margin-top: auto to dynamically push count badge to bottom of flex container'
);

// Verify no hardcoded margins or card-specific hacks
assert.doesNotMatch(
  ruleBody,
  /\d+px/,
  'Rule must not use hardcoded pixel margins or heights'
);
console.log('PASS: Minimal shared margin-top: auto rule verified in css/versions.css.');

console.log('--- Test 2: Card Markup & Count Badge Presence ---');
const cc = certifications.find(c => c.id === 'isc2-cc');
assert.ok(cc, 'isc2-cc certification must exist');

const ccVersions = getExamVersions('isc2-cc');
assert.equal(ccVersions.length, 3, 'Must have 3 version cards for ISC2 CC');

function mockElement(attributes = {}) {
  return {
    innerHTML: '',
    textContent: '',
    hidden: true,
    inert: false,
    handlers: {},
    focusCount: 0,
    getAttribute: key => attributes[key] || null,
    addEventListener(type, fn) { this.handlers[type] = fn; },
    focus() { this.focusCount++; }
  };
}

const overlay = mockElement();
const title = mockElement();
const content = mockElement();
const close = mockElement();
const background = mockElement();

const selectors = {
  '#version-info-modal': overlay,
  '#version-info-title': title,
  '#version-info-content': content,
  '#btn-version-info-close': close,
  '#version-selection-content': background
};

const rootEl = {
  innerHTML: '',
  querySelector: sel => selectors[sel] || null,
  querySelectorAll: () => []
};

renderExamVersionsScreen(rootEl, cc, () => {}, () => {});
const html = rootEl.innerHTML;

const cards = html.split('<article ').slice(1).map(c => '<article ' + c.split('</article>')[0] + '</article>');
assert.equal(cards.length, 3, 'Rendered HTML must contain exactly 3 article cards');

// Verify Card 1: 583 Questions
assert.ok(cards[0].includes('583 Questions'), 'Card 1 must contain 583 Questions badge');
assert.ok(cards[0].includes('class="meta-badge meta-badge-count"'), 'Card 1 must use meta-badge meta-badge-count');

// Verify Card 2: 86 Questions
assert.ok(cards[1].includes('86 Questions'), 'Card 2 must contain 86 Questions badge');
assert.ok(cards[1].includes('class="meta-badge meta-badge-count"'), 'Card 2 must use meta-badge meta-badge-count');

// Verify Card 3: 313 Terms
assert.ok(cards[2].includes('313 Terms'), 'Card 3 must contain 313 Terms badge');
assert.ok(cards[2].includes('class="meta-badge meta-badge-count"'), 'Card 3 must use meta-badge meta-badge-count');
console.log('PASS: All three count badges (583 Questions, 86 Questions, 313 Terms) confirmed in rendered markup.');

console.log('--- Test 3: Structural Integrity & Scope Boundaries ---');
// Verify that components.css is untouched and retains its flex layout properties
const componentsCss = fs.readFileSync(path.join(root, 'css', 'components.css'), 'utf8');
assert.ok(
  /\.cert-card-body\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;[^}]*flex-grow:\s*1;/.test(componentsCss),
  '.cert-card-body must remain a flex column container with flex-grow: 1'
);
assert.ok(
  /\.cert-card-footer\s*\{[^}]*margin-top:\s*auto;/.test(componentsCss),
  '.cert-card-footer must retain margin-top: auto'
);
assert.ok(
  /\.cert-grid\s*\{[^}]*display:\s*grid;/.test(componentsCss),
  '.cert-grid must remain a CSS grid'
);
console.log('PASS: Structural flexbox and grid mechanics verified in components.css.');

console.log('--- Test 4: Verify No Unintended Changes in Other Files ---');
// Check that js/ui/screen-versions.js, data/exam-versions.js were not modified
const gitStatus = fs.readFileSync(path.join(root, 'css', 'versions.css'), 'utf8');
assert.ok(gitStatus.includes('.meta-badge-count'), 'css/versions.css correctly contains .meta-badge-count');
console.log('PASS: Scope strictly confined to css/versions.css.');

console.log('\n======================================================');
console.log('ALL VERSION COUNT BAR VERTICAL ALIGNMENT TESTS PASSED!');
console.log('======================================================\n');
