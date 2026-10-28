# Lesson 12 — Professional Conduct & Ethical Decisions

Status: implemented and desktop-verified, ready for human review — 2026-10-28. Domain 1 final academic/bilingual approval remains pending.

## Confirmed design and implementation plan

Goal: publish one complete paired TH/EN lesson under **Domain 1 / Objective 1.5 — Maintain professional and ethical conduct**, then perform the requested preliminary Domain 1 coverage check. Roadmap title confirmed exactly. Official headings are professional code of conduct, due care/diligence and ISC2 Code of Ethics. No conflict with roadmap. Both mandatory notes read completely for this task: A (1,733 lines), B (405); A46–51/B7.3,8 provide this lesson. Earlier 91 slides inspected through complete parsed lesson inventory, outcomes, stable IDs and relevant explanations; existing learner content is preserved.

Architecture: new stable `lesson-d1-12-professional-conduct` and bounded `professional-conduct-presentations.js`, scoped `learning-professional-conduct.css`, complete semantic blocks/Info/reading. Existing Viewer, course selection, English controls and `sec_cert_learning_progress_v1` retain ownership. No new framework, dependency, storage field, worktree, commit or deployment. Preserve the current 1,544-file entry baseline, including ongoing Domain 4 bank/vocabulary changes (119 updated questions and 403 vocabulary entries).

A definitions-only glossary would miss professional judgment; a single dense four-canon poster would omit due care/diligence application. Selected ten-slide sequence combines distinct diagrams and one bounded reporting decision. User authorized end-to-end implementation and final review; no extra intermediate approval gate is introduced. Execute sequentially with specification review then code/lifecycle/security review.

| Slide / stable suffix | Measurable outcome / message | Source | Example and visual | Detailed explanation / misconception |
|---|---|---|---|---|
| 01-access-and-authority | Distinguish capability from authorized purpose | A46; B8; L02 prerequisite | admin capability vs payroll authorization lenses | curiosity/admin access is not blanket permission |
| 02-professional-conduct | Apply honesty, confidentiality, respect and responsibility | A46; B8 | professional undertaking + three evidence lanes | conduct requires choices, not a signed policy alone |
| 03-reasonable-care | Explain reasonable protective action | A47; B7.3; ISACA | assess context → proportionate patch → record | care is not zero risk, maximum controls or legal immunity |
| 04-investigate-and-review | Explain inquiry before and after action | A48; B7.3; ISACA | inspect → evaluate → monitor | diligence is not only an after-the-fact check |
| 05-scan-patch-verify | Connect care and diligence in one cycle | A49; B7.3 | authorized scan → controlled patch → rescan/review | DO/CHECK is a cue, overlapping duties remain |
| 06-four-canons | Explain all four canon obligations | A50–51; B8; official Ethics | open four-part canon map, paraphrased teaching | accurate meanings, official wording linked; no invented hierarchy algorithm |
| 07-public-trust-and-honesty | Reason about public harm and truthful reporting | A46,50; B8; official Ethics | finding → factual record → safe escalation | employer pressure is not permission to conceal; no automatic public leak |
| 08-competent-service | Apply competent principal service and profession duties | A50; B8; official Ethics | limits → qualified help → safe development | principals are served competently, not obeyed blindly; no false expertise |
| 09-reporting-decision | Evaluate three actions with reasons | A46,50; B8; official Ethics | hide/publish/report-safely contextual feedback | both concealment and indiscriminate disclosure harm trust; facts/authority matter |
| 10-defensible-decisions | Produce an evidence-based ethical decision record | A46–51; B7.3,8; official AI context | purpose → evidence → action/review | AI draft does not remove accountable human review; no universal legal sequence |

Outcomes: justify authorized purpose and confidentiality boundaries; distinguish/apply care and diligence across a lifecycle; explain the four canons using scenarios; choose and document a lawful, honest, competent response without unsupported claims. Complete equivalent TH/EN title, lead, teaching rows, detailed explanation and takeaway per slide.

Verification plan:

- [x] Read sources, confirm scope, record baseline/catalog and 11-lesson inventory. Entry focused suite165/165; separate Vocabulary6pass/5known failures captured before editing.
- [x] Write feature tests first; observe missing lesson failure.
- [x] Author bilingual content, original compositions and minimal catalog/dispatch/Info/CSS integration. Review specification then correctness, cleanup, CSS isolation and accessibility.
- [x] Run focused Node/static regressions; investigate any new failure; retain old Vocabulary expectations/hashes.
- [x] Dedicated production browser QA:40 slide cases at1366×768/1920×1080 TH/EN;12 feedback states; keyboard, language, overview, Info/reading, selection, reload/Resume and11prior positions. Capture and inspect real screenshots, not metrics alone.
- [x] Preliminary source/outline/L01–L12 matrix: Complete/Partial/Needs Review. Do not revise prior lessons or claim final Domain1 approval.
- [x] Final integrity, exact files, report, roadmap and table-only live task row; stop for human review.

Primary verification references: [CC outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), [ISC2 Code of Ethics](https://www.isc2.org/ethics), [ISACA glossary](https://www.isaca.org/resources/glossary). Sources reviewed2026-10-28. The official page says the four mandatory canons require professional judgment; no unsupported rigid conflict-resolution rule. ISACA corroborates reasonable care under similar conditions and diligent objective investigation/review; this is introductory education, not a ruling on legal liability. Paraphrases and original illustrations avoid reproducing the official page as a poster.

## Implementation, visual assets and review

Ten complete paired slides now run in the production Viewer, bringing the twelve lessons to 101 slides. Each has equivalent TH/EN title, lead, instructional rows, complete explanation and takeaway. Detailed explanations are accessible through both Lesson Info and reading layout; all ten, including the introductory slide, appear in Info. The slide plan above is the implemented sequence.

Original scoped HTML/CSS/SVG compositions depict capability/authority, conduct lanes, protective steps, an investigation lens, scan–patch–verify, four canons, public risk/escalation, competent service, a reporting decision and a decision record. There are no external raster assets or new dependencies. White backgrounds and the existing Viewer sizing/reading architecture remain intact. All application controls, including the three scenario choices, remain English; educational explanations follow TH/EN.

The reporting decision exposes all three consequences with native buttons, `aria-pressed`, visible focus and polite live feedback. Choice remains across slide navigation and language switching within the Viewer; it intentionally does not become a new persisted progress field. The module validates the lesson identity and expected block/row shapes; changed shapes use complete semantic fallback. Content enters text nodes; SVG markup is fixed authored geometry. Listener ownership uses AbortController plus explicit parent-listener removal on destroy. No timer, observer, network request or asynchronous composition work was added.

Specification and sequential code review found no remaining implementation defect. Care/diligence overlap, principal meaning, public-interest disclosure, competence limits, all four canon meanings and AI report accountability were checked in both languages against the cited sources. Full explanations distinguish learning paraphrases from canonical wording and avoid claiming universal legal immunity, deadlines or conflict rules. A copied test selector (`.fn-number`) was corrected to the new module's actual `.pc-number`; production code did not require a fix. Fourteen initial broad-suite failures were investigated as changed catalog counts, a former-last-lesson assumption and an Objective1.5 availability fixture expectation; only those expansion expectations changed. No passing assertion was removed, historical hash updated or unrelated Vocabulary expectation weakened. No visual redesign or layout correction was needed after the 40-case review.

## Exact file scope

Created:

- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`
- `js/ui/learning/professional-conduct-presentations.js`
- `css/learning-professional-conduct.css`
- `tools/verify-learning-professional-conduct.mjs`
- `docs/plans/isc2-cc-2026/lesson-d1-12-implementation.md`

Modified from this task's entry baseline:

- `content/isc2-cc-2026/learning/published/catalog.json`: revision12 and the single validated Objective1.5 lesson; older summaries unchanged.
- `index.html`: one stylesheet link.
- `js/ui/learning/renderers.js`: bounded composition dispatch and host class.
- `js/ui/learning/lesson-info.js`: complete explanations for this lesson.
- `tools/verify-learning-assessment.mjs`, `verify-learning-catalog.mjs`, `verify-learning-control-categories.mjs`, `verify-learning-control-functions.mjs`, `verify-learning-frameworks.mjs`, `verify-learning-governance.mjs`, `verify-learning-non-repudiation.mjs`, `verify-learning-privacy.mjs`, `verify-learning-risk-foundations.mjs`, `verify-learning-risk-response.mjs`, `verify-learning-phase2.mjs`: necessary catalog expansion expectations only (all are under `tools/`).
- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md` and `docs/plans/task.md`.

All other new files for this task are evidence under [QA folder](../../../artifacts/qa/lesson-d1-12-professional-conduct/); the [delivery manifest](../../../artifacts/qa/lesson-d1-12-professional-conduct/delivery-manifest.json) enumerates them. The public production staging copy is ignored under `.learning-preview/lesson12-public-20261028`. Existing dirty and untracked work, including Domain4 academic/bank/Vocabulary work, was preserved rather than compared against Git HEAD as though it belonged to this task.

## Actual desktop QA and screenshot matrix

All cases below were executed in the real production Viewer at `http://127.0.0.1:4189/`, captured and visually inspected. These are actual observations, not inferred from Node tests or overflow metrics.

| Viewport | Language | All slide screenshots | Additional decision states | Result |
|---|---|---|---|---|
| 1366×768 | TH | `1366-th-slide-01.jpg` through `10.jpg` | `1366-th-feedback-0.jpg` through `2.jpg` | 10/10 +3/3 inspected |
| 1366×768 | EN | `1366-en-slide-01.jpg` through `10.jpg` | `1366-en-feedback-0.jpg` through `2.jpg` | 10/10 +3/3 inspected |
| 1920×1080 | TH | `1920-th-slide-01.jpg` through `10.jpg` | `1920-th-feedback-0.jpg` through `2.jpg` | 10/10 +3/3 inspected |
| 1920×1080 | EN | `1920-en-slide-01.jpg` through `10.jpg` | `1920-en-feedback-0.jpg` through `2.jpg` | 10/10 +3/3 inspected |

Paths are relative to the QA folder above. Forty required slide views and twelve extra feedback views passed readability, typography, hierarchy, diagram correspondence, clipping and overlap inspection. Recorded production stages were approximately1187.55×668 and1742.22×980. All52 observations stayed in presentation mode with equal client/scroll dimensions, no outside elements or main/footer intersection; minimum measured footer gap15.40625px. These measurements corroborate the inspected screenshots, not replace them. [Browser measurements](../../../artifacts/qa/lesson-d1-12-professional-conduct/browser-measurements.json).

Supporting inspected screenshots: `lesson-info-en.jpg`, `lesson-info-th.jpg`, `reading-mode-en.jpg`, `reading-mode-th.jpg`, `slides-overview.jpg`, `objective-1-5-available.jpg`, `progress-after-reload.jpg`, `resume-slide-06.jpg`, and prior CIA/control-functions preservation views. Info was expanded through all10 entries and the full canon explanation inspected in both languages. Reading was inspected through the complete scenario explanation in TH/EN. The overview showed10 accessible thumbnails and directly selected slide6. Keyboard navigation went9→10→9, Enter activated a choice, and its feedback survived language and slide changes. All application controls stayed English.

## Independent progress, reload and Resume

The dedicated4189 origin starts with isolated QA storage; it does not overwrite saved positions from previous preview origins or establish that a user's real historical browser profile was exercised. Through production controls, each of the eleven earlier lessons was launched and saved at slide2. Lesson12 was then saved at slide6. Following reload, Home → Open Certification → Learning Center showed the correct lesson, and **Resume Lesson → directly opened6/10**. All eleven previous lessons were subsequently relaunched at their own2/N positions. Returning to1.5 still opened6/10. The preview was finally left on TH slide1 for review. No lesson was marked complete on the user's behalf.

[Functional observations and actual accessibility evidence](../../../artifacts/qa/lesson-d1-12-professional-conduct/browser-functional-results.json) record these checks. Node tests also load/serialize eleven existing V1 entries unchanged after adding Lesson12. Stable prior lesson/slide IDs, order, `sec_cert_learning_progress_v1`, schema and store implementation are byte-preserved. Quiz/Vocabulary browser workflows were not newly exercised; byte integrity and focused Quiz/session regressions provide their scoped protection.

## Automated verification and failure classification

Executed from the project root in PowerShell:

```powershell
$checks=@('professional-conduct','control-functions','control-categories','frameworks','governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations') | ForEach-Object {"tools/verify-learning-$_.mjs"}
$checks+=@('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @checks
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
node --check js/ui/learning/professional-conduct-presentations.js
node --check js/ui/learning/renderers.js
node --check js/ui/learning/lesson-info.js
node --check tools/verify-learning-professional-conduct.mjs
git diff --check
node artifacts/qa/lesson-d1-12-professional-conduct/verify-integrity.mjs
```

Focused result: **170/170 pass, zero failed/skipped**, exit0; entry165/165 plus5new feature tests. Red-first evidence records5missing-lesson failures before implementation. Final log: `node-verification.txt`. Syntax checks pass. Diff check and integrity results are recorded in the QA folder. The separate historical suite is **11tests:6pass/5fail**, exit1, matching this task's entry failures by name and reason:

| Historical expectation | Classification / current evidence |
|---|---|
| Exactly three registry entries; unavailable CC Vocabulary without loaders/counts | Pre-existing outdated expectation; current repository already has four cards and403 CC vocabulary entries at task entry. |
| Vocabulary direct calls cannot load the formerly unavailable version | Pre-existing outdated availability expectation; current403-entry loader was already enabled. |
| Three-card grid, three Info buttons, two disabled actions | Pre-existing outdated cardinality/state; four cards already present. |
| Old card/dialog EN/TH/EN+TH expectations | Pre-existing outdated labels/content assertions; matching task-entry failure, not a new Lesson12 translation regression. |
| Registry/dialog/protected-file snapshot unchanged | Pre-existing outdated next-bank Coming Soon/null-loader expectation; already available119-question bank. Fails before establishing a fresh dialog-hash discrepancy. |

`vocabulary-entry-baseline.txt` and `vocabulary-verification.txt` preserve actual assertions. None was fixed or weakened. Independent entry-byte comparison protects Quiz, Vocabulary, labels, sources and both question banks. The protected Pre-2026 bank remains142+65+93+156+127=**583**; the updated bank remains**119**, and CC Vocabulary**403**, including unrelated in-progress Domain4 work. No dependency, build system or storage migration was introduced.

The final [integrity result](../../../artifacts/qa/lesson-d1-12-professional-conduct/integrity-check.json) checks1,544entry files: **1,527unchanged,17expected modified,zero missing**. All11previous lesson JSONs and prior catalog content are preserved; the catalog is deep-equal after removing L12 and restoring only revision11/Objective1.5 status. Seven public staged runtime files match source bytes. All40+12screenshots and measurements are present, and prior positions/direct Resume assertions pass. The audit script initially compared volatile test durations because it trimmed CRLF after its name regex; trimming before extraction corrected that evidence parser. It does not change any application or test expectation.

## Preliminary Domain1 coverage matrix

This is a source/outline/roadmap/lesson cross-check, not the separate Final Domain1 Academic and Bilingual Audit. “Complete” below means dedicated introductory teaching exists and was self-reviewed; it does not certify every claim in the preceding91slides or imply human acceptance.

| Official/source topic | Implemented evidence | Preliminary status / remaining action |
|---|---|---|
| 1.1 CIA | L01 eight slides, goal diagnosis/application; A1–3/B2 | Complete at introductory depth; human audit Needs Review. |
| 1.1 AAA, identification/MFA support | L02 seven slides, claim/verification/permission/records/factors; A4–7/B3 | Complete core teaching; distinguish accounting from accountability in final terminology review. |
| 1.1 Non-repudiation/accountability support | L03 six slides; B4.1,4.3,12; A only indirect context | Complete introductory unit; no claim A explicitly supplied its missing definition. |
| 1.1 Privacy | L04 eight slides including training-data reuse at8; A8–14/B4.2,10 | Complete core teaching; verify nuanced roles/retention/erasure bilingually in final audit. |
| 1.2 Lifecycle and processes | L05 eight, L06 eight, L07 ten slides: identify/assess/respond/review/communicate; A15–24/B5 | Complete core introductory sequence. AV/EF/SLE/ARO/ALE and response depth are source-based enrichment, not invented official sub-objectives or promised exam calculations. |
| 1.3 Governance, laws/regulations | L08 nine slides, applicability/requirements and AI intake at8; A25–26/B7.2 | Complete core introductory teaching; jurisdiction-specific examples remain bounded. |
| 1.3 Frameworks/guidelines/policies/standards/procedures | L09 ten slides; A27–34/B7.1 | Complete core teaching; ISO/CIS artifact distinctions and mandatory/advisory context warrant final audit. |
| 1.4 Technical/administrative/physical controls | L10 eight slides; A35–36/B6.1 | Complete official category teaching. A's managerial/operational labels are supporting course taxonomy. |
| 1.4 Control functions/application support | L11 nine slides; A37–45/B6.2–6.3 | Complete source-based supporting instruction. Seven function labels are not seven official categories; contextual overlap and concrete compensating example remain explicit. |
| 1.5 Professional code of conduct | L12 1–2,7–10 and complete Info; A46/B8 | Complete introductory teaching; competent, honest, confidential, authorized and responsible conduct applied. |
| 1.5 Due care/diligence | L12 3–5,10; A47–49/B7.3; ISACA corroboration | Complete introductory teaching; investigate before/after, act reasonably, verify, ongoing review. DO/CHECK qualified as a cue. |
| 1.5 ISC2 Code of Ethics | L12 6–10 and full6explanation; A50–51/B8; current official Ethics | Complete introductory teaching; all4canons, principal meaning, professional judgment and safe scenario application. Human bilingual/academic acceptance Needs Review. |
| Domain1 AI integration context | L04 training privacy, L08 governance intake, L12 accountable AI-assisted report | **Partial**: integrity/model poisoning and traceable automated actions do not yet have dedicated worked applications; risk/control AI breadth also needs final mapping. Generic integrity/logging mentions do not prove complete AI coverage. Do not automatically add/revise lessons here. |
| B9 Zero Trust/Defense in Depth | Official4.2; A/B supporting cross-domain examples | Mapping reconciled; not an absent Domain1 objective. Domain2/other domains untouched. |
| Whole-domain technical and TH/EN consistency | Inventory/outcomes/stable IDs and relevant explanations across L01–L12; actual new10paired slides reviewed | **Needs Review**: final independent academic/bilingual audit of all101slides, not just new content, remains pending. |

No remaining missing *core introductory heading* was identified after L12. Domain1 as a whole is **not finally complete/approved**: explicit AI applications remain Partial and final academic/bilingual acceptance Needs Review. The roadmap's twelve planned lessons are implemented; lesson count alone does not settle coverage.

Overlap is intentional prerequisite reinforcement: L02 authorization→L12 authorized professional purpose; L05–07 review→L12 care/diligence duty; L08–09 governance→L12 ethical judgment; L10 categories→L11 functions. These are different outcomes, not reasons to rewrite prior lessons. The final audit should still check repetitive prose, depth, scenario variety and whether a learner must infer an unstated prerequisite. Preliminary review found no new mapping discrepancy beyond the reconciliations above.

## Remaining limitations and final-audit recommendations

- Human academic and Thai-language acceptance remains pending. Audit all101slides and full explanations, not only titles/outcomes or this delivery's40screenshots. Check consistent translations of authorization/accounting/accountability, confidentiality/privacy, due care/diligence, principals and professional versus data integrity; retain meaningful English anchors where translation could blur a distinction. No confirmed new bilingual defect was found in L12.
- Validate each official AI-context application with explicit evidence and decide any follow-up scope separately. Do not mark Domain1 complete from generic mentions, or automatically start Lesson13.
- Native Fullscreen was invoked through the production toolbar, but the in-app browser observation did not retain `document.fullscreenElement`; sustained fullscreen and explicit exit/state restoration require manual review. Fullscreen architecture was unchanged; Node ownership checks pass. No successful fullscreen browser verification is claimed.
- Mobile/tablet, other browsers, assistive technologies and non-default zoom were not tested. No claim of those environments or a fresh Quiz/Vocabulary browser walkthrough.
- Existing browser evidence is on one isolated local origin; use your normal deployment/profile for acceptance. Temporary viewport overrides were reset after QA.

Manual review: open [production local preview](http://127.0.0.1:4189/) → Open Certification → Learning Slides/Learning Center → Domain1 → Objective1.5 → Start Learning. The current deliverable tab is left on Lesson12 TH slide1. Switch TH/EN, inspect all10slides and Info/reading, try all three responses on9, then test your normal fullscreen, reload and Resume. This preview serves bounded public production assets without fixture/source-note exposure. It is local, not a deployed release.

**Stop for human review. No Lesson13 or Domain2 implementation was started.**
