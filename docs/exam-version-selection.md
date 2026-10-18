# Exam Version Selection — Implementation Report

## 1. Implementation summary

Added explicit bank selection for ISC2 CC using a small metadata registry, the existing renderer/state, existing setup form and quiz engine. No dependency, framework, question content, identifiers, bank paths, existing shared CSS or other certification entries changed. The new stylesheet only supplies focus indicators inside the new screen. UI labels remain English; EN/TH/bilingual question preferences and theme behavior are preserved.

## 2. Files changed

Existing application files:

- `index.html`: loads the new scoped stylesheet.
- `js/core/state.js`: adds `exam-versions` navigation and explicit validated selection, with domains/count initialized from the selected config.
- `js/core/question-loader.js`: resolves registry/config/bank/domain references, rejects invalid/unavailable versions, validates counts/IDs/domain membership, deduplicates domain requests and tracks question provenance. Adds loading from the saved session's original bank and all its domains.
- `js/core/storage.js`: retains the existing key/schema/version field, adds `versionId`, binds snapshots to quiz identity, resolves legacy sessions in memory, preserves unsupported/corrupt data on reads, and detects unreadable existing payloads before replacement.
- `js/core/quiz-engine.js`: captures certification/version identity for new/resumed/retried quizzes, checks provenance before start/resume, preserves saved data on failed restore. Question selection, scoring, pass thresholds and countdown calculations are unchanged.
- `js/ui/renderer.js`: routes certification → version selection → existing setup, supports back navigation and safe config errors.
- `js/ui/screen-home.js`: resumes the original version through the shared session loader; shows errors and ignores stale restores.
- `js/ui/screen-start.js`: displays the selected badge, matches resume by certification/version, loads the saved bank, retains previous data on startup failure, confirms replacement across versions and unreadable payloads, ignores stale asynchronous operations.
- `js/ui/screen-results.js`: adds the original version badge without changing result calculations.

Created files:

- `data/exam-versions.js`: registry and validated lookup/reference helpers.
- `js/ui/screen-versions.js`: selection screen using existing header, logo, cards, badges, buttons, theme/language controls and responsive grid; the upcoming card has a native disabled button.
- `css/versions.css`: focus indicators scoped to the new screen.
- `tools/verify-exam-versions.mjs`: focused Node tests, including DOM doubles; no browser runtime.
- `docs/superpowers/plans/2026-10-17-exam-version-selection.md`: implementation plan and execution record.
- `docs/verification/exam-version-integrity-before.json`: pre-edit SHA-256 manifest for all 21 protected files.
- `docs/verification/verification-results.json`: command exit codes and summaries from final verification.
- `docs/verification/legacy-migration.log`: compact list of pre-existing original-HTML comparison mismatches.
- This report.

User changes present before work: modified `docs/plans/task.md` and 11 untracked JSON sources under `assets/questions/` (ISC2 CC, CISSP and PDPA). Their bytes remain unchanged. They were neither staged nor committed.

## 3. Final navigation flow

Certification Selection → ISC2 CC → Exam Version Selection → Existing Question Bank → existing Quiz Configuration → Quiz → Results.

Setup back → Exam Version Selection; selection back → Certification Selection. Home Resume restores the saved bank directly. New Quiz returns to existing setup for that quiz's version. The New Question Bank card is disabled.

## 4. Version registry

| Certification | ID | Title | Status | Bank reference relative to `data/` |
|---|---|---|---|---|
| isc2-cc | 2026 | Existing Question Bank | available | certs/isc2/cc/versions/2026/questions/ |
| isc2-cc | next-bank | New Question Bank | coming-soon | null |

`2026` retains the existing ID, config and paths. Its exam/domain metadata reference remains `certs/isc2/cc/versions/2026/exam.config.js`. `next-bank` is a stable provisional application bank ID, with no official release-date claim, question count, config, questions or answers.

Availability requires an explicit `available` entry with complete references. Loading also validates the config, its version/total/domain metadata, question counts, domain membership and unique IDs. A filesystem directory alone never enables selection. Public loader function signatures and their omitted-version `2026` defaults remain supported. Invalid direct domain loads preserve the existing empty-array error convention; aggregate loading fails instead of starting a partial quiz.

## 5. Existing question bank integrity

The five bank modules and original exam/cert configs are byte-for-byte unchanged against the pre-edit SHA-256 manifest. This covers question text, answers, explanations, translations, IDs, order and domain mapping. Original HTML/source files and the user's existing changes also match the manifest: 21/21 protected files.

The real loader returns exactly **583 unique questions**, in domain counts **142 / 65 / 93 / 156 / 127**. No question files were renamed, moved, copied or rewritten. No future-bank content was created.

## 6. Session compatibility

- Storage remains `sec_cert_active_session_v1`, schema version 1. `version` remains for older readers; new snapshots also include `versionId`.
- New quiz state captures its certification and version. Autosave/results/retries use that identity rather than later navigation selections.
- Recognized schema-v1 ISC2 CC sessions missing both version fields resolve deterministically to `2026`. Lookup is read-only and idempotent; successful resume follows the existing autosave path and adds matching version metadata while retaining answers, order, scores, position and timing.
- Explicit invalid/null/conflicting/unavailable version metadata is rejected without deleting or rewriting the saved payload. Missing questions and provenance mismatches also leave storage and current state unchanged.
- Resume resolves the original config and all its domains, avoiding the pre-existing exam/practice domain-selection mismatch. Objects from another bank cannot be accepted solely because IDs match.
- Setup offers Resume only for the selected certification/version. Home Resume uses the saved bank directly. Pending restores do not resurrect explicitly discarded sessions or override newer navigation.
- Starting over retains the existing confirmation modal, including for other-version or unreadable payloads. Old progress is replaced only after questions load and startup validation succeeds. Load failures retain the old payload.
- Existing explicit Discard and successful Finish/timeout behavior still removes the active-session record, as required by the existing persistence tests. No browser storage was accessed or cleared during implementation. No new historical-data cleanup was introduced.
- The existing app has no separate persisted results-history store: finished results live in `state.quiz`. Their scores/answers and original version remain available, and older in-memory results without added metadata still render.

## 7. Verification results

Run with Node **v24.15.0**, from the project root. Actual commands and exit codes are recorded in `docs/verification/verification-results.json`.

- `node --test tools/verify-exam-versions.mjs`: **19/19 pass**. Registry/availability, existing bank counts/integrity, invalid references, explicit selection, legacy restoration, scoring/results/retry/new-quiz identity, provenance rejection, selection/setup/router output and event handlers, all-domain exam resume, corrupt-data confirmation, failed loads, stale start/resume and discard races.
- `node tools/verify-phase4-quiz-engine.mjs`: **7/7 pass**; also passed before edits.
- `node tools/verify-session-persistence.mjs`: **8/8 pass**; also passed before edits.
- `node tools/verify-english-ui-compactness.mjs`: **3/3 pass**.
- `node --check` for all 25 application/data JS modules plus the new test: **26/26 pass**.
- `git diff --check` scoped to changed application paths: **pass**. The unrestricted check reports only the user's pre-existing blank line at EOF in `docs/plans/task.md`; that file was preserved.
- `node tools/verify-isc2-question-migration.mjs`: **fails**, with **69 deep-equality mismatches** against the older original HTML question bank. Both compared data sources match their pre-edit hashes; the existing migration script imports those unchanged files directly. This failure therefore predates the feature. The question bank was deliberately left untouched; the mismatch IDs are recorded in `docs/verification/legacy-migration.log`.

New behavioral tests were run failing before their corresponding implementation. A separate read-only code review checked storage/version isolation and found an async navigation race; focused failing tests were added and guards verified. An additional discard-during-resume edge was reproduced and fixed. No browser, automation, E2E or visual-layout test was run.

## 8. Limitations and remaining risks

Browser rendering, keyboard interactions, responsive layout and real browser localStorage were not exercised, by explicit request. Static reuse of existing styles and Node DOM doubles provide limited UI evidence; zero regression risk is not claimed.

The app retains its existing in-memory routing: refreshing setup returns to Home; refreshing an active quiz returns to Home with Resume available. No deep links, automatic routing restoration or new history mechanism were added.

The registry extension test exercises additional entry resolution. A second real bank has not been provided, so a real multi-bank content validation/activation remains to be performed when that content exists. Do not activate the provisional entry until its actual config and bank pass validation. Existing shared quiz/review labels that assume the ISC2 CC outline were outside scope; a substantially different outline should receive a separate UI-label review.

The integrity manifest is a snapshot for this change. Future intentional changes to protected source files or bank contents require review and a new approved baseline, rather than blindly updating expected hashes.

## 9. Future question bank integration

1. Keep `data/certs/isc2/cc/versions/2026/` intact. Supply a new bank in a distinct directory, for example `data/certs/isc2/cc/versions/next-bank/`, with `exam.config.js` and `questions/domain-<id>.js`. This example is an application directory, not an official outline date.
2. Follow the existing module/schema format: config default export with `version: 'next-bank'`, total count and nonempty domains; domains need unique positive integer IDs, English names, positive question counts, weights for exam allocation, and `questionFile: './questions/domain-<id>.js'`. Question default arrays must use the current question schema, unique IDs within that bank and matching `dom` values. Preserve EN/TH fields and correct-index/explanation conventions.
3. In `data/exam-versions.js`, update only the `next-bank` entry with verified title/description/badge, `examConfigReference` and `domainMetadataReference` of `./certs/isc2/cc/versions/next-bank/exam.config.js`, and `questionBankReference` of `./certs/isc2/cc/versions/next-bank/questions/`. Add `questionCount` only after verification. Separate domain metadata may also be supplied as a module default export containing `domains`.
4. Validate real content, counts, IDs, translations, answers and outline allocations with Node tests before shipping. Temporarily use explicit available configuration in the validation checkout to exercise the real loader; keep the released entry Coming Soon until that verification passes.
5. Set `status: 'available'` after validation. The existing selector, loader, setup, session persistence and engine consume the entry without new per-version screens or engine branches. Keep its stable ID for all future saves; add further entries using the same metadata schema.
