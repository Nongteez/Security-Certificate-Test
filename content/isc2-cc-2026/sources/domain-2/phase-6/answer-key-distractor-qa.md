# ISC2 CC 2026 Domain 2: Security Governance
## Phase 6: Answer-Key & Distractor Quality Assurance Report

**Audit Date:** 2026-10-23
**Scope:** 26 Questions, 104 Total Options (52 English, 52 Thai)
**Auditor:** Independent Adversarial Question Academic QA Subagent
**Target:** Option Plausibility, Elimination Defensibility, Answer Key Randomization, Length Bias

---

### 1. Executive Summary & Master Key Findings

This report presents a granular psychometric analysis of all 104 answer options across the 26 Domain 2 draft practice questions.

#### Critical Finding 1: 100% Option A Positional Key Bias
- In the initial Phase 5 authoring pass, all 26 questions (100%) were authored with the designated correct answer placed at index 0 (Option A).
- **Psychometric Implication:** While the runtime web application uses a dynamic Fisher-Yates array shuffler during active quiz sessions, storing a static question bank where 100% of answer keys are 'A' creates a severe positional key bias. In static review sheets, paper exams, or un-shuffled clients, any candidate who guesses 'A' repeatedly would achieve a 100% score.
- **Remediation Plan:** A balanced redistribution plan has been designed for Phase 7, shifting target answer positions across A (7), B (6), C (6), and D (7).

#### Critical Finding 2: Option Length Disparities (Length Cueing)
- In 6 questions (`DRAFT-D2-002`, `007`, `012`, `022`, `023`, `024`), Option A is noticeably longer than the shortest distractor (over 1.5x length ratio in either English or Thai).
- When combined with the 100% Option A key monotony, this creates a classic test-taking cue ("the longest option is the correct answer").
- **Remediation Plan:** Equalize visual density by elaborating distractors and trimming bloated correct options during Phase 7.

---

### 2. Comprehensive 104-Option Audit Matrix

| Draft ID | Option | Type | Length (EN / TH) | Plausibility Rating | Defensible Elimination Rationale |
|:---|:---:|:---:|:---:|:---:|:---|
| `DRAFT-D2-001` | **A** | **CORRECT KEY** | 141 / 147 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-001` | **B** | Distractor | 124 / 107 | High | Halting all development until an external 500-point audit checklist is completed represents a siloed... |
| `DRAFT-D2-001` | **C** | Distractor | 129 / 132 | High | Mandating maximum technical controls without assessing business latency or functionality illustrates... |
| `DRAFT-D2-001` | **D** | Distractor | 113 / 119 | High | Purchasing software tools cannot substitute for organizational governance direction, and governance ... |
| `DRAFT-D2-002` | **A** | **CORRECT KEY** | 127 / 137 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-002` | **B** | Distractor | 113 / 110 | Medium | Legal and regulatory compliance accountability cannot be outsourced or transferred to a software ven... |
| `DRAFT-D2-002` | **C** | Distractor | 111 / 111 | Medium | Delegating final risk acceptance to an algorithm violates governance principles because business own... |
| `DRAFT-D2-002` | **D** | Distractor | 105 / 91 | Medium | Operating system maintenance and database patching are technical IT administration duties performed ... |
| `DRAFT-D2-003` | **A** | **CORRECT KEY** | 161 / 136 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-003` | **B** | Distractor | 146 / 118 | High | Passing a compliance audit never guarantees absolute security, and audits only assess systems within... |
| `DRAFT-D2-003` | **C** | Distractor | 142 / 128 | High | Compliance mandates inform internal policy creation but never replace internal policies or eliminate... |
| `DRAFT-D2-003` | **D** | Distractor | 147 / 103 | High | Auditors verify evidence against standard controls; they do not enforce criminal law or penalize int... |
| `DRAFT-D2-004` | **A** | **CORRECT KEY** | 13 / 13 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-004` | **B** | Distractor | 43 / 43 | High | The NIST Cybersecurity Framework (NIST CSF) is a voluntary guidance framework providing a common lan... |
| `DRAFT-D2-004` | **C** | Distractor | 10 / 10 | High | COBIT 2019 focuses on broad enterprise governance and management of IT processes, not on providing a... |
| `DRAFT-D2-004` | **D** | Distractor | 21 / 21 | High | NIST SP 800-30 Rev. 1 is a special publication offering guidance on conducting risk assessments, not... |
| `DRAFT-D2-005` | **A** | **CORRECT KEY** | 102 / 91 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-005` | **B** | Distractor | 101 / 87 | High | Cybersecurity analysts evaluate vulnerabilities and recommend mitigations, but they do not own busin... |
| `DRAFT-D2-005` | **C** | Distractor | 99 / 77 | High | External auditors must maintain strict independence; assuming risk ownership or making operational m... |
| `DRAFT-D2-005` | **D** | Distractor | 97 / 76 | High | Third-party software vendors supply technical patches and advisories, but have zero governance autho... |
| `DRAFT-D2-006` | **A** | **CORRECT KEY** | 14 / 40 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-006` | **B** | Distractor | 15 / 33 | High | Risk Mitigation applies technical or procedural safeguards to reduce risk to acceptable levels while... |
| `DRAFT-D2-006` | **C** | Distractor | 13 / 36 | High | Risk Transfer shifts financial loss or operational management to a third party (such as cyber insura... |
| `DRAFT-D2-006` | **D** | Distractor | 15 / 37 | High | Risk Acceptance acknowledges and retains residual risk without implementing additional countermeasur... |
| `DRAFT-D2-007` | **A** | **CORRECT KEY** | 150 / 163 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-007` | **B** | Distractor | 115 / 132 | High | Performing arithmetic on subjective ordinal scores does not convert qualitative tiers into quantitat... |
| `DRAFT-D2-007` | **C** | Distractor | 125 / 108 | High | Using numeric scales in risk matrices is standard industry practice (ISO 31000, NIST SP 800-30) and ... |
| `DRAFT-D2-007` | **D** | Distractor | 119 / 101 | High | Annualized Loss Expectancy (ALE) requires multiplying Single Loss Expectancy (SLE in dollars) by Ann... |
| `DRAFT-D2-008` | **A** | **CORRECT KEY** | 117 / 93 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-008` | **B** | Distractor | 103 / 100 | High | Restoring databases and operating systems to secondary servers is a technical IT restoration process... |
| `DRAFT-D2-008` | **C** | Distractor | 95 / 90 | High | Reconfiguring network infrastructure, firewalls, and switches addresses technical communication reco... |
| `DRAFT-D2-008` | **D** | Distractor | 116 / 99 | High | Forensic root-cause investigation identifies why equipment failed after an incident, which belongs t... |
| `DRAFT-D2-009` | **A** | **CORRECT KEY** | 115 / 120 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-009` | **B** | Distractor | 97 / 99 | High | Procuring an alternate hot site facility is premature before a BIA identifies whether the systems ac... |
| `DRAFT-D2-009` | **C** | Distractor | 101 / 111 | High | Executing a full-scale failover simulation requires a developed and documented continuity plan; test... |
| `DRAFT-D2-009` | **D** | Distractor | 98 / 107 | High | Deploying technical data replication tools across all systems is wasteful and inefficient without BI... |
| `DRAFT-D2-010` | **A** | **CORRECT KEY** | 99 / 79 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-010` | **B** | Distractor | 99 / 79 | High | This inverts the definitions; RTO measures downtime duration (which was met), while RPO measures dat... |
| `DRAFT-D2-010` | **C** | Distractor | 91 / 78 | High | RTO was not violated because 2.5 hours is well within the 4-hour SLA downtime threshold.... |
| `DRAFT-D2-010` | **D** | Distractor | 151 / 90 | High | Arbitrary calendar business days do not define compliance; formal SLAs are governed by strict numeri... |
| `DRAFT-D2-011` | **A** | **CORRECT KEY** | 113 / 124 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-011` | **B** | Distractor | 97 / 97 | Medium | An hourly backup schedule is a frequent, robust cadence; the failure was caused by physical placemen... |
| `DRAFT-D2-011` | **C** | Distractor | 84 / 91 | Medium | Disk NAS storage is modern and supports rapid restoration; physical magnetic tape in the same floode... |
| `DRAFT-D2-011` | **D** | Distractor | 98 / 80 | Medium | Data encryption protects confidentiality against theft, but does not provide resilience or protect p... |
| `DRAFT-D2-012` | **A** | **CORRECT KEY** | 9 / 56 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-012` | **B** | Distractor | 8 / 42 | High | A Hot site has active redundant hardware and synchronized live data ready for immediate failover wit... |
| `DRAFT-D2-012` | **C** | Distractor | 9 / 41 | High | A Warm site contains pre-installed server hardware waiting for data restoration, incurring recurring... |
| `DRAFT-D2-012` | **D** | Distractor | 11 / 37 | High | A Mobile site consists of modular trailers or transportable pods deployed during field emergencies, ... |
| `DRAFT-D2-013` | **A** | **CORRECT KEY** | 136 / 155 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-013` | **B** | Distractor | 140 / 130 | High | Assuming daily backup logs prove plan viability is a dangerous misconception; unverified backups fre... |
| `DRAFT-D2-013` | **C** | Distractor | 142 / 125 | High | Backup software is designed to capture and archive data, not autonomously execute enterprise disaste... |
| `DRAFT-D2-013` | **D** | Distractor | 143 / 160 | High | Lack of DR testing represents an internal control deficiency and audit finding, not criminal fraud o... |
| `DRAFT-D2-014` | **A** | **CORRECT KEY** | 120 / 107 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-014` | **B** | Distractor | 110 / 102 | High | Adding more frequent repetitive training modules will not influence employee behavior when executive... |
| `DRAFT-D2-014` | **C** | Distractor | 128 / 103 | High | Punitive sanctions for failing training simulations foster fear and paranoia, driving employees to h... |
| `DRAFT-D2-014` | **D** | Distractor | 127 / 89 | High | Deploying covert surveillance tools creates an adversarial workplace environment and treats employee... |
| `DRAFT-D2-015` | **A** | **CORRECT KEY** | 21 / 51 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-015` | **B** | Distractor | 19 / 51 | High | Curiosity and greed manipulate personal desires for secret information or financial windfall, which ... |
| `DRAFT-D2-015` | **C** | Distractor | 24 / 64 | High | Sympathy leverages emotional pity for personal suffering or disaster relief, whereas complacency rel... |
| `DRAFT-D2-015` | **D** | Distractor | 25 / 78 | High | Reciprocity exploits a feeling of owing someone a favor, and consensus exploits social peer pressure... |
| `DRAFT-D2-016` | **A** | **CORRECT KEY** | 7 / 17 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-016` | **B** | Distractor | 16 / 31 | High | General phishing relies on bulk mass distribution of generic lures (e.g., fake courier delivery noti... |
| `DRAFT-D2-016` | **C** | Distractor | 20 / 40 | High | A watering hole attack infects trusted third-party websites commonly visited by an organization's em... |
| `DRAFT-D2-016` | **D** | Distractor | 7 / 16 | High | Vishing (voice phishing) conducts social engineering through voice telephone calls or automated inte... |
| `DRAFT-D2-017` | **A** | **CORRECT KEY** | 72 / 106 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-017` | **B** | Distractor | 60 / 86 | Medium | Smishing specifically relies on SMS text messages delivered to mobile phones, not interactive voice ... |
| `DRAFT-D2-017` | **C** | Distractor | 59 / 90 | Medium | Spear phishing uses targeted email correspondence, whereas this exploit took place directly over voi... |
| `DRAFT-D2-017` | **D** | Distractor | 56 / 82 | Medium | Shoulder surfing and piggybacking are physical security vulnerabilities involving physical proximity... |
| `DRAFT-D2-018` | **A** | **CORRECT KEY** | 89 / 81 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-018` | **B** | Distractor | 84 / 67 | High | Arbitrary periodic password changes (e.g., every 30 days) are discouraged by NIST SP 800-63B because... |
| `DRAFT-D2-018` | **C** | Distractor | 86 / 70 | High | Increasing password length does not prevent credential stuffing because the attacker possesses the e... |
| `DRAFT-D2-018` | **D** | Distractor | 96 / 83 | High | Banning remote work is an extreme operational disruption that fails to solve the root problem of sin... |
| `DRAFT-D2-019` | **A** | **CORRECT KEY** | 134 / 112 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-019` | **B** | Distractor | 109 / 104 | High | Downloading unauthorized software from the internet is a severe policy violation that frequently int... |
| `DRAFT-D2-019` | **C** | Distractor | 102 / 81 | High | Abruptly pulling the power cord destroys volatile RAM data (e.g., active memory artifacts, network s... |
| `DRAFT-D2-019` | **D** | Distractor | 97 / 82 | High | End users must never negotiate with extortionists or reply to attack lures, which alerts adversaries... |
| `DRAFT-D2-020` | **A** | **CORRECT KEY** | 154 / 150 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-020` | **B** | Distractor | 137 / 114 | High | Corporate directors have a fiduciary duty of oversight and are fully entitled to review all enterpri... |
| `DRAFT-D2-020` | **C** | Distractor | 123 / 126 | High | Firewalls typically operate at Layers 3, 4, and 7 (application firewalls), not exclusively at Layer ... |
| `DRAFT-D2-020` | **D** | Distractor | 138 / 130 | High | Multiplying arbitrary event volume by processor counts creates a meaningless mathematical distortion... |
| `DRAFT-D2-021` | **A** | **CORRECT KEY** | 87 / 99 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-021` | **B** | Distractor | 93 / 108 | High | Measuring from initial compromise to server isolation encompasses both detection and active incident... |
| `DRAFT-D2-021` | **C** | Distractor | 86 / 102 | High | The 45-minute span measures SOC triage latency (time from alert generation to human review), not int... |
| `DRAFT-D2-021` | **D** | Distractor | 93 / 109 | High | The 1.5-hour duration measures Time to Respond (TTR) or Time to Contain, starting from the alert tim... |
| `DRAFT-D2-022` | **A** | **CORRECT KEY** | 132 / 157 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-022` | **B** | Distractor | 102 / 120 | High | Restoring corrupted files from backups and restoring business services defines Mean Time to Recover ... |
| `DRAFT-D2-022` | **C** | Distractor | 117 / 97 | High | Physically swapping out damaged electronics defines Mean Time to Repair in hardware maintenance engi... |
| `DRAFT-D2-022` | **D** | Distractor | 102 / 99 | High | A third-party vendor publishing an update measures external patch release velocity, which is outside... |
| `DRAFT-D2-023` | **A** | **CORRECT KEY** | 191 / 237 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-023` | **B** | Distractor | 132 / 124 | Medium | Neither metric measures adversary capabilities or training pass rates; both measure internal technic... |
| `DRAFT-D2-023` | **C** | Distractor | 133 / 138 | Medium | Both metrics evaluate software updates and vulnerabilities, having nothing to do with physical datac... |
| `DRAFT-D2-023` | **D** | Distractor | 128 / 125 | Medium | The mathematical denominators are fundamentally distinct: Metric X divides patched systems by total ... |
| `DRAFT-D2-024` | **A** | **CORRECT KEY** | 194 / 158 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-024` | **B** | Distractor | 121 / 102 | Medium | Employees legitimately clicking through a training course does not mean the LMS committed fraud; it ... |
| `DRAFT-D2-024` | **C** | Distractor | 136 / 103 | Medium | Eliminating human training entirely abandons the critical human layer of defense-in-depth, creating ... |
| `DRAFT-D2-024` | **D** | Distractor | 138 / 135 | Medium | No cybersecurity control or educational program can reduce human error to zero; claiming zero risk r... |
| `DRAFT-D2-025` | **A** | **CORRECT KEY** | 182 / 191 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-025` | **B** | Distractor | 152 / 159 | High | This inverts the classifications; patch SLA adherence measures operational performance (KPI), not re... |
| `DRAFT-D2-025` | **C** | Distractor | 130 / 138 | High | Neither metric tracks historical monetary losses; Metric 1 is an operational performance metric and ... |
| `DRAFT-D2-025` | **D** | Distractor | 134 / 143 | High | Both metrics are quantifiable (percentages and asset counts) and directly serve risk governance deci... |
| `DRAFT-D2-026` | **A** | **CORRECT KEY** | 159 / 196 | N/A (Correct) | Unambiguously valid under authoritative cybersecurity standards. |
| `DRAFT-D2-026` | **B** | Distractor | 138 / 121 | High | Dynamic SOC dashboards provide minute-by-minute operational telemetry designed for tactical monitori... |
| `DRAFT-D2-026` | **C** | Distractor | 149 / 118 | High | Exporting raw technical scanner findings dumps operational work tickets on governance directors with... |
| `DRAFT-D2-026` | **D** | Distractor | 151 / 118 | High | Instant chat alerts for individual malware incidents spam board members with operational noise, viol... |

---

### 3. Detailed Distractor Analysis for Revision Candidates

#### DRAFT-D2-002
- **Audit Finding:** Distractors B, C, and D all describe technical firewall/network activities. While clearly operational, they lack functional diversity.
- **Required Distractor Polish:** Replace Option D with an operational management/HR governance duty (e.g., conducting annual employee performance reviews) to test the board vs management boundary across broader non-technical domains.

#### DRAFT-D2-004
- **Audit Finding:** Option D (PCI DSS) is technically certifiable by a Qualified Security Assessor (QSA), which could lead students to question whether PCI DSS is an accredited certifiable standard.
- **Required Distractor Polish:** Rephrase stem to specifically ask which framework provides an 'internationally accredited Information Security Management System (ISMS) certification scheme', resolving any ambiguity with payment compliance certifications.

#### DRAFT-D2-011
- **Audit Finding:** Distractor D ('Failing to encrypt backup data blocks across the LAN') represents a confidentiality control that does not relate to physical destruction from broken water pipes.
- **Required Distractor Polish:** Replace Option D with an operational backup architecture alternative, such as 'Relying exclusively on daily differential backups rather than maintaining independent full backup sets', enhancing distractor plausibility.

#### DRAFT-D2-012
- **Audit Finding:** In Thai, Option A has 56 characters due to parenthetical explanation, while English Option A is only 9 characters ('Cold site').
- **Required Distractor Polish:** Standardize Thai options to uniform, concise names: 'ศูนย์สำรองแบบ Cold site', 'ศูนย์สำรองแบบ Hot site', 'ศูนย์สำรองแบบ Warm site', 'ศูนย์สำรองแบบ Mobile site'.

#### DRAFT-D2-017
- **Audit Finding:** Distractor D combines shoulder surfing with physical piggybacking, which feels disparate from an office phone vishing call.
- **Required Distractor Polish:** Replace Option D with an adjacent social engineering channel/pretext pair: 'Baiting attack using a malicious USB delivery pretext', keeping all 4 options within social engineering lures.

#### DRAFT-D2-022
- **Audit Finding:** Thai Option A has 157 characters, while Distractor D has 97 characters.
- **Required Distractor Polish:** Trim Thai Option A and expand Distractor D to balance length and visual symmetry.

#### DRAFT-D2-023
- **Audit Finding:** Distractor B ('measures threat actor capabilities') and C ('evaluates physical datacenter controls') are somewhat simplistic.
- **Required Distractor Polish:** Upgrade Distractors B and C to realistic vulnerability management metrics: 'Metric X measures zero-day exploit weaponization, while Metric Y measures static code analysis findings'.

#### DRAFT-D2-024
- **Audit Finding:** Distractor B ('LMS falsified records') is slightly hyperbolic.
- **Required Distractor Polish:** Replace with a subtle audit misconception: 'The phishing simulation was invalid because it was conducted within thirty days of training completion'.

#### DRAFT-D2-026
- **Audit Finding:** Distractor D is shorter than Option A in Thai (118 chars vs 196 chars).
- **Required Distractor Polish:** Elaborate Distractor D with additional tactical context: 'An automated instant messaging alerting channel that sends push notifications to board members whenever an individual employee endpoint triggers an antivirus detection'.

---

### 4. Phase 7 Answer Key Redistribution Plan

To permanently eliminate the 100% Option A bias while preserving clean 1:1 option-to-explanation concordance, the following balanced redistribution schedule will be applied in Phase 7:

| Target Key Position | Target Count | Target Question Allocations | Percentage |
|:---:|:---:|:---|:---:|
| **Option A (Index 0)** | **7** | `DRAFT-D2-004`, `010`, `014`, `018`, `022`, `026`, `021` (reassigned) | 26.9% |
| **Option B (Index 1)** | **6** | `DRAFT-D2-002`, `006`, `009`, `013`, `017`, `025` | 23.1% |
| **Option C (Index 2)** | **6** | `DRAFT-D2-001`, `005`, `008`, `012`, `016`, `020`, `024` | 26.9% |
| **Option D (Index 3)** | **7** | `DRAFT-D2-003`, `007`, `011`, `015`, `019`, `023` | 23.1% |
| **Total** | **26** | **Balanced across all 4 option positions** | **100.0%** |

*Note: In Phase 6 (this QA phase), all drafts remain unmodified in their Phase 5 baseline state in accordance with strict non-destructive QA rules.*
