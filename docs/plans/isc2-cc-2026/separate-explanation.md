# Separate Explanation from Question Card — next-bank

Status: Ready for Human Visual Review. Not human-accepted. Historical broad-suite failures remain disclosed below.

## Findings before implementation

Practice renders permitted feedback markup inside `.question-card` in `screen-quiz.js`; the existing `isUpdatedCC` guard uses attempt certification/version. The active Exam never builds explanation markup. Completed Practice/Exam review uses `screen-results.js` and nests the explanation after options inside its question card. Review has a separate rendering function and no current layout scope class. Study Answers already places its explanation section immediately after the card. The shared explanation renderer preserves all bilingual reasoning with no redundant language labels. Neutral shell styles already exist for Study and active updated quizzes, but completed review retains the shared blue accent.

## Plan

Capture real Chrome before screenshots/hierarchy. Add focused failing section/scope tests. For updated CC Practice, render the same permitted explanation markup as a sibling section after the card; retain legacy nesting. Apply the same approach only to completed updated CC review, guarded by certification, version, finished state and supported quiz mode. Use a new scoped neutral shell style while retaining original content/typography and existing container gap. Do not alter Study or quiz handlers. Validate actual parent/child relationships, alignment and gaps in Chrome for all requested languages/themes/viewports; exercise feedback timing, secrecy, navigation and legacy/Study isolation. Run focused/regression suites and document exact files/evidence.


## Delivered DOM restructuring

For updated CC Practice, the existing permitted explanation markup now becomes a named `<section>` immediately after `.question-card`, before the bottom action bar. The card retains only `.question-text-block` and `.options-list`. The existing `!isExam && isAnswered` trigger is unchanged. Legacy explanations remain nested `div` elements.

Completed review uses the same sibling placement only when the attempt certification is `isc2-cc`, version is `next-bank`, `finished` is true, and mode is Practice or Exam. A dedicated `quiz-explanation-separated` class scopes neutral explanation shell styling without applying the active-quiz answer styles to review. The shared explanation content is interpolated once; only its placement/container changes. Named section headings retain the original main Explanation text.

The new direct-child CSS rule removes the outer border, blue accent, radius and background, and clears the old review margin. Existing `.quiz-container` gap provides 20px between card and section; their outer edges/width align. Existing inner padding, typography, separators, language ordering and unlabeled bilingual content are preserved. Study Answers layout/CSS rules are unchanged.

Exact files modified:

| File | Change |
| --- | --- |
| `js/ui/screen-quiz.js` | Guarded section shell and sibling interpolation for permitted updated Practice feedback; legacy remains nested |
| `js/ui/screen-results.js` | Completed-review scope guard, reused explanation markup and sibling placement; results/scoring function untouched |
| `css/quiz.css` | One scoped direct-child neutral explanation shell rule |
| `tools/verify-quiz-minimal-ui.mjs` | Section/scope regressions; wrapper assertion accepts the additional layout class |
| `tools/verify-separated-explanation-browser.mjs` | New before/after DOM, geometry, content, navigation and isolation checks |
| `docs/plans/isc2-cc-2026/separate-explanation.md` | Inspection, plan and delivery report |
| `docs/plans/task.md` | Required tracker entry |

No shared explanation component, Study renderer, question content, engine, timer, storage, selection, language handler, results logic or option-rendering logic changed.

## Verification and evidence

| Verification | Result | Evidence |
| --- | --- | --- |
| Focused quiz UI, Study and explanation suites | **21/21 PASS** | [focused-tests.txt](../../../artifacts/qa/separate-explanation/focused-tests.txt) |
| Existing engine regressions | **7/7 PASS** | [engine-regression.txt](../../../artifacts/qa/separate-explanation/engine-regression.txt) |
| Existing persistence regressions | **8/8 PASS** | [persistence-regression.txt](../../../artifacts/qa/separate-explanation/persistence-regression.txt) |
| Chrome baseline | **78 checks PASS**, recorded 36 nested Practice/review states and unchanged Study reference | [before/browser-results.json](../../../artifacts/qa/separate-explanation/before/browser-results.json) |
| Chrome final | **139/139 checks PASS**, **54/54 layout/language states**, zero application errors | [after/browser-results.json](../../../artifacts/qa/separate-explanation/after/browser-results.json) |
| Bank content | **471/471 question/language cases PASS**: correct reasoning, incorrect reasoning, optional examples/tips | Same browser JSON |
| Protected source files | Only three production files changed; **142 other files byte-identical** | [preservation.json](../../../artifacts/qa/separate-explanation/preservation.json), [before-hashes.json](../../../artifacts/qa/separate-explanation/before-hashes.json) |
| Broader historical regressions | **39 PASS / 6 historical FAIL**, 45 total; no new failure names | [broad-regressions.txt](../../../artifacts/qa/separate-explanation/broad-regressions.txt), [baseline-comparison.json](../../../artifacts/qa/separate-explanation/baseline-comparison.json) |
| Scoped whitespace checks | PASS | `git diff --check` |

Chrome tested 1440×900, 1920×1080 and 390×844; light/dark; EN/TH/EN+TH; Study, Practice feedback and completed Exam review. Checks inspect actual `parentElement`, `nextElementSibling`, `contains`, section tag, bounding rectangles, neutral computed styles, heading presence and content. All 54 final explanation states are sibling sections with aligned bounds and no page overflow. Existing fade animations briefly offset bounding rectangles during measurements (approximately 17–26px measured gaps); settled screenshots use the existing 20px container gap. No spacing workaround or hidden border masking.

Practice explanations remain absent before the click trigger, available after feedback, absent on the next unanswered question and restored on Previous without changing scores. Exam explanations/correctness stay absent during selection and Next navigation. Completed Exam review Next/Previous works. Legacy Practice and completed review retain nested explanations, badges and accent styling. Study's source and layout are unchanged. General-explanation fallback uses original flat text in a detached test clone because all currently published questions contain structured reasoning.

Before/after captures used real isolated Chrome profiles and a local HTTP server; the approved test command ran outside the sandbox due to the established Chrome crash-handler restriction. User browser profiles were not used. Both phases contain 18 bilingual screenshots (36 total). Screenshots were captured after font/animation settling and inspected visually:

- Practice desktop dark: [before](../../../artifacts/qa/separate-explanation/before/practice-1440x900-dark-both.png) → [after](../../../artifacts/qa/separate-explanation/after/practice-1440x900-dark-both.png)
- Completed Exam review mobile light: [before](../../../artifacts/qa/separate-explanation/before/review-390x844-light-both.png) → [after](../../../artifacts/qa/separate-explanation/after/review-390x844-light-both.png)
- Study reference mobile light: [before](../../../artifacts/qa/separate-explanation/before/study-390x844-light-both.png) → [after](../../../artifacts/qa/separate-explanation/after/study-390x844-light-both.png)

Visual review confirms the card ends after choices, the Explanation begins below it without an outer card or blue accent, and content/separators, highlights and bilingual reading remain intact.

## Review and remaining limitations

Sequential review checked exact DOM placement, attempt metadata precedence, completed-review mode guard, named sections, legacy nesting, unchanged handlers and unchanged shared content. The new focused section test was observed failing before implementation. Browser legacy checks account for its existing responsive accent-border width rather than assuming a desktop width on mobile.

No new task-specific issues remain. The six historical broad-suite failures remain unchanged: four obsolete unavailable-bank assumptions, one missing original HTML integrity fixture and one obsolete four-card expectation. The whole historical collection is not claimed green. Mobile testing uses real Chrome viewport emulation rather than physical-device or screen-reader validation. Pre-existing question counts, first-answer lock and all other quiz rules remain unchanged.

Ready for Human Visual Review; no human acceptance, commits, pushes or unrelated changes.
