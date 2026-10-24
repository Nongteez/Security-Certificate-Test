# Domain 3 - Question-Bank Review and Integration Report

**Certification:** ISC2 Certified in Cybersecurity (CC)  
**Exam Outline:** Updated 2026 Exam Outline (Effective September 1, 2026)  
**Domain:** Domain 3 — Identity and Access Management (IAM) Concepts (20%)  
**Status:** Completed & Integrated. Prepared 2026-10-23 (Asia/Bangkok).  
**Independent Human Academic & Bilingual Sign-Off:** Pending formal sign-off.

---

## 1. Executive Summary & Recovered Work

An interrupted task from the previous agent was recovered, audited, and completed:
- **Starting Handoff State:** The previous agent drafted 24 candidate items in `content/isc2-cc-2026/questions/domain-3-draft.mjs` (23 accepted, 1 rejected), initialized `data/certs/isc2/cc/versions/next-bank/questions/domain-3.js`, created `tools/verify-domain3-integration.mjs`, adjusted `tools/verify-domain2-integration.mjs`, and drafted an initial checklist in `question-bank-review.md`.
- **Audit Findings:** 
  - The 24 draft items were authored using verified knowledge entries (`KNOW-D3-001` to `KNOW-D3-025`) from `domain-3-knowledge-map.md`.
  - Item Q670 was correctly identified as a semantic and cognitive duplicate of Q649 (both testing the "apply-and-verify technical permission enforcement" concept) and properly marked `REJECTED`, leaving 23 accepted items.
  - The 23 accepted items (Q647–Q669) cleanly integrate into production `domain-3.js`.
  - Verification assertions in `verify-domain2-integration.mjs` were verified to remain strictly intact for Domain 2 (39 Qs, 608-646 sequential, 10-10-10-9 distribution) while supporting dynamic full-bank totals (86 Qs).
  - All automated Node test suites pass with zero failures.

---

## 2. Implementation Checklist

- [x] **Audit Source Review & Knowledge Map:** Confirmed 25 usable knowledge records (15 ACCEPTED, 10 CORRECTED) covering all eight official outline bullets and two 2026 AI topics. Quarantined financial diagram ambiguity was strictly excluded.
- [x] **Inspect Existing Bank & Allocations:** Verified 63 existing items across Domain 1 (24 Qs, 584–607) and Domain 2 (39 Qs, 608–646); allocated sequential IDs 647–669 for Domain 3.
- [x] **Draft Distinct Workplace Scenarios:** Grounded in primary sources (NIST SP 800-63, NIST SP 800-53 AC controls, SP 800-162) and official 2026 outline.
- [x] **Perform Rigorous Academic & Bilingual QA:** Validated single defensible keys, plausible distractors, absence of security absolutes, natural Thai technical phrasing, and complete structured explanations (`explanation_detail`).
- [x] **Conduct Semantic Duplicate Analysis:** Screened against Domain 1, Domain 2, within Domain 3, and legacy 583 questions. Discarded redundant draft Q670.
- [x] **Safe Production Integration:** Exported 23 accepted items to `data/certs/isc2/cc/versions/next-bank/questions/domain-3.js`; updated `exam.config.js` (D3 available: true, count: 23, total: 86) and `data/exam-versions.js` (questionCount: 86).
- [x] **Verification Suite Execution:** Verified with `verify-domain3-integration.mjs` (staging, schema, bilingual parity, selection, scoring, session snapshot, byte preservation) and verified zero regressions across Domain 2, quiz engine, structured explanations, and session persistence.

---

## 3. Question Bank Metrics & Objective Coverage

### 3.1 Overview Counts

| Metric | Count | Details |
|---|---|---|
| Total Drafted | 24 | Q647 – Q670 |
| Total Accepted | 23 | Q647 – Q669 |
| Total Revised | 0 | All 23 accepted drafts met high-standard criteria upon audit |
| Total Rejected | 1 | Q670 (duplicate cognitive decision of Q649) |
| ID Range | 647 – 669 | Continuous, zero collisions across all 86 next-bank and 583 legacy IDs |
| Total Bank Size | 86 | Domain 1: 24 \| Domain 2: 39 \| Domain 3: 23 |

### 3.2 Answer Key Distribution (23 Accepted Questions)

- **Option A (0):** 6 questions (26.1%) — Q649, Q651, Q656, Q660, Q663, Q667
- **Option B (1):** 5 questions (21.7%) — Q647, Q654, Q658, Q662, Q665
- **Option C (2):** 6 questions (26.1%) — Q650, Q653, Q655, Q659, Q664, Q668
- **Option D (3):** 6 questions (26.1%) — Q648, Q652, Q657, Q661, Q666, Q669

*Distribution is exceptionally balanced (6-5-6-6), completely preventing test-taker guessing bias.*

### 3.3 Official Objective Coverage

| Objective / Bullet Scope | Accepted Count | Question IDs | Knowledge References |
|---|---|---|---|
| **3.1 Understand identity life cycle management** | **12** | | |
| - Define roles and responsibilities | 1 | Q647 | KNOW-D3-003, KNOW-D3-004 |
| - Establish identities and grant initial access (provisioning / proofing) | 3 | Q656, Q657, Q669 | KNOW-D3-001, KNOW-D3-002, KNOW-D3-014, KNOW-D3-015, KNOW-D3-016 |
| - Reassess existing access (periodic review / transfers) | 3 | Q648, Q649, Q650 | KNOW-D3-005, KNOW-D3-006, KNOW-D3-007, KNOW-D3-013, KNOW-D3-014, KNOW-D3-016 |
| - Withdraw unnecessary access (deprovisioning / offboarding) | 2 | Q651, Q652 | KNOW-D3-008, KNOW-D3-009, KNOW-D3-012 |
| - Supporting guidance and technologies (frameworks / IdP / directory) | 3 | Q653, Q654, Q655 | KNOW-D3-010, KNOW-D3-011, KNOW-D3-012, KNOW-D3-013, KNOW-D3-015 |
| **3.2 Understand logical access controls** | **11** | | |
| - Minimize granted privileges (least privilege / PoLP) | 1 | Q658 | KNOW-D3-016, KNOW-D3-018 |
| - Divide incompatible responsibilities (SoD / collusion limits) | 2 | Q659, Q660 | KNOW-D3-014, KNOW-D3-017 |
| - Models for authorization decisions (DAC, MAC, RBAC, ABAC) | 6 | Q661, Q662, Q663, Q664, Q665, Q666 | KNOW-D3-003, KNOW-D3-016, KNOW-D3-018, KNOW-D3-019, KNOW-D3-020, KNOW-D3-021, KNOW-D3-022 |
| - 2026 AI / Modern Authentication & Monitoring | 2 | Q667, Q668 | KNOW-D3-002, KNOW-D3-024, KNOW-D3-025 |

---

## 4. Academic and Bilingual Quality Assurance

1. **Foundational Psychometric Rigor:**
   - Every scenario establishes concrete organizational context (e.g. procurement role prerequisite, internal file service with owner-assigned rights, remote onboarding proofing).
   - Scenarios specify explicit operational constraints justifying qualified keys such as `FIRST`, `BEST`, and `MOST directly`.
   - Distractors represent authentic professional mistakes (e.g. copying an experienced buyer's permissions, assuming MFA requires multiple physical devices, assuming SoD eliminates all fraud, treating central account disablement as immediate proof of session termination).

2. **Absence of Unsupported Security Absolutes:**
   - Q660 explicitly tests that SoD reduces unilateral abuse but does *not* eliminate collusion.
   - Q666 tests that MAC is *not* universally superior to DAC; model suitability is determined by policy requirements and authority structure.
   - Q650 distinguishes account inactivity from account orphaning (an active service account can still be orphaned; an inactive recovery account can be legitimate).

3. **Bilingual Parity & Technical Terminology:**
   - Essential cybersecurity terms are preserved naturally in English alongside Thai phrasing (e.g., `Identity Provider (IdP)`, `Multi-Factor Authentication (MFA)`, `Role-Based Access Control (RBAC)`, `Discretionary Access Control (DAC)`, `Mandatory Access Control (MAC)`, `Attribute-Based Access Control (ABAC)`, `Separation of Duties (SoD)`).
   - Every question contains full English and Thai explanations for the correct answer as well as specific rationale for why each distractor is incorrect.

---

## 5. Semantic Duplicate Analysis & Overlap Audit

Automated TF-IDF vector cosine similarity screening and manual comparative audits were performed across all banks:

1. **Comparison Against Domain 1 & Domain 2:**
   - Top candidate: Q651 vs Q587 (score: 0.216).
     - *Distinction:* Q651 evaluates downstream application session termination after central account offboarding. Q587 tests AAA phases (Authentication vs Authorization). Distinct concepts and cognitive objectives.
   - Top candidate: Q655 vs Q634 (score: 0.150).
     - *Distinction:* Q655 tests NIST SP 800-63 digital identity guidance scope. Q634 tests business continuity/governance metrics. Zero conceptual overlap.

2. **Internal Domain 3 Review:**
   - Top candidate: Q662 vs Q664 (score: 0.266).
     - *Distinction:* Q662 evaluates MAC clearance and need-to-know rules. Q664 evaluates ABAC subject/resource/device/environmental criteria.
   - Rejection of Q670:
     - Draft Q670 was authored testing "Policy decision versus effective technical control".
     - Manual review confirmed that Q649 already assessed this exact decision principle ("Apply the approved removals and verify the effective permissions").
     - **Action taken:** Q670 was marked `REJECTED` and excluded from production integration.

3. **Comparison Against Legacy 583 Bank:**
   - Top candidate: Q663 vs Q507 (score: 0.337).
     - *Distinction:* Legacy Q507 was a bare recall definition of RBAC. Q663 tests enterprise scalability, centralized job-role permission reuse vs individual grants.
   - Top candidate: Q661 vs Q506 (score: 0.327).
     - *Distinction:* Legacy Q506 asked "In which access control model does the owner decide...". Q661 tests owner delegation, system enforcement, and absence of mandatory classification overrides.

---

## 6. Traceability Register (24 Drafted Items)

| ID | Obj | Bullet | Tested Concept | Decision Focus | Status | Key |
|---|---|---|---|---|---|---|
| **647** | 3.1 | roles | Approval authority before provisioning | Prerequisite approval vs urgent assignment | ACCEPTED | B |
| **648** | 3.1 | review | Mover entitlement adjustment | Revoke obsolete rights while keeping new role | ACCEPTED | D |
| **649** | 3.1 | review | Review decision vs completed remediation | Apply and verify removals after access review | ACCEPTED | A |
| **650** | 3.1 | review | Account activity vs ownership | Distinguish inactivity from orphan governance | ACCEPTED | C |
| **651** | 3.1 | deprovision | Independent application sessions | Revoke downstream sessions after central disablement | ACCEPTED | A |
| **652** | 3.1 | deprovision | Access termination vs audit retention | Disable access while preserving required audit history | ACCEPTED | D |
| **653** | 3.1 | tools | Directory data responsibility | Structured identity and group record store | ACCEPTED | C |
| **654** | 3.1 | tools | IdP assertion responsibility | Trusted authentication assertion for relying apps | ACCEPTED | B |
| **655** | 3.1 | frameworks | Digital identity guidance scope | NIST SP 800-63 (proofing, authentication, federation) | ACCEPTED | C |
| **656** | 3.1 | provision | Owned workload identity lifecycle | Dedicated bot identity, scoped rights, owner, review | ACCEPTED | A |
| **657** | 3.1 | provision | Onboarding identity proofing | Identity proofing vs self-selected secret entry | ACCEPTED | D |
| **658** | 3.2 | least-privilege | Task-specific minimum access | Read-only access without administrative rights | ACCEPTED | B |
| **659** | 3.2 | separation-of-duties | SoD for automated request and approval | Remove bot's self-approval privilege | ACCEPTED | C |
| **660** | 3.2 | separation-of-duties | Residual collusion risk after SoD | Dual control limits unilateral abuse, not collusion | ACCEPTED | A |
| **661** | 3.2 | models | Owner-delegated access decision | Discretionary Access Control (DAC) with system enforcement | ACCEPTED | D |
| **662** | 3.2 | models | Clearance and need-to-know | Mandatory Access Control (MAC) requiring both conditions | ACCEPTED | B |
| **663** | 3.2 | models | Permission reuse through job roles | Role-Based Access Control (RBAC) at scale | ACCEPTED | A |
| **664** | 3.2 | models | Attribute and context policy evaluation | Attribute-Based Access Control (ABAC) multi-attribute | ACCEPTED | C |
| **665** | 3.2 | models | Multiple roles and effective permissions | Interpreting multiple role assignments in RBAC | ACCEPTED | B |
| **666** | 3.2 | models | Access-model suitability vs ranking | Evaluate policy needs, not unconditional DAC vs MAC | ACCEPTED | D |
| **667** | 3.2 | ai-authentication | Multiple factor types within one authenticator | Possession (key) + knowledge (PIN) on single device | ACCEPTED | A |
| **668** | 3.2 | ai-authentication | Risk signal interpretation | Contextual investigation of AI behavioral alert | ACCEPTED | C |
| **669** | 3.1 | provision | Identity-to-account linkage | Link separate admin/user accounts to single verified identity | ACCEPTED | D |
| **670** | 3.2 | logical-enforcement | Technical permission enforcement | Reapply and verify permissions after policy change | **REJECTED** | B |

---

## 7. Production Integration & Verification Results

### 7.1 Files Modified and Created

- **`content/isc2-cc-2026/questions/domain-3-draft.mjs`:** Staging module with 24 draft questions, 23 accepted, 1 rejected, and staging validators.
- **`data/certs/isc2/cc/versions/next-bank/questions/domain-3.js`:** Production module containing 23 accepted questions (Q647–Q669).
- **`data/certs/isc2/cc/versions/next-bank/exam.config.js`:** Domain 3 enabled (`available: true`, `questionCount: 23`, `questionThCount: 23`, `weight: 0.20`, `totalQuestions: 86`, `defaultQuestionCount: 86`).
- **`data/exam-versions.js`:** Next-bank registry updated (`questionCount: 86`, description updated to include Domain 3).
- **`tools/verify-domain3-integration.mjs`:** Verification suite asserting staging, schema, bilingual completeness, question loader, quiz engine, session persistence, and SHA-256 byte preservation of protected groups.
- **`tools/verify-domain2-integration.mjs`:** Adapted whole-bank total check to dynamic sum (86 Qs) while strictly maintaining all Domain 2 assertions (39 Qs).
- **`ISC2 Update 2026/Domain 3/question-bank-review.md`:** Comprehensive academic review and handoff record.

### 7.2 Verification Suite Outcomes

1. `node tools/verify-domain3-integration.mjs`
   - PASS: Staging validation (24 drafted, 23 eligible, 1 rejected).
   - PASS: Production schema, keys, bilingual fields, and source links.
   - PASS: Structured explanation rendering in EN, TH, and bilingual modes.
   - PASS: Byte preservation (legacy 583, Domains 1/2, vocabulary, runtime/UI code).
   - PASS: Production integration (Q647–Q669, D1: 24 / D2: 39 / D3: 23, total 86).
   - PASS: Selection, practice mode (D3-only and mixed), scoring, and session persistence snapshot restoration.
2. `node tools/verify-domain2-integration.mjs`: 8/8 checks passed (100% success).
3. `node tools/verify-phase4-quiz-engine.mjs`: 7/7 tests passed (100% success).
4. `node tools/verify-explanation-formatting-2026.mjs`: 8/8 tests passed (100% success).
5. `node tools/verify-session-persistence.mjs`: 8/8 scenarios passed (100% success).
6. `node tools/verify-vocabulary-domain2.mjs`: 10/10 tests passed (100% success).

---

## 8. Remaining Limitations and Human Sign-Off Status

- **Automated QA vs Human Review:** Automated validation, schema checks, and assistant-level bilingual reviews are complete. Independent human academic and psychometric sign-off remains pending.
- **Exam Mode Threshold:** The full 125-item exam session in `next-bank` will become selectable once all 5 domains are integrated and reach 125+ questions. In the interim, Practice mode is fully enabled and selectable for Domain 1, Domain 2, Domain 3, or any combination thereof.
