# Independent Reading Notes audit — Domains 1–4

Date: 2026-10-31 (Asia/Bangkok). Repository: `D:\_Coding\SEC-CERT-TEST`. Audit only. No remediation, staging, commits, pushes, resets, reversions, or human acceptance actions.

## Executive assessment

The textbook has substantial useful teaching content, correct high-level objective coverage, readable Thai prose, worked risk examples, meaningful comparisons and scenario reasoning. It needs controlled academic and accessibility corrections before it should be considered ready for unrestricted textbook acceptance. A large redesign is not justified.

**94/94 subsections were source-reviewed and DOM-inspected: Domain 1 24/24, Domain 2 29/29, Domain 3 17/17, Domain 4 24/24. Coverage is 100% in each domain.** Fourteen official objective sections match the expected structure. The 94 headings include three separate local review sections in Domains 2–4; they are not 94 official ISC2 subobjectives. No expected subsection is missing.

The consolidated register contains **40 confirmed defects: P0 0, P1 4, P2 29, P3 7**, plus **32 separately classified qualifications/recommendations**. Counts deduplicate repeated manifestations and promoted reviewer concerns. A source qualification is not counted as a confirmed error merely because it has a remediation priority. No P0 was identified within the audited scope.

The four highest-severity defects are the final Identification/Authentication shortcut, unreadably scaled desktop diagrams, lost reading position on reload, and keyboard access to an invisible mobile drawer. These coexist with passing existing tests. Task 145 improves the GRC table substantially at wide desktop sizes but does not fully resolve its padded keyword-cell width or narrow-layout tradeoffs.

Detailed evidence, exact source lines, primary references and correction concepts are in the [finding register](reading-notes-independent-findings-register.md). Every subsection is listed in the [coverage matrix](reading-notes-independent-coverage-matrix.md). The [roadmap](reading-notes-independent-remediation-roadmap.md) proposes reviewable tasks only.

## Method and current-state preservation

1. Read `docs/plans/task.md`, inspected the working tree, located all four Reading Notes Markdown/metadata/scenario sources, and read the renderer, loader, parser, progress store, routing and relevant CSS/tokens. Historical Tasks 142–145 and earlier Reading Notes reports were context, not proof.
2. Saved initial HEAD, git status and SHA-256 values for 136 production JS/CSS/index/Reading Notes files in [baseline.json](../../../artifacts/qa/reading-notes-independent-audit/baseline.json). Concurrent Learning Slides work was already present, including modified `index.html`; it was retained. The final preservation record compares current hashes and tracked/untracked state.
3. Independent domain source reviews read every subsection, all 44 scenarios in both source representations, all 24 invoked diagram payloads, metadata and Domain 1's three structured payloads. Source-review ledgers record local observations rather than assigning a blanket PASS.
4. Checked scope against the official outline effective September 1, 2026. Detailed claims were checked against NIST, RFC Editor/IETF, ISC2 ethics, EDPB/European Commission, ISO/ISACA, government security guidance and provider documentation. The linked official PDF was reviewed by the D1/D2 reviewers; the D3/D4 reviewer verified official HTML and documented its PDF-tool resolution failure. The current ISC2 page contains some stale introductory labels, so the detailed domain table/PDF take precedence. [Official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).
5. Used real installed **Chrome 156.0.8078.74**, headless with CDP, serving the unchanged working tree on loopback with a fresh temporary profile. Tested all seven requested viewports and both themes, with each subsection's heading/anchor, structure, text, tables and layout examined in every state.
6. Inspected representative real screenshots and contact sheets, all 24 diagram previews in desktop/mobile forms, and targeted full-size images. Follow-up tests used fresh document loads to isolate resume/scrollspy failures from repeated route-handler accumulation. Measured steady-state contrast after theme transitions settled.

Browser testing writes test data only to an isolated browser profile. No user's normal browsing profile or learning progress was used. Synthetic parser input was evaluated as returned strings only; no injected markup or event handler was inserted or executed.

### Recovery from the interrupted audit

All three reviewers stopped at the usage limit before saving their original reports. Their earlier progress messages were treated as leads, not verified findings. They resumed, saved complete ledgers, and exported normalized findings before consolidation.

`artifacts/qa/reading-notes-independent-audit/browser-main.txt` is the **93-line audit driver body**, concatenated into `chrome-audit.mjs`; it is not an app file and is not imported by production. The original files remain preserved. The first browser attempt collected zero states because Chrome exited within the sandbox. Attempt 2 reached Chrome but a driver regex-escaping error prevented data collection. Attempt 3 corrected the audit driver and completed the matrix. The failed results remain available and are not counted as coverage.

The first contrast probe in `focused-results.json` sampled an active theme transition. Its contrast values are excluded. `contrast-final.json` contains the corrected settled-theme measurements. Existing evidence was preserved rather than rewritten to hide these limitations. The intermediate [recovery checkpoint](../../../artifacts/qa/reading-notes-independent-audit/checkpoint-resumed.md) remains a historical checkpoint; this report and the final manifest supersede its outstanding-work list.

## Coverage and preserved strengths

| Domain | Official objectives | Actual local subsections | Source review | Chrome subsection states |
|---|---|---:|---:|---:|
| 1 — Security Principles | 1.1–1.5 | 24 | 24/24 | 336 |
| 2 — Security Governance | 2.1–2.4 | 29 | 29/29 | 406 |
| 3 — IAM / Access Controls | 3.1–3.2 | 17 | 17/17 | 238 |
| 4 — Networking / Cloud | 4.1–4.3 | 24 | 24/24 | 336 |
| Total | 14 objectives | 94 | 94/94 | 1,316 |

The rendered inventory contains 24 diagrams, 22 comparison tables, 46 distinction cards and 44 scenarios. The table/diagram/scenario counts were reconciled against current sources and rendered output. Domain 5 and unrelated features were excluded from substantive audit.

Preserve these strengths:

- Paragraph-led introductions with English exam terminology, clear Thai explanations, lists for related examples and tables for genuine comparisons. The reader already has more than a generic dashboard/card layout.
- Correct core CIA distinctions, authorization examples, insurance/retained obligations, governance versus implementation, least privilege versus SoD, common access-control models, and network segmentation rationale.
- Correct SLE/ARO/ALE arithmetic in all inspected worked examples, including occurrence rates below and above one. Formula presentation works with KaTeX in the connected run.
- Explicit scenario/question/answer/reasoning grouping, with substantively reasonable intended answers in all 44 scenarios. Qualifications to reasoning are recorded separately; no wrong answer key was invented for an absent topic.
- Semantic table column headers with scope attributes; one h1 followed by objective h2/topic h3 organization; named diagram regions and SVG accessible names. These are foundations to refine, not discard.
- Working light/dark themes, readable phone-size HTML diagram replacements, native horizontal keyboard scrolling of overflow tables in this Chrome, functional domain selection, browser Back/Forward domain routing, and defensive storage parsing.

## Top ten learner-impact issues

| Rank | Issue | Evidence / impact |
|---:|---|---|
| 1 | RN-I-003 — reload loses location | Four isolated domain tests return near objective starts despite saved deep offsets. |
| 2 | RN-I-006 — closed mobile drawer receives focus | Keyboard users tab through controls at negative x coordinates; the open overlay lacks coherent focus/Escape handling. |
| 3 | RN-I-001 — desktop diagram text shrinks | At 1024px, labels reach 5.63–6.72px; some remain 8–10px on wide desktop. |
| 4 | D1-F01 — Identification becomes Authentication | The final revision row contradicts the lesson's own claim-versus-proof distinction. |
| 5 | D34-05 — cloud accountability versus operations | “100% customer” language obscures provider responsibilities for managed identity/data services. |
| 6 | D1-F07 — cost-benefit rule | Desktop compares cost with all untreated ALE; mobile compares with loss reduction. These teach different decisions. |
| 7 | D1-F02 — MFA category/context mixing | Location is presented beside independent authentication factors without clearly excluding it as a substitute. |
| 8 | D2-02 / D2-04 — measurement and recovery meaning | MTD becomes catastrophe/irreversible harm; metric is narrowed to raw data despite KPI/KRI being metrics. |
| 9 | D34-03/04/09 — foundational network inaccuracies | ARP layer, MAC-derived SLAAC assumption and generic .255 broadcast rule can produce incorrect reasoning. |
| 10 | RN-I-008 — instructional contrast | Small answer/supporting text and colored SVG labels miss normal-text contrast thresholds. |

Other important corrections include GDPR scope based on citizenship, unsupported ethical word-order precedence, ABAC's missing action category, MAC security guarantees, cloud-provider generalizations, the clipped cloud legend, and accumulating route listeners.

## Domain 1: academic and teaching observations

All 24 subsections, eight scenarios, twelve diagrams and structured MFA/risk/control-category payloads were inspected. [Complete ledger](../../../artifacts/qa/reading-notes-independent-audit/domain-1-source-review.md).

Confirmed corrections include the Identification shortcut (D1-F01); location/MFA taxonomy (F02); external-only threat definition (F03); reversed Thai vulnerability relationship (F04); GDPR citizenship rule (F05); ordinary logs implying non-repudiation (F06); inconsistent ALE decision rules (F07); incorrect NIST lifecycle attribution (F08); inferred priority among Canon 2 adjectives (F09); and the jurisdiction-free legal protection claim in the due-care mobile diagram (F10). Each is grounded in source locations and references in the register.

No arithmetic error was found. The five-stage risk lifecycle can remain a teaching model if clearly identified; its named-source attribution needs repair. The official public outline does not establish every claimed exam mnemonic. Strict canon precedence, course-specific lifecycle wording and the seven-year tax example require provenance or a bounded example label; they are not all proven false by absence from a public page.

The control-function diagram already has an overlap caption, which is worth preserving. Its primary Before/During/After panels still make delayed detection and correction during an ongoing event harder to understand. The seven example defense layers are valid as an illustration, but a central asset beside unconnected lists is weaker than a diagram showing joint protection. Neither seven layers nor an added operational-control category should be presented as a mandatory ISC2 taxonomy.

The current official web guidance adds foundational AI applications; the notes have no corresponding Domain 1 examples. This is a dated supplemental-guidance coverage recommendation, not an invented sixth official objective. Add a few precise examples where they teach the existing principles rather than a large new chapter. [ISC2 guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

## Domain 2: academic and teaching observations

All 29 subsections, twelve scenarios and four diagrams were inspected. [Complete ledger](../../../artifacts/qa/reading-notes-independent-audit/domain-2-source-review.md).

The main confirmed defects concern MTD's catastrophic interpretation (D2-02), metric/raw-data taxonomy (D2-04), DR being translated as a plan in the scope diagram (D2-06), and Thai metric repeatedly written as matrix (D2-08). GRC fundamentals, risk ownership, BC/DR's broad relationship, awareness/training/education and most KPI/KRI examples are useful and substantially sound.

RTO is a qualified precision issue, not proof that every maximum-downtime expression is wrong. Teach the system restoration target in relation to business tolerance and reprocessing time. RPO's look-back example is arithmetically sound; the latest usable backup is evidence of achievable recovery, not inherently the requirement itself. [NIST contingency planning](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf).

MTTR has multiple legitimate expansions. The notes acknowledge them but should define the chosen timestamps and avoid asserting a universal ISC2 initiation-only interpretation without an official course citation. The password-length recommendation should identify its standard/context; a 14-character organizational example is not universally invalid. Checklist versus tabletop, hot-site timing, phishing-family nesting and password-verifier wording need bounded clarification. These are labeled as qualifications in the register.

The current ISC2 web supplement includes AI continuity/configuration/dataset recovery, model drift and AI risk indicators; only deepfake social engineering is represented here. The proposed expansion is compact application of existing concepts. No requirement to add a rigid five-tier DR testing taxonomy was inferred from the high-level outline. [ISC2 guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

## Domain 3: academic and teaching observations

All 17 subsections, twelve scenarios and four diagrams were inspected. [Complete ledger](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

Correct the CSF 2.0/PR.AC version mixture (D34-01), inconsistent ABAC categories that omit the requested action (D34-02), MAC's absolute highest-security/leakage guarantee (D34-11), and LDAP being treated as a directory product rather than a protocol (D34-15). The main DAC/RBAC explanations and SoD/least-privilege examples are educationally useful.

The six provisioning activities are a plausible example; “standard order” and “always define roles first” need bounded context so learners reason from approval/identity/access needs rather than keyword triggers. Disable versus lock, account retention and biometric assurance need precision, without recommending immediate deletion of leaver accounts.

OAuth 2.0/OIDC/SAML are absent from the actual lesson, not incorrectly equated there. OAuth is authorization and OIDC adds an identity layer; a concise optional comparison can improve the IdP lesson, but absence is not promoted to a confirmed official-outline coverage defect. [OAuth specification](https://www.rfc-editor.org/rfc/rfc6749.html), [OIDC Core](https://openid.net/specs/openid-connect-core-1_0.html).

## Domain 4: academic and teaching observations

All 24 subsections, twelve scenarios and four diagrams were inspected. [Complete ledger](../../../artifacts/qa/reading-notes-independent-audit/domain-3-4-source-review.md).

Correct ARP's layer (D34-03), SLAAC's MAC-derived assumption (04), mask-free .255 broadcast rule (09), APIPA/RFC1918 classification (10), hidden-SSID beacon explanation (12), FaaS unconditional scale-to-zero statement (13), and socket-as-Session-protocol taxonomy (16). The cloud section needs a distinction between retained customer accountability and provider operation (05), explicit AWS context for SG/NACL behavior (06), and nonexclusive private-subnet egress examples (07). PaaS platform-maintenance duties in the named Beanstalk example are a separately qualified service-specific concern (14).

TCP versus UDP, NAT not being encryption, VLAN enforcement, microsegmentation, DMZ goals, five cloud characteristics and deployment comparisons provide good foundations. Provider- and protocol-specific qualifications are preferable to adding more memorization lists. The IPv6 section does not actually say every IPv6 packet is automatically encrypted, so that was not logged as a factual defect. HTTP/3, DNS/TCP, FTPS and legacy SSL wording are scoped recommendations rather than invented wrong answers.

The official detailed 2026 names for Domains 3/4 differ from their shortened current labels; metadata should identify abbreviations honestly (D34-08). The shared-responsibility SVG also clips its CSP legend (RN-I-018), independently of the academic boundary issue.

## Reading experience, semantics and accessibility

Computed body text is **15.5px / 27.9px**, lead text **16px / 28.8px**, h2 **24px**, h3 **19px**, h4 **16px**, and table body **14.72px / 24.29px**. The prose uses Noto Sans Thai first; English headings use Space Grotesk with Thai fallback and code labels use JetBrains Mono. Fonts and KaTeX loaded in the successful connected browser run. These body sizes are not inherently too small; SVG labels and low-contrast supporting labels are the more serious typography problems.

With the sidebar expanded, the prose width is about **934px at 1920px**, **917px at 1366px**, **575px at 1024px**, **704px at 768px**, **330px at 390px**, **315px at 375px**, and **260px at 320px**. Those widths are computed values, not guessed screenshot dimensions. The wide desktop reading column is long for sustained English-heavy prose, while 1024px loses too much useful component space to navigation. A longer line is a readability recommendation, not automatically a WCAG AA failure. Retain wider areas for comparisons and meaningful graphics while considering a prose measure independently.

The 3641-line Reading CSS defines screen/article/component widths, 4/8px rhythm tokens, table tokens and responsive rules. Main navigation changes at 840px; diagram representations at 768px; smaller toolbar/component adjustments occur at 600/480/360px. That mismatch is central to the 1024px problem. Unused left space in scrolled desktop screenshots is primarily a broken sticky-navigation symptom, not proof that all whitespace should be removed.

The material generally introduces concepts before lists. Domain 4 OSI and protocol sections become dense nested study notes, while review sections repeat definitions, distinction cards, tables and keyword triggers. Add one traced communication example where it explains relationships; reduce repeated wording rather than increasing length. Phone diagram replacements are legible but sometimes become long boxed lists with repeated banners and badges. Keep cards only where they improve grouping; a diagram, compact table, paragraph or numbered real process may communicate better.

Accessibility findings are evidence-backed but do not constitute formal conformance certification:

- Hidden mobile drawer focus and its overlay behavior are confirmed keyboard defects (RN-I-006). Native table scrolling works in this Chrome; missing tabindex alone is not a failure.
- Thai passages have no language-of-parts markup (RN-I-007), relevant to WCAG 3.1.2. No native speech pronunciation claim was made. [W3C language guidance](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).
- Settled scenario labels, muted supporting text and colored SVG labels miss 4.5:1 normal-text contrast (RN-I-008). White text on solid green is 2.54:1 even when the surrounding theme changes. [WCAG contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum).
- SVGs have names, and tables have column scopes. Refine heading levels and consider fuller equivalent descriptions where a named SVG does not convey its relationships (RN-I-013 recommendation).
- Raw LaTeX aria-labels exist in offline semantic fallback; the connected KaTeX run does not expose those labels. Historical normal-mode screen-reader claims are not independently reproduced (RN-I-011).
- Narrow reflow was tested at 320px and real page/pinch zoom at 200% was measured. Desktop toolbar/Ctrl+ zoom and OS font enlargement remain manual limitations. Reduced-motion support is inconsistent beyond the floating scroll control (RN-I-015).
- Some chevrons are 22px or smaller and mobile header targets are about 30–34px high. A target-size/spacing review is appropriate; 44px is a usability goal, not the WCAG 2.2 AA minimum, and the spacing exception must be considered before declaring a 2.5.8 failure.

## Navigation, progress and architecture

Domain selection, direct route mounting, explicit topic scrolling, in-app Back and browser Back/Forward work at a broad level. All 94 IDs resolve. The active subsection and location persistence do not work consistently: objective intersections overwrite topic hashes, D2–D4 topic headings are not in the scrollspy query, and anchor restoration discards the stored within-topic offset. Location memory therefore exists but is unreliable for continuing long study.

Cross-domain hash remounts add window scroll/resize handlers: **1→2→3 listeners** in the fresh route experiment. Stale readers can write the new scroll offset to older domain entries (RN-I-005). This is distinct from intentional per-domain location storage. Fix lifecycle and spy/restore behavior together, preserving the existing schema.

The desktop sticky rail scrolls off-screen, while the mobile toolbar also leaves the viewport. The floating top button remains a way back, but it does not replace usable section navigation. Completion history and next-subsection actions are product decisions; the current schema is a location bookmark, not a completion ledger (RN-I-017).

The renderer can support varied educational formats: raw prose/lists/tables, inline/block math, semantic diagrams, structured scenarios and categorical components already coexist. A rewrite is unnecessary. Improve explicit semantic hooks, scope selectors/tokens, and avoid exact-header text sniffing for special tables. The HTML passthrough is a trusted-content parser, not a full sanitizer: allowed attributes survive. No current attacker-controlled ingestion path was established (RN-I-012); do not label it an exploitable vulnerability without that evidence.

## Task 145 — independent GRC table verification

Source: `domain-2.md` §2.1.4, `markdown-parser.js:459–471`, `reading.css:2936–3013`. NIST CSF, ISO/IEC 27001 and COBIT meanings were checked independently; no framework mix-up was found. Exam keywords remain unbroken in both themes.

| Viewport | Wrapper width | Table width | Keyword column | Observed behavior |
|---|---:|---:|---:|---|
| 1920×1080 | 932px | 932px | 223.70px | Visually balanced; keywords fit. |
| 1366×768 | 915px | 915px | 219.61px | Visually acceptable; keywords fit. |
| 1024×768 | 573px | 780px | 187.22px | Contained scroll required; last keyword exceeds padded cell. |
| 768×1024 | 702px | 780px | 187.22px | Contained scroll required. |
| 390×844 | 328px | 780px | 187.22px | Clear individual columns; most comparison context off-screen. |
| 375×812 | 313px | 780px | 187.22px | Same narrow comparison tradeoff. |
| 320×568 | 258px | 780px | 187.22px | More than three wrapper widths of content; requires repeated scrolling. |

The longest keyword measures 182.30px, but the narrow table's final content box is only 155.22px after padding. The wrapper scroll extent becomes 791px. This is an actual residual cell-fit problem, not midword fragmentation. It explains why asserting nowrap plus zero page overflow was insufficient. The earlier report's “no scroll needed” at 1024px is not reproduced.

Dark blue and light #1d4ed8 keyword styling are readable in the inspected images. The wrapper scrolls with pointer/script and ArrowRight in this Chrome. No page-level horizontal overflow was measured, but that alone is not a visual pass. The fix is **partially successful; residual RN-I-009 remains; human visual acceptance is not granted**.

Similar mobile comparison burden appears in D1 document hierarchy, D3 model/PoLP comparisons and D4 TCP/IP/services tables. There is no evidence that every table should be redesigned or that horizontal scrolling of data tables inherently violates WCAG reflow. Prioritize the comparisons learners actually need to read across (RN-I-014).

## Historical Tasks 142–145: current dispositions

| Historical finding | Independent current disposition |
|---|---|
| RN-SHARED-001 | Storage now exists and unit checks pass; accurate continuation remains open as RN-I-003/005. |
| RN-SHARED-002 | Cold direct routes mount the reader/domain; topic hashes are later displaced by scrollspy. Partial, not blanket acceptance. |
| RN-SHARED-003 | Current code binds window scroll/resize and ResizeObserver. Old “missing listener” diagnosis is superseded; exhaustive rapid-wheel jitter not measured. New disposal leak confirmed. |
| RN-SHARED-004 | Language selector remains absent. Human preference/edition decision, not a proven factual or functional defect. |
| RN-D1-001 | Task 144 phone representations confirmed present and legible; desktop/1024 SVG readability still open under RN-I-001. |
| RN-D1-002 | No HTML comments remain in the current diagram templates; old comment-count issue not reproduced. |
| RN-D1-003 | Currency escape leakage remains confirmed, RN-I-010. |
| RN-D1-004 | Raw labels remain in fallback code, but are not active in normal KaTeX run. Qualified RN-I-011; speech untested. |
| RN-D1-005 | Extra biometric/token failure-mode material is optional depth; not an established outline defect. |
| RN-D2-001 | All four mobile representations present; readable phone labels confirmed. Tablet/desktop small labels remain. |
| RN-D2-002 | DR testing coverage is brief; checklist/tabletop clarification justified. No official requirement for one fixed five-tier taxonomy established. |
| RN-D2-003 | Visual rhythm is a low-priority editorial judgment; not independently classified as a blocking defect. |
| RN-D3-001 | SAML/OIDC/OAuth comparison still absent; optional precision/enrichment, not a false existing statement. |
| RN-D3-002 | Current headings/prose distinguish SoD duties and least privilege; the old shared-Thai-phrase defect was not reproduced. |
| RN-D4-001 | Cloud responsibility nuance remains confirmed and traced, D34-05. |
| RN-D4-002 | Wi-Fi 6E/7 omission is not an established required-scope defect; defer optional expansion. |
| RN-D4-003 | Small labels/spacing matter, but prioritize measured font scale and clipped legend over arbitrary margin polish. |
| RN-TEST-001 | Existing source/string assertions do not establish effective SVG font geometry; new Chrome measurements expose the gap. |
| RN-TEST-002 | Foundation collapse assertion uses mock DOM/hidden state. Current CSS does honor hidden; do not call it a current accordion failure solely from old test weakness. |
| Task 145 table | Improved wide-desktop balance/word preservation verified; 1024 scrolling and final-cell sizing remain open. |

The historical reports' acceptance checkmarks are not adopted or modified. Fixing a historical symptom does not establish that its replacement has correct educational semantics.

## Browser evidence and executed checks

Evidence root: [artifacts/qa/reading-notes-independent-audit](../../../artifacts/qa/reading-notes-independent-audit/). [Manifest](../../../artifacts/qa/reading-notes-independent-audit/manifest.json) maps each screenshot to domain, subsection/component, viewport, theme and finding IDs, and labels which results supersede failed/diagnostic probes. [Machine-readable coverage](../../../artifacts/qa/reading-notes-independent-audit/coverage.json) contains 94 records.

The browser matrix executed **56 configurations / 1,316 subsection states**, across 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812 and 320×568 in Light/Dark. Heading and anchor matching passed in every state. Measured page horizontal overflow is nonpositive (desktop values include a 15px scrollbar), but clipped SVG labels and cell overspill still exist. KaTeX's intentionally visually hidden MathML generated some clipping candidates; those were not falsely reported as lost visual content.

The seven existing read-only suites executed successfully, **103/103 checks**:

| Suite | Result |
|---|---:|
| `node tools/verify-reading-persistence.mjs` | 20/20 |
| `node tools/verify-reading-notes-foundation.mjs` | 9/9 |
| `node tools/verify-reading-notes-domain1.mjs` | 10/10 |
| `node tools/verify-reading-notes-domain2.mjs` | 9/9 |
| `node tools/verify-reading-notes-domain3.mjs` | 10/10 |
| `node tools/verify-reading-notes-domain4.mjs` | 10/10 |
| `node tools/verify-reading-notes-dom-integrity.mjs` | 35/35 |

The new audit drivers, stored only under the evidence directory, also completed: matrix, isolated functional/contrast follow-up, settled contrast, final route/focus/zoom/parser checks, and SVG geometry checks. They are measurement runs that found defects, not assertions that the app passed all quality gates. Exact logs/results are preserved. Historical browser suites with fixed output directories were not rerun because they overwrite existing artifacts. Unrelated quiz/slides/vocabulary suites were not run for this audit-only change.

## Limitations and readiness

This is a complete bounded audit of the requested corpus and browser matrix, not academic endorsement, a claim that all possible edge cases were proven correct, or human acceptance. No subsection source/DOM review remains outstanding. Manual screenshot inspection is representative; all subsection layout states were machine-inspected rather than every page manually read at every viewport.

No native screen-reader/audio/Braille testing, physical touch-device testing, cross-browser testing, desktop toolbar/Ctrl+ zoom or OS font-scaling test was performed. Page/pinch zoom at 200% and 320px reflow were checked. Legal/tax examples and course-specific mnemonics without an accessible source remain qualified. CISA's direct phishing PDF fetch returned 403; the taxonomy was independently supported by a retrieved Canadian government source. Some minor FTPS/SSL recommendations remain explicitly reference-unverified and are not confirmed findings. The parser trust boundary does not establish current exploitability. No private ISC2 course content or exam items were accessed.

The recommended order is: high-impact academic corrections; reader position/lifecycle and mobile keyboard access; effective diagram legibility and clipped content; targeted contrast/language; GRC and selected comparison tables; semantic teaching refinements; optional progress/language/depth decisions. Review each proposed task separately.

Production source hashes and the working-tree preservation result are recorded in [preservation-final.json](../../../artifacts/qa/reading-notes-independent-audit/preservation-final.json). Exact new filenames, including all evidence, are listed in [files-created.txt](../../../artifacts/qa/reading-notes-independent-audit/files-created.txt).

**Independent Reading Notes Audit Complete — Pending Human Review**
