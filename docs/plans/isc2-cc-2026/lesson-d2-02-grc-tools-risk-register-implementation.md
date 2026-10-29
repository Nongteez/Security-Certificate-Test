# ISC2 CC 2026 — Domain 2 Lesson 2 Implementation & Academic QA Report

- **Lesson ID:** `lesson-d2-02-grc-tools-risk-register`
- **Lesson Title (EN):** GRC Tools & Operationalizing the Risk Register
- **Lesson Title (TH):** เครื่องมือ GRC และการนำ Risk Register ไปใช้ปฏิบัติจริง
- **Domain & Objective:** Domain 2 (*Security Governance*, 17.3%) — Objective `2.1` (*Plan Governance, Risk, and Compliance (GRC)*)
- **Outline ID:** `isc2-cc-2026-09-01`
- **Publication State:** `published` under `content/isc2-cc-2026/learning/published/lessons/lesson-d2-02-grc-tools-risk-register.json` (paired with staged authoring master under `content/isc2-cc-2026/learning/staged/lessons/lesson-d2-02-grc-tools-risk-register.json`)
- **Slide Count:** `7` bilingual slides (matching the approved `domain-2-learning-roadmap.md` Lesson 2 specification)

---

## 1. Seven-Slide Breakdown & Source Traceability

| # | Slide ID | Slide Title (EN) | Visual Composition (`data-grc-tools-composition`) | Primary Course Sources | Authoritative Supplements / Notes |
|---:|---|---|---|---|---|
| 1 | `slide-01-grc-tools-platform` | GRC tools centralize and track governance, risk, and compliance work at scale. | `platform-vs-spreadsheets` — Operational contrast table (`Fragmented Spreadsheets` vs. `Centralized GRC Platform`) + bottom `GRC` vs. `GRC Tool` exam distinction bar | `Domain 2.md` §4 (`L107–122`), §24.1 (`L591`); `D2 sum.md` `L101–108`; `DOMAIN 2.txt` `L23–25`; Screenshot `S08` (`181135.png`) | ISC2 CC Sept 2026 Outline (Domain 2 — Objective 2.1) |
| 2 | `slide-02-six-grc-tool-capabilities` | Six core capabilities connect risk, policy, controls, compliance, and audits. | `capability-workflow-hub` — 3-stage operational workflow pipeline rendering all 6 `S08` capabilities (`Risk assessments`, `Risk registers`, `Policy management`, `Control management`, `Compliance tracking`, `Audit management`) | `Domain 2.md` §4 (`L113–122`); `D2 sum.md` `L110–117`; `DOMAIN 2.txt` `L25–26` (fixes ASR typo `"compliance breaking"` → `Compliance tracking`); Screenshot `S08` (`181135.png`) | Groups the 6 `S08` bullets into a 3-stage workflow (`Evaluate & Log Risks` → `Govern Policies & Controls` → `Track Compliance & Audits`) without dropping or renaming any source capability |
| 3 | `slide-03-risk-register-anatomy` | A Risk Register is a documented record of identified organizational risks across 11 core fields. | `register-schema-blueprint` — Top `Risk Assessment (Activity)` vs. `Risk Register (Documented Record)` contrast banner + 4-stage enterprise database schema blueprint displaying all 11 `S09` fields (`01–11`) | `Domain 2.md` §5.1–5.2 (`L126–144`), §24.1 (`L592`), §25 `Q4` (`L667–668`); `D2 sum.md` `L119–139`; `DOMAIN 2.txt` `L26–30`; Screenshot `S09` (`181653.png`) | Preserves all 11 exact `S09` fields and explicitly contrasts *Risk Assessment* (activity/process) vs. *Risk Register* (documented record/living output) |
| 4 | `slide-04-scoring-and-treatment` | Combine Likelihood and Impact to prioritize risk, then select one of four treatment strategies. | `scoring-and-responses` — Left analytical panel (`Likelihood × Impact → Priority Rating` + `D2-Q02` ordinal `1–4` vs. quantitative guardrail) + Right 2×2 Risk Treatment Matrix (`Mitigate`, `Avoid`, `Transfer`, `Accept`) | `Domain 2.md` §5.2 (`L137–142`), §24.2 (`L609`); `D2 sum.md` `L129–139`; `DOMAIN 2.txt` `L28–30`; Screenshot `S09` (`181653.png`) | **Verified Guardrail (`D2-Q02`):** Clarifies per NIST SP 800-30 Rev. 1 that the `1–4` scale on `S09` is an ordinal/semi-quantitative ranking scale, not a monetary quantitative formula |
| 5 | `slide-05-ransomware-worked-example` | Worked example: How a ransomware risk is recorded and mitigated in the Risk Register. | `ransomware-register-record` — Authentic horizontal Risk Register ledger record displaying all 6 `S10` fields (`Risk`, `Likelihood`, `Impact`, `Risk Owner`, `Treatment`, `Controls`) + bottom 4-column Defense-in-Depth Control Strip (`EDR`, `Backups`, `Network segmentation`, `MFA`) | `Domain 2.md` §5.3 (`L146–163`); `D2 sum.md` `L141–152`; `DOMAIN 2.txt` `L30–33`; Screenshot `S10` (`181722.png`) | Explains how `MFA`, `EDR`, and `Network segmentation` reduce likelihood/spread while `Backups` reduce operational impact and recovery time |
| 6 | `slide-06-residual-risk-and-ownership` | Mitigation reduces risk but leaves Residual Risk above zero—requiring an accountable Risk Owner. | `residual-ownership-pipeline` — Top 3-stage risk reduction equation (`Inherent Risk [High/High]` → `− Layered Controls` → `Residual Risk [> 0 — Never Zero after Mitigation]` vs. `Avoidance`) + bottom `Risk Owner (IT Manager)` accountability split | `Domain 2.md` §5.2 (`L140–143`), §5.3 (`L164`); `D2 sum.md` `L135–138`; `DOMAIN 2.txt` `L29–30`; Screenshots `S09`, `S10` | **Verified Guardrail (`D2-Q06`):** Mitigation reduces risk to an acceptable level (`Residual Risk > 0`) and never to zero; only `Avoidance` eliminates exposure to that activity |
| 7 | `slide-07-risk-register-scenario` | Applied Scenario: Operationalizing the Risk Register after a critical server audit. | `register-triage-scenario` — Interactive 4-option organizational triage (`Aegis Health`) with live localized `TH`/`EN` governance feedback | Synthesizes `Domain 2.md` §§4–5, §24.1–24.2, §25 `Q4`; `D2 sum.md` `L101–153`; Screenshots `S08–S10` | Newly authored applied organizational scenario testing `Assessment vs. Register`, `S08–S10` integration, `D2-Q02`, `D2-Q06`, and `Risk Owner` accountability |

---

## 2. Academic & Technical Verification Guardrails

1. **Zero Source Omissions Across `S08`, `S09`, and `S10`:**
   - **Slide 2 (`S08`):** Preserves all **6** exact GRC tool capabilities: `Risk registers`, `Policy management`, `Compliance tracking`, `Control management`, `Audit management`, and `Risk assessments` (correcting the transcript ASR typo `"compliance breaking"` on `DOMAIN 2.txt` `L25`).
   - **Slide 3 (`S09`):** Preserves the exact definition (*a documented record of identified organizational risks*) and all **11** exact Risk Register fields: `Risk description`, `Affected asset or process`, `Threat`, `Vulnerability`, `Likelihood`, `Impact`, `Risk rating`, `Risk owner`, `Treatment strategy`, `Current status`, and `Residual risk`.
   - **Slide 5 (`S10`):** Preserves all **6** exact worked example entries: `Risk: Ransomware affecting critical servers`, `Likelihood: High`, `Impact: High`, `Risk Owner: IT Manager`, `Treatment: Mitigation`, and `Controls: EDR, backups, network segmentation, MFA`.
2. **Core Exam Distinctions (`Domain 2.md` §24.1 & §25 `Q4`):**
   - **Slide 1:** Explicitly contrasts **GRC** (the organizational approach integrating governance, risk management, and compliance) vs. **GRC Tool** (the software platform used to centralize and track those activities).
   - **Slide 3:** Explicitly contrasts **Risk Assessment** (the analytical process/activity of identifying and evaluating risks) vs. **Risk Register** (the documented record where identified risks, owners, treatments, status, and residual risk are logged and tracked over time).
3. **Ordinal `1–4` Scale vs. Quantitative Risk Analysis (`D2-Q02`):**
   - **Slide 4:** Clarifies that the `1–4` scale shown on Screenshot `S09` is an **ordinal / semi-quantitative priority scale** (`1 = Low` to `4 = Critical`), whereas true **quantitative risk analysis** uses numerical probabilities and monetary values (`AV`, `EF`, `SLE`, `ARO`, `ALE`) per NIST SP 800-30 Rev. 1.
4. **Non-Zero Residual Risk After Mitigation (`D2-Q06`) & Risk Owner Accountability:**
   - **Slide 6:** Clarifies that **Mitigation** reduces likelihood or impact to an acceptable threshold (`Residual Risk > 0`) and **never reduces risk to zero** (only **Avoidance**—stopping the risky activity altogether—eliminates exposure to that activity). Also clarifies from `Domain 2.md` §5.3 (`L164`) that the **Risk Owner** (`IT Manager`) is **accountable** for ensuring the risk is managed and monitored, not required to configure every technical control solo.

---

## 3. Verification & Browser Smoke-Test Evidence

- **Focused TDD & Regression Suites:**
  - `node --test tools/verify-learning-d2-grc-tools-risk-register.mjs` — **6 / 6 PASS**
  - `node --test tools/verify-learning-d2-live-preview.mjs` — **5 / 5 PASS**
  - `node --test tools/verify-learning-d2-grc-foundations.mjs` — **6 / 6 PASS**
- **Real-Browser Headless Chrome Smoke Test (`Chrome/156.0.8078.48` at `1366×768` & `1920×1080`):**
  - Verified full user flow: `Version Selection → Learning Center → Domain 2 → Objective 2.1 → #learning-objective-lesson (Lesson 2 selected) → Start Learning → Lesson 2 Presentation (1 / 7..7 / 7)`.
  - All `7` slides in both `TH` and `EN` across `1366×768` (`666×1186` stage) and `1920×1080` (`978×1740` stage) rendered with `viewMode: "presentation"`, `verticalOverflowPx: 0`, `horizontalOverflowPx: 0`, `docHorizontalOverflow: false`, `noticeVisible: false`, `0` console errors, `0` page exceptions, and `0` network errors.
  - Verified `Lesson Info` modal (`Slides 1–7 — Full explanations`), `Reading Mode` toggle, Slide 7 interactive scenario (`distractor` & `recommended` feedback in `EN` and `TH`), independent progress/Resume (`5 / 7`), and Domain 2 Lesson 1 preservation (`1 / 6`).
