# ISC2 CC 2026 Domain 2: Security Governance
## Phase 6: Correction Action Register (Blueprint for Phase 7)

**Register Date:** 2026-10-23
**Auditor:** Independent Adversarial Question Academic QA Subagent
**Target Phase for Execution:** Phase 7 — Question Correction & Rebalancing
**Total Action Items:** 9 (1 Global Architectural Action + 8 Specific Question Revisions)

---

### 1. Executive Summary

This register serves as the authoritative, actionable engineering and editorial blueprint for the subsequent correction phase (Phase 7). It captures every finding identified during the Phase 6 adversarial review, assigns unambiguous severity levels, and specifies the exact textual and structural remediations required before Domain 2 questions can be certified as production-ready.

---

### 2. Master Global Action Item: Answer Key Rebalancing

| Action ID | Target Scope | Severity | Issue Description | Required Phase 7 Action |
|:---:|:---:|:---:|:---|:---|
| **ACT-D2-GLOBAL-01** | All 26 Draft Questions (`DRAFT-D2-001` to `026`) | **HIGH** | 100% of the Phase 5 draft questions have their designated correct answer at index 0 (Option A). This creates an extreme positional answer key bias. | Permute the 4 answer options across the 26 questions to achieve a balanced ~25% distribution across all four positions: **A: 7, B: 6, C: 6, D: 7**. Synchronize `correct_idx` and update all explanation letter references to prevent Domain 1-style prefix contradictions. |

---

### 3. Question-Specific Correction Items

| Action ID | Draft ID | Opp ID | Severity | Current Defect / Opportunity for Improvement | Exact Required Correction for Phase 7 |
|:---:|:---|:---|:---:|:---|:---|
| **ACT-D2-Q02** | `DRAFT-D2-002` | `OPP-D2-002` | **MEDIUM** | Distractors B, C, and D are all technical firewall/network tasks (IDS rules, firewall approvals, packet inspection), lacking functional distractor diversity. | Replace Distractor D with an operational management/HR duty (e.g., 'Conducting annual formal performance appraisals and salary reviews for all department managers') to test the Board's strategic governance boundaries across broader organizational roles. Reassign answer key to **Option B**. |
| **ACT-D2-Q04** | `DRAFT-D2-004` | `OPP-D2-004` | **MEDIUM** | Stem states 'is the ONLY option that satisfies this requirement', which is slightly leading. Distractor D (PCI DSS) is technically certifiable by a QSA in a payment context, creating minor candidate debate. | Refine English and Thai stem to explicitly emphasize 'internationally accredited, comprehensive Information Security Management System (ISMS) certification standard' and replace 'the ONLY option' with 'Which framework BEST satisfies this requirement?'. Reassign answer key to **Option A**. |
| **ACT-D2-Q11** | `DRAFT-D2-011` | `OPP-D2-011` | **LOW** | Distractor D ('Failing to encrypt backup data blocks prior to transmitting them across the local area network') represents a confidentiality control irrelevant to water pipe flooding. | Replace Distractor D with a more realistic backup operational choice: 'Relying exclusively on daily differential backups rather than maintaining independent weekly full backup baselines'. Reassign answer key to **Option D**. |
| **ACT-D2-Q12** | `DRAFT-D2-012` | `OPP-D2-012` | **MEDIUM** | In Thai, Option A has 56 characters due to an embedded definition in parentheses, whereas English Option A is only 9 characters ('Cold site'). | Standardize all Thai options to concise, uniform labels: 'ศูนย์สำรองแบบ Cold site', 'ศูนย์สำรองแบบ Hot site', 'ศูนย์สำรองแบบ Warm site', 'ศูนย์สำรองแบบ Mobile site'. Reassign answer key to **Option C**. |
| **ACT-D2-Q17** | `DRAFT-D2-017` | `OPP-D2-017` | **LOW** | Distractor D combines shoulder surfing with physical piggybacking, which is disparate from an office phone vishing call. | Replace Distractor D with an adjacent social engineering channel/pretext pair: 'Baiting attack using a malicious USB media delivery pretext', keeping all 4 options within deceptive social engineering lures. Reassign answer key to **Option B**. |
| **ACT-D2-Q22** | `DRAFT-D2-022` | `OPP-D2-022` | **MEDIUM** | In Thai, Option A has 157 characters, while Distractor D has 97 characters, creating noticeable visual length cueing. | Lightly condense Thai Option A and expand Distractor D with additional realistic vendor context ('The official publication of an audited security update by the operating system vendor following its scheduled monthly release cycle'). Reassign answer key to **Option A**. |
| **ACT-D2-Q23** | `DRAFT-D2-023` | `OPP-D2-023` | **MEDIUM** | Distractor B ('measures threat actor capabilities') and Distractor C ('evaluates physical datacenter controls') are simplistic. Thai Option A is verbose (237 characters). | Replace Distractor B with 'Metric X measures zero-day exploit weaponization, while Metric Y measures static code analysis findings'. Replace Distractor C with 'Metric X evaluates boundary network segmentation, while Metric Y evaluates runtime container security'. Tighten Thai Option A phrasing. Reassign answer key to **Option D**. |
| **ACT-D2-Q24** | `DRAFT-D2-024` | `OPP-D2-024` | **MEDIUM** | Distractor B ('LMS falsified employee completion records') is hyperbolic. English Option A (194 chars) is noticeably longer than Option C (121 chars). | Replace Distractor B with a subtle audit misconception: 'The phishing assessment was technically invalid because it was conducted within thirty days of training completion'. Equalize option lengths. Reassign answer key to **Option C**. |
| **ACT-D2-Q26** | `DRAFT-D2-026` | `OPP-D2-026` | **LOW** | Distractor D is shorter than Option A in Thai (118 chars vs 196 chars). | Elaborate Distractor D with additional operational context: 'An automated instant messaging alerting channel that sends push notifications to board members whenever an individual employee endpoint triggers an antivirus detection'. Reassign answer key to **Option A**. |

---

### 4. Phase 7 Answer Key Reassignment Mapping Table

| Draft ID | Current Key | Target Position (Phase 7) | Target Index | Assigned Category & Rationale |
|:---|:---:|:---:|:---:|:---|
| `DRAFT-D2-001` | A | **C** | 2 | Rebalance: GRC Business Integration |
| `DRAFT-D2-002` | A | **B** | 1 | Rebalance & Distractor Polish: Board Governance |
| `DRAFT-D2-003` | A | **D** | 3 | Rebalance: Statutory Compliance |
| `DRAFT-D2-004` | A | **A** | 0 | Stem Polish: ISMS Certifiable Standards |
| `DRAFT-D2-005` | A | **C** | 2 | Rebalance: Business Risk Owner |
| `DRAFT-D2-006` | A | **B** | 1 | Rebalance: Risk Avoidance (Decommissioning) |
| `DRAFT-D2-007` | A | **D** | 3 | Rebalance: Semi-Quantitative Ordinal Scales |
| `DRAFT-D2-008` | A | **C** | 2 | Rebalance: BCP Operations vs DRP IT |
| `DRAFT-D2-009` | A | **B** | 1 | Rebalance: BIA Prerequisite Sequencing |
| `DRAFT-D2-010` | A | **A** | 0 | Retain A: Dual-Metric SLA Breach |
| `DRAFT-D2-011` | A | **D** | 3 | Rebalance & Distractor Polish: Offsite Backups |
| `DRAFT-D2-012` | A | **C** | 2 | Rebalance & Thai Option Label Polish: Cold Site |
| `DRAFT-D2-013` | A | **B** | 1 | Rebalance: DR Backup Write Logs vs Restore Drills |
| `DRAFT-D2-014` | A | **A** | 0 | Retain A: Tone at the Top & Security Culture |
| `DRAFT-D2-015` | A | **D** | 3 | Rebalance: Authority + Urgency Levers |
| `DRAFT-D2-016` | A | **C** | 2 | Rebalance: Whaling Executive Phishing |
| `DRAFT-D2-017` | A | **B** | 1 | Rebalance & Distractor Polish: Vishing + Pretexting |
| `DRAFT-D2-018` | A | **A** | 0 | Retain A: Enterprise MFA Stopping Credential Stuffing |
| `DRAFT-D2-019` | A | **D** | 3 | Rebalance: Recognize & Report Duty |
| `DRAFT-D2-020` | A | **C** | 2 | Rebalance: Vanity Firewall Block Metrics |
| `DRAFT-D2-021` | A | **B** | 1 | Rebalance: MTTD Milestone Calculation |
| `DRAFT-D2-022` | A | **A** | 0 | Retain A & Polish Lengths: MTTR Active Containment |
| `DRAFT-D2-023` | A | **D** | 3 | Rebalance & Distractor Polish: Patch Velocity |
| `DRAFT-D2-024` | A | **C** | 2 | Rebalance & Distractor Polish: Training Efficacy |
| `DRAFT-D2-025` | A | **B** | 1 | Rebalance: KRI Early Warning vs KPI Process |
| `DRAFT-D2-026` | A | **A** | 0 | Retain A & Expand Distractor D: Board Reports |

#### Resulting Phase 7 Distribution:
- **Option A:** 7 questions (26.9%)
- **Option B:** 6 questions (23.1%)
- **Option C:** 6 questions (23.1%)
- **Option D:** 7 questions (26.9%)
- **Total:** 26 questions (100.0% perfectly balanced)

---

### 5. Verification Protocol for Phase 7 Execution

Following the execution of these actions in Phase 7, the following automated checks must be run:
1. `verify_key_distribution.mjs` — Confirm exact counts: A=7, B=6, C=6, D=7.
2. `verify_explanation_concordance.mjs` — Assert `explanation_th.startsWith("ข้อ " + letters[correct_idx])` across all 26 entries.
3. `verify_quarantine_integrity.mjs` — Confirm zero mentions of `KNOW-D2-028` or `KNOW-D2-054`.
4. `verify_schema_integrity.mjs` — Ensure 100% JSON valid schema matching Domain 1 next-bank architecture.
