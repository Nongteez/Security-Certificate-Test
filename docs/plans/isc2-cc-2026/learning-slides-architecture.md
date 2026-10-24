# ISC2 CC 2026 Learning Slides — Proposed Architecture

**Task 55 baseline / Task 56 implementation record · 2026-10-24**

Task 56's native foundation is implemented and Node-verified, with manual browser acceptance pending. The type/file tables below preserve the original design proposal; [the implemented schema](../../../content/isc2-cc-2026/learning/schema.md) and [actual implementation/review report](../../learning-slides.md) are authoritative for current interfaces, file locations, publication gates and known verification limits. Review fixes respect authored slide order on resume, strictly validate source URL types, reject unpausable GIFs and decouple learning availability from rendering the original cards.

> **Task 56 reconciliation:** The foundation is now authorized. Use paired bilingual labels for the new learning UI and fourth card only; preserve the original three cards' language behavior. Keep HTTP static deployment and the existing router. Implement native modules without dependencies because the current features do not require a library. Reflow uses the same semantic slide blocks rather than a duplicated `readingBlocks` text copy. A locally generated ignored preview is the only fixture entry; the public loader has no preview flag/query/fragment override. Detailed actual contracts and deliberate simplifications are recorded in `docs/learning-slides.md` and the implemented schema.

This is a proposed contract, not an implemented API or existing file schema. Read the [audit/delivery plan](learning-slides-plan.md) for verified repository facts, source readiness, pilot and release criteria, and [content guidelines](learning-slides-content-guidelines.md) for publication rules.

## 1. Approaches and recommendation

| Approach | Benefits | Costs / limits | Decision |
| --- | --- | --- | --- |
| Native viewer + structured JSON content + allowlisted code renderers | Fits existing ES modules, state router and static hosting; semantic text; shared accessibility/progress; varied layouts and interactive diagrams in one lesson. | Requires a small validated content contract, lifecycle discipline and explicit responsive authoring. | **Recommended**, proposed by this audit; not yet approved by the user. |
| One hand-authored HTML/module per entire lesson | Maximum immediate layout freedom, familiar technology. | Duplicates controls/progress/translations; inconsistent lifecycle and metadata; harder curriculum validation. | Allow small custom renderers within the shared engine instead of whole independent lesson apps. |
| Embed a presentation service or adopt a presentation framework | May supply mature presentation/authoring features. | Introduces hosting/dependency, integration, privacy/rights and styling decisions; does not resolve bilingual layout or academic evidence; overbroad for this static app. | Defer until a demonstrated requirement outweighs those costs. |

Do not add React, a bundler, a backend or required third-party animation runtime. Native JSON fetch, DOM/CSS, ESM imports and SVG cover the pilot. A slide is an educational unit, not necessarily a fixed card-grid layout.

## 2. Proposed boundaries and file responsibilities

All paths in this section are **future proposals**. Create no files here during Task 55.

| Layer | Proposed path | Responsibility |
| --- | --- | --- |
| Selector registration | Existing `data/exam-versions.js` | One typed learning entry; preserve exam registry behavior. |
| Screen dispatch | Existing `js/ui/renderer.js` | Learning center, lesson overview and viewer routes; explicit branch before exam loading; dispose previous learning view. |
| Navigation selection | Existing `js/core/state.js` | Add only a learning selection namespace/transition; never call quiz reset/session creation for learning actions. |
| Catalog | `content/isc2-cc-2026/learning/published/catalog.json` | Versioned, small index of all Domains, objectives and genuinely published lesson metadata. Empty objective lesson lists are valid. |
| Lesson data | `content/isc2-cc-2026/learning/published/lessons/<lesson-id>.json` | Reviewed bilingual content, ordered slide IDs, approved renderer/layout choices and references. |
| Editorial evidence | `content/isc2-cc-2026/learning/editorial/<lesson-id>/` | Storyboard, claim map, review and rights records; not imported or linked by runtime catalog. No automatic conversion from study notes. |
| Contract | `content/isc2-cc-2026/learning/schema.md` | Authoring/validation specification; small native validator initially, optional formal JSON Schema later if justified. |
| Loader/validator | `js/core/learning-loader.js` | Load/validate catalog and lessons, enforce published allowlist and same-origin path rules, cache and expose errors. |
| Progress | `js/core/learning-progress.js` | Defensive independent local persistence and content-revision reconciliation. No imports from quiz engine/storage internals. |
| Center | `js/ui/screen-learning-center.js` | Domain/objective TOC, available/preparation states and resume overview. |
| Lesson overview | `js/ui/screen-learning-lesson.js` | Synopsis, outcomes, lesson contents, review/reference access and start/resume. |
| Viewer engine | `js/ui/learning/viewer.js` | Stage, navigation, filmstrip, mode/language changes, announcements, renderer lifecycle and event ownership. |
| Presentation adapter | `js/ui/learning/fullscreen.js` | Native Fullscreen API and focus/exit lifecycle; no content decisions. |
| Rendering registry | `js/ui/learning/renderers.js` | Trusted renderer/layout registry and shared semantic blocks; unknown IDs fail safely. Split into small renderer files when real complexity appears. |
| Optional interactivity | `js/ui/learning/interactions/<module-id>.js` | Trusted custom modules only as lessons require them, registered by code and lazy loaded. |
| Styles | `css/learning.css` plus scoped extension of existing `css/versions.css` if needed | Learning screen chrome, stage/layouts, reflow view, responsive/reduced-motion rules. Link stylesheet in existing `index.html` during implementation. |
| Assets | `assets/learning/isc2-cc-2026/<lesson-id>/` | Original/licensed images, sanitized SVG, poster/thumbnail and optional media. |
| Verification | `tools/verify-learning-{catalog,progress,viewer}.mjs` | Structural/behavior checks; test fixtures under `tools/fixtures/learning/`, never in the published catalog. |

The static host may expose editorial files by URL; folder names alone are **not** access control. Keep private/unlicensed originals out of deployed assets, and configure publication packaging/hosting exclusions when such material is sensitive. The original course folders must never become an asset source automatically.

## 3. Proposed contracts

The notation below documents types, not lesson content. IDs and paths are stable slugs, unique in their scope. Runtime schema version starts at 1; content revision is separate.

```text
LocalizedText = { en: string, th: string }
LanguageMode = 'en' | 'th' | 'both'
PublicationStatus = 'coming-soon' | 'in-preparation' | 'published'
ProgressStatus = 'not-started' | 'in-progress' | 'completed'

Catalog = {
  schemaVersion: 1,
  certificationId: 'isc2-cc', outlineId: 'isc2-cc-2026-09-01',
  revision: string,
  domains: Domain[]
}
Domain = {
  id: integer(1..5), name: LocalizedText,
  status: PublicationStatus, objectives: Objective[]
}
Objective = {
  id: string, title: LocalizedText,
  status: PublicationStatus, lessons: LessonSummary[],
  relatedLessonIds: string[]
}
LessonSummary = {
  id: string, title: LocalizedText, synopsis: LocalizedText,
  domainId: integer, primaryObjectiveId: string, objectiveIds: string[],
  status: PublicationStatus,
  revision: string | null, lessonPath: string | null
}
Lesson = {
  schemaVersion: 1, id: string, revision: string,
  outlineId: string, domainId: integer,
  primaryObjectiveId: string, objectiveIds: string[],
  title: LocalizedText, synopsis: LocalizedText,
  outcomes: LocalizedText[], prerequisites: LocalizedText[],
  review: ReviewRecord, references: Reference[], assets: Asset[],
  slides: Slide[]
}
Slide = {
  id: string, title: LocalizedText,
  rendererId: string, layoutId: string,
  layoutByLanguage?: { en?: string, th?: string, both?: string },
  blocks: Block[], readingBlocks: ReadingBlock[],
  referenceIds: string[], claimIds: string[],
  thumbnailAssetId?: string,
  interaction?: { moduleId: string, config: object }
}
Block = TextBlock | ListBlock | TableBlock | MediaBlock | DiagramBlock
TextBlock = { kind: 'text', text: LocalizedText }
ListBlock = { kind: 'list', items: LocalizedText[] }
TableBlock = { kind: 'table', caption: LocalizedText,
               columns: LocalizedText[], rows: LocalizedText[][] }
MediaBlock = { kind: 'media', assetId: string, caption?: LocalizedText }
DiagramBlock = { kind: 'diagram', assetId: string,
                 description: LocalizedText, equivalentSteps?: LocalizedText[] }
ReadingBlock = TextBlock | ListBlock | TableBlock
ReviewRecord = {
  technical: ReviewDecision, bilingual: ReviewDecision,
  rights: ReviewDecision, reviewedRevision: string,
  evidencePath: string
}
ReviewDecision = {
  status: 'pending' | 'changes-required' | 'approved',
  reviewer: string | null, reviewedAt: ISO-date | null
}
Reference = {
  id: string, title: string, publisher: string,
  authority: 'official-scope' | 'technical-primary' | 'course' | 'editorial',
  url?: HTTPS-URL, repositoryPath?: string,
  locator: string, verifiedAt: ISO-date,
  supportsClaimIds: string[]
}
Asset = {
  id: string, path: string, type: 'image' | 'svg' | 'video' | 'audio' | 'animation',
  alt: LocalizedText, decorative: boolean,
  creator: string, sourceUrl?: HTTPS-URL,
  license: string, rightsEvidencePath: string,
  width?: integer, height?: integer, posterAssetId?: string,
  staticAssetId?: string, transcript?: LocalizedText
}
```

No fake instances are supplied. Renderer-specific data extends the `blocks`/interaction contract through a declared, versioned validator; do not turn JSON into arbitrary HTML/JavaScript. Not every renderer must consume every block kind. A renderer validates its supported block/layout combination. `readingBlocks` must convey all meaningful diagram/media/interactive information in reading order; a media caption alone is insufficient for a complex explanation.

### Catalog and release invariants

- Exactly five Domain records with the codes from the audit plan; objectives must belong to their Domain. A lesson can reference multiple objectives **within** its home Domain; cross-domain concepts use related-reference metadata rather than duplicate lessons. `primaryObjectiveId` must belong to `objectiveIds`; only that objective's `lessons` array owns the full summary. Other mapped objectives use `relatedLessonIds` to reference that single summary. Those IDs must resolve to lessons in the same Domain whose `objectiveIds` include the referring objective; they cannot repeat an owned lesson or each other. Build one lesson index from the owned summaries, and deduplicate by lesson ID for Domain/module totals and progress. Secondary links do not create new lessons.
- Proposed initial catalog permits empty lesson arrays throughout. For D4–5 use those empty arrays, not fictitious titles/IDs or lesson paths. An under-preparation lesson summary is allowed only when an actual scoped editorial task/storyboard exists; it cannot contain an executable path or be counted as available.
- `published` summary requires nonempty revision/path and a nonempty valid lesson. Its review approvals must all match that exact revision, with accountable reviewers and dated evidence. Pending/blocked content cannot be promoted by a boolean on a card.
- A Domain/objective is shown as available only if it contains at least one published descendant; mixed readiness must be labeled partial. Module availability is derived from at least one validated published lesson, not from a manually maintained lesson count. Persisted progress never changes publication status.
- Unique lesson IDs globally and unique slide/asset/reference IDs within a lesson. Every objective/reference/asset/claim ID resolves. No empty published slides or invalid mixed-language blocks. A primary objective listing must not conflict with `objectiveIds`.
- Published EN/TH content must be complete for all meaningful text, alt text, descriptions and scenarios. `both` is derived from the pair; it is not a third independently maintained translation. Shared acronyms may use identical strings.
- Validate exact allowed origin/path prefixes/extensions against the registered catalog and asset table; reject traversal, absolute external lesson paths, query-controlled module paths, `javascript:`/`data:` code and unknown renderer/module IDs. Runtime URLs come only from allowlisted metadata. External reference links use HTTPS and safe link attributes.
- Content uses text nodes/escaped text. Sanitized, code-reviewed SVG only; no external references, script/event attributes or arbitrary fetched SVG injection. No `eval`, remote script from lesson metadata, author-provided CSS strings, or unreviewed iframe embeds.
- The schema validator proves structural compatibility and release evidence presence. It cannot prove the academic truth of a claim or that the named review actually occurred; that requires evidence review.

## 4. Interfaces and lifecycle

Proposed function signatures (JSDoc-compatible types, no TypeScript/toolchain requirement):

| Owner | Interface | Contract |
| --- | --- | --- |
| `learning-loader.js` | `loadLearningCatalog({ signal } = {}): Promise<Catalog>` | Fetch same-origin catalog, validate/cache successful data; structured error on invalid/failure. |
| `learning-loader.js` | `loadPublishedLesson(catalog, lessonId, { signal } = {}): Promise<Lesson>` | Resolve published summary only, fetch registered path, match ID/revision/review; never fall through to an exam or another lesson. |
| `learning-progress.js` | `readLessonProgress(lesson): LessonProgress`; `saveLessonProgress(lesson, progress): { persisted: boolean }` | Validate/reconcile lesson-specific progress; storage failure leaves reading usable in memory. |
| `screen-learning-center.js` | `renderLearningCenter(container, context): () => void` | Render center and return disposer. Context supplies catalog, progress summaries and navigation callbacks. |
| `screen-learning-lesson.js` | `renderLearningLesson(container, context): () => void` | Lesson overview with validated data, Start/Resume/Back callbacks; disposer. |
| `viewer.js` | `mountLearningViewer(container, { lesson, language, progress, onProgress, onBack }): ViewerHandle` | Own one lesson instance. `ViewerHandle` exposes `goToSlide(slideId)`, `setLanguage(mode)`, `destroy()`. |
| `renderers.js` | `renderSlide(host, { slide, lesson, language, mode, signal }): RendererHandle` | Registry selects trusted renderer. `mode` is presentation/reading/thumbnail. Handle provides `destroy()`. Thumbnail rendering has no handlers or interactive subtree. |
| `fullscreen.js` | `createFullscreenController(stage, { onChange, onError }): FullscreenHandle` | Handle exposes `enter()`, `exit()`, `destroy()`; observable state follows `document.fullscreenElement`. |

`context` navigation callbacks dispatch existing `renderApp` transitions, not independent app routers. Proposed state extension:

```text
state.learning = {
  domainId: number | null, objectiveId: string | null,
  lessonId: string | null, slideId: string | null
}
state.screen += 'learning-center' | 'learning-lesson' | 'learning-viewer'
```

Do not store DOM nodes, fullscreen handles or renderer instances in shared state. Keep a learning-view disposer owned by `renderer.js`, invoked before leaving/rerendering a learning screen. Async loader responses must verify current screen/selection token before mounting; cancel superseded fetches. Show loading/error/retry in the learning screen with a route back, not an exam-config error.

Slide changes are local updates: dispose prior renderer/interaction, mount the next stage and update thumbnails/progress/announcement. Do not call full `renderApp` on every slide. Preserve slide identity across language/theme/fullscreen changes. Renderer-local optional reveal state may reset on revisiting a slide unless explicitly documented; progress does not serialize interactive DOM or learner-entered sensitive data.

Every listener/timer/animation/observer/media controller belongs to a disposer or AbortController. Leaving the viewer aborts pending work, exits fullscreen when this stage owns it, pauses media, saves valid progress, removes listeners and restores focus. A delayed media event must never update a replacement view.

## 5. Resume and completion proposal

Key: **`sec_cert_learning_progress_v1`**, separate from both existing keys. No migration, clearing or writing of quiz/theme payloads. Store metadata only:

```text
LearningProgressStore = {
  schemaVersion: 1,
  lessons: { [lessonId]: LessonProgress },
  lastLessonId: string | null
}
LessonProgress = {
  lessonId: string, contentRevision: string,
  lastSlideId: string, visitedSlideIds: string[],
  status: ProgressStatus, completedAt: ISO-datetime | null,
  updatedAt: ISO-datetime, language: LanguageMode
}
```

Save when a successfully displayed slide changes, on language change and on leave/pagehide; do not rely on beforeunload alone. A thumbnail jump to the last slide marks only that slide visited, not all previous slides. Progress denominator is the current published lesson's valid slide set. First real visit means In progress. Completed requires all current slides visited plus the learner's explicit **Mark as read** action; label this as reading completion, not test mastery. Reopening a completed lesson preserves completion unless content revision changes.

Use slide IDs rather than only indices. For the same revision, ignore unknown saved IDs; fallback to first slide if last ID is missing. On changed content revision, retain only matching visited/last IDs, clear completed status/date, and show a brief updated-lesson notice. Removed/unpublished lessons offer return to center; never fetch their old path from storage. Unknown schema/corrupt data is ignored without deleting the original payload; use in-memory fallback and avoid overwriting an unreadable value until the user explicitly chooses to reset learning progress. Bound values/sizes, deduplicate IDs, and catch storage/quota errors.

The global language selection remains `state.setup.language`. A lesson's saved language is informational/resume fallback only if no current selection is active; opening a lesson must not overwrite a language the user just chose. On refresh, existing app still starts home: when the user reenters the Learning Center, offer Resume, not an automatic forced redirect. No account synchronization or offline service worker is proposed.

## 6. Layout, language and media

Use a stable logical 16:9 authoring stage (proposed 1280×720) with responsive fitting, semantic HTML and SVG. Derive available stage space from viewport after reader chrome. Baseline canvas tokens: `#FFFFFF`, `#F8FAFC`, `#2563EB`, `#1E293B`; scope these under the stage rather than changing `html[data-theme]`. Chrome uses existing theme tokens and theme-toggle. Different slides can have different palettes/layouts after contrast/readability checks.

Start with text, explanation, comparison/table and diagram layouts only as the pilot needs them. Custom renderers can place content differently using trusted scoped CSS, semantic reading order and validated data. No required layout count, illustration count, animation percentage or slide count. Do not make a generic repetitive card grid the only authoring primitive.

In `both`, pair English and Thai within conceptual blocks; use stacked or parallel text according to content density. `layoutByLanguage` may choose another registered layout without changing slide ID, meaning or references. Thai wrapping uses real text and the existing Noto Sans Thai font; do not rely on English line lengths or fixed-height clipping. If it does not fit comfortably, split the storyboard or use the companion reading view; never silently omit Thai paragraphs. EN and TH modes display one reviewed language each, retaining essential English technical terms.

Thumbnails use a noninteractive semantic miniature, static approved thumbnail or slide title fallback; no browser screenshot dependency. Generate only visible/nearby previews and lazy load imagery; prioritize current stage assets and optionally prefetch the next slide on idle. Do not mount dozens of live diagrams/canvases in the filmstrip. Cache by revision and release resources on disposal; avoid unlimited video/WebGL instances. Record asset byte sizes during production and set budgets based on actual pilot measurements, not arbitrary quotas.

| Tool/medium | Proposed use | Condition/trade-off |
| --- | --- | --- |
| HTML/CSS/JS + SVG | Default text, tables, topology/flow drawings, reveal interactions and subtle transitions. | Smallest integration footprint; semantic text and text equivalent for diagrams. |
| Photographs/illustrations | Use when they teach context or improve understanding. | Original/cleared source, meaningful alt text, correct dimensions and optimized assets. No decorative quota. |
| CSS/native animation | Short optional explanation reveals; default static reading works. | Respect reduced motion; no autoplay slide advance; pause/reset and dispose correctly. |
| GIF/video/audio | Exceptional educational need. | Avoid unpausable looping GIFs; prefer controllable video/static alternatives, poster, captions/transcript and rights review. No autoplay audio. |
| Mermaid | Later author-friendly diagrams if recurring complexity justifies it. | Optional trusted lazy adapter or reviewed pre-rendered SVG; do not execute arbitrary diagram links/HTML. Evaluate accessibility and output security first. |
| GSAP/Lottie | Later timeline or reusable animation need that native code does not serve well. | Version/license/security review, lazy load, play/pause and static/reduced-motion equivalent required. Not initial dependencies. |
| D3 | Later interactive data explanation with real pedagogic benefit. | Adds maintenance and accessibility work; simple diagrams do not justify it. |
| Three.js/3D/isometric | Static isometric art can be an ordinary image; live 3D only if essential. | GPU/mobile/context cleanup and accessible equivalent required; no pilot requirement. |

These optional technologies are evaluation candidates, not verified installed utilities or commitments. Before adopting one, verify its current primary documentation, license, pinned version and actual payload impact in the implementation task. Do not load a CDN package merely because a slide declares it.

## 7. Viewer input, focus and fullscreen specification

- Normal mode: stage landmark labeled with lesson/slide title; standard Previous/Next buttons; n/N; fullscreen action; Back to lesson contents; bottom independently horizontally scrollable filmstrip. Thumbnail buttons have unique accessible names, `aria-current` for active slide, roving focus with arrow/Home/End behavior and a full label fallback if preview cannot load.
- Keyboard navigation applies while focus is in the viewer reading surface. ArrowLeft/Right and literal `<`/`>` keys move one slide and clamp at ends. Check `event.key`; allow Shift when it produces `<` or `>`, and ignore Ctrl/Alt/Meta shortcuts, composing text, input/textarea/select/contenteditable, media controls, links/buttons, thumbnail-owning key events and interactive modules. Prevent default only when the viewer consumes the key. Do not assign global window shortcuts across the rest of the site.
- On a slide change announce a short title and n/N in a polite live region; do not announce all slide text. Preserve focus in the navigation control during normal Previous/Next/thumbnail actions. On initial entry focus a readable slide heading or stage. Keep focus styles and logical DOM order independent of visual positioning.
- Fullscreen requests target the presentation surface, not the whole app. Detect capability and await the request. Treat request rejection, permission restrictions and external/browser exit explicitly. Listen for `fullscreenchange` and `fullscreenerror`; never infer native fullscreen from a CSS class alone. See [WHATWG](https://fullscreen.spec.whatwg.org/).
- Fullscreen hides site navigation, filmstrip and persistent previous/next buttons. Focus the stage when entering and return to the invoking fullscreen button on exit if it still exists. No background/hidden controls remain tabbable. Nested interaction focus must be escapable; do not trap Tab in the presentation or prevent browser Escape.
- Half-stage pointer navigation only after a short primary click/tap without dragging, scrolling or selected text. Use event target ancestry/composed path to exclude interactive elements and `[data-slide-interactive]` regions; modules also consume their own events. Do not place invisible hit overlays above links or diagrams. Determine half from the stage bounding box, not the page viewport/letterbox. No wheel listener that advances slides.
- Interactive modules own their pointer/keyboard events while active; touching a diagram slider or playing media must not advance. Provide keyboard equivalents and a readable static explanation of every interaction's outcome. An interaction failure shows its static equivalent; unknown/invalid required renderer blocks publication and shows an error, not a misleading blank lesson.
- Escape uses native browser exit; never request keyboard lock. Exiting retains the same slide ID and current language/reveal state where possible. Unsupported/denied fullscreen stays normal with controls usable. Touch exit proposal: long-press noninteractive stage opens temporary help/Exit Presentation actions; these are also focus/keyboard discoverable. If the gesture cannot be reliable on target devices, keep those devices in normal mode until an accessible exit approach is agreed and tested.
- Reduced motion disables slide transitions and nonessential animation; static equivalents preserve information. No automatic slide advancement, flash effects or mandatory timed reading. Browser zoom remains enabled.

## 8. Failure behavior and security

Catalog failure: center error with Retry/Back; no fallback to quiz. Lesson failure: retain lesson overview/position and offer Retry/Back; unavailable lesson does not increment progress. Asset failure: meaningful text/diagram equivalent and caption, not a broken blank slide. Module load failure: use the reviewed static equivalent. Language validation failure: prevent publishing; development may expose a clearly labeled English fallback, but never advertise complete bilingual support for incomplete lessons.

Store no raw reference text, user secrets, uploaded material or full media payload in localStorage. There is no arbitrary content upload/editor in the initial feature. Use explicit trusted renderer/module maps, escaped text, validated paths and safe link handling. Audit hosting CSP/headers in implementation before introducing scripts, frames or remote media; do not assume the current static host permits or protects them. Deploy only cleared published assets.

## 9. Verification ownership

Catalog checks cover taxonomy, empty states, publication gating, bilingual fields, IDs, paths and review-revision matching. Progress checks cover corrupt/blocked storage, revision changes, missing slides and incomplete visits. Viewer checks cover lifecycle cleanup, race cancellation, clamped navigation, event ownership, failed media and fullscreen events. Future manual QA covers actual browser API behavior, touch exit, screen reader/focus, zoom, both themes and all languages at desktop/tablet/phone sizes.

Use 320/375/390/430/768/1024/1440px as a proposed layout matrix plus portrait/landscape and enlarged text; report actual tested combinations. A DOM mock cannot prove real fullscreen or Thai readability. Academic validation is a separate evidence gate, never a passing Node test. No such future behavior is claimed verified in Task 55.
