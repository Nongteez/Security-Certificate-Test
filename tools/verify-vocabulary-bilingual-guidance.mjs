/**
 * Verification Script: Bilingual Exam Guidance & Relevance (ISC2 CC 2026)
 * Task 53 Static Verification Suite
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN_SPECS = [
  { domain: 1, file: 'content/isc2-cc-2026/vocabulary/domain-1.json', count: 110, prefix: 'VOC-CC26-D1-' },
  { domain: 2, file: 'content/isc2-cc-2026/vocabulary/domain-2.json', count: 101, prefix: 'VOC-CC26-D2-' },
  { domain: 3, file: 'content/isc2-cc-2026/vocabulary/domain-3.json', count: 102, prefix: 'VOC-CC26-D3-' },
];

let totalPassed = 0;
let totalFailed = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    totalFailed++;
  } else {
    console.log(`✅ PASS: ${message}`);
    totalPassed++;
  }
}

console.log('=== Running Bilingual Exam Guidance Verification ===\n');

const allIds = new Set();
let grandTotalEntries = 0;
let grandTotalWithThai = 0;
let grandTotalWithEn = 0;

for (const spec of DOMAIN_SPECS) {
  const fullPath = path.join(rootDir, spec.file);
  assert(fs.existsSync(fullPath), `File exists: ${spec.file}`);

  let data;
  try {
    data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    assert(true, `${spec.file} is valid JSON`);
  } catch (err) {
    assert(false, `${spec.file} JSON parse error: ${err.message}`);
    continue;
  }

  assert(Array.isArray(data.entries), `${spec.file} has entries array`);
  assert(data.entries.length === spec.count, `${spec.file} has exactly ${spec.count} entries (got ${data.entries.length})`);

  let domainWithThai = 0;
  let domainWithEn = 0;
  let domainValidIds = 0;
  let domainValidThaiChars = 0;
  let domainNoPlaceholders = 0;

  data.entries.forEach((entry, idx) => {
    grandTotalEntries++;
    const id = entry.id;
    if (id && id.startsWith(spec.prefix)) {
      domainValidIds++;
    }
    if (id) {
      assert(!allIds.has(id), `Unique ID verified: ${id}`);
      allIds.add(id);
    }

    // Check English guidance
    if (entry.exam_relevance && typeof entry.exam_relevance === 'string' && entry.exam_relevance.trim().length > 10) {
      domainWithEn++;
      grandTotalWithEn++;
    }

    // Check Thai guidance
    if (entry.exam_relevance_th && typeof entry.exam_relevance_th === 'string' && entry.exam_relevance_th.trim().length > 10) {
      domainWithThai++;
      grandTotalWithThai++;

      // Check Thai character script
      if (/[\u0E00-\u0E7F]/.test(entry.exam_relevance_th)) {
        domainValidThaiChars++;
      }

      // Check no placeholders
      if (!/TODO|TBD|PLACEHOLDER|XXX/i.test(entry.exam_relevance_th)) {
        domainNoPlaceholders++;
      }
    }
  });

  assert(domainValidIds === spec.count, `[Domain ${spec.domain}] All ${spec.count} entry IDs match prefix ${spec.prefix}`);
  assert(domainWithEn === spec.count, `[Domain ${spec.domain}] All ${spec.count} entries have valid English exam_relevance`);
  assert(domainWithThai === spec.count, `[Domain ${spec.domain}] All ${spec.count} entries have valid Thai exam_relevance_th`);
  assert(domainValidThaiChars === spec.count, `[Domain ${spec.domain}] All ${spec.count} Thai guidance entries contain authentic Thai characters`);
  assert(domainNoPlaceholders === spec.count, `[Domain ${spec.domain}] Zero placeholders found in ${spec.count} entries`);
}

// Global asserts
assert(grandTotalEntries === 313, `Total vocabulary entries across Domains 1–3 is exactly 313 (got ${grandTotalEntries})`);
assert(grandTotalWithThai === 313, `Total Thai exam guidance translations is 313/313 (100% coverage)`);
assert(grandTotalWithEn === 313, `Total English exam guidance entries is 313/313 (100% coverage)`);
assert(allIds.size === 313, `Total unique IDs is exactly 313`);

// Verify Draft Artifact
const draftPath = path.join(rootDir, 'content/isc2-cc-2026/vocabulary/bilingual-exam-guidance-draft.json');
assert(fs.existsSync(draftPath), 'Draft artifact exists: content/isc2-cc-2026/vocabulary/bilingual-exam-guidance-draft.json');
if (fs.existsSync(draftPath)) {
  const draftData = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
  assert(draftData.meta?.total_entries === 313, 'Draft artifact records 313 total entries');
}

// Verify Review Report
const reportPath = path.join(rootDir, 'docs/reviews/isc2-cc-2026-vocabulary-exam-guidance-bilingual.md');
assert(fs.existsSync(reportPath), 'Review report exists: docs/reviews/isc2-cc-2026-vocabulary-exam-guidance-bilingual.md');

// Verify UI Modal Code
const screenVocabPath = path.join(rootDir, 'js/ui/screen-vocabulary.js');
const screenVocabCode = fs.readFileSync(screenVocabPath, 'utf8');
assert(
  screenVocabCode.includes('entry.exam_relevance_th') &&
  screenVocabCode.includes('modal-relevance-text modal-thai-font'),
  'screen-vocabulary.js renders exam_relevance_th in Detail Modal with modal-thai-font styling'
);

// Verify Schema Doc
const schemaPath = path.join(rootDir, 'content/isc2-cc-2026/vocabulary/schema.md');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');
assert(
  schemaContent.includes('`exam_relevance_th`'),
  'schema.md documents exam_relevance_th in field specifications'
);

console.log(`\n========================================`);
console.log(`Verification Summary: ${totalPassed} Passed, ${totalFailed} Failed`);
console.log(`========================================`);

if (totalFailed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
