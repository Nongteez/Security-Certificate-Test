# Lesson 7 — Respond, Review & Communicate Risk

Status: implemented and desktop-verified, 2026-10-27; awaiting user visual, academic and independent bilingual acceptance.

## Authorized plan and instructional design

Goal: implement roadmap L07 under Objective 1.2 and audit L05–L07 coverage, preserving all prior content and the V1 store. Architecture: new bounded trusted response renderer, scoped white HTML/CSS/SVG, existing semantic comparison/interactive blocks, catalog append and Info integration. No dependencies, build system, migration, new objective or redesign. User authorizes execution through delivery in the current workspace; no extra gate, worktree, commit or deployment.

Sources read: A (D1 sum.md) §§15–24 with focus §§22–24; B (Domain 1.md) §§5.2–5.5, §11 scenario and §14 provenance. Both mandatory notes remain accessible and were read in full during roadmap work. Official September 2026 outline §1.2 lists lifecycle and processes. NIST SP 800-39 §§3.3–3.4 and Appendix H corroborate response combinations, authority, tolerance and monitoring. No factual roadmap correction required; source A acceptance shorthand is qualified rather than copied as a universal rule. B explicitly marks appetite/tolerance supplemental.

Design choice: prefer ten focused, distinct compositions over either one dense response table plus paragraphs or an interaction-heavy quiz. Outcomes: distinguish four course response groups; justify response combinations; separate inherent/residual risk; recognize authorized, documented acceptance; compare feasible treatment costs/benefits with uncertainty; use monitoring evidence and communicate decisions.

| Slide | Message / visual | Evidence / terminology |
| --- | --- | --- |
| 1 | Four response paths around the same scenario; open 2×2 map | A22, B5.3; Avoid/Mitigate/Transfer-Sharing/Accept |
| 2 | Stop the activity vs reduce its risk; split route diagram | A22, B5.3; avoidance vs mitigation |
| 3 | Insurance changes financial allocation, not the technical event; two connected lanes | A22, B5.3; coverage/exclusions/retained risk |
| 4 | Acceptance is a decision with an owner; evidence → authority → review | A22–24, B5.3, NIST39H; documented decision, obligations |
| 5 | Same scenario before controls / with controls; unscaled before/after | B5.4, NIST39; inherent/residual, no automatic zero |
| 6 | Direction and decision limits; two-level bracket diagram | B5.5 supplemental, NIST39H; appetite/tolerance/escalation |
| 7 | Compare annual costs and benefits without false certainty; worked ledger | A22, L06 model, NIST39H; annualized net benefit, nonfinancial constraints |
| 8 | Clinic patched, evidence/approval missing: choose next action; interactive case | A23–24, B5.3–5.4; reassess and authorized review |
| 9 | Test effectiveness and reassess after changes; feedback process | A23, B5.2; indicators, trigger, scheduled review |
| 10 | Make the decision traceable; annotated risk record | A24, B5.2, NIST39; owner/status/action/review, ongoing communication |

Every slide will include complete TH/EN lead, table rows, detailed explanation and takeaway. IDs lesson-d1-07-risk-response plus ordered slide IDs are stable. Response case state is temporary, keyboard-operable, English app controls, translated feedback, abort-owned listeners. Complete semantic fallback and Info remain available.

Ordered tasks: (1) capture entry baseline and source/design plan; (2) write/run failing content, rendering, fallback, interaction and independent progress tests; (3) author JSON/renderer/CSS and narrowly integrate; (4) run regressions and inspect failures without weakening unrelated tests; (5) inspect every TH/EN production slide at both requested desktop sizes, interaction, Info, keyboard, selector, reload/Resume and prior lessons; (6) audit official/note coverage with exact slide links, finalize integrity/report/roadmap/tracker, stop for user review. No Lesson 8 or Domain 2.


## Delivered implementation and source review

Confirmed title: **Respond, Review & Communicate Risk**, Domain 1 / Objective 1.2. Stable ID **lesson-d1-07-risk-response**, revision 1, ten ordered slides. New published catalog revision 7 appends L07 after L05 and L06 without changing prior summaries. Production course/viewer/progress architecture remains in place; the new unit adds no official objective number.

Source A, [D1 sum.md](../../../ISC2%20Update%202026/Domain%201/D1%20sum.md) §§22–24, supplies responses, cost/benefit considerations, review triggers and reporting. Source B, [Domain 1.md](../../../ISC2%20Update%202026/Domain%201/Domain%201.md) §§5.2–5.4, supplies response distinctions and inherent/residual risk; §5.5 explicitly marks appetite/tolerance supplemental. Both mandatory files were accessible; relevant passages and L05–L06 full instructional details were inspected before authoring. Earlier complete source review remains documented in the roadmap. The current [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) was checked on 2026-10-27: effective September 1, 2026, Objective 1.2 lists lifecycle and processes. [NIST SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) §§3.3–3.4 and Appendix H were consulted to qualify response selection, authority, tolerance and ongoing monitoring. NIST is corroboration, not an extra mandated CC framework.

Reconciliation: A’s low probability/high treatment cost acceptance examples are considerations, not automatic authorisation. B’s appropriate decision requirement is retained. The four course groups combine sharing/transfer; other frameworks may separate them. Avoidance concerns the specified activity, not every organisational risk. Insurance coverage does not remove the technical event or automatically transfer every duty. Inherent baseline is stated, residual is not automatically accepted, and control price is not subtracted from risk. No roadmap factual correction was necessary; the existing source cautions were applied.

Learning outcomes are implemented in the lesson metadata: distinguish and justify response options/combinations; explain inherent/residual risk and acceptance authority; evaluate feasible cost/benefit and uncertainty; use evidence, review triggers and accountable communication. The annual example is authored ($10,000 − $4,000 − $3,000 = $3,000 expected net annual benefit), not invented source measurements or guaranteed savings. No promised exam question or mandatory formula is claimed.

## Slide-by-slide instructional implementation

Each slide has a complete paired TH/EN lead, meaningful table rows, detailed explanatory paragraph and takeaway in the [lesson JSON](../../../content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json). Full detail is accessible in reading mode and Lesson Info. The initial design table above records the teaching messages, terminology, source evidence and compositions; the following table records the learning objective and actual stable ID.

| # / stable slide ID | Learning objective and supporting explanation | Actual visual / source |
| --- | --- | --- |
| 1 / slide-01-four-response-paths | Distinguish four response groups and explain combinations; not a universal required count | Four open response paths with original stop/shield/share/decision SVG; A22, B5.3 |
| 2 / slide-02-stop-or-reduce | Apply avoidance vs mitigation to an optional clinic connection; explain business trade-offs and retained risk | Two routes with termination/continuation marks; A22, B5.3 |
| 3 / slide-03-share-the-consequences | Separate technical event from financial arrangement; explain coverage limits, exclusions and retained duties | Two distinct lanes and combination takeaway; A22, B5.3 |
| 4 / slide-04-authorize-acceptance | Explain informed acceptance, appropriate authority, scope/rationale and review; reject silent closure | Evidence → authority → review flow; A22–24, B5.3, NIST39H |
| 5 / slide-05-risk-that-remains | Explain inherent vs residual against the same baseline; distinguish remaining from approved | Unscaled before/with-controls comparison, no fabricated reduction chart; B5.4 |
| 6 / slide-06-use-organisational-limits | Distinguish supplemental appetite/tolerance and identify when to escalate | Broad direction and indented specific-boundary diagram; B5.5, NIST39H |
| 7 / slide-07-compare-treatment-value | Compare annual expected reduction and annualised total cost; retain uncertainty, feasibility and obligations | Three-line monetary ledger with explicit units and qualified result; A22, L06 model, NIST39H |
| 8 / slide-08-clinic-decision | Choose evidence/reassessment and authorised review when a patch record alone is insufficient | Three-choice case with translated reasoning, no score; A23–24, B5.3–5.4 |
| 9 / slide-09-monitor-and-reassess | Explain implementation vs effectiveness evidence and scheduled/event-triggered review, including accepted risk | Three-part feedback process; A23, B5.2, NIST39§3.4 |
| 10 / slide-10-communicate-the-decision | Produce decision-ready information with evidence, owners, approval, deadlines and triggers | Annotated clinic risk record, not a mandatory template; A24, B5.2 |

## Architecture, assets, interaction and code review

Original local HTML/CSS/SVG is used throughout, with no downloaded imagery or runtime network asset. All SVG paths are fixed trusted code; lesson strings use text nodes. CSS is scoped to .learning-response-slide. The trusted renderer recognises only the new lesson ID, known slide IDs and expected four-block/table shape. Unexpected future block changes use the complete semantic renderer. Existing viewport fitting, reading fallback, toolbar, fullscreen, route and progress ownership remain in their original modules.

The case uses three native English-labelled buttons and translated feedback. aria-pressed indicates the selected choice; a polite live region announces feedback. Enter works; arrow keys on a button do not trigger slide navigation. Only a temporary choice field is used, surviving language repaint and resetting on full reload. AbortController owns listeners; parent abort linkage is removed on destroy. The stale-button test confirms disposal. There are no new timers, observers, background work, storage fields, framework, migration, build system or dependencies.

Structured spec and code-quality self-review checked publication guards, content equivalence, source qualifications, formula units, safe strings, CSS scope, semantic fallback, listener cleanup, navigation and progress isolation. Initial validation caught missing per-slide review metadata and table headers using the wrong schema key; these were corrected to the established review and columns fields before production QA. First English 1366 response-map review found split two-digit numbers; a scoped nowrap rule fixed the defect and the corrected EN/TH slide was recaptured. No old lesson composition was redesigned. No unresolved implementation defect was found; independent human review remains pending.

## Production browser QA — actually performed

The normal production application (index.html + js/app.js) was exercised in bounded public staging at http://127.0.0.1:4188/, not the fixture preview. All **40 required cases** were captured and visually inspected: ten slides × TH/EN × 1366×768/1920×1080. All stayed in presentation mode, had equal client/scroll dimensions, no measured essential text outside the stage and positive main/footer separation. Approximate stages were 1187.55×668 and 1742.22×980 respectively, with minimum separation 15.41 px. Static tests are not treated as visual proof.

Additional actual checks:

- All three case feedback branches inspected in both languages at both desktop sizes. Correct review branch keyboard-activated; choice retained across TH/EN. ArrowLeft on the case button stayed on the slide; ArrowRight on the focusable presentation workspace advanced to monitoring.
- All ten full Info entries available. Thai acceptance detail and English cost/benefit detail opened, with English application/navigation labels. English reading mode exposed the complete scenario explanation and returned to presentation.
- Three selectable lessons under 1.2; selecting L07 opens the presentation directly. The four old 1.1 lessons remain selectable and empty 1.3–1.5 objectives remain Coming Soon.
- Full reload retained L07 7/10, ten slides viewed and zero acknowledged completions. Resume returned directly to 7/10. The case selection was reset after full reload, as designed.
- Actual old-lesson launches retained CIA 3/8, AAA 1/7, Non-repudiation 1/6, Privacy 1/8, Risk Foundations 1/8 and Assessment 1/8. L06’s first-slide position matches the previous delivery’s final review state. Returning to L07 retained its independent position before leaving first TH slide ready for review. No browser storage was seeded or cleared.
- No captured console errors. Viewport override reset and production tab retained for user review. No mobile/tablet QA.

[Functional evidence](../../../artifacts/qa/lesson-d1-07-risk-response/browser-functional-results.json) and [geometry](../../../artifacts/qa/lesson-d1-07-risk-response/browser-measurements.json). Fullscreen ownership/source is unchanged and covered by existing static regression checks; no new native-fullscreen visual verification is claimed. Other browsers, zoom, assistive technology and independent bilingual/academic acceptance remain review limitations.

## Objective 1.2 completion audit

**Status: Complete — educational coverage against the current official headings and supplied notes, self-audited; human acceptance pending.** This conclusion follows the coverage table, not merely the existence of L07. Official 1.2 names risk-management lifecycle and processes without a detailed mandated formula/taxonomy list. Rows below distinguish those headings from their course supporting concepts. “Complete” means the beginner unit explains and applies these concepts, not ISC2 endorsement, guaranteed exam readiness or full Domain 1 completion.

| Required/supporting concept | Official mapping | Source | Teaching lesson / exact slide | Coverage depth / status | Remaining gap |
| --- | --- | --- | --- | --- | --- |
| Continuous lifecycle, context and feedback | 1.2 lifecycle | A15,23–24; B5.2 | L05 slide-05-continuous-lifecycle; L07 slide-09-monitor-and-reassess, slide-10-communicate-the-decision | Definition, flow, scenario and ongoing review — Complete | None identified for this boundary |
| Identification: assets, threats, vulnerabilities, potential impacts | 1.2 processes | A16; B1,5.2 | L05 slide-01-potential-harm through slide-03-separate-the-terms; slide-06-write-a-risk-statement | Applied causal scenario, distinction, risk record — Complete | None identified |
| Likelihood/impact and meaningful assessment criteria | 1.2 processes | A17–21; B5.1 | L05 slide-04-likelihood-and-impact; L06 slide-01-choose-the-method, slide-02-define-the-criteria | Qualitative/quantitative distinctions, explicit criteria, uncertainty — Complete | No universal matrix invented |
| AV, EF, SLE, ARO, ALE and units | Course support for 1.2 assessment, not separately mandated calculation | A17–21 | L06 slide-03-estimate-one-loss through slide-05-annualize-the-loss | Definitions, worked arithmetic, frequency vs probability and annual vs single event — Complete | Formula is course enrichment |
| Prioritisation and estimation limits | 1.2 processes | A17–24; B5.1 | L06 slide-06-compare-like-with-like, slide-07-test-the-estimate, slide-08-prioritize-with-context | Comparable scopes, interactive sensitivity, wider harm — Complete | No guarantee of numerical precision |
| Avoidance vs mitigation | 1.2 response process, course taxonomy | A22; B5.3 | L07 slide-01-four-response-paths, slide-02-stop-or-reduce | Definitions, purpose, optional connection scenario and trade-offs — Complete | None identified |
| Sharing/transfer and retained exposure | 1.2 response process, course taxonomy | A22; B5.3 | L07 slide-03-share-the-consequences | Insurance example, limits, technical/financial distinction and combination — Complete | Specific contracts outside scope |
| Informed acceptance and authority | 1.2 response process | A22–24; B5.3 | L07 slide-04-authorize-acceptance, slide-08-clinic-decision | Evidence, rationale, owner/authority, conditions, obligations and applied case — Complete | Human acceptance of teaching remains pending |
| Inherent vs residual risk | Course support for 1.2 processes | B5.4 | L07 slide-05-risk-that-remains | Explicit baseline, applied MFA example and misconceptions — Complete | No fabricated risk reduction |
| Appetite/tolerance and escalation | Supplemental course terminology, not separately listed by official 1.2 | B5.5 explicitly supplemental | L07 slide-06-use-organisational-limits | Qualified definitions, organisational criteria and escalation — Complete for supplement | Not claimed mandatory subtopic |
| Treatment feasibility, costs, benefits and remaining risk | 1.2 response process, supporting financial model | A22; L06; NIST39H corroboration | L07 slide-07-compare-treatment-value | Consistent annual ledger, uncertainty, total costs and nonfinancial constraints — Complete | Not a full investment analysis |
| Monitoring, review and reassessment | 1.2 lifecycle/processes | A23; B5.2 | L05 slide-07-review-after-change; L07 slide-09-monitor-and-reassess | Effectiveness evidence, scheduled/event review, accepted-risk review — Complete | Organisation-specific thresholds intentionally not prescribed |
| Communication, reporting and follow-through | 1.2 lifecycle/processes | A24; B5.2 | L05 slide-08-communicate-for-a-decision; L07 slide-10-communicate-the-decision | Decision-ready record, owners, status, rationale, deadlines and continuous communication — Complete | No mandated register template invented |

No missing required concept was found against the current 1.2 headings and mandatory notes. The status should be revisited if human academic review identifies an accuracy issue or the outline changes. Domain 1 remains incomplete: 1.3 governance (L08–09), 1.4 controls (L10–11), 1.5 conduct/ethics (L12) remain planned; broader AI application limits in the roadmap still apply. No Lesson 8 or Domain 2 work was started.

## Automated checks and failure investigation

Fresh focused run: **145 tests, 145 pass, 0 fail**, exit 0; includes six L07 checks for content/publication, both-language ten compositions and full explanations, semantic fallback, interaction/state/disposal, seven-lesson independent progress/direct selection and annual arithmetic consistency. Existing Quiz engine 7/7 and session persistence 8/8 internal assertions also pass, preserving the original 583-question bank (142/65/93/156/127). Four node --check commands pass for the new renderer/test and the two modified dispatcher/Info modules.

~~~powershell
node --test tools/verify-learning-risk-response.mjs tools/verify-learning-assessment.mjs tools/verify-learning-risk-foundations.mjs tools/verify-learning-privacy.mjs tools/verify-learning-non-repudiation.mjs tools/verify-learning-aaa-mfa.mjs tools/verify-learning-catalog.mjs tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-integration.mjs tools/verify-learning-phase2.mjs tools/verify-learning-viewer.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-visuals.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-cia-presentations.mjs tools/verify-ui-language-boundary.mjs tools/verify-version-selection-layout.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
~~~

[Fresh output](../../../artifacts/qa/lesson-d1-07-risk-response/node-verification.txt). The initial expanded regression run had seven failures due to six-lesson/last-L06/two-lesson 1.2 expectations. They were narrowly updated to seven IDs and three choices, retaining old lesson content assertions. L05 gating now explicitly verifies 1.2 stays available when either later lesson is valid and disables only when all three fail. No expected academic hash was changed. [Initial failures](../../../artifacts/qa/lesson-d1-07-risk-response/node-initial-regression.txt), [test-first failures](../../../artifacts/qa/lesson-d1-07-risk-response/node-red.txt).

Additional legacy Vocabulary run remains **11 tests: 6 pass, 5 fail** (exit 1):

~~~powershell
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
~~~

[Current failure evidence](../../../artifacts/qa/lesson-d1-07-risk-response/vocabulary-verification.txt). These were re-investigated rather than assumed harmless. All five fail in the unchanged historical exam-vocabulary test; registry, screen-versions, Vocabulary implementation/data, old snapshot and imported core dependencies remain identical to the pre-L07 baseline. Consequently they cannot be caused by L07’s new code. Their specific outdated assumptions are:

| Failure / assertion | Actual evidence and conclusion |
| --- | --- |
| Registry exactly three IDs and unavailable Vocabulary, line 38 | Existing four IDs include Learning Slides; Vocabulary is already available. Obsolete expected registry shape; pre-existing. |
| Vocabulary must never invoke selection, line 58 | Existing screen intentionally permits available type=vocabulary selection and routes it separately; fixture callback rejects that valid entry path. Obsolete unavailable-feature fixture; pre-existing. No exam-bank load introduced by L07. |
| Three-card screen/two disabled actions, line 63 | Existing UI has four entries and available features, so 4 ≠ 3. Obsolete layout/availability expectation; pre-existing. |
| Old translated card sentence, line 101 | Test expects old card copy/localisation; existing application card copy is English-only and differs. Obsolete copy expectation; pre-existing, not proof that educational translations broke. |
| Historical registry/core hashes, line 138 | Fails at deep equality of old next-bank Coming Soon metadata against the existing available 86-question registry, before the hash loop. Obsolete snapshot expectation; pre-existing. No hashes were updated to suppress it. |

Current filter checks and full-form/313-entry integrity checks pass. These results do not claim the entire old Vocabulary suite is green, and do not prove every historical design decision was correct; they establish why these five assertions are not new L07 regressions. Unrelated Vocabulary tests/implementation were left unchanged. No new browser verification of Quiz/Vocabulary is claimed; unchanged-source/data checks and relevant Node regressions support preservation.

## Exact files created and modified

Created:

- content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json
- js/ui/learning/risk-response-presentations.js
- css/learning-risk-response.css
- tools/verify-learning-risk-response.mjs
- docs/plans/isc2-cc-2026/lesson-d1-07-implementation.md

Existing files modified for L07:

- content/isc2-cc-2026/learning/published/catalog.json
- index.html
- js/ui/learning/renderers.js
- js/ui/learning/lesson-info.js
- tools/verify-learning-catalog.mjs
- tools/verify-learning-non-repudiation.mjs
- tools/verify-learning-privacy.mjs
- tools/verify-learning-risk-foundations.mjs
- tools/verify-learning-assessment.mjs
- docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md
- docs/plans/task.md

Additional output is the QA directory artifacts/qa/lesson-d1-07-risk-response containing baseline/catalog snapshots, screenshots, browser measurements/functional results, test logs and integrity JSON; seven ignored public staging runtime copies were synchronised. No new dependencies. No unrelated source files, Quiz, Vocabulary, scoring, bank, V1 progress store, Viewer/controller or old lesson content/assets were modified.

[Entry baseline](../../../artifacts/qa/lesson-d1-07-risk-response/baseline.json): **1115 existing files** captured before L07 edits, including previous uncommitted L06 delivery. [Integrity result](../../../artifacts/qa/lesson-d1-07-risk-response/integrity-check.json): **1104 unchanged**, exactly eleven intended existing files modified, no missing or unexpected changes. All six old lesson hashes, Objective 1.1, the original L05/L06 summaries, empty objectives/other domains, legacy Vocabulary dependencies and seven staged public runtime copies pass. Existing sec_cert_learning_progress_v1, schema, IDs and order are preserved. No reset, revert, clean, commit or deployment performed.

## Manual review and remaining limitations

Open [local production preview](http://127.0.0.1:4188/) → Open Certification → Learning → Domain 1 → Objective 1.2 → choose Respond, Review & Communicate Risk → Start Learning. Switch TH/EN, use Slides and Info, and compare all three choices on slide 8. Resume opens the saved presentation directly.

All required desktop cases and lesson functionality above are verified. Human academic, natural-Thai and visual acceptance is the next step; review metadata identifies Codex self-review honestly. Native fullscreen, other browser engines, zoom and assistive-technology visual QA were not newly performed; mobile/tablet work is outside scope. The financial model and clinic case are authored teaching examples, not an actual policy, assessment or exam question. Stop for user review: no Lesson 8 or Domain 2 implementation.

## Screenshot matrix

| Slide | 1366 TH | 1366 EN | 1920 TH | 1920 EN |
| --- | --- | --- | --- | --- |
| 1 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-01.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-01.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-01.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-01.jpg) |
| 2 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-02.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-02.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-02.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-02.jpg) |
| 3 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-03.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-03.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-03.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-03.jpg) |
| 4 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-04.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-04.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-04.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-04.jpg) |
| 5 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-05.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-05.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-05.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-05.jpg) |
| 6 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-06.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-06.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-06.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-06.jpg) |
| 7 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-07.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-07.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-07.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-07.jpg) |
| 8 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-08.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-08.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-08.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-08.jpg) |
| 9 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-09.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-09.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-09.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-09.jpg) |
| 10 | [1366-th](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-slide-10.jpg) | [1366-en](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-slide-10.jpg) | [1920-th](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-slide-10.jpg) | [1920-en](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-slide-10.jpg) |

Supporting captures: [1366-th-case-review](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-case-review.jpg), [1366-en-case-review](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-case-review.jpg), [1366-th-case-close](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-case-close.jpg), [1366-en-case-close](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-case-close.jpg), [1366-th-case-insurance](../../../artifacts/qa/lesson-d1-07-risk-response/1366-th-case-insurance.jpg), [1366-en-case-insurance](../../../artifacts/qa/lesson-d1-07-risk-response/1366-en-case-insurance.jpg), [1920-th-case-review](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-case-review.jpg), [1920-en-case-review](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-case-review.jpg), [1920-th-case-close](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-case-close.jpg), [1920-en-case-close](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-case-close.jpg), [1920-th-case-insurance](../../../artifacts/qa/lesson-d1-07-risk-response/1920-th-case-insurance.jpg), [1920-en-case-insurance](../../../artifacts/qa/lesson-d1-07-risk-response/1920-en-case-insurance.jpg), [objective-1-2-three-lessons](../../../artifacts/qa/lesson-d1-07-risk-response/objective-1-2-three-lessons.jpg), [lesson-info-th](../../../artifacts/qa/lesson-d1-07-risk-response/lesson-info-th.jpg), [lesson-info-en](../../../artifacts/qa/lesson-d1-07-risk-response/lesson-info-en.jpg), [reading-mode-en](../../../artifacts/qa/lesson-d1-07-risk-response/reading-mode-en.jpg), [progress-after-reload](../../../artifacts/qa/lesson-d1-07-risk-response/progress-after-reload.jpg), [resume-slide-07](../../../artifacts/qa/lesson-d1-07-risk-response/resume-slide-07.jpg), [cia-progress-preserved](../../../artifacts/qa/lesson-d1-07-risk-response/cia-progress-preserved.jpg), [aaa-progress-preserved](../../../artifacts/qa/lesson-d1-07-risk-response/aaa-progress-preserved.jpg), [non-repudiation-progress-preserved](../../../artifacts/qa/lesson-d1-07-risk-response/non-repudiation-progress-preserved.jpg), [privacy-progress-preserved](../../../artifacts/qa/lesson-d1-07-risk-response/privacy-progress-preserved.jpg), [risk-foundations-progress-preserved](../../../artifacts/qa/lesson-d1-07-risk-response/risk-foundations-progress-preserved.jpg), [assessment-progress-preserved](../../../artifacts/qa/lesson-d1-07-risk-response/assessment-progress-preserved.jpg).

Final verification: 64 screenshots saved (40 required slide cases plus 24 functional/interaction captures); all 75 local report links resolve. Four syntax checks and tracked git diff --check pass, with only normal LF/CRLF conversion notices. Entry-baseline comparison rechecked after documentation: eleven expected existing changes, zero unexpected changes or missing files. Task stopped for user review.
