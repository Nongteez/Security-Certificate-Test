# Practice & Exam minimal UI — ISC2 CC 2026

Status: Ready for Human Visual Review. Not human-accepted. Broader historical regression gate remains red as disclosed below.

## Findings before implementation

- The latest Study Answers view uses transparent borderless incorrect rows, a subtle green correct row, neutral Explanation container and inline metadata. Preserve its code and CSS.
- `js/ui/screen-quiz.js` renders both Practice and Exam for all versions; all option buttons retain full-row click targets. Styling lives in shared `css/quiz.css`.
- Practice clicks immediately call `recordAnswer` and rerender with correct/wrong classes, disabled options and the existing explanation renderer. There is no separate submit stage or pending selection. Preserve that disclosure trigger.
- Exam uses only `selected`, no correct/wrong classes, no explanations and no score segment. Its countdown and navigation handlers are shared and must remain untouched.
- The current engine refuses to change an already recorded answer in both modes. Exam buttons remain enabled but subsequent clicks return the first record. Preserve this existing rule rather than silently changing engine behavior.
- Current question domain heading is already an inline span, but uses a hardcoded legacy DOMAIN_MAP. For updated CC attempts, reuse `next-bank/exam.config.js` domain names; retain legacy behavior elsewhere.
- `renderExplanation2026Content` supplies existing bilingual structured/general reasoning. Results/review have separate renderers and remain unchanged.
- Scope by the attempt's certification/version, using selected state only when attempt metadata is absent (matching existing renderer fallback conventions). A scoped wrapper class will contain all new CSS and feedback glyphs.

## Implementation plan

1. Add focused failing rendering tests for guarded markup, immediate Practice feedback, Exam secrecy and metadata.
2. Add a guarded quiz wrapper and updated domain metadata; add only feedback-stage check/cross glyphs with accessible names. Keep all answer/timer/navigation/storage handlers unchanged.
3. Add scoped neutral row/hover, blue selected, green/red feedback, visible focus, neutral Explanation and inline heading styles.
4. Run focused, engine, persistence, Study Answers and explanation regressions. Run real Chrome at 1440×900, 1920×1080 and 390×844, both themes and all languages, exercising default/hover/selected/feedback, navigation, persistence, legacy scope and Study Answers preservation. Inspect screenshots.
5. Record exact files, evidence and limitations; leave ready for human visual review without commits or acceptance claims.


## Delivered changes and scope

`renderQuizScreen` now adds `quiz-minimal-2026` only when the attempt certification is `isc2-cc` and its version is `next-bank`. Attempt metadata takes precedence over the current selector. All new CSS is beneath that wrapper, so legacy attempts, other certifications, results/review and Study Answers retain their styling.

- Unselected rows have transparent backgrounds and transparent borders (reserved border space keeps letter/text alignment stable), no card shadow, existing full-row buttons and at least 52px hit targets.
- Hover is neutral without a correctness hint. Selected Exam choices retain subtle blue background/thin blue border. Keyboard focus has a visible 3px outline.
- Existing Practice correct/wrong classes retain green/red feedback. Small check/cross glyphs with accessible image names add a non-color cue only after existing Practice disclosure. No new visible text labels or pre-feedback correctness hints.
- Explanation containers lose the blue accent and decorative outer border/background; the existing shared explanation component and all content remain intact.
- Domain headings use authoritative updated config names, natural wrapping and Study Answers' 14px inherited typography, with the Domain number/title in the same text span.

Reused components/functions: `renderQuizScreen`, `renderExplanation2026Content`, existing theme/language controls, existing option button handlers, engine selection/recording/navigation/timer/finish/resume functions and storage. No new dependencies or components. No answer handler, scoring, timer, persistence, question-selection or result/review implementation changes.

Exact task files:

| File | Change |
| --- | --- |
| `js/ui/screen-quiz.js` | Guarded wrapper, updated metadata import/lookup, Practice-only feedback glyphs |
| `css/quiz.css` | New `.quiz-minimal-2026` scoped rules; previous shared and Study Answers rules preserved |
| `tools/verify-quiz-minimal-ui.mjs` | New focused rendering/secrecy/scope tests |
| `tools/verify-quiz-minimal-ui-browser.mjs` | New real Chrome visual and interaction verification |
| `docs/plans/isc2-cc-2026/practice-exam-minimal-ui.md` | Inspection, plan, implementation and evidence report |
| `docs/plans/task.md` | Required task tracker row |

QA evidence is in `artifacts/qa/practice-exam-minimal-ui/`.

## Verification

| Check | Result | Evidence |
| --- | --- | --- |
| New quiz UI + Study Answers + explanation tests | **19/19 PASS** | [focused-tests.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/focused-tests.txt) |
| Existing engine suite | **7/7 PASS** | [engine-regression.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/engine-regression.txt) |
| Existing persistence suite | **8/8 PASS** | [persistence-regression.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/persistence-regression.txt) |
| Real Chrome integration | **139/139 PASS** | [browser-results.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/browser-results.json) |
| Visual matrix | **90/90 states PASS**, zero horizontal overflow | Same browser JSON |
| Broader historical version/language suites plus focused suites | **37 PASS / 6 historical FAIL**, 43 total; no new failure names | [broad-regressions.txt](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/broad-regressions.txt), [baseline-comparison.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/baseline-comparison.json) |
| Production preservation | Only quiz renderer and quiz CSS changed; **143 other files byte-identical** | [before-hashes.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/before-hashes.json), [preservation.json](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/preservation.json) |
| Scoped diff whitespace checks | PASS | `git diff --check` |

The 90-state matrix covers 1440×900, 1920×1080 and 390×844, light/dark and EN/TH/EN+TH: Practice default/wrong/correct feedback and Exam default/selected. Checks cover neutral rows, comfortable targets, blue/green/red treatments, correct disclosure stage, Exam secrecy, neutral Explanation, domain names and overflow. Further checks cover answer positions A–D, all five domain titles at desktop/mobile widths, a long scenario, native mouse hover/full-row clicking, native Tab/Enter focus and activation, first-answer locking, language switching, Previous/Next, running countdown, saved-session restoration after resetting in-memory quiz state, completion/results and legacy/Study Answers isolation. Zero application console errors or uncaught exceptions.

Chrome used an isolated temporary profile and local HTTP server; launch used the approved test command outside the sandbox because of the previously observed Chrome crash-handler limitation. No user browser profile or saved progress was accessed. Final browser evidence was generated after the last production styling change.

Screenshots: **52 captures**. Manually inspected default, hover, keyboard focus, Exam selected, Practice feedback, Thai/bilingual, light/dark and long-domain mobile examples:

- [Desktop default, dark](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/practice-default-1440-dark.png)
- [Desktop hover](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/desktop-neutral-hover.png)
- [Keyboard focus](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/desktop-keyboard-focus.png)
- [Practice feedback, desktop dark](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/practice-1440x900-dark-both.png)
- [Exam selected, mobile light](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/exam-390x844-light-both.png)
- [Practice Thai feedback, mobile light](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/practice-390x844-light-th.png)
- [Long domain heading, mobile dark](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/practice-exam-minimal-ui/long-domain-mobile-dark.png)

## Review and remaining limitations

Sequential diff review verified scope precedence, full-row buttons, unchanged event handlers, Practice-only glyph generation, absence of Exam correctness markup and no modifications to engine/storage/results/Study Answers. Browser tooling accounts for CSS flex-item display normalization when checking inline metadata, the existing EN badge when comparing question text, and uses the actual `storedSession` resume API after resetting quiz state.

No new task-specific issues remain. Existing behavior is intentionally preserved:

- Practice clicks immediately record the answer and reveal feedback, so there is no artificial blue pending-selection stage or new submit step.
- Both modes retain the existing engine's first-answer lock. Exam re-clicks keep the original answer; this task does not introduce answer editing.
- The updated bank's existing Exam allocation remains 117 questions rather than the advertised 125 because of domain shortages, as recorded in the Study Answers report.
- The same six historical broad-suite failures remain: four outdated unavailable-bank assumptions, a missing original HTML integrity fixture and an outdated four-card expectation. Focused/current behavior checks pass; the whole historical collection is not claimed green.
- Mobile validation is Chrome viewport emulation, not physical-device or screen-reader testing. Results/review production sources are byte-identical and the real completion flow passed.

Ready for Human Visual Review; no acceptance claim, commit, push or unrelated source edit.
