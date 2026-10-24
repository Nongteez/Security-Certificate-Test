# Learning Slides schema 1 — implemented foundation

The authoritative executable validators are `js/core/learning-schema.js`. This is a static JSON contract, not an editor or executable lesson format. No lesson is published in Task 56.

## Catalog

`published/catalog.json` contains `schemaVersion: 1`, `certificationId: isc2-cc`, `outlineId: isc2-cc-2026-09-01`, `revision`, and five `domains`. Domain records have `id`, paired `name`, `status` and `objectives`. Objective IDs are 1.1–1.5, 2.1–2.4, 3.1–3.2, 4.1–4.3, 5.1–5.5. Every objective has paired `title`, `status`, `lessons: []`, and `relatedLessonIds: []`.

Publication states are `coming-soon`, `in-preparation`, `published`. The initial catalog has no lesson records; D4–5 contain scope metadata only. Never invent a lesson solely to fill an objective.

A lesson summary has `id`, `domainId`, `primaryObjectiveId`, `objectiveIds`, paired `title`/`synopsis`, `status`, `revision`, and `lessonPath`. Only the home objective owns its full summary; secondary objectives in the same Domain use `relatedLessonIds`. Lesson IDs are globally unique, slugs are lowercase words/numbers separated by hyphens. Published paths must be `lessons/<slug>.json`; unpublished summaries must not have an executable path. A lesson belongs to one Domain, may cover several of its objectives, and contributes once to progress/counts.

## Lesson

- Required identity: `schemaVersion`, `id`, `outlineId`, `domainId`, `primaryObjectiveId`, `objectiveIds`, `revision`, `status`.
- Paired learning metadata: `title`, `synopsis`, `outcomes[]`, `prerequisites[]`. Each pair is `{en: nonempty string, th: nonempty string}`. EN+TH is derived from the pair.
- `slides[]` is the default order. Optional `slideOrder[]` must be a permutation of all slide IDs exactly once. IDs are stable across language modes and revisions when the underlying unit remains the same.
- `references[]`: unique `id`, `title`, `authority` (`official-scope`, `technical-primary`, `course`, `editorial`), `locator`, and HTTPS `url` or `repositoryPath`. Repository references are shown as text; only HTTPS sources become links in the overview. Keep publisher/edition/verification date and claim mappings in the accompanying review evidence; software checks do not authenticate the source.
- `assets[]`: unique `id`, allowed local `path`, `type`, paired `alt`, `creator`, `license`, `rightsEvidencePath`. Current file paths are restricted to `assets/learning/isc2-cc-2026/<lesson-slug>/<filename>` and supported extensions. External hotlinks, path traversal, encoded paths, SVG files and executable URLs are rejected. SVG diagrams are constructed by trusted renderer code instead of injected from JSON.
- Implemented media adapters: ordinary local images and native audio/video controls; audio/video require paired `transcript`. Source permissions and suitability still require editorial review. Do not use animated GIFs without a reviewed, controllable/static extension; no GIF fixture ships in this task.
- `review.reviewedRevision` must match the content revision. `review.evidencePath` identifies the external claim/review record. `review.technical`, `review.bilingual`, `review.rights` each require `status: approved`, reviewer identity and `reviewedAt` ISO date for publication. This checks presence, not whether approval truly occurred.

## Slide and semantic blocks

Every slide has a unique `id`, paired `title`, registered `rendererId`, `layoutId`, `blocks[]`, `referenceIds[]`, and `review: {status, reviewedRevision}`. A published slide's review is approved at the current lesson revision, and its references resolve. Optional `thumbnailAssetId` must resolve. `layoutId` records the author's layout choice; built-ins currently style semantic content without evaluating layout strings. Custom adapters may interpret their own validated layout data.

Built-in renderers: `text`, `comparison`, `diagram`, `interactive`. They share semantic blocks, so one lesson can mix layouts and reflow without maintaining another copy of academic text:

| Block | Fields |
| --- | --- |
| `text` | Paired `text` |
| `list` | Nonempty paired `items[]` |
| `table` | Paired `caption`, paired `columns[]`, rectangular paired `rows[][]` |
| `diagram` | Paired `description`, paired ordered `steps[]`; trusted SVG plus a semantic list |
| `reveal` | Paired `label` and `text`; accessible native details/summary, expanded in reading mode |
| `media` | `assetId` resolving into lesson assets |

Future repository code can call `registerLearningRenderer(id, {validate, load, thumbnail})`. `validate(slide)` is registered with the schema; `load()` lazily resolves a module whose synchronous `render(host, context)` returns an optional `{destroy()}`. `context` contains lesson/slide/language/mode/AbortSignal. The adapter must preserve a semantic block fallback, honor reduced motion, own its listeners/timers/media and free them on abort/destroy. `thumbnail(host, context)` must be cheap, noninteractive and recognizable. JSON never specifies import URLs, arbitrary HTML, CSS or executable JavaScript.

## Validation and public loading

Validators return `{valid, errors, warnings}`. Incomplete draft explanation/translation/review fields are warnings; the same omissions block published content. Invalid identity, unsafe paths, broken references, unknown renderers and malformed structure are errors even in drafts. The public loader only resolves published summaries, validates the fetched lesson and requires matching identity, Domain/objective relation and revision. No draft/fixture/preview parameter bypass exists.

The card requires at least one successfully loaded published reviewed lesson. The center checks lesson availability on Domain expansion and does not offer a link until its lesson passes loading/validation. No hardcoded lesson counts or completion percentages are displayed for empty Domains.

Structural checks do not replace academic, bilingual, media-rights or visual QA. Before publication, review the exact revision and validate all referenced files exist; use the fixture preview tool's public-file checks or `tools/verify-learning-catalog.mjs` plus the release checklist in `docs/learning-slides.md`.
