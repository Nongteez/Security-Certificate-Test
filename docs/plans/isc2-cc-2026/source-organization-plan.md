# ISC2 CC 2026 Source Organization Implementation Plan

**Prepared:** 2026-10-18 (Asia/Bangkok), before copying source files.

**Goal:** Preserve and organize the supplied learning references for future Domain 1–5 authoring. No questions or knowledge explanations are authored in this task.

**Architecture:** Add `content/isc2-cc-2026/sources/` alongside the existing `knowledge/`, `questions/`, and `templates/` staging areas. Use the existing lowercase, hyphenated `domain-1` through `domain-5` naming for new folders; preserve all supplied filenames verbatim. Execution is sequential in the existing checkout so untracked source materials and unrelated changes remain in place.

**Tools:** PowerShell, .NET file operations and SHA-256; PNG decoding and visual inspection. This is a local source intake, with no application integration or external publication.

## Inspection findings

- Root `README.md` describes a bilingual certification practice web application. Runtime HTML, CSS, and JavaScript live at the root, `css/`, and `js/`.
- Active runtime configuration and five ESM domain banks live under `data/certs/isc2/cc/versions/2026/`; the registry calls that existing bank Pre-2026. The `next-bank` registry entry is coming soon with null source references.
- `assets/questions/` contains unrelated JSON question collections; `original/` and the root legacy HTML preserve earlier application/source artifacts. These are not destinations for this instructional intake.
- `content/isc2-cc-2026/` already contains domain Markdown knowledge/question staging, templates, and a README separating staging from production. `docs/plans/isc2-cc-2026/` documents intake, provenance, domain mapping, and future authoring.
- Existing intake examples suggest `assets/staging/incoming/`, but that is not an established source directory here. A source subdirectory within the existing certification staging tree keeps the raw reference/derived content boundary explicit. A separate `content/sources/isc2-cc-2026/` would unnecessarily split this certification's staging workspace.
- Incoming tree: `ISC2 Update 2026/Domain 1/` only; 61 files totaling 23,436,827 bytes: one TXT transcript and 60 PNG captures. No hidden files, additional domain folders, notes, native presentation decks, or PDFs were found. No reparse points were found.
- Transcript: 98 overlapping timestamp blocks, from `00:00:00 - 00:01:19` to `01:09:27 - 01:11:04`; English lecture transcription, including course/exam introduction and Domain 1 objectives 1.1–1.5.
- All 60 PNGs decode; all were inspected visually through contact sheets. Capture timestamps run from 2026-09-19 21:29:49 through 2026-09-20 00:33:25 (timezone unknown). Two tiny captures have no readable slide content. Cropped/overlapping versions are retained independently.
- Existing tracked modifications and untracked files include application code, assets, documentation, and authoring scaffolding. Their byte hashes were captured before repository writes. The unrelated, already-modified `docs/plans/task.md` is preserved; this plan tracks this task separately.

## Destination hierarchy

```text
content/isc2-cc-2026/sources/
  README.md
  source-manifest.json
  file-inventory.md
  preparation-baseline.json
  preparation-report.md
  verify-sources.ps1
  domain-1/
    README.md
    transcripts/Script - DOMAIN 1.txt
    slides/Screenshot YYYY-MM-DD HHMMSS.png  (all 60 original names)
    notes/inspection-notes.md               (new intake observations only)
    extracted-knowledge/.gitkeep            (no extracted entries yet)
  domain-2/ through domain-5/
    README.md                              (awaiting materials)
    transcripts/.gitkeep
    slides/.gitkeep
    notes/.gitkeep
    extracted-knowledge/.gitkeep
```

`.gitkeep` files retain otherwise empty directories in Git; they are not learning materials. The manifest inventories original input files, not these generated management documents.

## Ordered migration steps and verification

- [x] Inspect architecture, naming, existing authoring templates, question format/configuration, working-tree state, all incoming paths, transcript content, and every PNG.
- [x] Record the proposed hierarchy, classification, risks, and safeguards before copying.
- [x] Preflight that the complete destination root is absent; refuse existing paths or unexpected input files. Freeze all 61 source path/size/hash records against the preparation baseline.
- [x] Create the source-only hierarchy and copy via exclusive-create file operations. Copy the TXT to `domain-1/transcripts/` and all PNGs to `domain-1/slides/`. Never rename, rewrite, recompress, deduplicate, or delete originals.
- [x] Immediately compare every copied file's size and SHA-256 with its source and baseline. Abort on a discrepancy; keep originals and any partial copies for inspection.
- [x] Write the README, manifest, human inventory, inspection notes, domain availability records, baseline, report, and read-only verification command. Record timestamp capture sequence 1–60, while leaving actual lecture slide numbers unknown.
- [x] Run verification for all copies, all originals, file coverage/order, empty Domain 2–5 source folders, and every pre-existing repository file. Confirm that only this new source directory and this new plan were added.
- [x] Report outcomes and unresolved items; stop. Do not author questions or change knowledge staging, question schemas, runtime banks, exam configuration, UI, or production behavior.

## Risks and safeguards

| Risk | Safeguard / remaining action |
| --- | --- |
| Accidental overwrite or source loss | Destination must be absent; exclusive-create copying/writes; SHA-256 verification; no move/delete commands; original directory retained indefinitely pending explicit approval. |
| Existing unrelated edits lost | Hash all 258 pre-existing non-Git files before writes, preserve their paths/content, and verify after preparation. Do not reset, stage, commit, or edit the existing task tracker. |
| Filename timestamp mistaken for deck numbering | Record capture order with its evidence and timezone unknown; preserve names and all variants; actual slide number and exact transcript-to-slide alignment remain unset. |
| Low-information images silently removed | Keep `Screenshot 2026-09-19 234500.png` (50×36) and `Screenshot 2026-09-19 235026.png` (43×22); flag classification/readability as unresolved. |
| Source errors treated as verified knowledge | Keep original transcript/captures immutable; record observations separately; defer extraction, corrections, and objective validation. |
| Introductory references mistaken for Domain 2–5 coverage | Associate this batch with its supplied Domain 1 folder; mark course-wide intro separately; record zero source materials for Domains 2–5. |
| Attribution and rights assumed | Record user-supplied study-reference provenance, with course author/URL/license unknown. Local organization is authorized; this does not establish redistribution clearance. No publication or commits occur. |
| Duplicate storage / future maintenance | Copy adds approximately 22.35 MiB; maintain one manifest and stable source IDs; future additions require a new inventory and collision checks. |

## Acceptance criteria

61/61 byte-identical copies; 61 originals retained; five domain structures; zero invented Domain 2–5 materials; all original names and paths captured; 60 capture-order positions documented; unresolved issues visible; every pre-existing file unchanged; no questions generated.

## Completion evidence

The archive verifier passed for 61 copied files, 61 retained originals and all 258 pre-existing project files. A separate scope/link check found 91 additions (90 source-area files and this plan), zero unexpected additions, 96 valid local Markdown links, and all 133 pre-existing Git status entries preserved. See `content/isc2-cc-2026/sources/preparation-report.md` for results and unresolved follow-up items.
