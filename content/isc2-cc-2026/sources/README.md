# ISC2 CC 2026 Source Materials

Prepared locally on **2026-10-18 (Asia/Bangkok)**. Intake ID: `ISC2-CC-2026-SOURCE-20261018-01`.

This directory preserves user-supplied references for later Domain 1–5 knowledge curation and question authoring. It is part of the existing [content staging workspace](../README.md). It is not loaded by the application. No questions, translations, technical explanations, or extracted knowledge entries were created during this intake.

## Placement and boundaries

The project already groups this certification's authoring materials in `content/isc2-cc-2026/`, with `knowledge/`, `questions/`, and `templates/`. Keeping raw sources here makes their relationship to derived staging content explicit. A separate `content/sources/isc2-cc-2026/` would split that existing workspace. Existing intake examples mention `assets/staging/incoming/`; this source archive follows their provenance principles without introducing a separate asset staging tree.

The current runtime bank remains under `data/certs/isc2/cc/versions/2026/`. The planned updated bank uses the provisional `next-bank` ID. Neither bank, its schema/configuration, nor application behavior is changed by this archive.

## Directory structure

```text
sources/
  README.md
  source-manifest.json             # One record per original file
  file-inventory.md                # Human-readable file index
  preparation-baseline.json        # Pre-existing project file SHA-256 snapshot
  preparation-report.md            # Findings, results and remaining actions
  verify-sources.ps1               # Read-only integrity verification
  domain-1/
    README.md
    transcripts/
      Script - DOMAIN 1.txt         # Original bytes and name
    slides/
      Screenshot ... .png          # All 60 original PNGs and names
    notes/
      inspection-notes.md          # Generated intake observations, not a source
    extracted-knowledge/
      .gitkeep                     # Reserved; no extraction performed
  domain-2/                        # Each has the same four category folders
  domain-3/
  domain-4/
  domain-5/
```

Each domain has `transcripts/`, `slides/`, `notes/`, and `extracted-knowledge/`. Empty category folders contain `.gitkeep` so Git preserves the intended hierarchy. Folder markers and domain READMEs are management scaffolding, not supplied learning content. Supplied notes and generated inspection notes must remain clearly distinguishable.

| Domain | Project planning title | Supplied transcripts | Supplied slide captures | Availability |
| --- | --- | ---: | ---: | --- |
| 1 | Security Principles | 1 | 60 | Received; technical review pending |
| 2 | Security Governance | 0 | 0 | Awaiting materials |
| 3 | Identity and Access Management (IAM) Concepts | 0 | 0 | Awaiting materials |
| 4 | Networking and Cloud Security Concepts | 0 | 0 | Awaiting materials |
| 5 | Security Operations and Incident Response | 0 | 0 | Awaiting materials |

Titles follow the existing project documentation; this intake does not newly certify official objective mappings or complete domain coverage. Introductory exam/domain comparisons in Domain 1 are course-wide context and do not constitute Domain 2–5 instructional batches.

## Inventory, provenance and order

- Original project root: `D:\_Coding\SEC-CERT-TEST`.
- Original directory: `ISC2 Update 2026/`; its only subfolder is `Domain 1/`.
- Source total: **61 files, 23,436,827 bytes** (approximately 22.35 MiB).
- All original files and their original directory remain in place. Copies preserve filenames, image annotations/crops, text encoding, line endings and content byte for byte. No deduplication, recompression or text cleanup was applied.
- [source-manifest.json](source-manifest.json) records original and destination paths relative to the project root, original filenames, file types, bytes, SHA-256, domain association, inspection labels, capture sequence, dimensions and unresolved issue IDs. Its top-level issue register explains those IDs. Generated management files are outside its original-file inventory.
- [file-inventory.md](file-inventory.md) lists every original file and links to its copied counterpart. Source IDs remain stable when referenced from later work.
- PNGs are ordered by the timestamps embedded in their original filenames. Capture positions **1–60** span `2026-09-19 21:29:49` through `2026-09-20 00:33:25`. The filename timezone is unknown. These are capture positions, not verified deck slide numbers; the manifest deliberately leaves deck numbers and exact transcript alignment unset.
- The transcript contains **98 overlapping timestamp blocks**, ending at `01:11:04`. Preserve its original block order. Do not infer slide numbers from timestamps or combine repeated transcript text in the raw file.
- All 60 PNGs decode. Captures **31** and **36** are tiny fragments with no readable instructional content and remain preserved. Cropped/wider variants are retained individually.

Provenance is classified as **Tier 2: User Study References** using the project's existing taxonomy. The original course/instructor identity, URL, publication date, deck title and redistribution permission were not supplied. Local preparation does not establish publication clearance or technical approval. [Inspection notes](domain-1/notes/inspection-notes.md) identify follow-up items without rewriting source content.

## Intended future authoring workflow

1. Receive the next explicit instruction. This preparation does not authorize starting questions automatically.
2. For a new source batch, inspect it first, record attribution/permissions and exact filenames/paths, choose its domain with evidence, preflight collisions, and copy without overwriting. Verify size and SHA-256 before accepting its manifest records. Keep existing source IDs and raw files stable; add a new batch record rather than silently replacing content.
3. Resolve relevant manifest issues before treating a passage as authoritative. Confirm official objective mapping separately from the source lecture's labels. Maintain uncertainty where materials are missing or unreadable.
4. When extraction is authorized, put source-linked drafts in the domain's `extracted-knowledge/` folder. Cite the manifest source ID, exact original filename and transcript timestamp block or capture position. Label OCR/transcription corrections as derived editorial work; never edit the raw originals to make them agree.
5. Review technical accuracy and English/Thai terminology using the existing [knowledge template](../templates/knowledge-template.md), then curate approved entries in `../knowledge/domain-X.md`. Keep raw observations, extraction drafts and reviewed knowledge distinct.
6. When question authoring is separately requested, use reviewed knowledge, the existing [question template](../templates/question-template.md), [writing guidelines](../../../docs/plans/isc2-cc-2026/question-writing-guidelines.md) and [intake checklist](../../../docs/plans/isc2-cc-2026/content-intake-checklist.md). Retain source references through editorial review and bilingual checks. Do not reproduce a source's exam tips as unverified answer rules.
7. Stage future reviewed candidates in `../questions/domain-X.md`. Production import remains a separate later task under the existing approval and verification workflow. This archive supplies no question IDs, answer keys or runtime imports.

## Read-only verification

From the project root in PowerShell:

```powershell
& './content/isc2-cc-2026/sources/verify-sources.ps1' -CheckOriginals -CheckPreparationBaseline -AsJson
```

The verifier checks the manifest's copied-file hashes and sizes, original filenames, raw file coverage, capture order, all five domain/category structures, and absent Domain 2–5 learning materials. `-CheckOriginals` also checks the retained original tree. `-CheckPreparationBaseline` checks all **258 pre-existing non-Git project files** against the pre-copy snapshot, including existing uncommitted changes.

For routine archive checks after unrelated project files have legitimately changed, omit `-CheckPreparationBaseline`. That optional snapshot is historical audit evidence, not an instruction to revert subsequent development. The verifier describes this intake; revise its expected counts/file-set rules deliberately when future batches expand the manifest. All verification is read-only.

The [migration plan](../../../docs/plans/isc2-cc-2026/source-organization-plan.md) records the pre-copy decisions and safeguards. See the [preparation report](preparation-report.md) for verified results and remaining actions. Original directory removal requires explicit user approval; none was requested or performed.
