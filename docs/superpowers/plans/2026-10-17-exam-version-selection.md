# Exam Version Selection Implementation Plan

**Goal:** Add explicit ISC2 CC bank selection while preserving the existing engine, bank, UI and storage key.

**Architecture:** A data registry maps stable IDs to explicit status and config/bank references. Existing loader APIs resolve registered versions; the renderer adds a selection screen. Sessions retain their original version independently of navigation. Legacy schema-v1 CC sessions lacking a version resolve only to 2026, in memory.

**Spec:** User attachment, SEC CERT TEST — Implement Exam Version Selection System, plus Critical Safety Requirements — Non-Regression.

**Constraints:** No browser testing, dependencies, question edits/moves, unrelated certification changes, or destructive migration. Preserve user changes to docs/plans/task.md and assets/questions/. Work inline in the supplied checkout as requested; no commits or checkout reset.

**Affected existing files:** js/core/{state,question-loader,storage,quiz-engine}.js; js/ui/{renderer,screen-home,screen-start,screen-results}.js; index.html (new scoped stylesheet only).

**New files:** data/exam-versions.js; js/ui/screen-versions.js; css/versions.css; tools/verify-exam-versions.mjs; docs/verification/exam-version-integrity-before.json; docs/exam-version-selection.md.

**Review focus:** Unavailable/invalid version fallbacks; overlapping IDs across banks; failed loads preserving storage; exam resume loading all domains even when practice selection differs; retries/results preserving original identity.

## Task 1 — Registry and loading
- [x] Write and run failing Node tests for invalid/unavailable config rejection, 583 questions and unchanged domain counts, duplicate domain requests and additional registry entries.
- [x] Implement registry resolution and metadata-based loading with validation and question provenance; keep old loader signatures and other certification fallback.
- [x] Verify targeted tests.

## Task 2 — State and persistence
- [x] Test explicit selection, read-only legacy resolution, non-destructive errors, original-version snapshots, cross-bank resume rejection, retry identity and unchanged scoring.
- [x] Bind version identity to each quiz, preserve schema/key and version field, add versionId, validate before restoring state, retain saved data on failures.
- [x] Verify old engine and persistence suites alongside new tests.

## Task 3 — UI and report
- [x] Test rendered selection/setup/results and navigation handlers in Node with minimal DOM doubles; never launch a browser.
- [x] Add screen using existing components, scoped focus CSS, registry-driven navigation, matched resume and all-domain loading; remove premature storage clearing.
- [x] Run syntax checks and relevant read-only existing verification scripts; compare all baseline file hashes, review diff and document findings and future activation.

Pre-flight: Tasks 2 and 3 consume Task 1's resolveExamVersion/getExamVersions APIs and validated loader output. Task 3 consumes Task 2's selectExamVersion and resolveSessionVersion. Legacy loader signatures stay unchanged. No conflicting interfaces found.

Execution: All three tasks completed inline. No Git commits, staging, worktree switch or browser activity. Final Node results: 19 focused tests; 7 engine, 8 persistence and 3 English UI scenarios pass; 26 syntax checks pass; protected hashes match 21/21.

Review: Independent read-only review found a stale asynchronous navigation race, reproduced with failing Node tests then fixed. The review also noted discard during pending resume, reproduced and fixed with saved-session identity checks. New Quiz now restores the result's original bank before setup, also covered RED→GREEN.

Remaining verification failures: Existing migration-to-original-HTML comparison has 69 mismatches on unchanged source files. Full git diff --check flags only the pre-existing EOF blank line in the user's docs/plans/task.md; the application-scoped check passes. See docs/exam-version-selection.md and docs/verification/verification-results.json.

