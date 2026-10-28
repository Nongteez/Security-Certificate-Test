# Domain 1 remediation — Phase 1

Date: 2026-10-28. Status: implementation and verification in progress; human acceptance pending. Authorized scope: D1-F02–F06. D1-F01 (High, AI applications) is explicitly deferred; the instruction to address both High findings cannot override that exclusion. Domain 1 is not finally complete.

## Scoped plan recorded before production edits

All four audit reports and the original Domain 1 notes were read before editing. The notes' CIA scenarios, concise conceptual distinctions and natural Thai with familiar English terms remain the teaching approach. Current official scope was checked against the [September 2026 ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), Domain 1.1. The following are technical qualifications of existing teaching, not additional official objectives.

All targets are in `lesson-d1-01-cia-triad`. Array indices below are zero-based.

| Finding | Exact slide / field | Current problem | Planned correction | Source justification | Required verification |
|---|---|---|---|---|---|
| D1-F02 High | `slide-04-integrity`, `blocks[2].items[0]`; integrity presentation footer | EN promises unique checksums; TH says they prove no change. No trusted-reference condition. | Hash comparison supports change detection with a protected trusted digest; no authorship/authenticity/non-repudiation proof. Explain replacement of both file and digest, provenance/custody/procedures. Footer: compare with a trusted digest. | [FIPS 180-4 introductory explanation](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf); original notes B §2.2 requires a trusted hash. Finite digests do not imply absolute uniqueness. | Paired source, reading/Info, footer, adversary counterexample, both desktop sizes/languages. |
| D1-F03 Medium | `slide-08-takeaways`, `blocks[1].rows[0][3]` | Encryption described as secrecy only. | Encryption alone does not stop deletion; authenticated encryption can also detect unauthorized changes. Existing narrower presentation recap retained. | [SP 800-38D abstract](https://csrc.nist.gov/pubs/sp/800/38/d/final) supplies a counterexample to secrecy-only. | Full recap table in reading/Info in TH/EN; no implied universal authentication. |
| D1-F04 Medium | `slide-04-integrity`, `blocks[1].text`; slide 8 `blocks[1].rows[1][3]` | “Strictly Integrity” implies mutually exclusive consequences. | Unauthorized alteration directly harms Integrity; evaluate additional CIA effects using stated facts. | [FIPS 199 §3](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf); original notes B §2.4 and existing compound incident. | Both fields/reading/Info agree with existing compound-impact teaching. |
| D1-F05 Medium | `slide-07-scenario-reflection`, `visual.options[0].reason` | Outsider-only confidentiality reasoning. | Facts establish falsification, not disclosure; insiders can also breach Confidentiality. Keep Integrity correct; do not invent disclosure. | FIPS 199 §3 authorization boundary; original notes A §1/46, B §2.1. | All three choices, shared reveal, TH/EN state switch, full explanation, both desktop sizes. |
| D1-F06 Medium | `slide-04-integrity`, `blocks[2].items[1]` | TH implies unavoidable responsibility; EN shorthand lacks evidence conditions. | Signatures support signed-data Integrity/origin and conditional Non-repudiation. Explain identity binding, key protection/compromise, certificate trust when used and supporting procedures; no automatic human intent or legal liability. | [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final), [SP 800-57 Part 1 Rev.5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final); B §4.1/4.3; retained Lesson 3. | Equivalent paired claims and full explanations; no contradiction with Lesson 3. |

Publication bookkeeping: increment CIA revision 1→2 and catalog revision 12→13; catalog CIA entry must match. Schema requires every slide review to match its lesson revision, so all eight review revision stamps advance while unchanged educational fields remain identical. Record assistant technical/bilingual review honestly; preserve existing rights evidence. Add specific primary references to the corrected slides; do not silently replace the deferred historical incident reference (F09).

Verification plan: capture task-entry hashes of all repository files (excluding `.git`, local preview, dependencies and temporary directories), original CIA/catalog copies and fresh test baselines; add focused regression assertions before edits; review authorized diffs and unaffected-field projection before updating three intentional CIA whole-file hash locks. Retain exact new whole-file protection. Run the existing 170 focused checks plus new assertions and compare historical Vocabulary failures. Verify all 101 IDs, the other 11 lesson bytes, banks, Quiz/Vocabulary and unrelated work. Inspect production routes via a bounded static preview, not source fixtures. Target slides 4/7/8, their reading/Info and feedback at 1920×1080 and 1366×768 in TH/EN. Check independent progress, reload and direct Resume without changing storage schema. No mobile QA, AI expansion, new slides or other phase.

## Entry baseline

- 1,632 pre-existing files captured in `artifacts/qa/domain-1-remediation-phase-1/entry-integrity.json`.
- Focused checks: 170 tests passed, 0 failed (`entry-node.txt`).
- Historical Vocabulary checks captured before edits in `entry-vocabulary.txt`; five failures remain outside scope.
- Original CIA bytes retained in `entry-cia.json`; original catalog in `entry-catalog.json`.

## Actual changes and outcomes

Pending implementation and verification. This heading will be completed with exact before/after fields, test results, browser observations, preservation results and deferred findings before delivery.
