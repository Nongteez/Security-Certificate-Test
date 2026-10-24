# ISC2 CC 2026 Learning Slides — Audit and Delivery Plan

**Task:** 55, planning only. **Audit date:** 2026-10-24 (Asia/Bangkok).
**Status:** Task 55 historical plan. Task 56 implementation/review/static verification completed; manual browser acceptance pending. Task 57 and later phases remain unstarted.

> **Task 56 authorization update (2026-10-24):** The user's Task 56 request authorizes the foundation implementation, superseding the planning-only restriction for that task. Implement the fourth card with the updated English description and Thai translation, bilingual learning controls, a private local generated fixture preview, and the existing static HTTP delivery model. Dependencies/build tools are permitted when justified; native modules need no additional packages for the implemented foundation. No real lesson, CIA pilot or Domain 1–3 curriculum is authorized here. Existing Task 55 findings below remain historical audit evidence. Implementation decisions, verification and manual QA requirements are recorded in `docs/learning-slides.md`.

Read with [architecture](learning-slides-architecture.md), [content guidelines](learning-slides-content-guidelines.md), and [task tracker](../task.md). These are the Learning Slides planning documents; no earlier Learning Slides plan was found.

## 1. Intent, scope and evidence rules

Help beginners understand cybersecurity concepts through an integrated presentation reader aligned with the outline effective September 1, 2026. Accuracy, readable explanations and useful application take priority over visual effects or content volume.

- **Verified** means observed in this working tree or checked against the linked primary source during this audit.
- **Reported** means an existing editorial/review artifact makes the claim; this audit does not independently endorse every academic conclusion.
- **Proposed** means a recommendation awaiting review, including all new paths, interfaces and schemas below.
- **Assumption** means an implementation premise that must be checked later. Static hosting with same-origin HTTP delivery is assumed; deployment headers and device behavior were not tested.

This task changes documentation only. No production HTML/CSS/JS/JSON, question banks, vocabulary, lesson files, dependencies or UI are changed. No browser automation is performed. Existing uncommitted changes and deletions are preserved. No complete lesson or publishable slide copy is produced.

## 2. Verified repository findings

| Concern | Current evidence | Consequence for the proposal |
| --- | --- | --- |
| Runtime | `index.html` mounts `#app`; `js/app.js` initializes theme and `renderApp`. Native ES modules, linked CSS, no package manifest/build pipeline found. | Extend the existing static app. No new framework or bundler. |
| Routing | `js/ui/renderer.js` switches on `state.screen`: home, exam-versions, cert-start, vocabulary, quiz, results, review-wrong. Callbacks change shared state and rerender. No History API/hash router found in runtime. | Add explicit learning routes; do not assume deep links or browser Back support already exist. |
| Selector | `selectCertification` in `js/core/state.js` opens `exam-versions` for ISC2 CC. `data/exam-versions.js` supplies three entries; `getExamVersions` filters certification IDs. `screen-versions.js` renders them. | Add one registry entry later; no separate Domain cards on this screen. |
| Three existing cards | Exact titles: **ISC2 CC — Pre-2026 Exam Outline**, **ISC2 CC — 2026 Exam Outline**, **ISC2 CC — Exam Vocabulary**. IDs are `2026`, `next-bank`, `isc2-cc-vocabulary`. | Preserve titles, identities, behavior and relative order. Internal `2026` identifies the legacy bank. |
| Non-exam handling | `resolveExamVersion` rejects typed non-exam entries. Card availability and selection guards special-case vocabulary; renderer special-cases its ID before `loadExamConfig`. | A registry-only change will not enable Learning Slides. Extend both availability and dispatch explicitly while preserving fail-closed exam resolution. |
| Language | `state.setup.language` is `en`, `th`, `both`; `updateSetup` changes it. `t()` in `i18n.js` deliberately returns English UI strings. Card copy is English; version information dialogs localize their content. | Keep navigation/card chrome English and apply language modes to educational content. Do not globally change UI translation behavior. |
| Theme | `index.html` applies saved theme before render; `js/core/theme.js` uses `sec_cert_test_theme`, defaults dark, applies `html[data-theme]`. | Keep site chrome themed; isolate the proposed white slide canvas from global theme changes. |
| State and persistence | Shared mutable object in `state.js`; quiz persistence in `storage.js`, key `sec_cert_active_session_v1`, schema 1, defensive reads and memory fallback. Theme persists separately. Language is in setup and quiz snapshots; no general language preference persistence found. | Use a separate learning progress store. Do not repurpose quiz sessions or imply an existing learning resume system. |
| Reusable styling | `base.css` theme tokens; `components.css` cards, buttons, badges, panels and responsive grid; `versions.css` scoped selector/dialog refinements. | Reuse class patterns; isolate new styles under learning screen/viewer roots. |
| Grid | `.cert-grid` has three columns above 1080px, two at 1080px and below, one at 640px and below; gaps 20/16/14px. | Four cards can naturally wrap 3+1 / 2+2 / 1+1+1+1. Four equal desktop columns are unnecessary. |
| Components/media | Theme-toggle component; timer and structured explanation components; inline SVG icons/score graphic, vocabulary CSS flip/modal animations and reduced-motion rule. Assets contain logo PNG and PDPA question JSON. | Reuse theme/focus conventions, not quiz logic. No existing presentation engine, general diagram renderer, media licensing registry, Mermaid/GSAP/Lottie/D3/Three integration or fullscreen utility found. |
| Accessibility examples | Version dialog uses escaped text, inert background, initial/return focus and keyboard close. Vocabulary styles include scoped reduced-motion overrides. | Adapt patterns with explicit viewer lifecycle cleanup; do not copy large screen modules wholesale. |

### Verified data counts

Counts came from read-only imports of runtime domain arrays and parsing vocabulary JSON, not registry labels alone.

| Dataset | Per-domain actual count | Actual total |
| --- | --- | ---: |
| Legacy questions (`versions/2026/questions/`) | 142 / 65 / 93 / 156 / 127 | 583 |
| Updated questions (`versions/next-bank/questions/`) | 24 / 39 / 23 / 0 / 0 | 86 |
| Vocabulary (`content/isc2-cc-2026/vocabulary/domain-{1,2,3}.json`) | 110 / 101 / 102 | 313 |

Updated D1 IDs are 584–607, D2 608–646, D3 647–669. Updated configuration marks D1–3 available and D4–5 unavailable. Existing 26-item D2 candidate reports do **not** describe the full current 39-item runtime bank. Question totals provide context, not proof of lesson coverage.

## 3. Official scope baseline

Verified through the [ISC2 outline page](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) and its linked [English PDF, v01/2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed pp. 3–7. Use the dated PDF's numbered objectives as the scope baseline. The web page still contains an older introductory domain list; do not derive the new taxonomy from that introduction.

| Domain | Published title | Weight | Objective codes and planning coverage |
| --- | --- | --- | --- |
| 1 | Security Principles | 24% | 1.1 concepts; 1.2 risk; 1.3 governance; 1.4 controls; 1.5 professional conduct |
| 2 | Security Governance | 17.3% | 2.1 GRC; 2.2 redundancy/BC/DR; 2.3 awareness; 2.4 effectiveness measurement |
| 3 | Identity and Access Management (IAM) Concepts | 20% | 3.1 identity lifecycle; 3.2 logical access |
| 4 | Networking and Cloud Security Concepts | 21.3% | 4.1 network protection; 4.2 architecture; 4.3 cloud |
| 5 | Security Operations and Incident Response | 17.3% | 5.1 data; 5.2 operations; 5.3 incident response; 5.4 asset protection; 5.5 testing |

The displayed domain weights sum to 99.9%; the PDF prints a 100% total. Preserve the published values and explain rounding if displayed. Do not invent objective weights, lesson quotas, slide quotas or additional official sub-objective numbers. AI integration commentary on ISC2's page is supplementary official guidance, distinct from the numbered PDF bullets.

## 4. Learning material inventory and readiness

### Inventory method and limits

Recursively enumerated the actual `ISC2 Update 2026` tree: only Domain 1, Domain 2 and Domain 3 directories exist. There are no PDFs, editable decks, audio/video files or separate media packages in this input tree. Markdown study notes are present, contrary to older inventories. Sampled transcript text, read source/review records and knowledge coverage, and inspected three disputed screenshots directly (D1 S05, D2 S36, D3 S13). This was **not** a fresh visual inspection of all 115 PNGs or a complete revalidation of every source claim. Existing per-capture review tables supply the broader inventory evidence and must retain their reported status.

| Domain | Actual files now in original input directory | Knowledge and objectives available | Review/readiness judgment |
| --- | --- | --- | --- |
| 1 | 62 files: `Domain 1.md`, `Script - DOMAIN 1.txt`, 60 PNG captures. Archive under `content/.../sources/domain-1/` also contains transcript and captures. | Extracted map has 43 KNOW headings across 1.1–1.5; curation plan has 39 units and 91 distinct candidate IDs. These counts describe different entities. CIA/AAA/privacy, risk, governance, controls and ethics are represented. | Suitable for a narrowly bounded pilot storyboard after source correction; **not** a reviewed full-domain slide curriculum. Extraction and curation frontmatter remain draft; Thai human review is pending. |
| 2 | 40 files: `Domain 2.md`, `DOMAIN 2.txt`, 38 PNGs. Prior inventory reports 37 course captures and one unrelated product image, S20 (`Screenshot 2026-09-20 201852.png`). | Phase 2 has 54 concepts mapped across 2.1–2.4. Phase 3 reports 43 pass, 9 revision, 2 blocked. Phase 3.5 reports 43 pass + 9 corrected candidates = 52 plannable, 2 quarantined. | Strong source base for selective storyboarding using corrected records; whole-domain release **not ready**. Human sign-off and official AI supplementation remain open; later summary drift must be reconciled. |
| 3 | 23 files: 17 PNGs, `DOMAIN 3.txt`, and five Markdown files: `Domain 3.md`, `source-review-and-coverage-analysis.md`, `domain-3-knowledge-map.md`, `question-bank-review.md`, `vocabulary-review.md`. | Working map in the original input directory has 25 entries: 15 accepted, 10 corrected; reports coverage of eight outline bullets across 3.1–3.2, plus AI context. | Best developed supplemented authoring baseline, but **assistant-verified**, not human-approved for new slide publication. Financial SoD diagram remains excluded. Recheck reused claims and translations in lesson review. |

### Domain 1: evidence, limitations and production conditions

- Read [knowledge map](../../../content/isc2-cc-2026/sources/domain-1/extracted-knowledge/knowledge-map.md), [source quality report](../../../content/isc2-cc-2026/sources/domain-1/extracted-knowledge/source-quality-report.md) and [curation plan](../../../content/isc2-cc-2026/knowledge/domain-1-curation-plan.md). The extraction folder also has terminology, concept distinctions and exam-language guidance.
- [Academic review export](../../reviews/isc2-cc-2026-domain-1-review.md) is a 24-question verbatim export for review, not a signed approval. Vocabulary review reports 110 accepted terms, while all 110 runtime entries still have `review_status: draft`; source statuses include review-required material. Reuse terminology only after claim-level review.
- Source quality records SQ-01–SQ-18 and curation hold P3-01 remain relevant. Examples: unreadable captures S31/S36, transcript ARO discrepancy, confidentiality/integrity overlap, unsupported hash/authenticity implications, instant-recovery assumptions, legal/privacy scope, control categorization, ethics precedence and uncertain reuse rights.
- The later Thai `Domain 1.md` explicitly says it was not checked against all original slides/transcript or official coverage. It includes non-repudiation and cross-domain Zero Trust, while the earlier extraction reports no explicit non-repudiation teaching in the raw course. Treat this as supplemental notes requiring provenance, not closure of SQ-16. Do not label all of 1.1 covered by a CIA lesson.

### Domain 2: evidence, limitations and production conditions

- Start at [Phase 1 inventory](../../../content/isc2-cc-2026/sources/domain-2/notes/phase-1/source-inventory.md), [Phase 2 coverage](../../../content/isc2-cc-2026/sources/domain-2/extracted-knowledge/objective-coverage-matrix.md), [Phase 3.5 summary](../../../content/isc2-cc-2026/sources/domain-2/phase-3.5/phase-3.5-summary.md) and [blocked register](../../../content/isc2-cc-2026/sources/domain-2/phase-3.5/blocked-unresolved-issue-register.md). Phase 3 academic/translation reports and Phase 4–7 question records are supporting audit history.
- Keep `KNOW-D2-028` (regulatory recovery/PHI overreach) and `KNOW-D2-054` (scorecard units) excluded. Direct inspection of S36 shows `<10` and `12` with no percentage units in the vulnerability row. The transcript/report disagreement is not resolved by choosing a unit.
- Phase 3.5 records corrections to ordinal risk scales, recovery-site assumptions, backup recovery bounds and metric milestones. Its translation status remains `needs-human-review`. The 101-term vocabulary approval flags do not override these lesson-specific conditions.
- Significant record conflicts: Phase 3.5 readiness matrix paraphrases objective titles as if official and assigns unsupported approximate per-objective percentages. Its gap register's AI backup/model-drift/metrics topics do not match the later Phase 7 deferred register's reused GAP identifiers. Phase 7 also changes the two quarantine explanations and reports a 26-item candidate bank still awaiting release, whereas runtime now has 39 D2 items. Preserve the earlier issue meanings, record the conflict, and reconcile exact sources before D2 storyboarding. Do not silently adopt the newest summary.
- Official AI commentary checked in this audit includes awareness of automated social engineering, AI continuity/recovery and AI risk indicators. Course absence is a supplementation requirement; it is not evidence those subjects are outside scope. Do not require course evidence as the only permissible future source.

### Domain 3: evidence, limitations and production conditions

- Read [source review](../../../ISC2%20Update%202026/Domain%203/source-review-and-coverage-analysis.md), [supplemented knowledge map](../../../ISC2%20Update%202026/Domain%203/domain-3-knowledge-map.md) and [question review](../../../ISC2%20Update%202026/Domain%203/question-bank-review.md). The map explicitly says primary-source checked by assistant and human sign-off not performed.
- Original course is weaker on ABAC, IAM tool distinctions and AI/service identities. The map supplements them using NIST and primary vendor references; supplementation is separate from course support. Review the exact referenced editions when producing lessons.
- Avoid identity=username, unused=orphaned, MAC=clearance alone, disabling one account=revoking every session, and anomalous login=proof of compromise. The SoD illustration/text disagree about roles; direct S13 inspection confirms the ambiguity.
- Both vocabulary review copies (`ISC2 Update 2026/Domain 3/vocabulary-review.md` and `content/.../vocabulary/domain-3-review.md`) say 19.8% and S01–S34. Official D3 weight is 20%, and only 17 PNGs exist. Treat the reports' blanket verification claims cautiously. No corrections to those artifacts are made in Task 55.

### Knowledge Base and source organization reality

`content/isc2-cc-2026/knowledge/domain-{1..5}.md` still contain empty staging sections/templates, despite populated extraction and review records elsewhere. `templates/knowledge-template.md` is Markdown governance, not a machine-enforced lesson schema. `vocabulary/schema.md` documents a different data model; never infer lesson approval from vocabulary status. Some older plans/readmes still say next-bank is empty or Domain 4 numbering unverified. These are historical snapshots, not current facts: the official PDF now verifies 4.1–4.3.

The content README's old claim that all `content/` is staging is also overbroad: `vocabulary-loader.js` directly loads vocabulary JSON there. Keep proposed unpublished slides separate from a published allowlist. D2/D3 source archive READMEs and the original source manifest may lag original input directories; do not fabricate archive IDs for unregistered files.

Domains 4–5 have structural scope and staging templates, with no supplied original learning materials or published updated questions in this tree. Support their objective rows with `lessons: []` and Coming Soon status. Do not generate lesson-shaped placeholders or advertise their content as available.

## 5. Entry point and Learning Center proposal

Add a fourth entry only in a later implementation task:

- **Title:** ISC2 CC — Learning Slides
- **Description:** Learn cybersecurity concepts through interactive presentations, visual explanations, and structured lessons aligned with the 2026 ISC2 CC exam outline.
- Proposed ID/type: `isc2-cc-learning-slides` / `learning`; no exam config, question-bank reference or fabricated question count.
- Reuse existing card shell, footer/status badge, buttons, spacing and grid. Retain responsive wrapping; an isolated 2+2 desktop selector layout could be considered later but is unnecessary for the first implementation.
- Keep title, description and navigation chrome English consistently with the current selector. Content inside the center/viewer follows EN/TH/EN+TH. A future Thai description may be stored as reviewed content but must not change the other cards' language contract.
- Before a real reviewed lesson is published, show **Coming Soon** with a disabled action. Test-only fixtures or an empty Learning Center do not qualify. With a real published lesson, enable **Open Learning Center** and show partial coverage truthfully.

Hierarchy: **Learning Center → Domain → Learning Objective → Lesson → Slides**. A single center lists all five Domains; each Domain expands to official objective rows, then available lesson links and clearly disabled preparation labels. The lesson page includes a short synopsis, prerequisites, learning outcomes, publication/review date, references and Start/Resume, then opens the reader. Return restores the same expanded Domain/objective and focused lesson link.

Publication status and personal progress are independent: `published` → Available, `in-preparation` → Under preparation, `coming-soon` → Coming Soon; personal labels are Not started, In progress, Completed. Counts include published lessons only. No fixed lesson count, no empty-lesson progress denominator, and no implication that completing one lesson completes an objective or Domain.

## 6. Viewer experience proposal

| Normal reader | Fullscreen presentation |
| --- | --- |
| Prominent 16:9 stage; lesson heading/breadcrumb; Previous/Next; slide n/N; Fullscreen; return to lesson contents. | Fullscreen the presentation surface only. Hide website chrome, thumbnail filmstrip and persistent navigation buttons. |
| Bottom horizontal filmstrip of labeled thumbnail buttons; selected slide visible and keyboard reachable. | Click/tap the left/right half of noninteractive slide surface to move back/forward; no slide wrapping at boundaries. |
| Restore the last valid slide for this lesson/version when resuming. Language changes preserve position. | ArrowLeft/ArrowRight and literal `<`/`>` keys navigate. Escape/browser exit restores normal reader on the same slide. |
| Touch-friendly controls, independent filmstrip scrolling, loading/retry and missing-asset fallback. | Ignore navigation when events belong to an input, link, button, media/diagram control, selected text or an interactive module; no wheel slide switching. |

Keep slide aspect ratio; do not shrink bilingual text into unreadability to fit narrow portrait screens. Provide a companion reflow reading view from the same content, at the same slide position, with full text/diagram description. Offer landscape/fullscreen as optional choices. Do not force orientation or disable zoom. The reader and center must remain usable at 320px and enlarged text. W3C's [reflow explanation](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) distinguishes presentations from general reading content; this proposal still provides accessible reflow instead of relying on that exception.

Fullscreen is progressive enhancement. Request it only from a user action, detect support, handle rejection and use `fullscreenchange` as the state authority; [WHATWG Fullscreen](https://fullscreen.spec.whatwg.org/) defines the lifecycle. If denied/unsupported, stay in the usable normal reader and explain briefly. For touch devices without a hardware Escape, a temporary presentation help/exit affordance on deliberate long-press (and keyboard/focus access) is proposed; it is not persistent navigation. Browser-specific exit behavior and touch affordance need later device QA. Do not claim native fullscreen hides browser-mandated UI.

See architecture for focus ownership, cleanup and event rules. This task performs no functional/browser verification of the proposed experience.

## 7. Proposed Domain 1 pilot

**Topic:** CIA Triad — identify the security goal affected in a workplace event. Map to **1.1**, explicitly a subset. Learners should distinguish disclosure, improper change and service disruption; explain why one incident may affect several goals; connect a control to its intended goal without universal-answer shortcuts.

Evidence anchors: D1 `KNOW-D1-001`–`007`, curation U01–U04 and O01–O03, captures S04–S11, transcript blocks beginning 00:05:55 through 00:17:26. Use only bounded accepted claims; resolve SQ-13 against an independent technical source. [NIST FIPS 199](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf), section 3 / printed p. 2, checked in this audit, distinguishes unauthorized disclosure, improper modification/destruction and disruption of access. Use these definitions as technical evidence without asserting that federal categorization requirements bind every organization.

| Storyboard beat (proposed, not production copy) | Purpose / presentation choice | Evidence or review boundary |
| --- | --- | --- |
| 1. Orientation | A simple title and the learner's decision target; no decorative image required. | 1.1 and KNOW-D1-001; do not imply complete objective coverage. |
| 2. Three security goals | Concise explanation with a labeled SVG or equally clear text arrangement. | KNOW-D1-001/002/004/006 plus FIPS 199. |
| 3. Disclosure example | Original workplace vignette about unauthorized viewing; optional illustration. | Curation U02; correct S05's alteration overlap (SQ-13). |
| 4. Change versus disruption | Comparison with two short examples; could be text/table, not another card grid. | U03/U04; avoid hash authenticity guarantees and instant backup recovery. |
| 5. One incident, several impacts | Optional accessible reveal diagram showing distinct impacts; static version conveys the same meaning. | Instructor examples inform the concept; the new scenario must be labeled original and reviewed. |
| 6. Apply the distinction | Optional unscored scenario reflection/reveal with explanation. | New educational scenario, not an official ISC2 item; does not call the quiz engine. |
| 7. Takeaways and references | Reusable decision prompts, source access and explicit finish/return action. | Citation trail and limitation: remaining 1.1 topics need other lessons. |

Seven beats are an initial storyboard, not a required slide count or template for every lesson. Split/combine after bilingual readability review. Do not draft the full English/Thai slide copy, art or scenario answer set in Task 55. Avoid legal rules, cryptographic algorithm advice, risk calculations and contested ethics precedence in this pilot. AI examples are optional future supplementation, not a quota.

## 8. Subsequent phases and recommended Task 56

Task 56 was authorized by the subsequent implementation request and its actual results are recorded in [the implementation report](../../learning-slides.md). Tasks 57–60 remain proposals, not approved execution tasks. Historical planned file responsibilities/interfaces are in the architecture document; the implemented schema/report records deliberate differences.

| Phase / proposed task | Independently reviewable deliverable | Verification / exit condition |
| --- | --- | --- |
| **Task 56 — Native foundations** | Schema contract/validator, published catalog with all five Domains and no fake lessons, learning-specific loader/state/progress, normal viewer/filmstrip and fullscreen lifecycle exercised through test-only fixtures. Fourth card remains disabled Coming Soon until a real lesson release. | Reject invalid/unpublished paths; progress versioning and storage-failure tests; normal/fullscreen boundary and interactive-event tests; manual responsive/keyboard/device QA when authorized. Existing quiz/vocabulary checks and legacy hash preservation pass. No production lesson or mass translation in this task. |
| **Task 57 — Pilot evidence and storyboard approval** | Claim/source map, SQ-13 correction, original storyboard, EN/TH text drafts, rights ledger, named technical and bilingual review evidence. | Every slide claim/diagram/scenario traced; unresolved dependent claims held; no approval inferred from old question or vocabulary reports. |
| **Task 58 — One real pilot and entry activation** | Reviewed D1 pilot, layout variation, necessary original/cleared assets, functional center and viewer; fourth card enabled only with that published lesson. | All available modes readable; media/text alternatives work; no interactive navigation accidents; normal→fullscreen→normal position retained; real lesson load verified. |
| **Task 59 — D1–3 expansion** | Evidence-led lesson batches, resolving D2 record conflicts and D3 review metadata first. | Academic and structural gates per lesson; no domain completeness claim without an objective coverage map. |
| **Task 60 — D4–5 intake and later expansion** | Verified source inventory, scope mapping, separate lesson approvals. | Remain Coming Soon until genuine reviewed content exists. |

### Proposed implementation work breakdown for Task 56

- [ ] Freeze a fresh working-tree baseline; recheck this plan against any intervening changes. No reset, cleanup or overwrite of unrelated work.
- [ ] Specify failing contract checks for published/empty catalogs, objective relations, unique IDs, unsafe paths and bilingual validation; implement the minimum catalog/loader boundary and verify those checks.
- [ ] Specify failing progress checks for unknown lessons, corrupt payloads, blocked storage, changed revisions and sparse thumbnail jumps; implement isolated progress persistence and verify them.
- [ ] Specify failing viewer checks for clamped navigation, controls consuming input, literal key mappings, stale async loads and teardown; implement normal viewer and lifecycle boundaries, then verify.
- [ ] Specify fullscreen rejection/external exit tests, retain the same position, and confirm handlers clean up on leave. Implement only the native fullscreen adapter.
- [ ] Wire learning routes and card handling without weakening exam resolution; keep unpublished entry disabled. Check the three original cards, both banks and vocabulary through existing verification tools.
- [ ] Perform later human/device QA for layout, screen reader/focus, Thai/EN+TH expansion, touch, reduced motion and fullscreen limitations. Record the tested browser/device matrix and unresolved issues; fixtures remain outside the published catalog.
- [ ] Review only scoped changes and document verification; do not enable Available or proceed to pilot authoring implicitly.

Existing relevant tools: `tools/verify-exam-versions.mjs`, `verify-complete-isolation.mjs`, `verify-phase4-quiz-engine.mjs`, `verify-session-persistence.mjs`, `verify-domain3-integration.mjs`, `verify-exam-vocabulary.mjs`. Inspect their current assertions before running in implementation, since the working tree contains newer uncommitted changes. Proposed new checks: `tools/verify-learning-catalog.mjs`, `verify-learning-progress.mjs`, `verify-learning-viewer.mjs`. Their presence/coverage is not claimed today. Task 55 itself uses static checks and hashing, not an app regression test claim.

## 9. Risks, defaults and open decisions

| Risk / decision | Proposed disposition |
| --- | --- |
| Rights and provenance of user-supplied courses | Private reference only until reuse rights established. Independently author teaching text and diagrams; no screenshot deck republication. |
| Stale/conflicting academic artifacts | Keep issues linked and versioned. Do not equate assistant passes, runtime availability or vocabulary flags with slide approval. |
| Bilingual density versus 16:9 | Same slide IDs, language-specific layouts and companion reflow reading mode; split content rather than shrink it. |
| Fullscreen/touch exit | Normal reader always works. Review temporary touch help/exit design and device support in Task 56; no pseudo-fullscreen silently presented as native. |
| Global full rerenders | Keep slide navigation inside the viewer instance and dispose on route changes. Avoid resetting interactive state or stacking document listeners. |
| Uncommitted workspace changes | Rebaseline before implementation. Task 55 appends tracker history and adds only the three plans. |
| Publishing evidence | Proposed gate: named accountable technical and Thai-language reviewers, dates and exact content revision. Reviewer identity remains to be assigned before the pilot release. |
| Progress and completion | Proposed local, per-device storage; completed means read/acknowledged, not exam mastery. No accounts, synchronization, analytics or timed grading in first release. |
| URLs/browser Back | Explicit in-app breadcrumbs first; shareable deep links are deferred unless requested. |
| Thumbnail art and optional libraries | Semantic preview/title fallback first; later generated thumbnails only when useful. No screenshot-capture service or required animation package. |

## 10. Acceptance criteria

### Task 55 documentation acceptance

- [x] Actual runtime/card/routing/language/theme/storage/style behavior inspected; counts verified from arrays/JSON.
- [x] Actual D1–3 input inventory, knowledge placement, reported review status and concrete conflicts recorded; D4–5 absence distinguished from structural support.
- [x] September 2026 official PDF scope checked, including 4.1–4.3; technical and accessibility sources linked.
- [x] Center/viewer/entry UX, schema, bilingual/media strategy, academic workflow, pilot storyboard and subsequent phases documented.
- [x] Tracker extended without discarding prior work. Only requested planning Markdown edited; final scope checks and their limitations are recorded below.
- [x] No production implementation, dependency installation, complete lesson creation or browser automation. Stop for review after Task 55.

### Future release acceptance (not tested or completed here)

- [ ] Exactly one new module card, the original three preserved; available only with a real accessible published lesson.
- [ ] One center contains five Domains and correct objective relations; D4–5 have honest empty/Coming Soon states.
- [ ] Publication and learner progress statuses are separate; valid resume across mode/language changes, missing/reordered slides and storage failure.
- [ ] Normal mode has 16:9 stage, thumbnail navigation, n/N, Previous/Next, Fullscreen and return; no inaccessible text clipping in any language mode.
- [ ] Fullscreen hides chrome/filmstrip/persistent nav; half-stage clicks and required keys work; Escape/external exit retains slide; controls and wheel input do not accidentally navigate.
- [ ] Keyboard/focus/touch, reduced motion, zoom/reflow, dark/light chrome, unsupported API and asset/load failure cases verified on recorded devices.
- [ ] Each published lesson passes separate academic, bilingual, rights, structural and visual/function checks against the same revision.
- [ ] Legacy 583 questions remain byte-identical to the implementation baseline; updated bank, vocabulary and quiz behavior regressions checked.

## 11. Audit verification record

Before writing, generated SHA-256 hashes for 617 existing non-Git files in a temporary audit manifest. That manifest did not persist across the tool's isolated shell calls, so a complete 617-file before/after hash comparison cannot be claimed. Read-only runtime counts were verified using the installed Node runtime. Completion checks instead inspect the actual four-file edit set, compare Git status with the recorded starting status, validate local document links, preserve the tracker's original text as a prefix, and verify the legacy bank has no Git diff (it was also clean at task start). These checks establish the documented edit scope and unchanged legacy bank; they are not academic or browser UX verification, nor a byte-for-byte proof of every pre-existing dirty file. No production file write was performed in this task.

Final static results: all local links in the three new documents and tracker resolve; Markdown code fences are balanced; tracker whitespace check passes; legacy-bank diff is empty. A separate read-only builder check identified the multi-objective lesson ownership ambiguity; the architecture now explicitly defines `primaryObjectiveId`, `relatedLessonIds`, single ownership and deduplicated totals. No other significant contract gaps were reported. Application tests and browser checks were intentionally not run for this documentation-only task.
