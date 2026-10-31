# Domain 4 — implementation and technical completion report

2026-10-31. Status: **implemented, published and technically verified; ready for human review**. Human visual/academic acceptance remains pending. No Domain 5 implementation, commit or push.

## Inventory and official coverage

Nine lessons, 57 unique bilingual slides, revision 1. Catalog revision 38; all three objectives and all nine lessons are published in roadmap order. Staged copies retain `in-preparation` status and are not production navigation. Lesson IDs and slide IDs are frozen in `domain-4-learning-roadmap.md` and `js/ui/learning/domain4-storyboard.js`.

| Objective | Lesson ID | Slides | Teaching scope |
| --- | --- | ---: | --- |
| 4.1 | lesson-d4-01-network-request | 7 | Request path, OSI/TCP-IP, encapsulation, TCP/UDP |
| 4.1 | lesson-d4-02-addresses-vpns | 6 | IPv4/IPv6, private/public, NAT, coexistence, VPN scope |
| 4.1 | lesson-d4-03-traffic-rules-signals | 6 | Endpoints, ports, firewall policy, IDS/IPS, AI monitoring |
| 4.1 | lesson-d4-04-wireless-connected-systems | 7 | Wi-Fi, Bluetooth, embedded/IoT/ICS, safety and lifecycle |
| 4.2 | lesson-d4-05-segmentation-paths | 7 | Segmentation, firewall zones, DMZ, VLAN, workload/AI boundaries |
| 4.2 | lesson-d4-06-layered-zero-trust | 5 | Defense in depth, dependencies, resource/context decisions |
| 4.3 | lesson-d4-07-cloud-characteristics | 6 | All five essential cloud characteristics and their limits |
| 4.3 | lesson-d4-08-services-responsibility | 7 | IaaS/PaaS/SaaS, FaaS supplement, named duties, AI hosting |
| 4.3 | lesson-d4-09-cloud-deployments | 6 | Public/private/community/hybrid, multi-cloud supplement |

Official scope is **Networking and Cloud Security Concepts**, 21.3%, effective September 1, 2026. The [ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), printed Domain 4 page 6, was checked against the actual outline. All eleven requirement bullets have meaningful teaching coverage; separate AI/application guidance is mapped in four clusters (data paths, monitoring, architecture, cloud). Local lesson numbering is not ISC2 numbering. FaaS and multi-cloud are labeled supplemental rather than invented NIST taxonomy. See `domain-4-2026-coverage-matrix.md` for every requirement and all 57 source mappings.

## Source and academic review

Read all 58 available Domain 4 source files: three text files (`D4 sum.md`, `Domain 4.md`, `DOMAIN 4.txt`) and 55 PNGs, visually reviewed through source contact sheets. Existing source inventory and Task 55 audit were preserved; a dated implementation addendum was appended. S15 is unrelated imagery and contributes no teaching. Original video/audio provenance and reuse rights were unavailable; no claim to have inspected missing media. New text, scenarios and diagrams are original; no source screenshot is embedded in production and no question-bank item was copied.

The prior F01–F20 register was resolved in the new teaching, without rewriting the original materials. Key corrections: approximate OSI/TCP-IP mapping; no seven-header requirement; TCP reliability versus confidentiality/application success; eight IPv6 groups before compression and no automatic encryption; NAT versus security policy; 65,536 port values versus maximum 65,535; DNS 53/RDP 3389; supported wireless controls and substantive Bluetooth pairing; OT safety before disruptive changes; 12-bit VLAN IDs and enforced crossing policy; DMZ independent of physical firewall count; no automatic inside trust; independent failure modes; service-specific cloud duties; serverless uses servers; three NIST service/four deployment models; hybrid versus provider count; private cloud versus automatic security; measured service versus universal pricing.

Authoritative supplements and dated/version qualifications are linked in `domain-4-academic-audit.md`: ISC2, NIST 145/207/41/94/82/121, RFC 1122/768/9293/4291/8504/9114, IANA and narrowly scoped vendor references. Supplemental AI teaching includes uncertain anomaly results, corroboration/reporting, limited wireless/embedded visibility, permitted AI data paths, development/production isolation and customer duties for hosted models. No unverified current-version security guarantees are taught.

All 57 source-content pairs were reviewed for equivalent concepts: titles, lead text, tables/diagrams, detailed explanations, checklists and footnotes; all nine scenarios have four distinct bilingual reasons. Thai intentionally mixes natural Thai with English cybersecurity terms. English application controls remain English in TH. Reading/Info expose the full explanations and references; Presentation uses concise concept-specific content. Schema checks support this review but do not substitute for academic judgment. Native Thai editorial approval remains a human review item.

## Architecture and code review

Existing schema, registry, routing, stage sizing and progress storage are retained. A Domain 4 storyboard defines exact lesson/objective/slide identities, compositions and scenario answers. The Domain 4 renderer admits only those identities with validated bilingual block shapes. It builds safe DOM text, semantic tables, stacks, comparisons, nested encapsulation, bounded VPN paths, allowed/denied policy paths and four-choice scenarios. No new framework, build step, runtime library or asset download.

CSS is scoped to `.learning-d4-slide`; the white educational canvas remains white in both app themes. The only shared runtime edits are an additive exact Domain 4 renderer branch, Domain 4 Info allowlist and stylesheet link. Non-Domain4 behavior remains on its previous branches. Scenario buttons expose pressed state, visible focus, live feedback and Reset; listeners have an owned abort controller. Parent abort is forwarded only for the Domain 4 branch and removed on destroy. No new observers, timers or asynchronous production work.

Defects found and repaired during QA:

- Root/inner CSS class collision made the header/body/footer flow horizontally; root layout classes now use `d4-layout-*` (before evidence: `before-css-class-collision.png`).
- Inherited paragraph/list width capped diagrams; a Domain 4 scoped override releases it.
- VPN protection bracket now ends at the gateway; application access beyond it remains separate.
- Encapsulation is nested rather than a misleading staircase.
- Denied segmentation shortcuts have explicit DENY/× semantics rather than apparent allowed arrows.
- Parent abort now stops scenario listeners; regression test demonstrates this through the public `renderSlide` entry.
- Inventory/tracker prefix preservation was restored from entry copies after detecting line-ending churn. Final prefix/hash checks pass.
- Offline authoring utilities refuse existing lesson paths before any write. They are evidence tools, not runtime dependencies; do not rerun them over the delivered lessons.

No remaining demonstrated Domain 4 defect was found in the final desktop matrix. The existing mobile Reading fallback remains; mobile/tablet and cross-browser QA were not performed.

## Chrome verification and screenshot evidence

Actual installed Chrome **156.0.8078.74**, Windows, dedicated temporary profile, headless Chrome DevTools Protocol. This is real Chrome rendering and native Fullscreen API testing, not a claim of headed manual or physical-display testing. Node 24.15.0 drove the local static site on port 4214; no Playwright/Puppeteer dependency was installed. Initial sandbox launch was unavailable; one successful isolated launch was used. No repeated session cycling. Existing user preview on 4186 was untouched.

| Verification | Executed result | Evidence under `artifacts/qa/domain-4-completion/` |
| --- | --- | --- |
| Every slide, EN/TH, 1366×768 and 1920×1080 | 228/228 slide cases; 684/684 Presentation/Reading/Info cases | `browser-matrix.json`, native `LNN-WIDTH-LANG-Sn-*` PNGs |
| Final presentation composition retakes | 228/228; intended native composition, no unintended Reading fallback or contained-region overlap | `layout-regions.json`, final presentation PNGs |
| Reading and expanded Info | Every case scrolled through; end content reachable; no horizontal overflow | matrix scroll offsets/screenshots; `reading-full-*`, `review-*-info-*` boards |
| All four scenario branches, all nine lessons, four viewport/language combinations | 144/144 feedback states; keyboard activation, selected state and Reset | `*-choice-0..3.png`, matrix scenario results |
| Keyboard previous/next, language out/back, mode state, Info Escape/focus, fullscreen enter/exit | 36/36 lesson/viewport/language cases; exact slide and scenario state restored | `interaction-results.json`, `*-interaction-*` PNGs |
| High-risk light/dark samples | 24 cases × 2 themes = 48 theme states, all three modes | `high-risk-results.json`, 144 `high-risk-*` PNGs |
| Independent lesson selection after reload and direct Resume | 9/9 exact saved slide IDs/titles; no Lesson Contents detour | `progress-results.json`, nine `resume-*` PNGs |
| Continue Learning | Correct most recent lesson/slide, L09 S05 | progress result and `learning-center-continue.png` |
| Progress isolation | Other lesson records preserved, including D1/D2/D3 sentinels; schema 1 unchanged | `progress-seed.json`, `progress-results.json` |
| Runtime exception capture | Zero `Runtime.exceptionThrown` events | `runtimeErrors` in progress results; not a full network/console audit |

Screenshots were actually inspected visually, including all final Presentation cases, Reading/Info captures, 144 feedback states, all 144 high-risk theme captures, 36 fullscreen captures, nine Resume captures and Continue Learning. Contact-sheet mappings identify the native PNGs. `visual-review-log.json` records reviewed sheet SHA256 values; older retakes remain identifiable. Native full-size PNGs are retained. Stitched Reading boards can show seams/rounded-corner artifacts from combining scroll captures; these are inspection artifacts, not claimed browser defects. Scenario theme interaction captures beyond the high-risk samples were functionally tested; this report does not claim every redundant capture was separately viewed.

Representative evidence: `L02-1920-en-S5-presentation.png` (VPN boundary), `L05-1366-th-S3-presentation.png` (DMZ policy), `L08-1920-en-S5-presentation.png` (duties), `final-theme-*.png`, `final-fullscreen-*.png`, `final-resume-*.png`. The complete artifact manifest includes their hashes.

## Automated results and failure classification

Commands run from repository root:

```powershell
node --test --test-reporter=tap tools/verify-learning-d4-*.mjs
node artifacts/qa/domain-4-completion/run-regressions.mjs
node --test --test-reporter=tap tools/verify-vocabulary-*.mjs tools/verify-exam-vocabulary.mjs tools/verify-phase4-quiz-engine.mjs
```

| Suite | Actual result | Evidence |
| --- | --- | --- |
| Nine lesson focused suites | 279/279 pass (33/30/30/33/33/27/30/33/30) | `d4-node.tap` |
| Domain 4 completion gate | 11/11 pass; combined **290/290** | same TAP; `verify-learning-d4-completion.mjs` |
| Exact shared/D1–D3 entry command, 39 files | Entry 430/435 pass, five fail; final **426/435 pass, nine fail** | `entry-node-command.json`, entry/final TAP, `final-shared-node-results.json` |
| Quiz/Vocabulary auxiliary suite | 50/59 pass, nine fail | `protected-feature-node.tap` |
| Quiz engine sub-suite within auxiliary suite | **7/7 pass**, five bank counts 142/65/93/156/127 = **583** | same TAP |

The regression runner uses the exact saved entry command, including catalog/course/progress/viewer, all Domain 1 and Domain 2 lessons and all six Domain 3 lessons. It does not omit failing suites. Focused checks cover real DOM rendering, full bilingual explanations/Info, malformed-data gating, scenario feedback/state/cleanup, catalog validation, stable IDs, independent reload/Resume and protected hashes. No existing tests, expected hashes or bank fixtures were changed.

Five failures already present before production edits:

| Test location | Classification and evidence |
| --- | --- |
| `verify-learning-ai-applications.mjs:58` | Historical snapshot mismatch: prior D2 hash expected `c48…`, entry already `a317…`; same assertion fails in entry TAP. Current D2 bytes match this task's entry. |
| `verify-learning-d2-completion.mjs:56` | Historical obsolete non-D2 catalog snapshot predates published Domain 3; entry failure retained. |
| `verify-learning-d2-completion.mjs:62` | Historical stale repository-source path expects `Domain 4/D3 sum.md`; actual file is `D4 sum.md`. Same missing-path failure at entry; original files untouched. |
| `verify-learning-d2-grc-tools-risk-register.mjs:369` | Historical objective availability expectation: old test expects 2.2–2.4 unavailable despite existing published D2 lessons. Entry failure retained. |
| `verify-learning-d3-integration.mjs:9` | Historical Objective 3.1 gate expects 3.2 empty/unavailable despite completed Lessons 4–6. Entry failure retained. |

Four newly triggered failures are obsolete prior-task boundaries, not failing Domain 4 behavior:

| Test location | Classification and evidence |
| --- | --- |
| `verify-learning-d2-business-continuity-bcp.mjs:338` | Old Git allowlist rejects the authorized Domain 4 source-inventory addendum. Diff is append-only; original prefix checked. |
| `verify-learning-d2-disaster-recovery-drp.mjs:361` | Same obsolete prior-task Git allowlist. |
| `verify-learning-d2-grc-foundations.mjs:360` | Same obsolete prior-task Git allowlist. |
| `verify-learning-d3-completion.mjs:67` | Old completion snapshot freezes every non-D3 catalog domain, including an empty Domain 4. Authorized D4 publication changes that branch. New gate proves all non-D4 branches unchanged. |

Auxiliary Vocabulary failures: five `verify-exam-vocabulary.mjs` assertions and three `verify-vocabulary-card-fix.mjs` assertions still expect old Coming Soon/card-grid behavior; these protected files and relevant runtime files are entry-identical. They were not part of the saved 435-test entry command, so this report does not claim a fresh pre-edit auxiliary run. Their expectations demonstrably predate current entry behavior. The ninth auxiliary failure is environment-related: `verify-vocabulary-responsive.mjs` cannot import the absent `playwright` package. No package was installed and no assertion was weakened. These do not establish a new Domain 4 regression; the entire repository suite is not green.

## Preservation and exact file manifest

Entry Git tree was clean at HEAD `d5024844f6a8bf62c4ba9b46a6c01609667feb95`; 3,118 pre-existing files were hashed before edits. **3,112 outside the six authorized shared files remain byte-identical**, including all Domain 1–3 lessons/renderers/styles/tests/sign-off documents, Reading Notes, Quiz, Vocabulary, question banks, progress/schema and other certifications. Domain inventories remain D1 12/103, D2 8/55, D3 6/42. Non-D4 catalog branches are deep-equal to entry. Existing tracker/inventory bytes are retained as prefixes. No concurrent uncommitted work existed at entry; no unrelated files were overwritten or removed.

Exactly six existing files modified:

1. `content/isc2-cc-2026/learning/published/catalog.json` — Domain 4 lessons/status and catalog revision only.
2. `js/ui/learning/renderers.js` — additive exact D4 dispatch/class and owned abort forwarding.
3. `js/ui/learning/lesson-info.js` — exact D4 full-explanation allowlist.
4. `index.html` — one D4 stylesheet link.
5. `docs/plans/isc2-cc-2026/domain-4-source-inventory.md` — dated addendum only.
6. `docs/plans/task.md` — appended Domain 4 delivery row only; previous task rows untouched.

New production files: eighteen lesson JSONs (nine published, nine staged), `js/ui/learning/domain4-storyboard.js`, `js/ui/learning/domain4-presentations.js`, `css/learning-domain4-presentations.css`. New verification: nine lesson wrappers, `tools/verify-learning-d4-completion.mjs`, `tools/fixtures/learning/domain4-checks.mjs`. Four new planning/delivery documents are this report, academic audit, coverage matrix and roadmap. Total outside QA artifacts: **42 files (six modified, 36 created)**. Exact individual paths and SHA256 values are in `artifacts/qa/domain-4-completion/changed-files.json` and `changed-files.txt`; evidence files are in `artifact-manifest.json`. Volatile isolated Chrome-profile files are explicitly excluded from the evidence hash manifest. `preservation-results.json` records every intentional existing-file change and zero unexpected changes.

Storage remains **`sec_cert_learning_progress_v1`, schemaVersion 1**. Scenario answer state is transient: retained across language/mode/navigation/fullscreen during the viewer session, reset on reload; saved slide position persists. No storage migration. No dependencies added; Node built-ins, installed Chrome and Windows System.Drawing were used for verification only.

## Preview and human review

From `D:\_Coding\SEC-CERT-TEST`, run `python -m http.server 4214 --bind 127.0.0.1`, then open `http://127.0.0.1:4214/`. Choose ISC2 CC 2026 → Learning Slides → Domain 4 → an objective → lesson selector → Start Learning or Resume. If 4214 is already running, use it; do not replace another preview service. The lessons are published on the normal static site, not fixture-only routes.

Human acceptance checklist:

- [ ] Review academic explanations, official versus supplemental scope and native Thai wording.
- [ ] Review the white compositions at both desktop sizes on an actual display.
- [ ] Try all nine scenarios, Reading, Info and language controls.
- [ ] Confirm your own saved-position/Resume expectations and normal headed fullscreen behavior.

Remaining limitations: no mobile/tablet, Safari/Firefox/Edge matrix, EN+TH browser matrix, screen-reader audit, physical-display/DPI or headed browser QA. English/Thai and combined-mode DOM rendering are tested; required Chrome EN/TH desktop matrix is complete. Diagram flows are conceptual, not deployable firewall/cloud configurations. Historical tests listed above remain unresolved outside task scope. No known outstanding Domain 4 implementation blocker; recommendation is **ready for human visual and academic acceptance review**, not accepted on the user's behalf.
