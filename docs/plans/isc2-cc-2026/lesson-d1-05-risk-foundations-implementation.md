# Lesson 5 — Risk Foundations & Lifecycle

Status: implemented and desktop-verified on 2026-10-26; awaiting user visual/academic review. Only Lesson 5 was implemented.

## Implementation plan

Follow existing L05 roadmap, Domain 1 / Objective 1.2. Explain asset/threat/vulnerability/likelihood/impact and continuous identify → assess → respond → monitor/review, with communication throughout. Preserve depth without starting L06 quantitative assessment or L07 detailed responses. Existing CIA, AAA, evidence and privacy units remain intact.

Eight instructional beats: (1) potential harm before an incident, (2) connect asset/weakness/threat event/impact, (3) distinguish threat/vulnerability/impact, (4) likelihood versus impact with a qualitative two-axis illustration, (5) ongoing lifecycle with communication across it, (6) write a useful risk statement, (7) reassess after change using an interactive before/after evidence comparison, (8) report for an informed decision. Complete bilingual detail stays in reading/Info. Use original white-background HTML/SVG compositions, not reused slide layouts or new dependencies.

Ordered work: review sources/roadmap/architecture; capture dirty-tree baseline; author paired instructional content and add failing tests; implement scoped renderer/styles and publish only L05 under 1.2; verify objective gating, state, complete explanations, independent progress and prior lessons; inspect every slide in TH/EN at 1366×768 and 1920×1080; record screenshots and actual findings; run regression and baseline comparisons; update roadmap/tracker/report and stop.

The user explicitly authorizes all phases in the current workspace, so no intermediate approval, new worktree or commit is needed. Sequential execution and self-review; independent human academic/visual acceptance remains pending.

## Selection, source mapping and scope

The existing [Domain 1 roadmap](domain-1-learning-roadmap.md) identifies **Risk Foundations & Lifecycle**, stable ID `lesson-d1-05-risk-foundations`, under **Objective 1.2**. The [ISC2 outline effective September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), verified 2026-10-26, lists risk-management lifecycle and processes there. It does not mandate the course's specific diagram, a particular risk matrix or an exam calculation claim.

Both original mandatory notes remain readable and unchanged. They were read in full for the preceding roadmap task; the relevant risk sections were reread before this lesson's authoring:

- **A:** `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733 lines), §§15–16 continuous lifecycle and identification; §§23–24 control effectiveness, change triggers and stakeholder communication; §22 response context. §§17–21 quantitative detail is intentionally reserved for L06, rather than discarded or prematurely implemented.
- **B:** `ISC2 Update 2026/Domain 1/Domain 1.md` (405 lines), §1 relationships; §§5.1–5.2 likelihood, impact and lifecycle; §§5.3–5.4 response/remaining-risk context. Appetite/tolerance is supplemental and is not expanded into a new lesson here.
- Existing catalog and published lesson data, L04 report, tracker, renderer/styles/components, schema, course resolver, objective/lesson selection and V1 progress code were inspected. L01–04 already teach CIA, AAA/MFA, non-repudiation/evidence and privacy. Risk examples were mentions, not a complete foundation unit. Only a short CIA connection is used here.

Primary corroboration: [NIST SP 800-30 Rev.1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), especially §2.3 risk factors and uncertainty; [NIST SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final), §2.1 / Figure 1 information flows and §3.4 monitoring. The full PDFs were opened and relevant passages inspected. NIST's framing/assessment/response/monitoring model is distinguished from A's five labelled activities. It supports ongoing feedback, not an assertion of identical stage names. These are supplemental technical references, not local source replacements or new ISC2 objectives. No mandatory source was unavailable.

Accuracy reconciliation: a relevant exploitable weakness is different from an attacker or a consequence; not every missing update proves the same risk. Risk is not a confirmed incident. Likelihood and impact need a scenario and context; low likelihood alone does not authorize acceptance. Communication runs throughout the course cycle. A patch deployment record is evidence, not automatic proof of effectiveness or zero risk. New uncertainty is not silently converted into an invented probability, numeric score or acceptance decision. All clinic/flood examples and visual compositions are newly authored, not official exam items.

Learning outcomes: classify asset/threat source/event/vulnerability/impact; distinguish risk from an incident; explain likelihood versus impact and uncertainty; follow identification, assessment, response and monitoring with communication throughout; write a useful risk statement with context, evidence and ownership; recognize changes that call for reassessment and actionable reporting.

## Slide-by-slide instructional design

| Slide / stable ID | Primary learner understanding | Visual explanation and supporting text | Full detail / evidence |
| --- | --- | --- | --- |
| 1 `slide-01-potential-harm` | Risk can be considered before a confirmed incident | Clinic service and possible disruption separated by uncertainty | A §15; B §5.1; scope, people and decision purpose |
| 2 `slide-02-connect-the-scenario` | Asset, weakness, threat event and potential impact play different roles | Four-part clinic scenario with connected original SVG drawings | A §16; B §1; attacker as source, exploitation as event; exposure/controls qualify plausibility |
| 3 `slide-03-separate-the-terms` | Threat is not vulnerability or impact; threats include environmental causes | Flood, exposed placement and unavailable service comparison | A §16; B §1; scan findings are not complete risk judgments |
| 4 `slide-04-likelihood-and-impact` | Likelihood and consequences are distinct inputs | Conceptual two-axis illustration and two practical questions | B §5.1; NIST §2.3; no scores, measured probabilities, universal matrix or formula requirement |
| 5 `slide-05-continuous-lifecycle` | Review feeds back; assessment is part of ongoing management | Clockwise four-activity loop, explicitly ongoing communication | A §§15,23–24; B §5.2; NIST model reconciled; responses only introduced, L07 deferred |
| 6 `slide-06-write-a-risk-statement` | Connect a finding to a plausible event and meaningful consequence | Finding → risk statement → contextual record, with scope/evidence/owner | A §16; B §1; illustrative record, not a mandatory template |
| 7 `slide-07-review-after-change` | Changed evidence requires verification and reassessment | Keyboard-operated before/after patch comparison plus ongoing watch conditions | A §23; B lifecycle; NIST monitoring; no actual scan/patch or claimed numeric risk reduction |
| 8 `slide-08-communicate-for-a-decision` | Reporting should support decisions and follow-up | Business consequence, known evidence and accountable next step | A §24; B lifecycle; distinguish evidence/assumptions/unknowns; L07 depth remains pending |

Eight slides separate recognition, assessment foundations, cycle, record, review and reporting. No fixed count was inherited. Both TH/EN versions teach equivalent content with important English technical terms preserved in Thai. Complete explanations remain in semantic blocks, reading mode and Lesson Info. New application controls remain English. Review metadata explicitly identifies Codex technical/bilingual/rights self-review; human academic/visual acceptance is pending.

## Production architecture and review

Only the new trusted adapter recognizes this lesson and its eight slide IDs. Its expected block/row shape guard declines incompatible edits into the full semantic renderer. The scoped stylesheet affects only `.learning-risk-slide`; the viewport stage and application screens are untouched. It uses original fixed inline SVG clinic, weakness, event, impact, flood, evidence, patch, message and axes geometry. No external image, remote runtime, generated raster, separate asset file or dependency was introduced. Educational strings enter through localized text nodes; fixed trusted SVG does not interpolate JSON or user-supplied markup.

The before/after button has explicit text, `aria-pressed`, visible focus and a polite live evidence region. Temporary `interactionState.changed` survives TH/EN repaint and navigation in the same viewer but owns no persistent fields. A local AbortController and removed parent abort subscription own cleanup. No timers, observers, network requests or async work were added. Existing viewer/overview/keyboard/fullscreen/progress implementations remain unchanged. Info's existing disposal handles cover all eight full explanations.

Sequential spec and code-quality self-review checked source limits, bilingual equivalence, publication validation, content fallback, scoped CSS, English controls, no content-to-HTML injection, listener cleanup and prior lesson boundaries. A potentially conflicting statement composition class was given a separate child selector before browser QA. During visual review the lifecycle's four activities lacked a visible return path; it was revised into a clockwise 1→2→3→4→1 loop and recaptured in all four viewport/language combinations. DOM reading order stays 1,2,3,4. No earlier lesson layouts or academic text were edited.

Catalog revision 4→5 adds exactly one lesson summary to 1.2 and makes that objective available only through validated content. The 1.1 summary and its four lessons remain identical to entry. **Published/available does not claim that all of 1.2 is academically complete.** L06 and L07 are still required. No course, selector, route, viewer/controller, storage-schema or Quiz/Vocabulary implementation was changed.

## Actual browser verification

Used the actual production `index.html` / `js/app.js` viewer at **http://127.0.0.1:4188/** through Home → Open Certification → Learning → Domain 1 → Objective 1.2 → Start Learning. The server exposes the bounded public staging copy, not repository source notes. This is not a fixture or standalone prototype.

All **32 required cases** were visually inspected and captured: eight slides × TH/EN × 1366×768/1920×1080. Full-page captures preserve the actual requested viewport without clipping to the physical app window. Geometry corroborates, rather than substitutes for, visual inspection. Stages measure approximately 1187.55×668 and 1742.22×980 respectively. All captures remain in presentation mode; measured canvas scroll dimensions equal client dimensions, no essential text falls outside, and content/footer clearance is positive. Smallest clearance is 15.41px at 1366 on slides 6/7.

Actual interaction and integration observations:

- Objective 1.2 is selectable and launches L05 directly; 1.3–1.5 remain Coming Soon. Selecting 1.1 retains the original four-lesson selector.
- Slides overview navigates every slide. Enter changes the evidence comparison; TH/EN retains the chosen state. ArrowLeft inside that button does not move off slide 7. A full reload resets the temporary comparison to before-change.
- Info opens/closes and lists all eight explanations; full EN lifecycle and TH scenario content were expanded and inspected.
- Keyboard activation of explicit reading mode displays the complete semantic explanation and returns to presentation mode.
- After a full reload via normal Home entry, Learning Center shows Risk Foundations at **slide 6/8**, all eight slides visited and **0/5 lessons completed**. Resume opens slide 6 directly. Finish Lesson was not clicked, so QA visits did not falsely claim completion.
- Lessons 1–4 reopen independently at **CIA 3/8, AAA 1/7, Non-repudiation 1/6, Privacy 1/8**. Dedicated data/renderers/styles/artwork remain entry-baseline-identical.
- Browser error log query returned no errors.

Native OS fullscreen, other browser engines, screen readers and enlarged text/zoom were not freshly visually verified; existing Node fullscreen/state tests pass. Mobile/tablet QA was explicitly outside scope.

## Tests and regression findings

New five-check file was observed failing before implementation: missing lesson source and absent fifth catalog entry. After implementation it passes source/schema/publication, eight paired renderings and complete Info/reading, safe shape fallback, interaction state/disposal, independent V1 progress for all five lessons, direct 1.2 launch and validation-failure gating. All four older progress entries remain identical in the isolated store test when only L05 changes.

The expanded regression run passes **133/133**. Engine internal checks pass 7/7 and session checks 8/8, including protected **583** legacy questions with domain counts **142/65/93/156/127**. Syntax checks pass for new renderer/test and existing dispatcher/Info.

```powershell
node --test tools/verify-learning-risk-foundations.mjs tools/verify-learning-privacy.mjs tools/verify-learning-non-repudiation.mjs tools/verify-learning-aaa-mfa.mjs tools/verify-learning-catalog.mjs tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-integration.mjs tools/verify-learning-phase2.mjs tools/verify-learning-viewer.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-visuals.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-cia-presentations.mjs tools/verify-ui-language-boundary.mjs tools/verify-version-selection-layout.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
node --check js/ui/learning/risk-foundations-presentations.js
node --check js/ui/learning/renderers.js
node --check js/ui/learning/lesson-info.js
node --check tools/verify-learning-risk-foundations.mjs
```

The first expanded run reported five expectation/fixture failures, not production regressions. Evidence is saved in `node-initial.txt`:

| Check | Cause | Scoped correction |
| --- | --- | --- |
| Catalog publication | Expected only the four earlier IDs | Assert all five IDs, retain their order and validate every lesson |
| NR publication | Expected global catalog count 4 | Expect 5; retain NR index, content and four-choice 1.1 checks |
| Privacy publication | Assumed privacy was globally last and total 4 | Keep privacy at index 3; expect total 5; retain its content/selector assertions |
| Related-objective model | Assumed related CIA was first in an otherwise empty 1.2 | Assert exactly one related CIA entry despite the new owned L05, retaining non-duplicated total |
| Phase 2 unavailable objective | CIA-only test loader returns wrong identity for published L05 | Assert 1.2 validation-failure badge; retain Coming Soon and non-selectability for empty 1.3–1.5 |

No expected content hash was updated, no academic content assertion removed and no unrelated test weakened. The new real-1.2 integration check separately proves valid publication is selectable and invalid content stays gated.

## Exact implementation scope and integrity

Created:

- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`
- `js/ui/learning/risk-foundations-presentations.js`
- `css/learning-risk-foundations.css`
- `tools/verify-learning-risk-foundations.mjs`
- `docs/plans/isc2-cc-2026/lesson-d1-05-risk-foundations-implementation.md`

Modified:

- `content/isc2-cc-2026/learning/published/catalog.json`
- `index.html`
- `js/ui/learning/renderers.js`
- `js/ui/learning/lesson-info.js`
- `tools/verify-learning-catalog.mjs`
- `tools/verify-learning-course.mjs`
- `tools/verify-learning-phase2.mjs`
- `tools/verify-learning-non-repudiation.mjs`
- `tools/verify-learning-privacy.mjs`
- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
- `docs/plans/task.md`

The durable pre-edit [996-file dirty-tree baseline](../../../artifacts/qa/lesson-d1-05-risk-foundations/baseline.json) protects existing uncommitted work rather than comparing only to HEAD. [Integrity evidence](../../../artifacts/qa/lesson-d1-05-risk-foundations/integrity-check.json) checks every captured file, all four prior lesson hashes, preserved 1.1 catalog content and seven matching public staged runtime files. Existing progress key `sec_cert_learning_progress_v1`, schema, IDs/order, prior lesson assets and notes, Quiz/Vocabulary/scoring and unrelated work are unchanged. No reset, revert, clean, deletion, commit or deployment was performed. QA artifacts and ignored bounded public preview copies are the only additional output beyond the implementation scope above.

## Remaining coverage and review limits

L05 completes its foundational unit, not all Objective 1.2. L06 assessment methods/formulas and L07 detailed response choice, acceptance, residual-risk and review treatment remain planned. All 1.3–1.5 lessons L08–L12 remain unimplemented. L01–L04 retain their earlier coverage and review status. Domain 1 is **not complete**. Further sourced AI risk/governance applications remain future authoring work.

Human visual, academic and independent bilingual review remains pending; metadata identifies self-review honestly. The interactive comparison is a teaching model, not a live security tool. Manual fullscreen, other browsers, zoom and assistive-technology review are unclaimed further coverage. No mobile/tablet QA was performed. To review: open the local preview, choose Domain 1 / Objective 1.2 / Start Learning, switch TH/EN, use Slides and Lesson Info, and operate Show after change on slide 7. Stop after this delivery; no Lesson 6 or Domain 2 work begins without the user.

## Screenshot matrix

| Slide | 1366 TH | 1366 EN | 1920 TH | 1920 EN |
| --- | --- | --- | --- | --- |
| 1 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-01.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-01.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-01.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-01.jpg) |
| 2 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-02.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-02.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-02.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-02.jpg) |
| 3 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-03.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-03.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-03.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-03.jpg) |
| 4 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-04.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-04.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-04.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-04.jpg) |
| 5 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-05.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-05.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-05.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-05.jpg) |
| 6 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-06.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-06.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-06.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-06.jpg) |
| 7 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-07.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-07.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-07.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-07.jpg) |
| 8 | [1366 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-slide-08.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-slide-08.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-th-slide-08.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-05-risk-foundations/1920-en-slide-08.jpg) |

Supporting captures: [1366-en-after-change](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-en-after-change.jpg), [1366-th-after-change](../../../artifacts/qa/lesson-d1-05-risk-foundations/1366-th-after-change.jpg), [objective-1-2-available](../../../artifacts/qa/lesson-d1-05-risk-foundations/objective-1-2-available.jpg), [objective-1-1-selector-preserved](../../../artifacts/qa/lesson-d1-05-risk-foundations/objective-1-1-selector-preserved.jpg), [lesson-info-en](../../../artifacts/qa/lesson-d1-05-risk-foundations/lesson-info-en.jpg), [lesson-info-th](../../../artifacts/qa/lesson-d1-05-risk-foundations/lesson-info-th.jpg), [reading-mode-th](../../../artifacts/qa/lesson-d1-05-risk-foundations/reading-mode-th.jpg), [progress-after-reload](../../../artifacts/qa/lesson-d1-05-risk-foundations/progress-after-reload.jpg), [resume-slide-06](../../../artifacts/qa/lesson-d1-05-risk-foundations/resume-slide-06.jpg), [cia-progress-preserved](../../../artifacts/qa/lesson-d1-05-risk-foundations/cia-progress-preserved.jpg), [aaa-progress-preserved](../../../artifacts/qa/lesson-d1-05-risk-foundations/aaa-progress-preserved.jpg), [non-repudiation-progress-preserved](../../../artifacts/qa/lesson-d1-05-risk-foundations/non-repudiation-progress-preserved.jpg), [privacy-progress-preserved](../../../artifacts/qa/lesson-d1-05-risk-foundations/privacy-progress-preserved.jpg).

[Browser geometry](../../../artifacts/qa/lesson-d1-05-risk-foundations/browser-measurements.json), [initial expanded checks](../../../artifacts/qa/lesson-d1-05-risk-foundations/node-initial.txt), [final 133-check output](../../../artifacts/qa/lesson-d1-05-risk-foundations/node-verification.txt).

Final integrity result: **985 of 996 captured existing files unchanged**, exactly the eleven listed expected existing files modified, zero missing files. All four protected lesson hashes, prior Objective 1.1 catalog content, unrelated objectives/domains and seven public staged runtime copies pass. Scoped tracked diff whitespace and all four syntax checks pass (Git emits only normal LF/CRLF conversion notices). No implementation work remains for this lesson; user review is the next step.
