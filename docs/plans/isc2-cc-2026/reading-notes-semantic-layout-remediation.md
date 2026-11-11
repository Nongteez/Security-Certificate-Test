# Reading Notes comprehensive semantic layout remediation

Date: 2026-11-05. Scope: ISC2 CC 2026 Reading Notes, Domains 1–5 and Reading-specific shared rendering/navigation. No commit or push.

## 1. Executive summary

Completed a sequential source and browser review of 128 topic units, 69 initial major visual placements (37 diagrams, six photographs, 26 examples), and 41 additional teaching blocks/callouts. The final major inventory contains 68 placements: 36 diagrams, six photographs and all 26 examples. Removed only the redundant ethics diagram placement; its complete canon cards and registered template remain. No new image assets or decorative diagrams were added.

Corrected prerequisite ordering, misleading workflow/hierarchy cues, overstated security guarantees, academic regressions in Domain 5, nested table framing, theme rendering and metadata-driven navigation. Two meaningful moves place risk treatment after residual-risk/appetite definitions and biometrics together with its example under access controls. Full replacement records, including exact old/new text, are in `changes.json`.

Actual Chrome verification passes all 40 required domain/viewport/theme states and 100 interaction checks. Nine of twelve existing regression suites pass; the same three suites failed at entry. Remaining assertions and the two new authorized exact-text differences are disclosed below. This is an implementation handoff for human acceptance, not an assertion of a clean legacy test gate or formal accessibility certification.

Evidence root: `artifacts/qa/reading-notes-semantic-layout-remediation/` (all evidence names below are relative to this directory).

## 2. Previous findings reconciliation

Read the visual learning blueprint, visual education implementation report, final comprehensive audit, original Domain 2 cross-domain audit and its rendering/mobile remediations. `context-inspection.json` records the inputs. Historical reports describe their historical revisions; they do not prove that the entry source still matches them.

The entry worktree was clean at `f794545744431c3345b36e69de4106f383e61379`. `entry-baseline.json` records 33,621 existing file hashes. Before-source backups and before Chrome captures preserve the actual starting point. This was not the older 8-pass/4-fail academic-audit baseline: the current twelve-suite baseline was nine pass/three fail.

Verified that explicit hidden-state CSS, user-controlled collapse behavior, raw-comment filtering, ordered list numbering, a single H1 and the previous math rendering repair already existed. Retained those fixes. Found regressions despite prior all-pass summaries: fourteen manually wrapped Domain 5 tables created nested wrappers; newly added diagrams reintroduced mandatory-sequence cues; new operational examples contradicted corrected source elsewhere; Domain 5 Markdown had reverted previously approved material while its scenario module retained corrections. Restored 30 exact prior Domain 5 corrections, confirmed four already correct, and retained the intervening new photos/examples (`domain5-prior-correction-reconciliation.json`).

## 3. Domain-by-domain review

The full 128-unit inventory contains source bodies/headings and component ownership. `unit-review.json` records each unit and its correction reasons. Review followed definition → distinction/mechanism → comparison or illustration → worked application → review/scenario. A section without an illustration was not given one merely for symmetry.

| Domain | Result and educational reason |
| --- | --- |
| 1 | Retained core-concept/CIA/redundancy sequence, MFA photos, privacy example, document hierarchy and worked risk arithmetic. Qualified non-repudiation and biometric/turnstile claims. Separated ongoing Accounting from claim/proof/permission. Moved the risk decision flow after residual risk, appetite and tolerance. Marked ARO/cost assumptions as hypothetical. Removed duplicate ethics placement while retaining every canon. Recast control functions as overlapping roles rather than universal Before/During/After stages. |
| 2 | Retained recovery definitions before timelines and backup dependencies before the worked recovery case. Replaced universal BC/DR subset geometry with coordinated scopes. Replaced the six-tier measurement ladder with six peer concepts grouped as measures/communication. Qualified site recovery ranges, cloud preparation, backup performance and archive-bit implementation. Specified Thursday before its next backup so two/four-set chains have an unambiguous recovery point. |
| 3 | Kept credential/PIV illustration next to identity proof and qualified key protection. Moved the biometric curve and associated example together from provisioning to access controls after FAR/FRR definitions. EER is a comparison measure, not a universal optimum; low FAR is not zero risk. Removed mandatory Joiner→Mover→Leaver path cues and restored optional/repeated moves, justified rights and policy-dependent evidence retention. Retained least privilege/SoD and access-model comparisons after their definitions. |
| 4 | Kept fiber, protocol, IDS/IPS and DMZ illustrations beside the relevant mechanisms. Qualified TCP performance, permitted traffic and defense layers. Cloud responsibility labels distinguish customer policy decisions from provider implementation. Scenario01 MD/JS now explain controlled boundaries, permitted paths, rules and remaining attack paths in one bilingual reasoning flow; VLAN labels alone do not guarantee isolation. Other scenario narratives/questions/answers remain intact. |
| 5 | Restored approved signing, TPM/HSM, sanitization, current IR and ATT&CK corrections. Redesigned the existing cryptography comparison around distinct inputs/operations/results and exact SHA-256 values. Qualified avalanche averages, firmware signing and trusted keys. Corrected new sanitization/destruction examples and captions rather than leaving them to contradict the definitions. SIEM correlation produces a hypothesis requiring validation. Clarified the local six-activity IR model and risk-dependent alert priorities. Promoted only genuine peer headings; removed fourteen redundant table wrappers. |

## 4. Visual placement decisions

`visual-decisions.json` individually identifies all 69 initial major placements by domain, owning topic, source line, type, ID, disposition and educational reason. `supplemental-component-review.json` covers the masking flow, structured MFA/risk/control grids and callouts; these are not silently omitted from the major-illustration count. Tables and scenarios are tracked separately. Functional inline icons are not independent teaching diagrams.

| Decision | Concrete application |
| --- | --- |
| KEEP | Definitions and their matching threat/CIA/redundancy, layer/protocol, access-model and security-testing comparisons; authentic token/fiber photographs and correctly placed examples. |
| MOVE | Domain 1 `riskTreatmentDecisionFlow` after appetite/residual-risk prerequisites; Domain 3 `biometricSensitivityCurve` with its matching worked example into access-control context. |
| REDESIGN | BC/DR scope, measurement grouping, cryptography comparison, ongoing AAA Accounting, optional JML roles and coexisting control functions. Existing components and concepts retained. |
| REMOVE | Only the duplicated `ethicsCanons` placement immediately before complete canon cards. No canon learning content or asset file removed. |
| ADD CONTEXT | Device/media photographs, backup timing, site readiness, biometric threshold, IDS/IPS, DMZ/defense layers, SIEM and local IR assumptions/limitations. |

All six photo assets and attributions remain. New operational examples were reviewed as teaching material, not accepted automatically because they were visually polished. Risk and biometric moves preserve the complete application content, not just the diagram.

## 5. Semantic layout corrections

Preserved all 128 topic IDs and their navigation model. Source heading audit reports no skipped heading levels. Kept comparison tables and examples with their owning concepts. Domain 5 formerly misplaced peer H5 labels now have the appropriate H4 level where no intervening H4 parent existed. Removed extra table wrappers while retaining table column shapes.

Reading-only example styling reduces excessive framing. Dense existing diagrams use their existing stacked/mobile representations within constrained tablet/laptop content columns instead of shrinking labels. Theme-dependent surfaces replace hardcoded dark surfaces. Reading-scoped legacy variable aliases resolve missing secondary/background tokens. Badge colors were adjusted only where their actual text/background contrast required it.

Full-height inspection exposed AAA subtitle collisions, a differential-backup label colliding with a set-count badge, DR-site footer collisions and a risk-governance label colliding with its badge. Increased spacing or shortened redundant labels; retained their full explanations in adjacent text. Removed directional arrows between coexisting control functions.

Sidebar expansion now resolves actual current-domain objective/topic metadata rather than inferring objective IDs by regex. Existing explicit collapsed visibility and user collapse ownership remain. Reload restoration waits for eager/complete images and images preceding the requested anchor, rather than decoding every offscreen lazy image and reaching the fallback timeout. Cancellation/layout/font handling remains. Applied bilingual metadata normalization to Domain 5 as well as earlier domains. No progress schema or storage-core change.

## 6. Academic corrections and evidence

Changed only meanings necessary to repair an observed contradiction, misleading illustration, unsupported guarantee or prior regression. Thai and English explanations express the same caveats. Reading displays both languages simultaneously; no language switch was invented.

Primary sources consulted:

- [ISC2 CC exam outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline): objective boundaries and segmentation coverage for the current outline.
- [NIST SP 800-82r3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf), §§5.2.3.1 and 6.2.1.3, and [SP 800-41r1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-41r1.pdf), firewall policy/testing: permitted paths, topology and enforcement matter; segmentation labels do not establish containment by themselves.
- [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html): biometric error/spoofing considerations and authenticator context. [SP 800-53r5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), AC-2/3/5/6(7), PS-5: authorized access, separation and continuing review.
- [NIST SP 800-30r1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf): risk assessment assumptions and response context. The bank/risk worked cases remain illustrative examples, not source-derived universal guarantees.
- [FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf), §§3.2–3.3: signature generation/verification and assurance conditions. Signing is not a generic private-key encryption/public-key decryption pipeline, and verification alone does not prove human intent or harmless code.
- [NIST SP 800-88r2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf): media-specific sanitization selection, conditional cryptographic erase and verification/validation. Removed generic overwrite, universal particle-size and 100%-recovery-prevention claims from the new example.
- [NIST SP 800-61r3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf): current incident-response/CSF context and continuous improvement. The local six-activity study aid is identified as such.
- [MITRE PowerShell T1059.001](https://attack.mitre.org/techniques/T1059/001/) and [Spearphishing Link T1566.002](https://attack.mitre.org/techniques/T1566/002/): exact sub-technique examples; unstable catalogue counts removed.

The complete exact correction ledger is the authority for wording changes. This review does not claim independent recertification of every historical fact outside the affected teaching contexts.

## 7. Task 126 findings and resolution status

Recovered the actual twelve IDs from `domain-2-cross-domain-quality-audit.md`: six P1, five P2, one P3. The later eleven-item register is a different audit and does not replace this list.

| ID | Priority | Finding | Current disposition and evidence |
| --- | --- | --- | --- |
| D2-Q01 | P1 | Mobile SVG labels compressed to 3.6–4.8px | Resolved in required matrix: existing stacked presentations, local 10px rendered-SVG guard, zero tiny-label candidates. Includes constrained tablet columns. |
| D2-Q02 | P1 | Raw Markdown/comments leak | Prior parser fix retained; DOM/rendering tests and Chrome text-leak checks pass. |
| D2-Q03 | P1 | BC/DR congestion | Redesigned as readable coordinated scope comparison with bilingual explanation. Rejected the historical recommendation to impose a universal DR⊂BC equation. |
| D2-Q04 | P1 | Measurement compression/duplicate aid | Replaced forced hierarchy with readable peer concepts grouped by purpose. The old recommendation for a mandatory six-tier hierarchy was academically unsuitable. |
| D2-Q05 | P2 | Duplicate H1 | Prior fix retained; one H1 in every Chrome state, DOM checks pass. |
| D2-Q06 | P2 | Decorative emoji | Prior heading cleanup retained; no new decorative emoji/assets added. |
| D2-Q07 | P2 | Math/relational notation | Prior parser/math fixes retained; formulas/values and arrow rendering checked, no raw TeX leaks in matrix. |
| D2-Q08 | P2 | Bilingual table squeezing | Table column shapes retained; responsive table containment and constrained-column layouts verified; removed fourteen nested Domain 5 wrappers discovered cross-domain. |
| D2-Q09 | P2 | Harness blindness | New actual Chrome 40-state matrix, native keyboard/progress/deep-link checks and full-height per-component captures supplement legacy source checks. No fixture edits. |
| D2-Q10 | P3 | Light secondary contrast | Resolved observed SVG surface/badge candidates in both themes using computed composited colors and visual review. This is scoped verification, not a complete WCAG conformance audit. |
| D2-Q11 | P1 | Ordered-list reset | Existing parser correction retained; unchanged rendering-quality suite passes; worked applications retain their list sequence. |
| D2-Q12 | P1 | Sidebar hidden/state | Existing collapse behavior verified in all states; current regex/metadata and reload-image-delay defects corrected. Native Space/Enter/Tab/Escape and progress/deep-link checks pass. No invented Domain 2 objective 2.5. |

## 8. Before/after evidence

`before-browser-qa.json` and `screenshots/matrix-before/` preserve the actual 40-state baseline (168 viewport captures). Before failures included delayed anchor restoration and fourteen nested Domain 5 wrappers. Collapse tests already passed. The preliminary before contrast probe did not fully handle transparent surfaces/theme transitions; its raw candidate count is not a valid comparative contrast score.

`after-browser-qa.json` and `screenshots/matrix-after-final/` contain the required final 40 states and 166 viewport captures. `full-component-captures.json` and `screenshots/full-components/` extend these to 218 full-height views, both 1920/light and 390/dark, including supplemental teaching blocks/callouts. `interaction-qa.json` adds ten keyboard/navigation captures. Contact sheets provide a visual index, not a substitute for readable native captures.

Inspected the four desktop diagram contact sheets (all 36 retained diagrams), photo sheet (all six photos), three example sheets (all 26 examples), native before IDS/IPS, corrected BC/DR, risk flow, AAA, mobile backup and cryptography, plus final full-height overlap corrections and all four supplemental structured teaching blocks in mobile Dark. The review caught and corrected actual label collisions. Thumbnail inspection establishes grouping and placement; computed geometry and native spot checks establish label/layout details. It does not claim every pixel or every sentence was manually proofread at every viewport. Earlier `matrix-after/`, `after-initial-browser-qa.json` and `interaction-initial-qa.json` are diagnostic iterations, not final pass evidence. The first interaction harness lacked the native Enter character; corrected the harness input rather than changing product behavior.

Direct comparison examples (1366×768, Dark):

| Component | Before | After |
| --- | --- | --- |
| BC/DR scope | [Before](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/reading-notes-semantic-layout-remediation/screenshots/matrix-before/D2-1366x768-dark-01-diagram.png) | [After](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/reading-notes-semantic-layout-remediation/screenshots/matrix-after-final/D2-1366x768-dark-01-diagram.png) |
| Measurement grouping | [Before](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/reading-notes-semantic-layout-remediation/screenshots/matrix-before/D2-1366x768-dark-10-diagram.png) | [After](https://github.com/Nongteez/Security-Certificate-Test/blob/8eecd568d3939cf2ef15babab9befd2ee8c74ab6/artifacts/qa/reading-notes-semantic-layout-remediation/screenshots/matrix-after-final/D2-1366x768-dark-10-diagram.png) |

## 9. Browser verification matrix

Browser: Chrome 156.0.8078.80. Actual local application over HTTP, CDP device metrics at deviceScaleFactor 1. Every domain ran each row below in Light and Dark (40 states total).

| Viewport | Themes | Domains | Result |
| --- | --- | --- | --- |
| 1920×1080 | Light, Dark | 1–5 | 10/10 PASS |
| 1366×768 | Light, Dark | 1–5 | 10/10 PASS |
| 768×1024 | Light, Dark | 1–5 | 10/10 PASS |
| 390×844 | Light, Dark | 1–5 | 10/10 PASS |

Checks include zero horizontal page overflow, one H1, no nested table wrappers, loaded image decode, no Markdown leaks, independent collapse/expansion, actual anchor navigation/reload, and no runtime exceptions or console errors. All SVG text candidates meet the local size guard; measured normal-text contrast threshold 4.5:1 and large-text 3:1. Probe composites ancestor backgrounds and preceding containing SVG rectangles at label centers after a 550ms theme-settle delay. This measures SVG text, not a blanket WCAG certification of every HTML state.

`interaction-qa.json`: 100/100 PASS across all domains at 1366 and 390 widths. Native Space collapse/Enter expansion/Tab skips hidden descendants; mobile Enter opens drawer/Escape closes and returns focus; actual theme button toggles/restores; bilingual text/metadata; cold topic deep link overrides prior saved location; saved position reloads within the 5px guard; schemaVersion 1. Both languages are present simultaneously; Reading has no language-toggle control.

After native full-height inspection, refreshed all eight states each for Domains 1 and 2 (`after-targeted-browser-qa.json`) and merged those results into the final 40-state evidence. This covers the final control-function arrow removal and backup-label/dependency correction. Final full-height Domain 2 captures were also refreshed. Shared behavior and styling did not change afterward.

## 10. Regression results

Twelve existing suites were run unchanged before and after. Nine pass at both revisions: all five domain suites (48 checks total), DOM integrity (36), persistence (20), navigation (15), rendering quality (5). No production tests or snapshots were edited. An additional direct comparison of all five substantive fields in every Domain 4/5 scenario passes 120/120 (`scenario-alignment.json`).

| Suite still failing | Baseline → final | Explanation |
| --- | --- | --- |
| `verify-reading-diagram-semantics` | 3 failures → 2 failures out of 14 | Registry/unmodified-template expectations use an older 24-template baseline; current registry has 37. Exact original mobile-paragraph retention also rejects the documented academic repairs. The actual coexisting-control/no-workflow assertion now passes after removing remaining arrows. |
| `verify-reading-cross-domain-structure` | 348/391 pass → 346/391 pass | 43 failures already existed. Two newly failing exact-content checks are the authorized biometric-group move into `topic-3-2-logical-controls` and qualification of dependent barriers in `topic-4-2-defense-in-depth`. No lost source material is hidden by changing fixtures. |
| `verify-domain5-integration` | fail → fail | Historical protected Domain 1 content hash differs at entry and after authorized Domain 1 edits. It is not evidence that protected banks/quiz/slides changed. File-hash preservation separately verifies those boundaries. |

Full names, logs, exit codes and before/after differences: `baseline-regression.json`, `after-regression.json`, `regression-comparison.json`. Per-topic source inventories and reversible replacement ledger provide stronger current preservation evidence than obsolete exact-copy expectations. The legacy suite gate is still red; maintainers should review/update its historical expectations separately after accepting the intended content changes.

## 11. Exact modified file list

Existing production/tracker files changed:

1. `content/isc2-cc-2026/reading/domain-1.md`
2. `content/isc2-cc-2026/reading/domain-2.md`
3. `content/isc2-cc-2026/reading/domain-3.md`
4. `content/isc2-cc-2026/reading/domain-4.md`
5. `content/isc2-cc-2026/reading/domain-5.md`
6. `content/isc2-cc-2026/reading/domain-4-scenarios.js`
7. `content/isc2-cc-2026/reading/domain-5-scenarios.js`
8. `js/core/diagram-generator.js`
9. `js/ui/screen-reading.js`
10. `css/reading.css`
11. `docs/plans/task.md` (only this task's appended row)

New deliverables: this report and files under the evidence root. `deliverable-manifest.json` lists every new evidence artifact with hashes; `changes.json` lists exact production replacements. The Markdown parser, component-data module, assets, Slides, Quiz, banks, vocabulary, progress core, old QA and all unrelated initial files remain byte-identical. Preservation verification compares all 33,621 entry files and reconstructs initial normalized source by reversing the complete correction ledger. All 128 topic anchors, 42 table shapes and 56 scenario counts are retained. HEAD is unchanged.

## 12. Remaining issues

No known important semantic-placement, layout or functional defect remains in the reviewed Reading scope and required Chrome states. The three legacy suites remain failing for the disclosed baseline/exact-copy expectations; this is an unresolved repository test-gate issue, not a hidden pass. No expectations were changed to manufacture a result.

Accessibility work here is focused: measured SVG text and reviewed the requested themes/sizes/keyboard paths. It is not a full screen-reader audit, complete HTML contrast certification, cross-browser certification or exhaustive security-content accreditation. Human academic/visual acceptance remains appropriate for the substantial teaching corrections. Intermediate diagnostic screenshots/logs remain clearly named for traceability.

## 13. Production readiness assessment

Ready for human review and acceptance of this scoped remediation. Required Chrome layout/navigation checks pass, source preservation is verified, and identified Task 126 defects are resolved or explicitly bounded with evidence. Do not label the whole repository unconditionally production-ready while its historical regression gate remains red. There was no commit, push or deployment. The task tracker records implementation/verification complete with those gate limitations and human acceptance pending.
