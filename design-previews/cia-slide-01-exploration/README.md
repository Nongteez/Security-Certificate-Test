# CIA Slide 1 — isolated design exploration

From `D:\_Coding\SEC-CERT-TEST`, run:

```powershell
node design-previews/cia-slide-01-exploration/serve.mjs
```

Open <http://127.0.0.1:4186/> to compare A/B/C. Each Focus link shows a single 1600×900 SVG canvas fitted proportionally to the browser viewport. Use browser Back to return to comparison. Direct focus URLs: `/?view=a`, `/?view=b`, `/?view=c`.

Thai-first concepts only. English terms accompany Thai explanations; the complete current Slide 1 explanation in both languages appears below the comparison. Source text is a frozen snapshot in `source-context.json`, with the current lesson's SHA-256. Canvas summaries are experimental editorial wording, not replacements for reviewed lesson copy. No new academic approval or official endorsement is asserted.

All illustrations are original SVG artwork created for this exploration. No third-party visual assets, downloaded fonts, AI-generated images, runtime libraries or package installation. System Thai fonts are used. The local server binds loopback and serves only seven explicitly allowed preview assets; production app files are inaccessible through it. No app CSS/scripts, storage keys or route modules are imported.

Actual browser screenshots at 1280×720 are saved in `screenshots/concept-a.jpg`, `screenshots/concept-b.jpg` and `screenshots/concept-c.jpg`. They were inspected for desktop readability and visible clipping; this is an author review, not user approval. Original vector canvases are 1600×900 and remain editable.

The 16:9 compositions are desktop design studies. They scale proportionally in this comparison page; production responsive/English/bilingual adaptations are future work requiring selection and approval. The full explanation remains readable HTML on small screens.

This folder is removable as a unit. Nothing in production points to it. Stop after design comparison; do not integrate or redesign other slides.
