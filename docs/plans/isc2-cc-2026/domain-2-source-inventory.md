# ISC2 CC 2026 — Domain 2 Source Inventory & Quality Audit (Recovery Edition)

- **Course / Exam Scope:** ISC2 Certified in Cybersecurity (CC) — Exam Outline Effective September 1, 2026 (`isc2-cc-2026-09-01`)
- **Domain:** Domain 2 — Security Governance (`17.3%` exam weight; Objectives `2.1`–`2.4`)
- **Primary Source Directory:** `D:\_Coding\SEC-CERT-TEST\ISC2 Update 2026\Domain 2`
- **Audit Baseline Cross-Reference:** Verified directly against raw source files and `docs/plans/isc2-cc-2026/domain-2-recovery-audit.md`
- **Review Status:** Refined, Updated & Reconciled for Domain 2 Recovery Plan
- **Implementation Mapping:** Exactly 8 Published Lessons / 55 Slides

---

## 1. Executive Summary of the Source Corpus

The authoritative educational source directory (`D:\_Coding\SEC-CERT-TEST\ISC2 Update 2026\Domain 2`) contains **41 files (`13,701,357` bytes total)**:
- **2 authored bilingual Thai/English study guides in Markdown:**
  - `Domain 2.md` (731 lines | 35,610 bytes | SHA-256: `fc63c87b05dd27f60fa0305ca5efae3e08f41046735580597517a53d96b9694f`)
  - `D2 sum.md` (633 lines | 26,333 bytes | SHA-256: `d7334cb06bc0728bf8a05d1c656431de2c20c2c9566e22ba4df64f570d88b031`)
- **1 raw English instructor video lecture transcript:**
  - `DOMAIN 2.txt` (115 lines | 29,748 bytes | SHA-256: `b74f0e5c6eaf79a49d95c7063aaa1bd0789d790c8ada5e14dcc51edd3f88a6d0`)
- **38 timestamped PNG screenshots (`S01`–`S38`):**
  - Captured on `2026-09-20` (`17:55:16` to `22:37:51`).
  - **37 authentic course slides:** `S01`–`S19` and `S21`–`S38`.
  - **1 permanently excluded capture:** `S20` (Thai ESP32 microcontroller e-commerce listing, excluded under `D2-Q08`).

### Source Authority & Provenance Tagging Contract
1. **`Primary Source`:** Directly evidenced in `Domain 2.md`, `D2 sum.md`, `DOMAIN 2.txt`, or `S01`–`S38` (excluding `S20`).
2. **`Verified Supplement`:** Authoritative industry standards (e.g., NIST SP 800-34 Rev. 1, NIST SP 800-30 Rev. 1, NIST SP 800-63B, NIST SP 800-55 Vol. 1, ISO/IEC 27001, COBIT) used to clarify ambiguities, remediate lecture transcript errors (`D2-Q01`–`D2-Q08`), or provide 2026 outline context.
3. **`Proposed Teaching Example`:** Structured scenarios or calculation examples designed to reinforce primary concepts without claiming to be verbatim original slides.

---

## 2. Primary Text Sources (Section-by-Section Mapping)

### 2.1 `Domain 2.md` — Master Bilingual Study Guide
- Primary pedagogical authority establishing the user's natural bilingual voice, core definitions, comparison tables, exam traps, and 12 scenario questions.

| Section | Line Range | Core Source Concepts | Published Lesson & Slides |
|---|---|---|---|
| Title & Overview | `L1–28` | Security Governance big picture; 4 pillars (GRC, BC/DR, Awareness/Culture, Metrics); ASCII structural map | Overview & `D2-L01-S1` |
| `1.` Big Picture of Governance | `L29–42` | Why Technical Controls fail without Governance direction and accountability | `D2-L01-S1` |
| `2.` GRC | `L43–87` | Definitions of Governance, Risk Management, Compliance; **7 Purposes of GRC** (`L61–72`); **7 Benefits vs 4 Failure Outcomes** (`L73–86`) | `D2-L01-S1` to `S3` |
| `3.` GRC Frameworks | `L89–106` | NIST CSF, ISO/IEC 27001, COBIT; standards vs laws | `D2-L01-S4` |
| `4.` GRC Tools | `L107–123` | Software platforms replacing spreadsheets; **6 Capabilities** (Risk registers, Policy mgmt, Compliance tracking, Control mgmt, Audit mgmt, Risk assessments) | `D2-L02-S1`, `S2` |
| `5.` Risk Register | `L125–165` | Structured risk records; **11 Core Fields** (`L132–144`); **Worked Ransomware Example** (`S10`); Ordinal scoring (`1–4`); Residual risk (`> 0` after mitigation) | `D2-L02-S3` to `S6` |
| `6.` Redundancy & BC | `L166–185` | Redundancy foundations; BC definition; **8 Disruption Triggers** (`S12`) | `D2-L03-S1`, `S2` |
| `7.` BCP | `L187–202` | Business Continuity Planning; **8 BCP Elements** (`S13–S14`); Alternate locations, backup staff, alternate suppliers; BIA connection | `D2-L03-S3` to `S5` |
| `8.` Disaster Recovery (DR) | `L204–236` | DR definition; **5 Purposes of DR**; 3 Key Concepts; **5 Importance Points** (`S17`); Bounded compliance (`GDPR`, `HIPAA`) | `D2-L04-S1`, `S2` |
| `9.` Components of a DRP | `L238–290` | **5 DRP Components**: Emergency Response (`Contain` → `Assess` → `Notify`); IT Recovery Priorities; **RTO vs RPO Timeline** (`16:30 / 17:00 / 18:00`); Backups (`Cloud / Off-site`); 4 Recovery Teams | `D2-L04-S3` to `S6` |
| `10.` BC vs DR | `L292–316` | **7-Dimension Comparison Table** (`S19`); BC organization-wide vs DR IT-focused; `DR ⊂ BC` relationship | `D2-L04-S7`, `S8` |
| `11.` Security Awareness | `L318–334` | Ensuring employee threat understanding; **5 Core Purposes** (`S21`) | `D2-L05-S1`, `S2` |
| `12.` Security Culture | `L336–351` | Shared values and habits; **6 Encouraged Daily Behaviors** (`S22`); Awareness vs Culture distinction | `D2-L05-S3`, `S4` |
| `13.` Security Leadership | `L353–367` | Tone at the top; **6 Leadership Responsibilities** (`S23`); Leadership-Awareness-Culture cycle | `D2-L05-S4`, `S5` |
| `14.` Social Engineering | `L369–383` | Human manipulation; **5 Psychological Triggers** (Urgency, Fear, Authority, Trust, Curiosity) | `D2-L06-S1` |
| `15.` Social Engineering Techniques | `L385–408` | **8 Techniques**: Phishing, Spear Phishing, Whaling, Smishing, Vishing, Pretexting, Baiting, Tailgating | `D2-L06-S2` to `S4` |
| `16.` Password Protection | `L410–423` | **5 Organizational Controls** (`S27`); Spoken employee password hygiene; Modern NIST SP 800-63B standards; MFA | `D2-L06-S5` to `S7` |
| `17.` Measuring Effectiveness | `L424–438` | Purpose of evaluation; **7 Measurement Purposes** (`S29`) | `D2-L07-S1` |
| `18.` Security Metrics | `L440–470` | **5 General Metrics** (`S30`); 4 Domain Metric Groups (Vulnerability, IAM, Awareness, IR); MTTD & MTTR definitions | `D2-L07-S2`, `S3` |
| `19.` Key Risk Indicators (KRIs) | `L472–489` | Forward-looking early warnings; **6 Core KRIs** (`S32`) | `D2-L07-S4`, `S5` |
| `20.` Key Performance Indicators (KPIs) | `L491–509` | Performance against targets; 15-day patch KPI (`S33`); KRI vs KPI distinction table | `D2-L07-S5`, `S6` |
| `21.` Dashboards | `L511–526` | Real-time visual status, alerts, trends; **5–6 Key Dashboard Elements** (`S34`) | `D2-L08-S1` |
| `22.` Scorecards | `L528–556` | Target vs actual performance; **4-Row Worked Table** (`S36`); Scorecard Row 4 unit discrepancy note (`D2-Q03`) | `D2-L08-S2`, `S3` |
| `23.` Reports & Memory Aid | `L558–585` | Formal reporting; **7 Report Elements** (`S37`); **6-Term Synthesis Memory Aid** (`S38`: Metric, KPI, KRI, Dashboard, Scorecard, Report) | `D2-L08-S4`, `S5` |
| `24.` High-Value Distinctions & Traps | `L586–610` | 11 Core Distinctions; 8 Exam Traps | Integrated across all lessons |
| `25.` Review Questions (`Q1`–`Q12`) | `L612–731` | 12 Scenario Questions with full rationales | Basis of scenario slides across L1–L8 |

---

## 3. Visual Source Inventory (`S01`–`S38`) & Published Slide Alignment

| Source ID | Filename | Slide Title & Key Visual Elements | Target Lesson & Slide ID | Content Delivery Status in Current Implementation |
|:---:|---|---|---|---|
| `S01` | `Screenshot 2026-09-20 175516.png` | `DOMAIN 2 - Security Governance` (2.1–2.4 overview) | `D2-L01-S01` (`slide-01-grc-foundations`) | Complete in Reading/Info; Presentation is concise summary card. |
| `S02` | `Screenshot 2026-09-20 175642.png` | `Governance, Risk, and Compliance (GRC)` (G, R, C definitions) | `D2-L01-S01` (`slide-01-grc-foundations`) | Integrated with S01. |
| `S03–S05` | `Screenshot 2026-09-20 180128.png` (`S05` canonical) | `Purpose of GRC` (All 7 purposes + annotations) | `D2-L01-S02` (`slide-02-purpose-of-grc`) | All 7 present in Reading/Info; Presentation uses access-review evidence example. |
| `S06` | `Screenshot 2026-09-20 180141.png` | `Importance of GRC` (7 benefits vs 4 failure outcomes) | `D2-L01-S03` (`slide-03-importance-of-grc`) | Complete in Reading/Info; Presentation shows 4 remedy rows. |
| `S07` | `Screenshot 2026-09-20 180209.png` | `GRC Frameworks` (NIST CSF, ISO/IEC 27001, COBIT) | `D2-L01-S04` (`slide-04-grc-frameworks`) | Complete in Reading/Info; Presentation matches tasks to frameworks. |
| `S08` | `Screenshot 2026-09-20 181135.png` | `GRC Tools` (6 core software capabilities) | `D2-L02-S01` & `S02` (`slide-01-*`, `slide-02-*`) | Complete in Reading/Info; Presentation shows 6 capability links. |
| `S09` | `Screenshot 2026-09-20 181653.png` | `Risk Register` (11 fields, ordinal scoring, 4 treatments) | `D2-L02-S03` & `S04` (`slide-03-*`, `slide-04-*`) | Complete in Reading/Info; Presentation has ordinal scoring visual. |
| `S10` | `Screenshot 2026-09-20 181722.png` | `Risk Register - Example` (Ransomware worked row, residual risk) | `D2-L02-S05` & `S06` (`slide-05-*`, `slide-06-*`) | Complete in Reading/Info; Presentation shows controls vs effects. |
| `S11` | `Screenshot 2026-09-20 182047.png` | `Objectives 2.2 - Understand Redundancy` (BC, BCP, DR, DRP banner) | `D2-L03-S01` (`slide-01-redundancy-and-bc-foundations`) | Complete in Reading/Info; Presentation shows service alternate path. |
| `S12` | `Screenshot 2026-09-20 182544.png` | `Business Continuity` (Definition + 8 disruption triggers) | `D2-L03-S02` (`slide-02-eight-disruption-triggers`) | **DEFECT (D2-DEF-01):** Reading has all 8; **Presentation renders only 3 triggers**. |
| `S13–S14` | `Screenshot 2026-09-20 182614.png` (`S14` canonical) | `Business Continuity Planning` (8 core BCP elements) | `D2-L03-S03` & `S04` (`slide-03-*`, `slide-04-*`) | **DEFECT (D2-DEF-01):** Reading has all 8; **Presentation renders only 4 elements**. |
| `S15–S16` | `Screenshot 2026-09-20 183111.png` (`S16` canonical) | `Disaster Recovery` (Definition + 5 purposes + 3 concepts) | `D2-L04-S01` (`slide-01-dr-definition-purposes-drp`) | Complete in Reading/Info; Presentation renders disrupted IT flow. |
| `S17` | `Screenshot 2026-09-20 183349.png` | `Importance of DR` (5 importance points, GDPR/HIPAA context) | `D2-L04-S02` (`slide-02-importance-of-disaster-recovery`) | Complete in Reading/Info; Presentation shows consequence chain. |
| `S18` | `Screenshot 2026-09-20 183410.png` | `Components of DRP` (5 components, RTO/RPO timeline) | `D2-L04-S03` to `S06` (`slide-03-*` to `slide-06-*`) | Complete in Reading/Info; Presentation timeline needs SVG upgrade. |
| `S19` | `Screenshot 2026-09-20 183921.png` | `BC vs DR Comparison Table` (7 dimensions, BIA) | `D2-L04-S07` & `S08` (`slide-07-*`, `slide-08-*`) | Complete in Reading/Info; Presentation shows parallel activity. |
| `S20` | `Screenshot 2026-09-20 201852.png` | *EXCLUDED:* Thai ESP32-WROOM-32U e-commerce ad | **EXCLUDED** (`D2-Q08`) | Correctly excluded across all lessons. |
| `S21` | `Screenshot 2026-09-20 220429.png` | `Security Awareness` (Definition + 5 core purposes) | `D2-L05-S01` & `S02` (`slide-01-*`, `slide-02-*`) | **DEFECT (D2-DEF-02):** Reading has all 5; **Presentation renders only 3 purposes**. |
| `S22` | `Screenshot 2026-09-20 220716.png` | `Security Culture` (Definition + 6 encouraged behaviors) | `D2-L05-S03` (`slide-03-shared-daily-culture`) | **DEFECT (D2-DEF-02):** Reading has all 6; **Presentation renders only 2 blocks**. |
| `S23` | `Screenshot 2026-09-20 220723.png` | `Security Leadership` (Definition + 6 responsibilities) | `D2-L05-S04` (`slide-04-leadership-makes-rules-credible`) | **DEFECT (D2-DEF-02):** Reading has all 6; **Presentation renders only 2 cards**. |
| `S24` | `Screenshot 2026-09-20 220952.png` | `Social Engineering` (Definition + psychological triggers) | `D2-L06-S01` (`slide-01-manipulation-and-request`) | Complete in Reading/Info; Presentation shows pressure vs request. |
| `S25` | `Screenshot 2026-09-20 221341.png` | `Social Engineering Techniques` (Phishing, Spear, Whaling, Vishing) | `D2-L06-S02` & `S03` (`slide-02-*`, `slide-03-*`) | Complete in Reading/Info; Presentation splits by channel. |
| `S26` | `Screenshot 2026-09-20 221932.png` | `Social Engineering Techniques (cont.)` (Smishing, Pretexting) | `D2-L06-S03` & `S04` (`slide-03-*`, `slide-04-*`) | Complete in Reading/Info; Presentation shows verification. |
| `S27` | `Screenshot 2026-09-20 221941.png` | `Password Protection` (5 organizational controls + MFA) | `D2-L06-S05` to `S07` (`slide-05-*` to `slide-07-*`) | Complete in Reading/Info; Modern NIST SP 800-63B supplements. |
| `S28` | `Screenshot 2026-09-20 222037.png` | `Objectives 2.4 - Measure effectiveness` (Banner) | `D2-L07-S01` (`slide-01-measure-for-a-decision`) | Integrated with S29. |
| `S29` | `Screenshot 2026-09-20 222320.png` | `Measuring Cybersecurity Effectiveness` (7 purposes) | `D2-L07-S01` (`slide-01-measure-for-a-decision`) | **DEFECT (D2-DEF-01):** Reading has all 7; **Presentation renders abstract 3-box pipeline**. |
| `S30` | `Screenshot 2026-09-20 222340.png` | `Security Metrics` (Definition + 5 general metrics + MTTD/MTTR) | `D2-L07-S02` & `S03` (`slide-02-*`, `slide-03-*`) | Complete in Reading/Info; Presentation shows percentage and timeline. |
| `S31` | `Screenshot 2026-09-20 222628.png` | `Examples of Metrics` (4 domain groups) | `D2-L07-S03` & `S04` (`slide-03-*`, `slide-04-*`) | Complete in Reading/Info; Presentation highlights exposure. |
| `S32` | `Screenshot 2026-09-20 222928.png` | `Key Risk Indicators (KRIs)` (Definition + 6 KRI examples) | `D2-L07-S04` & `S05` (`slide-04-*`, `slide-05-*`) | Complete in Reading/Info; Presentation shows exposure check. |
| `S33` | `Screenshot 2026-09-20 223200.png` | `Key Performance Indicators (KPIs)` (Definition + 15-day patch KPI) | `D2-L07-S05` & `S06` (`slide-05-*`, `slide-06-*`) | Complete in Reading/Info; Presentation compares cohort vs target. |
| `S34` | `Screenshot 2026-09-20 223320.png` | `Security Dashboards` (Definition + visual elements) | `D2-L08-S01` (`slide-01-dashboard-status-and-trend`) | Complete in Reading/Info; Presentation shows status/trend panels. |
| `S35` | `Screenshot 2026-09-20 223458.png` | `Security Scorecards` (Definition + executive target tracking) | `D2-L08-S02` (`slide-02-scorecard-targets-and-actuals`) | Complete in Reading/Info; Presentation compares target vs actual. |
| `S36` | `Screenshot 2026-09-20 223508.png` | `Security Scorecards - Example` (4-row table, Row 4 unit conflict) | `D2-L08-S03` (`slide-03-four-row-scorecard-discrepancy`) | Explicitly notes S36 `< 10` vs transcript `< 10%`; unscored. |
| `S37` | `Screenshot 2026-09-20 223741.png` | `Cybersecurity Reports` (Definition + 7 formal report elements) | `D2-L08-S04` (`slide-04-formal-reporting-components`) | Complete in Reading/Info; Presentation shows evidence-to-action. |
| `S38` | `Screenshot 2026-09-20 223751.png` | `Exam Memory Aid` (6-term synthesis: Metric, KPI, KRI, Dashboard, Scorecard, Report) | `D2-L08-S05` (`slide-05-reporting-synthesis-and-audiences`) | Complete in Reading/Info; Presentation shows audience alignment. |

---

## 4. Academic Quarantine Register Status (`D2-Q01`–`D2-Q08`)

All 8 authoritative source quarantine rules established in planning have been re-verified against the active codebase:

1. **`D2-Q01` (ASR Typos):** Confirmed clean. `COBIT` is used consistently across all lessons (zero instances of "Coop"). `Off-site storage` is used consistently (zero instances of "off-site stitch").
2. **`D2-Q02` (Ordinal vs Quantitative):** Confirmed clean. NIST SP 800-30 Rev. 1 clarification correctly explains that the `1–4` rating scale is ordinal/semi-quantitative, distinguishing it from monetary ALE formulas.
3. **`D2-Q03` (Scorecard Row 4 Unit Discrepancy / `KNOW-D2-054`):** Confirmed clean. Row 4 (`Critical Vulnerabilities Target: < 10 / Actual: 12`) displays the discrepancy visibly and is strictly excluded from scored answer keys.
4. **`D2-Q04` (GDPR/HIPAA Boundary / `KNOW-D2-028`):** Confirmed clean. Regulations are cited strictly as illustrative examples of legal/regulatory drivers for availability and data protection, not as universal identical mandates.
5. **`D2-Q05` (Password Standard Modernization):** Confirmed clean. NIST SP 800-63B guidance is appropriately integrated in Lesson 6, prioritizing passphrases, screening against breached lists, and MFA over arbitrary 90-day expiration rules.
6. **`D2-Q06` (Residual Risk `> 0` vs Avoidance):** Confirmed clean. Lesson 2 Slide 6 correctly explains that risk mitigation always leaves residual risk (`> 0`), whereas risk avoidance eliminates the specific risky activity.
7. **`D2-Q07` (Canonical Screenshots):** Canonical uncropped visuals (`S05`, `S14`, `S16`) verified.
8. **`D2-Q08` (Excluded Hardware Ad `S20`):** Confirmed 100% excluded. Zero references to ESP32 exist in lesson content.

---

*End of Source Inventory Report.*
