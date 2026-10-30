# Domain 1 Reading Notes: Semantic Presentation Audit & Transformation Plan

**Task:** Task 95 — ISC2 CC 2026 Reading Notes: Full Domain 1 Semantic & Educational Presentation Redesign  
**Date:** 2026-10-29  
**Status:** Audit & Transformation Plan Complete  

---

## 1. Executive Summary & Defect Inventory

The Task 94 baseline successfully integrated the consolidated Markdown of Domain 1 (`D1 sum.md` and `Domain 1.md`), but a comprehensive review of the rendered reading interface revealed significant semantic and presentation deficiencies that degrade readability and instructional value:

| Defect Class | Location in Content | Observable Problem | Root Cause | Target Presentation in Task 95 |
|---|---|---|---|---|
| **Case A: CIA Triad** | Section 1.1.2 | Primitive ASCII triangle rendered inside a generic monospace code fence (` ```text `). | Content author used ASCII art without visual presentation layer. | Theme-adaptive, accessible geometric SVG conceptual diagram with clear C-I-A pillars, subtle iconography, and structured goals/controls/keywords. |
| **Case B: Defense in Depth** | Section 1.1.7 | Literal ` ```text ` and ` ``` ` fences leaked into rendered prose; 7 layers rendered as plain text arrows. | Markdown list parser absorbed 2-space indented code fence into an `<li>` continuation, bypassing fence block parsing. | Layered security architecture SVG illustration representing 7 complementary, non-chronological protective rings; zero leaked syntax. |
| **Case C: Risk Calculations** | Section 1.2.2 | Raw LaTeX commands (`\to`, `\mathbf`, `\times`, `\text`) appear literally; formula indented in list; primitive ASCII flow. | Parser only wrapped raw text in `<span class="reading-math">` without rendering LaTeX equations; calculation flow was ASCII art. | True KaTeX math rendering with robust offline semantic typesetter fallback; verified calculations; interactive visual calculation pipeline SVG. |
| **Case D: Review Scenarios** | Section 1.5.4 | 8 complete Scenario–Question–Answer clusters flattened into a continuous 24-item list. | List parser treated numbered and bulleted items as flat sequence without semantic grouping. | Structured educational Scenario Cards with explicit Scenario Context, Exam Question, and Answer & Reasoning (open by default). |
| **ASCII Text Diagrams (8 additional)** | Sections 1.1.1, 1.1.2, 1.1.3, 1.1.6, 1.2.3, 1.3.4, 1.4.2, 1.5.2, 1.5.3 | 8 additional educational processes and architectures trapped inside monospace code boxes. | Raw ASCII text in source Markdown. | 8 clean, accessible, responsive SVG diagrams accurately depicting workflows, pyramids, and lifecycles. |
| **Topic Anchor Reconciliation** | Global Domain 1 | 24 topics exist in content and `domain-1.js`, but one test comment mentioned 23 topics. | Arithmetic typo in Task 94 test comment ($7+5+5+3+4 = 24$, mistakenly written as 23). | Explicit verification and reconciliation of all 24 topic anchors across content, data module, tests, and sidebar. |

---

## 2. Complete Semantic Content Inventory (Objectives 1.1–1.5)

### Objective 1.1: Understand Cybersecurity Concepts (7 Topics)

| Topic | Primary Content Role | Current Artifacts | Identified Presentation Needs |
|---|---|---|---|
| **1.1.1 Core Concepts & Assets** | Definitions, Threat Chain | Monospace block #1 | Threat-Vulnerability-Impact-Control Relationship Pipeline SVG. Clear definition cards for Asset, Threat Actor, Vulnerability, Impact, Safeguard. |
| **1.1.2 The CIA Triad** | Fundamental Principles, Comparisons, Architecture | Monospace block #2 (ASCII Triad), Monospace block #3 (Load Balancer) | **Case A:** CIA Triad Conceptual SVG; structured C, I, A sections; High Availability / Load Balancing Architecture SVG; Hashing vs. Encryption comparison table. |
| **1.1.3 Identification & Authentication (AAA)** | Process Flow, Security Definitions | Monospace block #4 (ASCII AAA) | AAA Identity Lifecycle Process Flow SVG (Who are you? $\to$ Prove it! $\to$ What can you do? $\to$ What did you do?). |
| **1.1.4 Multi-Factor Authentication (MFA)** | Categorization, Exam Rules | Unordered list | 4 Factor Cards (Know, Have, Are, Somewhere); explicit "2 or more different categories" rule callout. |
| **1.1.5 Authorization & Accounting** | Access Control Principles, Accountability | Paragraphs & lists | Least Privilege, Separation of Duties (SoD), Need to Know, Non-repudiation, and Audit Trail callouts. |
| **1.1.6 Privacy & Data Protection** | Legal Roles, Lifecycle | Monospace block #5 (ASCII Data Flow) | Privacy Governance & Data Roles Flow SVG (Data Subject $\to$ Controller $\to$ Processor $\to$ Retention). |
| **1.1.7 Zero Trust & Defense in Depth** | Architecture Philosophy, Layered Security | Monospace block #6 (ASCII 7 layers) | **Case B:** 7-Layer Defense in Depth Concentric/Stacked Security Architecture SVG; Zero Trust vs. Defense in Depth comparison matrix. |

---

### Objective 1.2: Understand Risk Management Concepts (5 Topics)

| Topic | Primary Content Role | Current Artifacts | Identified Presentation Needs |
|---|---|---|---|
| **1.2.1 Risk Definition & Core Components** | Quantitative Principles, Formula | Unrendered LaTeX `$Risk \approx Likelihood \times Impact$` | Properly rendered math formula; Risk Level = Likelihood $\times$ Impact; Asset/Threat/Vulnerability relationship. |
| **1.2.2 Quantitative Risk Analysis & Formulas** | Mathematical Formulas, Worked Calculations, Decision Rules | Leaking LaTeX (`\mathbf`, `\times`, `\to`, `\text`); Monospace block #7 | **Case C:** KaTeX / Semantic typeset equations for $SLE = AV \times EF$ and $ALE = SLE \times ARO$; worked calculation cards (\$10,000 server, \$5,000 SLE, \$10,000 & \$1,000 ALE); Quantitative Risk Pipeline SVG; ARO frequency lookup table; Cost-Benefit decision rule callout. |
| **1.2.3 Risk Management Lifecycle** | Continuous Operational Process | Monospace block #8 (ASCII 4 steps) | 4-Stage Risk Lifecycle Cyclic SVG (Identify $\to$ Assess $\to$ Treat $\to$ Monitor). |
| **1.2.4 Risk Treatment: The 4 Responses** | Decision Matrix, Strategic Framework | Markdown table | 4 Risk Treatment Matrix (Accept, Avoid, Mitigate, Transfer/Share) with actions, examples, and exam trigger keywords. |
| **1.2.5 Inherent vs. Residual Risk & Appetite** | Concept Distinctions | Bulleted list | Inherent Risk $\to$ Controls Applied $\to$ Residual Risk visual equation; Risk Appetite vs. Risk Tolerance distinction card. |

---

### Objective 1.3: Understand Governance Concepts (5 Topics)

| Topic | Primary Content Role | Current Artifacts | Identified Presentation Needs |
|---|---|---|---|
| **1.3.1 Security Governance Fundamentals** | Organizational Hierarchy, Oversight | Paragraphs & lists | Senior Executive & Board of Directors oversight; strategic business alignment. |
| **1.3.2 Laws and Regulations** | Legal Taxonomy, Regulatory Frameworks | Paragraphs & table | 4 Legal Types (Statutory, Regulatory, Common, Contractual); Key Compliance Frameworks (GDPR, HIPAA, PCI DSS, SOX, FISMA). |
| **1.3.3 Security Frameworks** | Industry Standards, Structure | Lists | NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover); ISO/IEC 27001 (ISMS); CIS Controls. |
| **1.3.4 Security Document Hierarchy** | Policy Framework, Rule Types | Monospace block #9 (ASCII Pyramid) | Security Document Hierarchy Pyramid SVG (Policy = WHAT $\to$ Standard = MANDATORY SPECS $\to$ Procedure = HOW $\to$ Guideline = RECOMMENDED). |
| **1.3.5 Governance, Risk, and Compliance (GRC)** | Integrated Framework | Paragraphs | GRC Triad interconnection (Governance, Risk, Compliance) and operational coordination. |

---

### Objective 1.4: Understand Cybersecurity Controls (3 Topics)

| Topic | Primary Content Role | Current Artifacts | Identified Presentation Needs |
|---|---|---|---|
| **1.4.1 Security Control Categories** | Taxonomy (4 Categories) | Markdown table | Technical, Managerial, Operational, Physical control cards with clear functional examples. |
| **1.4.2 Security Control Types / Functions** | Chronological & Functional Taxonomy | Monospace block #10 (ASCII Timeline) | Security Control Function Timeline SVG (Before $\to$ During $\to$ After Incident: Deterrent $\to$ Preventive $\to$ Detective $\to$ Corrective/Recovery). |
| **1.4.3 Contextual & Overlapping Controls** | Complex Real-World Analysis | Paragraphs & list | Multidimensional CCTV case study showing overlapping categories and functions. |

---

### Objective 1.5: Maintain Professional and Ethical Conduct (4 Topics)

| Topic | Primary Content Role | Current Artifacts | Identified Presentation Needs |
|---|---|---|---|
| **1.5.1 Professional Code of Conduct** | Boundaries, Escalation Protocols | Lists & callout | Authority Boundaries and Incident Escalation Protocols (Report to authority; never retaliate). |
| **1.5.2 Due Care vs. Due Diligence** | Operational Distinction, Cycle | Monospace block #11 (ASCII Due Care/Diligence) | Due Diligence (CHECK) $\leftrightarrow$ Due Care (DO) Operational Cycle SVG; Prudent person standard vs. formal investigation. |
| **1.5.3 ISC2 Code of Ethics (4 Canons)** | Professional Obligation, Priority Rules | Monospace block #12 (ASCII Canons) | 4 Canons Priority Flow SVG (Society $\to$ Act Honorably $\to$ Principals $\to$ Profession) with strict precedence rules and S-A-P-P mnemonic. |
| **1.5.4 Concept Distinctions, Scenarios & Quick Review** | Synthesis, Practice Scenarios, Cheat Sheet | Monospace / Flattened List | **Case D:** 12 Concept Distinctions Matrix; 8 Structured Scenario Cards (Context + Question + Answer/Reasoning); Exam Keyword Cheat Sheet. |

---

## 3. Mathematical Calculations & Numerical Verification

All quantitative risk calculations in Section 1.2.2 have been recalculated and verified for complete mathematical accuracy:

1. **Single Loss Expectancy ($SLE$):**
   - Formula: $SLE = Asset\ Value\ (AV) \times Exposure\ Factor\ (EF)$
   - Source Example: Database Server $AV = \$10,000$, Flood damage estimate $EF = 50\% = 0.50$
   - Calculation: $SLE = \$10,000 \times 0.50 = \$5,000$ per incident. (Verified: Correct)

2. **Annualized Rate of Occurrence ($ARO$):**
   - Twice per year: $ARO = 2$
   - Once per year: $ARO = 1$
   - Once every 2 years: $ARO = 1 / 2 = 0.5$
   - Once every 5 years: $ARO = 1 / 5 = 0.2$
   - Once every 10 years: $ARO = 1 / 10 = 0.1$
   - (Verified: Correct)

3. **Annualized Loss Expectancy ($ALE$):**
   - Formula: $ALE = Single\ Loss\ Expectancy\ (SLE) \times Annualized\ Rate\ of\ Occurrence\ (ARO)$
   - Scenario A ($ARO = 2$): $ALE = \$5,000 \times 2 = \$10,000$ per year. (Verified: Correct)
   - Scenario B ($ARO = 0.2$): $ALE = \$5,000 \times 0.2 = \$1,000$ per year. (Verified: Correct)

4. **Cost-Benefit Safeguard Rule:**
   - Maximum Annual Safeguard Cost $\le ALE$.
   - Example: If flood mitigation system costs $\$3,000$/year, it is financially justified when $ALE = \$10,000$ (net benefit $\$7,000$), but NOT justified when $ALE = \$1,000$ (net loss $\$2,000$).

---

## 4. The 8 Review Scenarios: Verified Mapping

The 8 review scenarios in Section 1.5.4 are verified against authoritative ISC2 CC exam concepts:

| # | Scenario Context | Exam Question | Verified Answer & Core Reasoning |
|---|---|---|---|
| **1** | Attacker altered salary numbers in the database without triggering any system alerts. | Which CIA Triad pillar is most severely impacted? | **Integrity** — Data was unauthorizedly modified and falsified; confidentiality may remain unbreached, and availability was not disrupted. |
| **2** | Employee entered password successfully, but clicking financial folder returns "Access Denied". | Which access control stage is responsible for this denial? | **Authorization** — Authentication (identity verification) succeeded; Authorization (permission check) properly blocked access. |
| **3** | Organization purchases a \$50M Cyber Insurance policy to cover data breach losses. | Which risk management treatment strategy is being executed? | **Risk Transfer (Sharing)** — Shifting financial liability to a third party (insurer) without eliminating the underlying operational risk. |
| **4** | Security officer uses a vulnerability scanner to audit all company servers and draft a risk report. | Does this action demonstrate Due Care or Due Diligence? | **Due Diligence** — Systematic investigation, assessment, and risk evaluation (CHECK). |
| **5** | Security team immediately downloads and installs critical patches after vulnerability is confirmed. | Does this action demonstrate Due Care or Due Diligence? | **Due Care** — Taking immediate, reasonable, prudent corrective action to safeguard assets (DO). |
| **6** | Executive signs off on not purchasing a \$1,000,000 DDoS appliance because annual loss ($ALE$) is only \$50,000. | Which risk management treatment strategy does this represent? | **Risk Acceptance** — Formally accepting risk when safeguard cost significantly exceeds expected annual loss. |
| **7** | Organization requires MFA and device health checks even when employee is physically connected via LAN in headquarters. | Which modern cybersecurity architecture does this follow? | **Zero Trust Architecture** — "Never Trust, Always Verify"; physical location inside the network does not grant implied trust. |
| **8** | Large prominent warning sign: "Restricted Area. 24/7 CCTV Recording. Trespassers will be prosecuted." | What type of security control does this sign function as? | **Deterrent Control** — Dissuading and discouraging potential adversaries from attempting unauthorized entry. |

---

## 5. Topic Count Reconciliation

- **Audited Count:** Exactly **24** topics are defined in `content/isc2-cc-2026/reading/domain-1.js` across the 5 objectives:
  - Objective 1.1: 7 topics (`topic-1-1-core-concepts` to `topic-1-1-zero-trust-defense-in-depth`)
  - Objective 1.2: 5 topics (`topic-1-2-risk-components` to `topic-1-2-inherent-residual-risk`)
  - Objective 1.3: 5 topics (`topic-1-3-governance-fundamentals` to `topic-1-3-grc`)
  - Objective 1.4: 3 topics (`topic-1-4-control-categories` to `topic-1-4-overlapping-controls`)
  - Objective 1.5: 4 topics (`topic-1-5-code-of-conduct` to `topic-1-5-distinctions-scenarios`)
  - Total: $7 + 5 + 5 + 3 + 4 = 24$.
- **Discrepancy Source:** A comment in the initial Task 94 verification suite mistakenly asserted `24 - 1 = 23`.
- **Reconciliation Resolution:** The actual authoritative structure has **24** distinct topics, all with corresponding anchors in `domain-1.md` and active navigation links in `screen-reading.js`. All documentation and tests will strictly reflect the verified count of **24**.

