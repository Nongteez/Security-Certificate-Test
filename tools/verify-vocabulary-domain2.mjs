/**
 * tools/verify-vocabulary-domain2.mjs
 * Verification test suite for ISC2 CC 2026 Domain 2 Vocabulary Integration.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { loadVocabularyData } from '../js/core/vocabulary-loader.js';
import versions from '../data/exam-versions.js';

const vocabDir = 'content/isc2-cc-2026/vocabulary';
const d1Path = path.join(vocabDir, 'domain-1.json');
const d2Path = path.join(vocabDir, 'domain-2.json');

test('1. Domain 2 vocabulary file exists and conforms to schema', () => {
  assert.ok(fs.existsSync(d2Path), 'domain-2.json exists');
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));

  assert.equal(d2.domain_id, 2, 'Domain ID must be 2');
  assert.equal(d2.domain_name, 'Security Governance', 'Domain name must be Security Governance');
  assert.equal(d2.version, '2026', 'Version must be 2026');
  assert.ok(Array.isArray(d2.entries), 'Entries must be an array');
  assert.equal(d2.entries.length, d2.total_entries, 'total_entries must match entries array length');
  assert.ok(d2.entries.length >= 73, `Expected at least 73 entries, got ${d2.entries.length}`);

  // Summary counts match array breakdown
  const sumCategories = Object.values(d2.categories_summary).reduce((a, b) => a + b, 0);
  assert.equal(sumCategories, d2.total_entries, 'categories_summary sum must match total_entries');
});

test('2. Unique IDs, valid format, and zero collisions with Domain 1', () => {
  const d1 = JSON.parse(fs.readFileSync(d1Path, 'utf8'));
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));

  const idSet = new Set();
  const d2TermSet = new Set();

  d1.entries.forEach(e => idSet.add(e.id));
  assert.equal(idSet.size, 110, 'D1 must have 110 unique IDs');

  for (const entry of d2.entries) {
    assert.match(entry.id, /^VOC-CC26-D2-\d{3}$/, `ID format valid: ${entry.id}`);
    assert.ok(!idSet.has(entry.id), `ID collision detected: ${entry.id}`);
    idSet.add(entry.id);

    const termKey = entry.term.trim().toLowerCase();
    assert.ok(!d2TermSet.has(termKey), `Duplicate term in Domain 2: "${entry.term}"`);
    d2TermSet.add(termKey);
  }

  assert.equal(idSet.size, 110 + d2.total_entries, `Expected ${110 + d2.total_entries} total unique IDs`);
});

test('3. Acronym completeness and expansions', () => {
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  const acronymEntries = d2.entries.filter(e => e.category === 'acronym');

  assert.ok(acronymEntries.length >= 10, 'Expected at least 10 acronym entries');

  for (const entry of acronymEntries) {
    assert.ok(entry.acronym && entry.acronym.trim().length > 0, `acronym required in ${entry.id}`);
    assert.ok(entry.full_form && entry.full_form.trim().length > 0, `full_form required in ${entry.id}`);
  }

  // Spot check canonical expansions
  const edr = d2.entries.find(e => e.acronym === 'EDR');
  assert.ok(edr && edr.full_form.includes('Endpoint Detection and Response'));

  const phi = d2.entries.find(e => e.acronym === 'PHI');
  assert.ok(phi && phi.full_form.includes('Protected Health Information'));

  const sla = d2.entries.find(e => e.acronym === 'SLA');
  assert.ok(sla && sla.full_form.includes('Service Level Agreement'));
});

test('4. Bilingual English–Thai parity and character integrity', () => {
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  const thaiRegex = /[\u0E00-\u0E7F]/;

  for (const entry of d2.entries) {
    // English non-empty strings
    assert.ok(entry.term?.trim().length > 0, `term non-empty in ${entry.id}`);
    assert.ok(entry.definition_en?.trim().length > 0, `definition_en non-empty in ${entry.id}`);
    assert.ok(entry.example_en?.trim().length > 0, `example_en non-empty in ${entry.id}`);
    assert.ok(entry.exam_relevance?.trim().length > 0, `exam_relevance non-empty in ${entry.id}`);

    // Thai non-empty strings with Thai script
    assert.ok(entry.thai_meaning?.trim().length > 0, `thai_meaning non-empty in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.thai_meaning), `thai_meaning contains Thai script in ${entry.id}`);

    assert.ok(entry.explanation_th?.trim().length > 0, `explanation_th non-empty in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.explanation_th), `explanation_th contains Thai script in ${entry.id}`);

    assert.ok(entry.example_th?.trim().length > 0, `example_th non-empty in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.example_th), `example_th contains Thai script in ${entry.id}`);
  }
});

test('5. Domain 2 Objective mapping and coverage', () => {
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  const validObjectives = new Set(['2.1', '2.2', '2.3', '2.4', 'exam_strategy']);
  const objCounts = {};

  for (const entry of d2.entries) {
    assert.equal(entry.domain, 2, `domain must be 2 in ${entry.id}`);
    assert.ok(validObjectives.has(entry.objective), `Invalid objective in ${entry.id}: ${entry.objective}`);
    objCounts[entry.objective] = (objCounts[entry.objective] || 0) + 1;
  }

  assert.ok(objCounts['2.1'] >= 25, `Objective 2.1 substantial coverage (${objCounts['2.1']} entries)`);
  assert.ok(objCounts['2.2'] >= 20, `Objective 2.2 substantial coverage (${objCounts['2.2']} entries)`);
  assert.ok(objCounts['2.3'] >= 15, `Objective 2.3 substantial coverage (${objCounts['2.3']} entries)`);
  assert.ok(objCounts['2.4'] >= 15, `Objective 2.4 substantial coverage (${objCounts['2.4']} entries)`);
});

test('6. Essential governance concept distinctions are included', () => {
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  const terms = d2.entries.map(e => e.term.toLowerCase());

  // RTO vs RPO
  assert.ok(terms.some(t => t.includes('rto vs rpo')), 'Contains RTO vs RPO distinction');

  // BCP vs DRP
  assert.ok(terms.some(t => t.includes('bcp vs drp')), 'Contains BCP vs DRP distinction');

  // Risk Appetite vs Risk Tolerance
  assert.ok(terms.some(t => t.includes('risk appetite vs risk tolerance')), 'Contains Risk Appetite vs Risk Tolerance distinction');

  // KPI vs KRI
  assert.ok(terms.some(t => t.includes('kpi vs kri')), 'Contains KPI vs KRI distinction');

  // Recovery site types
  assert.ok(terms.some(t => t.includes('hot vs warm vs cold')), 'Contains recovery sites comparison');

  // Social engineering hierarchy
  assert.ok(terms.some(t => t.includes('phishing vs spear phishing vs whaling')), 'Contains phishing distinction');

  // Channel vs narrative
  assert.ok(terms.some(t => t.includes('vishing / smishing vs pretexting')), 'Contains pretexting distinction');
});

test('7. Quarantined defects are excluded or corrected', () => {
  const d2Text = fs.readFileSync(d2Path, 'utf8');

  // KNOW-D2-028 statutory overreach check
  assert.ok(!d2Text.includes('mandates 2-hour RTO'), 'No false statutory RTO hours');
  assert.ok(!d2Text.includes('GDPR mandates RTO'), 'No false GDPR RTO mandates');

  // Cold site definition corrected (NIST SP 800-34)
  const coldSite = JSON.parse(d2Text).entries.find(e => e.term === 'Cold Site');
  assert.ok(coldSite, 'Cold site entry exists');
  assert.ok(coldSite.definition_en.includes('ZERO pre-installed computing hardware'), 'Cold site correctly specifies zero pre-installed computing hardware');
  assert.ok(coldSite.definition_en.includes('utilities'), 'Cold site correctly acknowledges physical utilities/space');

  // Semi-quantitative assessment corrected (NIST SP 800-30 ordinal scales)
  const semiQuant = JSON.parse(d2Text).entries.find(e => e.term.includes('Semi-Quantitative'));
  assert.ok(semiQuant, 'Semi-quantitative entry exists');
  assert.ok(semiQuant.definition_en.includes('representative numerical scores') || semiQuant.definition_en.includes('ranked bins'), 'Semi-quantitative defines ordinal numeric bins');
});

test('8. Vocabulary Loader loads Domain 1, Domain 2, and All domains', async () => {
  const d1 = await loadVocabularyData(1);
  assert.equal(d1.domain_id, 1, 'Domain 1 loaded');
  assert.equal(d1.entries.length, 110, 'D1 has 110 entries');

  const d2 = await loadVocabularyData(2);
  assert.equal(d2.domain_id, 2, 'Domain 2 loaded');
  assert.equal(d2.entries.length, 101, 'D2 has 101 entries');

  const all = await loadVocabularyData('all');
  assert.equal(all.domain_id, 'all', 'Combined dataset loaded');
  assert.ok(all.total_entries >= 211, 'Combined total is at least 211');
  assert.equal(all.entries.length, all.total_entries, 'Combined entries length matches total_entries');
});

test('9. Exam versions registry updated with combined vocabularyCount', () => {
  const vocabEntry = versions.find(v => v.id === 'isc2-cc-vocabulary');
  assert.ok(vocabEntry, 'Vocabulary entry exists in exam-versions.js');
  assert.equal(vocabEntry.status, 'available', 'Status is available');
  assert.ok(vocabEntry.vocabularyCount >= 211, 'vocabularyCount is at least 211');
});

test('10. Question banks and Domain 1 vocabulary remain untouched', () => {
  const d1Questions = fs.readFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-1.js', 'utf8');
  assert.ok(d1Questions.includes('"id": 584'), 'Q584 exists in D1 bank');
  assert.ok(d1Questions.includes('"id": 607'), 'Q607 exists in D1 bank');

  const d2Questions = fs.readFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-2.js', 'utf8');
  assert.ok(d2Questions.includes('"id": 608'), 'Q608 exists in D2 bank');
  assert.ok(d2Questions.includes('"id": 646'), 'Q646 exists in D2 bank');

  const d1Vocab = JSON.parse(fs.readFileSync(d1Path, 'utf8'));
  assert.equal(d1Vocab.total_entries, 110, 'Domain 1 vocabulary untouched (110 entries)');
});
