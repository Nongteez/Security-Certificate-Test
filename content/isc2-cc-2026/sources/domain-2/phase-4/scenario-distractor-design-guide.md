# Scenario & Distractor Design Guide
## Domain 2: Security Governance — ISC2 Certified in Cybersecurity (CC) 2026 Outline

> **Document Status:** Authoritative Authoring & Editorial Specification  
> **Phase:** Phase 4 — Quality-First Question Opportunity Planning  
> **Target Audience:** Question Authors, Psychometric Reviewers, Editorial Translators  
> **Exam Version:** ISC2 CC Updated 2026 Exam Outline (Domain 2 Weight: 17.3%)

---

## 1. Executive Overview & Design Philosophy

### 1.1 The Core Purpose of Scenario-Based Testing
In ISC2 credentialing, a scenario is not decorative fiction or creative storytelling. It is an **information-dense delivery mechanism for operational constraints, organizational governance structures, and competing business priorities**. 

The fundamental goal of a scenario-based question in Domain 2 is to test whether the candidate can apply cybersecurity governance principles within a realistic enterprise environment:
1. Navigating organizational hierarchies and assigned responsibilities.
2. Balancing security risk against business operational imperatives and financial costs.
3. Distinguishing tactical actions from strategic directives.
4. Diagnosing human behavior and social engineering attack vectors.

### 1.2 Distractor Integrity: The Diagnostic Assessment Model
A multiple-choice question is only as strong as its distractors. If three options are obviously incorrect, silly, or grammatically mismatched, the question evaluates nothing more than process-of-elimination test-wiseness.

In SEC CERT TEST Domain 2 authoring, every distractor must fulfill a **diagnostic purpose**:
- Each distractor must represent a **plausible, recognized misconception** held by inexperienced practitioners.
- Choosing a distractor must reveal *specifically why* the candidate's mental model is flawed (e.g., jumping to technical remediation before risk assessment; confusing data ownership with data custody; conflating downtime duration with data loss tolerance).

---

## 2. Enterprise Personas & Role-Play Architecture

Domain 2 assesses governance, which fundamentally revolves around *people, policies, and authority*. Question stems must situate decisions within specific enterprise roles to evaluate the candidate's understanding of governance boundaries and Separation of Duties (SoD).

```
                      ENTERPRISE GOVERNANCE HIERARCHY
┌────────────────────────────────────────────────────────────────────────┐
│                      Board of Directors & CEO                          │
│               [ Ultimate Risk Accountability & Appetite ]              │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        CISO / Security Director                        │
│          [ Program Strategy, Governance Frameworks, Executive KRIs ]   │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
                    ▼                                ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│       Business Unit / Data Owner     │  │       IT & Data Custodian    │
│  [ Asset Classification, Access Auth,│  │  [ Technical Configuration,  │
│    Residual Risk Acceptance ]        │  │    Backups, Patch Execution ]│
└───────────────────┬──────────────────┘  └──────────────┬───────────────┘
                    │                                    │
                    └─────────────────┬──────────────────┘
                                      ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    Security Analyst / Risk Practitioner                │
│       [ Risk Registers, Phishing Drills, BIA Data, Metric Tracking ]   │
└─────────────────────────────────────┬──────────────────────────────────┘
                                      │
                                      ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       General Enterprise User                          │
│          [ Acceptable Use Compliance, Recognize & Report Duty ]        │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Detailed Persona Profiles

#### Persona 1: The Board of Directors / Chief Executive Officer (CEO)
- **Governance Focus:** Strategic oversight, fiduciary responsibility, enterprise-level risk appetite, regulatory compliance, executive resource allocation.
- **Decision Authority:** Sets overarching business risk tolerance; approves executive funding for major DR sites or ISMS implementation; holds ultimate legal accountability for corporate breaches.
- **Typical Scenario Context:** Reviewing high-level executive dashboards and KRIs; approving enterprise-wide Information Security Policy; evaluating catastrophic risk scenarios that threaten business solvency.
- **Misconception Trap:** Candidates mistakenly believe the Board reviews technical firewall rules or vulnerability scan outputs.

#### Persona 2: The Chief Information Security Officer (CISO)
- **Governance Focus:** Translation of business risk appetite into an operational security program; implementation of ISO/IEC 27001 or NIST CSF frameworks; establishment of policy hierarchies.
- **Decision Authority:** Directs the information security program; arbitrates policy exceptions; approves security awareness strategies; reports residual risk to executive leadership.
- **Typical Scenario Context:** Structuring the policy architecture (Policies vs. Standards vs. Procedures); aligning security initiatives with regulatory mandates; presenting quarterly security posture metrics.
- **Misconception Trap:** Candidates confuse the CISO's strategic oversight with hands-on system administration.

#### Persona 3: The Data Owner / Information Asset Owner (Business Unit Head)
- **Governance Focus:** Business value of information assets; data classification; authorized access criteria; business impact of downtime (MTD/RTO).
- **Decision Authority:** Has sole authority to classify organizational data (Public, Internal, Confidential, Restricted); approves user access requests to specific business datasets; **formally accepts residual risk** within delegated business thresholds.
- **Typical Scenario Context:** Classifying customer healthcare records; determining whether financial databases can tolerate an RTO of 4 hours; signing off on compensating controls for a legacy billing system.
- **Misconception Trap:** Candidates frequently believe that IT administrators or external auditors own the data and possess authority to accept business risks.

#### Persona 4: The Data Custodian / System Administrator
- **Governance Focus:** Technical execution of controls; operational safeguarding of data integrity and availability; backup maintenance; access control enforcement.
- **Decision Authority:** Implements role-based access controls (RBAC) as authorized by Data Owners; configures storage encryption; executes off-site backup rotations; applies software patches.
- **Typical Scenario Context:** Configuring immutable cloud backups to satisfy RPO targets; applying emergency security patches to public-facing servers; implementing least-privilege folder permissions.
- **Misconception Trap:** Candidates confuse the Custodian's technical stewardship with the Owner's business decision-making authority.

#### Persona 5: The Security Analyst / Risk Practitioner (Candidate's Entry Role)
- **Governance Focus:** Hands-on operational risk assessment; maintenance of the risk register; coordination of BIA surveys; tracking phishing simulation metrics.
- **Decision Authority:** Evaluates likelihood and impact; updates risk ratings; calculates MTTR and MTTD; analyzes employee training completion versus click rates.
- **Typical Scenario Context:** Logging newly identified zero-day vulnerabilities into the enterprise risk register; facilitating a tabletop disaster recovery exercise; designing targeted phishing simulations.
- **Misconception Trap:** Candidates assume the analyst makes final risk treatment decisions rather than providing objective risk data to decision-makers.

#### Persona 6: The General Corporate Employee
- **Governance Focus:** Human firewall; adherence to the Acceptable Use Policy (AUP); daily operational security hygiene.
- **Decision Authority:** Has the strict duty to **Recognize and Report** suspicious activities; must never attempt rogue investigations or self-help remediation on corporate systems.
- **Typical Scenario Context:** Receiving an unsolicited SMS claiming payroll direct-deposit errors; noticing an unfamiliar visitor lingering near badge-access doors; reporting an accidental misdirected email.
- **Misconception Trap:** Candidates often think employees should confront intruders directly or delete phishing emails without notifying the SOC.

---

## 3. Scenario Archetypes & Decision Contexts Across Objectives

To prevent formulaic repetition, Domain 2 scenarios should be structured around 12 core archetypes mapped to the four exam objectives:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE 12 DOMAIN 2 SCENARIO ARCHETYPES                  │
├─────────────────┬──────────────────────────────────────────────────────┤
│ Objective 2.1   │ • Archetype A: Policy Hierarchy & Document Selection │
│ (Security       │ • Archetype B: Risk Treatment Economic Trade-Off     │
│  Governance &   │ • Archetype C: Risk Register Lifecycle Progression   │
│  Risk)          │                                                      │
├─────────────────┼──────────────────────────────────────────────────────┤
│ Objective 2.2   │ • Archetype D: Business Impact Analysis (BIA) Tuning │
│ (Business       │ • Archetype E: DR Alternate Site Selection           │
│  Continuity &   │ • Archetype F: BC/DR Testing Rigor & Progression     │
│  Disaster Rec.) │                                                      │
├─────────────────┼──────────────────────────────────────────────────────┤
│ Objective 2.3   │ • Archetype G: Social Engineering Triad Diagnosis   │
│ (Security       │ • Archetype H: Employee Incident Escalation Protocol │
│  Culture &      │ • Archetype I: Password Hygiene vs. Modern Auth      │
│  Awareness)     │                                                      │
├─────────────────┼──────────────────────────────────────────────────────┤
│ Objective 2.4   │ • Archetype J: Operational Metric vs. Strategic KRI  │
│ (Security       │ • Archetype K: Incident Lifecycle Timing Breakdown   │
│  Metrics &      │ • Archetype L: Audience-Calibrated Reporting         │
│  Reporting)     │                                                      │
└─────────────────┴──────────────────────────────────────────────────────┘
```

### 3.1 Objective 2.1: Governance and Risk Management Archetypes

#### Archetype A: Policy Hierarchy & Document Selection
- **Core Dilemma:** An organization needs to mandate an organizational security requirement, establish uniform technical configurations, or provide operational execution steps. Which document tier is required?
- **Decision Context:** High-level executive intent (Policy) vs. mandatory technical baseline (Standard) vs. step-by-step procedural manual (Procedure) vs. discretionary best practice (Guideline).
- **Key Distinctions:**
  - *Policy:* High-level, management-approved, technology-neutral, mandatory for all personnel.
  - *Standard:* Specific mandatory technical baseline (e.g., "All endpoints must use AES-256 encryption").
  - *Procedure:* Step-by-step instructions for executing a specific task (e.g., CLI commands to configure BitLocker).
  - *Guideline:* Discretionary recommendations or best practices; non-mandatory.

#### Archetype B: Risk Treatment Economic Trade-Off
- **Core Dilemma:** A vulnerability has been assessed, but implementing the recommended security control exceeds the financial loss that would occur if the risk materialized, or would shut down a critical revenue stream.
- **Decision Context:** Selecting among the 4 formal treatments:
  - *Mitigate:* Apply controls to reduce likelihood or impact below risk tolerance.
  - *Avoid:* Terminate the activity, decommission the system, or withdraw from the market.
  - *Transfer:* Share/shift financial impact to a third party (cyber insurance, contractual indemnification).
  - *Accept:* Formally acknowledge residual risk without active controls, signed off by executive authority.

#### Archetype C: Risk Register Lifecycle Progression
- **Core Dilemma:** A risk practitioner is managing the enterprise risk register. Given that a particular milestone has just completed (e.g., risk identification), what is the mandatory sequential next step?
- **Decision Context:** Sequential phases of risk management: Context Framing -> Assessment (Identification, Analysis, Evaluation) -> Treatment -> Ongoing Monitoring.

---

### 3.2 Objective 2.2: Business Continuity & Disaster Recovery Archetypes

#### Archetype D: Business Impact Analysis (BIA) Calibration
- **Core Dilemma:** Following a major system outage, the organization must determine which systems to recover first and establish operational recovery boundaries.
- **Decision Context:** Determining the interplay between:
  - *Maximum Tolerable Downtime (MTD):* The total threshold time the business can survive without the system before suffering irreversible operational collapse.
  - *Recovery Time Objective (RTO):* The target time within which systems must be restored after disruption ($RTO \le MTD$).
  - *Recovery Point Objective (RPO):* The maximum tolerable age of data lost due to a major event.

#### Archetype E: Disaster Recovery Alternate Site Selection
- **Core Dilemma:** An organization operates critical transactions requiring near-zero data loss and rapid recovery, but has budget constraints. Which recovery site model satisfies the RTO and RPO?
- **Decision Context:**
  - *Hot Site:* Immediate recovery, real-time data replication, fully configured hardware, highest cost.
  - *Warm Site:* Recovery within hours to 1–2 days, pre-installed hardware, software/data restored from recent backups, moderate cost.
  - *Cold Site:* Basic shell space (power, HVAC), no pre-installed IT hardware, long recovery window (days/weeks), lowest cost.

#### Archetype F: BC/DR Testing Rigor Progression
- **Core Dilemma:** An organization has drafted an updated Disaster Recovery Plan and wants to validate it without disrupting ongoing production operations. Which testing method is most appropriate?
- **Decision Context:** Testing hierarchy: Checklist Review -> Tabletop / Structured Walkthrough -> Simulation / Parallel Test -> Full Interruption / Cutover Test.

---

### 3.3 Objective 2.3: Security Culture & Awareness Archetypes

#### Archetype G: Social Engineering Triad Diagnosis
- **Core Dilemma:** An attacker launches a deceptive campaign targeting an organization. The question provides specific scenario clues (delivery channel, psychological pretext, target role) and evaluates diagnosis.
- **Decision Context:**
  - *Channel:* Email (Phishing), SMS/Text (Smishing), Voice/Phone (Vishing).
  - *Pretext / Psychological Trigger:* Authority (impersonating CEO/legal), Urgency (immediate account suspension), Scarcity/Greed (limited prize/bonus), Fear.
  - *Targeting Scope:* Broadcast/Bulk (General Phishing), Highly Targeted Role (Spear Phishing), Senior Executive Target (Whaling).

#### Archetype H: Employee Incident Escalation Protocol
- **Core Dilemma:** An end-user encounters a suspicious email, phone call, or physical visitor. What is the employee's primary and immediate duty?
- **Decision Context:** The core duty is **Recognize and Report** to the designated security team (SOC / Helpdesk) via approved communication channels, rather than attempting private investigation, confronting the attacker, or ignoring the event.

#### Archetype I: Password Hygiene vs. Modern Authentication
- **Core Dilemma:** An enterprise seeks to modernize its authentication posture to counter credential stuffing and brute-force attacks.
- **Decision Context:** Shifting from arbitrary periodic password expiration and complex character rules toward **length-based passphrases, multi-factor authentication (MFA), and credential hygiene (avoiding credential reuse)**.

---

### 3.4 Objective 2.4: Security Metrics & Reporting Archetypes

#### Archetype J: Operational Metric vs. Strategic Key Risk Indicator (KRI)
- **Core Dilemma:** A CISO must present the enterprise cybersecurity posture to the Board of Directors. Which metric provides meaningful strategic value rather than operational noise?
- **Decision Context:** Differentiating low-level operational telemetry (e.g., raw firewall port-scan counts) from strategic Key Risk Indicators (e.g., patch latency trends on critical assets, critical control coverage percentage, third-party vendor risk scores).

#### Archetype K: Incident Lifecycle Timing Breakdown
- **Core Dilemma:** A security operations manager is evaluating incident response efficiency across quarterly incidents.
- **Decision Context:** Understanding operational milestones:
  - *Mean Time to Detect (MTTD):* Duration from initial unauthorized compromise to detection.
  - *Mean Time to Remediate / Respond (MTTR):* Duration from detection to containment, eradication, and system restoration.

#### Archetype L: Audience-Calibrated Reporting
- **Core Dilemma:** A security team has compiled risk assessment findings. How should the information be structured for different stakeholder audiences?
- **Decision Context:**
  - *Board / Executives:* Strategic risk dashboards, financial impact estimates, compliance statuses.
  - *IT Operations / Engineering:* Technical remediation tickets, specific CVEs, system hostnames, patch deployment procedures.
  - *External Auditors / Regulators:* Attestation evidence, control effectiveness documentation, compliance crosswalks.

---

## 4. Distractor Formulation Methodology & Misconception Engine

To construct believable, psychometrically sound distractors, authors should apply a **3-Tier Distractor Formulation Engine**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                 THE 3-TIER DISTRACTOR FORMULATION ENGINE               │
├────────────────────┬───────────────────────────────────────────────────┤
│ Tier 1:            │ "The Premature / Sequential Trap"                 │
│ Procedural Mismatch│ A completely valid, critical security action,     │
│                    │ but chronologically out of sequence.              │
├────────────────────┼───────────────────────────────────────────────────┤
│ Tier 2:            │ "The Category / Definitional Conflation"          │
│ Conceptual Mistake │ Conflating two closely related technical terms    │
│                    │ that share similar acronyms or operational areas. │
├────────────────────┼───────────────────────────────────────────────────┤
│ Tier 3:            │ "The Overzealous Technical Fix"                   │
│ Scope Misalignment │ Recommending an expensive technical tool to solve │
│                    │ an administrative, human, or governance problem.  │
└────────────────────┴───────────────────────────────────────────────────┘
```

### 4.1 Step-by-Step Example of Distractor Construction

Let us examine how this engine generates a 4-option set for **Opportunity OPP-D2-008 (Business Continuity vs. Disaster Recovery Distinctions)**:

- **Scenario Stem Context:**  
  *A regional datacenter experiences a catastrophic electrical fire that completely destroys the primary server room. While the incident response team manages physical safety, senior leadership activates the enterprise continuity plans. Which of the following activities falls PRIMARILY within the scope of the Business Continuity Plan (BCP) rather than the Disaster Recovery Plan (DRP)?*
- **Key (Correct Answer):**  
  *Transitioning core customer-support staff to an alternate call center to maintain essential client communications.*  
  *(Defensible: BCP focuses on sustaining critical business operations and functions during a disruption).*
- **Distractor 1 (Tier 1: Premature/Sequential Action):**  
  *Conducting a post-incident forensic analysis to determine the physical origin of the fire.*  
  *(Analysis: Forensic root-cause analysis is a vital post-incident activity, but occurs after stabilization and recovery, not during the emergency continuity phase).*
- **Distractor 2 (Tier 2: Category Conflation — DRP instead of BCP):**  
  *Restoring virtual server images and database backups onto cold-site hardware racks.*  
  *(Analysis: Restoring technical IT infrastructure, servers, and data is the precise definition of Disaster Recovery, not Business Continuity).*
- **Distractor 3 (Tier 3: Overzealous Technical Fix):**  
  *Deploying automated network intrusion detection sensors at the secondary datacenter.*  
  *(Analysis: Valid security engineering practice, but completely irrelevant to sustaining ongoing business operations during a catastrophic physical fire).*

---

## 5. Scenario Construction Rules & Anti-Patterns

### 5.1 Mandatory Scenario Construction Rules
1. **Focused Word Economy:** Scenario stems should be concise and focused on the operational dilemma and decision criteria. Avoid unnecessary narrative padding or extraneous details while providing sufficient organizational context and constraints.
2. **Explicit Constraints:** Stems must state constraints clearly before asking the question (e.g., "Due to strict regulatory requirements...", "Because the budget cannot exceed...", "Without disrupting ongoing production transactions...").
3. **Neutral, Professional Phrasing:** Use formal enterprise terminology. Scenarios must reflect professional corporate environments.
4. **Complete Independence:** Every question must stand alone. Answering Question $N$ must never depend on the answer or stem of Question $N-1$.

### 5.2 Anti-Patterns to Strictly Prohibit
- **The "Funny / Absurd" Distractor:** Legacy questions sometimes included humorous options (e.g., Q108: "corporate fires", Q114: "buying snacks for the DR team"). These are unprofessional, destroy item face validity, and must never be authored.
- **The "All of the Above" Fallacy:** Never author options that combine choices ("Both A and B", "All of the above").
- **The "Length Clue" Giveaway:** Avoid making the correct answer (Key) conspicuously longer, more detailed, or more carefully qualified than the distractors. Distractors must be substantively developed and plausible so that visual length is not an artificial cue to test-wiseness. Do not, however, force arbitrary or rigid mechanical character counts across options.
- **Absolute Generalizations:** Avoid extreme absolute qualifiers like *always*, *never*, *completely*, *impossible* in distractors, as test-savvy candidates instinctively eliminate them.

---

## 6. Diagnostic Explanation Requirements for Phase 5

When questions are authored in Phase 5, every item must include a structured, comprehensive explanation in both English and Thai. The explanation must adhere to the 4-part pedagogical architecture:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   STRUCTURED EXPLANATION ARCHITECTURE                  │
├────────────────────┬───────────────────────────────────────────────────┤
│ 1. Key Rationale   │ Explains WHY the correct option is uniquely valid,│
│                    │ citing the authoritative standard (NIST/ISO).     │
├────────────────────┼───────────────────────────────────────────────────┤
│ 2. Distractor      │ Breaks down each incorrect option individually    │
│    Dissections     │ (A, B, C, D) and explains exactly why it fails    │
│                    │ within the context of the scenario.               │
├────────────────────┼───────────────────────────────────────────────────┤
│ 3. Real-World      │ Provides a concrete industry example illustrating │
│    Application     │ the concept in practice.                          │
├────────────────────┼───────────────────────────────────────────────────┤
│ 4. Exam Tip /      │ Highlights key terminology clues or common exam   │
│    Key Takeaway    │ traps to help the learner retain the lesson.      │
└────────────────────┴───────────────────────────────────────────────────┘
```

By adhering to this comprehensive Scenario and Distractor Design Guide, question authors will produce rigorous, realistic, and defensible practice questions that foster deep comprehension and prepare candidates for success on the ISC2 Certified in Cybersecurity examination.
