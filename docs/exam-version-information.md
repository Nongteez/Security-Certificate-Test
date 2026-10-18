# Exam version names and information dialogs

## 1. Summary

Updated only version-card display names/descriptions and added circular information buttons and localized information dialogs. The current two-card layout, existing card/button/theme tokens and modal styling are reused. No framework or dependency was added.

## 2. Files changed for this request

Modified:

- `data/exam-versions.js`: only the two titles and descriptions.
- `js/ui/screen-versions.js`: information buttons, modal markup/content, keyboard/focus behavior and localized display using the existing screen language selection. Information/language controls wait for pending version navigation to finish, avoiding a modal scroll-lock leak.
- `css/versions.css`: styles scoped to the version-selection screen for icon position, hover/focus, hidden backdrop and dialog lists.
- `tools/verify-exam-versions.mjs`: updates the existing card-title assertion to the requested name; all 19 regression scenarios remain.

Created:

- `data/exam-version-info.js`: EN/TH information content and labels; reads existing domain names/counts from the unchanged exam config. Updated-outline details are display metadata only and are not consumed by the quiz engine.
- `tools/verify-exam-version-info.mjs`: eight Node tests for metadata, information rendering, focus/close behavior, localization, pending-selection handling and protected-file hashes.
- `docs/verification/exam-version-info-before.json`: pre-edit hashes of 41 files that must remain untouched for this request, including all core modules, other screens, bank/config files, shared styles and existing question sources.
- `docs/verification/exam-version-info-results.json`: actual verification commands, outputs and exit codes.
- This report.

All previous uncommitted work remains present. The working tree was inspected before edits; no staging, commits, resets, moves or reverts were performed.

## 3. Final version names

| Internal ID | Card title | Status | Practice questions |
|---|---|---|---|
| `2026` | ISC2 CC — Pre-2026 Exam Outline | Available | 583 |
| `next-bank` | ISC2 CC — 2026 Exam Outline | Coming Soon | Not displayed |

Descriptions exactly match the supplied request. Internal IDs, statuses, loader/domain references, bank paths and existing badge metadata remain unchanged.

## 4. Dialog content and behavior

The pre-2026 dialog identifies the previous outline and lists Security Principles (142), BC/DR/IR Concepts (65), Access Controls Concepts (93), Network Security (156), and Security Operations (127). It explicitly distinguishes these practice-question counts from official domain weights and states that this bank has not been updated to the September 2026 domain structure.

The updated-outline dialog shows September 1, 2026 and the supplied domains/weights: Security Principles 24%; Security Governance 17.3%; Identity and Access Management (IAM) Concepts 20%; Networking and Cloud Security Concepts 21.3%; Security Operations and Incident Response 17.3%. The supplied percentages are preserved without normalization.

It includes all eight requested topics: GRC, identity lifecycle, cloud security, incident response/operations, AI risks/controls, AI service accounts/access management, AI-assisted detection/monitoring, and AI data protection/governance. It attributes outline details to the user-provided reference and shows **Question Bank Status: Coming Soon**, with no question count or availability claim.

Each circular icon is a native button with an accessible label, dialog association, visible focus and an inline SVG. Opening information never selects a version. The dialog uses the existing modal classes, a labelled `role="dialog"`/`aria-modal="true"`, initial heading focus, a Close button, Escape/backdrop dismissal, a single Close tab stop, inert background and focus return to the triggering icon. Existing body overflow is restored when it closes. A pending version selection prevents a dialog from opening during navigation.

## 5. Localization

Dialogs support EN, TH and EN+TH through `state.setup.language` and the existing screen language buttons. Bilingual text is marked with English/Thai language spans. A screen language change rerenders any open information content consistently. Normal modal use makes background controls inert: close the dialog to interact with the existing language selector, then reopen it. No selector was added inside the dialog, and existing translations/i18n policy elsewhere were left untouched.

## 6. Verification

Node **v24.15.0**; no browser or browser automation was launched.

| Command | Result |
|---|---|
| `node --test tools/verify-exam-version-info.mjs tools/verify-exam-versions.mjs` | 27/27 pass: 8 new + 19 existing |
| `node tools/verify-phase4-quiz-engine.mjs` | 7/7 pass |
| `node tools/verify-session-persistence.mjs` | 8/8 pass |
| `node tools/verify-english-ui-compactness.mjs` | 3/3 pass |
| `node --check` for all JS modules in `js/` and `data/` plus both version test files | 28/28 pass |
| `git diff --check -- data/exam-versions.js js/ui/screen-versions.js css/versions.css tools/verify-exam-versions.mjs` | Pass |

The previous version-selection suite also passed 19/19 before edits. New tests first reproduced missing functionality, and the pending-navigation scroll-lock test failed before its guard was added. A read-only independent review found no remaining actionable findings after that fix. The final protected-file comparison matches **41/41** files. Actual outputs are recorded in the results JSON.

## 7. Preservation

Both internal version IDs and all question-loader references remain unchanged. The existing bank still loads exactly 583 unique questions with domain counts 142/65/93/156/127. Questions, answers, explanations, translations and mappings retain their original hashes. The future entry stays disabled and has no bank content or count.

No question-loader, core state, session storage, quiz engine, scoring, retry, configuration, quiz, results, home or certification navigation implementation was modified for this request. Existing storage data was not accessed in a browser or migrated. The prior implementation and unrelated user edits were preserved.

## 8. Limitations

Mouse/keyboard event handlers and rendered content were exercised with Node DOM doubles. Actual browser focus, screen-reader behavior, responsive layout, native `inert`, light/dark appearance and mobile scrolling remain visually unverified. No claim of zero regression risk is made.

The supplied updated-outline details were used as requested; no independent official-source verification was performed. Existing setup/results badge text remains unchanged because those screens were explicitly outside this request's UI scope. The previous feature report's known original-HTML migration comparison failure remains outside this enhancement and was not rerun or changed.
