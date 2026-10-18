/**
 * tools/append-domain1-questions.mjs
 *
 * Integrates the 24 validated Domain 1 questions into production.
 * Updates:
 * - data/certs/isc2/cc/versions/2026/questions/domain-1.js (142 -> 166 questions)
 * - data/certs/isc2/cc/versions/2026/exam.config.js (D1 questionCount 142 -> 166, totalQuestions 583 -> 607)
 * - data/exam-versions.js (questionCount 583 -> 607)
 */

import fs from 'node:fs';
import path from 'node:path';
import { domain1NewQuestions } from './draft-domain-1-questions.mjs';
import { validateQuestionBatch, loadExistingQuestions } from './validate-domain1-batch.mjs';

async function main() {
  console.log('--- Domain 1 Integration & Activation ---');

  // 1. Load existing questions
  const existingQuestions = await loadExistingQuestions();
  console.log(`Loaded ${existingQuestions.length} existing questions across all 5 domains.`);

  const d1Mod = await import('../data/certs/isc2/cc/versions/2026/questions/domain-1.js');
  const existingD1 = d1Mod.default;
  console.log(`Existing Domain 1 has ${existingD1.length} questions.`);
  if (existingD1.length !== 142) {
    throw new Error(`Expected 142 existing D1 questions, got ${existingD1.length}`);
  }

  // 2. Validate candidate batch
  const validation = validateQuestionBatch(domain1NewQuestions, existingQuestions, 584);
  console.log(`Batch validation: valid=${validation.valid}, count=${validation.count}`);
  if (!validation.valid) {
    console.error('Validation errors:', validation.errors);
    throw new Error('Candidate batch validation failed');
  }

  // 3. Format new questions for production (strip _meta)
  const productionNewQuestions = domain1NewQuestions.map(q => ({
    id: q.id,
    dom: q.dom,
    question: q.question,
    options: q.options,
    correct_idx: q.correct_idx,
    explanation: q.explanation,
    short_explanation_en: q.short_explanation_en,
    question_th: q.question_th,
    options_th: q.options_th,
    explanation_th: q.explanation_th
  }));

  // 4. Update domain-1.js
  const domain1FilePath = path.resolve('data/certs/isc2/cc/versions/2026/questions/domain-1.js');
  const allD1Questions = [...existingD1, ...productionNewQuestions];

  const d1FileContent = `/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 1: Security Principles
 * Question Count: ${allD1Questions.length}
 */

const questions = ${JSON.stringify(allD1Questions, null, 2)};

export default questions;
`;

  fs.writeFileSync(domain1FilePath, d1FileContent, 'utf8');
  console.log(`Updated ${domain1FilePath}: total questions = ${allD1Questions.length}`);

  // 5. Update exam.config.js
  const configFilePath = path.resolve('data/certs/isc2/cc/versions/2026/exam.config.js');
  let configContent = fs.readFileSync(configFilePath, 'utf8');
  configContent = configContent.replace(/totalQuestions:\s*583,/, 'totalQuestions: 607,');
  configContent = configContent.replace(/questionCount:\s*142,/, 'questionCount: 166,');
  configContent = configContent.replace(/questionThCount:\s*142,/, 'questionThCount: 166,');
  fs.writeFileSync(configFilePath, configContent, 'utf8');
  console.log(`Updated ${configFilePath}: totalQuestions = 607, D1 questionCount = 166`);

  // 6. Update exam-versions.js
  const versionsFilePath = path.resolve('data/exam-versions.js');
  let versionsContent = fs.readFileSync(versionsFilePath, 'utf8');
  versionsContent = versionsContent.replace(/questionCount:\s*583,/, 'questionCount: 607,');
  versionsContent = versionsContent.replace(
    /'583 practice questions based on the previous ISC2 CC exam domain structure.'/,
    "'607 practice questions based on the ISC2 CC exam domain structure, including 2026 Domain 1 additions.'"
  );
  fs.writeFileSync(versionsFilePath, versionsContent, 'utf8');
  console.log(`Updated ${versionsFilePath}: questionCount = 607`);

  console.log('--- Integration Complete! ---');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
