# Domain 1 — September 2026 coverage traceability

Audit date: 2026-10-28. Actual inventory:12 published lessons,101 slides. Decision: **Requires Targeted Remediation**. This document records a read-only audit, not permission to alter lessons.

Authority: [ISC2 official outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective September1,2026, corroborated by its linked [English v01/2026 PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed p4. The five headings and seventeen bullet topics below preserve the official boundaries. AI applications come from the official webpage's separately labelled explanatory guidance; they are not invented numbered objectives or promises of exam frequency.

Status meanings: **Complete** = adequate, accurate introductory instruction; **Partial** = a meaningful explanation exists but a material gap/conflict remains; **Missing** = no meaningful instruction in the reviewed production content; **Needs Review** = evidence/correctness unresolved; **Supplemental** = useful depth beyond an explicitly enumerated bullet. Human acceptance is a separate decision even for a Complete row. A Partial row below can reflect a contradiction in a prerequisite or feedback, not an absent whole subject.

Production filenames and every slide ID, title, reference and Info/reading route are in the [complete101-slide ledger](domain-1-final-academic-audit.md#production-inventory-and-complete-slide-ledger). L01–L12 abbreviate those exact lesson IDs. A/B refer to the two mandatory notes identified in the main report. Evidence below includes the complete paired explanations, not titles alone.

## 1.1 Understand cybersecurity concepts

| Official requirement | Lesson | Slide ID | Actual evidence, depth and example | Coverage | Gap / bilingual qualification |
|---|---|---|---|---|---|
| Confidentiality | L01; L12 reinforcement | `slide-03-confidentiality`; `slide-07-scenario-reflection`; L12 `slide-01-access-and-authority` | Defines authorization boundary, contrasts viewing with alteration and applies internal salary viewing; admin capability is not unrestricted purpose. A1,46/B2.1,8. | Partial | Core explanation adequate in TH/EN; F05's outsider-only feedback must agree with it. |
| Integrity | L01; L03 | `slide-04-integrity`; `slide-06-compound-impact`; `slide-08-takeaways`; L03 `slide-03-sign-and-verify` | Modified transfer, corrupted clinical records, hash/signature/FIM roles; later key/identity conditions. A2/B2.2,2.4. | Partial | F02 hash proof/uniqueness, F03 secrecy-only contrast and F04 exclusive CIA shortcut conflict with fuller reasoning. Thai F06 also overstates signatures. |
| Availability | L01 | `slide-05-availability`; `slide-06-compound-impact`; `slide-08-takeaways` | Timely authorized use, hospital DDoS consequence, redundancy/power/backup examples and multi-impact incident. A3/B2.3–2.4. | Complete | Low F07 drops “tested” from a Thai supporting-control example; not absence of availability instruction. |
| Authentication, Authorization, Accounting (AAA) | L02 | `slide-01-aaa-map`; `slide-02-claim-and-proof`; `slide-03-permission-boundary`; `slide-04-activity-trail`; `slide-07-access-case` | Claim versus credential check, resource/action permission, success and denied events; procurement case applies all 3. Accounting is not automatically auditing or actor proof. A4–6/B3. | Complete | Equivalent TH/EN; three functions are one official bullet, not three new sub-objective numbers. AI application is separately Missing below. |
| Non-repudiation | L03; conflicting prerequisite L01 | `slide-01-disputed-action`; `slide-02-different-questions`; `slide-03-sign-and-verify`; `slide-04-altered-copy`; `slide-05-evidence-conditions`; `slide-06-evaluate-the-claim` | Six-slide disputed-order unit explains signed origin/integrity, trusted public key, custody, time and legal/actor limits. B4.1,4.3,12; A2/6 only context. | Partial | L03 itself is adequate; F06's absolute liability formulation in L01 must be reconciled across the course. |
| Privacy | L04 | `slide-01-secure-is-not-enough`; `slide-02-recognize-personal-data`; `slide-03-roles-and-responsibility`; `slide-04-purpose-and-minimization`; `slide-05-inventory-and-copies`; `slide-06-retention-with-a-reason`; `slide-07-conditional-erasure`; `slide-08-evaluate-a-new-use` | Distinguishes authorized but problematic reuse; actual roles, linked identifiers, data minimization, copies, justified retention and conditional erasure; AI-training case. A8–14/B4.2,10. | Complete | Equivalent TH/EN; GDPR is bounded supporting context, not universal law. No consent-only or fixed-retention claim. |

Objective1.1 overall: **Partial pending targeted corrections**, with all six subjects substantially taught. Dedicated AAA/privacy/non-repudiation units must not be counted as complete merely from their presence; their content was read and compared to the conflicting CIA prerequisite.

## 1.2 Understand risk management concepts

| Official requirement | Lesson | Slide ID | Actual evidence, depth and example | Coverage | Gap / bilingual qualification |
|---|---|---|---|---|---|
| Risk management lifecycle | L05–L07 | L05 `slide-02-connect-the-scenario`, `slide-05-continuous-lifecycle`, `slide-07-review-after-change`, `slide-08-communicate-for-a-decision`; L07 `slide-09-monitor-and-reassess` | Clinic scenario, cyclic identification/assessment/response/review with communication throughout; changes feed reassessment. A15–16,23–24/B1,5.2. | Complete | The course cycle is explicitly not a mandatory universal ISC2 diagram. TH/EN include ongoing communication. |
| Risk management processes | L05–L07 | L05 `slide-06-write-a-risk-statement`; L06 `slide-01-choose-the-method` through `slide-08-prioritize-with-context`; L07 `slide-01-four-response-paths` through `slide-10-communicate-the-decision` | Identify scenario; defined criteria/likelihood/impact; financial estimates and uncertainty; justified response combinations, authority, residual risk, monitoring and actionable record. A16–24/B5.1–5.5. | Complete | No invented official subtopic list: identification/assessment/treatment/monitor/report are the implemented explanation of this broad bullet. Methods and formulas are bounded enrichment. |

Objective1.2 core: **Complete** at CC introductory depth. Formula outputs, annual units, nonfinancial harms and acceptance limits were checked in both languages. AI transfer requires F01 work; this does not erase the substantial generic risk instruction.

## 1.3 Understand governance concepts

| Official requirement | Lesson | Slide ID | Actual evidence, depth and example | Coverage | Gap / bilingual qualification |
|---|---|---|---|---|---|
| Regulations and laws | L08 | `slide-03-sources-of-obligations`; `slide-04-establish-applicability`; `slide-05-bound-the-legal-examples`; `slide-06-payment-card-requirements`; `slide-07-compliance-and-security`; `slide-09-trace-requirements` | Legal versus contractual sources, scope evidence, GDPR/HIPAA limits, PCI's actual standard status/outsourcing, evidence versus perfect security. A25–26/B7.2. | Complete | Bilingual boundaries preserved; no universal applicability or legal waiver from risk acceptance. |
| Frameworks and guidelines | L09 | `slide-01-framework-structure`; `slide-02-nist-outcomes`; `slide-03-iso-isms`; `slide-04-cis-safeguards`; `slide-08-guideline-advice`; `slide-09-classify-the-purpose` | Current/target gap example, CSF outcomes/concurrent functions, ISMS versus safeguards, adaptable advice inside required boundaries. A27–28,33–34/B7.1. | Complete | Resources are not interchangeable laws/certificates; detailed versions/implementation projects are supplemental. |
| Policies, standards (e.g., International Organization for Standardization (ISO), Center for Internet Security), procedures | L09 | `slide-03-iso-isms`; `slide-04-cis-safeguards`; `slide-05-policy-direction`; `slide-06-standard-requirement`; `slide-07-procedure-steps`; `slide-09-classify-the-purpose`; `slide-10-connect-and-review` | Broad direction→specific adopted requirement→verified reset steps;4-choice clause classification; distinguishes external standards from internal mandates. A29–34/B7.1. | Complete | F08 concerns old “unfinished” delivery prose, not a missing definition. English and Thai preserve authority/scope. |

Objective1.3 core: **Complete**. L08+L09 are complementary applicability and document-function instruction; legal/GRC detail beyond D1's introduction is not imposed as a new requirement.

## 1.4 Understand cybersecurity controls

| Official requirement | Lesson | Slide ID | Actual evidence, depth and example | Coverage | Gap / bilingual qualification |
|---|---|---|---|---|---|
| Technical controls | L10; L11 reinforcement | L10 `slide-02-technical-enforcement`, `slide-06-one-goal-three-controls`, `slide-07-classify-the-mechanism`; L11 `slide-01-category-and-function` | Software/hardware rule enforcement; ACL/MFA/encryption differ by purpose; human configuration is not the same component. A35–36/B6.1. | Complete | Three-category scheme retained; AI-specific blend not yet explicitly applied. |
| Administrative controls | L10 | `slide-03-administrative-direction`; `slide-05-course-labels`; `slide-06-one-goal-three-controls`; `slide-07-classify-the-mechanism` | People/process direction, training/approval/review, electronic ticket versus human judgment; managerial/operational reconciled without claiming universal taxonomy. A36/B6.1. | Complete | Equivalent TH/EN; source A's labels do not create a fourth official category. |
| Physical controls | L10; L11 examples | L10 `slide-04-physical-protection`, `slide-06-one-goal-three-controls`; L11 `slide-05-deterrent`, `slide-08-context-changes-function` | Door/site/hardware boundary, electronic lock components, guard and camera context; layered service example. A36/B6.1–6.3. | Complete | Not every electronic device is “technical only”; categories can coexist in one installation. |

Objective1.4 core: **Complete**. L11's effects and qualified compensating-control case add useful course depth; they are not seven official categories. Zero Trust/Defense in Depth belong to4.2, not a missing D1 bullet.

## 1.5 Maintain professional and ethical conduct

| Official requirement | Lesson | Slide ID | Actual evidence, depth and example | Coverage | Gap / bilingual qualification |
|---|---|---|---|---|---|
| Professional code of conduct | L12 | `slide-01-access-and-authority`; `slide-02-professional-conduct`; `slide-07-public-trust-and-honesty`; `slide-08-competent-service`; `slide-09-reporting-decision`; `slide-10-defensible-decisions` | Capability versus authorized task; honesty/confidentiality/responsibility, conflicts, competence limits and supported escalation. A46/B8. | Complete | No universal report deadline or unrestricted disclosure rule. All three reporting feedback paths reviewed in TH/EN. |
| Due care and due diligence | L12 | `slide-03-reasonable-care`; `slide-04-investigate-and-review`; `slide-05-scan-patch-verify`; `slide-10-defensible-decisions` | Proportionate authorized safeguards; investigation before and after; safe change, rescan/service check and continuing review. A47–49/B7.3. | Complete | DO/CHECK explicitly a cue with overlap, not exhaustive definition or legal immunity. |
| ISC2 Code of Ethics | L12 | `slide-06-four-canons`; `slide-07-public-trust-and-honesty`; `slide-08-competent-service`; `slide-09-reporting-decision` | Four teaching paraphrases with full explanation, public trust, honest conduct, principal service, profession and judgment; official wording linked. A50–51/B8. | Complete | Meaning preserved in both languages; no SAPP automatic conflict algorithm, no obedience-at-any-cost principle. |

Objective1.5 core: **Complete** at introductory depth. Human judgment cannot be certified from a code example alone; user acceptance remains separate. AI adoption care/diligence and non-bias application still have the F01 limitation below.

## AI application guidance

The official webpage explains applying the same foundations to AI: poisoned training data and trustworthy actions are central examples; privacy, GRC, control combinations and responsible adoption also matter. These are official application guidance, **not optional merely because the two notes lack them**, and **not extra numbered PDF objectives**. The curriculum's original scenarios are teaching choices rather than ISC2-authored questions.

| Application | Existing evidence actually read | Coverage | Minimum justified correction / finding |
|---|---|---|---|
| CIA applied to AI, especially integrity/model poisoning | L01 has generic confidentiality/integrity/availability examples; no AI asset, training-label alteration, poisoned result or causal explanation. Neither A nor B teaches it explicitly. | Missing | F01: add one beginner case explaining malicious training-data change→unreliable learned result, trusted change/data review and limits. Do not present a hash as proof of training quality. |
| Privacy of AI training data | L04 `slide-08-evaluate-a-new-use`, complete explanation and reveal; purpose, lawful basis, notice, actual provider role, minimization, retention and rights. | Complete | Keep this sound example. It neither universally bans training nor treats removing names as anonymization. |
| AAA/non-repudiation for AI-generated actions/access | L02/L03 teach human procurement/evidence; L12 checks an AI-generated report, not an AI agent's executed action or signed action record. No automated-actor traceability case. | Missing | F01: service identity/credential→scoped permission→protected action record and bounded later evidence. Reference L03 for identity/key limits; do not promise proof of a human behind every action. |
| AI in GRC and ordinary policy/legal requirements | L08 `slide-07-compliance-and-security`/`slide-08-ai-governance-intake`: demo success does not settle obligations; gather data flows, authority and scope before approval. | Complete | Adequate high-level introduction; no separate AI-law/compliance programme required. |
| Blend of technical/administrative/physical safeguards for AI | L10 `slide-06-one-goal-three-controls` is a generic records service. L08 explicitly leaves AI control depth elsewhere; L12 does not complete it. | Partial | F01: apply the already taught3categories to one AI-data/service case, including the relevant host/facility or provider boundary. Avoid category→CIA one-to-one matching. |
| AI adoption care/diligence, risk appetite, transparency/non-bias and ethics | L07 generic organizational limits; L12 `slide-10-defensible-decisions` checks factual support, sensitive handling and misleading/unfair claims in an AI report. No linked adoption-risk/review example tying those elements together. | Partial | F01: connect the existing governance decision to proportionate checks, authority, stated limitations and review of potentially unfair outcomes. No claim that a human glance guarantees fairness. |

**Conclusion:** the preliminary “AI Partial” result is confirmed and made precise. Two applications are Missing, two Partial and two Complete. Ordinary introductory risk/control concepts need transfer to the AI case, not wholesale reteaching. The smallest academically sufficient approach is a linked set of short applied examples in existing lessons, with complete paired explanations and visible pointers. No evidence requires a standalone Lesson13. Detailed attacks/defenses, model mathematics, jurisdiction-specific AI statutes and a full AI governance programme are beyond this remediation requirement.

## Supplemental teaching and notes reconciliation

| Material | Evidence | Status / boundary |
|---|---|---|
| Identification/MFA/context/biometric factors | L02 slides2,5–7; A7/B3; NIST qualification retained | Supplemental depth supporting the AAA bullet; not a separate1.1 objective. |
| AV/EF/SLE/ARO/ALE and net annual benefit | L06 slides3–7; L07 slide7; A17–22; source units and uncertainty explicit | Supplemental course model; not a guaranteed exam formula. |
| Appetite/tolerance | L07 slide6; B5.5 explicitly marked added terminology | Supplemental explanation of authority/decision limits; relevant to AI context when applied, not a new risk objective number. |
| Control functions, overlap, compensating examples | L11 all 9 slides; A37–45/B6.2–6.3 | Supplemental supporting depth beyond the official3category names; comparable protection and authorized review retained. |
| Zero Trust/Defense in Depth | B9; current official4.2, source-A/B boundary register | Out of D1's explicit scope; not counted Missing. No implementation in another domain authorized. |

No unverified official requirement is invented from a study-note mnemonic. Note simplifications are corrected where needed rather than copied: location as context, scan versus full assessment, acceptance authority, internal versus external standards, actual controller/processor roles, corrective/recovery overlap and care/diligence overlap. The main report records exact conflicts and evidence.

## Coverage verdict

**14 Complete /3 Partial across17numbered bullet requirements; no whole numbered objective Missing or unresolved Needs Review row.** AI guidance separately has2 Complete/2 Partial/2 Missing applications. Whole Domain1 acceptance: **Requires Targeted Remediation**, not “fully complete” or finally approved. Read this matrix with the nine-finding register and exact bilingual replacements; it does not authorize fixes, alter the roadmap or update the task tracker.
