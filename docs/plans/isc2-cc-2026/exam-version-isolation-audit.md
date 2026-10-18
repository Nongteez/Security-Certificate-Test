# ISC2 CC Exam Version Isolation Audit Report

**Date of Audit:** October 18, 2026  
**Auditor:** Antigravity AI  
**Scope:** Investigation into potential question-bank mixing between ISC2 CC Pre-2026 and 2026 Exam Outlines  
**Audit Finding:** **CONFIRMED MIXING**  

---

## 1. Audit Summary

An urgent technical audit was conducted on repository `D:\_Coding\SEC-CERT-TEST` to determine whether newly authored ISC2 CC 2026 questions were merged into the existing Pre-2026 question bank or maintained in strict isolation.

### Executive Verdict
**CONFIRMED MIXING.**

The 24 newly generated 2026 Domain 1 questions (IDs `584`–`607`) were appended directly into `data/certs/isc2/cc/versions/2026/questions/domain-1.js`. In the application's runtime architecture, this file is the active backing question bank for the **"ISC2 CC — Pre-2026 Exam Outline"** (version ID `'2026'`). 

As a consequence:
1. The **Pre-2026 Exam Outline** has been contaminated with 24 newly authored 2026 Domain 1 questions, increasing its Domain 1 count from 142 to 166 and its total bank count from 583 to 607.
2. The **2026 Exam Outline** (version ID `'next-bank'`) remains unpopulated, marked as `"coming-soon"`, and has null question bank references.
3. Users launching a practice session for the Pre-2026 exam are served 2026 questions.
4. The 583 original legacy questions themselves were **not overwritten, deleted, or corrupted**; their original content and sequence (IDs 1–495 in Domain 1, 1–583 across all domains) remain completely intact at indices 0–141.

---

## 2. Current Question Counts by Version and Domain

### Question Counts Verified via JavaScript Imports (`question-loader.js` & direct ESM imports)

| Domain | Pre-2026 Expected (Legacy) | Pre-2026 Actual (Current Bank) | 2026 Expected (Next-Bank) | 2026 Actual (`next-bank`) | Status |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Domain 1: Security Principles** | 142 | **166** (142 legacy + 24 new) | 24+ | 0 (null reference) | **MIXED** |
| **Domain 2: BC/DR/IR** | 65 | 65 | 0 | 0 (null reference) | Clean |
| **Domain 3: Access Controls** | 93 | 93 | 0 | 0 (null reference) | Clean |
| **Domain 4: Network Security** | 156 | 156 | 0 | 0 (null reference) | Clean |
| **Domain 5: Security Operations** | 127 | 127 | 0 | 0 (null reference) | Clean |
| **Total Questions** | **583** | **607** | **TBD** | **0** | **MIXED (+24 in Pre-2026)** |

### Question ID Breakdown in `data/certs/isc2/cc/versions/2026/questions/domain-1.js`
- **Indices `0` to `141` (142 questions):** Original legacy Pre-2026 questions (IDs `1` to `495`).
- **Indices `142` to `165` (24 questions):** Newly authored 2026 Domain 1 questions (IDs `584` to `607`).
- **ID Collisions within bank:** Zero (0). All 607 IDs in the active bank are strictly unique numbers.

---

## 3. Before/After Changes Attributable to the Previous Agent

The following working tree changes were verified via `git status`, `git diff`, and file history:

### 1. `data/certs/isc2/cc/versions/2026/questions/domain-1.js`
- **Before:**
  - Header: `Question Count: 142`
  - Total items: 142 objects ending at ID `495`
- **After:**
  - Header: `Question Count: 166`
  - Total items: 166 objects ending at ID `607`
  - Appended 24 questions (Q584–Q607) representing Opportunities O01–O18 from the Domain 1 Curation Plan.

### 2. `data/certs/isc2/cc/versions/2026/exam.config.js`
- **Before:**
  - `totalQuestions: 583`
  - `domains[0].questionCount: 142`
  - `domains[0].questionThCount: 142`
- **After:**
  - `totalQuestions: 607`
  - `domains[0].questionCount: 166`
  - `domains[0].questionThCount: 166`

### 3. `data/exam-versions.js`
- **Before:**
  - `versions[0].questionCount: 583`
  - `versions[0].description: '583 practice questions based on the previous ISC2 CC exam domain structure.'`
- **After:**
  - `versions[0].questionCount: 607`
  - `versions[0].description: '607 practice questions based on the ISC2 CC exam domain structure, including 2026 Domain 1 additions.'`

### 4. `tools/verify-phase4-quiz-engine.mjs` & `tools/verify-session-persistence.mjs`
- Test assertions were modified to expect `166` and `607` instead of `142` and `583`.

### 5. `content/isc2-cc-2026/questions/domain-1.md`
- Synchronized staging record with the 24 newly authored questions and editorial metadata.

---

## 4. Evidence of Separation or Mixing

### Direct Evidence of Mixing
1. **Physical File Location:** The 24 new 2026 questions reside in `data/certs/isc2/cc/versions/2026/questions/domain-1.js`.
2. **Registry Mapping:** In `data/exam-versions.js`, the exam version titled `"ISC2 CC — Pre-2026 Exam Outline"` directly points its `questionBankReference` to `./certs/isc2/cc/versions/2026/questions/`.
3. **Runtime Execution:** Selecting "Pre-2026 Exam Outline" in the UI loads the questions from `domain-1.js`, presenting candidates preparing for the pre-2026 exam with 2026 scenario questions.
4. **Target Staging Intent Discrepancy:** The staging specification in `content/isc2-cc-2026/questions/domain-1.md` originally stated:
   > `Target Production Import: data/certs/isc2/cc/versions/next-bank/questions/domain-1.js (ID Range: 1001+)`
   This reveals the planned architecture was an isolated directory (`next-bank`), but questions were instead appended to `versions/2026/`.

---

## 5. Runtime Loading Trace

A step-by-step trace of the runtime loading pathway was executed:

```
[User Action: Select "Certified in Cybersecurity"]
   │
   ▼
[Screen: screen-versions.js]
   ├── Reads: data/exam-versions.js
   │     ├── Entry 1: id: '2026', title: 'ISC2 CC — Pre-2026 Exam Outline', status: 'available'
   │     │     ├── examConfigReference: './certs/isc2/cc/versions/2026/exam.config.js'
   │     │     └── questionBankReference: './certs/isc2/cc/versions/2026/questions/'
   │     ├── Entry 2: id: 'next-bank', title: 'ISC2 CC — 2026 Exam Outline', status: 'coming-soon'
   │     │     └── references: null (DISABLED / NON-CLICKABLE)
   │     └── Entry 3: id: 'isc2-cc-vocabulary', title: 'ISC2 CC — Exam Vocabulary', status: 'coming-soon'
   │
   ▼ [User clicks "Select Version" on Pre-2026 Exam Outline]
[Screen: screen-start.js (Setup Screen)]
   ├── Reads: state.selectedExamVersion = '2026'
   ├── Calls: loadExamConfig('isc2', 'cc', '2026')
   │     └── Returns: data/certs/isc2/cc/versions/2026/exam.config.js
   │           ├── totalQuestions: 607 (INFLATED)
   │           └── Domain 1 questionCount: 166 (INFLATED)
   │
   ▼ [User clicks "Start Practice" (e.g. Domain 1, Sequential, 166 Questions)]
[Screen: screen-quiz.js]
   ├── Calls: loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: '2026', domainIds: [1] })
   │     └── Imports: data/certs/isc2/cc/versions/2026/questions/domain-1.js
   │           ├── Questions 1–142: Legacy Pre-2026 questions
   │           └── Questions 143–166 (IDs 584–607): 2026 questions (MIXED!)
   └── Quiz Engine initializes session with 166 questions
```

---

## 6. Session Persistence Findings

- **Storage Key:** `sec_cert_test_active_quiz_session` in `localStorage`.
- **Session Metadata:** Stored sessions include `{ vendorId: 'isc2', certId: 'cc', version: '2026', questionIds: [...] }`.
- **Mixing Effect on Persistence:**
  - If a user starts a practice quiz that includes questions 584–607, the question IDs are saved under version `'2026'`.
  - When the user refreshes or reopens the page, the application attempts to resume the session under version `'2026'`.
  - Because version `'2026'` currently contains IDs 584–607, it successfully resolves them.
  - If the question bank is later reverted without clearing or handling active sessions, any saved session containing IDs > 583 will trigger the defensive fallback (`"One or more saved question IDs could not be resolved. Keeping saved data."`) and prompt the user to start a new quiz.

---

## 7. Browser Verification Results

Browser testing was performed using `browser_subagent` on the live application (`http://localhost:5500/`):

1. **Exam Versions Screen (`exam_versions_screen_1792338346515.png`):**
   - Card 1: `"ISC2 CC — Pre-2026 Exam Outline"` displays question count **`607`** (instead of 583).
   - Card 2: `"ISC2 CC — 2026 Exam Outline"` is disabled with badge `"Coming Soon"`.
2. **Setup Screen (`setup_screen_counts_1792338356854.png`):**
   - Domain 1 (Security Principles) displays **`166 questions`** (instead of 142).
   - Total questions counter displays **`607`** (instead of 583).
3. **Practice Quiz Session Execution:**
   - Started a Sequential Practice session for Domain 1.
   - Total question counter in the quiz header initialized to **`1 / 166`**.
   - Verified that questions beyond 142 are the 24 newly generated 2026 questions.
4. **Console Logs:** Zero JavaScript runtime exceptions or unhandled promise rejections.

---

## 8. Root Cause Analysis

### Primary Root Cause: Directory & Version Naming Trap
The root cause is a **semantic misalignment between directory names and version identifiers**:

1. **Historical Setup:** When the project was created, the legacy 583 questions were placed in `data/certs/isc2/cc/versions/2026/`. At that time, "2026" was treated as the default version folder name.
2. **Version Architecture Introduction:** When multiple exam versions were subsequently introduced:
   - The legacy 583 bank was designated `"ISC2 CC — Pre-2026 Exam Outline"`, but its physical directory was **retained as `versions/2026/`** and its registry ID was left as `'2026'`.
   - The upcoming 2026 outline was provisionally registered as `'next-bank'`, intended for a future directory `versions/next-bank/`.
3. **Instruction Interpretation:** When the prompt instructed:
   `"Create a high-quality, source-grounded ISC2 CC 2026 Domain 1 question bank and activate validated questions in the existing application... Import only validated questions into the existing 2026 Domain 1 question bank."`
   The agent saw `versions/2026/` and assumed this directory was the target 2026 question bank, not realizing that `versions/2026/` actually hosts the Pre-2026 bank.
4. **Result:** The agent appended 24 questions to `versions/2026/questions/domain-1.js`, inadvertently polluting the Pre-2026 bank.

---

## 9. Recommended Minimal Fix

To establish complete, strict architectural isolation without breaking existing user progress or legacy test invariants:

### Step 1: Clean and Restore the Pre-2026 Bank (Legacy Invariant)
1. In `data/certs/isc2/cc/versions/2026/questions/domain-1.js`:
   - Truncate array back to the original 142 questions (IDs `1`–`495`).
   - Restore header to `Question Count: 142`.
2. In `data/certs/isc2/cc/versions/2026/exam.config.js`:
   - Restore `totalQuestions: 583`.
   - Restore `domains[0].questionCount: 142` and `questionThCount: 142`.
3. In `data/exam-versions.js`:
   - Restore `questionCount: 583` for version `'2026'`.
   - Restore description: `'583 practice questions based on the previous ISC2 CC exam domain structure.'`.

### Step 2: Establish the Isolated 2026 Exam Outline Question Bank (`next-bank`)
1. Create directory `data/certs/isc2/cc/versions/next-bank/questions/`.
2. Create `data/certs/isc2/cc/versions/next-bank/exam.config.js`:
   - Configure version ID `'next-bank'`.
   - Set Domain 1 questionCount = 24.
   - Set official 2026 domain weights (D1: 24%, D2: 18%, D3: 16%, D4: 24%, D5: 18% or as defined by the outline).
3. Create `data/certs/isc2/cc/versions/next-bank/questions/domain-1.js`:
   - Place exclusively the 24 validated 2026 questions (IDs `1001`–`1024` or `584`–`607` in the `next-bank` namespace).
4. Create stub/empty modules for domains 2–5 in `next-bank/questions/domain-[2-5].js` (`export default [];`).
5. Update `data/exam-versions.js`:
   - Update `'next-bank'` entry:
     - `status: 'available'` (or activated for Domain 1 practice)
     - `questionCount: 24`
     - `examConfigReference: './certs/isc2/cc/versions/next-bank/exam.config.js'`
     - `domainMetadataReference: './certs/isc2/cc/versions/next-bank/exam.config.js'`
     - `questionBankReference: './certs/isc2/cc/versions/next-bank/questions/'`

### Step 3: Re-align Verification Suites
- Re-run `tools/verify-phase4-quiz-engine.mjs` and `tools/verify-session-persistence.mjs` against the pure 583 Pre-2026 bank.
- Add dedicated test `tools/verify-next-bank-isolation.mjs` asserting that:
  - Pre-2026 loads strictly 583 questions (D1: 142).
  - 2026 (`next-bank`) loads strictly 24 questions (D1: 24).
  - Zero question objects or references are shared between the two versions.

---

## 10. Risk Assessment

| Risk Category | Severity | Analysis & Mitigation |
| :--- | :---: | :--- |
| **Data Loss Risk** | **ZERO** | Original 583 questions are preserved verbatim in lines 1–3132 of `domain-1.js`. The 24 new questions are saved in `tools/draft-domain-1-questions.mjs` and `content/isc2-cc-2026/questions/domain-1.md`. |
| **Exam Integrity Risk** | **HIGH (Current)** | Candidates preparing for the Pre-2026 exam are currently presented with new 2026 curriculum questions, violating exam realism and outline fidelity. |
| **Session State Collision** | **LOW** | The loader assigns `questionOrigins` WeakMap tagging `${cert.id}/${version.id}`. Once separated into `2026` vs `next-bank`, cross-version session resumption is blocked by design. |
| **Fix Complexity** | **LOW** | The required changes are clean file extractions and config reference pointings; no core quiz engine modifications are needed. |

---

## Final Conclusion

### Verdict: **CONFIRMED MIXING**

The 24 new 2026 questions were merged into the Pre-2026 question bank file (`data/certs/isc2/cc/versions/2026/questions/domain-1.js`) due to folder naming ambiguity.

All audit evidence, reproduction steps, screenshots, and minimal fix recommendations are documented above. As instructed, no modifications, rollbacks, or activations have been executed. Antigravity awaits user authorization before proceeding with the fix.
