import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { domain5Metadata, domain5Objectives, domain5Review, getDomain5Markdown, domain5Scenarios } from '../content/isc2-cc-2026/reading/domain-5.js';
import { READING_DOMAINS } from '../js/ui/screen-reading.js';
import { loadDomainReading, getDomainReadingCached } from '../js/core/reading-loader.js';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';
import { VALID_DOMAIN_IDS, sanitizeDomainId, parseReadingDeepLink, createReadingProgressStore } from '../js/core/reading-progress.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('ISC2 CC 2026 — Reading Notes Domain 5 Verification Suite', async (t) => {
  const rawMarkdown = await getDomain5Markdown();
  const renderedHtml = parseMarkdown(rawMarkdown);

  await t.test('1. Domain 5 Metadata & Official Outline Boundaries', () => {
    assert.equal(domain5Metadata.id, 5, 'Domain ID must be 5');
    assert.equal(domain5Metadata.weight, '17.3%', 'Domain 5 weight must be 17.3% per official 2026 outline');
    assert.equal(domain5Metadata.published, true, 'Domain 5 must be published');
    assert.equal(domain5Metadata.shortTitle, 'Security Operations', 'Short title must be Security Operations');

    // Official 5 Objectives: 5.1, 5.2, 5.3, 5.4, 5.5
    assert.equal(domain5Objectives.length, 5, 'Must have exactly 5 official objectives (5.1 through 5.5)');
    assert.equal(domain5Objectives[0].id, '5.1', 'Objective 5.1 must exist');
    assert.equal(domain5Objectives[1].id, '5.2', 'Objective 5.2 must exist');
    assert.equal(domain5Objectives[2].id, '5.3', 'Objective 5.3 must exist');
    assert.equal(domain5Objectives[3].id, '5.4', 'Objective 5.4 must exist');
    assert.equal(domain5Objectives[4].id, '5.5', 'Objective 5.5 must exist');
  });

  await t.test('2. UI Shell & READING_DOMAINS Registration', () => {
    assert.equal(READING_DOMAINS.length, 5, 'READING_DOMAINS must contain all 5 domains');
    for (let i = 1; i <= 5; i++) {
      const d = READING_DOMAINS.find(dom => dom.id === i);
      assert.ok(d, `Domain ${i} must exist in READING_DOMAINS`);
      assert.ok(d.published, `Domain ${i} must be published`);
    }

    const d5 = READING_DOMAINS.find(d => d.id === 5);
    assert.equal(d5.weight, '17.3%', 'Domain 5 weight must be 17.3%');
    assert.equal(d5.objectives.length, 5, 'Domain 5 in READING_DOMAINS must have 5 objectives');
    assert.ok(d5.review, 'Domain 5 in READING_DOMAINS must have review section');
  });

  await t.test('3. Reading Loader Asynchronous & Synchronous Cache', async () => {
    const cached = getDomainReadingCached(5);
    assert.ok(cached, 'Domain 5 must be pre-populated in reading cache in Node');
    assert.equal(cached.id, 5);
    assert.ok(cached.renderedHtml.includes('Objective 5.1: Understand Data Security'));

    const loaded = await loadDomainReading(5);
    assert.ok(loaded, 'loadDomainReading(5) must resolve');
    assert.equal(loaded.published, true);
    assert.equal(loaded.objectives.length, 5);
  });

  await t.test('4. Topic Anchors & Navigation Alignment', () => {
    let totalTopics = 0;
    for (const obj of domain5Objectives) {
      assert.ok(renderedHtml.includes(`id="${obj.anchorId}"`), `Section anchor id="${obj.anchorId}" must exist in HTML`);
      for (const topic of obj.topics) {
        totalTopics++;
        assert.ok(renderedHtml.includes(`id="${topic.id}"`), `Topic anchor id="${topic.id}" must exist in HTML`);
      }
    }
    assert.equal(totalTopics, 33, 'Total granular topic anchors in objectives 5.1-5.5 must match 33 subsections');
    assert.equal(domain5Objectives[0].topics.length, 8, 'Objective 5.1 must have 8 subsections');
    assert.equal(domain5Objectives[1].topics.length, 9, 'Objective 5.2 must have 9 subsections');
    assert.equal(domain5Objectives[2].topics.length, 5, 'Objective 5.3 must have 5 subsections');
    assert.equal(domain5Objectives[3].topics.length, 5, 'Objective 5.4 must have 5 subsections');
    assert.equal(domain5Objectives[4].topics.length, 6, 'Objective 5.5 must have 6 subsections');

    // Review topic
    assert.ok(renderedHtml.includes('id="topic-5-review-scenarios"'), 'Review scenario anchor must exist');
  });

  await t.test('5. Progress Tracking, Persistence & Deep Links', () => {
    assert.ok(VALID_DOMAIN_IDS.includes(5), 'Domain 5 must be in VALID_DOMAIN_IDS');
    assert.equal(sanitizeDomainId(5), 5, 'sanitizeDomainId(5) must return 5');

    const mockStorage = new Map();
    const adapter = {
      getItem: k => mockStorage.get(k) || null,
      setItem: (k, v) => mockStorage.set(k, v),
      removeItem: k => mockStorage.delete(k)
    };
    const store = createReadingProgressStore(adapter);

    const saveResult = store.saveLocation({
      domainId: 5,
      topicId: 'topic-5-3-irp-lifecycle-phases',
      objectiveId: '5.3',
      scrollY: 3200
    });
    assert.equal(saveResult.persisted, true, 'Location in Domain 5 must persist');

    const progress = store.getProgress();
    assert.equal(progress.lastDomainId, 5);
    assert.equal(progress.lastTopicId, 'topic-5-3-irp-lifecycle-phases');
    assert.equal(progress.domains[5].lastScrollY, 3200);

    const deepLink = parseReadingDeepLink('#/reading/domain-5#topic-5-1-data-handling-classification');
    assert.equal(deepLink.isReadingRoute, true);
    assert.equal(deepLink.domainId, 5);
    assert.equal(deepLink.anchorId, 'topic-5-1-data-handling-classification');
  });

  await t.test('6. Semantic Diagrams Implementation & Responsive Dual Presentation', () => {
    const requiredDiagrams = [
      'irpLifecycle',
      'mitreAttackTacticTechnique',
      'securityTestingMatrix',
      'assetLifecycleAndEol'
    ];

    for (const key of requiredDiagrams) {
      assert.ok(diagrams[key], `Diagram "${key}" must be exported in diagrams generator`);
      assert.ok(renderedHtml.includes(`data-diagram="${key}"`), `Rendered HTML must contain diagram container for "${key}"`);

      const diagHtml = diagrams[key];
      assert.ok(diagHtml.includes('reading-diag-desktop'), `Diagram "${key}" must contain .reading-diag-desktop`);
      assert.ok(diagHtml.includes('reading-diag-mobile'), `Diagram "${key}" must contain .reading-diag-mobile`);
      assert.ok(diagHtml.includes('<svg'), `Diagram "${key}" desktop wrapper must contain SVG illustration`);
      assert.ok(diagHtml.includes('reading-mob-tier-card'), `Diagram "${key}" mobile wrapper must contain accessible cards`);
    }
  });

  await t.test('7. Content Richness, Comparison Tables & Scenarios', () => {
    // 12 Scenarios in JS export and MD
    assert.equal(domain5Scenarios.length, 12, 'Must export exactly 12 practice scenarios');
    const scenarioMatches = renderedHtml.match(/class="reading-scenario-card"/g) || [];
    assert.equal(scenarioMatches.length, 12, 'Must render exactly 12 scenario cards in HTML');

    // Tables check
    const tableMatches = renderedHtml.match(/<table\b/g) || [];
    assert.ok(tableMatches.length >= 8, `Must contain at least 8 comparison tables (found ${tableMatches.length})`);

    // Key technical terms presence
    const expectedTerms = [
      'NIST SP 800-88',
      'Data at Rest',
      'Data in Transit',
      'Data in Use',
      'Symmetric Encryption',
      'Asymmetric Encryption',
      'AES',
      'RSA',
      'ECC',
      'SHA-256',
      'Digital Signatures',
      'TPM',
      'HSM',
      'SIEM',
      'Event Correlation',
      'EDR',
      'DLP',
      'SNMP Traps',
      'False Positive',
      'False Negative',
      'Threat Actors',
      'Pyramid of Pain',
      'MITRE ATT&CK',
      'Incident Response Plan',
      'CSIRT',
      'Order of Volatility',
      'Tabletop Exercise',
      'Asset Lifecycle Management',
      'Compensating Controls',
      'Configuration Drift',
      'Patch Management',
      'Change Advisory Board',
      'Blue Team',
      'Red Team',
      'Purple Team',
      'SAST',
      'DAST',
      'Threat Modeling',
      'STRIDE',
      'Phishing',
      'Tailgating',
      'Impersonation'
    ];

    for (const term of expectedTerms) {
      assert.ok(rawMarkdown.includes(term), `Raw markdown must contain key syllabus term "${term}"`);
    }
  });

  await t.test('8. Markdown Formatting, Emojis & Math Delimiters', () => {
    // 0 decorative emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    assert.equal(emojiRegex.test(rawMarkdown), false, 'Markdown must contain 0 decorative emojis');

    // Verify lead paragraph exists
    assert.ok(rawMarkdown.includes('class="reading-lead"'), 'Must contain .reading-lead paragraph');
  });
});

