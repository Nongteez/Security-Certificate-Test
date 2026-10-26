# Lesson 3 — Non-repudiation & Trustworthy Evidence

Status: source review, full Domain 1 roadmap, six-slide production implementation and desktop verification complete on 2026-10-26; awaiting user visual/academic review. Only Lesson 3 was implemented. Existing lessons and unrelated working-tree changes remain protected.

## Selection and source evidence

The [Domain 1 roadmap](domain-1-learning-roadmap.md) records the full coverage analysis. L03 stays in official Objective **1.1**. CIA and AAA are already taught; non-repudiation is only mentioned/deferred. Privacy is a separate coherent topic. Non-repudiation comes next because identity verification and recorded account activity are prerequisites for reasoning about disputed actions and evidence.

Mandatory sources were read completely before selection: A `ISC2 Update 2026/Domain 1/D1 sum.md` (all 1,733 lines), B `ISC2 Update 2026/Domain 1/Domain 1.md` (all 405 lines). A §2 lists digital signatures under integrity; §6 supplies activity-record context. **A has no dedicated non-repudiation definition.** B §4.1 explicitly teaches evidence, digital signatures and appropriate key/evidence management; §§2.2, 4.3 distinguish integrity/accountability, §10 distinguishes hashing/encryption, §12 offers an evidence keyword. This lesson preserves those distinctions rather than attributing invented instruction to A. The older transcript/quality report's SQ-16 correctly reports a raw-lecture gap; the newly supplied B plus primary verification bridges it.

Official scope checked 2026-10-26: [ISC2 outline effective September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), §1.1. Supplemental verification: [NIST non-repudiation glossary](https://csrc.nist.gov/glossary/term/non_repudiation), [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final), introductory explanation and §3; key assurance/custody context from [SP 800-57 Part 1 Rev.5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final). These are technical support, not separate ISC2 algorithm requirements. No cryptographic implementation or jurisdiction-specific legal advice is taught.

Outcomes: explain verifiable evidence of origin/integrity; distinguish authentication/accounting/accountability/non-repudiation; describe private-key signing/public-key verification without calling it encryption; recognize alteration failure and evidence limits; identify trust/custody/time/record dependencies; apply the distinctions to a disputed order.

## Six-slide instructional and visual plan

| Slide | One primary purpose | Original composition | Source / accuracy limit |
| --- | --- | --- | --- |
| 1 · Disputed action | Explain why later evidence matters | Sender → signed order → recipient, central evidence document | B §4.1; A §2 context; evidence does not make disputes impossible |
| 2 · Different questions | Distinguish a login, an activity record and independently verifiable signature | Three open evidence ribbons with function, question and limit | A §6; B §§3.4, 4.1, 4.3; logs are supporting evidence, not automatically non-repudiation |
| 3 · Sign and verify | Explain asymmetric key roles | Two connected lanes: private signing and trusted-public-key verification | B §4.1 plus FIPS 186-5; no “encrypt with private key” shorthand |
| 4 · Changed copy | Show binding to the signed content | Original order beside a selectable original/altered received copy, carried signature, explicit verification result | B §2.2 plus FIPS; illustrative state model, not actual cryptography or attribution of an attacker |
| 5 · Evidence conditions | Recognize what a signature alone cannot establish | Four-part evidence chain: identity binding / custody / time / protected records | B §§4.1, 4.3 plus key-management reference; clock text is not a trusted timestamp |
| 6 · Reasoning case | Apply the evidence distinctions | Disputed order evidence board and three bounded conclusions | Original teaching scenario, not a real exam question; do not infer legal enforceability or delivery |

All six use complete TH/EN semantic content. English-only controls. White/navy/blue/teal/amber content-specific HTML/SVG geometry; no old CIA or AAA illustrations copied. Full explanations remain in reading/Info. No new assets, framework, schema or storage fields.

## Ordered execution and acceptance

1. Durable pre-task SHA-256 baseline at `artifacts/qa/lesson-d1-03-non-repudiation/baseline.json` (905 existing files).
2. Add failing tests for third publication, bilingual semantics, six trusted renderings/Info, altered-copy state/cleanup, three-lesson selection and independent progress. Observe failure before implementation.
3. Author `lesson-d1-03-non-repudiation.json`; append catalog summary only. Add `non-repudiation-presentations.js` and scoped CSS; integrate dispatcher and Info without changing prior lesson modules.
4. Update only test expectations tied to the exact catalog lesson set; keep failure/publication and old content hash assertions.
5. Review every slide TH/EN at 1920×1080 and 1366×768 in the normal production app. Capture screenshots/bounds, exercise altered-copy/keyboard/language, chooser, Info, reload and independent resume. No mobile/tablet QA.
6. Run focused/regression/static checks, compare baseline hashes, finish this report and tracker, and stop for user review. Content review metadata identifies Codex self-review, not independent human sign-off.

## Delivery architecture and review findings

Published stable ID `lesson-d1-03-non-repudiation`, revision 1, appended after the two unchanged catalog summaries under Domain 1 / Objective 1.1. Catalog revision is 3. The existing three-lesson chooser, direct Start/Resume, viewer shell, navigation, V1 store and availability validation are reused. The trusted composition module reads four semantic blocks per slide; full explanations stay in reading mode and **Slides 1–6 — Full explanations** in Info. No schema or storage migration.

Six original HTML/SVG compositions use scoped white/navy/blue/teal/amber CSS. All source text uses text nodes. Inline SVG is static repository geometry, not injected lesson HTML. No external assets, raster generation tools or new dependencies were used. Review corrected a potentially misleading open-padlock verification icon to a shared-public-key symbol, replaced a signature squiggle with a document/seal symbol, and explicitly distinguished cryptographic signatures from pasted/scanned handwriting in the full explanation. The retained small line on an order is only symbolic document artwork, not a real signature.

The changed-copy button is a native toggle with `aria-pressed` and an `aria-live` result; both worded result and color communicate the state. An owned AbortController cleans its listener and parent abort link. Its `altered` flag is ephemeral viewer interaction state, not persistent progress. A bounded block-shape guard falls back to complete semantic rendering if a future edit no longer matches the designed composition; a regression was observed failing before adding this guard and passing afterward. No real cryptography is run by the comparison; the limitation appears on canvas and in full details.

## Actual production browser QA

Normal application at `http://127.0.0.1:4188/`, using the existing bounded public-file preview (not a separate prototype). Path: Version Selection → Learning → Domain 1 → Objective 1.1 → **Lesson: Non-repudiation & Trustworthy Evidence** → **Start Learning →**. Runtime files in the preview are checked against workspace hashes.

All six slides were visually inspected in TH and EN at **1366×768** and **1920×1080**; 24 final screenshots were recorded after font readiness. Every case stayed in presentation mode, with matching client/scroll dimensions, no measured text outside the stage and positive content-to-footer clearance. Smallest clearance: 17.78px on the 1366 changed-copy slide. Actual stage sizes: 1187.55×668 and 1742.22×980 respectively. These are measured browser results, not extrapolated design targets. Geometry supplements the actual visual inspection.

Verified in the browser:

- Three-lesson selection launches the selected lesson directly; the selected Info modal matches it. Empty objectives remain Coming Soon.
- All slides open through the existing Slides overview. Both languages render complete educational labels; controls remain English.
- Enter switches the order copy between 10 and 20 laptops with corresponding match/mismatch wording. ArrowLeft while the toggle is focused does not navigate. Altered state remains true across TH → EN; reload restores the unchanged illustration, as expected for temporary interaction state.
- The full sign/verify explanation was opened in Info, including trusted identity binding, no private-key-encryption shortcut and the scanned-signature distinction. Automated tests verify every detailed explanation in both languages.
- Reload showed Lesson 3 at **4/6**, with 6/6 viewed and **0/3 completed**; Resume opened 4/6 directly. Visiting the lesson did not silently acknowledge completion.
- Reopening CIA still resumed **3/8**, and AAA still resumed **1/7**. Their UI/content remained functional. Node tests also compare the two saved records byte-for-byte while updating the new lesson.
- The final tab error-log query returned no entries. No mobile/tablet QA was performed.

| Slide | 1366 TH | 1366 EN | 1920 TH | 1920 EN |
| --- | --- | --- | --- | --- |
| 1 · Disputed action | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-slide-01.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-en-slide-01.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-th-slide-01.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-en-slide-01.jpg) |
| 2 · Evidence distinctions | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-slide-02.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-en-slide-02.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-th-slide-02.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-en-slide-02.jpg) |
| 3 · Sign / verify | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-slide-03.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-en-slide-03.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-th-slide-03.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-en-slide-03.jpg) |
| 4 · Changed copy | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-slide-04.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-en-slide-04.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-th-slide-04.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-en-slide-04.jpg) |
| 5 · Evidence conditions | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-slide-05.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-en-slide-05.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-th-slide-05.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-en-slide-05.jpg) |
| 6 · Applied reasoning | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-slide-06.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-en-slide-06.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-th-slide-06.jpg) | [Image](../../../artifacts/qa/lesson-d1-03-non-repudiation/1920-en-slide-06.jpg) |

Supporting captures: [unchanged copy](../../../artifacts/qa/lesson-d1-03-non-repudiation/1366-th-unchanged-copy.jpg), [Info](../../../artifacts/qa/lesson-d1-03-non-repudiation/lesson-info-en.jpg), [reload](../../../artifacts/qa/lesson-d1-03-non-repudiation/progress-after-reload.jpg), [CIA resume](../../../artifacts/qa/lesson-d1-03-non-repudiation/cia-progress-preserved.jpg), [AAA resume](../../../artifacts/qa/lesson-d1-03-non-repudiation/aaa-progress-preserved.jpg), [three-lesson chooser](../../../artifacts/qa/lesson-d1-03-non-repudiation/three-lesson-selector.jpg). [Geometry](../../../artifacts/qa/lesson-d1-03-non-repudiation/browser-measurements.json) records all 24 cases.

## Verification

**123/123 tests passed**, including five new lesson tests and existing CIA, AAA, publication, course/progress, routes, viewer, stage, language, layout, engine and session checks:

```powershell
node --test tools/verify-learning-non-repudiation.mjs tools/verify-learning-aaa-mfa.mjs tools/verify-learning-catalog.mjs tools/verify-learning-course.mjs tools/verify-learning-progress.mjs tools/verify-learning-integration.mjs tools/verify-learning-phase2.mjs tools/verify-learning-viewer.mjs tools/verify-learning-v3-stage.mjs tools/verify-learning-v3-viewer.mjs tools/verify-learning-visuals.mjs tools/verify-learning-editorial-intro.mjs tools/verify-learning-cia-presentations.mjs tools/verify-ui-language-boundary.mjs tools/verify-version-selection-layout.mjs tools/verify-phase4-quiz-engine.mjs tools/verify-session-persistence.mjs
```

The new tests were observed failing before the lesson existed. They cover publication, paired/source completeness, distinct compositions, full reading/Info, interaction cleanup/language state, three-lesson launch and independent progress, plus semantic fallback on an incompatible edit. Two older test expectations were adjusted for the third catalog entry while retaining the first two IDs, their order and all original content assertions. No renderer behavior, progress behavior or expected content hashes for older lessons were changed. The previously corrected retired EN+TH expectation remains passing. Engine internal checks are 7/7 and session checks 8/8, including the protected 583 questions and domain counts 142/65/93/156/127.

The durable [905-file baseline](../../../artifacts/qa/lesson-d1-03-non-repudiation/baseline.json) captures the pre-existing dirty working tree, not merely HEAD. Final comparison is saved as [integrity-check.json](../../../artifacts/qa/lesson-d1-03-non-repudiation/integrity-check.json). Prior lesson JSON/modules/styles/artwork, source notes, viewer/controller/progress code, Quiz and Vocabulary are unchanged against that baseline. Existing lesson IDs/order, earlier catalog summaries and saved-progress schema are preserved. No files were deleted, reset, reverted or cleaned.

## Exact implementation file scope

Created:

- `docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md`
- `docs/plans/isc2-cc-2026/lesson-d1-03-non-repudiation-implementation.md`
- `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`
- `js/ui/learning/non-repudiation-presentations.js`
- `css/learning-non-repudiation.css`
- `tools/verify-learning-non-repudiation.mjs`

Modified:

- `content/isc2-cc-2026/learning/published/catalog.json`
- `index.html`
- `js/ui/learning/renderers.js`
- `js/ui/learning/lesson-info.js`
- `tools/verify-learning-catalog.mjs`
- `tools/verify-learning-aaa-mfa.mjs`
- `docs/plans/task.md`

QA evidence: 24 slide JPGs, six supporting JPGs, `baseline.json`, `browser-measurements.json`, `integrity-check.json` under `artifacts/qa/lesson-d1-03-non-repudiation/`. Only public runtime copies were synchronized to the ignored bounded preview.

## Limits and remaining Domain 1 work

User visual/academic acceptance and an independent bilingual subject-matter review remain pending. Review metadata explicitly identifies Codex self-review. No fresh native OS fullscreen, other-browser, screen-reader or enlarged-text/zoom visual claim is made; existing Node fullscreen/state tests pass. Mobile/tablet QA was outside scope. The changed-copy comparison is explanatory, not a cryptographic tool or legal test.

Privacy is the remaining dedicated Objective 1.1 lesson. All planned 1.2–1.5 lessons remain unimplemented; AI applications lacking note coverage require sourced enrichment at future authoring. Zero Trust/Defense in Depth stays in 4.2. The roadmap does not authorize further implementation. **Stop after Lesson 3 for user review; no Lesson 4 or Domain 2 work.**
