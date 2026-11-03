# Domain 5 regression and preservation

**No new scoped regression found.** PASS logs: D5 integration; D2 integration8/8; D4 integration; explanation formatting8/8; phase4quiz engine7/7; session persistence8/8; learning catalog9/9. Commands are `node tools/<name>.mjs`; exact filenames and complete outputs are `artifacts/qa/domain5-production/final-*.log`. Actual browser mixed exam exercised96 existingD1–4 items plus21D5, deferred feedback and117/117 correct scoring; legacyD5practice1/1; Vocabulary403, Reading Notes and Learning Center navigation smoke passed. Those smoke checks do not constitute an academic re-audit of those products.

| Failure | Classification and actual evidence |
|---|---|
|verify-isc2-question-migration.mjs|Verified pre-existing: baseline and final logs both lack the referenced root legacyHTML; not synthesized.|
|verify-domain3-integration.mjs|Verified pre-existing: baseline and final staging/schema/render checks run, then stat absent original/ directory.|
|verify-complete-isolation.mjs|Verified pre-existing stale activation expectation: baseline expected24 but already119; final157. Protected bank checks replaced by nothing; original test unchanged.|
|verify-exam-versions.mjs|Stale pre-existing contract established from test and baseline data: expects next-bank unavailable/emptyD1, but immutable D1 had24 at baseline and119updated were active. Also expects3cards versus baseline5. Full pre-change run of this suite was not captured; this is source/data comparison, not an invented baseline log.|
|verify-exam-vocabulary.mjs|Stale pre-existing contract: expects exactly3entries and unavailable Vocabulary; baseline already5entries,403terms and active Vocabulary. Full pre-change execution not captured. Original suite untouched.|

Historic tests were not disabled or rewritten wholesale. No universal repository-green claim.

751 baseline hash comparisons: {'UNCHANGED': 741, 'TASK_CHANGE': 4, 'CONCURRENT_PRESERVED': 6}. Exact paths/hashes: `artifacts/qa/domain5-production/final-preservation.json`. The380 protected bank/content/assets/source/audit checks pass against immutable baseline or six hash-bound concurrent observations. All702 existing question objects/IDs and all81 originalD5files preserved. Original nineaudit reports preserved.

Six concurrent changes (not this task’s writes):

- `content/isc2-cc-2026/reading/domain-5-scenarios.js`
- `content/isc2-cc-2026/reading/domain-5.js`
- `content/isc2-cc-2026/reading/domain-5.md`
- `js/core/diagram-generator.js`
- `tools/audit-domain5-browser.mjs`
- `tools/verify-reading-notes-domain5.mjs`

They are explicitly observed, not silently called baseline-equal or reverted. Other user changes already present at baseline remain preserved. Shared task.md received only this task’s row; unrelated rows were retained. Git metadata unchanged: no commit, branch, reset or cleanup.
