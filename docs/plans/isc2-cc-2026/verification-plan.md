# ISC2 CC 2026 Verification & Quality Assurance Plan

## 1. Quality Assurance Philosophy & Gates

The quality assurance strategy for the **ISC2 CC 2026 Exam Outline (`next-bank`)** relies on automated, deterministic Node.js test harnesses, mathematical allocation audits, and SHA-256 cryptographic baselines.

### The Iron Rule of Verification
```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```
- No feature is declared complete without a passing test run executed in the same session.
- No browser automation (Playwright, Puppeteer, Chrome driver) is required or permitted; all logic is validated via Node.js DOM doubles, static CSS AST/regex assertions, and unit tests.

---

## 2. Existing Test Suites for Reuse

The repository maintains an extensive suite of Node.js test scripts that must continue to pass 100% without modification:

| Existing Script Path | Suite Purpose | Target Assertions |
| :--- | :--- | :---: |
| [`tools/verify-exam-versions.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-exam-versions.mjs) | Version registry resolution, navigation routing, session isolation, and fallback defense. | 19 tests |
| [`tools/verify-exam-version-info.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-exam-version-info.mjs) | Information modal dialog controls, language switching (EN/TH/Both), backdrop focus traps. | 8 tests |
| [`tools/verify-exam-dialog-complete.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-exam-dialog-complete.mjs) | Validates 119 learning objectives, AI table rows, official exam facts, and simulation caveats. | 6 tests |
| [`tools/verify-exam-vocabulary.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-exam-vocabulary.mjs) | Vocabulary registry isolation, card rendering, and dialog scroll restoration. | 7 tests |
| [`tools/verify-exam-dialog-responsive.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-exam-dialog-responsive.mjs) | Responsive modal width (880px / 90vw), table word-wrap, scroll reset, and confirmation modal isolation. | 8 tests |
| [`tools/verify-phase4-quiz-engine.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-phase4-quiz-engine.mjs) | Practice mode sequential/random slicing, Largest Remainder 125-item exam allocation, answer tracking. | 7 tests |
| [`tools/verify-session-persistence.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-session-persistence.mjs) | LocalStorage autosave, page reload restoration, elapsed timer wall-clock calculation, start-new confirmation modal. | 8 tests |
| [`tools/verify-english-ui-compactness.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/verify-english-ui-compactness.mjs) | English UI labels across modes, bilingual content resolution. | 3 tests |
| [`tools/post-cleanup-verification.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/post-cleanup-verification.mjs) | 583-question structural integrity, 0 accidental source copy-paste artifacts. | 583 items |
| [`tools/post-replacement-verification.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/post-replacement-verification.mjs) | Verifies 10 duplicate replacements in place in the legacy bank. | 10 items |
| [`tools/final-verification-audit.mjs`](file:///D:/_Coding/SEC-CERT-TEST/tools/final-verification-audit.mjs) | Comprehensive read-only audit across questions, answer consistency, and domain counts. | 583 items |

---

## 3. Planned New Verification Test Suites

When implementation begins (Phases 3 through 6), the following dedicated test scripts will be authored to validate `next-bank`:

```
tools/
├── verify-next-bank-schema.mjs              # Question schema & structure validation
├── verify-next-bank-allocations.mjs         # 2026 domain weights & 125-item allocation
├── verify-next-bank-duplicates.mjs          # Cross-bank & intra-bank duplicate scanner
├── verify-next-bank-bilingual.mjs           # Bilingual completeness & parity audit
└── verify-next-bank-session-isolation.mjs   # Session persistence & backward compatibility
```

### 1. `tools/verify-next-bank-schema.mjs`
- **Purpose:** Verifies that every question exported from `data/certs/isc2/cc/versions/next-bank/questions/domain-X.js` strictly satisfies the 10-field runtime schema.
- **Assertions:**
  - Positive integer ID (`id >= 1000`).
  - Valid domain integer (`dom` matches domain file `1`..`5`).
  - Stems: Non-empty English and Thai strings (length $\ge 10$).
  - Options: Exactly 4 distinct English strings and 4 distinct Thai strings.
  - Correct Index: Exactly one integer in $\{0, 1, 2, 3\}$.
  - Explanations: Non-empty English and Thai strings detailing why the answer is correct.

### 2. `tools/verify-next-bank-allocations.mjs`
- **Purpose:** Verifies that the Quiz Engine's Largest Remainder allocation generates exact integer question quotas per domain for a 125-item mock exam reflecting the official 2026 outline weights.
- **Mathematical Specification:**
  - Published Weights: `D1: 24%`, `D2: 17.3%`, `D3: 20%`, `D4: 21.3%`, `D5: 17.3%`
  - Normalized Sum: $24.0 + 17.3 + 20.0 + 21.3 + 17.3 = 99.9$
  - Quotas for 125 Questions:
    - Domain 1: $125 \times (24.0 / 99.9) = 30.0300 \rightarrow$ **30 questions** (Remainder: 0.0300)
    - Domain 2: $125 \times (17.3 / 99.9) = 21.6466 \rightarrow$ 21 + 1 (seat) = **22 questions** (Remainder: 0.6466)
    - Domain 3: $125 \times (20.0 / 99.9) = 25.0250 \rightarrow$ **25 questions** (Remainder: 0.0250)
    - Domain 4: $125 \times (21.3 / 99.9) = 26.6516 \rightarrow$ 26 + 1 (seat) = **27 questions** (Remainder: 0.6516)
    - Domain 5: $125 \times (17.3 / 99.9) = 21.6466 \rightarrow$ **21 questions** (Remainder: 0.6466, tie-broken by index)
    - Total: $30 + 22 + 25 + 27 + 21 = \mathbf{125 \text{ questions}}$
- **Assertion:** `calculateDomainAllocations(nextBankDomains, 125)` strictly returns `{ 1: 30, 2: 22, 3: 25, 4: 27, 5: 21 }`.

### 3. `tools/verify-next-bank-duplicates.mjs`
- **Purpose:** Verifies zero exact or near-duplicate questions within `next-bank` and against the legacy 583-question bank.
- **Assertion:** 0 question pairs with Jaccard stem token similarity $\ge 0.85$ or Levenshtein ratio $\ge 0.85$.

### 4. `tools/verify-next-bank-bilingual.mjs`
- **Purpose:** Ensures full bilingual parity and prevents unescaped HTML injection.
- **Assertions:**
  - 100% of questions have `question_th`, `options_th`, and `explanation_th`.
  - Zero placeholder text (e.g. `"TODO"`, `"Coming Soon"`, `"Translation pending"`).
  - All special characters (`<`, `>`, `&`, `"`, `'`) are properly formatted or escaped.

### 5. `tools/verify-next-bank-session-isolation.mjs`
- **Purpose:** Validates that saving, reloading, and resuming a quiz in `next-bank` cannot overwrite, corrupt, or alter an active session from the legacy `2026` bank.
- **Assertions:**
  - Saved session stores `versionId: 'next-bank'`.
  - Storage resume rejects cross-version loading.
  - Navigation between certification cards preserves version parameters.

---

## 4. Cryptographic Baseline Integrity Protocol

To guarantee that neither the legacy 583-question bank nor core application logic is inadvertently modified during `next-bank` onboarding:

1. **Baseline Tracking:** The 43 protected files cataloged in [`docs/verification/exam-dialog-responsive-before.json`](file:///D:/_Coding/SEC-CERT-TEST/docs/verification/exam-dialog-responsive-before.json) are hashed using SHA-256 before every implementation session.
2. **Automated Hash Verification Command:**
   ```powershell
   node --input-type=module -e "
   import fs from 'node:fs';
   import crypto from 'node:crypto';
   const baseline = JSON.parse(fs.readFileSync('docs/verification/exam-dialog-responsive-before.json', 'utf8'));
   for (const [file, hash] of Object.entries(baseline.files)) {
     const actual = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase();
     if (actual !== hash) throw new Error('MODIFIED: ' + file);
   }
   console.log('43/43 PROTECTED FILES UNTOUCHED');
   "
   ```
3. **Acceptance Threshold:** 43/43 hashes must match identically. Any diff in `data/certs/isc2/cc/versions/2026/` or core engine modules triggers an immediate build failure.

---

## 5. Non-Regression Test Command Matrix

The following table documents the exact commands to execute at each phase of development:

| Test Target | Execution Command | Expected Exit Code | Expected Pass Count |
| :--- | :--- | :---: | :---: |
| **Combined Version & Dialog Suite** | `node --test tools/verify-exam-dialog-complete.mjs tools/verify-exam-version-info.mjs tools/verify-exam-versions.mjs tools/verify-exam-vocabulary.mjs tools/verify-exam-dialog-responsive.mjs` | `0` | **48 / 48** |
| **Quiz Engine Logic & Allocation** | `node tools/verify-phase4-quiz-engine.mjs` | `0` | **7 / 7** |
| **Session Persistence & Timer** | `node tools/verify-session-persistence.mjs` | `0` | **8 / 8** |
| **UI Compactness & Translations** | `node tools/verify-english-ui-compactness.mjs` | `0` | **3 / 3** |
| **JavaScript Syntax Check** | `Get-ChildItem -Path js,data,tools -Recurse -Include *.js,*.mjs \| ForEach-Object { node --check $_.FullName }` | `0` | **72+ files** |
| **Protected File Integrity** | *Hash verification snippet (above)* | `0` | **43 / 43 files** |
| **Next-Bank New Test Suites** | `node --test tools/verify-next-bank-*.mjs` *(future)* | `0` | **100% pass** |

---

## 6. Manual UI & Accessibility Checklist (Non-Browser)

While live browser automation is excluded by project constraints, the following static DOM and CSS checks must be verified manually or through DOM test doubles prior to release:

- [ ] **Modal Responsiveness:** Verify CSS `max-width: 880px` (desktop), `90vw` (tablet), and `16px` safe margins (mobile).
- [ ] **Table Overflow Isolation:** Verify that `.version-info-table-scroll` specifies `overflow-x: auto` and `overscroll-behavior-x: contain` without causing page-level horizontal scroll.
- [ ] **Scroll Restoration:** Verify that `content.scrollTop = 0` triggers on every dialog open.
- [ ] **Keyboard Accessibility:** Verify that `Tab` traps focus to the Close button and `Escape` dismisses the overlay.
- [ ] **Theme Variable Adherence:** Verify that no hardcoded hex or RGB color strings are present in scoped version stylesheets.
- [ ] **Shared Confirmation Modal Protection:** Confirm that Finish Quiz and Start New Quiz modals in `screen-quiz.js` and `screen-start.js` retain `max-width: 440px` (desktop) and `360px` (mobile).
