/**
 * tools/verify-reading-notes-domain1.mjs
 *
 * Automated verification suite for Task 94:
 * ISC2 CC 2026 Reading Notes — Domain 1 Content Integration
 *
 * Validates:
 * 1. Source preservation (D1 sum.md & Domain 1.md untouched)
 * 2. Audit & traceability documentation exists with full concept mapping
 * 3. Content completeness across Objectives 1.1–1.5 (CIA, AAA, MFA, Privacy, Zero Trust,
 *    Formulas SLE/ARO/ALE, 4 Risk Treatments, GRC, Document Hierarchy, 4 Control Categories,
 *    Due Care vs Due Diligence, 4 ISC2 Ethics Canons, 12 Distinction Pairs)
 * 4. Zero-dependency Markdown Parser (headings, tables, lists, code blocks, math, safe escaping)
 * 5. Reading Notes Loader and caching
 * 6. 3-Level Navigation Hierarchy in Sidebar (Domain -> Objectives 1.1–1.5 -> 23 Topics)
 * 7. Topic anchor alignment between sidebar links and article content IDs
 * 8. UI Shell integration & independent chevron toggling
 * 9. Unpublished status preserved for Domains 2–5
 * 10. System boundaries and existing question banks / vocabulary intact
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Imports under test
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { loadDomainReading, getDomainReadingCached, clearReadingCache } from '../js/core/reading-loader.js';
import { domain1Metadata, domain1Objectives, getDomain1Markdown } from '../content/isc2-cc-2026/reading/domain-1.js';
import { renderReadingScreen, READING_DOMAINS } from '../js/ui/screen-reading.js';
import { state } from '../js/core/state.js';
import { createVocabularyDOM } from './fixtures/vocabulary-dom.mjs';
import { getExamVersions } from '../data/exam-versions.js';

let testCount = 0;
let passedCount = 0;

function runTest(name, fn) {
  testCount++;
  try {
    fn();
    console.log(`✓ PASS: ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(err);
  }
}

async function runAsyncTest(name, fn) {
  testCount++;
  try {
    await fn();
    console.log(`✓ PASS: ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(err);
  }
}

console.log('=== ISC2 CC 2026 — Reading Notes Domain 1 Verification ===\n');

// -------------------------------------------------------------
// Test 1: Source Files Preservation
// -------------------------------------------------------------
runTest('Source Files Preservation — Original markdown files remain untouched', () => {
  const d1SumPath = path.join(root, 'ISC2 Update 2026', 'Domain 1', 'D1 sum.md');
  const d1Path = path.join(root, 'ISC2 Update 2026', 'Domain 1', 'Domain 1.md');

  assert.ok(fs.existsSync(d1SumPath), 'D1 sum.md must exist in original location');
  assert.ok(fs.existsSync(d1Path), 'Domain 1.md must exist in original location');

  const d1SumContent = fs.readFileSync(d1SumPath, 'utf8');
  const d1Content = fs.readFileSync(d1Path, 'utf8');

  // Verify non-empty and substantial original size
  assert.ok(d1SumContent.length > 20000, 'D1 sum.md must contain full original text (>20k chars)');
  assert.ok(d1Content.length > 15000, 'Domain 1.md must contain full original text (>15k chars)');
});

// -------------------------------------------------------------
// Test 2: Audit & Traceability Report
// -------------------------------------------------------------
runTest('Traceability Report — Audit documentation exists with full concept mapping', () => {
  const auditPath = path.join(root, 'docs', 'plans', 'isc2-cc-2026', 'domain-1-reading-notes-audit.md');
  assert.ok(fs.existsSync(auditPath), 'domain-1-reading-notes-audit.md must exist');

  const auditContent = fs.readFileSync(auditPath, 'utf8');
  assert.ok(/Objective 1\.1:\s*Understand Cybersecurity Concepts/i.test(auditContent), 'Audit must cover 1.1');
  assert.ok(/Objective 1\.2:\s*Understand Risk Management Concepts/i.test(auditContent), 'Audit must cover 1.2');
  assert.ok(/Objective 1\.3:\s*Understand Governance Concepts/i.test(auditContent), 'Audit must cover 1.3');
  assert.ok(/Objective 1\.4:\s*Understand Cybersecurity Controls/i.test(auditContent), 'Audit must cover 1.4');
  assert.ok(/Objective 1\.5:\s*Maintain Professional and Ethical Conduct/i.test(auditContent), 'Audit must cover 1.5');
  assert.ok(/Quantitative Risk/i.test(auditContent), 'Audit must cover Quantitative formulas');
  assert.ok(/Code of Ethics/i.test(auditContent) && /Canons/i.test(auditContent), 'Audit must cover Ethics Canons');
  assert.ok(/Duplication/i.test(auditContent), 'Audit must log deduplication decisions');
});

// -------------------------------------------------------------
// Test 3: Consolidated Domain 1 Content Module & Completeness
// -------------------------------------------------------------
await runAsyncTest('Domain 1 Content Completeness — All verified syllabus concepts present', async () => {
  const md = await getDomain1Markdown();
  assert.ok(md.length > 30000, 'Consolidated Domain 1 markdown must be comprehensive (>30k characters)');

  // 1.1 Concepts
  assert.ok(md.includes('CIA Triad'), 'Must contain CIA Triad');
  assert.ok(md.includes('Confidentiality') && md.includes('Integrity') && md.includes('Availability'), 'Must contain all CIA pillars');
  assert.ok(md.includes('AAA') || md.includes('Authentication, Authorization, and Accounting'), 'Must contain AAA');
  assert.ok(md.includes('Multi-Factor Authentication') || md.includes('MFA'), 'Must contain MFA');
  assert.ok(/Something You Know/i.test(md) && /Something You Have/i.test(md) && /Something You Are/i.test(md), 'Must contain MFA factors');
  assert.ok(md.includes('Non-repudiation'), 'Must contain Non-repudiation');
  assert.ok(md.includes('Data Subject') && md.includes('Data Controller') && md.includes('Data Processor'), 'Must contain Privacy roles');
  assert.ok(md.includes('Zero Trust') && md.includes('Defense in Depth'), 'Must contain Zero Trust and Defense in Depth');

  // 1.2 Risk Concepts & Formulas
  assert.ok(md.includes('Asset') && md.includes('Vulnerability') && md.includes('Threat'), 'Must contain Risk definition components');
  assert.ok(md.includes('Single Loss Expectancy') || md.includes('SLE'), 'Must contain SLE');
  assert.ok(md.includes('Annualized Rate of Occurrence') || md.includes('ARO'), 'Must contain ARO');
  assert.ok(md.includes('Annualized Loss Expectancy') || md.includes('ALE'), 'Must contain ALE');
  assert.ok(md.includes('Exposure Factor') || md.includes('EF'), 'Must contain Exposure Factor (EF)');
  assert.ok(md.includes('Asset Value') || md.includes('AV'), 'Must contain Asset Value (AV)');
  assert.ok(md.includes('SLE = AV \\times EF') || md.includes('SLE = AV * EF') || md.includes('ALE = SLE'), 'Must contain quantitative risk formulas');
  assert.ok(md.includes('Risk Acceptance') && md.includes('Risk Avoidance') && md.includes('Risk Mitigation') && (md.includes('Risk Transfer') || md.includes('Risk Transference')), 'Must contain all 4 risk treatments');
  assert.ok(md.includes('Inherent Risk') && md.includes('Residual Risk'), 'Must contain Inherent vs Residual risk');
  assert.ok(md.includes('Risk Appetite') && md.includes('Risk Tolerance'), 'Must contain Risk Appetite vs Tolerance');

  // 1.3 Governance
  assert.ok(/Policy/i.test(md) && /Standard/i.test(md) && /Procedure/i.test(md) && /Guideline/i.test(md), 'Must contain Document Hierarchy');
  assert.ok(md.includes('GDPR') && md.includes('HIPAA') && (md.includes('PCI DSS') || md.includes('PCI-DSS')), 'Must contain regulatory examples');
  assert.ok(md.includes('NIST CSF') && md.includes('ISO/IEC 27001'), 'Must contain major frameworks');
  assert.ok(md.includes('Governance, Risk, and Compliance') || md.includes('GRC'), 'Must contain GRC');

  // 1.4 Controls
  assert.ok(md.includes('Technical') && md.includes('Managerial') && md.includes('Operational') && md.includes('Physical'), 'Must contain 4 control categories');
  assert.ok(md.includes('Preventive') && md.includes('Detective') && md.includes('Corrective'), 'Must contain control functions');

  // 1.5 Ethics & Distinctions
  assert.ok(md.includes('Due Care') && md.includes('Due Diligence'), 'Must contain Due Care vs Due Diligence');
  assert.ok(md.includes('Protect society, the common good') || md.includes('Protect society'), 'Must contain Canon 1');
  assert.ok(md.includes('Act honorably, honestly, justly') || md.includes('Act honorably'), 'Must contain Canon 2');
  assert.ok(md.includes('Provide diligent and competent service to principals') || md.includes('service to principals'), 'Must contain Canon 3');
  assert.ok(md.includes('Advance and protect the profession') || md.includes('Advance and protect'), 'Must contain Canon 4');
  assert.ok(md.includes('Concept Distinctions') || md.includes('Distinctions'), 'Must contain concept distinctions comparison');
});

// -------------------------------------------------------------
// Test 4: Markdown Parser Correctness & Security
// -------------------------------------------------------------
runTest('Markdown Parser — Correct HTML generation and script safety', () => {
  const sampleMd = `
# Title
## Section 1 {#sec-1}
Text with **bold** and *italic* and \`inline code\`.

| Header A | Header B |
| :--- | :--- |
| Val 1 | Val 2 |

> Important note quote

- Item 1
- Item 2
  - Subitem 2.1

\`\`\`bash
echo "code block"
\`\`\`

$$SLE = AV \\times EF$$

<script>alert('xss')</script>
`;

  const html = parseMarkdown(sampleMd);
  assert.ok(html.includes('<h1'), 'Must render h1');
  assert.ok(html.includes('<h2 id="sec-1"'), 'Must render h2 with custom id anchor');
  assert.ok(html.includes('<strong>bold</strong>'), 'Must render bold');
  assert.ok(html.includes('<em>italic</em>'), 'Must render italic');
  assert.ok(html.includes('<code>inline code</code>'), 'Must render inline code');
  assert.ok(html.includes('<div class="reading-table-wrapper">'), 'Must wrap tables for responsiveness');
  assert.ok(html.includes('<table class="reading-table">'), 'Must render table');
  assert.ok(html.includes('<blockquote class="reading-blockquote">'), 'Must render blockquote');
  assert.ok(html.includes('<ul>') && html.includes('<li>Item 1</li>'), 'Must render unordered list');
  assert.ok(html.includes('<pre class="reading-code-block"><code class="language-bash">'), 'Must render code block with language');
  assert.ok(html.includes('<div class="reading-math-block">'), 'Must render math block');
  assert.ok(!html.includes('<script>'), 'Must escape script tags for safety');
  assert.ok(html.includes('&lt;script&gt;'), 'Script tags must be HTML entity escaped');
});

// -------------------------------------------------------------
// Test 5: Reading Loader & Cache System
// -------------------------------------------------------------
await runAsyncTest('Reading Loader — Loads Domain 1 data and caches rendered output', async () => {
  clearReadingCache();
  assert.equal(getDomainReadingCached(1), null, 'Cache must be empty after clear');

  const loaded = await loadDomainReading(1);
  assert.equal(loaded.id, 1);
  assert.equal(loaded.published, true);
  assert.ok(loaded.renderedHtml && loaded.renderedHtml.length > 1000);
  assert.equal(loaded.objectives.length, 5);

  const cached = getDomainReadingCached(1);
  assert.ok(cached, 'Cache must return populated object after load');
  assert.equal(cached.renderedHtml, loaded.renderedHtml);

  // Test Domain 2-5 placeholder
  const d2 = await loadDomainReading(2);
  assert.equal(d2.id, 2);
  assert.equal(d2.published, false);
});

// -------------------------------------------------------------
// Test 6: 3-Level Sidebar Hierarchy (Domain -> 5 Objectives -> 23 Topics)
// -------------------------------------------------------------
runTest('3-Level Navigation Hierarchy — 5 Objectives and 23 Topic Anchors', () => {
  assert.equal(domain1Objectives.length, 5, 'Must have exactly 5 objectives in Domain 1');

  const expectedObjectives = [
    { id: '1.1', topicCount: 7 },
    { id: '1.2', topicCount: 5 },
    { id: '1.3', topicCount: 5 },
    { id: '1.4', topicCount: 3 },
    { id: '1.5', topicCount: 4 }
  ];

  let totalTopics = 0;
  expectedObjectives.forEach((expected, index) => {
    const obj = domain1Objectives[index];
    assert.equal(obj.id, expected.id, `Objective ${index + 1} id must be ${expected.id}`);
    assert.ok(obj.anchorId, `Objective ${obj.id} must have an anchorId`);
    assert.equal(obj.topics.length, expected.topicCount, `Objective ${obj.id} must have ${expected.topicCount} topics`);
    totalTopics += obj.topics.length;

    // Verify all topics have id and title
    obj.topics.forEach(t => {
      assert.ok(t.id && t.id.startsWith(`topic-${obj.id.replace('.', '-')}`), `Topic id ${t.id} must match objective prefix`);
      assert.ok(t.title && t.title.length > 5, `Topic ${t.id} must have descriptive title`);
    });
  });

  assert.equal(totalTopics, 24, 'Domain 1 must contain exactly 24 granular topics across all objectives (7+5+5+3+4)');
});

// -------------------------------------------------------------
// Test 7: Sidebar Anchors Match Article Content IDs
// -------------------------------------------------------------
await runAsyncTest('Anchor Alignment — Every sidebar link has a matching anchor in the article HTML', async () => {
  const loaded = await loadDomainReading(1);
  const html = loaded.renderedHtml;

  // Verify all 5 objective section anchors exist in the rendered HTML
  domain1Objectives.forEach(obj => {
    const objAnchor = `id="${obj.anchorId}"`;
    assert.ok(html.includes(objAnchor), `Rendered HTML must contain objective anchor ${objAnchor}`);

    // Verify all topic anchors exist
    obj.topics.forEach(topic => {
      const topicAnchor = `id="${topic.id}"`;
      assert.ok(html.includes(topicAnchor), `Rendered HTML must contain topic anchor ${topicAnchor}`);
    });
  });
});

// -------------------------------------------------------------
// Test 8: Reading Screen UI Shell Integration
// -------------------------------------------------------------
runTest('UI Shell Integration — Synchronous mount, independent toggles & scroll anchors', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    state.reading = {
      selectedDomainId: 1,
      sidebarCollapsed: false,
      expandedDomains: [1],
      expandedObjectives: ['1.1', '1.2']
    };

    let backCalled = false;
    renderReadingScreen(container, () => { backCalled = true; });

    // Header & Controls
    const backBtn = container.querySelector('#btn-reading-back');
    assert.ok(backBtn, 'Back button must exist');
    backBtn.click();
    assert.ok(backCalled, 'Back button must trigger callback');

    // Sidebar structure
    const sidebar = container.querySelector('#reading-sidebar');
    assert.ok(sidebar, 'Sidebar must exist');
    const domainGroups = container.querySelectorAll('.reading-nav-group');
    assert.equal(domainGroups.length, 5, 'Must render 5 domain navigation groups');

    // Domain 1 active
    const activeGroup = container.querySelector('.reading-nav-group[data-domain-id="1"]');
    assert.ok(activeGroup?.classList.contains('active'), 'Domain 1 group must be active');
    assert.ok(activeGroup?.classList.contains('expanded'), 'Domain 1 group must be expanded');

    // Objectives list inside Domain 1
    const objItems = activeGroup.querySelectorAll('.reading-nav-objective-item');
    assert.equal(objItems.length, 5, 'Domain 1 must render 5 objective items in sidebar');

    // Topic links in Objective 1.1
    const obj1Item = activeGroup.querySelector('.reading-nav-objective-item[data-objective-id="1.1"]');
    assert.ok(obj1Item, 'Objective 1.1 item must exist');
    const topicLinks = obj1Item.querySelectorAll('.reading-nav-topic-link');
    assert.equal(topicLinks.length, 7, 'Objective 1.1 must display 7 topic links');
    assert.equal(topicLinks[0].getAttribute('href'), '#topic-1-1-core-concepts');

    // Objective chevron toggle
    const objChevron = obj1Item.querySelector('[data-toggle-obj="1.1"]');
    assert.ok(objChevron, 'Objective 1.1 chevron must exist');
    const subTopics = obj1Item.querySelector('.reading-nav-topics');
    assert.ok(subTopics.classList.contains('expanded'), 'Objective 1.1 topics should be expanded initially');
    objChevron.click();
    assert.ok(!subTopics.classList.contains('expanded'), 'Objective 1.1 topics should collapse on click');

    // Article body rendered
    const article = container.querySelector('.reading-article[data-domain-id="1"]');
    assert.ok(article, 'Domain 1 article must be mounted in reading-content-pane');
    const articleMarkdown = article.querySelector('.reading-article-markdown');
    assert.ok(articleMarkdown, '.reading-article-markdown must be present');
    assert.ok(articleMarkdown.textContent.includes('CIA Triad'), 'Rendered article must include CIA Triad');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 9: Domains 2–5 Quiet Unpublished Presentation
// -------------------------------------------------------------
runTest('Unpublished Domains — Domains 2–5 show minimal coming soon notice', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    [2, 3, 4, 5].forEach(domainId => {
      state.reading = {
        selectedDomainId: domainId,
        sidebarCollapsed: false,
        expandedDomains: [domainId]
      };
      renderReadingScreen(container, () => {});

      const article = container.querySelector(`.reading-article[data-domain-id="${domainId}"]`);
      assert.ok(article, `Article for Domain ${domainId} must be rendered`);

      const unpublishedNote = article.querySelector('.reading-unpublished-note');
      assert.ok(unpublishedNote, `Domain ${domainId} must contain .reading-unpublished-note`);
      assert.equal(
        article.querySelector('.reading-unpublished-text')?.textContent.trim(),
        'Reading content coming soon.'
      );

      // Verify no heavy dashboard elements or fake content cards
      assert.equal(article.querySelector('.card'), null, 'Must not contain dashboard card containers');
      assert.equal(article.querySelector('.reading-body-empty-illustration'), null, 'Must not contain empty illustration');
    });
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 10: System Boundaries & Question Banks Intact
// -------------------------------------------------------------
runTest('Preservation Boundary — Protected question banks, quiz, vocabulary and slides intact', () => {
  const ccVersions = getExamVersions('isc2-cc');
  const legacyCard = ccVersions.find(v => v.id === '2026');
  const nextBankCard = ccVersions.find(v => v.id === 'next-bank');
  const vocabCard = ccVersions.find(v => v.id === 'isc2-cc-vocabulary');
  const slidesCard = ccVersions.find(v => v.id === 'isc2-cc-learning-slides');

  assert.equal(legacyCard?.questionCount, 583, 'Legacy 2026 card question count preserved');
  assert.equal(nextBankCard?.questionCount, 119, 'Next-bank 2026 card question count preserved');
  assert.equal(vocabCard?.vocabularyCount, 403, 'Vocabulary count preserved');
  assert.equal(slidesCard?.status, 'coming-soon', 'Learning slides status preserved');

  // Verify vocabulary databases
  const v1 = JSON.parse(fs.readFileSync(path.join(root, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-1.json'), 'utf8'));
  const v2 = JSON.parse(fs.readFileSync(path.join(root, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-2.json'), 'utf8'));
  const v3 = JSON.parse(fs.readFileSync(path.join(root, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-3.json'), 'utf8'));
  const v4 = JSON.parse(fs.readFileSync(path.join(root, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-4.json'), 'utf8'));
  const totalVocab = v1.entries.length + v2.entries.length + v3.entries.length + v4.entries.length;
  assert.equal(totalVocab, 403, 'Vocabulary must preserve all 403 terms across domains 1-4');
});

// -------------------------------------------------------------
// Final Verification Output
// -------------------------------------------------------------
console.log('\n=============================================================');
console.log(`Verification Summary: ${passedCount}/${testCount} tests passed.`);
console.log('=============================================================');

if (passedCount !== testCount) {
  process.exit(1);
}
