# Study Answers — ISC2 CC 2026

Status: Implemented and verified — ready for human review. Human acceptance pending. Broader historical regression gate remains red as detailed below.

## Architecture findings (before implementation)

- Vanilla ESM SPA: `state.screen` and `ui/renderer.js` dispatch screens. Most screens have in-memory navigation; only Reading Notes has hash routing. Refresh normally returns home.
- Version registry: the updated outline is `isc2-cc/next-bank`. `isc2-cc/2026` is the legacy 583-question bank. Guard both certification and version, including direct screen entry.
- Configuration is in `ui/screen-start.js`: `setup.practice.selectedDomains`, `order` (`all`/`random`), `questionCount`; shared `setup.language` (`en`/`th`/`both`). Exam locks its own controls but retains practice preferences.
- `loadQuestionsForDomains` validates registered configs, domain counts, IDs, and provenance. `createPracticeSession` only selects questions; `startQuizSession` creates and persists attempts. Reuse the former without invoking the latter.
- Questions use `question`, `question_th`, `options`, `options_th`, zero-based `correct_idx`, `explanation`, `explanation_th`; optional `explanation_detail.correct`, `.incorrect`, `.example`, `.exam_tip`. Objective metadata is optional.
- `renderExplanation2026Content` already renders structured correct/incorrect reasoning and general explanation fallback. Thai falls back to English. Existing SVG icons, language segmented controls, theme toggle, quiz typography, option highlighting and button styles can be reused.
- Existing uncommitted Reading Notes work must be preserved.

## Design and ordered implementation plan

1. Write focused failing tests for scope guards, validated selection reuse, mode independence, immutable question data and quiz/storage isolation.
2. Add a narrowly scoped study controller using the loader and `createPracticeSession`; keep temporary questions/index separate from `state.quiz`. No persistence. Add an outlined full-width button below the primary setup action, independent of the quiz start/replace logic.
3. Add a dedicated renderer with noninteractive choices, immediate correct highlighting and shared explanation renderer; reuse `setup.language` and theme controls. Previous/Next preserve the exact selected array. Restore focus after rerenders.
4. Use existing screen dispatch with narrowly scoped browser history entries for study/configuration. Refresh and direct study hashes safely return to configuration, without reconstructing random selections or touching saved attempts.
5. Run focused tests plus version, engine, persistence, explanation and language regressions; run actual Chrome checks at 1440×900, 1920×1080, 390×844 in both themes, record screenshots/results, inspect typography and overflow.
6. Document changed files, evidence, limitations and readiness for human review. No commits or unrelated changes.

The supplied task explicitly authorizes inspection, implementation and validation; execute sequentially in the current workspace, preserving unrelated work.

## Delivered implementation

The full-width secondary Study Answers action sits directly below Start Practice / Start Exam, with the existing inline SVG icon convention. It is rendered only for the available `isc2-cc/next-bank` registry entry. Neither the legacy outline nor another certification exposes it. Entry, selection and view guards enforce the same scope.

`createStudySelection` calls the authoritative `loadQuestionsForDomains` and existing pure `createPracticeSession`. It uses the retained domain/order/count preferences in both Practice and Exam configurations; it never invokes quiz start, resume, clear, finish, scoring or persistence. Question objects remain original loader objects, with provenance checked before opening the view. No bank, translation, ID or explanation was edited.

Study questions/index/domain metadata live in an in-memory controller, separate from `state.quiz`. Previous/Next retain the exact chosen array and disable at boundaries. Choices are readable list items. Following the minimal UI refinement, only the correct option has a subtle green background and thin green border; incorrect rows are transparent and borderless, with no Correct answer label. Correct answers and explanations need no interaction. The existing `renderExplanation2026Content` supplies structured reasoning, optional examples/tips and general-explanation fallback.

Language controls use `state.setup.language` and `updateSetup`, with the existing EN / TH / EN+TH labels and theme component. Questions/options use the quiz's Thai-to-English fallback; bilingual content is stacked with Thai typography. Explanation language behavior is inherited unchanged from the shared renderer, including English interface labels in Thai mode. Original question line breaks are preserved. The current bank has no objective fields; domain names are displayed, and optional objective metadata is handled when supplied.

Two specific hashes and small History API entries connect study and configuration. Back to Configuration preserves settings; browser Back/Forward restores the selected questions while the same temporary selection exists. Older selection tokens fall back safely to configuration. Refresh/direct study navigation returns to the updated configuration, following the app's temporary-state model. Active quizzes and other screen lifecycles are excluded from study history handling. No new routing library or dependencies.

## File inventory

New:

- `js/core/study-answers.js`: guards, authoritative selection reuse, temporary state and scoped history.
- `js/ui/screen-study-answers.js`: read-only bilingual study view and navigation.
- `tools/verify-study-answers.mjs`: scope, selection, rendering, fallback and isolation checks.
- `tools/verify-study-answers-browser.mjs`: isolated Chrome CDP integration/layout runner.
- This report and `artifacts/qa/study-answers/` evidence.

Modified:

- `js/ui/screen-start.js`: guarded secondary action and separate selection handler.
- `js/ui/renderer.js`: study screen dispatch.
- `js/app.js`: scoped history initialization.
- `css/quiz.css`: study-only styles and readable explanation text; existing quiz selectors unchanged.
- `docs/plans/task.md`: appended task status only, preserving previous work.

## Verification results

| Verification | Result | Evidence |
| --- | --- | --- |
| New study tests + existing explanation regressions | PASS 15/15 (7 new, 8 existing); includes all 157 questions × 3 languages | [focused-tests.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/focused-tests.txt) |
| Existing quiz engine suite | PASS 7/7 | [engine-regression.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/engine-regression.txt) |
| Existing persistence suite | PASS 8/8, including legacy 583-question counts | [persistence-regression.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/persistence-regression.txt) |
| Real Chrome integration | PASS 47/47 checks; 471 bank/language cases; no application console errors or uncaught exceptions | [browser-results.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/browser-results.json) |
| Layout matrix | PASS all 18 states: 1440×900, 1920×1080, 390×844 × light/dark × EN/TH/both; 0 horizontal page overflow | Browser JSON + screenshots below |
| Protected source/data snapshot | PASS 212 files byte-identical, including all question banks, loader/engine/storage/state and unrelated source work | [preservation.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/preservation.json) |
| Broader historical version/language suites plus focused suites | 33 PASS / 6 FAIL out of 39; same 6 failing test names on pre-change bootstrap/setup/router code (26 PASS / 6 FAIL out of 32) | [comparison](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/baseline-comparison.json), [before](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/study-baseline-regressions.txt), [after](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/study-regressions.txt) |
| Scoped diff whitespace validation | PASS `git diff --check` | Executed after implementation |

The six historical failures are five in `verify-exam-versions.mjs` and one in `verify-ui-language-boundary.mjs`: four still treat `next-bank` as unavailable, one integrity fixture references the absent `original/isc2_cc_BothThai-eng_583quiz.html`, and one expects four cards although the application has five. Baseline and implementation were tested separately; no historical tests were weakened or rewritten. The dedicated new tests verify current scope and legacy behavior directly.

The browser runner uses an isolated temporary Chrome profile and local HTTP server; it does not access the user's browser profile. Chrome could not launch its crash handler inside the sandbox, so the successful browser runs used the approved local test command outside it. Early test-runner failures (Enter event payload, whitespace normalization of multiline questions, reloading test bindings) were corrected before the final passing run.

Browser checks exercised real button handlers, Previous/Next and boundary states, stable random selection, language controls, native Enter/Tab keyboard events with visible focus, browser Back/Forward, refresh/direct fallback, scope guards, invalid/empty domains, unchanged quiz/localStorage snapshots around study, and both existing primary actions. A real unfinished legacy attempt was seeded in the isolated profile and remained byte-identical throughout studying.

Screenshots: 18 study captures, 6 explanation captures and 6 configuration captures. Representative manually inspected evidence:

- [Mobile bilingual, light](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/study-390x844-light-both.png)
- [Desktop bilingual, dark](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/explanation-1440x900-dark.png)
- [Large desktop bilingual, light](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/explanation-1920x1080-light.png)
- [Mobile configuration, light](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/configuration-390x844-light.png)
- [Desktop configuration, dark](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers/configuration-1440x900-dark.png)

Visual inspection confirmed Thai wrapping, clear correct-answer labeling, aligned primary/secondary actions and readable explanations in both themes. Study-specific text sizes preserve comfortable explanation reading on mobile. Screenshot capture waits for question/explanation animations to settle.

## Review and limitations

Sequential review against the task checked version guards, async stale-render protection, provenance, absence of attempt mutations, HTML escaping, language fallbacks, boundaries and history lifecycles. Review found and fixed a history edge case: restoring study history must not take over an active exam. The final Chrome suite verifies that guard.

- Refresh discards temporary study selection/order/position and returns to updated configuration; it does not persist study preferences or reconstruct a random set. Returning via study Back preserves settings in the current page session.
- Existing Exam selection produces **117 questions**, despite configuration advertising 125: Domain 1 has 24 available versus a 30-question allocation; Domain 3 has 23 versus 25. This follows unchanged `createExamSession` behavior and was reproduced independently. The existing 7200-second timer and primary startup behavior were verified without changing allocation or question data.
- Six historical regressions remain red as disclosed above. Focused study, explanation, engine and persistence suites pass; the entire historical test collection is not claimed green.
- Browser validation used real headless desktop Chrome with mobile viewport emulation, not a physical phone or additional browser engines. No physical-device or screen-reader validation is claimed.
- No new dependencies, commits, pushes, learning/reading/vocabulary edits or human-acceptance claims.


## Minimal UI refinement — ready for human visual review

Applied only to the existing ISC2 CC 2026 Study Answers view:

1. Removed the `✓ Correct answer` label and its unused CSS. Correct-answer detection and the detailed Explanation renderer remain unchanged.
2. Incorrect choices use transparent, borderless text rows. Correct choices retain a thin green border, subtle green background and modest radius. Padding compensates for the correct row's border to keep all letters/text aligned. Existing letter indicators are preserved.
3. Removed the Explanation container's blue accent and outer decoration, leaving a neutral transparent reading area. All reasoning, examples and exam tips are preserved.
4. Domain metadata language spans render inline, keeping `Domain N · Title` together until natural wrapping is necessary. Domain names still come from existing metadata, and all language fallbacks are unchanged.

Exact files modified for this refinement:

- `js/ui/screen-study-answers.js` — removed only the answer-choice label markup.
- `css/quiz.css` — study-scoped row, Explanation and inline metadata styles.
- `tools/verify-study-answers.mjs` — revised the removed-label assertion.
- `tools/verify-study-answers-browser.mjs` — revised label checks and added the 72-case visual matrix; writes to a separate refinement evidence folder.
- `docs/plans/isc2-cc-2026/study-answers.md` — this delivery record.
- `docs/plans/task.md` — required live tracker entry.

Verification:

- Focused study + explanation regression tests: **15/15 PASS**.
- Existing quiz engine regressions: **7/7 PASS**.
- Existing persistence regressions: **8/8 PASS**.
- Real headless Chrome: **119/119 checks PASS**, including **72 visual cases** (correct answer A/B/C/D × EN/TH/both × light/dark × 1440×900, 1920×1080, 390×844).
- The visual matrix checks label absence, borderless/transparent incorrect rows, highlighted correct rows, letter alignment, neutral Explanation styling, inline domain metadata, complete shared explanation output and zero page overflow. All 157 questions × 3 languages still match the bank. Previous/Next, history, refresh, scope and storage isolation checks pass.
- Manually inspected actual mobile light and desktop dark bilingual screenshots with correct positions A and D; confirmed cleaner rows, preserved green emphasis, inline domain/title and complete readable explanations.
- No application console errors or uncaught exceptions. Tests use an isolated Chrome profile. No new scoped issues found. Existing historical failures/117-question allocation described above were not changed; the broader historical suites were not rerun for this visual-only refinement.

Evidence: [browser results](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers-ui-refinement/browser-results.json), [focused tests](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers-ui-refinement/focused-tests.txt), [engine](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers-ui-refinement/engine-regression.txt), [persistence](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers-ui-refinement/persistence-regression.txt), [mobile light](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers-ui-refinement/refined-390-light-answer-A.png), [desktop dark](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/study-answers-ui-refinement/refined-1440-dark-answer-D.png).

Ready for human visual review; not human-accepted.
