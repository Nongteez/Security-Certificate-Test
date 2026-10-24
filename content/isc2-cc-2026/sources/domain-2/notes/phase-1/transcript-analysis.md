# Domain 2 - Transcript analysis

Prepared: 2026-10-23 (Asia/Bangkok). Phase 1 only; audit/editorial findings, not approved knowledge or question content.

## What was read

Read **one of one accessible transcript files in full**: [DOMAIN 2.txt][T], 29,748 bytes, 115 physical lines including blank lines; 58 nonblank paragraphs at odd-numbered lines. The text begins with course introduction and ends with a Domain 3 handoff. There are **no recording timestamps, speaker labels or formal chapter headings**. The boundaries below are editorial headings based on actual wording, not reconstructed video chapters. Cite T:Lnn or T:Lnn-Lmm, counting blank lines; do not invent T@ timestamps from screenshot filenames.

The English text is readable but resembles automatic captions: music/snort markers, fillers, misspellings, run-on sentences and duplicated fragments. Apparent continuity is supported by introductory/closing text and all four objective transitions; completeness against the recording remains **UNVERIFIED**. No source audio/video is available to resolve spoken ambiguities.

## Topic boundaries, claims and examples

Every finding in this table is **CONFIRMED as present in the source**; concern labels refer to interpretation or academic verification, not permission to approve a claim. The instructor's statements and exam hints are not independently verified knowledge.

| Physical lines | Actual topic / source claim | Examples, explanations and boundaries | Corroborating captures / concern |
| --- | --- | --- | --- |
| 1-5 | Course introduction; new outline September 2026; Domain 2 Security Governance and 17.3%; compares old 10% domain | Promotional exam-success and career statements are not evidence of syllabus sufficiency | S01; current title/weight independently checked, old-exam history not audited |
| 5-7 | GRC career commentary and transition to objective 2.1 | Suggests basic cybersecurity knowledge can lead to GRC work without specialist hacking/network background; career advice is not an objective | Transcript-only commentary, not academic entry criteria |
| 7-13 | Integrated GRC, business alignment and G/R/C functions | Governance direction/oversight/accountability; risks to objectives/assets; applicable laws, standards, policies and contracts | S01/S02; 'may have a couple of questions' at L9 is unverified exam prediction |
| 13-15 | Purpose: coordinated approach | Alignment, risk management, obligations, consistent controls, accountability, decisions and less duplication | S03-S05 repeat the same lesson |
| 15-19 | Importance and weak-GRC consequences | Asset protection, penalties, resilience; inconsistent practices and unidentified risk | S06; no guarantee of regulatory compliance |
| 19-23 | Frameworks and standards | NIST CSF, caption-corrupted ISO/IEC 27001 and COBIT; ISMS and enterprise IT governance | S07 supplies readable names; framework versions/deep implementation absent |
| 23-25 | GRC platforms and capabilities | Centralize many spreadsheet requirements; risk register, policy, compliance/control/audit management and assessment | S08; 'compliance breaking' vs tracking |
| 25-31 | Risk register fields and risk treatment | Description, asset, threat, vulnerability, likelihood, impact, rating, owner, treatment/status/residual risk; mitigate/avoid/transfer/accept | S09; L27 calls a 1-4 ordinal scale quantitative (D2-Q06); L31 uses an absolute no-zero-risk statement |
| 31-33 | Worked risk register example | Ransomware/critical servers; high likelihood/impact, IT manager, mitigation with EDR, backups, segmentation and MFA | S10; example only, not verified incident or complete assessment |
| 33-37 | Objective 2.2 and BC | Continuation during/after disruption; earthquakes/tornadoes, cyberattacks, outages, pandemic, lost premises, supply chain | S11/S12; no standalone redundancy-mechanism lesson |
| 37-43 | BCP scope and recovery priority | Alternative premises/home working; unavailable IT manager/backup personnel; alternate internet/power suppliers; ordering critical processes | S13/S14; expanded scenarios spoken in transcript |
| 43-49 | DR and relationship to BC | IT restoration within broad continuity umbrella; protects data, restores systems, minimizes downtime | S15/S16; avoid treating goals as guaranteed outcomes |
| 49-53 | Importance of DR and compliance claim | GDPR/HIPPA, PII/PHI, losses and trust; L51 calls PHI 'personal health information' | S17; legal applicability, spelling/expansion and loss-prevention absolutes require review |
| 53-55 | RTO | Maximum acceptable system downtime; ERP one-hour restoration example | S18 annotation; distinguish target from demonstrated capability |
| 55-61 | RPO and backup interval | Time-based acceptable loss; 4 PM/5 PM backups and 4:30/5:20 failures illustrate 30/20 minutes of loss | S18; assumes usable complete backups and successful recovery; not a universal backup-frequency guarantee |
| 61-63 | Backup/recovery strategies and separate location | Earthquake can affect primary system and same-site backup; off-site/cloud example | S18; location alone does not prove recoverability or independence |
| 63-67 | Recovery-site categories and tests | Caption 'hard site' vs hot site, warm/cold descriptions; minutes/hours/days/weeks; test restore/plan effectiveness | S18 names categories but does not validate timings; L65 is grammatically incomplete |
| 67-71 | BC vs DR comparison and BIA | Business operation vs IT restoration; people/processes/suppliers; manual work vs server/database recovery; BIA input to recovery priorities | S19; no full BIA procedure, tolerances or dependency study |
| 71-75 | Objective 2.3 and security awareness | Threats, responsibilities, policy, protection, recognizing and reporting suspicious activity | S21; 2.3 title card not captured |
| 75-77 | Security culture | Shared daily responsibility; report suspicious email instead of clicking; ask when uncertain | S22; reported behavior illustrates desired culture |
| 77-81 | Leadership | Commitment, resources, awareness support/reporting, example setting; CEO/CFO MFA use | S23; role-model claim is instructional example, not measured causal result |
| 81-83 | Social engineering | Trust/fear/urgency/authority/greed/helpfulness; fake IT administrator requests password; alleged stolen CEO/CFO credentials | S24; actual stolen credentials not required by every impersonation scenario |
| 83-89 | Phishing variants and pretexting | Broad vs targeted messages; executive target; voice; SMS; fabricated scenario | S25/S26 disambiguate corrupted names; no actual sample message or simulated incident |
| 89-93 | Employee and organization password protection | Strong/unique passwords, no reuse/sharing, avoid predictable details, manager, MFA, report compromise; organizational policy, credential protection, access/monitoring and phishing-resistant authentication | S27 covers only organizational list; employee list is transcript-only |
| 93-95 | Objective 2.4 and measurement purpose | Evaluate objectives/controls, gaps, trends, compliance, management reporting and improvement | S28/S29 |
| 95-99 | Metrics and desirable properties | Incidents, vulnerabilities, patching, detection/response times; hypothetical detection under an hour; relevant, measurable, consistent, audience-appropriate | S30; MTTD/MTTR acronyms visible in slide only; no aggregation formula |
| 99-101 | Metrics examples | Timely critical-vulnerability remediation, response time, awareness completion and patch compliance | S31; completion does not demonstrate behavioral effectiveness |
| 101-103 | KRI | Early risk signals: unpatched vulnerabilities, privileged accounts lacking MFA, failed controls, more phishing reports, unsupported systems and untested backups | S32; reporting volume is context-dependent |
| 103-105 | KPI vs KRI | Performance objective: critical vulnerabilities patched within 15 days; risk distinction | S33; 15 days is illustrative policy, not verified official mandate |
| 105-107 | Dashboards | Visual current status, incidents, vulnerabilities, patch compliance and trends; charts/graphs/tables | S34; no populated dashboard is supplied |
| 107-111 | Scorecards with example | Patch 95%/91%; MFA 100%/97%; training 95%/98%; critical-vulnerability threshold described as less than 10%, actual value spoken as 12 without unit | S35/S36; **CONFLICT** with unitless slide threshold (D2-Q03) |
| 111-113 | Reports | Activities, risks, performance/compliance, status/trends/findings, metrics and recommended actions | S37 |
| 113-115 | Exam mnemonic and close | Measurement/performance/risk/visualization/target comparison/communication; next Domain 3 | S38; mnemonic is instructor advice, not a guaranteed exam rule |

## Terminology encountered - intake observations only

This is an index of terms actually encountered, not a generated vocabulary dataset or approved glossary.

| Source group | Terms / acronyms found | Verification boundary |
| --- | --- | --- |
| GRC, T:L7-L33 | Governance, Risk and Compliance (GRC); NIST; Cybersecurity Framework (CSF); ISO/IEC 27001 (caption corrupted); Information Security Management System (ISMS); COBIT (caption 'coit'); risk register; owner; residual risk; treatment; Endpoint Detection and Response (EDR); multifactor authentication (MFA) | NIST, ISO and COBIT names are present, not full verified definitions/expansions for every acronym; preserve slide spelling as separate evidence |
| Continuity, T:L35-L71 | BC; BCP; DR; DRP; RTO; RPO; ERP; DB/database; BIA; GDPR; HIPAA (caption HIPPA); PII; PHI; hot/warm/cold sites | ERP is an example, not a new required objective; PHI expansion in transcript needs review; slide confirms labels without providing legal scope |
| Awareness, T:L73-L93 | Security culture/leadership; CEO, CFO, CISO (caption CESO elsewhere); social engineering; phishing/spear phishing/whaling/vishing/smishing/pretexting; SMS; password manager; phishing-resistant authentication | Do not create new canonical terms 'fishing', 'veiling' or 'spare fishing' from caption artifacts |
| Effectiveness, T:L93-L113 | Security metrics; Key Risk Indicator (KRI); Key Performance Indicator (KPI); mean time to detect/respond; dashboard; scorecard; report; patch compliance | MTTD/MTTR letters occur in S30/S31, not verbatim in transcript; MTTR start/end events and units are unspecified |

## Ambiguities and potentially inaccurate statements

| Lines | Source wording / problem | Audit treatment |
| --- | --- | --- |
| 1-7, 19-25, 29 | ISC2 name variants; 'race'; 'pure accountability'; ISO/COBIT/GSC/CESO variants | Speech-to-text suspicion, not proof of instructor error. Use exact raw locators and corroborating S02/S06-S09; preserve original text |
| 27 | Numbers 1-4 called quantitative rating | NIST distinguishes representative-number scales from quantitative assessment. Flag **NEEDS_REVIEW**, rather than approving numerical-equals-quantitative rule (D2-Q06) |
| 31 | Risk cannot be reduced to zero after treatment | Broad generalization; scope of mitigation, avoidance and residual risk needs qualified review; no universal answer rule |
| 49-53 | DR 'prevents data loss'; broad GDPR/HIPAA requirement; PHI mis-expansion | Separate objectives from guarantees and applicability. Limited HHS check is recorded in quality report; GDPR wording remains unresolved |
| 57-65 | RPO as exact backup frequency; hot/warm/cold time estimates and incomplete warm-site description | Requires recovery assumptions and technical validation; corrected slide label is not confirmation of time estimates |
| 77, 83-89, 95-107 | 'licking', phishing variants, 'paged/unpaged', repeated half-sentences | Use slides as explicit corroboration; no silent caption normalization |
| 101-103 | More phishing reports used as risk signal | May reflect more attacks, better awareness or both; do not infer risk direction from volume alone |
| 109-111 | Percentage threshold vs unitless table | **CONFLICT**, not reconciled: no numeric extraction/answer decision until unit is verified |
| 113-115 | One-word exam memory rules | Useful recap only; functions overlap and exam-answer predictions are unverified |

See [quality issue register](source-quality-report.md) for priorities and release evidence. The source covers base topics but contains no explicit AI governance, AI-related continuity/model-drift, AI-enhanced phishing or AI-specific KRI teaching. This absence is based on full reading and all image inspections, not filename inference.


## Source links

[T]: ../../../../../../ISC2%20Update%202026/Domain%202/DOMAIN%202.txt
[S01]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175516.png
[S02]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175642.png
[S03]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175700.png
[S04]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180122.png
[S05]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180128.png
[S06]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180141.png
[S07]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180209.png
[S08]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181135.png
[S09]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181653.png
[S10]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181722.png
[S11]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182047.png
[S12]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182544.png
[S13]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182609.png
[S14]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182614.png
[S15]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183108.png
[S16]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183111.png
[S17]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183349.png
[S18]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183410.png
[S19]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183921.png
[S20]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20201852.png
[S21]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220429.png
[S22]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220716.png
[S23]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220723.png
[S24]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220952.png
[S25]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221341.png
[S26]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221932.png
[S27]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221941.png
[S28]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222037.png
[S29]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222320.png
[S30]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222340.png
[S31]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222628.png
[S32]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222928.png
[S33]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223200.png
[S34]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223320.png
[S35]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223458.png
[S36]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223508.png
[S37]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223741.png
[S38]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223751.png

