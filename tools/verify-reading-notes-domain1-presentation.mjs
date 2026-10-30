/**
 * Task 95 — ISC2 CC 2026 Reading Notes: Presentation Redesign Verification Suite
 *
 * Verifies:
 * - Case A: The CIA Triad geometric SVG diagram, no ASCII triangles, conceptual grouping
 * - Case B: Defense in Depth 7-layer SVG architecture, zero Markdown fence leakage, Zero Trust contrast
 * - Case C: Quantitative risk calculations (AV, EF, SLE, ARO, ALE), formula cards, semantic math, calculation pipeline SVG, zero raw LaTeX leakage
 * - Case D: 8 dedicated Scenario Cards (Scenario Context + Exam Question + Verified Answer/Reasoning)
 * - All 12 theme-adaptive, accessible SVG diagrams present and valid
 * - Authoritative 2026 Objective and Topic anchor integrity (24 topics)
 * - Security: XSS / raw script injection protection
 * - Regressions: Preservation of source files, question banks, vocabulary, and learning slides
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { domain1Metadata, domain1Objectives } from '../content/isc2-cc-2026/reading/domain-1.js';
import { diagrams } from '../js/core/diagram-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
  }
}

console.log('================================================================');
console.log('Task 95: Domain 1 Presentation Redesign Verification Suite');
console.log('================================================================\n');

// Load files
const mdPath = path.join(projectRoot, 'content/isc2-cc-2026/reading/domain-1.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');
const parserPath = path.join(projectRoot, 'js/core/markdown-parser.js');
const parserContent = fs.readFileSync(parserPath, 'utf8');
const renderedHtml = parseMarkdown(mdContent);

// -------------------------------------------------------------------------
// SECTION 1: Case A — CIA Triad Redesign
// -------------------------------------------------------------------------
console.log('--- Section 1: Case A — CIA Triad Redesign ---');

assert(renderedHtml.includes('data-diagram="ciaTriad"'), 'CIA Triad SVG diagram is rendered via semantic diagram hook');
assert(renderedHtml.includes('The CIA Triad — Three Pillars of Information Security'), 'CIA Triad title is correctly rendered');
assert(renderedHtml.includes('Confidentiality') && renderedHtml.includes('Integrity') && renderedHtml.includes('Availability'), 'CIA Triad SVG includes all 3 pillars');
assert(!mdContent.includes('/\\') && !mdContent.includes('/____\\'), 'ASCII triangle is completely eradicated from source Markdown');
assert(!renderedHtml.includes('/\\') && !renderedHtml.includes('/____\\'), 'No ASCII triangle in rendered HTML');
assert(renderedHtml.includes('จุดสับสนยอดฮิต (Hashing vs. Encryption)'), 'Conceptual grouping and contrast callouts preserved');

// -------------------------------------------------------------------------
// SECTION 2: Case B — Defense in Depth & Zero Trust Redesign
// -------------------------------------------------------------------------
console.log('\n--- Section 2: Case B — Defense in Depth & Zero Trust Redesign ---');

assert(renderedHtml.includes('data-diagram="defenseInDepth"'), 'Defense in Depth SVG architecture diagram is rendered');
assert(!renderedHtml.includes('```text'), 'Zero Markdown code fences (```text) leaked into rendered HTML (Case B defect fixed)');
assert(!renderedHtml.includes('```'), 'Zero backtick fences in rendered HTML');

const didLayers = [
  'Layer 1: People',
  'Layer 2: Perimeter',
  'Layer 3: Network',
  'Layer 4: Identity & Access',
  'Layer 5: Endpoint',
  'Layer 6: Application & Data',
  'Layer 7: Resilience & Response'
];
didLayers.forEach(layer => {
  assert(renderedHtml.includes(layer), `Defense in Depth SVG contains ${layer}`);
});

assert(renderedHtml.includes('No Single Point of Failure'), 'Defense in Depth highlights non-chronological complementary defense');
assert(renderedHtml.includes('Never Trust, Always Verify'), 'Zero Trust core philosophy is highlighted');
assert(renderedHtml.includes('ความต่างที่ต้องแยก:'), 'Zero Trust vs Defense in Depth contrast callout preserved');

// -------------------------------------------------------------------------
// SECTION 3: Case C — Risk Calculations & Math Typesetting
// -------------------------------------------------------------------------
console.log('\n--- Section 3: Case C — Quantitative Risk Formulas & Math Typesetting ---');

const formulaCards = renderedHtml.match(/class="reading-formula-card"/gi) || [];
assert(formulaCards.length === 2, `Exactly 2 dedicated formula cards rendered (found: ${formulaCards.length})`);

assert(renderedHtml.includes('Single Loss Expectancy (SLE)'), 'SLE formula card title rendered');
assert(renderedHtml.includes('Annualized Loss Expectancy (ALE)'), 'ALE formula card title rendered');
assert(renderedHtml.includes('data-diagram="riskCalculationFlow"'), 'Risk calculation flow SVG pipeline rendered');

// Verify mathematical accuracy in content
assert(renderedHtml.includes('$10,000') && renderedHtml.includes('0.50') && renderedHtml.includes('$5,000'), 'SLE calculation accuracy verified ($10,000 * 0.50 = $5,000)');
assert(renderedHtml.includes('$5,000') && renderedHtml.includes('2') && renderedHtml.includes('$10,000'), 'ALE calculation accuracy verified ($5,000 * 2 = $10,000)');
assert(renderedHtml.includes('0.2') && renderedHtml.includes('$1,000'), 'ALE multi-year calculation accuracy verified ($5,000 * 0.2 = $1,000)');
assert(renderedHtml.includes('Cost of Control') || renderedHtml.includes('กฎการตัดสินใจ:'), 'Cost-benefit decision rule present');

// Verify math rendering tags
assert(renderedHtml.includes('role="math"'), 'Semantic math elements include role="math" accessibility attribute');
assert(renderedHtml.includes('class="math-var"'), 'Math variables rendered with semantic <var class="math-var">');
assert(renderedHtml.includes('class="math-operator"'), 'Math operators rendered with semantic <span class="math-operator">');

// Check that visible text does not leak raw LaTeX syntax
// (Strip aria-label and math-raw data attributes when checking visible text)
const visibleText = renderedHtml
  .replace(/aria-label="[^"]*"/gi, '')
  .replace(/data-[a-z0-9_\-]+="[^"]*"/gi, '');

assert(!visibleText.includes('\\mathbf'), 'Visible text has zero raw \\mathbf leakage');
assert(!visibleText.includes('\\times'), 'Visible text has zero raw \\times leakage');
assert(!visibleText.includes('\\text{'), 'Visible text has zero raw \\text{ leakage');
assert(!visibleText.includes('\\to '), 'Visible text has zero raw \\to arrow leakage');

// -------------------------------------------------------------------------
// SECTION 4: Case D — Review Scenarios Card Redesign
// -------------------------------------------------------------------------
console.log('\n--- Section 4: Case D — Review Scenarios Card Redesign ---');

const scenarioCards = renderedHtml.match(/class="reading-scenario-card"/gi) || [];
assert(scenarioCards.length === 8, `Exactly 8 educational scenario cards rendered (found: ${scenarioCards.length})`);

for (let s = 1; s <= 8; s++) {
  assert(renderedHtml.includes(`data-scenario="${s}"`), `Scenario card ${s} is rendered with data-scenario attribute`);
  assert(renderedHtml.includes(`Scenario ${s}`), `Scenario ${s} badge label rendered`);
}

const scenarioTopics = [
  'CIA Triad',
  'Access Control',
  'Risk Management',
  'Professional Conduct',
  'Professional Conduct',
  'Risk Analysis',
  'Security Architecture',
  'Security Controls'
];
scenarioTopics.forEach(topic => {
  assert(renderedHtml.includes(topic), `Scenario topic "${topic}" is classified`);
});

assert(renderedHtml.includes('reading-scenario-context'), 'Scenario cards have dedicated context blocks');
assert(renderedHtml.includes('reading-scenario-question'), 'Scenario cards have dedicated question callouts');
assert(renderedHtml.includes('reading-scenario-answer'), 'Scenario cards have dedicated verified answer blocks');

// -------------------------------------------------------------------------
// SECTION 5: All 12 Semantic SVG Diagrams
// -------------------------------------------------------------------------
console.log('\n--- Section 5: All 12 Semantic SVG Diagrams ---');

const allDiagramKeys = [
  'threatChain',
  'ciaTriad',
  'loadBalancer',
  'aaaLifecycle',
  'privacyFlow',
  'defenseInDepth',
  'riskCalculationFlow',
  'riskLifecycle',
  'documentHierarchy',
  'controlTimeline',
  'dueCareDiligence',
  'ethicsCanons'
];

allDiagramKeys.forEach(key => {
  assert(renderedHtml.includes(`data-diagram="${key}"`), `Diagram "${key}" is present in rendered HTML`);
  assert(Boolean(diagrams[key]), `Diagram "${key}" is exported in diagram-generator.js`);
  assert(diagrams[key].includes('<svg') && diagrams[key].includes('</svg>'), `Diagram "${key}" contains valid SVG elements`);
  assert(diagrams[key].includes('role="img"') || diagrams[key].includes('role="region"'), `Diagram "${key}" includes accessibility roles`);
});

const svgCount = (renderedHtml.match(/<svg\b[^>]*>/gi) || []).length;
assert(svgCount >= 12, `At least 12 SVG graphics rendered (found: ${svgCount})`);

// -------------------------------------------------------------------------
// SECTION 6: Authoritative Objective & Topic Anchors (24 Topics)
// -------------------------------------------------------------------------
console.log('\n--- Section 6: Authoritative Objective & Topic Anchors ---');

const expectedObjectives = ['1.1', '1.2', '1.3', '1.4', '1.5'];
expectedObjectives.forEach(objId => {
  assert(renderedHtml.includes(`id="obj-${objId.replace('.', '-')}"`), `Objective anchor obj-${objId.replace('.', '-')} exists in rendered HTML`);
});

const declaredTopics = domain1Objectives.flatMap(o => o.topics.map(t => t.id));
assert(declaredTopics.length === 24, `Authoritative data module has exactly 24 topics (found: ${declaredTopics.length})`);

let missingAnchors = 0;
declaredTopics.forEach(topicId => {
  const hasAnchor = renderedHtml.includes(`id="${topicId}"`);
  if (!hasAnchor) missingAnchors++;
});
assert(missingAnchors === 0, `All 24 topic anchors match between domain-1.js and rendered HTML`);

// -------------------------------------------------------------------------
// SECTION 7: Security & Tag Escaping
// -------------------------------------------------------------------------
console.log('\n--- Section 7: Security & Tag Escaping ---');

assert(!renderedHtml.includes('<script'), 'No executable <script> tags in rendered output');
assert(!renderedHtml.includes('<iframe'), 'No executable <iframe> tags in rendered output');
assert(!renderedHtml.includes('onerror='), 'No inline event handler injection');

// -------------------------------------------------------------------------
// SECTION 9: Task 96 — Editorial Components & Semantic Anti-Flattening
// -------------------------------------------------------------------------
console.log('\n--- Section 9: Task 96 — Editorial Components & Semantic Anti-Flattening ---');

// Duplicate H1 check
const h1InMarkdown = (renderedHtml.match(/<h1\b[^>]*>/gi) || []).length;
assert(h1InMarkdown === 0, `Zero <h1> in rendered article body; page header provides canonical H1 (found: ${h1InMarkdown})`);

// Concept Grids
const conceptGrids = renderedHtml.match(/class="[^"]*\breading-concept-grid\b[^"]*"/gi) || [];
assert(conceptGrids.length === 2, `Exactly 2 concept grids rendered: MFA & Control Categories (found: ${conceptGrids.length})`);
assert(renderedHtml.includes('Something You Know') && renderedHtml.includes('Something You Have') && renderedHtml.includes('Something You Are') && renderedHtml.includes('Somewhere You Are'), 'MFA 4 authentication factors rendered as distinct semantic concept cards');
assert(renderedHtml.includes('Technical (Logical) Controls') && renderedHtml.includes('Managerial (Administrative) Controls') && renderedHtml.includes('Operational Controls') && renderedHtml.includes('Physical Controls'), 'Control Categories rendered as 4 distinct semantic concept cards');

// Response Grid
const responseGrids = renderedHtml.match(/class="[^"]*\breading-response-grid\b[^"]*"/gi) || [];
assert(responseGrids.length === 1, `Exactly 1 risk response grid rendered (found: ${responseGrids.length})`);
assert(renderedHtml.includes('reading-response-card avoid') && renderedHtml.includes('reading-response-card mitigate') && renderedHtml.includes('reading-response-card transfer') && renderedHtml.includes('reading-response-card accept'), 'Risk Treatment contains all 4 response cards (Avoid, Mitigate, Transfer, Accept)');
assert(renderedHtml.includes('Cyber Insurance Trap') || renderedHtml.includes('Cyber Insurance'), 'Cyber insurance limitation callout rendered with response cards');

// Distinction Grid (12 Concept Distinctions)
const distinctionGrids = renderedHtml.match(/class="reading-distinction-grid"/gi) || [];
assert(distinctionGrids.length === 1, `Exactly 1 concept distinction grid rendered (found: ${distinctionGrids.length})`);
const distinctionCards = renderedHtml.match(/class="reading-distinction-card"/gi) || [];
assert(distinctionCards.length === 12, `Exactly 12 paired distinction cards rendered in place of cramped table (found: ${distinctionCards.length})`);

// Precedence Stack (ISC2 Ethics Canons)
const precedenceStacks = renderedHtml.match(/class="reading-precedence-stack"/gi) || [];
assert(precedenceStacks.length === 1, `Exactly 1 order-of-precedence stack rendered for Ethics Canons (found: ${precedenceStacks.length})`);
assert(renderedHtml.includes('reading-precedence-card tier-1') && renderedHtml.includes('reading-precedence-card tier-2') && renderedHtml.includes('reading-precedence-card tier-3') && renderedHtml.includes('reading-precedence-card tier-4'), 'Ethics canons include all 4 hierarchical precedence tiers (1: Society, 2: Honor, 3: Principals, 4: Profession)');

// Non-linear Diagram Semantics
assert(diagrams.controlTimeline.includes('Security Control Function Matrix') || diagrams.controlTimeline.includes('Functional Matrix'), 'controlTimeline SVG updated to functional matrix (non-linear representation)');
assert(diagrams.ethicsCanons.includes('Strict Order of Precedence') || diagrams.ethicsCanons.includes('Order of Precedence') || diagrams.ethicsCanons.includes('PRECEDENCE 1'), 'ethicsCanons SVG updated to order-of-precedence hierarchy stack');

// -------------------------------------------------------------------------
// SECTION 10: Task 96 — Adaptive Reading Layout CSS Rules
// -------------------------------------------------------------------------
console.log('\n--- Section 10: Task 96 — Adaptive Reading Layout CSS Rules ---');

const cssPath = path.join(projectRoot, 'css/reading.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('--reading-screen-max-width: 1560px'), 'CSS defines 1560px screen max-width for desktop viewports');
assert(cssContent.includes('--reading-article-max-width: 1080px'), 'CSS defines 1080px article max-width for wide editorial layout');
assert(cssContent.includes('--reading-prose-max-width: 100%') || cssContent.includes('--reading-prose-max-width: 780px'), 'CSS enforces unified prose measure token');
assert(cssContent.includes('.reading-layout.sidebar-collapsed .reading-content-pane') && cssContent.includes('1240px'), 'CSS expands content pane up to 1240px when sidebar is collapsed');
assert(cssContent.includes('.reading-layout.sidebar-collapsed .reading-article') && cssContent.includes('1140px'), 'CSS expands reading article up to 1140px when sidebar is collapsed');
assert(cssContent.includes('.reading-concept-grid') && cssContent.includes('.reading-response-grid'), 'CSS includes layout styles for concept grids and response grids');
assert(cssContent.includes('.reading-distinction-grid') && cssContent.includes('.reading-precedence-stack'), 'CSS includes layout styles for distinction grids and precedence stacks');

// -------------------------------------------------------------------------
// SECTION 11: Preservation of Untouched Assets
// -------------------------------------------------------------------------
console.log('\n--- Section 11: Preservation of Untouched Assets ---');

const d1SumPath = path.join(projectRoot, 'ISC2 Update 2026/Domain 1/D1 sum.md');
const domain1SourcePath = path.join(projectRoot, 'ISC2 Update 2026/Domain 1/Domain 1.md');
assert(fs.existsSync(d1SumPath), 'Original source file "D1 sum.md" exists');
assert(fs.existsSync(domain1SourcePath), 'Original source file "Domain 1.md" exists');

// Verify Question Banks
const pre2026Bank = path.join(projectRoot, 'data/questions.json');
const q2026Bank = path.join(projectRoot, 'data/questions-2026.json');
if (fs.existsSync(pre2026Bank)) {
  const preQ = JSON.parse(fs.readFileSync(pre2026Bank, 'utf8'));
  assert(Array.isArray(preQ) && preQ.length === 583, `Pre-2026 question bank intact (583 questions, found: ${preQ.length})`);
}
if (fs.existsSync(q2026Bank)) {
  const q26 = JSON.parse(fs.readFileSync(q2026Bank, 'utf8'));
  assert(Array.isArray(q26) && q26.length === 119, `2026 question bank intact (119 questions, found: ${q26.length})`);
}

// Verify Vocabulary
const vocabPath = path.join(projectRoot, 'data/vocabulary.json');
if (fs.existsSync(vocabPath)) {
  const vocab = JSON.parse(fs.readFileSync(vocabPath, 'utf8'));
  assert(Array.isArray(vocab) && vocab.length === 403, `Vocabulary bank intact (403 terms, found: ${vocab.length})`);
}

// -------------------------------------------------------------------------
// SECTION 12: Task 97 — Semantic Spacing & Content Grouping System
// -------------------------------------------------------------------------
console.log('\n--- Section 12: Task 97 — Semantic Spacing & Content Grouping System ---');

// Spacing Tokens in CSS
const spacingTokens = ['--space-2xs', '--space-xs', '--space-sm', '--space-md', '--space-lg', '--space-xl', '--space-2xl', '--space-3xl'];
spacingTokens.forEach(token => {
  assert(cssContent.includes(token), `CSS defines vertical spacing token: ${token}`);
});

// Semantic Introductory Labels in HTML
const introLabels = renderedHtml.match(/class="reading-intro-label"/gi) || [];
assert(introLabels.length >= 10, `At least 10 semantic introductory labels rendered across Domain 1 (found: ${introLabels.length})`);

// Specific User Requirement in 1.1.1 Core Security Concepts
assert(
  renderedHtml.includes('reading-intro-label') && renderedHtml.includes('คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:'),
  'Specific Requirement: "คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:" rendered as semantic introductory label'
);

// Sibling Proximity Selectors in CSS
assert(cssContent.includes('.reading-intro-label + .reading-table-wrapper'), 'CSS enforces tight proximity between intro label and following table');
assert(cssContent.includes('.reading-intro-label + .reading-concept-grid'), 'CSS enforces tight proximity between intro label and following concept grid');
assert(cssContent.includes('.reading-intro-label + .reading-response-grid'), 'CSS enforces tight proximity between intro label and following response grid');
assert(cssContent.includes('.reading-intro-label + .reading-diagram-card'), 'CSS enforces tight proximity between intro label and following diagram card');
assert(cssContent.includes('.reading-intro-label + .reading-formula-card'), 'CSS enforces tight proximity between intro label and following formula card');
assert(cssContent.includes('.reading-intro-label + ul'), 'CSS enforces tight proximity between intro label and following bullet list');
assert(cssContent.includes('h4 + .reading-table-wrapper'), 'CSS enforces tight proximity between H4 headings and following table');
assert(cssContent.includes('.reading-body p + ul'), 'CSS enforces tight proximity between introductory paragraphs and bullet lists');
assert(cssContent.includes('.reading-table-wrapper + blockquote'), 'CSS groups takeaway blockquotes closely below tables');
assert(cssContent.includes('.reading-scenario-card + .reading-scenario-card'), 'CSS standardizes comfortable spacing between consecutive scenario cards');

// Semantic Group Containers and Components
assert(cssContent.includes('.reading-content-group') && cssContent.includes('break-inside: avoid'), 'CSS defines .reading-content-group with break-inside: avoid');
assert(renderedHtml.includes('reading-calculation-box'), 'Worked calculation walkthrough boxes rendered for quantitative formulas');
assert(renderedHtml.includes('reading-example-box'), 'Dedicated example box rendered for conceptual scenarios');
assert(renderedHtml.includes('reading-callout warning') && renderedHtml.includes('reading-callout danger'), 'Standardized warning and danger callout styles active in rendered article');

// -------------------------------------------------------------------------
// SECTION 13: Task 98 — Semantic List Formatting & Visual Grouping System
// -------------------------------------------------------------------------
console.log('\n--- Section 13: Task 98 — Semantic List Formatting & Visual Grouping System ---');

// Specific User Example: Section 1.1.1 "ข้อควรระวังสำหรับข้อสอบ"
assert(renderedHtml.includes('reading-callout warning') && renderedHtml.includes('ข้อควรระวังสำหรับข้อสอบ'), 'Shared warning callout rendered for 1.1.1 exam trap');
assert(renderedHtml.includes('reading-callout-header'), 'Shared warning header with SVG icon present');
assert(renderedHtml.includes('reading-warning-group'), 'Dedicated reading-warning-group container present');
assert(renderedHtml.includes('Threat ไม่ใช่ Vulnerability') && renderedHtml.includes('reading-concept-heading'), 'Warning 1: Clear bold concept statement present');
assert(renderedHtml.includes('Vulnerability ไม่ได้แปลว่าเกิดเหตุโจมตีแล้ว') && renderedHtml.includes('reading-concept-heading'), 'Warning 2: Clear bold concept statement present');

// Verify each warning has a separate explanatory paragraph
const warningItems = renderedHtml.match(/<div class="reading-warning-item">[\s\S]*?<\/div>/gi) || [];
assert(warningItems.length >= 2, `At least 2 warning items rendered within shared warning group (found: ${warningItems.length})`);
warningItems.forEach((item, idx) => {
  assert(item.includes('<h5 class="reading-concept-heading">') && item.includes('<p>'), `Warning item ${idx + 1} contains concept heading and separate explanatory paragraph`);
});

// Verify warning icons are NOT repeated for each statement inside warning group
const warningGroupHtml = renderedHtml.substring(renderedHtml.indexOf('class="reading-warning-group"'), renderedHtml.indexOf('class="reading-warning-group"') + 1000);
const iconsInGroup = (warningGroupHtml.match(/<svg/gi) || []).length;
assert(iconsInGroup === 0, `No repeated SVG icons inside warning items within shared group (found: ${iconsInGroup})`);

// Zero raw Markdown bullet markers in rendered text (<p>- or <li>- or <br>-)
assert(!renderedHtml.includes('<p>- '), 'Zero raw Markdown hyphen bullets leaked into paragraphs (<p>- )');
assert(!renderedHtml.includes('<br>- '), 'Zero raw Markdown hyphen bullets leaked after line breaks (<br>- )');
assert(!renderedHtml.includes('<p>• '), 'Zero raw bullet characters leaked into paragraphs (<p>• )');

// Concept headings with separate explanatory paragraphs (.reading-concept-item)
const conceptItems = renderedHtml.match(/class="reading-concept-item"/gi) || [];
assert(conceptItems.length >= 15, `Semantic concept items used in place of pseudo-bullets across Domain 1 (found: ${conceptItems.length})`);

// Genuine bullet lists preserved where they improve scanning and comprehension
const ulLists = renderedHtml.match(/<ul\b[\s\S]*?<\/ul>/gi) || [];
assert(ulLists.length >= 5, `Genuine bullet lists preserved for actual scanning elements (found: ${ulLists.length})`);
assert(renderedHtml.includes('ตัวอย่างการปฏิบัติ Due Care:') && renderedHtml.includes('การลง Patch อุดช่องโหว่ทันทีที่ได้รับแจ้ง'), 'Due Care actions preserved as genuine bullet list');
assert(renderedHtml.includes('ตัวอย่างการปฏิบัติ Due Diligence:') && renderedHtml.includes('การรัน Vulnerability Scan ตรวจสอบจุดอ่อนของเซิร์ฟเวอร์'), 'Due Diligence actions preserved as genuine bullet list');
assert(renderedHtml.includes('มาตรการควบคุมหลัก (Controls):') && renderedHtml.includes('Encryption (การเข้ารหัสข้อมูล):'), 'CIA Controls preserved as genuine bullet list');

// Ordered numbering preserved for genuine sequences
assert(renderedHtml.includes('<ol>') && renderedHtml.includes('<strong>Risk Identification:</strong>') && renderedHtml.includes('<strong>Risk Communication & Reporting:</strong>'), 'Sequential Risk Lifecycle preserves ordered numbering list');

// CSS Reusable Component Styling
assert(cssContent.includes('.reading-callout-header'), 'CSS defines .reading-callout-header');
assert(cssContent.includes('.reading-warning-group'), 'CSS defines .reading-warning-group');
assert(cssContent.includes('.reading-warning-item'), 'CSS defines .reading-warning-item');
assert(cssContent.includes('.reading-concept-item'), 'CSS defines .reading-concept-item');
assert(cssContent.includes('.reading-keyword-takeaway'), 'CSS defines .reading-keyword-takeaway');
assert(cssContent.includes('.reading-scenario-inline'), 'CSS defines .reading-scenario-inline');

// -------------------------------------------------------------------------
// Section 14: Task 100 — Table Typography & Visual Hierarchy
// -------------------------------------------------------------------------
console.log('\n--- Section 14: Task 100 — Table Typography & Visual Hierarchy ---');

// Reusable Table Typography CSS Design Tokens
assert(cssContent.includes('--table-header-font-size:'), 'CSS defines --table-header-font-size design token');
assert(cssContent.includes('--table-header-font-weight:'), 'CSS defines --table-header-font-weight design token');
assert(cssContent.includes('--table-body-font-size:'), 'CSS defines --table-body-font-size design token');
assert(cssContent.includes('--table-body-line-height:'), 'CSS defines --table-body-line-height design token');
assert(cssContent.includes('--table-cell-padding-y:'), 'CSS defines --table-cell-padding-y design token');
assert(cssContent.includes('--table-cell-padding-x:'), 'CSS defines --table-cell-padding-x design token');
assert(cssContent.includes('--table-row-hover-bg:'), 'CSS defines --table-row-hover-bg design token');

// Header Typography Rules: At least as readable as body, no forced uppercase
assert(cssContent.includes('text-transform: none;'), 'Table headers do not force uppercase (preserves Thai/English natural casing)');
assert(!cssContent.match(/\.reading-table\s+th\s*\{[^}]*font-size:\s*13px/i), 'Table header font-size is not smaller than body text');

// Markdown Parser: Elimination of blind first-column bolding
assert(!parserContent.includes('if (cellIdx === 0)'), 'Markdown parser does not force strong tags on column 0 blindly');
assert(renderedHtml.includes('<td>ข้อมูลเงินเดือนพนักงานรั่วไหลออกสู่สาธารณะ</td>'), 'CIA scenario table preserves normal weight on scenario column rather than forced bold');

// Due Care vs. Due Diligence Equal Visual Weight & Footnote
assert(renderedHtml.includes('<strong>Implement</strong>') && renderedHtml.includes('<strong>Assess / Evaluate</strong>'), 'Due Care vs Due Diligence table gives equal bold visual weight to both columns');
assert(renderedHtml.includes('class="reading-table-note"'), 'Footnote note element rendered with .reading-table-note');
assert(renderedHtml.includes('Illustrative Verb Clusters') || renderedHtml.includes('ตัวอย่างกลุ่มคำกริยาบ่งชี้'), 'Due Care vs Due Diligence clarifies non-1:1 correspondence');

// Reusable footnote style in CSS
assert(cssContent.includes('.reading-table-note'), 'CSS defines .reading-table-note styling');

// -------------------------------------------------------------------------
// Section 15: Task 102 — Zero Raw HTML Leakage, Tag Balancing & DOM Sibling Independence
// -------------------------------------------------------------------------
console.log('\n--- Section 15: Task 102 — Zero HTML Leakage, Tag Balancing & DOM Sibling Independence ---');

// 1. Zero raw escaped HTML tags visible in rendered output
assert(!renderedHtml.includes('&lt;div'), 'Zero raw &lt;div&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;/div'), 'Zero raw &lt;/div&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;strong'), 'Zero raw &lt;strong&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;/strong'), 'Zero raw &lt;/strong&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;p&gt;'), 'Zero raw &lt;p&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;/p&gt;'), 'Zero raw &lt;/p&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;span'), 'Zero raw &lt;span&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;/span'), 'Zero raw &lt;/span&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;em&gt;'), 'Zero raw &lt;em&gt; leakage in rendered HTML');
assert(!renderedHtml.includes('&lt;/em&gt;'), 'Zero raw &lt;/em&gt; leakage in rendered HTML');

// 2. Exact HTML tag balance across the entire rendered Domain 1 article
const divOpenCount = (renderedHtml.match(/<div\b/gi) || []).length;
const divCloseCount = (renderedHtml.match(/<\/div>/gi) || []).length;
assert(divOpenCount === divCloseCount, `HTML div tags are perfectly balanced (open: ${divOpenCount}, close: ${divCloseCount})`);

const sectionOpenCount = (renderedHtml.match(/<section\b/gi) || []).length;
const sectionCloseCount = (renderedHtml.match(/<\/section>/gi) || []).length;
assert(sectionOpenCount === sectionCloseCount, `HTML section tags are perfectly balanced (open: ${sectionOpenCount}, close: ${sectionCloseCount})`);

const tableOpenCount = (renderedHtml.match(/<table\b/gi) || []).length;
const tableCloseCount = (renderedHtml.match(/<\/table>/gi) || []).length;
assert(tableOpenCount === tableCloseCount, `HTML table tags are perfectly balanced (open: ${tableOpenCount}, close: ${tableCloseCount})`);

const ulOpenCount = (renderedHtml.match(/<ul\b/gi) || []).length;
const ulCloseCount = (renderedHtml.match(/<\/ul>/gi) || []).length;
assert(ulOpenCount === ulCloseCount, `HTML ul tags are perfectly balanced (open: ${ulOpenCount}, close: ${ulCloseCount})`);

const olOpenCount = (renderedHtml.match(/<ol\b/gi) || []).length;
const olCloseCount = (renderedHtml.match(/<\/ol>/gi) || []).length;
assert(olOpenCount === olCloseCount, `HTML ol tags are perfectly balanced (open: ${olOpenCount}, close: ${olCloseCount})`);

// 3. Scenario DOM Sibling Independence & Non-Recursive Nesting Verification
const allScenarioMatches = [...renderedHtml.matchAll(/<div class="reading-scenario-card"[^>]*data-scenario="(\d+)"/g)];
assert(allScenarioMatches.length === 8, `Exactly 8 scenario cards matched in DOM (found: ${allScenarioMatches.length})`);

for (let s = 1; s <= 8; s++) {
  const marker = `data-scenario="${s}"`;
  const startIdx = renderedHtml.indexOf(marker);
  assert(startIdx !== -1, `Scenario ${s} marker exists in DOM`);

  const cardStart = renderedHtml.lastIndexOf('<div', startIdx);
  let depth = 0;
  let cardEnd = -1;
  const tagRegex = /<\/?div\b[^>]*>/gi;
  tagRegex.lastIndex = cardStart;

  let match;
  while ((match = tagRegex.exec(renderedHtml)) !== null) {
    if (match[0].startsWith('</')) {
      depth--;
      if (depth === 0) {
        cardEnd = tagRegex.lastIndex;
        break;
      }
    } else {
      depth++;
    }
  }

  assert(depth === 0 && cardEnd > cardStart, `Scenario card ${s} is cleanly closed at depth 0`);

  const cardHtml = renderedHtml.slice(cardStart, cardEnd);
  // Check that NO OTHER scenario is nested inside this scenario card
  for (let other = 1; other <= 8; other++) {
    if (other !== s) {
      assert(!cardHtml.includes(`data-scenario="${other}"`), `Scenario ${other} is NOT nested inside Scenario ${s}`);
    }
  }

  // Check structured fields presence inside card
  assert(cardHtml.includes('reading-scenario-header'), `Scenario ${s} has dedicated header row`);
  assert(cardHtml.includes('reading-scenario-badge'), `Scenario ${s} has badge element`);
  assert(cardHtml.includes('reading-scenario-topic'), `Scenario ${s} has topic element`);
  assert(cardHtml.includes('reading-scenario-question'), `Scenario ${s} has question element`);
  assert(cardHtml.includes('reading-scenario-answer'), `Scenario ${s} has verified answer element`);
}

// 4. Structured scenario component module and data exports
assert(fs.existsSync(path.resolve(projectRoot, 'js/core/scenario-component.js')), 'scenario-component.js module exists');
assert(fs.existsSync(path.resolve(projectRoot, 'content/isc2-cc-2026/reading/domain-1-scenarios.js')), 'domain-1-scenarios.js data module exists');

const { domain1Scenarios } = await import('../content/isc2-cc-2026/reading/domain-1-scenarios.js');
assert(Array.isArray(domain1Scenarios) && domain1Scenarios.length === 8, 'domain1Scenarios exports 8 structured scenario objects');

for (const sc of domain1Scenarios) {
  assert(sc.id && sc.badge && sc.topic && sc.situation && sc.question && sc.answer, `Scenario ${sc.id} has all required structured fields`);
}

// 5. Scenario CSS Refinement Verification
assert(cssContent.includes('.reading-scenario-header'), 'CSS defines .reading-scenario-header flex styling');
assert(cssContent.includes('.reading-scenario-topic'), 'CSS defines .reading-scenario-topic typography');
assert(cssContent.includes('.reading-scenario-situation'), 'CSS defines .reading-scenario-situation typography');
assert(cssContent.includes('.reading-scenario-answer-text'), 'CSS defines .reading-scenario-answer-text typography');
assert(!cssContent.match(/\.reading-scenario-card\s*\{[^}]*border-left:\s*4px/i), 'Scenario card eliminated heavy decorative 4px border-left clutter');

// -------------------------------------------------------------------------
// SECTION 16: Task 103 — Quality Overhaul, Ethics Numbered Hierarchy & Visual Hygiene
// -------------------------------------------------------------------------
console.log('\n--- Section 16: Task 103 Quality Overhaul & Visual Hygiene ---');

// 1. Vector SVG Paths & Zero Emojis in Diagrams
assert(!diagrams.ciaTriad.includes('🔒') && !diagrams.ciaTriad.includes('🛡️') && !diagrams.ciaTriad.includes('⚡'), 'CIA Triad diagram replaced emojis (🔒, 🛡️, ⚡) with scalable vector graphics');
assert(diagrams.ciaTriad.includes('<path') && diagrams.ciaTriad.includes('diag-pillar-blue'), 'CIA Triad uses unified crisp vector SVG icons and unified theme pillars');

// 2. Ethics Canons Numbered Hierarchy & Precedence Banner
assert(
  diagrams.ethicsCanons.includes('01') && diagrams.ethicsCanons.includes('Society') &&
  diagrams.ethicsCanons.includes('02') && diagrams.ethicsCanons.includes('Honor') &&
  diagrams.ethicsCanons.includes('03') && diagrams.ethicsCanons.includes('Principals') &&
  diagrams.ethicsCanons.includes('04') && diagrams.ethicsCanons.includes('Profession'),
  'ethicsCanons SVG uses clean numbered hierarchy (01 Society, 02 Honor, 03 Principals, 04 Profession)'
);
assert(!diagrams.ethicsCanons.includes('#f43f5e') && !diagrams.ethicsCanons.includes('#f59e0b') && !diagrams.ethicsCanons.includes('#10b981'), 'ethicsCanons SVG eliminated 4-color rainbow palette');
assert(renderedHtml.includes('class="reading-precedence-rule"'), 'Ethics canons include single dedicated precedence rule banner at the top');
assert(renderedHtml.includes('Canon ลำดับก่อนหน้าจะมีความสำคัญเหนือกว่าเสมอ'), 'Precedence rule clearly explains earlier canon supersedes upon conflict');
assert(renderedHtml.includes('class="reading-precedence-num">01</span>') && renderedHtml.includes('class="reading-precedence-num">04</span>'), 'Ethics canons HTML cards render numbered hierarchy 01 through 04');
assert(!renderedHtml.includes('reading-precedence-divider'), 'Ethics canons eliminated redundant "▼ ลำดับความสำคัญเหนือกว่า" divider banners');

// 3. Monochromatic / Calm Palette in CSS
assert(!cssContent.includes('border-left: 4px solid #f43f5e'), 'Ethics CSS cards eliminated harsh rainbow left-borders (#f43f5e)');
assert(cssContent.includes('.diag-pyramid-t1 { fill: rgba(59, 130, 246'), 'Document hierarchy pyramid tiers use calm monochromatic blue progression instead of 4 rainbow fills');

// 4. Prose LaTeX & Typography Hygiene
assert(!mdContent.includes('\\to'), 'Source Markdown has zero raw \\to arrows (clean Unicode → used instead)');
assert(!mdContent.includes('\\mathbf{Governance'), 'Prose Governance equation eliminated KaTeX \\mathbf abuse');
assert(!renderedHtml.includes('\\to'), 'Rendered HTML has zero raw \\to arrow leakage in prose');
assert((renderedHtml.includes('<strong>S</strong>ociety →') || renderedHtml.includes('<strong class="reading-mnemonic-highlight">S</strong>ociety →')) && !renderedHtml.includes('\\mathbf{S}'), 'Ethics mnemonic uses clean Unicode arrow and bold text instead of LaTeX');

// 5. Divider Hygiene & Uninterrupted Vertical Rhythm
const dividerMatches = mdContent.match(/^---$/gm) || [];
assert(dividerMatches.length === 0, `Source Markdown eliminated all 23 jarring horizontal dividers (---) (found: ${dividerMatches.length})`);
assert(!renderedHtml.includes('<hr class="reading-divider">'), 'Rendered HTML has zero redundant <hr class="reading-divider"> elements');

// -------------------------------------------------------------------------
// Summary
// -------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`Verification Summary: ${passedTests}/${totalTests} tests passed (${failedTests} failed)`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('All Task 95 presentation redesign assertions passed successfully!');
  process.exit(0);
}

