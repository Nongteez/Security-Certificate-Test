# ISC2 CC 2026 — Domain 2 Lesson 1 Implementation & Academic QA Report

- **Lesson ID:** `lesson-d2-01-grc-foundations`
- **Lesson Title (EN):** GRC Foundations, Frameworks & Business Alignment
- **Lesson Title (TH):** พื้นฐาน GRC กรอบมาตรฐาน และการจัดแนวให้สอดคล้องกับเป้าหมายธุรกิจ
- **Domain & Objective:** Domain 2 (*Security Governance*, 17.3%) — Objective `2.1` (*Plan Governance, Risk, and Compliance (GRC)*)
- **Outline ID:** `isc2-cc-2026-09-01`
- **Publication State:** `in-preparation` (staged under `content/isc2-cc-2026/learning/staged/lessons/`; Domain 2 is intentionally NOT marked published)
- **Slide Count:** `6` bilingual slides (matching the approved `domain-2-learning-roadmap.md` Lesson 1 specification)

---

## 1. Scope & Architectural Isolation

Lesson 1 implements the first half of Objective `2.1` in strict isolation so that all **12 published Domain 1 lessons (101 slides)** and shared production entrypoints remain untouched while Domain 2 lessons are built and reviewed incrementally:

- **Staged Lesson JSON:** `content/isc2-cc-2026/learning/staged/lessons/lesson-d2-01-grc-foundations.json`
- **Custom Presentation Module:** `js/ui/learning/grc-foundations-presentations.js`
- **Scoped Presentation Stylesheet:** `css/learning-grc-foundations.css`
- **Focused Verification Suite:** `tools/verify-learning-d2-grc-foundations.mjs`

All styles are strictly scoped to `.learning-grc-foundations-slide`. All slide graphics are authored inline geometric SVGs (`aria-hidden="true"`, `focusable="false"`) constructed via DOM SVG namespace APIs without `innerHTML` injection or raw course screenshot embedding.

---

## 2. Six-Slide Breakdown & Source Traceability

| # | Slide ID | Slide Title (EN) | Visual Composition (`data-grc-foundations-composition`) | Primary Course Sources | Authoritative Supplements / Notes |
|---:|---|---|---|---|---|
| 1 | `slide-01-grc-foundations` | GRC connects Governance, Risk, and Compliance to business objectives. | `grc-roof-cycle` — Business Alignment roof banner above 3 connected `G` / `R` / `C` pillars with MFA in-action examples | `Domain 2.md` §1–§2.1 (`L41–62`); `D2 sum.md` §2.1 (`L11–55`); `DOMAIN 2.txt` `L1–11`; Screenshots `S01` (`175516.png`), `S02` (`175642.png`) | ISC2 CC Sept 2026 Outline (Domain 2 — Objective 2.1) |
| 2 | `slide-02-purpose-of-grc` | The seven purposes of GRC turn scattered controls into a coordinated program. | `purpose-clusters` — 3 operational cluster columns (*Strategy & Decisions*, *Risk & Control Unity*, *Obligations & Efficiency*) rendering all 7 `S05` purposes | `Domain 2.md` §2.2 (`L64–74`); `D2 sum.md` §2.1 (`L57–67`); `DOMAIN 2.txt` `L11–14`; Screenshot `S05` (`180128.png`) | Operational 3-lens grouping for scannability without dropping any source bullet |
| 3 | `slide-03-importance-of-grc` | Effective GRC builds resilience—while absent GRC leaves blind spots and violations. | `benefits-vs-failures` — Split-screen contrast pairing 7 positive GRC benefits (`01–07`) against 4 breakdown modes (`!1–!4`) | `Domain 2.md` §2.3 (`L76–93`); `D2 sum.md` §2.1 (`L69–88`); `DOMAIN 2.txt` `L15–19`; Screenshot `S06` (`180141.png`) | Highlights `S06` triad arrows and bridges *organizational resilience* toward Objective 2.2 |
| 4 | `slide-04-grc-frameworks` | Frameworks and standards structure GRC—each serving a distinct governance purpose. | `framework-selector` — 3-column selector cards (`NIST CSF`, `ISO/IEC 27001`, `COBIT`) + bottom `Frameworks ≠ Standards ≠ Laws` boundary banner | `Domain 2.md` §3 (`L95–106`), §24.2 (`L617–623`); `D2 sum.md` §2.1 (`L90–99`); `DOMAIN 2.txt` `L20–23` (`D2-Q01` fix); Screenshot `S07` (`180209.png`) | **Verified Supplements** in Reading Mode: NIST CSF 2.0 `Govern (GV)` function; ISO/IEC 27001 voluntary certification scope; bounded 2026 AI/emerging-tech governance intake note |
| 5 | `slide-05-grc-distinctions` | Separate Governance from Management—and Risk Management from Compliance. | `dual-distinctions` — Dual-lane contrast (`Governance ⇄ Management` direction/evidence loop & `Risk Management ≠ Compliance` warning connector) | `Domain 2.md` §1 (`L49–55`), §2.1 (`L58–62`), §25 (`L658–671`); `D2 sum.md` §2.1 (`L18–55`) | ISACA COBIT Governance vs. Management distinction & NIST CSF 2.0 risk-vs-compliance principle (`Compliant ≠ Secure`) |
| 6 | `slide-06-applied-grc-scenario` | Applied Scenario: Structuring GRC for a Growing B2B Payment Platform | `applied-scenario` — Interactive 4-option enterprise decision (`NovaPay`) with stateful TH/EN feedback panel | Synthesizes `Domain 2.md` §§1–3 & `D2 sum.md` §2.1 (`S02`, `S05`, `S06`, `S07`) | Newly authored applied organizational scenario clearly labeled as an applied synthesis case |

---

## 3. Academic & Technical Verification Guardrails

1. **Zero Source Omissions on Slides 2 & 3:**
   - Slide 2 preserves all **7** `S05` purposes (*align cybersecurity with business objectives; identify and manage risks; meet legal and regulatory obligations; establish consistent policies and controls; improve accountability; support informed decision-making; reduce duplication of security and compliance efforts*).
   - Slide 3 preserves all **7** `S06` benefits (*reduce cybersecurity and business risks; protect critical information and assets; meet regulatory requirements; avoid or reduce financial penalties; improve decision-making; establish clear accountability; improve organizational resilience*) contrasted with all **4** `S06` failure modes without GRC (*inconsistent security practices; unidentified risks; compliance violations; poor accountability*).
2. **Transcript Remediation (`D2-Q01`):**
   - `DOMAIN 2.txt` line 21 mishears `COBIT` as `"coit"` / `"Coop"`. All slide and Reading Mode text uses **COBIT** (*Control Objectives for Information and Related Technologies* / governance and management of enterprise IT), verified against Screenshot `S07` (`180209.png`) and `Domain 2.md` §3.
3. **Frameworks vs. Standards vs. Laws Precision (`S07`):**
   - Screenshot `S07` displays `GDPR`, `HIPAA`, `SOX`, `PCI DSS`, and `CMMC` inside its decorative graphic alongside `NIST`, `ISO 27001`, and `COBIT`. Slide 4 explicitly separates statutory/regulatory mandates (`GDPR`, `HIPAA`, `SOX`), payment-card contractual standards (`PCI DSS`), and defense supply-chain models (`CMMC`) from general cybersecurity/IT governance frameworks and management system standards.
4. **ISO/IEC 27001 Accuracy:**
   - Presented accurately as an international standard specifying requirements for establishing, implementing, maintaining, and continually improving an **Information Security Management System (ISMS)**—explicitly clarifying that external certification is **voluntary** (driven by business assurance or contracts) rather than a universal statutory law.
5. **NIST CSF 2.0 `Govern` & Bounded Emerging-Tech Note:**
   - Reading Mode on Slide 4 includes a clearly labeled **Verified Supplement (`เพิ่มเติมเพื่อความเข้าใจ`)** explaining how **NIST CSF 2.0** elevates `Govern (GV)` as a cross-cutting function alongside `Identify, Protect, Detect, Respond, Recover`, and briefly illustrates how organizations apply GRC frameworks when evaluating emerging technologies such as AI tools—while keeping the main Slide 4 presentation canvas focused strictly on the core frameworks (`NIST CSF`, `ISO/IEC 27001`, `COBIT`, and the legal/standard boundary).

---

## 4. Bilingual TH/EN & Reading Mode Completeness

- Every slide uses a uniform **5-block semantic schema** (`[leadText, structuredTable, readingNarrative, readingList, footerTakeaway]`):
  - **Presentation Mode (`renderGrcFoundationsPresentation`)** renders `slide.title`, `blocks[0]` (concise lead), `blocks[1].rows` (visual composition), and `blocks[4]` (one-line synthesis takeaway) so slides remain clean and readable on `1920×1080` and `1366×768` viewports.
  - **Reading Mode (`renderSlide` with `mode: 'reading'`)** renders all 5 semantic blocks—including the multi-sentence conceptual narrative (`blocks[2]`) and practical examples/exam cues (`blocks[3]`)—plus Lesson Info (`renderLessonInfo`) objective `2.1` metadata, outcomes, prerequisites, and source references.
- Thai (`th`) copy is authored in natural Thai instructional prose while retaining standard English cybersecurity terms (`Governance`, `Management`, `Risk Management`, `Compliance`, `Business Objectives`, `NIST CSF`, `ISO/IEC 27001`, `ISMS`, `COBIT`, `Accountability`, `MFA`) where Thai learners expect them on the ISC2 CC exam.

---

## 5. Interactive Scenario Design (`slide-06-applied-grc-scenario`)

- **Scenario Context:** *NovaPay*, a growing B2B payroll and payment platform expanding to enterprise bank clients, suffers from fragmented squad security rules, three duplicated spreadsheet questionnaire workflows, and bank inquiries into risk governance and ISMS maturity.
- **Options & Outcomes:**
  - `Option A` (`data-grc-scenario-choice="0"`, `distractor`): Tool-first decentralization — fails due to missing Governance direction, inconsistent practices, and poor accountability.
  - `Option B` (`data-grc-scenario-choice="1"`, `distractor`): Treating ISO/IEC 27001 as universal statutory law and halting business operations — fails on standard-vs-law accuracy and violates business alignment.
  - `Option C` (`data-grc-scenario-choice="2"`, `recommended`): Executive Governance charter + risk/obligation mapping + ISO/IEC 27001 (ISMS) & NIST CSF coordination — integrates G, R, and C around business goals and eliminates duplicated compliance effort.
  - `Option D` (`data-grc-scenario-choice="3"`, `distractor`): Delegating a one-time compliance checklist to IT operations — confuses operational tasks with Governance oversight and falls into the `Compliant ≠ Secure` trap.
- **Lifecycle & State:** Uses `<button type="button">` controls with `aria-pressed`, `aria-live="polite"` feedback container (`[data-grc-scenario-feedback]`), `context.interactionState.choice` persistence across TH/EN switching, `AbortController` listener disposal on `destroy()`, and full isolation from V1 `localStorage` lesson progress.

---

## 6. Deferred Shared-File Integration Requirements (Not Modified in This Task)

Per task boundaries, Lesson 1 is staged and verified in isolation without touching shared Learning Center files. When Domain 2 is ready to be wired into the live viewer in a later approved integration step, only these **4 shared files** need minimal registration hooks:

1. `content/isc2-cc-2026/learning/published/catalog.json` — add Domain 2 lesson summary entry pointing to published lesson path once Domain 2 publication is approved.
2. `js/ui/learning/renderers.js` — import `{ hasGrcFoundationsPresentation, renderGrcFoundationsPresentation }` from `./grc-foundations-presentations.js` and add the `else if (hasGrcFoundationsPresentation(context))` dispatch branch applying `.learning-grc-foundations-slide`.
3. `js/ui/learning/lesson-info.js` — add Objective `2.1` title pair (`Plan Governance, Risk, and Compliance (GRC)` / `วางแผนการกำกับดูแล ความเสี่ยง และการปฏิบัติตามข้อกำหนด (GRC)`) to `OBJECTIVES` if localized objective titles are desired alongside `OBJECTIVE 2.1`.
4. `index.html` — link `<link rel="stylesheet" href="css/learning-grc-foundations.css">`.

---

## 7. Verification Evidence

- `node --check js/ui/learning/grc-foundations-presentations.js` — syntax check passed (`exit 0`).
- `node --check tools/verify-learning-d2-grc-foundations.mjs` — syntax check passed (`exit 0`).
- `node --test tools/verify-learning-d2-grc-foundations.mjs` — **6 / 6 tests passed** (`exit 0`):
  1. Schema validity (`in-preparation` + publish-ready check), Domain 2 Objective `2.1` mapping, 6-slide sequence, and source file existence.
  2. Academic guardrails (`COBIT` spelling, 7 purposes, 7 benefits vs. 4 failures, NIST CSF 2.0 `Govern`, ISO/IEC 27001 voluntary scope, Frameworks ≠ Standards ≠ Laws, Reading-only AI note).
  3. Bilingual TH/EN completeness, Reading Mode narrative/list rendering, and Lesson Info rendering.
  4. All 6 distinct custom compositions (`grc-roof-cycle`, `purpose-clusters`, `benefits-vs-failures`, `framework-selector`, `dual-distinctions`, `applied-scenario`), item counts (`7` purposes, `7` benefits, `4` failures), fail-safe shape fallback, and scoped CSS verification.
  5. Interactive scenario 4-option selection, TH/EN stateful feedback, listener disposal after `destroy()`, and independent V1 progress compatibility alongside all 12 Domain 1 lessons.
  6. Git working-tree check confirming zero Domain 1 or protected shared files modified.
- Existing non-browser Learning Center regression checks (`tools/verify-learning-catalog.mjs`, `tools/verify-learning-progress.mjs`, `tools/verify-learning-academic-remediation.mjs`) — all passed (`exit 0`).

