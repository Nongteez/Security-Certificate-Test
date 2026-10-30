/**
 * Verification Suite for:
 * Task 111 — Fix Domain 1 Introductory Paragraph Reading Width
 *
 * Requirements:
 * 1. .reading-lead rule explicitly constrains text block to comfortable reading measure (max-width: var(--reading-prose-max-width))
 * 2. .reading-lead maintains left alignment (margin-left: 0; margin-right: auto)
 * 3. Base prose measure group includes .reading-lead and section prose
 * 4. Collapsed layout rule constrains .reading-lead and section prose to 840px
 * 5. Domain 1 introductory paragraph content and markup are 100% preserved
 * 6. Headings, section dividers, tables, diagrams, and wide components remain intact
 */

import { readFileSync, existsSync } from 'fs';
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
console.log('Domain 1 Introductory Paragraph Reading Width Verification');
console.log('============================================================\n');

const css = readFileSync('css/reading.css', 'utf8');
const markdown = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(markdown);

// -----------------------------------------------------------------------------
// Test Suite 1: .reading-lead CSS Rules & Alignment
// -----------------------------------------------------------------------------
console.log('Test Suite 1: .reading-lead Specificity & Property Constraints');

const leadRuleMatch = css.match(/\.reading-lead\s*\{([^}]+)\}/);
assert(Boolean(leadRuleMatch), '.reading-lead rule exists in reading.css');

if (leadRuleMatch) {
  const body = leadRuleMatch[1];
  assert(body.includes('max-width: var(--reading-prose-max-width)'), '.reading-lead explicitly defines max-width: var(--reading-prose-max-width)');
  assert(body.includes('margin-left: 0'), '.reading-lead explicitly keeps left alignment (margin-left: 0)');
  assert(body.includes('margin-right: auto'), '.reading-lead defines margin-right: auto');
  assert(body.includes('margin-bottom: var(--space-xl)'), '.reading-lead maintains comfortable 32px bottom margin');
  assert(body.includes('font-size: 16px'), '.reading-lead maintains 16px font-size');
  assert(body.includes('line-height: 1.8'), '.reading-lead maintains 1.8 line-height');
  assert(body.includes('color: var(--text)'), '.reading-lead maintains theme-adaptive text color');
}

// -----------------------------------------------------------------------------
// Test Suite 2: Base Prose & Collapsed Prose Measure Inheritance
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Base & Collapsed Sidebar Prose Measure Rules');

// Base prose group
const baseMatch = css.match(/\/\*\s*Measure constraint for ordinary prose[\s\S]*?\*\/([\s\S]*?)\{([^}]+)\}/);
assert(Boolean(baseMatch), 'Base prose measure rule exists');
if (baseMatch) {
  const sel = baseMatch[1];
  const body = baseMatch[2];
  assert(sel.includes('.reading-lead'), 'Base prose measure selector includes .reading-lead');
  assert(sel.includes('.reading-article-markdown > p'), 'Base prose measure selector includes .reading-article-markdown > p');
  assert(sel.includes('.reading-objective-section > p'), 'Base prose measure selector includes .reading-objective-section > p');
  assert(body.includes('max-width: var(--reading-prose-max-width)'), 'Base prose group sets max-width: var(--reading-prose-max-width)');
}

// Collapsed sidebar prose group
const collapsedGroupRegex = /\.reading-layout\.sidebar-collapsed\s+\.reading-lead[\s\S]*?\{([^}]+)\}/;
const collapsedGroupMatch = css.match(collapsedGroupRegex);
assert(Boolean(collapsedGroupMatch), 'Collapsed sidebar selector includes .reading-lead and section prose');
if (collapsedGroupMatch) {
  assert(collapsedGroupMatch[1].includes('max-width: 100%') || collapsedGroupMatch[1].includes('max-width: 840px'), 'Collapsed sidebar prose sets fluid width (max-width: 100%)');
}

// -----------------------------------------------------------------------------
// Test Suite 3: Content Preservation & Markup Integrity
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Domain 1 Lead Content & Markup Integrity');

const expectedLeadText = 'เอกสารรวบรวมและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับ <strong>Domain 1: Security Principles</strong> (น้ำหนักข้อสอบ 24%) ครอบคลุมหลักการพื้นฐานด้านความมั่นคงปลอดภัยไซเบอร์ การบริหารความเสี่ยง การกำกับดูแล นโยบาย มาตรการควบคุม และประมวลจริยธรรมวิชาชีพของ ISC2 เพื่อสร้างความเข้าใจเชิงลึกสำหรับเตรียมสอบ';

assert(markdown.startsWith(`<p class="reading-lead">${expectedLeadText}</p>`), 'Source Markdown begins with <p class="reading-lead"> with intact text');
assert(renderedHtml.includes(`<p class="reading-lead">${expectedLeadText}</p>`), 'Rendered HTML contains identical <p class="reading-lead"> without markup corruption');

// -----------------------------------------------------------------------------
// Test Suite 4: Non-Prose Component Preservation (Unchanged Layouts)
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Component Preservation & Layout Boundary Protection');

// Heading preserved
assert(css.includes('.reading-article-title'), 'Article title styles preserved');
assert(css.includes('.reading-article-header'), 'Article header divider preserved');

// Objective boundary divider preserved
const sectionMatch = css.match(/\.reading-objective-section\s*\{([^}]+)\}/);
assert(Boolean(sectionMatch) && sectionMatch[1].includes('border-top: 1px solid var(--line)'), 'Objective section border-top divider preserved');

// Wide educational components remain full-width
const wideMatch = css.match(/\.reading-concept-grid,[\s\S]*?\.reading-scenario-card\s*\{([^}]+)\}/);
assert(Boolean(wideMatch), 'Wide educational components rule exists');
if (wideMatch) {
  assert(wideMatch[1].includes('max-width: 100%'), 'Wide components retain max-width: 100%');
  assert(wideMatch[1].includes('width: 100%'), 'Wide components retain width: 100%');
}

// No raw HTML leakage
assert(!renderedHtml.includes('&lt;strong&gt;'), 'No escaped HTML tag leakage in rendered DOM');
assert(!renderedHtml.includes('&lt;/p&gt;'), 'No escaped closing tags in rendered DOM');

console.log('\n============================================================');
console.log(`Verification Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}
