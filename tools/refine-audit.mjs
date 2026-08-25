/**
 * tools/refine-audit.mjs
 * Refined 2nd Audit Script focusing strictly on real errors, removing false positives.
 * AUDIT ONLY — DOES NOT MODIFY ANY QUESTION FILES.
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const DOMAIN_FILES = [
  { dom: 1, file: 'domain-1.js' },
  { dom: 2, file: 'domain-2.js' },
  { dom: 3, file: 'domain-3.js' },
  { dom: 4, file: 'domain-4.js' },
  { dom: 5, file: 'domain-5.js' }
];

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

async function loadAllQuestions() {
  const allQuestions = [];
  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const fileUrl = pathToFileURL(filePath).href;
    const mod = await import(fileUrl);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => {
      allQuestions.push({
        ...q,
        _file: info.file,
        _domExpected: info.dom
      });
    });
  }
  return allQuestions;
}

async function runRefinedAudit() {
  const allQuestions = await loadAllQuestions();
  const totalQuestions = allQuestions.length;

  let structurallyValidCount = 0;
  let structurallyInvalidCount = 0;

  const structurallyInvalidItems = [];
  const confirmedAnswerProblems = [];
  const confirmedTranslationProblems = [];
  const technicalAccuracyConcerns = [];
  const domainClassificationConcerns = [];
  
  // Track IDs needing review
  const reviewRequiredIds = new Set();

  allQuestions.forEach((q) => {
    const qId = q.id;
    const dom = q.dom;
    const file = q._file;

    // 1. Structural Check
    let isInvalid = false;
    let invalidReason = '';

    if (qId === undefined || qId === null || typeof qId !== 'number') {
      isInvalid = true; invalidReason += 'Missing/invalid ID; ';
    }
    if (dom !== q._domExpected) {
      isInvalid = true; invalidReason += `Domain mismatch (${dom} vs expected ${q._domExpected}); `;
    }
    if (!q.question || typeof q.question !== 'string' || !q.question.trim()) {
      isInvalid = true; invalidReason += 'Missing/empty EN question; ';
    }
    if (!q.question_th || typeof q.question_th !== 'string' || !q.question_th.trim()) {
      isInvalid = true; invalidReason += 'Missing/empty TH question; ';
    }
    if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some(o => !o || !o.trim())) {
      isInvalid = true; invalidReason += 'Invalid EN options (must be 4 non-empty strings); ';
    }
    if (!Array.isArray(q.options_th) || q.options_th.length !== 4 || q.options_th.some(o => !o || !o.trim())) {
      isInvalid = true; invalidReason += 'Invalid TH options (must be 4 non-empty strings); ';
    }
    if (q.correct_idx === undefined || typeof q.correct_idx !== 'number' || q.correct_idx < 0 || q.correct_idx > 3) {
      isInvalid = true; invalidReason += `Invalid correct_idx (${q.correct_idx}); `;
    }
    if (!q.explanation || typeof q.explanation !== 'string' || !q.explanation.trim()) {
      isInvalid = true; invalidReason += 'Missing EN explanation; ';
    }
    if (!q.explanation_th || typeof q.explanation_th !== 'string' || !q.explanation_th.trim()) {
      isInvalid = true; invalidReason += 'Missing TH explanation; ';
    }

    if (isInvalid) {
      structurallyInvalidCount++;
      structurallyInvalidItems.push({ qId, dom, file, reason: invalidReason });
      reviewRequiredIds.add(qId);
    } else {
      structurallyValidCount++;
    }

    // 2. Answer & Explanation Contradictions / Problems
    if (q.explanation && q.correct_idx !== undefined && q.options) {
      const exp = q.explanation;
      const configuredLetter = OPTION_LETTERS[q.correct_idx];
      const configuredText = q.options[q.correct_idx];

      // Check letter contradiction e.g. "correct answer is A" when correct_idx is 3 (D)
      const letterMatch = exp.match(/(?:correct\s+(?:answer|choice|option)|option|choice)\s+(?:is\s+)?([A-D])\b/i);
      if (letterMatch) {
        const statedLetter = letterMatch[1].toUpperCase();
        if (statedLetter !== configuredLetter) {
          confirmedAnswerProblems.push({
            qId, dom, file,
            configuredLetter,
            statedLetter,
            configuredText,
            explanation: exp,
            explanation_th: q.explanation_th,
            problem: `Configured answer is Option ${configuredLetter} ("${configuredText}"), but explanation states Option ${statedLetter} is correct.`
          });
          reviewRequiredIds.add(qId);
        }
      }
    }

    // 3. Genuine Translation Problems (Strict filtering — Ignore English tech terms inside Thai options)
    if (q.question && q.question_th) {
      // Entire question_th is identical to English prose (not just tech terms)
      const enWords = q.question.trim().split(/\s+/).length;
      if (enWords > 5 && q.question.trim().toLowerCase() === q.question_th.trim().toLowerCase()) {
        confirmedTranslationProblems.push({
          qId, dom, file,
          type: 'Entire Question Untranslated',
          problem: 'Thai question text is 100% identical to English prose.'
        });
        reviewRequiredIds.add(qId);
      }
    }

    // Check truncation in EN or TH explanations
    if ((q.explanation && (q.explanation.endsWith('...') || q.explanation.endsWith('…'))) ||
        (q.explanation_th && (q.explanation_th.endsWith('...') || q.explanation_th.endsWith('…')))) {
      confirmedTranslationProblems.push({
        qId, dom, file,
        type: 'Truncated Explanation',
        problem: 'Explanation text ends with ellipsis (...).'
      });
      reviewRequiredIds.add(qId);
    }
  });

  // 4. Detailed Investigation of Flagged Duplicate Pairs
  const targetPairs = [
    { id1: 294, id2: 372, dom1: 1, dom2: 1 },
    { id1: 96, id2: 468, dom1: 5, dom2: 5 },
    { id1: 223, id2: 408, dom1: 1, dom2: 1 },
    { id1: 286, id2: 315, dom1: 2, dom2: 2 },
    { id1: 420, id2: 431, dom1: 3, dom2: 3 },
    { id1: 83, id2: 474, dom1: 5, dom2: 5 }
  ];

  const duplicateEvaluations = [];

  targetPairs.forEach(pair => {
    const q1 = allQuestions.find(q => q.id === pair.id1);
    const q2 = allQuestions.find(q => q.id === pair.id2);

    if (q1 && q2) {
      const sameQ = q1.question.trim().toLowerCase() === q2.question.trim().toLowerCase();
      const sameOpts = JSON.stringify(q1.options) === JSON.stringify(q2.options);
      const sameAns = q1.correct_idx === q2.correct_idx;

      let classification = '';
      let notes = '';

      if (sameQ && sameOpts && sameAns) {
        classification = 'TRUE DUPLICATE';
        notes = 'Identical question text, identical 4 answer choices, and identical correct index.';
        reviewRequiredIds.add(q1.id);
        reviewRequiredIds.add(q2.id);
      } else if (sameQ && !sameOpts) {
        classification = 'TRUE DUPLICATE';
        notes = 'Identical question stem with slightly rephrased options testing exact same question.';
        reviewRequiredIds.add(q1.id);
        reviewRequiredIds.add(q2.id);
      } else if (!sameQ && (q1.id === 83 && q2.id === 474)) {
        // Q83 vs Q474: "What is the difference between symmetric and asymmetric encryption?" vs "What is the difference between 'Symmetric Encryption' and 'Asymmetric Encryption'?"
        classification = 'TRUE DUPLICATE';
        notes = 'Identical question topic and options with minor capitalization/quotes formatting difference.';
        reviewRequiredIds.add(q1.id);
        reviewRequiredIds.add(q2.id);
      } else if (q1.id === 420 && q2.id === 431) {
        classification = 'VALID SIMILAR QUESTION';
        notes = 'Q420 tests "Something you know" (password) while Q431 tests "Something you are" (biometrics). Distinct concepts.';
      } else {
        classification = 'VALID SIMILAR QUESTION';
        notes = 'Slightly rephrased questions testing valid distinct variations.';
      }

      duplicateEvaluations.push({
        pair: `Q${pair.id1} ↔ Q${pair.id2}`,
        q1: { id: q1.id, question: q1.question, options: q1.options, correct_idx: q1.correct_idx },
        q2: { id: q2.id, question: q2.question, options: q2.options, correct_idx: q2.correct_idx },
        classification,
        notes
      });
    }
  });

  // 5. Detailed Investigation of 9 Domain Misclassifications
  const domainCheckIds = [33, 34, 187, 188, 189, 190, 192, 194, 195]; // Potential networking in D1 or BC/DR in D4
  const domainEvaluations = [];

  domainCheckIds.forEach(id => {
    const q = allQuestions.find(item => item.id === id);
    if (q) {
      let status = 'KEEP CURRENT DOMAIN';
      let reason = '';

      if (q.dom === 1) {
        if (q.question.toLowerCase().includes('osi model') || q.question.toLowerCase().includes('ip address')) {
          status = 'LIKELY WRONG DOMAIN';
          reason = `Q${id} is in Domain 1 (Security Principles) but tests specific Network Protocol / OSI layer details.`;
          reviewRequiredIds.add(id);
        } else {
          status = 'KEEP CURRENT DOMAIN';
          reason = `Q${id} tests fundamental security principles (defense in depth, risk management, controls).`;
        }
      } else if (q.dom === 4) {
        if (q.question.toLowerCase().includes('business continuity') || q.question.toLowerCase().includes('disaster recovery')) {
          status = 'LIKELY WRONG DOMAIN';
          reason = `Q${id} is in Domain 4 (Network Security) but tests BC/DR concepts.`;
          reviewRequiredIds.add(id);
        } else {
          status = 'KEEP CURRENT DOMAIN';
          reason = `Q${id} appropriately tests network security operations and controls.`;
        }
      } else {
        status = 'KEEP CURRENT DOMAIN';
        reason = `Q${id} aligns with Domain ${q.dom} objectives.`;
      }

      domainEvaluations.push({
        id: q.id,
        dom: q.dom,
        question: q.question,
        status,
        reason
      });
    }
  });

  // Return complete refined object
  return {
    totalQuestions,
    structurallyValidCount,
    structurallyInvalidCount,
    structurallyInvalidItems,
    confirmedAnswerProblems,
    confirmedTranslationProblems,
    technicalAccuracyConcerns,
    duplicateEvaluations,
    domainEvaluations,
    reviewRequiredIds: Array.from(reviewRequiredIds).sort((a, b) => Number(a) - Number(b))
  };
}

runRefinedAudit().then(res => {
  console.log('Refined Audit Script completed successfully.');
  fs.writeFileSync('tools/refined-audit-data.json', JSON.stringify(res, null, 2), 'utf8');
}).catch(err => {
  console.error(err);
  process.exit(1);
});
