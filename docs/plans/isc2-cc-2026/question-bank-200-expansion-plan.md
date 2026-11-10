# ISC2 CC 2026 — plan from 157 to 200 questions

**READY FOR HUMAN REVIEW — EXPANSION NOT AUTHORIZED.**

This is a specification for **43 additional original practice items**, not permission to write them. No stems, choices, answer keys or new explanations are included. Preserve all 157 current records. Phase 1 repairs are complete; Phase 2.5 applies four bounded wording/parity corrections and retains six substantive revisions for human approval. See [question-bank-academic-remediation.md](question-bank-academic-remediation.md). Academic acceptance remains open before expansion/integration. A repair retaining its ID is not counted as an additional question.

## Revision history

| Revision | Date | Change / authority |
| --- | --- | --- |
| 1.0 | Prior audit | Original 43 concept specifications, retained as an immutable Phase 2.5 entry snapshot. Phase 2 review found 8 requiring revision. |
| 1.1 | 2026-11-06 | Phase 2.5: revised targets/boundaries/sources/overlap for 1044, 1045, 1046, 1051, 1071, 1078, 1080, 1082; corrected historical corruption references for 1041/1042; refreshed Phase 1/2.5 status. No slot, domain, objective or allocation change; no authored items or authoring approval. |

Current machine-readable v1.1 specifications: [expansion-slots.revised.json](../../../artifacts/qa/question-bank-academic-remediation/expansion-slots.revised.json). Exact before/after: [specification-revisions.json](../../../artifacts/qa/question-bank-academic-remediation/specification-revisions.json). The old `question-bank-audit-support/expansion-slots.json` and `build-audit-reports.py` remain historical v1.0 inputs; rerunning that old generator would recreate the obsolete plan. Do not use it to regenerate v1.1. The Phase 2 reports remain unchanged historical findings.

The eight revised concepts are ready for human specification review, subject to the stated claim boundaries and later draft-level novelty review. This is not certification of 43 unwritten items. The 35 other concept designs are retained; two of their historical overlap notes are corrected. The 24/1/8/8/2 allocation is retained as a training-pool tradeoff, not an exam-selection blueprint.

## Scope, allocation and rationale

Primary scope: [official CC outline effective September 1, 2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf). Local supporting sources: read-only `ISC2 Update 2026/Domain 1` through `Domain 5`. Full paths, limitations and objective links are in [academic-source-inventory.md](question-bank-audit-support/academic-source-inventory.md). The 43 specifications below each identify a real local section. Presence of supporting notes does not certify every claim in an unwritten item.

| Domain | Existing | Add | Planned total | Planned share | Official weight | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 24 | 24 | 48 | 24.0% | 24% | Largest primary-topic gaps: AAA evidence/privacy, risk processes, document distinctions and all four ethics canons. |
| 2 | 39 | 1 | 40 | 20.0% | 17.3% | Already 39 items; one measurement-comparability gap, not another insurance/KRI/phishing variant. |
| 3 | 23 | 8 | 31 | 15.5% | 20% | Both objectives broadly covered; add eight distinct identity, mechanism and policy-evaluation targets. |
| 4 | 33 | 8 | 41 | 20.5% | 21.3% | Add basic function decisions, internal flow visibility, resource policy and community eligibility. |
| 5 | 38 | 2 | 40 | 20.0% | 17.3% | Already broad operations/testing coverage; add only symmetric bulk protection and signature key roles. |

**157 + 43 = 200**, by domain **48 / 40 / 31 / 41 / 40**. This is a coverage-oriented training pool, not a domain-weighted mock-exam blueprint. The approximate 200-item weight targets would be 48 / 35 / 40 / 43 / 34 after rounding; existing D2=39 and D5=38 already exceed those two targets. Exact weight matching is impossible by additions alone while preserving all existing records. The proposed tradeoff fills substantive D1 gaps and selected distinct targets elsewhere; D3 remains below weight (15.5% versus 20%). If human review prioritizes D3 weighting instead, reallocate D1 optional risk-math/secondary privacy slots before authoring; do not pretend both objectives are simultaneously optimized. No quiz selection or scoring change is proposed.

No arbitrary scenario, difficulty or AI quotas were imposed. Difficulty labels are estimates for review, not measured performance. Direct conceptual distinctions are retained where a scenario would be artificial; calculations are simple supporting risk examples, not claims about required exam formulas. Four canon specifications test different professional obligations and must not devolve into four identical label-recall variants.

| Objective | Existing | Add | Planned | Coverage decision |
| --- | --- | --- | --- | --- |
| 1.1 | 7 | 7 | 14 | Accounting, non-repudiation, privacy purpose/retention and identity claim; 588–590 explanations repaired in Phase 1; independent acceptance remains open. CIA examples exist. |
| 1.2 | 6 | 6 | 12 | Inherent/residual distinction, simple quantified estimates, investment and post-treatment evidence. Risk-transfer/avoidance already repeated. |
| 1.3 | 4 | 4 | 8 | Procedure, guideline, applicable requirements and limits of compliance; policy/standard/framework already targeted. |
| 1.4 | 5 | 3 | 8 | Detective and compensating functions and context-dependent roles; current examples include mixed category/function language. |
| 1.5 | 2 | 4 | 6 | Only due care/diligence: no primary decision targets for the four canons. |
| 2.1 | 10 | 0 | 10 | Broad coverage; transfer, avoidance and acceptance repeated across domains. No volume priority. |
| 2.2 | 9 | 0 | 9 | Broad coverage but 619/637 site-capability assurance needs repair and 639 dependency caveat. |
| 2.3 | 10 | 0 | 10 | Broad social-engineering coverage; repeated targeted phishing and overtly implausible distractors. |
| 2.4 | 10 | 1 | 11 | Ten items, several repeated KPI/reporting decisions; measurement comparability gap and ambiguous MTTR terminology. |
| 3.1 | 12 | 4 | 16 | All main lifecycle stages present; identifier scope, credential definition, provisioning scope and review cadence add distinct reasoning. |
| 3.2 | 11 | 4 | 15 | All four models present; ACL mechanism, prospective group-wide permission scope, privilege duration and policy evaluation add variety without another model-label item. |
| 4.1 | 15 | 5 | 20 | Detailed VPN/firewall/wireless/OT cases; basic device, transport and application-function decisions less directly tested. |
| 4.2 | 8 | 2 | 10 | Substantial segmentation coverage; internal-flow visibility and explicit resource policy application add distinct targets. |
| 4.3 | 10 | 1 | 11 | All service/deployment concepts substantially covered; community eligibility is a limited gap. FaaS/multicloud remain contextual, not extra official objectives. |
| 5.1 | 9 | 2 | 11 | Masking/sanitization/hash/PQC targeted; symmetric bulk choice and signature key roles not direct targets. D5 sum opening mislabels scope as crypto only. |
| 5.2 | 10 | 0 | 10 | Logging, triage, CTI, actors and ATT&CK present; no count-driven additions needed. |
| 5.3 | 5 | 0 | 5 | Data sharing, hold, containment, recovery and exercises present; avoid new universal IR phase/order rules. |
| 5.4 | 6 | 0 | 6 | Lifecycle, EOL, baseline/exception and change verification present; no count priority. |
| 5.5 | 8 | 0 | 8 | Teams, scanning limits, static/dynamic testing, threat modeling and physical testing present; no count priority. |

## Prospective IDs and per-item specifications

IDs **1041–1083** are proposed only. They are absent from the current runtime banks and inspected authoring registries; they are **not reserved, assigned or integrated** by this report. Recheck repository-wide collisions and any concurrent authoring before approval. The numbered IDs in historical D2 staging are not reliable reservations because published D5 already uses 1001–1040.

Each specification names a knowledge target and bounded context, not a question prompt. Every source is a local supporting section, with numbered official alignment as scope. The topic must be held if final wording requires a claim beyond that evidence. Overlap is assessed at planned decision level; final drafts must be compared again, including local embedded examples and all new drafts.

### Proposed 1041 — Accounting and attributable activity

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** Evidence linking an approved actor to an operation; distinguish login and permission evidence.
- **Skill / estimated difficulty / style:** apply; applied; evidence selection.
- **Important terminology:** AAA; accounting; audit trail.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:115` — 3.4 Accounting / Auditing — การบันทึกและตรวจสอบ.
- **Difference / overlap control:** 587 tests authorization; repaired 588 tests same-factor authentication, not accounting. No primary accounting decision is present.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1042 — Non-repudiation versus authentication

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** Evidence of a past signed action rather than successful current login.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** non-repudiation; authentication; evidence.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:130` — 4.1 Non-repudiation — การไม่อาจปฏิเสธการกระทำ.
- **Difference / overlap control:** Repaired 589 tests controller/processor roles; no primary non-repudiation target. 1083 tests signature key mechanics rather than evidentiary purpose.
- **Evidence limit / authoring hold:** Local explanation is qualified; verify official ethics/privacy terminology and NIST signature evidence, without legal-proof guarantees.

### Proposed 1043 — Privacy data minimization

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** Selection of necessary personal fields before collection.
- **Skill / estimated difficulty / style:** apply; applied; control selection.
- **Important terminology:** privacy; purpose; minimization.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:136` — 4.2 Privacy — ความเป็นส่วนตัว.
- **Difference / overlap control:** 589 asks processor role; 590 asks inventory; 1004 removes identifiers before sharing, rather than necessity at collection.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1044 — Apply a supplied ordinary retention schedule

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** Determine disposition from an explicitly supplied retention period and trigger; no erasure request, legal hold or exceptional preservation condition.
- **Skill / estimated difficulty / style:** apply; applied; apply a supplied schedule.
- **Important terminology:** retention; personal data; exception.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:431` — 13. Data Retention.
- **Difference / overlap control:** 1022 tests an incident/legal-hold exception. 1045 tests category-scoped erasure conflicts. This slot applies the ordinary schedule only.
- **Evidence limit / authoring hold:** Read D1 sum 431–451, Data Retention. Supply the rule; do not invent a statutory period or universal deletion requirement.

### Proposed 1045 — Scope an erasure request against supplied retention obligations

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** Separate explicitly defined record categories eligible for erasure from categories subject to a stated retention requirement; avoid blanket deletion or blanket retention.
- **Skill / estimated difficulty / style:** analyze; applied; category-scoped disposition.
- **Important terminology:** erasure; retention; applicable requirement.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:453` — 14. Right to Be Forgotten.
- **Difference / overlap control:** 1044 applies an ordinary schedule without competing requests; 1022 concerns incident preservation. This target is category-scoped rights-request disposition.
- **Evidence limit / authoring hold:** D1 sum 453–468, Right to Be Forgotten, with 431–451 retention. Supply the governing requirement and affected categories; no unsupported named-law exceptions or legal advice.

### Proposed 1046 — Purpose-compatible use of personal data

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** An authorized secondary use conflicts with the explicitly stated original purpose and governing rule while confidentiality and access boundaries remain intact.
- **Skill / estimated difficulty / style:** apply; foundational; purpose-use distinction.
- **Important terminology:** privacy; confidentiality; purpose.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:136` — 4.2 Privacy — ความเป็นส่วนตัว.
- **Difference / overlap control:** 1043 concerns unnecessary collection; 585 concerns masking. Assess permitted purpose of use, not minimization, confidentiality failure or accountability logging.
- **Evidence limit / authoring hold:** Read Domain 1.md 136–146 Privacy; corrected from the Accountability heading at 142. Do not imply every secondary use is forbidden; supply the purpose rule.

### Proposed 1047 — Identification versus authentication

- **Domain / objective:** 1 / 1.1 — Cybersecurity concepts; official PDF page 4.
- **Knowledge and context:** A claimed identifier compared with evidence demonstrating control.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** identification; authentication; identifier.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:94` — 3.1 Identification — การระบุตัวตน.
- **Difference / overlap control:** 587 tests authorization; 588 factor independence; 657 identity proofing. Avoid another MFA-factor question.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1048 — Inherent and residual risk

- **Domain / objective:** 1 / 1.2 — Risk management processes; official PDF page 4.
- **Knowledge and context:** Comparison of exposure before and after an implemented control.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** inherent risk; residual risk.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:180` — 5.4 Inherent Risk และ Residual Risk.
- **Difference / overlap control:** 636 accepts residual risk; new target is distinguishing pre/post-control estimates, not who signs acceptance.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1049 — Single loss estimate

- **Domain / objective:** 1 / 1.2 — Risk management processes; official PDF page 4.
- **Knowledge and context:** One explicitly supplied asset value and exposure fraction, including units.
- **Skill / estimated difficulty / style:** apply; applied; bounded calculation.
- **Important terminology:** AV; EF; SLE.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:588` — 19. Single Loss Expectancy — SLE.
- **Difference / overlap control:** No existing numeric loss-estimation item; 592 only labels qualitative assessment.
- **Evidence limit / authoring hold:** SLE is supporting risk-process content, not a separately named outline bullet or an asserted exam formula requirement; keep one simple calculation.

### Proposed 1050 — Annualized versus single-event loss

- **Domain / objective:** 1 / 1.2 — Risk management processes; official PDF page 4.
- **Knowledge and context:** Annual occurrence estimate applied to a supplied single-event loss.
- **Skill / estimated difficulty / style:** apply; applied; bounded calculation.
- **Important terminology:** SLE; ARO; ALE.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:639` — 21. Annualized Loss Expectancy — ALE.
- **Difference / overlap control:** Previous proposed slot tests one-event exposure; this tests annualization and units.
- **Evidence limit / authoring hold:** Supplemental risk-assessment example; avoid a multi-stage finance exercise or false precision.

### Proposed 1051 — Constrained comparison of risk-treatment evidence

- **Domain / objective:** 1 / 1.2 — Risk management processes; official PDF page 4.
- **Knowledge and context:** Compare supplied costs and expected loss reductions on a common time horizon and unit basis, subject to explicit binding legal, safety or policy constraints; identify the defensible comparison rather than a universal cost-only acceptance rule.
- **Skill / estimated difficulty / style:** analyze; applied; constrained evidence comparison.
- **Important terminology:** likelihood; impact; treatment cost.
- **Local support:** `ISC2 Update 2026/Domain 1/Script - DOMAIN 1.txt:175` — 00:41:59–00:44:46 — risk acceptance cost example (read through line 182).
- **Difference / overlap control:** 1049 calculates a single-loss estimate; 1050 annualizes loss. This slot interprets comparable treatment evidence under constraints. 1065 compares metric cohorts rather than investment choices.
- **Evidence limit / authoring hold:** Read transcript 175–182 in full, not fragment 181 alone. Its simplified cost comparison is not a universal acceptance rule. Supplement Domain 1.md governance 231–252 and NIST SP800-30r1 §2.3.2; supply common horizon, cost categories, benefits and binding constraints. No advanced finance or unstated ROI formula.

### Proposed 1052 — Prioritizing likelihood and impact together

- **Domain / objective:** 1 / 1.2 — Risk management processes; official PDF page 4.
- **Knowledge and context:** Two risks with explicit scales and business consequences.
- **Skill / estimated difficulty / style:** apply; applied; prioritization.
- **Important terminology:** likelihood; impact; risk level.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:152` — 5.1 องค์ประกอบของความเสี่ยง.
- **Difference / overlap control:** 591 identifies vulnerability, 592 assessment category; this evaluates a supplied risk comparison, not raw vulnerability counts.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1053 — Review control effectiveness after treatment

- **Domain / objective:** 1 / 1.2 — Risk management processes; official PDF page 4.
- **Knowledge and context:** Reassessment using observed control performance against the original risk.
- **Skill / estimated difficulty / style:** analyze; applied; evidence interpretation.
- **Important terminology:** monitor; review; residual risk.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:162` — 5.2 ขั้นตอนบริหารความเสี่ยง.
- **Difference / overlap control:** 593 responds to changed connectivity; new evidence is control ineffectiveness without a changed asset/connection.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1054 — Procedure versus standard

- **Domain / objective:** 1 / 1.3 — Governance processes; official PDF page 4.
- **Knowledge and context:** Operational steps implementing a stated mandatory baseline.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** procedure; standard; policy.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:235` — 7.1 Policy, Standard, Procedure, Guideline.
- **Difference / overlap control:** 598/599 identify policy/standard; no primary procedure target.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1055 — Guideline and mandatory requirements

- **Domain / objective:** 1 / 1.3 — Governance processes; official PDF page 4.
- **Knowledge and context:** Optional advice versus a stated binding internal specification.
- **Skill / estimated difficulty / style:** apply; applied; policy application.
- **Important terminology:** guideline; standard; mandatory.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:235` — 7.1 Policy, Standard, Procedure, Guideline.
- **Difference / overlap control:** 599 has guideline only as a distractor; target is advisory status and what governs when recommendations differ.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1056 — Law/regulation versus voluntary guidance

- **Domain / objective:** 1 / 1.3 — Governance processes; official PDF page 4.
- **Knowledge and context:** Determine which supplied requirement is binding for a stated organization.
- **Skill / estimated difficulty / style:** apply; applied; requirement classification.
- **Important terminology:** law; regulation; framework; compliance.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:246` — 7.2 Governance, Risk, Compliance (GRC).
- **Difference / overlap control:** 600 chooses a framework; 611 identifies ISO standard. No statutory-detail recall.
- **Evidence limit / authoring hold:** Local materials support categories, not exhaustive legal applicability; name no statute without primary legal research.

### Proposed 1057 — Compliance does not establish complete security

- **Domain / objective:** 1 / 1.3 — Governance processes; official PDF page 4.
- **Knowledge and context:** An assessment finds remaining risk after a compliance check.
- **Skill / estimated difficulty / style:** analyze; applied; evidence interpretation.
- **Important terminology:** compliance; risk; assurance.
- **Local support:** `ISC2 Update 2026/Domain 1/Domain 1.md:246` — 7.2 Governance, Risk, Compliance (GRC).
- **Difference / overlap control:** 597 governance purpose and 608 GRC definition do not test inference from a compliant assessment.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1058 — Detective purpose in context

- **Domain / objective:** 1 / 1.4 — Security controls; official PDF page 4.
- **Knowledge and context:** An implemented measure detects an event rather than merely discouraging it.
- **Skill / estimated difficulty / style:** apply; applied; control classification.
- **Important terminology:** detective; deterrent; control function.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1237` — 40. Detective.
- **Difference / overlap control:** 602 warning is deterrence; 603 restoration is corrective. Avoid classification by product name alone.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1059 — Compensating control with an explicit constraint

- **Domain / objective:** 1 / 1.4 — Security controls; official PDF page 4.
- **Knowledge and context:** Alternative meeting a security objective when the preferred control is temporarily unavailable.
- **Skill / estimated difficulty / style:** apply; applied; control selection.
- **Important terminology:** compensating control; objective; exception.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1283` — 42. Compensating.
- **Difference / overlap control:** 682/1029 use network restrictions for unsupported assets; use a different non-network constraint and test objective equivalence, not another EOL scenario.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1060 — One control can have different functions

- **Domain / objective:** 1 / 1.4 — Security controls; official PDF page 4.
- **Knowledge and context:** Compare two explicitly different uses of the same measure.
- **Skill / estimated difficulty / style:** analyze; applied; context comparison.
- **Important terminology:** control category; function; implementation.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1324` — 44. Overlapping Security Controls.
- **Difference / overlap control:** 601 maps implementation categories; 602/604 single-purpose signs. New target is role-dependent classification, with the function specified.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1061 — Public safety and common good

- **Domain / objective:** 1 / 1.5 — Professional and ethical conduct; official PDF page 4.
- **Knowledge and context:** A professional recognizes a public-safety consequence under defined reporting authority.
- **Skill / estimated difficulty / style:** apply; applied; professional decision.
- **Important terminology:** public safety; common good; infrastructure.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1542` — Canon 1.
- **Difference / overlap control:** 606/607 test due care/diligence labels; no current primary canon decision. Keep each new canon dilemma distinct; do not imply a universal hierarchy or disclosure override.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1062 — Honesty and lawful professional conduct

- **Domain / objective:** 1 / 1.5 — Professional and ethical conduct; official PDF page 4.
- **Knowledge and context:** Pressure to misstate a material assessment result.
- **Skill / estimated difficulty / style:** apply; applied; professional decision.
- **Important terminology:** honesty; responsibility; legality.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1556` — Canon 2.
- **Difference / overlap control:** 606/607 test due care/diligence labels; no current primary canon decision. Keep each new canon dilemma distinct; do not imply a universal hierarchy or disclosure override.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1063 — Competent service to principals

- **Domain / objective:** 1 / 1.5 — Professional and ethical conduct; official PDF page 4.
- **Knowledge and context:** A task exceeds demonstrated competence and requires authorized qualified assistance.
- **Skill / estimated difficulty / style:** apply; applied; professional decision.
- **Important terminology:** competence; diligence; principal.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1570` — Canon 3.
- **Difference / overlap control:** 606/607 test due care/diligence labels; no current primary canon decision. Keep each new canon dilemma distinct; do not imply a universal hierarchy or disclosure override.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1064 — Advancing and protecting the profession

- **Domain / objective:** 1 / 1.5 — Professional and ethical conduct; official PDF page 4.
- **Knowledge and context:** Responsible professional development or knowledge sharing with stated confidentiality constraints.
- **Skill / estimated difficulty / style:** apply; applied; professional decision.
- **Important terminology:** profession; development; confidentiality.
- **Local support:** `ISC2 Update 2026/Domain 1/D1 sum.md:1588` — Canon 4.
- **Difference / overlap control:** 606/607 test due care/diligence labels; no current primary canon decision. Keep each new canon dilemma distinct; do not imply a universal hierarchy or disclosure override.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1065 — Comparable security measurements

- **Domain / objective:** 2 / 2.4 — Measure cybersecurity effectiveness; official PDF page 5.
- **Knowledge and context:** Different reporting periods/cohorts or changing denominators distort a trend.
- **Skill / estimated difficulty / style:** analyze; applied; metric interpretation.
- **Important terminology:** cohort; denominator; measurement; trend.
- **Local support:** `ISC2 Update 2026/Domain 2/D2 sum.md:459` — 🟠 Security Metrics.
- **Difference / overlap control:** 628/629 time intervals, 632/644 KPI/KRI, 631/646 awareness outcomes; this tests comparability before drawing an effectiveness conclusion.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1066 — Identifier scope versus entity linkage

- **Domain / objective:** 3 / 3.1 — Identity lifecycle management; official PDF page 5.
- **Knowledge and context:** Same display username in independent identity namespaces.
- **Skill / estimated difficulty / style:** analyze; applied; identity evidence.
- **Important terminology:** identifier; digital identity; account.
- **Local support:** `ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md:53` — KNOW-D3-001 - Identity, account and identifier.
- **Difference / overlap control:** 669 links distinct personal/admin accounts to one person; new inference is same identifier does not establish same entity.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1067 — Credential binding and authenticator

- **Domain / objective:** 3 / 3.1 — Identity lifecycle management; official PDF page 5.
- **Knowledge and context:** Distinguish the identity binding from the controlled secret/device.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** credential; authenticator; subscriber.
- **Local support:** `ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md:63` — KNOW-D3-002 - Credentials and authenticators.
- **Difference / overlap control:** 657 is proofing and 667 is factor composition; neither primarily tests credential/authenticator definitions.
- **Evidence limit / authoring hold:** Use the corrected local map rather than transcript username/password equivalence; recheck NIST SP 800-63-4 terminology.

### Proposed 1068 — Approved provisioning scope versus copying a peer

- **Domain / objective:** 3 / 3.1 — Identity lifecycle management; official PDF page 5.
- **Knowledge and context:** A peer has legitimate exceptions that a new joiner does not require.
- **Skill / estimated difficulty / style:** apply; applied; provisioning decision.
- **Important terminology:** provisioning; role; approved access.
- **Local support:** `ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md:83` — KNOW-D3-004 - Authorized provisioning.
- **Difference / overlap control:** 647 is approval sequencing; 648 mover cleanup. This chooses the scope of initial grants after approval; no new employee/job-title reskin of 647.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1069 — Risk/policy-based access-review cadence

- **Domain / objective:** 3 / 3.1 — Identity lifecycle management; official PDF page 5.
- **Knowledge and context:** Review frequency follows specified policy/risk rather than an invented universal period.
- **Skill / estimated difficulty / style:** apply; applied; policy interpretation.
- **Important terminology:** access review; recertification; risk.
- **Local support:** `ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md:103` — KNOW-D3-006 - Access review, recertification and remediation.
- **Difference / overlap control:** 649 applies/validates removals; 650 ownership/activity. New target is scheduling under explicit policy, not another completed-form example.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1070 — ACL is an enforcement mechanism, not always DAC

- **Domain / objective:** 3 / 3.2 — Logical access controls; official PDF page 5.
- **Knowledge and context:** A permission list enforces an organization-defined policy.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** ACL; subject; object; policy.
- **Local support:** `ISC2 Update 2026/Domain 3/D3 surm.md:551` — 15.1 ACL — Access Control List.
- **Difference / overlap control:** 661 asks who controls discretionary grants; new target distinguishes mechanism from decision model without assuming all ACLs are discretionary.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1071 — Prospective scope of a group-wide permission change

- **Domain / objective:** 3 / 3.2 — Logical access controls; official PDF page 5.
- **Knowledge and context:** Identify all affected principals before changing a shared group permission. Membership is fixed; only permissions from that single flat group apply. No nesting, overrides or deny-precedence rules.
- **Skill / estimated difficulty / style:** apply; applied; prospective permission-scope prediction.
- **Important terminology:** group; membership; permission; least privilege.
- **Local support:** `ISC2 Update 2026/Domain 3/D3 surm.md:564` — 15.2 Group-Based Access.
- **Difference / overlap control:** 648/649 concern mover cleanup and verification; 658 read-only PoLP; 665 existing multiple-role effective rights; 663 identifies RBAC. This is prospective blast radius of one shared permission edit, not cleanup or model recall.
- **Evidence limit / authoring hold:** D3 surm 564–566 Group-Based Access supports assigning permissions to groups. Microsoft access-control overview corroborates member permissions. Explicit simplified model is required; do not generalize to nested inheritance or vendor-specific precedence.

### Proposed 1072 — Time-bounded privileged access

- **Domain / objective:** 3 / 3.2 — Logical access controls; official PDF page 5.
- **Knowledge and context:** A short approved administrative task and an explicit privilege-expiry policy.
- **Skill / estimated difficulty / style:** apply; applied; control selection.
- **Important terminology:** PAM; privileged access; time limit.
- **Local support:** `ISC2 Update 2026/Domain 3/D3 surm.md:582` — 15.4 PAM — Privileged Access Management.
- **Difference / overlap control:** 658 chooses read-only access; 669 distinct account IDs. This tests duration and privilege governance, without vendor workflow trivia.
- **Evidence limit / authoring hold:** PAM is labeled supplemental locally; retain only foundational logical-access connection and supply policy rather than asserting JIT is universally required.

### Proposed 1073 — Evaluate an explicit attribute policy

- **Domain / objective:** 3 / 3.2 — Logical access controls; official PDF page 5.
- **Knowledge and context:** Check a subject/resource/device/time conjunction against supplied facts.
- **Skill / estimated difficulty / style:** apply; applied; policy evaluation.
- **Important terminology:** ABAC; subject; resource; environment.
- **Local support:** `ISC2 Update 2026/Domain 3/Domain 3.md:264` — 16. Attribute-Based Access Control (ABAC).
- **Difference / overlap control:** 664 recognizes the ABAC model; new target evaluates a short given policy, not another model-identification question.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1074 — Switching versus routing function

- **Domain / objective:** 4 / 4.1 — Computer networking; official PDF page 6.
- **Knowledge and context:** A simple local versus inter-subnet forwarding requirement.
- **Skill / estimated difficulty / style:** apply; applied; function selection.
- **Important terminology:** frame; packet; switch; router.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:120` — 2.7 MAC, ARP, Routing, Switching.
- **Difference / overlap control:** 670 compares model grouping; 686 fixes permissive inter-VLAN policy. New target is the communication function, not another VLAN remediation.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1075 — Transport tradeoff

- **Domain / objective:** 4 / 4.1 — Computer networking; official PDF page 6.
- **Knowledge and context:** An application explicitly tolerates loss and supplies its own reliability if needed.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** TCP; UDP; transport; reliability.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:78` — 2.4 TCP vs UDP.
- **Difference / overlap control:** 671 distinguishes reliability from confidentiality. New target is choosing transport properties, never declaring UDP inherently insecure.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1076 — Private addressing/NAT versus security policy

- **Domain / objective:** 4 / 4.1 — Computer networking; official PDF page 6.
- **Knowledge and context:** Address translation and access restrictions solve different stated needs.
- **Skill / estimated difficulty / style:** analyze; applied; boundary interpretation.
- **Important terminology:** private IPv4; NAT; PAT; firewall.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:129` — 2.8 NAT และ PAT [เสริมที่เคยถาม].
- **Difference / overlap control:** 673 uses private addressing as a distractor in tunnel coverage; new target is the function/limit of translation without subnet arithmetic.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1077 — DNS versus network reachability

- **Domain / objective:** 4 / 4.1 — Computer networking; official PDF page 6.
- **Knowledge and context:** An application resolves a name separately from connecting to its service.
- **Skill / estimated difficulty / style:** apply; applied; bounded diagnosis.
- **Important terminology:** DNS; address; name resolution.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:194` — 2.12 DNS และ DHCP [เสริม].
- **Difference / overlap control:** 677 port hints concern service identity; no primary name-resolution role item. Avoid protocol attacks and DNSSEC configuration.
- **Evidence limit / authoring hold:** Local supplemental networking application content; do not imply detailed record memorization is required by the outline.

### Proposed 1078 — Select the time-synchronization service function

- **Domain / objective:** 4 / 4.1 — Computer networking; official PDF page 6.
- **Knowledge and context:** Clocks are explicitly unsynchronized while event collection and forwarding work; an approved time source is available. Assess NTP function, not secure remote administration or default-port recall.
- **Skill / estimated difficulty / style:** apply; applied; service-function selection.
- **Important terminology:** SSH; NTP; service; protocol.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:187` — 2.11 Applications and Protocols — Time sync / NTP row.
- **Difference / overlap control:** 1012/1034 concern missing telemetry/forwarding. This slot repairs clock alignment with working transport; it must not become another logging-pipeline repair.
- **Evidence limit / authoring hold:** Read application table 166–190, especially NTP row187. Time synchronization supports event correlation; NTP alone does not guarantee authenticity, integrity or trustworthy logs.

### Proposed 1079 — East-west versus north-south visibility

- **Domain / objective:** 4 / 4.2 — Network security architecture; official PDF page 6.
- **Knowledge and context:** Observe traffic within a workload environment rather than only its perimeter.
- **Skill / estimated difficulty / style:** apply; applied; architecture interpretation.
- **Important terminology:** east-west; north-south; segmentation.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:308` — 3.9 ACL, Least Privilege, East-West / North-South [เสริม].
- **Difference / overlap control:** 685 permitted-path residual risk and 687 host-agent rules test enforcement, not placement of visibility for internal flows.
- **Evidence limit / authoring hold:** Locally supplemental architecture terms; scope to basic defense-in-depth/segmentation and avoid deployment-engineering detail.

### Proposed 1080 — Policy-triggered reevaluation during ongoing resource access

- **Domain / objective:** 4 / 4.2 — Network security architecture; official PDF page 6.
- **Knowledge and context:** Apply an explicit resource policy after a verified relevant device-posture/context change during access. VPN admission remains intact; the supplied policy defines the reevaluation and response.
- **Skill / estimated difficulty / style:** apply; applied; policy-triggered access reevaluation.
- **Important terminology:** Zero Trust; resource; context.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:268` — 3.6 Zero Trust [จากสไลด์].
- **Difference / overlap control:** 689 concerns VPN/firewall architecture; 702 role/dataset separation; 664 ABAC label; 668 uncertain AI alert; 651 offboarding session termination. This is ongoing access reevaluation on verified change under an explicit policy.
- **Evidence limit / authoring hold:** D4 surm 268–280 Zero Trust and D4 sum418 introduce context-based verification. NIST SP800-207 §2.1 tenet6 supports reevaluation during communication. Do not assert universal automatic denial, fixed reauthentication frequency or instant revocation.

### Proposed 1081 — Community cloud eligibility

- **Domain / objective:** 4 / 4.3 — Cloud security; official PDF page 6.
- **Knowledge and context:** A defined group of organizations shares specific security/governance concerns.
- **Skill / estimated difficulty / style:** apply; applied; deployment selection.
- **Important terminology:** community cloud; shared concerns; deployment.
- **Local support:** `ISC2 Update 2026/Domain 4/D4 surm.md:453` — Community Cloud.
- **Difference / overlap control:** 695 tests private cloud ownership/location; 696 hybrid composition. New target is community eligibility, not another location/public/private trick.
- **Evidence limit / authoring hold:** Local supporting text available; final academic and bilingual gates required.

### Proposed 1082 — Bulk confidentiality after a shared session key is established

- **Domain / objective:** 5 / 5.1 — Data security; official PDF page 7.
- **Knowledge and context:** Select the symmetric-encryption role for bulk data confidentiality after the shared/session key has already been established and protected; key establishment is explicitly outside the decision.
- **Skill / estimated difficulty / style:** apply; applied; bounded cryptographic-purpose selection.
- **Important terminology:** symmetric; secret key; AES.
- **Local support:** `ISC2 Update 2026/Domain 5/D5 sum.md:61` — 3. Symmetric Encryption.
- **Difference / overlap control:** 1007 selects the recipient public key to encrypt a short message; 1010 concerns PQC dependencies; 1083 signature key roles. This slot concerns bulk encryption with an already-established shared key. Do not mix session establishment with bulk protection in a hybrid-protocol choice.
- **Evidence limit / authoring hold:** D5 sum61–97 Symmetric Encryption and session-key use; FIPS197 corroborates AES as a symmetric block cipher. No universal speed comparison, benchmark, key-length trivia or claim that confidentiality alone authenticates a sender.

### Proposed 1083 — Signing and verification key roles

- **Domain / objective:** 5 / 5.1 — Data security; official PDF page 7.
- **Knowledge and context:** Integrity/origin evidence without assuming confidentiality.
- **Skill / estimated difficulty / style:** understand; foundational; concept distinction.
- **Important terminology:** signature; private signing key; public verification key.
- **Local support:** `ISC2 Update 2026/Domain 5/D5 sum.md:142` — 7. Digital Signatures.
- **Difference / overlap control:** 1007 encrypt/decrypt key direction and 1008 hash mismatch are different. Proposed 1042 tests evidentiary property, not key selection.
- **Evidence limit / authoring hold:** Use corrected summary and NIST signature source; reject transcript shorthand describing every signature as encryption with a private key.

## Research holds and approval sequence

Do not substitute unsupported facts for missing local evidence. Local summaries conflict about MFA categories, identity/credential terminology and signature mechanics; corrected supporting sections and external primary references are identified in the source inventory. Exact legal retention/erasure obligations, universal MTTR endpoints, guaranteed zero-loss recovery, and advanced AI/cloud implementation remain outside the evidence established here. A future item can use an explicit supplied organizational rule within scope; naming a real legal duty or technical guarantee requires primary-source research first.

Source inspection is not an exhaustive revalidation of every local paragraph/image. Finish the evidence review for the specific proposed claims before drafting; unread images cannot be cited as supporting facts. The three fresh unusable image samples are explicitly excluded. No missing course PDF is reconstructed from references in notes.

1. Human reviews Phase 2.5 applied SAFE corrections and resolves six held substantive revisions. The full current bank is not academically accepted by this plan.
2. Human approves/revises the 43-slot allocation and the D3 weight tradeoff, including optional supplemental risk calculations and privacy contexts.
3. Resolve any source/research hold for each slot; retain exact section/range and supporting claim in its sidecar record.
4. Only after explicit generation authorization, author English originals in manageable batches under [isc2-question-authoring-standard.md](isc2-question-authoring-standard.md).
5. Obtain real independent blind solves before key reveal; then separate academic/key, distractor/language and qualified Thai reviews. Disclose unavailable reviewers as open gates.
6. Reassess semantic novelty against current, repaired and concurrently drafted items. Reject a draft whose decision merely reskins a prior item, even if its words are new.
7. Run schema, key/letter/rationale, loader, bilingual rendering and later authorized integration checks. Resolve or explicitly baseline existing regression failures without weakening preservation checks.
8. Stop for human final acceptance and integration approval. Ready for review is not human accepted. Publishing a 200-item bank is a later action, not an output of this planning phase.

If any of the 43 concepts cannot support a distinct valid item, revise this plan with a source-grounded replacement and renewed approval; do not fill the count with a near duplicate. The deliverable is an exact proposed allocation, not a guarantee that unwritten drafts will pass quality gates.
