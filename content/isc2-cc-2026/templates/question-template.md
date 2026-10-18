# Question Staging Template — ISC2 CC 2026

> **Usage:** Copy the block below when staging incoming practice questions in `content/isc2-cc-2026/questions/domain-X.md`. 
>
> **Important:**
> 1. Do **not** commit dummy or fabricated questions.
> 2. Clearly distinguish between **Production Engine Fields** (consumed directly by the Quiz Engine upon import) and **Staging & Editorial Metadata** (used for audit, review, and verification).

---

```markdown
### Question Entry: [Q-DX-SEQ]

#### 1. Identification & Source Provenance
- **Question ID (Staging):** `Q-D[X]-[SEQ]` (e.g., `Q-D1-001`; maps to Production numeric ID `1001+` upon import)
- **Exam Version:** `next-bank` (ISC2 CC 2026 Exam Outline)
- **Domain:** Domain [X]: [Domain Name] — [Weight]%
- **Objective ID:** `[X.X]` (If Domain 4 and unverified, record `[4.X] — Pending Verification`)
- **Topic:** [Specific Topic or Subtopic]
- **Source Reference:** [Source Batch ID / Document / Page / Reference Note]

#### 2. English Question Specification (Production Engine Compatible)
- **Question Stem (English):**
  > [Enter scenario-based or conceptual question text in English. Ensure clear context, constraints, and objective.]

- **Answer Options (English):**
  - [ ] **A.** [Option text A]
  - [ ] **B.** [Option text B]
  - [ ] **C.** [Option text C]
  - [ ] **D.** [Option text D]

- **Correct Answer Index:** `[0 | 1 | 2 | 3]` (0 = A, 1 = B, 2 = C, 3 = D)
- **Correct Option Indicator:** `[A | B | C | D]`

- **Full Explanation (English):**
  > [Thorough pedagogical explanation clarifying why the correct answer is right and why the underlying security principle applies.]

- **Short Explanation (English):**
  > [One concise sentence summarizing the core takeaway for the exam review screen.]

#### 3. Thai Translation (คำแปลภาษาไทย - Production Engine Compatible)
- **Translated Question Stem (ภาษาไทย):**
  > [ข้อความคำถามภาษาไทย แปลอย่างสละสลวย ถูกต้องตามหลักวิชาการความมั่นคงปลอดภัยไซเบอร์]

- **Translated Answer Options (ภาษาไทย):**
  - [ ] **A.** [ข้อความตัวเลือก A ภาษาไทย]
  - [ ] **B.** [ข้อความตัวเลือก B ภาษาไทย]
  - [ ] **C.** [ข้อความตัวเลือก C ภาษาไทย]
  - [ ] **D.** [ข้อความตัวเลือก D ภาษาไทย]

- **Translated Explanation (คำอธิบายภาษาไทย):**
  > [คำอธิบายเฉลยภาษาไทยโดยละเอียด พร้อมเหตุผลทางเทคนิคและหลักการความมั่นคงปลอดภัย]

#### 4. Question Quality & Editorial Indicators (Staging Metadata)
- **Question Type:** [Single-choice scenario | Single-choice conceptual]
- **Difficulty Tier:** [Foundational | Applied | Intermediate]
- **Keyword / Qualifier Indicator:** [BEST | MOST appropriate | FIRST | PRIMARY | LEAST | EXCEPT | NOT | None]
- **Technical Accuracy Status:** [draft | verified | needs-revision]
- **Answer Verification Status:** [unverified | single-source-verified | multi-source-verified]
- **Translation Review Status:** [draft | bilingual-parity-verified | needs-native-review]
- **Duplicate Review Status:** [unreviewed | no-duplicate-found | duplicate-flagged]
- **Publication Approval Status:** [staged | ready-for-import | rejected | deferred]

#### 5. Pedagogical Review & Distractor Rationale (Staging Audit)
- **Why Correct Answer is Correct:**
  - [Detail the exact security principle, standard, or operational justification]
- **Why Option A is Incorrect / Less Appropriate:**
  - [Explain specific flaw, incorrect scope, or why it is suboptimal]
- **Why Option B is Incorrect / Less Appropriate:**
  - [Explain specific flaw, incorrect scope, or why it is suboptimal]
- **Why Option C is Incorrect / Less Appropriate:**
  - [Explain specific flaw, incorrect scope, or why it is suboptimal]
- **Why Option D is Incorrect / Less Appropriate:**
  - [Explain specific flaw, incorrect scope, or why it is suboptimal]
- **Potential Ambiguity / Edge Cases:**
  - [Note any wording nuances, industry differences, or exam-specific constraints]
- **Terminology & Vocabulary Check:**
  - [Confirm consistency with standard terms e.g., least privilege, confidentiality, etc.]
- **Source Limitations / Legal Clearance:**
  - [Confirm item is independently written/adapted, not infringing third-party exam confidentiality]
```
