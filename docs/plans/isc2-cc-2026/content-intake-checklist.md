# Content Intake Checklist & Protocol

## 1. Overview & Purpose

This document establishes the standardized intake protocol for receiving, inventorying, vetting, and cataloging user-provided study materials, reference notes, and candidate practice questions for the **ISC2 CC 2026 Exam Outline (`next-bank`)**.

No external content may be imported into the active question bank without completing this checklist.

---

## 2. Intake Gate Criteria

Before any candidate question batch is staged, it must satisfy five non-negotiable gate criteria:

```
[Incoming Batch]
       │
       ├─► 1. License & Usage Permission Verified
       ├─► 2. Source Provenance & Tier Categorized
       ├─► 3. Duplicate Scan Passed (<85% Lexical Similarity)
       ├─► 4. Technical Answer & Explanation Verified
       └─► 5. Bilingual Completeness (EN + TH) Confirmed
```

---

## 3. Reusable Batch Intake Template

> [!TIP]
> **Canonical Staging Template:**
> For operational batch tracking in the content staging repository, use the dedicated template file at [`content/isc2-cc-2026/templates/content-batch-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/content-batch-template.md).
> All practice questions evaluated through this checklist must adhere to [`docs/plans/isc2-cc-2026/question-writing-guidelines.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md).

Copy and paste the template below for every incoming material batch (or instantiate a new file in `content/isc2-cc-2026/batches/`):

```markdown
### Batch Intake Record: [BATCH-YYYYMMDD-ID]

#### A. Source Metadata
- **Batch Identifier:** `BATCH-[YYYYMMDD]-[SEQ]` (e.g., `BATCH-20261101-01`)
- **Receipt Date:** `YYYY-MM-DD`
- **Provided By:** User / Contributor
- **Raw File Name(s):** e.g., `cc_2026_d1_notes.docx`, `practice_questions_batch1.json`
- **File Format:** Markdown / JSON / PDF / DOCX / Text / HTML
- **Raw File Location (Staging):** `assets/staging/incoming/[BATCH-ID]/`
- **Estimated Item Count:** [N] questions / [N] notes

#### B. Content Classification & Scope
- **Source Type:**
  - [ ] Official Outline or Candidate Information Bulletin
  - [ ] User Instructional Notes / Lecture Summaries
  - [ ] Third-Party Practice Questions
  - [ ] Community Contributions
- **Target Domain(s):**
  - [ ] Domain 1: Security Principles (24%)
  - [ ] Domain 2: Security Governance (17.3%)
  - [ ] Domain 3: IAM Concepts (20%)
  - [ ] Domain 4: Networking and Cloud Security Concepts (21.3%)
  - [ ] Domain 5: Security Operations and Incident Response (17.3%)
- **Target Learning Objective(s):** e.g., `1.1`, `1.2`, `4.C`, `5.1`
- **Original Language(s):**
  - [ ] English Only
  - [ ] Thai Only
  - [ ] Bilingual (English + Thai)

#### C. Legal & Provenance Verification
- **Usage Rights / Ownership:**
  - [ ] User owns content and authorizes inclusion in SEC CERT TEST.
  - [ ] Public domain / fair educational use rationale documented.
  - [ ] No NDA-protected or unreleased live exam content included.
- **Provenance Category:**
  - [ ] Tier 1: Official ISC2 Objective
  - [ ] Tier 2: User Reference Study Material
  - [ ] Tier 3: Third-Party Practice Simulation
  - [ ] Tier 4: Educational Commentary / Explanation
- **Attribution / Citation Statement:**
  - Statement: `___________________________________________________`

#### D. Quality & Technical Accuracy Review Checklist
- [ ] **Structural Completeness:** Question stem, exactly 4 distinct options, and 0-indexed correct answer present.
- [ ] **Technical Validity:** The correct option is factually and technically correct per current cybersecurity standards.
- [ ] **Distractor Plausibility:** The 3 incorrect distractors are plausible yet indisputably false in context.
- [ ] **Explanation Quality:** Explanation explicitly details *why* the correct answer is right and *why* distractors are incorrect.
- [ ] **Terminology Adherence:** Industry standards (NIST SP 800-series, ISO/IEC 27001, RFCs, MITRE ATT&CK) cited where applicable.
- [ ] **AI Security Labeling:** If question relates to AI, `ai_related: true` is assigned and domain alignment verified.

#### E. Duplicate & Overlap Review
- [ ] **Internal Batch Scan:** 0 duplicate questions within this intake batch.
- [ ] **Legacy Bank Scan:** Compared against 583 Pre-2026 questions (Jaccard < 0.85).
- [ ] **Next-Bank Scan:** Compared against already-staged `next-bank` items (Jaccard < 0.85).
- [ ] **Action on Near-Duplicates:** Flagged pairs reviewed and rewritten or discarded.

#### F. Bilingual Translation Audit
- [ ] **Thai Translation Accuracy:** Question stem, options, and explanations accurately rendered in Thai.
- [ ] **Technical Terminology:** Standard English abbreviations (AAA, RBAC, SIEM, MFA, CIA) retained in context alongside Thai explanation.
- [ ] **No Machine Translation Artifacts:** Reviewed by native speaker for natural sentence flow.

#### G. Intake Decision & Sign-Off
- **Decision:**
  - [ ] **ACCEPTED:** Ready for packaging into `data/certs/isc2/cc/versions/next-bank/questions/`.
  - [ ] **ACCEPTED WITH EDITS:** Minor technical or grammatical revisions required before merge.
  - [ ] **REJECTED:** Violates scope, duplicate of existing questions, or legally problematic.
- **Reviewer Signature:** `___________________________`
- **Sign-off Date:** `YYYY-MM-DD`
- **Assigned ID Range:** `[START_ID]` to `[END_ID]`
```

---

## 4. Example: Completed Intake Record (Illustrative)

```markdown
### Batch Intake Record: BATCH-20261020-01 (Sample)

#### A. Source Metadata
- **Batch Identifier:** `BATCH-20261020-01`
- **Receipt Date:** `2026-10-20`
- **Provided By:** Project Contributor (Academic Partner)
- **Raw File Name(s):** `domain1_security_principles_25q.json`
- **File Format:** JSON
- **Raw File Location (Staging):** `assets/staging/incoming/BATCH-20261020-01/`
- **Estimated Item Count:** 25 questions

#### B. Content Classification & Scope
- **Source Type:** Third-Party Practice Questions (Educational Simulation)
- **Target Domain(s):** Domain 1: Security Principles (24%)
- **Target Learning Objective(s):** Objectives 1.1, 1.2, 1.3, 1.4, 1.5
- **Original Language(s):** Bilingual (English + Thai)

#### C. Legal & Provenance Verification
- **Usage Rights:** Contributor-authored educational content released under open-source project terms.
- **Provenance Category:** Tier 3: Third-Party Practice Simulation.
- **Attribution Statement:** "Contributed educational practice questions authored for SEC CERT TEST."

#### D. Quality & Technical Accuracy Review Checklist
- [x] Structural Completeness: All 25 items have 4 options and valid correct index.
- [x] Technical Validity: Confirmed aligned with NIST SP 800-33 and ISO/IEC 27001 definitions.
- [x] Distractor Plausibility: Confirmed. No obvious "giveaways" or absurd options.
- [x] Explanation Quality: All explanations include rationales for both correct and distractor options.
- [x] Terminology Adherence: AAA, Due Diligence, Due Care, and ISO standards cited.
- [x] AI Security Labeling: 3 questions flagged `ai_related: true` covering AI Model Poisoning and Data Privacy.

#### E. Duplicate & Overlap Review
- [x] Internal Batch Scan: 0 internal duplicates.
- [x] Legacy Bank Scan: Ran `audit-results.json` scan; maximum stem similarity to 583 legacy bank was 62% (Q14 similarity). No overlaps.
- [x] Next-Bank Scan: First batch for `next-bank`; no existing items.

#### F. Bilingual Translation Audit
- [x] Thai Translation Accuracy: Verified by bilingual reviewer.
- [x] Technical Terminology: Acronyms preserved.
- [x] No Machine Translation Artifacts: Fluent and natural Thai phrasing.

#### G. Intake Decision & Sign-Off
- **Decision:** ACCEPTED.
- **Reviewer Signature:** Senior Cybersecurity Education Planner
- **Sign-off Date:** 2026-10-20
- **Assigned ID Range:** 1001 to 1025 (Domain 1)
```

---

## 5. Staging & Quarantine Protocol

When candidate items fail any audit step:
1. **Quarantine Directory:** Files are moved to `assets/staging/quarantine/[BATCH-ID]/`.
2. **Issue Logging:** A Markdown issue summary (`defects.md`) is written in the batch directory detailing the exact defect (e.g., Ambiguous Option B in Question 14, Duplicate Stem with Legacy Q283).
3. **Remediation Loop:** Only after all issues are resolved and signed off can items transition from quarantine to staging and ultimately to `data/certs/isc2/cc/versions/next-bank/`.
