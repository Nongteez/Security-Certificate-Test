# Lesson 6 — Assessment & Prioritization

Status: implemented and desktop-verified, 2026-10-27; awaiting user visual, academic and independent bilingual acceptance. Interrupted work was continued without rebuilding the lesson.

## Plan and authorized scope

Follow roadmap L06, Domain 1 / Objective 1.2. Build on L05's scenario/likelihood/impact foundations without repeating its cycle. Teach qualitative vs quantitative reasoning, explicit criteria, AV/EF/SLE, annual frequency ARO, ALE, comparison and uncertainty. Preserve the formulas in Source A as course enrichment, not an invented official exam mandate. Response selection remains L07.

Eight instructional beats: methods; qualitative criteria; single-event AV×EF=SLE; annual frequency and units; annualized SLE×ARO=ALE; comparable risk estimates; interactive frequency sensitivity; prioritization beyond one dollar number. Use original scoped white-background HTML/CSS/SVG, complete paired detail in reading/Info, stable new lesson ID, no storage migration or dependencies.

Ordered implementation: inspect sources/current architecture and capture entry baseline; write failing integration/rendering/math/state checks; author bilingual source-grounded examples and implement bounded renderer/styles; append catalog under 1.2 and integrate Info; run focused and existing regressions; inspect every TH/EN slide at 1366×768 and 1920×1080 in production; exercise selector, keyboard/state, Info, reload/Resume and earlier lessons; record screenshots and integrity; update roadmap/tracker/report and stop.

The user authorizes all phases through delivery in the current workspace; no extra design gate, worktree, commit or deployment. Sequential self-review with human academic/bilingual/visual acceptance pending.


## Delivered lesson and source rationale

Roadmap L06 is **Assessment & Prioritization**, Domain 1, Objective 1.2, stable ID **lesson-d1-06-assessment**, revision 1. Eight complete TH/EN slides follow L05 foundations; detailed response selection remains L07. All original white-background compositions and reviewed educational content from the interrupted implementation were preserved during this resumption. No production code or lesson content changed in the resumed session.

Source A, ISC2 Update 2026/Domain 1/D1 sum.md §§17–21, supplies AV/EF/SLE/ARO/ALE and the $10,000 asset / 50% / $5,000 SLE / ARO 2 / $10,000 ALE example. Source B, ISC2 Update 2026/Domain 1/Domain 1.md §5.1, supplies qualitative/quantitative assessment context; it does not supply that formula example. Both notes were read completely in the roadmap task and relevant sections were reviewed before L06 authoring. The [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September 1, 2026, anchors Objective 1.2. Formula instruction is course enrichment, not an invented official exam calculation or memorization requirement.

[NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) §§2.3–2.3.2 corroborates assessment approaches and uncertainty. [NIST IR 8286A Rev. 1](https://csrc.nist.gov/pubs/ir/8286/a/r1/final), December 2025, §§2.2.4 and 2.3.1, supplies current single-event/annual-frequency and assessment context. Its superseded 2021 predecessor was replaced in references before delivery. Authored clinic criteria and comparison/sensitivity examples are explicitly teaching models, not official ISC2 scales or measured security data. Metadata identifies technical/bilingual/rights self-review honestly; independent human review remains pending.

| Slide ID | Instruction / composition |
| --- | --- |
| slide-01-choose-the-method | Qualitative defined categories vs meaningful quantitative units; ordinal labels are not dollars or probabilities |
| slide-02-define-the-criteria | Authored clinic impact criterion, likelihood evidence and justified judgment; high impact alone is not a complete rating |
| slide-03-estimate-one-loss | AV $10,000 × EF 0.50 = SLE $5,000/event; ten-segment value fraction diagram |
| slide-04-annual-frequency | ARO 0.2/year and 2/year; frequency can exceed one, is not percent or a fixed timetable |
| slide-05-annualize-the-loss | SLE $5,000/event × ARO 2/year = ALE $10,000/year; actual annual outcomes vary |
| slide-06-compare-like-with-like | Same currency/time basis: $5,000 × 2 = $10,000 vs $500 × 24 = $12,000/year |
| slide-07-test-the-estimate | Interactive frequency sensitivity 2 → 4/year; computed ALE $10,000 → $20,000/year |
| slide-08-prioritize-with-context | Comparable evidence, wider harm and communicated uncertainty; dollar ranking is not the whole decision |

## Architecture and focused review

The bounded trusted renderer recognizes only this lesson's eight stable slide IDs and expected four-block structures. Incompatible future edits fall back to complete semantic rendering. Original inline SVG is trusted code; educational strings enter text nodes. CSS is scoped to .learning-assessment-slide. Full paired detail remains in reading mode and all eight Lesson Info explanations. Existing viewer, routing, course selector and progress store are reused.

The sensitivity model freezes AV 10000, EF 0.5 and frequencies 2/4. Both results are computed from the same model. The native English-labelled toggle exposes aria-pressed, and the result is a polite live region. Temporary state survives language repaint but adds no persisted progress fields. Listener ownership uses AbortController and removes parent abort linkage on destroy. No timers, observers, network calls, new framework, schema, dependencies or migration were introduced.

Review checked formulas/units, EF vs probability, annual frequency vs timing/probability, expected vs guaranteed losses, consistent comparison scope, source attribution, publication gating, full semantic fallback and stale-listener cleanup. Before interruption, one Thai slide-6 label was shortened to avoid an orphaned word; corrected screenshots were recaptured. The resumed QA found no further genuine readability, layout, rendering or interaction defect and made no cosmetic redesign.

## Actual browser verification

Production public application at http://127.0.0.1:4188/, using normal index.html and js/app.js in bounded public staging, not the fixture preview. The server was restored after interruption; no repository source notes are served. All **32 required cases** were actually inspected across the original and resumed sessions: eight slides × TH/EN × 1366×768/1920×1080. The remaining larger English cases and final Thai slides were completed on 2026-10-27. No required desktop case remains unfinished.

Recorded presentation stages are approximately 1187.55×668 and 1742.22×980 respectively. All 32 cases stayed in presentation mode, with client/scroll dimensions equal, no measured content outside the stage and positive main/footer separation. Screenshots provide visual evidence; Node tests alone are not visual verification. The earlier 1366 cases were preserved, not fabricated or regenerated.

Functional checks completed:

- Higher-frequency state visually inspected in both languages and sizes: AV/EF/SLE unchanged, ARO 2 → 4, ALE 10000 → 20000; native Enter activation, language-state preservation and ArrowLeft on the button without slide navigation.
- Lesson Info retains eight English navigation labels and full translated explanations; English ARO and Thai SLE detail opened. Thai reading mode exposes full semantic content and returns to presentation.
- Objective 1.2 selector contains L05 and L06; selection launches the chosen presentation directly. 1.1 still contains four lessons; 1.3–1.5 remain Coming Soon.
- Full reload retained L06 slide 6/8, all eight visited and zero acknowledged completions. Resume opened 6/8 directly. Revisiting the sensitivity slide after reload showed base $10,000 and aria-pressed false.
- Prior lessons reopened independently at CIA 3/8, AAA 1/7, Non-repudiation 1/6, Privacy 1/8 and Risk Foundations 1/8. Returning to L06 retained its own subsequent 7/8 position. No progress was seeded, cleared or manually edited.
- No captured browser console errors. Preview left on L06 first slide in TH; temporary viewport override reset.

[Functional evidence](../../../artifacts/qa/lesson-d1-06-assessment/browser-functional-results.json), [browser geometry](../../../artifacts/qa/lesson-d1-06-assessment/browser-measurements.json).

## Automated verification

Fresh focused command, exit 0: **139 tests, 139 pass, 0 fail**:

~~~powershell
node --test tools/verify-learning-assessment.mjs tools/verify-learning-risk-foundations.mjs tools/verify-learning-privacy.mjs tools/verify-learning-non-repudiation.mjs tools/verify-learning-aaa-mfa.mjs tools/verify-learning-catalog.mjs tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-integration.mjs tools/verify-learning-phase2.mjs tools/verify-learning-viewer.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-visuals.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-cia-presentations.mjs tools/verify-ui-language-boundary.mjs tools/verify-version-selection-layout.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
~~~

[Actual output](../../../artifacts/qa/lesson-d1-06-assessment/node-verification.txt). This includes six L06 checks for content/publication, eight bilingual compositions and full explanations, fallback, computed interaction/cleanup, independent V1 reload/selection and arithmetic consistency. Quiz engine and session regressions also pass; protected original question bank remains 583 questions (142/65/93/156/127).

Four node --check commands passed for assessment-presentations.js, verify-learning-assessment.mjs, renderers.js and lesson-info.js. Scoped git diff --check is recorded with the final integrity result.

Before interruption, five expanded-catalog checks initially failed because they assumed five lessons / L05 as final or sole 1.2 lesson. Expectations were updated to six published IDs and two selectable 1.2 lessons. The L05 unavailable fixture now asserts 1.2 remains available with valid L06, and becomes unavailable when both fail. Existing academic hashes were not changed or weakened.

Additional command:

~~~powershell
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
~~~

Result: **11 tests, 6 pass, 5 fail**, all five in historical verify-exam-vocabulary.mjs. [Full failure output](../../../artifacts/qa/lesson-d1-06-assessment/vocabulary-verification.txt). Filter checks and all 313-entry/full-form checks pass. The five failures are pre-existing/outdated expectations, not L06 regressions; the test and all its production dependencies match the pre-L06 entry baseline:

| Failure | Evidence / classification |
| --- | --- |
| Exactly three entries/unavailable Vocabulary | Expects three IDs; existing registry already has fourth Learning Slides entry. Outdated expectation. |
| Vocabulary cannot select through direct calls | Fixture asserts unavailable Vocabulary cannot invoke selection; existing Vocabulary is available and deliberately routes through selection. Outdated fixture. |
| Three-card grid/two disabled actions | Expects 3; actual existing UI has 4 cards. Outdated expectation. |
| EN/TH/EN+TH card sentence | Expects older localized card wording; existing English-only application card wording differs. Outdated expectation. |
| Historical registry/core hash snapshot | Fails first on old next-bank Coming Soon metadata vs existing available 86-question bank, before hash loop. Outdated snapshot expectation; no hashes updated. |

These unrelated tests were left intact. No claim that the entire historical repository test suite passes, and no new browser QA of Quiz/Vocabulary is claimed. Their source/data preservation and focused regressions support the unaffected status.

## Exact implementation files and integrity

Created during L06 (already present on resumption):

- content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json
- js/ui/learning/assessment-presentations.js
- css/learning-assessment.css
- tools/verify-learning-assessment.mjs
- docs/plans/isc2-cc-2026/lesson-d1-06-implementation.md

Existing files modified during L06:

- content/isc2-cc-2026/learning/published/catalog.json
- index.html
- js/ui/learning/renderers.js
- js/ui/learning/lesson-info.js
- tools/verify-learning-catalog.mjs
- tools/verify-learning-non-repudiation.mjs
- tools/verify-learning-privacy.mjs
- tools/verify-learning-risk-foundations.mjs
- docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md
- docs/plans/task.md

This resumption changed only the three requested documentation files and QA evidence; production lesson/code/design remained unchanged. The entry Git tree on resumption was clean at 7caa9c4 (the interrupted implementation was already in that existing commit). No commit, reset, clean, revert or rebuild was performed here. Additional outputs are screenshots, baseline/catalog snapshots, test logs, measurements and integrity JSON under artifacts/qa/lesson-d1-06-assessment, plus ignored bounded public staging runtime copies.

The [1052-file pre-L06 baseline](../../../artifacts/qa/lesson-d1-06-assessment/baseline.json) protects the previous dirty state, including Lessons 1–5, Quiz, Vocabulary and source notes. [Final comparison](../../../artifacts/qa/lesson-d1-06-assessment/integrity-check.json) records expected modifications, missing/unexpected changes, old-lesson hashes, catalog preservation, staging parity and screenshot completeness. V1 key sec_cert_learning_progress_v1 and storage schema are unchanged.

## Remaining coverage, limitations and review instructions

Objective 1.2 is **partially covered**: L05 foundations/lifecycle and L06 assessment/prioritization now have dedicated instruction. L07 detailed response choices, acceptance authority, inherent/residual risk, reassessment and communication depth remain unimplemented. L08–L12 and Domain 2 are not started by this task. Publication is not a claim of complete objective coverage.

No required desktop QA remains. Human academic/bilingual/visual acceptance is still pending. Native fullscreen, other browsers, zoom and screen-reader behavior were not newly manually verified. No mobile/tablet QA was performed. The interactive ALE model is a fixed teaching example, not a financial forecasting or security assessment tool.

Manual review: open [local production preview](http://127.0.0.1:4188/), Open Certification → Learning → Domain 1 → Objective 1.2 → select Assessment & Prioritization → Start Learning. Use TH/EN, Slides, Info and the slide-7 frequency button. Resume opens the saved presentation directly. Stop after Lesson 6; wait for explicit user review before further implementation.

## Screenshot matrix

| Slide | 1366 TH | 1366 EN | 1920 TH | 1920 EN |
| --- | --- | --- | --- | --- |
| 1 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-01.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-01.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-01.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-01.jpg) |
| 2 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-02.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-02.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-02.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-02.jpg) |
| 3 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-03.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-03.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-03.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-03.jpg) |
| 4 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-04.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-04.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-04.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-04.jpg) |
| 5 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-05.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-05.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-05.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-05.jpg) |
| 6 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-06.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-06.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-06.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-06.jpg) |
| 7 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-07.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-07.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-07.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-07.jpg) |
| 8 | [1366-th](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-slide-08.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-slide-08.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-slide-08.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-slide-08.jpg) |

Supporting captures: [1366-th-higher-estimate](../../../artifacts/qa/lesson-d1-06-assessment/1366-th-higher-estimate.jpg), [1366-en-higher-estimate](../../../artifacts/qa/lesson-d1-06-assessment/1366-en-higher-estimate.jpg), [1920-th-higher-estimate](../../../artifacts/qa/lesson-d1-06-assessment/1920-th-higher-estimate.jpg), [1920-en-higher-estimate](../../../artifacts/qa/lesson-d1-06-assessment/1920-en-higher-estimate.jpg), [objective-1-2-two-lessons](../../../artifacts/qa/lesson-d1-06-assessment/objective-1-2-two-lessons.jpg), [objective-1-1-selector-preserved](../../../artifacts/qa/lesson-d1-06-assessment/objective-1-1-selector-preserved.jpg), [lesson-info-en](../../../artifacts/qa/lesson-d1-06-assessment/lesson-info-en.jpg), [lesson-info-th](../../../artifacts/qa/lesson-d1-06-assessment/lesson-info-th.jpg), [reading-mode-th](../../../artifacts/qa/lesson-d1-06-assessment/reading-mode-th.jpg), [progress-after-reload](../../../artifacts/qa/lesson-d1-06-assessment/progress-after-reload.jpg), [resume-slide-06](../../../artifacts/qa/lesson-d1-06-assessment/resume-slide-06.jpg), [cia-progress-preserved](../../../artifacts/qa/lesson-d1-06-assessment/cia-progress-preserved.jpg), [aaa-progress-preserved](../../../artifacts/qa/lesson-d1-06-assessment/aaa-progress-preserved.jpg), [non-repudiation-progress-preserved](../../../artifacts/qa/lesson-d1-06-assessment/non-repudiation-progress-preserved.jpg), [privacy-progress-preserved](../../../artifacts/qa/lesson-d1-06-assessment/privacy-progress-preserved.jpg), [risk-foundations-progress-preserved](../../../artifacts/qa/lesson-d1-06-assessment/risk-foundations-progress-preserved.jpg).

Final integrity result: **1042 of 1052 pre-L06 existing files unchanged**, exactly the ten expected existing files modified, zero missing or unexpected changes. All five old lesson hashes, preserved catalog sections, seven staged public runtime files and all 32 screenshot/geometry cases pass. Minimum measured main/footer separation is 15.41 px. All four syntax checks and scoped tracked diff whitespace checks pass (only normal LF/CRLF conversion notices). No remaining Lesson 6 implementation or required desktop QA blocker; stop for user review.
