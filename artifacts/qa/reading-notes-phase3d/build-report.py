"""Package verified Phase 3D results. Does not change production/course files."""
from pathlib import Path
import json,re
from html.parser import HTMLParser

root=Path.cwd();q=root/'artifacts/qa/reading-notes-phase3d'
def read(n):return json.loads((q/n).read_text(encoding='utf-8-sig'))
def link(label,path,line=None):
    return f'[{label}](<{(root/path).as_posix()}{":"+str(line) if line else ""}>)'
matrix=read('diagram-matrix.json');results=read('regression-results.json');reconciled=read('evidence-reconciliation.json')
assert reconciled['failed']==0 and len(results)==22 and all(r['exitCode']==0 for r in results)
source=(root/'js/core/diagram-generator.js').read_text(encoding='utf8').splitlines()
for m in matrix:m['registryLine']=next(i for i,s in enumerate(source,1) if re.match(r'  '+m['id']+r':',s))
changes={
'controlTimeline':('A / P3-SEM-003','Three timing blocks joined by arrows, despite a correct overlap explanation.','Five coexisting function cards; retain all five categories, all examples and CCTV overlap. No before/during/after workflow.','D1 sum.md:1177–1250; Domain 1.md:205–229','ISC2 1.4; functional classification is not an official incident procedure. The specific nonsequential representation is an instructional inference, not an ISC2-prescribed diagram.'),
'defenseInDepth':('B','Valid seven example groups; possible count/order/guarantee inference.','Keep all seven groups around core data. Add visible bilingual example/complementary/nonchronological/no-guarantee note.','Domain 1.md:293–301; Domain 4.md:131–145','NIST defense-in-depth definition supports varied complementary barriers. Neither seven nor five is a mandatory universal count.'),
'bcVsDrScope':('C','Formal DR ⊂ BC notation and nested rectangle overstate a useful introductory scope shorthand.','Distinct coordinated scope cards; DR supports continuity through IT/service/data recovery. Preserve BC five scope nouns and DR three examples.','D2 sum.md:159–223; Domain 2.md, BC/DR explanations','NIST SP 800-34r1 §§2.2.1, 2.2.6 distinguishes business-process continuity and IT recovery plans. BC umbrella shorthand is acceptable with scope qualifications; the literal universal set claim was overstrong.'),
'effectivenessHierarchy':('D / P3-VS-002','01–06 tiers imply procedural or maturity progression across measures and communication formats.','Six unnumbered concepts in two groups. Metric includes purpose-selected KPI/KRI; Dashboard/Scorecard/Report are formats. Mark local study aid explicitly.','D2 sum.md:459–603 (six associations at 598–603)','ISC2 2.4 lists effectiveness concepts, not this six-step framework. NIST SP 800-55v1 supports purpose-selected measures. Report Executive remains an audience example, not a mandatory level.'),
'iamLifecycle':('E / P3-SEM-002','Joiner→Mover→Leaver single mandatory numbered path.','Three event cards, optional/repeatable Mover, direct Joiner-to-Leaver explanation, continuous governance retained.','Domain 3.md:16–24; D3 sum.md, identity lifecycle section','NIST SP 800-53r5 AC-2, PS-4 and PS-5 are event-triggered account, termination and transfer controls. Optional/repeatable Mover is an inference from event conditions, not a newly asserted HR standard.'),
'osiVsTcpIpModel':('F','Correct 7-to-4 correspondence could be mistaken for operational packet flow.','Keep exact mapping and numbers; add bilingual model-correspondence qualification. No artificial packet arrows.','Domain 4.md:28–37; D4 sum.md, OSI/TCP-IP notes','ITU-T X.200 defines reference-model architecture. Numbering has genuine architectural meaning. The four-layer TCP/IP teaching comparison remains an introductory correspondence, not an assertion that every protocol belongs exclusively to one layer.'),
'aaaLifecycle':('Additional cross-domain review','Fourth numbered final step implies Accounting starts only after access.','Claim/proof/permissions cards plus separate ongoing Accounting band including authentication attempts. Retain identification/authentication, MFA and nonrepudiation qualifications.','Domain 1.md:85–124; D1 sum.md, AAA material','NIST SP 800-92 §2.1 includes authentication attempts among security log events. Ongoing accounting does not require every authentication mechanism to be a rigid four-event process.'),
'dmzFirewallArchitecture':('Additional cross-domain review','Zone layout labelled as traffic flow; mobile text asserts compromise cannot reach inside and highest security.','Retain topology/service examples and Phase 3A.2 paints. Label illustrative zones/boundaries, separately permitted connections and possible DMZ termination. Replace two absolute claims with policy-dependent isolation.','Domain 4.md:92–108; D4 sum.md, network segmentation material','NIST DMZ definition supports controlled inter-zone exchange, not invulnerability. This is one dual-firewall illustration; neither two firewalls nor every Internet request crossing both is mandated.'),
'threatChain':('Additional reconciliation','Mobile five-step numbering places safeguards after impact; desktop has meaningful causal labels and a controls branch.','Remove mobile ordinals and final impact-to-controls connector. Keep genuine labelled causal connectors and all five definitions; qualify causal example, not a five-step response.','Domain 1.md, threat/vulnerability/risk concepts; D1 sum.md, asset and risk definitions','Preserves the written example and ISC2 1.2 risk concepts. Control functions span prevention, detection, correction and recovery; they are not necessarily a final stage.'),
'privacyFlow':('Additional reconciliation','Mobile ordinals imply compulsory processing stages; data-and-consent connector lacks a condition. Prior inventory incorrectly called this a data lifecycle.','Keep three roles and controller instructions. Remove ordinals, label example delegation when processor used, qualify consent to the relevant lawful basis.','D1 sum.md:350–391 (controller/processor delegation example)','EDPB legal-basis guidance identifies consent as one of several bases. Official EU business guidance describes controller instructions to processors when used. No broader GDPR applicability rewrite.'),
'grcAlignment':('Additional reconciliation','Valid integrated desktop pillars, but mobile 01–03/down arrows imply a procedure.','Remove mobile ordinals and arrows; add coordinated-functions explanation. Preserve all definitions and strategic goals.','Domain 2.md:49–71; D2 sum.md, GRC foundations','The original notes explicitly describe a structured, coordinated approach. ISC2 2.1 teaches governance processes; it does not make the three GRC nouns compulsory successive stages.'),
}
before={
'ciaTriad':'Triangle of interacting goals; no compulsory chronology.',
'loadBalancer':'One-to-many traffic distribution; existing single-balancer limitation retained.',
'riskCalculationFlow':'Arithmetic dependencies justify connectors; economic qualification retained.',
'riskLifecycle':'Qualified local cycle with continuous communication; not an official fixed five-step mandate.',
'documentHierarchy':'Authority hierarchy; guidelines remain advisory rather than mandatory.',
'dueCareDiligence':'Patch/check/verify example has a legitimate feedback cycle; not a universal governance standard.',
'ethicsCanons':'Official four canon identifiers; strict universal conflict precedence remains unverified, not disproved.',
'rtoRpoTimeline':'Real temporal objectives before/after incident; retain outage-tolerance and reprocessing caveats.',
'nistSp80063Framework':'Identity proofing, authentication and federation facets; federation is not compulsory at every login.',
'leastPrivilegeVsSod':'Comparison of access minimization with division of responsibilities; no sequence implied.',
'accessControlModels':'Four-model comparison; retain ABAC inputs and no universal security-ranking qualification.',
'defenseInDepthLayers':'Five example complementary groups; explicit non-universal count retained.',
'cloudSharedResponsibility':'Service/responsibility comparison; correct governance/operation qualifications retained; legacy legend clipping deferred.'
}
visual_pairs=[]
for m in matrix:
    if m['changed']:
        mobile=m['id'] in ['threatChain','privacyFlow','grcAlignment'];w,t=(390,'dark') if mobile else (1366,'light')
        visual_pairs.append(dict(id=m['id'],domain=m['domain'],width=w,theme=t,
          before=f"before-d{m['domain']}-{m['id']}-{w}-{t}.png",after=f"after-d{m['domain']}-{m['id']}-{w}-{t}.png"))
visual=dict(method='Actual PNG inspection: fourteen full-pattern overview sheets, eleven original-resolution before/after pairs, and two preserved-pattern overview sheets. Overview review is structural; it is not a claim to have read every tiny thumbnail glyph. Native samples and DOM word/padding checks support legibility.',
  overview=[f'contact-{w}-{t}.png' for w in [1920,1366,1024,768,390,375,320] for t in ['light','dark']],
  preservedOverview=['preserved-contact-1366-light.png','preserved-contact-390-dark.png'],pairs=visual_pairs,
  result='No new observed overlap, clipping, lost concepts or misleading compulsory sequences in corrected patterns. Cards reflow to one column on phones; retained mobile alternatives remain vertical. Existing SVG small labels/contrast and cloud legend issue remain Phase 3E work. Human visual acceptance pending.')
(q/'visual-review.json').write_text(json.dumps(visual,indent=2,ensure_ascii=False),encoding='utf8')

head='''# Phase 3D — Flow & Diagram Semantics Remediation

**Phase 3D Implemented — Pending Human Visual Acceptance**

Verified 2 November 2026 (Asia/Bangkok). Human visual acceptance is **pending**. Phase 3E/F has not started.

## Scope and recovery

Resumed the interrupted Phase 3D artifacts and failing semantic checks. Read the Phase 3A diagram inventory, source-fidelity addendum, Phase 3C report, saved plan, current sources and original Phase 3D instructions. Compared the dirty starting tree and saved runtime; no production correction from the interrupted Phase 3D preparation was assumed complete. Existing prior-phase source changes and Learning Slides changes were retained. No active Phase 3D listeners were found at recovery; browser runs used owned temporary Chrome profiles and ports 5322/9382 and closed them afterwards.

Implemented 11 scoped diagram changes; retained the other 13 registry payloads byte-for-byte. Mandatory A–F are verified below. Corrections are relationship-specific: valid causality, true timelines, authority hierarchies, architectural correspondence and comparison diagrams remain. No new dependency, rasterized lesson text, ASCII diagram or unrelated application redesign was introduced.

The four Reading Markdown sources and eight original course-note files are unchanged in this phase. Existing educational definitions/examples were carried forward; misleading diagram titles, ordinal badges, connectors, the AAA fourth-step caption and two DMZ absolute claims were deliberately corrected. It would be inaccurate to claim every diagram character was unchanged. The detailed content ledger and source snapshots distinguish preservation from these authorized corrections.

## Production changes and academic rationale

The registry keeps its existing public keys and placeholders. Five replaced SVG/mobile patterns (AAA, controls, BC/DR, measurement, JML) now use one selectable HTML representation at every viewport, with headings, sections and lists. Six retained SVG/mobile patterns receive bounded label/connector/qualification changes. All new CSS is scoped to Reading and uses existing theme tokens.

'''
parts=[head]
for m in matrix:
 if not m['changed']:continue
 tag,old,new,notes,why=changes[m['id']]
 parts.append(f"### {tag}: `{m['id']}` — Domain {m['domain']}\n\n")
 parts.append(f"Current source: {link('Reading source','content/isc2-cc-2026/reading/domain-'+str(m['domain'])+'.md',m['line'])}, anchor `{m['anchor']}`; {link('production diagram registry','js/core/diagram-generator.js',m['registryLine'])}. Original-note trace: **{notes}** under `ISC2 Update 2026/Domain {m['domain']}/`. These are course explanations/examples, not authority for an invented universal procedure.\n\n")
 parts.append(f"Before: {old}\n\nImplemented: {new}\n\nRationale: {why} See the primary reference list below. Confidence: **high for the bounded semantic correction/qualification**; this does not promote every retained illustrative shorthand into a universal rule.\n\n")
 parts.append(f"Reviewed before/after: {link('before',str(q.relative_to(root)/next(x['before'] for x in visual_pairs if x['id']==m['id'])))}, {link('after',str(q.relative_to(root)/next(x['after'] for x in visual_pairs if x['id']==m['id'])))}. All fourteen states are indexed in the browser evidence.\n\n")

parts.append('''### Exact bilingual relationship notes

These are the actual final selectable captions, not hypothetical remediation text. The full definitions, examples and element structure are in `final-diagrams.json` and `implementation-delta.patch`.

''')
class Notes(HTMLParser):
 def __init__(self,s):super().__init__();self.active=False;self.values=[];self.feed(s)
 def handle_starttag(self,t,a):
  if t=='p' and 'reading-semantic-note' in dict(a).get('class',''):self.active=True;self.values.append('')
 def handle_endtag(self,t):
  if t=='p':self.active=False
 def handle_data(self,s):
  if self.active:self.values[-1]+=s
final=read('final-diagrams.json')
for m in matrix:
 if m['changed']:
  parts.append(f"- **{m['id']}**: "+' '.join(Notes(final[m['id']]).values)+'\n')

parts.append('''
## Complete diagram inventory and disposition

Every instance is covered in Chrome at all fourteen required states. Source lines below are diagram placeholders, not generated JavaScript line numbers. “Preserved” means no Phase 3D payload edit, not a new independent academic certification of the entire lesson.

| Domain / source line | Diagram | Relationship | Issue / disposition | Verification |
|---|---|---|---|---|
''')
for m in matrix:
 issue=changes[m['id']][1]+' '+changes[m['id']][2] if m['changed'] else before[m['id']]
 status='Corrected / qualified' if m['changed'] else 'Preserved'
 if m['id']=='ethicsCanons':status='Preserved; academic provenance unresolved'
 parts.append(f"| D{m['domain']} / {m['line']} | `{m['id']}` | {m['relationship']} | {issue} | {status}; 14/14 browser states |\n")

parts.append('''
The machine-readable matrix additionally records each exact anchor, prior audit interpretation and current disposition. The privacy inventory classification was corrected from “data lifecycle” to role/instruction relationships. Earlier favorable summaries did not override direct inspection: threat, privacy and GRC mobile ordinal/connector defects were corrected in this resumed work.

### Cross-domain consistency

- D1 seven and D4 five defense groups are both explicitly examples; neither establishes a universal layer count or immunity from failure.
- D1 control functions coexist, while D2 recovery time objectives retain genuine time meaning. Removing misleading arrows does not forbid legitimate timelines or causal links.
- D2 Metric includes purpose-selected KPI/KRI; presentation formats remain distinct from measures. No change to MTTR formulas or academic Batch A/B wording.
- JML preserves role approval, least privilege, prompt withdrawal and policy-dependent log retention. Accounting remains ongoing; logs alone do not guarantee nonrepudiation.
- D4 OSI mapping and DMZ topology are qualified architectural illustrations; neither becomes a universal operational packet path. Existing sockets qualification and service/port examples remain.
- Privacy consent qualification agrees with existing legal-basis prose. Controller/processor definitions and all three grouped privacy roles remain. No GDPR jurisdiction expansion is introduced.

## Historical Domain 1 assertions

Each of the four failures was inspected independently against the starting HTML, decoded DOM text and final Chrome output. Evidence: `historical-assertions.json` plus the DiD entries in before/after browser JSON.

| Historical expectation | Observation | Resolution |
|---|---|---|
| `Layer 4: Identity & Access` | Correct rendered text; raw source has `&amp;`. | Decode the entity for text comparison. Preserve label and valid HTML escaping. |
| `Layer 6: Application & Data` | Same independently verified encoding mismatch. | Same bounded decoding change. |
| `Layer 7: Resilience & Response` | Same independently verified encoding mismatch. | Same bounded decoding change. |
| `No Single Point of Failure` | Literal guarantee was already absent; production explicitly says `ไม่รับประกันว่าจะขจัดทุก Single Point of Failure`. | Require complementary, nonchronological example semantics and retention of the no-guarantee qualification. Do not restore a guarantee. |

Two further existing assertions assumed AAA and control functions must contain SVG. Only these two entries now accept the deliberate semantic HTML (`reading-semantic-diagram`, section, heading); SVG requirements remain for the other Domain 1 diagrams. This is an intentional representation change, not deletion of coverage. The suite still checks all registry entries, educational content and accessibility roles: **370/370 pass**.

During verification, two real preservation mismatches were found: the original DR Thai/English title and `CONTINUOUS GOVERNANCE` heading had been shortened/re-cased by the initial proposal. Both protected production strings were restored. The academic/fidelity tests were kept unchanged and then passed. Condensed English SVG examples, Metric quality glosses and audience wording were also reconciled before final browser captures.

## Chrome QA and actual visual review

Installed **Chrome 156.0.8078.74**, using real headless Chrome/CDP, loaded the application with fonts and themes settled. This is browser rendering and keyboard/scroll automation, not a DOM emulator; it is not a manual assistive-technology certification.

| Viewport | Light | Dark | Coverage per theme |
|---|---|---|---|
| 1920×1080 | Pass | Pass | 24 diagrams, 94 subsection anchors, 22 tables |
| 1366×768 | Pass | Pass | Same |
| 1024×768 | Pass | Pass | Same |
| 768×1024 | Pass | Pass | Same |
| 390×844 | Pass | Pass | Same |
| 375×812 | Pass | Pass | Same |
| 320×568 | Pass | Pass | Same |

Final diagram/layout/table matrix: **2,346 checks, zero failures, zero recorded browser errors**; **336 diagram states**, **1,316 subsection-anchor states**, **308 table states**. All diagram output text matches the final registry snapshot. Direct before/after comparisons preserve table rows/headers and all anchors. Derived reconciliation: **1,574 checks, zero failures**. These counts overlap in subject matter and are reported separately, not as unique educational assertions.

Navigation/Resume regression journeys: **240 checks, zero failures/errors**, all four domains, both themes at 1366×768 and 390×844. Actual scroll offsets were checked after reload, Resume, deep links and history navigation; v1 compatibility, closed-mobile inertness, Escape and focus restoration were exercised. The full seven-state diagram matrix additionally checks layout, anchors and page overflow; it does not claim full keyboard journeys at every viewport.

Evidence comprises **154 before captures** for eleven corrected patterns × fourteen states, **180 final diagram captures** (154 corrected plus two representative states for each of thirteen retained diagrams), **40 navigation captures** and **16 overview contact sheets**. Initial baseline matrices were retained; three newly confirmed mobile patterns used targeted additional baseline captures instead of restarting all baseline work. Final D3/D4 results were reused after proving their payloads still match the final source. Final D1/D2 matrices were refreshed after the three mobile corrections.

PNG captures were actually inspected: fourteen corrected-pattern overview sheets across all required configurations; eleven full-resolution before/after pattern pairs; two preserved-pattern overview sheets. Mobile thumbnails are useful for structure, not tiny-glyph reading; native samples and browser word/padding checks supplement them. No new overlap or clipping was observed in corrected patterns. On narrow screens cards stack; longer definitions are retained rather than hidden. See `visual-review.json` for exact inspected images. Human visual preference/acceptance remains pending.

Chrome full-surface export can suppress the desktop scrollbar and alter wrapping. The QA driver pins only the already-measured native body width during export, then verifies unchanged live widths and stable x/width/height (<0.5px) and y (<1px). This capture workaround is QA-only. It does not add production width overrides or justify artificial layout improvements. Every final capture passed stability checks. Final review removed trailing spaces on otherwise empty lines left by ordinal/connector removal in three changed templates; no element, attribute or normalized text changed. The final registry was re-exported and reconciled against every browser text record, and all 22 suites were rerun successfully. These whitespace-only edits do not invalidate the captures.

### Semantic accessibility results

All 24 diagrams retain nonempty region names and meaningful content order. New HTML concepts use selectable text, sections, headings and lists; optional Mover is explained in words as well as the dashed border. Classification and relationships do not depend on color alone. Existing SVGs retain named image roles and text/mobile alternatives, with corrected DMZ/DiD descriptions where needed. New relationship captions are actual visible DOM text. No fake controls or unnecessary tab stops were added. Reading navigation focus behavior still passes. No screen-reader application session or formal WCAG audit is claimed; detailed contrast/type scaling belongs to Phase 3E and end-to-end accessibility review to Phase 3F.

## Automated regression results

All **22 applicable suites, 1,076 checks pass**, zero suite failures. Focused semantic checks were run red before production implementation (nine semantic failures in the initial ten-check run; three further failures in the expanded fourteen-check run), then green after the corresponding fixes. No historical failure was suppressed. Raw logs and command paths are in `regression-results.json`.

| Suite | Passed | Exit |
|---|---:|---:|
''')
for r in results:parts.append(f"| `{r['suite']}` | {r['passedChecks']} | {r['exitCode']} |\n")

parts.append('''
Commands used:

```powershell
node artifacts/qa/reading-notes-phase3d/run-regressions.mjs
node artifacts/qa/reading-notes-phase3d/browser-qa.mjs --domain=1
# Repeat domain=2,3,4 only when their final payload/evidence is missing or changed.
node artifacts/qa/reading-notes-phase3d/browser-qa.mjs --baseline --domain=1 --only=threatChain,privacyFlow
node artifacts/qa/reading-notes-phase3d/browser-qa.mjs --baseline --domain=2 --only=grcAlignment
node artifacts/qa/reading-notes-phase3d/navigation-qa.mjs
python -X utf8 artifacts/qa/reading-notes-phase3d/reconcile-evidence.py
python -X utf8 artifacts/qa/reading-notes-phase3d/verify-preservation.py
```

`--baseline` serves frozen starting runtime bytes; it does not revert files. Browser commands own their temporary processes and close them. `prepare.mjs` / `apply-proposal.py` are historical preparation artifacts, not resume commands; do not reapply them to final source.

## Preservation and changed-file manifest

The starting dirty filesystem was hashed: **27,816 files**. Final comparison: **27,812 byte-identical**, four intentionally modified existing files, no missing files or unexpected baseline edits. The four Reading Markdown sources, original eight notes, existing navigation/parser code, prior QA, Learning Slides CSS/JS, Quiz/Question Banks, Vocabulary and Domain 5 are byte-preserved. Removing only the marked Phase 3D CSS insertion reproduces the exact starting CSS hash; prior tracker bytes are also preserved. All 13 untouched diagram payloads equal their baseline strings. Course formulas, technical numbers, navigation anchors and prior Phase 3B/3C changes remain. Removed diagram ordinal badges are intentional semantic corrections, not formula changes.

Existing files modified by this phase:

| File | Exact scope |
|---|---|
| `js/core/diagram-generator.js` | Eleven registry payloads listed above; public API, keys and other thirteen payloads unchanged. |
| `css/reading.css` | One marked Reading-only semantic representation block, lines 3733–3784. Other CSS bytes unchanged. |
| `tools/verify-reading-notes-domain1-presentation.mjs` | Four historical assertion resolutions and bounded HTML acceptance for two intentionally replaced SVGs. |
| `docs/plans/task.md` | Own appended Phase 3D row only. Previous rows/bytes preserved. |

New task files outside the QA directory: `tools/verify-reading-diagram-semantics.mjs` and this report. All other new/updated task artifacts are under `artifacts/qa/reading-notes-phase3d/`. **`changed-files.json` enumerates every task file with SHA-256, size and baseline status**; it distinguishes the four existing-file deltas from preserved concurrent work and task evidence. `implementation-delta.patch` is the phase-only delta, while `git-before.txt` / `git-after.txt` retain the wider dirty-tree context. No stage, commit, push, reset, revert or clean was performed.

## Remaining concerns and Phase 3E–3F boundaries

1. **D1-N08 ethics precedence: requires additional authorized evidence.** The four canon numbers are genuine. The existing diagram and course prose also teach strict conflict precedence. The current public ISC2 ethics page lists mandatory canons and professional judgment but does not, by its silence, disprove historical authorized ordered-conflict teaching. Original notes enumerate/mnemonically order the canons without establishing a universal override rule. The Phase 1A classification remains “Requires additional evidence.” Preserve existing academic content pending current authorized CC course provenance; do not present this retained assertion as newly verified or conclusively false. Human academic review is required to settle it.
2. **Existing cloud SVG legend clipping:** the CSP-responsibility legend exceeds its viewBox at 1920, 1366 and 1024 in both themes (six states). The same label is present in baseline and final measurements. This is a pre-existing Phase 3E legibility defect, not a new Phase 3D regression. Do not call all original diagrams entirely unclipped.
3. **Phase 3E:** retained SVG small labels, firewall-label crowding, contrast, type scaling and whitespace merit dedicated visual refinement. New HTML preserves complete explanations and is consequently taller than the old condensed SVG; density/redundancy can be reviewed without losing content. No aesthetic redesign was attempted here.
4. **Phase 3F:** final integrated learner journeys, assistive-technology testing and human acceptance. Chrome emulation does not replace physical-device/browser diversity or human educational review.

No confirmed Phase 3D semantic fix or new regression remains outstanding. The provenance uncertainty and pre-existing visual limitations above are explicit dispositions, not hidden success claims. No Phase 3E implementation has begun; human acceptance is not complete.

## Primary academic references

All are primary issuers. The outline defines curriculum scope; technical sources support the bounded qualifications. None prescribes the exact card design used here. Course-note locations above supply wording and examples, not infallible technical authority.

- [Official ISC2 CC Exam Outline, effective September 1, 2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf): objectives 1.2/1.4, 2.1/2.2/2.4, 3.1 and 4.1 provide the relevant risk, controls, governance, continuity, measurement, IAM and model scope. The six measurement items are not an official six-step procedure.
- [NIST defense in depth glossary](https://csrc.nist.gov/glossary/term/defense_in_depth): complementary people, technology and operational barriers; supports example layering without a universal count or guarantee.
- [NIST SP 800-34r1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf), §§2.2.1 and 2.2.6: coordinated business continuity and IT disaster recovery planning scopes. Does not justify treating every organization's BC/DR documents as a formal universal set relation.
- [NIST SP 800-55 Volume 1](https://csrc.nist.gov/pubs/sp/800/55/v1/final): selecting measures appropriate to purpose; supports avoiding an invented universal measurement ladder.
- [NIST SP 800-53r5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), AC-2 / PS-4 / PS-5: event-based account management, termination and transfer. Conditional/repeated role changes are the stated educational inference.
- [ITU-T X.200, basic OSI reference model](https://www.itu.int/rec/T-REC-X.200-199407-I/en): architectural layering rather than a side-by-side diagram of actual packet transit.
- [NIST SP 800-92](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-92.pdf), §2.1: security logs include authentication attempts and other events; supports ongoing accounting explanation.
- [NIST DMZ glossary](https://csrc.nist.gov/glossary/term/demilitarized_zone): controlled communication and separation between differently trusted zones. Does not confer an absolute anti-compromise guarantee.
- [EDPB legal-basis guidance](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en): consent is one of several lawful bases; the privacy connector is explicitly conditional. [Official EU business GDPR guidance](https://europa.eu/youreurope/business/governance-and-sustainability/digital-and-data-compliance/data-protection-gdpr/index_en.htm) supports processor instructions when a processor is used. Direct EUR-Lex retrieval was robot-blocked; no claim of a successfully retrieved direct statute is made.
- [ISC2 Code of Ethics](https://www.isc2.org/ethics): four mandatory canons and judgment. This page alone does not resolve the current-course provenance of strict conflict precedence; see D1-N08 above.

## Evidence entry points

''')
for name,desc in [('diagram-matrix.json','All 24 source locations, relationships and dispositions'),('content-ledger.json','Original explanation/caption dispositions'),('baseline-diagrams.json','Frozen before registry payloads'),('final-diagrams.json','Exact final registry payloads'),('visual-review.json','Actual inspected image manifest'),('evidence-reconciliation.json','Source/browser/table/anchor and capture reconciliation'),('regression-results.json','22 commands, exit statuses and check counts'),('historical-assertions.json','Four separate historical assertion investigations'),('preservation.json','Starting filesystem preservation results'),('changed-files.json','Exact file manifest'),('evidence-manifest.json','Evidence hashes and capture sets'),('review.md','Structured single-flow implementation review'),('checkpoint.md','Final resume/acceptance checkpoint')]:
 parts.append(f"- {link(name,str(q.relative_to(root)/name))}: {desc}.\n")
for d in range(1,5):parts.append(f"- {link('Before D'+str(d),str(q.relative_to(root)/f'before-d{d}.json'))} / {link('After D'+str(d),str(q.relative_to(root)/f'after-d{d}.json'))}: fourteen browser contexts and capture geometry.\n")
parts.append(f"- {link('Navigation journeys',str(q.relative_to(root)/'navigation-journey-results.json'))}: actual scroll/history/focus observations.\n")
(root/'docs/plans/isc2-cc-2026/reading-notes-phase3d-diagram-semantics-remediation.md').write_text(''.join(parts),encoding='utf8')
for m in matrix:
 if m['changed']:
  m.update(beforeRepresentation=changes[m['id']][1],confirmedIssue=changes[m['id']][1],correctRepresentation=changes[m['id']][2],productionChange=changes[m['id']][2],originalNoteTrace=changes[m['id']][3])
 else:
  m.update(beforeRepresentation=m['relationship'],confirmedIssue='No confirmed Phase 3D correction; '+before[m['id']],correctRepresentation='Preserve current representation',productionChange='None')
 m['verification']='14/14 final Chrome states; final source text matched; relevant regressions pass'
(q/'diagram-matrix.json').write_text(json.dumps(matrix,indent=2,ensure_ascii=False),encoding='utf8')
print('Report written; all 24 diagrams / 11 changes / 22 suites / 1076 automated checks.')
