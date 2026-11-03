# Phase 3B.1 — Semantic content hierarchy and reading comfort pilot

**Phase 3B.1 Implemented — Pending Human Visual Acceptance**

Date: 2026-11-01. Repository: `D:\_Coding\SEC-CERT-TEST`. Baseline HEAD: `25a896a23fabbc6e3bc7401babcbf25fa4894ccc`. Human acceptance remains pending. Phase 3B.2 has not started.

## Actual implementation and root causes

Only Domain 4 subsections 4.1.1 and 4.1.2 were restructured. The defects originated in source semantics: concept-group labels were paragraphs, definitions formed continuous bullet lists, and OSI titles were ordered-list items containing a second, conflicting layer number. Existing nested-list typography made OSI details smaller. The existing Markdown parser correctly renders the replacements; no shared renderer change was needed.

| Pilot | Before | Implemented result |
|---|---|---|
| 4.1.1 | Three plain labels and ten inline term/definition bullets | Three h4 concept groups; ten h5 term headings, each paired with its complete paragraph in a section |
| 4.1.2 | Ordered list displayed `1. Layer 7`, `2. Layer 6`, etc. | Seven h4 layer headings, ordered 7→1, each followed by its original supporting unordered list |
| Encapsulation/Decapsulation | Plain paragraph label | h4 group heading; both original explanatory bullets retained |
| Rhythm | Closely packed flow and smaller nested details | Scoped heading/detail proximity with larger gaps between independent reading units |

Each pilot has a `reading-structure-pilot` section wrapper. Original h3 IDs and objective hierarchy remain; no navigation entries or landmark roles were added. Ordinary Markdown prose remains outside raw paragraph HTML so bold terminology renders correctly. No decorative cards, backgrounds or borders were added.

## Scoped CSS and spacing rationale

The appended CSS block starts at `css/reading.css:3657`. Every selector begins `.reading-body .reading-structure-pilot`. Original CSS bytes remain an exact prefix; global tokens are unchanged.

| Relationship | Rule / actual result |
|---|---|
| Major subsection | 40px outer block margin |
| h3 → introductory body | 16px margin; h3 19px / 1.5 |
| Concept group | 32px before / 12px after; h4 17px / 1.55 |
| Definition heading → explanation | Actual gap 8px; h5 16px / 1.55 |
| Independent definitions | Actual gap 24px within a group |
| OSI heading → details | Actual gap 8px; heading 17px / 1.55 |
| Independent OSI layers | Actual gap 32px |
| Paragraphs | 16px separation; text 16px / 1.8 |
| Supporting list items | 8px separation; text 16px / 1.8 |
| Nested lists | 6px outer spacing |
| Existing example-box components, if present inside a pilot | 16px margin |
| Existing exam-tip/trap components, if present inside a pilot | 24px margin |

There are no example-box, exam-tip/trap components or remaining nested lists in these two subsections. Their conditional rules are not claimed as visually exercised instances; no lesson material was fabricated. The extra heading lines and spacing increase page height, especially on phones, while retaining every explanation.

## Content-preservation verification

Exact originals: `pilot-before.md`, `baseline-runtime.json` and `tools/fixtures/reading-structure-pilot-content.json`. Results: `pilot-after.md`, `semantic-before.html`, `semantic-after.html`.

The focused tests parse both originals and replacements, remove HTML markup/entity serialization and normalize whitespace. **Complete visible educational text is equal in order for each subsection.** Generated list ordinals disappear; actual OSI layer numbers remain. No wording was replaced, shortened or removed.

Checks retain ten definitions, seven PDU entries, bilingual layer names, protocols, numerical values and the full corrected subnet-mask explanation (`192.168.1.0/24`, `192.168.1.255`, `FF:FF:FF:FF:FF:FF`). The sockets/API qualification remains. The mnemonic is unchanged: `Please Do Not Throw Sausage Pizza Away (Layer 1 → Layer 7)`. Both encapsulation explanations remain, without a new mandatory packet-processing interpretation.

The source prefix before the first pilot matches the original prefix before its h3 byte-for-byte. From the 4.1.3 TCP/IP h3 to EOF, all bytes match. All 24 topic h3 anchors and original objective anchors remain.

## Real Chrome evidence and matrix

Isolated real headless Chrome rendered the local application through CDP. Exact browser versions are in the browser JSON. Baseline mode serves frozen original D4 source/CSS without rewriting production files. Each phase captures six viewport screenshots per context: Network introduction, Collision/Broadcast group, OSI introduction, Layer 7, Layer 3 and the adjacent TCP/IP subsection.

| Viewport | Light before/after | Dark before/after |
|---|---|---|
| 1920×1080 | Pass | Pass |
| 1366×768 | Pass | Pass |
| 1024×768 | Pass | Pass |
| 768×1024 | Pass | Pass |
| 390×844 | Pass | Pass |
| 375×812 | Pass | Pass |
| 320×568 | Pass | Pass |

Saved: **84 before + 84 after screenshots**, plus 14 paired comparison sheets. All 14 collision/layer comparison sheets were visually reviewed, with full-resolution representative desktop/mobile screenshots, lower OSI layers and neighboring content inspected separately. These are scroll-position viewport captures: continuation beyond a viewport edge is expected.

`after-browser.json`: **148/148 checks pass**, zero console/runtime/log errors. `layout-verification.json`: **42/42 derived geometry/hierarchy checks pass**. The checks cover native headings, 7→1 order, ten definition units, absence of ordered OSI lists, actual text-bearing paragraphs/list items at 16px, no raw Markdown, no new horizontal clipping/overflow, no heading/detail overlap, and larger between-unit gaps.

Actual scrollY restoration after reload passes in all 14 contexts within 8px. In all eight mobile/tablet contexts, closed navigation is inert and Escape closes the drawer and returns focus to its toggle. Existing persistence/navigation tests further exercise unchanged Phase 2 logic and legacy progress compatibility.

The adjacent TCP/IP heading and introduction retain identical text, dimensions, typography and margins in every context. Their absolute document Y positions change because preceding content becomes taller. Neighbor screenshots show the existing diagram presentation. All other subsections' source and all original CSS remain exact.

The initial after run produced 14 font-measurement failures: the probe read UL's inherited 15.5px rather than the LI text's actual 16px. It now measures text-bearing items. Original output remains in `first-after-browser.json` / `first-browser-after.log`; the final rerun has zero failures. No production change was made for that measurement correction. An initial sandbox-localhost restriction was resolved using the required access for the isolated Chrome process.

## Automated regressions

| Suite | Result |
|---|---|
| New semantic/preservation contracts | 13/13; baseline red: 8 fail / 5 pass, then green |
| Phase 3A.2 critical readability | 13/13 |
| Persistence / navigation | 20/20, 15/15 |
| Foundation | 9/9 |
| Domains 1 / 2 / 3 / 4 | 10/10, 9/9, 10/10, 10/10 |
| DOM integrity | 36/36 |
| Academic Batch A / B | 23/23, 33/33 |
| Targeted total | **201/201 pass** |
| Historical Domain 1 presentation | **366/370**, same four failures against frozen baseline |

`regression-results.json` records commands and exit codes; each suite has a complete log. The four historical failures concern Defense-in-Depth Layer 4, Layer 6, Layer 7 labels and complementary/non-chronological wording. `baseline-presentation.txt` reproduces the same four via a read-only filesystem hook. Existing tests and diagram code were not changed. Including that suite: **567 passes / 4 pre-existing failures**, no new failures.

Reproduce focused suite: `node tools/verify-reading-structure-pilot.mjs`. Browser: `node artifacts/qa/reading-notes-phase3b1/browser-qa.mjs --baseline`, then the same command without `--baseline`. Requires isolated Chrome/local debugging access; ports 5317/9377 and its own temporary profile.

## Exact changed-file manifest

Paths below are relative to repository root. `changed-file-manifest.json` lists exact paths/hashes. `evidence-manifest.json` inventories individual QA artifacts, including screenshots and logs.

| Path | This task's change |
|---|---|
| `content/isc2-cc-2026/reading/domain-4.md` | Semantic markup only in 4.1.1 / 4.1.2, current lines 9–176 |
| `css/reading.css` | One appended scoped block |
| `tools/verify-reading-structure-pilot.mjs` | New 13-test suite |
| `tools/fixtures/reading-structure-pilot-content.json` | New complete original-text fixture |
| `docs/plans/task.md` | Append/update P3B1 row only |
| `docs/plans/isc2-cc-2026/reading-notes-phase3b1-semantic-structure-pilot.md` | This report |
| `artifacts/qa/reading-notes-phase3b1/` | Baseline, plan, harness, screenshots, snapshots, logs and verification manifests |

## Concurrent-work and protected-scope checks

The initial tree was already dirty: Domain 1, diagram-generator.js, DOM-integrity test and task tracker contained Phase 3A.2 work. Prior 3A.1/3A.2 reports/evidence and the critical-readability test were untracked. They remain preserved.

Baseline: 23,265 files. Only three existing files differ: D4 Reading Notes, reading.css and task tracker. **23,262 other baseline files remain byte-identical; none is missing.** The tracker retains its complete pre-task byte prefix. See `preservation.json` for boundary, hash and baseline checks.

This protects the eight original course-note files, Domains 1–3, other D4 subsections, Domain 5, Learning Slides, questions, quiz/exam engine, vocabulary, progress schema/navigation, academic corrections and critical-readability fixes. No renderer, JavaScript, global token, diagram or existing test was modified by this task. No Git stage, commit, push, reset, revert or clean operation was performed.

## Remaining issues and next-phase recommendation

No new pilot defect was found in tested states. Human visual acceptance is outstanding. Chrome emulation does not substitute for physical-device or assistive-technology testing.

The existing floating scroll-to-top control can briefly cover a small lower-right text area at some narrow-screen scroll positions; before screenshots show the same behavior. This shared-overlay concern remains outside this semantic pilot. The four historical Domain 1 failures remain unresolved. Other deferred presentation/diagram concerns are unchanged.

Phase 3B.2 is ready for **scope/design review after human acceptance of this pilot**, not automatic implementation. Apply native h3→h4→h5 structures only where source content genuinely contains groups and definitions. Work in small subsection batches; compare complete text/IDs and neighboring styles, then repeat seven-viewport/two-theme QA. Do not apply the wrapper globally before review.
