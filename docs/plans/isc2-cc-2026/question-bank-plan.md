# ISC2 CC 2026 Question Bank Architecture & Schema Plan

## 1. Overview & Architectural Goals

This document outlines the data model, storage structure, identifier strategy, quality validation rules, and intake workflow for the future **ISC2 CC 2026 practice question bank (`next-bank`)**.

### Primary Invariants
1. **Backward Compatibility:** The existing 583-question bank (`2026`) must remain untouched, active, and fully operational.
2. **Zero Collision:** New question identifiers must not overlap with or shadow existing question IDs (`1` through `583`).
3. **Engine Compatibility:** Any question emitted by the new bank must be directly consumable by [`js/core/quiz-engine.js`](file:///D:/_Coding/SEC-CERT-TEST/js/core/quiz-engine.js), [`js/core/question-loader.js`](file:///D:/_Coding/SEC-CERT-TEST/js/core/question-loader.js), and [`js/ui/screen-quiz.js`](file:///D:/_Coding/SEC-CERT-TEST/js/ui/screen-quiz.js).
4. **Bilingual Parity:** Every question must provide synchronized English and Thai content for stems, options, and explanations.

---

## 2. Question Schema Specification

The schema distinguishes between **Core Runtime Fields** (mandatory for the quiz UI/engine) and **Extended Metadata Fields** (used for audit, objective mapping, and review).

### Field Comparison Table

| Field Name | Type | Status | Required | Description | Example |
| :--- | :--- | :--- | :---: | :--- | :--- |
| `id` | `integer` \| `string` | **Existing** | **Yes** | Globally unique question identifier | `1001` or `"NB-1001"` |
| `dom` | `integer` | **Existing** | **Yes** | Domain number (`1` through `5`) | `1` |
| `question` | `string` | **Existing** | **Yes** | Question stem in English | `"What is the primary goal of..."` |
| `options` | `string[]` | **Existing** | **Yes** | Array of 4 English distractor strings | `["A", "B", "C", "D"]` |
| `correct_idx` | `integer` | **Existing** | **Yes** | 0-based index of correct option (`0`–`3`) | `2` |
| `explanation` | `string` | **Existing** | **Yes** | Detailed English pedagogical rationale | `"Option C is correct because..."` |
| `short_explanation_en`| `string` | **Existing** | **Yes** | Concise English summary for review screen | `"Zero Trust requires explicit verification."` |
| `question_th` | `string` | **Existing** | **Yes** | Translated question stem in Thai | `"เป้าหมายหลักของการ..."` |
| `options_th` | `string[]` | **Existing** | **Yes** | Array of 4 Thai distractor strings | `["ก", "ข", "ค", "ง"]` |
| `explanation_th` | `string` | **Existing** | **Yes** | Detailed Thai pedagogical rationale | `"ข้อ C ถูกต้องเนื่องจาก..."` |
| `objective_id` | `string` | **Proposed** | Optional | Mapped learning objective code | `"1.1"` or `"4.C"` |
| `ai_related` | `boolean` | **Proposed** | Optional | Flags whether question covers AI Security | `true` \| `false` |
| `difficulty` | `string` | **Proposed** | Optional | Pedagogical difficulty tier | `"foundational"` \| `"applied"` |
| `source_ref` | `string` | **Proposed** | Optional | Source material identifier | `"User-Batch-2026A"` |
| `review_status` | `string` | **Proposed** | Optional | Intake status flag | `"approved"` |

---

## 3. Question Identifier Strategy

### Option Analysis

| Strategy | Pattern | Pros | Cons | Recommendation |
| :--- | :--- | :--- | :--- | :---: |
| **Option A: High Numeric Block** | `1001`, `1002`, `1003`... | Native integer sorting; 100% compatible with existing integer schema in `domain-X.js`. | None. Cleanly avoids IDs 1–583. | **Recommended** |
| **Option B: Domain Prefix Numeric** | `10001` (D1), `20001` (D2)... | Encodes domain into ID; easy range checks. | Breaks uniform sequence across domains. | Viable Alternative |
| **Option C: String Prefix** | `"NB-001"`, `"NB-002"`... | Visually distinguishes `next-bank` from legacy. | Some existing tests or filters expect `Number.isInteger(q.id)`. | Risky (requires code review) |

> [!TIP]
> **Recommended Decision: Option A (High Numeric Block 1001+)**
> Starting `next-bank` question IDs at `1001` guarantees zero collisions with the existing 583 questions, allows standard integer math in storage, and requires zero modifications to existing loader assertions.

---

## 4. File System Layout & Packaging

Questions will be partitioned by domain into ES Modules matching the loader's `questionFile` contract:

```
data/
└── certs/
    └── isc2/
        └── cc/
            └── versions/
                ├── 2026/                             # Legacy bank (UNTOUCHED)
                │   ├── exam.config.js
                │   └── questions/
                │       ├── domain-1.js (142 Qs)
                │       ├── domain-2.js (65 Qs)
                │       ├── domain-3.js (93 Qs)
                │       ├── domain-4.js (156 Qs)
                │       └── domain-5.js (127 Qs)
                └── next-bank/                        # New 2026 bank (PROPOSED)
                    ├── exam.config.js
                    └── questions/
                        ├── domain-1.js (Security Principles)
                        ├── domain-2.js (Security Governance)
                        ├── domain-3.js (IAM Concepts)
                        ├── domain-4.js (Networking & Cloud Security)
                        └── domain-5.js (Security Operations & IR)
```

Each `domain-X.js` file exports a default array of questions:
```javascript
/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 1: Security Principles
 * Status: Candidate / Verified
 */

const questions = [
  /* Validated question objects */
];

export default questions;
```

---

## 5. Duplicate Detection & Quality Assurance Algorithms

Before any candidate question is imported into `next-bank`, it must pass automated duplicate detection checks:

### 1. Token-Based Jaccard Similarity Check
Question stems are normalized (lowercase, punctuation stripped, stop words removed) and tokenized into sets:
$$\text{Jaccard}(A, B) = \frac{|A \cap B|}{|A \cup B|}$$
- If $\text{Jaccard} \ge 0.85$, the pair is flagged for manual review as a potential near-duplicate.
- If $\text{Jaccard} = 1.00$, the pair is an exact stem duplicate and must be rejected immediately.

### 2. Levenshtein Normalized Edit Distance
For pairs with length difference $\le 20\%$:
$$\text{Ratio}(s_1, s_2) = 1 - \frac{\text{Levenshtein}(s_1, s_2)}{\max(\text{len}(s_1), \text{len}(s_2))}$$
- If $\text{Ratio} \ge 0.85$, the question is flagged as a near-duplicate.

### 3. Cross-Bank Isolation Check
Candidate questions are compared against:
1. All candidate questions within the new batch.
2. All already-approved questions in `next-bank`.
3. All 583 existing questions in the legacy Pre-2026 bank.

---

## 6. Structural Validation Rules

Every candidate question must satisfy the following assertions in the import pipeline:

```javascript
function validateQuestion(q, expectedDomainId) {
  assert.ok(Number.isInteger(q.id) && q.id >= 1000, 'ID must be an integer >= 1000');
  assert.equal(q.dom, expectedDomainId, 'Domain ID must match container');
  
  // Stems
  assert.ok(typeof q.question === 'string' && q.question.trim().length >= 10, 'English stem required');
  assert.ok(typeof q.question_th === 'string' && q.question_th.trim().length >= 10, 'Thai stem required');
  
  // Options
  assert.ok(Array.isArray(q.options) && q.options.length === 4, 'Must have exactly 4 English options');
  assert.ok(Array.isArray(q.options_th) && q.options_th.length === 4, 'Must have exactly 4 Thai options');
  assert.equal(new Set(q.options).size, 4, 'English options must be distinct');
  assert.equal(new Set(q.options_th).size, 4, 'Thai options must be distinct');
  
  // Correct Answer
  assert.ok([0, 1, 2, 3].includes(q.correct_idx), 'correct_idx must be 0, 1, 2, or 3');
  
  // Explanations
  assert.ok(typeof q.explanation === 'string' && q.explanation.trim().length >= 20, 'English explanation required');
  assert.ok(typeof q.explanation_th === 'string' && q.explanation_th.trim().length >= 20, 'Thai explanation required');
}
```

---

## 7. Question Lifecycle & Staging-to-Production Workflow

### Staging vs. Production Distinction
- **Content Staging Ground (`content/isc2-cc-2026/questions/`):** Human-readable Markdown files where candidate questions are cataloged alongside full distractor disproofs, wording indicators (BEST, FIRST), and provenance audit trails using [`content/isc2-cc-2026/templates/question-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/question-template.md) and guided by [`docs/plans/isc2-cc-2026/question-writing-guidelines.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md).
- **Production Question Bank (`data/certs/isc2/cc/versions/next-bank/`):** Clean, optimized ES modules consumed at runtime by the Quiz Engine. Staging-only audit metadata is stripped during conversion.

```
[User Submits Material]
          │
          ▼
[Batch Intake & Provenance Log] ──(templates/content-batch-template.md)
          │
          ▼
[Automated Deduplication & Schema Check] ──(Fail)──► [Rejected / Quarantined]
          │
        (Pass)
          │
          ▼
[Subject Matter Expert & Accuracy Review] ─(Defect)─► [Flagged for Revision]
(Per question-writing-guidelines.md)
          │
        (Pass)
          │
          ▼
[Bilingual Translation Review (EN/TH)]
          │
        (Pass)
          │
          ▼
[Staged in content/isc2-cc-2026/questions/domain-X.md]
          │
          ▼
[User / Release Sign-Off]
          │
          ▼
[Production Import: data/certs/isc2/cc/versions/next-bank/questions/domain-X.js]
```

1. **Intake:** Unprocessed files logged in [`content-intake-checklist.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/content-intake-checklist.md) and [`content/isc2-cc-2026/templates/content-batch-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/content-batch-template.md).
2. **Editorial Adherence:** Authors follow [`question-writing-guidelines.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md) for terminology, qualifier logic, and distractor construction.
3. **Automated Gate:** Schema validator and duplicate scanner executed in Node.js.
4. **Subject Matter Expert (SME) Review:** Verifies that the designated correct answer is indisputable and that distractors are plausible yet distinctly incorrect.
5. **Localization Gate:** Verifies Thai accuracy and readability.
6. **Staging:** Recorded in [`content/isc2-cc-2026/questions/domain-X.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/questions/).
7. **Production Import:** Approved questions converted and appended to `data/certs/isc2/cc/versions/next-bank/questions/domain-X.js` with IDs `1001+`.
