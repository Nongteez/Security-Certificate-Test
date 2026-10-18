# ISC2 CC 2026 Architecture Decisions & Open Questions

## 1. Overview

This document records the **Architecture Decision Log (ADR)** for onboarding the updated ISC2 CC 2026 Exam Outline into SEC CERT TEST. It categorizes technical decisions into **Confirmed Decisions (Locked)**, **Proposed Decisions (Architectural Recommendations)**, and **Open Questions (Requiring User Input)**.

---

## 2. Confirmed Architecture Decisions (Locked)

The following invariants have been established and cannot be changed without explicit user direction:

| ADR ID | Decision Summary | Rationale | Impact / Scope |
| :---: | :--- | :--- | :--- |
| **ADR-01** | **Preserve Legacy Version ID `2026`** | The existing 583-question practice bank uses internal ID `2026`. Changing this ID would break saved localStorage sessions, existing browser bookmarks, and session persistence integrity. | `data/exam-versions.js`, `storage.js` |
| **ADR-02** | **Use `next-bank` as Provisional ID for New 2026 Outline** | Provides a stable, isolated internal identifier for the new outline while it is in development and testing. Prevents namespace collision with the active bank. | `data/exam-versions.js`, `question-loader.js` |
| **ADR-03** | **Freeze Existing 583-Question Bank** | The 583 questions across Domain 1 through 5 represent a verified, cleaned dataset (Phase 1 artifact cleanup, Phase 2 repairs, Phase 3B duplicate replacements). They must remain untouched. | `data/certs/isc2/cc/versions/2026/questions/` |
| **ADR-04** | **Segregate Vocabulary as a Distinct Learning Content Type** | `isc2-cc-vocabulary` is registered with `type: 'vocabulary'` and `status: 'coming-soon'`. It contains no question loaders, cannot be selected as a quiz, and will provide specialized flashcard/terminology learning. | `data/exam-versions.js`, `screen-versions.js` |
| **ADR-05** | **Maintain `status: 'coming-soon'` Until Full Validation** | `next-bank` cannot be made `available` in production until its question bank is fully imported, verified, and signed off by the user. | `data/exam-versions.js` |
| **ADR-06** | **Zero Fabricated Questions** | Artificial or placeholder questions must never be synthesized by AI agents or committed to the codebase. All practice questions must originate from user-supplied materials. | Codebase & Question Banks |
| **ADR-07** | **Preserve Published Domain Weights Verbatim** | Official domain percentages (`24%`, `17.3%`, `20%`, `21.3%`, `17.3%` = 99.9%) are preserved without artificial rounding or normalization. The Quiz Engine handles integer seat allocation using the Largest Remainder method. | `exam.config.js`, `quiz-engine.js` |
| **ADR-08** | **AI Security is Integrated, Not a Sixth Domain** | AI Security concepts are woven across all 5 official domains in alignment with the official ISC2 outline, rejecting any architecture that treats AI as a 6th domain. | `data/exam-version-info.js`, `domain-mapping.md` |
| **ADR-09** | **Reconcile Content Staging Directory to `content/isc2-cc-2026/`** | Consolidates incoming study material staging, domain knowledge files (`knowledge/`), question candidate files (`questions/`), and standardization templates (`templates/`) into `content/isc2-cc-2026/`. Replaces the earlier provisional proposal of `docs/knowledge/` to cleanly decouple content staging from engineering planning (`docs/plans/isc2-cc-2026/`). | `content/isc2-cc-2026/`, `knowledge-content-plan.md` |
| **ADR-10** | **Adopt Question Writing Guidelines as Editorial Standard** | Mandates strict compliance with `docs/plans/isc2-cc-2026/question-writing-guidelines.md` for terminology standards, qualifier logic (BEST/FIRST/PRIMARY/EXCEPT), distractor plausibility, and bilingual parity before staging approval. | `question-writing-guidelines.md`, `questions/` |

---

## 3. Proposed Decisions (Recommended Architecture)

The engineering team proposes the following technical designs, subject to user review:

### Proposed Decision 1: Question ID Allocation (Start at 1001+)
- **Proposal:** Number all new questions in `next-bank` starting at integer `1001` (e.g., Domain 1: 1001–1100, Domain 2: 1101–1200, etc.).
- **Rationale:**
  - Guarantees zero ID collision with the legacy bank (IDs 1–583).
  - Conforms to existing TypeScript/JavaScript assertions that require `Number.isInteger(q.id)`.
  - Avoids string ID parsing overhead in localStorage snapshots.
- **Alternatives Considered:**
  - *Domain-prefix integers (e.g., 10001 for D1):* Viable, but creates large sparse ID gaps.
  - *String slugs (e.g., `"NB-001"`):* Breaks existing `Number.isInteger(q.id)` validation in storage and loaders.

### Proposed Decision 2: File System Layout for `next-bank`
- **Proposal:** Store runtime configuration and question modules at:
  ```
  data/certs/isc2/cc/versions/next-bank/
  ├── exam.config.js
  └── questions/
      ├── domain-1.js
      ├── domain-2.js
      ├── domain-3.js
      ├── domain-4.js
      └── domain-5.js
  ```
- **Rationale:** Mirrors the proven architecture of `data/certs/isc2/cc/versions/2026/`, enabling standard ESM `import()` resolution without changing question-loader path logic.

### Proposed Decision 3: Extended Question Metadata Schema
- **Proposal:** Extend the standard 10-field question object with non-breaking optional fields:
  ```json
  {
    "id": 1001,
    "dom": 1,
    "question": "...",
    "options": ["...", "...", "...", "..."],
    "correct_idx": 1,
    "explanation": "...",
    "short_explanation_en": "...",
    "question_th": "...",
    "options_th": ["...", "...", "...", "..."],
    "explanation_th": "...",
    "objective_id": "1.1",
    "ai_related": false,
    "source_ref": "USER-BATCH-01"
  }
  ```
- **Rationale:** Enables fine-grained objective tracking and AI question auditing without breaking the UI renderer, which simply ignores undeclared properties.

---

## 4. Open Questions Requiring User Approval

The following decisions require explicit user input before Phase 5 (Integration) can be finalized:

### Question 1: Final Public-Facing Version ID Migration
- **Context:** Currently, the legacy bank has ID `2026` (labeled "ISC2 CC — Pre-2026 Exam Outline"), and the upcoming bank has ID `next-bank` (labeled "ISC2 CC — 2026 Exam Outline").
- **Options for Final Release:**
  - **Option 1A (Recommended):** Keep internal IDs as `2026` (legacy) and `next-bank` (new) permanently. Only change the user-facing display titles and badges. This eliminates any migration risk for saved sessions.
  - **Option 1B:** Perform a database migration renaming the legacy ID to `pre-2026` and assigning ID `2026` to the new bank. This requires a migration script to update existing localStorage keys.
- **User Decision Required:** *Do you prefer Option 1A (zero-risk stable internal IDs) or Option 1B (semantic version renaming with storage migration)?*

### Question 2: Minimum Viable Question Count for Release
- **Context:** An exam simulation requires at least 125 questions with the domain allocation 30/22/25/27/21.
- **Options:**
  - **Option 2A (Minimal Mock Exam):** Release when a minimum of 125 vetted questions (exact domain quota) are available.
  - **Option 2B (Robust Practice Pool):** Release only when each domain has at least 50 questions (total 250+ questions) so that randomized practice has variety.
  - **Option 2C (Full Parity):** Release only when question volume approaches the legacy bank (~500+ questions).
- **User Decision Required:** *What is your target minimum question threshold before `next-bank` can be made Available?*

### Question 3: Domain 4 Official Objective Verification
- **Context:** The official numbered objective breakdown for Domain 4 (`4.1`, `4.2`, etc.) is missing from the retrieved summary, though topic coverage is confirmed.
- **Options:**
  - **Option 3A (Recommended):** Await the user-provided official PDF or reference document to supply official `4.x` codes before freezing objective metadata.
  - **Option 3B:** Proceed with topic codes (`4.A`, `4.B`, `4.C`, `4.D`, `4.E`, `4.F`) as permanent internal identifiers.
- **User Decision Required:** *Will you supply the official ISC2 CC 2026 Exam Outline PDF for Domain 4, or should we use the topic codes as internal IDs?*

---

## 5. Technical Risk Analysis & Mitigation Matrix

| Identified Risk | Severity | Likelihood | Impact | Mitigation Strategy |
| :--- | :---: | :---: | :--- | :--- |
| **Accidental Overwrite of Legacy Bank** | **Critical** | Low | Destruction of 583 cleaned questions | SHA-256 baseline assertion runs before and after all file changes. Code reviews reject any edits to `versions/2026/`. |
| **LocalStorage Session Cross-Contamination** | **High** | Low | Broken user quiz resumption | Sessions are keyed with explicit `versionId` and `certificationId`. The loader rejects question arrays whose origins do not match. |
| **Domain 4 Objective Misalignment** | **Medium** | Medium | Incorrect question categorization | Domain 4 is explicitly marked *Pending Verification*. Staged questions use broad topic tags until official numbering is confirmed. |
| **Translation Quality Degradation** | **Medium** | Medium | Confusing Thai explanations | All imported questions must pass native bilingual review with industry acronym preservation before staging. |
| **Distractor Ambiguity / Dual Correct Answers** | **High** | Medium | Frustrated candidates; incorrect scoring | Intake checklist enforces technical accuracy review requiring explicit disproof of all 3 distractors. |
