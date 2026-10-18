# Official ISC2 CC 2026 Exam Outline — Domain & Objective Mapping

## 1. Baseline Overview

The updated **ISC2 Certified in Cybersecurity (CC) Exam Outline** became effective **September 1, 2026**.

This document defines the authoritative domain breakdown, published exam weights, verified numbered objectives, confirmed subtopics, cross-domain AI Security integration, and explicit documentation of unverified areas.

---

## 2. Published Domain Weights & Allocation Table

| Domain ID | Official Domain Name | Published Exam Weight | 125-Item Exam Quota (Largest Remainder) | Verification Status |
| :---: | :--- | :---: | :---: | :---: |
| **Domain 1** | **Security Principles** | **24%** | 30 questions | Verified |
| **Domain 2** | **Security Governance** | **17.3%** | 22 questions | Verified |
| **Domain 3** | **Identity and Access Management (IAM) Concepts** | **20%** | 25 questions | Verified |
| **Domain 4** | **Networking and Cloud Security Concepts** | **21.3%** | 27 questions | **Topics Confirmed / Numbering Pending** |
| **Domain 5** | **Security Operations and Incident Response** | **17.3%** | 21 questions | Verified |
| **Total** | *Officially Stated Total: 100%* | **99.9%** *(published rounded)* | **125 questions** | — |

> [!NOTE]
> **Preservation of Published Percentages:**
> The published domain percentages (`24%`, `17.3%`, `20%`, `21.3%`, `17.3%`) sum to **99.9%** due to official published rounding. SEC CERT TEST preserves these published figures verbatim without artificial normalization, while computing exact 125-item mock exam seat allocations using the mathematical Largest Remainder (Hamilton) method.

---

## 3. Provenance & Source Taxonomy

To maintain academic and legal integrity, SEC CERT TEST strictly classifies all domain knowledge and questions into four distinct provenance categories:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      Content Provenance Hierarchy                      │
├────────────────────────────────┬───────────────────────────────────────┤
│ Tier 1: Official ISC2 Outline  │ Official domain names, weights, and   │
│                                │ verified learning objectives.         │
├────────────────────────────────┼───────────────────────────────────────┤
│ Tier 2: User Study References  │ Textbooks, official study guides, and │
│                                │ instructional lecture notes.          │
├────────────────────────────────┼───────────────────────────────────────┤
│ Tier 3: Third-Party Practice   │ Candidate practice questions provided │
│                                │ by the community or study materials.  │
├────────────────────────────────┼───────────────────────────────────────┤
│ Tier 4: SEC CERT TEST Authored │ Educational explanations, rationale,  │
│                                │ and bilingual Thai translations.      │
└────────────────────────────────┴───────────────────────────────────────┘
```

> [!WARNING]
> **Anti-Misrepresentation Principle:**
> Third-party study questions and SEC CERT TEST practice simulations must **never** be presented to users as "real" or "leaked" official ISC2 exam questions. All question text and answer choices represent independent educational simulations.

---

## 4. Comprehensive Domain & Objective Breakdown

### Domain 1: Security Principles (Weight: 24%)
- **Objective 1.1: Understand cybersecurity concepts**
  - Confidentiality
  - Integrity
  - Availability
  - Authentication, Authorization, Accounting (AAA)
  - Non-repudiation
  - Privacy
- **Objective 1.2: Understand risk management concepts**
  - Risk management lifecycle
  - Risk management processes (identification, assessment, response, monitoring)
- **Objective 1.3: Understand governance concepts**
  - Regulations and laws
  - Frameworks and guidelines
  - Policies, standards (ISO/IEC 27001, CIS Controls), procedures
- **Objective 1.4: Understand cybersecurity controls**
  - Technical (logical) controls
  - Administrative (managerial) controls
  - Physical controls
- **Objective 1.5: Maintain professional and ethical conduct**
  - Professional code of conduct
  - Due care and due diligence
  - ISC2 Code of Ethics (Canons: protect society, act honorably, provide competent service, protect the profession)

---

### Domain 2: Security Governance (Weight: 17.3%)
- **Objective 2.1: Plan Governance, Risk, and Compliance (GRC)**
  - Purpose of GRC
  - Importance to business strategy
  - Frameworks and tools (NIST CSF, COBIT, regulatory mandates)
- **Objective 2.2: Understand redundancy**
  - Business Continuity (BC) concepts
  - Disaster Recovery (DR) concepts (RTO, RPO, alternate processing sites)
- **Objective 2.3: Understand security awareness**
  - Organizational culture (security leadership, tone at the top)
  - Social engineering tactics
  - Password protection & hygiene
  - Phishing (spear phishing, whaling, vishing, smishing)
- **Objective 2.4: Measure cybersecurity effectiveness**
  - Key Performance Indicators (KPI) & Key metrics
  - Key Risk Indicators (KRI)
  - Dashboards, scorecards, and executive reporting

---

### Domain 3: Identity and Access Management (IAM) Concepts (Weight: 20%)
- **Objective 3.1: Understand identity life cycle management**
  - Roles definition
  - Provisioning
  - Access review & recertification
  - Deprovisioning & account revocation
  - IAM frameworks and tools (SSO, federated identity, directory services)
- **Objective 3.2: Understand logical access controls**
  - Principle of Least Privilege (PoLP)
  - Separation of Duties (SoD)
  - Access control models: Discretionary (DAC), Mandatory (MAC), Role-Based (RBAC), Attribute-Based (ABAC)

---

### Domain 4: Networking and Cloud Security Concepts (Weight: 21.3%)

> [!CAUTION]
> **Pending Official Verification — Objective Numbering:**
> The complete official numbered objective breakdown (e.g., `4.1`, `4.2`) for Domain 4 has not been independently verified from the retrieved outline summary. To uphold truthfulness in documentation, **no artificial objective numbers have been invented**.
> 
> The following list represents **Confirmed Topic Coverage** validated against user reference materials:

- **Topic 4.A — Computer Networking Fundamentals:**
  - OSI Model (7 layers, protocols, and data encapsulation)
  - TCP/IP Model (4 layers: Network Interface, Internet, Transport, Application)
  - IPv4 vs. IPv6 addressing and characteristics
  - Virtual Private Networks (VPN: IPsec, SSL/TLS, remote access vs site-to-site)
- **Topic 4.B — Network Threats and Prevention:**
  - Firewalls (Packet filtering, Stateful inspection, Next-Generation Firewalls / NGFW)
  - Intrusion Detection Systems (IDS) & Intrusion Prevention Systems (IPS)
  - Network Traffic Monitoring and packet analysis
- **Topic 4.C — Network Security Architecture:**
  - Network Segmentation
  - Virtual Local Area Networks (VLAN)
  - Micro-segmentation
  - Defense in Depth
  - Zero Trust Architecture (Never trust, always verify; assume breach)
- **Topic 4.D — Wireless Networks:**
  - Wireless standards, encryption protocols (WPA2, WPA3), and wireless threats
- **Topic 4.E — Embedded Systems & Emerging Technologies:**
  - Internet of Things (IoT) security considerations
  - Industrial Control Systems (ICS) / SCADA security
- **Topic 4.F — Cloud Security Concepts:**
  - Cloud Characteristics (on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service)
  - Cloud Service Models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)
  - Cloud Deployment Models: Public, Private, Hybrid, Community
  - Shared Responsibility Model (division of security duties between cloud provider and customer)

---

### Domain 5: Security Operations and Incident Response (Weight: 17.3%)
- **Objective 5.1: Understand data security**
  - Data handling lifecycle (Classification, Labeling, Masking, Sanitization: Clear, Purge, Destroy per NIST SP 800-88)
  - Cryptography fundamentals:
    - Symmetric encryption (AES, 3DES)
    - Asymmetric encryption (RSA, ECC)
    - Cryptographic hashing (SHA-256, HMAC)
    - Quantum-resistant cryptography concepts
- **Objective 5.2: Understand security operations**
  - Logging, telemetry, and monitoring of security events
  - Security event triage (Incident use cases, prioritization, correlation)
  - Threat actors (Script kiddies, hacktivists, organized crime, nation-states, insider threats; motivations)
  - Cyber threat intelligence (CTI) & threat sharing
  - Threat frameworks (MITRE ATT&CK, Cyber Kill Chain)
- **Objective 5.3: Understand Incident Response (IR)**
  - Data handling policies implementing the Incident Response Plan (IRP)
  - Incident response phases (Preparation, Detection & Analysis, Containment, Eradication, Recovery, Post-Incident Activity)
  - Incident Response exercises: Testing, Simulation, Tabletop exercises
- **Objective 5.4: Understand asset protection**
  - Asset lifecycle management
  - Handling End of Life (EOL) and End of Service (EOS) software and hardware
  - Configuration and change management
- **Objective 5.5: Understand security testing**
  - Security readiness testing:
    - Blue Teaming (defensive posture)
    - Red Teaming (adversarial simulation)
    - Purple Teaming (collaborative validation)
  - Application security testing:
    - Vulnerability scanning
    - Static Application Security Testing (SAST)
    - Dynamic Application Security Testing (DAST)
    - Threat modeling
  - Physical penetration testing & social engineering assessments:
    - Phishing simulations
    - Tailgating & piggybacking
    - Impersonation & badge cloning

---

## 5. Cross-Domain AI Security Integration

A key enhancement of the September 1, 2026 outline is the integration of foundational Artificial Intelligence (AI) security concepts across all five existing domains.

> [!IMPORTANT]
> **AI Security is NOT a Sixth Domain:**
> The official ISC2 curriculum weaves AI security risks and countermeasures into the existing domain taxonomy rather than creating a separate AI domain.

| Domain | Focus Area | Specific AI Security Topics |
| :--- | :--- | :--- |
| **Domain 1: Security Principles** | AI Governance & Ethics | AI data integrity, Training data privacy, Model poisoning attacks, AI ethical principles and transparency. |
| **Domain 2: Security Governance** | AI GRC & Risk | AI-driven threat landscapes, Model drift monitoring, AI-related GRC frameworks, and AI Key Risk Indicators (KRIs). |
| **Domain 3: IAM Concepts** | Non-Human Identity & Access | Automated AI bots, AI service accounts, Multi-Factor Authentication (MFA) enforcement for autonomous agents, and behavioral access analysis. |
| **Domain 4: Network & Cloud Security** | AI-Powered Defenses | AI-powered Firewalls, AI-assisted Intrusion Detection Systems (IDS), Automated network traffic anomaly detection, and AI workload micro-segmentation. |
| **Domain 5: Security Operations** | AI in SecOps & Testing | AI-assisted Security Information and Event Management (SIEM), Mitigating analyst alert fatigue, AI model data leakage prevention, and Adversarial AI security testing. |

---

## 6. Official Exam Facts vs. SEC CERT TEST Simulation

To prevent user confusion regarding official CAT (Computerized Adaptive Testing) testing vs. SEC CERT TEST mock tests:

| Parameter | Official ISC2 CC Examination | SEC CERT TEST Practice Simulation |
| :--- | :--- | :--- |
| **Delivery Model** | Computerized Adaptive Testing (CAT) | Proportional Random / Sequential Simulation |
| **Exam Duration** | 2 Hours (120 minutes) | Practice: Untimed / Exam: 120-minute Countdown |
| **Total Questions** | 100–125 questions (variable CAT) | Fixed 125 questions (mock exam mode) |
| **Question Types** | Multiple Choice & Advanced Item Types | 4-Option Multiple Choice |
| **Passing Standard** | 700 / 1,000 scaled points | 70% raw correct threshold |
| **Languages** | English, Chinese, Japanese, German, Spanish | English, Thai, Bilingual (English + Thai) |
| **Testing Center** | In-person Pearson VUE Testing Centers | Web Browser (Desktop, Tablet, Mobile) |
| **Adaptive Logic** | Dynamic item difficulty based on candidate ability | Fixed proportional domain quota (Largest Remainder) |
