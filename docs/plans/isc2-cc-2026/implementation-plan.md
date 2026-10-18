# ISC2 CC 2026 Implementation Plan & Roadmap

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Establish an end-to-end, version-isolated engineering roadmap for onboarding the updated ISC2 Certified in Cybersecurity (CC) 2026 Exam Outline, from domain metadata verification to content intake, question bank schema design, quiz engine integration, and release validation.

**Architecture:** Version-isolated multi-phase expansion preserving the legacy bank (`2026`), maintaining `next-bank` as a segregated entry until verification passes, and using modular ESM question files and strict registry loading contracts.

**Tech Stack:** Vanilla JavaScript (ESM), HTML5, Vanilla CSS, Node.js Test Runner (`node:test`, `node:assert/strict`), JSON/ESM question datasets.

---

## Roadmap Overview

```
Phase 0: Audit & Baseline          [Completed]
       │
       ▼
Phase 1: Domain Mapping             [In Progress — D4 Pending Verification]
       │
       ▼
Phase 2: Knowledge Repo Design      [Design: Completed | Staging Ready | Population: Awaiting Materials]
       │
       ▼
Phase 3: Question Bank Schema       [Design: Completed | Guidelines Ready | Production: Pending Phase 4]
       │
       ▼
Phase 4: Content Intake & Review    [Blocked — Awaiting User Study Materials]
       │
       ▼
Phase 5: Quiz Engine Integration    [Not Started — Blocked on Phase 4]
       │
       ▼
Phase 6: Verification & QA          [Not Started — Blocked on Phase 5]
       │
       ▼
Phase 7: Release & Promotion        [Not Started — Blocked on Phase 6]
```

---

## Phase 0 — Project Audit & Baseline

### Objective
Inspect the existing codebase, identify reusable components, document current question schemas and loader contracts, and establish a tamper-proof SHA-256 integrity baseline.

### Status
`Completed`

### Blockers
None.

### Dependencies
None.

### Tasks
1. [x] **Inspect working tree & architecture:** Audit [`js/core/question-loader.js`](file:///D:/_Coding/SEC-CERT-TEST/js/core/question-loader.js), [`js/core/quiz-engine.js`](file:///D:/_Coding/SEC-CERT-TEST/js/core/quiz-engine.js), [`js/core/storage.js`](file:///D:/_Coding/SEC-CERT-TEST/js/core/storage.js), and [`data/exam-versions.js`](file:///D:/_Coding/SEC-CERT-TEST/data/exam-versions.js).
2. [x] **Audit existing Pre-2026 question bank:** Confirm 583 active questions across 5 domain files (`data/certs/isc2/cc/versions/2026/questions/domain-1.js` through `domain-5.js`).
3. [x] **Establish SHA-256 baseline:** Record pre-edit SHA-256 hashes for all 43 core files in [`docs/verification/exam-dialog-responsive-before.json`](file:///D:/_Coding/SEC-CERT-TEST/docs/verification/exam-dialog-responsive-before.json).
4. [x] **Document loader & persistence contracts:** Document `WeakMap` origin tagging, Largest Remainder allocation, autosave triggers, and version isolation guarantees.

### Deliverables
- Verified audit log and SHA-256 integrity baseline for 43 protected files.
- Documented question schema: 10 fields (`id`, `dom`, `question`, `options`, `correct_idx`, `explanation`, `short_explanation_en`, `question_th`, `options_th`, `explanation_th`).

### Acceptance Criteria
- 100% of the 583 existing questions pass structural validation.
- All 43 protected files match baseline hashes with zero modifications.
- Existing quiz engine and session persistence test suites pass 100% (15/15 tests).

---

## Phase 1 — Official 2026 Domain Mapping

### Objective
Verify the official 2026 ISC2 CC Exam Outline domain structure, weights, and numbered objectives; specify cross-domain AI Security integration; and establish clear provenance distinctions between official and educational content.

### Status
`In Progress` (Domains 1, 2, 3, and 5 verified; Domain 4 numbered breakdown pending official verification)

### Blockers
- Official ISC2 numbered objective breakdown for Domain 4 is incomplete in current reference materials.

### Dependencies
- Official ISC2 Certified in Cybersecurity (CC) Exam Outline (effective September 1, 2026).
- User-provided reference materials.

### Tasks
1. [x] **Verify 5-domain structure & weights:** Confirm published domain names and weights:
   - Domain 1: Security Principles (24%)
   - Domain 2: Security Governance (17.3%)
   - Domain 3: Identity and Access Management (IAM) Concepts (20%)
   - Domain 4: Networking and Cloud Security Concepts (21.3%)
   - Domain 5: Security Operations and Incident Response (17.3%)
   - Stated official total: 100%; Published rounded sum: 99.9%.
2. [x] **Compile verified numbered objectives:** Record verified subtopics for D1 (1.1–1.5), D2 (2.1–2.4), D3 (3.1–3.2), and D5 (5.1–5.5).
3. [x] **Mark Domain 4 pending official verification:** Document confirmed topic coverage for D4 (Networking, Threats, Architecture, Wireless, Embedded/IoT, Cloud) without inventing artificial `4.x` numbers.
4. [x] **Map AI Security concepts across all 5 domains:** Confirm AI topics (Model Poisoning, GRC/KRI, Service Accounts/MFA, AI Firewalls, Alert Fatigue/Data Leakage) without establishing a 6th domain.
5. [ ] **Retrieve & confirm official Domain 4 numbered objectives:** Validate against official ISC2 exam outline PDF when accessible.

### Deliverables
- [`docs/plans/isc2-cc-2026/domain-mapping.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/domain-mapping.md) documenting full domain hierarchy, published weights, AI coverage, and unverified caveats.

### Acceptance Criteria
- Stated domain weights sum to 99.9% as published without artificial normalization.
- Domain 4 is explicitly marked as Pending Verification for numbered objective codes.
- AI Security is documented across all 5 domains and explicitly rejected as a standalone sixth domain.

---

## Phase 2 — Knowledge Repository Design & Staging Setup

### Objective
Design a documentation-first knowledge repository architecture to store study notes, key terms, definitions, and domain explanations in both English and Thai prior to question authoring, and establish the physical staging area.

### Status
- **Documentation Design Status:** `Completed`
- **Implementation Status:** `Staging Ready` (Repository framework prepared; content population blocked on user study materials)

### Blockers
- None for repository design. Content entry is blocked awaiting user-supplied reference materials.

### Dependencies
- Completion of Phase 1 domain mapping.

### Tasks
1. [x] **Define markdown study note schema:** Establish YAML frontmatter and markdown section standards covering domain ID, objective ID, technical definitions, bilingual explanations, and source references ([`content/isc2-cc-2026/templates/knowledge-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/knowledge-template.md)).
2. [x] **Establish bilingual translation guidelines:** Formulate rules for preserving industry-standard acronyms (IAM, GRC, SIEM, MFA, Zero Trust) in Thai translations.
3. [x] **Establish directory structure for study notes:** Created staging ground under [`content/isc2-cc-2026/knowledge/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/knowledge/) (`domain-1.md` through `domain-5.md`) reconciling earlier `docs/knowledge/` proposal per ADR-09.
4. [x] **Define peer review & correction workflow:** Specify how inaccurate definitions, missing references, or ambiguous explanations are flagged, revised, and approved.
5. [ ] **Populate knowledge entries from user materials:** (Execute during Phase 4 when materials are supplied).

### Deliverables
- [`docs/plans/isc2-cc-2026/knowledge-content-plan.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/knowledge-content-plan.md) with schema definitions and concrete Markdown examples.
- [`content/isc2-cc-2026/templates/knowledge-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/knowledge-template.md) canonical template.
- [`content/isc2-cc-2026/knowledge/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/knowledge/) staging files for Domains 1 through 5.

### Acceptance Criteria
- Content model is entirely file-based (Markdown/JSON) with zero database overhead.
- Supports both English and Thai with explicit language tags and provenance metadata.
- Reusable review status flags (`draft`, `in-review`, `approved`, `needs-revision`).
- Five empty staging files exist with verified domain names and published weights.

---

## Phase 3 — Question Bank Schema & Editorial Standards

### Objective
Design the question data schema for `next-bank`, specifying ID numbering, objective tagging, bilingual fields, duplicate detection algorithms, quality validation rules, and mandatory editorial writing guidelines.

### Status
- **Documentation & Schema Design Status:** `Completed`
- **Implementation Status:** `Staging Ready` (Editorial guidelines and staging files prepared; production ES modules pending Phase 4 content)

### Blockers
- None for architecture and guidelines. Packaging into production modules is blocked on Phase 4 intake.

### Dependencies
- Completion of Phase 1 (Domain Mapping).

### Tasks
1. [x] **Formulate next-bank question schema:** Maintain backward compatibility with the active 10-field schema while adding optional extended metadata (`objective_id`, `ai_related`, `source_ref`).
2. [x] **Determine question ID strategy:** Established high numeric block (`1001+`) preventing collisions with legacy questions 1–583.
3. [x] **Design duplicate detection engine:** Specify combined Jaccard token similarity (>= 85%) and Levenshtein edit distance algorithms for cross-bank and intra-bank deduplication.
4. [x] **Author question writing guidelines:** Created [`docs/plans/isc2-cc-2026/question-writing-guidelines.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md) covering terminology standards, qualifiers (BEST, FIRST, PRIMARY, EXCEPT), scenario construction, distractor quality, and review checklist.
5. [x] **Establish question staging ground & templates:** Created [`content/isc2-cc-2026/templates/question-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/question-template.md) and [`content/isc2-cc-2026/questions/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/questions/) (`domain-1.md` through `domain-5.md`).
6. [ ] **Package approved questions into production ESM modules:** Generate `data/certs/isc2/cc/versions/next-bank/questions/domain-X.js` (Execute during Phase 5).

### Deliverables
- [`docs/plans/isc2-cc-2026/question-bank-plan.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-bank-plan.md) containing schema definitions, validation rules, and deduplication specs.
- [`docs/plans/isc2-cc-2026/question-writing-guidelines.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md) authoritative editorial standards.
- [`content/isc2-cc-2026/templates/question-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/question-template.md) canonical question staging template.
- [`content/isc2-cc-2026/questions/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/questions/) staging files for Domains 1 through 5.

### Acceptance Criteria
- Proposed question schema is a clean superset of the existing 10-field schema.
- Question loader (`question-loader.js`) can consume the schema without breaking existing assertions.
- Duplicate detection rules detect >= 85% lexical similarity in question stems.
- Editorial guidelines comprehensively cover qualifiers, distractors, scenarios, and bilingual translation.

---

## Phase 4 — Content Preparation & Review

### Objective
Receive incoming user-provided study materials and practice questions, catalogue them via the intake checklist, deduplicate against existing questions, perform technical verification, and format approved items for import.

### Status
`Blocked` (Awaiting user study materials)

### Blockers
- User has not yet provided new study materials or practice question batches.

### Dependencies
- User-supplied materials.
- Phase 3 Question Bank Schema.
- Phase 1 Domain Mapping.

### Tasks
1. [ ] **Execute batch intake:** Complete [`content-intake-checklist.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/content-intake-checklist.md) for each incoming file or dataset.
2. [ ] **Classify by domain & objective:** Tag each item with its target domain (1–5) and specific objective.
3. [ ] **Run automated deduplication:** Compare incoming questions against both the 583 Pre-2026 questions and newly accepted questions.
4. [ ] **Perform technical accuracy audit:** Verify that correct answers are factually correct, unambiguous, and supported by explanations.
5. [ ] **Audit bilingual translations:** Verify Thai translation quality and eliminate machine-translation artifacts.
6. [ ] **Generate staged question files:** Output validated questions into staging JSON files prior to final ESM packaging.

### Deliverables
- Completed intake checklist records for all received batches.
- Staged, verified question datasets categorized by domain.

### Acceptance Criteria
- 0 duplicate questions across the new bank and the existing 583-question bank.
- 100% of approved questions have verified single correct answers and complete bilingual explanations.
- All approved questions map to verified domains and known objectives.

---

## Phase 5 — Quiz Engine Integration

### Objective
Integrate the validated `next-bank` dataset into SEC CERT TEST's runtime architecture, wire version configuration, preserve session isolation, and test proportional domain allocation for 125-item mock exams.

### Status
`Not Started` (Blocked on Phase 4)

### Blockers
- Requires verified question datasets from Phase 4.

### Dependencies
- Phase 3 schema and Phase 4 verified question datasets.

### Tasks
1. [ ] **Create `exam.config.js` for `next-bank`:** Configure official domain weights (`0.24`, `0.173`, `0.20`, `0.213`, `0.173`), passing score (70%), and domain question counts.
2. [ ] **Register `next-bank` in `data/exam-versions.js`:** Point `examConfigReference`, `domainMetadataReference`, and `questionBankReference` to the new version directory.
3. [ ] **Verify Largest Remainder allocation:** Verify that `calculateDomainAllocations` computes exact 125-question mock exam quotas reflecting the new weights:
   - D1 (24%): 30 questions
   - D2 (17.3%): 22 questions
   - D3 (20%): 25 questions
   - D4 (21.3%): 27 questions
   - D5 (17.3%): 21 questions
   - Total: 125 questions.
4. [ ] **Validate session persistence:** Verify localStorage saving, autosave, elapsed timer, and start-new confirmation modal behavior for the new version.
5. [ ] **Preserve version isolation:** Verify that legacy `2026` sessions, results, and retries remain untouched.

### Deliverables
- Runtime configuration `data/certs/isc2/cc/versions/next-bank/exam.config.js`.
- Updated version registry entry in `data/exam-versions.js`.

### Acceptance Criteria
- `calculateDomainAllocations` yields exact 30/22/25/27/21 distribution summing to 125 questions.
- Legacy `2026` exam configuration and 583-question bank remain 100% functional and unmodified.
- Resuming an in-progress session for either version loads its respective bank without cross-contamination.

---

## Phase 6 — Verification & Quality Assurance

### Objective
Execute comprehensive, automated non-regression verification across question schema validity, domain allocation math, session persistence, language toggles, and SHA-256 protected file baselines.

### Status
`Not Started` (Blocked on Phase 5)

### Blockers
- Requires completed integration from Phase 5.

### Dependencies
- Complete Phase 5 integration.
- Existing test suites under `tools/`.

### Tasks
1. [ ] **Execute schema validation:** Run automated structural checks on 100% of new questions.
2. [ ] **Execute quiz engine test suite:** Verify sequential practice, random practice, and 125-question exam allocation (`node tools/verify-phase4-quiz-engine.mjs`).
3. [ ] **Execute session persistence test suite:** Verify autosave, reload, and timer restoration (`node tools/verify-session-persistence.mjs`).
4. [ ] **Execute version registry test suite:** Run `node --test tools/verify-exam-versions.mjs`.
5. [ ] **Execute information dialog test suite:** Run `node --test tools/verify-exam-dialog-complete.mjs` and `verify-exam-version-info.mjs`.
6. [ ] **Verify protected file hashes:** Re-verify all 43 protected file SHA-256 hashes against the pre-edit baseline.
7. [ ] **Execute JavaScript syntax validation:** Run `node --check` across all modules.

### Deliverables
- Automated verification report documenting 0 test failures across all suites.
- Updated verification results log in `docs/verification/`.

### Acceptance Criteria
- 100% pass rate across all Node-based test runners.
- Zero failures in schema, allocation, persistence, and localization tests.
- 43/43 protected baseline file hashes match identically.
- Zero browser console errors in static linting.

---

## Phase 7 — Release Preparation

### Objective
Define release readiness criteria, promote `next-bank` from `coming-soon` to `available`, publish release documentation, and provide rollback mechanisms.

### Status
`Not Started` (Blocked on Phase 6)

### Blockers
- Requires 100% pass rate in Phase 6.

### Dependencies
- Full sign-off on Phase 6 verification.
- Explicit user approval to publish the new version.

### Tasks
1. [ ] **Validate release checklist:** Confirm question counts, domain weights, explanations, and localization meet minimum threshold.
2. [ ] **Promote registry status:** Update `status: 'available'` in `data/exam-versions.js` for the new version.
3. [ ] **Update UI information modal:** Update status badge to "Available" and display final question count.
4. [ ] **Compile release documentation:** Document newly imported question counts, domain breakdown, and AI topic coverage.
5. [ ] **Establish rollback protocol:** Document single-line configuration rollback (`status: 'coming-soon'`) in case of critical post-release defects.

### Deliverables
- Production release notes.
- Operational rollback instructions.

### Acceptance Criteria
- Explicit user approval granted prior to setting `status: 'available'`.
- Rollback tested and proven to revert safely within 60 seconds without data loss.
- Both Pre-2026 and 2026 exam versions selectable from the Version Selection screen.
