# ISC2 CC 2026 Exam Vocabulary Knowledge Base — Domains 1, 2 & 3

> **Project:** SEC CERT TEST  
> **Certification:** ISC2 Certified in Cybersecurity (CC) — 2026 Exam Outline  
> **Domains:** Domain 1 — Security Principles, Domain 2 — Security Governance & Domain 3 — Identity and Access Management Concepts  
> **Status:** Integrated — Production Live Vocabulary Knowledge Base  
> **Language:** English UI & Terminology / Bilingual Thai Explanations & Examples  

---

## 1. Overview & Objective

The **Exam Vocabulary Knowledge Base** is a specialized, academically curated repository of cybersecurity terminology, acronyms, confusing concepts, and exam question language tailored specifically for Thai candidates preparing for the English **ISC2 Certified in Cybersecurity (CC)** examination under the updated **2026 Exam Outline**.

This repository serves as the unified content engine for the application's vocabulary and flashcard module:
- Bilingual Vocabulary Browser & Multi-Domain Filter (All Domains, Domain 1, Domain 2, Domain 3)
- Interactive Real-Time Search by Keyword, Term, Acronym, or Thai Meaning
- Digital 3D Flashcards (Front: Term/Acronym ⇄ Back: Thai Meaning, Definition & Translation)
- Acronym Drills (Full Form & Security Context)
- Confusing Concept Side-by-Side Comparison (RTO vs RPO, BCP vs DRP, AuthN vs AuthZ, Least Privilege vs Need-to-Know, DAC vs MAC, RBAC vs ABAC, etc.)
- Exam Question Stem Qualifier Guides (FIRST rule, BEST risk strategy, MOST directly, etc.)

---

## 2. Directory Structure & File Inventory

The `content/isc2-cc-2026/vocabulary/` workspace contains the following core files:

```text
content/isc2-cc-2026/vocabulary/
├── README.md                     # Overview, architecture, inventory, and usage instructions (This file)
├── schema.md                     # Formal JSON data schema specification & field dictionary
├── domain-1.json                 # Machine-readable JSON database of all 110 Domain 1 vocabulary entries
├── domain-1-review.md            # Comprehensive academic review document for Domain 1 organized by Objective
├── domain-2.json                 # Machine-readable JSON database of all 101 Domain 2 vocabulary entries
├── domain-2-review.md            # Comprehensive academic review document for Domain 2 organized by Objective
├── domain-3.json                 # Machine-readable JSON database of all 102 Domain 3 vocabulary entries
├── domain-3-review.md            # Comprehensive academic review document for Domain 3 organized by Objective
├── confusing-terms.md            # In-depth guide to commonly confused concept pairs
├── exam-language.md              # Deconstruction of ISC2 question qualifiers (BEST, FIRST, EXCEPT, etc.)
└── supplemental-candidates.md    # Segregated inventory of vital supplemental terms
```

---

## 3. Quantitative Summary

| Metric | Domain 1 | Domain 2 | Domain 3 | Combined Total |
| :--- | :---: | :---: | :---: | :---: |
| **Total Accepted JSON Entries** | **110** | **101** | **102** | **313** |
| **Core Terms (`core_term`)** | 64 | 64 | 61 | 189 |
| **Acronyms & Abbreviations (`acronym`)** | 19 | 14 | 17 | 50 |
| **Confusing Terms (`confusing_term`)** | 0 | 12 | 14 | 26 |
| **Scenario Vocabulary (`scenario_vocabulary`)** | 20 | 5 | 5 | 30 |
| **Exam Question Language (`exam_language`)** | 7 | 6 | 5 | 18 |
| **Objective Coverage** | 1.1–1.5 (100%) | 2.1–2.4 (100%) | 3.1–3.2 (100%) | 100% |

---

## 4. Academic Integrity & Quality Rules

1. **Strict English UI Policy:**  
   In compliance with the project-wide language policy, all identifiers, keys, categories, statuses, and navigation labels remain strictly in English.
2. **Traceable Source Evidence:**  
   Every single entry contains verified source citations linking back to lecture slides (`S01`–`S60`), transcript timestamps (`T@hh:mm:ss`), or canonical concept IDs (`KNOW-D1-xxx`, `KNOW-D2-xxx`).
3. **Segregation of Disputed / Supplemental Items:**  
   Quarantined claims (such as statutory overreach in `KNOW-D2-028` or unit conflicts in `KNOW-D2-054`) are strictly excluded.
4. **Zero Impact on Question Banks:**  
   This workspace is completely decoupled from active question banks and the quiz engine.

