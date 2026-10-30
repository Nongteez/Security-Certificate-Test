# Domain 1 Reading Notes: Content Audit & Traceability Report

**Task:** Task 94 — ISC2 CC 2026 Reading Notes: Domain 1 Content Integration  
**Date:** 2026-10-29  
**Status:** Audit & Consolidation Complete  

---

## 1. Source Files Audited

| File | Size | Total Lines | Purpose / Character |
|---|---|---|---|
| `ISC2 Update 2026\Domain 1\D1 sum.md` | 36.8 KB | 1,733 lines | Highly detailed lecture summary with ASCII architecture diagrams, mathematical quantitative formulas ($SLE, ARO, ALE$), comprehensive Privacy lifecycle (Data Subject, Controller, Processor, Retention), and 4 Control Categories. |
| `ISC2 Update 2026\Domain 1\Domain 1.md` | 38.0 KB | 405 lines | High-density review document with core definitions table, CIA scenario comparison table, Zero Trust & Defense in Depth comparative analysis, 12 concept distinction pairs, 8 practice scenarios, and exam keyword cheat sheet. |

*Both sources were verified byte-for-byte and remain completely unmodified in the repository.*

---

## 2. Objective Mapping & Source Synthesis

The consolidated article is structured under the official ISC2 CC 2026 Domain 1 Objectives (1.1 through 1.5). Every substantive concept, formula, diagram, and example from both source documents has been mapped, preserved, and deduplicated.

### Objective 1.1: Understand Cybersecurity Concepts

| Topic / Section | Primary Source | Retained Unique Information from Secondary Source | Deduplication Note |
|---|---|---|---|
| **1.1.1 Core Security Concepts & Assets** | `Domain 1.md` §1 (Table of Asset, Threat, Threat Actor, Vulnerability, Exploit, Risk, Safeguard) | `D1 sum.md` §16 (Concrete mapping: Database = Asset, Unpatched Server = Vulnerability, Ransomware = Threat, Breach = Impact) | Unified definition of Information Security; removed redundant repetitive lead-in text. |
| **1.1.2 The CIA Triad** | `D1 sum.md` §1–3 (Detailed C, I, A definitions and ASCII diagrams) + `Domain 1.md` §2.1–2.3 | `Domain 1.md` §2.4 (Scenario comparison table and question analysis keywords: *disclosed/read* → C, *altered/tampered* → I, *unavailable/disrupted* → A); `D1 sum.md` (Load balancer, UPS, and redundant ISP network diagrams) | Synthesized into clear CIA sections. Kept Hashing vs. Encryption point of confusion. Preserved Load Balancer and Redundant ISP illustrations. |
| **1.1.3 Identification & Authentication (AAA)** | `Domain 1.md` §3.1–3.2 & `D1 sum.md` §4–5 | `Domain 1.md` §3.4 (Question matrix: "Who are you?" vs "Prove you are that person"); `D1 sum.md` §5 (Read vs. Delete permission example) | Clarified that Identification precedes Authentication, and Authentication precedes Authorization. |
| **1.1.4 Multi-Factor Authentication (MFA)** | `D1 sum.md` §7 (4 Factors: Know, Have, Are, Somewhere/Location Context) | `Domain 1.md` §3.2 (MFA factor rule and common exam trap: Password + PIN is not MFA) | Preserved all 4 factors, including Location/Context (Somewhere You Are) and the distinction between credentials vs. factors. |
| **1.1.5 Authorization & Accounting** | `D1 sum.md` §5–6 | `Domain 1.md` §3.3–3.4 (Granular permissions and audit trail accountability) | Consolidated question definitions ("What are you allowed to do?" / "What did you do?"). |
| **1.1.6 Non-repudiation, Privacy & Data Protection** | `Domain 1.md` §4.1–4.3 & `D1 sum.md` §8–14 | `D1 sum.md` (Data Subject Somchai example, Controller vs. Processor cloud diagram, Data Inventory, Data Retention, Right to be Forgotten and statutory exceptions); `Domain 1.md` §4.1 (Digital signatures and persistent evidentiary proof) | Complete coverage of personal data protection roles and lifecycle; merged Non-repudiation vs. Authentication distinctions. |
| **1.1.7 Zero Trust & Defense in Depth** | `Domain 1.md` §9.1–9.2 | `D1 sum.md` (Contextual Wi-Fi verification example and layered defense list) | Kept explicit comparison table: Zero Trust (trust model: Never Trust, Always Verify) vs. Defense in Depth (layered protection). |

---

### Objective 1.2: Understand Risk Management Concepts

| Topic / Section | Primary Source | Retained Unique Information from Secondary Source | Deduplication Note |
|---|---|---|---|
| **1.2.1 Risk Definition & Core Components** | `Domain 1.md` §5.1 & `D1 sum.md` §15 | `Domain 1.md` (Risk Level, $Risk \approx Likelihood \times Impact$, qualitative vs. quantitative distinction) | Unified risk component terms (Likelihood, Impact, Risk Level). |
| **1.2.2 Quantitative Risk Analysis & Formulas** | `D1 sum.md` §17–21 (Complete mathematical formulas and worked calculation examples) | `Domain 1.md` (Concise summary cards) | Preserved exact formulas: $SLE = AV \times EF$, $ALE = SLE \times ARO$, worked numeric examples (\$10,000 server, 50% EF, ARO variations: 2/yr, 0.2/yr, 0.5/yr). |
| **1.2.3 Risk Management Lifecycle** | `D1 sum.md` §15 & 23–24 (5-phase continuous process flow) | `Domain 1.md` §5.2 (Identify, Assess, Treat, Monitor); `D1 sum.md` §23 (Reassessment triggers: new tech, upgrade, regulation, threat, vulnerability) | Unified into the 5-phase continuous cycle (Identify → Assess → Treat → Monitor → Communicate). |
| **1.2.4 Risk Treatment: The 4 Responses** | `D1 sum.md` §22 & `Domain 1.md` §5.3 | `D1 sum.md` §22 (Avoid = Stop, Mitigate = Reduce, Transfer = Shift, Accept = Live with it; Cyber insurance nuance); `Domain 1.md` §5.3 (Comparison table) | Preserved key exam trap: Cyber Insurance transfers financial impact, but does not remove technical vulnerability. |
| **1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance** | `Domain 1.md` §5.4–5.5 & `D1 sum.md` §22 | `Domain 1.md` §5.4 (MFA before/after residual risk example); `Domain 1.md` §5.5 (Appetite = willingness to take risk; Tolerance = allowable variance) | Preserved exact boundary distinctions between Inherent and Residual Risk. |

---

### Objective 1.3: Understand Governance Concepts

| Topic / Section | Primary Source | Retained Unique Information from Secondary Source | Deduplication Note |
|---|---|---|---|
| **1.3.1 Security Governance Fundamentals** | `D1 sum.md` §25 & `Domain 1.md` §7 | `D1 sum.md` (Direction + Oversight + Accountability; governance establishes direction, not firewall config) | Unified governance definition. |
| **1.3.2 Laws and Regulations** | `D1 sum.md` §26 | `D1 sum.md` (GDPR, HIPAA, PCI DSS; Applicability principle) | Clarified that organizations comply based on industry, geography, and data type. |
| **1.3.3 Security Frameworks** | `D1 sum.md` §27, 33–34 | `D1 sum.md` (NIST CSF, ISO/IEC 27001 & ISMS, CIS Controls) | Linked ISO 27001 directly to ISMS. |
| **1.3.4 Security Document Hierarchy** | `D1 sum.md` §28–32 & `Domain 1.md` §7.1 | `D1 sum.md` §32 (Full 6-row comparison table: Policy, Standard, Procedure, Guideline, Framework, Law); `Domain 1.md` §7.1 (Password policy vs. standard example) | Preserved memory formula: Policy = WHAT/WHY, Standard = REQUIRED SPECIFICATION, Procedure = HOW, Guideline = SHOULD. |
| **1.3.5 Governance, Risk, and Compliance (GRC)** | `Domain 1.md` §7.2 & `D1 sum.md` §25 | `Domain 1.md` §7.2 (Compliance $\neq$ 100% Security; actual risk evaluation remains mandatory) | Clear separation of GRC responsibilities. |

---

### Objective 1.4: Understand Cybersecurity Controls

| Topic / Section | Primary Source | Retained Unique Information from Secondary Source | Deduplication Note |
|---|---|---|---|
| **1.4.1 Security Control Categories** | `D1 sum.md` §36 & `Domain 1.md` §6.1 | `D1 sum.md` §36 (Explicit 4 categories: Technical, Managerial, Operational, Physical; Operational = People + Process + Day-to-day) | Preserved all 4 categories with concrete examples for each. |
| **1.4.2 Security Control Types / Functions** | `D1 sum.md` §37–43 & `Domain 1.md` §6.2 | `D1 sum.md` (Directive control type; "กลัว → กัน → เจอ → แก้" flow mnemonic); `Domain 1.md` §6.2 (Recovery and Compensating functions) | Unified list of 7 functions (Deterrent, Preventive, Detective, Corrective, Compensating, Directive, Recovery). |
| **1.4.3 Contextual & Overlapping Controls** | `D1 sum.md` §44 & `Domain 1.md` §6.3 | `D1 sum.md` §44 (CCTV as Physical Category, Deterrent & Detective Type; Firewall as Technical Category, Preventive & Detective Type); `Domain 1.md` §6.3 (3-step question analysis) | Emphasized exam principle: Determine what the control is doing in the specific scenario. |

---

### Objective 1.5: Maintain Professional and Ethical Conduct

| Topic / Section | Primary Source | Retained Unique Information from Secondary Source | Deduplication Note |
|---|---|---|---|
| **1.5.1 Professional Code of Conduct & Authority** | `D1 sum.md` §46 | `D1 sum.md` §46 (Technical access $\neq$ Authorized privilege; Administrator payroll example) | Highlighted ethical boundaries in IT operations. |
| **1.5.2 Due Care vs. Due Diligence** | `D1 sum.md` §47–49 & `Domain 1.md` §7.3 | `D1 sum.md` §49 (Lifecycle loop: Diligence [Scan] → Care [Patch] → Diligence [Verify Scan]; Action verbs table); `Domain 1.md` §7.3 (Due Care = DO, Due Diligence = CHECK) | Merged into a clear comparative breakdown with action verbs table. |
| **1.5.3 ISC2 Code of Ethics (4 Canons)** | `D1 sum.md` §50–51 & `Domain 1.md` §8 | `D1 sum.md` §51 (Mnemonic: S-A-P-P: Society → Act honorably → Principals → Profession); `Domain 1.md` §8 (Scenario application: never conceal serious breach for personal gain) | Exact verbatim English Canons preserved alongside Thai explanations. |
| **1.5.4 Concept Distinctions & Review Scenarios** | `Domain 1.md` §10–12 & `D1 sum.md` §52 | `Domain 1.md` §10 (12 Concept Distinction pairs); `Domain 1.md` §11 (8 scenario walkthroughs); `Domain 1.md` §12 (Exam keyword cheat sheet) | Placed at the conclusion of Domain 1 as an integrated self-assessment and exam-readiness tool. |

---

## 3. Substantive Duplications Eliminated

1. **Repetitive Introductory CIA Statements:** Both files had introductory statements explaining that CIA is foundational. These were consolidated into a single crisp introductory section.
2. **Duplicate Authentication Definitions:** Both files defined Authentication vs Authorization multiple times across general text and summary tables. These were synthesized into a unified topic under Objective 1.1.
3. **Repeated Risk Treatment Bullet Lists:** Avoid, Mitigate, Transfer, Accept appeared 3 times in `D1 sum.md` and twice in `Domain 1.md`. They were consolidated into one comprehensive topic with descriptions, examples, and exam pitfalls.
4. **Duplicate Canons of Ethics:** Both files listed the 4 Canons. The consolidated version retains the official English phrasing with complete Thai explanatory notes and the S-A-P-P mnemonic.

---

## 4. Source Discrepancies & Resolutions

1. **Control Categories (3 vs 4 Categories):**
   - *Observation:* `Domain 1.md` grouped categories into Administrative, Technical, Physical. `D1 sum.md` explicitly distinguished Managerial (Policy/Governance) from Operational (Day-to-day human procedures), yielding 4 categories: Technical, Managerial, Operational, Physical.
   - *Resolution:* Preserved all 4 categories from `D1 sum.md`, while noting that Managerial and Operational are often collectively referred to as Administrative controls in older literature.
2. **ARO Representation for Infrequent Events:**
   - *Observation:* `D1 sum.md` listed $ARO = 1/5 = 0.2$ for once every 5 years, and $ARO = 0.5$ for once every 2 years.
   - *Resolution:* Fully preserved these fractional examples as they are classic exam patterns.
3. **Ethics Canons Wording:**
   - *Observation:* Both files summarized the Canons in Thai, while `Domain 1.md` provided the recognized English Canons.
   - *Resolution:* Included both the recognized official English statements and the Thai translations so learners recognize either language on the exam.

---

## 5. Completeness & Integrity Sign-Off

- **Concepts Covered:** 100% of substantive concepts from both `D1 sum.md` and `Domain 1.md`.
- **Formulas Preserved:** $SLE = AV \times EF$, $ALE = SLE \times ARO$, $Risk \approx Likelihood \times Impact$.
- **Tables Retained:** 12 Concept Distinctions, Document Hierarchy, Controls Matrix, Authentication Question Matrix, CIA Scenarios, and Exam Cheat Sheet.
- **Language Style:** Maintained original bilingual Thai-English hybrid terminology exactly as authored.
- **Integrity Boundary:** Source files remain unmodified; question banks, vocabulary, and slides remain untouched.

