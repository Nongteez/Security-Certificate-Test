/**
 * tools/audit-version-isolation.mjs
 *
 * Audit script to inspect question banks, imports, version registries,
 * loaders, and question distributions.
 */

import fs from 'node:fs';
import path from 'node:path';

async function audit() {
  console.log('=== STEP 2: QUESTION BANK AUDIT ===\n');

  // Check data/certs/isc2/cc/versions directory
  const versionsDir = path.resolve('data/certs/isc2/cc/versions');
  const subdirs = fs.readdirSync(versionsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
  console.log('Subdirectories under data/certs/isc2/cc/versions:', subdirs);

  // Check version registry in data/exam-versions.js
  const { default: examVersions } = await import('../data/exam-versions.js');
  console.log('\nRegistered Exam Versions:');
  examVersions.forEach(v => {
    console.log(`- ID: "${v.id}" | Title: "${v.title}" | Status: "${v.status}" | questionCount: ${v.questionCount}`);
    console.log(`  ConfigRef: ${v.examConfigReference}`);
    console.log(`  BankRef:   ${v.questionBankReference}`);
  });

  // Load questions from data/certs/isc2/cc/versions/2026
  console.log('\n--- Questions in data/certs/isc2/cc/versions/2026 ---');
  const domains = [1, 2, 3, 4, 5];
  const d2026Questions = {};
  let total2026 = 0;

  for (const d of domains) {
    const mod = await import(`../data/certs/isc2/cc/versions/2026/questions/domain-${d}.js`);
    d2026Questions[d] = mod.default;
    total2026 += mod.default.length;
    console.log(`Domain ${d}: ${mod.default.length} questions (IDs: min=${Math.min(...mod.default.map(q => q.id))}, max=${Math.max(...mod.default.map(q => q.id))})`);
  }
  console.log(`Total questions in data/certs/isc2/cc/versions/2026: ${total2026}`);

  // Inspect Domain 1 IDs
  const d1 = d2026Questions[1];
  const originalD1 = d1.slice(0, 142);
  const appendedD1 = d1.slice(142);
  console.log(`\nDomain 1 breakdown:`);
  console.log(`- First 142 questions: IDs ${originalD1[0].id} to ${originalD1[originalD1.length - 1].id}`);
  console.log(`- Appended ${appendedD1.length} questions: IDs ${appendedD1[0]?.id} to ${appendedD1[appendedD1.length - 1]?.id}`);

  // Check if there is any other question directory in data/certs/
  const certsDir = path.resolve('data/certs');
  function findQuestionFiles(dir) {
    let files = [];
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        files.push(...findQuestionFiles(full));
      } else if (item.name.endsWith('.js') && full.includes('questions')) {
        files.push(full);
      }
    }
    return files;
  }
  const allQuestionFiles = findQuestionFiles(certsDir);
  console.log('\nAll question files found under data/certs:', allQuestionFiles);

  // Check assets/questions
  const assetsDir = path.resolve('assets/questions');
  let assetFiles = [];
  if (fs.existsSync(assetsDir)) {
    assetFiles = fs.readdirSync(assetsDir, { recursive: true }).filter(f => f.endsWith('.json'));
    console.log('\nAsset question files found under assets/questions:', assetFiles);
  }

  // Check content/ directory for staging
  const contentDir = path.resolve('content');
  let contentFiles = [];
  if (fs.existsSync(contentDir)) {
    contentFiles = fs.readdirSync(contentDir, { recursive: true }).filter(f => f.endsWith('.md'));
    console.log('\nContent markdown files found under content:', contentFiles);
  }

  // Check for duplicate IDs across all questions loaded in 2026
  const allLoaded = Object.values(d2026Questions).flat();
  const idCounts = {};
  allLoaded.forEach(q => {
    idCounts[q.id] = (idCounts[q.id] || 0) + 1;
  });
  const duplicateIds = Object.entries(idCounts).filter(([id, count]) => count > 1);
  console.log(`\nDuplicate IDs in data/certs/isc2/cc/versions/2026: ${duplicateIds.length === 0 ? 'None (0)' : JSON.stringify(duplicateIds)}`);

  // Check original/isc2_cc_BothThai-eng_583quiz.html
  const originalHtmlPath = path.resolve('original/isc2_cc_BothThai-eng_583quiz.html');
  if (fs.existsSync(originalHtmlPath)) {
    console.log('\nOriginal legacy HTML exists at original/isc2_cc_BothThai-eng_583quiz.html');
  }

  console.log('\n=== END OF QUESTION BANK AUDIT ===');
}

audit().catch(console.error);
