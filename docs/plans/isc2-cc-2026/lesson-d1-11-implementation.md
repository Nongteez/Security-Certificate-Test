# Lesson 11 — What Is the Control Doing?

Status: implemented and desktop-verified; awaiting user visual, academic and bilingual review. No Lesson 12 or Domain 2 work.

## Confirmed instructional design and execution plan

Goal: implement the roadmap's control-function lesson under1.4 and audit L10–11 against official category headings and the supplied notes. Both mandatory notes were read completely earlier in this continuing authoring session; A37–45/B6.2–6.3 reread for this unit and source hashes protected. L10 already teaches mechanism categories and mixed components. Do not repeat it in depth or invent official functional sub-objectives.

Architecture: append stable `lesson-d1-11-control-functions`; paired complete semantic blocks and bounded original white HTML/CSS/SVG compositions, full Info/reading, English controls; existing Viewer/selection/publication/V1 ownership retained. No new dependency/storage change/worktree/commit/deployment. Current workspace dirty work preserved.

A glossary-only approach would omit outcomes/limits; a dense seven-function chart would impair understanding. Chosen9-slide sequence separates effects, compares corrective/recovery and revisits one camera system interactively. Complete TH/EN title/lead/rows/detailed explanation/takeaway for every slide.

| Slide / stable suffix | Learning objective / message | Source / terminology | Visual / example | Explanation boundary |
|---|---|---|---|---|
| 01-category-and-function | Explain complementary classification axes | A35/37; B6 | firewall category+function lenses | no mutually exclusive category/function labels |
| 02-preventive | Explain prevention before unwanted action | A39; B6.2 | blocked request at enforcement gate | reduced likelihood not guaranteed prevention |
| 03-detective | Explain finding evidence and alerts | A40; B6.2 | event→observation→review | logs need collection/review; detection not automatic blocking |
| 04-corrective-and-recovery | Distinguish fixing problem and restoring service | A41; B6.2 | repair/restore two-track diagram | A uses corrective broadly; overlap valid, no rigid universal boundary |
| 05-deterrent | Explain discouraging through perceived consequences | A38; B6.2 | visible camera/warning and decision | visible presence not physical stopping or guaranteed prevention |
| 06-directive | Explain communicating expected behaviour | A43; L09 | instruction→understanding→action | advice does not become mandatory merely by label; enforcement separate |
| 07-compensating | Explain justified alternative protection | A42; B6.2; NIST | legacy host without native MFA→assessed MFA gateway→evidence | comparable protection, approval/residual risk; no universal workaround |
| 08-context-changes-function | Apply multiple functions to same CCTV system | A44; B6.2–6.3 | three-context interactive feedback | visible deterrent, reviewed recording detective, alert+guard intervention combined |
| 09-reason-from-effects | Choose label using intent/operation/evidence | A45; B6.3 | annotated decision record | timeline helps but is not a universal strict sequence; L12 excluded |

Ordered execution:

- [x] Confirm roadmap/scope/dependencies, review sources and capture baseline.
- [x] Feature tests first; confirm missing lesson fails.
- [x] Author paired content, compositions and minimal integration; spec review then lifecycle/security/code review.
- [x] Focused regressions and comparison with five historical Vocabulary failures.
- [x] Dedicated production browser step:36slide cases+12context states, keyboard/language, Info/reading, selector, independent reload/Resume and10earlier lessons.
- [x] Coverage matrix with source/lesson/slide/depth/gaps; baseline/staging integrity, final report/roadmap/tracker; stop.

## Delivered lesson, sources and outcomes

Published **What Is the Control Doing?**, stable ID `lesson-d1-11-control-functions`, revision 1, exclusively Domain 1 / Objective 1.4. Catalog revision 10→11 appends this lesson without altering the ten earlier lesson summaries or objective mappings. Eleven lessons now contain **91 slides**. Nine stable IDs/order appear in the design table above. Each slide has a complete TH/EN title, lead, semantic teaching rows, detailed explanation and takeaway. Outcomes: distinguish category/function; explain seven source-supported functions; justify overlap from stated operation; evaluate evidence and limits.

Source A is `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733 lines); Source B is `ISC2 Update 2026/Domain 1/Domain 1.md` (405 lines). Both were read fully in this continuing authoring session, relevant sections reread for this lesson, and both entry hashes remain unchanged. L10 JSON, renderer, scoped CSS and report were inspected alongside the schema, catalog, course resolver, Viewer, Info and V1 progress implementation.

The [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September 1, 2026, was verified for this task: Objective 1.4 explicitly lists technical, administrative and physical controls. Functions are supporting course depth from A37–45/B6.2–6.3, not additional official headings or guaranteed exam requirements. A supplies Directive; B separately names Recovery. A's broad Corrective includes restoration, so L11 explains valid overlap instead of declaring a universal strict boundary.

[NIST compensating-controls glossary](https://csrc.nist.gov/glossary/term/compensating_controls) and [SP 800-53B control-baseline tailoring guidance](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf) corroborate equivalent/comparable protection and a documented rationale addressing the same requirement. The legacy-host/MFA-gateway example is an original candidate alternative requiring assessment, bypass checks and authorized review; it is not a certified universally acceptable workaround. [NIST recovery terminology](https://csrc.nist.gov/glossary/term/recovery) supports restoration of missions/functions, not a universal corrective/recovery taxonomy. These primary references qualify the notes; the notes remain the instructional foundation. Examples are authored teaching cases, not copied exam items.

## Visual implementation, interaction and review findings

Original trusted HTML/CSS/SVG provides two complementary lenses, a preventive enforcement flow, detective observation/review lanes, corrective/recovery tracks, a visible-camera illustration, directive instruction→application, an assessed compensating alternative, a contextual camera inspector and an annotated reasoning record. White canvas, navy type and restrained blue/teal accents remain. No generated/downloaded imagery, animation dependency or external runtime requests; `assets: []`. Inline SVG is original code, decorative and hidden from assistive technology; teaching text remains semantic.

The camera exercise uses three native English-labelled controls: **Visible camera**, **Recording review**, **Alert + intervention**. Feedback is TH/EN educational content. It explains deterrent intent, later detective evidence, and explicitly combined detective/preventive actions. It does not score a single permanent product label or imply the camera physically blocks entry. `aria-pressed`, visible keyboard focus and polite live feedback identify state. Choice survives language switching and leaving/returning to the slide within the Viewer; it is temporary interaction state, not a new persisted progress field.

The renderer is bounded by the exact lesson ID, known slide IDs and semantic block/row shape. Changed shapes use complete semantic rendering. Reading mode bypasses compositions and retains all text; Lesson Info exposes every explanation including slide 1. Existing Viewer owns route, stage sizing, reading scroll, controls, resize/fullscreen and progress. The new module has no timers, observers or async work. Its AbortController owns button listeners; parent abort and destroy stop them, and destroy removes the parent listener. No content is injected as HTML; only fixed, original SVG markup uses `innerHTML`. CSS selectors are scoped to `.learning-functions-slide`; no older lesson CSS or global shell layout changed.

Sequential specification/code review found and addressed:

- Full explanations 8–9 initially included implementation/delivery status. Replaced it with educational reasoning, and corrected an unnatural Thai adoption phrase in slide 6. Revised explanations were inspected in the production reading view.
- The first compensating explanation was too abstract for the required realistic example. Added a legacy host without native MFA, an assessed restricted MFA gateway, direct-path/privilege/monitoring checks and explicit equivalence/authorization limits in both languages. Reinspected slide 7 at all four required viewport/language combinations and its full explanation in both languages.
- Twelve initial regression failures were old global catalog-count/last-item assumptions after adding lesson 11. Updated only explicit catalog membership/count expectations and made L10 selection explicit now that 1.4 has two lessons. Older lesson slide counts, IDs, teaching assertions and integrity hashes remain intact. No test was deleted or weakened to conceal a defect.

No remaining new code, layout, listener-cleanup, publication or progress defect was found within the verified scope. Technical, bilingual and rights review metadata explicitly identifies **self-review; user review pending**. There was no independent academic reviewer.

## Exact files for this task

Paths below are relative to `D:\_Coding\SEC-CERT-TEST`. This is a comparison with the captured task-entry baseline, not a claim that all current Git changes belong to L11.

Created implementation/documentation files:

1. `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`
2. `js/ui/learning/control-functions-presentations.js`
3. `css/learning-control-functions.css`
4. `tools/verify-learning-control-functions.mjs`
5. `docs/plans/isc2-cc-2026/lesson-d1-11-implementation.md`

Modified existing files:

1. `content/isc2-cc-2026/learning/published/catalog.json` — appended L11; revision 11.
2. `index.html` — scoped stylesheet link.
3. `js/ui/learning/renderers.js` — bounded L11 dispatch and host class.
4. `js/ui/learning/lesson-info.js` — L11 full explanations.
5. `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md` — actual delivery and coverage audit.
6. `docs/plans/task.md` — task 84, complete awaiting review.
7. `tools/verify-learning-assessment.mjs`
8. `tools/verify-learning-catalog.mjs`
9. `tools/verify-learning-control-categories.mjs`
10. `tools/verify-learning-frameworks.mjs`
11. `tools/verify-learning-governance.mjs`
12. `tools/verify-learning-non-repudiation.mjs`
13. `tools/verify-learning-privacy.mjs`
14. `tools/verify-learning-risk-foundations.mjs`
15. `tools/verify-learning-risk-response.mjs`

Items 7–15 update catalog expansion expectations; L10 also explicitly selects its own lesson. No package manifest/lockfile, framework, schema or storage migration. Dependencies: existing native ESM/DOM/CSS/SVG, AbortController and application modules; Node built-ins for tests, Python standard library for local authoring/integrity, existing local preview utility and CUA for desktop QA. No dependency installed.

New QA evidence is confined to `artifacts/qa/lesson-d1-11-control-functions/`. [Delivery manifest](../../../artifacts/qa/lesson-d1-11-control-functions/delivery-manifest.json) enumerates every evidence file as well as the exact created/modified files. It includes baseline/catalog snapshots, authoring script, red/initial/final logs, 36 slide screenshots, 12 context screenshots, supporting Info/reading/selector/resume/old-lesson screenshots, DOM measurements, functional observations, bank counts and integrity script/results. Temporary production staging was synchronized in the existing ignored `.learning-preview/run-b3342e54-93b0-41e5-a4cd-e2453d24309b` folder; it is not deployed output.

## Actual production browser QA

CUA inspected the real production `index.html` application via the existing loopback public preview at **http://127.0.0.1:4188/**, not a fixture comparison page. Browser interactions, DOM/AX observations and screenshots were used; static tests are not presented as visual verification. Every screenshot below was captured and inspected. No mobile/tablet QA was performed.

| Production viewport | TH slides 1–9 | EN slides 1–9 | TH camera states 0–2 | EN camera states 0–2 |
|---|---|---|---|---|
| 1366×768 | 9/9 inspected | 9/9 inspected | 3/3 inspected | 3/3 inspected |
| 1920×1080 | 9/9 inspected | 9/9 inspected | 3/3 inspected | 3/3 inspected |

All 48 recorded cases remained in presentation mode. Measured stage: **1187.55×668** at 1366×768; **1742.22×980** at 1920×1080. Stage scroll dimensions matched client dimensions; no text/button/footer was outside the stage. Minimum main/footer gap was **15.41 px** (22.61 px on larger viewport). These DOM measurements supplement actual screenshot inspection of text hierarchy, Thai wrapping, illustration clarity, footer separation, feedback and toolbar accessibility. No forced text shrinking, clipping or composition fallback was needed. Revised slide 7 replaced its four earlier screenshots after reinspection; other presentation blocks were unchanged by the explanation-only edits.

All 36 slide images use `{1366|1920}-{th|en}-slide-{01..09}.jpg`; all 12 feedback images use `{1366|1920}-{th|en}-context-{0..2}.jpg` in the QA folder. Representative screenshots:

- [1366 TH category/function](../../../artifacts/qa/lesson-d1-11-control-functions/1366-th-slide-01.jpg)
- [1366 EN corrective/recovery](../../../artifacts/qa/lesson-d1-11-control-functions/1366-en-slide-04.jpg)
- [1366 EN compensating example, final](../../../artifacts/qa/lesson-d1-11-control-functions/1366-en-slide-07.jpg)
- [1920 TH compensating example, final](../../../artifacts/qa/lesson-d1-11-control-functions/1920-th-slide-07.jpg)
- [1920 EN combined camera actions](../../../artifacts/qa/lesson-d1-11-control-functions/1920-en-context-2.jpg)
- [1920 TH reasoning record](../../../artifacts/qa/lesson-d1-11-control-functions/1920-th-slide-09.jpg)

Functional observations:

- Domain 1 / 1.4 shows **Control Categories** and **What Is the Control Doing?**. Selecting L11 and Start Learning launches its presentation directly; no Lesson Contents detour. [Selector](../../../artifacts/qa/lesson-d1-11-control-functions/objective-1-4-two-lessons.jpg).
- Native Enter activates the camera context. ArrowRight/ArrowLeft moved 8→9→8; recording-review choice remained pressed. EN/TH switching retained the choice and translated feedback while navigation stayed English. All three context outcomes were inspected at both sizes/languages.
- Slides overview shows all nine titles and selects the requested slide. Lesson Info opens all nine full explanations in TH/EN; Escape closes it. Reading mode displays complete semantic text and allows scrolling to its end; returning to presentation retains the slide. [Info TH](../../../artifacts/qa/lesson-d1-11-control-functions/lesson-info-th.jpg), [revised reading EN](../../../artifacts/qa/lesson-d1-11-control-functions/reading-revised-context-en.jpg), [full compensating TH](../../../artifacts/qa/lesson-d1-11-control-functions/reading-compensating-th.jpg), [overview](../../../artifacts/qa/lesson-d1-11-control-functions/slides-overview.jpg). Reading uses the existing scrollable article; the new presentation CSS is removed there.
- Reload returned to Home as the existing route does. Reopening Learning Center showed L11 **last viewed slide 6 of 9**, 9/9 viewed. Resume Lesson opened slide 6 directly. [Reload](../../../artifacts/qa/lesson-d1-11-control-functions/progress-after-reload.jpg), [direct Resume](../../../artifacts/qa/lesson-d1-11-control-functions/resume-slide-06.jpg). UI language follows existing application selection; no new language persistence behavior was introduced.
- All ten earlier lessons were selected and launched in the production Viewer at independent saved positions: CIA 3/8; AAA 1/7; non-repudiation 1/6; privacy 1/8; risk foundations 1/8; assessment 1/8; risk response 1/10; governance 1/9; frameworks 1/10; control categories 1/8. Returning to L11 still opened 6/9. Each has an archived `lesson-d1-XX-…-preserved.jpg` plus AX evidence in `browser-previous-lessons.json`. This is a launch/resume smoke check, not a fresh visual audit of all 82 old slides.
- No Finish Lesson acknowledgment was made for the user. Viewing all slides does not fabricate learning completion. The preview is left on L11 slide 1 TH at 1920×1080 for review.

[Measurements](../../../artifacts/qa/lesson-d1-11-control-functions/browser-measurements.json) and [functional results](../../../artifacts/qa/lesson-d1-11-control-functions/browser-functional-results.json) preserve the observations. A stale top-level REPL array initially reported incomplete case totals; the persisted measurement file contained all 48 cases. Delivery integrity validates its full set, corresponding files and counts; no fabricated observations were added.

## Automated verification and historical failures

Feature tests were written first: **5 expected failures** with the missing lesson (`node-red.txt`). Initial broad run exposed the 12 catalog-expansion expectations described above (`node-initial.txt`). After implementation, the final focused command ran **165 tests / 165 pass / 0 fail / 0 skipped**, exit 0 (`node-verification.txt`):

```powershell
$checks=@('control-functions','control-categories','frameworks','governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations') | ForEach-Object {"tools/verify-learning-$_.mjs"}
$checks+=@('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @checks
```

The five new checks cover validated publication/source scope and bilingual content; nine bounded compositions and full reading/Info; semantic shape fallback; camera feedback/translation/state/listener disposal; direct launch, failed-publication gating and preservation of all ten earlier V1 entries across a store reload. Existing suites cover old lesson behavior, Viewer/fullscreen ownership, course/progress, language boundary, Version Selection, Quiz engine and session persistence. Static responsive checks do not constitute mobile browser QA.

`node --check` passed for the new presentation module, renderer dispatcher, Info and new verification file. `git diff --check` passed; Git emitted only existing LF/CRLF normalization notices for earlier Lesson 6 files. No unrelated formatting cleanup was performed. Independent import/count of protected old-bank modules confirmed **142+65+93+156+127 = 583** questions.

Separate command:

```powershell
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
```

Actual result: **11 tests / 6 pass / 5 fail**, exit 1. The same five names and causes as the L10 baseline remain; affected inputs and tests are byte-identical to task entry. These failures are **pre-existing outdated test expectations**, not L11 regressions:

| Historical failing expectation | Evidence / current behavior |
|---|---|
| Exactly three registry entries, unavailable Vocabulary without counts/loaders | Current registry has four entries, including Learning and available 313-entry Vocabulary. |
| Vocabulary direct calls must never select/load an exam | Test spreads current available metadata into an old unavailable fixture; its expected rejection no longer matches the fixture it constructs. |
| Three-card grid, three info buttons, two disabled actions | Existing Version Selection now renders four cards and current availability. |
| Localized card/dialog copy | Current English-only application copy differs from the old localized wording expectation. |
| Unchanged old registry/dialog/hash snapshot | Fails first on the old next-bank Coming Soon/null-loader expectation; current bank is already available with 86 questions. It does not establish a new hash mismatch. |

No historical hash was updated and no Vocabulary, Quiz, registry, exam labels, scoring, source or bank file changed. `integrity-check.json` verifies entry hashes independently rather than treating this last failing test as a successful bank-integrity check. Fresh Quiz/Vocabulary browser workflows were not exercised; protection is byte comparison plus relevant focused regressions.

## Objective 1.4 coverage audit

**Complete for introductory educational coverage; self-audited, pending human academic and bilingual acceptance.** This follows concept-level mapping, not merely the existence of two lessons. “Complete” below means explained, exemplified, applied and qualified at course depth. “Needs Review” separates human acceptance from implemented coverage. Detailed product configuration, complete BC/DR and every industry taxonomy are outside this objective.

| Required concept / boundary | Source | Lesson / slide | Depth of instruction | Remaining gap | Status |
|---|---|---|---|---|---|
| Technical controls | Official 1.4; A35–36; B6.1 | L10 2,6–8 | Technology enforcement, ACL/MFA/encryption examples, bypass/implementation limits, applied classification | Human acceptance; product configuration outside scope | Complete |
| Administrative controls | Official 1.4; A36; B6.1 | L10 3,5–8 | Direction, process, training/review, ownership; human approval vs ticketing tool | Human acceptance | Complete |
| Physical controls | Official 1.4; A36; B6.1 | L10 4,6–8 | Spaces/equipment, locks/guard, electronic components and mixed badge system | Human acceptance; facility design outside scope | Complete |
| Category vs function | A35,37,44; B6.1–6.3 | L10 1,8; L11 1,8–9 | Separate implementation/effect questions; firewall can be technical and preventive/detective | None found at introductory depth | Complete |
| Managerial/operational course labels | A36 vs official/B6.1 | L10 5, full Info | Reconciles terminology without inventing a fourth official category | Other frameworks' taxonomies outside scope | Complete |
| Preventive function | A39; B6.2 | L11 2,8–9 | Unauthorized-read enforcement flow, expected result, bypass/stolen-credential limits, context during an incident | None found | Complete |
| Detective function | A40; B6.2 | L11 3,8–9 | Activity→observation→follow-through; collection/false assumptions; alert not automatically block | Detailed logging/IR operations outside scope | Complete |
| Corrective function | A41; B6.2 | L11 4,9 | Repair identified condition, investigated configuration example, source-dependent breadth and prevention overlap | No universal taxonomy asserted | Complete |
| Recovery function | B6.2; A41 broad usage; NIST recovery | L11 4,9 | Restore clean data/service, verify operation, backup existence not successful recovery; overlap explicit | Detailed BC/DR remains other objectives | Complete |
| Deterrent function | A38; B6.2 | L11 5,8 | Visible camera/warnings, intended behavior, no guarantee or physical stopping | None found | Complete |
| Directive function | A43; B7.1 context | L11 6; L09 prerequisite | Approved visitor instruction, behavior vs enforcement, guideline authority and deterrent overlap | Supporting course term, not official added heading | Complete |
| Compensating role | A42; B6.2; NIST glossary/SP800-53B | L11 7,9 | Legacy host/MFA-gateway candidate, same need/comparability, bypass/privilege/evidence, authorized decision/residual risk; monitoring alone insufficient | Actual organizational equivalence/approval cannot be decided by a teaching example | Complete |
| Context, overlapping functions and misconceptions | A44–45; B6.2–6.3 | L11 1,4–9 | Three explicit CCTV contexts, firewall actions, patch/restore examples; labels not permanent or mutually exclusive; mnemonic not universal timeline | None found | Complete |
| Complementary selection and effectiveness | A35–36,44; B6.3; L10 sources | L10 6–8; L11 7–9 | Same goal, distinct mechanisms, owner/evidence/review, combined effects and limitations | No guarantee of zero risk | Complete |
| Independent academic/bilingual/visual acceptance | User review gate | All L10–11 material and evidence | Agent technical/bilingual self-review plus actual desktop QA completed | Human sign-off has not occurred | Needs Review |

The official category list is fully taught in L10; the relevant A37–45/B6.2–6.3 function/application depth is now taught in L11. No remaining required introductory concept was identified. This is not ISC2 endorsement or an exam-readiness guarantee.

## Preservation, access and remaining work

`baseline.json` captured **1,433 files**, including earlier dirty/untracked work. Final comparison: **1,418 unchanged, 15 expected modified, zero missing**. All ten earlier lesson JSONs, their original renderers/CSS, source notes, V1 progress implementation/schema, Viewer, Quiz/Vocabulary inputs, Version Selection labels/scoring and question banks retain entry bytes. Prior catalog content is deep-equal after removing only the new L11 summary and restoring the old revision. Seven synchronized runtime/staged files match byte-for-byte. Required 36+12 screenshots and all corresponding no-overflow measurements are validated by:

```powershell
python artifacts/qa/lesson-d1-11-control-functions/verify-delivery.py
```

See [integrity results](../../../artifacts/qa/lesson-d1-11-control-functions/integrity-check.json). All uncommitted work present at task entry was preserved. No reset, clean, revert, commit or deployment occurred.

Manual review: open **http://127.0.0.1:4188/** → **Open Certification → Learning → Domain 1 → Objective 1.4** → select **What Is the Control Doing?** → **Start Learning →**. Continue Learning / Resume uses the last visited slide. The local server is the existing bounded public preview; private course-note sources and authoring fixtures are not served. The tab is left open on the first Thai slide. If the loopback process ends, recreate the normal public production preview with the repository's preview utility; do not use a fixture comparison route as delivery evidence.

Known limits: human visual/academic/bilingual sign-off remains pending; sustained native fullscreen and explicit exit were not newly verified for L11 (ownership/static regression checks pass); other browser engines, screen readers, zoom settings and OS font variations were not tested. Temporary camera choices are not persisted across page reload by design; lesson progress is. Reading/Info use the existing scrollable content containers, and reaching long explanations requires scrolling. Finish Lesson acknowledgment was intentionally not triggered for the user. Mobile/tablet and production hosting were outside scope. No unresolved new desktop defect was found.

Remaining Domain 1: L12 **Professional Conduct & Ethical Decisions**, Objective 1.5 (conduct, due care/diligence, ISC2 ethics), remains unimplemented. Earlier roadmap AI-application verification limits remain; do not infer complete Domain 1 from completion of 1.4. **Stop here for user review. Do not start Lesson 12 or Domain 2.**


## Resumed final verification — 2026-10-28

The interruption left no unfinished production implementation or educational correction. Inspected the working tree, bounded renderer, final TH/EN lesson, test assertions, report, roadmap and tracker. Preserved all completed content, IDs, layouts, storage and unrelated changes; this resumption changed documentation and added fresh verification evidence only.

Fresh run: **165/165 focused Node checks pass**, exit 0, recorded in `resumed-node-verification.txt`. The separate historical Vocabulary command remains **6 pass / 5 fail**, exit 1, in `resumed-vocabulary-verification.txt`; all five failure names exactly match the previous L11 and L10 records. Syntax checks and `git diff --check` pass (only existing earlier-file LF/CRLF notices). Delivery integrity was rerun against the original 1,433-file baseline with the same 15 expected modifications, 1,418 unchanged and zero missing; prior catalog/ten lesson preservation and seven staged runtime-file parity assertions pass.

Validated all **48 actual JPEG files**, their headers/dimensions against their recorded viewports, and the full 36-slide/12-feedback measurement set. Reopened representative final compensating-control screenshots from disk; inspected the latest bilingual explanations and existing AX/functional records for keyboard state, reload/direct Resume and ten prior lesson positions. Final legacy-host/gateway example, equivalence/bypass/authority limits, Thai directive wording and educational replacements in explanations 8–9 are present. Evidence is archived in [resumed verification](../../../artifacts/qa/lesson-d1-11-control-functions/resumed-verification.json). Expensive browser QA was **not repeated** because the prior evidence is intact and no production code/content changed. Original browser observations remain dated to the implementation run; this resumption does not claim fresh visual interaction or current preview-server/tab availability.

Objective 1.4 remains **educationally Complete, pending human academic/bilingual acceptance**: official categories are Technical, Administrative and Physical; the seven functions are explicitly supplemental, source-grounded teaching. No new introductory gap found. Known manual limitations above remain. Lesson 11 is ready for human review; Lesson 12 and Domain 2 have not started.
