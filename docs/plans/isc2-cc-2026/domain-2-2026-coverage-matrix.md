# ISC2 CC 2026 — Domain 2 Official Exam Outline & Source Coverage Matrix (Refined)

- **Official Outline Identifier:** `isc2-cc-2026-09-01` (Effective September 1, 2026)
- **Domain:** Domain 2 — Security Governance (`17.3%` Exam Weight; `4` Official Objectives `2.1`–`2.4`)
- **Official Source URL:** https://www.isc2.org/certifications/cc/cc-certification-exam-outline
- **Refined Curriculum Allocation:** **8 Lessons / 58 Bilingual Slides** (`13 + 15 + 15 + 15 = 58` slides)

---

## 1. Official 2026 Scope vs. Legacy Outline Evolution

| Official 2026 Attribute | Verified 2026 Specification (`isc2-cc-2026-09-01`) | Legacy Outline Comparison | Curriculum Impact |
|---|---|---|---|
| **Domain Title** | **Domain 2: Security Governance** | Formerly *Incident Response, Business Continuity (BC) and Disaster Recovery (DR) Concepts* | Incident Response (`3.1`) moved to Domain 3 (`Security Operations`). Domain 2 is now dedicated to **Security Governance** across GRC (`2.1`), Redundancy/BC/DR (`2.2`), Awareness/Culture/Social Engineering/Passwords (`2.3`), and Measuring Effectiveness (`2.4`). |
| **Exam Weight** | **`17.3%`** | Formerly `10%` | Increased exam weight (`+7.3%`) requiring practical governance decision-making, risk register mastery, BC/DR objective calculations (`RTO`/`RPO`), human-factor defense, and metric/KPI/KRI/reporting fluency. |
| **Numbered Objectives** | **`2.1`, `2.2`, `2.3`, `2.4`** (4 top-level objectives in `OBJECTIVE_COUNTS = [5, 4, 2, 3, 5]`) | Legacy `2.1`–`2.3` (`IR`, `BC`, `DR`) | Every Domain 2 lesson maps explicitly to `objectiveIds: ["2.1"]`, `["2.2"]`, `["2.3"]`, or `["2.4"]` in `js/core/learning-schema.js`. |
| **2026 AI & Emerging Tech Context** | Official ISC2 2026 Exam Outline webpage notes cross-domain coverage of emerging technologies/AI, while the **8-page official Exam Outline PDF defines `2.1`–`2.4` without separate AI sub-objective numbers**. | Not emphasized in 2022 outline | Core Domain 2 slides prioritize **100% of the primary source concepts first**. AI examples are strictly bounded as non-mandatory `Verified Supplement / Proposed Teaching Example` notes in Reading Mode (see Section 4). |

---

## 2. Objective-by-Objective Coverage & Traceability Matrix (`2.1`–`2.4`)

### Objective `2.1` — Understand Governance, Risk, and Compliance (`GRC`)
- **Allocated Lessons:** `lesson-d2-01-grc-foundations` (`6` slides) & `lesson-d2-02-grc-tools-risk-register` (`7` slides) = **`13` slides**
- **Academic Coverage Verdict:** **`PASS`**

| Subtopic / Concept | Primary Source Evidence (File, Section, Lines, Screenshot) | Provenance Classification | Target Lesson & Slide(s) |
|---|---|---|---|
| **Big Picture of Security Governance** (why technical controls need governance) | `Domain 2.md` §1 (`L29–42`), `D2 sum.md` (`L1–28`), `S01` | `Primary Source` | `D2-L01-S1` |
| **Definitions of Governance, Risk Management & Compliance (`GRC`)** | `Domain 2.md` §2.1 (`L43–60`), `D2 sum.md` §1.1 (`L32–47`), `T:L9–13`, `S02` | `Primary Source` | `D2-L01-S1` |
| **Purpose of GRC (All 7 Verified Purposes)** | `Domain 2.md` §2.2 (`L61–72`), `D2 sum.md` §1.2 (`L49–62`), `T:L13–15`, `S03–S05` (canonical: `S05`) | `Primary Source` | `D2-L01-S2` |
| **Importance of GRC (7 Benefits vs. 4 Failure Outcomes without GRC)** | `Domain 2.md` §2.3 (`L73–86`), `D2 sum.md` §1.3 (`L65–84`), `T:L15–19`, `S06` | `Primary Source` | `D2-L01-S3` |
| **GRC Frameworks (`NIST CSF`, `ISO/IEC 27001`, `COBIT`)** | `Domain 2.md` §3 (`L89–106`), `D2 sum.md` §1.4 (`L87–99`), `T:L19–22` (`D2-Q01`: `"Coop"` → `COBIT`), `S07` *(NIST CSF 2.0 6-function list tagged as `Verified Supplement` in Reading Mode)* | `Primary Source` + `Verified Supplement` | `D2-L01-S4` |
| **Key Distinctions: `Governance vs. Management` & `Risk Management vs. Compliance`** | `Domain 2.md` §24.1 (`L589–590`), `D2 sum.md` §5 (`L590–591`) | `Primary Source` | `D2-L01-S5` |
| **Interactive Scenario: Selecting the Right GRC Pillar & Framework** | `Domain 2.md` §25 `Q1–Q2` (`L614–632`), `S02`, `S07` | `Primary Source` | `D2-L01-S6` |
| **GRC Tools: Replacing Manual Spreadsheets & `GRC vs. GRC Tool` Distinction** | `Domain 2.md` §4 (`L107–123`) & §24.1 (`L591`), `D2 sum.md` §1.5 (`L101–115`), `T:L23–25`, `S08` | `Primary Source` | `D2-L02-S1` |
| **All 6 GRC Tool Capabilities** (`Risk registers`, `Policy management`, `Compliance tracking`, `Control management`, `Audit management`, `Risk assessments`) | `Domain 2.md` §4.1 (`L113–118`), `D2 sum.md` §1.5 (`L104–110`), `T:L23–25`, `S08` | `Primary Source` | `D2-L02-S2` |
| **Risk Register Purpose, `Risk Register vs. Risk Assessment` & All 11 Core Fields** | `Domain 2.md` §5.1–5.2 (`L125–146`) & §24.1 (`L592`), `D2 sum.md` §1.6 (`L117–139`), `T:L25–29`, `S09` | `Primary Source` | `D2-L02-S3` |
| **Scoring (`1–4` Ordinal vs. Quantitative `D2-Q02`) & 4 Treatment Strategies (`Mitigate`, `Accept`, `Transfer`, `Avoid`)** | `Domain 2.md` §5.2 (`L137–144`), `T:L27–31`, `S09` + **NIST SP 800-30 Rev. 1** (`D2-Q02` remediation) | `Primary Source` + `Verified Supplement` | `D2-L02-S4` |
| **Worked Risk Register Example: Ransomware on Critical Servers (6 Fields)** | `Domain 2.md` §5.3 (`L148–156`), `D2 sum.md` §1.6 (`L141–156`), `T:L29–31`, `S10` | `Primary Source` | `D2-L02-S5` |
| **Residual Risk (`> 0` after Mitigation vs. Risk Avoidance `D2-Q06`) & Risk Ownership** | `Domain 2.md` §5.3 (`L157–164`), `D2 sum.md` §1.6 (`L157–162`), `T:L31` (`D2-Q06`), `S10` | `Primary Source` + `Verified Supplement` | `D2-L02-S6` |
| **Interactive Scenario: Risk Register Triage & Ownership** | `Domain 2.md` §25 `Q3` (`L634–641`), `S09`, `S10` | `Primary Source` | `D2-L02-S7` |

---

### Objective `2.2` — Understand Redundancy (`BC`, `BCP`, `DR`, `DRP`)
- **Allocated Lessons:** `lesson-d2-03-business-continuity-bcp` (`6` slides) & `lesson-d2-04-disaster-recovery-drp` (`9` slides) = **`15` slides**
- **Academic Coverage Verdict:** **`PASS WITH CONDITIONS`** *(Condition: Enforce `D2-Q04` / `KNOW-D2-028` so `GDPR` and `HIPAA` on `D2-L04-S2` are presented strictly as illustrative compliance examples per `Domain 2.md` §8.4 `L234`, never as a universal identical DRP mandate.)*

| Subtopic / Concept | Primary Source Evidence (File, Section, Lines, Screenshot) | Provenance Classification | Target Lesson & Slide(s) |
|---|---|---|---|
| **Redundancy Foundations & Business Continuity (`BC`) Definition** | `Domain 2.md` §6 (`L166–170`), `D2 sum.md` §2.1 (`L166–168`), `T:L33–35`, `S11`, `S12` | `Primary Source` | `D2-L03-S1` |
| **All 8 BC Disruption Triggers on `S12` (+ Spoken `Human Error`) & Continuity Goals** | `Domain 2.md` §6.1–6.2 (`L171–185`), `D2 sum.md` §2.1 (`L169–181`), `T:L35–37`, `S12` | `Primary Source` | `D2-L03-S2` |
| **Business Continuity Planning (`BCP`), `BC vs. BCP` & All 8 BCP Elements** | `Domain 2.md` §7 (`L187–202`) & §24.1 (`L593`), `D2 sum.md` §2.2 (`L183–199`), `T:L39–43`, `S13–S14` (canonical: `S14`) | `Primary Source` | `D2-L03-S3` |
| **Alternate Work Locations, Backup Personnel & Alternate Suppliers in Practice** | `Domain 2.md` §7.1 (`L196–198`) & §10 (`L304`), `T:L41–43`, `S14`, `S19` | `Primary Source` | `D2-L03-S4` |
| **Business Impact Analysis (`BIA`) & Recovery Priorities** | `Domain 2.md` §7.1 (`L200`) & §10 (`L302, L306, L310`), `T:L67–71`, `S14`, `S19` + **NIST SP 800-34 Rev. 1** | `Primary Source` + `Verified Supplement` | `D2-L03-S5` |
| **Interactive Scenario: Sustaining Operations During a Facility Outage** | `Domain 2.md` §25 `Q4` (`L643–650`), `S12`, `S14` | `Primary Source` | `D2-L03-S6` |
| **Disaster Recovery (`DR`): Definition, 5 Purposes, 3 Concepts & `DR vs. DRP`** | `Domain 2.md` §8.1–8.3 (`L204–224`) & §24.1 (`L594`), `D2 sum.md` §2.3 (`L201–218`), `T:L45–49`, `S15–S16` (canonical: `S16`) | `Primary Source` | `D2-L04-S1` |
| **Importance of DR (5 Points) & Regulatory Examples (`GDPR`/`HIPAA` Bounded per `D2-Q04`)** | `Domain 2.md` §8.4 (`L225–235`), `D2 sum.md` §2.4 (`L220–228`), `T:L49–53`, `S17` | `Primary Source` (Bounded by `D2-Q04`) | `D2-L04-S2` |
| **5 Core DRP Components: Emergency Response (`Contain → Assess → Notify`) & IT Recovery Priorities** | `Domain 2.md` §9.1–9.2 (`L238–256`), `D2 sum.md` §2.5 (`L231–247`), `T:L55–57`, `S18` | `Primary Source` | `D2-L04-S3` |
| **Recovery Objectives: `RTO` vs. `RPO` Visual Timeline & Worked Examples** | `Domain 2.md` §9.3 (`L257–273`: `16:30 / 17:00 / 18:00`) & §24.1 (`L596`), `D2 sum.md` §2.5 (`L249–269`), `T:L57–60` & `S18` (`4:00 PM / 4:30 / 5:00 / 5:20`) | `Primary Source` | `D2-L04-S4` |
| **Backup and Restoration Procedures (`Cloud Backups` & `Off-site Storage`)** | `Domain 2.md` §9.4 (`L275–281`), `D2 sum.md` §2.5 (`L271–276`), `T:L61–62` (`D2-Q01`: `"off-site stitch"` → `off-site storage`), `S18` | `Primary Source` | `D2-L04-S5` |
| **DRP Roles and Responsibilities (`4 Core Teams`)** | `Domain 2.md` §9.5 (`L282–290`), `D2 sum.md` §2.5 (`L278–285`), `T:L63–65`, `S18` | `Primary Source` | `D2-L04-S6` |
| **Business Continuity (`BC`) vs. Disaster Recovery (`DR`): How They Work Together** | `Domain 2.md` §10 (`L292–315`), `D2 sum.md` §2.6 (`L289–317`), `T:L67–71`, `S19` | `Primary Source` | `D2-L04-S7` |
| **7-Dimension Comparison Table: `BC / BCP` vs. `DR / DRP`** | `Domain 2.md` §10 (`L296–306`) & §24.1 (`L593–596`), `S19` | `Primary Source` | `D2-L04-S8` |
| **Interactive Scenario: `RTO`, `RPO` & `BC` vs. `DR` Decision Challenge** | `Domain 2.md` §25 `Q5` (`L652–659`), `S18`, `S19` | `Primary Source` | `D2-L04-S9` |

---

### Objective `2.3` — Understand Security Awareness (`Awareness`, `Culture`, `Leadership`, `Social Engineering`, `Password Protection`)
- **Allocated Lessons:** `lesson-d2-05-awareness-culture-leadership` (`7` slides) & `lesson-d2-06-social-engineering-passwords` (`8` slides) = **`15` slides**
- **Academic Coverage Verdict:** **`PASS`**

| Subtopic / Concept | Primary Source Evidence (File, Section, Lines, Screenshot) | Provenance Classification | Target Lesson & Slide(s) |
|---|---|---|---|
| **Human Factor in Security Governance & Objective 2.3 Overview** | `Domain 2.md` §11 (`L318–325`), `D2 sum.md` §3.1 (`L321–324`), `T:L75–77`, `S21` | `Primary Source` | `D2-L05-S1` |
| **Security Awareness: Definition & All 5 Core Purposes** | `Domain 2.md` §11.1 (`L326–334`), `D2 sum.md` §3.1 (`L325–334`), `T:L75–77`, `S21` | `Primary Source` | `D2-L05-S2` |
| **Security Culture: Shared Values & All 6 Encouraged Daily Behaviors** | `Domain 2.md` §12 (`L336–347`), `D2 sum.md` §3.2 (`L336–347`), `T:L77–79`, `S22` | `Primary Source` | `D2-L05-S3` |
| **Key Distinction: `Security Awareness` (`Knowing`) vs. `Security Culture` (`Doing`)** | `Domain 2.md` §12.2 (`L348–351`) & §24.1 (`L597`), `D2 sum.md` §3.2 (`L349–353`), `S21`, `S22` | `Primary Source` | `D2-L05-S4` |
| **Security Leadership: Tone at the Top & All 6 Leadership Responsibilities** | `Domain 2.md` §13 (`L353–367`), `D2 sum.md` §3.3 (`L355–367`), `T:L79–81`, `S23` | `Primary Source` | `D2-L05-S5` |
| **How Leadership, Awareness & Culture Form a Mutually Reinforcing Cycle** | `Domain 2.md` §11–13 (`L318–367`), `D2 sum.md` §3.1–3.3 (`L321–367`), `S21–S23` | `Primary Source` | `D2-L05-S6` |
| **Interactive Scenario: Diagnosing an Awareness vs. Culture vs. Leadership Gap** | `Domain 2.md` §25 `Q6` (`L661–668`), `S21–S23` | `Primary Source` | `D2-L05-S7` |
| **Social Engineering: Definition & All 5 Psychological Triggers** (`Urgency`, `Fear`, `Authority`, `Trust`, `Curiosity`) | `Domain 2.md` §14 (`L369–383`), `D2 sum.md` §3.4 (`L369–384`), `T:L81–83`, `S24` | `Primary Source` | `D2-L06-S1` |
| **Phishing Spectrum: `Phishing`, `Spear Phishing` & `Whaling`** | `Domain 2.md` §15.1–15.3 (`L385–396`), `D2 sum.md` §3.5 (`L386–395`), `T:L83–85`, `S25` | `Primary Source` | `D2-L06-S2` |
| **Mobile & Voice Vectors: `Smishing` & `Vishing`** | `Domain 2.md` §15.4–15.5 (`L397–401`), `D2 sum.md` §3.5 (`L396–400`), `T:L85–87`, `S25`, `S26` | `Primary Source` | `D2-L06-S3` |
| **Deception & Physical Intrusion: `Pretexting`, `Baiting` & `Tailgating`** | `Domain 2.md` §15.6–15.8 (`L402–408`), `D2 sum.md` §3.5 (`L401–409`), `T:L87–89`, `S26` | `Primary Source` | `D2-L06-S4` |
| **Interactive Scenario: Classifying Social Engineering Attacks (`Q7`)** | `Domain 2.md` §25 `Q7` (`L670–677`), `S24–S26` | `Primary Source` | `D2-L06-S5` |
| **Employee Password Hygiene (`7 Transcript Practices`) & NIST SP 800-63B Guidance (`D2-Q05`)** | `T:L89–91`, `Domain 2.md` §16 (`L410–422`), `S27` + **NIST SP 800-63B** (`D2-Q05`) | `Primary Source` + `Verified Supplement` | `D2-L06-S6` |
| **Organizational Password Protection: All 5 Controls on `S27`** | `Domain 2.md` §16 (`L410–422`), `D2 sum.md` §3.6 (`L412–427`), `T:L91–93`, `S27` | `Primary Source` | `D2-L06-S7` |
| **MFA & Phishing-Resistant Authentication (`FIDO2`/Passkeys vs. Legacy OTP)** | `Domain 2.md` §16.1 (`L418–422`), `D2 sum.md` §3.6 (`L420–426`), `S27` + **NIST SP 800-63B** | `Primary Source` + `Verified Supplement` | `D2-L06-S8` |

---

### Objective `2.4` — Measure Cybersecurity Effectiveness (`Metrics`, `KPIs`, `KRIs`, `Dashboards`, `Scorecards`, `Reports`)
- **Allocated Lessons:** `lesson-d2-07-metrics-kpi-kri` (`8` slides) & `lesson-d2-08-dashboards-scorecards-reports` (`7` slides) = **`15` slides**
- **Academic Coverage Verdict:** **`PASS WITH CONDITIONS`** *(Condition: Enforce `D2-Q03` / `KNOW-D2-054` on `D2-L08-S3` so the `< 10` (`S36`) vs. `< 10%` (`T:L111`) discrepancy on Row 4 is explicitly explained as a unit-clarity governance lesson and never used in a scored question key.)*

| Subtopic / Concept | Primary Source Evidence (File, Section, Lines, Screenshot) | Provenance Classification | Target Lesson & Slide(s) |
|---|---|---|---|
| **Measuring Cybersecurity Effectiveness: Definition & All 7 Core Purposes** | `Domain 2.md` §17 (`L424–438`), `D2 sum.md` §4.1 (`L431–446`), `T:L95–97`, `S28`, `S29` | `Primary Source` | `D2-L07-S1` |
| **What Makes a Security Metric Meaningful (Raw Count vs. Actionable Metric)** | `Domain 2.md` §18 (`L440–445`), `T:L97–99`, `S30` + **NIST SP 800-55 Rev. 1** | `Primary Source` + `Verified Supplement` | `D2-L07-S2` |
| **5 General Security Metrics (`S30`) & `MTTD` / `MTTR`** | `Domain 2.md` §18.1 (`L446–451`), `D2 sum.md` §4.2 (`L451–457`), `T:L97–99`, `S30` | `Primary Source` | `D2-L07-S3` |
| **4 Domain Metric Categories (`S31`: Vulnerability Mgmt, IAM, Awareness, IR)** | `Domain 2.md` §18.2 (`L453–470`), `D2 sum.md` §4.3 (`L459–475`), `T:L99–101`, `S31` | `Primary Source` | `D2-L07-S4` |
| **Key Risk Indicators (`KRIs`): Forward-Looking Warning Signs & All 6 `S32` Examples** | `Domain 2.md` §19 (`L472–489`), `D2 sum.md` §4.4 (`L477–492`), `T:L101–103`, `S32` | `Primary Source` | `D2-L07-S5` |
| **Key Performance Indicators (`KPIs`): Target Achievement & the `15-Day` Patching Example (`S33`)** | `Domain 2.md` §20 (`L491–500`), `D2 sum.md` §4.5 (`L494–507`), `T:L103–105`, `S33` | `Primary Source` | `D2-L07-S6` |
| **Side-by-Side Comparison: `Metric` vs. `KRI` vs. `KPI`** | `Domain 2.md` §20.2 (`L501–509`) & §24.1 (`L598`), `D2 sum.md` §4.6 (`L509–516`), `S32`, `S33` | `Primary Source` | `D2-L07-S7` |
| **Interactive Scenario: Classifying `KRIs` vs. `KPIs` (`Q8` & `Q9`)** | `Domain 2.md` §25 `Q8–Q9` (`L679–695`), `S32`, `S33` | `Primary Source` | `D2-L07-S8` |
| **Security Dashboards: Real-Time Operational Visibility & All 6 Elements (`S34`)** | `Domain 2.md` §21 (`L511–526`), `D2 sum.md` §4.7 (`L518–531`), `T:L105–107`, `S34` | `Primary Source` | `D2-L08-S1` |
| **Security Scorecards: Target-vs-Actual Grading & Executive Purpose (`S35`)** | `Domain 2.md` §22.1–22.2 (`L528–539`), `D2 sum.md` §4.8 (`L533–546`), `T:L107–109`, `S35` | `Primary Source` | `D2-L08-S2` |
| **Worked Security Scorecard (`S36` 4-Row Table) & Unit-Clarity Governance Note (`D2-Q03`)** | `Domain 2.md` §22.3 (`L540–556`), `D2 sum.md` §4.8 (`L548–558`), `T:L109–111`, `S36` (`95%/91%`, `100%/97%`, `95%/98%`, `< 10 / 12`) | `Primary Source` (Bounded by `D2-Q03` / `KNOW-D2-054`) | `D2-L08-S3` |
| **Cybersecurity Reports: Formal Narrative & All 7 Core Elements (`S37`)** | `Domain 2.md` §23 (`L558–572`), `D2 sum.md` §4.9 (`L560–573`), `T:L111–113`, `S37` | `Primary Source` | `D2-L08-S4` |
| **Three-Way Comparison: `Dashboard` vs. `Scorecard` vs. `Report`** | `Domain 2.md` §24.1 (`L599–600`), `D2 sum.md` §5 (`L600–601`), `S34–S37` | `Primary Source` | `D2-L08-S5` |
| **Objective 2.4 Exam Memory Aid (`S38`: 6 Key Terms at a Glance)** | `Domain 2.md` §23.1 (`L574–585`), `D2 sum.md` §4.10 (`L575–587`), `T:L113–115`, `S38` | `Primary Source` | `D2-L08-S6` |
| **Interactive Scenario: Selecting the Right Reporting Artifact (`Q10–Q12`)** | `Domain 2.md` §25 `Q10–Q12` (`L697–723`), `S34–S38` | `Primary Source` | `D2-L08-S7` |

---

## 3. Verification of All 12 Review Questions (`Domain 2.md` §25 `L612–731`)

Every review question in `Domain 2.md` §25 is explicitly mapped to an interactive slide or reinforcement check:

| Question | `Domain 2.md` Lines | Concept Tested | Correct Answer | Mapped Slide |
|---|---:|---|---|---|
| `Q1` | `L614–622` | Element of GRC focusing on leadership direction, policies, and accountability | `B. Governance` | `D2-L01-S6` |
| `Q2` | `L624–632` | Framework focused on establishing and continually improving an ISMS | `C. ISO/IEC 27001` | `D2-L01-S6` |
| `Q3` | `L634–641` | Main purpose of a Risk Register | `B. To record and track identified risks, owners, ratings, and treatments` | `D2-L02-S7` |
| `Q4` | `L643–650` | Primary focus of Business Continuity (`BC`) | `B. Continuing critical business operations during and after a disruption` | `D2-L03-S6` |
| `Q5` | `L652–659` | Backup at `16:30`, failure at `17:00`, `30 minutes` data loss metric | `B. RPO` | `D2-L04-S9` |
| `Q6` | `L661–668` | Difference between Security Awareness and Security Culture | `B. Awareness is knowing; culture is consistently practicing secure behavior` | `D2-L05-S7` |
| `Q7` | `L670–677` | Highly targeted phishing aimed at senior executives | `C. Whaling` | `D2-L06-S5` |
| `Q8` | `L679–686` | Example of a Key Risk Indicator (`KRI`) | `B. Increasing percentage of critical systems without tested backups` | `D2-L07-S8` |
| `Q9` | `L688–695` | Example of a Key Performance Indicator (`KPI`) | `B. Percentage of critical vulnerabilities patched within 15 days` | `D2-L07-S8` |
| `Q10` | `L697–704` | Real-time/near-real-time visual monitoring of metrics and alerts | `C. Security Dashboard` | `D2-L08-S7` |
| `Q11` | `L706–713` | Comparing actual performance against target thresholds with status ratings | `B. Security Scorecard` | `D2-L08-S7` |
| `Q12` | `L715–723` | Formal explanation of incidents, risk trends, compliance findings, and recommendations | `C. Cybersecurity Report` | `D2-L08-S7` |

---

## 4. Official 2026 Scope & AI Supplement Review Decisions

We evaluated each of the 4 previously proposed AI-related supplements against:
1. The official ISC2 CC Exam Outline effective September 1, 2026 (`isc2-cc-2026-09-01`)
2. The primary Domain 2 sources (`Domain 2.md`, `D2 sum.md`, `DOMAIN 2.txt`, `S01`–`S38`), which contain **zero AI content**
3. Instructional value vs. scope inflation risk

| Proposed AI Supplement | Explicitly Required by Official 2026 Domain 2 Numbered Outline? | Pedagogical & Scope Evaluation | Final Decision (`Keep` / `Simplify` / `Relocate` / `Remove`) |
|---|---|---|---|
| **1. AI Governance & Acceptable Use (`D2-L01-S7` in prior draft)** | **No** (The 8-page official PDF defines `2.1 Understand GRC`; AI is mentioned only as general 2026 cross-domain context on the ISC2 webpage). | Dedicating a full standalone slide (`D2-L01-S7`) to AI Governance when the source corpus has zero AI material inflates Lesson 1 and dilutes the 3 core frameworks (`NIST CSF`, `ISO/IEC 27001`, `COBIT`). | **`REMOVE` standalone slide `D2-L01-S7`; `SIMPLIFY & RELOCATE`** to a brief, explicitly labeled `Verified Supplement` note in Reading Mode on `D2-L01-S4` (noting that organizations apply GRC policies and frameworks to emerging technologies such as AI). |
| **2. AI Pipeline Continuity, Dataset Backups & Model Drift in BC/DR (`D2-L03-S7` & `D2-L04-S5` in prior draft)** | **No** (`2.2 Understand Redundancy` covers `BC`, `BCP`, `DR`, `DRP`). | Creating a standalone AI continuity slide (`D2-L03-S7`) and placing `"AI Assets"` in the title of `D2-L04-S5` introduces unverified exam scope (`D2-GAP03`) and distracts from the 8 BCP elements (`S14`) and 5 DRP components (`S18`). | **`REMOVE` standalone slide `D2-L03-S7` and `REMOVE` `"AI Assets"` from `D2-L04-S5` slide title; `SIMPLIFY`** to a single sentence in `D2-L04-S5` Reading Mode noting that off-site/cloud backups protect critical application configurations and datasets. |
| **3. Deepfake & Voice Cloning in Vishing/Pretexting (`D2-L06-S3` / `D2-L06-S4`)** | **No** (`2.3 Understand Security Awareness` covers Social Engineering & Password Protection). | Voice cloning / deepfakes are a natural, practical modern illustration of how attackers execute `Vishing` and `Pretexting` (`S25–S26`) using `Authority` and `Urgency` (`S24`), provided it does not displace any of the 8 core social engineering techniques. | **`SIMPLIFY`:** Keep as a concise, clearly labeled `Proposed Teaching Example` inside `D2-L06-S3`/`S4` Reading Mode (1–2 sentences illustrating modern Vishing/Pretexting verification via out-of-band callback), never presented as a separate mandatory exam term. |
| **4. AI Model Drift as a KRI (`D2-L07-S5` in prior draft)** | **No** (`2.4 Measure Cybersecurity Effectiveness` covers Metrics, KPIs, KRIs, Dashboards, Scorecards, Reports). | `S32` (`Domain 2.md` §19 `L480–485`) already provides **6 explicit, exam-tested KRI examples** (including `% of critical systems without tested backups` tested in `Q8`). Adding `"AI model drift"` to the main slide dilutes the 6 authentic course KRIs. | **`REMOVE` from `D2-L07-S5` slide canvas and Reading Mode.** Focus `D2-L07-S5` 100% on the 6 primary-source KRIs from `S32` and `Domain 2.md` §19. |
