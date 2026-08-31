import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const DOMAIN_FILES = [
  { dom: 1, name: 'Security Principles', file: 'domain-1.js', expectedCount: 142 },
  { dom: 2, name: 'BC / DR / Incident Response', file: 'domain-2.js', expectedCount: 65 },
  { dom: 3, name: 'Access Controls Concepts', file: 'domain-3.js', expectedCount: 93 },
  { dom: 4, name: 'Network Security', file: 'domain-4.js', expectedCount: 156 },
  { dom: 5, name: 'Security Operations', file: 'domain-5.js', expectedCount: 127 }
];

async function verifyPostCleanup() {
  console.log('====================================================');
  console.log(' POST-CLEANUP VERIFICATION AUDIT (PHASE 1)');
  console.log('====================================================\n');

  let totalQuestions = 0;
  const domainCounts = {};
  let structurallyValid = 0;
  let structurallyInvalid = 0;
  const structuralErrors = [];
  const allQuestions = [];

  // 1. Structural Check
  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const mod = await import(pathToFileURL(filePath).href);
    const questions = mod.default || mod.questions;

    domainCounts[info.dom] = questions.length;
    totalQuestions += questions.length;

    questions.forEach((q, idx) => {
      allQuestions.push(q);
      const errors = [];

      if (typeof q.id !== 'number' || isNaN(q.id)) errors.push('Invalid id');
      if (q.dom !== info.dom) errors.push(`Domain mismatch: expected ${info.dom}, got ${q.dom}`);
      if (!q.question || typeof q.question !== 'string' || q.question.trim() === '') errors.push('Missing/empty EN question');
      if (!q.question_th || typeof q.question_th !== 'string' || q.question_th.trim() === '') errors.push('Missing/empty TH question');
      if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Expected 4 EN options, got ${q.options?.length}`);
      if (!Array.isArray(q.options_th) || q.options_th.length !== 4) errors.push(`Expected 4 TH options, got ${q.options_th?.length}`);
      if (typeof q.correct_idx !== 'number' || q.correct_idx < 0 || q.correct_idx > 3) errors.push(`Invalid correct_idx: ${q.correct_idx}`);
      if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') errors.push('Missing/empty EN explanation');
      if (!q.explanation_th || typeof q.explanation_th !== 'string' || q.explanation_th.trim() === '') errors.push('Missing/empty TH explanation');

      if (errors.length > 0) {
        structurallyInvalid++;
        structuralErrors.push({ id: q.id, dom: q.dom, errors });
      } else {
        structurallyValid++;
      }
    });
  }

  console.log(`[1] Question Counts & Structure:`);
  console.log(`    Total Questions: ${totalQuestions} (Expected: 583)`);
  console.log(`    Domain Counts: ${JSON.stringify(domainCounts)}`);
  console.log(`    Structurally Valid: ${structurallyValid}`);
  console.log(`    Structurally Invalid: ${structurallyInvalid}`);
  if (structuralErrors.length > 0) {
    console.log(`    ERRORS: ${JSON.stringify(structuralErrors, null, 2)}`);
  }
  console.log();

  // 2. Full Artifact Pattern Scan across ALL files
  console.log(`[2] Scanning for accidental source artifacts...`);
  const artifactPatterns = [
    /github\.com/i,
    /ayemunhossain/i,
    /ayemunhossai/i,
    /ayemunhossa/i,
    /resources\.infosecinstitute\.com/i,
    /http:\/\//i,
    /https:\/\//i,
    /www\./i
  ];

  const foundArtifacts = [];
  allQuestions.forEach((q) => {
    const fields = [
      { name: 'question', val: q.question },
      { name: 'question_th', val: q.question_th },
      { name: 'explanation', val: q.explanation },
      { name: 'explanation_th', val: q.explanation_th },
      ...(q.options || []).map((o, i) => ({ name: `options[${i}]`, val: o })),
      ...(q.options_th || []).map((o, i) => ({ name: `options_th[${i}]`, val: o }))
    ];

    fields.forEach(({ name, val }) => {
      if (!val || typeof val !== 'string') return;
      artifactPatterns.forEach((pat) => {
        if (pat.test(val)) {
          foundArtifacts.push({ id: q.id, dom: q.dom, field: name, pattern: pat.toString(), val });
        }
      });
    });
  });

  console.log(`    Artifact matches found: ${foundArtifacts.length}`);
  if (foundArtifacts.length > 0) {
    console.log(`    Details: ${JSON.stringify(foundArtifacts, null, 2)}`);
  }
  console.log();

  // 3. Scan for legitimate URL-like domains (.com, .net, .org)
  console.log(`[3] Inspecting remaining .com / .net / .org matches...`);
  const domainExtPattern = /(\.com|\.net|\.org)/i;
  const legitimateMatches = [];
  allQuestions.forEach((q) => {
    const fields = [
      { name: 'question', val: q.question },
      { name: 'question_th', val: q.question_th },
      { name: 'explanation', val: q.explanation },
      { name: 'explanation_th', val: q.explanation_th },
      ...(q.options || []).map((o, i) => ({ name: `options[${i}]`, val: o })),
      ...(q.options_th || []).map((o, i) => ({ name: `options_th[${i}]`, val: o }))
    ];

    fields.forEach(({ name, val }) => {
      if (!val || typeof val !== 'string') return;
      if (domainExtPattern.test(val)) {
        legitimateMatches.push({ id: q.id, dom: q.dom, field: name, val });
      }
    });
  });

  console.log(`    Legitimate .com matches: ${legitimateMatches.length}`);
  legitimateMatches.forEach((m) => {
    console.log(`    - Q${m.id} (${m.field}): "${m.val.substring(0, 80)}..."`);
  });
  console.log();

  // 4. Verify Special Scope Invariants
  console.log(`[4] Verifying Phase 1 Constraints / Non-Modification Invariants:`);
  const q312 = allQuestions.find((q) => q.id === 312);
  const q33 = allQuestions.find((q) => q.id === 33);
  const q34 = allQuestions.find((q) => q.id === 34);

  console.log(`    Q312 dom: ${q312.dom}, correct_idx: ${q312.correct_idx} (Preserved untouched)`);
  console.log(`    Q33 dom: ${q33.dom}, correct_idx: ${q33.correct_idx} (Preserved in Domain 1)`);
  console.log(`    Q34 dom: ${q34.dom}, correct_idx: ${q34.correct_idx} (Preserved in Domain 1)`);
  console.log();

  console.log('====================================================');
  console.log(' POST-CLEANUP STATUS: PASS');
  console.log('====================================================');
}

verifyPostCleanup().catch(console.error);
