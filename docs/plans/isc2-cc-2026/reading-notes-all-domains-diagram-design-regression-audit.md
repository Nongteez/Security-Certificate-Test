# SEC-CERT-TEST — Reading Notes Diagram Design Regression Audit
## Independent Visual Forensic Review — All Domains 1–5

**Auditor Roles:** Senior Educational Information Designer, UX/UI Auditor, Cybersecurity Subject Matter Expert, and Frontend Visualization Engineer.  
**Repository:** `D:\_Coding\SEC-CERT-TEST`  
**Audit Target:** All Reading Notes diagrams across ISC2 CC 2026 Domains 1, 2, 3, 4, and 5.  
**Audit Date:** 2026-11-03  
**Audit Mode:** **STRICTLY READ-ONLY AUDIT & FORENSIC INVESTIGATION — ZERO PRODUCTION CODE MODIFIED**  
**Final Status:** **Diagram Design Regression Audit Complete — Awaiting Human Review**

---

## Executive Summary

This independent visual forensic review was initiated following user reports that previous AI-assisted Reading Notes diagram redesigns degraded educational clarity and visual comprehension while optimizing for narrow automated test assertions.

Specifically, the user observed that the **OSI 7-Layer vs. TCP/IP 4-Layer Mapping** diagram had deteriorated from a clear side-by-side architectural mapping into disconnected card grids, forcing readers to read every card and infer the relationships mentally.

Our forensic investigation examined all **28 primary diagrams** registered in `js/core/diagram-generator.js` and referenced across Domains 1–5, plus the special markdown precedence stack. Through git history recovery (`b7412a15`, `d5024844`, `25a896a2`), historical QA reports (`Phase 3D`, `Phase 3E`), and a dedicated headless Chrome CDP capture suite across 5 viewports (1920px, 1440px, 1366px, 1024px, 390px) in Dark and Light themes (196 forensic records), we uncovered the exact root causes of the visual degradation:

1. **The Phase 3D "Anti-Visual" Purge:** In Phase 3D, six core visual diagrams (`threatChain`, `aaaLifecycle`, `controlTimeline`, `bcVsDrScope`, `effectivenessHierarchy`, `iamLifecycle`) had their vector SVG architectures completely ripped out and replaced with vertical walls of dense HTML cards (up to 1,040px tall!) accompanied by verbose disclaimers explaining what the diagram *does not* mean.
2. **The Phase 3E "Inflated Container Threshold" Trap:** In Phase 3E, an artificial "14px label budget" led to nineteen per-diagram container query thresholds being computed and hardcoded into `css/reading.css`. Key thresholds were set to absurdly high values (e.g. `1193px` for OSI/TCP-IP and `1326px` for DMZ Firewall).
   - In a 1210px maximum-width reading article, **a threshold of 1326px is mathematically impossible to reach**, permanently locking `dmzFirewallArchitecture` into mobile fallback mode on every desktop screen in existence!
   - On standard 1366×768 laptops (where the sidebar reduces the reading container to ~953px), **19 out of 24 diagrams in Domains 1–4 are completely disabled**, hiding the desktop vector illustrations and forcing users to look at mobile card stacks.
3. **The OSI/TCP-IP Grid Catastrophe:** On desktop, `osiVsTcpIpModel` renders as an unaligned 4+3 card grid of OSI layers followed by a vertical list of 4 TCP/IP cards, completely severing the visual bridges between OSI 7, 6, 5 $\rightarrow$ TCP/IP Application, and OSI 2, 1 $\rightarrow$ TCP/IP Network Access.

---

## 1. Complete Diagram Inventory (Domains 1–5)

| # | Diagram ID | Domain | Section Anchor | Diagram Tag & Title | Primary Visual Type |
|---|---|:---:|---|---|---|
| 1 | `threatChain` | D1 | `#topic-1-1-security-concepts` (1.1.1) | Threats, Vulnerabilities, Impacts & Controls | Causal Pipeline |
| 2 | `ciaTriad` | D1 | `#topic-1-1-cia-triad` (1.1.2) | The CIA Triad — Three Pillars | 3-Pillar Conceptual Model |
| 3 | `loadBalancer` | D1 | `#topic-1-1-cia-triad` (1.1.2) | High Availability & Load Balancer Topology | Network Topology Flow |
| 4 | `aaaLifecycle` | D1 | `#topic-1-1-identification-authentication` (1.1.3) | AAA Framework & Access Lifecycle | 4-Stage Sequential Process |
| 5 | `privacyFlow` | D1 | `#topic-1-1-privacy-data-protection` (1.1.6) | Privacy Governance & Data Roles Flow | Governance Role Map |
| 6 | `defenseInDepth` | D1 | `#topic-1-1-zero-trust-defense-in-depth` (1.1.7) | Defense in Depth 7-Layer Architecture | Concentric Layered Rings |
| 7 | `riskCalculationFlow` | D1 | `#topic-1-2-quantitative-risk` (1.2.2) | Quantitative Risk Calculation Pipeline | Mathematical Formula Pipeline |
| 8 | `riskLifecycle` | D1 | `#topic-1-2-risk-management-lifecycle` (1.2.3) | 4-Stage Risk Management Lifecycle | Circular Feedback Loop |
| 9 | `documentHierarchy` | D1 | `#topic-1-3-document-hierarchy` (1.3.4) | Security Document Hierarchy Pyramid | 4-Tier Authority Pyramid |
| 10 | `controlTimeline` | D1 | `#topic-1-4-control-types` (1.4.2) | Security Control Functions: Purpose & Timing | 3-Column Temporal Matrix |
| 11 | `dueCareDiligence` | D1 | `#topic-1-5-due-care-diligence` (1.5.2) | Due Diligence $\leftrightarrow$ Due Care Operational Loop | 3-Stage Verification Loop |
| 12 | `ethicsCanons` | D1 | `#topic-1-5-code-of-ethics` (1.5.3) | The 4 Canons of ISC2 Code of Ethics | Stacked Precedence Hierarchy |
| 13 | `grcAlignment` | D2 | `#topic-2-1-grc-foundations` (2.1.1) | Governance, Risk, and Compliance Alignment | 3-Pillar Architecture |
| 14 | `bcVsDrScope` | D2 | `#topic-2-2-bc-vs-dr` (2.2.1) | Scope Relationship: BC vs. DR ($DR \subset BC$) | Concentric Scope Inclusion |
| 15 | `rtoRpoTimeline` | D2 | `#topic-2-2-bc-dr-metrics` (2.2.2) | Disaster Recovery Timeline: RTO & RPO | Temporal Timeline with Boundaries |
| 16 | `effectivenessHierarchy` | D2 | `#topic-2-4-cybersecurity-metrics` (2.4.1) | Cybersecurity Measurement Architecture | 6-Tier Upward Synthesis |
| 17 | `iamLifecycle` | D3 | `#topic-3-1-jml-lifecycle` (3.1.1) | The JML Lifecycle: Joiner, Mover, Leaver | Lifecycle Workflow with Loop |
| 18 | `nistSp80063Framework` | D3 | `#topic-3-1-nist-sp-800-63` (3.1.3) | NIST SP 800-63 Digital Identity Architecture | 3-Facet Multi-Level Framework |
| 19 | `leastPrivilegeVsSod` | D3 | `#topic-3-2-least-privilege-sod` (3.2.1) | Least Privilege vs. Separation of Duties | 2-Column Comparative Matrix |
| 20 | `accessControlModels` | D3 | `#topic-3-2-access-control-models` (3.2.8) | Core Access Control Models Comparison | 4-Quadrant Taxonomy |
| 21 | `osiVsTcpIpModel` | D4 | `#topic-4-1-tcp-ip-mapping` (4.1.3) | OSI 7-Layer vs. TCP/IP 4-Layer Mapping | Many-to-One Architectural Map |
| 22 | `dmzFirewallArchitecture` | D4 | `#topic-4-2-dmz-perimeter` (4.2.3) | Demilitarized Zone (DMZ) Architecture | Perimeter Network Diagram |
| 23 | `defenseInDepthLayers` | D4 | `#topic-4-2-layered-network` (4.2.4) | Layered Network Defense in Depth | 7-Layer Defense Architecture |
| 24 | `cloudSharedResponsibility` | D4 | `#topic-4-3-shared-responsibility` (4.3.2) | Cloud Security Shared Responsibility Matrix | 4-Model Comparative Matrix |
| 25 | `mitreAttackTacticTechnique` | D5 | `#topic-5-2-mitre-attack` (5.2.9) | MITRE ATT&CK: Tactics, Techniques & Procedures | 3-Column Hierarchy Taxonomy |
| 26 | `irpLifecycle` | D5 | `#topic-5-3-irp-lifecycle-phases` (5.3.3) | 6-Phase Incident Response Lifecycle | Circular 6-Phase Loop |
| 27 | `assetLifecycleAndEol` | D5 | `#topic-5-4-asset-lifecycle-management` (5.4.1) | Asset Lifecycle & EOL Compensating Controls | Sequential Flow with Shield Branch |
| 28 | `securityTestingMatrix` | D5 | `#topic-5-5-security-testing-matrix` (5.5.4) | Security Testing Matrix across the SDLC | 4-Stage SDLC Comparative Matrix |
| 29 | `reading-precedence-stack`| D1 | `#topic-1-5-code-of-ethics` (1.5.3) | Code of Ethics Priority Stack (Markdown component)| Pure CSS Tiered Stack |

---

## 2. In-Depth Case Study: OSI 7-Layer vs. TCP/IP 4-Layer Mapping (`osiVsTcpIpModel`)

### 2.1 What This Diagram Must Teach
The ISC2 CC syllabus requires candidates to understand the architectural correspondence between the theoretical OSI 7-Layer Reference Model and the practical TCP/IP 4-Layer Protocol Suite:
- **Many-to-one mapping:**
  - OSI Layer 7 (Application), Layer 6 (Presentation), and Layer 5 (Session) map directly into the single **TCP/IP Application Layer (Layer 4)**.
  - OSI Layer 4 (Transport) maps directly to the **TCP/IP Transport Layer (Layer 3)**.
  - OSI Layer 3 (Network) maps directly to the **TCP/IP Internet Layer (Layer 2)**.
  - OSI Layer 2 (Data Link) and Layer 1 (Physical) map directly into the single **TCP/IP Network Access / Link Layer (Layer 1)**.
- **The Core Educational Goal:** A learner looking at the diagram for **3 seconds** must immediately grasp the vertical grouping brackets showing 3-to-1 at the top and 2-to-1 at the bottom.

### 2.2 The Current Degradation
1. **Broken Container Query Threshold:** `css/reading.css` line 3759 sets `@container reading-diagram (min-width: 1193px)`. Because the reading container on 1920px desktops with sidebar is $\approx 1210\text{px}$ minus card padding, it drops below `1193px`.
2. **Permanent Mobile Fallback:** On both 1920px desktop and 1366px laptop, the SVG is completely hidden (`display: none !important`), and the mobile HTML stack renders.
3. **The Disconnected Card Grid:** The mobile markup displays:
   - A 4+3 CSS Grid of OSI layer cards (`.reading-semantic-grid`).
   - Followed vertically by a separate list of 4 TCP/IP cards (`.reading-mob-stack-list`).
   - **Result:** There is zero physical connection, zero alignment, and zero visual grouping. The reader sees 11 unrelated cards scattered across 1,004px of vertical screen height.

```
CURRENT DEGRADED STATE (What the user actually sees):
+-------------------------------------------------------+
|  [OSI 7 App]   [OSI 6 Pres]   [OSI 5 Sess]  [OSI 4 Tran] |  <- 4+3 Grid
|  [OSI 3 Net]   [OSI 2 Link]   [OSI 1 Phys]              |     No mapping!
+-------------------------------------------------------+
|  [TCP/IP L4 Application]                                |  <- Disconnected
|  [TCP/IP L3 Transport]                                  |     vertical list
|  [TCP/IP L2 Internet]                                   |     at bottom!
|  [TCP/IP L1 Network Access]                             |
+-------------------------------------------------------+
```

### 2.3 The Recommended Replacement Architecture
A high-clarity side-by-side mapping where vertical heights directly represent grouping:

```
RECOMMENDED ACADEMIC REPLACEMENT (Immediate 3-second comprehension):
+--------------------------------+       +--------------------------------+
|       OSI 7-LAYER MODEL        |       |      TCP/IP 4-LAYER SUITE      |
+--------------------------------+       +--------------------------------+
| 7. Application (HTTP, DNS)     | ---\  |                                |
+--------------------------------+     > | L4. Application Layer          |
| 6. Presentation (TLS, JSON)    | ---/  |     (รวม L7 + L6 + L5 เข้าด้วยกัน) |
+--------------------------------+    /  |     Protocols: HTTP, DNS, SSH  |
| 5. Session (RPC, Sockets)      | --/   |     PDU: Data / Messages       |
+--------------------------------+       +--------------------------------+
| 4. Transport (TCP, UDP, Ports) | ----> | L3. Transport Layer (Host-Host)|
+--------------------------------+       +--------------------------------+
| 3. Network (IP, ICMP, Routers) | ----> | L2. Internet Layer (Routing)   |
+--------------------------------+       +--------------------------------+
| 2. Data Link (Ethernet, MAC)   | ---\  | L1. Network Access / Link      |
+--------------------------------+     > |     (รวม L2 + L1 เข้าด้วยกัน)      |
| 1. Physical (Cables, Bits)     | ---/  |     Hardware, Frames, Bits     |
+--------------------------------+       +--------------------------------+
```

---

## 3. The 6 "Purged" Diagrams — Forensic Historical Analysis

These 6 diagrams represent the most severe regressions in the repository. In Phase 3D, their vector graphics were completely deleted and replaced with dense HTML card lists.

### 3.1 `threatChain` (Domain 1, Section 1.1.1)
- **Intended Relationship:** Sequential causal pipeline showing how threat actors exploit vulnerabilities in valuable assets to cause impact, and how safeguards/controls intervene to protect the asset and lower risk.
- **Historical Design (`b7412a15`):** Clean horizontal vector pipeline (`viewBox="0 0 760 150"`): `[Asset] -> [Vulnerability] -> [Threat Actor] -> [Impact]`, with a green `[Safeguards & Controls]` box looping protective dashed arrows back to `[Asset]`. Highly effective, readable in 2 seconds.
- **Current Degraded Design:** Pure HTML cards, 656px tall on 1920px desktop. Controls are detached into a separate band. Long text paragraphs replace visual arrows.
- **Verdict:** **RESTORE** (from `b7412a15`).

### 3.2 `aaaLifecycle` (Domain 1, Section 1.1.3)
- **Intended Relationship:** The 4 pillars of access control: Identification (Claim identity) $\rightarrow$ Authentication (Prove identity) $\rightarrow$ Authorization (Verify permissions) $\rightarrow$ Accountability/Auditing (Record actions in logs).
- **Historical Design (`b7412a15`):** 4 horizontal sequential blocks (`viewBox="0 0 760 140"`) with step numbers 01 to 04, transition arrows, and Thai explanations.
- **Current Degraded Design:** 781px tall HTML text card block with a long disclaimer: *"Accounting records relevant events throughout... it does not wait..."*. Readers cannot see the access verification flow at a glance.
- **Verdict:** **RESTORE** (from `b7412a15`).

### 3.3 `controlTimeline` (Domain 1, Section 1.4.2)
- **Intended Relationship:** Temporal categorization of security controls (Before Incident: Deterrent, Preventive; During Incident: Detective; After Incident: Corrective, Recovery).
- **Historical Design (Task 119 / `25a896a2`):** Symmetrical 3-column timeline (`viewBox="0 0 850 155"`): Column 1 BEFORE INCIDENT, Column 2 DURING INCIDENT, Column 3 AFTER INCIDENT, with color badges and overlapping multi-role notes.
- **Current Degraded Design:** 945px tall vertical stack of HTML cards with lengthy textual disclaimers.
- **Verdict:** **RESTORE** (from Task 119 / `25a896a2`).

### 3.4 `bcVsDrScope` (Domain 2, Section 2.2.1)
- **Intended Relationship:** Concentric scope inclusion: Disaster Recovery (IT, data, servers) is a specialized technical subset of Business Continuity (people, facilities, operations, crisis communications, brand): $DR \subset BC$.
- **Historical Design (Task 128 / `d5024844`):** Concentric nested SVG box (`viewBox="0 0 840 310"`). Outer box: Business Continuity; Inner nested box: Disaster Recovery, with explicit label `DR ⊂ BC`.
- **Current Degraded Design:** Deleted the concentric box; replaced with two disconnected side-by-side text cards and a disclaimer: *"This comparison is not a universal subset theorem"*.
- **Verdict:** **RESTORE** (from Task 128 / `d5024844`).

### 3.5 `effectivenessHierarchy` (Domain 2, Section 2.4.1)
- **Intended Relationship:** Upward synthesis of cybersecurity measurement: raw Metrics aggregate into operational KPIs/KRIs, visualize on Dashboards/Scorecards, and synthesize into strategic Executive Reports.
- **Historical Design (Task 128 / `d5024844`):** 6-tier upward architectural pyramid/ladder (`viewBox="0 0 840 405"`).
- **Current Degraded Design:** 1,040px tall flat list of HTML cards with disclaimer: *"A local study aid, not an official ISC2 six-step procedure"*.
- **Verdict:** **RESTORE** (from Task 128 / `d5024844`).

### 3.6 `iamLifecycle` (Domain 3, Section 3.1.1)
- **Intended Relationship:** The Joiner-Mover-Leaver (JML) identity lifecycle: Joiner (Provisioning/PoLP) $\rightarrow$ Mover (Role transition/Access re-evaluation/Prevent privilege creep) $\rightarrow$ Leaver (Immediate deprovisioning/Revocation), with overarching Continuous Access Review loop.
- **Historical Design (Task 131 / `d5024844`):** Horizontal 3-card vector flow (`viewBox="0 0 840 220"`) with JML transition arrows and a continuous governance review ribbon.
- **Current Degraded Design:** 695px tall list of HTML cards with disclaimer: *"An identity can go from Joiner to Leaver without a Mover event..."*.
- **Verdict:** **RESTORE** (from Task 131 / `d5024844`).

---

## 4. The 13 Laptop / 1366px Threshold Failures

On a 1366×768 laptop screen (container width $\approx 953\text{px}$ with sidebar expanded), Phase 3E container query thresholds hide the desktop SVG and display mobile card stacks for the following 13 diagrams:

| Diagram Key | Domain | Current Threshold | Computed Container Width @ 1366px | Resulting Mode @ 1366px | Impact on Learner |
|---|:---:|:---:|:---:|:---:|---|
| `defenseInDepth` | D1 | `1051px` | 953px | `mobile-html-stack` | Concentric rings hidden; flat 7-card list shown. |
| `riskLifecycle` | D1 | `1082px` | 953px | `mobile-html-stack` | Circular feedback loop hidden; 4-card list shown. |
| `documentHierarchy` | D1 | `1111px` | 953px | `mobile-html-stack` | Symmetrical pyramid hidden; 4-card list shown. |
| `dueCareDiligence` | D1 | `920px` | 953px | `mobile-html-stack` | Close boundary; flips to mobile on small sidebar drag. |
| `ethicsCanons` | D1 | `1001px` | 953px | `mobile-html-stack` | Priority bars hidden; mobile stack shown. |
| `grcAlignment` | D2 | `1007px` | 953px | `mobile-html-stack` | 3 GRC pillars hidden; mobile stack shown. |
| `rtoRpoTimeline` | D2 | `1085px` | 953px | `mobile-html-stack` | RTO/RPO timeline axis hidden; mobile stack shown. |
| `nistSp80063Framework` | D3 | `1136px` | 953px | `mobile-html-stack` | 3-column framework hidden; mobile stack shown. |
| `leastPrivilegeVsSod` | D3 | `1136px` | 953px | `mobile-html-stack` | Side-by-side PoLP vs SoD hidden; mobile stack shown. |
| `accessControlModels` | D3 | `1085px` | 953px | `mobile-html-stack` | 4-quadrant taxonomy hidden; mobile stack shown. |
| `dmzFirewallArchitecture`| D4 | `1326px` | 953px (and 1210px max!) | `mobile-html-stack` | Perimeter network hidden **on all screens in existence**. |
| `defenseInDepthLayers` | D4 | `1085px` | 953px | `mobile-html-stack` | Layered network architecture hidden; mobile stack shown. |
| `cloudSharedResponsibility`| D4 | `1136px` | 953px | `mobile-html-stack` | 4-cloud matrix hidden; mobile stack shown. |

**The Remediation Solution:** Lower the container query breakpoint across all these diagrams to a uniform `@container reading-diagram (min-width: 880px)`, exactly as implemented in Domain 5. This allows desktop SVGs to render crisply on all desktop and laptop monitors ($\ge 1024\text{px}$ viewport width) while cleanly switching to mobile stacks only on true tablet/phone screens.

---

## 5. Comprehensive Audit Scorecard & Classification Register

Every primary diagram was evaluated across 7 dimensions (Academic Accuracy, Relationship Clarity, Visual Hierarchy, Typography, Space Efficiency, Responsiveness, Accessibility).

| # | Diagram Key | Domain | Current 1920px Mode | Current 1366px Mode | Verdict | Priority | Recommended Action |
|---|---|:---:|---|---|:---:|:---:|---|
| 1 | `threatChain` | D1 | `none-visible` | `none-visible` | **RESTORE** | **P1** | Restore horizontal SVG pipeline from `b7412a15`; eliminate 656px card wall. |
| 2 | `ciaTriad` | D1 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current 3-pillar vector design. |
| 3 | `loadBalancer` | D1 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current network topology illustration. |
| 4 | `aaaLifecycle` | D1 | `none-visible` | `none-visible` | **RESTORE** | **P1** | Restore 4-stage sequential vector pipeline from `b7412a15`. |
| 5 | `privacyFlow` | D1 | `desktop-svg` | `desktop-svg` | **KEEP** | **P3** | Maintain current 4-role privacy governance flow. |
| 6 | `defenseInDepth` | D1 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1051px to 880px to enable SVG on laptops. |
| 7 | `riskCalculationFlow` | D1 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current formula pipeline ($AV \times EF = SLE$, etc.). |
| 8 | `riskLifecycle` | D1 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1082px to 880px to enable SVG on laptops. |
| 9 | `documentHierarchy` | D1 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1111px to 880px to enable Task 121 pyramid on laptops. |
| 10 | `controlTimeline` | D1 | `none-visible` | `none-visible` | **RESTORE** | **P1** | Restore 3-column Before/During/After timeline from Task 119. |
| 11 | `dueCareDiligence` | D1 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 920px to 880px. |
| 12 | `ethicsCanons` | D1 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1001px to 880px. |
| 13 | `grcAlignment` | D2 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1007px to 880px. |
| 14 | `bcVsDrScope` | D2 | `none-visible` | `none-visible` | **RESTORE** | **P1** | Restore concentric nested box ($DR \subset BC$) from Task 128. |
| 15 | `rtoRpoTimeline` | D2 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1085px to 880px. |
| 16 | `effectivenessHierarchy` | D2 | `none-visible` | `none-visible` | **RESTORE** | **P1** | Restore 6-tier upward measurement framework from Task 128. |
| 17 | `iamLifecycle` | D3 | `none-visible` | `none-visible` | **RESTORE** | **P1** | Restore Joiner-Mover-Leaver horizontal vector flow from Task 131. |
| 18 | `nistSp80063Framework` | D3 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P3** | Lower threshold from 1136px to 880px. |
| 19 | `leastPrivilegeVsSod` | D3 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P2** | Lower threshold from 1136px to 880px. |
| 20 | `accessControlModels` | D3 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P3** | Lower threshold from 1085px to 880px. |
| 21 | `osiVsTcpIpModel` | D4 | `mobile-html-stack` | `mobile-html-stack` | **REDESIGN** | **P1** | **Redesign side-by-side mapping with aligned layer spans.** |
| 22 | `dmzFirewallArchitecture`| D4 | `mobile-html-stack` | `mobile-html-stack` | **RESTORE & FIX**| **P1** | Restore perimeter SVG and lower impossible 1326px threshold to 880px. |
| 23 | `defenseInDepthLayers` | D4 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P3** | Lower threshold from 1085px to 880px. |
| 24 | `cloudSharedResponsibility`| D4 | `desktop-svg` | `mobile-html-stack` | **FIX MINOR** | **P3** | Lower threshold from 1136px to 880px. |
| 25 | `mitreAttackTacticTechnique`| D5 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current 3-column TTP taxonomy. |
| 26 | `irpLifecycle` | D5 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current 6-phase circular loop. |
| 27 | `assetLifecycleAndEol` | D5 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current 6-stage flow with compensating shield. |
| 28 | `securityTestingMatrix` | D5 | `desktop-svg` | `desktop-svg` | **KEEP** | — | Maintain current 4-stage SDLC testing matrix. |
| 29 | `reading-precedence-stack`| D1 | `markdown-html` | `markdown-html` | **KEEP** | — | Maintain current CSS precedence stack in markdown. |

---

## 6. Summary Tally & Priority Breakdown

### Classification Counts
- **KEEP:** **9** (31.0%)
- **RESTORE:** **6** (20.7%)
- **REDESIGN:** **1** (3.4%) — `osiVsTcpIpModel`
- **FIX MINOR:** **13** (44.8%) — Container query threshold normalization
- **SIMPLIFY:** **0**
- **INSUFFICIENT EVIDENCE:** **0**

### Priority Counts
- **P0 (Academically Incorrect):** **0**
- **P1 (Critical Educational Regression):** **7** (`osiVsTcpIpModel`, `dmzFirewallArchitecture`, `threatChain`, `aaaLifecycle`, `controlTimeline`, `bcVsDrScope`, `iamLifecycle`)
- **P2 (Significant Laptop Disablement):** **8** (`defenseInDepth`, `riskLifecycle`, `documentHierarchy`, `dueCareDiligence`, `ethicsCanons`, `grcAlignment`, `rtoRpoTimeline`, `leastPrivilegeVsSod`)
- **P3 (Minor Threshold Normalization):** **5** (`privacyFlow`, `nistSp80063Framework`, `accessControlModels`, `defenseInDepthLayers`, `cloudSharedResponsibility`)

---

## 7. Recommended Safe Remediation Roadmap (For Future Human Approval)

If the user approves the remediation, work should proceed in three distinct, single-flow batches:

### Batch 1: Immediate Container Query Normalization (Low-Risk CSS-Only Fix)
- **Files:** `css/reading.css`
- **Action:** Replace individual inflated thresholds (`1326px`, `1193px`, `1136px`, etc.) with the unified `@container reading-diagram (min-width: 880px)` rule.
- **Immediate Benefit:** Immediately restores desktop SVGs on laptops for 13 diagrams without touching SVG markup. Immediately unblocks `dmzFirewallArchitecture`.

### Batch 2: Restoration of the 6 Purged Visual Diagrams
- **Files:** `js/core/diagram-generator.js`
- **Action:** Restore pure SVG vector templates from git history (`b7412a15`, `d5024844`):
  1. `threatChain` (Domain 1)
  2. `aaaLifecycle` (Domain 1)
  3. `controlTimeline` (Domain 1)
  4. `bcVsDrScope` (Domain 2)
  5. `effectivenessHierarchy` (Domain 2)
  6. `iamLifecycle` (Domain 3)
- **Benefit:** Eliminates bloated 600px–1040px text card walls; restores visual comprehension in 3 seconds.

### Batch 3: Complete Redesign of OSI vs. TCP/IP Architecture Mapping (`osiVsTcpIpModel`)
- **Files:** `js/core/diagram-generator.js`, `css/reading.css`
- **Action:**
  - Build symmetrical desktop SVG with OSI 7 layers on left and TCP/IP 4 layers on right.
  - Span TCP/IP Application across OSI 7, 6, 5 with visual grouping brackets.
  - Span TCP/IP Network Access across OSI 2, 1 with visual grouping brackets.
  - Align OSI 4 directly to TCP/IP Transport and OSI 3 to TCP/IP Internet.
  - Build mobile card stack that groups layers into 4 composite cards rather than a disconnected 7-card grid.

---

## 8. Real Chrome CDP Forensic Evidence References

All 196 focused screenshot captures and manifest are saved under:
[`artifacts/qa/reading-notes-diagram-design-audit/`](file:///D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-diagram-design-audit/)
- `forensics-manifest.json` (196 complete records with element bounding boxes, rendered modes, and file paths)
- Focused screenshot evidence for every diagram at 1920px (Dark/Light), 1440px (Dark), 1366px (Dark/Light), 1024px (Dark), and 390px (Dark).

---

## 9. Items Requiring Human Design Review & Decision

1. **OSI vs. TCP/IP Redesign Direction:** Confirm approval of the proposed side-by-side grouped span architecture (Option A: vector brackets vs. Option B: color-matched multi-row bands).
2. **Restoration of Concentric BC vs DR Scope ($DR \subset BC$):** Confirm that the concentric nested box design from Task 128 should be restored over the current separated text cards.
3. **Container Query Threshold Normalization:** Confirm unifying desktop SVG activation at container width $\ge 880\text{px}$ across all domains, eliminating the disparate 1000px–1326px thresholds.
4. **Disclaimers vs. Diagrams:** Confirm that long semantic caveats ("an incident need not pass through every step") should be kept as concise 1-line subtitles rather than replacing diagrams with text walls.

---

**FINAL AUDIT STATUS:**  
**Diagram Design Regression Audit Complete — Awaiting Human Review**

