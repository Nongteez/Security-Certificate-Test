# ISC2 CC 2026 — Domain 2 Learning Slides: Recovery & Redesign Master Plan

- **Domain:** Domain 2 — Security Governance (`17.3%` Exam Weight; Objectives `2.1`–`2.4`)
- **Exam Outline:** `isc2-cc-2026-09-01` (Effective September 1, 2026)
- **Role:** Engineering & Academic Review Agent Handoff Master Plan
- **Status:** Complete — Pending Human Authorization for Phase 2 Implementation
- **Mandate:** Strictly Audit & Planning Only (Zero production code modifications in this task)

---

## 1. Vision & Architectural Principles

The objective of the Domain 2 Recovery Plan is to elevate the Domain 2 Learning Slides from their current unsatisfactory state to the high academic and visual standard established by Domain 1, without compromising repository stability or student progress.

### Core Non-Negotiable Principles:
1. **Zero Slide or Lesson ID Churn:**
   - All 8 published lesson IDs (`lesson-d2-01-*` through `lesson-d2-08-*`) and all 55 published slide IDs (`slide-01-*` through `slide-0*`) are permanent and must be strictly preserved. Student progress keys (`sec_cert_learning_progress_v1`) depend on these exact identifiers.
2. **Eliminate Didactic Truncation:**
   - Presentation Mode must be an autonomous, self-contained educational experience. Never omit substantive concepts from the visual presentation canvas or tell students via footers to "read Reading Mode" to see the curriculum.
3. **Domain 1 Visual Parity:**
   - Replace monotonous "box-and-arrow" wireframes with textbook-grade instructional graphics, including scalable vector diagrams (SVG), clean split-screen layouts, iconographic cards, and balanced whitespace distribution.
4. **Authentic Scenario Distractors:**
   - Replace caricature distractors with realistic candidate misconceptions that test nuanced governance decision-making.
5. **Decouple Presentation from Rigid Schema Guards:**
   - Eliminate brittle `b?.length===5 && text,table,text,list,text` validation guards that break when slide content naturally expands.
6. **Strict Protection Boundaries:**
   - Domain 1 Learning Slides, question banks (583 legacy + 119 next-bank), vocabulary (403 terms), and quiz engines are strictly read-only and preserved.

---

## 2. Granular Component & Slide Decision Register

Every lesson and slide is evaluated and assigned concrete recovery decisions (`KEEP`, `REFINE`, `REWORK`, `REPLACE`, `ADD`, `REMOVE`):

### 2.1 Objective 2.1 — Plan GRC (Lessons 1 & 2)

#### Lesson 1: `lesson-d2-01-grc-foundations` (6 Slides)
- **`slide-01-grc-foundations`:** `REFINE` layout and typography. Upgrade the 3-role cards (`Governance`, `Risk`, `Compliance`) with distinct theme accent borders and clearer hierarchy connecting them to the business objective.
- **`slide-02-purpose-of-grc`:** `REWORK` presentation. Currently renders only an access-review evidence example. Redesign to feature a clean, scannable two-column layout showing all 7 GRC Purposes on the left and the coordinated access-review evidence reuse on the right.
- **`slide-03-importance-of-grc`:** `REFINE` table presentation. Convert the 4 remedy rows into high-contrast comparative cards contrasting "Without GRC" (failure states) against "With Effective GRC" (resilience outcomes).
- **`slide-04-grc-frameworks`:** `REFINE` visual presentation. Add distinctive visual badges for `NIST CSF`, `ISO/IEC 27001`, and `COBIT` highlighting their specific scope and non-regulatory status.
- **`slide-05-grc-distinctions`:** `KEEP` conceptual model; `REFINE` visual styling. Enhance the Governance $\leftrightarrow$ Management feedback loop and the Compliance $\neq$ Risk Management distinction with clearer graphic tokens.
- **`slide-06-applied-grc-scenario`:** `REPLACE` distractors B and D. Replace caricature options ("stop operating until certified", "declare risk permanently eliminated") with plausible candidate traps (e.g., focusing on individual technical controls rather than governance alignment, or treating an ISMS audit as a substitute for risk assessment).

#### Lesson 2: `lesson-d2-02-grc-tools-risk-register` (7 Slides)
- **`slide-01-grc-tools-platform`:** `REFINE` split-screen layout. Enhance the visual contrast between fragmented spreadsheets and centralized GRC platform records.
- **`slide-02-six-grc-tool-capabilities`:** `KEEP` the 6 capability links; `REFINE` CSS grid layout for better desktop spacing.
- **`slide-03-risk-register-anatomy`:** `REWORK` layout. Display a realistic, beautifully formatted Risk Register entry showcasing all 11 core fields alongside the Risk Assessment $\rightarrow$ Risk Register workflow.
- **`slide-04-scoring-and-treatment`:** `KEEP` ordinal calculation (`3 × 4 = 12`); `REFINE` the 4 treatment strategy cards (`Mitigate`, `Accept`, `Transfer`, `Avoid`) with clear operational examples.
- **`slide-05-ransomware-worked-example`:** `REFINE` visual cards showing how layered controls (MFA, segmentation, EDR, backups) mitigate ransomware impact and likelihood.
- **`slide-06-residual-risk-and-ownership`:** `REFINE` diagram. Visually illustrate that mitigation reduces inherent risk but always leaves residual risk (`> 0`), requiring formal leadership acceptance and assigned ownership.
- **`slide-07-risk-register-scenario`:** `REPLACE` distractor D. Remove the "$16,000 score" joke; replace with a realistic distractor where an owner assumes transferred risk removes operational reporting duties.

---

### 2.2 Objective 2.2 — Understand Redundancy (Lessons 3 & 4)

#### Lesson 3: `lesson-d2-03-business-continuity-bcp` (6 Slides)
- **`slide-01-redundancy-and-bc-foundations`:** `REFINE` layout. Enhance the service path diagram contrasting primary vs prepared alternate path with capacity constraints.
- **`slide-02-eight-disruption-triggers`:** `REWORK` presentation (**CRITICAL**). Eliminate the 3-item truncation. Implement a responsive 8-item visual grid showcasing all 8 source disruption triggers (`Natural disasters`, `Cyberattacks`, `Power outages`, `Equipment failures`, `Network outages`, `Pandemics`, `Loss of facilities`, `Supply-chain disruptions`) plus `Human Error`. `REMOVE` the meta-commentary footer pushing students to Reading Mode.
- **`slide-03-bcp-and-eight-elements`:** `REWORK` presentation (**CRITICAL**). Eliminate the 4-item truncation. Present all 8 BCP Elements (`Critical processes`, `Roles`, `Communications`, `Alternate locations`, `Backup personnel`, `Alternate suppliers`, `Essential technology`, `Recovery priorities`) within a structured operations manual layout. `REMOVE` the meta-commentary footer.
- **`slide-04-operational-redundancy-strategies`:** `REFINE` common-cause failure diagram. Enhance the shared fiber cut illustration to emphasize that different supplier contracts do not guarantee independent physical paths.
- **`slide-05-bia-and-recovery-priorities`:** `REFINE` dependency visual. Clarify the BIA workflow connecting business outage tolerance over time to IT recovery sequencing.
- **`slide-06-continuity-decision-scenario`:** `REPLACE` distractor A ("Wait for HQ to recover"). Replace with an active, realistic distractor such as attempting unprioritized immediate recovery without activating the BCP.

#### Lesson 4: `lesson-d2-04-disaster-recovery-drp` (9 Slides)
- **`slide-01-dr-definition-purposes-drp`:** `REFINE` visual flow connecting disrupted IT systems to DRP procedures and restored critical operations.
- **`slide-02-importance-of-disaster-recovery`:** `REFINE` consequence chain card. Retain bounded regulatory examples (GDPR/HIPAA).
- **`slide-03-emergency-response-and-priorities`:** `REFINE` emergency triage sequence (`Contain` $\rightarrow$ `Assess` $\rightarrow$ `Notify`).
- **`slide-04-rto-and-rpo-timelines`:** `ADD` dedicated SVG vector diagram (**HIGH VALUE**). Replace plain HTML dots with a crisp, interactive timeline diagram clearly showing:
  - Last Valid Backup (`16:30` / RPO window = 30 min maximum allowable data loss)
  - Disaster Event (`17:00` / Outage begins)
  - Target Service Restoration (`18:00` / RTO window = 1 hour maximum allowable downtime)
  - Actual Recovery Timestamp contrast.
- **`slide-05-backup-and-restoration-procedures`:** `REFINE` visual layout comparing cloud backups and off-site physical storage, highlighting restore-testing validation.
- **`slide-06-recovery-site-strategies`:** `REWORK` presentation. Implement an intuitive comparative visual matrix contrasting **Hot Site** (immediate, mirrored data, highest cost), **Warm Site** (partially equipped, hours/days, medium cost), and **Cold Site** (space/power only, days/weeks, lowest cost).
- **`slide-07-drp-testing-and-maintenance`:** `REFINE` testing lifecycle loop (Checklist $\rightarrow$ Tabletop $\rightarrow$ Simulation $\rightarrow$ Full Interruption).
- **`slide-08-bc-versus-dr-relationship`:** `ADD` concentric SVG diagram (**HIGH VALUE**). Replace plain side-by-side text cards with a concentric scope illustration showing Disaster Recovery as an essential IT-focused subset of Business Continuity (`DR ⊂ BC`), complemented by the 7-dimension comparison table.
- **`slide-09-disaster-recovery-scenario`:** `KEEP` the 17:00 failure / 16:30 backup calculation scenario; `REFINE` distractor explanations.

---

### 2.3 Objective 2.3 — Understand Security Awareness (Lessons 5 & 6)

#### Lesson 5: `lesson-d2-05-security-awareness-culture-leadership` (6 Slides)
- **`slide-01-awareness-to-safe-action`:** `REWORK` presentation (**CRITICAL**). Eliminate the 3-item truncation. Visually map all 5 Core Purposes of Security Awareness on `S21` (Reduce human error, Recognize threats, Promote safe handling, Support policy compliance, Strengthen human defense).
- **`slide-02-awareness-and-training`:** `REFINE` comparative cards distinguishing Knowledge (Awareness = recognizing threats) from Skill (Training = hands-on practice).
- **`slide-03-shared-daily-culture`:** `REWORK` presentation (**CRITICAL**). Eliminate the 2-box reduction. Visually present all 6 Encouraged Behaviors of Security Culture on `S22` (Reporting incidents, Following policy, Protecting sensitive data, Questioning unusual requests, Taking shared responsibility, Treating security as daily work).
- **`slide-04-leadership-makes-rules-credible`:** `REWORK` presentation (**CRITICAL**). Eliminate the 2-box reduction. Visually present all 6 Leadership Responsibilities on `S23` (Set expectations, Support policies, Provide training/tool resources, Model secure behavior, Encourage blameless reporting, Hold teams accountable).
- **`slide-05-reinforcement-and-feedback`:** `REFINE` feedback loop diagram showing how simulated phishing and reporting metrics continuously improve training.
- **`slide-06-culture-and-leadership-decision`:** `KEEP` reporting decision scenario; `REFINE` distractor feedback clarity.

#### Lesson 6: `lesson-d2-06-social-engineering-password-protection` (8 Slides)
- **`slide-01-manipulation-and-request`:** `REFINE` layout. Display all 5 Psychological Triggers (`Urgency`, `Fear`, `Authority`, `Trust`, `Curiosity`) with distinct graphic badges.
- **`slide-02-targeted-phishing-techniques`:** `REFINE` comparison cards distinguishing broad `Phishing` from targeted `Spear Phishing` and executive-level `Whaling`.
- **`slide-03-voice-sms-pretexting`:** `REFINE` cards covering `Smishing` (SMS) and `Vishing` (Voice) along with `Pretexting` scenarios.
- **`slide-04-verification-and-reporting`:** `REFINE` protocol diagram illustrating the "Stop, Verify via Out-of-Band Channel, and Report" security behavior.
- **`slide-05-employee-password-hygiene`:** `REFINE` card matrix presenting all 7 spoken employee password practices (passphrase length, no reuse, password managers, MFA).
- **`slide-06-organizational-credential-protection`:** `REFINE` visual grid presenting all 5 Organizational Controls on `S27`.
- **`slide-07-mfa-and-phishing-resistance`:** `REFINE` comparison matrix contrasting legacy MFA (SMS/email OTP vulnerable to proxy phishing) against phishing-resistant authenticators (FIDO2 / WebAuthn / Passkeys).
- **`slide-08-urgent-it-caller-decision`:** `KEEP` the urgent IT caller vishing scenario; `REFINE` feedback clarity.

---

### 2.4 Objective 2.4 — Measure Cybersecurity Effectiveness (Lessons 7 & 8)

#### Lesson 7: `lesson-d2-07-security-metrics-kpi-kri` (7 Slides)
- **`slide-01-measure-for-a-decision`:** `REWORK` presentation. Eliminate the abstract 3-box pipeline; map the 7 Core Purposes of Measuring Effectiveness from `S29`.
- **`slide-02-denominator-and-window`:** `REFINE` percentage calculation visual. Enhance the 18/20 patch compliance visual with clear population boundaries.
- **`slide-03-detection-and-response-boundaries`:** `REFINE` incident clock diagram. Clearly define MTTD (Mean Time to Detect) and MTTR (Mean Time to Respond) intervals.
- **`slide-04-kri-exposure`:** `REFINE` KRI card display. Visually showcase the 6 authentic KRI examples from `S32`, emphasizing forward-looking risk exposure.
- **`slide-05-kpi-performance-objective`:** `REFINE` KPI progress card. Illustrate target vs actual performance using the 15-day critical patch KPI.
- **`slide-06-interpretation-and-indicator-role`:** `REFINE` comparative grid contrasting KRIs (Leading / Risk) against KPIs (Lagging / Performance).
- **`slide-07-metrics-decision`:** `KEEP` KRI vs KPI evidence scenario; `REFINE` distractor feedback.

#### Lesson 8: `lesson-d2-08-dashboards-scorecards-reports` (6 Slides)
- **`slide-01-dashboard-status-and-trend`:** `REWORK` presentation. Redesign into an authentic-looking, clean security dashboard mock-up displaying real-time alerts, patch status, and vulnerability counts.
- **`slide-02-scorecard-targets-and-actuals`:** `REFINE` executive scorecard layout contrasting operational metrics against strategic governance goals.
- **`slide-03-four-row-scorecard-discrepancy`:** `REFINE` table presentation. Present the exact 4-row worked example from `S36`, prominently highlighting the Row 4 unit conflict (`< 10` vs `< 10%`) as a governance data-integrity lesson. Retain unscored status.
- **`slide-04-formal-reporting-components`:** `REFINE` formal report layout displaying the 7 Core Report Elements from `S37`.
- **`slide-05-reporting-synthesis-and-audiences`:** `ADD` synthesis graphic (**HIGH VALUE**). Create a clear, high-contrast matrix connecting all 6 core terms (`Metric`, `KPI`, `KRI`, `Dashboard`, `Scorecard`, `Report`) to their respective enterprise audiences (Operations, Management, Board of Directors).
- **`slide-06-reporting-decision`:** `KEEP` reporting audience selection scenario; `REFINE` feedback rationales.

---

## 3. Systematic Phased Recovery Roadmap

```
+---------------------------------------------------------------------------------+
| Phase 1: Audit, Planning & Human Review (Task 140 - Current Task)                |
| - Comprehensive defect audit, source mapping, and recovery plan formulation     |
+---------------------------------------------------------------------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------+
| Phase 2: Design System & Shared Visual Foundations for Domain 2                  |
| - Domain 2 CSS tokens, responsive desktop container system (1920/1366)          |
| - Reusable visual components: vector timeline, comparison cards, status badges  |
+---------------------------------------------------------------------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------+
| Phase 3: Objective 2.1 Recovery (Lessons 1 & 2 - GRC Foundations & Tools)       |
| - Full redesign of L1 & L2 presentation renderers; replace silly distractors   |
| - Unit verification & real Chrome browser visual QA                             |
+---------------------------------------------------------------------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------+
| Phase 4: Objective 2.2 Recovery (Lessons 3 & 4 - Business Continuity & DR)      |
| - Restore 8 disruptions & 8 BCP elements in L3; author SVG RTO/RPO & BC/DR maps |
| - Unit verification & real Chrome browser visual QA                             |
+---------------------------------------------------------------------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------+
| Phase 5: Objective 2.3 Recovery (Lessons 5 & 6 - Awareness & Social Eng)        |
| - Restore 5 awareness purposes, 6 culture behaviors & 6 leadership duties in L5 |
| - Refine password protection & phishing spectrum in L6; browser visual QA       |
+---------------------------------------------------------------------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------+
| Phase 6: Objective 2.4 Recovery (Lessons 7 & 8 - Metrics & Governance Reports)  |
| - Upgrade dashboard & scorecard presentation layouts in L7 & L8                 |
| - Author 6-term executive synthesis matrix; browser visual QA                   |
+---------------------------------------------------------------------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------+
| Phase 7: Full-Domain Verification, Multi-Device Browser QA & Human Gate         |
| - Comprehensive regression across all 8 lessons (55 slides x 2 languages)       |
| - Evidence-backed visual review and human acceptance sign-off                   |
+---------------------------------------------------------------------------------+
```

---

## 4. Recommended First Implementation Task

Upon human review and approval of this plan, the immediate next action is:

### **Task 141 — Domain 2 Learning Slides: Visual Design System & Objective 2.1 Production Redesign (Lessons 1 & 2)**

- **Mission:** Establish the unified Domain 2 visual design system (CSS tokens, desktop layout grids, container scaling rules) and execute the production redesign of Objective 2.1 (**Lesson 1: GRC Foundations** and **Lesson 2: GRC Tools & Risk Register**).
- **Scope of Execution:**
  1. Author shared visual styling tokens in `css/learning-domain2-lesson-shell.css` resolving desktop whitespace and contrast issues.
  2. Redesign `js/ui/learning/grc-foundations-presentations.js` and `css/learning-grc-foundations.css` (Slides 1–6).
  3. Redesign `js/ui/learning/grc-tools-risk-register-presentations.js` and `css/learning-grc-tools-risk-register.css` (Slides 1–7).
  4. Replace non-credible scenario distractors in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json` and `lesson-d2-02-grc-tools-risk-register.json`.
  5. Refine Thai terminology for naturalness across Lessons 1 & 2.
  6. Verify in real Chrome browser (1920×1080 and 1366×768 in TH/EN modes).
  7. Pass all focused unit tests and preserve baseline boundaries.

---

*End of Recovery Master Plan.*

