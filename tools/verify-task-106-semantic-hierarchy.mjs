/**
 * Verification Suite for Task 106:
 * Semantic List Hierarchy & Risk Management Lifecycle Synchronization
 */

import { readFileSync } from 'fs';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

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
console.log('Task 106: Semantic List Hierarchy & Risk Lifecycle Tests');
console.log('============================================================\n');

const markdown = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const html = parseMarkdown(markdown);

// -----------------------------------------------------------------------------
// Test Suite 1: Section 1.2.3 Stage Count Consistency & Intro Synchronization
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Stage Count Consistency (Diagram vs. Text)');
const section123Match = markdown.match(/### 1\.2\.3 Risk Management Lifecycle([\s\S]*?)### 1\.2\.4 Risk Treatment/);
assert(Boolean(section123Match), 'Section 1.2.3 exists in Domain 1 Markdown source');

const section123Md = section123Match ? section123Match[1] : '';
assert(section123Md.includes('วงจรชีวิตการบริหารความเสี่ยงประกอบด้วย 5 ขั้นตอนหลัก'), 'Introduction explicitly states 5 main stages');
assert(html.includes('The 5-Stage Risk Management Lifecycle'), 'Diagram title explicitly says "The 5-Stage Risk Management Lifecycle"');
assert(diagrams.riskLifecycle.includes('STAGE 05'), 'Diagram includes STAGE 05');
assert(diagrams.riskLifecycle.includes('Communicate &amp; Report'), 'Diagram STAGE 05 has Communicate & Report');

// -----------------------------------------------------------------------------
// Test Suite 2: Diagram Labels Matching Validated Stage Names & Feedback Loop
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Diagram Labels & Cyclic Feedback');
assert(diagrams.riskLifecycle.includes('STAGE 01') && diagrams.riskLifecycle.includes('Identify'), 'Diagram contains STAGE 01 Identify');
assert(diagrams.riskLifecycle.includes('STAGE 02') && diagrams.riskLifecycle.includes('Assess / Analyze'), 'Diagram contains STAGE 02 Assess / Analyze');
assert(diagrams.riskLifecycle.includes('STAGE 03') && diagrams.riskLifecycle.includes('Treat / Respond'), 'Diagram contains STAGE 03 Treat / Respond');
assert(diagrams.riskLifecycle.includes('STAGE 04') && diagrams.riskLifecycle.includes('Monitor &amp; Review'), 'Diagram contains STAGE 04 Monitor & Review');
assert(diagrams.riskLifecycle.includes('STAGE 05') && diagrams.riskLifecycle.includes('Communicate &amp; Report'), 'Diagram contains STAGE 05 Communicate & Report');
assert(diagrams.riskLifecycle.includes('diag-arrow-dash'), 'Diagram includes continuous dashed feedback loop');
assert(diagrams.riskLifecycle.includes('Continuous Iterative Process'), 'Diagram explicitly labels continuous iterative process');

// -----------------------------------------------------------------------------
// Test Suite 3: Nested Semantic Structure & Elimination of Flattened Numbering
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Nested Semantic Structure & No False 1-9 Numbering');

// Extract the <ol> rendered for Section 1.2.3
const section123Html = html.substring(html.indexOf('1.2.3 Risk Management Lifecycle'), html.indexOf('1.2.4 Risk Treatment'));
const olMatch = section123Html.match(/<ol>([\s\S]*?)<\/ol>/);
assert(Boolean(olMatch), 'Section 1.2.3 contains an <ol> list');

if (olMatch) {
  const olContent = olMatch[1];
  
  // Count direct <li> tags in the <ol>
  // Strip nested <ul>...</ul> to inspect only top-level items
  const strippedOl = olContent.replace(/<ul>[\s\S]*?<\/ul>/g, '');
  const topLevelItems = (strippedOl.match(/<li>/g) || []).length;
  assert(topLevelItems === 5, `Top-level <ol> has exactly 5 direct lifecycle items (found: ${topLevelItems})`);

  // Verify Stage 4 contains nested <ul> for Trigger Events
  const stage4Match = olContent.match(/<li><strong>Risk Monitoring (?:&amp;|&) Review:<\/strong>[\s\S]*?<ul>([\s\S]*?)<\/ul><\/li>/);
  assert(Boolean(stage4Match), 'Stage 4 contains a properly nested <ul> subordinate list');

  if (stage4Match) {
    const triggerEventsHtml = stage4Match[1];
    const triggerItemCount = (triggerEventsHtml.match(/<li>/g) || []).length;
    assert(triggerItemCount === 4, `Trigger Events nested list contains exactly 4 subordinate bullet items (found: ${triggerItemCount})`);
    assert(triggerEventsHtml.includes('New Technology'), 'Trigger Events include New Technology');
    assert(triggerEventsHtml.includes('Major Software Upgrade'), 'Trigger Events include Major Software Upgrade');
    assert(triggerEventsHtml.includes('New Laws or Regulations'), 'Trigger Events include New Laws or Regulations');
    assert(triggerEventsHtml.includes('Zero-day Vulnerabilities'), 'Trigger Events include Emerging Threats / Zero-day');
  }

  // Verify Stage 5 is top-level item 5 (NOT item 9)
  const stage5Match = olContent.match(/<li><strong>Risk Communication (?:&amp;|&) Reporting:<\/strong>/);
  assert(Boolean(stage5Match), 'Risk Communication & Reporting is top-level Stage 5');
}

// -----------------------------------------------------------------------------
// Test Suite 4: Academic Clarification & Distinction Callout
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Academic Clarification on 4 vs 5 Stage Model');
assert(html.includes('4 vs. 5 Lifecycle Stages'), 'Academic note on 4 vs. 5 lifecycle stages is present');
assert(html.includes('ISO 31000') || html.includes('NIST'), 'Academic note references authoritative frameworks (NIST / ISO 31000)');

// -----------------------------------------------------------------------------
// Test Suite 5: General Nested List Parsing Integrity in Markdown Parser
// -----------------------------------------------------------------------------
console.log('\nTest Suite 5: Markdown Parser Generic Nested List Support');
const testMd = `
1. Step One
2. Step Two
   - Sub A
   - Sub B
3. Step Three
`;
const testHtml = parseMarkdown(testMd);
assert(testHtml.includes('<ol><li>Step One</li><li>Step Two<ul><li>Sub A</li><li>Sub B</li></ul></li><li>Step Three</li></ol>'),
  'Generic nested unordered list inside ordered list produces clean W3C HTML');

const testNestedUl = `
- Item 1
  - Child 1A
  - Child 1B
- Item 2
`;
const testNestedUlHtml = parseMarkdown(testNestedUl);
assert(testNestedUlHtml.includes('<ul><li>Item 1<ul><li>Child 1A</li><li>Child 1B</li></ul></li><li>Item 2</li></ul>'),
  'Generic nested unordered list inside unordered list produces clean W3C HTML');

// -----------------------------------------------------------------------------
// Test Suite 6: Tag Balance & Preservation of Formulas/Currency
// -----------------------------------------------------------------------------
console.log('\nTest Suite 6: DOM Health & Preservation Integrity');
assert(!html.includes('<li>5. **Risk Communication'), 'No raw unparsed markdown numbering leaked into list item');
assert(!html.includes('STAGE 04</text>\n      <text x="605" y="67" class="diag-text-title" text-anchor="middle">Monitor &amp; Review</text>\n      <text x="605" y="82" class="diag-text-sub" text-anchor="middle">ติดตาม &amp; ทบทวนสม่ำเสมอ</text>\n\n      <!-- Feedback Loop 4 -> 1 -->'),
  'Obsolete 4-stage diagram was replaced');
assert(html.includes('$SLE = AV \\times EF$') || html.includes('SLE = AV x EF') || html.includes('AV \\times EF'), 'Formula SLE = AV x EF intact');
assert(html.includes('$10,000') && html.includes('$5,000'), 'Currency amounts preserved');

console.log('\n============================================================');
console.log(`Task 106 Verification Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}
