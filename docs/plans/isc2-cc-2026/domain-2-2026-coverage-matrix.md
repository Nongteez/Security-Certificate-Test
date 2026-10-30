# ISC2 CC 2026 — Domain 2 Official Exam Outline & Coverage Matrix (Recovery Edition)

- **Official Outline Identifier:** `isc2-cc-2026-09-01` (Effective September 1, 2026)
- **Domain:** Domain 2 — Security Governance (`17.3%` Exam Weight; Objectives `2.1`–`2.4`)
- **Official Specification:** https://www.isc2.org/certifications/cc/cc-certification-exam-outline
- **Published Curriculum Allocation:** **8 Lessons / 55 Bilingual Slides** (`13 + 15 + 14 + 13 = 55` slides)
- **Audit Cross-Reference:** Reconciled with `docs/plans/isc2-cc-2026/domain-2-recovery-audit.md`

---

## 1. Official 2026 Scope & Evolution

| Official 2026 Specification | Requirements in `isc2-cc-2026-09-01` | Contrast with Legacy Outline | Curriculum & Coverage Mandate |
|---|---|---|---|
| **Domain Title** | **Domain 2: Security Governance** | Previously *Incident Response, Business Continuity (BC) and Disaster Recovery (DR) Concepts* | Incident Response (`3.1`) moved to Domain 3 (`Security Operations`). Domain 2 is now 100% dedicated to **Security Governance** across GRC (`2.1`), Redundancy/BC/DR (`2.2`), Awareness/Culture/Social Engineering/Passwords (`2.3`), and Measuring Effectiveness (`2.4`). |
| **Exam Weight** | **`17.3%`** | Previously `10%` | Weight increased significantly (+7.3%), demanding practical governance fluency: GRC decision-making, operational risk register triage, RTO/RPO calculation mastery, human defense, and KPI/KRI evaluation. |
| **Numbered Objectives** | **`2.1`, `2.2`, `2.3`, `2.4`** (4 top-level objectives) | Legacy `2.1`–`2.3` | All 8 published lessons map strictly to `2.1`–`2.4` with two lessons per objective. |
| **2026 Emerging Tech / AI Guidance** | Official cross-domain context on applying governance principles to AI | Not present in legacy outline | Bounded as supplementary examples (e.g., AI configurations/datasets in DRP, synthetic media in social engineering verification, model drift KRI context). Never allowed to displace primary course concepts. |

---

## 2. Objective-by-Objective Coverage & Traceability Matrix

### Objective 2.1 — Plan Governance, Risk, and Compliance (GRC)
- **Allocated Published Lessons:**
  - `lesson-d2-01-grc-foundations` (6 slides: `slide-01`–`slide-06`)
  - `lesson-d2-02-grc-tools-risk-register` (7 slides: `slide-01`–`slide-07`)
- **Total Published Slides:** 13 slides
- **Coverage Status:** `PASS WITH VISUAL REFINEMENT`

| Subtopic / Concept | Primary Source Evidence | Mapped Published Slide ID | Reading / Info Status | Presentation Mode Status & Defect Analysis |
|---|---|---|:---:|---|
| **Big Picture of Security Governance** (Why technical controls fail without governance) | `Domain 2.md` §1 (`L29–42`), `S01` | `slide-01-grc-foundations` | Complete | Renders 3 role cards (`Governance`, `Risk`, `Compliance`). *Refinement:* Needs visual contrast upgrade. |
| **7 Purposes of GRC** | `Domain 2.md` §2.2 (`L61–72`), `S03–S05` | `slide-02-purpose-of-grc` | Complete (all 7) | Illustrates access-review evidence reuse. *Refinement:* Ensure all 7 purposes are easily scannable on canvas. |
| **7 Benefits vs 4 Failure Outcomes** | `Domain 2.md` §2.3 (`L73–86`), `S06` | `slide-03-importance-of-grc` | Complete (7 + 4) | Renders 4 remedy comparison rows. *Refinement:* Needs clearer visual hierarchy. |
| **GRC Frameworks** (NIST CSF, ISO/IEC 27001, COBIT) | `Domain 2.md` §3 (`L89–106`), `S07` | `slide-04-grc-frameworks` | Complete | Matches business tasks to frameworks. *Refinement:* Add architectural framework badges. |
| **Key Distinctions** (Governance vs Management, Risk vs Compliance) | `Domain 2.md` §24.1 (`L589–590`) | `slide-05-grc-distinctions` | Complete | Shows Governance $\leftrightarrow$ Management feedback and Compliance $\neq$ Risk. |
| **Interactive Scenario 1** (NovaPay GRC Alignment) | `Domain 2.md` §25 `Q1–Q2` | `slide-06-applied-grc-scenario` | Complete | **DEFECT (D2-DEF-06):** Distractors B and D are absurd extremes ("stop operating until certified"). |
| **GRC Tools & 6 Capabilities** (Spreadsheet replacement) | `Domain 2.md` §4 (`L107–123`), `S08` | `slide-01-grc-tools-platform`<br>`slide-02-six-grc-tool-capabilities` | Complete (all 6) | Renders split working copies and 6 capability links. |
| **Risk Register 11 Core Fields** | `Domain 2.md` §5.1–5.2 (`L125–146`), `S09` | `slide-03-risk-register-anatomy` | Complete (all 11) | Shows Risk Assessment vs Risk Register transition. |
| **Ordinal Scoring (`1–4`) & 4 Treatments** | `Domain 2.md` §5.2 (`L137–144`), `S09` + NIST SP 800-30r1 (`D2-Q02`) | `slide-04-scoring-and-treatment` | Complete | Shows `3 × 4 = 12` priority points and 4 treatment strategies. |
| **Worked Ransomware Example & Residual Risk** | `Domain 2.md` §5.3 (`L148–164`), `S10` (`D2-Q06`) | `slide-05-ransomware-control-effects`<br>`slide-06-residual-risk-and-ownership` | Complete | Shows control mitigation effects and explains residual risk `> 0`. |
| **Interactive Scenario 2** (Risk Register Triage) | `Domain 2.md` §25 `Q3` | `slide-07-risk-register-scenario` | Complete | **DEFECT (D2-DEF-06):** Distractor D ("Report 4 × 4 as $16,000") is a clumsy math joke. |

---

### Objective 2.2 — Understand Redundancy (BC, BCP, DR, DRP)
- **Allocated Published Lessons:**
  - `lesson-d2-03-business-continuity-bcp` (6 slides: `slide-01`–`slide-06`)
  - `lesson-d2-04-disaster-recovery-drp` (9 slides: `slide-01`–`slide-09`)
- **Total Published Slides:** 15 slides
- **Coverage Status:** `DEFICIENT IN PRESENTATION MODE (REWORK REQUIRED)`

| Subtopic / Concept | Primary Source Evidence | Mapped Published Slide ID | Reading / Info Status | Presentation Mode Status & Defect Analysis |
|---|---|---|:---:|---|
| **Redundancy & Business Continuity (BC) Definition** | `Domain 2.md` §6 (`L166–170`), `S11`, `S12` | `slide-01-redundancy-and-bc-foundations` | Complete | Shows primary vs alternate service route. |
| **All 8 Disruption Triggers on `S12` + Human Error** | `Domain 2.md` §6.1 (`L171–185`), `S12` | `slide-02-eight-disruption-triggers` | Complete (all 8 + human error) | **CRITICAL DEFECT (D2-DEF-01):** Presentation drops 5 of 8 triggers. Shows only Flood, Network, Staff. Footer pushes student to Reading Mode. |
| **All 8 BCP Elements on `S13`/`S14`** | `Domain 2.md` §7 (`L187–202`), `S13–S14` | `slide-03-bcp-and-eight-elements` | Complete (all 8) | **CRITICAL DEFECT (D2-DEF-01):** Presentation drops 4 of 8 elements. Shows only 4 excerpt fields. Footer pushes student to Reading Mode. |
| **Alternate Locations, Personnel & Suppliers** | `Domain 2.md` §7.1 (`L196–198`), `S14` | `slide-04-operational-redundancy-strategies` | Complete | Shows common-cause dependency failure (same upstream fiber). |
| **BIA & Recovery Priorities** | `Domain 2.md` §7.1 (`L200`), `S14` + NIST SP 800-34r1 | `slide-05-bia-and-recovery-priorities` | Complete | Shows order-processing outage dependencies. |
| **Interactive Scenario 3** (Facility Outage Response) | `Domain 2.md` §25 `Q4` | `slide-06-continuity-decision-scenario` | Complete | **DEFECT (D2-DEF-06):** Distractor A ("Wait for HQ to recover") is passive and trivial. |
| **Disaster Recovery (DR) Definition & 5 Purposes** | `Domain 2.md` §8.1–8.3 (`L204–224`), `S15–S16` | `slide-01-dr-definition-purposes-drp` | Complete (all 5) | Renders disrupted IT flow. *Refinement:* Needs clearer vector diagram. |
| **5 Importance Points of DR & Regulatory Context** | `Domain 2.md` §8.4 (`L225–235`), `S17` (`D2-Q04`) | `slide-02-importance-of-disaster-recovery` | Complete | Shows order outage chain. GDPR/HIPAA properly bounded. |
| **5 Core DRP Components & Response Flow** | `Domain 2.md` §9.1–9.2 (`L238–256`), `S18` | `slide-03-emergency-response-and-priorities` | Complete | Renders emergency flow (`Contain → Assess → Notify`). |
| **RTO vs RPO Visual Timeline & Calculations** | `Domain 2.md` §9.3 (`L257–273`), `S18`, `DOMAIN 2.txt` | `slide-04-rto-and-rpo-timelines` | Complete | **DEFECT (D2-DEF-05):** Plain HTML flex dots instead of dedicated, scalable SVG timeline diagram. |
| **Backup Strategies (Cloud / Off-site Storage)** | `Domain 2.md` §9.4 (`L275–281`), `S18` (`D2-Q01`) | `slide-05-backup-and-restoration-procedures` | Complete | Renders backup-restore-verify flow. |
| **Recovery Sites (Hot, Warm, Cold)** | `Domain 2.md` §9.5, `S18` | `slide-06-recovery-site-strategies` | Complete | Shows relative readiness strips. Needs graphical depth. |
| **DRP Testing & Exercises** | `Domain 2.md` §9.5, `S18` | `slide-07-drp-testing-and-maintenance` | Complete | Shows exercise-measure-correct loop. |
| **BC vs DR 7-Dimension Comparison Table** | `Domain 2.md` §10 (`L296–306`), `S19` | `slide-08-bc-versus-dr-relationship` | Complete (all 7) | **DEFECT (D2-DEF-05):** Side-by-side text cards rather than clear concentric visual (`DR ⊂ BC`). |
| **Interactive Scenario 4** (RTO/RPO Database Outage) | `Domain 2.md` §25 `Q5`, `S18` | `slide-09-disaster-recovery-scenario` | Complete | Tests 17:00 failure with 16:30 backup. Good calculation question. |

---

### Objective 2.3 — Understand Security Awareness (Awareness, Culture, Leadership, Social Engineering, Passwords)
- **Allocated Published Lessons:**
  - `lesson-d2-05-security-awareness-culture-leadership` (6 slides: `slide-01`–`slide-06`)
  - `lesson-d2-06-social-engineering-password-protection` (8 slides: `slide-01`–`slide-08`)
- **Total Published Slides:** 14 slides
- **Coverage Status:** `DEFICIENT IN PRESENTATION MODE (REWORK REQUIRED)`

| Subtopic / Concept | Primary Source Evidence | Mapped Published Slide ID | Reading / Info Status | Presentation Mode Status & Defect Analysis |
|---|---|---|:---:|---|
| **Security Awareness Definition & 5 Core Purposes** | `Domain 2.md` §11.1 (`L326–334`), `S21` | `slide-01-awareness-to-safe-action` | Complete (all 5) | **CRITICAL DEFECT (D2-DEF-02):** Presentation loops over `[0, 2, 4]`, dropping 2 of 5 purposes from visual canvas. |
| **Awareness vs Training Distinction** | `Domain 2.md` §11.2, NIST SP 800-50r1 | `slide-02-awareness-and-training` | Complete | Renders 2 text cards. Bare wireframe aesthetic. |
| **Security Culture & 6 Encouraged Behaviors** | `Domain 2.md` §12 (`L336–347`), `S22` | `slide-03-shared-daily-culture` | Complete (all 6) | **CRITICAL DEFECT (D2-DEF-02):** Presentation renders only 2 text blocks, dropping 4 concrete culture behaviors. |
| **Security Leadership & 6 Duties** | `Domain 2.md` §13 (`L353–367`), `S23` | `slide-04-leadership-makes-rules-credible` | Complete (all 6) | **CRITICAL DEFECT (D2-DEF-02):** Presentation renders 2 cards, dropping 4 leadership duties. |
| **Reinforcement & Non-Punitive Feedback Loop** | `Domain 2.md` §11–13, NIST SP 800-50r1 | `slide-05-reinforcement-and-feedback` | Complete | Shows 3-step feedback loop. Needs visual polish. |
| **Interactive Scenario 5** (Leadership & Culture Gap) | `Domain 2.md` §25 `Q6` | `slide-06-culture-and-leadership-decision` | Complete | Good workplace reporting scenario. |
| **Social Engineering Definition & 5 Psychological Triggers** | `Domain 2.md` §14 (`L369–383`), `S24` | `slide-01-manipulation-and-request` | Complete (all 5 + greed/helpfulness) | Shows pressure vs request. Needs iconographic badges. |
| **Phishing Spectrum** (Phishing, Spear Phishing, Whaling) | `Domain 2.md` §15.1–15.3 (`L385–396`), `S25` | `slide-02-targeted-phishing-techniques` | Complete | Splits techniques by target scope. |
| **Voice, SMS & Pretexting** (Vishing, Smishing, Pretexting) | `Domain 2.md` §15.4–15.6 (`L397–404`), `S25–S26` | `slide-03-voice-sms-pretexting` | Complete | Shows channel deception and AI impersonation context. |
| **Verification & Reporting Controls** | `Domain 2.md` §15, FTC guidance | `slide-04-verification-and-reporting` | Complete | Shows out-of-band verification and safe reporting. |
| **Employee Password Hygiene** (7 Spoken Practices) | `DOMAIN 2.txt` L89–91, `Domain 2.md` §16 | `slide-05-employee-password-hygiene` | Complete (all 7) | Highlights password reuse risks and password managers. |
| **Organizational Password Protection** (5 Controls on `S27`) | `Domain 2.md` §16 (`L410–422`), `S27` | `slide-06-organizational-credential-protection` | Complete (all 5) | Shows 5 organizational controls. |
| **MFA vs Phishing-Resistant Authentication** | `Domain 2.md` §16.1 + NIST SP 800-63B (`D2-Q05`) | `slide-07-mfa-and-phishing-resistance` | Complete | Contrasts legacy OTP with FIDO2 / Passkeys. |
| **Interactive Scenario 6** (Urgent IT Caller / Vishing) | `Domain 2.md` §25 `Q7`, `S25` | `slide-08-urgent-it-caller-decision` | Complete | Tests out-of-band callback verification. Solid scenario. |

---

### Objective 2.4 — Measure Cybersecurity Effectiveness (Metrics, KPIs, KRIs, Dashboards, Scorecards, Reports)
- **Allocated Published Lessons:**
  - `lesson-d2-07-security-metrics-kpi-kri` (7 slides: `slide-01`–`slide-07`)
  - `lesson-d2-08-dashboards-scorecards-reports` (6 slides: `slide-01`–`slide-06`)
- **Total Published Slides:** 13 slides
- **Coverage Status:** `PASS WITH VISUAL REFINEMENT`

| Subtopic / Concept | Primary Source Evidence | Mapped Published Slide ID | Reading / Info Status | Presentation Mode Status & Defect Analysis |
|---|---|---|:---:|---|
| **Measuring Effectiveness & 7 Purposes** | `Domain 2.md` §17 (`L424–438`), `S28–S29` | `slide-01-measure-for-a-decision` | Complete (all 7) | **DEFECT (D2-DEF-01):** Presentation renders abstract 3-box pipeline, dropping specific purposes. |
| **Defining Actionable Metrics** (Denominators & Time Windows) | `Domain 2.md` §18 (`L440–445`), NIST SP 800-55v1 | `slide-02-denominator-and-window` | Complete | Shows 18/20 fraction and sample population. |
| **MTTD & MTTR Definitions & Boundaries** | `Domain 2.md` §18.1 (`L446–451`), `S30` | `slide-03-detection-and-response-boundaries` | Complete | Shows incident clock and defines MTTR as Mean Time to Respond. |
| **Key Risk Indicators (KRIs)** (All 6 `S32` Examples) | `Domain 2.md` §19 (`L472–489`), `S32` | `slide-04-kri-exposure` | Complete (all 6) | Shows exposure check and investigation trigger. |
| **Key Performance Indicators (KPIs)** (15-Day Patching `S33`) | `Domain 2.md` §20 (`L491–500`), `S33` | `slide-05-kpi-performance-objective` | Complete | Shows cohort vs 95% target. |
| **KPI vs KRI Distinction & Trend Analysis** | `Domain 2.md` §20.2 (`L501–509`), `S32–S33` | `slide-06-interpretation-and-indicator-role` | Complete | Contrasts performance vs risk indicators; leading vs lagging. |
| **Interactive Scenario 7** (Evaluating KRI vs KPI Evidence) | `Domain 2.md` §25 `Q8–Q9` | `slide-07-metrics-decision` | Complete | Tests investigating underlying exposure vs celebrating KPI. |
| **Security Dashboards** (Real-Time Visual Monitoring) | `Domain 2.md` §21 (`L511–526`), `S34` | `slide-01-dashboard-status-and-trend` | Complete (all topics) | Shows status/trend layout. Needs graphic dashboard styling. |
| **Security Scorecards** (Target vs Actual Grading) | `Domain 2.md` §22.1–22.2, `S35` | `slide-02-scorecard-targets-and-actuals` | Complete | Shows executive scorecard comparison purpose. |
| **Worked Scorecard Table & Row 4 Unit Discrepancy** | `Domain 2.md` §22.3, `S36` (`D2-Q03` / `KNOW-D2-054`) | `slide-03-four-row-scorecard-discrepancy` | Complete (all 4 rows) | Shows S36 table; explicitly highlights `< 10` vs `< 10%` unit lesson. Unscored. |
| **Cybersecurity Reports** (7 Formal Core Elements) | `Domain 2.md` §23 (`L558–572`), `S37` | `slide-04-formal-reporting-components` | Complete (all 7) | Shows evidence $\rightarrow$ impact $\rightarrow$ recommendation structure. |
| **Exam Memory Aid & 6-Term Synthesis** | `Domain 2.md` §23.1, `S38` | `slide-05-reporting-synthesis-and-audiences` | Complete (all 6 terms) | Aligns Metric, KPI, KRI, Dashboard, Scorecard, Report to audiences. |
| **Interactive Scenario 8** (Audience Reporting Selection) | `Domain 2.md` §25 `Q10–Q12` | `slide-06-reporting-decision` | Complete | Tests executive scorecard vs operational dashboard selection. |

---

## 3. Objective Coverage Verdict Summary

| Objective | Published Lessons | Slides | Official Syllabus Coverage | Visual Presentation Quality | Recovery Requirement |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **2.1 Plan GRC** | L1, L2 | 13 | **100% Full Coverage** | Moderate (Needs contrast & layout balance) | **REFINE** presentation layouts; **REPLACE** silly scenario distractors. |
| **2.2 Understand Redundancy** | L3, L4 | 15 | **100% Full Coverage** | **DEFICIENT (Severe Truncation in L3)** | **REWORK** L3 to restore all 8 disruptions and 8 BCP elements; **ADD** SVG timeline & scope diagrams. |
| **2.3 Understand Security Awareness** | L5, L6 | 14 | **100% Full Coverage** | **DEFICIENT (Severe Truncation in L5)** | **REWORK** L5 to restore all 5 purposes, 6 culture behaviors, and 6 leadership duties. |
| **2.4 Measure Effectiveness** | L7, L8 | 13 | **100% Full Coverage** | Moderate (Needs graphical dashboard polish) | **REFINE** L7/L8 presentations with visual charts and clear scorecard styling. |
| **Total Domain 2** | **8 Lessons** | **55 Slides** | **100% Full Coverage** | **Unsatisfactory Overall** | **Systematic Phased Recovery Plan** |

---

*End of Official Exam Outline & Source Coverage Matrix.*
