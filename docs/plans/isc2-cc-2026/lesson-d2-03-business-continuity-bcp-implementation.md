# Domain 2 Lesson 3 Implementation & Academic QA Report (`lesson-d2-03-business-continuity-bcp`)

- **Lesson ID:** `lesson-d2-03-business-continuity-bcp`
- **Title (EN / TH):** *Business Continuity, Redundancy & BCP* / *ความต่อเนื่องทางธุรกิจ ความซ้ำซ้อนของทรัพยากร (Redundancy) และแผน BCP*
- **Domain & Objective:** Domain 2 (`Security Governance`, `17.3%`) → Objective `2.2` (*Understand redundancy* / *เข้าใจการจัดให้มีระบบหรือทรัพยากรสำรอง*)
- **Slides Implemented:** `6` Bilingual Slides (`TH` / `EN`)
- **Staged Path:** `content/isc2-cc-2026/learning/staged/lessons/lesson-d2-03-business-continuity-bcp.json` (`status: "in-preparation"`)
- **Published Path:** `content/isc2-cc-2026/learning/published/lessons/lesson-d2-03-business-continuity-bcp.json` (`status: "published"`)
- **Custom Presentation Module:** `js/ui/learning/business-continuity-bcp-presentations.js`
- **Scoped Stylesheet:** `css/learning-business-continuity-bcp.css`

---

## 1. Slide-by-Slide Provenance & Academic Traceability

| Slide | Slide ID | Title (EN / TH) | Exact Sources & Locators | Visual Composition (`[data-bc-bcp-composition]`) | Academic & Guardrail Notes |
|---:|---|---|---|---|---|
| **1** | `slide-01-redundancy-and-bc-foundations` | **Business Continuity (BC) relies on operational redundancy to keep critical operations running.** / Business Continuity (BC) อาศัยความซ้ำซ้อนของทรัพยากร (Redundancy) เพื่อให้ภารกิจสำคัญเดินหน้าต่อได้ | `Domain 2.md` §6 (`L166–184`); `D2 sum.md` (`L160–180`); `DOMAIN 2.txt` (`L33–35`); `S11`, `S12` | `redundancy-continuity-bridge` | Defines `BC` (`continue critical business operations during and after a disruption`), introduces Objective `2.2` (`Redundancy` eliminates `Single Points of Failure [SPOF]`), and distinguishes `Redundancy` (alternate live capacity) vs. `Backup` (recoverable data copy). |
| **2** | `slide-02-eight-disruption-triggers` | **Eight core disruption triggers—plus human error—test organizational continuity.** / เหตุการณ์หยุดชะงักหลัก 8 ประเภท ร่วมกับความผิดพลาดจากคน คือบททดสอบของ Business Continuity | `Domain 2.md` §6 (`L170–183`); `D2 sum.md` (`L169–179`); `DOMAIN 2.txt` (`L35–37`); `S12` | `disruption-trigger-matrix` | Preserves all **8 exact disruption triggers on `S12`**: `Natural disasters`, `Cyberattacks`, `Power outages`, `Equipment failures`, `Network outages`, `Pandemics`, `Loss of facilities`, and `Supply-chain disruptions`—plus spoken `Human error` (`T:L35`). Normalizes ASR typo `"national disaster"` to `"Natural disasters"`. |
| **3** | `slide-03-bcp-and-eight-elements` | **A Business Continuity Plan (BCP) documents eight core elements for sustaining operations.** / Business Continuity Plan (BCP) คือเอกสารแผนที่ระบุ 8 องค์ประกอบหลักเพื่อประคองการดำเนินงาน | `Domain 2.md` §7 (`L185–203`), §24.1 (`L593`); `D2 sum.md` (`L182–201`); `DOMAIN 2.txt` (`L37–43`); `S13`, `S14` | `bcp-architecture-blueprint` | Distinguishes `BC` (`capability/goal`) vs. `BCP` (`documented plan`), and teaches all **8 exact BCP elements on `S14`**: `Critical business processes`, `Roles and responsibilities`, `Communication procedures`, `Alternate work locations`, `Backup personnel`, `Alternate suppliers`, `Essential technology and systems`, and `Recovery priorities`. |
| **4** | `slide-04-operational-redundancy-strategies` | **Operationalizing BCP redundancy across locations, personnel, suppliers, and technology.** / การนำกลยุทธ์ Redundancy ในแผน BCP ไปปฏิบัติจริงทั้งด้านสถานที่ บุคลากร ซัพพลายเออร์ และเทคโนโลยี | `Domain 2.md` §7 (`L196–199`), §10 (`L304`); `DOMAIN 2.txt` (`L39–43`); `S14`, `S19` | `operational-redundancy-lanes` | Unpacks how `Alternate work locations` (branch / WFH), `Backup personnel` (cross-training / delegation), `Alternate suppliers` (secondary ISP / utility / vendor), and `Essential technology & manual processes` (`S19`) remove operational SPOFs. |
| **5** | `slide-05-bia-and-recovery-priorities` | **Business Impact Analysis (BIA) drives BCP recovery priorities and informs DRP.** / Business Impact Analysis (BIA) ใช้ระบุงานสำคัญเพื่อกำหนดลำดับการกู้คืนใน BCP และส่งต่อให้ DRP | `Domain 2.md` §7 (`L200`), §10 (`L300–317`); `DOMAIN 2.txt` (`L41–43`, `L67–72`); `S14`, `S19`; NIST SP 800-34 Rev. 1 | `bia-priority-pipeline` | Explains how `BIA` identifies critical business functions, dependencies, and impact over time (`S19`) to rank `Recovery priorities` (`#1`, `#2`, `#3`) in the `BCP`, and establishes the `BCP` (whole-business umbrella) vs. `DRP` (IT restoration component, `DR ⊂ BC`) boundary without duplicating Lesson 4's detailed `RTO`/`RPO` math. |
| **6** | `slide-06-continuity-decision-scenario` | **Scenario: Activating Business Continuity & Redundancy During a Regional Disruption** / สถานการณ์ฝึกคิด: การเปิดใช้แผน BCP และทรัพยากรสำรองเมื่อเกิดเหตุหยุดชะงักระดับพื้นที่ | `Domain 2.md` §24.1–24.2 (`L593–610`), §25 `Q1` (`L658–659`); `S12`, `S14`, `S19` | `continuity-response-scenario` | Interactive 4-option decision scenario with balanced option lengths, option-specific `TH`/`EN` feedback, state persistence across language switches, and listener cleanup. |

---

## 2. Verification & Sign-Off Summary

- **Schema Validation (`validateLesson` & `validateCatalog`):** `PASS` (`0` errors, `0` warnings)
- **Automated Node Test Suite (`tools/verify-learning-d2-business-continuity-bcp.mjs`):** `6 / 6 PASS`
- **Domain 1 (`12` lessons / `101` slides) & Domain 2 Lessons 1–2 Preservation:** `100% Untouched`

