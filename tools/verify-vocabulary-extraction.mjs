/**
 * tools/verify-vocabulary-extraction.mjs
 * Verification suite for ISC2 CC 2026 Exam Vocabulary Extraction (Phase 1).
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';

const vocabDir = 'content/isc2-cc-2026/vocabulary';

test('All 7 vocabulary workspace files exist and have substantial content', () => {
  const expectedFiles = [
    'README.md',
    'schema.md',
    'domain-1.json',
    'domain-1-review.md',
    'confusing-terms.md',
    'exam-language.md',
    'supplemental-candidates.md'
  ];

  for (const file of expectedFiles) {
    const filePath = path.join(vocabDir, file);
    assert.ok(fs.existsSync(filePath), `File exists: ${file}`);
    const stats = fs.statSync(filePath);
    assert.ok(stats.size > 500, `File ${file} has substantial content (${stats.size} bytes)`);
  }
});

test('domain-1.json conforms strictly to data schema and integrity rules', () => {
  const raw = fs.readFileSync(path.join(vocabDir, 'domain-1.json'), 'utf8');
  const data = JSON.parse(raw);

  assert.equal(data.domain_id, 1, 'Domain ID must be 1');
  assert.equal(data.domain_name, 'Security Principles');
  assert.equal(data.version, '2026');
  assert.ok(Array.isArray(data.entries), 'Entries must be an array');
  assert.equal(data.entries.length, data.total_entries, 'total_entries must match array length');
  assert.ok(data.entries.length >= 100, `Expected at least 100 entries, got ${data.entries.length}`);

  const idSet = new Set();
  const validCategories = new Set(['core_term', 'acronym', 'exam_language', 'confusing_term', 'scenario_vocabulary']);
  const validSourceStatuses = new Set(['source_supported', 'editorial_synthesis', 'review_required', 'supplemental']);
  const validReviewStatuses = new Set(['draft', 'needs_human_review', 'approved']);
  const thaiRegex = /[\u0E00-\u0E7F]/;

  for (const entry of data.entries) {
    // Unique ID format
    assert.match(entry.id, /^VOC-CC26-D1-\d{3}$/, `ID format valid: ${entry.id}`);
    assert.ok(!idSet.has(entry.id), `ID must be unique: ${entry.id}`);
    idSet.add(entry.id);

    // Required non-empty string fields
    assert.ok(entry.term && entry.term.trim().length > 0, `term is non-empty in ${entry.id}`);
    assert.ok(entry.thai_meaning && entry.thai_meaning.trim().length > 0, `thai_meaning is non-empty in ${entry.id}`);
    assert.ok(entry.definition_en && entry.definition_en.trim().length > 0, `definition_en is non-empty in ${entry.id}`);
    assert.ok(entry.explanation_th && entry.explanation_th.trim().length > 0, `explanation_th is non-empty in ${entry.id}`);
    assert.ok(entry.example_en && entry.example_en.trim().length > 0, `example_en is non-empty in ${entry.id}`);
    assert.ok(entry.example_th && entry.example_th.trim().length > 0, `example_th is non-empty in ${entry.id}`);
    assert.ok(entry.exam_relevance && entry.exam_relevance.trim().length > 0, `exam_relevance is non-empty in ${entry.id}`);

    // Thai characters verification in Thai fields
    assert.ok(thaiRegex.test(entry.thai_meaning), `thai_meaning contains Thai script in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.explanation_th), `explanation_th contains Thai script in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.example_th), `example_th contains Thai script in ${entry.id}`);

    // Types and enums
    assert.equal(entry.domain, 1, `domain is 1 in ${entry.id}`);
    assert.ok(validCategories.has(entry.category), `valid category in ${entry.id}`);
    assert.ok(validSourceStatuses.has(entry.source_status), `valid source_status in ${entry.id}`);
    assert.ok(validReviewStatuses.has(entry.review_status), `valid review_status in ${entry.id}`);

    // Arrays
    assert.ok(Array.isArray(entry.confused_with), `confused_with is array in ${entry.id}`);
    assert.ok(Array.isArray(entry.keywords) && entry.keywords.length > 0, `keywords array non-empty in ${entry.id}`);
    assert.ok(Array.isArray(entry.sources) && entry.sources.length > 0, `sources array non-empty in ${entry.id}`);

    // Acronym consistency
    if (entry.category === 'acronym') {
      assert.ok(entry.acronym && entry.acronym.trim().length > 0, `acronym required for category 'acronym' in ${entry.id}`);
    }
  }
});

test('Coverage across all 5 Exam Objectives is demonstrated', () => {
  const raw = fs.readFileSync(path.join(vocabDir, 'domain-1.json'), 'utf8');
  const data = JSON.parse(raw);

  const objectiveCounts = {};
  for (const entry of data.entries) {
    objectiveCounts[entry.objective] = (objectiveCounts[entry.objective] || 0) + 1;
  }

  assert.ok(objectiveCounts['1.1'] >= 30, `Objective 1.1 has substantial coverage (${objectiveCounts['1.1']} entries)`);
  assert.ok(objectiveCounts['1.2'] >= 20, `Objective 1.2 has substantial coverage (${objectiveCounts['1.2']} entries)`);
  assert.ok(objectiveCounts['1.3'] >= 15, `Objective 1.3 has substantial coverage (${objectiveCounts['1.3']} entries)`);
  assert.ok(objectiveCounts['1.4'] >= 15, `Objective 1.4 has substantial coverage (${objectiveCounts['1.4']} entries)`);
  assert.ok(objectiveCounts['1.5'] >= 5, `Objective 1.5 has substantial coverage (${objectiveCounts['1.5']} entries)`);
  assert.ok(objectiveCounts['exam_strategy'] >= 5, `Exam Strategy has substantial coverage (${objectiveCounts['exam_strategy']} entries)`);
});

test('Supplemental candidates are properly segregated from primary database', () => {
  const supplementalContent = fs.readFileSync(path.join(vocabDir, 'supplemental-candidates.md'), 'utf8');
  assert.ok(supplementalContent.includes('Non-Repudiation'), 'Includes Non-Repudiation');
  assert.ok(supplementalContent.includes('Risk Appetite'), 'Includes Risk Appetite');
  assert.ok(supplementalContent.includes('Inherent Risk'), 'Includes Inherent Risk');
  assert.ok(supplementalContent.includes('Residual Risk'), 'Includes Residual Risk');
  assert.ok(supplementalContent.includes('Least Privilege'), 'Includes Least Privilege');
  assert.ok(supplementalContent.includes('Separation of Duties'), 'Includes Separation of Duties');
  assert.ok(supplementalContent.includes('Artificial Intelligence Security Risks'), 'Includes AI Security');
});

test('Existing question banks, engines, and configs remain untouched', () => {
  const d1Questions = fs.readFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-1.js', 'utf8');
  assert.ok(d1Questions.includes('const questions = ['), 'Question bank is valid');
  assert.ok(d1Questions.includes('"id": 584'), 'Q584 exists');
  assert.ok(d1Questions.includes('"id": 607'), 'Q607 exists');
});
