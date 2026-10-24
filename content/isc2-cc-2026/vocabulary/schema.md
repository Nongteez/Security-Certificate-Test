# ISC2 CC 2026 Exam Vocabulary — Data Schema Specification

> **Version:** 1.0.0  
> **Status:** Active / Standard  
> **Target Audience:** Content Curators, Academic Reviewers, and Frontend Engineers  
> **Scope:** ISC2 Certified in Cybersecurity (CC) — 2026 Exam Outline  

---

## 1. Overview

This document specifies the official JSON data schema for the **ISC2 CC Exam Vocabulary Knowledge Base**.  
The schema is designed to support:
- Vocabulary browsing & keyword search
- Domain- and objective-based filtering
- Bilingual flashcards (English ⇄ Thai)
- Acronym and abbreviation drill practice
- Confusing concept side-by-side comparison
- Contextual exam scenario terminology learning
- Future interactive vocabulary quizzes

---

## 2. JSON Schema Definition

Each vocabulary database file (e.g. `domain-1.json`) contains a top-level JSON object with metadata and an array of vocabulary entries:

```json
{
  "domain_id": 1,
  "domain_name": "Security Principles",
  "version": "2026",
  "total_entries": 120,
  "last_updated": "2026-10-19",
  "entries": [
    {
      "id": "VOC-CC26-D1-001",
      "term": "Authentication",
      "acronym": null,
      "full_form": null,
      "thai_meaning": "การพิสูจน์ตัวตน",
      "definition_en": "The process of verifying a claimed identity.",
      "explanation_th": "กระบวนการตรวจสอบว่าบุคคลหรือระบบเป็นตัวตนที่กล่าวอ้างจริงหรือไม่",
      "category": "core_term",
      "domain": 1,
      "objective": "1.1",
      "exam_relevance": "Distinguish authentication from authorization.",
      "exam_relevance_th": "ข้อสอบมักทดสอบความแตกต่างระหว่าง Authentication (การพิสูจน์ตัวตนว่าคุณคือใคร) และ Authorization (การกำหนดสิทธิ์ว่าคุณได้รับอนุญาตให้ทำสิ่งใดได้บ้าง)",
      "example_en": "The system authenticates the user before granting access.",
      "example_th": "ระบบพิสูจน์ตัวตนผู้ใช้ก่อนอนุญาตให้เข้าถึง",
      "confused_with": ["Authorization"],
      "keywords": ["Identity", "Verification"],
      "sources": [
        {
          "source_id": "ISC2-CC-2026-D1-CAPTURE-012",
          "locator": "S12",
          "timestamp": "T@00:18:08",
          "concept_id": "KNOW-D1-009"
        }
      ],
      "source_status": "source_supported",
      "review_status": "draft"
    }
  ]
}
```

---

## 3. Field Specifications

| Field Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `id` | `string` | **Yes** | Unique, stable identifier following format `VOC-CC26-D<domain>-<number>` (e.g. `VOC-CC26-D1-001`). |
| `term` | `string` | **Yes** | Primary English terminology name (e.g. `"Authentication"`). |
| `acronym` | `string \| null` | **Yes** | Common abbreviation or acronym if applicable (e.g. `"MFA"`, `"ALE"`), otherwise `null`. |
| `full_form` | `string \| null` | **Yes** | Expanded full form of the acronym (e.g. `"Multifactor Authentication"`), otherwise `null`. |
| `thai_meaning` | `string` | **Yes** | Concise, natural Thai translation/meaning of the term (e.g. `"การพิสูจน์ตัวตน"`). |
| `definition_en` | `string` | **Yes** | Concise, technically accurate English definition (1–2 sentences). |
| `explanation_th` | `string` | **Yes** | Beginner-friendly Thai explanation providing educational context for Thai exam candidates. |
| `category` | `string (enum)` | **Yes** | Category identifier: `core_term`, `acronym`, `exam_language`, `confusing_term`, `scenario_vocabulary`. |
| `domain` | `integer` | **Yes** | Exam domain number (`1` for Security Principles). |
| `objective` | `string` | **Yes** | Official Exam Objective ID (e.g. `"1.1"`, `"1.2"`, `"1.3"`, `"1.4"`, `"1.5"`, or `"exam_strategy"`). |
| `exam_relevance` | `string` | **Yes** | Practical guidance on how this term appears in questions and how it impacts answer choice selection. |
| `exam_relevance_th` | `string \| null` | No | Accurate, natural Thai translation of the exam guidance, preserving technical qualifiers and exam relevance. |
| `example_en` | `string` | **Yes** | Realistic enterprise/cybersecurity scenario sentence in English illustrating usage. |
| `example_th` | `string` | **Yes** | Natural Thai translation of the example sentence. |
| `confused_with` | `string[]` | **Yes** | Array of related terms learners commonly confuse with this concept (empty array `[]` if none). |
| `keywords` | `string[]` | **Yes** | Array of search/indexing keywords. |
| `sources` | `object[]` | **Yes** | Traceability citations pointing to slide numbers, transcript timestamps, or canonical concept IDs. |
| `source_status` | `string (enum)` | **Yes** | Source evidence status: `source_supported`, `editorial_synthesis`, `review_required`, `supplemental`. |
| `review_status` | `string (enum)` | **Yes** | Academic review status: `draft`, `needs_human_review`, `approved`. |

---

## 4. Enumerated Value Definitions

### 4.1 `category`
- `core_term`: Foundational cybersecurity principles, models, mechanisms, and governance concepts.
- `acronym`: Standard abbreviations and industry acronyms heavily tested on the exam.
- `exam_language`: Key question qualifiers, stem operators, and instruction words (e.g. BEST, FIRST, EXCEPT).
- `confusing_term`: Terms that share similar contexts or sounds that candidates frequently mix up.
- `scenario_vocabulary`: Real-world operational verbs, actions, conditions, and incident terminology.

### 4.2 `source_status`
- `source_supported`: Factually grounded directly in course slides, instructor transcripts, and verified canonical concepts.
- `editorial_synthesis`: Comparative synthesis or structured distinction derived directly from source evidence.
- `review_required`: Contains disputed claims, transcription typos, or unverified numerical examples (e.g. SQ issues).
- `supplemental`: Essential for official exam outline coverage, but placed in supplemental inventory because it is not explicitly taught in primary lecture materials.

### 4.3 `review_status`
- `draft`: Initial curated draft ready for review.
- `needs_human_review`: Requires bilingual subject-matter expert inspection.
- `approved`: Formally accepted by curriculum leads.

---

## 5. Source Citation Object Format

Each object in the `sources` array has the following structure:

```json
{
  "source_id": "ISC2-CC-2026-D1-CAPTURE-012",
  "locator": "S12",
  "timestamp": "T@00:18:08",
  "concept_id": "KNOW-D1-009"
}
```

---

## 6. Integrity and Quality Rules

1. **Unique Identifiers:** Every ID must be unique across all domains.
2. **Strict English UI:** All field keys, category enums, and status codes are strictly English.
3. **Bilingual Parity:** Every entry must have both valid English and Thai meanings/explanations/examples.
4. **No Invented References:** Every source locator must resolve to an authentic slide (`[S01]`–`[S60]`), transcript timestamp (`T@hh:mm:ss`), or canonical concept (`KNOW-D1-xxx`).
5. **Segregation of Supplemental Terms:** Terms not directly found in source materials must NOT be labeled `source_supported`. They must be classified as `supplemental` and recorded in `supplemental-candidates.md`.
