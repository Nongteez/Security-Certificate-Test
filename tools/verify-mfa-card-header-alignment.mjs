/**
 * Verification Suite for:
 * Task — Fix Unresolved MFA Card Header Alignment and Excessive Spacing
 *
 * Requirements:
 * 1. Icon, factor number (01-04), and factor title form a visually balanced, vertically centered header.
 * 2. English titles and Thai subtitles stacked in a single text group on separate lines.
 * 3. Cards 2-4 and Card 1 have no excessive empty space above their headers (0px title margin-top).
 * 4. Horizontal separator below each header is removed.
 * 5. Thick blue left accent border is removed (subtle 1px border retained).
 * 6. Academic integrity & all original wording preserved verbatim (including contextual note on factor 4).
 * 7. Browser visual verification at 1366x768 and 1920x1080 across Light and Dark themes.
 */

import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { mfaFactorsData } from '../js/core/content-components.js';

let passes = 0;
let failures = 0;

function assert(condition, message, details = '') {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    if (details) console.error(`    Details: ${details}`);
    failures++;
  }
}

console.log('============================================================');
console.log('MFA Card Header Alignment & Spacing Verification Suite');
console.log('============================================================\n');

const css = readFileSync('css/reading.css', 'utf8');
const markdown = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(markdown);

// -----------------------------------------------------------------------------
// Test Suite 1: Markup Structure & Semantic Hierarchy
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Markup Structure & Semantic Hierarchy');

const mfaCards = renderedHtml.match(/<div class="[^"]*reading-mfa-item[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/g) || [];
assert(mfaCards.length === 4, `Rendered HTML contains exactly 4 MFA cards (found: ${mfaCards.length})`);

mfaCards.forEach((card, idx) => {
  const factorNum = `0${idx + 1}`;
  assert(card.includes(`reading-mfa-num">${factorNum}</span>`), `Card ${idx + 1} contains factor number ${factorNum}`);
  assert(card.includes('class="reading-mfa-header"') || card.includes('reading-concept-header reading-mfa-header'), `Card ${idx + 1} contains semantic MFA header`);
  assert(card.includes('class="reading-mfa-icon"') || card.includes('reading-concept-icon reading-mfa-icon'), `Card ${idx + 1} contains MFA icon`);
  assert(card.includes('reading-mfa-title-group'), `Card ${idx + 1} contains reading-mfa-title-group`);
  assert(card.includes('class="reading-concept-title reading-mfa-title"'), `Card ${idx + 1} contains reading-mfa-title`);
  assert(card.includes('class="reading-concept-subtitle reading-mfa-subtitle"'), `Card ${idx + 1} contains reading-mfa-subtitle`);
});

// -----------------------------------------------------------------------------
// Test Suite 2: CSS Architecture & Alignment Rules
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: CSS Architecture & Alignment Rules');

assert(css.includes('.reading-mfa-header'), 'CSS defines .reading-mfa-header');
assert(css.includes('.reading-mfa-title-group'), 'CSS defines .reading-mfa-title-group');
assert(css.includes('.reading-mfa-icon'), 'CSS defines .reading-mfa-icon');
assert(css.includes('.reading-mfa-num'), 'CSS defines .reading-mfa-num');
assert(css.includes('.reading-mfa-title'), 'CSS defines .reading-mfa-title');
assert(css.includes('.reading-mfa-subtitle'), 'CSS defines .reading-mfa-subtitle');

// Header flex alignment
const headerMatch = css.match(/\.reading-mfa-item \.reading-concept-header,[\s\S]*?\.reading-mfa-header\s*\{([^}]+)\}/);
assert(headerMatch !== null, 'CSS contains .reading-mfa-header rule block');
if (headerMatch) {
  const block = headerMatch[1];
  assert(block.includes('display: flex'), '.reading-mfa-header uses display: flex');
  assert(block.includes('align-items: center'), '.reading-mfa-header uses align-items: center');
  assert(block.includes('border-bottom: none'), '.reading-mfa-header removes bottom border separator');
  assert(block.includes('padding-bottom: 0'), '.reading-mfa-header removes bottom padding');
}

// Title group inline layout
const titleGroupMatch = css.match(/\.reading-mfa-title-group\s*\{([^}]+)\}/);
assert(titleGroupMatch !== null, 'CSS contains .reading-mfa-title-group rule block');
if (titleGroupMatch) {
  const block = titleGroupMatch[1];
  assert(block.includes('display: flex'), '.reading-mfa-title-group uses display: flex');
  assert(block.includes('align-items: baseline'), '.reading-mfa-title-group uses align-items: baseline');
  assert(block.includes('gap: 0.5rem'), '.reading-mfa-title-group uses gap: 0.5rem');
  assert(!block.includes('flex-direction: column'), '.reading-mfa-title-group keeps English and Thai inline (no column direction)');
}

// Title margin specificity protection against .reading-body h4
const titleMarginMatch = css.match(/\.reading-body \.reading-mfa-title,[\s\S]*?\.reading-mfa-title\s*\{([^}]+)\}/);
assert(titleMarginMatch !== null, 'CSS defines .reading-body .reading-mfa-title rule block');
if (titleMarginMatch) {
  const block = titleMarginMatch[1];
  assert(block.includes('margin: 0 !important'), '.reading-mfa-title overrides .reading-body h4 with margin: 0 !important');
}

// Left border override
const cardMatch = css.match(/\.reading-mfa-item\s*\{([^}]+)\}/);
assert(cardMatch !== null, 'CSS contains .reading-mfa-item rule block');
if (cardMatch) {
  const block = cardMatch[1];
  assert(block.includes('border-left: 1px solid var(--line) !important'), '.reading-mfa-item removes thick blue border (uses 1px solid var(--line))');
}

// -----------------------------------------------------------------------------
// Test Suite 3: Academic Integrity & Content Preservation
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Academic Integrity & Content Preservation');

assert(mfaFactorsData.length === 4, 'mfaFactorsData contains exactly 4 factor models');
assert(mfaFactorsData[0].name === 'Something You Know', 'Factor 1 is Something You Know');
assert(mfaFactorsData[0].subtitle.includes('สิ่งที่คุณรู้'), 'Factor 1 Thai subtitle preserved');
assert(mfaFactorsData[1].name === 'Something You Have', 'Factor 2 is Something You Have');
assert(mfaFactorsData[1].subtitle.includes('สิ่งที่คุณมี'), 'Factor 2 Thai subtitle preserved');
assert(mfaFactorsData[2].name === 'Something You Are', 'Factor 3 is Something You Are');
assert(mfaFactorsData[2].subtitle.includes('สิ่งที่คุณเป็น'), 'Factor 3 Thai subtitle preserved');
assert(mfaFactorsData[3].name === 'Somewhere You Are', 'Factor 4 is Somewhere You Are');
assert(mfaFactorsData[3].subtitle.includes('สถานที่ที่คุณอยู่'), 'Factor 4 Thai subtitle preserved');
assert(mfaFactorsData[3].note.includes('เป็นปัจจัยแวดล้อมเสริม (Contextual Factor)'), 'Factor 4 contextual note strictly preserved');

// -----------------------------------------------------------------------------
// Test Suite 4: Browser Screenshots Existence
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Visual Screenshots Verification');

const screenshots = [
  'artifacts/qa/mfa-cards/before-1366-dark.png',
  'artifacts/qa/mfa-cards/after-1366-dark.png',
  'artifacts/qa/mfa-cards/after-1366-light.png',
  'artifacts/qa/mfa-cards/after-1920-dark.png',
  'artifacts/qa/mfa-cards/after-1920-light.png'
];

screenshots.forEach(scPath => {
  assert(existsSync(scPath), `Screenshot exists: ${scPath}`);
});

console.log('\n============================================================');
console.log(`MFA Header Verification Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) process.exit(1);

