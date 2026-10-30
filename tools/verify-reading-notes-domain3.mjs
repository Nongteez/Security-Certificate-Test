import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { domain3Metadata, domain3Objectives, domain3Review, getDomain3Markdown, domain3Scenarios } from '../content/isc2-cc-2026/reading/domain-3.js';
import { READING_DOMAINS } from '../js/ui/screen-reading.js';
import { loadDomainReading, getDomainReadingCached } from '../js/core/reading-loader.js';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('ISC2 CC 2026 — Reading Notes Domain 3 Verification Suite', async (t) => {
  const rawMarkdown = await getDomain3Markdown();
  const renderedHtml = parseMarkdown(rawMarkdown);

  await t.test('1. Domain 3 Metadata & Official Outline Boundaries', () => {
    assert.equal(domain3Metadata.id, 3, 'Domain ID must be 3');
    assert.equal(domain3Metadata.weight, '20%', 'Domain 3 weight must be 20% per 2026 outline');
    assert.equal(domain3Metadata.published, true, 'Domain 3 must be published');
    assert.equal(domain3Metadata.shortTitle, 'Access Controls', 'Short title must be Access Controls');

    // Official 2 Objectives: 3.1 & 3.2 ONLY (No Objective 3.3, 3.4, or 3.5)
    assert.equal(domain3Objectives.length, 2, 'Must have exactly 2 official objectives (3.1 and 3.2)');
    assert.equal(domain3Objectives[0].id, '3.1', 'Objective 3.1 must exist');
    assert.equal(domain3Objectives[1].id, '3.2', 'Objective 3.2 must exist');

    const hasObj33 = domain3Objectives.some(o => o.id === '3.3');
    assert.equal(hasObj33, false, 'Objective 3.3 must NOT be registered (Review is supplementary outside 3.2)');
  });

  await t.test('2. UI Shell & READING_DOMAINS Registration', () => {
    const d1 = READING_DOMAINS.find(d => d.id === 1);
    const d2 = READING_DOMAINS.find(d => d.id === 2);
    const d3 = READING_DOMAINS.find(d => d.id === 3);
    const d4 = READING_DOMAINS.find(d => d.id === 4);
    const d5 = READING_DOMAINS.find(d => d.id === 5);

    assert.ok(d1?.published, 'Domain 1 must remain published');
    assert.ok(d2?.published, 'Domain 2 must remain published');
    assert.ok(d3?.published, 'Domain 3 must now be published');
    assert.equal(d3.weight, '20%', 'Domain 3 weight must be 20%');
    assert.equal(d3.objectives.length, 2, 'Domain 3 in READING_DOMAINS must have 2 objectives');
    assert.ok(d3.review, 'Domain 3 in READING_DOMAINS must have review section');

    assert.equal(d4?.published, true, 'Domain 4 must now be published');
    assert.equal(d5?.published, false, 'Domain 5 must remain unpublished');
  });

  await t.test('3. Reading Loader Asynchronous & Synchronous Cache', async () => {
    const cached = getDomainReadingCached(3);
    assert.ok(cached, 'Domain 3 must be pre-populated in reading cache in Node');
    assert.equal(cached.id, 3);
    assert.ok(cached.renderedHtml.includes('Domain 3: Access Controls'));

    const loaded = await loadDomainReading(3);
    assert.ok(loaded, 'loadDomainReading(3) must resolve');
    assert.equal(loaded.published, true);
    assert.equal(loaded.objectives.length, 2);
  });

  await t.test('4. Topic Anchors & Navigation Alignment', () => {
    let totalTopics = 0;
    for (const obj of domain3Objectives) {
      assert.ok(renderedHtml.includes(`id="${obj.anchorId}"`), `Section anchor id="${obj.anchorId}" must exist in HTML`);
      for (const topic of obj.topics) {
        totalTopics++;
        assert.ok(renderedHtml.includes(`id="${topic.id}"`), `Topic anchor id="${topic.id}" must exist in HTML`);
      }
    }
    assert.equal(totalTopics, 16, 'Total granular topic anchors in objectives 3.1 & 3.2 must match 16 subsections');
    assert.ok(renderedHtml.includes('id="domain-3-review"'), 'Domain 3 review section anchor must exist');
    assert.ok(renderedHtml.includes('id="topic-3-review-scenarios"'), 'Domain 3 review topic anchor must exist');
    assert.equal(domain3Review.id, 'domain-3-review', 'domain3Review metadata must be defined');
  });

  await t.test('5. Academic Content Completeness across Objectives 3.1 & 3.2', () => {
    // 3.1 Understand identity life cycle management
    assert.ok(renderedHtml.includes('Identity and Access Management'), 'Must cover IAM');
    assert.ok(renderedHtml.includes('JML (Joiner, Mover, Leaver)'), 'Must cover JML lifecycle');
    assert.ok(renderedHtml.includes('Define Roles and Responsibilities'), 'Must cover Define Roles first');
    assert.ok(renderedHtml.includes('Provisioning'), 'Must cover Provisioning');
    assert.ok(renderedHtml.includes('Unique Identity') || renderedHtml.includes('Unique Digital ID'), 'Must cover Unique ID');
    assert.ok(renderedHtml.includes('Periodic Access Review'), 'Must cover Periodic Access Review');
    assert.ok(renderedHtml.includes('Privilege Accumulation') || renderedHtml.includes('Privilege Creep'), 'Must cover Privilege Accumulation/Creep');
    assert.ok(renderedHtml.includes('Excessive Permissions'), 'Must cover Excessive Permissions');
    assert.ok(renderedHtml.includes('Orphaned Accounts'), 'Must cover Orphaned Accounts');
    assert.ok(renderedHtml.includes('Deprovisioning'), 'Must cover Deprovisioning');
    assert.ok(renderedHtml.includes('Disable Account'), 'Must cover Disable Account preference');
    assert.ok(renderedHtml.includes('NIST SP 800-63'), 'Must cover NIST SP 800-63');
    assert.ok(renderedHtml.includes('Identity Proofing'), 'Must cover Identity Proofing (63A)');
    assert.ok(renderedHtml.includes('Authentication'), 'Must cover Authentication (63B)');
    assert.ok(renderedHtml.includes('Federation'), 'Must cover Federation (63C)');
    assert.ok(renderedHtml.includes('Directory Services'), 'Must cover Directory Services');
    assert.ok(renderedHtml.includes('Identity Providers'), 'Must cover Identity Providers');
    assert.ok(renderedHtml.includes('Principle of Least Privilege (PoLP)'), 'Must cover PoLP');

    // 3.2 Understand logical access controls
    assert.ok(renderedHtml.includes('Logical Access Controls'), 'Must cover Logical Access Controls');
    assert.ok(renderedHtml.includes('Physical Access Controls'), 'Must cover Physical Access Controls');
    assert.ok(renderedHtml.includes('Segregation of Duties (SoD)'), 'Must cover SoD');
    assert.ok(renderedHtml.includes('Discretionary Access Control (DAC)'), 'Must cover DAC');
    assert.ok(renderedHtml.includes('Resource Owner'), 'Must cover Resource Owner in DAC');
    assert.ok(renderedHtml.includes('Mandatory Access Control (MAC)'), 'Must cover MAC');
    assert.ok(renderedHtml.includes('Security Classification') || renderedHtml.includes('Security Classification / Label'), 'Must cover Security Labels in MAC');
    assert.ok(renderedHtml.includes('Security Clearance'), 'Must cover Clearances in MAC');
    assert.ok(renderedHtml.includes('Security Clearance alone') || renderedHtml.includes('Security clearance alone does not automatically authorize access'), 'Must cover Need-to-Know vs Clearance distinction in MAC');
    assert.ok(renderedHtml.includes('Role-Based Access Control (RBAC)'), 'Must cover RBAC');
    assert.ok(renderedHtml.includes('Predefined Job Roles') || renderedHtml.includes('Predefined Roles'), 'Must cover Predefined Roles in RBAC');
    assert.ok(renderedHtml.includes('Attribute-Based Access Control (ABAC)'), 'Must cover ABAC');
  });

  await t.test('6. 4 Semantic Diagrams Generation & Integration', () => {
    // Assert all 4 diagram keys exist in diagrams
    assert.ok(diagrams.iamLifecycle, 'diagrams.iamLifecycle must exist');
    assert.ok(diagrams.nistSp80063Framework, 'diagrams.nistSp80063Framework must exist');
    assert.ok(diagrams.leastPrivilegeVsSod, 'diagrams.leastPrivilegeVsSod must exist');
    assert.ok(diagrams.accessControlModels, 'diagrams.accessControlModels must exist');

    // Assert rendered HTML contains all 4 diagrams
    assert.ok(renderedHtml.includes('data-diagram="iamLifecycle"'), 'Rendered HTML must include iamLifecycle diagram');
    assert.ok(renderedHtml.includes('data-diagram="nistSp80063Framework"'), 'Rendered HTML must include nistSp80063Framework diagram');
    assert.ok(renderedHtml.includes('data-diagram="leastPrivilegeVsSod"'), 'Rendered HTML must include leastPrivilegeVsSod diagram');
    assert.ok(renderedHtml.includes('data-diagram="accessControlModels"'), 'Rendered HTML must include accessControlModels diagram');

    // Assert iamLifecycle mobile stack includes Continuous Governance banner
    assert.ok(diagrams.iamLifecycle.includes('CONTINUOUS GOVERNANCE') && diagrams.iamLifecycle.includes('Periodic Access Reviews'), 'iamLifecycle mobile must have continuous governance banner');

    // Assert 0 HTML comments inside diagrams
    assert.equal(/<!--/.test(diagrams.iamLifecycle), false, 'iamLifecycle must contain 0 comments');
    assert.equal(/<!--/.test(diagrams.nistSp80063Framework), false, 'nistSp80063Framework must contain 0 comments');
    assert.equal(/<!--/.test(diagrams.leastPrivilegeVsSod), false, 'leastPrivilegeVsSod must contain 0 comments');
    assert.equal(/<!--/.test(diagrams.accessControlModels), false, 'accessControlModels must contain 0 comments');
  });

  await t.test('7. Concept Distinctions, Exam Traps & Review Scenarios', () => {
    // Distinction grid
    assert.ok(renderedHtml.includes('reading-distinction-grid'), 'Must render distinction grid');
    const distinctionCards = renderedHtml.match(/class="reading-distinction-card"/g);
    assert.equal(distinctionCards?.length, 10, 'Must have exactly 10 distinction cards');

    // Zero unescaped LaTeX dollar leakage in raw markdown
    assert.equal(rawMarkdown.includes('$'), false, 'Raw markdown must contain 0 unescaped LaTeX math delimiters');

    // Review Scenarios
    assert.equal(domain3Scenarios.length, 12, 'Must export exactly 12 review scenarios');
    const scenarioCards = renderedHtml.match(/class="reading-scenario-card"/g);
    assert.equal(scenarioCards?.length, 12, 'Must render exactly 12 scenario cards');

    // Scenarios must have answer sections with .reading-scenario-answer
    const answerSections = renderedHtml.match(/class="reading-scenario-answer"/g);
    assert.equal(answerSections?.length, 12, 'All 12 scenario cards must have clean answer dividers');
  });

  await t.test('8. Zero-Defect Quality Standards', () => {
    // No raw H1 in markdown source (must start directly with <p class="reading-lead">)
    assert.equal(/^#\s+/m.test(rawMarkdown), false, 'Domain 3 markdown must not contain raw H1 (# Heading)');

    // Zero decorative emojis in markdown
    const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    assert.equal(emojiRegex.test(rawMarkdown), false, 'Domain 3 markdown must contain 0 decorative emojis');

    // Formulas wrapped in reading-math-formula
    assert.ok(renderedHtml.includes('class="reading-math-formula"'), 'Math formulas must be wrapped in reading-math-formula');
  });

  await t.test('9. Preservation Boundaries', () => {
    // Ensure Domain 1 & 2 files exist untouched
    const d1MdPath = path.join(rootDir, 'content', 'isc2-cc-2026', 'reading', 'domain-1.md');
    const d2MdPath = path.join(rootDir, 'content', 'isc2-cc-2026', 'reading', 'domain-2.md');
    assert.ok(fs.existsSync(d1MdPath), 'domain-1.md must exist');
    assert.ok(fs.existsSync(d2MdPath), 'domain-2.md must exist');

    const d1Content = fs.readFileSync(d1MdPath, 'utf8');
    assert.ok(d1Content.includes('Domain 1: Security Principles'), 'Domain 1 content preserved');

    const d2Content = fs.readFileSync(d2MdPath, 'utf8');
    assert.ok(d2Content.includes('Domain 2: Security Governance'), 'Domain 2 content preserved');

    // Ensure Question banks and Vocabularies preserved
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

