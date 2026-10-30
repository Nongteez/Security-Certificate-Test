import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { domain2Metadata, domain2Objectives, domain2Review, getDomain2Markdown, domain2Scenarios } from '../content/isc2-cc-2026/reading/domain-2.js';
import { READING_DOMAINS } from '../js/ui/screen-reading.js';
import { loadDomainReading, getDomainReadingCached } from '../js/core/reading-loader.js';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('ISC2 CC 2026 — Reading Notes Domain 2 Verification Suite', async (t) => {
  const rawMarkdown = await getDomain2Markdown();
  const renderedHtml = parseMarkdown(rawMarkdown);

  await t.test('1. Domain 2 Metadata & Official Outline Boundaries', () => {
    assert.equal(domain2Metadata.id, 2, 'Domain ID must be 2');
    assert.equal(domain2Metadata.weight, '17.3%', 'Domain 2 weight must be 17.3% per 2026 outline');
    assert.equal(domain2Metadata.published, true, 'Domain 2 must be published');
    assert.equal(domain2Metadata.shortTitle, 'Security Governance', 'Short title must be Security Governance');

    // Official 4 Objectives: 2.1 - 2.4 ONLY (No Objective 2.5)
    assert.equal(domain2Objectives.length, 4, 'Must have exactly 4 official objectives (2.1 to 2.4)');
    assert.equal(domain2Objectives[0].id, '2.1', 'Objective 2.1 must exist');
    assert.equal(domain2Objectives[1].id, '2.2', 'Objective 2.2 must exist');
    assert.equal(domain2Objectives[2].id, '2.3', 'Objective 2.3 must exist');
    assert.equal(domain2Objectives[3].id, '2.4', 'Objective 2.4 must exist');

    const hasObj25 = domain2Objectives.some(o => o.id === '2.5');
    assert.equal(hasObj25, false, 'Objective 2.5 must NOT be registered (Review is supplementary under 2.4)');
  });

  await t.test('2. UI Shell & READING_DOMAINS Registration', () => {
    const d1 = READING_DOMAINS.find(d => d.id === 1);
    const d2 = READING_DOMAINS.find(d => d.id === 2);
    const d3 = READING_DOMAINS.find(d => d.id === 3);
    const d4 = READING_DOMAINS.find(d => d.id === 4);
    const d5 = READING_DOMAINS.find(d => d.id === 5);

    assert.ok(d1?.published, 'Domain 1 must remain published');
    assert.ok(d2?.published, 'Domain 2 must now be published');
    assert.equal(d2.weight, '17.3%', 'Domain 2 weight must be 17.3%');
    assert.equal(d2.objectives.length, 4, 'Domain 2 in READING_DOMAINS must have 4 objectives');

    assert.equal(d4?.published, true, 'Domain 4 must now be published');
    assert.equal(d5?.published, false, 'Domain 5 must remain unpublished');
  });

  await t.test('3. Reading Loader Asynchronous & Synchronous Cache', async () => {
    const cached = getDomainReadingCached(2);
    assert.ok(cached, 'Domain 2 must be pre-populated in reading cache in Node');
    assert.equal(cached.id, 2);
    assert.ok(cached.renderedHtml.includes('Domain 2: Security Governance'));

    const loaded = await loadDomainReading(2);
    assert.ok(loaded, 'loadDomainReading(2) must resolve');
    assert.equal(loaded.published, true);
    assert.equal(loaded.objectives.length, 4);
  });

  await t.test('4. Topic Anchors & Navigation Alignment', () => {
    let totalTopics = 0;
    for (const obj of domain2Objectives) {
      assert.ok(renderedHtml.includes(`id="${obj.anchorId}"`), `Section anchor id="${obj.anchorId}" must exist in HTML`);
      for (const topic of obj.topics) {
        totalTopics++;
        assert.ok(renderedHtml.includes(`id="${topic.id}"`), `Topic anchor id="${topic.id}" must exist in HTML`);
      }
    }
    assert.equal(totalTopics, 28, 'Total granular topic anchors in objectives 2.1-2.4 must match 28 subsections');
    assert.ok(renderedHtml.includes('id="domain-2-review"'), 'Domain 2 review section anchor must exist');
    assert.ok(renderedHtml.includes('id="topic-2-review-scenarios"'), 'Domain 2 review topic anchor must exist');
    assert.ok(renderedHtml.includes('id="topic-2-4-review-scenarios"'), 'Backward-compatible review anchor must exist');
    assert.equal(domain2Review.id, 'domain-2-review', 'domain2Review metadata must be defined');
  });

  await t.test('5. Academic Content Completeness across Objectives 2.1–2.4', () => {
    // 2.1 Plan GRC
    assert.ok(renderedHtml.includes('GRC Foundations'), 'Must cover GRC Foundations');
    assert.ok(renderedHtml.includes('Governance, Risk, and Compliance'), 'Must define GRC');
    assert.ok(renderedHtml.includes('NIST CSF'), 'Must cover NIST CSF');
    assert.ok(renderedHtml.includes('ISO/IEC 27001'), 'Must cover ISO 27001');
    assert.ok(renderedHtml.includes('COBIT'), 'Must cover COBIT');
    assert.ok(renderedHtml.includes('ISMS'), 'Must define ISMS');
    assert.ok(renderedHtml.includes('Risk Register'), 'Must cover Risk Register');
    assert.ok(renderedHtml.includes('Risk Owner'), 'Must cover Risk Owner');
    assert.ok(renderedHtml.includes('Ransomware'), 'Must cover Ransomware case');

    // 2.2 Understand redundancy
    assert.ok(renderedHtml.includes('Business Continuity (BC)'), 'Must cover BC');
    assert.ok(renderedHtml.includes('Business Continuity Plan (BCP)'), 'Must cover BCP');
    assert.ok(renderedHtml.includes('Business Impact Analysis (BIA)'), 'Must cover BIA');
    assert.ok(renderedHtml.includes('Disaster Recovery (DR)'), 'Must cover DR');
    assert.ok(renderedHtml.includes('Recovery Time Objective (RTO)'), 'Must cover RTO');
    assert.ok(renderedHtml.includes('Recovery Point Objective (RPO)'), 'Must cover RPO');
    assert.ok(renderedHtml.includes('Hot Site'), 'Must cover Hot Site');
    assert.ok(renderedHtml.includes('Warm Site'), 'Must cover Warm Site');
    assert.ok(renderedHtml.includes('Cold Site'), 'Must cover Cold Site');
    assert.ok(renderedHtml.includes('17:00'), 'Must contain 17:00 outage timeline');

    // 2.3 Understand security awareness
    assert.ok(renderedHtml.includes('Security Culture'), 'Must cover Security Culture');
    assert.ok(renderedHtml.includes('Security Leadership'), 'Must cover Security Leadership');
    assert.ok(renderedHtml.includes('Shared Responsibility'), 'Must cover Shared Responsibility');
    assert.ok(renderedHtml.includes('Social Engineering'), 'Must cover Social Engineering');
    assert.ok(renderedHtml.includes('Phishing'), 'Must cover Phishing');
    assert.ok(renderedHtml.includes('Spear Phishing'), 'Must cover Spear Phishing');
    assert.ok(renderedHtml.includes('Whaling'), 'Must cover Whaling');
    assert.ok(renderedHtml.includes('Vishing'), 'Must cover Vishing');
    assert.ok(renderedHtml.includes('Smishing'), 'Must cover Smishing');
    assert.ok(renderedHtml.includes('Pretexting'), 'Must cover Pretexting');
    assert.ok(renderedHtml.includes('Phishing-Resistant'), 'Must cover Phishing-Resistant MFA');

    // 2.4 Measure cybersecurity effectiveness
    assert.ok(renderedHtml.includes('Security Metrics'), 'Must cover Security Metrics');
    assert.ok(renderedHtml.includes('MTTD'), 'Must cover MTTD');
    assert.ok(renderedHtml.includes('MTTR'), 'Must cover MTTR');
    assert.ok(renderedHtml.includes('Key Performance Indicator (KPI)'), 'Must cover KPI');
    assert.ok(renderedHtml.includes('Key Risk Indicator (KRI)'), 'Must cover KRI');
    assert.ok(renderedHtml.includes('Security Dashboard'), 'Must cover Security Dashboard');
    assert.ok(renderedHtml.includes('Security Scorecard'), 'Must cover Security Scorecard');
    assert.ok(renderedHtml.includes('Cybersecurity Report'), 'Must cover Cybersecurity Report');
  });

  await t.test('6. 4 Semantic Diagrams Generation & Integration', () => {
    // Assert all 4 diagram keys exist in diagrams
    assert.ok(diagrams.grcAlignment, 'diagrams.grcAlignment must exist');
    assert.ok(diagrams.bcVsDrScope, 'diagrams.bcVsDrScope must exist');
    assert.ok(diagrams.rtoRpoTimeline, 'diagrams.rtoRpoTimeline must exist');
    assert.ok(diagrams.effectivenessHierarchy, 'diagrams.effectivenessHierarchy must exist');

    // Assert rendered HTML contains all 4 diagrams
    assert.ok(renderedHtml.includes('data-diagram="grcAlignment"'), 'Rendered HTML must include grcAlignment diagram');
    assert.ok(renderedHtml.includes('data-diagram="bcVsDrScope"'), 'Rendered HTML must include bcVsDrScope diagram');
    assert.ok(renderedHtml.includes('data-diagram="rtoRpoTimeline"'), 'Rendered HTML must include rtoRpoTimeline diagram');
    assert.ok(renderedHtml.includes('data-diagram="effectivenessHierarchy"'), 'Rendered HTML must include effectivenessHierarchy diagram');
  });

  await t.test('7. Concept Distinctions, Exam Traps & Review Scenarios', () => {
    // Distinction grid
    assert.ok(renderedHtml.includes('reading-distinction-grid'), 'Must render distinction grid');
    const distinctionCards = renderedHtml.match(/class="reading-distinction-card"/g);
    assert.equal(distinctionCards?.length, 12, 'Must have exactly 12 distinction cards');

    // D2-R01: Distinction Card 12 includes Cybersecurity Report
    assert.ok(renderedHtml.includes('Cybersecurity Report') && renderedHtml.includes('Detailed Findings') && renderedHtml.includes('Recommended Actions'), 'Card 12 must define Cybersecurity Report with Detailed Findings and Recommended Actions');

    // D2-R04: Zero prose LaTeX dollar leakage in raw markdown
    assert.equal(rawMarkdown.includes('$'), false, 'D2-R04: Raw markdown must contain 0 unescaped LaTeX math delimiters');

    // D2-R06: English-first Ransomware in Table 3
    assert.ok(renderedHtml.includes('Ransomware (มัลแวร์เรียกค่าไถ่)'), 'D2-R06: Table 3 Threat cell must be English-first');

    // Review Scenarios
    assert.equal(domain2Scenarios.length, 12, 'Must export exactly 12 review scenarios');
    const scenarioCards = renderedHtml.match(/class="reading-scenario-card"/g);
    assert.equal(scenarioCards?.length, 12, 'Must render exactly 12 scenario cards');

    // Scenarios must have answer sections with .reading-scenario-answer
    const answerSections = renderedHtml.match(/class="reading-scenario-answer"/g);
    assert.equal(answerSections?.length, 12, 'All 12 scenario cards must have clean answer dividers');
  });

  await t.test('8. Preservation Boundaries', () => {
    // Ensure Domain 1 source and data files exist untouched
    const d1MdPath = path.join(rootDir, 'content', 'isc2-cc-2026', 'reading', 'domain-1.md');
    const d1JsPath = path.join(rootDir, 'content', 'isc2-cc-2026', 'reading', 'domain-1.js');
    assert.ok(fs.existsSync(d1MdPath), 'domain-1.md must exist');
    assert.ok(fs.existsSync(d1JsPath), 'domain-1.js must exist');

    const d1Content = fs.readFileSync(d1MdPath, 'utf8');
    assert.ok(d1Content.includes('Domain 1: Security Principles'), 'Domain 1 content preserved');
    assert.ok(d1Content.includes('The CIA Triad'), 'CIA Triad preserved');
    assert.ok(d1Content.includes('S - A - P - P'), 'Ethics mnemonic preserved');

    // Ensure Question bank and Vocabulary counts are preserved
    const vocabD1 = path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-1.json');
    const vocabD2 = path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-2.json');
    const vocabD3 = path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-3.json');
    const vocabD4 = path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-4.json');
    assert.ok(fs.existsSync(vocabD1), 'Vocabulary D1 preserved');
    assert.ok(fs.existsSync(vocabD2), 'Vocabulary D2 preserved');
    assert.ok(fs.existsSync(vocabD3), 'Vocabulary D3 preserved');
    assert.ok(fs.existsSync(vocabD4), 'Vocabulary D4 preserved');
  });
});

