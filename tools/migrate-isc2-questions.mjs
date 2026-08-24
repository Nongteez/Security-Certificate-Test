/**
 * tools/migrate-isc2-questions.mjs
 * 
 * Safely extracts all 583 questions from isc2_cc_BothThai-eng_583quiz.html
 * and writes them into domain-1.js .. domain-5.js under:
 * data/certs/isc2/cc/versions/2026/questions/
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT_DIR = path.resolve('.');
const SOURCE_HTML = path.join(ROOT_DIR, 'isc2_cc_BothThai-eng_583quiz.html');
const BACKUP_HTML = path.join(ROOT_DIR, 'original', 'isc2_cc_BothThai-eng_583quiz.html');
const TARGET_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const EXPECTED_HASH = '70ea3c575d62a4911720b0fc36496119e0fe3070af0e0e370a05fb6e624d961a';

function getFileHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

console.log('--- Checking original file integrity ---');
const srcHash = getFileHash(SOURCE_HTML);
const bakHash = getFileHash(BACKUP_HTML);

console.log(`Source HTML hash: ${srcHash}`);
console.log(`Backup HTML hash: ${bakHash}`);

if (srcHash !== EXPECTED_HASH || bakHash !== EXPECTED_HASH) {
  console.error('ERROR: Original HTML hash mismatch! Aborting migration.');
  process.exit(1);
}

console.log('--- Reading and parsing ALL_QUESTIONS ---');
const html = fs.readFileSync(SOURCE_HTML, 'utf8');
const match = html.match(/const ALL_QUESTIONS\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error('ERROR: Could not find ALL_QUESTIONS in source HTML.');
  process.exit(1);
}

const allQuestions = JSON.parse(match[1]);
console.log(`Total questions parsed from source: ${allQuestions.length}`);

if (allQuestions.length !== 583) {
  console.error(`ERROR: Expected 583 questions, found ${allQuestions.length}.`);
  process.exit(1);
}

const domainTitles = {
  1: 'Security Principles',
  2: 'BC/DR/IR',
  3: 'Access Controls Concepts',
  4: 'Network Security',
  5: 'Security Operations'
};

const expectedCounts = {
  1: 142,
  2: 65,
  3: 93,
  4: 156,
  5: 127
};

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

for (let dom = 1; dom <= 5; dom++) {
  const domQuestions = allQuestions.filter(q => q.dom === dom);
  console.log(`Domain ${dom} (${domainTitles[dom]}): ${domQuestions.length} questions (expected: ${expectedCounts[dom]})`);

  if (domQuestions.length !== expectedCounts[dom]) {
    console.error(`ERROR: Domain ${dom} count mismatch! Expected ${expectedCounts[dom]}, got ${domQuestions.length}`);
    process.exit(1);
  }

  const fileContent = `/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain ${dom}: ${domainTitles[dom]}
 * Question Count: ${domQuestions.length}
 */

const questions = ${JSON.stringify(domQuestions, null, 2)};

export default questions;
`;

  const targetFile = path.join(TARGET_DIR, `domain-${dom}.js`);
  fs.writeFileSync(targetFile, fileContent, 'utf8');
  console.log(`Wrote ${targetFile} successfully.`);
}

console.log('--- Migration completed successfully ---');
