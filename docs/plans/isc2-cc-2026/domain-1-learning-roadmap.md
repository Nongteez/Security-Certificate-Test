# Domain 1 — Evidence-based Learning Roadmap

Date: 2026-10-28 · Status: all twelve planned lessons implemented and desktop-verified; latest execution authorizes Lesson 12 and a preliminary coverage check only. Final Domain 1 academic/bilingual approval remains pending. Domain → Objective → multiple Lessons → Slides remains the architecture. This document supersedes older curriculum estimates where they conflict with the current official boundaries; it does not authorize the rest of the roadmap.

## Source review and scope

Both mandatory notes were read completely: **A**, `ISC2 Update 2026/Domain 1/D1 sum.md` (1,733 lines, numbered §§1–51 plus recap); **B**, `ISC2 Update 2026/Domain 1/Domain 1.md` (405 lines, §§1–14). They are the user's primary instructional foundation. A emphasizes concrete course examples, quantitative risk and operational control categories. B overlaps the foundations, adds explicit non-repudiation/accountability, separates three control categories, and labels some concepts/scenarios as supplemental. Neither is itself the official exam checklist.

Scope verified against [ISC2 CC outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective **September 1, 2026**, Domain 1 (24%), on 2026-10-26. Use its Domain 1 sections, not the page's older introductory domain list. Additional cross-domain context does not create new official objective numbers.

Inspected current catalog, both published lesson JSONs, semantic schema, trusted presentation renderers, course resolver/lesson chooser and `sec_cert_learning_progress_v1`. CIA teaches goal diagnosis and multiple impacts; AAA teaches identity/permissions/records and MFA, including limitations. Neither teaches a complete non-repudiation or privacy learning unit. `knowledge/domain-1.md` is still a staging template; the useful curated evidence is `sources/domain-1/extracted-knowledge/knowledge-map.md`, terminology, distinctions and quality report. Older curriculum §§3–4 and curation plan were consulted, but estimates and unverified source claims are not treated as completed coverage.

## Coverage matrix

Status originally described coverage before Lesson 3; non-repudiation/accountability and privacy rows are updated after Lessons 3–4. “Covered” means an implemented lesson explains and applies the concept, not merely mentions it; it does not claim independent academic approval.

| Official objective | Topic | Source coverage | Existing lesson | Status | Proposed lesson | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| 1.1 | Confidentiality | A §1; B §2.1 | L01, unauthorized salary viewing | Covered | Retain L01 | Existing |
| 1.1 | Integrity | A §2; B §2.2, §2.4 | L01, unauthorized record change | Covered | Retain L01 | Existing |
| 1.1 | Availability | A §3; B §2.3, §2.4 | L01, unavailable hospital portal | Covered | Retain L01 | Existing |
| 1.1 | Authentication, Authorization, Accounting (AAA) | A §§4–6; B §3 | L02, distinct functions plus applied case | Covered | Retain L02 | Existing |
| 1.1 (support) | Identification, MFA, factor distinctions | A §7; B §§3.1–3.2 | L02, factors/context/evidence | Covered | Retain L02 | Existing |
| 1.1 | Non-repudiation | B §4.1, §12; A §2 signature mention only, §6 record context | L03 dedicated 6-slide lesson | Implemented; user review pending | Retain L03 | Existing |
| 1.1 | Privacy | A §§8–14; B §§4.2, 10 | L04 dedicated 8-slide lesson | Implemented; user review pending | Retain L04 Privacy & Personal Data | Existing |
| 1.1 (support) | Accountability vs accounting and authentication | A §6; B §4.3 | L02 record limits; L03 evidence reasoning | Implemented; user review pending | Retain L03 | Existing |
| 1.2 | Risk management lifecycle | A §§15–16, 23–24; B §§1, 5.1–5.2 | L05 dedicated 8-slide unit | Foundations implemented; user review pending | Retain L05 Risk Foundations & Lifecycle | Existing |
| 1.2 | Risk management processes: identify and assess | A §§16–21; B §§5.1–5.2 | L05 scenario identification plus L06 methods, criteria, AV/EF/SLE/ARO/ALE, comparison and uncertainty | Dedicated assessment instruction implemented; user review pending | Retain L05–L06 | High |
| 1.2 | Risk management processes: respond, monitor, report | A §§22–24; B §§5.3–5.5 | L05 cycle plus L07 response/acceptance/residual-risk/reassessment/reporting unit | Complete educational coverage; human review pending | Retain L05–L07 | High |
| 1.3 | Regulations and laws | A §26; B §§4.2, 7.2 | L08 slides 3–6, full explanations and bounded examples | Covered at course depth; human acceptance pending | L08 Governance & Applicable Requirements — implemented, 9 TH/EN slides | Implemented |
| 1.3 | Frameworks and guidelines | A §§27–28, 33–34; B §§7.1–7.2 | L09 1–4,8–10 | Complete educational coverage; human acceptance pending | Retain L09 Frameworks & Security Documents | Implemented |
| 1.3 | Policies, standards (ISO, CIS examples), procedures | A §§29–34; B §7.1 | L09 3–10 | Complete educational coverage; human acceptance pending | Retain L09 | Implemented |
| 1.4 | Technical controls | A §§35–36; B §6.1 | L10 2,6–8 | Dedicated category teaching complete; human acceptance pending | Retain L10 Control Categories | Implemented |
| 1.4 | Administrative controls | A §36 managerial/operational; B §6.1 | L10 3,5–8 | Dedicated category teaching complete; human acceptance pending | Retain L10 | Implemented |
| 1.4 | Physical controls | A §36; B §6.1 | L10 4,6–8 | Dedicated category teaching complete; human acceptance pending | Retain L10 | Implemented |
| 1.4 (support) | Functional types and context-dependent overlap | A §§37–45; B §§6.2–6.3 | L11 1–9, full Info/reading and three camera contexts | Complete educational coverage; human acceptance pending | Retain L11 What Is the Control Doing? | Implemented |
| 1.5 | Professional code of conduct | A §46; B §8 | L12 1–2,7–10 with full explanations | Complete introductory coverage; human review pending | Retain L12 Professional Conduct & Ethical Decisions | Implemented |
| 1.5 | Due care and due diligence | A §§47–49; B §7.3 | L12 3–5,10 | Complete introductory coverage; human review pending | Retain L12 | Implemented |
| 1.5 | ISC2 Code of Ethics | A §§50–51; B §8 | L12 6–10 and full canon explanation | Complete introductory coverage; human review pending | Retain L12 | Implemented |

## Lesson sequence, outcomes and dependencies

Numbers identify internal lessons, not official sub-objectives. Planned slide counts remain undecided until authoring. A coherent unit can be split later if sources or readability warrant it.

| Domain / objective | Lesson | Outcomes and terminology | Source / dependency |
| --- | --- | --- | --- |
| D1 / 1.1 | L01 CIA Triad — existing 8 slides | Diagnose disclosure/modification/disruption; one incident, multiple goals | A §§1–3; B §2 |
| D1 / 1.1 | L02 Identification, AAA & MFA — existing 7 slides | Distinguish claim/verification/permission/activity; knowledge/possession/inherence and context | A §§4–7; B §3; builds on L01 |
| D1 / 1.1 | **L03 Non-repudiation & Trustworthy Evidence — implemented, 6 slides** | Distinguish evidence of action from a login/log; explain signing/verification, alteration detection, trusted identity-to-key binding and custody limits | B §§2.2, 4.1, 4.3, 10, 12; A §§2, 6 as prerequisites; L01–02; NIST verification fills identified technical gap |
| D1 / 1.1 | L04 Privacy & Personal Data — implemented, 8 slides | Distinguish privacy/confidentiality; data subject/controller/processor; ownership responsibilities; inventory vs retention; conditional deletion | A §§8–14; B §§4.2, 10; L01 |
| D1 / 1.2 | L05 Risk Foundations & Lifecycle — implemented, 8 slides | Connect asset/threat/vulnerability/impact/likelihood; follow continuous identify/assess/respond/monitor/communicate | A §§15–16, 23–24; B §§1, 5.1–5.2; L01 |
| D1 / 1.2 | L06 Assessment & Prioritization — implemented, 8 slides | Compare qualitative and quantitative reasoning; relate AV, EF, SLE, ARO, ALE; communicate estimation limits | A §§17–21; B §5.1; L05. Formula examples are course enrichment, not a claimed mandated exam calculation |
| D1 / 1.2 | L07 Respond, Review & Communicate Risk — implemented, 10 slides | Choose avoid/mitigate/share/accept; distinguish inherent/residual risk; reassessment triggers and stakeholder reporting | A §§22–24; B §§5.3–5.5; L05–06 |
| D1 / 1.3 | L08 Governance & Applicable Requirements | Explain direction/oversight/accountability; determine applicability; distinguish laws, contractual standards and compliance vs security | A §§25–26; B §7.2; L05 and L04 |
| D1 / 1.3 | L09 Frameworks & Security Documents — implemented, 10 TH/EN slides | Distinguish policy/standard/procedure/guideline; ISO/IEC 27001 as ISMS standard, CIS safeguards, framework roles | A §§27–34; B §7.1; L08 |
| D1 / 1.4 | L10 Control Categories — implemented, 8 TH/EN slides | Classify technical/administrative/physical by implementation; relate course operational/managerial labels without inventing an official fourth category | A §§35–36; B §6.1; L01 and L05 |
| D1 / 1.4 | L11 What Is the Control Doing? — implemented, 9 TH/EN slides | Identify preventive/detective/corrective/deterrent/directive/recovery/compensating functions; justify CCTV/firewall/guard overlap in context | A §§37–45; B §§6.2–6.3; L10 |
| D1 / 1.5 | L12 Professional Conduct & Ethical Decisions — implemented, 10 TH/EN slides | Apply professional boundaries and ISC2 canons; connect due care/diligence through assess → act → verify | A §§46–51; B §§7.3, 8; L05–11 |

After L07, all planned 1.3–1.5 lessons remain. Objective 1.2 has three available lessons and is Complete for educational coverage against the current official lifecycle/process headings and both notes; independent human review remains pending. Do not enable empty objectives merely because this roadmap lists them.

## Reconciliation, boundaries and verification register

- **Non-repudiation gap:** A omits dedicated instruction; B supplies the concept and key/evidence qualification. Old raw-transcript SQ-16 remains a source-coverage observation, not a contradiction. Do not claim A or the lecture taught the missing definition. NIST FIPS 186-5 and its glossary corroborate the new lesson; examples are authored, not official exam questions.
- **Control categories:** official 1.4 lists technical, administrative, physical; A's managerial/operational split is course taxonomy. Preserve those explanations as supporting labels, not a replacement syllabus. B's recovery function and A's directive function are complementary labels, not mandatory official subtopic headings.
- **Privacy:** do not teach unconditional deletion, universal retention periods or that every cloud provider is always a processor. L04 verifies role/retention/erasure facts with European Commission, EDPB, Irish DPC and NIST primary sources; GDPR is supporting legal context, not a global rule or sole definition of privacy.
- **Risk:** communication is ongoing, not a universal last step; acceptance needs appropriate authority, not merely “low probability.” ARO is a frequency, not a probability constrained to 0–1. Risk appetite/tolerance is explicitly supplemental in B. Verify technical formulas/interpretations before L06–07 and avoid unsupported “must memorize for the exam” claims.
- **Governance:** PCI DSS is a standard/contractual ecosystem, not itself legislation. ISO/IEC 27001 is a management-system standard; not every list item is the same artifact type. Verify latest primary ISO/CIS/ISC2 ethics wording when those lessons are authored.
- **MFA and accounting:** existing L02 already qualifies the notes' location/context, biometric and accounting/auditing shorthand; no rewrite of L02 is needed.
- **Scope exclusions:** B §9 Zero Trust/Defense in Depth belongs in official **4.2**, not a new D1 lesson. Detailed PoLP/SoD/access models belong to 3.2; detailed log operations to 5.2; BC/DR to 2.2. D1 can use short control examples without migrating those objectives.
- **AI context:** the official page's Domain 1 AI integration paragraph mentions data integrity/model poisoning, training-data privacy and traceable automated actions. The notes do not explicitly teach these AI applications. L04 now adds an original AI training-data reuse privacy scenario, grounded in official context and NIST; other AI applications remain future work. Do not mark full Domain 1 application coverage complete from keyword mentions. Add short, sourced application examples to future privacy/risk/governance lessons when verified; no invented AI sub-objective or extra lesson is published now.
- **Ethics:** mnemonic ordering is not an automatic solution for every conflict. Verify canonical text, application and applicable authority before L12; A's “DO/CHECK” is a memory aid, not an exhaustive definition.

## Current execution checklist

- [x] Read both mandatory notes in full and compare their overlap/gaps.
- [x] Verify current official scope; inspect existing two lessons and source quality/curriculum documents.
- [x] Build coverage matrix and complete Domain 1 planning sequence.
- [x] Select L03 with source/dependency rationale; distinguish supplemental evidence from notes.
- [x] Author and self-review six complete TH/EN slides; independent human academic review pending.
- [x] Implement trusted original compositions, catalog and full Info/reading integration.
- [x] Verify real production viewer at both desktop sizes/languages and independent progress.
- [x] Run 123 passing regression checks, protect baseline files, finish [implementation report](lesson-d1-03-non-repudiation-implementation.md) and tracker; stop for user review.

Delivery update: L03 is implemented and desktop-verified, awaiting user visual/academic acceptance. The non-repudiation and supporting accountability rows now have dedicated instruction, rather than a mention. L04–L07 are now implemented and desktop-verified; L08–L12 remain plans only. Domain 1 is **not complete**.

## Lesson 4 delivery (historical scope) — 2026-10-26

- [x] Confirm roadmap selection and official 1.1 Privacy boundary; review both notes and primary corroboration.
- [x] Author and implement eight complete TH/EN slides, original scoped HTML/SVG and full Info/reading.
- [x] Inspect all 32 desktop slide cases, interaction, language, lesson selection and independent reload/resume.
- [x] Verify protected Lessons 1–3, source notes, Quiz/Vocabulary and unchanged V1 schema; run 128 relevant Node checks.
- [x] Update tracker and [Lesson 4 report](lesson-d1-04-privacy-implementation.md); stop for user review.

All listed core 1.1 topics now have dedicated lessons, with human visual/academic acceptance still pending. This is not a claim of independent certification of objective completeness or of full Domain 1 completion. Risk (L05–L07), governance (L08–L09), controls (L10–L11) and ethics (L12) remain unimplemented. No Lesson 5 or Domain 2 work is authorized by this delivery.

## Lesson 5 delivery (historical scope) — 2026-10-26

- [x] Confirm L05 under official Objective 1.2, review A §§15–16,23–24 and B §§1,5.1–5.2 with supporting response context; verify official outline and NIST distinctions.
- [x] Implement eight complete TH/EN slides with distinct original HTML/SVG compositions, full Info/reading and an illustrative before/after evidence interaction.
- [x] Inspect all 32 real production desktop cases; exercise objective selection, keyboard/language state, Info, reading and independent reload/Resume.
- [x] Preserve Lessons 1–4 and V1 progress; run 133 relevant Node checks, record entry-baseline comparison and finish [Lesson 5 report](lesson-d1-05-risk-foundations-implementation.md).

L05 teaches risk foundations, a continuous course cycle, scenario identification and monitoring/reporting foundations. **Objective 1.2 remains partially covered**: L06 assessment methods and L07 detailed response choices, acceptance and review remain planned. Objective publication indicates that validated L05 can launch; it does not certify complete objective coverage. The earlier Lesson 4 stop condition above is historical and superseded only for L05 by the latest user brief. Stop now; no Lesson 6 or Domain 2 work.


## Lesson 6 delivery (historical scope) — 2026-10-27

- [x] Confirm L06 Assessment & Prioritization under Objective 1.2; review A §§17–21 and B §5.1, official outline, NIST SP 800-30 Rev. 1 and current IR 8286A Rev. 1.
- [x] Implement eight complete TH/EN white-background compositions, full Info/reading and computed ALE sensitivity without dependencies or storage changes.
- [x] Inspect all 32 production desktop slide cases, higher-frequency states, language/keyboard behavior, selector and full reload/direct Resume.
- [x] Verify Lessons 1–5 positions and protected content, V1 schema, Quiz/Vocabulary integrity; 139/139 focused Node checks pass. Additional legacy Vocabulary run: 6 pass, 5 pre-existing outdated expectations, documented without weakening tests.
- [x] Finish [Lesson 6 report](lesson-d1-06-implementation.md), screenshot matrix, integrity evidence and tracker. Stop for user review.

L06 adds qualitative/quantitative reasoning, agreed criteria, AV/EF/SLE/ARO/ALE, comparable annual estimates and uncertainty. **Objective 1.2 remains partially covered** pending L07 detailed response choices, authority for acceptance, inherent/residual risk, reassessment and communication depth. Publication indicates validated lessons can launch, not that the full objective is complete. Human academic/bilingual acceptance is pending. Historical stop conditions above are superseded only for the completed L06 scope. No Lesson 7 or Domain 2 work has begun.


## Lesson 7 delivery and Objective 1.2 audit — 2026-10-27

- [x] Confirm roadmap L07, review both notes and official 1.2 boundaries; corroborate response/authority/monitoring distinctions with NIST SP 800-39.
- [x] Implement ten complete TH/EN original white HTML/SVG compositions, full Info/reading and a three-choice evidence/authority scenario.
- [x] Inspect all 40 production desktop slide cases and all feedback branches at both sizes/languages; verify keyboard, language, selector, reload/Resume and six earlier lesson positions.
- [x] Pass 145/145 focused Node checks; preserve V1 schema, old lessons, Quiz/Vocabulary and source notes. Rerun legacy Vocabulary checks: 6 pass / 5 pre-existing obsolete expectations, unchanged; evidence in report.
- [x] Finish [Lesson 7 implementation report and detailed coverage table](lesson-d1-07-implementation.md), baseline integrity and screenshot matrix. Stop for user review.

**Objective 1.2: Complete (educational coverage; self-audited, human acceptance pending).** The official outline names risk management lifecycle and processes. L05 teaches context, identification, likelihood/impact and the continuous cycle; L06 develops methods, AV/EF/SLE/ARO/ALE and uncertainty; L07 adds response selection, acceptance authority, residual risk, cost/benefit reasoning, reassessment and ongoing communication. Appetite/tolerance is labelled supplemental from B §5.5. No missing required concept was found against these headings and the supplied notes; this is not ISC2 endorsement or a guarantee of exam readiness. Exact lesson/slide/source mapping and depth are in the report.

Domain 1 remains incomplete: Objective 1.3 (L08–09), 1.4 (L10–11), 1.5 (L12) remain planned, and broader AI application coverage retains the verification register limits above. No Lesson 8 or Domain 2 implementation begins. Earlier delivery stop conditions are historical; latest authorization extends only through L07 and this audit.


## Lesson 8 delivery and Objective 1.3 audit — 2026-10-27

Earlier delivery stop conditions and coverage snapshots are historical. Latest authorization extends through L08 only.

- [x] Read both mandatory notes in full; confirm L08 against A §§25–26, B §7/7.2 and the September 2026 official Objective 1.3.
- [x] Publish nine paired TH/EN slides on governance purpose, governing/management roles, legal/contractual sources, applicability, bounded GDPR/HIPAA/PCI DSS examples, compliance vs security and accountable AI intake.
- [x] Inspect all 36 production desktop slide cases and 12 AI feedback states; verify full Info/reading, keyboard navigation, independent selection, reload and Resume.
- [x] Pass 150 focused Node checks; retain and document five pre-existing obsolete Vocabulary expectations. Preserve seven previous lessons, V1 storage, Quiz/Vocabulary and all unrelated entry-baseline files.
- [x] Finish [Lesson 8 report, exact files, sources and evidence](lesson-d1-08-implementation.md); stop for user visual/academic review.

**Objective 1.3 is Partial.** Governance purpose/roles and regulations/laws/applicability have dedicated L08 instruction. Frameworks/guidelines and the policy/standard/procedure hierarchy (including ISO/CIS context) remain L09 and are not implemented. The original AI intake is a bounded application of governance, not complete AI-governance coverage. Objective 1.2 educational coverage remains Complete across L05–L07, with independent human acceptance pending. Domain 1 remains incomplete. No L09 or Domain 2 work has begun.


## Lesson9 delivery and Objective1.3 audit — 2026-10-27

Earlier delivery coverage/stop snapshots are historical. Latest authorization extends through L09 and this audit only.

- [x] Confirm L09 Frameworks & Security Documents; read both notes, reconcile A27 ISO classification/A31 reset shorthand and verify official1.3 plus NIST/ISO/CIS primary sources.
- [x] Publish ten complete TH/EN original white compositions and full Info/reading; four-choice document-function exercise, two-lesson1.3 selector and unchanged V1 storage.
- [x] Inspect all40 required production desktop cases and16feedback states, keyboard/language, Info/reading, independent selection and reload/Resume6/10; all8earlier lesson positions retained.
- [x] Pass155/155 focused checks; legacy Vocabulary6pass/5same outdated failures; preserve1,271-file entry baseline except13expected changes.
- [x] Finish [exact source/slide/depth/gap audit, files, screenshots and limits](lesson-d1-09-implementation.md). Stop for human visual/academic/bilingual review.

**Objective1.3: Complete (introductory educational coverage; self-audited, human acceptance pending).** L08 teaches governance roles, regulations/laws/applicability, contractual standards and compliance/security limits. L09 adds framework structure/application, guidelines, policy/standard/procedure distinctions, ISO/IEC27001 ISMS and CIS safeguards, classification and aligned document use. The report explicitly maps all official headings and relevant note concepts; no remaining required introductory concept found. Detailed standards implementation/certification programmes are outside scope. No ISC2 endorsement or exam-readiness guarantee.

Domain1 remains incomplete: L10 Control Categories and L11 Control Functions (1.4), L12 Professional Conduct & Ethical Decisions (1.5) remain plans. Broader AI applications retain verification-register limits. Sustained native fullscreen/explicit exit still needs manual review; no mobile/tablet or next lesson work.


## Lesson10 delivery and Objective1.4 coverage — 2026-10-27

Earlier scope/stop snapshots are historical. Current authorization extends through L10 only.

- [x] Confirm roadmap L10 Control Categories under official1.4, review both notes, reconcile A's Managerial/Operational supporting labels with official Technical/Administrative/Physical.
- [x] Publish8paired TH/EN white original compositions, full Info/reading and three-choice human-review classification.
- [x] Inspect32required production desktop cases plus12feedback states, keyboard/language, Info/reading, reload/Resume5/8 and9prior positions.
- [x] Pass160/160focused checks; legacy Vocabulary6pass/5same pre-existing outdated expectations. Protect1,358-file baseline except15expected modifications; no storage migration/dependency.
- [x] Finish [L10 report: exact files, sources, matrix and coverage audit](lesson-d1-10-implementation.md). Stop for human review.

**Three official1.4category headings now have Complete introductory teaching. The broader roadmap1.4learning sequence remains Partial pending L11 supporting function/application depth.** L10 teaches mechanisms, distinctions, mixed components, evidence and taxonomy reconciliation; it does not implement detailed preventive/detective/corrective/deterrent/directive/recovery/compensating reasoning from A37–45/B6.2–6.3. These are planned source-based supporting topics, not invented official sub-objective headings. Human acceptance remains pending.

Domain1 remains incomplete: L11 What Is the Control Doing? and L12 Professional Conduct & Ethical Decisions remain plans. No further lesson or Domain2 work. Sustained native fullscreen/explicit exit and other untested environments remain manual QA as recorded in the report.


## Lesson 11 delivery and Objective 1.4 audit — 2026-10-27

Earlier execution/stop snapshots are historical. Current authorization extends through L11 only.

- [x] Confirm roadmap title **What Is the Control Doing?**, Domain 1 / Objective 1.4; reconcile both notes with the current official outline.
- [x] Implement nine paired TH/EN white compositions, complete Info/reading and keyboard-accessible contextual camera exercise; eleven lessons now contain 91 slides.
- [x] Inspect all 36 required production desktop slide views plus 12 camera feedback states at 1920×1080 and 1366×768. Verify language/state retention, Info/reading, keyboard, two-lesson 1.4 selector, independent reload/direct Resume and ten old lesson positions. Reinspect the concrete legacy-host/MFA-gateway example in all four viewport/language cases after review.
- [x] Run 165/165 focused Node checks; separate Vocabulary suite remains 6 pass / 5 historical outdated expectations. No expected hashes weakened, dependencies added or storage migration.
- [x] Complete the [source/lesson/slide/depth/gap matrix and delivery report](lesson-d1-11-implementation.md), protect the 1,433-file entry baseline except 15 expected integration/documentation/test updates, and stop for user review.

**Objective 1.4: Complete for introductory educational coverage, self-audited and pending human academic/bilingual acceptance.** This conclusion follows the report's coverage matrix: L10 explicitly teaches all three official category headings and their application; L11 teaches the relevant source-based functions, limitations, category/function distinction and contextual overlap. Preventive, detective, corrective, recovery, deterrent, directive and compensating are supporting course depth, not seven invented official sub-objectives. A's broad corrective usage and B's separate recovery emphasis are reconciled. A concrete legacy-MFA alternative is assessed, not asserted to be universally equivalent or authorized. No remaining introductory 1.4 concept gap was found; independent human acceptance is **Needs Review**.

Domain 1 remains incomplete. L12 Professional Conduct & Ethical Decisions (1.5: professional conduct, due care/diligence, ISC2 Code of Ethics) is the remaining planned lesson and has **not started**. The AI application limits in the verification register still apply; no claim of complete Domain 1 coverage or exam readiness. Sustained native fullscreen/explicit exit, untested browser/assistive-technology environments remain manual checks. No mobile/tablet QA or Domain 2 work.


Final verification resumed **2026-10-28**: no unfinished L11 implementation found; latest bilingual corrections and intact 36-slide/12-feedback browser evidence revalidated without repeating browser QA. Fresh focused results remain165/165; historical Vocabulary6pass/5same failures. Integrity, ten prior lessons, V1 schema and protected banks preserved. Objective1.4 remains educationally Complete with human academic/bilingual acceptance pending. See the L11 report's resumed-verification section. Stop for review; L12/Domain2 not started.

## Lesson 12 delivery and preliminary Domain1 check — 2026-10-28

Earlier delivery and authorization snapshots above are historical. Current scope authorizes L12 and a preliminary whole-domain coverage check only.

- [x] Confirm **Professional Conduct & Ethical Decisions**, Domain1 / Objective1.5; read both notes fully and verify current official outline/ethics plus primary care/diligence corroboration.
- [x] Publish10complete TH/EN white compositions, full Info/reading and three-choice reporting decision. Twelve available lessons now contain101slides. No earlier lesson text, IDs, order or presentation implementation changed.
- [x] Inspect40production desktop slide views and12feedback states across1920×1080/1366×768 in TH/EN. Verify keyboard, language/state, overview, full explanations, selection, reload/direct Resume6/10 and all11prior independent positions in an isolated local origin.
- [x] Pass170/170focused Node checks. Separate Vocabulary suite remains6pass/5same task-entry historical failures. Protect1,544baseline files except17expected integration/test/documentation modifications;1,527unchanged,zero missing. Old583questions, current119updated-bank questions and403Vocabulary entries preserved, including unrelated Domain4 work.
- [x] Finish [L12 report: sources, exact files, desktop evidence and preliminary matrix](lesson-d1-12-implementation.md). Update tracker; stop for human review.

**Objective1.5: Complete for introductory educational coverage, self-reviewed; human academic/bilingual acceptance Needs Review.** Conduct is applied in1–2,7–10; care/diligence in3–5,10; all four ISC2 canons in6–10 and full explanation6. The canons are teaching paraphrases linked to official wording; professional judgment remains necessary. A's DO/CHECK and SAPP are memory cues, not exhaustive definitions or an automatic conflict algorithm.

The [preliminary coverage matrix](lesson-d1-12-implementation.md#preliminary-domain1-coverage-matrix) maps all five official objectives, both notes and L01–L12. Dedicated introductory core teaching now exists for every listed heading. Intentional prerequisite reinforcement is distinguished from duplication; official category/function and cross-domain boundaries remain explicit. **Domain1 is not finally approved:** AI integration remains **Partial**, especially explicit model-poisoning/integrity and traceable automated-action applications, and a separate full101-slide academic/bilingual audit is **Needs Review**. L04 training-data privacy, L08 AI governance intake and L12 accountable AI-assisted reporting provide some contextual evidence, not complete AI coverage.

Final audit should examine depth/overlap, factual qualifications, references and consistent TH/EN terminology (accounting/accountability, privacy/confidentiality, care/diligence, principals and professional/data integrity). No previous lesson is automatically revised here. Native fullscreen was requested but did not remain active in IAB; sustained fullscreen/exit, other browsers/assistive technology and zoom remain manual. No mobile/tablet QA, Lesson13 or Domain2 implementation. Stop for user review.
