# Study Answers question typography

Status: Ready for Human Visual Review. Not human-accepted. Historical regression failures disclosed below.

Study questions are rendered inside an `h2`, with `.study-language` spans and a fixed 18px/1.8 heading style. Quiz questions use `.question-en` / `.question-th` with explicit language-specific weight, size and line height, plus responsive overrides. Study's spans inherit heading weight instead. Answer choices and metadata share the bilingual helper, so any class reuse must be opt-in for the question only.

Plan: capture real Chrome computed styles and screenshots before editing; reuse existing quiz language classes on study question spans and normalize only the study question heading's inherited typography if needed; compare family/size/weight/line-height/letter-spacing for each language against both Practice and Exam across desktop/mobile and both themes. Preserve all other text, styles and behavior, run focused/engine/persistence regressions, and record before/after evidence.


## Computed baseline (captured before editing)

Font family already matches: Space Grotesk / Noto Sans Thai / sans-serif; letter spacing is normal. At 1440px, Study EN and TH are 18px / 700 / 32.4px line height, whereas Practice/Exam EN is 18px / 600 / 27px and TH is 16.5px / 500 / 26.4px. At 390px, Study still uses 18px / 700 / 32.4px, whereas Practice/Exam EN is 15px / 600 / 22.5px and TH is 14px / 500 / 21.7px. None of the 18 before states matched. Baseline captured all requested languages/themes at 1440×900, 1920×1080 and 390×844 with screenshots before production changes.


## Implementation and exact files

Only Study question spans opt into existing `.question-en` / `.question-th` classes through an optional argument to the bilingual helper. The heading's fixed 18px/1.8 and inherited bold typography are replaced with `font: inherit`. Actual language text then uses precisely the same authoritative quiz class definitions and responsive breakpoints as Practice/Exam. No duplicated typography values or global overrides were added. The semantic heading and existing question text/escaping/line-break behavior remain unchanged; no descendant-wide weight reset strips content emphasis.

Files changed for this task:

- `js/ui/screen-study-answers.js`: opt-in shared question typography classes, used only at the question heading call site.
- `css/quiz.css`: one Study question heading rule changed to `font: inherit; margin: 0`.
- `tools/verify-study-answers.mjs`: focused regression requiring question-only shared classes and unchanged option markup.
- `tools/verify-study-question-typography-browser.mjs`: new before/after Chrome computed-style/screenshot validation.
- `docs/plans/isc2-cc-2026/study-question-typography.md`: this inspection and delivery record.
- `docs/plans/task.md`: task tracker row.

## Results

| Language / viewport | Before Study: size / weight / line height | After Study = Practice = Exam |
| --- | --- | --- |
| EN, desktop | 18px / 700 / 32.4px | 18px / 600 / 27px |
| TH, desktop | 18px / 700 / 32.4px | 16.5px / 500 / 26.4px |
| EN, mobile 390px | 18px / 700 / 32.4px | 15px / 600 / 22.5px |
| TH, mobile 390px | 18px / 700 / 32.4px | 14px / 500 / 21.7px |

Font family remains `Space Grotesk, Noto Sans Thai, sans-serif`; letter spacing remains `normal`. Both language blocks match individually in EN+TH mode.

- **Real Chrome before:** 19 checks pass; confirmed typography mismatch in all 18 states before editing.
- **Real Chrome after:** 37 checks pass; **18/18 exact matches** against both Practice and Exam for family, size, weight, line height and letter spacing. Zero application errors or horizontal overflow.
- Matrix: 1440×900, 1920×1080 and 390×844 × light/dark × EN/TH/EN+TH. Used actual long Thai/English scenario question 628 with Timeline, SQL Injection, SIEM, High-Severity Alert, SOC and TTD terminology.
- **Before/after preservation:** every Practice/Exam reference style is unchanged. Study option, explanation and domain computed typography is unchanged in all 18 states. Question text content is identical. Only two production source files changed; **143 other source/data files are byte-identical**.
- Focused Study/explanation/quiz UI regressions: **20/20 pass**, including the new opt-in scope test (observed failing before implementation).
- Existing engine regressions: **7/7 pass**. Existing persistence regressions: **8/8 pass**.
- Broader historical suites: **38 pass / 6 historical fail**, 44 total; exactly the same failure names as the preceding task. No new failure names.
- Scoped `git diff --check`: pass.

Computed styles and screenshots were captured before production edits, then recaptured after the fix using isolated real Chrome profiles and a local HTTP server. Chrome launch used the approved command outside the sandbox because of the established sandbox crash-handler limitation. No user browser profile was accessed. Each phase includes 18 Study captures and 12 Practice/Exam reference captures (60 total screenshots).

Evidence:

- [Before computed styles](../../../artifacts/qa/study-question-typography/before/browser-results.json)
- [After computed styles](../../../artifacts/qa/study-question-typography/after/browser-results.json)
- [Exact comparison and preservation](../../../artifacts/qa/study-question-typography/comparison.json)
- [Focused tests](../../../artifacts/qa/study-question-typography/focused-tests.txt), [engine](../../../artifacts/qa/study-question-typography/engine-regression.txt), [persistence](../../../artifacts/qa/study-question-typography/persistence-regression.txt)
- [Broad regressions](../../../artifacts/qa/study-question-typography/broad-regressions.txt), [historical failure comparison](../../../artifacts/qa/study-question-typography/baseline-comparison.json)
- [Mobile Thai before](../../../artifacts/qa/study-question-typography/before/study-390x844-light-th.png) → [after](../../../artifacts/qa/study-question-typography/after/study-390x844-light-th.png)
- [Desktop bilingual before](../../../artifacts/qa/study-question-typography/before/study-1440x900-dark-both.png) → [after](../../../artifacts/qa/study-question-typography/after/study-1440x900-dark-both.png)

Visually inspected mobile light Thai before/after and desktop dark bilingual after screenshots: excessive question bolding is removed, the long scenario wraps naturally, and answer/explanation styles retain their appearance. Review verified the helper's default path is unchanged, existing shared quiz CSS was not edited, and class reuse is limited to the Study question call site.

## Remaining issues

No new task-specific issues. The same six historical failures remain (four obsolete unavailable-bank assumptions, missing original HTML integrity fixture, obsolete four-card expectation); the entire historical collection is not claimed green. Chrome mobile viewport emulation was used rather than a physical phone. No scoring, timer, persistence, navigation, language behavior, question content, legacy or other UI source changes. No commits or pushes.

Ready for Human Visual Review.
