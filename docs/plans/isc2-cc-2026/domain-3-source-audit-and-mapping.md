# ISC2 CC 2026 Domain 3: Source Audit, Academic Traceability & Educational Architecture

**Document ID:** `DOC-PLAN-CC26-D3-AUDIT-001`  
**Date:** 2026-10-30  
**Status:** Audit & Architecture Proposal — Pending Human Approval  
**Author:** Antigravity (Superpowers Single-Flow Mode)  
**Task Reference:** Task 130 — Domain 3 Reading Notes Source Audit & Implementation Plan  

---

## 1. Executive Summary & Source Provenance

This document establishes the authoritative foundation for authoring the **ISC2 CC 2026 Domain 3 Reading Notes (Access Controls / Identity and Access Management Concepts)**. 

In strict adherence to the user's instructions, this analysis is grounded exclusively in the two confirmed local source files:
1. **Primary Summarized Notes:** [`ISC2 Update 2026/Domain 3/D3 sum.md`](file:///d:/_Coding/SEC-CERT-TEST/ISC2%20Update%202026/Domain%203/D3%20sum.md) (442 lines, 9,461 characters)
2. **Supporting Detailed Notes:** [`ISC2 Update 2026/Domain 3/Domain 3.md`](file:///d:/_Coding/SEC-CERT-TEST/ISC2%20Update%202026/Domain%203/Domain%203.md) (356 lines, 13,410 characters)

### Official Outline Boundary Reconciliation
In both source files, the user recorded an important cautious disclaimer:
> *"ขอบเขต: เนื้อหาที่เรียนจริงจากสไลด์และการอธิบายในบทสนทนา ตั้งแต่ Objective 3.1 ถึงหัวข้อ ABAC ใน Objective 3.2 ไม่ใช่การยืนยันว่าครบ Domain 3 ทั้ง Exam Outline... ยังไม่ควรถือว่า Domain 3 จบ เพราะเรายังไม่ได้เห็นสไลด์ส่วนถัดไปของ 3.2 และ Objective ต่อ ๆ ไปจากคอร์สนี้"*

**Academic Audit Finding:**
According to the official ISC2 Certified in Cybersecurity (CC) 2026 Exam Outline, **Domain 3 (Access Controls Concepts) accounts for exactly 20% of the exam and consists of strictly TWO official objectives:**
- **Objective 3.1: Understand identity life cycle management**
- **Objective 3.2: Understand logical access controls**

There is **no Objective 3.3, 3.4, or 3.5**. The user's two source files already provide complete, detailed, and authentic coverage of the entire breadth of the official 2026 outline for Domain 3!

---

## 2. Substantive Concept Inventory & Source Mapping

Every concept in `D3 sum.md` and `Domain 3.md` has been cataloged, line-referenced, and assigned to its authoritative objective:

### Objective 3.1 — Understand Identity Life Cycle Management

| Concept Identifier | Substantive Educational Topic | Primary Source (`D3 sum.md`) | Supporting Source (`Domain 3.md`) | Intended Bilingual Terminology & Emphasis |
| :--- | :--- | :--- | :--- | :--- |
| **D3-C01** | **IAM Definition & Core Lifecycle** | L3–10 | L6–11, L16–25 | **Identity and Access Management (IAM)**<br>Flow: `Identity → Access → Control → Review → Remove`<br>JML Model: **Joiner** (เข้าใหม่), **Mover** (เปลี่ยนบทบาท), **Leaver** (พ้นสภาพ). |
| **D3-C02** | **Roles Definition & Alignment** | L13–32 | L26–45 | **Roles Definition (การกำหนดบทบาท)**<br>Concept triad: `Role → Job Function → Required Access`<br>Distinguishes **Role** (บทบาท) vs. **Permission** (สิทธิ์กระทำ: Read/Write/Modify) vs. **Access** (ความสามารถในการเข้าถึง). Table mapping: HR Manager, Network Admin, DBA, Security Analyst, Finance Employee. |
| **D3-C03** | **Identity Provisioning** | L34–53 | L46–62 | **Provisioning (การจัดสรรสิทธิ์และตัวตน)**<br>Formula: `Provisioning = Create Identity + Grant Required Access ➕`<br>6 Core Steps: (1) Creating User Account, (2) Assigning Unique Identity, (3) Assigning Roles, (4) Granting Permissions, (5) Providing Application Access, (6) Issuing Authentication Credentials. |
| **D3-C04** | **Access Review & Audit Findings** | L55–81 | L63–81 | **Access Review (การตรวจสอบสิทธิ์เป็นระยะ)**<br>Purpose: Periodically verify appropriate access.<br>6 Critical Audit Findings: (1) **Excessive Permissions** (สิทธิ์เกินจำเป็น), (2) **Unused Accounts** (บัญชีไม่ได้ใช้งาน), (3) **Inappropriate Access** (สิทธิ์ไม่เหมาะกับงาน), (4) **Role Changes** (ย้ายแผนกแต่สิทธิ์เดิมค้าง), (5) **Privilege Accumulation** / Creep (สิทธิ์เก่าสะสม), (6) **Orphaned Accounts** (บัญชีไร้เจ้าของ). Slide Scenario: Finance to IT transfer with 6-month lingering financial access. |
| **D3-C05** | **Identity Deprovisioning** | L83–108 | L82–104 | **Deprovisioning (การเพิกถอนสิทธิ์)**<br>Formula: `Deprovisioning = Remove / Disable Access ➖`<br>Distinction: Disabling/revoking vs. immediate permanent deletion.<br>4 Triggers: Termination, Resignation, Role Change, Contract Expiration.<br>4 Activities: Disable Account, Revoke Application Access, Remove Group Memberships, Revoke Privileged Access. |
| **D3-C06** | **IAM Management Frameworks** | L110–139 | L105–119 | **NIST SP 800-63 vs. NIST CSF**<br>**NIST SP 800-63 (Digital Identity Guidelines):** (1) **Identity Proofing** (พิสูจน์ความมีอยู่จริงและความถูกต้อง), (2) **Authentication** (การพิสูจน์ตัวตน), (3) **Federation** (การเชื่อมโยงระบบตัวตนข้ามองค์กร).<br>**NIST CSF:** Broader Cybersecurity Risk Management framework. |
| **D3-C07** | **IAM Tools & Architecture** | L141–163 | L120–141 | **IAM Tools & Technologies**<br>3 Architecture Pillars: (1) **Directory Services** (จัดเก็บโครงสร้างผู้ใช้ เช่น AD/LDAP), (2) **Identity Providers - IdPs** (บริการตัวตนและ AuthN), (3) **Access Management Platforms** (บังคับใช้นโยบายสิทธิ์ AuthZ).<br>AuthN (Who you are) vs. AuthZ (What you can do). |
| **D3-C08** | **Principle of Least Privilege (PoLP)** | L165–194 | L142–163 | **Least Privilege (หลักสิทธิ์ขั้นต่ำที่จำเป็น)**<br>Rule: Minimum necessary access to perform assigned duties.<br>3 Implementation Steps: Role-based permissions, regular reviews, strict enforcement.<br>4 Core Benefits: Mitigates compromised accounts, limits insider threat blast radius, aids audit/compliance, promotes system stability. |

---

### Objective 3.2 — Understand Logical Access Controls

| Concept Identifier | Substantive Educational Topic | Primary Source (`D3 sum.md`) | Supporting Source (`Domain 3.md`) | Intended Bilingual Terminology & Emphasis |
| :--- | :--- | :--- | :--- | :--- |
| **D3-C09** | **Logical Access Controls Foundations** | L196–204 | L165–170 | **Logical Access Controls (การควบคุมการเข้าถึงเชิงตรรกะ)**<br>Scope: Digital access to systems, applications, data, and network resources (`Who can access What under what conditions`). Contrasted with Physical Access Controls. |
| **D3-C10** | **Segregation of Duties (SoD)** | L206–235 | L171–194 | **Segregation of Duties (การแบ่งแยกหน้าที่ความรับผิดชอบ)**<br>Rule: One Critical Process $\to$ Multiple Responsible Parties.<br>Purpose: Prevent Fraud, Errors, Unauthorized Actions, Insider Threats.<br>3-Stage Workflow from Slides: (1) **Purchasing / Request** (Employee A), (2) **Payment Processing / Approval** (Employee B), (3) **Record Keeping / Reconciliation** (Employee C / System).<br>Golden Rule: Creator must never approve their own request.<br>PoLP (Minimum Access) vs. SoD (Multiple People). |
| **D3-C11** | **Discretionary Access Control (DAC)** | L266–293 | L206–220 | **DAC (การควบคุมการเข้าถึงตามดุลยพินิจของเจ้าของ)**<br>Decision Maker: **Resource Owner** (`Owner Decides`).<br>Permissions at owner's discretion (Read, Read/Write, Deny).<br>Advantage: Flexible, user-friendly.<br>Drawback: High risk of owner granting excessive/inappropriate permissions.<br>Keywords: `Resource Owner`, `File Owner Controls Access`. |
| **D3-C12** | **Mandatory Access Control (MAC)** | L295–331 | L221–243 | **MAC (การควบคุมการเข้าถึงแบบบังคับ)**<br>Decision Maker: **Central Authority & System Policy** (`Classification & Labels`).<br>Enforced via **Security Classifications / Labels** (`Confidential`, `Secret`, `Top Secret`) and user **Clearance**.<br>Advantage: Maximum security, prevents data leakage.<br>Drawback: Inflexible, high administrative complexity.<br>Keywords: `Security Classification`, `Security Label`, `Clearance`, `Central Authority`. |
| **D3-C13** | **Role-Based Access Control (RBAC)** | L333–364 | L244–263 | **RBAC (การควบคุมการเข้าถึงตามบทบาทหน้าที่)**<br>Decision Maker: **User Predefined Role** (`Role Decides`).<br>Permissions mapped to roles (HR, IT, Finance); users assigned to roles. High scalability for onboarding.<br>Advantage: Simple management, scalable, consistent rights.<br>Drawback: Risk of role explosion or overly broad roles.<br>Keywords: `Predefined Role`, `Job Function`, `Role-Based Permissions`. |
| **D3-C14** | **Attribute-Based Access Control (ABAC)** | L366–394 | L264–284 | **ABAC (การควบคุมการเข้าถึงตามคุณลักษณะและเงื่อนไข)**<br>Decision Maker: **Multiple Attributes & Environmental Conditions** (`Attributes / Conditions`).<br>4 Categories: Subject (Dept, Title), Object (Sensitivity, Type), Environment (Time, Location), Device (Managed, Type).<br>Example Policy: Dept=Finance AND Device=Managed AND Time=Work Hours.<br>Note: Preserves user's source note that ABAC pros/cons were not in original slides. |
| **D3-C15** | **4-Model Synthesis & Decision Matrix** | L247–264, L396–410 | L195–205, L285–294 | **Master Access Control Comparison Matrix**<br>Comprehensive comparison table across DAC, MAC, RBAC, and ABAC highlighting decision makers, examples, advantages, and exam trigger cues. |

---

### Supplementary Review, Memory Aids & Exam Preparation

| Concept Identifier | Educational Section | Primary Source (`D3 sum.md`) | Supporting Source (`Domain 3.md`) | Educational Scope & Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **D3-C16** | **Common Exam Confusion Pairs** | L237–245, L434–440 | L296–304 | 6 critical distinction pairs: (1) Provisioning vs. Deprovisioning, (2) Access Review vs. Deprovisioning, (3) Least Privilege vs. SoD, (4) DAC vs. RBAC, (5) MAC vs. ABAC, (6) Authentication vs. Authorization. |
| **D3-C17** | **Master Exam Memory Aid Table** | L398–410, L411–433 | L306–323 | High-yield keyword-to-concept memory aid table linking exam question stem triggers to correct concepts. |
| **D3-C18** | **Authoritative Practice Scenarios** | — | L324–336 | 10 real-world practice scenario questions directly derived from Section 20 of `Domain 3.md`. |

---

## 3. Detailed Source-to-Section Coverage Matrix

The proposed Domain 3 Reading Notes will be organized into an intuitive, academically rigorous structure with granular anchors:

```
Domain 3: Access Controls (20% Exam Weight)
├── Header & Lead Paragraph (No raw H1 in markdown; starts with .reading-lead)
├── Objective 3.1: Understand Identity Life Cycle Management
│   ├── 3.1.1 IAM Overview & The JML Lifecycle (Joiner, Mover, Leaver)
│   ├── 3.1.2 Roles Definition & Permission Alignment
│   ├── 3.1.3 Identity Provisioning (6-Step Lifecycle)
│   ├── 3.1.4 Access Review & 6 Core Audit Findings
│   ├── 3.1.5 Deprovisioning: Triggers & Revocation Practices
│   ├── 3.1.6 IAM Management Frameworks: NIST SP 800-63 vs. NIST CSF
│   ├── 3.1.7 IAM Technology Stack: Directory Services, IdPs & Access Platforms
│   └── 3.1.8 Principle of Least Privilege (PoLP): Implementation & Benefits
├── Objective 3.2: Understand Logical Access Controls
│   ├── 3.2.1 Logical vs. Physical Access Control Architecture
│   ├── 3.2.2 Segregation of Duties (SoD): 3-Stage Financial Workflow
│   ├── 3.2.3 Least Privilege vs. Segregation of Duties Comparison
│   ├── 3.2.4 Discretionary Access Control (DAC): Owner Discretion & Risks
│   ├── 3.2.5 Mandatory Access Control (MAC): Security Labels & Clearance
│   ├── 3.2.6 Role-Based Access Control (RBAC): Predefined Roles & Scalability
│   ├── 3.2.7 Attribute-Based Access Control (ABAC): Dynamic Multi-Attribute Evaluation
│   └── 3.2.8 Master Access Control Models Comparison Matrix (DAC vs MAC vs RBAC vs ABAC)
└── Domain 3 Summary & Review (Outside 3.2 without creating fake 3.3)
    ├── 3.R.1 10 Concept Distinction Cards (Confusing Terms Solved)
    ├── 3.R.2 14 High-Yield Exam Traps & Decision Rules
    ├── 3.R.3 Master Keyword-to-Concept Quick Reference Table
    └── 3.R.4 12 Real-World Review Scenarios (Grounded in Section 20)
```

### Traceability Mapping Table

| Section # | Proposed Topic Title | Target Anchor ID | Source Files & Line Numbers | Key Technical Terms Preserved |
| :--- | :--- | :--- | :--- | :--- |
| **Intro** | Domain Overview & Master Flow | `domain-3-intro` | `D3 sum` L3–10; `D3` L6–11 | Digital Identity, IAM Master Flow |
| **3.1.1** | IAM Overview & The JML Lifecycle | `topic-3-1-jml-lifecycle` | `D3` L16–25 | Joiner, Mover, Leaver, Identity Life Cycle |
| **3.1.2** | Roles Definition & Permission Alignment | `topic-3-1-roles-definition` | `D3 sum` L15–31; `D3` L26–45 | Role, Function, Required Access, Permissions |
| **3.1.3** | Identity Provisioning | `topic-3-1-provisioning` | `D3 sum` L34–53; `D3` L46–62 | Provisioning, Unique Identity, Credentials |
| **3.1.4** | Access Review & 6 Core Audit Findings | `topic-3-1-access-review` | `D3 sum` L55–81; `D3` L63–81 | Periodic Review, Excessive Permissions, Privilege Accumulation, Orphaned Accounts |
| **3.1.5** | Identity Deprovisioning | `topic-3-1-deprovisioning` | `D3 sum` L83–108; `D3` L82–104 | Deprovisioning, Termination, Resignation, Revoke Access |
| **3.1.6** | IAM Frameworks: NIST SP 800-63 vs. CSF | `topic-3-1-iam-frameworks` | `D3 sum` L110–139; `D3` L105–119 | NIST SP 800-63, Identity Proofing, Authentication, Federation, NIST CSF |
| **3.1.7** | IAM Technology Stack | `topic-3-1-iam-tools` | `D3 sum` L141–163; `D3` L120–141 | Directory Services, IdPs, Access Platforms, AuthN vs AuthZ |
| **3.1.8** | Principle of Least Privilege (PoLP) | `topic-3-1-least-privilege` | `D3 sum` L165–194; `D3` L142–163 | PoLP, Minimum Necessary Access, Compromised Accounts |
| **3.2.1** | Logical vs. Physical Access Controls | `topic-3-2-logical-controls` | `D3 sum` L196–204; `D3` L165–170 | Logical Access Controls, Digital Resources |
| **3.2.2** | Segregation of Duties (SoD) | `topic-3-2-sod` | `D3 sum` L206–235; `D3` L171–187 | SoD, Purchasing, Payment Processing, Record Keeping, Fraud Prevention |
| **3.2.3** | Least Privilege vs. SoD Comparison | `topic-3-2-polp-vs-sod` | `D3 sum` L237–245; `D3` L188–194 | Minimum Access vs Multiple People |
| **3.2.4** | Discretionary Access Control (DAC) | `topic-3-2-dac` | `D3 sum` L266–293; `D3` L206–220 | DAC, Resource Owner, Discretion, Read/Write |
| **3.2.5** | Mandatory Access Control (MAC) | `topic-3-2-mac` | `D3 sum` L295–331; `D3` L221–243 | MAC, Central Authority, Classification, Label, Clearance, Confidential/Secret/Top Secret |
| **3.2.6** | Role-Based Access Control (RBAC) | `topic-3-2-rbac` | `D3 sum` L333–364; `D3` L244–263 | RBAC, Predefined Role, Job Function, Scalability |
| **3.2.7** | Attribute-Based Access Control (ABAC) | `topic-3-2-abac` | `D3 sum` L366–394; `D3` L264–284 | ABAC, Subject/Object/Environment/Device Attributes, Dynamic Policy |
| **3.2.8** | Master Access Control Decision Matrix | `topic-3-2-models-matrix` | `D3 sum` L247–264, L396–410; `D3` L285–294 | DAC vs MAC vs RBAC vs ABAC |
| **3.R.1** | 10 Concept Distinction Cards | `topic-3-review-distinctions` | `D3 sum` L398–440; `D3` L296–304 | 10 Comparison Cards (AuthN vs AuthZ, DAC vs MAC, etc.) |
| **3.R.2** | 14 High-Yield Exam Traps | `topic-3-review-traps` | `D3 sum` passim; `D3` passim | Trap callouts (Mover risks, Deprovisioning != delete, etc.) |
| **3.R.3** | Master Quick Reference Table | `topic-3-review-quickref` | `D3 sum` L398–410; `D3` L306–323 | High-yield memory triggers |
| **3.R.4** | 12 Real-World Review Scenarios | `topic-3-review-scenarios` | `D3` L324–336 (expanded to 12) | Practical exam review scenario cards with clean dividers |

---

## 4. Analysis of Missing, Conflicting, Duplicated, or Ambiguous Concepts

### 1. The Scope Perception Dilemma (Resolved)
* **User Concern:** The user noted in both files that they had only covered up to ABAC and wondered if more objectives existed in Domain 3.
* **Resolution:** Official ISC2 CC syllabus confirms that Domain 3 ends at Objective 3.2. The user has covered the full domain! We will structure the reading notes around Objectives 3.1 and 3.2 without inventing artificial "3.3" or "3.4" objectives, and present the Review section as supplementary content outside 3.2 (just as successfully implemented in Domain 2).

### 2. SoD Placement: Bridge Between Life Cycle & Logical Controls
* **Observation:** In `D3 sum.md` and `Domain 3.md`, SoD is placed under Section 8 / Section 11 under Logical Access Controls, but its conceptual sister, Least Privilege, is under Section 7 / Section 9 under Identity Life Cycle.
* **Academic Recommendation:** Retain Least Privilege in 3.1 (as it governs role and account provisioning) and SoD in 3.2 (as it governs workflow enforcement), but include an explicit **Bridge Comparison Section (3.2.3)** that directly contrasts them.

### 3. Deprovisioning vs. Account Deletion
* **Observation:** Students frequently confuse Deprovisioning with deleting an account.
* **Preserved Clarification:** `Domain 3.md` line 84 notes: *"ไม่ได้แปลว่าต้องลบ Account เสมอไป"*. In enterprise environments, accounts of departed personnel are disabled (locked) to preserve audit trails, forensic records, and file ownership mappings. Immediate hard deletion is a critical security trap.

### 4. Privilege Creep / Accumulation vs. Excessive Permissions
* **Observation:** `D3 sum.md` line 69 and `Domain 3.md` line 78 specifically emphasize **Privilege Accumulation**.
* **Preserved Clarification:** Privilege Accumulation (also known as Privilege Creep) is specifically triggered during **internal transfers (Mover events)** where new rights are granted without revoking obsolete permissions. In contrast, Excessive Permissions can occur at initial onboarding (Joiner event) due to overly broad roles.

### 5. ABAC Pros/Cons Handling
* **Observation:** `Domain 3.md` line 283 explicitly records: *"หมายเหตุ: ABAC ในบทเรียนนี้ไม่มีสไลด์รายละเอียดข้อดี–ข้อเสีย จึงไม่ระบุเป็นเนื้อหาจากสไลด์"*.
* **Preserved Clarification:** We will honor this boundary! We will describe ABAC's core mechanism and attribute categories as taught, and cleanly separate any broader industry context (e.g. policy processing overhead) under an explicit *Supplementary Academic Context* tag rather than masquerading it as core slide content.

---

## 5. Proposed Visual Diagram Architecture (4 High-Contrast Diagrams)

To maintain educational parity with Domains 1 and 2, Domain 3 will feature **4 responsive, accessible diagrams** with dual desktop SVG and mobile HTML presentation:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   DOMAIN 3 SEMANTIC DIAGRAM ARCHITECTURE               │
├───────┬─────────────────────────┬──────────────┬───────────────────────┤
│ Diag  │ Key Identifier          │ Section      │ Visual Educational    │
│       │                         │              │ Model                 │
├───────┼─────────────────────────┼──────────────┼───────────────────────┤
│ 1     │ iamLifecycle            │ Sec 3.1.1    │ JML Cyclic Lifecycle  │
│ 2     │ leastPrivilegeVsSod     │ Sec 3.2.3    │ Dual-Axis Architecture│
│ 3     │ accessControlModels     │ Sec 3.2.8    │ 4-Quadrant Matrix     │
│ 4     │ nistSp80063Framework    │ Sec 3.1.6    │ 3-Stage Pipeline      │
└───────┴─────────────────────────┴──────────────┴───────────────────────┘
```

### Diagram 1: `iamLifecycle` — Identity Life Cycle: The JML Framework (Section 3.1.1)
* **Educational Purpose:** Visualizes the entire user journey through an organization: **Joiner** (New Hire $\to$ Role Definition $\to$ Provisioning) $\to$ **Mover** (Transfer $\to$ Access Review $\to$ Privilege Creep Mitigation) $\to$ **Leaver** (Resignation/Termination $\to$ Deprovisioning $\to$ Account Disabling).
* **Desktop SVG:** Horizontal 3-phase chevron pipeline in `viewBox="0 0 840 220"` with distinct color badges, step numbers (01–03), and feedback review loop.
* **Mobile Alternative:** Stack of 3 semantic cards with native typography ($\ge 12\text{px}$).

### Diagram 2: `leastPrivilegeVsSod` — Least Privilege vs. Segregation of Duties (Section 3.2.3)
* **Educational Purpose:** Illustrates the fundamental difference between PoLP and SoD:
  * **PoLP (Vertical Privilege Restriction):** Limits the depth of access for a single user to minimum necessary permissions.
  * **SoD (Horizontal Workflow Division):** Breaks a critical process across multiple distinct individuals (Request $\to$ Approve $\to$ Reconcile).
* **Desktop SVG:** 2-panel comparative layout in `viewBox="0 0 840 260"`.
* **Mobile Alternative:** Stacked comparative cards with clear visual arrows.

### Diagram 3: `accessControlModels` — Access Control Models: DAC, MAC, RBAC, ABAC (Section 3.2.8)
* **Educational Purpose:** 4-quadrant architectural comparison mapping the central decision maker of each model:
  * Quadrant 1: **DAC** $\to$ Resource Owner Discretion (Flexible, High Risk)
  * Quadrant 2: **MAC** $\to$ Central Authority & Security Labels (Strict, Complex)
  * Quadrant 3: **RBAC** $\to$ User Predefined Role (Scalable, Administrative Efficiency)
  * Quadrant 4: **ABAC** $\to$ Subject, Object, Environment, Device Attributes (Fine-Grained Dynamic Context)
* **Desktop SVG:** 4-card matrix in `viewBox="0 0 840 320"` with scalable vector icons (User, Shield Lock, Briefcase, Sliders).
* **Mobile Alternative:** 4-card responsive accordion/stack with 0 emojis.

### Diagram 4: `nistSp80063Framework` — Digital Identity Framework (NIST SP 800-63) (Section 3.1.6)
* **Educational Purpose:** Clarifies NIST SP 800-63's three foundational pillars:
  1. **Identity Proofing:** Enrollment and identity validation before credential issuance.
  2. **Authentication:** Proving possession and control of authenticators.
  3. **Federation:** Cross-domain identity assertion and single sign-on trust.
* **Desktop SVG:** Sequential 3-pillar architectural diagram in `viewBox="0 0 820 180"`.
* **Mobile Alternative:** Numbered 3-tier card stack.

---

## 6. Review Components Inventory

### 10 Concept Distinction Cards (Section 3.R.1)
1. **Joiner vs. Leaver:** Account creation and initial access grant vs. account disablement and privilege revocation.
2. **Provisioning vs. Deprovisioning:** Granting required access vs. removing/disabling obsolete permissions.
3. **Access Review vs. Deprovisioning:** Audit/detection activity (detecting inappropriate rights) vs. remediation/execution activity (stripping permissions).
4. **Least Privilege vs. Need-to-Know:** Minimum necessary privilege level to execute job function vs. legitimate requirement to access specific information assets.
5. **Least Privilege vs. Segregation of Duties:** Restricting privilege depth for an individual vs. splitting a sensitive workflow across multiple people.
6. **DAC vs. MAC:** Resource owner's discretion vs. central authority classification labels and mandatory policy.
7. **DAC vs. RBAC:** Discretionary permission assignment by file owner vs. standardized role-based assignment by administrator.
8. **RBAC vs. ABAC:** Static role assignment based on job title vs. dynamic multi-attribute evaluation (user, resource, environment, device).
9. **Authentication vs. Authorization:** Verifying who an entity is (`Who you are`) vs. verifying what resources they can access (`What you can do`).
10. **Orphaned Account vs. Unused Account:** An active account whose owner has left the company vs. a legitimate account that has not logged in recently.

### 5 Bilingual Tables
1. **Roles and Responsibilities Mapping Table (Section 3.1.2):** Role, Job Function, System Access, Prohibited Privileges.
2. **Access Review 6-Part Finding Matrix (Section 3.1.4):** Finding Name, Description, Real-World Danger, Corrective Action.
3. **Deprovisioning Trigger and Action Matrix (Section 3.1.5):** Lifecycle Trigger, Immediate Action, Secondary Cleanup.
4. **Financial SoD 3-Stage Workflow Table (Section 3.2.2):** Stage, Responsible Party, Activity, Prohibited Overlap.
5. **Master Access Control Comparison Matrix (Section 3.2.8):** Model, Decision Authority, Key Mechanism, Typical Use Case, Exam Trigger Word.

### 12 Practice Scenarios Grounded in Source Section 20
- **Scenario 1:** New Employee Provisioning Workflow (Roles Definition precedes Grant).
- **Scenario 2:** Department Transfer & Lingering Rights (Privilege Accumulation detected by Access Review).
- **Scenario 3:** Employee Resignation Response (Deprovisioning: Disable account, revoke tokens).
- **Scenario 4:** Purchase Order Fraud Prevention (Segregation of Duties: Creator cannot approve).
- **Scenario 5:** Overly Generous Admin Access (Principle of Least Privilege: Minimum necessary).
- **Scenario 6:** Project Team File Sharing by Project Lead (DAC: Owner decides permissions).
- **Scenario 7:** Defense Department Classified Intelligence (MAC: Clearance & Top Secret label).
- **Scenario 8:** Hospital Nursing Staff Access to Electronic Health Records (RBAC: Role dictates access).
- **Scenario 9:** Emergency Remote Access During Off-Hours from Foreign IP (ABAC: Environmental & device attributes).
- **Scenario 10:** Contractor Expiration Account Cleanup (Orphaned account prevention).
- **Scenario 11:** Digital Identity Proofing for Remote Workers (NIST SP 800-63 enrollment).
- **Scenario 12:** Accounting System Approver Creating Orders (SoD violation remediation).

---

## 7. Strict Quality Invariants (Incorporating Lessons from Domains 1 & 2)

To ensure Domain 3 does not repeat historical defects identified in Tasks 106–127, the following engineering standards are strictly specified:

1. **Heading Architecture:** The source Markdown file (`content/isc2-cc-2026/reading/domain-3.md`) must **NEVER contain an `#` H1 heading**. It will open directly with `<p class="reading-lead">...`. The UI shell provides the single canonical H1 heading.
2. **Comment Eradication:** Zero HTML comments (`<!-- ... -->`) in Markdown source or diagram SVG template strings. All developer notes will be excluded from runtime code.
3. **List Continuation Hygiene:** All ordered lists will use clean indentation without intervening structural break tags, utilizing the new `markdown-parser.js` lookahead engine to guarantee sequential numbering (1, 2, 3).
4. **Mathematical & Relational Spans:** All comparison symbols and operators (e.g. `AuthN ≠ AuthZ`, `PoLP ⊂ Access Control`, `Request → Approve → Reconcile`) will be enclosed in `<span class="reading-math-formula">` with `white-space: nowrap`.
5. **Emoji Eradication:** Zero Unicode emojis (`👤`, `➕`, `➖`, `🔑`, `🔒`, `👔`, `🧩`, `🏷️`) in educational body text, diagram templates, tables, or cards. Scalable vector SVG icons with `aria-hidden="true"` will be used exclusively.
6. **Theme Contrast Compliance:** All SVG diagram text tokens must declare explicit high-contrast theme fills achieving $\ge 4.5:1$ contrast against both `#0f172a` (dark) and `#f8fafc` (light) panel backgrounds.
7. **Mobile Breakpoint Protection:** Dual desktop SVG (`.reading-diag-desktop`) and mobile HTML card (`.reading-diag-mobile`) presentation will be enforced via CSS media queries at 768px.

---

## 8. Next Step & Stop Gate

**STOP GATE ACTIVE:** In compliance with core instructions, this task is **AUDIT + PLANNING ONLY**. No application code, content files, stylesheets, or test suites have been modified. 

Awaiting explicit human review and approval of this architectural plan before beginning Phase 1 of Domain 3 implementation.

