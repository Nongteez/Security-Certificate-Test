# Remove next-bank question language badges

Status: Ready for Human Visual Review. Not human-accepted. Historical broad-suite failures remain disclosed below.

## Findings before implementation

`screen-quiz.js` and completed review in `screen-results.js` embed EN/TH `.lang-badge` spans only in bilingual question output. Single-language questions already have no badges. Their `.question-en` / `.question-th` wrappers provide typography and must remain unchanged. The existing attempt certification/version guard in quiz and completed-review scope guard can restrict removal. Study Answers question spans already have no badges, so its renderer/layout are unchanged. Top language selectors use `.lang-btn`, independently from question badges.

Plan: capture real Chrome computed typography and question text before editing; add a focused failing scope test; conditionally omit only the two known badge spans in each eligible renderer; capture/compare real Chrome after across four views, all languages/themes/sizes, check alignment/order/secrecy/legacy, and run focused/regression checks. No CSS changes are needed.


## Delivered change

The bilingual branches of the active quiz renderer and completed review renderer now omit only their known inline badge spans for updated CC attempts. Quiz uses the existing attempt-aware `isUpdatedCC` guard; completed review uses its existing certification/version/finished/mode guard. Legacy and other-certification markup still emits the badges.

Question text remains immediately inside the same `.question-en` / `.question-th` wrappers, English first and Thai below. No replacement labels, icons, whitespace padding or styling was added. All text continues through the same escaping/fallback code. The top `.lang-btn` selector is unchanged. Study Answers already lacked question badges and was inspected/tested without modifications. CSS and language-specific typography definitions are byte-identical.

Exact files changed:

- `js/ui/screen-quiz.js` — conditionally omit EN/TH badge markup in bilingual updated Practice/Exam questions (two template lines).
- `js/ui/screen-results.js` — same omission for completed updated review questions (two template lines).
- `tools/verify-quiz-minimal-ui.mjs` — focused scope test for badge removal, literal EN/TH question content preservation and legacy/other-certification badges.
- `tools/verify-question-language-badges-browser.mjs` — new before/after real Chrome validation.
- `docs/plans/isc2-cc-2026/question-language-badges.md` — this report.
- `docs/plans/task.md` — tracker entry.

No Question Bank, answer, explanation, selector, CSS, Study renderer, engine, timer, navigation, storage, scoring or results logic changes.

## Verification

| Check | Result | Evidence |
| --- | --- | --- |
| Focused quiz/Study/explanation tests | **22/22 PASS** | [focused-tests.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/focused-tests.txt) |
| Existing engine regressions | **7/7 PASS** | [engine-regression.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/engine-regression.txt) |
| Existing persistence regressions | **8/8 PASS** | [persistence-regression.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/persistence-regression.txt) |
| Real Chrome before | **81 checks PASS**, 72 states captured | [before/browser-results.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/before/browser-results.json) |
| Real Chrome after | **153/153 checks PASS**, 72 states | [after/browser-results.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/after/browser-results.json) |
| Before/after typography, content, selector comparison | **72/72 identical**, all final questions badge-free with less than 1px text indentation | [comparison.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/comparison.json) |
| Protected production sources | Only two question-rendering templates changed; **143 other files byte-identical** | Same comparison + [before-hashes.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/before-hashes.json) |
| Broader historical suites | **40 PASS / 6 historical FAIL**, 46 total; same failure names as previous task | [broad-regressions.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/broad-regressions.txt), [baseline-comparison.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/baseline-comparison.json) |
| Scoped whitespace checks | PASS | `git diff --check` |

The 72-state matrix covers Practice, active Exam, completed Exam review and unchanged Study Answers × EN/TH/EN+TH × light/dark × 1440×900, 1920×1080 and 390×844. All question source strings and bilingual order match the bank. Exact computed font family, size, weight, line height and letter spacing match each corresponding before state. English/Thai block edges align, actual text ranges begin at the wrapper edge, and no page overflow is detected. Top selectors retain exactly EN / TH / EN+TH. Active Exams retain no correctness/explanation markup, and completed review is entered through real finish/results/review controls. Legacy Practice and completed review retain their two question badges.

The focused regression also renders a detached question clone containing literal `EN` and `TH` in the stem to ensure those content tokens remain untouched; no bank object is mutated. Production removal targets only explicit UI spans, not text replacement.

Before/after captures used isolated real Chrome profiles and the local app server, with the approved command outside the sandbox due to the established Chrome crash-handler limitation. No user browser profile was accessed. No application console errors or uncaught exceptions. Screenshots: **24 before + 24 after** bilingual captures. Visually inspected:

- Practice desktop dark: [before](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/before/practice-1440x900-dark-both.png) → [after](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/after/practice-1440x900-dark-both.png)
- Active Exam mobile light: [before](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/before/exam-390x844-light-both.png) → [after](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/after/exam-390x844-light-both.png)
- Completed review mobile dark: [before](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/before/review-390x844-dark-both.png) → [after](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/question-language-badges/after/review-390x844-dark-both.png)

Visual review confirms clean question starts, no inline language badges, natural long Thai/English scenario wrapping, unchanged typography and intact controls.

## Remaining issues and review

Sequential review verified only badge conditionals changed in production, original question expressions/escaping are intact, existing mode/version/certification guards isolate scope, and no shared CSS/selector or disclosure logic was edited. The new focused test was observed failing before implementation.

No new task-specific issues. The same six historical broader-suite failures remain (four obsolete unavailable-bank assumptions, missing original HTML integrity fixture and obsolete four-card expectation). The entire historical collection is not claimed green. Mobile checks use real Chrome viewport emulation, not physical-device/screen-reader validation. All pre-existing quiz rules and limitations are preserved.

Ready for Human Visual Review; no human acceptance, commits, pushes or unrelated changes.
