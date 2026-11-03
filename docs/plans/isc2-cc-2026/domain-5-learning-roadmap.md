# Domain 5 Learning Slides implementation plan and roadmap

2026-11-03. Goal: deliver the complete source-grounded bilingual Learning Slides curriculum requested in the attached mission. Execute inline continuously; no commits or pushes. The current workspace is explicitly authorized. No worktree is created.

Architecture: preserve schema 1, registry, published/staged data architecture, progress storage and viewer. Add an exact-identity Domain 5 storyboard and scoped presentation renderer/CSS. Reading uses semantic blocks, and Info exposes complete explanations plus separate clarifications. No new runtime dependencies.

## Verified entry
Remote main and local HEAD: 69e9b575a12ca559fabc9c5e0380c19f2f8360a8. Clean tracked tree. D1 12/103, D2 8/55, D3 6/42, D4 9/57; total 35/257. D5 no published lessons. Domain 4 completed production architecture, tests and artifacts present. Entry focused/shared command: 310/311 pass; historical D4 preservation snapshot fails on .agent/AGENTS.md already at entry. Preserve this failure rather than rewriting its expectations.

## Constraints and decisions
- Original mission is the specification. All original source files and all D1–D4 content remain unchanged.
- Existing Domain 5 academic audit and coverage matrix concern Reading Notes. Preserve their bytes as prefixes and append a clearly separate Learning Slides audit.
- Review status records agent technical/editorial checks only; never human acceptance.
- Stable IDs follow lesson-d5-NN-slug and slide-d5-NN-NN-slug.
- Publish only lessons whose content and runtime pass their gates. No Vocabulary or Question Bank work.

## Ordered tasks
- [x] Inventory all four text sources and 78 images; preserve SHA256 and map topics, gaps, conflicts and image IDs.
- [x] Verify official September 2026 scope and separate AI guidance; research only necessary technical supplements.
- [x] Finalize lesson/slide roadmap with objective mapping and original source locators.
- [x] Write focused completion, rendering, bilingual, scenario, malformed-data and preservation tests; run red.
- [x] Implement lessons and scoped runtime; run green focused checks.
- [x] Run actual Chrome 1366x768 and 1920x1080 EN/TH across Presentation, Reading and Info, all scenario feedback branches; inspect screenshots and repair defects.
- [x] Verify navigation, keyboard, themes, fullscreen, reload, independent progress and Resume.
- [x] Run shared and D1–D4 regression suites; classify baseline/stale/environment/new failures without weakening tests.
- [x] Final coverage, source audit, exact manifest and protected hashes; completion report and table-only tracker update.

## Planned teaching units
| # | Objective | Stable lesson slug | Learning outcomes and planned slide concepts |
|---|---|---|---|
|01|5.1|data-handling|Classify and label; handle data by state; mask safely; sanitize appropriately; public AI disclosure decision|
|02|5.1|cryptography|Confidentiality mechanism; shared secrets; public/private roles; hybrid protection; trusted hashes; signatures/key custody; quantum-resistant migration; cryptographic choice|
|03|5.2|monitoring|Log versus monitor; trustworthy telemetry; collection and retention; SIEM correlation; endpoint/DLP/agent coverage; AI alert review|
|04|5.2|event-triage|Event/alert/incident; use cases; detection errors; contextual priority; correlation/escalation decision|
|05|5.2|threat-intelligence|Actor motivations; insider uncertainty; intelligence context; ATT&CK goals/methods; indicator decision|
|06|5.3|incident-response|IRP authority; preparation; detection/evidence; containment versus eradication; recovery/improvement; incident handling decision|
|07|5.3|response-exercises|Tabletop decisions; technical validation; exercise safety and improvement; exercise design decision|
|08|5.4|asset-lifecycle|Inventory/ownership; maintenance and AI assets; EOL disposition; legacy exception decision|
|09|5.4|configuration-change|Baselines/drift; risk-based patches; controlled changes; emergency/rollback; change decision|
|10|5.5|security-testing|Readiness roles; purple feedback; scanning limits; static/dynamic analysis; threat modeling; AI-integrated defenses; test selection decision|
|11|5.5|physical-human-testing|Authorized scope; phishing; tailgating/impersonation; boundary verification decision|

Concepts determine slide counts; no quota is a completion criterion. Each conceptual slide has concise bilingual visual elements, comprehensive bilingual explanation, practical distinction, and separate Info clarification. Scenarios have four plausible actions, individually authored reasons, feedback/reset and keyboard support. Final generated storyboard records every exact ID, layout and source mapping.

## Review focus
Malformed content must fall back to safe semantic rendering; unsupported lesson identities must never invoke D5 layouts. Abort/destroy must stop scenario listeners. Thai can expand substantially; evaluate both viewport sizes. Language/mode switches must preserve transient choices while reload preserves only saved position. Publication must preserve every non-D5 catalog branch and existing lesson file.

## Frozen slide sequence, compositions and traceability

### lesson-d5-01-data-handling — 5.1

- `slide-d5-01-01-classification-labels` — mapping — S02–S04; transcript paragraphs 3–10; Domain 5.md §2; data-handling gap supplement
- `slide-d5-01-02-data-states` — compare — S08–S10; transcript data-at-rest/transit/in-use; Domain 5.md §3.10; official AI workspace guidance
- `slide-d5-01-03-masking` — path — S05; transcript masking example corrected; D5 surm.md §19 supplement; official AI data-handling guidance
- `slide-d5-01-04-sanitization` — mapping — S06; transcript secure/cryptographic erase; NIST SP 800-88r2 supplementary correction
- `slide-d5-01-05-decision` — scenario — Original scenario from S02–S06 and official Domain 5 AI workspace guidance

### lesson-d5-02-cryptography — 5.1

- `slide-d5-02-01-encryption-boundary` — path — S07; transcript encryption purpose corrected; Domain 5.md §§2.1–2.2; D5 surm.md §19
- `slide-d5-02-02-symmetric` — compare — S11/S13/S21; Domain 5.md §2.3; D5 surm.md §19
- `slide-d5-02-03-asymmetric-roles` — mapping — S12–S16; transcript private-key signing analogy corrected; Domain 5.md §§2.4/2.6
- `slide-d5-02-04-hybrid` — path — S09/S13/S14; D5 surm.md §20; transcript TLS/RSA overgeneralization corrected
- `slide-d5-02-05-trusted-hashes` — compare — S19–S22; Domain 5.md §2.5; D5 surm.md §19
- `slide-d5-02-06-signatures-custody` — mapping — S12/S17/S18; Domain 5.md §§2.6–2.7; D5 surm.md §§19–20
- `slide-d5-02-07-quantum-resistant` — path — Official 5.1 encryption bullet and AI workspace guidance; NIST FIPS 203 supplement; absent substantive source coverage
- `slide-d5-02-08-decision` — scenario — Original scenario based on S12/S19–S22; Domain 5.md §2.5–2.6

### lesson-d5-03-monitoring — 5.2

- `slide-d5-03-01-record-observe` — compare — S28–S30; Domain 5.md §§3.1–3.6
- `slide-d5-03-02-trustworthy-telemetry` — mapping — Domain 5.md §3.2; D5 surm.md §21
- `slide-d5-03-03-collection-retention` — compare — S28–S30; Domain 5.md §§3.3–3.6
- `slide-d5-03-04-siem-chain` — path — S32/S37; D5 surm.md §§21–23; official AI SIEM guidance
- `slide-d5-03-05-coverage-tools` — mapping — S31–S33; Domain 5.md §§3.7–3.11
- `slide-d5-03-06-decision` — scenario — Original scenario; official Domain 5 AI monitoring and human intervention guidance

### lesson-d5-04-event-triage — 5.2

- `slide-d5-04-01-event-alert-incident` — compare — S34–S35; Domain 5.md §4.1; official AI automated-block distinction
- `slide-d5-04-02-use-cases` — mapping — S35; Domain 5.md §4.6; D5 surm.md §23
- `slide-d5-04-03-detection-errors` — mapping — Domain 5.md §4.3; D5 sum.md §15
- `slide-d5-04-04-priority-context` — compare — S36; Domain 5.md §4.4; D5 surm.md §23
- `slide-d5-04-05-decision` — scenario — S37; Domain 5.md §4.5; original scenario

### lesson-d5-05-threat-intelligence — 5.2

- `slide-d5-05-01-actor-motivations` — mapping — S38–S39; Domain 5.md §5.1
- `slide-d5-05-02-insider-uncertainty` — compare — S38–S39; D5 surm.md §26; official AI workspace application
- `slide-d5-05-03-intelligence-context` — path — S40–S41; Domain 5.md §§5.2–5.3; D5 surm.md §24
- `slide-d5-05-04-attack-framework` — mapping — S42–S44; Domain 5.md §§5.4–5.5; MITRE ATT&CK
- `slide-d5-05-05-decision` — scenario — Original scenario from S40–S41; D5 surm.md §24

### lesson-d5-06-incident-response — 5.3

- `slide-d5-06-01-irp-authority` — mapping — S45–S48; Domain 5.md §6; official 5.3
- `slide-d5-06-02-prepare` — mapping — S48; Domain 5.md §6.3 Preparation; NIST SP 800-61r3
- `slide-d5-06-03-detection-evidence` — mapping — S48; Domain 5.md §6.3 Detection; D5 surm.md §26
- `slide-d5-06-04-contain-eradicate` — compare — S46/S48; Domain 5.md §§6.3–6.5
- `slide-d5-06-05-recover-improve` — path — S46–S48; Domain 5.md §6.3 Recovery/Post-Incident
- `slide-d5-06-06-decision` — scenario — Original scenario from S46–S48; Domain 5.md §6.5

### lesson-d5-07-response-exercises — 5.3

- `slide-d5-07-01-tabletop` — mapping — S49–S50; Domain 5.md §§7.1–7.2
- `slide-d5-07-02-technical-validation` — path — S51; Domain 5.md §§7.3–7.4
- `slide-d5-07-03-exercise-improvement` — path — S49–S51; D5 surm.md §27; official AI exercises guidance
- `slide-d5-07-04-decision` — scenario — Original scenario from S50–S51

### lesson-d5-08-asset-lifecycle — 5.4

- `slide-d5-08-01-inventory-ownership` — mapping — S52–S54; Domain 5.md §§8.1–8.2; official AI asset guidance
- `slide-d5-08-02-maintain-retire` — path — S54; Domain 5.md §8.3; D5 surm.md §28
- `slide-d5-08-03-eol-options` — compare — S55–S56; Domain 5.md §9; D5 surm.md §29
- `slide-d5-08-04-decision` — scenario — Original scenario from S55–S56

### lesson-d5-09-configuration-change — 5.4

- `slide-d5-09-01-baseline-drift` — compare — S57–S58/S60–S61; Domain 5.md §10; NIST SP 800-128
- `slide-d5-09-02-patch-risk` — path — S59–S61; Domain 5.md §10.4; D5 surm.md §31
- `slide-d5-09-03-controlled-change` — path — S62–S64; Domain 5.md §11; NIST SP 800-128
- `slide-d5-09-04-emergency-rollback` — compare — D5 surm.md §32; Domain 5.md §11.2 supplemental rollback
- `slide-d5-09-05-decision` — scenario — Original scenario from S57–S64

### lesson-d5-10-security-testing — 5.5

- `slide-d5-10-01-team-roles` — compare — S65–S68; Domain 5.md §12; NIST SP 800-115
- `slide-d5-10-02-purple-feedback` — path — S68–S69; D5 surm.md §33
- `slide-d5-10-03-scanning-limits` — compare — S70; Domain 5.md §§13.1–13.2
- `slide-d5-10-04-static-dynamic` — compare — S71–S73; Domain 5.md §§13.3–13.5
- `slide-d5-10-05-threat-model` — path — S74; Domain 5.md §13.6; D5 surm.md §34
- `slide-d5-10-06-ai-defense-testing` — mapping — Official Domain 5 AI continuous testing guidance; S65–S74 application
- `slide-d5-10-07-decision` — scenario — Original scenario from S71–S73; Domain 5.md §13.4

### lesson-d5-11-physical-human-testing — 5.5

- `slide-d5-11-01-authorized-boundaries` — mapping — S75; Domain 5.md §14.1; NIST SP 800-115
- `slide-d5-11-02-phishing-test` — path — S76; Domain 5.md §14.2; official AI automated threats application
- `slide-d5-11-03-tailgating-impersonation` — compare — S77–S78; Domain 5.md §§14.3–14.5
- `slide-d5-11-04-decision` — scenario — Original scenario from S75–S78; Domain 5.md §14
