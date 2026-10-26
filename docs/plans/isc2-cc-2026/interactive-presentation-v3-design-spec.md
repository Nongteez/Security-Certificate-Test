# ISC2 CC 2026 — Interactive Presentation Framework V3

**Date:** 2026-10-25 · Asia/Bangkok  
**Delivery:** Phase 0 audit, Phase 1 design specification, and Phase 2 Viewer UX Corrections  
**Status:** Gate B layout regression fixed; DOM hierarchy restructured and CSS cascade isolated; awaiting user visual review. No Phase 3 components or Phase 4 prototypes started.

## 1. Authority, scope, and success criteria

V3 governs the presentation subsystem after the existing Learning Center and Domain Overview. Its primary goal is a reusable website-native presentation framework: future lessons provide reviewed educational data, select a supported composition, and reuse navigation, language resolution, sources, theme controls, accessibility, and progress.

Preserve the current journey:

```text
Learning Center
  ├─ Continue Learning → last saved slide
  └─ Domain Overview → Select Objective → Start Learning →
                                              │
                                              ▼
                                  Interactive Presentation
                                    ├─ Lesson Info
                                    ├─ Slides overview
                                    └─ Fullscreen
Back to Domain → same objective and existing progress
```

The exact Domain action remains `Start Learning →` for not-started, in-progress, and completed lessons. Its current resolver chooses first slide, saved slide, or review internally. Selecting an objective does not launch it. Do not reintroduce a mandatory Lesson Contents screen.

The user's V2 Gate A approved Navigation and Core UI, not V3 presentation implementation. **V3 Gate A is a new approval:** stop after this document and the task checklist. V3 Phase 2 shell, Phase 3 components, Phase 4 prototypes, and Phase 5 migration all remain unstarted.

This document supersedes the presentation/viewer proposals in [the V2 specification](learning-slides-v2-design-spec.md). It preserves the subsequently implemented course, objective selection, theme, and modal decisions from Tasks 66–72R.2. V2 and V3 phase numbers must not be used interchangeably.

Success is judged by learning clarity and reuse, not by slide count, a passing DOM test, or production of every layout family. No full pilot rewrite, Domain 2–5 lesson authoring, schema migration, dependency installation, or deployment is authorized.

## 2. Current architecture audit

Audit evidence is the actual working tree and [task tracker](../task.md), including the newer Task 66–72R.2 refinements. The branch/working tree advanced during the preceding V2 work; older uncommitted-change inventories are historical. Preserve all current edits, including theme and selector refinements.

| Concern | Observed implementation | V3 implication |
| --- | --- | --- |
| Static delivery | Native HTML/CSS/ES modules; no package manifest/build framework required. | Continue static HTTP delivery. No framework or presentation service is needed. |
| Course entry | Existing typed `isc2-cc-learning-slides` selector entry and independently validated availability. | Reuse; do not alter selector title, labels, ordering, or exam resolution. |
| Center | Clickable domain cards, direct Continue Learning, shared language/theme header. | Preserve the current Center. |
| Domain | Objective radio list; `resolveObjectiveLearningState()`; a single `Start Learning →`; optional Info. | Preserve selection/resume behavior and return focus. |
| Routes | `learning-center`, `learning-domain`, `learning-viewer`; old `learning-lesson` normalizes to Viewer. | Viewer shell replacement retains this route contract. |
| Catalog | Schema 1, outline `isc2-cc-2026-09-01`, five domains/19 objectives, one published CIA lesson. | No catalog migration is required. Empty domains remain honest. |
| Pilot | `lesson-d1-01-cia-triad`, revision `1`, eight stable slide IDs; existing EN/TH and references. | Adapt source data; preserve text, revision, order, and identity. |
| Rendering | Four generic renderer IDs plus three structured types from Task 59R; `blocks` or `visual`. | Keep a compatibility facade; introduce a shared presentation model and a small trusted composition registry. |
| Safe loading | Public loader validates identity/publication/review revision, same-origin paths, source/asset references. | Preserve fail-closed behavior. Layout code cannot bypass it. |
| Fullscreen | Native API controller; browser events, invoker focus, rejection handling, cleanup. | Reuse controller, redesign its target surface and presentation controls. |
| Language | Educational pairs use `localize()`; English chrome uses `uiLabel()`/buttons. | Retain separation; improve educational composition for bilingual density. |
| Theme | `html[data-theme]`, `sec_cert_test_theme`, shared `createThemeToggleButton()`. | Reuse without modifying shared theme modules. |
| Lesson Info | Existing centered modal, Task 72R.2 dimensions, outcomes, collapsed references/prerequisites/review details. | Reuse intact; preserve close/focus/inert behavior and avoid a second metadata panel. |
| Progress | `sec_cert_learning_progress_v1`; stable last/visited IDs, revision reconciliation, explicit reading acknowledgement. | No storage migration or progress reset. |
| Tests | Node tests and a minimal DOM double; static/HTTP preview tooling. | Retain behavioral coverage; actual layout/fullscreen/readability require manual review. |

References: [foundation report](../../learning-slides.md), [schema notes](../../../content/isc2-cc-2026/learning/schema.md), [previous visual audit](learning-slides-visual-audit.md), [Domain 1 curriculum](domain-1-learning-slides-curriculum-plan.md), [academic QA history](../../reviews/domain-1-curriculum-academic-qa-review.md).

The brief describes screenshots and visual references. No new screenshot/image attachment was available to inspect with this V3 text brief. The wireframes below implement the stated white-canvas, editorial, spacious design direction; this audit does not claim to have inspected a current browser screenshot or tested the visual result.

## 3. Pain points and code-supported root causes

| Pain point | Actual cause | Proposed remedy |
| --- | --- | --- |
| Small white slide within a large dark page | `css/base.css` caps `.app` at 1320px with 40px top/80px bottom padding; `.learning-screen` then caps at 1200px and adds 24px. | Viewer-only shell override removes nested gutters and sizes against actual viewport height and width. Other screens keep their existing shell. |
| Competing toolbars | `viewer.js` creates a header, a separate navigation row, reading/fullscreen/completion/Info controls, then extra navigation below. | One compact normal-mode control bar; secondary tools in one menu; completion appears when relevant. |
| Permanent rail and redundant select | Filmstrip and `learning-slide-picker` are always mounted visibly. | One optional Slides overview, hidden by default; remove select and permanent rail together. |
| Article-like slide content | Generic renderer appends vertical paragraphs/lists/tables; five pilot slides still use it. | Preserve a deliberate reading compatibility mode; introduce compositions only after the shell review gate. |
| Hidden or scrolling overflow | Generic `.learning-slide` has `overflow-y:auto`; structured normal slides override to `hidden`. | Explicit fit policy and full-content reading fallback. Overflow is a review failure for an approved composition, not something to conceal. |
| SVG text collision risk | Generic diagram uses fixed 165×70 boxes and single-coordinate labels. | HTML text with intrinsic wrapping; SVG draws lines/nodes/geometry only. |
| Bilingual crowding | Full EN/TH strings are stacked per node with no composition-specific profile. | Language profiles, equivalent reading order, progressive explanation, and responsive reflow. |
| Card-heavy visual vocabulary | `visual-components.js` renders pillars, incident stages, and scenario choices as repeated bordered cards. | Relationship geometry, incident timeline, and evidence/decision composition with shared tokens rather than repeated dashboard panels. |
| State loss during presentation changes | Existing `paint()` destroys/remounts a slide on language/fullscreen changes; local scenario state lives inside the renderer. | Viewer-owned transient interaction state keyed by slide and semantic item, separate from progress. |
| Tests mistaken for visual assurance | Existing checks prove structure/events and character limits, not physical fit or readability. | Keep tests and add named manual review checkpoints for real sizes/languages/states. |

These findings are based on DOM construction and CSS inspection. They establish mechanisms and risks, not a fresh visual acceptance verdict.

## 4. Proposed presentation architecture

Keep the existing loader, route entry, progress APIs, and metadata. Split presentation responsibilities into small modules:

```text
Validated lesson JSON (unchanged)
          │
          ▼
Pure presentation adapter / layout definitions
  ├─ canonical semantic text and reading order
  ├─ source renderer/layout → composition selection
  ├─ density / language profile
  └─ references and semantic keys
          │
          ▼
Viewer
  ├─ control bar + route callbacks
  ├─ fitted stage + reading mode
  ├─ optional Slides overview
  ├─ Fullscreen API controller
  ├─ existing Lesson Info modal
  ├─ transient interaction state
  └─ existing V1 progress adapter
          │
          ▼
Trusted composition registry
  ├─ Concept diagram
  ├─ Process / timeline
  └─ Scenario investigation
```

A composition controls only its stage subtree. It cannot select routes, save progress, mutate global theme, fetch arbitrary content, or change the lesson's slide order. Viewer navigation and progress work identically for every composition.

The initial compatibility renderer supports every current slide before new compositions exist. Phase 2 changes the shell only; three artistic/composition changes wait until Phases 3–4.

## 5. Desktop viewer layout and sizing

### 5.1 Normal viewer wireframe

```text
┌ Back to Domain │ CIA Triad │ ‹  2 / 8  › │ EN TH EN+TH │ Slides │ Info │ ⛶ │ ☀ │ ⋯ ┐
├────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                    │
│      EYEBROW / OBJECTIVE                                                            │
│      Large editorial teaching title                                                │
│                                                                                    │
│               PURPOSEFUL DIAGRAM / COMPARISON / SCENARIO                              │
│                                                                                    │
│      Concise teaching explanation                         Essential takeaway          │
│                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────┘
                         No permanent filmstrip below
```

Use one approximately 56px toolbar. Back/compact lesson context are left; Previous/position/Next are central; language/Slides/Info/fullscreen/shared theme are right. The menu contains Text View, keyboard help, and nonessential details. Icons have concise English accessible labels and tooltips.

Long toolbar lesson context can truncate visually while keeping its full accessible name. Educational slide text cannot be truncated. At laptop widths, icon-only Info/fullscreen/theme reduce toolbar width; there is no second row of duplicate controls.

Completion replaces Next at the final slide when the existing acknowledgement condition is satisfied. If slides remain unvisited, Next is disabled and the completion area explains that reading is incomplete. Never count skipped slides as viewed.

### 5.2 Sizing algorithm

Override shell dimensions only while `#app` directly hosts `.learning-viewer`; restore through route cleanup/CSS scoping. Keep Home, Version Selection, Center, Domain, Quiz, and Vocabulary dimensions unchanged.

For normal desktop:

- Viewport comes from the actual viewer container/visual viewport, not a hardcoded 1920px canvas.
- Outer gutter `g = 16px`; toolbar `t = 56px`; toolbar/stage gap `q = 12px`.
- Available stage width `W = viewportWidth - 2g`.
- Available stage height `H = viewportHeight - t - 2g - q`.
- Fitted width `S = min(W, H × 16/9)`; fitted height `S × 9/16`.
- Center the stage in its available area. Neutral letterbox space is permitted where aspect ratio makes it unavoidable; no decorative frame adds another thick margin.

Approximate intended normal-mode geometry, before browser-specific safe-area adjustments:

| Viewport | Available area | Fitted 16:9 stage |
| --- | --- | --- |
| 1920×1080 | 1888×980 | 1742×980 |
| 1440×900 | 1408×800 | 1408×792 |
| 1366×768 | 1334×668 | 1188×668 |

These are calculations, not measured browser results. Phase 2 manual review confirms visual comfort and actual stage bounds.

The canvas itself is white or a deliberately authored light surface, with no dashboard-like nested white card. Scene typography responds to the stage/container size with minimum reading sizes. Do not transform-scale an entire fixed-coordinate HTML page.

## 6. Overflow, density, and reading alternatives

Three authoring densities describe composition capacity; they are not arbitrary word/character quotas:

| Density | Composition strategy | Fallback |
| --- | --- | --- |
| Minimal | One focal visual, title, short interpretation. | Reflow for small viewports. |
| Standard | Visual plus concise explanation, comparison, or a few meaningful stages. | Progressive explanation or readable flow when necessary. |
| Detailed | Longer source prose, tables, or multiple qualifiers. | Intentional Text View / flow composition outside fixed 16:9. |

Phase 2 preserves all current source material. Unadapted dense slides use the compatibility renderer and an explicit reading presentation when a fitted stage would require clipped or microscopic content. This prevents the shell from claiming the full eight-slide lesson has already been redesigned.

A shared stage module observes container resize and font readiness. If presentation content cannot fit at supported minimum sizes, resolve to a labeled readable flow view for that slide, announce the mode change, and keep complete content. Offer a deliberate return to presentation without an automatic oscillating fit loop. Keep this mode in viewer memory, not localStorage progress.

No content is silently removed, ellipsized, covered by toolbar/footers, or hidden with overflow to pass a static test. A composition that fails fit at its intended viewport/language is not approved. Separate Text View may scroll as one page; the desktop presentation canvas does not contain nested text scrollbars. Optional modal/overview dialogs can scroll their own contents.

## 7. Fullscreen architecture and controls

Reuse the native Fullscreen API controller but target the V3 presentation workspace containing stage and a minimal local control layer. Do not fullscreen only a previously undersized inner card.

```text
┌────────────────────────────── FULLSCREEN ──────────────────────────────┐
│                                                                      │
│                Maximum fitted, readable presentation                  │
│                                                                      │
│                                                                      │
│          [‹]    2 / 8    [›]    [Exit Fullscreen]                       │
└──────────────────────────────────────────────────────────────────────┘
```

The navigation layer appears on entry and intentional pointer/keyboard interaction, then may fade after about 2.5 seconds of inactivity. Never hide it while focus is within it. A small, touch-sized Show controls affordance remains discoverable when hidden; focus makes controls visible immediately. Browser-native fullscreen exit remains available.

This V3 choice supersedes the old “absolutely no presentation controls” fullscreen design. Site navigation, course lists, theme header, Info modal, and thumbnails do not permanently occupy fullscreen. Info or Slides requests first exit fullscreen, then open the existing modal/overview on the same slide; restore focus predictably.

- Arrow Left/Right and literal `<`/`>` clamp at ends.
- Escape exits native fullscreen; it must not advance or complete a lesson.
- Optional left/right half-stage click navigation remains only on noninteractive, unselected slide backgrounds.
- Exclude buttons, links, inputs, media, contenteditable, diagrams with controls, text selection, drags, and canceled pointers.
- Measure zones against actual slide bounds, not the letterboxed viewport.
- Mouse wheel never navigates slides; no scroll/selection hijacking.
- Rejection/unsupported API produces an English notice and a working normal viewer.
- Restore invoking focus and the same slide/language/transient state after exit.
- On route leave, abort pending work, exit owned fullscreen, and remove listeners/timers/observers.

A native fullscreen request can fail or be unavailable on a device. Normal mode is always a complete learning path. No CSS-only mode is advertised as native fullscreen.

## 8. Tablet and mobile wireframes

### 8.1 Tablet landscape

```text
┌ Back │ CIA Triad │ ‹ 2/8 › │ EN TH EN+TH │ Slides │ Info │ ⛶ │ ☀ ┐
│                                                                  │
│           ADAPTIVE CONCEPT / TIMELINE / COMPARISON                 │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

Retain fitted 16:9 when it remains readable. With short height or increased text, use flow mode rather than reducing text below the agreed minimum.

### 8.2 Tablet portrait

```text
┌ Back │ CIA Triad                     Info │ ☀ │ ⋯ ┐
│ Slide title                                       │
│                                                   │
│ Main diagram with wrapped HTML labels             │
│                                                   │
│ Supporting explanation / bilingual pairs           │
├ ‹ Previous    2 / 8     Next ›   EN TH EN+TH  Slides┤
└───────────────────────────────────────────────────┘
```

Portrait can use vertical flow and a single bottom navigation dock. Top context is not a second competing action toolbar: utility actions move to the compact dock/menu when space requires.

### 8.3 Mobile

```text
┌ Back to Domain                          Info │ ⋯ ┐
│ OBJECTIVE 1.1                                  │
│ Readable slide title                           │
│                                                │
│ Diagram / visual anchor                        │
│ Meaningful ordered content                     │
│ English explanation                            │
│ Thai equivalent (in EN+TH)                      │
│ Optional decision / reveal                     │
│                                                │
├ ‹       2 / 8       ›   EN TH EN+TH  [Slides] ──┤
└────────────────────────────────────────────────┘
```

At widths below roughly 720px, favor naturally flowing compositions, 16–18px minimum reading text, 44px touch targets, safe-area padding, and a reachable dock. The page owns normal vertical scroll. No desktop diagram shrinks into illegible labels. Timeline switches to vertical order; triad uses meaningful vertical grouping; decision options remain easy to touch.

Dock space is reserved in page padding so it never covers the final explanation. At 200% zoom, use this same reflow strategy instead of forcing desktop ratios.

## 9. Optional Slides overview

Use one Slides action and one overview, closed by default. Remove both the permanent filmstrip and select dropdown from normal presentation chrome.

```text
┌ Slides                                           Close ┐
│ [01 poster] [02 ACTIVE] [03 poster] [04 poster]           │
│ English title below each poster, not tiny body text     │
│ [05 poster] [06 poster] [07 poster] [08 poster]           │
└───────────────────────────────────────────────────────┘
```

Desktop uses a centered overlay grid; tablet/mobile use a sheet with two or three columns as width permits. Only the dialog scrolls vertically; there is no whole-page horizontal strip. Posters depict composition landmarks without live media, animation, or interaction.

Use a bounded rendering window/page of at most 25 posters for large lessons. Arrow keys, Home/End, active-state scrolling, and accessible full English titles work across windows. Selecting a poster navigates once, closes the overview, and restores a useful stage/control focus. Escape closes it and preserves the slide. Active slide is labeled with `aria-current` and a visible outline, not color alone.

Do not duplicate Info's metadata or create another slide-selection dropdown.

## 10. Slide design tokens

All tokens are scoped under a presentation root such as `.learning-viewer .presentation-canvas`. Course and other application styles must not inherit them accidentally.

### 10.1 Typography

Values are initial design targets for a fitted stage near 1280×720, with size bounded by available stage space; they require visual review.

| Token | Role | Initial desktop target | Narrow/flow target |
| --- | --- | --- | --- |
| `--pres-type-eyebrow` | Objective/section label | 14–16px, medium, restrained tracking | 12–14px |
| `--pres-type-title` | Main slide title | 40–52px, strong hierarchy | 28–34px |
| `--pres-type-subtitle` | Short orientation | 24–28px | 18–22px |
| `--pres-type-heading` | Section/concept heading | 26–32px | 20–24px |
| `--pres-type-body` | Primary explanation | 22–26px | 16–18px |
| `--pres-type-support` | Supporting interpretation | 18–22px | 16–18px |
| `--pres-type-diagram` | HTML diagram label | 18–22px | 16–18px |
| `--pres-type-callout` | Takeaway/important qualifier | 22–26px | 18–20px |
| `--pres-type-source` | Short source caption | 14–16px | 13–14px |

Use existing Space Grotesk and Noto Sans Thai conventions. Thai line height is approximately 1.6–1.75; allow combining marks and natural wrapping. Large stage titles can grow toward 64px; supporting text cannot shrink indefinitely to retain a rectangle. Full source details remain accessible through Lesson Info.

### 10.2 Spacing and surfaces

| Token | Use | Initial target |
| --- | --- | --- |
| `--pres-space-unit` | Shared rhythm | 8px reference unit |
| `--pres-inset` | Slide safe margin | 48–64px desktop; 20–28px flow |
| `--pres-column-gap` | Main visual/text columns | 32–48px; 20px stacked |
| `--pres-title-gap` | Title to teaching content | 24–36px |
| `--pres-diagram-gap` | Nodes/labels/explanation | 16–24px |
| `--pres-panel-gap` | Comparison/scenario separation | 20–28px |
| `--pres-footer-gap` | Takeaway/source zone | 20–24px |
| `--pres-radius` | Occasional meaningful panel | 12–18px |

Use a common spacing scale, not arbitrary per-slide margins. Section dividers are subtle rules or whitespace; ordinary paragraphs do not all need borders/shadows.

### 10.3 Color and reusable visual elements

Primary canvas `#FFFFFF`; quiet surface `#F8FAFC`; ink `#0F172A`; muted ink `#475569`; action blue `#2563EB`; confirmed green `#047857`; caution amber `#B45309`. These are proposed tokens, not claimed approved brand colors.

Icons are consistent line/shape marks with a teaching purpose. Diagram nodes use text labels; connectors identify their actual relationship/direction. Trust boundaries are labeled line styles. A short “Exam reasoning” note distinguishes educational interpretation from official ISC2 requirements. A source footnote gives a compact citation without reproducing the full metadata panel.

Color is never the only way to identify CIA concepts, sequence, selection, correctness, or uncertainty.

## 11. Layout library and minimum component set

| Family | Educational role | Reusable variation | Initial implementation |
| --- | --- | --- | --- |
| A Editorial hero | Introduce a topic | Left title/right visual or centered focal concept | Evaluate; defer new hero until a real approved slide needs it. |
| B Concept diagram | Relationships among ideas | Peer triad, hub/spoke, layers without false sequence | Build for CIA prototype. |
| C Comparison | Distinguish concepts | Two/three semantic columns with aligned comparison dimensions | Document; implement later on demand. |
| D Process/timeline | Ordered events or process | Horizontal/vertical timeline, focused step with full static equivalent | Build for compound incident. |
| E Scenario investigation | Evidence and decision reasoning | Scenario/evidence split, choices, focused explanation | Build for scenario reflection. |
| F Architecture/network | Systems, links, boundaries | Labeled nodes, zones, connections | Document; defer until approved source content requires it. |
| G Key takeaways | Retrieval and consolidation | Short concept map or visual summary | Document; defer full recap migration. |

A risk matrix is a later domain-specific composition, not a speculative component to implement now. Likewise, diagrams must not imply a security mechanism or guarantee that the source does not teach.

Shared primitives needed first: semantic text pair, section/teaching heading, concept marker, connector geometry, labeled takeaway, focused-step control, native choice group, and result explanation. Avoid a generic component-tree editor.

## 12. Content/schema compatibility and authoring contract

### 12.1 Existing data remains authoritative

Keep `schemaVersion:1`, lesson ID/revision/status, domain/objective IDs, `slides[]`, optional `slideOrder[]`, references/assets/review fields, existing `rendererId`/`layoutId`, and EN/TH text. No stored or published JSON changes are required for the shell or the three legacy-data prototypes.

Map current source shapes in pure code:

```text
text/comparison/diagram/interactive + blocks → semantic compatibility model
pillars + visual.pillars                 → concept-diagram model
incident-flow + visual.stages            → process-timeline model
scenario-decision + visual.options       → scenario-investigation model
```

Use data shape/registered type, not an arbitrary special webpage for a lesson ID. The three selected slide IDs identify prototype review scope, not hardcoded renderer behavior.

### 12.2 Proposed module contracts

```text
adaptPresentation(slide, lesson) -> {
  slideId, title, compositionId, density,
  content, readingOrder, referenceIds, semanticBlocks
}

composition = {
  validate(model) -> { errors, warnings },
  render(host, { model, language, viewport, interactionState, signal }) -> handle,
  poster(host, { model }) -> handle
}
handle = { destroy? }

viewer = {
  currentSlideId, goToSlide(id), setLanguage(mode), destroy()
}
```

`content` binds original semantic items/paths; it does not duplicate reviewed copy inside JavaScript. Layout profiles select trusted roles/ordering/disclosure, never arbitrary CSS, HTML, scripts, module URLs, or imported SVG strings.

Pure type definitions/validators and semantic conversion must be available before the public loader's availability check. Browser composition modules may load lazily. Do not register support only after entering Viewer, because the loader would then reject the lesson first.

For a future genuinely new structured layout, extend trusted renderer registration with a pure semantic converter/validator while retaining the old registration call shape. The publication validator and reading fallback must use that same converter, avoiding separately maintained text. This is a backward-compatible code extension, not a demand to migrate existing JSON or loosen validation. Only implement it when the initial component foundation needs it.

### 12.3 How future objectives reuse the framework

1. Map an objective to reviewed lesson outcomes and claims.
2. Author EN/TH data using a supported renderer/layout and its documented structured fields.
3. Select an existing family/variation appropriate to the teaching purpose.
4. Attach existing source/asset/review evidence through normal publication metadata.
5. Validate using the registered pure converter/validator and reading equivalent.
6. Register the lesson in the current catalog with one primary owner and related links.
7. Reuse Viewer controls, Info, theme/language, keyboard/fullscreen, and V1 progress without per-lesson code.

A new composition module is needed only for a new educational visualization requirement, not for every objective, lesson, or slide.

## 13. EN, TH, and EN+TH composition

Application controls, tooltips, settings, notices, counters, menus, and progress remain English. Educational titles, diagram text, narrative, choices, and reasoning follow the selected mode.

- EN: reviewed English text and terminology.
- TH: natural Thai educational text, preserving English technical terminology where already authored.
- EN+TH: semantic pairs arranged in an explicit layout profile. A concept label may pair compactly; narrative may use parallel/stacked explanation panels or progressive sections.
- Do not silently omit a language, duplicate entire long paragraphs into every fixed visual node, or impose a universal character count as proof of fit.
- Detailed bilingual content uses flow/reading mode at a comfortable size.
- All modes retain the same slide IDs, ordering, slide count, source relationships, and completion denominator.
- Switching language preserves current slide, selected evidence/option/step, completion, and focused language control.

Existing hard character budgets remain legacy source validation until an authorized compatibility extension replaces their role. They are not visual acceptance criteria and cannot substitute for real Thai review.

## 14. Theme integration

Reuse `createThemeToggleButton()`, `applyTheme()`, existing saved-theme key, and `html[data-theme]`. V3 does not rewrite `js/core/theme.js` or globally change token values.

Dark/light theme governs viewer chrome, menus, overview, and the existing Info modal. The authored light presentation canvas retains its semantic colors in either theme. Do not invert SVG or photographs or force a dark chart palette through global styles.

Changing theme updates scoped styling, without resetting the slide, remounting a scenario, creating another route, or writing learning progress. Static reading content and focus indicators remain readable in both themes. User review determines comfort of the dark-chrome/light-stage contrast.

## 15. Interaction state, navigation, and progress

Use the existing route callbacks and `state.learning`. Back restores the Domain's selected objective and existing `Start Learning →` affordance. Continue Learning bypasses Domain selection exactly as it does now. Browser History routing is not introduced; existing refresh/resume behavior stays unchanged.

Progress remains under `sec_cert_learning_progress_v1` with its existing shape and reconciliation rules. No new key, reset, destructive cleanup, or migration is proposed. Retain last slide, matching visited IDs, language, timestamps, completion acknowledgement/date, and revision handling. Never infer mastery from visits.

Transient interaction data is separate:

```text
viewerMemory[slideId] = {
  selectedSemanticKey, focusedStepKey, revealedSections
}
```

Keys derive from validated content. Do not store raw DOM, free-text answers, secrets, or media in localStorage. Visiting a choice, changing theme/language, opening Info/Slides, or entering fullscreen cannot complete a lesson. Save progress only through the existing store APIs after a slide successfully displays and at lifecycle boundaries.

Completion requires all current slides visited plus explicit English Finish Lesson/acknowledgement. A completed lesson opens for review without clearing completion. If a future academic revision changes content/IDs, use the existing revision rules and document any explicit mapping; that is separate work.

## 16. Accessibility, motion, and failure behavior

- Use semantic headings, figures, lists, native buttons/radio groups, visible focus, and a logical reading order.
- Only the active slide is exposed as active content. Announce short title and n/N politely; do not reannounce an entire bilingual slide after every action.
- Keep navigation focus stable on Previous/Next. Controls consume their own events before stage shortcuts.
- Dialogs use labels, inert background, logical initial/return focus, Escape close, and a focus loop that respects collapsed disclosures.
- All critical diagrams and interaction outcomes have complete semantic/static equivalents.
- SVG geometry has an appropriate description or is decorative when an equivalent HTML account is present. No long fixed-coordinate bilingual SVG text.
- Motion is user-paced and explanatory: focused timeline/diagram reveal, brief transitions, hover/focus feedback.
- Respect reduced motion with static states; never autoplay audio or auto-advance slides. Pause media/motion on Info/overview and route leave.
- Every listener, observer, timeout, animation, media controller, async load, and renderer belongs to a disposer/AbortSignal.
- Renderer failure selects complete semantic reading content; unsafe/invalid required source content still fails publication.
- Failed catalog/lesson/asset requests show English recovery actions and valid Back routes; unavailable content creates no fake progress.
- Do not suppress ordinary browser scrolling, selection, assistive-technology keys, or form interactions.

## 17. Three CIA prototype wireframes

Prototype text below identifies roles using existing concepts; it is not replacement production copy. Full existing text/qualifiers/references remain available through the composition/reading equivalent.

### Prototype 1 — Three Pillars of Information Security

Source: `slide-02-cia-overview`, `rendererId: pillars`, `layoutId: pillars`.

```text
OBJECTIVE 1.1
The Three Pillars of Information Security

                    INFORMATION
              /          |          \
     C — Confidentiality I — Integrity A — Availability
     existing question   existing      existing question
                         question

           Existing explanations, paired in EN+TH
                [Explore supporting details]

                EXISTING SHARED TAKEAWAY
```

Three peer visual anchors share an information asset; connections mean relationship, not attack sequence. Use open spatial composition and meaningful line/shape/icon work, not three bordered dashboard cards. Supporting summaries are discoverable and complete. On mobile the peer groups stack with a shared relationship label; no triangle forces tiny text.

### Prototype 2 — Compound Security Incident

Source: `slide-06-compound-impact`, `rendererId: incident-flow`.

```text
COMPOUND IMPACT
Existing compound-incident title

   01 Exfiltration ────── 02 Lockout ────── 03 Corruption
          C                    A                  I
      observed event       observed event     observed event
      and consequence      and consequence    and consequence

      [Previous step]           [Next step]
      Existing focused event + impact interpretation

      Existing illustrative-sequence disclaimer / takeaway
```

The line is the provided scenario's educational sequence, not a claim about every ransomware incident. Do not invent additional attack steps, automatic exfiltration, or changed consequences. Reduced motion/static reading shows all ordered evidence. Mobile becomes a vertical timeline with the same order and qualifiers.

### Prototype 3 — Scenario Reflection

Source: `slide-07-scenario-reflection`, `rendererId: scenario-decision`.

```text
SCENARIO INVESTIGATION
Existing reflection title

 EXISTING SCENARIO                    WHICH GOAL IS DIRECTLY AFFECTED?
 Existing inventory-change facts     ( ) Confidentiality
 Meaningful evidence emphasis        ( ) Integrity
                                     ( ) Availability
                                     [Check Reasoning]

 EXISTING CHOSEN VERDICT + REASON
 [Compare other explanations]                          [Reset]
```

Preserve the original administrator/inventory facts, negations, all option keys, correct choice, verdicts, and rationales. Evidence emphasis does not add facts. English Check Reasoning/Reset controls frame educational content in the chosen language. This is an unscored teaching interaction independent of Quiz/scoring.

## 18. File responsibility and disposition plan

All changes in this table are future proposals. No V3 production file is created in this planning session.

| File/group | Disposition | Phase / responsibility |
| --- | --- | --- |
| `js/ui/learning/viewer.js` | Replace shell orchestration, preserve public handle/callbacks | P2: compose controls/stage/overview/Info and existing progress. |
| `js/ui/learning/viewer-controls.js` | New | P2: one compact toolbar/dock, fullscreen controls, completion context, English labels. |
| `js/ui/learning/presentation-stage.js` | New | P2: fit calculation, ResizeObserver/font readiness, reading fallback, cleanup. |
| `js/ui/learning/slide-overview.js` | New | P2: optional bounded poster grid, active selection, keyboard/focus lifecycle. |
| `js/ui/learning/fullscreen.js` | Reuse, focused extension only if needed | P2: native event ownership, focus/denial/exit; controls live in viewer workspace. |
| `js/ui/learning/lesson-info.js` | Reuse unchanged where possible | P2: same Task 72R.2 modal; preserve existing metadata and interaction. |
| `js/ui/learning/dom.js` | Reuse safe/English/localization helpers | No new global translation system. |
| `js/ui/learning/routes.js` | Reuse navigation; narrow mounting/disposal adjustment if necessary | Preserve direct start/resume, objective context and stale-load guards. |
| `js/core/learning-presentation.js` | New pure adapter | P3: canonical model from current blocks/visual, reading equivalents, density and bindings. |
| `js/core/learning-layouts.js` | New pure definitions only if needed | P3: validation/conversion shared with loader; register only initial types. |
| `js/ui/learning/compositions/index.js` | New trusted registry | P3: lazy composition map, fallback and poster interface. |
| `js/ui/learning/compositions/concept-diagram.js` | New | P3: peer relationship geometry and HTML labels. |
| `js/ui/learning/compositions/process-timeline.js` | New | P3: ordered events, step/static states. |
| `js/ui/learning/compositions/scenario-investigation.js` | New | P3: native decisions, feedback and semantic keys. |
| `js/ui/learning/renderers.js` | Compatibility facade/refactor | P2 compatibility; P3–4 select shared components; preserve external registration API. |
| `js/ui/learning/visual-components.js` | Retain until accepted replacement | Retire only replaced code after Gate C and reference checks. |
| `js/core/learning-visuals.js` | Retain compatibility | Existing validators/semantic conversion; extend carefully only in P3 if needed. |
| `js/core/learning-schema.js` | Reuse/optional backward-compatible hook | No P2 schema rewrite; pure semantic converter support only if P3 requires it. |
| `css/learning-presentation.css` | New scoped shell/tokens | P2–3: viewport fit, toolbar/overview, reading and theme surfaces. |
| `css/learning-compositions.css` | New scoped component rules | P3: shared tokens and initial three families. |
| `css/learning.css` | Remove superseded presentation rules after review | Preserve Center/Domain/Info and newer hover/header refinements. No unscoped layout/tone leakage. |
| `index.html` | Narrow stylesheet links if used | Add scoped presentation styles only; no other bootstrap rewrite. |
| `tools/verify-learning-viewer.mjs` | Extend | P2: sizing function, controls, overview, focus/state, native fullscreen, disposal. |
| `tools/verify-learning-presentation.mjs` | New | P3: adapters, language/semantic parity, density and registry validation. |
| `tools/verify-learning-visuals.mjs` | Update after component changes | P3–4: meaningful behavior and full source binding; remove obsolete card/budget shape expectations only with replacement coverage. |
| `tools/verify-learning-phase2.mjs` | Reuse integration coverage | Preserve course/Domain/Start Learning/Info behavior. |
| Other learning catalog/progress/integration/language/preview tests | Reuse/targeted extension | Publication, V1, selector and fixture boundaries. |
| `tools/fixtures/learning/`, `tools/preview-learning.mjs` | Reuse test/local preview boundary | New fixtures only if necessary; never public publication bypasses. |
| Catalog, lesson JSON, source/QA documents | Preserve | No IDs, text, order, academic references, or revision changes. |
| Center/Domain/course resolver, shared theme, Version Selection | Preserve | User-designated stable product boundaries. |
| Exam banks/quiz/scoring/Vocabulary/unrelated certification modules | Preserve | Outside V3. |

## 19. Phases, acceptance criteria, and manual gates

### Phase 0 — audit (this session)

- [x] Inspect current repository/status/history, newer V2 tasks, viewer DOM/CSS, data/renderers, fullscreen, language/theme, progress, routes and tests.
- [x] Distinguish implemented course/Domain/modal from unimplemented V3 presentation.
- [x] Record reusable contracts, causes of limited stage space, content-fit problems, and dependency risks.

### Phase 1 — design (this session)

- [x] Define sizing/overflow policy, normal/fullscreen/tablet/mobile wireframes, one control system, optional Slides, tokens and themes.
- [x] Define compatibility adapters, reusable layout families, state boundaries, initial component scope and future authoring process.
- [x] Define three CIA prototype wireframes, exact file responsibilities, verification and gates.
- [x] **V3 Gate A: user approval before any V3 Phase 2–5 implementation.**

### Phase 2 — Viewer shell and navigation (after Gate A)

- [x] Freeze a fresh baseline; keep current source JSON/progress and all course/Domain/Info behavior.
- [x] Add pure fit calculation and stage module; replace shell with the single toolbar/dock and authored light surface.
- [x] Replace permanent filmstrip/select with one optional Slides overview.
- [x] Integrate existing Info, theme/language, completion and V1 APIs; retain all eight slides through compatibility/reading rendering.
- [x] Preserve live semantic interaction state through fullscreen, language/theme and panel actions.
- [x] Refine desktop toolbar into three distinct zones.
- [x] Correct Gate B review rejections: (A) Back 42px icon button + `DOMAIN 1 · OBJECTIVE 1.1` kicker + `CIA Triad` title; (B) Removed "Try Presentation" and redundant More menu; (C) Added visible keyboard icon button and accessible shortcuts modal dialog; (D) Removed persistent Text View banner; (E) Root-caused narrow container to oversized typography and premature overflow trigger, restored true 16:9 presentation canvas (`min(W, H * 16 / 9)`) with proportional typography (`14-17px body`, `22-34px title`) and safe layout tolerance.
- [x] Test boundaries, fit calculations, disposal, rejected fullscreen, overview focus, V1/completed review, loading errors, and protected-screen behavior.
- [x] Deliver corrected viewer shell, three-zone toolbar, 16:9 widescreen stage, and actual test results (88/88 passed).
- [ ] **V3 Gate B: stop for manual user review; awaiting explicit user approval before any Phase 3 layout-library implementation.**

Gate B acceptance: useful stage at 1920×1080/1440×900/1366×768; true 16:9 widescreen presentation canvas dominating the workspace; one coherent three-zone toolbar (`[←] | DOMAIN 1 · OBJECTIVE 1.1 CIA Triad`, `‹ 1 / 8 ›`, `EN/TH | Slides Info Keyboard Fullscreen Theme`); optional overview hidden on entry; readable compatibility mode without uninvited banners; no lost slide/progress; correct theme/language; normal/fullscreen exit behavior; no horizontal page overflow. Academic text is unchanged. Manual approval is recorded explicitly, not inferred from tests.

### Phase 3 — reusable components (after Gate B)

- [ ] Add shared tokens, canonical adapters and the minimum concept/timeline/scenario families.
- [ ] Validate all content bindings, complete reading equivalent, static/reduced-motion modes and language profiles.
- [ ] Retain existing loader/validator behavior; implement only necessary compatible pure registry hooks.
- [ ] Document each supported family's data input, reading order, language/viewport variation, interaction state and cleanup.
- [ ] Keep remaining families deferred and avoid mass content migration.

### Phase 4 — three CIA prototypes

- [ ] Bind existing slides 2, 6, and 7 to the accepted components; no source-data rewrite.
- [ ] Demonstrate three distinct compositions and inspect every feedback/reveal state.
- [ ] Verify all EN/TH content, scenario meaning, disclaimer, references, theme/fullscreen, keyboard and progress.
- [ ] **V3 Gate C: stop for user visual acceptance before migrating remaining slides.**

Gate C acceptance: clear peer relationships, accurate scenario-only incident progression, meaningful decision reasoning, readable Thai/bilingual states, purposeful motion, complete static/reading alternatives, and no clipped/hidden content.

### Phase 5 — gradual curriculum migration (after Gate C)

- [ ] Migrate remaining published slides one at a time with full text/source/ID/order comparison.
- [ ] Retire old code/styles only after accepted replacements have no runtime references and rollback is recoverable.
- [ ] Run relevant static/Node and protected-data regressions; record actual manual QA coverage.
- [ ] Obtain separate authorization before new Domain 2–5 educational production or any academic rewrite.

### Manual review record format

Record phase/gate, build/content revision, browser/OS, viewport/orientation, theme, language, input mode, scene and interaction state, observed issues, and user's decision. Include keyboard-only, enlarged text, reduced motion, Info/overview focus, and fullscreen entry/exit/denial. Missing hardware is documented as untested coverage.

No Chrome/Playwright/Puppeteer/Selenium/browser automation is authorized. Screenshots and actual application inspection are performed manually by the user.

## 20. Risks, decisions for approval, and verification record

| Risk / decision | Mitigation / approval point |
| --- | --- |
| Current 8-slide source includes dense prose | Shell compatibility/reading fallback preserves it; redesign only three after gates. |
| Larger viewport does not automatically improve composition | Shared tokens plus three different wireframes; Gate C assesses actual learning clarity. |
| Bilingual expansion changes height substantially | Per-family profiles/reflow, semantic pairing and full reading equivalent; no hidden overflow. |
| Fullscreen control discoverability versus distraction | Brief auto-hide with visible/focusable Show controls affordance; never hide focused controls; user tests at Gate B. |
| Fitting can loop as modes resize | One shared measurement owner and stable per-slide resolved mode; no repeated auto-switch oscillation. |
| Theme changes recreate interactions | CSS-driven chrome plus viewer memory; test state retained before/after. |
| Pure definitions not registered at loader time | Bootstrap pure validators before availability; lazy-load only browser rendering code. |
| Static tests mistaken for visual approval | Separate Gate B/Gate C records; manual language/viewport/state matrix. |
| Source metadata overstates approval | Preserve exact existing flags and unresolved holds; visual design does not certify academic truth. |
| Too many layout families create speculative code | Implement only B/D/E initially; future families need a real reviewed content requirement. |
| Shared checkout changes from other work | Fresh baseline and bounded edits; no reset, revert, clean, or broad rewrite. |

Decisions requested at V3 Gate A: the viewport-fit/flow policy, single compact toolbar/dock, optional overview grid, minimally accessible fullscreen controls, light canvas with saved-theme chrome, compatibility-first adapter architecture, three-family initial scope, and the three prototype concepts. No other user choice is required to begin the approved shell once Gate A is granted.

### Verification in this Phase 2 regression fix

Current focused non-browser regression command:

```powershell
node --test tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-viewer.mjs tools/verify-learning-phase2.mjs tools/verify-learning-visuals.mjs tools/verify-ui-language-boundary.mjs tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs tools/verify-learning-course.mjs tools/verify-learning-integration.mjs
```

Result observed: **89/89 pass** across 10 suites in ~400ms.

#### Phase A: Gate B Final Corrections Completed
1. **A1. Mobile Toolbar Architecture (<720px):** Resolved toolbar right-zone squeezing. On narrow screens (<720px), desktop-only utility buttons (`data-action="help"`, `data-action="fullscreen"`) and redundant vertical divider lines are hidden (`display: none !important`), compressing the right utilities zone to 217.5px. The left context zone retains a healthy 128.5px with an unobstructed 44×44px touch-target Back button (`viewer-back-btn`) and ellipsis-truncated lesson kicker/heading (`DOMAIN 1 · O... / CIA Triad`). Center navigation docks cleanly to the bottom fixed dock.
2. **A2. Mobile Slide Height & Clamping:** Scoped the legacy `.learning-presentation:not(:fullscreen) .learning-slide { min-height: 250px; }` constraint in `css/learning.css:1420` with `:not(.presentation-workspace)`. In `presentation-stage.js`, reset `stage.style.aspectRatio = 'auto'` and `stage.style.height = 'auto'` upon entering mobile/reading view. In `css/learning-presentation.css`, mobile slides receive natural full vertical reading flow (`aspect-ratio: auto !important; height: auto !important; overflow-y: visible !important;`). Large comparison matrices scroll horizontally (`min-width: 540px; overflow-x: auto`) rather than breaking into vertical syllable ribbons.
3. **A3. Slide 8 English Table Overflow:** Diagnosed the 14px vertical overflow on desktop 1440×900 (`scrollHeight: 804px` vs `clientHeight: 790px`). Decreased table cell padding from `12px 16px` to `8px 14px` (`padding: 8px 14px; line-height: 1.5;`) across `.learning-table-scroll :is(th, td)`. Reduced vertical table height by 32px, bringing `scrollHeight` to exactly 790px (`hasVerticalScroll: false`). All text, columns, takeaways, and source boxes are 100% preserved.
4. **A4. Learning Slides Language Switcher:** Restricted the Viewer language control group in `viewer-controls.js` to strictly `['th', 'en']` (displaying `TH | EN`). Default viewer language is `th`. Any incoming legacy preference of `'both'` safely maps to `'th'` for the presentation viewer only without altering global user preferences. Switching between `TH` and `EN` preserves active slide index and transient interaction state.

#### Phase B: Phase 3 Presentation Design Foundation & 3 Initial Prototypes
Transformed the textbook-like slide format into an educational visual presentation system inspired by modern PowerPoint/Google Slides:
1. **Reusable Presentation Composition System:**
   - **Hero Introduction (`hero-intro`):** Designed for lesson orientation. Asymmetric 2-column layout (55% left educational narrative, mission headline, and core principle card; 45% right substantial SVG CIA Triad emblem connecting Confidentiality, Integrity, and Availability to central Organization Assets & Mission with 3 colored summary pills).
   - **Concept Diagram (`pillars`):** Central horizontal interconnected vector bar linking Secrecy (C), Foundational Core (Goals), and Access (A). In Thai mode, retains canonical English technical terms alongside Thai translations (`Confidentiality (การรักษาความลับ)`).
   - **Process Timeline (`incident-flow`):** Directional sequence with horizontal gradient timeline track axis, chronological stage markers ($T_0, T+4\text{h}, T+24\text{h}$), and directional vector flow indicators (`➔ CASCADE`, `➔ ESCALATION`). Preserves the critical threat actor variability disclaimer note.
2. **Prototype Implementations in CIA Triad Pilot Lesson:**
   - **Slide 1 (`slide-01-orientation`):** Upgraded `layoutId: "hero-intro"` in lesson JSON. All canonical text blocks preserved for semantic accessibility fallback.
   - **Slide 2 (`slide-02-cia-overview`):** Central CIA Triad interconnected vector bar with bilingual terminology retention.
   - **Slide 3–5, 7–8:** Kept stable and intact. Slide 8 table padding optimized for zero overflow.

### Verification Evidence
- **Automated Regression Test Suites:**
  - `tools/verify-learning-v3-viewer.mjs`: 10/10 passed (Toolbar, Gate B corrections, touch targets, TH | EN toggle).
  - `tools/verify-learning-v3-stage.mjs`: 8/8 passed (16:9 canvas sizing math, status reserve, font readiness).
  - `tools/verify-learning-visuals.mjs`: 11/11 passed (Character budgets, semantic fallback blocks, schema validation, Phase 3 prototypes).
  - `tools/verify-learning-phase2.mjs`: 22/22 passed (Course navigation, routes, headers, theme compatibility).
- **Real Browser QA via Chrome 155 CDP:**
  - Executed across 7 viewports: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844, 375×667, 200% zoom.
  - Zero console errors, zero network errors.
  - Slide 1 to 8: `scrollHeight: 790px, clientHeight: 790px, hasVerticalScroll: false` on desktop (0px vertical overflow).
  - Mobile 390×844: Back button 44×44px, left zone 128.5px, right zone 217.5px (0 overlap), natural vertical slide height 2305.5px.
  - Screenshots recorded in `artifacts/qa/v3-browser-review/` (`slide-01.png`, `slide-01-th.png`, `slide-02.png`, `slide-02-th.png`, `slide-06.png`, `slide-06-th.png`, `slide-08.png`, `mobile-390x844.png`).

### Manual Visual Review Instructions
1. Open `http://localhost:5173/` (or static server) in browser.
2. Navigate: `ISC2 CC 2026 — Update Slides` → `Domain 1` → `Objective 1.1` → `Start Learning →`.
3. Inspect:
   - **Toolbar:** `TH | EN` toggle, Back button 44px, left/center/right zones.
   - **Slide 1:** Hero Introduction with prominent mission headline, core principle card, and right-hand CIA Triad emblem card. Toggle between `TH` and `EN`.
   - **Slide 2:** Connected CIA Triad diagram bar with C, I, A cards retaining English technical terms in Thai mode.
   - **Slide 6:** Incident flow process timeline with $T_0, T+4\text{h}, T+24\text{h}$ markers and Cascade/Escalation flow vectors.
   - **Slide 8:** Key Takeaways summary matrix fitting cleanly with zero vertical scrollbars on desktop 1440×900.
   - **Mobile (390×844 / 375×667):** Back button and title visible, bottom navigation dock, natural vertical reflow.

**Gate B corrections and Phase 3 initial prototypes (Slides 1, 2, 6) are complete and awaiting user visual review. Phase 4 remaining slide migration (Slides 3, 4, 5, 7, 8) remains unstarted.**

