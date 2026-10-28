# Lesson 8 — Governance & Applicable Requirements

Status: implemented and production desktop-verified on 2026-10-27; awaiting user visual/academic acceptance. Lesson 8 only.

## Confirmed scope and implementation plan

Roadmap L08 maps to official Domain 1 / Objective 1.3 (governance, especially regulations/laws). A §§25–26 and B §7/7.2 teach direction, oversight, accountability, alignment, applicability and compliance. Both mandatory notes have been reread in full; earlier lessons and the L07 audit were inspected to preserve boundaries. L04 already teaches privacy handling, L05–07 risk decisions; no full governance/applicability unit exists. A §§27–34 and B7.1 framework/document depth remain L09. No factual sequencing correction is needed. PCI DSS is a standard, not legislation; named examples are bounded to actual scope. Official Domain1 AI integration supports one original AI intake case, not a new objective or invented law.

Use nine focused slides rather than a dense glossary or a full legal catalogue. Outcomes: explain governance purpose/roles; distinguish public legal obligations from contractual requirements; identify facts needed for applicability; correctly bound GDPR/HIPAA/PCI DSS examples; distinguish compliance evidence from overall security; route an AI adoption proposal through accountable review.

| Slide | Objective / central message | Source / terminology / visual |
| --- | --- | --- |
| 1 | Explain governance as direction, oversight and accountability | A25, B7; three connected pillars |
| 2 | Distinguish governing decisions from day-to-day management | A25, B7; direction/action/feedback split |
| 3 | Identify the source of an obligation | A26, B7.2; law/regulation vs contractual-standard lanes |
| 4 | Investigate applicability before declaring compliance | A26; location/role/data/service filters |
| 5 | Bound GDPR and HIPAA examples without global claims | A26, B4.2; EDPB and HHS; two scoped examples |
| 6 | Explain PCI DSS scope and retained duties when outsourcing | A26; PCI SSC primary pages; data/provider/responsibility chain |
| 7 | Distinguish compliance from security | B7.2; assessment evidence vs continuing risk comparison |
| 8 | Apply governance to an AI intake with insufficient facts | A25–26, official AI paragraph; three-choice educational case |
| 9 | Trace requirement to owner, action, evidence and review | A25–26, B7.2; annotated requirement record |

Architecture: new bounded governance renderer and scoped white HTML/CSS/SVG; semantic comparison/interactive blocks with full paired detailed explanations and Info. Stable lesson-d1-08-governance ID; append validated published lesson under 1.3; preserve all prior IDs, progress schema and runtime ownership. No dependencies or network assets. Existing Viewer and selectors reused.

Sequence: capture baseline; write/run failing tests for publication/content, nine bilingual compositions/full Info/reading, semantic fallback, case cleanup/state and eight-lesson independent progress; author and integrate; run relevant regressions and investigate changed expectations; inspect all 36 real production desktop cases and interaction, language, navigation, Info, reading, selection, reload/Resume and seven previous lessons; update exact coverage/files/report/roadmap/tracker/integrity and stop. User authorizes current-workspace implementation through delivery; no extra gate, worktree, commit or deployment. No Lesson9/Domain2.

## Delivered implementation and review

Nine stable slides use the ID/order in the plan above under `lesson-d1-08-governance`, revision 1. Catalog revision 8 publishes only the new 1.3 lesson; existing content/IDs/order remain. English application controls are retained in TH/EN; educational headings, explanation and feedback are paired. Original HTML/CSS/SVG uses no new dependencies, external assets, framework or build step. The eight primary/note references are attached per slide. Detailed semantic blocks remain available in reading mode and all nine Info explanations.

The renderer accepts only the exact lesson ID, known slide IDs and expected block/table shapes; other content retains semantic fallback. Lesson-specific CSS is scoped. Content enters through text nodes; SVG is fixed authored markup. AI choices use native buttons, visible focus, aria-pressed and a polite feedback region. A per-render AbortController and parent abort cleanup own listeners. Choices are temporary viewer interaction state, preserve language-switch state and do not add persisted fields, scores, uploads, timers or network work. Existing controller, fullscreen ownership, routing and progress implementation remain untouched. Publication validation still fails closed. Review found no additional code defect.

Actual visual correction: slide 2 initially used vertical arrows between horizontally arranged governance/management columns. Corrected to Direction → and ← Evidence (paired Thai); recaptured both 1366 screenshots. No accepted earlier composition was redesigned.

## Source review and academic boundaries

Both source notes were read completely: A `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733 lines) and B `ISC2 Update 2026/Domain 1/Domain 1.md` (405). A25–26/B7–7.2 are the lesson foundation. Earlier privacy/risk lessons are prerequisites rather than repeated units. Authoritative checks supplement the short source examples:

- [ISC2 official outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline): effective September 1, 2026, 1.3 governance and Domain 1 AI integration.
- [NIST CSF FAQs](https://www.nist.gov/cyberframework/faqs): governance roles, accountability and alignment; framework depth deferred.
- [EDPB data protection basics](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en): GDPR establishment/targeting/monitoring scope, not citizenship alone. Full jurisdictional analysis is not claimed.
- [HHS covered entities](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html): HIPAA covered entities/business associates, not all health-data holders.
- [PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/) and [outsourcing FAQ](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/): industry standard, defined data/environment scope and retained merchant responsibilities. No prescribed questionnaire or invented legislative status.

The AI clinic intake and requirement record are original educational examples, identified as such. They do not classify a real clinic or constitute legal advice. Technical/bilingual/rights checks are implementation self-review; no independent human academic approval is claimed. No exam guarantees.

**Objective 1.3: Partial.** Purpose/roles, regulations/laws and applicability are covered at this unit's course depth (slides 1–6), compliance/security distinction and evidence/review applied (7–9). Frameworks/guidelines and policy/standard/procedure hierarchy, ISO/CIS context remain L09. Basic AI intake is not complete Domain 1 AI coverage. Objective 1.2 remains educationally complete across L05–07, human acceptance pending. No L09/Domain2 started.

## Actual production browser verification

Used the public staged production index/app, not a fixture viewer. All nine slides were individually captured and visually inspected in TH and EN at **1366×768 and 1920×1080: 36/36 required cases**. All three AI feedback choices were also inspected in each size/language: **12/12 states**, including keyboard Enter activation. Required screenshot patterns: `artifacts/qa/lesson-d1-08-governance/{1366,1920}-{th,en}-slide-{01..09}.jpg`; feedback ends in `intake-{0..2}.jpg`.

[Geometry evidence](../../../artifacts/qa/lesson-d1-08-governance/browser-measurements.json): all required scenes stayed in presentation mode, no canvas scroll overflow, no essential text outside the stage, minimum main/footer gap 15.40625px. Actual stage 1187.546875×668 at 1366; 1742.21875×980 at 1920. Visual inspection confirms readable wrapping/Thai glyphs, appropriate whitespace and English controls; geometry alone is not the visual acceptance claim.

[Functional evidence](../../../artifacts/qa/lesson-d1-08-governance/browser-functional-results.json):

- Language switching retained the current AI choice and localized feedback; app buttons stayed English. All three choices worked without scores or saved answer fields.
- Slides overview navigated all nine; workspace ArrowRight reached 9/9 after leaving reading mode.
- Info: all nine English navigation labels; Thai slide 5 and English slide 9 detailed explanations inspected. Thai slide 8 reading mode showed full semantic content; returned to presentation successfully.
- Reload: Learning Center showed last viewed 6/9, 9/9 visited, 0/8 lessons completed. Resume opened slide 6 directly. AI choices reset after reload (all aria-pressed=false), as intended for transient interaction state.
- Existing selectors retained four lessons in 1.1 and three in 1.2. Opened all seven earlier lessons: CIA3/8, AAA1/7, NR1/6, Privacy1/8, Foundations1/8, Assessment1/8, Response1/10. L08 remained independently at 8/9 when returning to 1.3.
- Browser error/warning log query returned none after recovery. The browser/app connection closed once and stopped its server; recovered the same staging, preserved screenshots, resumed unfinished cases. This was not a lesson failure.
- Left L08 slide1 TH at 1920 for review; did not acknowledge Finish Lesson on the user's behalf.

Support screenshots include `progress-after-reload.jpg`, `resume-slide-06.jpg`, `lesson-info-th.jpg`, `lesson-info-en.jpg`, `reading-th.jpg` and seven `*-progress-preserved.jpg` images in the same evidence folder. Native fullscreen was not freshly exercised; no mobile/tablet, other browsers, screen-reader or non-default zoom verification claimed. Human visual/academic/bilingual acceptance remains outstanding.

## Automated checks and legacy failure classification

Fresh focused command (150/150 pass):

```powershell
$checks = @('governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations') | ForEach-Object { "tools/verify-learning-$_.mjs" }
$checks += @('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @checks
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
```

[Focused output](../../../artifacts/qa/lesson-d1-08-governance/node-verification.txt). New five tests were first run red before implementation; exercise source/content/publication, nine compositions and reading/Info, fallback, interaction cleanup/state and independent eight-lesson storage. Initial broad run exposed ten expectations affected by adding the eighth published lesson; updated counts/list/selection and published-1.3 failed-loader gating assertions, preserving prior lesson assertions and fail-closed behavior. No expected hashes were changed. Syntax checks passed for new renderer/test and modified dispatch/Info modules. `git diff --check` passed.

[Legacy Vocabulary output](../../../artifacts/qa/lesson-d1-08-governance/vocabulary-verification.txt): 11 tests, 6 pass, 5 fail, same historical failures as L06/L07. Each is **pre-existing / outdated expectation**, not a Lesson8 regression:

| Failure | Evidence and classification |
| --- | --- |
| Exactly three registry entries / unavailable Vocabulary | Existing registry has four including Learning; Vocabulary available with313 terms. Obsolete expectation. |
| Direct unavailable Vocabulary must never select | Fixture spreads currently available metadata; existing vocabulary routing is available. Obsolete unavailable-fixture assumption. |
| Three-card screen/two disabled actions | Existing four-card screen already live before L08. Obsolete UI expectation. |
| Localized new-card/dialog copy | Assertion expects older localized card sentence; current application copy follows English-only UI boundary. Obsolete copy expectation. |
| Historical registry/dialog/bank integrity | Fails on old next-bank metadata (coming-soon/null loaders versus already available86 questions) before reaching the later hash loop. Not evidence of changed exam banks or a new dialog mismatch. |

Legacy test and its production dependencies are byte-identical to this lesson's entry baseline; prior L07 output records the same failures. No unrelated code, hash or test weakening. Current Vocabulary filter/full-form checks pass; no fresh Quiz/Vocabulary browser QA claimed. Focused Quiz/session checks pass. Protected583-question bank and all other bank/Vocabulary files remain byte-identical to baseline.

## Exact implementation files and preservation

Created:

- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`
- `js/ui/learning/governance-presentations.js`
- `css/learning-governance.css`
- `tools/verify-learning-governance.mjs`
- `docs/plans/isc2-cc-2026/lesson-d1-08-implementation.md`

Modified existing files for this lesson (13):

- `content/isc2-cc-2026/learning/published/catalog.json` — append reviewed lesson and publish1.3.
- `index.html` — scoped stylesheet.
- `js/ui/learning/renderers.js` — bounded renderer dispatch.
- `js/ui/learning/lesson-info.js` — nine full explanations.
- `tools/verify-learning-catalog.mjs`
- `tools/verify-learning-non-repudiation.mjs`
- `tools/verify-learning-privacy.mjs`
- `tools/verify-learning-risk-foundations.mjs`
- `tools/verify-learning-assessment.mjs`
- `tools/verify-learning-risk-response.mjs`
- `tools/verify-learning-phase2.mjs` — these seven existing checks reflect appended publication without weakening prior assertions.
- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
- `docs/plans/task.md`

Added QA evidence under `artifacts/qa/lesson-d1-08-governance/` (baseline/catalog snapshot, red/initial/final test logs, geometry/functional/integrity JSON, screenshots). Staging files under ignored `.learning-preview/` support local QA only. Existing dirty L06/L07 work was retained.

[Integrity evidence](../../../artifacts/qa/lesson-d1-08-governance/integrity-check.json): 1,194-entry baseline, 1,181 byte-identical, exactly13 expected existing modifications, none missing. All seven earlier lesson JSONs, source notes, old renderers/CSS, viewer/controller/progress core, Quiz/Vocabulary and exam banks preserved. `sec_cert_learning_progress_v1` and IDs unchanged; no migration. Seven staged runtime files match workspace bytes. No new dependencies.

## Local review and stop

Open http://127.0.0.1:4188/ while the bounded public preview is running: Open Certification → Learning → Domain1 → Objective1.3 → Start Learning. One lesson means no redundant selector; opens its stored slide directly. Use Slides for1–9, TH/EN for educational content and Info for complete explanations. White presentation design retained. Server serves the isolated public staging, not repository notes/fixtures.

Lesson8 implementation and requested desktop QA are complete; human acceptance and the explicit untested environments above remain. Objective1.3 stays Partial pending L09. Stop for user review; no next lesson authorized or started.
