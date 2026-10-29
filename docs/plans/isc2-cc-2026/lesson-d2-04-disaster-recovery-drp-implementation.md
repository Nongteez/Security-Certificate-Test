# Domain 2 Lesson 4 Implementation & Academic QA Report — `lesson-d2-04-disaster-recovery-drp`

**Lesson ID:** `lesson-d2-04-disaster-recovery-drp`  
**Title (EN):** Disaster Recovery, RTO/RPO & Recovery Strategies  
**Title (TH):** การกู้คืนจากภัยพิบัติ (DR/DRP) ค่า RTO/RPO และกลยุทธ์การกู้คืนระบบ  
**Domain:** Domain 2 — Security Governance (`17.3%`)  
**Objective:** `2.2` — Understand redundancy (`เข้าใจการจัดให้มีระบบหรือทรัพยากรสำรอง`)  
**Outline ID:** `isc2-cc-2026-09-01`  
**Slide Count:** `9` bilingual (`th` / `en`) slides  
**Publication Status:** Published (`content/isc2-cc-2026/learning/published/lessons/lesson-d2-04-disaster-recovery-drp.json`) and staged (`content/isc2-cc-2026/learning/staged/lessons/lesson-d2-04-disaster-recovery-drp.json`)

---

## 1. Source Reconciliation & Slide-by-Slide Traceability Matrix

During pre-implementation inspection of `docs/plans/isc2-cc-2026/domain-2-learning-roadmap.md` (`L283–347`), `domain-2-2026-coverage-matrix.md` (`L75–107`), `Domain 2.md` (`§8–§10`, `L204–318`), `D2 sum.md` (`L204–306`), `DOMAIN 2.txt` (`L43–72`), and course screenshots `S15`–`S19`, we reconciled the 9-slide sequence so that it preserves the exact 9-slide count and teaches all five explicit DRP components shown on `S18` (`Screenshot 2026-09-20 183410.png`) plus `S16`, `S17`, and `S19`:

| # | Slide ID | Title (EN / TH) | Primary Source Locators | Custom Visual Composition (`data-dr-drp-composition`) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | `slide-01-dr-definition-purposes-drp` | Disaster Recovery (DR) restores IT systems and data as a critical part of Business Continuity. / Disaster Recovery (DR) มุ่งกู้คืนระบบ IT และข้อมูล โดยเป็นส่วนสำคัญที่สนับสนุน Business Continuity | `Domain 2.md` §8.1–8.3 (`L208–225`), §9 (`L238–239`); `D2 sum.md` `L206–218`; `T:L43–48`; `S15`, `S16` | `dr-nested-scope-foundations`: Nested `BC (BCP) ⊃ DR (DRP)` scope diagram + 4 core DR purposes (`S16`) + 3 key concepts (`S16`) + `DR vs. DRP` vs. `BC vs. BCP` distinction strip |
| 2 | `slide-02-dr-importance-and-compliance-bounds` | Why Disaster Recovery matters: five strategic benefits and bounded regulatory obligations. / เหตุใด Disaster Recovery จึงสำคัญ: ประโยชน์เชิงกลยุทธ์ 5 ด้าน และขอบเขตข้อกำหนดทางกฎหมาย | `Domain 2.md` §8.4 (`L226–235`); `T:L49–53`; `S17` (`183349.png`); `D2-Q04` (`KNOW-D2-028`) | `dr-strategic-benefits-bounds`: 5-card `S17` strategic benefit board (`Minimizes Downtime`, `Protects Data Integrity`, `Supports Compliance`, `Reduces Financial Losses`, `Enhances Customer Trust`) + explicit `D2-Q04` regulatory boundary callout on `GDPR` (PII) and `HIPAA` (PHI) |
| 3 | `slide-03-rto-and-rpo-timeline` | RTO bounds forward downtime after disruption; RPO bounds backward data loss in time. / RTO จำกัดเวลาหยุดทำงานไปข้างหน้าหลังเกิดเหตุ ส่วน RPO จำกัดเวลาของข้อมูลย้อนหลังที่ยอมรับการสูญเสียได้ | `Domain 2.md` §9.1–9.2 (`L240–255`), §24.2 (`L604–612`); `D2 sum.md` `L236–287`; `T:L54–59`; `S18` (`183410.png`) | `rto-rpo-directional-timeline`: Split directional incident timeline (`Last Valid Backup` ← **RPO** [Backward Data-Loss Tolerance] — `Incident T₀` — **RTO** [Forward Downtime Tolerance] → `Service Restored`) + `Target ≠ Guarantee` engineering banner |
| 4 | `slide-04-worked-recovery-target-examples` | Worked recovery target timelines: applying RPO and RTO to concrete outage clocks. / ตัวอย่างการคำนวณเป้าหมายการกู้คืนจริง: การนำ RPO และ RTO ไปจับคู่กับเวลาเกิดเหตุและเวลาสำรองข้อมูล | `Domain 2.md` §9.3 (`L256–271`), §25 Q3 (`L664–665`); `T:L57–60`; `S18` (`183410.png`) | `worked-outage-target-analysis`: Dual worked clock analyzer comparing Case A (`Domain 2.md` §9.3: `16:30` backup / `17:00` outage / `18:00` restoration for `RPO = 30m`, `RTO = 1h`) and Case B (`S18` & `T:L57–60`: `4:00 PM` backup → `4:30 PM` crash = `30m` loss; `5:00 PM` target vs. `5:20 PM` actual = `20m` breach) |
| 5 | `slide-05-backup-and-restoration-strategies` | Backup and recovery strategies combine cloud backups, off-site storage, and verified restoration. / กลยุทธ์การสำรองและกู้คืนข้อมูลต้องผสาน Cloud Backups, Off-site Storage และการทดสอบกู้คืนจริง | `Domain 2.md` §9.4 (`L272–277`); `D2 sum.md` `L294`; `T:L61–62`; `S18` (`183410.png`); `D2-Q01` | `backup-offsite-resilience-architecture`: Primary site vs. geographically separated `Cloud Backups` & `Off-site Storage` (`D2-Q01` correction) + `Backup Frequency ↔ RPO` & `Restore Speed ↔ RTO` mapping |
| 6 | `slide-06-dr-sites-hot-warm-cold` | Disaster Recovery sites balance readiness, transition time, and cost across Hot, Warm, and Cold tiers. / ศูนย์สำรองกู้คืนภัยพิบัติสร้างสมดุลระหว่างความพร้อม ระยะเวลาเปลี่ยนผ่าน และต้นทุน ผ่าน Hot, Warm และ Cold Site | `Domain 2.md` §9.5 (`L278–291`), §24.1 (`L595–602`); `D2 sum.md` `L295–305`; `T:L63–65`; `S18` (`183410.png`) | `recovery-sites-spectrum`: 3-tier `Hot Site` / `Warm Site` / `Cold Site` readiness, recovery speed, cost, and dependency spectrum with visual meter bars |
| 7 | `slide-07-drp-testing-and-coordination` | Regular DRP testing, drills, and clear recovery priorities turn documented plans into operational readiness. / การทดสอบและซ้อมแผน DRP อย่างสม่ำเสมอ พร้อมลำดับความสำคัญที่ชัดเจน เปลี่ยนแผนบนกระดาษให้พร้อมใช้งานจริง | `Domain 2.md` §9.6 (`L292–297`); `D2 sum.md` `L306`; `T:L65–67`; `S18` (`183410.png`) | `drp-lifecycle-drills-coordination`: 4-pillar DRP execution & validation board (`Testing and Drills` per `S18`, `BIA-Driven IT Recovery Priority`, `Roles & Stakeholder Coordination`, and `Continuous DRP Maintenance`) |
| 8 | `slide-08-bc-vs-dr-seven-dimensions` | Business Continuity (BC) vs. Disaster Recovery (DR): complete seven-dimension comparison. / เปรียบเทียบ Business Continuity (BC) กับ Disaster Recovery (DR) ครบทั้ง 7 มิติสำคัญ | `Domain 2.md` §10 (`L298–318`), §25 Q2 (`L661–662`); `D2 sum.md` `L211–233`; `T:L68–72`; `S19` (`183921.png`) | `bc-vs-dr-master-matrix`: Complete 7-row `S19` side-by-side comparison matrix (`Primary Focus`, `Scope`, `Examples`, `Key Planning Document`, `Business Impact Analysis (BIA)`, `Recovery Metrics`, `Relationship`) |
| 9 | `slide-09-disaster-recovery-scenario` | Scenario: Applying RTO, RPO, and Disaster Recovery Strategies After an Outage / สถานการณ์ฝึกคิด: การประยุกต์ใช้ค่า RTO, RPO และกลยุทธ์การกู้คืนระบบหลังเกิดเหตุหยุดชะงัก | `Domain 2.md` §8–§10, §24, §25 Q2–Q3 (`L204–318`, `L593–612`, `L661–665`); `S16–S19` | `disaster-recovery-decision-scenario`: Interactive 4-option DRP decision lab (`17:00` database outage, `30m` data-loss limit = `RPO`, `1h` downtime limit = `RTO`, Option C recommended) |

---

## 2. Academic & Terminology Guardrails Enforced

1. **`D2-Q01` Transcript Correction (`off-site storage`):**
   - `DOMAIN 2.txt` line `61` contains the ASR transcription artifact `"off-site stitch"`. In accordance with `S18` (`Screenshot 2026-09-20 183410.png`) and `Domain 2.md` §9.4 (`L275`), Slide 5 and all lesson text strictly use **`off-site storage`** and **`cloud backups`**.
2. **`D2-Q04` (`KNOW-D2-028`) Bounded Compliance Claim (`GDPR` / `HIPAA`):**
   - `S17` lists `"Supports Compliance – Many regulations (e.g., GDPR, HIPAA) require organizations to have a disaster recovery plan."` Slide 2 preserves this exact course point while explicitly teaching that `GDPR` (personal data / PII) and `HIPAA` (protected health information / PHI) are **context-specific illustrative examples** where applicable, and that their statutory obligations are not identical.
3. **Targets vs. Guarantees (`RTO` / `RPO` & `Hot` / `Warm` / `Cold` Sites):**
   - Slides 3, 4, and 6 explicitly distinguish planning **objectives/targets** (`RTO`, `RPO`) from actual recovery capability, and present Hot/Warm/Cold site recovery times (`near-instant / minutes`, `hours to ~1 day`, `days or weeks`) as **typical ranges dependent on data replication, network failover, and regular testing** rather than automatic guarantees.
4. **Complete 7-Row `BC vs. DR` Matrix (`S19`):**
   - Slide 8 preserves all 7 rows from `S19` (`Primary Focus`, `Scope`, `Examples`, `Key Planning Document`, `Business Impact Analysis (BIA)`, `Recovery Metrics`, and `Relationship`).

---

## 3. Verification Evidence

- **Automated Node Test Suite (`tools/verify-learning-d2-disaster-recovery-drp.mjs`):** `6 / 6` tests passing.
- **Full Domain 2 & Domain 1 Non-Regression Suites:** All suites passing (`0` failures).
- **Real-Browser Headless Chrome Smoke Test (`1366×768` & `1920×1080` in `EN` & `TH`):** `36 / 36` slide checks verified with `0px` vertical/horizontal overflow.

