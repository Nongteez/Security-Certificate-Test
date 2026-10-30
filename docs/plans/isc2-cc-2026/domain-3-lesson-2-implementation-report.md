# Domain 3 Learning Slides — Lesson 2 Implementation Report

Date: 2026-10-30. Status: implementation and scoped desktop QA complete; ready for human visual and academic review. Human acceptance pending.

## Stage A — Actual Lesson 1 status

**Implemented and verified, not human accepted.** All ten non-tracker application/document deliverable hashes match the Lesson 1 delivery manifest; its seven exact slide IDs, publication, paired content, native/Reading/Info, scenario, cleanup and independent progress checks passed again: **36/36**. Existing evidence contains 28 viewport/language/slide records covering 84 mode cases, 16 feedback states, 28 Reading scroll-end checks and real reload/direct Resume records. No blocking defect was identified. Lesson 1 will remain unchanged.

Evidence is `artifacts/qa/domain-3-lesson-1/`, not Reading Notes Task 134. `artifacts/qa/domain-3-lesson-2/lesson-1-verification.json` records this Stage A decision. The prior stable Lesson 1 tracker label was absent during initial recovery; code and evidence remained intact. Current concurrent tracker entries 134/135 also record Lesson 1 delivery and its independent acceptance audit. This task changes only `D3-LS-02`, without rewriting those entries.

The concurrent `domain-3-lesson-1-acceptance-audit.md` was also reviewed during final recovery: it reports 36/36 focused checks, 28/28 browser configurations, no blocking defect, and four non-blocking findings (mobile touch targets/typography, a DOM identification enhancement and historical test hygiene). Its status remains pending remediation or human approval. Those findings were not silently treated as human acceptance and were not repaired in this Lesson 2 scope.

## Authorized execution plan

1. Capture the current dirty tree, hashes and shared-file entry copies; validate Lesson 1 as above.
2. Add focused failing tests for the approved eight-slide Lesson 2, academic corrections, native/mode/Info behavior, scenario reset/cleanup and independent progress.
3. Author only `lesson-d3-02-review-deprovisioning` and its exact roadmap slide IDs, a lesson-local renderer and namespaced CSS. Add only the second catalog summary, dispatch, stylesheet link and exact-lesson Info opt-in. Do not modify Lesson 1 modules/content/CSS/tests or shared progress/schema/stage.
4. Review academic/bilingual copy, then specification compliance and code quality; run focused and relevant shared checks without weakening historical tests.
5. Verify all eight slides in real Chrome at1366×768/1920×1080, TH/EN, Presentation/Reading/Info, all scenario branches, representative high-risk Light/Dark states, lesson switching, reload and direct Resume. Inspect screenshots visually.
6. Compare protected entry hashes and catalog branches, complete this report, exact manifest and tracker. Stop after Lesson 2; Lessons 3–6 remain unavailable.

Primary notes: `Domain 3.md` §§5–6 and `D3 sum.md` topics3–4; S04–S06 and corresponding transcript. Approved storyboard and all five planning documents match the versions reviewed before Lesson 1. Technical supplements are bounded: NIST federation guidance for independently managed application sessions, lifecycle/accountability references and service-account governance. No federal numeric deadline, deletion guarantee, assurance level or product installation rule is imported as universal CC teaching.

## Final scope and inventory

The interrupted implementation was preserved. This continuation completed missing verification and documentation; **no production lesson content, renderer or CSS was regenerated or redesigned**. No new Lesson 2 defect was demonstrated. Published lesson `lesson-d3-02-review-deprovisioning`, revision `1`, contains eight EN/TH slides under Objective `3.1`. Catalog revision is `25` (entry `24`). Lesson 1 precedes Lesson 2; Objective 3.2 and later lessons remain unavailable. Objective 3.1 as a whole is not declared complete: frameworks/tools teaching remains in the approved future roadmap.

| # | Stable slide ID | Teaching composition / verified distinction |
|---|---|---|
| 1 | `slide-d3-02-01-mover-before-after` | Finance→IT, before/needed/observed rights; remove unjustified stale access without automatically deleting all previous grants |
| 2 | `slide-d3-02-02-review-apply-verify` | Current need→authorized decision→implementation→verification; signed review is not enforced remediation |
| 3 | `slide-d3-02-03-activity-and-ownership` | Independent usage/accountability matrix; active orphaned and rarely used owned accounts are possible |
| 4 | `slide-d3-02-04-review-at-the-change` | Routine and event-driven review complement each other; six months is elapsed story time |
| 5 | `slide-d3-02-05-withdraw-without-erasing-history` | Withdraw account/application/group/privileged access; retain required records under policy |
| 6 | `slide-d3-02-06-central-and-application-sessions` | Observed existing app session after central disablement; supported revocation and verification |
| 7 | `slide-d3-02-07-retire-a-workload-identity` | Owner/purpose/dependencies→authorized retirement→verify no unjustified access remains |
| 8 | `slide-d3-02-08-complete-offboarding-decision` | Authored contractor scenario with four actions and complete bilingual reasons; C is recommended |

## Academic corrections and traceability

Primary teaching remains the user's `ISC2 Update 2026/Domain 3/Domain 3.md` §§5–6 and `D3 sum.md` topics 3–4, with S04–S06 and transcript mapping in the source inventory. All six source review findings remain in Slide 1 Reading/Info: Excessive Permissions, Unused Accounts, Inappropriate Access, Role Changes, Privilege Accumulation and Orphaned Accounts. Slide 5 retains all four triggers (termination, resignation, role change, contract expiration) and four activities (disable account, revoke application access, remove group memberships, revoke privileged access). They are categories, not eight universal sequential steps.

The approved roadmap and academic audit are followed:

- **D3-A04:** activity and accountable ownership are independent; no inference of ownership from successful login or inactivity alone.
- **D3-A05:** investigate purpose/owner/dependencies; withdrawal differs from destruction of identity/audit history. Retention/privacy and authorized later deletion remain explicit.
- **D3-A06:** event-driven reassessment complements policy/risk-based periodic review. Neither six months nor ninety days is prescribed universally.
- **D3-A07:** record, apply and verify approved changes across relevant access paths. HR flags, signed forms, automation messages and central-account status alone do not prove downstream denial.
- **D3-A17:** workload purpose/owner/dependencies and retirement are explicit. Continuity requires accountable coordination, not indefinite orphaned access. No forced human interactive MFA, password-only method or universal rotation schedule.
- Scope/provenance boundaries from A01/A19–A21 are retained: no exam-frequency claims, copied bank scenario, universal product behavior or architecture migration. The disputed financial-workflow allocation remains quarantined and untouched.

Official scope checked against [ISC2 CC September 2026 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline): Objective 3.1 review/deprovisioning, with separately identified AI/service-account application guidance. Technical explanations are bounded supplements:

- [NIST SP 800-63C-4 §4.7](https://pages.nist.gov/800-63-4/sp800-63c.html): IdP/RP sessions may be independent; supported coordination can exist. The lesson does not promise instantaneous global revocation or say central disablement always fails.
- [Federal Identity Lifecycle Management Playbook](https://www.idmanagement.gov/playbooks/ilm/): modification, revocation, retirement/archive and orphan-account distinctions. Federal deadlines, assurance levels and automation guarantees are not generalized.
- [NIST CSF 2.0 PR.AA-05](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf): managed, enforced and reviewed permissions; an outcome, not implementation software.
- [Microsoft service-account governance](https://learn.microsoft.com/en-us/entra/architecture/govern-service-accounts): owner, purpose, rights, dependencies, review and retirement. Vendor-specific configuration is excluded.

Both full EN/TH explanations and all scenario reasons were reviewed. Thai naturally retains terms such as Access review, Identity, Session and Effective access; it is not shortened into an academically different explanation. Native presentation is a concise teaching composition; complete source lists, caveats and reasons remain in Reading and Info. No claim of professional translation certification or human academic acceptance is made.

## Code review

Focused specification and quality review found no blocking Lesson 2 defect. Dispatch checks exact lesson/domain/slide IDs and expected bilingual block shapes; it rejects malformed arrays and other lessons. Rendering uses existing DOM helpers rather than HTML injection. Semantic tables have captions and row/column headers. Scenario buttons are native controls with selected-state attributes, live feedback and visible keyboard focus. Reset is English-only. Event listeners belong to an AbortController and are removed on destruction/context abort. Scenario state is transient viewer state, not a progress-schema extension. CSS is confined to `learning-iam-review-slide` / `d3r-*`; no shared stage, progress, route, Quiz or Vocabulary implementation was changed.

## Browser QA matrix and visual review

Actual installed Chrome rendered the production application through a temporary local HTTP server, using an isolated profile and desktop viewport emulation. This is real browser evidence, not fabricated dimensions, human acceptance or physical-display measurements. Existing valid 1366 evidence was retained; remaining cases were added. No screenshots from earlier tasks were overwritten.

| Viewport | Language | Presentation | Reading | Info | All scenario choices | Reading end reached |
|---|---|---:|---:|---:|---:|---:|
| 1366×768 | EN | 8/8 | 8/8 | 8/8 | 4/4 | 8/8 |
| 1366×768 | TH | 8/8 | 8/8 | 8/8 | 4/4 | 8/8 |
| 1920×1080 | EN | 8/8 | 8/8 | 8/8 | 4/4 | 8/8 |
| 1920×1080 | TH | 8/8 | 8/8 | 8/8 | 4/4 | 8/8 |

Total: **96 mode cases, 16 interactive feedback states, 32 Reading scroll-end checks**. Main matrix used Dark application chrome with the preserved white presentation canvas. Presentation assertions checked native composition, no unintended Reading fallback, no scene or document horizontal overflow and loaded fonts. Full Reading text and Info explanations were checked against published semantic content. All Reading sections were scrolled through (82 captures); Info explanations were captured in overlapping segments (69 captures). Text cut at an intermediate scrolling viewport edge is intentional; the subsequent capture/end check verifies reachability.

High-risk Slides **1, 3, 6 and 8** also passed Light theme at both viewports in both languages: **16 presentation samples**, plus **4 Info overview samples**. The full dark Info matrix and these Light samples show legible contrast. This is a representative Light check, not another exhaustive all-slide theme matrix.

Screenshot contact sheets and representative full-resolution frames were visually inspected for clipping, labels, Thai wrapping, diagram meaning, spacing and feedback. No new Lesson 2 production correction was needed. Shared Reading mode retains its existing narrower scrollable article; its layout was not redesigned during this scoped task.

Evidence root: `artifacts/qa/domain-3-lesson-2/`:

- `browser-matrix.json`, `reading-scroll.json`, `qa-review.json`, `extras.json`.
- `1366-en-presentation-sheet.png`, `1366-th-presentation-sheet.png`, `1920-presentation-sheet.png`.
- `reading-page-0.png` through `reading-page-6.png`; `info-page-0.png` through `info-page-5.png`.
- `feedback-sheet.png`, `light-sheet.png`; originals follow `<width>-<language>-S<number>-<mode/state>.png`.
- `fullscreen-scenario-keyboard.png`, `before-reload-S6.png`, `continue-learning-after-reload.png`, `resumed-S6.png`, `domain-after-resume.png`, `lesson1-independent-resume-S3.png`.

All four scenario choices were activated with trusted keyboard Enter in each main configuration. Selection, focus, exact reason, recommended/reconsider feedback and Reset passed. Choice C survived live EN→TH, Reading→Presentation and theme changes. Actual keyboard fullscreen entry and Escape restored the slide and choice. An initial scripted DOM click lacked fullscreen user activation; trusted Enter verified the application successfully. One QA top-level-variable redeclaration was corrected with a scoped expression; it was not an application defect. `runtime-errors.json` contains no application runtime exceptions.

## Navigation, progress and Resume

`navigation-progress.json` verifies real UI navigation and localStorage reload using unchanged `sec_cert_learning_progress_v1`, schemaVersion `1`:

- Home→Learning Center→Domain 3→Objective 3.1→Lesson selector→Start/Resume opens the saved presentation directly.
- Keyboard Left moved Lesson 2 Slide 6→5; Right returned to 6.
- After browser reload, Learning Center Continue Learning opened Lesson 2 Slide 6 directly. Domain Resume also opened Slide 6, with no contents-page detour.
- Domain 1 CIA position 3, Domain 2 GRC position 2 and Domain 3 Lesson 1 position 3 retained their independent records while Lesson 2 changed/reloaded.
- `lesson-switch-resume.json` additionally verifies selecting Lesson 1 resumes `authorize-before-assignment`, then Lesson 2 resumes its later saved `complete-offboarding-decision` position.
- Info Escape closed the modal and restored focus to its opener. Objective 3.1 remained selected and 3.2 unavailable.

Focused Node tests additionally reload every one of the eight saved positions while preserving every other published lesson record. Answers are intentionally transient; they are not promised to survive page reload. No storage migration or ID/order change was introduced.

## Final automated verification

Commands were run with `node --test --test-reporter=tap` and the file lists recorded verbatim in `node-results-final.json` and `domain1-results-final.json`. Logs are retained alongside the earlier interrupted-session logs.

| Group | Actual result | Log |
|---|---:|---|
| Lesson 1 + Lesson 2 focused | **75/75 pass** (36 + 39), 0 skipped | `focused-node-final.txt` |
| Shared catalog/course/progress/viewer/V3 stage/V3 viewer/phase2/D2 completion | **73/75 pass**, 2 exceptions | `shared-node-final.txt` |
| CIA, AAA/MFA and eight D2 lesson suites | **54/58 pass**, 4 exceptions | `existing-lessons-node-final.txt` |
| Remaining ten D1 lessons plus academic remediation, final sign-off and integration | **74/75 pass**, 1 exception | `domain1-regressions-final.txt` |
| Total | **276/283 pass; 7 classified exceptions; 0 skipped** | JSON summaries above |

The original three groups still total **202/208**, matching the previous result. The additional D1 run adds one old snapshot failure; it is not hidden in the original count. No test expectation/hash was changed or weakened.

### Exception classification and evidence

| Check | Current failure / classification | Entry evidence |
|---|---|---|
| `verify-learning-d2-completion.mjs:56` | **Outdated historical catalog snapshot** requires non-D2 branches including empty Domain 3 | Entry catalog already contains published Lesson 1; authorized Lesson 2 extends 3.1. Other domains match entry exactly |
| Same file, line 62 | **Historical whole-repository hash guard, now additionally affected by concurrent source rename**; first missing old Domain 4 path | Earlier log already fails this check on the pre-L2 Info snapshot; current Domain 4 replacement file is byte-identical to entry |
| `verify-learning-d2-business-continuity-bcp.mjs:338` | **Historical global Git allowlist / concurrent-work interference**; now reports old Domain 4 path | Earlier run already failed on `artifacts/qa/control-timeline/after-1366-dark-collapsed.png`, recorded dirty at entry |
| `verify-learning-d2-disaster-recovery-drp.mjs:361` | Same historical global Git allowlist; now old Domain 4 path | Same pre-existing dirty screenshot evidence |
| `verify-learning-d2-grc-foundations.mjs:360` | Same historical global Git allowlist; now old Domain 4 path | Same pre-existing dirty screenshot evidence |
| `verify-learning-d2-grc-tools-risk-register.mjs:369` | **Outdated publication expectation** expects later D2 lessons in preparation | Entry catalog already has eight published D2 lessons; D2 branch is unchanged by L2 |
| `verify-learning-ai-applications.mjs:58–61` | **Outdated hash for all non-D1 catalog domains** | Expected `c48e5c…`; entry already `8c4a4e…`; current `ebcba8…`. Separate current-entry comparison proves D2 and all non-D3 branches unchanged |

No newly failing functional Lesson 2 check was found. These results do not claim the entire dirty repository test suite is green. Vocabulary's historical failures were not repaired or rerun as part of this focused task.

## Exact task-owned changed-file manifest

Created in the original Lesson 2 implementation (preserved during continuation):

1. `content/isc2-cc-2026/learning/staged/lessons/lesson-d3-02-review-deprovisioning.json`
2. `content/isc2-cc-2026/learning/published/lessons/lesson-d3-02-review-deprovisioning.json`
3. `js/ui/learning/iam-review-deprovisioning-presentations.js`
4. `css/learning-iam-review-deprovisioning.css`
5. `tools/verify-learning-d3-review-deprovisioning.mjs`
6. `docs/plans/isc2-cc-2026/domain-3-lesson-2-implementation-report.md`

Modified relative to the recorded Lesson 2 entry baseline:

1. `content/isc2-cc-2026/learning/published/catalog.json` — revision 24→25, append L2 to 3.1 only.
2. `js/ui/learning/renderers.js` — exact L2 import/guard/dispatch and scoped host class.
3. `js/ui/learning/lesson-info.js` — add L2 to the existing D3 explanation allowlist.
4. `index.html` — L2 stylesheet link.
5. `docs/plans/task.md` — only stable D3-LS-02 entry for this task; concurrent added rows 135 and 137–140 are retained.

The Git diff also contains earlier Lesson 1 and unrelated work; that larger diff is not attributed to Lesson 2. This continuation changed only this report, its tracker entry and task-local QA artifacts. `delivery-manifest.json` inventories hashes/bytes of all eleven deliverables and every task-local QA file except the private Chrome profile and the manifest itself. Existing evidence files are retained. No dependency was added; existing app modules, Node, installed Chrome, Python standard library and Windows System.Drawing were used.

## Preservation comparison and concurrent work

`entry-baseline.json` records HEAD `b7412a15e00b6492b665df4559a5df2a4ae3f28b`, initial dirty Git status and **1012 non-artifact files**. `preservation.json` compares those hashes, not a clean-HEAD fiction.

Final comparison: **996 identical, 5 intentional shared changes, 9 observed concurrent changes, 2 source paths renamed with identical bytes; no unexplained missing file or unknown change**. All Domain 1/2 Learning Slides, Domain 3 Lesson 1, their CSS/tests/content, Quiz, Vocabulary, question banks, source material used by this lesson, progress storage/schema, and Reading Notes Markdown/scene content match their entry hashes. Task numbering differs across workstreams; preservation uses exact paths and hashes, including the existing Lesson 1 record currently numbered 134. Other catalog domains, original L1 summary and Objective 3.2 match entry exactly. HEAD is unchanged.

It would be inaccurate to call the entire Reading Notes subsystem or all planning documents unchanged. The following changed externally during this task and were left untouched (the shared tracker also gained concurrent rows 135 and 137–140):

- `js/core/diagram-generator.js`, `js/core/reading-loader.js`, `js/ui/screen-reading.js`.
- `tools/verify-reading-notes-domain1.mjs`, `tools/verify-reading-notes-domain2.mjs`, `tools/verify-reading-notes-domain3.mjs`, `tools/verify-reading-notes-foundation.mjs`.
- `docs/plans/isc2-cc-2026/domain-2-2026-coverage-matrix.md`, `docs/plans/isc2-cc-2026/domain-2-source-inventory.md`.

Observed source path changes are `ISC2 Update 2026/Domain 4/D3 sum.md`→`D4 sum.md` and `DOMAIN 3.txt`→`DOMAIN 4.txt`. Both destination SHA-256 values match the entry source bytes. This task did not perform those renames. Their old paths now affect broad historical hash/Git checks. No external changes were reverted, approved academically or included in this lesson's implementation manifest.

## Local preview and human acceptance

From `D:\_Coding\SEC-CERT-TEST`, run `python -m http.server 4209 --bind 127.0.0.1` after the isolated QA server exits. Open [local preview](http://127.0.0.1:4209/). Navigate Home→Open Certification→Learning→Domain 3→Objective 3.1→select **Access Reviews, Changes & Deprovisioning**→Start Learning/Resume. Review Presentation, Reading and Info, TH/EN, then the four final-slide choices. Existing browser progress is preserved; QA used an isolated profile.

**Ready for human visual and academic review; not human accepted.** All requested scoped desktop QA cases are complete. Known limits are the seven unrelated/snapshot exceptions, concurrent files described above, representative rather than exhaustive Light coverage, and no mobile/tablet/alternate-browser/screen-reader test. Human review should confirm readability on the actual monitor and accept the eight bilingual teaching compositions and source boundaries. No Lesson 3 or later content was implemented. No commit, push, reset, clean or revert was performed.
