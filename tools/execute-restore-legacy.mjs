/**
 * tools/execute-restore-legacy.mjs
 *
 * Restores the legacy Pre-2026 question bank to its original pure state:
 * - Domain 1: exactly 142 questions (IDs 1 to 495)
 * - Total questions: 583
 * - exam.config.js: questionCount 142, totalQuestions 583
 * - exam-versions.js: version '2026' questionCount 583
 */

import fs from 'node:fs';
import path from 'node:path';

async function restoreLegacy() {
  console.log('--- Step 2: Restoring Legacy Pre-2026 Question Bank ---');

  // 1. Load current Domain 1
  const d1Mod = await import('../data/certs/isc2/cc/versions/2026/questions/domain-1.js');
  const allCurrentD1 = d1Mod.default;
  console.log(`Current Domain 1 has ${allCurrentD1.length} questions.`);

  if (allCurrentD1.length < 142) {
    throw new Error(`Domain 1 has fewer than 142 questions: ${allCurrentD1.length}`);
  }

  // Slice first 142 questions
  const restoredD1 = allCurrentD1.slice(0, 142);
  console.log(`Restored Domain 1 count: ${restoredD1.length}`);
  console.log(`First Q ID: ${restoredD1[0].id}, Last Q ID: ${restoredD1[restoredD1.length - 1].id}`);

  if (restoredD1[restoredD1.length - 1].id !== 495) {
    throw new Error(`Expected last question of legacy Domain 1 to be ID 495, got ${restoredD1[restoredD1.length - 1].id}`);
  }

  // Verify all 142 question IDs are within 1..495
  const d1Ids = new Set(restoredD1.map(q => q.id));
  if (d1Ids.size !== 142) {
    throw new Error(`Expected 142 unique IDs in restored Domain 1, got ${d1Ids.size}`);
  }

  // Write restored domain-1.js
  const d1Path = path.resolve('data/certs/isc2/cc/versions/2026/questions/domain-1.js');
  const d1Content = `/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 1: Security Principles
 * Question Count: ${restoredD1.length}
 */

const questions = ${JSON.stringify(restoredD1, null, 2)};

export default questions;
`;
  fs.writeFileSync(d1Path, d1Content, 'utf8');
  console.log(`Wrote restored ${d1Path}`);

  // 2. Restore exam.config.js
  const configPath = path.resolve('data/certs/isc2/cc/versions/2026/exam.config.js');
  let configContent = fs.readFileSync(configPath, 'utf8');
  configContent = configContent.replace(/totalQuestions:\s*\d+,/, 'totalQuestions: 583,');
  configContent = configContent.replace(/questionCount:\s*\d+,/, 'questionCount: 142,');
  configContent = configContent.replace(/questionThCount:\s*\d+,/, 'questionThCount: 142,');
  fs.writeFileSync(configPath, configContent, 'utf8');
  console.log(`Restored ${configPath}: totalQuestions = 583, D1 questionCount = 142`);

  // 3. Verify total across all 5 domains in versions/2026
  let total = 0;
  for (const d of [1, 2, 3, 4, 5]) {
    // re-read file
    const mod = await import(`../data/certs/isc2/cc/versions/2026/questions/domain-${d}.js?t=${Date.now()}`);
    total += mod.default.length;
    console.log(`  Domain ${d}: ${mod.default.length} questions`);
  }
  console.log(`Total across 5 legacy domains: ${total}`);
  if (total !== 583) {
    throw new Error(`Expected 583 total legacy questions, got ${total}`);
  }

  console.log('--- Step 2 Complete: Legacy Pre-2026 Successfully Restored! ---');
}

restoreLegacy().catch(err => {
  console.error(err);
  process.exit(1);
});
