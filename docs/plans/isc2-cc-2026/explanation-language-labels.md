# Remove redundant explanation language labels

Status: Ready for Human Visual Review. Not human-accepted. Historical broad-suite failures remain disclosed below.

## Findings before implementation

Study Answers, active Practice feedback and completed Exam wrong-answer review all call `renderExplanation2026Content` in `js/ui/components/explanation-2026.js`. Structured bilingual output contains two `.exp-lang-label` headings with EN/TH badges. Unstructured bilingual fallback has badges without headings. Main Explanation headings live in the individual view renderers and require no change. Legacy explanations use independent markup. Active Exam never calls the explanation renderer. Existing `.exp-2026-container` supplies a flex column with spacing.

## Plan

1. Revise the existing focused bilingual/fallback tests to require no headings or badges and preserve content order; confirm failure before editing.
2. Remove only redundant component markup, retain language blocks with semantic language attributes, and use scoped bilingual spacing. Preserve all reasoning, examples, tips, fallback behavior and view handlers.
3. Run focused and relevant regressions. Use real Chrome for Study, Practice and completed Exam review in three languages, both themes and desktop/mobile; verify main headings, complete shared output, selector behavior, Exam secrecy and legacy isolation. Inspect screenshots.
4. Record files, evidence and limitations; mark Ready for Human Visual Review.


## Implementation

The shared `next-bank` component no longer renders the English Explanation / คำอธิบายภาษาไทย headings or their EN/TH badges. The unstructured bilingual fallback also omits its EN/TH badges. Bilingual output retains English first and Thai second, with 28px flex spacing in `.exp-2026-both`; the redundant inter-language divider and unused label styles were removed. Semantic language attributes remain on language blocks.

Main Explanation headings, language controls and individual view renderers were left unchanged. All correct-answer reasoning, incorrect-option reasoning, option quotes, examples, exam tips, paragraph formatting and Thai fallback logic are preserved. Existing question language badges are outside the explanation component and unchanged. No scoring, timer, persistence, navigation, selection or Question Bank code changes.

Exact files changed for this task:

- `js/ui/components/explanation-2026.js` — removed redundant label/badge/divider markup from structured and general bilingual output; retained language blocks and their content.
- `css/quiz.css` — removed unused `.exp-lang-label` rules; added scoped bilingual spacing.
- `tools/verify-explanation-formatting-2026.mjs` — updated obsolete label expectations; checked unlabeled bilingual/fallback output, content ordering and Practice/review integration.
- `tools/verify-explanation-language-labels-browser.mjs` — new real Chrome verification for all requested views and scope.
- `docs/plans/isc2-cc-2026/explanation-language-labels.md` — this report.
- `docs/plans/task.md` — live tracker entry.

## Verification results

| Verification | Result | Evidence |
| --- | --- | --- |
| Shared explanation, Study Answers and quiz UI focused suites | **19/19 PASS** | [focused-tests.txt](../../../artifacts/qa/explanation-language-labels/focused-tests.txt) |
| Existing engine regression suite | **7/7 PASS** | [engine-regression.txt](../../../artifacts/qa/explanation-language-labels/engine-regression.txt) |
| Existing persistence suite | **8/8 PASS** | [persistence-regression.txt](../../../artifacts/qa/explanation-language-labels/persistence-regression.txt) |
| Real Chrome | **78/78 checks PASS** | [browser-results.json](../../../artifacts/qa/explanation-language-labels/browser-results.json) |
| All-view matrix | **54/54 states PASS**: Study, Practice, completed Exam review × EN/TH/both × light/dark × 1440×900, 1920×1080, 390×844 | Same browser JSON |
| Exhaustive explanation content | **471/471 bank/language cases PASS**: all 157 questions, correct/incorrect reasoning, available examples/tips | Same browser JSON |
| Source preservation | Only explanation component/CSS changed in production; **143 other source/data files byte-identical** | [preservation.json](../../../artifacts/qa/explanation-language-labels/preservation.json), [before-hashes.json](../../../artifacts/qa/explanation-language-labels/before-hashes.json) |
| Broader historical regressions | **37 PASS / 6 historical FAIL**, same failing test names as the previous task | [broad-regressions.txt](../../../artifacts/qa/explanation-language-labels/broad-regressions.txt), [baseline-comparison.json](../../../artifacts/qa/explanation-language-labels/baseline-comparison.json) |
| Scoped whitespace checks | PASS | `git diff --check` |

The browser uses an isolated Chrome profile and local HTTP server, with the approved local command outside the sandbox. Language modes were changed using the actual selectors. Practice explanations were checked absent before clicking and present after the existing click trigger. Exam review was entered through real Exam completion and Results → Review Wrong Answers; active Exam checks confirmed absence of explanations and correctness markup before completion. Legacy Practice retains its two explanation badges and independent markup. No application console errors or uncaught exceptions; zero page overflow in the matrix.

All current bank questions have structured explanations. General-explanation compatibility was tested in the browser using a detached clone of an existing question with only `explanation_detail` omitted; its original flat EN/TH explanation strings were preserved. No bank object or question file was modified. Existing Node fallback tests also pass.

18 actual bilingual Chrome screenshots were saved. Visually inspected:

- [Study Answers, mobile light](../../../artifacts/qa/explanation-language-labels/study-390x844-light-both.png)
- [Practice, desktop dark](../../../artifacts/qa/explanation-language-labels/practice-1440x900-dark-both.png)
- [Completed Exam review, mobile dark](../../../artifacts/qa/explanation-language-labels/review-390x844-dark-both.png)

Inspection confirms that redundant explanation labels/badges are absent, main headings remain, language sections have clean spacing and complete readable reasoning, and the surrounding interfaces retain their existing presentation.

## Review and remaining issues

Sequential diff review confirmed all content-rendering functions and language fallback choices are unchanged, single-language output remains intact, only existing permitted explanation states call the component, and no legacy renderer/CSS selector was modified. The revised tests first failed against the old label markup, then passed after implementation. Tests compare escaped source strings for ordering and preserve real selector/finish/review interactions.

No new task-specific issues remain. Six historical broad-suite failures are unchanged: four obsolete unavailable-`next-bank` assumptions, one missing original HTML integrity fixture and one obsolete four-version-card expectation. The entire historical test collection is not claimed green. Browser checks use real headless Chrome with mobile viewport emulation; physical-device/screen-reader testing was not performed. Other pre-existing quiz behavior and limitations remain unchanged.

Ready for Human Visual Review; no human acceptance, commits or pushes.
