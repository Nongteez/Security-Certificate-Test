# Domain 1 remediation — Phase 2: D1-F01 AI applications

Date: 2026-10-28. Status: **Implemented and targeted verification complete; ready for human review. D1-F01 resolved for introductory educational coverage, assistant self-reviewed.** Human academic/bilingual acceptance remains separate. Authorized scope: D1-F01 only. F07–F09 and the dark-theme Info contrast issue remain deferred.

## Gap analysis and source review

The five mandatory audit/remediation reports and the two original Domain1 notes inform this plan. A §§1–6,15–24,35–36,46–51 and B §§2–8 supply the useful CIA, AAA/evidence, risk, control-category and conduct explanations. They do not explicitly teach the missing AI applications; this distinction is retained rather than attributing new examples to the notes.

The [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September1,2026, was checked again. Its Domain1 AI guidance applies CIA/training integrity, AAA/non-repudiation, ordinary governance duties, a three-category control mix, care/diligence, organizational risk appetite, transparency/non-bias and ethics. These are applications of1.1–1.5, not additional invented numbered objectives or a prediction of exam questions.

| AI application / audit state | Evidence-based scope decision |
|---|---|
| Model poisoning / Missing | Explain malicious training-label changes → misleading learned relationships → unreliable results even while online. Show protective review/version/provenance checks and their limits. |
| Automated action traceability / Missing | Trace one ticket AI service credential → scoped resource/action permission → protected event. Distinguish service identity, responsible human oversight and bounded signature evidence. |
| Control mix / Partial | Apply administrative, technical and physical/provider safeguards to the same ticket AI's data/service; no category-to-CIA one-to-one promise. |
| Adoption care/diligence / Partial | Connect permission to deploy, risk boundaries, relevant duties, evidence, transparency, potentially unfair outcomes, responsible owner and continuing review. No automatic fairness or compliance guarantee. |
| Training privacy / Complete | Preserve L04 slide8 and its complete explanations. Cross-reference rather than repeat privacy law. |
| AI in GRC / Complete | Preserve L08 slides7–8; connect the new adoption case to the existing applicability intake. |

Technical sources: [NIST AI100-2e2025](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf) and [NIST Dioptra explanation](https://pages.nist.gov/dioptra/explanation/dioptra-motivation/why-dioptra.html) corroborate malicious training-data manipulation; [AI RMF trustworthiness](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/) and [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) support context-sensitive risk, documentation and ongoing review. Existing AAA sources and FIPS186-5/key-management references retain the credential/permission/record and key/identity evidence limits. NIST guidance is supporting technical material, not an assertion that its entire framework is mandated by ISC2.

## Small implementation plan — before code edits

Chosen approach: append two application slides within existing lessons and extend two existing application slides. Info-only additions would hide missing teaching from the main presentation; a separate lesson would add unnecessary curriculum/architecture. Preserve the101existing IDs and relative order; Domain1 becomes103slides in12lessons. Reuse current white compositions and validated data/rendering contracts; no new CSS, framework, schema, storage or shared renderer registry is planned.

1. **L01 CIA:** append `slide-09-ai-training-integrity`. Reuse the existing three-stage incident diagram with a narrowly selected AI title/kicker. Data contains the full causal chain, safeguards and limits. Existing eight slides—including Phase1 corrections and deferred F07/F09 text—remain educationally unchanged.
2. **L03 Non-repudiation:** append `slide-07-ai-action-evidence`. Reuse the existing three-row evidence composition. Show Authentication, Authorization and Accounting for `triage-bot` updating ticketT-104, then explain protected/signed-record and human-intent limits. Link back to L02 and existing L03 conditions; no new interaction mechanism is necessary.
3. **L10 controls, `slide-06-one-goal-three-controls`:** extend the current shared-goal diagram to the ticket AI data/service. Keep the original generic explanation in full text and append the concrete AI application. Include a provider/physical boundary and explicit limitations.
4. **L12 conduct, `slide-10-defensible-decisions`:** extend the current decision record with an AI ticket-service adoption case. Retain the original AI-report example; add authorized review within risk appetite, obligations, transparency, potentially unfair outcomes and review/stop conditions.
5. Advance only these four lesson revisions/review stamps and their Domain1 catalog entries. Read the latest catalog immediately before writing; deep-check all Domain2 and other unaffected entries remain equal. Preserve concurrent revision17 content, then advance the overall revision. The only necessary shared UI edit is making CIA and Non-repudiation Info section counts reflect actual slide counts; preserve all Domain2 branches verbatim. New cases remain in their existing lesson-local renderers.
6. Write failing content/renderer/progress/preservation tests first. Retain the original177-check entry baseline and14known global-catalog expectation failures. Update only intentional affected lesson-count/content locks after verifying preserved fields; do not make unrelated global-count assertions pass by restoring12or dropping Domain2. Add independent guards for Domain2 bytes/catalog entries and original101IDs.
7. Run focused academic/schema/Info/reading/compatibility checks, existing regressions and affected Domain2 integration tests where practical. Target the four affected slides at1920×1080/1366×768 TH/EN, plus full explanations and reload/Resume. Reuse existing interaction mechanisms; do not claim visual checks from static tests.
8. Complete this report with exact added content, reviewed bilingual reasoning, commands/results, screenshot manifest, preservation/diff checks, closure and limitations. Update the remediation plan, roadmap and tracker only with verified outcomes. Stop for human review; no F07–F09/UI cleanup or Domain2 work.

## Entry protection

Fresh task-entry hash snapshot:1,752files, including all dirty/untracked Domain2 work, previous Phase1 evidence and the original notes. Exact original affected lesson/catalog copies are in `artifacts/qa/domain-1-remediation-phase-2/`. No reset, revert, clean, commit or worktree switch is part of this task.

## Implementation and verification outcomes

### Content and academic closure

| Location | Before → after | Academic justification and limits |
|---|---|---|
| L01, new `slide-09-ai-training-integrity` | No explicit poisoning application → a three-stage ticket-training diagram: malicious relabelling, misleading learned relationships, unreliable results despite online service. | Direct Integrity consequence; ordinary prediction error does not establish an attack. Restrict writes, review provenance/change evidence, protect trusted versions and test representative cases. A matching protected digest does not establish training quality, accuracy or fairness. Confidentiality and Availability still need their own controls. |
| L03, new `slide-07-ai-action-evidence` | Human-oriented evidence only → one AI service action traced through Authentication, Authorization and Accounting. | `triage-bot` may set T-104 priority, not edit billing. Event `evt-204` records actor/action/target/time/result; retain appropriate denied attempts, model/configuration context and required approval evidence. A service identity is not a named human. Signed protected records support integrity/key origin and bounded non-repudiation with identity/key custody/trust conditions; they do not alone prove human intent, actual approval or legal liability. Distinguish a suggestion from its executed action, and control log access/retention without excess sensitive content. |
| L10, existing `slide-06-one-goal-three-controls` | Generic shared-goal record service → concrete ticket-AI training/service control mix. | Administrative change approval/access review, technical write restrictions/protected versions/logs/trusted-case tests, physical hosting safeguards or assessment of relevant provider safeguards/responsibilities. No category-to-CIA one-to-one mapping or automatic safety/fairness guarantee. Original full explanation retained before the new application. |
| L12, existing `slide-10-defensible-decisions` | General decision record and AI-report caution → explicit before/after-adoption case. | Link L08 intake to delayed-urgent-ticket harm/data use/duties; due diligence checks provenance, representative cases and potentially unfair group/language outcomes; due care uses proportionate, authorized safeguards. Proper risk owner decides within appetite/tolerance, without waiving legal duties. Explain AI role/evidence/uncertainty/limits, record owner/approval boundaries/review date/pause triggers, monitor and reassess changes. Human review is no non-bias guarantee. Original explanation and AI-report example retained. |

L04 slide8 training-data privacy and L08 slides7–8 AI governance remain unchanged and are cross-referenced. The four additions/extensions together close all Missing/Partial AI rows identified by the original audit/matrix, rather than treating poisoning and logging as the entire finding. The same ticket-service example connects integrity, evidence, controls and accountable adoption without an additional lesson. These are original teaching scenarios applying the official outline, not official exam questions, a new mandated procedure, an exhaustive AI security curriculum or extra numbered ISC2 objectives.

During browser review, the reused flow's second security-property label was corrected from “Model poisoning” to “Model integrity”; “Model poisoning” remains explicit in the heading. The third label now states “Integrity.” The diagram and generated Reading/Info semantics were updated together. No CSS/layout redesign was needed.

### TH/EN review and content surfaces

All new and changed leads, table/diagram entries, explanatory paragraphs and takeaways have paired TH/EN content. Thai intentionally retains terms such as Training data, Model, Risk appetite, Due diligence and Non-repudiation; it follows the notes' mixed terminology rather than forced Thai-only translation. Assistant review compared the same causal claims, safeguards, limits, responsible actors and action/evidence distinctions in both languages. Human academic and native-language acceptance is still pending.

Presentation, Reading Mode and Lesson Info use the existing semantic pipeline. Full explanations add depth to the concise diagrams; no explanation was cut to fit the slide. Tests verify every paired semantic item is present in both Reading and Info, including each table cell and full paragraph. CIA/Non-repudiation Info section counts now follow actual slide totals. No new interactive question or feedback state was introduced; existing interactions and listener cleanup remain covered by the regression checks.

### Revisions, stable IDs and progress

- L01 revision2 → **3**, eight → **nine** slides; L03 revision1 → **2**, six → **seven** slides. Both additions are appended after all original IDs in the original order.
- L10 and L12 revision1 → **2**, still eight and ten slides. All four content/review revision stamps and their catalog entries agree; the catalog advances17 → **18**. Reviewer labels explicitly identify assistant review and human acceptance pending.
- Domain1 still has **12 lessons**, now **103 slides**. All **101 original slide IDs** remain in order; **99 original slides** retain every educational field. Only review-revision metadata changes on other slides within the four revised lessons. Original L10/L12 full paragraphs remain exact prefixes before the AI extensions.
- `sec_cert_learning_progress_v1` and its schema/code are unchanged. Node checks reconcile old saved CIA8/8 and evidence6/6 last positions without deleting valid visited IDs. Existing revision handling reopens revised lessons for review; newly appended slides must be visited before completion. This uses the current behavior, not a migration. Other lesson entries survive independent save/reload unchanged, including the four Domain2 lessons.
- Actual browser reload returned to Home as designed. Learning → Continue Learning → Resume opened CIA9/9 directly, then lesson selection opened evidence7/7, controls6/8 and conduct10/10 independently. Previous/Next crossed CIA8→9 and evidence6→7 successfully. Browser checks used an isolated local origin, not injected legacy completion records; old completed-store reconciliation is Node evidence.

### Automated verification actually executed

| Run | Result | Evidence |
|---|---|---|
| Original Phase1 command at Phase2 entry | **163/177 pass, 14 fail** | `entry-node.txt` |
| Eight new D1-F01 tests before implementation | **1 pass / 7 fail** | `red-node.txt` |
| Expanded original command plus eight D1-F01 tests, final | **171/185 pass, same 14 fail** | `final-node.txt` |
| Direct AI/remediation/CIA/intro/progress/AAA/viewer subset | **48/48 pass**, exit0 | `final-focused.txt` |
| Domain2 lessons1–4 academic, bilingual, custom composition and existing interaction checks1–5 | **20/20 pass**, exit0 | `final-domain2.txt` |
| Existing Vocabulary checks | **6/11 pass, same five historical failures** | `final-vocabulary.txt` |
| Entry-byte, catalog, prefix, public-stage and failure-set preservation assertions | **Pass**, exit0 | `verify-preservation.mjs`, `final-integrity.json` |

Commands from the repository root:

```powershell
$phase2Checks=@('professional-conduct','control-functions','control-categories','frameworks','governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations','academic-remediation','ai-applications') | ForEach-Object { "tools/verify-learning-$_.mjs" }
$phase2Checks+=@('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @phase2Checks
node --test tools/verify-learning-ai-applications.mjs tools/verify-learning-academic-remediation.mjs tools/verify-learning-cia-presentations.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-progress.mjs tools/verify-learning-aaa-mfa.mjs tools/verify-learning-v3-viewer.mjs
node --test --test-name-pattern='^[1-5]\.' tools/verify-learning-d2-grc-foundations.mjs tools/verify-learning-d2-grc-tools-risk-register.mjs tools/verify-learning-d2-business-continuity-bcp.mjs tools/verify-learning-d2-disaster-recovery-drp.mjs
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
node artifacts/qa/domain-1-remediation-phase-2/verify-preservation.mjs
```

The Domain2 run deliberately selects academic/rendering/interaction checks, not the historical whole-working-tree scope and previous-publication-state assertions at the end of those task-specific files. It is not a claim that every historical Domain2 suite passes. Current all16 publication/schema/reference and independent-progress checks plus entry-byte preservation provide the cross-domain safety evidence for this task.

The **14 existing failures** are classified individually in [failure-classification.json](../../../artifacts/qa/domain-1-remediation-phase-2/failure-classification.json), with entry and final logs. Twelve expect12 global published lessons and receive16; one expects exactly the twelve D1 IDs and receives the additional four D2 IDs; one assumes the final global lesson is D1-12 and receives D2-04. The final failure-name set equals the entry set. None was made to pass by deleting Domain2 or loosening assertions. The five Vocabulary failures concern its older registry/card/dialog baseline and are unchanged, unrelated and deferred.

Intentional test maintenance is narrow: advance three CIA whole-file locks to reviewed revision3 **after** independent old-field/ID preservation checks; keep the Phase1 unchanged-projection digest unchanged while excluding the explicitly added slide/references; anchor the Phase1 saved scenario to its stable ID rather than relative-to-last; use actual CIA count in viewer counters; update the local NR count6→7. Original preservation hashes are not regenerated. New guards retain the original101-ID and99-slide educational hashes and the entire outside-D1 catalog hash. There are **no new regression failures** relative to entry.

Structured final self-review used the repository's code-review checklist against the entry snapshot and this plan. Lesson-local registrations are bounded to the existing lesson IDs; the CIA AI branch preserves the original hospital branch. New cases use existing text/semantic rendering, with no HTML injection mechanism, new listeners/observers/timers, publication bypass or storage writes outside the existing progress store. Shared Info changes are limited to the two counts. Reviewed compatibility, full bilingual explanations, schema/reference validation, preserved revision behavior and the disclosed test failures. No remaining Critical/Important implementation defect was identified within this scope; this is not an independent human review or merge authorization. `git diff --check` passed, exit0; Git emitted only normal LF/CRLF conversion notices.

### Targeted browser QA actually performed

Production Viewer/runtime/publication data were copied into the bounded local public snapshot at `.learning-preview/domain1-remediation-phase2-20261028`, served only on `http://127.0.0.1:4193/`. Source and snapshot hashes match for all ten affected runtime files. No fixtures or original study notes are exposed by that snapshot. These are actual IAB viewport overrides and inspected screenshots, not sizing calculations presented as measurements.

| Changed case | 1920×1080 TH / EN | 1366×768 TH / EN | Full Reading / Lesson Info |
|---|---|---|---|
| L01 slide9, poisoning | Pass / Pass | Pass / Pass | Both languages, both sizes: Pass |
| L03 slide7, action evidence | Pass / Pass | Pass / Pass | Both languages, both sizes: Pass |
| L10 slide6, control mix | Pass / Pass | Pass / Pass | Both languages, both sizes: Pass |
| L12 slide10, adoption | Pass / Pass | Pass / Pass | Both languages, both sizes: Pass |

Total: **16 presentation +16 Reading +16 Info cases** inspected, plus reload/selection/old-last-slide navigation above. White compositions, readable text, wrapping, toolbar access, full explanations and modal scrolling passed without visible clipping/overlap. Reading/Info long content uses the existing accessible scroll behavior; screenshots often show the scrolled explanatory portion rather than the complete text at once. No new interaction branches require feedback QA; earlier lesson feedback was not unnecessarily repeated. Captured console warnings/errors: none. The temporary viewport override was reset after testing.

Screenshot references are recorded in [screenshot-manifest.json](../../../artifacts/qa/domain-1-remediation-phase-2/screenshot-manifest.json). Names use `{1920|1366}-{th|en}-{poisoning|action|controls|adoption}` with `.jpg`, `-reading.jpg` or `-info.jpg`. Final1920 poisoning reading labels are in `-reading-final.jpg`; three earlier poisoning-reading captures are explicitly marked superseded for label evidence. The unchanged long paragraph was inspected in both sizes/languages and in final Info. Browser functional results are in `browser-functional-results.json`.

Representative final captures: [1366 TH poisoning](../../../artifacts/qa/domain-1-remediation-phase-2/1366-th-poisoning.jpg), [1920 EN action evidence](../../../artifacts/qa/domain-1-remediation-phase-2/1920-en-action.jpg), [1366 EN control mix](../../../artifacts/qa/domain-1-remediation-phase-2/1366-en-controls.jpg), [1920 TH adoption](../../../artifacts/qa/domain-1-remediation-phase-2/1920-th-adoption.jpg), [reload/direct Resume](../../../artifacts/qa/domain-1-remediation-phase-2/reload-direct-resume-cia-09.jpg).

### Exact implementation files

Modified during **this Phase2**, relative to its entry snapshot (not all Git dirty files):

1. `content/isc2-cc-2026/learning/published/catalog.json`
2. `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`
3. `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`
4. `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`
5. `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`
6. `js/ui/learning/cia-presentations/index.js`
7. `js/ui/learning/cia-presentations/incident.js`
8. `js/ui/learning/non-repudiation-presentations.js`
9. `js/ui/learning/control-categories-presentations.js`
10. `js/ui/learning/lesson-info.js` — only two section-count expressions; concurrent D2 branch retained byte-for-byte.
11. `tools/verify-learning-academic-remediation.mjs`
12. `tools/verify-learning-aaa-mfa.mjs`
13. `tools/verify-learning-cia-presentations.mjs`
14. `tools/verify-learning-editorial-intro.mjs`
15. `tools/verify-learning-non-repudiation.mjs`
16. `tools/verify-learning-v3-viewer.mjs`
17. `docs/plans/isc2-cc-2026/domain-1-remediation-plan.md`
18. `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
19. `docs/plans/task.md`

Created: this report and `tools/verify-learning-ai-applications.mjs`. Additional generated evidence is confined to `artifacts/qa/domain-1-remediation-phase-2/`; [file-manifest.json](../../../artifacts/qa/domain-1-remediation-phase-2/file-manifest.json) enumerates exact evidence paths and hashes. The ignored `.learning-preview/...` directory is a derived local QA copy, not a new application/build system.

Dependencies: existing Node.js built-ins, project schema/semantic/render/progress modules, test DOM fixture and existing preview server; CUA/IAB for targeted browser checks. **No dependency, framework, CSS, schema, storage migration or shared renderer/registry change was introduced.**

### Preservation and boundaries

Final entry comparison: **1,752 existing files; 1,733 unchanged, 19 expected modifications, zero missing.** All Domain2 lesson/catalog data outside D1, staged source, modules, CSS, tests and documents retain entry bytes. The already-dirty shared `renderers.js` and `index.html` remain at entry bytes; Info differs only in the two counts. Existing bank, Quiz, scoring, Vocabulary, all CSS, storage/core/schema code, original notes and Phase1 report/evidence are unchanged. The583 protected original questions,119 updated-bank questions and403 Vocabulary entries therefore retain their entry data. All16 current published lessons validate and resolve their slide reference IDs. No reset/revert/clean/commit or unrelated change was made.

### Review instructions, remaining findings and limitations

With the loopback server running, open [local preview](http://127.0.0.1:4193/), then Open Certification → Learning → Domain1. Objective1.1 selects CIA (slide9) or Non-repudiation (slide7); Objective1.4 selects Control Categories (slide6); Objective1.5 opens Professional Conduct (slide10). `Slides` opens the overview; Info contains the full explanations. Start/Resume opens the saved slide directly. The origin has isolated QA positions; it does not overwrite a different port's learner state.

If restarting the existing bounded snapshot server:

```powershell
node --input-type=module -e "import {serveLearningPreview} from './tools/preview-learning.mjs'; await serveLearningPreview('.learning-preview/domain1-remediation-phase2-20261028',4193);"
```

**D1-F01 is resolved in implemented introductory content and targeted verification; human academic/bilingual acceptance remains pending.** F02–F06 remain resolved by Phase1 and its preservation tests. **F07–F09 remain open and unchanged.** The pre-existing Dark Theme Lesson Info contrast issue remains a separate deferred UI issue. Domain1 is not declared finally approved. Wider-suite catalog-expectation maintenance, native fullscreen, mobile/tablet, zoom, cross-browser and assistive-technology QA are not certified by this task. No Domain2 browser QA or lesson development occurred. Stop after Phase2 for human review.
