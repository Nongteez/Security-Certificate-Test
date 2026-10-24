# ISC2 CC 2026 Learning Slides — Content and Academic Guidelines

**Task 55 · 2026-10-24 · Proposed authoring policy · No lessons produced**

Task 56's technical foundation and review results are recorded in [the implementation report](../../learning-slides.md). No academic source hold was closed, no fixture was approved for teaching, and no Task 57 content was generated. The ordinary image adapter rejects GIFs until a controlled/static, reduced-motion-safe adapter is provided.

> **Task 56 reconciliation:** Technical fixtures are isolated, unreviewed test inputs, never published lessons. New learning controls/card copy may be bilingual under Task 56; the existing Quiz/Vocabulary language contract is preserved. The source/academic publication workflow below still applies to future lessons; no fixture acquires academic approval from passing software tests.

Use the [audit/delivery plan](learning-slides-plan.md) for actual source inventory and pilot, and [architecture](learning-slides-architecture.md) for the proposed data contract. This document governs future content; it does not retrospectively approve existing notes, vocabulary or questions.

## 1. Academic authority and traceability

The primary scope authority is the [ISC2 English exam outline effective September 1, 2026, v01/2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf). Record edition, effective date, printed page and objective code. The [ISC2 outline page](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) provides additional AI commentary; label that separately from numbered objectives. Older introductory lists and old local plans must not override the dated PDF.

Distinguish four evidence roles:

| Evidence | Permitted use | What it does not prove |
| --- | --- | --- |
| Official ISC2 scope | Domain/objective alignment and explicitly published context. | Every technical definition, third-party scenario or claim about actual exam questions. |
| Primary technical reference | Verify the precise claim using the appropriate NIST/standards/government/vendor source and edition. | That every concept in a long standard is required CC scope, or a federal/vendor-specific rule applies universally. |
| Supplied course transcript/capture | Identify teaching intent, useful examples and source conflicts. | Authority, completeness, independent corroboration, publication rights or technical correctness. |
| Internally/AI-authored notes | Candidate explanation, translation, storyboard and original scenarios. | External verification or completed human academic review. |

Each lesson maintains a claim map: claim ID → slide IDs → objective IDs → knowledge ID plus **exact file path/version** → source/edition/locator → correction/uncertainty → review disposition. A bare `KNOW-D2-015` is insufficient when several maps hold different versions. Keep source claim, external correction and editorial synthesis separately attributable. Two captures/transcripts from the same course are not independent corroboration.

For imported references, retain existing source IDs only when actually registered. D2 audit-local Snn IDs and the D3 original-directory references are not automatically members of the D1 archive manifest. Preserve paths/locators and create a deliberate new evidence ledger later rather than inventing archived capture IDs.

## 2. Future workflow and gates

**Source Review → Knowledge Mapping → Lesson Storyboard → Academic Review → Slide Production → Visual and Functional QA**

| Step | Required artifact | Exit rule |
| --- | --- | --- |
| Source Review | Inventory, provenance/rights log, edition/URL/date, exact locators, source conflicts. | Relevant teaching material readable and sources distinguished by role; disputed claims identified. |
| Knowledge Mapping | Objective-to-concept and claim map with corrected boundaries. | Every planned concept has evidence; gaps explicitly excluded or scheduled for primary-source supplementation. |
| Lesson Storyboard | Intended learner, outcomes, prerequisites, teaching sequence, draft EN/TH explanation, proposed layouts/media, scenario purpose. | Reviewable depth without arbitrary slide/visual quotas. Bilingual text allocation fits the learning target. |
| Academic Review | Technical review, Thai/English meaning review, claim/diagram/scenario issue log, accountable reviewer/date/revision. | Required corrections applied and rechecked; no unresolved dependent claims. Reviewer identity/authority is recorded, not inferred from an assistant status flag. |
| Slide Production | Semantic slide data and original/cleared media, alternative descriptions, approved renderer choices. | Same approved meaning survives visual adaptation; content changes return to academic review. |
| Visual and Functional QA | Layout/language/theme/device matrix, keyboard/focus/touch/fullscreen/media/progress results. | Readable in all supported modes; independent structural and academic gates both pass on the same revision. |

A later publication checklist records technical, bilingual and rights approval plus visual/functional verification for a content revision. A new revision invalidates stale sign-offs where meaning/translation/diagram behavior changes. Record reviewer role and identity honestly; assistant or automated checks may assist but must not be labeled independent human approval. Assign the human reviewers before pilot publication, not during this planning task.

Keep publication state (`coming-soon`, `in-preparation`, `published`) independent from review state (`pending`, `changes-required`, `approved`) and learner state (`not-started`, `in-progress`, `completed`). A draft can be mechanically valid and still unsuitable for publication. Empty Domains/objectives are honest scope metadata, not lessons. Do not provide blank slide decks as Coming Soon content.

## 3. Source-specific constraints carried forward

| Domain | Required authoring boundaries |
| --- | --- |
| 1 | Consult extraction SQ-01–SQ-18 and curation P3-01. Correct disclosure/change boundary before the pilot. Do not teach a checksum/hash as unconditional authenticity proof, backups as immediate failover, encryption as a universal best answer, fixed privacy retention/legal rules without jurisdiction, or disputed ethics precedence. Supplement non-repudiation independently; later Thai notes alone do not close the raw-course gap. |
| 2 | Use Phase 3.5 corrected records within their stated limits. Exclude KNOW-D2-028 and KNOW-D2-054 until their actual issue/release evidence is resolved. Reconcile Phase 3.5/Phase 7 descriptions and reused AI GAP IDs; reject invented objective weights. Supplement official AI context with primary evidence rather than treating missing course content as out of scope. |
| 3 | Use the 25-entry supplemented map with its assistant-review limitation. Exclude ambiguous financial diagram workflow; distinguish identity/account, unused/orphaned, authentication/authorization, account disablement/session revocation and anomaly/confirmed compromise. Resolve vocabulary report's 19.8%/34-capture claims before copying metadata. |
| 4–5 | Structural records only until genuine intake, mapping and review exist. Old staging placeholders are not verified learning content. Official objective codes can be represented without inventing lessons. |

These constraints are planning findings, not amendments to existing academic reports. Do not repair or close a legacy issue merely because a new lesson avoids it; note avoidance and preserve the original issue record.

## 4. Bilingual authoring

EN should use clear entry-level cybersecurity wording and expose learners to relevant technical terms/acronyms. TH should explain the same concept naturally, with the same qualifiers, cause/effect, scope and certainty. Avoid literal word replacement, untranslated dense English paragraphs and changes to negation or BEST/FIRST-style reasoning.

- Store meaningful content as `{en, th}` pairs in one lesson, including titles, paragraphs, table labels, diagram labels, alt descriptions, scenario feedback and media transcripts. Derive EN+TH from those two reviewed versions; do not maintain a third divergent lesson.
- Keep essential English terminology alongside reviewed Thai meaning where useful. First use should explain an acronym; subsequent use can be compact. Retain existing English UI/navigation convention and shared `en`/`th`/`both` mode values.
- Use the same stable slide IDs and teaching sequence in each language. A registered language-specific layout may arrange the same information differently; it must not drop examples, source caveats or important feedback.
- Review Thai by a competent Thai-speaking cybersecurity educator, including conceptual qualifiers and scenario reasoning. Existing vocabulary is a terminology starting point, not automatic translation authority.
- Test Thai line breaks, combining marks and text expansion using the existing Thai font. Review EN, TH and EN+TH separately at real reading size. Split a slide or use reflow reading when necessary; do not clip paragraphs or reduce text to thumbnail size.
- Set semantic language attributes for English/Thai blocks. Provide meaningful reading order for assistive technology; do not rely on absolute position or color alone to communicate relationships.

No mass translation or complete bilingual lesson authoring occurs in Task 55.

## 5. Teaching and visual design

Choose a lesson scope a beginner can explain and apply, then choose media. A lesson may need text-only explanation, a comparison, a topology, a timeline, a photograph, an original scenario or a process animation. There is no required slide count, layout quota, interaction ratio or illustration requirement.

Each slide has a clear learning purpose and enough explanation to stand on its own in self-study. Avoid unexplained bullet fragments, decorative dashboards and repeated card grids. Use concise but sufficient prose; move supporting detail to accessible reading text instead of hiding essential information in animation. Normal presentation canvas is 16:9 with the proposed white/soft-white/blue/dark-text direction, but authors may vary layout and palette when it helps meaning and contrast remains readable.

Diagrams must correctly represent actors, permissions, flows, trust boundaries, sequence and limitations. A comparison must state which dimension is compared. A topology arrow must identify the actual flow; motion must not imply encryption, authorization or a security guarantee unless verified. Color has text/shape labels. Meaningful SVG diagrams need a text explanation; canvas/3D/animation needs an equivalent static/semantic account.

For the CIA pilot, the security property is the learning target; tools are contextual examples rather than one-to-one answer rules. One event may affect multiple properties. Keep detailed cryptographic guarantees and recovery design out of this limited lesson unless separately verified. The pilot storyboard in the plan is an outline, not approved production text.

Original scenarios must be labeled **SEC CERT TEST educational scenario** or equivalent. They may resemble exam-style decision making without claiming access to, prediction of, or endorsement by ISC2's actual examination. No harvested exam items, reconstructed live questions or claims of official question authenticity. Optional reflection is unscored and separate from the existing quiz engine; no generated official exam questions are proposed.

## 6. Media, rights and motion

Record creator, origin URL/file, license/version, attribution, permitted modifications/distribution and evidence for each asset. User possession of a screenshot is not publication permission. Keep third-party course images as reference material until rights permit reuse; author new slide text, examples and diagrams rather than reproducing entire course slides. Check any generated image for technical correctness and record its origin/review; generated artwork is not factual evidence.

Prefer ordinary optimized images and SVG over live heavy rendering when both explain equally well. Photographs require context/alt text. Animation needs a specific teaching reason, play/pause or equivalent control, reduced-motion/static alternative and lifecycle cleanup. Avoid looping GIFs that cannot be paused; use controllable media or a still alternative. Audio/video requires text transcript/captions as appropriate; never autoplay audio. External media should not introduce unreviewed tracking, embeds or executable content.

Layout/renderer code is trusted repository code. Lesson data cannot import arbitrary modules, inject HTML/CSS, execute Mermaid links or fetch scripts. Any optional library requires current primary documentation/license/security review and a demonstrated benefit; none is required for the pilot.

## 7. Separate verification records

| Verification type | Examples of evidence | Limits |
| --- | --- | --- |
| Structural | Catalog/objective relations, unique IDs, complete bilingual fields, valid registered paths, reference resolution, review matching revision. | Does not establish correctness of explanations, translations, licensing or sources. |
| Academic | Claim-level primary-source check, source conflicts resolved/bounded, scenario reasoning and diagram correctness, reviewer findings. | Does not prove responsive layout or event behavior. |
| Bilingual | Paired meaning/qualifier checks and Thai educator review. | A nonempty `th` string or automated parity test does not prove natural, accurate Thai. |
| Rights | License/permission provenance and required attribution for published assets. | A source URL or citation alone does not grant reuse rights. |
| Visual/function | Real reading-size inspection, no clipped text, keyboard/focus, all modes, touch/fullscreen/exit, failed assets and resume. | Node mocks and screenshots alone cannot verify all browser/device behavior. |

A future lesson release must have all required records tied to the same revision, no unresolved blocking issues, and an honest coverage statement. Reading completion does not certify competence or readiness to pass ISC2. Keep references accessible from the lesson overview/normal reader without cluttering fullscreen presentation content.
