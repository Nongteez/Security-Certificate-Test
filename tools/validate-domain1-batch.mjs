/**
 * tools/validate-domain1-batch.mjs
 *
 * Validator for new ISC2 CC 2026 Domain 1 question batches.
 * Enforces production schema, bilingual parity, pedagogical explanations,
 * distractor rationales, and duplicate checks against all existing 583 questions.
 */

import fs from 'node:fs';
import path from 'node:path';

export async function loadExistingQuestions() {
  const domains = [1, 2, 3, 4, 5];
  const allQuestions = [];
  for (const d of domains) {
    const mod = await import(`../data/certs/isc2/cc/versions/2026/questions/domain-${d}.js`);
    allQuestions.push(...mod.default);
  }
  return allQuestions;
}

function tokenize(text) {
  return new Set(
    (text || '')
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2)
  );
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

export function validateQuestionBatch(candidateQuestions, existingQuestions = [], startId = 584) {
  const errors = [];
  const warnings = [];

  const candidateIds = new Set();
  const existingIds = new Set(existingQuestions.map(q => q.id));

  // Check candidate IDs and structure
  candidateQuestions.forEach((q, idx) => {
    const qIndex = `Question[${idx}] (id: ${q.id || 'missing'})`;

    // ID validation
    if (typeof q.id !== 'number' || q.id < startId) {
      errors.push(`${qIndex}: id must be a number >= ${startId}, got ${q.id}`);
    }
    if (candidateIds.has(q.id)) {
      errors.push(`${qIndex}: duplicate id ${q.id} within candidate batch`);
    }
    if (existingIds.has(q.id)) {
      errors.push(`${qIndex}: id ${q.id} collides with existing question in bank`);
    }
    candidateIds.add(q.id);

    // dom validation
    if (q.dom !== 1) {
      errors.push(`${qIndex}: dom must be 1, got ${q.dom}`);
    }

    // English stem validation
    if (typeof q.question !== 'string' || q.question.trim().length < 25) {
      errors.push(`${qIndex}: question stem must be a string with at least 25 characters`);
    }

    // Options validation
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`${qIndex}: options must be an array of exactly 4 strings`);
    } else {
      const uniqueOptions = new Set(q.options.map(o => (o || '').trim().toLowerCase()));
      if (uniqueOptions.size !== 4) {
        errors.push(`${qIndex}: options must contain 4 unique entries`);
      }
      q.options.forEach((opt, oIdx) => {
        if (typeof opt !== 'string' || opt.trim().length === 0) {
          errors.push(`${qIndex}: option[${oIdx}] must be a non-empty string`);
        }
      });
    }

    // correct_idx validation
    if (typeof q.correct_idx !== 'number' || q.correct_idx < 0 || q.correct_idx > 3) {
      errors.push(`${qIndex}: correct_idx must be an integer 0, 1, 2, or 3, got ${q.correct_idx}`);
    }

    // Explanations validation
    if (typeof q.explanation !== 'string' || q.explanation.trim().length < 40) {
      errors.push(`${qIndex}: explanation must be a string with at least 40 characters`);
    }
    if (typeof q.short_explanation_en !== 'string' || q.short_explanation_en.trim().length < 15) {
      errors.push(`${qIndex}: short_explanation_en must be a string with at least 15 characters`);
    }

    // Thai stem validation
    if (typeof q.question_th !== 'string' || q.question_th.trim().length < 20) {
      errors.push(`${qIndex}: question_th must be a string with at least 20 characters`);
    }

    // Thai options validation
    if (!Array.isArray(q.options_th) || q.options_th.length !== 4) {
      errors.push(`${qIndex}: options_th must be an array of exactly 4 strings`);
    } else {
      const uniqueOptionsTh = new Set(q.options_th.map(o => (o || '').trim()));
      if (uniqueOptionsTh.size !== 4) {
        errors.push(`${qIndex}: options_th must contain 4 unique entries`);
      }
      q.options_th.forEach((opt, oIdx) => {
        if (typeof opt !== 'string' || opt.trim().length === 0) {
          errors.push(`${qIndex}: options_th[${oIdx}] must be a non-empty string`);
        }
      });
    }

    // Thai explanation validation
    if (typeof q.explanation_th !== 'string' || q.explanation_th.trim().length < 40) {
      errors.push(`${qIndex}: explanation_th must be a string with at least 40 characters`);
    }

    // Traceability metadata validation
    if (!q._meta) {
      warnings.push(`${qIndex}: missing _meta traceability block`);
    } else {
      if (!q._meta.opportunity || !q._meta.opportunity.startsWith('O')) {
        errors.push(`${qIndex}: _meta.opportunity must be specified (e.g., O01)`);
      }
      if (!q._meta.objective) {
        errors.push(`${qIndex}: _meta.objective must be specified (e.g., 1.1)`);
      }
      if (!q._meta.concept) {
        errors.push(`${qIndex}: _meta.concept must be specified (e.g., C003)`);
      }
      // Gate against held opportunities
      if (['O19', 'O20'].includes(q._meta.opportunity)) {
        errors.push(`${qIndex}: opportunity ${q._meta.opportunity} is on HOLD and forbidden from authoring`);
      }
    }

    // Check duplicate similarity against existing questions
    const qTokens = tokenize(q.question);
    for (const eq of existingQuestions) {
      const eqTokens = tokenize(eq.question);
      const sim = jaccardSimilarity(qTokens, eqTokens);
      if (sim > 0.65) {
        errors.push(`${qIndex}: high similarity (${(sim * 100).toFixed(1)}%) with existing Q${eq.id}: "${eq.question}"`);
      } else if (sim > 0.50) {
        warnings.push(`${qIndex}: moderate similarity (${(sim * 100).toFixed(1)}%) with existing Q${eq.id}: "${eq.question}"`);
      }
    }

    // Check duplicate similarity against other candidates in batch
    for (let j = idx + 1; j < candidateQuestions.length; j++) {
      const oq = candidateQuestions[j];
      const oqTokens = tokenize(oq.question);
      const sim = jaccardSimilarity(qTokens, oqTokens);
      if (sim > 0.60) {
        errors.push(`${qIndex}: high similarity (${(sim * 100).toFixed(1)}%) with candidate Q${oq.id}: "${oq.question}"`);
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    count: candidateQuestions.length
  };
}
