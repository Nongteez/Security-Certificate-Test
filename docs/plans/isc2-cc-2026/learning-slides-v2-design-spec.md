# Learning Slides V2 — Revised UX Architecture and Implementation Specification

**Scope:** Governing V2 design; Gate A approved for Phase 2 Navigation and Core UI only  
**Revised:** 2026-10-25 (Asia/Bangkok)  
**Status:** Gate A explicitly approved 2026-10-25; Phase 2 implementation under review

## 1. Governing decision and scope

The primary journey is **Version Selection → Learning Center → Domain Overview → Interactive Presentation**. Continue Learning opens the last saved slide directly from the Center. Start Lesson and Resume Lesson open the presentation in one action. Lesson Contents is retired as a required screen; its academic information becomes optional Lesson Info inside the presentation.

This revision supersedes the previous proposal for a mandatory Lesson Overview, accordion objective groups, a permanently visible filmstrip, a new lesson schema, and automatic V1→V2 progress migration. It incorporates the English-only UI and selector-label decisions recorded in Tasks 63–64. The latest complete rebuild brief controls phase numbering: Phase 2 core navigation/UI, Phase 3 viewer, Phase 4 three representative compositions, Phase 5 verification/handoff.

The design session changed only this specification and the task tracker. The user subsequently approved Gate A explicitly on 2026-10-25 and authorized Phase 2 Navigation and Core UI only. This execution must stop for review after Phase 2; it does not authorize Phase 3 or Phase 4. There is no visual approval inferred from passing tests or existing publication flags.

Goals:

- A useful course landing page, clear objective grouping, and direct learning actions.
- A large presentation surface, compact English controls, and optional secondary information.
- Readable EN, TH, and EN+TH educational content with deliberate mobile compositions.
- Preservation of academic text, references, identities, progress, and protected application features.
- A maintainable native HTML/CSS/JS design with meaningful visual variety.

Out of scope: question or vocabulary changes, quiz/scoring changes, application-wide routing or theme rewrites, dependencies without a demonstrated need, full curriculum migration, and Domain 2–5 lesson production.

Evidence:

- [Task tracker](../task.md)
- [Task 56 implementation report](../../learning-slides.md)
- [Original audit](learning-slides-plan.md), [architecture](learning-slides-architecture.md), and [content guidelines](learning-slides-content-guidelines.md)
- [Domain 1 curriculum](domain-1-learning-slides-curriculum-plan.md) and [academic QA review](../../reviews/domain-1-curriculum-academic-qa-review.md)
- [Task 59R visual audit](learning-slides-visual-audit.md)
- [Current schema notes](../../../content/isc2-cc-2026/learning/schema.md)

## 2. Phase 0 repository audit

### 2.1 Observed current state

The application uses static HTTP delivery, native ES modules, linked CSS, and shared in-memory screen state. There is no package manifest, required bundler, backend, browser History router, or account-based learning storage.

The public catalog is schema 1, revision 1, outline `isc2-cc-2026-09-01`. It contains five domains and 19 objective records (5/4/2/3/5). There is one published lesson, `lesson-d1-01-cia-triad`, revision 1, under Objective 1.1. Its eight slides retain stable IDs. Slides 2/6/7 use `pillars`, `incident-flow`, and `scenario-decision`; the other five use semantic text/list/table content. No other learning lessons are published.

The source of domain names and objectives is the validated catalog. It has no official weight or domain-introduction fields. The dated scope reference remains the [ISC2 September 2026 English outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), already linked in the project plans.

| Domain | Official English title | Exam weight | Current published lessons |
| --- | --- | ---: | ---: |
| 1 | Security Principles | 24% | 1 |
| 2 | Security Governance | 17.3% | 0 |
| 3 | Identity and Access Management (IAM) Concepts | 20% | 0 |
| 4 | Networking and Cloud Security Concepts | 21.3% | 0 |
| 5 | Security Operations and Incident Response | 17.3% | 0 |

Published weights add to 99.9% due to rounding. Preserve them; do not invent objective weights or normalize the values to manufacture a 100% UI total.

The existing selector now has English-only card chrome and exact enabled action labels `Select →` for Exams/Vocabulary and `Learning →` for Learning Slides. Those files are not redesign targets. A Learning Slides action still requires a successfully validated published lesson.

### 2.2 Actual navigation and language defects

| Evidence in current code | Effect | Required change |
| --- | --- | --- |
| `screen-learning-center.js` nests objectives and lessons inside five `details` accordions. | Discovery requires expansion; course status and resume are absent. | Replace with useful domain cards and a Continue Learning region. |
| `routes.js` sends Center `onLesson` to `learning-lesson`. | A Start/Resume-labeled action opens another launch page. | Route the action directly to `learning-viewer`. |
| Viewer `onBack` returns to `learning-lesson`. | The intermediate document is mandatory in both directions. | Return to the selected Domain and restore the lesson action's focus. |
| `state.js` permits only center/lesson/viewer learning screens. | There is no Domain Overview route. | Add `learning-domain`; normalize old `learning-lesson` requests to direct resume. |
| Learning labels and buttons use `localize()` with active language. | Center, lesson, viewer, errors, help, and accessible control labels become bilingual. | Dedicated English UI constants; localize educational surfaces only. |
| Viewer always shows a filmstrip and a slide-select dropdown. | Duplicate navigation and reduced stage space. | One collapsible Slides surface; remove the dropdown. |
| Two wrapping toolbar rows plus nested `.app` and `.learning-screen` gutters. | Presentation has less useful viewport area. | Learning-scoped shell sizing and one desktop toolbar. |
| Generic stage uses `overflow-y: auto`; structured stages hide overflow. | Article scrolling or potential clipping rather than verified composition fit. | Fit/restructure adapted slides; honest text-view compatibility for unadapted content. |
| Generic diagrams use fixed SVG text coordinates; bilingual formatter stacks full pairs everywhere. | Translation expansion has no layout-aware handling. | HTML text, SVG geometry, language-specific composition profiles. |

Current tests use DOM doubles and static checks. They cover valuable contracts but do not calculate actual layout, Thai line breaking, real browser focus, or Fullscreen API support.

### 2.3 Contracts to preserve

- Typed selector identity `isc2-cc-learning-slides`, independent of exam config loading.
- `state.learning = {domainId, objectiveId, lessonId, slideId}`; learning actions never reset Quiz.
- Catalog ownership by `primaryObjectiveId`, secondary `relatedLessonIds`, globally unique lesson IDs.
- Loader validation of publication, identity, objectives, revision, review fields, and allowed paths.
- Safe DOM construction, HTTPS source links, no executable lesson JSON or user-defined import URLs.
- Abort/dispose ownership on routes, renderer changes, media, listeners, timers, and animations.
- `sec_cert_learning_progress_v1` with stable slide IDs, visits, timestamps, language, and explicit reading completion.
- Native fullscreen events and exclusion of interactive targets from slide navigation.
- Existing theme and language state contracts, original bank counts and Vocabulary behavior.

The working tree already contains extensive uncommitted code/data/document changes and two deleted original HTML files. These belong to earlier work. This session neither restores those files nor changes unrelated work.

### 2.4 Academic and historical-document limits

Task 56 documents describe a historically empty catalog; today's catalog publishes the CIA pilot. Task 57 records pending human-review items, while Task 58 and runtime metadata contain stronger approval wording. This design revision preserves those records and flags; it does not establish new academic approval or reopen every claim.

Preserve all eight slides, outcomes, prerequisites, references, review metadata, EN/TH pairs, and source-quality flags. Any later technical correction or wording change needs a separate reviewed content diff. Visual adapters cannot silently turn qualified content into absolute claims, drop Thai qualifiers, or add ISC2 exam claims. Source-backed examples remain educational scenarios, not official exam questions.

## 3. Proposed architecture and alternatives

Recommended: rebuild Learning Slides screens and viewer while retaining the catalog, loader, content, and progress contracts.

A CSS-only restyle leaves the duplicated navigation and accordion structure intact. A new application/schema/storage stack adds migration work without helping this brief. The proposed rebuild changes the product journey and presentation architecture at their existing subsystem boundaries.

```text
Version Selection: Learning →
  └─ Learning Center
       ├─ Continue Learning ───────────────────────┐
       └─ Domain Overview                         │
            └─ Objective sections                 │
                 └─ Start / Resume Lesson ────────┤
                                                  ▼
                                      Interactive Presentation
                                        ├─ Lesson Info (optional)
                                        ├─ Slides (optional)
                                        └─ Fullscreen
                                              │
                                  Back to Domain, same context
```

Screens: `learning-center`, `learning-domain`, `learning-viewer`. Lesson Info is viewer UI state, not a screen or an extra history entry. A legacy `learning-lesson` request resolves the lesson and immediately resumes it; invalid selections return to the appropriate Domain or Center with an English message.

## 4. Detailed UX specification

### 4.1 Shared shell and language policy

All application UI is English in every language mode: headings, domain/objective listings, lesson-card titles/descriptions, compact viewer context, breadcrumbs, buttons, status, notices, dialog labels, accessible control names, and filmstrip navigation labels. Use catalog/lesson `.en` for navigation metadata; preserve `.th` in data.

Educational content supports EN/TH/EN+TH: the slide title/body, diagram labels, scenario choices/reasoning, explanatory feedback, and outcome/prerequisite text inside Lesson Info. These are marked content regions. Lesson Info section headings and controls remain English. Source publication titles keep their original bibliographic form; no fabricated translations.

UI examples: `Back to Versions`, `Back to Domain`, `Start Lesson`, `Resume Lesson`, `Review Lesson`, `Lesson Info`, `Slides`, `Fullscreen`, `Close`, `Finish Lesson`, `Coming Soon`. Reuse existing EN/TH/EN+TH buttons; switching changes educational content and selection state, not UI wording.

Preserve saved theme. Dark chrome uses existing `--bg`, `--panel`, `--line`, `--text`, `--text-dim`, and `--blue`; existing light theme remains supported. No global font/theme rewrite.

### 4.2 Learning Center

Purpose: orient learners and surface their next real action.

Desktop layout: a broad content shell up to 1440px, 24–32px outer gutters, with no second nested page gutter. At approximately 1100px+, use three domain-card columns; 720–1099px uses two; narrower screens use one. Cards align within a row while long titles wrap naturally. The five cards leave an honest incomplete final row.

Header: Back to Versions, Learning Center, a short English description naming ISC2 CC 2026, and the existing content-language control. A prominent Continue Learning region spans the grid above domain exploration when a valid resume candidate exists.

Each domain card has its number, full English title, weight, actual published availability, and `Explore Domain`. Include progress only where validated lesson records support it. Empty domains show Coming Soon and still open a useful Domain Overview with official objectives. They do not imply a lesson is available.

```text
← Back to Versions                                EN  TH  EN+TH
Learning Center
ISC2 CC 2026 · Learn through visual explanations and scenarios

┌ CONTINUE LEARNING ────────────────────────────────────────────┐
│ The CIA Triad: Core Information Security Goals                │
│ Domain 1 · Objective 1.1 · Last viewed: Slide 4 of 8            │
│ 3 of 8 slides viewed                          [Resume Lesson] │
└───────────────────────────────────────────────────────────────┘

Explore Domains
┌ 01 · 24% ──────────┐ ┌ 02 · 17.3% ────────┐ ┌ 03 · 20% ─────────┐
│ Security Principles│ │ Security Governance │ │ Identity and ...   │
│ 1 lesson available │ │ Coming Soon         │ │ Coming Soon        │
│ [Explore Domain]   │ │ [Explore Domain]    │ │ [Explore Domain]   │
└────────────────────┘ └─────────────────────┘ └────────────────────┘
┌ 04 · 21.3% ────────┐ ┌ 05 · 17.3% ────────┐
│ Networking and ... │ │ Security Operations │
│ Coming Soon        │ │ Coming Soon         │
│ [Explore Domain]   │ │ [Explore Domain]    │
└────────────────────┘ └─────────────────────┘
```

Wireframe progress numbers illustrate a possible saved state, not repository/user statistics. Actual saved data is read at runtime. “Last viewed: 4 of 8” is position; “3 of 8 slides viewed” is unique visits. Never conflate them.

With no valid in-progress lesson, replace Continue Learning with a short “Choose a domain to get started” introduction. If all available lessons are complete, show that factual status and a review link rather than a false Resume. Optional aggregate text says `x of y available lessons completed`; unavailable objectives are not in the denominator.

### 4.3 Domain Overview (Objective Selection Redesign)

Header: Back to Learning Center, domain number/eyebrow, title, weight, short English introduction, theme toggle, and language selection. Unnecessary clutter (redundant per-domain progress counters, repeated lesson metadata blocks) is removed.

Objectives are presented as a clean, selectable radio list (`.learning-objective-list` with `role="radiogroup"` and `.learning-objective-item` with `role="radio"`):
- All official ISC2 2026 Objectives appear in catalog order (e.g., 1.1 through 1.5).
- Entire Objective row is clickable and keyboard-focusable (`tabindex`, `ArrowDown`, `ArrowUp`, `Space`, `Enter`).
- Selecting an Objective highlights the row with a subtle blue border/background and soft blue glow, and updates the selection indicator without immediate navigation.
- If an available Objective exists, the first available Objective is preselected by default; returning from viewer restores the previously selected Objective.
- Unavailable Objectives display an understated `Coming Soon` badge, have `aria-disabled="true"`, and are not selectable.
- A single primary learning action is situated below the Objective list:
  - Always displays `Start Learning →` regardless of whether the selected lesson is not started, in progress, or completed.
  - No available Objective selected: Disabled `Start Learning →`.
  - Progress handling remains active internally: not started launches Slide 1, in progress resumes the saved slide, and completed reopens without resetting completed status.
- An optional, lightweight `Lesson Info` link is provided alongside the bottom action button for the selected available lesson without mandatory navigation.

```text
← Learning Center                                  EN  TH  EN+TH  [Theme]
DOMAIN 01 · 24% EXAM WEIGHT
Security Principles
Build a foundation in security goals, risk, governance, controls, and professional conduct.

┌ (•) 1.1 — Understand cybersecurity concepts ────────────────────────┐
│     [Selected: subtle blue border, light glow]                       │
└──────────────────────────────────────────────────────────────────────┘
┌ ( ) 1.2 — Understand risk management concepts           [Coming Soon]│
└──────────────────────────────────────────────────────────────────────┘
┌ ( ) 1.3 — Understand governance concepts                [Coming Soon]│
└──────────────────────────────────────────────────────────────────────┘
┌ ( ) 1.4 — Understand cybersecurity controls             [Coming Soon]│
└──────────────────────────────────────────────────────────────────────┘
┌ ( ) 1.5 — Maintain professional and ethical conduct     [Coming Soon]│
└──────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────
[Start Learning →]   Lesson Info
```

#### Objective → Lessons → Slides Architecture
The hierarchy remains Domain → Objective → Lesson(s) → Slides:
- Objectives serve as the primary selection and authoring boundaries.
- When an Objective contains multiple lessons:
  - Resumes the appropriate unfinished lesson when valid in-progress progress exists (prioritizing the most recently updated).
  - Otherwise begins the first appropriate published lesson in catalog order.
  - If all lessons are completed, allows review without resetting completed progress.
  - Slide progress remains strictly independent per lesson.
- Reusable helper: `resolveObjectiveLearningState(objective)` in `js/core/learning-course.js`.

### 4.4 Presentation and optional Lesson Info

One compact desktop toolbar:

```text
← Back to Domain  | CIA Triad | ‹ Previous  4 / 8  Next › | EN TH EN+TH | Info  Slides  ⛶
─────────────────────────────────────────────────────────────────────────────────────
                         LARGE PRESENTATION SURFACE
                           fitted desktop 16:9
─────────────────────────────────────────────────────────────────────────────────────
[filmstrip only when Slides is open; otherwise stage uses this space]
```

Use one navigation pair and one Slides control. Remove the slide-select dropdown. Icons need English accessible names/tooltips; Previous/Next may become icons when width requires. Long lesson context may truncate visually with full accessible text; educational text is never clipped to make the toolbar fit.

The toolbar is approximately 56px high at desktop widths; narrow layouts use intentional group placement rather than uncontrolled wrapping. Initial filmstrip state is collapsed on every viewer entry. Remember its setting only within the live viewer, not in learning progress.

Stage sizing uses available width and viewport height together: fit a 16:9 canvas inside the space remaining after toolbar, gutters, and an open rail. Use learning-scoped container rules, removing the existing double gutters; do not modify `.app` for Quiz/Vocabulary. At short laptop heights, collapse rail by default and prioritize legibility. No arbitrary 75%-height rule or global viewport-only font scaling.

Lesson Info opens as a centered, responsive modal dialog:
- **Desktop (≥1100px):** `width: min(940px, calc(100vw - 64px))`, `max-height: min(88vh, 880px)`, generous internal padding (`38px 44px`), readable typography, subtle border, shadow (`0 28px 65px -15px rgba(0,0,0,0.6)`), dark/light theme compatibility, custom themed scrollbars, and a dimmed backdrop.
- **Tablet (720px–1099px):** `width: min(820px, calc(100vw - 48px))`, `padding: 32px 34px`.
- **Mobile (≤719px):** `width: 100%`, `max-height: 92vh`, `padding: 24px 20px`, `border-radius: 14px`, 0 horizontal overflow, internal scrolling only when content genuinely exceeds available height.

It contains:
- Header with 'Lesson Info' (18–20px / `1.25rem`) and single '✕' close button.
- Objective identifier (13–14px / `0.86rem`) and actual published lesson title (22–25px / `clamp(1.4rem, 2vw, 1.55rem)`).
- Main section: Heading `What you'll learn` (16–18px / `1.1rem`) displaying original learning outcomes as a spacious bullet list (16–17px / `1.05rem`, line-height 1.65, 12px item gap), preserving all approved EN/TH educational content without rewriting.
- Collapsible disclosure section: `References & lesson details` (collapsed by default, summary 15–16px / `0.98rem` with `14px 20px` padding):
  - When expanded, reveals:
    1. `Before you begin` (prerequisites when provided; omitted without filler if absent).
    2. `Sources` (all existing citations preserved, formatted with authority badges such as Technical Standard, Official Outline, Project Reference, font 14–15px / `0.94rem`, and accessible external links with `target="_blank" rel="noopener noreferrer"`).
    3. Review metadata and content version note (13–14px / `0.88rem`).
  - When collapsed on desktop, the modal content fits comfortably within the viewport without triggering scrollbars.

Redundant information removed:
- The full Slide Outline list has been removed from Lesson Info to keep the dialog compact and readable without duplicating the Presentation Viewer navigator (catalog outline data remains preserved).
- No completion percentages, fake progress indicators, decorative statistics, or redundant footer action buttons.

Custom scrollbar & overflow handling:
- Internal scrolling occurs only when content exceeds available viewport height.
- Styled with a thin, theme-consistent scrollbar (`scrollbar-width: thin; scrollbar-color: var(--line) transparent;` in Firefox and `::-webkit-scrollbar` in Chromium) preventing white native scrollbars in Dark Mode.

Modal interaction & accessibility:
- Header features title `Lesson Info` and a single upper-right `✕` close button (`[data-action="close-info"]`).
- Opening Info does not change selected objective, launch lessons, or write progress.
- Focus moves into the dialog upon opening; focus is trapped inside with Tab and Shift+Tab (respecting collapsed/expanded disclosure states).
- Closing via `✕` button, backdrop click, or Escape key restores focus to the opener trigger.
- Siblings are marked `inert` and body scrolling is locked while the modal is open.
- Opening Info pauses active explanatory animation/media and keeps slide, language, visits, and scenario selection. After closing, media resumes only on user action. If fullscreen is active, exit fullscreen first, retain the slide, and open Info in normal mode.

### 4.5 Slides / filmstrip

Slides toggles exactly one navigation surface: a bottom horizontal poster rail on desktop (roughly 88–112px tall), an overlay sheet/grid on narrow screens. It is collapsed by default; `aria-expanded` describes it. No separate select dropdown or additional slide-picker popup.

Use 16:9 visual landmarks and an English title/number accessible to keyboard and screen-reader users. Thumbnails are not miniature paragraphs. Active border and `aria-current` supplement color. Use a bounded visible window (retain the existing maximum of 25 mounted posters) for long lessons; Home/End and arrow navigation bring offscreen items into view. Active keyboard focus must remain mounted. Close/selection restores focus predictably; opening the rail does not move the current slide.

Normal navigation buttons keep focus while the title/position is announced politely. Only the active slide subtree is exposed as current content. A filmstrip poster has no live scenario controls, media, animation, or duplicated interactive state.

### 4.6 Fullscreen and input

Fullscreen shows only presentation content. Toolbar, Info, Slides, website chrome, and persistent navigation disappear. Enter/exit retains slide ID, language, and live interaction selection. Browser events, not a CSS flag alone, determine fullscreen state.

- Short primary click/tap on the slide's left half goes previous; right half goes next.
- Arrow Left/Right and literal `<`/`>` work when the stage owns navigation.
- Escape exits through the native Fullscreen API. No keyboard lock.
- No wheel event changes slides.
- Ignore input shortcuts with Ctrl/Alt/Meta, composing input, controls, contenteditable, links, media, selected text, pointer drags/cancels, and interactive regions.
- Calculate halves from the fitted slide rectangle, excluding letterbox space.
- Do not install invisible overlays over scenario options or diagram controls.
- Unsupported/rejected fullscreen keeps the normal viewer usable with an English notice.
- Restore focus to the invoker after exit; remove listeners and exit owned fullscreen when leaving the viewer.

Expose brief English keyboard/touch help before entry. A deliberate long-press or `?` may show transient Exit/help controls in fullscreen; they own their events and never navigate. Native browser exit remains available. Reference implementation retains the current Fullscreen API adapter unless focused checks justify a change.

### 4.7 Mobile, tablet, zoom, and text view

Below approximately 720px, or when stage fitting cannot maintain readable type, use a dedicated vertical learning composition. Title, visual anchor, explanation, and interaction follow semantic order. Text stays readable and the page scrolls naturally; no competing inner scroll containers. Mobile uses a compact context/language row and a reachable Previous/position/Next row. Info and Slides remain optional sheets.

Desktop adapted slides have no internal scrollbars or concealed overflow. The three Phase 4 compositions must be reviewed in EN/TH/EN+TH at actual reading size. The remaining five legacy slides retain complete semantic content through an explicitly labeled Text View compatibility mode when they cannot fit honestly. Text View is a readable page outside the fixed-ratio presentation surface, not an article forced into 16:9. It is also available from Lesson Info. The subsystem must not claim all eight slides are visually rebuilt at the three-slide checkpoint.

At 200% zoom or enlarged text, prefer reflow/text view over shrinking text. Respect safe areas, normal browser zoom, reduced motion, and visible focus. Touch targets aim for at least 44px. Existing light/dark chrome support remains; slide artwork uses its authored palette rather than globally inverting diagrams.

## 5. Visual composition and bilingual content architecture

### 5.1 Visual system

Dark course chrome follows the existing visual identity with stronger hierarchy: 28–36px page heading, 20–24px section heading, 16px body, restrained blue action accent, clear whitespace, subtle borders. Domain cards are navigation surfaces; they do not dictate slide composition.

Presentation palette starts with a light canvas, dark ink `#0F172A`, muted `#475569`, blue `#2563EB`, and limited concept accents. Green/amber may encode meaningful differences, always with text/shape labels. No decorative gradient quota, excessive card nesting, or repeated colored boxes.

At a roughly 1280×720 stage, initial title targets are 30–40px and teaching text 18–24px. Thai uses the existing Noto Sans Thai with approximately 1.55–1.75 line height. These are review targets, not a guarantee from CSS alone. Use measured stage/container dimensions; preserve meaningful whitespace without wasting the viewport.

Choose composition by teaching purpose: concept relationships, security architecture, comparison, incident flow, process, before/after, decision scenario, knowledge check, and visual summary. Only three compositions are built first. Avoid a general slide editor or arbitrary nested UI description language.

### 5.2 Preserve source data through adapters

Keep catalog schema 1, published lesson JSON, revision 1, and all eight source slide IDs unchanged for Phases 2–4. Retain the existing loader and validator/publication gate. No scene-array migration is needed to rebuild UI.

A pure adapter reads validated `blocks` or `visual` fields and creates a presentation model referencing the original slide and text paths. It does not rewrite content, generate academic claims, or introduce arbitrary executable fields. Keep `semanticBlocks()` available for full text equivalents while compositions migrate.

Proposed trusted interface:

```text
adaptSlide(slide, lesson) -> PresentationModel
PresentationModel = {
  slideId, sourceRendererId, title, semanticBlocks,
  compositionId, bindings, referenceIds
}

registry[compositionId] = {
  validate(model) -> { errors, warnings },
  render(host, { model, language, viewport, interactionState, signal }) -> { destroy? },
  poster(host, { model }) -> { destroy? }
}
```

Bindings point to semantic content; JS contains rendering logic, not copied lesson copy. Register lightweight validators before availability checks. Unknown/failed optional composition code falls back to full semantic Text View, with an English notice when appropriate. Unsafe source content still fails loader validation. No JSON imports, raw HTML/CSS strings, eval, external SVG injection, or remote scripts.

Hard character budgets remain a legacy source-validator constraint until a separately approved contract change. New composition capacity checks are warnings and require real layout review; they cannot guarantee fit. Do not weaken current publication checks just to accommodate a prototype.

### 5.3 Three representative prototypes — Phase 4 only

| Existing slide / source renderer | Proposed composition | Behavior and bilingual/mobile strategy |
| --- | --- | --- |
| `slide-02-cia-overview` / `pillars` | `concept-triad` | Three equal goals around a shared information asset, with HTML labels and concise existing questions. No directional arrows implying a sequence. EN+TH pairs are arranged deliberately; supporting existing summaries appear through clear progressive disclosure. Mobile uses a vertical relationship layout. |
| `slide-06-compound-impact` / `incident-flow` | `incident-timeline` | A visual hospital-system timeline and one focused event/impact at a time; steps reveal the existing C/A/I evidence. Keep the illustrative-sequence disclaimer and all source text accessible. Mobile stacks ordered events; reduced motion shows static steps. |
| `slide-07-scenario-reflection` / `scenario-decision` | `scenario-investigation` | Scenario evidence and a native single-choice group, followed by focused chosen-answer feedback and optional comparison of alternatives. Preserve every option/verdict/reason. English Submit/Reset/Show Analysis controls; educational choices and reasoning follow language mode. No quiz-engine or scoring integration. |

Progressive disclosure has discoverable controls and an accessible full-text alternative. It must not hide an essential qualifier or require animation to understand the answer. Scenario interaction stays inside viewer memory and never marks a lesson complete.

Recomposition retains all EN/TH meaning, exact sources, and stable IDs. Do not silently shorten source text. If meaningful editorial changes are needed, record the proposed diff for academic review and user authorization before applying it. Original/licensed art must have provenance; course screenshots remain reference material.

### 5.4 Language stability

One semantic slide is one numbered progress item in every language. A language profile can change columns, wrapping, sequence of bilingual pairs, or internal disclosure but cannot change slide count, create new progress IDs, drop content, or translate application controls.

Keep scenario selection and timeline step by semantic keys during language/fullscreen/Info changes. Resize and language changes rerender the active composition only; they do not recreate routes, duplicate listeners, alter completion, or reset focus to the page top. Reading content uses appropriate `lang` attributes and a logical reading order.

## 6. Data, progress, and navigation preservation

### 6.1 Progress: retain V1

Use `sec_cert_learning_progress_v1` and existing per-lesson shape unchanged:

```text
{ schemaVersion: 1, lessons: {
  [lessonId]: {
    lessonId, contentRevision, lastSlideId, visitedSlideIds,
    status, completedAt, updatedAt, language
  }
}}
```

No new storage version is required for this work. Existing corrupt/unsupported payload preservation and quota/access fallback remain intact. Never reset localStorage, delete records for unavailable lessons, or write quiz/vocabulary/theme keys from learning progress code.

A lesson's visits are reconciled against valid current IDs. Slide position is not percentage completed. Completion remains all current slides visited plus explicit acknowledgement. A presentation-only rebuild does not change academic revision or clear completion. Explicit future academic revisions keep existing reconciliation behavior and require a documented migration if IDs change.

### 6.2 Course resume and counts

A new pure course-model helper will derive the UI from the catalog, loaded lessons, and store summaries:

1. Enumerate unique published summaries by lesson ID.
2. Consider saved in-progress records; rank valid ISO `updatedAt` values newest first, with lesson ID as a deterministic tie-break.
3. Validate candidate lesson bodies with the current loader and reconcile progress before offering Resume.
4. Exclude failed/unpublished IDs from actions. Keep their stored records recoverable.
5. Legacy in-progress records with missing/invalid timestamps may resume after dated candidates, using catalog order; do not invent a last-access time.
6. Opening Resume uses reconciled `lastSlideId`, or the first authored slide if the saved ID was removed. It never trusts a path in storage.
7. Completed records produce Review actions and are not misrepresented as in progress.

Validate all available lesson bodies needed for completion denominators; use bounded loading and cache within the active learning route session. While validation is pending show “Checking availability” and no percentage. Network failure yields “Availability could not be checked,” not Coming Soon. Unique published and successfully validated lessons form the available-content denominator; show failed availability separately rather than implying full curriculum coverage.

With only today's valid pilot, aggregate completion is `0 of 1` or `1 of 1 available lessons completed`. That is not 100% of Domain 1 or of the certification syllabus. Empty domains have no progress percentage.

### 6.3 Navigation contracts

Proposed route context retains `state.learning` fields and adds transient `returnFocusId` and `launchOrigin` only if needed. These are not persisted academic/progress data.

| Action | Target and rule |
| --- | --- |
| Center → Explore Domain | `learning-domain` with that Domain ID. |
| Domain → Start Lesson | `learning-viewer` with first authored slide and owning objective; do not erase an existing progress record. |
| Domain → Resume Lesson | `learning-viewer` with reconciled saved ID. |
| Center → Continue Learning | `learning-viewer` directly; derive Domain/objective from validated lesson, not stale selection. |
| Viewer → Back to Domain | Owning/launch Domain, previous objective position, focus on original lesson action. This applies to Center resume too; Domain back then opens Center. |
| Domain → Back | Center; restore selected Domain card focus and scroll position. |
| Center → Back | Existing Version Selection with labels and selected certification unchanged. |
| Info/Slides → Close | Same viewer slide/language; restore invoking-control focus. |
| Legacy `learning-lesson` | Normalize to direct Resume; no intermediate launch page. |
| Invalid Domain/lesson | English error plus valid Domain/Center return; no quiz fallback and no progress write. |

Slide changes and Info/Slides toggles update locally, without calling full `renderApp()`. Save progress after successful display and on pagehide/leave. Abort superseded loads; a late response cannot replace a newer screen.

No browser History router currently exists. Phase 2 keeps the existing in-app model, adds no hash/URL contract, and does not intercept browser Back across unrelated screens. Refresh continues to start through the existing app entry; the Center then offers resume. Browser Back may leave the site as it does today. Any later History API support requires a separate application-level decision.

### 6.4 Completion action

At the end, once every current slide has been visited, expose English `Finish Lesson` in the normal viewer's completion area. If the learner reaches the last slide early, show an English incomplete-visit message and keep the action disabled. Never mark skipped slides visited.

Activating Finish Lesson saves existing reading completion and returns to Domain Overview with that lesson marked Completed and Review Lesson available. In fullscreen, the final slide may show a transient “Exit Fullscreen to finish” action; completion chrome stays outside the presentation content. A completed lesson remains completed on review.

## 7. File disposition and proposed change inventory

These are proposed implementation edits after approval. No runtime file in this table changes during Phase 1.

| File / group | Disposition / phase | Responsibilities and constraints |
| --- | --- | --- |
| `js/ui/screen-learning-center.js` | Replace · P2 | Course heading, Continue Learning, useful five-card grid; English chrome. |
| `js/ui/screen-learning-domain.js` | Create · P2 | Dedicated Domain, static objective sections, lesson cards, direct actions and empty states. |
| `js/ui/screen-learning-lesson.js` | Retire after migration · P2–3 | Remove from required routing/imports once Info preserves its metadata; keep file until replacement verified, no blind deletion. |
| `js/ui/learning/lesson-info.js` | Create · P2 | Optional shared Info dialog/drawer; outcomes/prerequisites/outline/sources/review details, focus lifecycle. |
| `js/ui/learning/routes.js` | Refactor · P2 | Center/Domain/Viewer dispatch, launch intent, legacy-route normalization, back/focus context, abort/cache ownership. |
| `js/core/state.js` | Narrow refactor · P2 | Add allowed Domain screen, retain existing learning selection; no quiz-state changes. |
| `js/ui/renderer.js` | Narrow refactor · P2 | Add lazy Domain dispatch, preserve disposal and independent selector availability. |
| `js/core/learning-course.js` | Create · P2 | Outline-keyed weights/English domain intros, deduplicated validated course model, counts and resume selection. No invented lesson records. |
| `js/core/learning-progress.js` | Reuse; helper extension only if justified · P2–3 | Keep V1 shape/key/reconciliation. Course model can use existing read/summary/save APIs. |
| `js/core/learning-loader.js` | Reuse unchanged | Current public allowlist and revision checks. Cache in learning route session, not a broad loader rewrite. |
| `js/core/learning-schema.js` | Reuse unchanged | Preserve schema 1/publication validation for this implementation sequence. |
| `js/ui/learning/dom.js` | Refactor · P2–3 | English UI-label/button helper, safe elements; localized educational content helper only. |
| `js/ui/learning/viewer.js` | Replace shell · P3 | Stage sizing, minimal toolbar, completion, Info/Slides, local language/navigation, resume and lifecycle. |
| `js/ui/learning/filmstrip.js` | Create · P3 | One collapsible Slides surface, bounded posters, keyboard/active focus, no dropdown. |
| `js/ui/learning/fullscreen.js` | Reuse; focused fixes if tests require · P3 | Native browser events, denial/external exit/focus return; preserve required keys/input exclusion. |
| `js/ui/learning/renderers.js` | Refactor · P3–4 | Semantic compatibility plus trusted composition dispatch; remove fixed-coordinate text as a presentation fallback. |
| `js/ui/learning/presentation-model.js` | Create · P4 | Pure source adapter; canonical text bindings and complete semantic equivalent. |
| `js/ui/learning/compositions.js` | Create · P4 | Small allowlisted registry, composition validation, fallbacks, cleanup and poster interface. |
| `js/ui/learning/compositions/concept-triad.js` | Create · P4 | Relationship composition for existing slide 2. |
| `js/ui/learning/compositions/incident-timeline.js` | Create · P4 | Timeline composition for existing slide 6. |
| `js/ui/learning/compositions/scenario-investigation.js` | Create · P4 | Accessible investigation composition for existing slide 7. |
| `js/ui/learning/visual-components.js` | Retire only after P4 review | Keep current components until the three replacements are accepted and no runtime references remain. |
| `js/core/learning-visuals.js` | Reuse compatibility · P2–4 | Retain semantic derivation and current validation; no premature schema/budget deletion. |
| `css/learning.css` | Rebuild scoped sections · P2–4 | Center/Domain/Info, then viewer/filmstrip, then three compositions. No global unscoped `[data-layout]` or `.tone-*` rules. |
| `tools/verify-learning-integration.mjs` | Update · P2 | Direct start/resume/back, legacy route, English chrome, protected selector behavior. |
| `tools/verify-learning-course.mjs` | Create · P2 | Course-model resume, validation failures, empty/partial availability, deduplication. |
| `tools/verify-learning-progress.mjs` | Extend only necessary cases · P2–3 | Existing V1 round-trip and no-reset evidence. |
| `tools/verify-learning-viewer.mjs` | Update · P3 | Info focus, rail toggle, navigation, interaction state, fullscreen, completion and cleanup. |
| `tools/verify-learning-visuals.mjs` | Extend/replace obsolete DOM expectations · P4 | Three distinct compositions and complete semantic EN/TH bindings, no copied copy. |
| `tools/verify-learning-catalog.mjs` | Reuse | Current publication/content compatibility. |
| `tools/verify-ui-language-boundary.mjs` | Extend · P2–3 | English Learning Center/Domain/Info/Viewer across all modes; educational Thai remains. |
| `tools/preview-learning.mjs`, `tools/fixtures/learning/` | Reuse/extend only if needed | Local static preview, memory-only fixture progress, no public fixture bypass. |
| `index.html`, `css/base.css`, `css/components.css` | Reuse unchanged | Scope sizing/theme changes within Learning Slides. |
| `data/exam-versions.js`, `js/ui/screen-versions.js`, `css/versions.css` | Reuse unchanged | Keep current English selector copy and Select → / Learning → actions. |
| Published learning catalog/lesson JSON and `learning/schema.md` | Preserve | No source-data/schema migration needed for Phases 2–4. |
| Question banks, quiz engine/storage, vocabulary data/UI, other certifications, academic sources/reviews | Protected / unchanged | Outside implementation scope. |

## 8. Phase-by-phase implementation checklist

This is the proposed sequence for approval, not permission to execute all phases. Each phase delivers a working checkpoint. Follow the project's existing static Node workflow; no browser automation is authorized.

### Phase 0 — audit (complete for this session)

- [x] Inspect current Git status/diff, V2 spec and recent Task 63–64 decisions.
- [x] Inspect actual routes/screens, UI labels, viewer/fullscreen, rendering/validation, CSS, content IDs, progress, and tests.
- [x] Record reusable contracts, obsolete UI, file responsibilities, and migration risks.
- [x] Capture a fresh whole-workspace SHA-256 baseline before documentation edits.

### Phase 1 — revise specification and tracker (this deliverable)

- [x] Replace the mandatory lesson-launch screen with direct Viewer actions and optional Info.
- [x] Specify cards, visible objective sections, dark chrome, English UI, collapsible Slides, and readable mobile behavior.
- [x] Define data/progress preservation, failure states, back/focus behavior, composition boundaries, and file plan.
- [x] Produce the implementation checklist and explicit review checkpoints.
- [x] **Gate A: user explicitly approved the revised specification for Phase 2 on 2026-10-25.**

### Phase 2 — navigation and core UI (Complete)

- [x] Add `learning-domain` to the state/renderer route allowlists; retain legacy `learning-lesson` as a compatibility redirect to Viewer.
- [x] Implement `buildLearningCourseModel({catalog, lessonsById, progressStore, availabilityById})` in `learning-course.js`: returns domains, unique available lessons, progress counts, resume candidate, and unresolved availability.
- [x] Populate weights/intros keyed by existing outline ID and domain ID; use validated catalog English titles/objectives.
- [x] Implement Center cards and direct Continue Learning; implement Domain objective sections and direct Start/Resume/Review actions.
- [x] Implement `renderLessonInfo(host, {lesson, language, onClose, onNavigateTextView})` with safe source links and accessible focus behavior.
- [x] Add minimal Info invocation and Back to Domain to the existing viewer so Phase 2 works end to end before the full shell replacement.
- [x] Keep V1 progress writes identical; preserve all source content and existing selector labels.
- [x] Verify direct route destinations, one-click resume, invalid/stale selections, legacy redirect, back/focus restoration, loading failures, English UI, and storage preservation.
- [x] Deliver the working navigation checkpoint and report observed limits. Do not expand slides in this phase.

### Phase 3 — presentation viewer (after Phase 2 checkpoint)

- [ ] Replace the viewer shell with the single desktop toolbar, height-aware fitted stage, and dedicated narrow-screen layout.
- [ ] Implement `mountFilmstrip(host, {slides, activeSlideId, onSelect, signal})` behind the single Slides toggle; bounded posters, no dropdown.
- [ ] Integrate Info, Text View, Finish Lesson, and direct Domain return; no mandatory lesson-launch route.
- [ ] Keep local slide/language updates, preserve live interaction keys through resize/fullscreen/panel changes, and clean up on navigation.
- [ ] Retain native fullscreen, pointer exclusion, keyboard mappings, no-wheel behavior, failure notices, and focus return.
- [ ] Show complete legacy content in honest compatibility/Text View where it cannot fit; do not silently trim five unadapted slides.
- [ ] Verify shell/input/Info/Slides/progress/teardown with Node checks; hand over a working local version.
- [ ] **Gate B: manual user review of Phases 2–3 before additional slide-content/composition work.**

### Phase 4 — three representative prototypes (after Gate B)

- [ ] Build the source adapter and trusted composition registry without changing source JSON or revision.
- [ ] Rebuild only CIA overview, compound incident, and interactive scenario using Section 5.3.
- [ ] Retain all EN/TH source meaning, references, alternatives, and IDs; document any proposed editorial change separately.
- [ ] Provide static/reduced-motion and full semantic alternatives; inspect every content/feedback state during manual review.
- [ ] Verify data compatibility, bindings, interaction isolation, event ownership, and complete language pairs.
- [ ] **Gate C: user visual review of the three prototypes; no full curriculum migration.**

### Phase 5 — verification and handoff

- [ ] Run appropriate catalog, course, integration, progress, viewer, composition, and language suites.
- [ ] Run relevant existing Quiz/session regression checks and verify protected-file hashes against a fresh implementation baseline.
- [ ] Document commands, actual results, failures, manual review outcomes and untested combinations honestly.
- [ ] Record remaining blockers and stop before full pilot/curriculum migration unless separately authorized.

## 9. Verification, risks, and open decisions

### 9.1 Verification responsibilities

| Area | Required evidence in implementation |
| --- | --- |
| Routing | Start/Resume reaches Viewer directly once; Center Continue reaches saved ID; old route redirects; Back restores Domain/context. |
| Data integrity | Catalog/lesson identities/revision/text/review metadata unchanged; safe publication checks remain; questions/vocabulary hash-identical. |
| Progress | Existing V1 payload round-trips; all language/layout/route changes retain last ID/visits/completion; no fabricated resume/denominator. |
| UI language | Center/Domain/Info controls/Viewer errors and accessible names are English for en/th/both; educational surfaces actually change. |
| Navigation | One Slides surface, no select dropdown, rail closed by default, clamped previous/next, no wheel navigation. |
| Accessibility | Dialog focus/return/inert behavior, visible focus, announcements, active-only slide, keyboard scenario, reduced motion and semantics. |
| Visual acceptance | Human inspection of stage size, diagram labels, Thai/bilingual fit, all reveal states, mobile layouts, and fullscreen. Passing Node tests cannot approve these. |

For implementation, use Windows Chrome/Edge/Firefox, Android Chrome, and Safari on an available Apple mobile device where practical; record exact versions and tested combinations. Prioritize 1440×900, 1366×768, 1024×768, tablet portrait/landscape, and 320/375/390/430px phone widths; en/th/both; light/dark chrome; enlarged text; keyboard; reduced motion; fullscreen denial/exit. Record NVDA/VoiceOver results when available. Missing devices are untested coverage, not inferred passes or an invented condition preventing Phase 2 work.

### 9.2 Risks and decisions

| Concern | Decision / remaining review |
| --- | --- |
| Dense legacy slides versus desktop presentation fit | Preserve full content through Text View; rebuild only the three authorized prototypes, then ask for visual review before broader work. |
| Change from old “lesson” route | Normalize it to direct resume; preserve selection/context and avoid a navigation loop. |
| Most-recent resume without a last-lesson field | Derive from valid updatedAt and validated records; deterministic fallback for old records, no storage migration. |
| Validation/network latency | Show checking/error states, cache route-session results, never expose invalid actions or invented zero progress. |
| Cards becoming decorative or sparse | Use useful actual status, clear typography, and grid width; show full titles and all official objectives. |
| Existing global layout/tone selectors leaking | Scope rebuilt CSS under Learning Slides root, verify original screens unchanged. |
| EN+TH growth and interaction feedback | Use deliberate profiles/progressive explanation; manual check every state; no arbitrary character-limit claims or concealed overflow. |
| Academic flags and source revisions | Preserve existing evidence and unresolved holds; later copy changes require separate content review, not silent visual edits. |
| Dark chrome/light stage direction | Recommended starting point; actual color, icon and spacing comfort are user visual-review decisions. |
| Browser history behavior | Match existing in-app router; no new site-wide History API contract. |
| Fullscreen on mobile platforms | Keep normal layout usable when unavailable; document tested behavior and avoid simulated-native claims. |
| Optional libraries | No new dependency proposed; evaluate only for a concrete educational need in an authorized later phase. |

### 9.3 Approval and exact next step

Gate A concerns the revised journey, direct actions, domain cards, visible objective grouping, English UI, optional Info/Slides, V1 storage preservation, and the phased file plan. The project owner/user provides approval in this conversation. After Gate A, Phase 2 implements core navigation/UI; Phase 3 follows as its viewer checkpoint. Gate B requests working manual review before Phase 4's three prototypes. Gate C precedes any broader content migration.

No new lesson-count/slide-count target, academic release approval, dependency installation, Domain expansion, or deployment is implied by approving this design.

## 10. Session verification record

This section records checks actually run on 2026-10-25 for the documentation revision. These are existing-runtime and documentation checks, not V2 implementation or visual acceptance.

| Command / check | Actual result |
| --- | --- |
| `node --test tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs tools/verify-learning-viewer.mjs tools/verify-learning-integration.mjs tools/verify-learning-visuals.mjs tools/verify-ui-language-boundary.mjs` | Exit 0; 42 tests passed, 0 failed. Existing runtime only. |
| `git diff --check -- docs/plans/task.md docs/plans/isc2-cc-2026/learning-slides-v2-design-spec.md` | Passed after removing an extra tracker EOF blank line. No unrelated whitespace edits. |
| Local Markdown link / fence / requirement inspection | Links in both edited documents resolve; 12 code fences balanced; direct navigation, English UI, selector labels, V1 preservation, and Gate A/B/C requirements present. |
| SHA-256 comparison of 656 existing files, excluding `.git`, `.learning-preview`, and `node_modules` | Exactly two changed files: this specification and `docs/plans/task.md`; no files added or removed. All other baseline files, including runtime/content/protected data, match their starting hashes. |
| Browser and visual verification | Not performed. No browser automation; no manual visual acceptance claimed. |

No code, dependencies, source JSON, stored user progress, academic source documents, question banks, or vocabulary files were edited. Existing unrelated uncommitted work is preserved. The documented acceptance conditions remain future implementation work; the 42 current tests do not yet cover the new Domain route or redesigned UI.

**Learning Slides V2 revised Phase 1 specification is ready for user review. Phase 2 production implementation has not started.**
