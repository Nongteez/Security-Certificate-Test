# ISC2 CC 2026 Exam Vocabulary Knowledge Base — Domain 1

> **Project:** SEC CERT TEST  
> **Certification:** ISC2 Certified in Cybersecurity (CC) — 2026 Exam Outline  
> **Domain:** Domain 1 — Security Principles (24% Exam Weight)  
> **Status:** Phase 1 Complete — Extraction, Curation, and Content Data Preparation  
> **Language:** English UI & Terminology / Bilingual Thai Explanations & Examples  

---

## 1. Overview & Objective

The **Exam Vocabulary Knowledge Base** is a specialized, academically curated repository of cybersecurity terminology, acronyms, confusing concepts, and exam question language tailored specifically for Thai candidates preparing for the English **ISC2 Certified in Cybersecurity (CC)** examination under the updated **2026 Exam Outline**.

This repository is designed to serve as the unified content engine for future educational tools:
- Bilingual Vocabulary Browser & Filter
- Interactive Search by Keyword or Objective
- Digital Flashcards (Term ⇄ Definition)
- Acronym Drills (Full Form & Security Context)
- Confusing Concept Side-by-Side Comparison
- Exam Question Stem Qualifier Guides

---

## 2. Directory Structure & File Inventory

The `content/isc2-cc-2026/vocabulary/` workspace contains the following core files:

```text
content/isc2-cc-2026/vocabulary/
├── README.md                     # Overview, architecture, inventory, and usage instructions (This file)
├── schema.md                     # Formal JSON data schema specification & field dictionary
├── domain-1.json                 # Machine-readable JSON database of all 110 accepted vocabulary entries
├── domain-1-review.md            # Comprehensive academic review document organized by Objective
├── confusing-terms.md            # In-depth guide to 15 high-risk commonly confused concept pairs
├── exam-language.md              # Deconstruction of ISC2 question qualifiers (BEST, FIRST, EXCEPT, etc.)
└── supplemental-candidates.md    # Segregated inventory of vital supplemental terms (Non-repudiation, etc.)
```

---

## 3. Quantitative Summary

| Metric | Count | Details |
| :--- | :---: | :--- |
| **Total Accepted JSON Entries** | **110** | Fully structured with stable IDs (`VOC-CC26-D1-001` to `VOC-CC26-D1-110`) |
| **Core Terms (`core_term`)** | 64 | Foundational concepts, mechanisms, and models across Objectives 1.1–1.5 |
| **Acronyms & Abbreviations (`acronym`)** | 19 | Standard industry acronyms (CIA, AAA, MFA, SLE, ALE, GDPR, HIPAA, etc.) |
| **Exam Question Language (`exam_language`)** | 7 | High-stakes stem qualifiers (BEST, FIRST, PRIMARY, LEAST, EXCEPT, etc.) |
| **Scenario Vocabulary (`scenario_vocabulary`)** | 20 | Real-world operational verbs, actions, conditions, and incident terminology |
| **Confusing Term Comparisons** | 15 groups | Comprehensive comparative tables in `confusing-terms.md` |
| **Supplemental Candidates** | 9 entries | Essential curriculum gap entries cataloged in `supplemental-candidates.md` |
| **Domain Coverage** | 100% | Full coverage across Objectives 1.1, 1.2, 1.3, 1.4, 1.5, and Exam Strategy |

---

## 4. Academic Integrity & Quality Rules

1. **Strict English UI Policy:**  
   In compliance with the project-wide language policy, all identifiers, keys, categories, statuses, and navigation labels remain strictly in English.
2. **Traceable Source Evidence:**  
   Every single entry in `domain-1.json` contains verified source citations linking back to lecture slides (`S01`–`S60`), transcript timestamps (`T@hh:mm:ss`), or canonical concept IDs (`KNOW-D1-xxx`).
3. **Segregation of Disputed / Supplemental Items:**  
   - Items with lecture typos or calculation discrepancies (e.g. ARO/ALE calculation in SQ-04, Code of Ethics precedence in SQ-09) are flagged as `review_required`.
   - Topics that are essential for the exam outline but were omitted from the primary video lecture (e.g. Non-repudiation, Risk Appetite, Residual Risk) are strictly segregated in `supplemental-candidates.md` and are NOT mixed into primary source citations.
4. **Zero Impact on Production Exam Bank:**  
   This workspace is completely decoupled from active question banks and the quiz engine.

---

## 5. Next Steps

- **Academic Peer Review:** Bilingual review of Thai explanations and examples.
- **Frontend Architecture:** Design of the Vocabulary Study UI components on the Exam Version Selection screen.
- **Domain 2–5 Extraction:** Replicate this Phase 1 extraction workflow across Domains 2 through 5.
