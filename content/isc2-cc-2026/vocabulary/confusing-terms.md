# ISC2 CC 2026 — Commonly Confused Concepts & Terms (Domain 1)

> **Audience:** Thai learners and exam candidates preparing for the ISC2 CC examination.  
> **Purpose:** Provide crystal-clear distinctions, comparison tables, and practical memory aids for concepts that candidates frequently mix up.  
> **Domain:** Domain 1 — Security Principles  

---

## 1. Introduction

In the ISC2 Certified in Cybersecurity (CC) exam, multiple-choice questions often feature answer choices that sound similar or belong to the same topic area. A candidate who understands general concepts but cannot articulate the precise boundary between related terms is vulnerable to distractors.

This guide provides deep-dive comparisons across **15 high-risk concept pairs and clusters** in Domain 1.

---

## 2. High-Risk Concept Distinctions

### 1. Confidentiality vs. Integrity vs. Availability
| Property | Core Focus (จุดเน้นหลัก) | What Causes Violation? (อะไรทำให้ละเมิด?) | Key Defensive Controls |
| :--- | :--- | :--- | :--- |
| **Confidentiality** | **Preventing unauthorized viewing/disclosure** (การไม่ให้ผู้ไม่มีสิทธิ์มองเห็นหรือล่วงรู้) | Data breach, snooping, shoulder surfing, theft of unencrypted data. | Encryption, Access Control Lists, Data Masking, NDAs. |
| **Integrity** | **Preventing unauthorized modification/tampering** (ความถูกต้องแท้จริง ไม่ถูกแก้ไขปลอมปน) | Tampering, unauthorized record updates, accidental corruption, malware modification. | Hashing (SHA-256), Checksums, Digital Signatures, File Integrity Monitoring. |
| **Availability** | **Ensuring timely, reliable access when needed** (ความพร้อมใช้งานเมื่อผู้มีสิทธิ์ต้องการ) | DoS/DDoS attacks, hardware failure, power outage, natural disaster, ransomware lock. | Redundancy, Failover, UPS, Load Balancers, Regular Backups, Disaster Recovery. |

> **Memory Aid:**  
> - เห็นข้อมูลลับ = เสีย **Confidentiality**  
> - ข้อมูลถูกแก้/ปลอม/เพี้ยน = เสีย **Integrity**  
> - ระบบล่ม/เข้าใช้งานไม่ได้ = เสีย **Availability**  

---

### 2. Authentication vs. Authorization vs. Accounting (AAA)
| Component | Question It Answers | Sequence | Real-World Example |
| :--- | :--- | :--- | :--- |
| **Authentication** | *"Who are you?"* (คุณคือใคร?) | **First** (ต้องทำก่อนเสมอ) | Entering username and password + fingerprint scan. |
| **Authorization** | *"What are you allowed to do?"* (คุณมีสิทธิ์ทำอะไรได้บ้าง?) | **Second** (ทำหลังยืนยันตัวตนสำเร็จ) | System checks permissions: User can Read, but cannot Edit or Delete. |
| **Accounting** | *"What did you do and when?"* (คุณทำอะไรไปบ้างและเมื่อไร?) | **Ongoing** (บันทึกตลอดเวลา) | System writes an entry to the audit log: "User John accessed customer table at 14:02". |

> **Key Exam Trap:** A user can be successfully **authenticated** (proven identity), but still be **unauthorized** to view financial payroll files. Logging into a portal is authentication; determining folder permissions is authorization.

---

### 3. Multifactor Authentication (MFA): Two Factors vs. Two Credentials
- **The Golden Rule of MFA:** MFA requires at least **two DIFFERENT categories** of authentication factors:
  1. *Something You Know* (Knowledge: password, PIN, passphrase)
  2. *Something You Have* (Possession: smart card, hardware token, smartphone OTP)
  3. *Something You Are* (Inherence / Biometrics: fingerprint, facial geometry, iris scan)
- **What is NOT MFA:**
  - Password + PIN = **Single-Factor (Both are Something You Know)**
  - Password + Security Question = **Single-Factor (Both are Something You Know)**
  - Two passwords = **Single-Factor**
- **What IS True MFA:**
  - Password (*Know*) + SMS Code on phone (*Have*) = **2FA / MFA**
  - Smart Card (*Have*) + Fingerprint (*Are*) = **2FA / MFA**
  - Password (*Know*) + Hardware Fob (*Have*) = **2FA / MFA**

---

### 4. Privacy vs. Confidentiality
| Aspect | Confidentiality (การรักษาความลับ) | Privacy (ความเป็นส่วนตัว) |
| :--- | :--- | :--- |
| **Scope of Data** | Protects **ANY sensitive data** (military secrets, source code, trade secrets, financial records, algorithms). | Protects **PERSONAL data of living human beings** (PII/PI: names, health records, home address, social security numbers). |
| **Core Goal** | Ensuring unauthorized eyes cannot read the data. | Ensuring individuals have the right to control how their personal information is collected, used, shared, and deleted. |
| **Governing Rules** | Internal corporate security policies, NDAs. | International/national privacy laws (GDPR, HIPAA, PDPA). |

> **Exam Takeaway:** Encrypting a customer database protects its *confidentiality*, but if the company collected that data without user consent or refuses a lawful deletion request, it violates *privacy*.

---

### 5. Data Subject vs. Data Controller vs. Data Processor vs. Data Owner
- **Data Subject (เจ้าของข้อมูลส่วนบุคคล):** The human individual to whom the personal information belongs (e.g. the hospital patient, the bank customer, the website visitor).
- **Data Controller (ผู้ควบคุมข้อมูล):** The organization that decides **WHY** (purpose) and **HOW** (means) personal data is collected and processed. Legally accountable for privacy compliance (e.g. the Hospital, the Retail Bank).
- **Data Processor (ผู้ประมวลผลข้อมูล):** A third-party service provider hired by the Controller to process data **strictly on the Controller's instructions** (e.g. AWS Cloud hosting, ADP Payroll service).
- **Data Owner (ผู้รับผิดชอบข้อมูลในองค์กร):** A senior corporate manager or executive within an enterprise who has operational authority and responsibility for specific organizational data assets.

---

### 6. Asset vs. Threat vs. Vulnerability vs. Risk vs. Impact
$$\text{Risk} = \text{Threat} \times \text{Vulnerability} \times \text{Impact}$$
- **Asset (ทรัพย์สิน):** What you are trying to protect (e.g. customer database, server room).
- **Threat (ภัยคุกคาม):** The external danger or event that could cause harm (e.g. ransomware group, hurricane, malicious insider).
- **Vulnerability (ช่องโหว่):** The internal flaw or weakness that allows the threat to succeed (e.g. unpatched Windows server, lack of MFA, unlocked door).
- **Impact (ผลกระทบ):** The magnitude of loss if the threat exploits the vulnerability (e.g. $1,000,000 fine, 48 hours of downtime).
- **Risk (ความเสี่ยง):** The overall likelihood and consequence of a potential loss event.

---

### 7. Risk Transfer vs. Risk Avoidance vs. Risk Mitigation vs. Risk Acceptance
| Strategy | Action Taken by Organization | Typical Scenario in Exam |
| :--- | :--- | :--- |
| **Transfer** (โอนย้าย) | Shift financial/operational loss to a third party. | Purchasing **cyber insurance**, hiring an external managed security service provider (MSSP), warranties. |
| **Avoidance** (หลีกเลี่ยง) | **Completely discontinue** or refuse to engage in the high-risk activity. | **Canceling** a project, shutting down an unsecure legacy service, deciding NOT to offer cryptocurrency trading. |
| **Mitigation** (บรรเทา) | Deploy security controls to **reduce likelihood and/or impact** to an acceptable level. | Installing firewalls, deploying MFA, conducting security awareness training, applying patches. |
| **Acceptance** (ยอมรับ) | Formally acknowledge the risk and take **no additional protective action**. | Cost of protection ($50,000) exceeds asset value ($500); risk falls within management's formal tolerance. |

> **Key Rule:** Risk Transfer shifts financial burden, but **NEVER shifts ultimate legal accountability**. Executive management remains accountable to the public and regulators.

---

### 8. Qualitative vs. Quantitative Risk Analysis
| Feature | Qualitative Risk Analysis (เชิงคุณภาพ) | Quantitative Risk Analysis (เชิงปริมาณ) |
| :--- | :--- | :--- |
| **Data Basis** | Subjective expert judgment, surveys, brainstorming. | Objective numerical values, monetary amounts, probabilities. |
| **Output / Rating** | Categories: **Low, Medium, High** (Risk Matrix). | Formulas: Dollar loss amounts (**SLE, ALE, ARO**). |
| **Speed & Cost** | Fast, simple, inexpensive, easy for non-technical stakeholders. | Time-consuming, complex, requires historical actuarial data. |
| **Formulas** | None. | $\text{SLE} = \text{AV} \times \text{EF}$, $\text{ALE} = \text{SLE} \times \text{ARO}$. |

---

### 9. Policy vs. Standard vs. Procedure vs. Guideline
| Artifact | Mandatory? | Primary Question Answered | Example Content |
| :--- | :---: | :--- | :--- |
| **Policy** | **YES** | **WHAT** must be done (Management's high-level intent). | "All company data must be protected with strong authentication." |
| **Standard** | **YES** | **SPECIFICATIONS** (Mandatory technical requirements & baselines). | "Passwords must be at least 14 characters, require complexity, and lock after 5 failed attempts." |
| **Procedure** | **YES** | **HOW** to do it (Detailed step-by-step instructions). | "Step 1: Open Active Directory. Step 2: Click Reset Password. Step 3: Check User Must Change at Next Login." |
| **Guideline** | **NO (Advisory)** | **RECOMMENDATIONS** (Best practices and advice). | "Employees are encouraged to use passphrases consisting of four random words for ease of memory." |

> **Exam Shortcut:**  
> - "High-level management direction" $\rightarrow$ **Policy**  
> - "Mandatory technical requirement / baseline" $\rightarrow$ **Standard**  
> - "Step-by-step instructions" $\rightarrow$ **Procedure**  
> - "Recommended / advisory best practice" $\rightarrow$ **Guideline**  

---

### 10. Control Categories vs. Control Functional Types
Security controls are classified along **TWO orthogonal dimensions**:
1. **Implementation Category (วิธีดำเนินการ / โครงสร้าง):**
   - **Technical (Logical):** Hardware and software (firewalls, encryption, ACLs, biometrics).
   - **Managerial (Administrative):** Policies, procedures, risk assessments, background checks.
   - **Operational:** Day-to-day human execution (awareness training, routine backups, media disposal).
   - **Physical:** Real-world barriers (fences, door locks, guards, CCTV, mantraps).
2. **Functional Type (หน้าที่ต่อเหตุการณ์):**
   - **Deterrent:** Discourages bad actors (warning signs, visible cameras).
   - **Preventive:** Stops bad actions before they happen (locks, firewalls, MFA).
   - **Detective:** Discovers events during/after occurrence (IDS, alarms, audit logs).
   - **Corrective:** Repairs damage and restores normal state (backup restore, patching).
   - **Compensating:** Alternative workaround providing comparable safety when primary is impossible.
   - **Directive:** Guides behavior and compliance (mandatory policies, posted rules).

---

### 11. Deterrent vs. Preventive Controls
- **Deterrent:** Attempts to convince the attacker NOT to try (psychological discouragement). An attacker *can* physically climb a fence or ignore a warning sign, but the sign causes hesitation.
- **Preventive:** Actively stops or blocks the action, regardless of the attacker's intent. A locked steel door or a firewall blocking port 23 *physically prevents* access.

---

### 12. Detective vs. Corrective Controls
- **Detective:** Informs you that something happened. An intrusion detection system (IDS) or motion alarm alerts the team, but does not fix the breached database.
- **Corrective:** Takes action AFTER an incident to fix the problem, restore systems, and repair damage (e.g. restoring files from a clean backup tape after ransomware).

---

### 13. Due Care vs. Due Diligence
| Concept | Action Focus | Core Concept | Example |
| :--- | :--- | :--- | :--- |
| **Due Care** | **DOING** the right thing (การลงมือปฏิบัติ) | Taking prudent, reasonable actions that any responsible professional would take under the circumstances. | Applying critical security patches promptly; locking the server room door; enforcing password policies. |
| **Due Diligence** | **KNOWING** the right thing (การตรวจสอบ/สืบค้น) | Thoroughly investigating, researching, auditing, and maintaining risk awareness before and during activities. | Conducting a security audit of a vendor before signing a contract; performing vulnerability assessments; reviewing access logs. |

> **Memory Trick:**  
> - *Due Diligence* is doing your homework (investigation & research).  
> - *Due Care* is taking proper action based on that knowledge.  

---

### 14. Information Integrity vs. Professional Integrity
- **Information Integrity (Domain 1.1):** A technical property of data ensuring it remains accurate, correct, and unaltered by unauthorized parties.
- **Professional Integrity (Domain 1.5):** An ethical characteristic of a human professional acting honestly, honorably, and truthfully in accordance with professional codes of conduct.

---

### 15. Principals vs. Principles
- **Principals (with an 'a'):** People or organizations—specifically the clients, employers, or authorizing entities to whom you provide professional services (e.g. ISC2 Canon 3: *"Provide diligent and competent service to principals"*).
- **Principles (with an 'e'):** Fundamental doctrines, foundational truths, rules, or tenets (e.g. *"The Security Principles outlined in Domain 1"*).
