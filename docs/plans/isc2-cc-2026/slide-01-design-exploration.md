# Slide 1 — Professional Presentation Design Exploration

**Date:** 2026-10-25 · **Status:** Three isolated concepts ready for user evaluation. Phase 3 remains incomplete. No direction selected or approved; no production integration.

## Starting point and instructional decision

Inspected the current V3 specification, V2 specification, task tracker, published lesson JSON, `renderers.js`, `visual-components.js`, `viewer.js` and presentation styles. The working tree includes later Phase 2 corrections and rejected content experiments; these are the starting state, not changes made by this exploration.

The source is `lesson-d1-01-cia-triad`, revision `1`, `slide-01-orientation`. Current lesson SHA-256: `034d8ae332ddcb5b3669823f50bca6e8f9122926f2f698a331db50b385cd9a55`. A frozen, exact Slide 1 and reference snapshot is in `design-previews/cia-slide-01-exploration/source-context.json`.

The rejected design combines a source heading with another mission headline, long prose, a principle card and an emblem card. Code confirms the diagram is capped at 320×220px, its English node labels use 8px SVG type, and `.hero-pill-label` uses 11px type plus hidden overflow, nowrap and ellipsis. These constraints explain the readability and hierarchy complaints. Centered columns, repeated bordered panels and separately constrained artwork weaken the intended use of the canvas. This is code inspection plus the user's stated rejection, not a new visual audit of production.

**Single learning message:** protecting important information helps the organization achieve its mission; Confidentiality, Integrity and Availability express three goals for that protection.

After this introduction, learners should recognize the three English terms, distinguish their basic meanings, and connect them to the purpose of security. This slide introduces the goals; later slides own detailed violations, safeguards and incident analysis. The visual must not imply a C→I→A sequence or that one tool guarantees all three.

Keep a concise Thai teaching statement and English technical names on the canvas. Keep the full mission paragraph, definitions and control principle accessible as complete source text below the comparison, in both Thai and English. The preview also supplies semantic image descriptions. Canvas summaries and B's opening question are proposed editorial copy; they do not acquire academic approval from the source's review metadata.

## Three deliberately different directions

| Concept | Composition and rationale | Strength | Tradeoff / further evaluation |
| --- | --- | --- | --- |
| **A — Premium educational infographic** | Warm ivory, teal/brown/green, a prominent equal-vertex triangle around a shared information asset. Full term labels sit outside the geometry; lines have no arrows. One mission headline and a final control-to-goals statement. | Most explicit introductory concept map; definitions and equal goals are easy to scan. | Abstract rather than situational. The diagram should support the introduction without duplicating the next slide's more detailed teaching. |
| **B — Editorial visual storytelling** | Navy/cream/ochre, a large hypothetical business question, an original document illustration, and a flat typographic CIA strip with rules instead of cards. | Strongest opening narrative: learners encounter business consequences before vocabulary. Large type and a concrete information asset establish a presentation character. | The document is illustrative, not a complete enterprise model. Short labels omit detailed qualifiers from the canvas; complete source text remains directly available. |
| **C — Creative cybersecurity presentation** | Deep indigo with cyan/lavender/lime accents. An original isometric illustration connects an authorized user, information store and business service. CIA labels surround the context, rather than forming a timeline. | Makes information-in-use tangible and gives a distinct technical identity. Substantial artwork carries the center of the canvas. | More visually complex. It must be introduced as a conceptual service example, not a prescribed network, security guarantee or sequence. |

All three use one 1600×900 SVG canvas, large 61–65px teaching headlines, 31–38px English terms and roughly 25–31px explanatory type at the authored size. Small section/source context is secondary. Artwork, leader lines, fills and text are original SVG; no dashboard template or production component was reused. Essential learning text has no ellipsis, line clamp or cropped container.

**Recommendation for evaluation:** begin with B as a mission-oriented lesson opener; compare A for the clearest CIA relationship and C for a more technical visual identity. This is a recommendation to evaluate, not a selected design or user approval. Do not merge the three into another overloaded slide by default.

## Isolation, technology and assets

Standalone HTML/CSS, native browser JavaScript and original SVG. No runtime dependency, framework, installation, remote script, downloaded image, font download, stock asset or AI-generated image. No third-party visual license or attribution obligation is introduced; repository ownership/licensing continues to apply. System Thai font fallbacks are declared, so font rendering can vary by machine.

The preview imports no production modules or styles and uses no progress, storage, routing, fullscreen or theme APIs. Complete source text is rendered with `textContent`. It is a frozen snapshot so serving this folder does not require access to production content paths. Nothing in production links to the preview.

The local server binds `127.0.0.1:4186` and serves seven explicitly allowed preview assets from its own directory. It cannot serve the app, lesson catalog or repository root. Start it from the project root:

```powershell
node design-previews/cia-slide-01-exploration/serve.mjs
```

Open <http://127.0.0.1:4186/>. Compare via the concept links; `Focus A`, `Focus B`, `Focus C` open proportionally fitted presentation views. Browser Back returns to comparison. Direct focus paths: `/?view=a`, `/?view=b`, `/?view=c`. The full explanation and sources are below the three concepts on the comparison page.

## Actual review and verification

Rendered all three focus views in the ChatGPT in-app browser at its default **1280×720** desktop viewport. Captured and inspected each actual rendering. The authored canvas remains 1600×900; do not confuse it with the screenshot viewport. Observed readable Thai/English labels, balanced compositions, undistorted graphics, and no visible text clipping or unintended text/diagram collision in these three captures. B uses intentional editorial negative space; A/C distribute the teaching relationships across the stage. This is author inspection, not user visual acceptance or a claim of testing other viewports.

Actual screenshot files:

- `design-previews/cia-slide-01-exploration/screenshots/concept-a.jpg`
- `design-previews/cia-slide-01-exploration/screenshots/concept-b.jpg`
- `design-previews/cia-slide-01-exploration/screenshots/concept-c.jpg`

The comparison page loaded the complete Thai explanation. Expanded the English disclosure and confirmed its full paragraph, three definitions and control principle in the browser accessibility tree. Image alternatives describe the core visual relationships. No screen-reader application test or phone review was performed.

Verification performed:

- `node --check design-previews/cia-slide-01-exploration/preview.js` and `node --check design-previews/cia-slide-01-exploration/serve.mjs`: passed.
- Parsed all three SVG files using PowerShell `[xml]` and checked `viewBox="0 0 1600 900"`: passed.
- Node assertions: exact current source SHA-256, deep equality of source Slide 1 and its referenced records, three actual 1280×720 JPEG captures, no app imports/storage/fullscreen calls in preview code: passed. The first screenshot-format check assumed PNG; browser captures were JPEG bytes, so corrected the file extensions and verified JPEG dimensions. No image conversion or fabricated screenshot was used.
- Read-only HTTP checks: all seven allowed preview assets returned 200; production `js/app.js` and published catalog paths returned 404. Initial sandbox-local connectivity failed; running the same loopback-only preview server outside the sandbox allowed the browser and HTTP checks to connect. No network/security settings were changed.
- `node --test tools/verify-learning-catalog.mjs tools/verify-learning-progress.mjs`: **13 passed, 0 failed**. These confirm existing validation/progress contracts, not visual quality.
- `git diff --check -- docs/plans/task.md`: reports an existing extra blank line at EOF (exit 1). The initial document read already ended in two line breaks; preserved this unrelated whitespace rather than silently cleaning it up. JavaScript syntax checks passed independently.
- Fresh SHA-256 inventory of **697 existing files**, excluding the transient Chrome profile: all pre-existing files except the explicitly updated task tracker remained byte-identical. This includes the production viewer, current lesson JSON, slide content, catalog, navigation, shared controls, Quiz and Vocabulary files. Existing uncommitted work was preserved. Historical browser/test claims elsewhere in the tracker were not rerun or reclassified as this exploration's evidence.

## Exact delivery files

Created under `design-previews/cia-slide-01-exploration/`:

1. `index.html`
2. `preview.css`
3. `preview.js`
4. `concept-a.svg`
5. `concept-b.svg`
6. `concept-c.svg`
7. `source-context.json`
8. `serve.mjs`
9. `README.md`
10. `screenshots/concept-a.jpg`
11. `screenshots/concept-b.jpg`
12. `screenshots/concept-c.jpg`

Also created this report, `docs/plans/isc2-cc-2026/slide-01-design-exploration.md`. Modified only `docs/plans/task.md` among pre-existing files, to record the rejection/reset and pending approval accurately.

## Limits and stop condition

These are static Thai-first desktop visual studies. English/bilingual canvas layouts, responsive production adaptations, interactive variants and integration with existing Text View/Info require a later explicit decision. On phones the comparison canvas scales as artwork; the full explanation stays readable HTML. It is not a finished mobile teaching layout. Font substitution, enlarged text and assistive-technology behavior need further evaluation before production integration.

The source snapshot must be refreshed deliberately if source content changes. Preserve the source's exact qualifications and review proposed short copy before integration. User approval of one visual direction is still required. No production replacement, Slide 2/6 work, viewer-shell changes or curriculum migration was performed. **Stop here; Phase 3 is not complete.**
