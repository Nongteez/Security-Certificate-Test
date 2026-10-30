/**
 * Verification Suite for:
 * Task 114 — Fix Inconsistent Text Alignment and Reading Width Across Domain 1
 *
 * Requirements:
 * 1. Coherent, intentional reading-width system for Domain 1
 * 2. Normal prose blocks (.reading-lead, objective lead, section paragraphs, intro labels)
 *    begin at the exact same left content edge and follow consistent width rules (max-width: 100%)
 * 3. Preserve natural, readable line lengths without text-align: justify
 * 4. Wide educational components (tables, diagrams, cards) remain 100% width
 * 5. Collapsed sidebar state provides balanced fluid width without 300px voids
 * 6. Light and Dark themes maintain consistent alignment and contrast
 * 7. Source educational content in Domain 1 preserved 100%
 */

import { readFileSync } from 'fs';
import { parseMarkdown } from '../js/core/markdown-parser.js';

let passes = 0;
let failures = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failures++;
  }
}

console.log('============================================================');
console.log('Task 114: Text Alignment & Reading Width Verification Suite');
console.log('============================================================\n');

const css = readFileSync('css/reading.css', 'utf8');
const markdown = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(markdown);

// -----------------------------------------------------------------------------
// Test Suite 1: Design Tokens & Fluid Reading System
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Design Tokens & Reading Width Architecture');

assert(css.includes('--reading-screen-max-width: 1560px'), ':root defines --reading-screen-max-width: 1560px');
assert(css.includes('--reading-article-max-width: 1080px'), ':root defines --reading-article-max-width: 1080px');
assert(css.includes('--reading-prose-max-width: 100%'), ':root defines --reading-prose-max-width: 100%');
assert(!css.includes('text-align: justify'), 'CSS forbids text-align: justify (natural text wrapping preserved)');

// -----------------------------------------------------------------------------
// Test Suite 2: Base Prose Measure Group & Selector Completeness
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Base Prose Measure Group & Selector Completeness');

const baseGroupRegex = /\/\*\s*Measure constraint for ordinary prose[\s\S]*?\*\/([\s\S]*?)\{([^}]+)\}/;
const baseMatch = css.match(baseGroupRegex);
assert(Boolean(baseMatch), 'Base prose measure rule exists');

if (baseMatch) {
  const sel = baseMatch[1];
  const body = baseMatch[2];
  assert(sel.includes('.reading-lead'), 'Base prose selector includes .reading-lead');
  assert(sel.includes('.reading-article-markdown > p'), 'Base prose selector includes .reading-article-markdown > p');
  assert(sel.includes('.reading-objective-section > p'), 'Base prose selector includes .reading-objective-section > p');
  assert(sel.includes('.reading-intro-label'), 'Base prose selector includes .reading-intro-label');
  assert(body.includes('max-width: var(--reading-prose-max-width)'), 'Base prose group sets max-width: var(--reading-prose-max-width)');
}

// -----------------------------------------------------------------------------
// Test Suite 3: .reading-lead Specificity & Lead Styling Protection
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: .reading-lead Specificity & Lead Typography');

const leadRuleRegex = /\.reading-body\s+\.reading-lead,\s*\.reading-lead\s*\{([\s\S]*?)\}/;
const leadMatch = css.match(leadRuleRegex);
assert(Boolean(leadMatch), '.reading-body .reading-lead rule exists with high specificity');

if (leadMatch) {
  const body = leadMatch[1];
  assert(body.includes('font-size: 16px'), '.reading-lead preserves 16px font-size');
  assert(body.includes('line-height: 1.8'), '.reading-lead preserves 1.8 line-height');
  assert(body.includes('margin-bottom: var(--space-xl)'), '.reading-lead preserves 32px bottom margin');
  assert(body.includes('margin-left: 0'), '.reading-lead preserves left alignment (margin-left: 0)');
}

// -----------------------------------------------------------------------------
// Test Suite 4: Collapsed Sidebar Fluid Layout (Zero 300px Voids)
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Collapsed Sidebar Fluid Measure');

const collapsedRegex = /\.reading-layout\.sidebar-collapsed\s+\.reading-lead[\s\S]*?\{([^}]+)\}/;
const collapsedMatch = css.match(collapsedRegex);
assert(Boolean(collapsedMatch), 'Collapsed sidebar selector includes prose elements');

if (collapsedMatch) {
  assert(collapsedMatch[1].includes('max-width: 100%'), 'Collapsed sidebar prose sets max-width: 100%');
}

// -----------------------------------------------------------------------------
// Test Suite 5: Content & Component Preservation
// -----------------------------------------------------------------------------
console.log('\nTest Suite 5: Content & Educational Component Preservation');

assert(markdown.includes('Domain 1: Security Principles'), 'Domain 1 source markdown title preserved');
assert(markdown.includes('Information Security (InfoSec)'), 'Section 1.1.1 InfoSec content preserved');
assert(markdown.includes('Asset (ทรัพย์สิน)'), 'Table vocabulary content preserved');
assert(renderedHtml.includes('class="reading-lead"'), 'Rendered DOM includes .reading-lead');
assert(renderedHtml.includes('class="reading-table-wrapper"'), 'Rendered DOM includes .reading-table-wrapper');
assert(renderedHtml.includes('class="reading-intro-label"'), 'Rendered DOM includes .reading-intro-label');

console.log('\n============================================================');
console.log(`Task 114 Verification Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}

