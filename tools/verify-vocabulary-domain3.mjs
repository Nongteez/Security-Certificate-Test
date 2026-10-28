/**
 * tools/verify-vocabulary-domain3.mjs
 * Verification test suite for ISC2 CC 2026 Domain 3 Vocabulary Integration.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { loadVocabularyData } from '../js/core/vocabulary-loader.js';
import versions from '../data/exam-versions.js';
import { loadExamConfig, loadQuestionsForDomains } from '../js/core/question-loader.js';

const vocabDir = 'content/isc2-cc-2026/vocabulary';
const d1Path = path.join(vocabDir, 'domain-1.json');
const d2Path = path.join(vocabDir, 'domain-2.json');
const d3Path = path.join(vocabDir, 'domain-3.json');

test('1. Domain 3 vocabulary file exists and conforms to schema', () => {
  assert.ok(fs.existsSync(d3Path), 'domain-3.json exists');
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));

  assert.equal(d3.domain_id, 3, 'Domain ID must be 3');
  assert.equal(d3.domain_name, 'Identity and Access Management Concepts', 'Domain name must match 2026 outline');
  assert.equal(d3.version, '2026', 'Version must be 2026');
  assert.ok(Array.isArray(d3.entries), 'Entries must be an array');
  assert.equal(d3.entries.length, d3.total_entries, 'total_entries must match entries array length');
  assert.ok(d3.entries.length >= 80, `Expected at least 80 entries, got ${d3.entries.length}`);

  // Summary counts match array breakdown
  const sumCategories = Object.values(d3.categories_summary).reduce((a, b) => a + b, 0);
  assert.equal(sumCategories, d3.total_entries, 'categories_summary sum must match total_entries');
});

test('2. Unique IDs, valid format, and zero collisions across all domains', () => {
  const d1 = JSON.parse(fs.readFileSync(d1Path, 'utf8'));
  const d2 = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));

  const idSet = new Set();
  const d3TermSet = new Set();

  d1.entries.forEach(e => idSet.add(e.id));
  assert.equal(idSet.size, 110, 'D1 must have 110 unique IDs');

  d2.entries.forEach(e => idSet.add(e.id));
  assert.equal(idSet.size, 211, 'D1 + D2 must have 211 unique IDs');

  for (const entry of d3.entries) {
    assert.match(entry.id, /^VOC-CC26-D3-\d{3}$/, `ID format valid: ${entry.id}`);
    assert.ok(!idSet.has(entry.id), `ID collision detected: ${entry.id}`);
    idSet.add(entry.id);

    const termKey = entry.term.trim().toLowerCase();
    assert.ok(!d3TermSet.has(termKey), `Duplicate term in Domain 3: "${entry.term}"`);
    d3TermSet.add(termKey);
  }

  assert.equal(idSet.size, 211 + d3.total_entries, `Expected ${211 + d3.total_entries} total unique IDs across all domains`);
});

test('3. Acronym completeness and canonical expansions', () => {
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));
  const acronymEntries = d3.entries.filter(e => e.category === 'acronym');

  assert.ok(acronymEntries.length >= 15, `Expected at least 15 acronym entries, got ${acronymEntries.length}`);

  for (const entry of acronymEntries) {
    assert.ok(entry.acronym && entry.acronym.trim().length > 0, `acronym required in ${entry.id}`);
    assert.ok(entry.full_form && entry.full_form.trim().length > 0, `full_form required in ${entry.id}`);
  }

  // Spot check canonical IAM expansions
  const iam = d3.entries.find(e => e.acronym === 'IAM');
  assert.ok(iam && iam.full_form === 'Identity and Access Management');

  const idp = d3.entries.find(e => e.acronym === 'IdP');
  assert.ok(idp && idp.full_form === 'Identity Provider');

  const polp = d3.entries.find(e => e.acronym === 'PoLP');
  assert.ok(polp && polp.full_form === 'Principle of Least Privilege');

  const sod = d3.entries.find(e => e.acronym === 'SoD');
  assert.ok(sod && sod.full_form === 'Separation of Duties');

  const dac = d3.entries.find(e => e.acronym === 'DAC');
  assert.ok(dac && dac.full_form === 'Discretionary Access Control');

  const mac = d3.entries.find(e => e.acronym === 'MAC');
  assert.ok(mac && mac.full_form === 'Mandatory Access Control');

  const rbac = d3.entries.find(e => e.acronym === 'RBAC');
  assert.ok(rbac && rbac.full_form === 'Role-Based Access Control');

  const abac = d3.entries.find(e => e.acronym === 'ABAC');
  assert.ok(abac && abac.full_form === 'Attribute-Based Access Control');

  const pam = d3.entries.find(e => e.acronym === 'PAM');
  assert.ok(pam && pam.full_form === 'Privileged Access Management');

  const jit = d3.entries.find(e => e.acronym === 'JIT');
  assert.ok(jit && jit.full_form === 'Just-in-Time Access');

  const mfa = d3.entries.find(e => e.acronym === 'MFA');
  assert.ok(mfa && mfa.full_form === 'Multifactor Authentication');
});

test('4. Bilingual English–Thai parity and character integrity', () => {
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));
  const thaiRegex = /[\u0E00-\u0E7F]/;

  for (const entry of d3.entries) {
    // English non-empty strings
    assert.ok(entry.term?.trim().length > 0, `term non-empty in ${entry.id}`);
    assert.ok(entry.definition_en?.trim().length > 0, `definition_en non-empty in ${entry.id}`);
    assert.ok(entry.example_en?.trim().length > 0, `example_en non-empty in ${entry.id}`);
    assert.ok(entry.exam_relevance?.trim().length > 0, `exam_relevance non-empty in ${entry.id}`);

    // Thai non-empty strings with authentic Thai script
    assert.ok(entry.thai_meaning?.trim().length > 0, `thai_meaning non-empty in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.thai_meaning), `thai_meaning contains Thai script in ${entry.id}`);

    assert.ok(entry.explanation_th?.trim().length > 0, `explanation_th non-empty in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.explanation_th), `explanation_th contains Thai script in ${entry.id}`);

    assert.ok(entry.example_th?.trim().length > 0, `example_th non-empty in ${entry.id}`);
    assert.ok(thaiRegex.test(entry.example_th), `example_th contains Thai script in ${entry.id}`);
  }
});

test('5. Domain 3 Objective mapping and balanced coverage', () => {
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));
  const validObjectives = new Set(['3.1', '3.2', 'exam_strategy']);
  const objCounts = {};

  for (const entry of d3.entries) {
    assert.equal(entry.domain, 3, `domain must be 3 in ${entry.id}`);
    assert.ok(validObjectives.has(entry.objective), `Invalid objective in ${entry.id}: ${entry.objective}`);
    objCounts[entry.objective] = (objCounts[entry.objective] || 0) + 1;
  }

  assert.ok(objCounts['3.1'] >= 45, `Objective 3.1 substantial coverage (${objCounts['3.1']} entries)`);
  assert.ok(objCounts['3.2'] >= 45, `Objective 3.2 substantial coverage (${objCounts['3.2']} entries)`);
  assert.ok(objCounts['exam_strategy'] >= 3, `Exam strategy qualifiers present (${objCounts['exam_strategy']} entries)`);
});

test('6. Essential IAM concept comparisons and confusing terms are covered', () => {
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));
  const terms = d3.entries.map(e => e.term.toLowerCase());

  assert.ok(terms.some(t => t.includes('authentication vs. authorization')), 'Contains AuthN vs AuthZ');
  assert.ok(terms.some(t => t.includes('identification vs. identity proofing')), 'Contains Identification vs Proofing');
  assert.ok(terms.some(t => t.includes('digital identity vs. account vs. identifier')), 'Contains Identity vs Account vs Identifier');
  assert.ok(terms.some(t => t.includes('credential vs. authenticator')), 'Contains Credential vs Authenticator');
  assert.ok(terms.some(t => t.includes('inactive account vs. orphaned account')), 'Contains Inactive vs Orphaned');
  assert.ok(terms.some(t => t.includes('provisioning vs. deprovisioning')), 'Contains Provisioning vs Deprovisioning');
  assert.ok(terms.some(t => t.includes('least privilege vs. need-to-know')), 'Contains Least Privilege vs Need-to-Know');
  assert.ok(terms.some(t => t.includes('discretionary (dac) vs. mandatory (mac)')), 'Contains DAC vs MAC');
  assert.ok(terms.some(t => t.includes('role-based (rbac) vs. attribute-based (abac)')), 'Contains RBAC vs ABAC');
  assert.ok(terms.some(t => t.includes('security clearance vs. need-to-know')), 'Contains Clearance vs Need-to-Know');
  assert.ok(terms.some(t => t.includes('separation of duties vs. least privilege')), 'Contains SoD vs Least Privilege');
  assert.ok(terms.some(t => t.includes('directory service vs. identity provider')), 'Contains Directory vs IdP');
  assert.ok(terms.some(t => t.includes('multi-step vs. multi-factor authentication')), 'Contains Multi-Step vs MFA');
});

test('7. Academic QA corrections and boundaries are respected', () => {
  const d3 = JSON.parse(fs.readFileSync(d3Path, 'utf8'));

  // Separation of Duties acknowledges collusion
  const sod = d3.entries.find(e => e.term === 'Separation of Duties');
  assert.ok(sod, 'SoD entry exists');
  assert.ok(sod.exam_relevance.includes('collusion'), 'SoD notes collusion risk');

  // Least privilege does not guarantee zero risk
  const polp = d3.entries.find(e => e.term === 'Principle of Least Privilege');
  assert.ok(polp, 'Least privilege entry exists');
  assert.ok(polp.exam_relevance.includes('NOT guarantee that harm is impossible') || polp.exam_relevance.includes('blast radius'), 'Least privilege correctly bounded');

  // Inactive vs Orphaned are independent dimensions
  const inactiveOrphaned = d3.entries.find(e => e.term === 'Inactive Account vs. Orphaned Account');
  assert.ok(inactiveOrphaned, 'Inactive vs Orphaned entry exists');
  assert.ok(inactiveOrphaned.exam_relevance.includes('independent dimensions'), 'Inactivity and orphaning are independent dimensions');

  // Workload identities and interactive MFA
  const workload = d3.entries.find(e => e.term === 'Workload Identity');
  assert.ok(workload, 'Workload identity entry exists');
  assert.ok(workload.exam_relevance.includes('interactive human MFA'), 'Workload identities cannot perform interactive human MFA');

  // Clearance vs Need to know
  const clearance = d3.entries.find(e => e.term === 'Need-to-Know');
  assert.ok(clearance.exam_relevance.includes('Clearance') || clearance.exam_relevance.includes('clearance'), 'Need-to-know distinct from clearance');
});

test('8. Vocabulary Loader correctly loads Domain 1, 2, 3 and All domains', async () => {
  const d1 = await loadVocabularyData(1);
  assert.equal(d1.domain_id, 1, 'Domain 1 loaded');
  assert.equal(d1.entries.length, 110, 'D1 has 110 entries');

  const d2 = await loadVocabularyData(2);
  assert.equal(d2.domain_id, 2, 'Domain 2 loaded');
  assert.equal(d2.entries.length, 101, 'D2 has 101 entries');

  const d3 = await loadVocabularyData(3);
  assert.equal(d3.domain_id, 3, 'Domain 3 loaded');
  assert.equal(d3.entries.length, 102, 'D3 has 102 entries');

  const all = await loadVocabularyData('all');
  const d4 = JSON.parse(fs.readFileSync(path.join(vocabDir, 'domain-4.json'), 'utf8'));
  const expectedTotal = 313 + d4.entries.length;
  assert.equal(all.domain_id, 'all', 'Combined dataset loaded');
  assert.equal(all.total_entries, expectedTotal, 'Combined total includes the preserved D1-D3 pool and D4');
  assert.equal(all.entries.length, expectedTotal, 'Combined entries match the domain datasets');
});

test('9. Vocabulary registry count matches all loaded domains', async () => {
  const vocabEntry = versions.find(v => v.id === 'isc2-cc-vocabulary');
  assert.ok(vocabEntry, 'Vocabulary entry exists in exam-versions.js');
  assert.equal(vocabEntry.status, 'available', 'Status is available');
  assert.equal(vocabEntry.vocabularyCount, (await loadVocabularyData('all')).entries.length, 'vocabularyCount matches loaded data');
});

test('10. Existing question banks and D1/D2 vocabulary remain intact as later domains are added', async () => {
  // Domain 1: 24 Qs (Q584–Q607)
  const d1Questions = fs.readFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-1.js', 'utf8');
  assert.ok(d1Questions.includes('"id": 584'), 'Q584 exists in D1 bank');
  assert.ok(d1Questions.includes('"id": 607'), 'Q607 exists in D1 bank');

  // Domain 2: 39 Qs (Q608–Q646)
  const d2Questions = fs.readFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-2.js', 'utf8');
  assert.ok(d2Questions.includes('"id": 608'), 'Q608 exists in D2 bank');
  assert.ok(d2Questions.includes('"id": 646'), 'Q646 exists in D2 bank');

  // Domain 3: 23 Qs (Q647–Q669)
  const d3Questions = fs.readFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-3.js', 'utf8');
  assert.ok(d3Questions.includes('"id": 647'), 'Q647 exists in D3 bank');
  assert.ok(d3Questions.includes('"id": 669'), 'Q669 exists in D3 bank');

  // Later domains may extend the bank without changing the protected D1-D3 pools.
  const nextBankConfig = await loadExamConfig('isc2', 'cc', 'next-bank');
  assert.ok(nextBankConfig, 'Updated config resolves through the real loader');
  const loadedBank = await loadQuestionsForDomains({vendorId:'isc2', certId:'cc', version:'next-bank', domainIds:[1,2,3,4,5]});
  assert.deepEqual([loadedBank[1].length, loadedBank[2].length, loadedBank[3].length], [24,39,23]);
  const loadedTotal = Object.values(loadedBank).flat().length;
  assert.equal(nextBankConfig.totalQuestions, loadedTotal, 'Config counts all available domains');
  assert.equal(versions.find(v => v.id === 'next-bank').questionCount, loadedTotal, 'Registry count matches loaded content');

  // Legacy bank = 583 questions
  const legacyConfig = fs.readFileSync('data/certs/isc2/cc/versions/2026/exam.config.js', 'utf8');
  assert.ok(legacyConfig.includes('totalQuestions: 583'), 'legacy 2026 totalQuestions is 583');

  // Vocabulary D1 (110 entries) and D2 (101 entries) intact
  const d1Vocab = JSON.parse(fs.readFileSync(d1Path, 'utf8'));
  assert.equal(d1Vocab.total_entries, 110, 'Domain 1 vocabulary untouched (110 entries)');

  const d2Vocab = JSON.parse(fs.readFileSync(d2Path, 'utf8'));
  assert.equal(d2Vocab.total_entries, 101, 'Domain 2 vocabulary untouched (101 entries)');
});
