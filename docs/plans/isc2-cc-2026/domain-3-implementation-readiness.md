# Domain 3 Learning Slides — Implementation Readiness

Date: 2026-10-30. **Planning complete; human approval pending. No Domain 3 Learning Slides implementation is authorized or performed.**

Read this with the [source inventory](domain-3-source-inventory.md), [official coverage matrix](domain-3-2026-coverage-matrix.md), [academic audit](domain-3-academic-audit.md) and [42-slide storyboard](domain-3-learning-roadmap.md). These five documents are the handoff package. Historical Reading Notes plans describe a different feature and are not permission to change Learning Slides or vice versa.

## Verified repository baseline

The inspected HEAD is `b7412a15e00b6492b665df4559a5df2a4ae3f28b`. The working tree was already dirty; this task uses entry-time file hashes rather than attributing the entire HEAD diff to this planning work.

| Learning Slides domain | Published lessons / slides | Current state |
|---|---:|---|
| Domain 1 | 12 / 103 | Read-only; existing lessons and educational corrections retained |
| Domain 2 | 8 / 55 | All four objectives published; implementation complete, human acceptance pending |
| Domain 3 | 0 / 0 | Coming Soon; objectives 3.1 and 3.2 exist with empty lesson lists |
| Domains 4–5 | 0 / 0 | No Learning Slides publication; other feature content is unrelated |

The current catalog validates with objective counts `[5,4,2,3,5]`. No published or staged Domain 3 lesson JSON exists. Existing Domain 3 Reading Notes files are concurrent work, not a slide implementation. Do not reuse their completion claims as evidence that a presentation or Lesson Info has been reviewed.

Old Domain 2 architecture documents contain stale counts, example fields and paths. Actual source files and validators control the handoff. In particular, there is no need to invent a new learning registry, storage migration or presentation engine.

## Existing contracts to reuse

| Responsibility / actual file | Contract and Domain 3 consequence |
|---|---|
| `js/core/learning-schema.js` | Existing schema supports domain 3 and its two objectives. Lesson fields include `schemaVersion`, `outlineId`, `id`, `domainId`, `primaryObjectiveId`, `objectiveIds`, `revision`, `status`, bilingual `title`/`synopsis`, `outcomes`, `prerequisites`, `review`, `references`, `assets`, `slides`. Do not use invented `lessonId` or `rendererType` fields. |
| `js/core/learning-schema.js` slide/block validation | A slide has `id`, `title`, `rendererId`, `layoutId`, `blocks`, `referenceIds`, `review`; optional lesson `slideOrder` must retain all authored IDs. Text uses bilingual `.text`; lists use `.items`; tables use `.caption/.columns/.rows`. Generic `text`, `comparison`, `diagram`, `interactive` renderers already exist. No new renderer-type registration is required. |
| `js/core/learning-loader.js` | Publication depends on valid reviewed content, matching catalog/body identity and revision, safe local lesson paths and same-origin static delivery. A catalog label alone cannot publish a lesson. Keep drafts outside public launch paths until review requirements are met. |
| `js/ui/learning/renderers.js` | Trusted ES-module imports dispatch existing lesson/slide-specific compositions; semantic blocks provide Reading content. Add explicit guarded Domain 3 dispatch later, with semantic Reading retained. No executable renderer code belongs in JSON. |
| `js/ui/learning/lesson-info.js` | Current full-explanation handling uses a Domain 1 lesson allowlist and a separate `domainId === 2` branch. Domain 3 currently receives metadata but not every slide's full explanation. A small, explicit Domain 3 explanation branch/helper is a necessary future shared edit. Reuse `renderSlide(..., mode:'reading')` and dispose its handles. Do not alter Domain 1/2 behavior or claim this already works automatically. |
| `js/ui/learning/routes.js` and `js/core/learning-course.js` | Existing data-driven domain/objective selection, validated availability, bounded lesson loading and direct saved-slide launch support new catalog entries. No navigation rewrite is proposed. Preserve route context on Back and cache/revision semantics. |
| `js/ui/learning/presentation-stage.js` and Viewer | Reuse current viewport fitting, font-ready/stable measurement, responsive Reading fallback, toolbar/overview/fullscreen and cleanup ownership. Compositions must fit the stage without adding nested outer width constraints or tiny text. No stage or Viewer change is justified by this plan. |
| `js/core/learning-progress.js` | Existing independent lesson-keyed V1 progress is sufficient; see exact semantics below. |
| `js/ui/learning/domain2-lesson-shell.js`, `css/learning-domain2-lesson-shell.css` | Useful read-only patterns: safe DOM creation, paired language text, scenario feedback, abortable listeners and disposal. These are Domain 2 private code and classes. Do not generalize, import as a Domain 3 dependency or edit them merely for reuse. |

Publication must satisfy the current validator, including matching reviewed revision; approved technical, bilingual and rights review with reviewer/date/evidence paths; reviewed slides and resolvable reference/asset IDs. Evidence paths should point to actual later review records, not fabricated approvals in this planning package. Prefer new native DOM/SVG diagrams; this does not require republishing lecture images or adding assets/dependencies.

## Proposed future files — requires implementation approval

These paths describe a future change set, not files created in this task. Use the exact six lesson IDs from the storyboard. New presentation/CSS names below are proposed implementation names; confirm naming before coding, without renaming published IDs.

| Lesson | New staged and published JSON basenames | New presentation module | New stylesheet |
|---|---|---|---|
| L01 | `lesson-d3-01-roles-provisioning.json` | `js/ui/learning/iam-roles-provisioning-presentations.js` | `css/learning-iam-roles-provisioning.css` |
| L02 | `lesson-d3-02-review-deprovisioning.json` | `js/ui/learning/iam-review-deprovisioning-presentations.js` | `css/learning-iam-review-deprovisioning.css` |
| L03 | `lesson-d3-03-iam-frameworks-tools.json` | `js/ui/learning/iam-frameworks-tools-presentations.js` | `css/learning-iam-frameworks-tools.css` |
| L04 | `lesson-d3-04-least-privilege-sod.json` | `js/ui/learning/iam-least-privilege-sod-presentations.js` | `css/learning-iam-least-privilege-sod.css` |
| L05 | `lesson-d3-05-access-control-models.json` | `js/ui/learning/iam-access-control-models-presentations.js` | `css/learning-iam-access-control-models.css` |
| L06 | `lesson-d3-06-mfa-authentication-signals.json` | `js/ui/learning/iam-mfa-authentication-signals-presentations.js` | `css/learning-iam-mfa-authentication-signals.css` |

Each basename belongs under `content/isc2-cc-2026/learning/staged/lessons/` while authoring and, only after review, `content/isc2-cc-2026/learning/published/lessons/`. Preserve staged/published parity of reviewed content. No published file or catalog path should expose an unreviewed lesson.

If repeated scenario mechanics justify extraction, add **new Domain 3 private** `js/ui/learning/domain3-lesson-shell.js` and `css/learning-domain3-lesson-shell.css`; otherwise keep helpers local. This is a bounded future implementation decision, not an engine redesign. Use Domain 3 namespaced classes, controlled imports and no selectors that change existing domains. Declare each listener/observer/timer/async handle's owner and disposal. Scenario buttons need stable focus, pressed/selected state, live feedback and complete choice-specific TH/EN reasons. DOM insertion must treat educational strings as text; no untrusted HTML or runtime code evaluation.

New focused verification files proposed: `tools/verify-learning-d3-roles-provisioning.mjs`, `tools/verify-learning-d3-review-deprovisioning.mjs`, `tools/verify-learning-d3-frameworks-tools.mjs`, `tools/verify-learning-d3-least-privilege-sod.mjs`, `tools/verify-learning-d3-access-control-models.mjs`, `tools/verify-learning-d3-mfa-authentication-signals.mjs`, and `tools/verify-learning-d3-integration.mjs`. Reuse current Node fixtures; add a Domain 3 fixture helper only if it improves real assertions. Do not copy output-mirroring tests or replace existing integrity baselines.

Exactly four existing shared files are expected to need limited edits after approval:

1. `content/isc2-cc-2026/learning/published/catalog.json`: add three reviewed lessons under 3.1 and three under 3.2, in the proposed order; make domain/objective availability reflect actual reviewed content. Keep all Domain 1/2 entries and other domain statuses intact.
2. `js/ui/learning/renderers.js`: add explicit new-module imports and guarded Domain 3 composition dispatch/host classes; preserve existing branches and Reading behavior.
3. `js/ui/learning/lesson-info.js`: expose Domain 3 full semantic explanations and clean up their render handles, retaining Domain 1/2 paths unchanged.
4. `index.html`: load only the new namespaced CSS resources, including a private shared stylesheet if needed. Preserve existing links and application markup.

Other shared files remain protected: schema/loader, progress, course metadata, routes, Viewer/stage, language controls, Home/Version Selection, Quiz/scoring/banks, Vocabulary, Reading Notes and other certifications. A future genuine limitation requiring another shared edit must be demonstrated and reviewed before expanding this plan. Existing Domain 1/2 compositions, CSS, lesson JSON, tests and sign-off documents are not part of Domain 3 implementation.

## Registration, language and supporting explanations

- Catalog summaries must match lesson body `id`, `domainId:3`, primary objective, objective list, revision, bilingual metadata and safe `lessons/<id>.json` path. L01–L03 map only to 3.1; L04–L06 map only to 3.2. L06 is informed by official AI/authentication application guidance; do not invent a PDF sub-bullet or objective 3.3.
- Preserve the existing `outlineId` (`isc2-cc-2026-09-01`) and schema version 1. Start new lesson revisions deliberately; never revise old domains to manufacture global consistency.
- Give every teaching pair natural, equivalent `en` and `th` values. Thai may retain English security terminology. Application controls and navigation remain English, including EN+TH mode.
- Semantic Reading blocks are the full explanation source; native canvases are selective visual teaching. Info renders those reviewed blocks and all scenario reasons, with the same conditions and caveats. Avoid three divergent copies of the same explanation.
- Lesson-local references resolve the source register. State which examples are newly authored and which statements clarify a source error. Do not falsely attribute supplementary MFA/AI teaching to screenshot S08 or import historical unsupported exam-frequency claims.

## Independent progress and Resume

No storage change is needed. The key remains `sec_cert_learning_progress_v1`; the root remains `{schemaVersion:1, lessons:{[lesson.id]:record}}`. Existing record fields include `lessonId`, `contentRevision`, `lastSlideId`, `visitedSlideIds`, `status`, `completedAt`, `updatedAt`, `language`.

New lesson IDs isolate Domain 3 records from all existing lessons. Retain published lesson/slide IDs and authored order. A lesson revision reconciliation retains last/visited IDs that still exist but can invalidate completed status when the revision changes; it does **not** reset every lesson or erase all saved positions. Start, Resume and Continue Learning must follow existing intent and validation logic directly into the appropriate slide.

Within a Viewer visit, scenario state should survive language, Reading/Presentation and fullscreen transitions using the current interaction contract. Scenario answers are transient; the progress schema does not promise to save them after reload. Do not add hidden persistence or imply that a saved slide position means a saved answer.

Future verification: seed distinct positions in at least two new lessons and existing D1/D2 lessons; visit/complete one without mutating others; reload; verify direct Resume and invalid-position fallback; verify revision reconciliation with valid IDs. Compare stored existing records before/after and exercise corrupt/quota-limited storage behavior through current tests. Do not mutate real user progress as a QA shortcut.

## Verification performed for this planning task

| Check | Actual result on 2026-10-30 | Limit |
|---|---|---|
| Source inventory | 24 files; 17 PNG headers/dimensions and SHA-256 fingerprints recorded; all 17 screenshots visually inspected | No original video/deck/PDF/manifest. Secondary vocabulary reviewed by complete record/section scan and focused substantive checks, not newly certified as 102 fully audited entries |
| Official scope and primary definitions | Current ISC2 dated outline/PDF and listed NIST/federal/vendor primary references retrieved; both objectives/eight bullets mapped | Official application guidance distinguished from numbered PDF requirements; not an exam-frequency claim |
| Storyboard structure | 6 proposed lessons; 42 slide entries, counts 7/8/6/7/8/6; each has message, presentation/visual, Reading, Info, TH/EN, evidence and misconception fields | Storyboard and English messages are planning requirements, not completed bilingual production copy |
| ID/slug check | 6 lesson IDs and 42 slide IDs unique, valid slugs under 120 characters, no collisions with existing published/staged lesson or slide IDs | Recheck before implementation if concurrent catalog work changes the baseline |
| Current inventory/catalog | 20 published lessons / 158 slides: D1 12/103, D2 8/55; D3 empty | Counts describe this inspection, not a hardcoded global test target |
| Existing focused checks | `node --test tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs tools/verify-learning-course.mjs`: **21/21 passed**, 0 failed/skipped | Read-only checks of current contracts; not Domain 3 implementation or browser verification |
| Planning links and objective/evidence completeness | Inline read-only Python check passed: all 42 slide entries have every required field; C01–C08 and AI01–AI02 represented; 21 audit findings; 12 relative document links resolve; all 24 source fingerprints and 17 dimensions match | Local reference-code/field validation supports traceability, not pedagogical proof |
| Document whitespace | Five new documents have no trailing whitespace or unresolved drafting markers. CRLF-aware `git -c core.whitespace=cr-at-eol diff --check -- docs/plans/task.md` passed after removing one duplicate CR introduced at the boundary of this task's row | Plain `git diff --check` reports CRLFs throughout the pre-existing tracker diff; no unrelated line-ending normalization was performed |
| Application preservation | Entry baseline covers 978 non-artifact files, excluding these five new documents and tracker: final comparison found 971 byte-identical, seven concurrent Reading Notes files changed, none missing | Details below distinguish existing dirt and external work; no integrity expectations were refreshed |

No browser QA was performed or required for this planning task. Source screenshot inspection is not application browser verification. No new dependency, lesson JSON, renderer, CSS or runtime change was made; no commit or push was performed.

## Future acceptance and verification gates — not performed

Implement sequentially L01→L06 only after explicit approval, with each lesson reviewed before proceeding. Re-read Git status and refresh the protection baseline first; concurrent Reading Notes and Domain 2 work must not be overwritten.

1. Source and bilingual review: trace every required concept and substantive supplement; verify complete Reading/Info and all scenario reasons; resolve audit dispositions in the new teaching rather than editing raw sources. Human technical/bilingual/rights approval precedes publication.
2. Focused Node checks: schema, catalog/body parity, reference resolution, complete paired text, stable IDs/order, native dispatch guards, semantic Reading/Info, all scenario choices, safe text rendering, keyboard/focus/announcements and listener cleanup. Include negative tests for invalid publication and unsupported data.
3. Shared checks: current catalog/course/progress, Viewer/fullscreen/modes and Info regressions, plus relevant existing D1/D2 integration checks. Use actual objective/domain filters and approved per-domain inventories. Do not freeze a global catalog at 12 or 20 lessons, silently refresh hashes, weaken assertions or repair unrelated historical failures.
4. Desktop visual review of every new slide: TH and EN at 1366×768 and 1920×1080. A 42-slide result implies 168 presentation cases, estimated only. Inspect computed typography, full viewport, diagram labels, contrast, no truncation/overflow or accidental Reading fallback; verify full Reading/Info, every interactive feedback state and narrow-window fallback as separately approved scope. Passing Node checks cannot establish readability.
5. Interaction and preservation: keyboard/Slides overview, focus after mode/language changes, fullscreen entry/exit with exact slide and interaction state, direct Resume/reload, independent progress and back-navigation context. Hash D1/D2 content, shared contracts and protected banks before/after, separately classify concurrent changes. Browser evidence and actual limitations belong in later lesson reports.

The evidence register resolves the currently required teaching. Raw-source gaps remain explicitly bounded: the capture stops before detailed ABAC, but N/U and R-ABAC supply it; N/U do not develop automated-identity lifecycle or risk-assisted authentication, which use official application guidance and primary supplements. The original financial workflow disagreement and original-course completeness/provenance cannot be resolved from supplied evidence. They are quarantined and do not block the replacement declared-policy example. Do not invent missing captures.

## Decisions for human approval

- Approve or revise six focused lessons and the provisional 42-slide sequence, with three lessons per verified objective.
- Approve the explicit primary-source supplements for workload identities, independent application sessions, model qualifications and authentication risk context; keep physical safeguards outside mandatory Domain 3 coverage.
- Approve the replacement SoD scenario's stated incompatible authority rather than asserting the original instructor's disputed three-person allocation.
- Approve original concept-specific white-canvas diagrams and natural Thai/English terminology; detailed production wording and final visual acceptance still require later review.
- Authorize the bounded future file plan, including the necessary Domain 3 Info extension. This planning completion is not implementation approval.

## Exact changes in this task

Created only these five documents under `docs/plans/isc2-cc-2026/`: `domain-3-source-inventory.md`, `domain-3-2026-coverage-matrix.md`, `domain-3-academic-audit.md`, `domain-3-learning-roadmap.md`, `domain-3-implementation-readiness.md`. Modified only the directly related Domain 3 Learning Slides planning row 129 in `docs/plans/task.md`.

Pre-existing changes include Domain 2 completion/catalog/tests/evidence work and concurrent Reading Notes parser/renderer/styles/content/tests/reports. The planning task neither owns nor accepts those changes. Final preservation details below distinguish entry-time dirt from changes observed during this task.

### Preservation evidence and concurrent work

The entry baseline hashed 978 tracked/untracked files outside QA artifacts, temporary preview data, these five planning outputs and the tracker. The final SHA-256 comparison found **971 unchanged, none missing**, and seven changed files: `css/reading.css`, `js/core/diagram-generator.js`, `js/core/reading-loader.js`, `js/ui/screen-reading.js`, `tools/verify-reading-notes-domain1.mjs`, `tools/verify-reading-notes-domain2.mjs`, `tools/verify-reading-notes-foundation.mjs`. They belong to concurrent Reading Notes work; no tool in this planning task wrote them. All baseline Domain 1/2 **Learning Slides** JSON, compositions, CSS and tests; catalog; progress/schema/Viewer contracts; Quiz/question banks; and Vocabulary files remained byte-identical to the entry snapshot. This preservation statement concerns this task interval, not equality with HEAD or proof that unrelated dirty work has passed review. An earlier intermediate comparison found only the diagram generator changed; the final count supersedes it.

Concurrent new work observed during planning includes Domain 3 Reading Notes `content/isc2-cc-2026/reading/domain-3.md`, `domain-3.js`, `domain-3-scenarios.js`; separate `domain-3-source-audit-and-mapping.md`/`domain-3-reading-notes-plan.md`; Domain 2 Reading Notes remediation reports; related browser/static tools, QA folders and scratch work. These were not created, edited, reviewed or removed by this Learning Slides task. Tracker row 128 was externally updated and rows 130–131 added for Reading Notes. Updating row 129 preserved all other tracker content; one duplicate CR introduced at this row's insertion boundary was removed after the whitespace check. Consequently, the overall tracker hash differs from the entry hash for legitimate concurrent reasons; it must not be reset to force a match.

HEAD stayed at the entry commit. Git status retained all original dirty entries. The change set attributable to this task is exactly the five documents and row 129 listed above; there are no Domain 3 Learning Slides data/runtime changes, and no protected application writes. Browser-profile/QA artifacts were excluded from the preservation scan and no assertion is made that concurrent browser state stayed unchanged.

**Readiness recommendation:** the research, correction decisions, scope map, storyboard and minimal integration plan are ready for human review. No Domain 3 Learning Slides are published, no visual-quality claim is made, and implementation must wait for explicit approval.
