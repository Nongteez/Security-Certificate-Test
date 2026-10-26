# Domain 1 — Evidence-based Learning Roadmap

Date: 2026-10-26 · Status: roadmap complete; Lessons 1–5 implemented; latest execution authorizes only Lesson 5. Domain → Objective → multiple Lessons → Slides remains the architecture. This document supersedes older curriculum estimates where they conflict with the current official boundaries; it does not authorize the rest of the roadmap.

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
| 1.2 | Risk management processes: identify and assess | A §§16–21; B §§5.1–5.2 | L05 scenario identification and likelihood/impact foundations | Partial; L06 methods pending | L05 foundations → L06 Assessment & Prioritization | High |
| 1.2 | Risk management processes: respond, monitor, report | A §§22–24; B §§5.3–5.5 | L05 lifecycle introduction and monitoring/reporting foundations | Partial; L07 depth pending | L07 Respond, Review & Communicate Risk | High |
| 1.3 | Regulations and laws | A §26; B §§4.2, 7.2 | None | Missing | L08 Governance & Applicable Requirements | High |
| 1.3 | Frameworks and guidelines | A §§27–28, 33–34; B §§7.1–7.2 | None | Missing | L09 Frameworks & Security Documents | High |
| 1.3 | Policies, standards (ISO, CIS examples), procedures | A §§29–34; B §7.1 | None | Missing | L09 | High |
| 1.4 | Technical controls | A §§35–36; B §6.1 | L01 examples, not category instruction | Partial | L10 Control Categories | High |
| 1.4 | Administrative controls | A §36 managerial/operational; B §6.1 | None | Missing | L10 | High |
| 1.4 | Physical controls | A §36; B §6.1 | None | Missing | L10 | High |
| 1.4 (support) | Functional types and context-dependent overlap | A §§37–45; B §§6.2–6.3 | None | Missing | L11 What Is the Control Doing? | Medium |
| 1.5 | Professional code of conduct | A §46; B §8 | None | Missing | L12 Professional Conduct & Ethical Decisions | High |
| 1.5 | Due care and due diligence | A §§47–49; B §7.3 | None | Missing | L12 | High |
| 1.5 | ISC2 Code of Ethics | A §§50–51; B §8 | None | Missing | L12 | High |

## Lesson sequence, outcomes and dependencies

Numbers identify internal lessons, not official sub-objectives. Planned slide counts remain undecided until authoring. A coherent unit can be split later if sources or readability warrant it.

| Domain / objective | Lesson | Outcomes and terminology | Source / dependency |
| --- | --- | --- | --- |
| D1 / 1.1 | L01 CIA Triad — existing 8 slides | Diagnose disclosure/modification/disruption; one incident, multiple goals | A §§1–3; B §2 |
| D1 / 1.1 | L02 Identification, AAA & MFA — existing 7 slides | Distinguish claim/verification/permission/activity; knowledge/possession/inherence and context | A §§4–7; B §3; builds on L01 |
| D1 / 1.1 | **L03 Non-repudiation & Trustworthy Evidence — implemented, 6 slides** | Distinguish evidence of action from a login/log; explain signing/verification, alteration detection, trusted identity-to-key binding and custody limits | B §§2.2, 4.1, 4.3, 10, 12; A §§2, 6 as prerequisites; L01–02; NIST verification fills identified technical gap |
| D1 / 1.1 | L04 Privacy & Personal Data — implemented, 8 slides | Distinguish privacy/confidentiality; data subject/controller/processor; ownership responsibilities; inventory vs retention; conditional deletion | A §§8–14; B §§4.2, 10; L01 |
| D1 / 1.2 | L05 Risk Foundations & Lifecycle — implemented, 8 slides | Connect asset/threat/vulnerability/impact/likelihood; follow continuous identify/assess/respond/monitor/communicate | A §§15–16, 23–24; B §§1, 5.1–5.2; L01 |
| D1 / 1.2 | L06 Assessment & Prioritization | Compare qualitative and quantitative reasoning; relate AV, EF, SLE, ARO, ALE; communicate estimation limits | A §§17–21; B §5.1; L05. Formula examples are course enrichment, not a claimed mandated exam calculation |
| D1 / 1.2 | L07 Respond, Review & Communicate Risk | Choose avoid/mitigate/share/accept; distinguish inherent/residual risk; reassessment triggers and stakeholder reporting | A §§22–24; B §§5.3–5.5; L05–06 |
| D1 / 1.3 | L08 Governance & Applicable Requirements | Explain direction/oversight/accountability; determine applicability; distinguish laws, contractual standards and compliance vs security | A §§25–26; B §7.2; L05 and L04 |
| D1 / 1.3 | L09 Frameworks & Security Documents | Distinguish policy/standard/procedure/guideline; ISO/IEC 27001 as ISMS standard, CIS safeguards, framework roles | A §§27–34; B §7.1; L08 |
| D1 / 1.4 | L10 Control Categories | Classify technical/administrative/physical by implementation; relate course operational/managerial labels without inventing an official fourth category | A §§35–36; B §6.1; L01 and L05 |
| D1 / 1.4 | L11 What Is the Control Doing? | Identify preventive/detective/corrective/deterrent/directive/recovery/compensating functions; justify CCTV/firewall/guard overlap in context | A §§37–45; B §§6.2–6.3; L10 |
| D1 / 1.5 | L12 Professional Conduct & Ethical Decisions | Apply professional boundaries and ISC2 canons; connect due care/diligence through assess → act → verify | A §§46–51; B §§7.3, 8; L05–11 |

After L05, assessment methods (L06), response/review depth (L07) and all planned 1.3–1.5 lessons remain. Objective 1.2 is available for L05, not academically complete. Do not enable empty objectives merely because this roadmap lists them.

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

Delivery update: L03 is implemented and desktop-verified, awaiting user visual/academic acceptance. The non-repudiation and supporting accountability rows now have dedicated instruction, rather than a mention. L04 is now implemented and desktop-verified; L05 is now implemented; L06–L12 remain plans only. Domain 1 is **not complete**.

## Lesson 4 delivery — 2026-10-26

- [x] Confirm roadmap selection and official 1.1 Privacy boundary; review both notes and primary corroboration.
- [x] Author and implement eight complete TH/EN slides, original scoped HTML/SVG and full Info/reading.
- [x] Inspect all 32 desktop slide cases, interaction, language, lesson selection and independent reload/resume.
- [x] Verify protected Lessons 1–3, source notes, Quiz/Vocabulary and unchanged V1 schema; run 128 relevant Node checks.
- [x] Update tracker and [Lesson 4 report](lesson-d1-04-privacy-implementation.md); stop for user review.

All listed core 1.1 topics now have dedicated lessons, with human visual/academic acceptance still pending. This is not a claim of independent certification of objective completeness or of full Domain 1 completion. Risk (L05–L07), governance (L08–L09), controls (L10–L11) and ethics (L12) remain unimplemented. No Lesson 5 or Domain 2 work is authorized by this delivery.

## Lesson 5 delivery — 2026-10-26

- [x] Confirm L05 under official Objective 1.2, review A §§15–16,23–24 and B §§1,5.1–5.2 with supporting response context; verify official outline and NIST distinctions.
- [x] Implement eight complete TH/EN slides with distinct original HTML/SVG compositions, full Info/reading and an illustrative before/after evidence interaction.
- [x] Inspect all 32 real production desktop cases; exercise objective selection, keyboard/language state, Info, reading and independent reload/Resume.
- [x] Preserve Lessons 1–4 and V1 progress; run 133 relevant Node checks, record entry-baseline comparison and finish [Lesson 5 report](lesson-d1-05-risk-foundations-implementation.md).

L05 teaches risk foundations, a continuous course cycle, scenario identification and monitoring/reporting foundations. **Objective 1.2 remains partially covered**: L06 assessment methods and L07 detailed response choices, acceptance and review remain planned. Objective publication indicates that validated L05 can launch; it does not certify complete objective coverage. The earlier Lesson 4 stop condition above is historical and superseded only for L05 by the latest user brief. Stop now; no Lesson 6 or Domain 2 work.
