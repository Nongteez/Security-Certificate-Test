# Slides 2–8 — White-background production redesign

Status: all seven production replacements implemented and desktop-reviewed in TH/EN; awaiting user visual review. Slide 1 is accepted as the reference and remains frozen. No separate prototype website or new lesson was created.

| Slide | Learning outcome / primary message | Fresh visual composition | Full explanation |
| --- | --- | --- | --- |
| 2 | Distinguish three peer security goals around one information asset. | Large triangular relationship drawing with HTML labels, source questions and open typography. No directional CIA sequence. | Source pillars, questions, summaries, takeaway. |
| 3 | Unauthorized viewing breaches confidentiality even without modification. | Executive-compensation document, legitimate access and an unauthorized intern's view; explanatory contrast and safeguards. | Original definition, control list, intern scenario. |
| 4 | Unauthorized modification destroys data trust even if processing continues. | Before/after wire-transfer beneficiary record and a visibly changed destination. No invented account numbers. | Definition, SQ-13 distinction, safeguard list, full wire-transfer scenario. |
| 5 | Authorized users need timely, dependable access. | Hospital portal service path disrupted by DDoS; allergy-record access blocked, not leaked or altered. | Definition, resilience/recovery controls, full clinical scenario. |
| 6 | One incident can produce different harms at different phases. | Open illustrated sequence: exfiltration → lockout → corruption, linked to C → A → I for this example only. No invented timings. | All lead/case/stage/event/impact/note/takeaway fields. |
| 7 | Falsifying the ledger directly harms Integrity while the system remains available. | Illustrated 50-laptop ledger before/after, compact native answer buttons and a shared three-column reveal. Original pre-change status is explicitly unspecified, not invented. | Full scenario, prompt, every option/verdict/reason. |
| 8 | Diagnose the specific harm, then identify the security goal and suitable controls. | Editorial comparison rows with large C/I/A anchors, diagnostic verbs, safeguards and concise traps. | Entire source matrix and reference list. |

Implementation: seven individual HTML/SVG compositions share only typography, localization and drawing helpers. Trusted dispatch checks the CIA lesson ID and seven existing slide IDs. The presentation renderer uses the new compositions on desktop; existing semantic reading and mobile rendering remain available. Slide 7 uses existing ephemeral interaction state and an owned AbortController, with no added progress fields. Complete original explanations are available in collapsed disclosures within existing Lesson Info; child render handles are disposed with the modal.

Assets: original inline SVG diagrams/icons and HTML document/ledger illustrations, styled with scoped CSS. No downloaded images, stock assets, external asset licenses or new dependencies. Source definitions/references are preserved in reading/Info; concise canvas statements summarize those sources. No lesson JSON edits, invented account numbers, incident timings or unspecified ledger statuses.

## Desktop browser evidence

Reviewed the actual normal application at `http://127.0.0.1:4187/`: Version Selection → Learning → Domain 1 → Objective 1.1 → Start Learning. The loopback server serves a bounded copy of the production app, not a standalone gallery. Its changed runtime files match the workspace by SHA-256.

All 28 final TH/EN cases use presentation mode. Measured stage sizes were 1742.22×980 at 1920×1080 and 1187.55×668 at 1366×768. Every case had matching scroll/client dimensions and zero measured text outside the canvas. Screenshots were visually inspected as well as measured. The detailed records are in [browser-measurements.json](../../../artifacts/qa/slides-02-08-redesign/browser-measurements.json).

| Slide | 1920 TH | 1920 EN | 1366 TH | 1366 EN |
| --- | --- | --- | --- | --- |
| 2 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-02.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-02.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-02.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-02.jpg) |
| 3 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-03.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-03.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-03.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-03.jpg) |
| 4 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-04.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-04.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-04.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-04.jpg) |
| 5 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-05.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-05.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-05.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-05.jpg) |
| 6 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-06.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-06.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-06.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-06.jpg) |
| 7 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-07.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-07.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-07.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-07.jpg) |
| 8 | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-th-slide-08.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1920-en-slide-08.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-th-slide-08.jpg) | [Image](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-08.jpg) |

Next/Previous, Slides overview, TH/EN switching, resume after reload and Lesson Info were exercised. Slide 7 selection survives language switching; Enter selects an answer, and ArrowRight inside an answer control does not navigate away. An [unanswered-state capture](../../../artifacts/qa/slides-02-08-redesign/1366-en-slide-07-unanswered.jpg) records that answers are not styled as correct/incorrect prematurely. Reload resumed Slide 8 with eight viewed slides and zero completed lessons; completion was not automatically granted. No page errors were returned by the browser error log query.

Browser review fixes: removed inherited SVG height clamping that detached the triangle labels; explicitly initialized answer reveal state to false; corrected feedback heading contrast; shortened the on-canvas English ledger summary to separate it from the reveal rule at 1366; replaced a misleading corruption checkmark with a cross; removed a Thai footer orphan. Complete explanations remain in Info.

## Verification and preserved boundaries

Focused command (103/103 passed):

```powershell
node --test tools/verify-learning-catalog.mjs tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-integration.mjs tools/verify-learning-phase2.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-visuals.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-cia-presentations.mjs tools/verify-ui-language-boundary.mjs tools/verify-version-selection-layout.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
```

Adding `tools/verify-learning-viewer.mjs` yields 110/111 passed. Its first test expects `setLanguage('both')` to retain `both`; the pre-existing controller deliberately maps it to `th` under Task 74.2.2. Both files match the pre-task baseline. This is an outdated expectation, left unchanged rather than changing viewer behavior to satisfy it. New composition tests cover all seven TH/EN renders, full source explanations, the complete recap matrix, answer state/cleanup and unchanged JSON. Failing tests were observed before implementation and for the premature answer-state defect before its correction.

Syntax checks passed for all nine new modules plus renderer/Info; runtime/test `git diff --check` passed. Including the tracker reports its pre-existing blank line at EOF, which was preserved. Existing engine checks passed 7/7 and session checks 8/8, including the protected 583 questions and domain counts 142/65/93/156/127.

The 766-file pre-task SHA-256 baseline confirms that existing files changed only within the eight-file list below. Slide 1 renderer, CSS and artwork are byte-identical; four frozen Slide 1 TH/EN presentation/reading DOM hashes also pass. The lesson JSON remains SHA-256 `034d8ae332ddcb5b3669823f50bca6e8f9122926f2f698a331db50b385cd9a55`. IDs, order, academic source, viewer shell/controller, V1 progress store, Quiz, Vocabulary, Center and Domain code were not edited. Unrelated Domain 4 intake files added during the session were left alone; they are not deliverables of this task.

## Exact file scope

Modified existing files:

- `index.html`
- `js/ui/learning/renderers.js`
- `js/ui/learning/lesson-info.js`
- `tools/verify-learning-editorial-intro.mjs`
- `tools/verify-learning-phase2.mjs`
- `tools/verify-learning-v3-viewer.mjs`
- `tools/verify-learning-visuals.mjs`
- `docs/plans/task.md`

Created source/test/report files:

- `css/learning-cia-presentations.css`
- `js/ui/learning/cia-presentations/shared.js`
- `js/ui/learning/cia-presentations/index.js`
- `js/ui/learning/cia-presentations/overview.js`
- `js/ui/learning/cia-presentations/confidentiality.js`
- `js/ui/learning/cia-presentations/integrity.js`
- `js/ui/learning/cia-presentations/availability.js`
- `js/ui/learning/cia-presentations/incident.js`
- `js/ui/learning/cia-presentations/investigation.js`
- `js/ui/learning/cia-presentations/recap.js`
- `tools/verify-learning-cia-presentations.mjs`
- `docs/plans/isc2-cc-2026/slides-02-08-production-redesign.md`

Created evidence: the 28 images linked above, `1366-en-slide-07-unanswered.jpg` and `browser-measurements.json` under `artifacts/qa/slides-02-08-redesign/`. The ignored bounded preview contains copies of runtime files solely to serve the normal app locally.

## Review limits and stop

Desktop TH/EN only. No mobile/tablet redesign or browser QA was performed. Native fullscreen capture remains a manual actual-browser check (the harness was unstable previously); Node regressions cover fullscreen state/DOM preservation. Other browsers, operating-system font differences, enlarged text/zoom and assistive-technology behavior need manual review. Visual acceptance belongs to the user; passing geometry/tests does not establish design approval. Review through the normal app flow above and use Slides to inspect 2–8, especially both states of Slide 7 and the full explanations in Info. Stop here: no other lesson or Domain production work.
