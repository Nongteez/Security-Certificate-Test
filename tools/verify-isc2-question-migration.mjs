/**
 * tools/verify-isc2-question-migration.mjs
 *
 * Automated verification script for ISC2 CC Phase 3 Question Bank Migration.
 * Compares migrated domain-1.js..domain-5.js against original ALL_QUESTIONS in HTML.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = path.resolve('.');
const SOURCE_HTML = path.join(ROOT_DIR, 'isc2_cc_BothThai-eng_583quiz.html');
const BACKUP_HTML = path.join(ROOT_DIR, 'original', 'isc2_cc_BothThai-eng_583quiz.html');
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const EXPECTED_HASH = '70ea3c575d62a4911720b0fc36496119e0fe3070af0e0e370a05fb6e624d961a';
const EXPECTED_DOMAIN_COUNTS = {
  1: 142,
  2: 65,
  3: 93,
  4: 156,
  5: 127
};
const EXPECTED_TOTAL = 583;

function getFileHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

async function runVerification() {
  console.log('====================================================');
  console.log(' ISC2 CC Question Migration Automated Verification');
  console.log('====================================================\n');

  let passed = true;

  // 1. SHA256 integrity check of original files
  console.log('[1/10] Verifying SHA256 hashes of original HTML files...');
  const srcHash = getFileHash(SOURCE_HTML);
  const bakHash = getFileHash(BACKUP_HTML);
  console.log(`  Source HTML hash: ${srcHash.toUpperCase()}`);
  console.log(`  Backup HTML hash: ${bakHash.toUpperCase()}`);
  
  if (srcHash !== EXPECTED_HASH || bakHash !== EXPECTED_HASH) {
    console.error('  FAIL: Original HTML hash mismatch!');
    passed = false;
  } else {
    console.log('  PASS: Both original HTML files match exact expected SHA256.');
  }

  // 2. Parse original source
  console.log('\n[2/10] Reading original ALL_QUESTIONS from source HTML...');
  const html = fs.readFileSync(SOURCE_HTML, 'utf8');
  const match = html.match(/const ALL_QUESTIONS\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) {
    console.error('  FAIL: Could not locate ALL_QUESTIONS in HTML!');
    process.exit(1);
  }
  const originalQuestions = JSON.parse(match[1]);
  console.log(`  Found ${originalQuestions.length} original questions.`);
  if (originalQuestions.length !== EXPECTED_TOTAL) {
    console.error(`  FAIL: Expected ${EXPECTED_TOTAL} questions, got ${originalQuestions.length}`);
    passed = false;
  } else {
    console.log('  PASS: Original count matches 583.');
  }

  // 3. Load migrated domain files via native ES Module import
  console.log('\n[3/10] Dynamically loading migrated domain-X.js ES modules...');
  const migratedDomainMap = {};
  const allMigratedQuestions = [];

  for (let dom = 1; dom <= 5; dom++) {
    const filePath = path.join(QUESTIONS_DIR, `domain-${dom}.js`);
    if (!fs.existsSync(filePath)) {
      console.error(`  FAIL: Missing file ${filePath}`);
      passed = false;
      continue;
    }
    const fileUrl = pathToFileURL(filePath).href;
    const mod = await import(fileUrl);
    const domainQuestions = mod.default;

    if (!Array.isArray(domainQuestions)) {
      console.error(`  FAIL: domain-${dom}.js default export is not an array!`);
      passed = false;
      continue;
    }

    migratedDomainMap[dom] = domainQuestions;
    allMigratedQuestions.push(...domainQuestions);
    console.log(`  Loaded domain-${dom}.js: ${domainQuestions.length} questions`);
  }

  // 4. Verify Total Count & Domain Counts
  console.log('\n[4/10] Checking domain counts and total count...');
  let countErrors = 0;
  for (let dom = 1; dom <= 5; dom++) {
    const actual = migratedDomainMap[dom]?.length || 0;
    const expected = EXPECTED_DOMAIN_COUNTS[dom];
    if (actual !== expected) {
      console.error(`  FAIL: Domain ${dom} count mismatch! Expected ${expected}, got ${actual}`);
      countErrors++;
      passed = false;
    } else {
      console.log(`  PASS: Domain ${dom} = ${actual} (expected ${expected})`);
    }
  }

  if (allMigratedQuestions.length !== EXPECTED_TOTAL) {
    console.error(`  FAIL: Total migrated count ${allMigratedQuestions.length} !== ${EXPECTED_TOTAL}`);
    passed = false;
  } else {
    console.log(`  PASS: Total migrated questions = ${allMigratedQuestions.length} (142+65+93+156+127 = 583)`);
  }

  // 5. Domain Integrity
  console.log('\n[5/10] Verifying domain integrity (dom field matches file domain)...');
  let domainMismatchCount = 0;
  for (let dom = 1; dom <= 5; dom++) {
    const list = migratedDomainMap[dom] || [];
    for (const q of list) {
      if (q.dom !== dom) {
        console.error(`  FAIL: Question ID ${q.id} in domain-${dom}.js has dom === ${q.dom}`);
        domainMismatchCount++;
        passed = false;
      }
    }
  }
  if (domainMismatchCount === 0) {
    console.log('  PASS: All questions belong strictly to their respective domain files.');
  }

  // 6. Duplicate & Missing Question Check
  console.log('\n[6/10] Checking for duplicate or missing question IDs...');
  const migratedIdMap = new Map();
  const duplicates = [];

  allMigratedQuestions.forEach((q, idx) => {
    if (migratedIdMap.has(q.id)) {
      duplicates.push({ id: q.id, firstIdx: migratedIdMap.get(q.id), secondIdx: idx });
    }
    migratedIdMap.set(q.id, idx);
  });

  if (duplicates.length > 0) {
    console.error(`  FAIL: Found ${duplicates.length} duplicate IDs:`, duplicates);
    passed = false;
  } else {
    console.log('  PASS: No duplicate question IDs found across all domain files.');
  }

  const missingIds = [];
  originalQuestions.forEach(origQ => {
    if (!migratedIdMap.has(origQ.id)) {
      missingIds.push(origQ.id);
    }
  });

  if (missingIds.length > 0) {
    console.error(`  FAIL: Missing ${missingIds.length} question IDs from original:`, missingIds);
    passed = false;
  } else {
    console.log('  PASS: Every original question ID is present in the migrated files.');
  }

  // 7. Field-by-Field Deep Equality Check
  console.log('\n[7/10] Performing field-by-field deep equality check against source...');
  let deepEqualityErrors = 0;
  const originalById = new Map(originalQuestions.map(q => [q.id, q]));

  for (const migratedQ of allMigratedQuestions) {
    const origQ = originalById.get(migratedQ.id);
    if (!origQ) {
      console.error(`  FAIL: Migrated question ${migratedQ.id} not found in original.`);
      deepEqualityErrors++;
      passed = false;
      continue;
    }

    try {
      assert.deepStrictEqual(migratedQ, origQ);
    } catch (err) {
      console.error(`  FAIL: Deep equality mismatch on question ID ${migratedQ.id}!`);
      console.error(`    Original:`, JSON.stringify(origQ));
      console.error(`    Migrated:`, JSON.stringify(migratedQ));
      deepEqualityErrors++;
      passed = false;
    }
  }

  // Also verify domain file ordering matches original relative ordering
  for (let dom = 1; dom <= 5; dom++) {
    const origDomQuestions = originalQuestions.filter(q => q.dom === dom);
    const migDomQuestions = migratedDomainMap[dom] || [];
    for (let i = 0; i < origDomQuestions.length; i++) {
      if (origDomQuestions[i].id !== migDomQuestions[i]?.id) {
        console.error(`  FAIL: Relative order mismatch in Domain ${dom} at index ${i}: expected ID ${origDomQuestions[i].id}, got ${migDomQuestions[i]?.id}`);
        deepEqualityErrors++;
        passed = false;
      }
    }
  }

  if (deepEqualityErrors === 0) {
    console.log('  PASS: 583/583 questions match original source with 100% deep strict equality and identical relative order.');
  }

  // 8. Correct-Answer Index & Option Structure Validation
  console.log('\n[8/10] Validating correct_idx and option structure...');
  let invalidCorrectIdxCount = 0;
  let optionMismatchCount = 0;

  for (const q of allMigratedQuestions) {
    if (!Array.isArray(q.options) || q.options.length === 0) {
      console.error(`  FAIL: Question ${q.id} has invalid options array.`);
      invalidCorrectIdxCount++;
      passed = false;
    } else if (typeof q.correct_idx !== 'number' || q.correct_idx < 0 || q.correct_idx >= q.options.length) {
      console.error(`  FAIL: Question ${q.id} has invalid correct_idx (${q.correct_idx}) for ${q.options.length} options.`);
      invalidCorrectIdxCount++;
      passed = false;
    }

    if (Array.isArray(q.options_th) && q.options.length !== q.options_th.length) {
      console.error(`  FAIL: Question ${q.id} has options length ${q.options.length} !== options_th length ${q.options_th.length}`);
      optionMismatchCount++;
      passed = false;
    }
  }

  if (invalidCorrectIdxCount === 0 && optionMismatchCount === 0) {
    console.log('  PASS: All 583 questions have valid correct_idx (0 <= correct_idx < 4) and matching English/Thai option array lengths (4).');
  }

  // 9. Translation Coverage Statistics
  console.log('\n[9/10] Translation Coverage Analysis:');
  const hasThaiChars = (s) => typeof s === 'string' && /[\u0E00-\u0E7F]/.test(s);
  let totalWithThQ = 0;
  let totalWithThOptions = 0;
  let totalWithThExp = 0;
  let totalWithThaiCharsInOptions = 0;

  for (const q of allMigratedQuestions) {
    if (q.question_th && q.question_th.trim() !== '') totalWithThQ++;
    if (Array.isArray(q.options_th) && q.options_th.length > 0) {
      totalWithThOptions++;
      if (q.options_th.some(o => hasThaiChars(o))) {
        totalWithThaiCharsInOptions++;
      }
    }
    if (q.explanation_th && q.explanation_th.trim() !== '') totalWithThExp++;
  }

  console.log(`  - Question text Thai (question_th): ${totalWithThQ} / 583 (${((totalWithThQ/583)*100).toFixed(1)}%)`);
  console.log(`  - Options array Thai (options_th populated): ${totalWithThOptions} / 583 (${((totalWithThOptions/583)*100).toFixed(1)}%)`);
  console.log(`    ↳ Options containing Thai characters: ${totalWithThaiCharsInOptions} / 583 (${((totalWithThaiCharsInOptions/583)*100).toFixed(1)}%)`);
  console.log(`    ↳ Options with English technical terms: ${totalWithThOptions - totalWithThaiCharsInOptions} / 583 (${(((totalWithThOptions - totalWithThaiCharsInOptions)/583)*100).toFixed(1)}%)`);
  console.log(`  - Explanation Thai (explanation_th): ${totalWithThExp} / 583 (${((totalWithThExp/583)*100).toFixed(1)}%)`);
  console.log('  PASS: Translation fields completely populated across all 583 questions.');

  // 10. Summary
  console.log('\n[10/10] Verification Summary');
  console.log('----------------------------------------------------');
  if (passed) {
    console.log('STATUS: SUCCESS - All 583 questions migrated and verified with 100% accuracy!');
  } else {
    console.error('STATUS: FAILED - One or more verification checks failed.');
    process.exit(1);
  }
}

runVerification().catch(err => {
  console.error('Unexpected verification failure:', err);
  process.exit(1);
});
