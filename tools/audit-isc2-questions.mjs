/**
 * tools/audit-isc2-questions.mjs
 * Comprehensive 7-Phase Audit Script for ISC2 CC 2026 Question Bank (583 Questions).
 * AUDIT ONLY — DOES NOT MODIFY ANY QUESTION FILES.
 */

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

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// Helper for Jaccard Similarity (Token Overlap)
function computeJaccardSimilarity(text1, text2) {
  if (!text1 || !text2) return 0;
  const tokens1 = new Set(text1.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean));
  const tokens2 = new Set(text2.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean));
  if (tokens1.size === 0 || tokens2.size === 0) return 0;
  
  let intersection = 0;
  for (const t of tokens1) {
    if (tokens2.has(t)) intersection++;
  }
  const union = tokens1.size + tokens2.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// Helper for Levenshtein Distance Ratio
function computeStringSimilarity(str1, str2) {
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();
  if (s1 === s2) return 1.0;
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 === 0 || len2 === 0) return 0.0;

  // Quick length check threshold
  if (Math.abs(len1 - len2) / Math.max(len1, len2) > 0.4) return 0.0;

  const matrix = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(null));

  for (let i = 0; i <= len1; i += 1) matrix[0][i] = i;
  for (let j = 0; j <= len2; j += 1) matrix[j][0] = j;

  for (let j = 1; j <= len2; j += 1) {
    for (let i = 1; i <= len1; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  const distance = matrix[len2][len1];
  return 1.0 - distance / Math.max(len1, len2);
}

async function loadAllQuestions() {
  const allQuestions = [];
  const domainCounts = {};

  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const fileUrl = pathToFileURL(filePath).href;
    const mod = await import(fileUrl);
    const questions = mod.default || mod.questions;
    
    domainCounts[info.dom] = questions.length;
    questions.forEach((q, index) => {
      allQuestions.push({
        ...q,
        _file: info.file,
        _domExpected: info.dom,
        _indexInFile: index
      });
    });
  }

  return { allQuestions, domainCounts };
}

async function runAudit() {
  const { allQuestions, domainCounts } = await loadAllQuestions();
  const totalQuestions = allQuestions.length;

  console.log('Loaded all question files successfully.');
  console.log(`Total questions loaded: ${totalQuestions}\n`);

  const issues = [];
  const exactDuplicates = [];
  const nearDuplicates = [];

  const idMap = new Map();

  // Phase 1, 2, 3, 4, 6, 7 per-question audit loop
  allQuestions.forEach((q) => {
    const qId = q.id;
    const dom = q.dom;
    const file = q._file;

    // --- Phase 1: Structural Integrity ---
    if (qId === undefined || qId === null) {
      issues.push({
        qId: 'MISSING',
        dom, file,
        type: 'Missing Question ID',
        severity: 'CRITICAL',
        currentCorrect: 'N/A',
        problem: 'Question object is missing an `id` field.',
        rec: 'Assign a valid unique integer ID.'
      });
    } else {
      if (idMap.has(qId)) {
        issues.push({
          qId, dom, file,
          type: 'Duplicate Question ID',
          severity: 'CRITICAL',
          currentCorrect: 'N/A',
          problem: `Question ID ${qId} is duplicated in file ${file} (also in ${idMap.get(qId).file}).`,
          rec: 'Renumber duplicate question IDs to ensure absolute uniqueness.'
        });
      } else {
        idMap.set(qId, { file, dom });
      }
    }

    if (dom !== q._domExpected) {
      issues.push({
        qId, dom, file,
        type: 'Domain Field Mismatch',
        severity: 'HIGH',
        currentCorrect: 'N/A',
        problem: `Question dom field is ${dom}, but file is ${file} (expected domain ${q._domExpected}).`,
        rec: `Update dom field to ${q._domExpected}.`
      });
    }

    // Question text check
    if (!q.question || typeof q.question !== 'string' || !q.question.trim()) {
      issues.push({
        qId, dom, file,
        type: 'Missing English Question',
        severity: 'CRITICAL',
        currentCorrect: 'N/A',
        problem: 'English question text (`question`) is missing or empty.',
        rec: 'Provide valid English question text.'
      });
    }

    if (!q.question_th || typeof q.question_th !== 'string' || !q.question_th.trim()) {
      issues.push({
        qId, dom, file,
        type: 'Missing Thai Question',
        severity: 'HIGH',
        currentCorrect: 'N/A',
        problem: 'Thai question text (`question_th`) is missing or empty.',
        rec: 'Provide valid Thai question translation.'
      });
    }

    // Options array check
    if (!Array.isArray(q.options) || q.options.length === 0) {
      issues.push({
        qId, dom, file,
        type: 'Missing English Options',
        severity: 'CRITICAL',
        currentCorrect: 'N/A',
        problem: 'English options array (`options`) is missing or empty.',
        rec: 'Provide 4 valid English options.'
      });
    } else if (q.options.length !== 4) {
      issues.push({
        qId, dom, file,
        type: 'Incorrect Choice Count (EN)',
        severity: 'HIGH',
        currentCorrect: 'N/A',
        problem: `English options array contains ${q.options.length} choices instead of 4.`,
        rec: 'Ensure exactly 4 options are provided.'
      });
    }

    if (!Array.isArray(q.options_th) || q.options_th.length === 0) {
      issues.push({
        qId, dom, file,
        type: 'Missing Thai Options',
        severity: 'HIGH',
        currentCorrect: 'N/A',
        problem: 'Thai options array (`options_th`) is missing or empty.',
        rec: 'Provide 4 valid Thai options.'
      });
    } else if (q.options_th.length !== (q.options ? q.options.length : 4)) {
      issues.push({
        qId, dom, file,
        type: 'Choice Count Mismatch (EN vs TH)',
        severity: 'HIGH',
        currentCorrect: 'N/A',
        problem: `English options count (${q.options ? q.options.length : 0}) does not match Thai options count (${q.options_th.length}).`,
        rec: 'Align English and Thai option choice counts.'
      });
    }

    // Individual option checks
    if (Array.isArray(q.options)) {
      q.options.forEach((opt, idx) => {
        if (!opt || typeof opt !== 'string' || !opt.trim()) {
          issues.push({
            qId, dom, file,
            type: 'Empty Choice (EN)',
            severity: 'CRITICAL',
            currentCorrect: `Option ${OPTION_LETTERS[idx] || idx}`,
            problem: `English option choice index ${idx} (${OPTION_LETTERS[idx]}) is empty or blank.`,
            rec: 'Fill in option text.'
          });
        }
      });

      // Check duplicate options within same question
      const uniqueOpts = new Set(q.options.map(o => (o || '').trim().toLowerCase()));
      if (uniqueOpts.size < q.options.length) {
        issues.push({
          qId, dom, file,
          type: 'Duplicate Answer Choices',
          severity: 'HIGH',
          currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
          problem: `Question contains duplicate options in English choices.`,
          rec: 'Differentiate option choices.'
        });
      }
    }

    // Correct index check
    if (q.correct_idx === undefined || q.correct_idx === null || typeof q.correct_idx !== 'number') {
      issues.push({
        qId, dom, file,
        type: 'Missing Correct Answer Index',
        severity: 'CRITICAL',
        currentCorrect: 'N/A',
        problem: '`correct_idx` field is missing or not a number.',
        rec: 'Set correct_idx to integer 0..3.'
      });
    } else if (q.correct_idx < 0 || (q.options && q.correct_idx >= q.options.length)) {
      issues.push({
        qId, dom, file,
        type: 'Invalid Correct Answer Index',
        severity: 'CRITICAL',
        currentCorrect: q.correct_idx,
        problem: `correct_idx (${q.correct_idx}) is out of bounds for options length ${q.options ? q.options.length : 0}.`,
        rec: 'Fix correct_idx to point to a valid option index (0..3).'
      });
    }

    // Explanation checks
    if (!q.explanation || typeof q.explanation !== 'string' || !q.explanation.trim()) {
      issues.push({
        qId, dom, file,
        type: 'Missing English Explanation',
        severity: 'HIGH',
        currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
        problem: 'English explanation (`explanation`) is missing or empty.',
        rec: 'Provide valid English explanation.'
      });
    }

    if (!q.explanation_th || typeof q.explanation_th !== 'string' || !q.explanation_th.trim()) {
      issues.push({
        qId, dom, file,
        type: 'Missing Thai Explanation',
        severity: 'MEDIUM',
        currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
        problem: 'Thai explanation (`explanation_th`) is missing or empty.',
        rec: 'Provide Thai translation for explanation.'
      });
    }

    // --- Phase 2: Translation Anomaly Checks ---
    if (q.question && q.question_th) {
      if (q.question.trim().toLowerCase() === q.question_th.trim().toLowerCase()) {
        issues.push({
          qId, dom, file,
          type: 'Untranslated Question (TH == EN)',
          severity: 'MEDIUM',
          currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
          problem: 'Thai question text is identical to English question text (untranslated).',
          rec: 'Translate question text into Thai.'
        });
      }
    }

    if (Array.isArray(q.options) && Array.isArray(q.options_th)) {
      q.options.forEach((optEn, idx) => {
        const optTh = q.options_th[idx];
        if (optEn && optTh && optEn.trim().length > 5 && optEn.trim().toLowerCase() === optTh.trim().toLowerCase()) {
          issues.push({
            qId, dom, file,
            type: 'Untranslated Choice (TH == EN)',
            severity: 'LOW',
            currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
            problem: `Choice ${OPTION_LETTERS[idx]} in Thai is identical to English ("${optEn}").`,
            rec: 'Verify if translation into Thai is appropriate.'
          });
        }
      });
    }

    // Truncation check
    if (q.explanation && (q.explanation.endsWith('...') || q.explanation.endsWith('…'))) {
      issues.push({
        qId, dom, file,
        type: 'Truncated Explanation (EN)',
        severity: 'MEDIUM',
        currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
        problem: 'English explanation appears truncated ending with ellipsis.',
        rec: 'Complete explanation sentence.'
      });
    }
    if (q.explanation_th && (q.explanation_th.endsWith('...') || q.explanation_th.endsWith('…'))) {
      issues.push({
        qId, dom, file,
        type: 'Truncated Explanation (TH)',
        severity: 'MEDIUM',
        currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
        problem: 'Thai explanation appears truncated ending with ellipsis.',
        rec: 'Complete Thai explanation sentence.'
      });
    }

    // --- Phase 3: Answer & Explanation Consistency ---
    if (q.explanation && q.options && q.correct_idx !== undefined && q.correct_idx >= 0 && q.correct_idx < q.options.length) {
      const exp = q.explanation;
      const configuredLetter = OPTION_LETTERS[q.correct_idx];
      const configuredChoiceText = q.options[q.correct_idx];

      // Check if explanation explicitly names a DIFFERENT option letter as correct
      // E.g., "The correct answer is C", "Option B is correct", "Choice A is the right answer"
      const letterMatch = exp.match(/(?:correct\s+(?:answer|choice|option)|option|choice)\s+(?:is\s+)?([A-D])\b/i);
      if (letterMatch) {
        const mentionedLetter = letterMatch[1].toUpperCase();
        if (mentionedLetter !== configuredLetter) {
          issues.push({
            qId, dom, file,
            type: 'Answer Contradicts Explanation Letter',
            severity: 'CRITICAL',
            currentCorrect: `${configuredLetter} ("${configuredChoiceText}")`,
            problem: `Configured correct answer is Option ${configuredLetter}, but explanation states Option ${mentionedLetter} is correct: "${letterMatch[0]}".`,
            rec: `Review question Q${qId} to determine whether configured correct_idx or explanation letter is accurate.`
          });
        }
      }

      // Check if explanation explicitly quotes/describes another choice while declaring it correct
      // Scan all non-selected choices to see if explanation says "X is correct" for a non-configured choice
      q.options.forEach((opt, idx) => {
        if (idx !== q.correct_idx && opt && opt.length > 5) {
          const optClean = opt.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const explicitChoiceRegex = new RegExp(`(?:is|represents|defined as)\\s+["']?${optClean}["']?`, 'i');
          if (explicitChoiceRegex.test(exp) && !exp.toLowerCase().includes('not ') && !exp.toLowerCase().includes('incorrect')) {
            issues.push({
              qId, dom, file,
              type: 'Answer Explanation Wording Suspicious',
              severity: 'HIGH',
              currentCorrect: `${configuredLetter} ("${configuredChoiceText}")`,
              problem: `Explanation mentions non-selected Option ${OPTION_LETTERS[idx]} ("${opt}") in a way that suggests it may be correct.`,
              rec: `Review Q${qId} answer choice alignment.`
            });
          }
        }
      });
    }

    // --- Phase 4: Quality & Leftover Artifacts ---
    const htmlRegex = /<[^>]+>|&[a-z0-9]+;/i;
    if (htmlRegex.test(q.question) || htmlRegex.test(q.explanation) || (q.options && q.options.some(o => htmlRegex.test(o)))) {
      issues.push({
        qId, dom, file,
        type: 'Leftover HTML Artifacts',
        severity: 'LOW',
        currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
        problem: 'Question, options, or explanation contains raw HTML tags or unescaped HTML entities.',
        rec: 'Clean raw HTML tags/entities.'
      });
    }

    // Check "All of the above" positioning
    if (q.options) {
      q.options.forEach((optText, idx) => {
        if (/(?:all|none)\s+of\s+(?:the\s+)?(?:above|these)/i.test(optText)) {
          if (idx !== 3) {
            issues.push({
              qId, dom, file,
              type: '"All/None of above" Choice Mispositioned',
              severity: 'MEDIUM',
              currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
              problem: `Choice ${OPTION_LETTERS[idx]} contains "${optText}" but is at index ${idx} (Option ${OPTION_LETTERS[idx]}) instead of Option D.`,
              rec: 'Move "All/None of above" choice to Option D (index 3).'
            });
          }
        }
      });
    }

    // --- Phase 6: ISC2 CC Technical Accuracy Rule-Based Checks ---
    if (q.question && q.explanation) {
      const qTextLower = q.question.toLowerCase();
      const expLower = q.explanation.toLowerCase();

      // CIA Triad Check
      if (qTextLower.includes('confidentiality') && !qTextLower.includes('integrity') && !qTextLower.includes('availability')) {
        if (expLower.includes('ensuring data is not modified') || expLower.includes('protecting against alteration')) {
          issues.push({
            qId, dom, file,
            type: 'Technical Concept Ambiguity (CIA Triad)',
            severity: 'HIGH',
            currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
            problem: 'Question asks about Confidentiality, but explanation emphasizes Integrity (modification/alteration).',
            rec: 'Review technical definitions for Confidentiality vs Integrity.'
          });
        }
      }

      // AAA Check
      if (qTextLower.includes('authentication') && expLower.includes('determining permissions') && !expLower.includes('verifying identity')) {
        issues.push({
          qId, dom, file,
          type: 'Technical Concept Ambiguity (Authentication vs Authorization)',
          severity: 'HIGH',
          currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
          problem: 'Question asks about Authentication, but explanation describes Authorization (permissions).',
          rec: 'Verify Authentication (identity proof) vs Authorization (permissions) distinction.'
        });
      }
    }

    // --- Phase 7: Domain Classification Checks ---
    if (q.question) {
      const qLower = q.question.toLowerCase();
      // E.g., Domain 1 question purely about TCP/UDP ports or firewalls
      if (dom === 1 && (qLower.includes('firewall') || qLower.includes('tcp/ip') || qLower.includes('osi model') || qLower.includes('subnet mask'))) {
        issues.push({
          qId, dom, file,
          type: 'Possible Domain Misclassification',
          severity: 'LOW',
          currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
          problem: `Question Q${qId} is in Domain 1 (Security Principles) but focuses heavily on Networking topics (Domain 4).`,
          rec: 'Review if question belongs in Domain 4 (Network Security).'
        });
      }

      // E.g., Domain 4 question purely about Business Continuity / DR
      if (dom === 4 && (qLower.includes('business continuity') || qLower.includes('disaster recovery') || qLower.includes('bcp') || qLower.includes('rto') || qLower.includes('rpo'))) {
        issues.push({
          qId, dom, file,
          type: 'Possible Domain Misclassification',
          severity: 'LOW',
          currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
          problem: `Question Q${qId} is in Domain 4 (Network Security) but focuses heavily on BCP/DR topics (Domain 2).`,
          rec: 'Review if question belongs in Domain 2 (BC/DR/IR).'
        });
      }
    }
  });

  // --- Phase 5: Duplicate Question Detection ---
  console.log('Running duplicate detection across all 583 questions...');

  const normalizedMap = new Map();

  allQuestions.forEach((q) => {
    if (!q.question) return;
    const norm = q.question.toLowerCase().replace(/[^\w\s]/g, '').trim();

    if (normalizedMap.has(norm)) {
      const original = normalizedMap.get(norm);
      exactDuplicates.push({
        id1: original.id,
        dom1: original.dom,
        file1: original._file,
        id2: q.id,
        dom2: q.dom,
        file2: q._file,
        text: q.question
      });
      issues.push({
        qId: q.id,
        dom: q.dom,
        file: q._file,
        type: 'Exact Duplicate Question',
        severity: 'HIGH',
        currentCorrect: OPTION_LETTERS[q.correct_idx] || q.correct_idx,
        problem: `Question Q${q.id} in ${q._file} is an exact text duplicate of Q${original.id} in ${original._file}.`,
        rec: `Review Q${q.id} and Q${original.id} for potential deduplication or distinction.`
      });
    } else {
      normalizedMap.set(norm, q);
    }
  });

  // Near duplicate check (pairwise comparison)
  for (let i = 0; i < allQuestions.length; i++) {
    for (let j = i + 1; j < allQuestions.length; j++) {
      const q1 = allQuestions[i];
      const q2 = allQuestions[j];
      if (!q1.question || !q2.question) continue;

      const norm1 = q1.question.toLowerCase().replace(/[^\w\s]/g, '').trim();
      const norm2 = q2.question.toLowerCase().replace(/[^\w\s]/g, '').trim();

      if (norm1 === norm2) continue; // exact duplicate already logged

      const jaccard = computeJaccardSimilarity(q1.question, q2.question);
      if (jaccard >= 0.82) {
        nearDuplicates.push({
          id1: q1.id, dom1: q1.dom, file1: q1._file,
          id2: q2.id, dom2: q2.dom, file2: q2._file,
          sim: (jaccard * 100).toFixed(1) + '%',
          text1: q1.question,
          text2: q2.question
        });
        issues.push({
          qId: q2.id,
          dom: q2.dom,
          file: q2._file,
          type: 'Near Duplicate Question',
          severity: 'LOW',
          currentCorrect: OPTION_LETTERS[q2.correct_idx] || q2.correct_idx,
          problem: `Question Q${q2.id} in ${q2._file} is highly similar (${(jaccard * 100).toFixed(1)}% match) to Q${q1.id} in ${q1._file}.`,
          rec: `Compare Q${q1.id} and Q${q2.id} to ensure they test distinct nuances.`
        });
      }
    }
  }

  // --- Aggregate Findings & Summary Statistics ---
  const criticalCount = issues.filter(i => i.severity === 'CRITICAL').length;
  const highCount = issues.filter(i => i.severity === 'HIGH').length;
  const mediumCount = issues.filter(i => i.severity === 'MEDIUM').length;
  const lowCount = issues.filter(i => i.severity === 'LOW').length;

  const flaggedQuestionIds = new Set(issues.map(i => i.qId).filter(id => id !== 'MISSING'));
  const structurallyValidCount = totalQuestions - flaggedQuestionIds.size;

  const summary = {
    totalQuestions,
    domainCounts,
    structurallyValidCount,
    needsReviewCount: flaggedQuestionIds.size,
    criticalCount,
    highCount,
    mediumCount,
    lowCount,
    exactDuplicatesCount: exactDuplicates.length,
    nearDuplicatesCount: nearDuplicates.length,
    issues,
    exactDuplicates,
    nearDuplicates,
    flaggedQuestionIds: Array.from(flaggedQuestionIds).sort((a, b) => Number(a) - Number(b))
  };

  return summary;
}

runAudit().then(summary => {
  console.log('\n====================================================');
  console.log(' AUDIT COMPLETED SUCCESSFULLY');
  console.log('====================================================');
  console.log(`Total Questions Audited: ${summary.totalQuestions}`);
  console.log('Domain Breakdown:');
  DOMAIN_FILES.forEach(d => {
    console.log(`  Domain ${d.dom} (${d.name}): ${summary.domainCounts[d.dom]} (Expected: ${d.expectedCount})`);
  });
  console.log('\nSummary Stats:');
  console.log(`  Structurally Valid Questions : ${summary.structurallyValidCount}`);
  console.log(`  Questions Needing Review     : ${summary.needsReviewCount}`);
  console.log(`  Critical Severity Issues     : ${summary.criticalCount}`);
  console.log(`  High Severity Issues         : ${summary.highCount}`);
  console.log(`  Medium Severity Issues       : ${summary.mediumCount}`);
  console.log(`  Low Severity Issues          : ${summary.lowCount}`);
  console.log(`  Exact Duplicates Found       : ${summary.exactDuplicatesCount}`);
  console.log(`  Near Duplicates Found        : ${summary.nearDuplicatesCount}`);

  // Write detailed output JSON file for report generation
  const outPath = path.join(ROOT_DIR, 'tools', 'audit-results.json');
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), 'utf8');
  console.log(`\nDetailed audit data saved to: ${outPath}`);
}).catch(err => {
  console.error('Audit script failed:', err);
  process.exit(1);
});
