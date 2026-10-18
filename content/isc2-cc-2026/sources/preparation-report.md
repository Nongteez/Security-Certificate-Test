# ISC2 CC 2026 Source Preparation Report

**Date:** 2026-10-18 (Asia/Bangkok)  
**Intake:** `ISC2-CC-2026-SOURCE-20261018-01`  
**Scope:** Local source organization and preparation only.

## Current project structure findings

The existing application uses HTML, CSS and JavaScript, with runtime certification configuration and ESM domain question banks under `data/certs/isc2/cc/versions/2026/`. The registry identifies that existing 583-question bank as Pre-2026; its internal `2026` identifier is retained. Domain file names follow `domain-1.js` through `domain-5.js`, with counts 142 / 65 / 93 / 156 / 127 in the existing configuration. The future updated-outline registry entry is `next-bank`, currently coming soon with no runtime bank references.

The existing content authoring workspace is `content/isc2-cc-2026/`, containing `knowledge/domain-X.md`, `questions/domain-X.md`, and reusable templates. Documentation in `docs/plans/isc2-cc-2026/` defines intake, provenance, domain mapping and future authoring. Runtime questions have an established bilingual question/option/answer/explanation format; neither that format nor any question data was edited.

`assets/questions/` contains separate JSON question collections. The root legacy HTML and `original/` hold earlier source artifacts. These unrelated assets were inspected as architectural context and left in place.

Numerous tracked modifications and untracked additions already existed at task start, including application files, documentation and content scaffolding. All **258 pre-existing non-Git files** were recorded in a SHA-256 baseline before repository writes. The existing, already-modified `docs/plans/task.md` was preserved; the new migration plan tracks this task independently.

## Destination and hierarchy

Created **`content/isc2-cc-2026/sources/`**. This keeps raw instructional references with the certification's existing staging workspace and follows its lowercase, hyphenated domain naming. It avoids splitting source and derived authoring content between two certification trees. Existing intake examples referring to `assets/staging/incoming/` were treated as examples, not an existing archive to relocate.

All five domain folders contain `transcripts/`, `slides/`, `notes/`, and `extracted-knowledge/`. Domain 1 contains the copied references and separately labeled intake notes. Domains 2–5 have availability READMEs and empty-folder markers only. No material was invented to fill missing domains.

The new [README](README.md) describes the hierarchy, preservation rules, manifest, verification command, and intended workflow from later authorized extraction to reviewed knowledge and question staging. The existing knowledge and question staging files were not modified.

## File inventory and classification

| Classification | Count | Destination | Status |
| --- | ---: | --- | --- |
| Domain 1 TXT transcript | 1 | `domain-1/transcripts/` | Original filename and bytes preserved |
| Domain 1 PNG captures | 60 | `domain-1/slides/` | All retained, including crops and tiny fragments |
| Supplied notes | 0 | Reserved per-domain `notes/` folders | Domain 1 inspection notes are generated management documentation |
| Extracted knowledge entries | 0 | Reserved per-domain `extracted-knowledge/` folders | No extraction performed |
| Domain 2–5 supplied materials | 0 | Domain structures reserved | Awaiting actual references |

The source files total **23,436,827 bytes**. The original input had only one subfolder, `ISC2 Update 2026/Domain 1/`, with no hidden additional files or reparse points.

Every PNG was decoded and visually inspected. Filename timestamps establish 60 capture positions across 2026-09-19 and 2026-09-20; timezone is unknown. This is provisional capture order, not original presentation slide numbering. Cropped/wider variants remain independent files. All 60 hashes are checked individually regardless of topic similarity.

The transcript contains 98 overlapping timestamp blocks ending at `01:11:04`. It includes course-wide introduction and Domain 1 instruction. Introductory mentions of Domains 2–5 were labeled as context rather than counted as supplied materials for those domains.

The [full inventory](file-inventory.md) lists every original filename, type, byte size, image dimensions, inspection label and specific issue. The [manifest](source-manifest.json) records exact original/destination paths, stable source IDs, SHA-256, domain association, provisional capture order and unresolved issue references. Original paths are project-relative, with the original absolute project root recorded once for provenance.

## Migration plan and safeguards applied

The [migration plan](../../../docs/plans/isc2-cc-2026/source-organization-plan.md) was written before copying. The destination was absent and all source records were checked against the pre-copy baseline. Copy operations refused overwrites. Each destination file was immediately checked against its original by byte length and SHA-256.

No original was moved, renamed, rewritten, compressed, deduplicated or deleted. The original `ISC2 Update 2026/` directory remains intact. No Git reset, staging, commit, push or publication was performed. Existing application files, question banks, question schema, exam configuration, original assets, authoring templates and unrelated edits were preserved.

The [preparation baseline](preparation-baseline.json) captures the original 258 project files' paths, sizes and hashes. It is historical evidence; later unrelated changes should never be reverted merely to match this snapshot.

## Verification evidence

Command run from the project root:

```powershell
& './content/isc2-cc-2026/sources/verify-sources.ps1' -CheckOriginals -CheckPreparationBaseline -AsJson
```

Result:

```json
{
  "passed": true,
  "copied_files_verified": 61,
  "original_files_verified": 61,
  "preexisting_files_verified": 258,
  "source_bytes": 23436827,
  "slide_capture_positions": 60,
  "missing_domain_materials": [2, 3, 4, 5],
  "failures": []
}
```

Verification covers copied-file and original-file hashes/sizes, unchanged filenames, source file-set coverage, stable ID/path uniqueness, capture order, all five domain/category structures, and the absence of learning materials in Domains 2–5. The optional preparation baseline check independently covers every pre-existing project file, including all existing working-tree changes. No runtime behavior changed, so application test suites were not rerun for this source-only intake.

A separate scope and documentation check confirmed **91 new files** (90 within the new source area plus the migration plan), **zero unexpected additions**, **96 local Markdown links with zero broken targets**, and all **133 pre-existing Git status entries** preserved. All 61 original-file SHA-256 values are distinct; visually overlapping captures were retained regardless.

## Unresolved items and remaining actions

- **Tiny captures:** `Screenshot 2026-09-19 234500.png` is 50×36 pixels and `Screenshot 2026-09-19 235026.png` is 43×22. Both decode but have no readable instructional content. They remain in capture positions 31 and 36; intended content is unresolved.
- **Order and completeness:** Original slide numbers, exact transcript/capture alignment, missing deck pages and complete Domain 1 objective coverage remain unverified. Explicit non-repudiation teaching was not located in the supplied transcript. No missing explanations were fabricated.
- **Source quality:** Overlapping transcript blocks and potential transcription/technical ambiguities are recorded in the [inspection notes](domain-1/notes/inspection-notes.md). These require later review before knowledge extraction or question authoring; originals were not corrected.
- **Attribution:** Course/instructor identity, source URL, original presentation title, publication date and screenshot timezone were not provided.
- **Redistribution:** Publication rights remain unconfirmed; local organization does not establish clearance. No remote publication or commit occurred.
- **Missing domains:** Receive actual Domain 2–5 learning materials before populating their source folders.
- **Next task:** Wait for a separate instruction before extraction or question authoring. Any original-directory removal also requires explicit approval.

No Domain 1 questions, or questions for any other domain, were generated. Source preparation is the stopping point for this task.
