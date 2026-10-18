# ISC2 CC 2026 Exam Outline — Planning & Documentation Package

## 1. Project Objective

This documentation package provides the master architectural blueprint and operational roadmap for incorporating the updated **ISC2 Certified in Cybersecurity (CC) Exam Outline (effective September 1, 2026)** into **SEC CERT TEST**.

The objective is to establish an enterprise-grade, version-isolated foundation covering domain taxonomy, knowledge content models, question schemas, intake workflows, and verification gates *before* question data is imported or source code is modified.

---

## 2. Current Project Status

| Metric / Attribute | Value | Architectural State |
| --- | --- | --- |
| **Active Exam Outline** | Pre-2026 Exam Outline | Operational (`status: 'available'`) |
| **Active Version ID** | `2026` (legacy internal ID) | Retained for strict backward compatibility |
| **Active Question Bank** | 583 verified questions | 5 domains (142 / 65 / 93 / 156 / 127); SHA-256 frozen |
| **New 2026 Version ID** | `next-bank` (provisional ID) | Gated (`status: 'coming-soon'`) |
| **New Question Bank Status** | Not imported | 0 questions; awaiting user-supplied materials |
| **Exam Vocabulary ID** | `isc2-cc-vocabulary` | Gated (`status: 'coming-soon'`); separate learning type |
| **Current Task Phase** | Documentation & Planning Only | Source code and active question banks are locked |

---

## 3. Scope & Non-Goals

### In-Scope
- Documenting the official 2026 5-domain structure and published weights (sum: 99.9%).
- Designing the data architecture for domain metadata, learning content, and practice questions.
- Specifying cross-domain AI Security integration without establishing a sixth domain.
- Designing an intake and technical review workflow for user-provided materials.
- Establishing test harnesses, integrity checks, and release criteria for future implementation.
- Preserving full backward compatibility with the existing 583-question bank and saved user sessions.

### Non-Goals (Out of Scope for this Phase)
- **No application code changes:** Do not edit HTML, CSS, JavaScript, or configs.
- **No question generation:** Do not invent, draft, or synthesize placeholder practice questions.
- **No mock data insertion:** Do not add dummy files or temporary JSON/ESM question arrays.
- **No status change:** Do not toggle `next-bank` to `available`.
- **No premature database:** Maintain flat, modular ESM/JSON architecture without backend dependencies.

---

## 4. Existing Architecture & Isolation Model

SEC CERT TEST enforces strict multi-version isolation across three architectural tiers:

1. **Version Registry Layer (`data/exam-versions.js`):**
   - Central registry defines each exam version (`id`, `title`, `status`, `questionCount`, `examConfigReference`, `questionBankReference`).
   - `resolveExamVersion(certificationId, versionId)` rejects unavailable, missing, or malformed entries, returning `null`.
2. **Question Loader Layer (`js/core/question-loader.js`):**
   - Dynamically imports question files only for validated, available configurations.
   - Tags every loaded question in a memory-safe `WeakMap` (`questionOrigins`) with its certification and version ID (`${certId}/${versionId}`).
   - Rejects question arrays where counts do not match domain config or where IDs overlap.
3. **Engine & Storage Layer (`js/core/quiz-engine.js` & `js/core/storage.js`):**
   - Quiz sessions strictly verify `questionsMatchVersion(...)` before starting.
   - Saved localStorage sessions encode `versionId` and `certificationId`. Resuming an exam from one version never affects or overwrites another.

---

## 5. Planning Documentation & Content Staging Index

This package consists of modular, cross-referenced Markdown documents located in [`docs/plans/isc2-cc-2026/`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/) and the content staging repository under [`content/isc2-cc-2026/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/):

### Core Planning & Specification Documents
1. [**`README.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/README.md) (This Document) — Master index, scope, system status, and architectural overview.
2. [**`implementation-plan.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/implementation-plan.md) — Master development roadmap spanning Phases 0 through 7 with detailed tasks, deliverables, and acceptance criteria.
3. [**`domain-mapping.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/domain-mapping.md) — Official 2026 domain taxonomy, published weights, verified numbered objectives, known subtopics, AI Security mapping, and unverified objective caveats.
4. [**`knowledge-content-plan.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/knowledge-content-plan.md) — Documentation-first study content model, bilingual schema (EN/TH), provenance tracking, and content review lifecycle.
5. [**`question-bank-plan.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-bank-plan.md) — Practice question data architecture, schema evolution, ID allocation strategy, bilingual support, duplicate detection algorithms, and approval workflows.
6. [**`question-writing-guidelines.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md) — Mandatory editorial standard, terminology consistency, qualifier interpretation (BEST, FIRST, PRIMARY), scenario design, distractor plausibility, bilingual translation rules, and review checklist.
7. [**`content-intake-checklist.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/content-intake-checklist.md) — Operational checklist and protocol for receiving, vetting, and cataloging incoming user study materials and question batches.
8. [**`verification-plan.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/verification-plan.md) — Quality assurance protocol, reusable test suites, integrity baselines, allocation verification, and zero-browser non-regression test matrix.
9. [**`decisions-and-open-questions.md`**](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/decisions-and-open-questions.md) — Architecture Decision Record (ADR), confirmed technical invariants, proposed options, and open questions requiring user input.

### Staging Repository
- [**`content/isc2-cc-2026/README.md`**](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/README.md) — Dedicated content staging repository containing domain knowledge files (`knowledge/`), question staging files (`questions/`), and standard templates (`templates/`).

---

## 6. Implementation Phase Overview

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
Phase 3: Question Bank Schema       [Design: Completed | Templates Ready | Production: Pending Phase 4]
       │
       ▼
Phase 4: Content Intake & Review    [BLOCKED: Awaiting User Study Materials]
       │
       ▼
Phase 5: Quiz Engine Integration    [Planned / Blocked on Phase 4]
       │
       ▼
Phase 6: Verification & QA          [Planned / Blocked on Phase 5]
       │
       ▼
Phase 7: Release & Promotion        [Planned / Blocked on Phase 6]
```

| Phase | Title | Design Status | Implementation Status | Primary Objective |
| --- | --- | :---: | :---: | --- |
| **Phase 0** | Project Audit & Baseline | **Completed** | **Completed** | Analyze existing 583-question bank, loader contracts, storage persistence, and SHA-256 baseline. |
| **Phase 1** | Official 2026 Domain Mapping | **Completed** | **In Progress** | Confirm 5 domains, published weights (99.9%), verify numbered objectives (D4 pending). |
| **Phase 2** | Knowledge Repository Design | **Completed** | **Staging Ready** | Design bilingual markdown study content structure, templates, and staging repo under `content/isc2-cc-2026/knowledge/`. |
| **Phase 3** | Question Bank Schema Design | **Completed** | **Staging Ready** | Define next-bank question schema, ID strategy (1001+), writing guidelines, and staging repo under `content/isc2-cc-2026/questions/`. |
| **Phase 4** | Content Intake & Review | **Completed** | **Blocked** | Await user materials; inventory, deduplicate, technically vet, and approve questions. |
| **Phase 5** | Quiz Engine Integration | **Planned** | **Not Started** | Wire `next-bank` into `exam.config.js`, Largest Remainder 125-item exam allocation. |
| **Phase 6** | Verification & QA | **Planned** | **Not Started** | Execute schema, allocation, bilingual, persistence, and SHA-256 non-regression test suites. |
| **Phase 7** | Release & Promotion | **Planned** | **Not Started** | Promote `next-bank` from Coming Soon to Available; publish release notes. |

---

## 7. Dependencies & Current Blockers

### Active Dependencies
1. **Official ISC2 CC 2026 Outline Specification:** Required to verify exact numbered objectives for Domain 4 (`4.1`, `4.2`, etc.) before domain configuration is frozen.
2. **User-Provided Study Materials & Practice Questions:** Required before Phase 4 (Content Preparation) can ingest, review, and format new questions.
3. **Architecture Decisions:** User confirmation on question ID allocation strategy and provisional vs. permanent version identifiers (see [`decisions-and-open-questions.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/decisions-and-open-questions.md)).

### Current Blockers
- **Blocker 1 (Data Dependency):** Phase 4 and beyond cannot commence until the user supplies source study materials and practice questions.
- **Blocker 2 (Verification Dependency):** Domain 4 numbered objective breakdown remains marked **Pending Verification** until the official PDF is retrieved or confirmed.

---

## 8. Next Recommended Action

1. **Review and approve this planning package:** Verify that the domain mapping, schemas, intake checklists, and verification plans meet project requirements.
2. **Resolve open architecture questions:** Select preferred question ID conventions in [`decisions-and-open-questions.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/decisions-and-open-questions.md).
3. **Ingest Phase 1 user study materials:** When study documents or question lists become available, use [`content-intake-checklist.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/content-intake-checklist.md) to initiate formal review.
