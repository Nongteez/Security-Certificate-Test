# ISC2 CC 2026 Content Staging Repository

> **Target Exam Version:** `next-bank` (ISC2 CC 2026 Exam Outline, effective Sept 1, 2026)  
> **Repository Role:** Content Staging, Editorial Curation & Pre-import Verification  
> **Production Target:** `data/certs/isc2/cc/versions/next-bank/` (to be created upon Phase 5 import)  
> **Status:** Active Staging Framework (Awaiting User Reference Materials & Question Batches)

---

## 1. Purpose & Architecture

This repository acts as the **isolated content staging ground** for all incoming study notes, curriculum references, and practice questions for the new ISC2 CC 2026 exam outline.

### Core Architectural Principles
1. **Strict Staging vs. Production Isolation:**
   - Files under `content/isc2-cc-2026/` are **staging and audit markdown documents**. They are not directly loaded by the client application.
   - Production runtime code is located in `data/certs/isc2/cc/versions/next-bank/questions/` as ES Modules.
   - Staging records contain extensive review notes, distractor flaws, and provenance data that are stripped or transformed upon final production import.
2. **Backward Compatibility Preservation:**
   - The existing 583-question bank (`2026`) in `data/certs/isc2/cc/versions/2026/` remains completely untouched.
   - Future 2026 production questions will use integer IDs in the range `1001+` to guarantee zero identifier collisions.
3. **Zero Placeholder Integrity:**
   - No mock, placeholder, or fabricated questions are permitted in this repository.
   - Staged files contain only verified concepts and rigorously reviewed questions.
4. **Bilingual Parity:**
   - All knowledge entries and practice items require complete English and Thai parity.

---

## 2. Directory Layout

```text
content/
└── isc2-cc-2026/
    ├── README.md                           # This index and governance guide
    │
    ├── knowledge/                          # Knowledge concepts staged by domain
    │   ├── domain-1.md                     # Domain 1: Security Principles (24%)
    │   ├── domain-2.md                     # Domain 2: Security Governance (17.3%)
    │   ├── domain-3.md                     # Domain 3: IAM Concepts (20%)
    │   ├── domain-4.md                     # Domain 4: Networking & Cloud Security (21.3%)
    │   └── domain-5.md                     # Domain 5: Security Operations & IR (17.3%)
    │
    ├── questions/                          # Practice questions staged by domain
    │   ├── domain-1.md                     # D1 Question Candidates
    │   ├── domain-2.md                     # D2 Question Candidates
    │   ├── domain-3.md                     # D3 Question Candidates
    │   ├── domain-4.md                     # D4 Question Candidates
    │   └── domain-5.md                     # D5 Question Candidates
    │
    └── templates/                          # Standardization templates
        ├── knowledge-template.md           # Blank knowledge entry template
        ├── question-template.md            # Blank question staging template
        └── content-batch-template.md       # Batch intake and legal assessment log
```

---

## 3. Published Domain Weights & Quotas

| Domain | Official Title | Exam Weight | 125-Item Mock Quota | Verification Status |
| :---: | :--- | :---: | :---: | :---: |
| **Domain 1** | Security Principles | **24%** | 30 questions | Verified (Objectives 1.1–1.5) |
| **Domain 2** | Security Governance | **17.3%** | 22 questions | Verified (Objectives 2.1–2.4) |
| **Domain 3** | Identity and Access Management (IAM) Concepts | **20%** | 25 questions | Verified (Objectives 3.1–3.2) |
| **Domain 4** | Networking and Cloud Security Concepts | **21.3%** | 27 questions | Topics Confirmed / **Numbering Pending** |
| **Domain 5** | Security Operations and Incident Response | **17.3%** | 21 questions | Verified (Objectives 5.1–5.5) |
| **Total** | *Sum of published rounded percentages* | **99.9%** | **125 questions** | Hamilton Largest Remainder Method |

---

## 4. End-to-End Content Workflow

```text
User Provides Study Material / Question Batches
                     │
                     ▼
           1. Content Intake
    (Fill content-batch-template.md)
                     │
                     ▼
     2. Source & Permission Review
  (Assess copyright, fair use & integrity)
                     │
                     ▼
     3. Domain & Objective Mapping
  (Assign official objective / 4.X Pending)
                     │
                     ▼
     4. Knowledge & Question Staging
  (Stage into knowledge/ or questions/)
                     │
                     ▼
       5. Technical Accuracy Review
 (Verify answer key & distractor rationales)
                     │
                     ▼
         6. Bilingual Parity Review
  (Verify Thai translation & terminology)
                     │
                     ▼
   7. Duplicate & Quality Validation
(Check collision with legacy bank & guidelines)
                     │
                     ▼
          8. User / Lead Approval
                     │
                     ▼
  9. Production Question Bank Import
 (Convert to ES Module: domain-X.js, ID 1001+)
                     │
                     ▼
    10. Quiz Engine & Node Verification
  (Execute automated test suites & linters)
```

---

## 5. Reusable Templates & Reference Standards

- **Knowledge Entry Template:** [`templates/knowledge-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/knowledge-template.md)
- **Question Staging Template:** [`templates/question-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/question-template.md)
- **Batch Intake Template:** [`templates/content-batch-template.md`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/templates/content-batch-template.md)
- **Question Writing Guidelines:** [`docs/plans/isc2-cc-2026/question-writing-guidelines.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/question-writing-guidelines.md)
- **Architectural Implementation Plan:** [`docs/plans/isc2-cc-2026/implementation-plan.md`](file:///D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/implementation-plan.md)
