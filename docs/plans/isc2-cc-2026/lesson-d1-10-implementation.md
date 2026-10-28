# Lesson 10 — Control Categories

Status: implemented and production desktop-verified on 2026-10-27; awaiting user visual/academic/bilingual acceptance. Lesson 10 only.

## Confirmed design and execution plan

Goal: teach technical, administrative and physical controls under official Objective1.4, reconciling A35–36's four course labels with B6.1/official three categories. Both mandatory notes were read completely during this continuing authoring session; hashes will confirm they remain unchanged. L01–02 teach goals/AAA/MFA, L05–07 risk, L08–09 governance/documents. Use short connections only. L11 functions and L12 ethics remain excluded.

Architecture: one new stable `lesson-d1-10-control-categories`, reviewed paired semantic JSON and bounded original HTML/CSS/SVG module; existing catalog validation, Viewer sizing/lifecycle, Info/reading and V1 progress. No dependencies or storage migration. Current workspace dirty state preserved; no worktree/commit/deployment.

A glossary-only approach lacks decisions; one dense classification chart hides mechanisms. Selected eight-slide sequence teaches each category, reconciles terminology, then applies categories to one coherent scenario. Complete TH/EN explanations are retained in Info/reading rather than squeezed into diagrams. English application controls remain.

| Slide / stable suffix | Learning objective / message | Source / key terms | Visual / example | Full explanation scope |
|---|---|---|---|---|
| 01-category-and-purpose | Separate implementation category from function | A35; B6.1–6.3 | two-axis signpost / firewall | category vs preventive/detective brief boundary, functions deferred |
| 02-technical-enforcement | Explain technology enforcing configured rules | A36; B6.1 | access request, rule engine, outcome | MFA/encryption/ACL/firewall, people configure them; no perfect security |
| 03-administrative-direction | Explain people/process rules and oversight | A36; B6.1; L09 | approved direction → assigned process → evidence | policies, training, assessment, human approval vs software enforcement |
| 04-physical-protection | Explain space, equipment and environmental protection | A36; B6.1 | original facility boundary / door, guard, device | electronic door is physical control; logical entitlement is technical component |
| 05-course-labels | Reconcile managerial/operational support labels | A36; B6.1; official1.4 | administrative umbrella with two branches | no invented fourth official category; backups/config mix components |
| 06-one-goal-three-controls | Apply complementary categories to records service | A35–36; B6.1 | three paths to one protected record | approval, logical permissions, locked room; avoid category→CIA exclusivity |
| 07-classify-the-mechanism | Classify human access review in a scenario | A35–36; B6.1 | three-choice feedback exercise | administrative review even if recorded in software; compare enforcement/door |
| 08-select-and-check | Choose controls using mechanism, scope and evidence | A35–36; B6.3; NIST2.6 | annotated decision chain | risk fit, accountable owner, validate operation; function depth remainsL11 |

Execution checklist:

- [x] Confirm source/roadmap/official boundaries; capture baseline.
- [x] Write and observe five new feature tests fail.
- [x] Author paired content, original compositions and minimal integration; review spec then code/lifecycle/security.
- [x] Run focused regressions, investigate expected publication changes and compare historical Vocabulary failures.
- [x] Dedicated production browser step:32 required slides,12 feedback cases; keyboard/language, Info/reading, selection, independent reload/Resume and9old lessons.
- [x] Audit1.4 coverage honestly; verify baseline and staged parity; finish report/roadmap/tracker, stop.

## Delivered content and source review

Published `lesson-d1-10-control-categories`, revision1, only under Domain1 / Objective1.4. Catalog revision9→10 appends one lesson and publishes1.4. Ten lessons now contain82slides. All eight new stable slide IDs are listed in the design table above. Each has equivalent TH/EN title, lead, three-column semantic teaching rows, detailed explanation and takeaway. Complete content is available in Info/reading; concise diagrams do not replace the explanation. Four outcomes teach category/function distinction, the three mechanisms, taxonomy reconciliation and contextual choice/evidence.

Mandatory primary sources A `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733lines) and B `ISC2 Update 2026/Domain 1/Domain 1.md` (405lines) were read completely during this continuing authoring session and remain byte-identical. A §§35–36 and B §6.1 are the new instructional foundation; A §§37–45/B§6.2 function depth remains L11. Nine prior lessons, L09 report, roadmap, tracker, schema, publication, renderer/styles and V1 storage were inspected. Earlier CIA/AAA/risk/document teaching is connected briefly rather than reauthored.

Verified [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September1,2026: **1.4 Technical, Administrative, Physical**. A uses four course labels, including Managerial and Operational; B groups Administrative/Managerial. This is a taxonomy difference, already anticipated by the roadmap. Slide5 reconciles the people/process perspective without inventing an official fourth category or declaring every operational task administrative. Automated backup/configuration mechanisms can remain technical; approval/checking processes are separate components. No roadmap sequence correction needed.

[NIST SP800-12 Rev.1](https://csrc.nist.gov/pubs/sp/800/12/r1/final), §§2.4,2.6–2.7, corroborates responsibility, complementary safeguards and recurring checks; §10.11 corroborates physical/environmental scope. NIST's own taxonomy is not presented as ISC2's classification authority. The official outline defines boundaries; supplied notes define teaching depth. Supplementary examples are original, not actual exam questions. No invented configuration rule, exam frequency or guarantee.

Academic distinctions checked in both languages:

- Technology enforcing a rule vs a person approving/reviewing it; software ticket evidence does not redefine the described human process.
- Physical entry protection can use electronic equipment; badges/doors can include technical, administrative and physical components.
- A guard is not administrative merely because a human performs the control.
- Category and function answer different questions; detailed functional taxonomy is deferred.
- Categories do not map one-to-one to CIA and do not prove effectiveness.
- Source examples of backup/configuration/risk assessment must be read at the component described, not treated as permanent universal product labels.

Technical/bilingual/rights review metadata records implementation self-review with user review pending. Paired texts were checked for conceptual equivalence, technical terms and natural explanation, then actual Thai/English visual rendering was inspected. This is not independent human academic/bilingual certification.

## Visual assets, integration and code review

Eight original white HTML/CSS/SVG compositions: category/function comparison, request/rule/result flow, administrative process rows, facility boundary illustration/callouts, managerial/operational branches, three-category records-service view, interactive human-review classification, and a scope/mechanism/evidence decision record. No downloaded art, copied official diagrams, AI-generated raster, animation or runtime network asset. No new dependencies.

The new renderer accepts only the exact lesson ID, eight known slide IDs and expected semantic block/row shapes. Other data uses full semantic fallback. JSON content is inserted as text; SVG markup is fixed original geometry. Styles are scoped to `.learning-categories-slide` and `.ct-*`; existing white viewer architecture and other lesson styles unchanged. Info adds all eight English navigation labels and full localized explanations. Existing selectors, routes, publication validation, fullscreen, stage sizing, reading fallback and V1 progress implementation retain ownership.

Three native English buttons (Technical, Administrative, Physical) explain every choice with localized feedback. Buttons expose aria-pressed, visible focus and polite feedback; keyboard Enter works. Interaction is non-scored and transient; language switches retain choice, reload resets it. A per-render AbortController owns click handlers and removes the parent abort listener on destroy. No timers, observers or async/network work introduced.

Spec compliance review confirmed the scoped requirements and stop condition; code-quality review covered fallback/security, lifecycle cleanup, CSS isolation, publication, independent state and prior integration. No additional defect requiring production fixes was found; no accepted older slide was redesigned. Tests and visual review found no clipping or unnecessary fallback. No unrelated refactoring.

## Actual production desktop verification

**32/32 required cases individually captured and visually inspected**, using the staged production index/app, not the fixture preview. **12/12 feedback states** additionally inspected.

| Slides / states | 1366×768 TH | 1366×768 EN | 1920×1080 TH | 1920×1080 EN |
|---|---|---|---|---|
| Slides01–08, each | Pass8 | Pass8 | Pass8 | Pass8 |
| Three classification choices | Pass3 | Pass3; Enter activation | Pass3 | Pass3 |

Evidence folder: `artifacts/qa/lesson-d1-10-control-categories/`. Required screenshots are `{1366,1920}-{th,en}-slide-{01..08}.jpg`; feedback screenshots `{1366,1920}-{th,en}-classify-{0..2}.jpg`. [Measurement manifest](../../../artifacts/qa/lesson-d1-10-control-categories/browser-measurements.json) enumerates all44captures. Actual stages:1187.546875×668 at1366,1742.21875×980 at1920. All required slides stayed in presentation mode; no canvas overflow or essential text outside the stage; minimum main/footer gap15.40625px. Visual inspection checked hierarchy, wrapping, Thai glyphs, diagram flow and all feedback; geometry alone is not the visual verification claim.

[Functional evidence](../../../artifacts/qa/lesson-d1-10-control-categories/browser-functional-results.json):

- All choices worked; keyboard Enter activated all three at1366EN. Physical selection remained pressed after EN→TH, with translated feedback and English controls.
- Slides overview reached all eight positions. After reading return, workspace ArrowRight moved7→8; no Finish Lesson acknowledgement.
- Info exposed eight English labels; Thai slide5 full taxonomy explanation and English slide4 physical/component explanation inspected. Thai slide7 reading mode showed all rows/full text; return successful.
- Reload returned to normal Home. Learning Center showed last5/8,8/8viewed,0/10completed. Resume opened slide5 directly without Lesson Contents. Three choice buttons reset to false after reload.
- Objective1.4 launches its single lesson directly;1.1 retains four choices,1.2three,1.3two. Returning to1.4 opened independently at7/8.1.5 remains Coming Soon.
- All nine previous lessons opened at preserved positions: CIA3/8, AAA1/7, NR1/6, Privacy1/8, Foundations1/8, Assessment1/8, Response1/10, Governance1/9, Frameworks1/10. Their content, composition modules and styles byte-match the pre-L10 baseline.
- Browser error/warning query returned none. Final deliverable left L10slide1TH at1920.

Support screenshots: `lesson-info-th.jpg`, `lesson-info-en.jpg`, `reading-th.jpg`, `progress-after-reload.jpg`, `resume-slide-05.jpg`, `objective-1-4-available.jpg`, nine `*-progress-preserved.jpg` images. Sustained native fullscreen/explicit exit was not freshly verified; L09 documented in-app browser automatic return during that check. Existing fullscreen code unchanged and Node lifecycle checks pass; full native lifecycle remains manual. No mobile/tablet, other browser, screen-reader or non-default zoom QA claimed.

## Automated verification and failure investigation

Focused **160/160 pass** ([output](../../../artifacts/qa/lesson-d1-10-control-categories/node-verification.txt)). Five new feature tests first failed on missing lesson/publication before authoring ([red output](../../../artifacts/qa/lesson-d1-10-control-categories/node-red.txt)). Tests exercise scoped reviewed sources/paired content, eight distinct compositions and full Info/reading, changed-shape fallback, translated choice/cleanup and ten independent V1 records plus new1.4availability/failure gating.

```powershell
$checks = @('control-categories','frameworks','governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations') | ForEach-Object { "tools/verify-learning-$_.mjs" }
$checks += @('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @checks
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
```

Initial broad run148/160 exposed12assertions affected by appending the tenth lesson/publishing1.4: old total9 counts/list, L09last-entry assumption and CIA-only loader fixture expecting empty1.4. Updated total/list, preserve L09index8, and expect failed identity validation for the new published1.4 while1.5 stays Coming Soon. Previous lesson content/IDs/independent-entry assertions retained. No expected hashes changed or unrelated tests weakened.

Legacy Vocabulary run **11tests,6pass,5fail** ([current output](../../../artifacts/qa/lesson-d1-10-control-categories/vocabulary-verification.txt)). Compared with [L09 baseline output](../../../artifacts/qa/lesson-d1-09-frameworks/vocabulary-verification.txt); same names and assertion differences, no new failure. Legacy tests and production dependencies remain byte-identical.

| Failure | Classification and evidence |
|---|---|
| Exactly3registry entries / unavailable Vocabulary | Pre-existing outdated expectation: already4entries including Learning and313available terms. |
| Unavailable Vocabulary direct-call fixture | Pre-existing outdated fixture assumption: spreads currently available metadata; routing predates L10. |
| Three-card grid/two disabled actions | Pre-existing outdated UI availability/count. |
| Old translated card/dialog sentence | Pre-existing obsolete copy against current English application controls. |
| Historical registry/dialog/bank integrity | Pre-existing old next-bank coming-soon/null metadata vs existing available86; fails before later hash loop. Not evidence of changed banks/dialogs. |

Current filter/full-form checks pass; focused Quiz/session regressions pass. No fresh Quiz/Vocabulary browser claim. Syntax checks passed for new renderer/test and modified dispatch/Info; `git diff --check` passed.

## Objective1.4 coverage tracking

**Category teaching is Complete at introductory depth; the roadmap's broader 1.4 learning sequence remains Partial pending L11 function/application depth.** This distinction does not invent extra official headings: the official list contains three categories, all now taught. L11 is the planned source-based supporting depth, which has not been implemented here. Human visual/academic/bilingual acceptance remains pending.

| Concept | Official mapping / source | Lesson and slide | Coverage depth | Remaining gap |
|---|---|---|---|---|
| Technical controls | 1.4technical; A36,B6.1 | L10 2,6–8 | Definition, enforcement flow, ACL/MFA/encryption examples, limitations and distinction from approval — Complete | Product configuration outside scope |
| Administrative controls | 1.4administrative; A36,B6.1 | L10 3,5–8 | Direction/process/oversight, policy/training/review, component-based scenario feedback — Complete | Human acceptance |
| Physical controls | 1.4physical; A36,B6.1 | L10 4,6–8 | Facility/equipment protection, electronic lock, human guard and mixed badge components — Complete | Detailed facility design outside scope |
| Category vs function | Supporting context; A35,B6.3 | L10 1,8 | Separate questions, one firewall example — Partial supporting depth | L11 detailed function analysis |
| Managerial/operational taxonomy | Course enrichment; A36 vs B6.1/official | L10 5; full Info | Precise reconciliation; no automatic universal category for operational tasks — Complete for distinction | Not an added official category |
| Complementary mechanisms/effectiveness | Applied1.4; A35–36,B6.1,NIST2.6 | L10 6–8 | Same record-service goal, owner/evidence, no category-to-CIA exclusivity — Complete category application | Context-dependent overlapping functions remain L11 |
| Preventive/detective/corrective/deterrent/directive/recovery/compensating | Planned course support; A37–45,B6.2–6.3 | Not taught in depth by L10 | Partial/not yet developed | L11 unchanged plan |

Objectives1.2 and1.3 previously audited educational coverage remain unchanged. Domain1 remains incomplete: **L11 What Is the Control Doing?** and **L12 Professional Conduct & Ethical Decisions** remain planned. No L11/L12 or Domain2 started. No full Domain1 AI-application completion claim.

## Exact files, dependencies and preserved work

Created five implementation/document files:

- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`
- `js/ui/learning/control-categories-presentations.js`
- `css/learning-control-categories.css`
- `tools/verify-learning-control-categories.mjs`
- `docs/plans/isc2-cc-2026/lesson-d1-10-implementation.md`

Modified15 existing files:

- `content/isc2-cc-2026/learning/published/catalog.json` — append validated1.4lesson/status/revision.
- `index.html` — scoped stylesheet.
- `js/ui/learning/renderers.js` — bounded dispatch.
- `js/ui/learning/lesson-info.js` — eight full explanations.
- `tools/verify-learning-catalog.mjs`
- `tools/verify-learning-frameworks.mjs`
- `tools/verify-learning-governance.mjs`
- `tools/verify-learning-non-repudiation.mjs`
- `tools/verify-learning-privacy.mjs`
- `tools/verify-learning-risk-foundations.mjs`
- `tools/verify-learning-assessment.mjs`
- `tools/verify-learning-risk-response.mjs`
- `tools/verify-learning-phase2.mjs` — nine scoped publication/count expectation updates as above.
- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
- `docs/plans/task.md`

Created evidence under `artifacts/qa/lesson-d1-10-control-categories/`: baseline/catalog snapshot, authoring script, red/initial/final/legacy outputs,32slide+12feedback screenshots, support images, geometry/functional/integrity JSON and whitespace output. Seven ignored staging runtime files synchronized for public QA. **No dependencies added.**

[Integrity evidence](../../../artifacts/qa/lesson-d1-10-control-categories/integrity-check.json):1,358-entry baseline,1,343byte-identical,15expected existing changes,none missing. Nine previous lesson JSONs and their composition code/styles, notes, Viewer/controller/progress code, Quiz/Vocabulary and all question-bank files preserved, including protected583questions. Prior catalog objectives/domains/summaries unchanged; only empty1.4 gained L10. `sec_cert_learning_progress_v1`, earlier lesson/slide IDs and order unchanged; no storage migration. All earlier dirty work retained. Seven staged runtime files match workspace bytes.

## Review access and limitations

[Local public preview](http://127.0.0.1:4188/): Open Certification → Learning → Domain1 → Objective1.4 → Start Learning. A single lesson opens directly; existing earlier objectives retain selectors. Slides chooses1–8; TH/EN switches content; Info/reading expose full text. The bounded public staging serves assets/content, not repository study notes.

Required desktop slide/interaction QA complete. Human visual/academic/bilingual review, sustained native fullscreen/explicit exit, other browsers, assistive technology and non-default zoom remain. Mobile/tablet QA outside scope. No deployment or next lesson. **Stop for user review.**
