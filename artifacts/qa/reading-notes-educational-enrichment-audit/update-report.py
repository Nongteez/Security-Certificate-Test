"""Assemble the resumed report from retained domain findings and verified registers."""
from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
REPORT=ROOT/'docs/plans/isc2-cc-2026/reading-notes-comprehensive-educational-enrichment-audit.md'
old=REPORT.read_text(encoding='utf-8')
# Retain the interrupted narrative as an immutable provenance artifact on first run.
saved=OUT/'report-before-resume.md'
if not saved.exists():saved.write_text(old,encoding='utf-8')
old=saved.read_text(encoding='utf-8')
def section(letter):
    return re.search(r'^## '+letter+r'\. .*?(?=^## |\Z)',old,re.M|re.S).group(0)
def renamed(letter,title):
    return re.sub(r'^## .*',title,section(letter),count=1)

intro='''# Reading Notes — comprehensive educational enrichment audit

Resumed and reconciled: **3 November 2026, Asia/Bangkok**. **AUDIT ONLY. No enrichment implementation is authorized.**

The useful next step is correction and selective reuse of existing teaching. Reading Notes already contain extensive comparisons, worked examples, scenarios and 28 semantic diagram placements. Adding another CIA triangle, JML wheel, OSI ladder or recovery timeline would largely duplicate them. The audit register contains **10 confirmed accuracy/correction groups**, separated from three unresolved or clarification-only leads. There are **57 unique backlog packages**, including conditional media; these are proposals for human review, not 57 approved additions.

## Resume, repository and evidence provenance

The active repository is **`D:/_Coding/SEC-CERT-TEST`**, remote `https://github.com/Nongteez/Security-Certificate-Test.git`, entry HEAD **`d5d5f369d293716a43a072d11692f26b3618716c`**. Entry `git status --short` was empty. The historical `C:/Users/Settapon.cs/...` source path is unavailable on this machine; the available primary corpus is **`D:/_Coding/SEC-CERT-TEST/ISC2 Update 2026`**. This identifies local application sources; no deployed revision is asserted.

The interrupted report and its domain reviews were read, rather than treated as completed acceptance. Of 487 historical baseline files, **298 match byte-for-byte, 186 match after line-ending conversion, and three differ** (`index.html`, `js/ui/learning/lesson-info.js`, `js/ui/learning/renderers.js`). All primary source files, Reading Notes, published lesson JSON and diagram-generator content used by the previous reviews match under that comparison. The three differing application files received targeted entry-point/dispatch inspection; this is not an exhaustive new code review. The current reporting/backup custom renderers were also checked to resolve visual duplication.

`report-before-resume.md`, the old baselines and original domain reviews preserve historical evidence. Current registers supersede unsupported historical conclusions. In particular:

- D4 has **55 PNGs**, not the 59 claimed in the old D3/D4 review. The complete corpus is 248, not 252.
- The old review says the D2 scorecard calls 12 a resolved count. The current row does **not** specify that; it omits units. Native-resolution inspection confirms ambiguity, not a known correct replacement.
- The IPv6 sentence says IPsec is supported. It does **not** explicitly promise automatic encryption. Its heading needs clarification; this is not counted among confirmed academic errors.
- The official ethics page does not establish the proposed exceptionless conflict algorithm. Nor does its silence prove that ordered canons are prohibited. The internal contradiction is documented; the external hierarchy claim remains unverified.
- D2 dashboard/scorecard/report artifacts already exist in the current custom renderer. Candidate D2-A03 is **DUPLICATE — DO NOT ADD**.
- Historical appendices end with unpopulated image/heading-ledger placeholders. The new per-file image/source manifests and 128-row matrix supply those missing records. The old collector would overwrite historical baselines and uses a broader heading heuristic, so it was inspected but not rerun.

The resumable checklist is `artifacts/qa/reading-notes-educational-enrichment-audit/resume-checklist.md`. The audit reused prior verified content after hash reconciliation, then re-examined all labelled image sheets and selected native images, verified the four original academic leads, consolidated classifications and created the missing deliverables.

## Applicable examination outline

The [ISC2 CC outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) was reopened during this resume. It states **effective 1 September 2026**. The dated detailed outline, rather than its retained older introductory list, governs mapping. Local 1.1.1-style subdivisions are editorial, not additional official objectives.

| Domain | Current title | Weight | Official objectives | Audited topic/review anchors |
|---|---|---:|---|---:|
| 1 | Security Principles | 24% | 1.1–1.5 | 24 |
| 2 | Security Governance | 17.3% | 2.1–2.4 | 29 |
| 3 | Identity And Access Management (IAM) Concepts | 20% | 3.1–3.2 | 17 |
| 4 | Networking and Cloud Security Concepts | 21.3% | 4.1–4.3 | 24 |
| 5 | Security Operations and Incident Response | 17.3% | 5.1–5.5 | 34 |

Weights are rounded; no exact question allocation or frequency is inferred. Foundational AI applications and quantum-resistant cryptography are current scope. Implementation mathematics, vendor configuration and model development are unnecessary depth.

## Evidence map and classification rules

All supporting paths below are under `artifacts/qa/reading-notes-educational-enrichment-audit/` unless stated otherwise.

| Artifact | What it establishes |
|---|---|
| `resume-context.json`, `resume-baseline-*.json/txt` | Current root/HEAD, clean entry status and tracked-file snapshot |
| `resume-baseline-reconciliation.json` | Exact historical/current content comparison, distinguishing line endings |
| `source-inspection-manifest.json` | Every current primary file, hash, readable status, text heading index and actual inspection depth |
| `image-inspection-manifest.json` | Every PNG, topic/content observation, contact sheet and position, native-resolution flag, disposition and rights limit |
| `coverage-matrix.md`, `coverage-matrix.json` | 128 anchor assessments, line ranges, primary/secondary actions and exact domain-review rows |
| `domain-1-2-review.md`, `domain-3-4-review.md`, `domain-5-review.md` | Retained substantive findings, source/lesson comparisons, nested-heading assessment and exclusions; corrections in this resumed report take precedence |
| `accuracy-findings.json` | Exact current local claims, authority URL/location, source comparison, smallest correction, confidence and severity |
| `research-verification.md` | Fresh primary-reference checks and failed/replaced URLs; older `research-*.txt` retained separately |
| `published-lesson-inventory.json` | Published lesson/slide IDs for reuse; no claim of newly rendered QA |
| `prioritized-backlog.json` | 57 unique correction, verification, example and media work packages |
| `media-planning-manifest.json` | 13 media candidates/dispositions, including three rejected duplicates; filenames, EN/TH alternatives, captions, rights and acceptance constraints |
| `preservation-check.json`, `artifact-validation.json` | End-of-audit production preservation and evidence consistency checks |

Mandatory primary classifications: **KEEP EXISTING; DUPLICATE — DO NOT ADD; CORRECT ACADEMIC ERROR; EXPAND EXPLANATION; ADD PRACTICAL EXAMPLE; ADD REAL-WORLD IMAGE; ADD DIAGRAM; ADD ANIMATION / INTERACTIVE VISUAL; OUT OF SCOPE; REQUIRES VERIFICATION.** Historical synonyms are normalized in the current registers. In particular, an old “REPLACE MISLEADING PRESENTATION” does not automatically become a confirmed error: the accuracy register controls confirmation. Secondary actions remain attached to the same underlying finding.

P0 identifies consequential errors to correct before enrichment; P1 high-value conceptual work; P2 useful examples/diagrams; P3 optional enhancements. Proposed scenarios are authored illustrations, not real incidents or actual exam items. Published slides and source notes show existing coverage but are not independent technical authorities.

## A. Source inventory

The primary corpus contains **277 files: 24 Markdown, five transcripts and 248 PNGs**. There are no PDF, PowerPoint or other file types in that corpus. Every filename is recorded in the current source manifest. No source files were inaccessible; PNG chunk checksums/compressed payloads passed structural checks. Two D1 captures are blank/dark frames, which are readable files with no useful teaching content rather than corrupt files.

| Domain | Text files | PNGs visually reviewed | Current notes anchors |
|---|---:|---:|---:|
| 1 | 5 | 60 | 24 |
| 2 | 5 | 38 | 29 |
| 3 | 9 | 17 | 17 |
| 4 | 5 | 55 | 24 |
| 5 | 5 | 78 | 34 |
| Total | 29 | 248 | 128 |

**Inspection depth:** all 29 text files were structurally inventoried; the previous substantive/targeted source reviews are reused after content verification. Long overlapping Example/Surm/question/vocabulary compilations were not independently validated sentence by sentence. All 248 PNGs were actually re-examined in 20 labelled contact sheets during this resume. HSM `235638`, scorecard `223508` and D2 `201852` received native-resolution checks. Contact sheets establish major content and relationships, not reliable transcription of every tiny annotation. No separate external embedded image was downloaded.

D2 `201852` is an unrelated commercial ESP32 product specification, not a security-course list; exclude it from enrichment. Four D5-folder screenshots reproduce D1 Reading Notes; their storage location does not make them D5 evidence. Image observations cover text slides, role/permission relationships, CIA/AAA/risk diagrams, network/DMZ/cloud relationships, embedded hardware, cryptographic flows, IR/testing workflows and decorative artwork. The per-image manifest records exactly which file teaches which topic.

All five current Reading Notes and corresponding metadata/scenario modules are covered through retained subsection reviews and current anchor/hash validation. Published Learning Slides and relevant diagram/custom-renderer definitions were compared for actual conceptual overlap. This is source-level instructional review; no new production browser/accessibility acceptance is claimed.

'''

coverage=renamed('B','## B. Domain-by-domain coverage matrix')
coverage+='\nThe complete matrix is [coverage-matrix.md](../../../artifacts/qa/reading-notes-educational-enrichment-audit/coverage-matrix.md), with the machine-readable sibling. Each of 128 metadata anchors has a primary classification, existing teaching evidence, secondary actions and exact review-row references. Nested h4/h5 units inherit their owning anchor and the detailed domain-review assessment. The aggregate counts are not a count of every nested heading.\n\n'

issues=json.loads((OUT/'accuracy-findings.json').read_text(encoding='utf-8'))
accuracy='''## C. Academic accuracy findings

**10 confirmed groups, three separate clarification/unresolved leads.** Exact local quotations are preserved in `accuracy-findings.json`; the table below summarizes rather than silently rewriting production. Severity applies to the stated defect, not every sentence in the subsection.

| ID / severity / classification | Current location and evidence | Independent reference and disposition |
|---|---|---|
'''
for f in issues:
    extras=' '.join(f'[Additional primary source]({url})' for url in f.get('additionalAuthorityUrls',[]))
    accuracy+=f"| {f['id']} / {f['priority']} / {f['primaryClassification']} | D{f['domain']} `{f['anchor']}`, Reading lines {f['startLine']}–{f['endLine']}. {f['localSource']} | [{f['authorityLocation']}]({f['authorityUrl']}). {f['conclusion']} {extras} |\n"
accuracy+='''
The original four leads are therefore not treated uniformly: **signatures, HSM overclaims, mover permissions/order and TCP/segmentation guarantees are confirmed correction groups**; IPv6 wording needs qualification without inventing a stronger current claim. HSM coverage is already substantial. No new HSM definition is needed; an operation-boundary view answers a different question from a physical photo. For TPM details, also see [Microsoft TPM implementation guidance](https://learn.microsoft.com/en-my/windows/security/hardware-security/tpm/tpm-recommendations).

The scorecard's missing units cannot be repaired by a standards document. The source author must clarify them, or a future editor must explicitly substitute an authored example. Ethics ordering, OAuth table formatting, version-sensitive ATT&CK details and the prescriptive ICS example remain verification tasks, not newly confirmed errors.

'''

missing=renamed('C','## D. Missing and shallow content register')
# Replace the old summary table with stable current IDs and accurate distinctions.
missing='''## D. Missing and shallow content register

`prioritized-backlog.json` contains **18 explanation packages and 13 practical-example packages**, separate from accuracy corrections, verification and media. These are scoped instructional gaps, not a finding that the entire curriculum is absent. Details and exact targets are in the domain reviews and coverage matrix.

| Domain | High-value clarification or missing application | Reuse / scope limit |
|---|---|---|
| 1 | Preliminary identity claim versus AAA functions; account evidence versus human attribution; authorized acceptance and meaningful criteria; official versus course control taxonomy | Existing L1-02/07/10/12 teach these. Keep existing CIA, factor families and SLE/ARO/ALE examples. Do not add a second calculator. |
| 2 | User password actions; linked requirement/control/evidence record; miniature continuity workaround; defined population/window and mean-time endpoints | Existing L2-02/03/06/07 examples are the starting point. The scorecard ambiguity is not a numerical gap to fill by guessing. |
| 3 | Approved versus observed rights; review decision versus applied revocation; app-session persistence; accountable non-human identities; effective SoD across accounts | Adapt existing D3-01/02/04 cases. Preserve four access-model explanations and matrix. |
| 4 | Conceptual OSI mapping; source/destination flow; actual VLAN enforcement; provider/service-specific duties; bounded elasticity and measured service | Adapt D4-01/03/05/07/08. Protocol configuration and exhaustive subnet arithmetic are not needed. |
| 5 | One record through data states/DLP; log evidence and uncertainty; context-sensitive triage; evidence handoff; restore results; temporary support-risk ownership; change authority; static versus running testing; one trust-boundary example | Reuse published D5 material. Add one concise decision at its canonical home, then cross-reference; do not append repeated scenario decks. |
| Cross-domain | Foundational AI applications and short conceptual PQC coverage; EN/TH meaning parity | Already stronger in published lessons, including D5-02 PQC. Adapt selected passages rather than invent an advanced AI or cryptography course. |

English terminology within Thai prose is useful but is not a full English explanatory version. Human bilingual review should check identical conditions, quantities, actor roles and limitations for approved changes. No certification claim is made for every translation in the existing course.

'''
duplicates=renamed('G','## E. Duplicate content and exclusions')
duplicates+='\n**Resume decision:** D2-A03 reporting views, INT-ABAC and INT-TRIAGE are explicitly rejected as net-new media in the manifest. Existing corresponding lessons already teach the same decisions. D2-A01 restore-set dependency and VIS-01 passive/inline placement address different relationships and remain conditional proposals.\n\n'
examples=renamed('D','## F. Practical example opportunities')
examples+='\nThe 13 example work packages also include D1 denied-action logging; D2 linked GRC record, continuity workaround and mean-time calculation; D3 approved/effective rights, surviving sessions and reporting-bot ownership; and D5 evidence handoff, actual restore results and account recovery. Their unique IDs, target anchors and reuse sources are in the backlog. A new example should replace a weak or repeated passage, not simply increase chapter length.\n\n'
hardware=renamed('E','## G. Real hardware and image opportunities')
hardware=hardware.replace('Thales terms response unusable.','The historical terms capture did not establish image reuse rights.').replace('authorize limited organizational product-support copying, not general redistribution in this public learning project','were not established as permission for redistribution in this public learning project')
hardware+='\nThe current manifest contains four conditional image records: network HSM, USB HSM, firewall appliance and one rights-cleared real or explicitly simulated suspicious-message interface. No exact external image binary, crop or photographer has been approved. Manufacturer pages establish product identity only. [Yubico technical overview](https://docs.yubico.com/hardware/yubihsm-2/hsm-2-user-guide/hsm2-intro-overview.html) explicitly identifies USB deployment and model/firmware-specific validation; do not copy obsolete certification claims from historical product snapshots.\n\n'
diagrams=renamed('F','## H. Diagram and animation opportunities')
diagrams+='''
The complete media disposition set has **13 records: five diagram candidates, four image candidates, one optional interaction and three rejected duplicates**. In addition to VIS-01/VIS-02, the diagram candidates are D2-A01 conventional restore-set dependency; D4-M01 encapsulation only after existing-slide reuse; D5-M16 one account-recovery trust boundary only if prose is insufficient. The last two are P3 alternatives, not mandatory new visuals. Every record specifies target, learning purpose, gap, components/relationships, academic constraints, format, EN/TH alternatives/caption, mobile layout, accessibility and existing-equivalent gate.

Motion is justified only for the optional user-stepped passive/inline request comparison. Static panels teach the complete concept. Do not animate key material leaving the protected signing boundary or imply that an alert proves compromise. Existing useful diagrams remain in place; identified label errors are correction work, not authorization for a stylistic redesign.

'''
architecture=renamed('H','## I. Asset directory and metadata proposal')
architecture+='\nAdditional conditional paths are recorded only as strings in `media-planning-manifest.json`: D2 backup/message topics, D4 encapsulation and D5 threat modeling. `{locale}` means separate `.en.svg`/`.th.svg` only if actual localized labels require them. Shared photos use one optimized binary with localized HTML alt/caption. No asset exists solely because a filename is proposed.\n\n'
backlog='''## J. Prioritized enrichment backlog

`prioritized-backlog.json` is the authoritative consolidated implementation proposal. It contains **57 unique IDs**; each has domain/target, primary classification, priority, sources, rationale, confidence, verification state, estimated complexity and explicit `productionImplementationApproved: false`. The coverage matrix retains finer subsection observations and secondary actions; these are not counted a second time as separate defects.

| Disposition | Packages | Decision |
|---|---:|---|
| CORRECT ACADEMIC ERROR | 10 | Correct only the confirmed claim and synchronize repeated representations. |
| REQUIRES VERIFICATION | 6 | Three accuracy leads plus OAuth, ICS and ATT&CK questions. Do not publish an inferred correction as a verified fact. |
| EXPAND EXPLANATION | 18 | Reuse qualified published explanations, including foundational AI/PQC and bilingual parity. |
| ADD PRACTICAL EXAMPLE | 13 | Each adds a distinct decision, record or worked boundary; prefer adapting existing examples. |
| ADD DIAGRAM | 5 | Two central relationship diagrams, restore dependency, and two lower-priority conditional adaptations. |
| ADD REAL-WORLD IMAGE | 4 | Optional, with unresolved image rights or clearly labelled authored fallback. |
| ADD ANIMATION / INTERACTIVE VISUAL | 1 | Optional user-stepped extension of the static IDS/IPS comparison. |

**P0 correction shortlist:** ACC-D3-01 mover rights/order; ACC-D4-02 TCP guarantee; ACC-D4-03 segmentation guarantees; ACC-D5-01 signatures; ACC-D5-02 hardware overclaims; ACC-D5-03 sanitization; ACC-D5-04 IR attribution. P1 includes privacy scope, recovery/metric consistency, unresolved ethics/source units, conceptual clarity and necessary current-outline applications. P2 examples/relationship diagrams follow corrections. P3 recognition images or interaction require an unmet learning need and reuse/rights clearance.

Estimated complexity is editorial/engineering effort, not exam difficulty. Even a short correction may need medium effort to align prose, summary cards, desktop/mobile diagram labels, inline scenarios and reusable scenario modules in both languages. Later implementation should verify those changed representations and targeted mobile/keyboard/reduced-motion behavior; this audit does not claim such checks have passed.

'''
shortlist=renamed('J','## K. Human review shortlist')
shortlist=shortlist.split('### Completion boundary')[0]
shortlist=shortlist.replace('Resolve ethics contradiction; remove','Review privacy scope and the unresolved ethics contradiction; remove').replace('Qualify IPv6/TCP/segmentation guarantees','Clarify IPv6 support wording and correct TCP/segmentation guarantees')
limitations='''## L. Audit limitations and completion checks

- **Text-source depth:** 29/29 files are indexed and covered by reconciled substantive/targeted reviews. Long overlapping derivatives, vocabulary entries and practice items were not independently validated sentence by sentence. Full academic certification of the entire source corpus remains outside the achieved depth; any import of previously unverified detailed passages must be rechecked.
- **Image depth:** 248/248 were viewed at contact-sheet scale, three at native resolution during resume. Dense or tiny annotations are not certified. Two blank D1 frames and the unrelated D2 product capture are explicitly identified; four D5-folder images concern D1. No image is missing from the manifest; no corrupt PNG structure was found.
- **Subsection coverage:** 128/128 metadata topic/review anchors have dispositions and exact prior-review references. The count includes review anchors, not all nested headings. This is instructional audit coverage, not proof that every sentence is technically perfect.
- **Fresh research:** web access worked for primary-source pages and selected NIST PDFs during resume. Historical 503 failures are not a current-session limitation. A guessed NIST 800-34 PDF path returned 404; the publication page's actual Legacy/SP link was followed and verified. Source versions and exact locators are in the verification ledger.
- **Unresolved claims:** ethics conflict hierarchy and scorecard units remain open; IPv6 is a clarification, not an explicit default-encryption error. OAuth table details, current ATT&CK counts/IDs, prescriptive OT architecture, jurisdiction-specific retention/HIPAA/PDPA examples and model-specific HSM details require scoped follow-up before editing those details. None is silently promoted to a confirmed correction.
- **Rights:** no external image has been cleared for redistribution. Exact image selection, photographer/copyright owner, image-level terms, crop and attribution remain pending. Local screenshot availability and public product pages are not licenses. No production media was downloaded or generated.
- **Rendering/language:** no fresh deployed-site, browser, screen-reader, keyboard or reduced-motion test was performed. Existing slide semantic reviews include sampled translations, not every bilingual cell/interactive state. Recommendations give acceptance criteria for later authorized work.
- **Preservation:** `preservation-check.json` records the final tracked-file comparison against the current entry snapshot. Only audit files and the scoped tracker row changed; Reading Notes, diagrams, CSS/JS, Learning Slides, Question Banks, Vocabulary and source media remain unchanged. `assets/reading/` does not exist. No commit or push occurred.

The resumed audit is complete **at the disclosed subsection, targeted-source and contact-sheet inspection depth**, and ready for human review. The remaining items above are verification, rights and later implementation acceptance gates; this is not a claim of exhaustive source-line certification. If exhaustive manual validation of every unique source paragraph or every screenshot label is required, that deeper review remains unfinished and must not be represented as complete.

**Final Status: Comprehensive Educational Enrichment Audit Complete — Awaiting Human Review**

STOP. No Reading Notes enrichment is implemented or approved. The next action belongs to human review of the concrete correction and enrichment proposals.
'''
result=intro+coverage+accuracy+missing+duplicates+examples+hardware+diagrams+architecture+backlog+shortlist+limitations
# Normalize old narrative synonyms while preserving historical appendices unchanged.
for a,b in [('IMPROVE EXPLANATION','EXPAND EXPLANATION'),('ADD NEW DIAGRAM','ADD DIAGRAM'),('ADD INTERACTIVE VISUAL','ADD ANIMATION / INTERACTIVE VISUAL'),('NEEDS VERIFICATION','REQUIRES VERIFICATION'),('REPLACE MISLEADING PRESENTATION','REQUIRES VERIFICATION')]:
    result=result.replace(a,b)
result=result.replace('57 unique','56 unique').replace('57 approved','56 approved')
result=result.replace('10 confirmed','11 confirmed').replace('| CORRECT ACADEMIC ERROR | 10 |','| CORRECT ACADEMIC ERROR | 11 |').replace('| REQUIRES VERIFICATION | 6 |','| REQUIRES VERIFICATION | 4 |').replace('| EXPAND EXPLANATION | 18 |','| EXPAND EXPLANATION | 19 |').replace('**18 explanation packages','**19 explanation packages')
result=result.replace('Three accuracy leads plus OAuth, ICS and ATT&CK questions.','Three accuracy leads plus the prescriptive ICS question. OAuth format and MITRE identifiers/counts were checked during resume.')
result=result.replace('Ethics ordering, OAuth table formatting, version-sensitive ATT&CK details and the prescriptive ICS example remain verification tasks, not newly confirmed errors.','Ethics ordering and the prescriptive ICS example remain verification tasks. RFC 6749 section 1.4 resolves OAuth token-format flexibility; ENR-D3-06 is now an explanation proposal. MITRE identifiers/counts were verified and consolidated in ACC-D5-05.')
result=result.replace('OAuth table details, current ATT&CK counts/IDs, prescriptive OT architecture,','Prescriptive OT architecture,')
result=result.replace('| ADD REAL-WORLD IMAGE | 4 |','| ADD REAL-WORLD IMAGE | 3 |')
result=result.replace('Optional, with unresolved image rights or clearly labelled authored fallback.','Four candidate assets in three packages: one paired HSM comparison, firewall and message interface; rights unresolved or explicitly authored fallback.')
result=result.replace('| VIS-05 / REQUIRES VERIFICATION |','| VIS-05 / CORRECT ACADEMIC ERROR |')
result=result.replace('The new per-file image/source manifests and 128-row matrix supply those missing records.','The new per-file image/source manifests and 128-row matrix supply those missing records. The D2–D4 review-anchor end ranges were also repaired; the historical inventory had stopped them at the anchor line.')
result=result.replace('| `coverage-matrix.md`, `coverage-matrix.json` | 128 anchor assessments, line ranges, primary/secondary actions and exact domain-review rows |','| `coverage-matrix.md`, `coverage-matrix.json` | 128 anchor assessments, corrected line ranges, primary/secondary actions and exact domain-review rows |\n| `nested-heading-inventory.json`, `existing-diagram-inventory.json` | All 570 nested headings mapped to owning anchors; 28 semantic diagram placements |')
result=result.replace('These are proposals for human review','These are proposals for human review')
result=result.replace('Improve current visuals only; no new dashboard or timeline.','Consider D2-A01 restore-set dependencies and optional suspicious-message recognition; reuse reporting exhibits, no new dashboard or timeline.')
result=result.replace('NIST IR attribution; bring','NIST IR attribution and ATT&CK labels/count; bring')
result=result.replace('| `preservation-check.json`, `artifact-validation.json` | End-of-audit production preservation and evidence consistency checks |','| `preservation-check.json`, `artifact-validation.json` | End-of-audit production preservation and evidence consistency checks |\n| `audit-file-manifest.md`, `audit-file-manifest.json` | Exact newly created/modified audit files and tracker change |')
result=result.replace('The resumed audit is complete **at the disclosed','Verification passed **41 artifact checks**, and **30,773 tracked files** were compared against the current entry snapshot with no production changes or HEAD change. See the verification artifacts for scope and results.\n\nThe resumed audit is complete **at the disclosed')
REPORT.write_text(result,encoding='utf-8')
print('Updated report:',len(result.splitlines()),'lines;',len(result),'characters')
