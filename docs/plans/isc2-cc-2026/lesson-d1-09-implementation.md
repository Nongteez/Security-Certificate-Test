# Lesson 9 — Frameworks & Security Documents

Status: implemented and production desktop-verified, 2026-10-27. Awaiting user visual/academic/bilingual acceptance. Lesson 9 only.

## Confirmed design and execution plan

**Goal:** finish the remaining introductory Objective 1.3 teaching and audit L08+L09 against the official September 2026 outline and both supplied notes. **Architecture:** one appended validated lesson, bounded trusted HTML/CSS/SVG composition module; semantic blocks retain full Info/reading. Existing viewer, selector, progress and publication ownership retained. **Stack:** native JavaScript/CSS/SVG/JSON, Node tests; no dependencies. Current workspace execution authorized; preserve dirty earlier work, no worktree/commit/deployment or next lesson.

Both notes reviewed in full; A §§27–34 and B §7.1 supply instructional depth. L08 covers authority, applicability and compliance/security distinction; only short connective references are needed. No roadmap correction needed: classify ISO/IEC27001 as an ISMS standard despite A27's broad list of framework resources. NIST CSF and CIS/ISO primary sources qualify implementation examples.

Alternatives considered: glossary-only slides would lack application; one dense hierarchy slide would impair beginner comprehension; selected sequence teaches one purpose at a time then connects the documents through a realistic exercise. White original diagrams remain readable with complete bilingual explanations outside the canvas.

| # / stable slide suffix | Outcome / message | Source / terminology | Example / visual | Detailed explanation plan |
|---|---|---|---|---|
| 01-framework-structure | Explain structured risk outcomes and gap finding | A27; framework | current → target → action bridge | framework structure is not a configured control |
| 02-nist-outcomes | Relate CSF outcomes to local implementation | A27; NIST CSF2 | outcome / implementation comparison | six functions are concurrent, not a compulsory serial checklist; supplemental example depth |
| 03-iso-isms | Recognize ISO/IEC27001 as ISMS requirements | A33; ISMS | management system cycle | risk, people/process/technology, improvement, certification scope and ISO not certifier |
| 04-cis-safeguards | Recognize practical prioritized safeguards | A34; CIS Controls | prioritize → implement → verify | chosen safeguards need scope/owners/evidence; mapping is not automatic compliance |
| 05-policy-direction | Identify approved organizational direction | A29; B7.1; policy | large purpose with owner/scope annotation | what/why, responsibility, internal authority vs law |
| 06-standard-requirement | Identify specific required specification | A30; B7.1; standard | broad policy → measurable requirement | internal adopted requirement vs external published standard; no universal MFA/password prescription |
| 07-procedure-steps | Identify repeatable operational instructions | A31; B7.1; procedure | numbered verified reset sequence | verify identity/authority before reset, no bypass; authored safe sequence |
| 08-guideline-advice | Identify adaptable recommendation | A28; B7.1; guideline | requirement rail and advisory options | adopted mandatory wording changes applicability; advice cannot waive law/standard |
| 09-classify-the-purpose | Classify requirement by function, not document title | A32; B7.1 | interactive policy/standard/procedure/guideline feedback | admin MFA requirement means standard; original non-scored scenario |
| 10-connect-and-review | Connect requirements to documented work/evidence | A27–34; B7.1 | linked policy/standard/procedure plus guideline side support | keep approved documents aligned/current; supplemental lifecycle, no universal rigid file hierarchy |

Each slide will have complete equivalent TH/EN title, lead, 3-column semantic rows, detailed explanation and takeaway; English application controls retained. Source IDs attach per slide.

Ordered execution:

- [x] Inspect workspace/roadmap/L08/schema/progress, read sources and verify official/primary scope. Capture entry baseline.
- [x] Write feature tests; observe missing lesson failures.
- [x] Author paired content and original ten compositions; append catalog, Info, scoped CSS and renderer dispatch. Spec review, then code/lifecycle/security review.
- [x] Run focused Node regressions; investigate appended-publication expectations and compare five historical Vocabulary failures without weakening checks.
- [x] Dedicated browser step: all40 slide/language/desktop cases, four feedback choices at each size/language, keyboard, Info/reading, selector/progress/reload/Resume and old8 lessons. Capture real screenshots and geometry.
- [x] Audit Objective1.3 in an explicit source/lesson/slide/depth/gap table; verify baseline/public staging parity, exact files, update roadmap/task/report, stop.

## Delivery, source reconciliation and review

Published `lesson-d1-09-frameworks`, revision1, under Domain1 / Objective1.3; ten stable slide IDs listed above, catalog revision9. New paired titles, synopsis, four outcomes, prerequisite, three-column teaching rows, detailed explanations and takeaways are complete. Technical/bilingual/rights approval metadata records implementation self-review with user acceptance pending; no independent academic approval claimed.

Primary instructional foundation: A `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733 lines), §§27–34; B `ISC2 Update 2026/Domain 1/Domain 1.md` (405 lines), §7.1 with §7.2 context. Both were read in full before authoring; current L08 and architecture/schema/progress/publication inspected. Source claims reconciled rather than copied uncritically:

- A27's broad resource list includes ISO/IEC27001. L09slide3 explicitly classifies it as an ISMS requirements standard.
- A31's abbreviated password reset example places verification after reset. L09slide7 explains that this is not authorisation to reset an unverified requester; the original teaching sequence verifies identity and authority before credential change.
- Internal mandatory standards are distinguished from externally published standards; applicability/adoption and external duties remain explicit. No universal password length, MFA configuration, document file hierarchy or exam rule is invented.

Authoritative references checked on 2026-10-27 and attached in lesson references:

- [ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September1,2026: Objective1.3's three headings.
- [NIST CSF FAQs](https://www.nist.gov/cyberframework/faqs): outcomes vs implementation, concurrent continuous functions, Current/Target Profiles and gap planning. Six function names/Profile details are labelled supporting course depth.
- [ISO/IEC27001](https://www.iso.org/standard/27001): ISMS requirements and ongoing management.
- [ISO certification](https://www.iso.org/certification.html): external bodies certify; ISO does not perform certification.
- [CIS Controls](https://www.cisecurity.org/controls): prioritized prescriptive safeguards. No copyrighted catalogue or official graphics reproduced.

All illustrations are original fixed SVG and CSS diagrams, with no downloaded/AI raster assets, animation or network requirement. Ten compositions use a bridge, outcome comparison, ISMS system, safeguard action rows, policy annotation, specific requirement comparison, numbered safe sequence, requirement/advice rails, classification exercise and connected document chain. Detailed semantics remain in reading/Info. The four-choice authored exercise explains every choice without exam scoring, altering content or adding persisted fields. English buttons name the document functions; educational feedback is TH/EN.

Spec review confirmed all scoped deliverables and no extra curriculum. Code-quality review inspected bounded lesson/slide/block dispatch, text-only content insertion, fixed trusted SVG, scoped CSS, fail-closed publication, semantic fallback and unchanged routing/storage. Exercise listeners belong to a per-render AbortController; destroy aborts handlers and removes the parent abort listener. No timers, observers or asynchronous/network ownership added. Existing Viewer owns navigation, fit/reading and fullscreen. Feature tests caught a missing Info allow-list entry, corrected before browser QA. No subsequent visual defects or unrelated refactoring were needed.

## Desktop screenshot matrix and TH/EN review

**40/40 required production cases individually captured and visually inspected** (not fixture preview, not inferred from Node checks).

| Slides | 1366×768 TH | 1366×768 EN | 1920×1080 TH | 1920×1080 EN |
|---|---|---|---|---|
| 01–10, each | Pass,10 screenshots | Pass,10 screenshots | Pass,10 screenshots | Pass,10 screenshots |
| Exercise four feedback states | Pass,4 | Pass,4; keyboard Enter | Pass,4 | Pass,4 |

Files: `artifacts/qa/lesson-d1-09-frameworks/{1366,1920}-{th,en}-slide-{01..10}.jpg`; additional `{1366,1920}-{th,en}-classify-{0..3}.jpg`. [Measurement manifest](../../../artifacts/qa/lesson-d1-09-frameworks/browser-measurements.json) enumerates every case. All40 remained presentation mode with no canvas overflow or essential text outside the stage; minimum main/footer gap15.40625px. Actual stage1187.546875×668 at1366 and1742.21875×980 at1920. Visual review checked Thai glyphs, wrapping, title/body hierarchy, diagram flow and feedback readability; measurement alone is not the visual claim. No clipping/truncation, tiny-text workaround or fallback triggered unnecessarily. Paired content received conceptual/terminology self-review; translation presence alone is not the quality evidence. Human bilingual acceptance pending.

[Functional results](../../../artifacts/qa/lesson-d1-09-frameworks/browser-functional-results.json):

- Each feedback choice operated by click; all four operated by keyboard Enter at1366EN. Guideline selection retained on EN→TH switch, with translated feedback and English application controls.
- Slides overview navigated all ten stable positions. Workspace ArrowRight moved9→10 without Finish acknowledgement.
- Info exposed ten English navigation labels; Thai slide3 and English slide7 full explanations inspected. Thai slide9 reading mode exposed all rows/full text and returned correctly to presentation.
- Reload returned to normal Home. Learning Center showed L09last6/10,10/10viewed,0/9completed. Resume opened6/10 directly without contents. All four exercise buttons unpressed after reload: answers are transient.
- Objective1.3 offers L08/L09;1.1 retains four choices and1.2 three. L09 returned independently at9/10 after earlier lesson visits.
- Opened all eight prior lessons and recorded screenshots: CIA3/8, AAA1/7, NR1/6, Privacy1/8, Foundations1/8, Assessment1/8, Response1/10, Governance1/9. Their JSON and composition code/styles byte-match the entry baseline.
- Fullscreen layout entered at9/10 with Standard selected and accessible bottom navigation; `fullscreen-th-choice.jpg` shows it. In-app browser returned automatically to normal layout before the Exit click; the same slide and choice remained. Read-only fullscreenElement query was false by then. **Sustained native fullscreen and explicit exit remain manual QA**, not a verified full native lifecycle claim. Existing fullscreen code unchanged and Node lifecycle checks pass.
- Error/warning console query returned none. Final viewer left slide1 TH at1920. No Finish Lesson acknowledgement was made for the user.

Support evidence: `objective-1-3-two-lessons.jpg`, `progress-after-reload.jpg`, `resume-slide-06.jpg`, `lesson-info-th.jpg`, `lesson-info-en.jpg`, `reading-th.jpg`, `fullscreen-th-choice.jpg` and eight `*-progress-preserved.jpg` screenshots.

## Tests and failures investigated

Focused155/155 checks pass; [actual output](../../../artifacts/qa/lesson-d1-09-frameworks/node-verification.txt).

```powershell
$checks = @('frameworks','governance','risk-response','assessment','risk-foundations','privacy','non-repudiation','aaa-mfa','catalog','course','progress','integration','phase2','viewer','v3-stage','v3-viewer','visuals','editorial-intro','cia-presentations') | ForEach-Object { "tools/verify-learning-$_.mjs" }
$checks += @('tools/verify-ui-language-boundary.mjs','tools/verify-version-selection-layout.mjs','tools/verify-phase4-quiz-engine.mjs','tools/verify-session-persistence.mjs')
node --test @checks
node --test tools/verify-exam-vocabulary.mjs tools/verify-vocabulary-filter.mjs tools/verify-vocabulary-study-card-fullform.mjs
```

Five feature tests were run red before production authoring. They cover publication/source/paired content, ten distinct compositions/full Info/reading, semantic fallback, translated choice/disposal and nine independent V1 records with two-lesson selection/failure gating. The initial broad run145/155 exposed ten appended-publication expectations: old8counts, L08last-entry assumption and old list/failure availability. Updated only those expectations to9, preserve L08index7, append L09, and gate1.3 only if both published lessons fail. Prior content/IDs/progress assertions retained. New test initially assumed every diagram needs SVG (numbered procedure uses CSS) and assumed a single1.3lesson; corrected it to the planned numbered diagram and explicit two-lesson selector. Missing Info allow-list implementation was fixed rather than weakening explanation coverage. No hash expectations changed.

Legacy Vocabulary run: **11 tests,6pass,5fail**, same five as L08 ([current output](../../../artifacts/qa/lesson-d1-09-frameworks/vocabulary-verification.txt), [previous output](../../../artifacts/qa/lesson-d1-08-governance/vocabulary-verification.txt)). Each remains pre-existing/outdated, supported by unchanged legacy tests/dependencies and identical assertion differences:

| Failure | Classification / evidence |
|---|---|
| Registry exactly3/unavailable Vocabulary | Obsolete: already4 entries including Learning and available313-term Vocabulary. |
| Unavailable Vocabulary direct-call fixture | Obsolete: spreads currently available metadata into fixture; availability routing predates L09. |
| Three-card grid/two disabled actions | Obsolete four-card/current availability expectation. |
| Older translated card/dialog sentence | Obsolete copy expectation against English-only UI boundary. |
| Historical registry/dialog/bank integrity | Old next-bank coming-soon/null metadata vs existing available86; fails before later hash loop. Not a new bank/dialog change. |

No additional legacy failures. Vocabulary filter/full-form checks pass; no unrelated Vocabulary tests/implementation modified. Focused Quiz engine and session persistence checks pass. No fresh Quiz/Vocabulary browser verification is claimed. Syntax checks pass for new renderer/test and dispatch/Info; `git diff --check` passes.

## Objective1.3 coverage audit

**Complete — introductory educational coverage, implementation self-audit; human academic/bilingual acceptance pending.** This conclusion is based on teaching and application below, not merely publication or slide count. The official outline does not mandate a full standards implementation/certification programme or exhaustive legislation.

| Required concept | Official mapping | Supporting source | Teaching lesson / slides | Depth / status | Remaining gap |
|---|---|---|---|---|---|
| Governance direction, oversight, accountability | 1.3 umbrella | A25; B7; NIST | L08 1–2,9 | Define, explain roles, apply accountability — Complete | Human acceptance |
| Regulations/laws; applicability | 1.3 regulations/laws | A26; B4.2/7.2; EDPB/HHS | L08 3–5; Info | Authority/scope/facts, bounded GDPR/HIPAA examples — Complete | Real legal advice outside scope |
| Contractual standards vs law; compliance limits | 1.3 regulations/laws and standards | A26; B7.2; PCI SSC | L08 3,6–7 | PCI DSS outsourcing/retained duties; compliance≠perfect security — Complete | No exhaustive compliance programme claimed |
| Framework purpose, gap finding, consistent practices | 1.3 frameworks/guidelines | A27; NIST | L09 1–2,10 | Define, current/target/action, outcome→implementation example — Complete | Detailed framework implementation supplemental |
| Guidelines and requirement boundaries | 1.3 frameworks/guidelines | A28/32; B7.1 | L09 8–10 | Advice/flexibility, adopted authority, cannot waive duties — Complete | None at introductory scope |
| Organisational policy | 1.3 policies | A29/32; B7.1 | L09 5–6,9–10 | What/why, scope/owner, internal authority, filename caveat — Complete | None at introductory scope |
| Specific internal standards | 1.3 standards | A30/32; B7.1 | L09 6,9–10 | Specific adopted condition; external vs internal, exceptions — Complete | No universal configuration claimed |
| ISO example and ISMS | 1.3 standards (ISO example) | A33; ISO primary | L09 3,10 | Meaning, lifecycle, risk/people/process/technology, certification limits — Complete | Clause-level implementation outside scope |
| CIS example and safeguards | 1.3 standards/resources (CIS example) | A34; CIS primary | L09 4,10 | Prioritized practical safeguards, local evidence and mapping limits — Complete | Version-specific catalogue outside scope |
| Procedures and functional distinctions | 1.3 procedures | A31–32; B7.1 | L09 7,9–10 | Ordered safe process, verify/perform/record, classification with feedback — Complete | Product-specific IAM instructions outside scope |
| Internal governance / external duties integration | 1.3 umbrella | A25–34; B7.1–7.2 | L08 3,8–9; L09 5–10 | Applicability, adoption, aligned documents and accountable decisions — Complete | Full organisational programme not claimed |

L08's original AI intake applies the same governance principles; L09 does not invent AI-specific laws or claim full Domain1 AI application coverage. No concept found missing/insufficient against the official three headings and supplied governance notes; no row marked Partial/Needs Review after primary-source reconciliation. Human acceptance pending is not represented as an independent third-party certification.

Domain1 remains incomplete: **L10 Control Categories, L11 What Is the Control Doing?, L12 Professional Conduct & Ethical Decisions** remain planned. No L10 or Domain2 started. Detailed control categories/functions and due-care/ethics stay in those lessons.

## Exact files, dependencies and integrity

Created five implementation/document files:

- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`
- `js/ui/learning/frameworks-presentations.js`
- `css/learning-frameworks.css`
- `tools/verify-learning-frameworks.mjs`
- `docs/plans/isc2-cc-2026/lesson-d1-09-implementation.md`

Modified13 existing files:

- `content/isc2-cc-2026/learning/published/catalog.json` — append L09 only; revision8→9.
- `index.html` — scoped stylesheet.
- `js/ui/learning/renderers.js` — bounded dispatch.
- `js/ui/learning/lesson-info.js` — all ten full explanations.
- `tools/verify-learning-catalog.mjs`
- `tools/verify-learning-governance.mjs`
- `tools/verify-learning-non-repudiation.mjs`
- `tools/verify-learning-privacy.mjs`
- `tools/verify-learning-risk-foundations.mjs`
- `tools/verify-learning-assessment.mjs`
- `tools/verify-learning-risk-response.mjs` — seven scoped test expectation updates as explained above.
- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
- `docs/plans/task.md`

QA evidence created under `artifacts/qa/lesson-d1-09-frameworks/`: baseline/catalog snapshot, authoring script, red/initial/final/legacy outputs, screenshot matrix/support images, geometry/functional/integrity JSON. Ignored public staging updated seven runtime files; no fixture preview used. **No new dependencies**.

[Integrity evidence](../../../artifacts/qa/lesson-d1-09-frameworks/integrity-check.json):1,271 entry-baseline files,1,258 unchanged,13 expected existing changes,none missing. This protects prior dirty L06–08 work as well as tracked files. Eight old lesson JSONs and their renderer/CSS files, source notes, Viewer/controller/progress implementation, Quiz/Vocabulary and all exam banks are byte-identical. Protected583 bank remains intact. Prior catalog objectives/domains and existing L08 summary unchanged; only L09 appended under1.3. `sec_cert_learning_progress_v1` and IDs/order/storage schema unchanged. Seven staged runtime files match current workspace.

## Review instructions and limitations

Use [local public preview](http://127.0.0.1:4188/): Open Certification → Learning → Domain1 → Objective1.3 → select Frameworks & Security Documents → Start Learning. Resume Lesson on the center opens the recorded position directly. The isolated staging serves public assets/content only, not study notes or repository files.

Required desktop slide QA complete. Human visual/academic/bilingual review, sustained native fullscreen/explicit exit, other browser engines, screen readers and non-default zoom remain unverified. Mobile/tablet QA is outside scope. No production deployment, new dependency, exam/Vocabulary edit or next lesson. **Stop for user review.**
