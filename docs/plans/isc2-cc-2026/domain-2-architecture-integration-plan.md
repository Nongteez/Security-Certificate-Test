# ISC2 CC 2026 — Domain 2 Architecture Integration & Validation Plan (Refined)

- **Course / Exam Scope:** ISC2 Certified in Cybersecurity (CC) — Exam Outline Effective September 1, 2026 (`isc2-cc-2026-09-01`)
- **Domain:** Domain 2 — Security Governance (`17.3%` Exam Weight; Objectives `2.1`–`2.4`)
- **Refined Curriculum Target:** **8 Lessons / 58 Bilingual Slides**
- **Core Architectural Mandate:** Integrate Domain 2 into the existing ISC2 CC 2026 Learning System **without** creating a parallel slide viewer, a second progress engine, or breaking any Domain 1 functionality (`12` lessons / `101` slides).

---

## 1. Existing Learning System Architecture (Verified from Read-Only Code Audit)

### 1.1 End-to-End User Journey & Runtime Modules
```
Version Selection (ISC2 CC 2026)
  └──► Learning Center (js/ui/learning/learning-center.js)
         └──► Domain Overview (Domain 2: Security Governance — 17.3% weight, Objectives 2.1–2.4)
                └──► Select Objective (2.1 GRC | 2.2 Redundancy | 2.3 Security Awareness | 2.4 Measuring Effectiveness)
                       └──► Start / Resume Lesson (js/core/learning-registry.js + js/core/learning-progress.js)
                              └──► Presentation Player (js/ui/learning/presentation.js)
                                     ├──► Slide Canvas Renderer (js/ui/learning/renderers.js)
                                     ├──► Reading Mode Modal (js/ui/learning/lesson-info.js)
                                     └──► Interactive Feedback & Progress Persistence (localStorage['sec_cert_learning_progress_v1'])
```

### 1.2 Verified Module Inventory & Integration Impact

| File Path | Current Role in Repository | Domain 2 Integration Action (Future Implementation Phase) |
|---|---|---|
| `content/isc2-cc-2026/learning/published/catalog.json` | Published manifest registering `domains[1..5]` (`OBJECTIVE_COUNTS = [5, 4, 2, 3, 5]`), objectives, and published `lessons[]`. Currently has `lessons: []` for Domain 2 (`domainId: 2`). | Populate Domain 2's `lessons[]` array with the **8 Domain 2 lesson entries** (`lesson-d2-01` through `lesson-d2-08`, `58` slides total) mapping `2` lessons each to Objectives `2.1`, `2.2`, `2.3`, and `2.4`. |
| `content/isc2-cc-2026/learning/published/lessons/lesson-d2-*.json` | Published bilingual lesson JSON files validated by `js/core/learning-schema.js`. | Create **8 new lesson JSON files** (`lesson-d2-01-grc-foundations.json` through `lesson-d2-08-dashboards-scorecards-reports.json`). **Zero Domain 1 JSON files (`lesson-d1-*.json`) may be touched.** |
| `js/core/learning-schema.js` | Validates `OUTLINE_ID = 'isc2-cc-2026-09-01'`, `OBJECTIVE_COUNTS = [5, 4, 2, 3, 5]`, `validateCatalog()`, and `validateLesson()` (including `review`, `references`, `slides[]`, `blocks[]`, and `explanationBlocks[]`). | **No changes required.** Already validates `domainId: 2` and `objectiveIds` in `["2.1", "2.2", "2.3", "2.4"]`. |
| `js/core/learning-registry.js` | Loads `catalog.json` and fetches individual lesson JSON payloads on demand (`loadLesson(lessonId)`). | **No changes required.** Works automatically once Domain 2 lessons are added to `catalog.json`. |
| `js/core/learning-progress.js` | Persists per-lesson progress in `localStorage['sec_cert_learning_progress_v1']` keyed by `[lessonId]` (`contentRevision`, `lastSlideId`, `visitedSlideIds`, `status`, `completedAt`, `updatedAt`, `language`). | **No changes required.** Automatically tracks `lesson-d2-01` through `lesson-d2-08` independently of Domain 1 lessons and resets cleanly if `contentRevision` changes. |
| `js/ui/learning/renderers.js` | Dispatches slide rendering by `slide.rendererType` and delegates structured custom presentations where registered. | Register a modular **`js/ui/learning/domain2-presentations.js`** helper (following the exact pattern of `frameworks-presentations.js` / `governance-presentations.js` / `control-categories-presentations.js`) **without** altering any Domain 1 renderer paths. |
| `js/ui/learning/lesson-info.js` | Renders the **Reading Mode (`Info`) modal dialog** (`renderLessonInfo(host, { lesson, language, onClose })`). Line `73` currently checks a hardcoded 12-element array of `lesson-d1-*` IDs for structured reading mode layout. | Extend the structured-reading predicate in `js/ui/learning/lesson-info.js` so `lesson-d2-01` through `lesson-d2-08` (or `lesson.domainId === 2`) also render with the clean structured Reading Mode layout while keeping Domain 1 behavior 100% identical. |
| `css/learning.css` | Styles the presentation player, slide layouts, typography, cards, diagrams, and interactive scenario options. | Add only scoped `.d2-*` helper classes if needed; never modify existing Domain 1 selectors. |

---

## 2. Exact Data & Schema Contracts (`js/core/learning-schema.js`)

Inspection of `js/core/learning-schema.js` (`L1–102`) and `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json` confirms the exact schema every Domain 2 lesson JSON file must satisfy:

### 2.1 Top-Level Lesson JSON Contract
```json
{
  "schemaVersion": 1,
  "outlineId": "isc2-cc-2026-09-01",
  "lessonId": "lesson-d2-01-grc-foundations",
  "domainId": 2,
  "objectiveIds": ["2.1"],
  "order": 1,
  "status": "published",
  "contentRevision": "d2-l01-2026-r1",
  "estimatedMinutes": 12,
  "title": {
    "en": "GRC Foundations & Frameworks",
    "th": "พื้นฐาน GRC และกรอบมาตรฐานความมั่นคงปลอดภัย"
  },
  "summary": {
    "en": "Understand Governance, Risk Management, and Compliance (GRC), its 7 core purposes and 7 benefits, and how NIST CSF, ISO/IEC 27001, and COBIT guide enterprise security governance.",
    "th": "ทำความเข้าใจ Governance, Risk Management และ Compliance (GRC) วัตถุประสงค์หลัก 7 ข้อ ประโยชน์ 7 ข้อ และการใช้กรอบมาตรฐาน NIST CSF, ISO/IEC 27001 และ COBIT"
  },
  "Completion": {
    "minimumVisitedPercent": 100,
    "requireInteractiveCount": 1
  },
  "review": {
    "reviewedRevision": "d2-l01-2026-r1",
    "evidencePath": "docs/plans/isc2-cc-2026/domain-2-2026-coverage-matrix.md",
    "technical": {
      "status": "approved",
      "reviewer": "domain-2-academic-audit",
      "reviewedAt": "2026-10-28"
    },
    "bilingual": {
      "status": "approved",
      "reviewer": "domain-2-bilingual-audit",
      "reviewedAt": "2026-10-28"
    },
    "rights": {
      "status": "approved",
      "reviewer": "domain-2-provenance-audit",
      "reviewedAt": "2026-10-28"
    }
  },
  "references": [
    {
      "id": "ref-isc2-2026-outline",
      "authority": "official-scope",
      "citation": "ISC2 Certified in Cybersecurity (CC) Exam Outline, effective September 1, 2026 — Domain 2: Security Governance (17.3%)",
      "url": "https://www.isc2.org/certifications/cc/cc-certification-exam-outline"
    },
    {
      "id": "ref-d2-master-notes",
      "authority": "course",
      "citation": "ISC2 Update 2026 / Domain 2 / Domain 2.md & D2 sum.md & S01–S38"
    }
  ],
  "slides": []
}
```

### 2.2 Slide & Block Schema Contract (`validateSlide` & `validateBlock` in `js/core/learning-schema.js`)
Every slide object inside `lesson.slides[]` must satisfy:
- **`slideId`:** Non-empty string (e.g., `"d2-01-s01"`)
- **`order`:** Sequential integer `1..N` (`index + 1`)
- **`type`:** `"concept"` | `"comparison"` | `"process"` | `"scenario"` | `"summary"`
- **`rendererType`:**
  - Standard schema-validated types in `js/core/learning-schema.js`: `'text' | 'comparison' | 'diagram' | 'interactive'`
  - Structured presentation types handled in `js/ui/learning/renderers.js`: `'pillars' | 'incident-flow' | 'scenario-decision'` *(Note: if `learning-schema.js` is run in strict mode, `rendererType` in JSON is set to one of `'text' | 'comparison' | 'diagram' | 'interactive'` while custom structured layout metadata is dispatched via `domain2-presentations.js`, matching the exact pattern of `lesson-d1-08-governance.json` and `lesson-d1-09-frameworks.json`!)*
- **`title`:** Bilingual pair `{ "en": "...", "th": "..." }`
- **` blocks` (`1..N` items) & `explanationBlocks` (`1..N` items for Reading Mode):**
  - Valid `block.kind` values in `js/core/learning-schema.js` (`L35`):
    1. `'text'` → requires `block.body: { en, th }`
    2. `'list'` → requires `block.items: [{ en, th }, ...]`
    3. `'table'` → requires `block.headers: [{ en, th }, ...]` and `block.rows: [[{ en, th }, ...], ...]`
    4. `'media'` → requires `block.src` (`^assets/` or `^content/isc2-cc-2026/`) and `block.alt: { en, th }` (`rightsUse: 'runtime-approved'`)
    5. `'diagram'` → requires `block.caption: { en, th }` and `block.steps: [{ title: { en, th }, body: { en, th } }, ...]`
    6. `'reveal'` → requires `block.cards: [{ front: { en, th }, back: { en, th } }, ...]`
- **`interaction` (required when `rendererType === 'interactive'`):**
  - `interactionType`: `'single-choice'`
  - `prompt`: `{ en, th }`
  - `options`: `Array` (`>= 2` items) of `{ id, label: { en, th } }`
  - `correctOptionId`: matching `option.id`
  - `feedback`: `{ correct: { en, th }, byOption: { [optionId]: { en, th } } }`
- **`referenceIds`:** Non-empty array of strings referencing `lesson.references[].id`
- **`review`:** `{ "status": "approved", "reviewedRevision": "d2-l01-2026-r1" }`

---

## 3. Catalog Registration & Progress Persistence Contract

### 3.1 Catalog Entry (`content/isc2-cc-2026/learning/published/catalog.json`)
Domain 2 (`domainId: 2`) in `catalog.json` will register the **8 refined lessons (`58` slides total)**:

| Order | `lessonId` | `objectiveIds` | Slide Count | Interactive Count |
|---:|---|---|---:|---:|
| `1` | `lesson-d2-01-grc-foundations` | `["2.1"]` | `6` | `1` |
| `2` | `lesson-d2-02-grc-tools-risk-register` | `["2.1"]` | `7` | `1` |
| `3` | `lesson-d2-03-business-continuity-bcp` | `["2.2"]` | `6` | `1` |
| `4` | `lesson-d2-04-disaster-recovery-drp` | `["2.2"]` | `9` | `1` |
| `5` | `lesson-d2-05-awareness-culture-leadership` | `["2.3"]` | `7` | `1` |
| `6` | `lesson-d2-06-social-engineering-passwords` | `["2.3"]` | `8` | `1` |
| `7` | `lesson-d2-07-metrics-kpi-kri` | `["2.4"]` | `8` | `1` |
| `8` | `lesson-d2-08-dashboards-scorecards-reports` | `["2.4"]` | `7` | `1` |
| **Total** | **8 Domain 2 Lessons** | **`2.1` (`13`), `2.2` (`15`), `2.3` (`15`), `2.4` (`15`)** | **`58`** | **`8`** |

### 3.2 Progress & Resume Contract (`js/core/learning-progress.js`)
- `js/core/learning-progress.js` stores all lesson progress inside `localStorage['sec_cert_learning_progress_v1']` under `store.lessons[lesson.lessonId]`.
- Because keys are namespaced by `lessonId` (`lesson-d2-01-*` through `lesson-d2-08-*`), Domain 2 progress is **100% isolated from Domain 1 (`lesson-d1-01-*` through `lesson-d1-12-*`)**.
- Reloading the browser mid-lesson restores `lastSlideId`, `visitedSlideIds`, `status` (`in_progress` / `completed`), and `language` (`en` / `th`).

---

## 4. Lesson-by-Lesson Implementation & Verification Gate (For Future Execution Phase)

When user approval is granted to begin implementation, each lesson (`Lesson 1` → `Lesson 8`) must be built **one lesson at a time** using the following verification gate before advancing to the next lesson:

1. **Schema & Integrity Check (`scripts/validate-learning-content.mjs`):**
   - Confirms `validateCatalog()` and `validateLesson()` pass with `0` errors.
   - Confirms every `referenceId` resolves, `review.reviewedRevision === lesson.contentRevision`, and all `{ en, th }` pairs are non-empty.
2. **Quarantine & Academic Accuracy Check:**
   - Confirms `D2-Q01` (`COBIT`, `off-site storage`), `D2-Q02` (ordinal `1–4` vs. quantitative), `D2-Q03` (`S36` `< 10` vs. `T:L111` `< 10%` unit-clarity explanation; Row 4 excluded from scored question keys), `D2-Q04` (`GDPR`/`HIPAA` framed strictly as examples), `D2-Q05` (NIST SP 800-63B password guidance), `D2-Q06` (mitigation residual risk `> 0` vs. avoidance), and `D2-Q08` (`S20` excluded) are honored.
3. **Bilingual Placeholder & Natural Thai Check:**
   - Confirms zero `TODO`, `TBD`, `lorem`, or untranslated placeholders exist, while allowlisting valid Thai words containing `"รอ"` (`กรอก`, `รองรับ`, `ครอบคลุม`, `ร่องรอย`, `รอบคอบ`, `ต่อรอง`, `รับรอง`, `สำรอง`, `รอด`, `ระวัง`).
4. **Desktop Viewport & Interactive QA (`1920×1080` & `1366×768`):**
   - Verifies both `TH` and `EN` modes, Reading Mode (`Info`) modal, interactive scenario option feedback, fullscreen toggle, and `localStorage` Resume after reload.
5. **Domain 1 Non-Interference Check (`git status -s`):**
   - Confirms zero modifications to `lesson-d1-*.json` or Domain 1 presentation modules.
