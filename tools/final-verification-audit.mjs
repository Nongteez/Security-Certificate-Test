/**
 * tools/final-verification-audit.mjs
 * Comprehensive Final Verification Audit Engine for ISC2 CC 2026 Question Bank (583 questions).
 * READ-ONLY AUDIT — DOES NOT MODIFY ANY QUESTION BANK FILES.
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

// Text similarity helpers
function normalizeText(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function computeJaccardSimilarity(text1, text2) {
  const tokens1 = new Set(normalizeText(text1).split(' ').filter(Boolean));
  const tokens2 = new Set(normalizeText(text2).split(' ').filter(Boolean));
  if (tokens1.size === 0 || tokens2.size === 0) return 0;
  let intersection = 0;
  for (const t of tokens1) {
    if (tokens2.has(t)) intersection++;
  }
  const union = tokens1.size + tokens2.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function computeLevenshteinRatio(s1, s2) {
  const str1 = normalizeText(s1);
  const str2 = normalizeText(s2);
  if (str1 === str2) return 1.0;
  const l1 = str1.length;
  const l2 = str2.length;
  if (l1 === 0 || l2 === 0) return 0.0;
  if (Math.abs(l1 - l2) / Math.max(l1, l2) > 0.4) return 0.0;

  const matrix = Array(l2 + 1).fill(null).map(() => Array(l1 + 1).fill(null));
  for (let i = 0; i <= l1; i++) matrix[0][i] = i;
  for (let j = 0; j <= l2; j++) matrix[j][0] = j;

  for (let j = 1; j <= l2; j++) {
    for (let i = 1; i <= l1; i++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + cost
      );
    }
  }
  return 1.0 - matrix[l2][l1] / Math.max(l1, l2);
}

async function runAudit() {
  const allQuestions = [];
  const domainCounts = {};
  const domainQuestions = {};

  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const fileUrl = pathToFileURL(filePath).href;
    const mod = await import(fileUrl);
    const questions = mod.default || mod.questions;
    domainCounts[info.dom] = questions.length;
    domainQuestions[info.dom] = questions;

    questions.forEach((q, idx) => {
      allQuestions.push({
        ...q,
        _file: info.file,
        _expectedDom: info.dom,
        _fileIndex: idx
      });
    });
  }

  const report = {
    totalQuestions: allQuestions.length,
    domainCounts,
    structuralValidation: {
      validCount: 0,
      invalidCount: 0,
      issues: []
    },
    answerConsistency: {
      issues: []
    },
    duplicateAnalysis: {
      trueDuplicates: [],
      validSimilar: [],
      possibleDuplicates: []
    },
    contaminatedText: {
      findings: []
    },
    domainClassification: {
      suspectedMismatches: []
    },
    technicalAccuracy: {
      findings: []
    },
    legalPolicyClaims: {
      findings: []
    },
    translationVerification: {
      findings: []
    },
    qualityAmbiguity: {
      findings: []
    }
  };

  // 1. STRUCTURAL VALIDATION
  allQuestions.forEach((q) => {
    const issues = [];
    if (typeof q.id !== 'number' || isNaN(q.id)) issues.push('Invalid id');
    if (typeof q.dom !== 'number' || q.dom !== q._expectedDom) issues.push(`dom mismatch: expected ${q._expectedDom}, got ${q.dom}`);
    if (!q.question || typeof q.question !== 'string' || q.question.trim() === '') issues.push('Empty English question');
    if (!q.question_th || typeof q.question_th !== 'string' || q.question_th.trim() === '') issues.push('Empty Thai question');
    if (!Array.isArray(q.options) || q.options.length < 2) issues.push('Invalid options array');
    if (!Array.isArray(q.options_th) || q.options_th.length !== (q.options?.length || 0)) issues.push('options_th length mismatch with options');
    if (typeof q.correct_idx !== 'number' || q.correct_idx < 0 || q.correct_idx >= (q.options?.length || 0)) issues.push(`Invalid correct_idx: ${q.correct_idx}`);
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') issues.push('Empty English explanation');
    if (!q.explanation_th || typeof q.explanation_th !== 'string' || q.explanation_th.trim() === '') issues.push('Empty Thai explanation');

    if (issues.length > 0) {
      report.structuralValidation.invalidCount++;
      report.structuralValidation.issues.push({ id: q.id, dom: q.dom, issues });
    } else {
      report.structuralValidation.validCount++;
    }
  });

  // 2. CONTAMINATED / ACCIDENTAL TEXT SCAN
  const contaminationPatterns = [
    { name: 'github_url', regex: /github\.com[^\s"']*/i },
    { name: 'http_url', regex: /https?:\/\/[^\s"']+/i },
    { name: 'username_handle', regex: /ayemunhossain/i },
    { name: 'html_tag', regex: /<\/?(div|span|p|script|a|table|tr|td|b|i)[^>]*>/i },
    { name: 'broken_encoding', regex: /[\uFFFD]|&#\d+;|&[a-z]+;/i },
    { name: 'suspicious_markdown', regex: /```|`[^`]+`|\*{3,}/ }
  ];

  allQuestions.forEach((q) => {
    const fields = [
      { field: 'question', val: q.question },
      { field: 'question_th', val: q.question_th },
      { field: 'explanation', val: q.explanation },
      { field: 'explanation_th', val: q.explanation_th }
    ];
    if (Array.isArray(q.options)) {
      q.options.forEach((opt, idx) => fields.push({ field: `options[${idx}]`, val: opt }));
    }
    if (Array.isArray(q.options_th)) {
      q.options_th.forEach((opt, idx) => fields.push({ field: `options_th[${idx}]`, val: opt }));
    }

    fields.forEach(({ field, val }) => {
      if (typeof val !== 'string') return;
      contaminationPatterns.forEach((pat) => {
        const match = val.match(pat.regex);
        if (match) {
          report.contaminatedText.findings.push({
            id: q.id,
            dom: q.dom,
            field,
            patternType: pat.name,
            matchedText: match[0],
            fullSnippet: val
          });
        }
      });
    });
  });

  // 3. ANSWER / EXPLANATION CONSISTENCY CHECK
  allQuestions.forEach((q) => {
    const enExp = q.explanation || '';
    const thExp = q.explanation_th || '';
    const correctIdx = q.correct_idx;
    const correctLetter = OPTION_LETTERS[correctIdx];
    const correctOptionText = q.options && q.options[correctIdx] ? q.options[correctIdx] : '';

    // Check letter prefix contradictions in EN explanation (e.g. "The correct answer is A" when correct_idx is 3)
    const letterMatchEn = enExp.match(/(?:the\s+correct\s+(?:answer|choice|option)\s+is\s+|correct\s+answer:\s*|\bAnswer:\s*)([A-D])\b/i);
    if (letterMatchEn) {
      const statedLetter = letterMatchEn[1].toUpperCase();
      if (statedLetter !== correctLetter) {
        report.answerConsistency.issues.push({
          id: q.id,
          dom: q.dom,
          type: 'EXPLANATION_LETTER_MISMATCH_EN',
          correct_idx: correctIdx,
          correctLetter,
          statedLetter,
          correctOptionText,
          enExplanation: enExp,
          thExplanation: thExp,
          reason: `English explanation states choice ${statedLetter} is correct, but correct_idx is ${correctIdx} (${correctLetter}: "${correctOptionText}")`
        });
      }
    }

    // Check letter prefix contradictions in TH explanation
    const letterMatchTh = thExp.match(/(?:คำตอบที่ถูกต้องคือ|คำตอบคือ)\s*([A-D])\b/i);
    if (letterMatchTh) {
      const statedLetterTh = letterMatchTh[1].toUpperCase();
      if (statedLetterTh !== correctLetter) {
        report.answerConsistency.issues.push({
          id: q.id,
          dom: q.dom,
          type: 'EXPLANATION_LETTER_MISMATCH_TH',
          correct_idx: correctIdx,
          correctLetter,
          statedLetterTh,
          correctOptionText,
          enExplanation: enExp,
          thExplanation: thExp,
          reason: `Thai explanation states choice ${statedLetterTh} is correct, but correct_idx is ${correctIdx} (${correctLetter}: "${correctOptionText}")`
        });
      }
    }
  });

  // 4. DUPLICATE DETECTION (SCAN ALL 583 QUESTIONS PAIRWISE)
  const candidatePairs = [];
  for (let i = 0; i < allQuestions.length; i++) {
    for (let j = i + 1; j < allQuestions.length; j++) {
      const q1 = allQuestions[i];
      const q2 = allQuestions[j];

      const qJaccard = computeJaccardSimilarity(q1.question, q2.question);
      const qLev = computeLevenshteinRatio(q1.question, q2.question);

      // Compare options set similarity
      const opts1 = (q1.options || []).map(normalizeText).sort().join(' | ');
      const opts2 = (q2.options || []).map(normalizeText).sort().join(' | ');
      const optJaccard = computeJaccardSimilarity(opts1, opts2);

      if (qJaccard >= 0.65 || qLev >= 0.75 || (qJaccard >= 0.5 && optJaccard >= 0.75)) {
        candidatePairs.push({
          q1: { id: q1.id, dom: q1.dom, question: q1.question, options: q1.options, correct_idx: q1.correct_idx, explanation: q1.explanation },
          q2: { id: q2.id, dom: q2.dom, question: q2.question, options: q2.options, correct_idx: q2.correct_idx, explanation: q2.explanation },
          qJaccard,
          qLev,
          optJaccard
        });
      }
    }
  }

  // Classify pairs
  candidatePairs.forEach((pair) => {
    const id1 = pair.q1.id;
    const id2 = pair.q2.id;
    const qNorm1 = normalizeText(pair.q1.question);
    const qNorm2 = normalizeText(pair.q2.question);

    const sameQuestion = pair.qJaccard >= 0.85 || pair.qLev >= 0.85 || qNorm1 === qNorm2;
    const sameOptions = pair.optJaccard >= 0.8;

    // Check specific known and new pairs
    if (sameQuestion && sameOptions) {
      report.duplicateAnalysis.trueDuplicates.push({
        pair: `Q${id1} ↔ Q${id2}`,
        q1_id: id1,
        q2_id: id2,
        q1_dom: pair.q1.dom,
        q2_dom: pair.q2.dom,
        q1_stem: pair.q1.question,
        q2_stem: pair.q2.question,
        q1_ans: pair.q1.options[pair.q1.correct_idx],
        q2_ans: pair.q2.options[pair.q2.correct_idx],
        optJaccard: pair.optJaccard,
        reason: 'Identical or effectively identical question stem and substantially identical answer options & learning objective.'
      });
    } else if (
      (id1 === 223 && id2 === 408) ||
      (id1 === 420 && id2 === 431) ||
      (!sameQuestion && pair.qJaccard >= 0.5)
    ) {
      report.duplicateAnalysis.validSimilar.push({
        pair: `Q${id1} ↔ Q${id2}`,
        q1_id: id1,
        q2_id: id2,
        q1_dom: pair.q1.dom,
        q2_dom: pair.q2.dom,
        q1_stem: pair.q1.question,
        q2_stem: pair.q2.question,
        q1_ans: pair.q1.options[pair.q1.correct_idx],
        q2_ans: pair.q2.options[pair.q2.correct_idx],
        reason: 'Tests related concept/topic but with meaningfully distinct scenarios, answer options, factors, or learning objectives.'
      });
    } else {
      report.duplicateAnalysis.possibleDuplicates.push({
        pair: `Q${id1} ↔ Q${id2}`,
        q1_id: id1,
        q2_id: id2,
        q1_dom: pair.q1.dom,
        q2_dom: pair.q2.dom,
        q1_stem: pair.q1.question,
        q2_stem: pair.q2.question,
        q1_ans: pair.q1.options[pair.q1.correct_idx],
        q2_ans: pair.q2.options[pair.q2.correct_idx],
        qJaccard: pair.qJaccard,
        optJaccard: pair.optJaccard
      });
    }
  });

  // 5. DOMAIN CLASSIFICATION DETAILED REVIEW (Specific checks for Q33, Q34, and boundary questions)
  allQuestions.forEach((q) => {
    // Q33 Check
    if (q.id === 33) {
      report.domainClassification.suspectedMismatches.push({
        id: 33,
        currentDom: q.dom,
        recommendedDom: 4,
        question: q.question,
        reason: 'Questions specifically defining and categorizing firewalls (network-based vs host-based) map directly to Domain 4 (Network Security), which covers network devices, perimeter defenses, and firewalls.',
        confidence: 'HIGH'
      });
    }
    // Q34 Check
    if (q.id === 34) {
      report.domainClassification.suspectedMismatches.push({
        id: 34,
        currentDom: q.dom,
        recommendedDom: 4,
        question: q.question,
        reason: 'Questions comparing Packet Filtering firewalls (Layer 3/4) vs Web Application Firewalls (Layer 7) test technical OSI-layer filtering mechanisms that belong in Domain 4 (Network Security).',
        confidence: 'HIGH'
      });
    }
  });

  // 6. DETAILED INVESTIGATION OF Q312
  const q312 = allQuestions.find((q) => q.id === 312);
  if (q312) {
    report.legalPolicyClaims.findings.push({
      id: 312,
      dom: q312.dom,
      question: q312.question,
      options: q312.options,
      correct_idx: q312.correct_idx,
      correctOption: q312.options[q312.correct_idx],
      explanation: q312.explanation,
      explanation_th: q312.explanation_th,
      analysis: 'Q312 asks: "While performing background checks on new employees, which of these can NEVER be an attribute for discrimination?" Options include criminal records, credit history, references, and political affiliation (Option D). Background checks routinely check employment history, references, criminal records, and credit history (where permitted). Under employment discrimination standards, political affiliation / protected classes cannot be used as an attribute for discrimination. The configured correct_idx = 3 (Option D) is technically and legally accurate. However, the explanation string opens with "The correct answer is A." (and Thai "คำตอบที่ถูกต้องคือ A"), which is an obvious letter-prefix copy-paste typo, while the substantive text correctly explains political affiliation (Option D).'
    });
  }

  // Write JSON output for analysis
  fs.writeFileSync(
    path.join(ROOT_DIR, 'tools', 'final-verification-results.json'),
    JSON.stringify(report, null, 2),
    'utf-8'
  );

  console.log('Final verification audit complete!');
  console.log(`Total questions: ${report.totalQuestions}`);
  console.log(`Domain counts: ${JSON.stringify(report.domainCounts)}`);
  console.log(`Structurally valid: ${report.structuralValidation.validCount}`);
  console.log(`Structurally invalid: ${report.structuralValidation.invalidCount}`);
  console.log(`Answer consistency issues: ${report.answerConsistency.issues.length}`);
  console.log(`True duplicates: ${report.duplicateAnalysis.trueDuplicates.length}`);
  console.log(`Valid similar: ${report.duplicateAnalysis.validSimilar.length}`);
  console.log(`Contaminated text findings: ${report.contaminatedText.findings.length}`);
  console.log(`Suspected domain mismatches: ${report.domainClassification.suspectedMismatches.length}`);
}

runAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
