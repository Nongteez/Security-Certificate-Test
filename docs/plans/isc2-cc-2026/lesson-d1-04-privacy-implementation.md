# Lesson 4 — Privacy & Personal Data

Status: implemented and desktop-verified on 2026-10-26; awaiting user visual/academic acceptance. No Lesson 5 or Domain 2 work started.

## Plan and scope

Follow the existing roadmap, Objective 1.1. Only L04 is authorized. Retain the current white presentation system, stable IDs and V1 progress. Existing CIA/AAA/non-repudiation compositions remain untouched. No dependencies or schema migration.

Use eight concept-specific HTML/SVG compositions with paired semantic content: (1) privacy vs confidentiality, (2) identifiable personal data, (3) subject/controller/processor and ownership responsibilities, (4) purpose and minimization, (5) inventory, (6) retention, (7) conditional erasure, (8) applied AI reuse scenario. Keep complete explanations in reading mode and Lesson Info. Examples are original teaching examples, never official exam questions. GDPR details are labelled EU context, not universal law.

Ordered work: capture dirty-tree baseline; verify primary sources and author paired content; add failing publication/rendering/interaction/progress tests; implement isolated trusted renderer and CSS; append catalog and Info integration; run checks; inspect all 32 real production-viewer desktop cases; check selector, Info, keyboard, language, independent reload/resume; compare protected files; update roadmap/tracker/report and stop.

The brief explicitly authorizes all phases through delivery, so no intermediate design approval or commit is requested. Work stays in the user's current dirty workspace. Review is sequential and self-performed, with human academic/visual acceptance pending.

## Selection, coverage and source mapping

The existing roadmap selects **L04 Privacy & Personal Data**, stable ID `lesson-d1-04-privacy`, Domain 1, **Objective 1.1**. The [official outline effective September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) was verified on 2026-10-26; privacy is explicitly in 1.1. Its Domain 1 AI paragraph supports an applied training-data scenario, not an invented objective or algorithm requirement.

Mandatory course sources reviewed before authoring: **A**, `ISC2 Update 2026/Domain 1/D1 sum.md`, especially §§8–14 and the privacy recap; **B**, `ISC2 Update 2026/Domain 1/Domain 1.md`, especially §§4.2 and 10, with CIA/AAA/evidence context. Both sources were already completely reviewed for the preceding roadmap task. A supplies privacy, subject/controller/processor, ownership responsibilities, inventory, retention and conditional deletion. B supplies lifecycle handling, minimisation and privacy/confidentiality distinctions. The existing roadmap, catalog, L03 implementation report, semantic schema, presentation dispatcher/components, Info, course selector and progress implementation were inspected. No missing source was invented.

Primary corroboration, checked 2026-10-26:

- [European Commission: data protection explained](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en): personal data and identifiable individuals, pseudonymisation and actual controller/processor roles.
- [European Commission: processing principles](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en): specified purpose, relevant necessary data, transparency and storage limitation.
- [Irish DPC: retention](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr): purpose and applicable duties determine retention; no single GDPR duration for every data type.
- [EDPB: erasure FAQ](https://www.edpb.europa.eu/sme/find-practical-info/faq_en): erasure is conditional, including legal-obligation and legal-claims exceptions.
- [NIST: privacy risks](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks): problematic processing may occur even through authorized activity.

The direct EUR-Lex ELI page returned a JavaScript/robot-check page; it was not used as read evidence. The Commission, EDPB and DPC primary guidance above supplied corroboration. GDPR is clearly labelled supporting EU context, not universal law. No national response deadline, fixed retention duration or unsupported exam-memorization requirement is published. User notes remain unchanged. Examples and diagrams are newly authored teaching material, not ISC2 exam questions.

Coverage analysis: L01 already teaches CIA, L02 identity/permissions/activity and MFA, L03 evidence/non-repudiation. L04 builds on confidentiality without reteaching those units. The previously missing privacy unit now covers responsible processing, identifiable data, roles/ownership, purpose/minimisation, inventory/copies, retention and conditional erasure. Detailed governance law comparisons remain L08; detailed sanitization and AI implementation are outside this lesson.

Learning outcomes: distinguish privacy from confidentiality; recognize data linkable to a person; classify subject/controller/processor from actual activity; distinguish ownership responsibilities from unrestricted permission; apply purpose limitation/minimisation; distinguish inventory from retention; reason about conditional erasure; assess new uses including AI training without assuming encryption or a consent checkbox permits everything.

## Eight-slide instructional design

| Slide / stable ID | Learner understanding and terminology | Visual and concise message | Full explanation / support |
| --- | --- | --- | --- |
| 1 `slide-01-secure-is-not-enough` | Privacy vs confidentiality: access protection does not decide every processing purpose | Protected database beside two distinct questions | A §8; B §§4.2,10; NIST processing risk; encrypted retail example |
| 2 `slide-02-recognize-personal-data` | Direct and linked identification; pseudonymised/encrypted is not necessarily anonymous | Person linked to three identifier examples | A personal-information context; B §4.2; Commission identification/anonymity qualification |
| 3 `slide-03-roles-and-responsibility` | Subject, controller, processor; actual decisions and ownership responsibilities | Person → shop → instructed service, with role-specific explanation | A §§9–11; B §4.2; Commission roles; provider role is activity-dependent |
| 4 `slide-04-purpose-and-minimization` | Purpose limitation and data minimisation | Delivery form keeps relevant address/order fields and excludes unrelated health history | A §8; B §4.2; Commission principles; no universal consent-only rule |
| 5 `slide-05-inventory-and-copies` | Inventory identifies data, location, responsible owner and copies | Inventory hub linked to database, support export and contracted service | A §12; B lifecycle; locate copies before applying rules |
| 6 `slide-06-retention-with-a-reason` | Retention rule, review trigger, justified retention or disposal | Set rule → review need → apply outcome, with original clock/review/record drawings | A §13; DPC; no universal period; justified holds are limited/reviewed |
| 7 `slide-07-conditional-erasure` | Request assessment and distinct erasure/exception outcomes | Review point branches to erasure or limited justified retention | A §14; EDPB; categories and obligations may differ; not all-or-nothing |
| 8 `slide-08-evaluate-a-new-use` | Apply person/purpose/roles/minimisation/retention questions | Support tickets → proposed AI service, with keyboard-operated reasoning reveal | Original scenario based on A/B, official AI context and NIST; not a prohibition on all training |

Eight slides separate concept recognition, roles and operational handling decisions. Count follows instructional needs, not an inherited slide-count template. Complete equivalent TH/EN explanations are in semantic blocks, reading mode and Info; concise presentation copy never replaces them. English-only new control labels remain English in both modes. Important English terms are retained in Thai. Review metadata explicitly identifies Codex technical/bilingual/rights **self-review**, with user review pending.

## Architecture, review findings and fixes

The trusted new `privacy-presentations.js` adapter recognizes only this lesson and its eight stable slide IDs. It validates the expected four-block/table shape and declines incompatible edits into the existing full semantic renderer. A separate scoped stylesheet affects only `.learning-privacy-slide`. It inherits the existing viewport-fitted stage; no shell, controller, schema, language-storage or progress code changed. No new framework, dependency, remote image, asset download or generated raster is required. Original inline SVG geometry (person, lock, record, shop, service, clock, review) is fixed trusted code; educational strings use text nodes. The minimisation form is semantic HTML/CSS, rather than a gratuitous SVG.

The case reveal uses a native button, `aria-expanded`, `aria-controls`, labelled region and visible focus outline. Its temporary state survives language repaint/navigation in the viewer, owns no persistent fields, and resets on full reload. It owns an AbortController and removes its parent abort listener on disposal. No timers, network requests or observers were added. Fullscreen, previous/next, overview and keyboard ownership remain in the existing viewer. Info includes all eight slides and disposes its rendered handles.

Sequential spec and quality self-review checked source/role qualifications, paired content, publication gate, CSS scope, no JSON-to-HTML injection, listener disposal, fallback, independent progress and earlier lesson boundaries. QA found two awkward Thai orphan wraps in the protected-database label and controller description. Shortened those labels, preserved detailed meaning, reloaded the production app and recaptured affected TH slides at both sizes. No old slide compositions were changed. Initial test expectation that every slide must have SVG was corrected to allow the intentional semantic minimisation form; no content assertion or old integrity hash was removed.

## Actual production browser verification

Used the real `index.html` / `js/app.js` production viewer, via Home → Open Certification → Learning → Domain 1 → Objective 1.1 → Privacy lesson selector → Start Learning. The bounded public staging copy is served locally at **http://127.0.0.1:4188/**. This was not a standalone design prototype or fixture gallery.

All **32** required cases were visually inspected and saved: eight slides × TH/EN × 1366×768/1920×1080. Captures are full-page so a larger requested viewport is not cropped by the physical app window. DOM geometry corroborates visual inspection; it does not replace it. At 1366×768 the stage is approximately 1187.55×668; at 1920×1080 it is approximately 1742.22×980. All cases remain presentation mode, with zero measured stage overflow/outside text and positive content-to-footer clearance. The smallest recorded clearance is 22.52px at 1366 with revealed reasoning.

Additional actual checks:

- Four-lesson selector launches L04 directly; other objectives remain Coming Soon.
- Slides overview used throughout; previous/next and slide positions retained by existing viewer.
- Enter reveals reasoning, ArrowLeft inside that button does not navigate, and TH→EN retains expanded state. Reload resets only temporary reveal.
- Info opens/closes, lists all eight explanations, and exposes full TH erasure and EN retention content.
- Keyboard activation of explicit reading mode displays full semantic explanation; presentation mode restores.
- Full reload returns to the normal Home entry; Learning Center shows Privacy **last slide 5/8**, all eight visited, **0/4 lessons completed**. Resume opens slide 5 directly. Viewing slides was not falsely marked as Finish Lesson completion.
- Earlier lessons reopen independently at CIA **3/8**, AAA **1/7**, Non-repudiation **1/6**. Their lesson files, artwork and dedicated renderers/styles remain byte-identical against entry baseline.
- Browser error log query returned no errors.

Native OS fullscreen, other browsers, screen readers and enlarged-text/zoom were not freshly visually verified. Existing fullscreen/state tests pass. No mobile/tablet QA was performed.

## Verification and preservation

New five-check file was observed failing before implementation: new lesson/source file missing, fourth chooser entry unavailable. After implementation it passes publication/schema/source pairing, eight distinct renderings and full reading/Info, fallback for incompatible content, reveal state/disposal, and independent V1 reload/selection. The expanded suite passes **128/128**, including previous lesson checks, language boundary, viewer/state/fullscreen and Quiz/session regressions. Engine internal checks pass 7/7; session checks pass 8/8, including the protected **583-question** bank and domain counts **142/65/93/156/127**.

```powershell
node --test tools/verify-learning-privacy.mjs tools/verify-learning-non-repudiation.mjs tools/verify-learning-aaa-mfa.mjs tools/verify-learning-catalog.mjs tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-integration.mjs tools/verify-learning-phase2.mjs tools/verify-learning-viewer.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-visuals.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-cia-presentations.mjs tools/verify-ui-language-boundary.mjs tools/verify-version-selection-layout.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
node --check js/ui/learning/privacy-presentations.js
node --check js/ui/learning/renderers.js
node --check js/ui/learning/lesson-info.js
node --check tools/verify-learning-privacy.mjs
```

Only related catalog-count expectations changed: assert all four published IDs in catalog; keep L03 at index 2 and expect four selector options. Existing lesson content assertions remain. No expected lesson hash or unrelated test was weakened.

The pre-edit [944-file dirty-tree baseline](../../../artifacts/qa/lesson-d1-04-privacy/baseline.json) protects uncommitted work, not merely HEAD. Final [integrity evidence](../../../artifacts/qa/lesson-d1-04-privacy/integrity-check.json) compares every captured file and the seven synchronized public runtime copies. Prior lesson JSON, dedicated renderers/styles/artwork, course notes, progress storage/controller, Quiz and Vocabulary remain unchanged. Catalog revision increments 3→4 and only appends L04; prior three summaries remain identical. V1 storage key and schema are unchanged, with no migration or new persistent fields. No reset/revert/clean, deletion, commit or deployment was performed.

## Exact file scope

Created:

- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`
- `js/ui/learning/privacy-presentations.js`
- `css/learning-privacy.css`
- `tools/verify-learning-privacy.mjs`
- `docs/plans/isc2-cc-2026/lesson-d1-04-privacy-implementation.md`

Modified:

- `content/isc2-cc-2026/learning/published/catalog.json`
- `index.html`
- `js/ui/learning/renderers.js`
- `js/ui/learning/lesson-info.js`
- `tools/verify-learning-catalog.mjs`
- `tools/verify-learning-non-repudiation.mjs`
- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
- `docs/plans/task.md`

QA evidence is under `artifacts/qa/lesson-d1-04-privacy/`; ignored preview copies are bounded public runtime only. No separate asset files or external dependencies were added.

## Remaining coverage and limitations

L01–L04 now provide dedicated instruction for the listed core Objective 1.1 concepts. Human academic/bilingual/visual acceptance remains pending; this is not a claim of independent ISC2 validation. Domain 1 is **not complete**. All risk lessons L05–L07, governance L08–L09, controls L10–L11 and ethics L12 remain planned. Privacy AI reuse is now covered as an application; other AI examples remain future authoring work. No next lesson or Domain 2 implementation begins without the user.

For manual review: open the local preview, use the normal Learning route and select Privacy & Personal Data; inspect all eight slides in TH/EN, open Slides and Lesson Info, and use Show reasoning on slide 8. Current lesson remains open for review. Native fullscreen, browser diversity, zoom and assistive-technology review are further manual coverage, not claimed by this delivery.

## Screenshot matrix and evidence

| Slide | 1366 TH | 1366 EN | 1920 TH | 1920 EN |
| --- | --- | --- | --- | --- |
| 1 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-01.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-01.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-01.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-01.jpg) |
| 2 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-02.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-02.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-02.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-02.jpg) |
| 3 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-03.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-03.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-03.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-03.jpg) |
| 4 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-04.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-04.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-04.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-04.jpg) |
| 5 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-05.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-05.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-05.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-05.jpg) |
| 6 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-06.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-06.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-06.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-06.jpg) |
| 7 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-07.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-07.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-07.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-07.jpg) |
| 8 | [1366 TH](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-slide-08.jpg) | [1366 EN](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-slide-08.jpg) | [1920 TH](../../../artifacts/qa/lesson-d1-04-privacy/1920-th-slide-08.jpg) | [1920 EN](../../../artifacts/qa/lesson-d1-04-privacy/1920-en-slide-08.jpg) |

Additional evidence: [1366-th-case-revealed](../../../artifacts/qa/lesson-d1-04-privacy/1366-th-case-revealed.jpg), [1366-en-case-revealed](../../../artifacts/qa/lesson-d1-04-privacy/1366-en-case-revealed.jpg), [lesson-info-th](../../../artifacts/qa/lesson-d1-04-privacy/lesson-info-th.jpg), [lesson-info-en](../../../artifacts/qa/lesson-d1-04-privacy/lesson-info-en.jpg), [progress-after-reload](../../../artifacts/qa/lesson-d1-04-privacy/progress-after-reload.jpg), [resume-slide-05](../../../artifacts/qa/lesson-d1-04-privacy/resume-slide-05.jpg), [four-lesson-selector](../../../artifacts/qa/lesson-d1-04-privacy/four-lesson-selector.jpg), [cia-progress-preserved](../../../artifacts/qa/lesson-d1-04-privacy/cia-progress-preserved.jpg), [aaa-progress-preserved](../../../artifacts/qa/lesson-d1-04-privacy/aaa-progress-preserved.jpg), [non-repudiation-progress-preserved](../../../artifacts/qa/lesson-d1-04-privacy/non-repudiation-progress-preserved.jpg), [reading-mode-th](../../../artifacts/qa/lesson-d1-04-privacy/reading-mode-th.jpg).

[Browser measurements](../../../artifacts/qa/lesson-d1-04-privacy/browser-measurements.json) include 32 required cases plus two revealed-case captures. [Final Node output](../../../artifacts/qa/lesson-d1-04-privacy/node-verification.txt) records 128 passes, zero failures. Syntax checks passed for the new renderer/test and dispatcher/Info. The baseline comparison confirms exactly eight expected existing files changed, zero missing, **936 of 944 unchanged**. All three earlier lesson hashes and all seven public staged runtime copies match.
