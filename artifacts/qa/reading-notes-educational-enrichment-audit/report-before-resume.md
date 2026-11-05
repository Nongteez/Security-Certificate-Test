# Reading Notes — comprehensive educational enrichment and visual planning audit

Audit date: 3 November 2026 (Asia/Bangkok). **Audit and planning only; implementation is not approved.**

The highest-value next step is to reconcile misleading Reading Notes statements with the more careful published Learning Slides. Existing tables, examples and 28 embedded diagram placements already cover most of the obvious visualization candidates. More media should follow those corrections, with only a few targeted additions. No production content, renderer, stylesheet, source learning material or production asset directory was changed by this audit. Nothing was committed or pushed.

## Repository and scope decision

The confirmed working production repository is `C:/Users/Settapon.cs/OneDrive/Desktop/Project/Security-Certificate-Test`, remote `https://github.com/Nongteez/Security-Certificate-Test.git`, baseline HEAD `69e9b575`. Confirmation uses the README, index/module layout, `js/core/reading-loader.js`, five published Reading Notes modules, and published lesson catalog. This confirms the application's local production source, not a live deployed site's identity or deployed revision. `D:/_Coding/SEC-CERT-TEST` was tested and is unavailable; historical report links to that location are not evidence that the two locations are identical. Existing modified and untracked work was preserved. See the evidence baseline and final preservation check.

The requested domain names describe the older outline. The [official ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), retrieved on the audit date, explicitly states an effective date of **1 September 2026** and gives the following current structure. Use it for this report; retain the existing anchors rather than reorganizing content under obsolete headings.

| Domain | Official current title | Weight | Objectives inspected | Reading topic/review anchors |
|---|---|---:|---|---:|
| 1 | Security Principles | 24% | 1.1–1.5 | 24 |
| 2 | Security Governance | 17.3% | 2.1–2.4 | 29 |
| 3 | Identity And Access Management (IAM) Concepts | 20% | 3.1–3.2 | 17 |
| 4 | Networking and Cloud Security Concepts | 21.3% | 4.1–4.3 | 24 |
| 5 | Security Operations and Incident Response | 17.3% | 5.1–5.5 | 34 |

These are the outline's rounded weights; do not infer an exact question allocation. The current outline explicitly includes quantum-resistant cryptography and discusses foundational AI applications across domains. These are not automatically out of scope. Algorithm internals, model development and vendor configuration remain unnecessary depth. The official page also retains an older introductory topic list; the dated detailed domain/objective list governs this audit's mapping.

## How to use the evidence

Evidence directory: `artifacts/qa/reading-notes-educational-enrichment-audit/`.

The three substantive domain reviews are integral appendices to this report, not optional summaries. Each provides the subsection-specific assessment, local source evidence, existing coverage and recommended disposition. The machine-readable inventory supplies exact current anchors and line ranges for all 128 topics, including review sections.

| Evidence file | Purpose |
|---|---|
| `domain-1-2-review.md` | Complete D1/D2 subsection dispositions, source comparisons, practical examples, visual decisions and exclusions |
| `domain-3-4-review.md` | Complete D3/D4 subsection dispositions and deduplication against published slides |
| `domain-5-review.md` | Complete D5 subsection dispositions, crypto/hardware/IR accuracy priorities and visual planning |
| `subsection-inventory.json` | All 128 metadata topic/review anchors, exact line ranges, diagram references and table/scenario indicators |
| `source-inventory.json` | All 277 primary-directory files with size and SHA-256, including every PNG |
| `baseline-files.json`, `baseline-git-status.txt` | Production/source snapshot and existing work before audit outputs |
| Contact-sheet JPGs and domain image indexes | Visual review evidence, with original source filenames retained in domain reviews/indexes |
| `research-sources.json`, `research-*.txt` | Primary-source access results, URLs, retrieved text and content digests; failed requests retained |
| `prioritized-backlog.json` | Consolidated implementation work packages with evidence, scope, priority and verification state |
| `media-planning-manifest.json` | Proposed assets and rights/accessibility requirements; no production assets created |
| `preservation-check.json` | End-of-audit file comparison and coverage checks |

Classification vocabulary: **KEEP EXISTING; IMPROVE EXPLANATION; ADD PRACTICAL EXAMPLE; ADD REAL-WORLD IMAGE; ADD NEW DIAGRAM; ADD INTERACTIVE VISUAL; REPLACE MISLEADING PRESENTATION; DUPLICATE — DO NOT ADD; OUT OF SCOPE; NEEDS VERIFICATION.** A subsection may need a correction while its existing diagram is retained. Priorities apply to remediation, not to predictions about exam-question frequency.

Knowledge provenance is recorded as **S** (source-derived; not automatically correct), **V** (independently checked against a named primary source), **E** (authored supplemental teaching example), or **O** (optional depth). A source slide can itself contain an error. Proposed scenarios are educational constructions, not documented incidents or official exam items.

## A. Source inventory and inspection coverage

The primary directory contains **24 Markdown files, five transcripts and 248 PNGs**; no PDF or DOCX is present there. Inventory includes the newly present `D1–D5 Example.md` files. The exact file list is in `source-inventory.json`, with per-domain source use described in the reviews. Reading Notes are loaded from `content/isc2-cc-2026/reading/domain-1.md` through `domain-5.md`; the corresponding metadata and scenario datasets were examined. Published lesson JSONs and relevant presentation/diagram definitions were compared to avoid recommending existing teaching a second time. Staged lessons are not treated as the published learner experience.

All **128 existing topic/review anchors** received a subsection disposition. All **248 source PNGs** received visual inspection at contact-sheet scale, with selected originals enlarged for ambiguous/high-impact material. Contact-sheet inspection establishes topic, layout and media coverage; it is not reliable OCR of every small label. Dense/ambiguous numbers remain flagged. Embedded Markdown image references were reconciled against the standalone screenshot corpus; their presence does not grant reuse rights.

Text inspection depth is deliberately distinguished: Reading Notes were reviewed by subsection, transcripts/source headings and relevant source passages were compared, and published slide explanations were inspected for deduplication. Large overlapping Example/Surm/question/review corpora were indexed/scanned with targeted substantive reading; this audit does **not** claim independent sentence-by-sentence validation of every redundant source file. Domain reviews state those limits. Repository reference copies, historical QA reports and older completion claims are secondary evidence, not substitutes for inspecting current content. No new browser rendering, keyboard, reduced-motion or screen-reader test of production was performed; recommendations about those are acceptance criteria, not passed tests.

Research used direct HTTPS access to primary pages because the connected search service twice returned HTTP 503. Retrieved-page status 200 alone is not proof of usable evidence: the nearly empty Thales terms response is explicitly unusable, and the initial PCI HSM URL returned 404 before its official linked `/pcie-hsms` replacement was found. External product images were **not downloaded, embedded or redistributed**. Candidate image pages are researched links; final crop/resolution and image-level rights checks remain pending.

## B. Existing coverage assessment

| Domain | Already effective teaching to retain | Implication |
|---|---|---|
| 1 | CIA examples, distinction between identity/authentication/authorization/accounting, three MFA factor families, risk arithmetic examples, treatment table, document hierarchy, contextual control categories, due care/diligence | Retain existing comparisons. Fix contradictions and unsupported exam language rather than append another CIA/MFA/risk gallery. |
| 2 | GRC coordination, detailed risk-register case, BIA and BC/DR distinction, RTO/RPO timeline, recovery-site comparison, DR testing matrix, social engineering triggers, KPI/KRI examples and reporting formats | Preserve existing diagrams and practical examples. Correct recovery targets and metric units/semantics in place. |
| 3 | JML, provisioning/review/deprovisioning examples, permission alignment, PoLP/SoD distinctions, DAC/MAC/RBAC/ABAC explanations and master matrix | A second lifecycle wheel or access-model matrix would add duplication. Reconcile overbroad permissions and conditional procedures. |
| 4 | OSI/TCP-IP correspondence, address/port tables, network device explanations, DMZ and segmentation, defense in depth, cloud responsibility diagram and matrices | Keep the useful overview layer. Qualify guarantees, map responsibilities to service context, and add a topology only where the passive/inline distinction is otherwise hard to see. |
| 5 | Data classification/masking/states, operational telemetry and triage, threat-actor/CTI comparisons, ATT&CK, IR/evidence/exercises, asset/change/patch management and testing distinctions | The core curriculum is extensive. Correct crypto, sanitization, hardware and IR attribution before expanding it. Published d5 slides already contain several clearer explanations. |

This assessment covers text as well as graphics. Existing diagram presence does not establish semantic correctness. For example, the D2 recovery and measurement diagrams warrant label correction even though creating another timeline/dashboard is unnecessary.

## C. Missing knowledge and shallow-explanation register

The full register is the union of the three domain reviews and consolidated backlog. The following are the most consequential findings.

| Work package | Existing location and problem | Recommended learning outcome | Provenance / verification |
|---|---|---|---|
| ENR-D1-01 | 1.5.3 and its quick-review statements contradict the existing caution about canon ordering | Explain ethical judgment and authority without inventing a universal conflict algorithm | S + V: [ISC2 ethics](https://www.isc2.org/ethics); no rule of automatic exceptionless priority established |
| ENR-D1-02 | 1.2.2 and repeated exam/keyword cues assert memorization or question frequency | Distinguish a useful worked risk calculation from an official requirement | V: current outline establishes conceptual scope, not question frequency or required formula memorization |
| ENR-D2-01 | 2.2.3/2.2.6 and `rtoRpoTimeline` mix tolerable outage/targets/actual backups and categorical irreversible harm | Distinguish business tolerance, recovery target and observed recovery; keep existing timeline | S + V: [NIST contingency guide](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final); diagram label mismatch confirmed locally |
| ENR-D2-02 | 2.4.6 scorecard units differ between screenshot/transcript; 2.4.8 measurement diagram overnarrows metrics | Specify denominator, window and unit; distinguish measures, KPI and KRI by decision use | S discrepancy verified; original numeric unit remains NEEDS VERIFICATION |
| ENR-D3-01 | 3.1.1 mover example grants Helpdesk Domain Admin and mandates removing all old rights first | Model approved task-scoped access, revoke obsolete rights and validate retained/new rights according to a controlled transition | S; policy-specific ordering is not a universal certification rule; verify with existing slide permission rationale |
| ENR-D3-02 | 3.1.6 framework overview can imply a mandatory sequence | Explain identity proofing, authentication and federation as related functions with different assurance decisions | V: [NIST 800-63-4](https://pages.nist.gov/800-63-4/); retain existing non-sequential visual intent |
| ENR-D4-01 | 4.1.5/4.1.6 and review cues overstate IPv6 security and TCP speed/delivery guarantees | Explain mechanisms and failure limits; protocol version is not proof of protected traffic | V: [RFC 8504](https://www.rfc-editor.org/rfc/rfc8504.html), [RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html) |
| ENR-D4-02 | 4.2.1/4.2.4 and 4.3.3 can overstate isolation or assign universal responsibility percentages | Explain enforcement paths, configuration and provider/service-specific responsibility | V: [AWS responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/); existing local slide context |
| ENR-D5-01 | 5.1.7 and review/scenarios describe signatures as generic private-key encryption/public-key decryption | Separate signing/verification from confidentiality and key establishment | V: [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final); current published d5-02 already supplies a correction source |
| ENR-D5-02 | 5.1.8 and review/scenario claims universal HSM certification, form factor, zeroization or throughput | Explain protected key operations; identify multiple form factors and model-specific validation | V: [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final), [Thales HSM portfolio](https://cpl.thalesgroup.com/encryption/hardware-security-modules/network-hsms), [YubiHSM](https://www.yubico.com/product/yubihsm-2/) |
| ENR-D5-03 | 5.1.4 references old sanitization guidance and categorical recovery impossibility | Choose approved media-appropriate sanitization and verify outcome; avoid absolute guarantees | V: [NIST SP 800-88 Rev. 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), published September 2025 |
| ENR-D5-04 | 5.3.3 labels an exact six-phase model as current NIST | Explain the local six-phase teaching aid without misattribution; distinguish current guidance | V: [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), published April 2025 |
| ENR-X-01 | Reading prose is predominantly Thai with English terms; bilingual slides are richer than notes | Assess full EN/TH meaning parity for each approved change; English terminology alone is not an English explanatory version | Direct inspection; human bilingual editorial review required |
| ENR-X-02 | Current outline includes foundational AI/PQC, with richer coverage in published slides than in notes | Selectively cross-reference or adapt existing slide examples to canonical Reading subsections; do not create an AI mini-course | V: dated official outline; exact excerpt/placement checks remain part of domain recommendations |

No claim of official exam frequency, actual exam wording or vendor-mandated exam knowledge is justified by this audit. "Exam relevance" should state what distinction a learner can reason about using an objective, not what supposedly appears most often.

## D. Real-world example opportunities

Examples should replace a weak example or add one missing decision, not repeat a complete explanation. Each below is an **E** teaching proposal. All should offer concise EN and TH versions with the same quantities, permissions and conditions.

| Target | Practical teaching decision | Deduplication decision |
|---|---|---|
| D1 1.5.3 | A staff member discovers client data exposure: protect evidence, report through authorized channels and seek appropriate guidance; do not publish the data to demonstrate concern | Improve existing ethics case. No new ethics hierarchy graphic. |
| D2 2.2.6 | Use one outage timestamp to contrast the acceptable recovery point/time with the observed backup and actual service restoration | Improve the existing timeline/example. Keep hypothetical numbers visibly labeled. No second timeline. |
| D2 2.4.6 | A scorecard row says "12" without unit: ask what denominator/window is needed before calling it a phishing rate | Clarify the existing row or replace it with an explicitly authored, internally consistent example; never silently repair source numbers. |
| D3 3.1.1 | Finance-to-Helpdesk transfer: remove payment approval, retain approved common access, grant only delegated helpdesk actions and test effective access | Replace the overprivileged existing case; avoid another JML story. |
| D4 4.1.8 | A suspicious web request is copied to a passive sensor; the same request must traverse an inline prevention control to be blocked there | One paired topology earns its space by showing traffic placement, which a device photograph cannot explain. |
| D4 4.3.3 | A customer grants public access to a cloud storage bucket despite the provider operating the underlying infrastructure | Adapt the existing shared-responsibility case. State the chosen service assumptions; no universal percentage matrix. |
| D5 5.1.7 | A software publisher signs a release; recipient verifies its signature, while a confidential message needs a separate encryption operation | Replace misleading mechanics and reuse the published lesson's distinctions. |
| D5 5.1.8 | An application requests a signature; the HSM performs the authorized operation and returns a signature, with the private key remaining inside the selected protected boundary | Conditional new operation diagram; do not imply every system forbids every wrapped backup/export mechanism. |
| D5 5.1.4 | Decommission an SSD holding restricted data: follow approved media-specific sanitization, verify and record the result before reuse/disposal | Replace categorical wiping/degaussing rules. A decision table is enough; no destruction animation. |
| D5 5.2.6 / X-02 | An AI-assisted SOC summary flags unusual access; analyst verifies the underlying events, business context and response authority | Adapt existing published material after exact duplicate check. Tool output is a lead, not proof of an incident. |

## E. Real hardware and product image opportunities

No image is approved for copying. These are researched **original publisher pages**, not stock-image search results. Product examples are optional recognition aids; none is an endorsement or official exam requirement. Image-level selection, crop, accessibility and permission must be checked before a later implementation.

| Candidate / target | Original source and rights holder | Educational purpose / current decision | Rights, attribution and local storage |
|---|---|---|---|
| IMG-HSM-NET / D5 5.1.8 | [Thales Luna Network HSM](https://cpl.thalesgroup.com/encryption/hardware-security-modules/network-hsms), Thales | Show one enterprise network-appliance form; pair only with a contrasting form, not as the definition of all HSMs. P3, conditional. | No redistribution permission established. Thales terms response unusable. Link only; no local storage. If licensed later, credit exact image owner/product and follow written terms. |
| IMG-HSM-USB / D5 5.1.8 | [YubiHSM 2](https://www.yubico.com/product/yubihsm-2/), Yubico | Demonstrate that an HSM can be USB rather than a rack appliance. One two-form comparison, not an additional key-operation diagram. | [Website terms](https://www.yubico.com/support/terms-conditions/yubico-website-terms-conditions/) do not establish permission for project photo redistribution. Link only; no local storage. Any later licensed copy needs owner/product credit and image-specific conditions. |
| IMG-HSM-PCIE / D5 5.1.8 | [Luna PCIe HSM](https://cpl.thalesgroup.com/encryption/hardware-security-modules/pcie-hsms), Thales | Alternate internal-card form if a two-form comparison still leaves confusion. | Same unresolved rights. Exclude from first implementation to avoid a third photograph teaching the same distinction. No local storage. |
| IMG-FW / D4 4.1.8 | [Fortinet FortiGate firewall family](https://www.fortinet.com/products/next-generation-firewall), Fortinet | Make a physical firewall recognizable beside the existing logical placement explanation; identify appliance as one deployment option. P3. | [Fortinet terms](https://www.fortinet.com/corporate/about-us/legal) authorize limited organizational product-support copying, not general redistribution in this public learning project. Link only; no local storage without separate permission. |
| IMG-KEY / D1 1.1.4 | [Yubico Security Key](https://www.yubico.com/products/security-key/), Yubico | Recognize a possession authenticator and distinguish device possession from a second password. | Existing factor teaching is already adequate. DUPLICATE — DO NOT ADD unless learner feedback shows physical recognition is missing; rights unresolved, link only. |

Original generic illustrations are the preferred fallback where rights are unresolved. Do not trace a product photo or recreate branded trade dress. Do not treat a Creative Commons reference concerning website terms text as a license for product photography. This audit did not establish an openly licensed external image suitable for immediate integration.

## F. Diagram, SVG and interaction planning

| ID / disposition | Learning objective, components and correct relationships | Layout, text complement and constraints |
|---|---|---|
| VIS-01 / ADD NEW DIAGRAM, conditional | **Passive detection versus inline prevention.** Client, switch/traffic path, server, mirror/TAP copy, IDS sensor/alert destination; second panel puts IPS in the traffic path. Solid line carries traffic, dashed line carries a copy, labeled alert is separate. | D4 `topic-4-1-network-devices`. Static two-panel original SVG with EN/TH labels. Complement the existing comparison by showing placement, not by repeating all device definitions. Detection does not itself block on the passive link; coordinated response is a separate possibility. IPS can operate in detection-only configurations; the depicted panel assumes prevention enabled. |
| VIS-02 / ADD NEW DIAGRAM, conditional | **Application requests a protected-key operation.** Application, authenticated request/policy check, HSM boundary with private key, signature response, verifier outside. The private-key icon stays inside the selected boundary. | D5 `topic-5-1-tpm-vs-hsm`; reuse the published key-custody semantics first. Top request/response arrows across a labeled boundary; no arrows for raw private-key export. Caption limits the example to a non-exportable signing key, not all HSM keys. A photo is optional physical recognition, not a substitute. |
| VIS-03 / IMPROVE EXPLANATION; reuse before new asset | **Sign/verify versus encrypt/decrypt.** Separate signing-key pair and recipient-encryption-key pair. Message+signature reaches verifier; ciphertext reaches recipient decryptor. | D5 `topic-5-1-hashing-digital-signatures` and previous crypto subsection. Adapt existing published d5-02 operation comparison. Do not label generic signing as encryption; avoid implying signatures hide plaintext. No third crypto visual if existing slide can be reused. |
| VIS-04 / REPLACE MISLEADING PRESENTATION | **Recovery objectives versus observations.** Retain the existing failure/acceptable recovery point/recovery deadline timeline, with separately marked actual backup and restoration if supplied. | D2 `rtoRpoTimeline`, `topic-2-2-rto-rpo`. Improve labels rather than add a second asset. A target is not automatically the last valid backup. Static diagram and accessible table remain primary. |
| VIS-05 / REPLACE MISLEADING PRESENTATION | **Measures used for decisions.** Retain metric/KPI/KRI/report relationships but allow percentages/averages and avoid a fixed "raw values → everything else" sequence. | D2 `effectivenessHierarchy`, 2.4.8. Correct existing definitions and dashboard freshness language. Purpose and reporting relationship, not mandatory processing stages. |

VIS-01 can optionally become **ADD INTERACTIVE VISUAL** after the static version proves useful: the learner presses "send example request", then advances from path to sensor observation to alert/block result. Only the copied/forwarded request marker and result state change. Motion teaches the difference between observing a copy and acting on traffic in path. Default is paused; provide Next, Previous, Reset and clearly labeled result text. No autoplay, endless motion, flashing or timing-dependent quiz. `prefers-reduced-motion: reduce` renders each selected state instantly. Keyboard and screen-reader users receive the same ordered text steps; the static side-by-side diagram always conveys the full lesson. On mobile, stack the two panels with repeated endpoint labels; never shrink bilingual SVG labels to illegibility. This interaction is P3 and conditional on a remaining learning need, not a first-release requirement.

VIS-02 could later reveal request/result on user action, but motion adds little beyond a clear boundary diagram. Prefer static. Do not animate key movement out of the HSM. Retain existing CIA, MFA, JML, OSI mapping, BC/DR, document hierarchy, access-model and defense-in-depth visuals unless a specific local finding calls for correction. Do not number relationships that can occur independently or concurrently as compulsory stages.

The complete planned asset fields, bilingual alternatives, captions, media status and responsive constraints are in `media-planning-manifest.json`. Proposed filenames do not mean files exist.

## G. Duplicate and exclusion register

| Candidate | Disposition | Reason / canonical home |
|---|---|---|
| Another CIA triangle, three-factor MFA wheel or AAA sequence | DUPLICATE — DO NOT ADD | D1 already has definitions, examples and diagrams. Correct terminology locally and cross-reference. |
| Another RTO/RPO timeline or BC/DR scope graphic | DUPLICATE — DO NOT ADD | D2 already displays both; correct labels in the existing timeline. |
| New risk-register walkthrough or extra ALE calculator | DUPLICATE — DO NOT ADD / OUT OF SCOPE for tooling | D1 formulas and D2 detailed register already supply the teaching. A new tool does not fix overclaiming exam requirements. |
| A second access-model matrix or JML wheel | DUPLICATE — DO NOT ADD | D3 explanations, matrix, scenarios and published lessons already cover the relationships. |
| Another OSI/TCP-IP table, ports poster or cloud-responsibility matrix | DUPLICATE — DO NOT ADD | D4 already includes them. Correct guarantees and conditional service responsibilities in place. |
| Real HSM photo plus generic HSM illustration plus PCIe/USB/network photo gallery | DUPLICATE — DO NOT ADD | At most one paired form-factor comparison and one operation-boundary explanation have different purposes. Three form photos are unnecessary. |
| Vendor throughput, universal FIPS levels, CLI setup and procurement comparison | OUT OF SCOPE / NEEDS VERIFICATION | Model-specific claims age quickly and are not foundational CC concepts. Remove generalizations rather than add specification tables. |
| Signature animation showing private-key "encryption" | REPLACE MISLEADING PRESENTATION | Amplifies an incorrect general model. Sign/verify semantics come first. |
| Decorative moving packets, continuous blinking alerts or destruction animation | OUT OF SCOPE | No additional learning outcome; accessibility and distraction cost. |
| Mandatory fixed paths through GRC, CIA impacts, controls, NIST identity functions or ATT&CK tactics | REPLACE MISLEADING PRESENTATION where present | These relationships are not universally compulsory chronological sequences. |
| Detailed cipher mathematics, PQC implementation, federation XML/JWT internals, exploit labs and malware code | OUT OF SCOPE | Retain conceptual contrasts and optional vocabulary only; do not expand into advanced certification depth. |
| Another general social-engineering taxonomy in D5 | DUPLICATE — DO NOT ADD | Canonical awareness definitions belong in D2; D5 should teach authorized testing/reporting decisions. |
| Reproduction of course screenshots or vendor graphics solely because they are accessible | NEEDS VERIFICATION | Source availability is not a reuse license. Prefer an original semantic illustration or link. |
| All AI material excluded as advanced | REPLACE MISLEADING PRESENTATION if proposed | The dated official outline includes foundational AI context. Exclude implementation depth, retain the relevant basic risk/access/data decision. |

## H. Recommended asset architecture

This is a proposal only. **`assets/reading/` has not been created or populated.**

```text
assets/reading/
  manifest.json
  domain-4/network-devices/ids-passive-ips-inline.en.svg
  domain-4/network-devices/ids-passive-ips-inline.th.svg
  domain-5/tpm-hsm/hsm-signing-boundary.en.svg
  domain-5/tpm-hsm/hsm-signing-boundary.th.svg
  domain-5/tpm-hsm/README.sources.md
```

Use stable concept IDs, domain/subsection ownership and kebab-case filenames; locale suffix only when raster/vector labels are actually localized. Prefer shared geometric data with localized text where the existing renderer supports it; never duplicate large identical photos for language variants. Link existing inline diagrams in the manifest instead of copying them into a second directory. Photographs, if later licensed, should use optimized WebP/AVIF plus compatible fallback as needed, intrinsic width/height and conservative responsive sizes; remove irrelevant metadata, preserve required attribution, and keep the approved original outside public production if permission allows. Do not fetch remote tracking URLs at lesson-render time.

SVGs should use `viewBox`, readable mobile text and semantic title/description; prose equivalents must exist outside the graphic. Target compact assets (rough budget: diagram under 40 KB, photo variant under 150 KB) but prioritize legibility over arbitrary size thresholds. Avoid embedded scripts, external font/image dependencies and untrusted SVG markup. Existing parser support for images/figures must be checked before any future integration; the current parser's HTML allow-list and diagram pipeline are an implementation constraint, not permission to change them now.

Each manifest record needs ID, domain/anchor, filename or existing reference, author/origin, source URL, rights/approval evidence, EN/TH alt text, EN/TH caption, educational purpose, responsive behavior, dimensions/variants where known, version/hash and review owner/date. A local asset with unresolved rights must not be approved for publication. Original authorship is separate from choosing the project's distribution license; no new license is invented here.

## I. Prioritized implementation backlog

`prioritized-backlog.json` is the structured backlog. The domain review tables preserve the finer subsection-level actions. P0 means correct a serious teaching error before building upon it; P1 means reconcile important accuracy/scope/translation; P2 means a demonstrable instructional improvement; P3 means optional recognition or interaction. Complexity is editorial/engineering effort, not certification difficulty.

| Priority | Work packages | Required result before moving on |
|---|---|---|
| P0 | ENR-D5-01 signing, ENR-D5-02 hardware overclaims, ENR-D5-03 sanitization, ENR-D5-04 IR attribution | Consistent corrected mechanism/qualification across subsection, summaries, scenarios and diagram labels; verify both languages against named sources. |
| P1 | ENR-D1-01 ethics; ENR-D1-02 exam claims; ENR-D2-01 recovery; ENR-D2-02 metrics; ENR-D2-03 passwords; ENR-D3-01 transitions; ENR-D3-02 frameworks; ENR-D4-01 transport/IPv6; ENR-D4-02 isolation/responsibility; ENR-X-01 bilingual parity; ENR-X-02 current-outline examples | Resolve contradictions and uncertainty. Reuse already-correct published explanations; clearly label authored examples and optional technical detail. |
| P2 | ENR-D4-03 passive/inline topology; ENR-D5-05 protected key boundary | Show an additional relationship that existing prose/tables do not make visible. Approve static semantics before interaction. |
| P3 | ENR-D5-06 two-form hardware recognition; ENR-D4-04 appliance recognition; ENR-D4-05 optional controlled packet interaction | Establish learner need, image rights where applicable and accessible static equivalence. Omit if no extra learning value is demonstrated. |

Later implementation acceptance should include content/source comparison and a bilingual semantic check first; then targeted desktop/mobile rendering, enlarged text, keyboard operation, screen-reader alternative and reduced-motion checks for changed media. Existing production tests should be selected according to actual changes. This audit does not prescribe speculative tests for unchanged code and does not authorize implementation.

## J. Human review shortlist

| Domain | Essential academic/editorial decisions | Optional visual enhancement |
|---|---|---|
| 1 | Resolve ethics contradiction; remove unsupported exam-frequency/memorization assertions; preserve accurate three-family MFA distinction even if a source slide differs | None recommended initially; existing visuals are extensive. |
| 2 | Correct recovery target/actual labels and categorical MTD claims; resolve ambiguous scorecard units; correct metric/dashboard semantics and align modern password guidance | Improve current visuals only; no new dashboard or timeline. |
| 3 | Replace excessive mover permissions and universal ordering; clarify NIST framework scope; keep access-model distinctions without unsupported popularity/exam claims | Reuse current lifecycle/matrix and slide examples. No product photo needed for an abstract permission decision. |
| 4 | Qualify IPv6/TCP/segmentation guarantees and cloud responsibility; reduce advanced protocol detail to optional context | One paired IDS/IPS topology if existing material does not visibly distinguish traffic copy from in-path control. Optional appliance link. |
| 5 | Correct signatures, HSM/TPM generalizations, sanitization reference/guarantees and NIST IR attribution; bring conceptual PQC/current-outline context into parity with slides where missing | One key-operation boundary illustration, reusing slide semantics. Optional two-form HSM recognition using links until rights are established. |

For EN/TH review, the first question is whether both versions teach the same decision and limitations, not whether every English term has a literal Thai replacement. Example labels should say "Illustrative scenario / สถานการณ์สมมติ". Use "Target / เป้าหมาย" versus "Observed / ผลที่เกิดขึ้นจริง", "Sign / ลงลายมือชื่อ" versus "Encrypt / เข้ารหัส", and "May reduce / อาจช่วยลด" instead of absolute guarantees where appropriate. A qualified human bilingual reviewer should approve any eventual rewritten teaching text; the current task produces proposals only.

### Completion boundary

All five domains and all 128 existing topic/review anchors have an audit disposition. Evidence includes all primary source filenames, contact-sheet visual coverage, source discrepancies, current primary-source research, proposed media metadata and a preservation check. Limits of source reading depth, image resolution, licensing and lack of live rendering QA are explicitly recorded; this is not full course certification or production acceptance.

**Final Status: Comprehensive Educational Enrichment & Visual Planning Audit Complete — Awaiting Human Review**

STOP: no enrichment implementation, production image download, renderer/CSS/JS edit, commit or push is authorized by this report.
