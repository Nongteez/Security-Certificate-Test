"""Build audit-only reports from captured source/range evidence and review decisions."""
from pathlib import Path
import json,re,html,collections
root=Path.cwd();p=root/'artifacts/qa/reading-notes-phase3a';docs=root/'docs/plans/isc2-cc-2026'
def load(n):return json.loads((p/n).read_text(encoding='utf-8-sig'))
def dump(n,d):(p/n).write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
src=load('source-ledger.json');browser=load('browser-results.json');focus=load('focused-results.json')
refs={
 'outline':'https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf',
 'relationships':'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html',
 'contrast':'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
 'language':'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html',
 'reflow':'https://www.w3.org/WAI/WCAG21/Understanding/reflow',
 'continuity':'https://csrc.nist.gov/topics/security-and-privacy/security-programs-and-operations/contingency-planning',
 'nist34':'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf'}
dump('references.json',{'checkedDate':'2026-11-01','sources':refs,'limitations':'The NIST SP 800-53 PDF fetch timed out; no fine-grained AC-2 quotation is relied upon. The official ISC2 PDF was retrieved and its objective 2.4 / 3.1 text reviewed. No official six-step measurement or compulsory JML state machine was located.'})
findings=[]
def add(id,severity,title,origin,layers,anchors,location,evidence,issue,cause,recommendation,qualification,prior='',confidence='High',referenceKeys=()):
 findings.append(dict(id=id,severity=severity,title=title,status='Confirmed presentation defect',origin=origin,layers=layers,anchors=anchors,location=location,evidence=evidence,issue=issue,rootCause=cause,recommendation=recommendation,qualification=qualification,prior=prior,confidence=confidence,references=[refs[x] for x in referenceKeys]))
add('P3-VS-001','P2','BC/DR nesting and control-like scope labels obscure the teaching relationship','User-reported',
 ['Diagram Content/Data','SVG Layout','Local CSS'],['topic-2-2-bc-vs-dr'],
 'domain-2.md:181–195; diagram-generator.js:1501–1593; reading.css diagram scope/mobile scope rules',
 ['direct-P3-VS-001-1366-light.png','direct-P3-VS-001-390-dark.png'],
 'The diagram uses an outer card, BC enclosure, DR enclosure, badges, five pill-shaped labels and a further examples panel. On phone the containment consumes most of the available 328 px reading width. Scope nouns look like controls although they have no interaction. Examples compete with category framing.',
 'Repeated nested framing and decorative badge/pill styling perform several visual jobs without a clear priority.',
 'Pilot one simple BC scope boundary with a clearly labelled technology-recovery contribution and examples as ordinary adjacent text. Show People, Processes, Facilities, Suppliers and Technology as non-interactive scope labels. Preserve every example and the existing correct DR translation. Suggested relationship caption: “DR supports business continuity through technology and system recovery / DR สนับสนุนความต่อเนื่องทางธุรกิจด้วยการกู้คืนเทคโนโลยีและระบบ”.',
 'Containment is an acceptable introductory scope model, not a newly confirmed academic error or a universal set-theory claim about all DR practices. Button-like appearance is an affordance assessment, not a claim that users clicked these controls in usability testing.',
 'Academic D2-06 translation is already corrected; this is a separate presentation issue.',confidence='High for structure; medium for perceived affordance',referenceKeys=['continuity','nist34'])
add('P3-VS-002','P2','Measurement aid retains a numbered hierarchy despite corrected non-mandatory prose','User-reported',
 ['Diagram Content/Data','SVG Layout','Accessibility Metadata'],['topic-2-4-memory-aid'],
 'domain-2.md:433–450; diagram-generator.js:1697–1874',
 ['direct-P3-VS-002-1366-light.png','direct-P3-VS-002-390-dark.png'],
 'Desktop puts 06 Report at the top, 04/05 in the next row, 02/03 below and 01 Metric at the bottom, linked by a dashed vertical spine. Mobile presents 06 down to 01. The region name still says “6-Part Framework”. Numbering, reading order and architecture framing imply more order/officialness than the correct explanatory paragraph warrants.',
 'A local memory aid is encoded as a tiered numbered architecture rather than a relationship between kinds of measures and communication forms.',
 'Group by function: “Measurement and indicators / การวัดและตัวชี้วัด” (Metric, with purpose-selected KPI and KRI) and “Presentation and communication / การนำเสนอและสื่อสาร” (Dashboard, Scorecard, Report). Remove step ordinals and workflow connectors unless attached to an explicitly optional worked example. Label it as a local study aid in visible and accessible text. Preserve all six definitions and examples.',
 'Batch A already corrected Metric as including KPI/KRI, and current Thai prose expressly rejects a mandatory sequence. Do not re-open that academic correction or claim the current prose explicitly attributes six steps to ISC2. The outline lists topics, not this architecture; provenance as AI-generated is not established.',
 'Residual visual issue related to D2-04, not a recurrence of its corrected raw-data-only definition.',referenceKeys=['outline','relationships'])
broken=set()
for c in browser['configurations']:
 for r in c['ranges']:
  if any(any('-' not in w['word'] for w in t['brokenWords']) for t in r['tables']):broken.add(r['anchor'])
add('P3-TBL-001','P1','English terminology fragments in compressed comparison tables','User-reported; repeated occurrences newly mapped',
 ['Table Layout','Local CSS','Component Renderer'],sorted(broken),
 'domain-2.md:441–448; reading.css:2828–2853; markdown-parser.js table renderer:459–493; additional occurrences in coverage matrix',
 ['direct-P3-TBL-001-1366-light.png','direct-P3-TBL-001-390-dark.png'],
 'At 1366 px, the memory-aid table is 915 px wide but its first column is only 91 px: Dashboard and Scorecard break mid-word. At 390 px, four columns squeeze into 328 px; the first is about 55 px. At 320 px they squeeze into 258 px, with a roughly 50 px first column. Even Metric/KPI and ordinary trigger phrases fragment. The sweep finds unhyphenated mid-word breaks in 15 subsection ranges across all four domains.',
 'Generic table auto sizing plus width:100% and word-break/overflow-wrap:break-word permits columns to shrink below technical-term needs. Most affected tables do not adopt the GRC table’s contained minimum-width behavior.',
 'Pilot meaningful term/description/example column roles, preserve whole English words and mixed-language phrase boundaries, allocate sufficient keyword width, and use a labelled contained scrolling comparison where needed. Retain row/column relationships and current font sizes. Consider a narrow definition presentation only if it preserves comparison tasks; do not universally convert tables to cards.',
 'Severity P1 describes severe phone fragmentation in this root-cause family; desktop two-line wrapping is P2 in isolation. Normal wrapping at spaces or intentional hyphens is excluded from the affected-range count. Horizontal scrolling itself is not a defect and WCAG permits necessary two-dimensional tables.',
 'Related RN-I-014; the specific Dashboard/Scorecard and broader 15-range mapping are fresh current evidence.',referenceKeys=['reflow','relationships'])
diaganchors=sorted({r['anchor'] for c in browser['configurations'] for r in c['ranges'] if r['diagrams']})
add('P3-DIA-001','P1','Scaled SVG instructional text is too small; JML is the mandatory exemplar','User-reported; previously identified system-wide',
 ['SVG Layout','Local CSS'],diaganchors,
 'domain-3.md:9–38 (3.1.1, not reported 3.4.1); diagram-generator.js:1877–1982; reading.css:1184–1210,1880–1897',
 ['direct-P3-DIA-001-1366-dark.png','direct-P3-DIA-001-1024-light.png','feature-d4-topic-4-2-dmz-architecture-diagram-0-1366-light.png'],
 'JML uses an 840×220 viewBox. At 1366 px the wrapper has 867 px but the SVG caps at 760×199 px; minimum instructional text is 9.95 px. At 1024 px it renders at 525×137.5 px, with 6.88 px minimum text. All 24 diagram payloads in 23 subsection ranges have small labels at that width: D1 minimum 6.72, D2/D3 6.56, D4 5.62 px. Continuous Governance is a short, visually weak strip.',
 'Authored 10–12 px SVG labels are scaled by broad fixed viewBoxes, maximum-width caps and a viewport-only 768 px representation breakpoint. The desktop rail reduces the actual component width well before that breakpoint.',
 'Pilot JML and a dense D4 diagram with a component-width-driven representation and a legibility budget for actual transformed instructional text. Use available width/height, enlarge/wrap labels and reduce unused space. Keep governance legible and explicit. Allow diagrams with different information density to adapt differently. Validate full-width and sidebar-open/collapsed cases without changing Phase 2 navigation.',
 'Phone/tablet ≤768 px use a separate HTML representation; do not report the hidden desktop SVG as tiny visible phone text. A readable font-size budget is a product acceptance target, not a fabricated WCAG minimum-font-size rule. Contrast is separately counted under ACC-001.',
 'RN-I-001 remains confirmed; JML is an occurrence, not a second global defect.',referenceKeys=['reflow'])
rhythm=['topic-4-1-fundamentals-topologies','topic-4-1-ipv4-cidr-nat','topic-4-1-ipv6-architecture','topic-4-1-ports-multiplexing','topic-4-1-wireless-security','topic-4-1-network-threats-iot','topic-2-2-drp-sites','topic-2-3-social-engineering-psychology','topic-2-4-mttd-mttr','topic-3-1-iam-tools']
add('P3-TXT-001','P2','Concept-group labels remain ordinary paragraphs with weak local rhythm','User-reported; similar source patterns newly mapped',
 ['Source Content Structure','Markdown Semantics','Local CSS'],rhythm,
 'domain-4.md:9–27,96–149,178–208,243–313; reading.css:591–597,660–694; additional ranges in coverage matrix',
 ['direct-P3-TXT-001-390-light.png','direct-P3-TXT-001-1366-dark.png'],
 'Network Scope, Collision & Broadcast Domains and architectural reach are plain paragraph labels, not navigable subheadings. They inherit normal 15.5 px / 27.9 px prose with 0 px top and 16 px bottom margins. The following list gets negative top spacing from p+ul. Three different classifications read as a continuous list/paragraph stream. Similar group transitions occur in address planning, wireless, recovery sites and IAM tools.',
 'Source encodes meaningful conceptual transitions as colon-ended paragraphs or bold list text; generic proximity rules cannot distinguish a group title from an ordinary list introduction.',
 'Promote meaningful concept-group labels to semantic h4 subheadings, or a definition-group structure where that is more appropriate. Keep definition, explanation and example together. Pilot content-sensitive group spacing on Network Fundamentals and DRP sites; preserve LAN/WAN/WLAN/PAN/VPN and every explanation. Avoid a global li-margin increase.',
 'The content is not wrong because it is long. Some colon-ended introductory sentences correctly remain paragraphs. The ten mapped ranges are reviewed candidate occurrences of this structure problem, not a rule that every colon becomes a heading.',
 'Related RN-I-013/014 and Batch B presentation deferrals.',referenceKeys=['relationships'])
add('P3-SEM-001','P2','OSI layer titles are ordered-list labels rather than semantic subsections','User-reported',
 ['Source Content Structure','Markdown Semantics'],['topic-4-1-osi-model'],
 'domain-4.md:29–77; source starts seven numbered layer groups at line 40',
 ['direct-P3-SEM-001-1366-light.png','direct-P3-SEM-001-390-dark.png'],
 'The DOM correctly nests bullet details under seven ol items, but exposes “1. Layer 7” through “7. Layer 1”. Those ordinal markers compete with actual layer numbers. None of the seven layer names is a heading, despite each introducing multiple responsibilities, protocol/technology examples and PDU details.',
 'Semantic teaching sections are authored as a numbered outer list. This is a source-structure choice; the current list parser is not shown to have flattened these nested details.',
 'Promote Layer 7 through Layer 1 to h4 headings with their existing English/Thai names. Group the existing responsibility, technology/protocol, example and PDU detail under each. Preserve all explanations, including the corrected sockets qualification. Retain the existing Layer 1→Layer 7 mnemonic direction; optionally label the following exposition as Layer 7→Layer 1.',
 'Layer numbering and the current mnemonic direction are already accurate. Do not hide list markers with CSS, reverse the mnemonic, or treat all numbered concept collections as false workflows.',referenceKeys=['relationships','outline'])
add('P3-SEM-002','P2','JML connectors imply a compulsory Mover stage','Newly discovered visual-semantic distinction within user-reported JML target',
 ['Diagram Content/Data','SVG Layout','Accessibility Metadata'],['topic-3-1-jml-lifecycle'],
 'domain-3.md:9–38; diagram-generator.js:1877–1982 desktop arrows and mobile down-arrows',
 ['direct-P3-DIA-001-1366-light.png','direct-P3-DIA-001-390-light.png'],
 '01 Joiner → 02 Mover → 03 Leaver is shown as a single path in both representations. A learner may infer every account must pass through a role-change event before offboarding, or that Mover happens only once.',
 'A possible employee journey is drawn as an unconditional lifecycle state machine without optional/repeated transitions.',
 'Show join/provision, an active-access period with ongoing review, optional repeated role-change/re-evaluation, and offboarding reachable without a role change. Keep Continuous Governance spanning relevant account activity. Alternatively label the current path explicitly as one possible example and show the direct Joiner-to-Leaver alternative.',
 'This confirms a visual ambiguity, not a claim that the prose literally forbids direct departure. The official outline 3.1 lists provisioning/review/deprovisioning activities; it does not prescribe the pictured J→M→L sequence.',referenceKeys=['outline','relationships'])
add('P3-SEM-003','P2','Control function comparison still has workflow arrows','Previously identified; current visual residual',
 ['Diagram Content/Data','SVG Layout'],['topic-1-4-control-types'],
 'domain-1.md:770–840; diagram-generator.js:1042–1183',
 ['feature-d1-topic-1-4-control-types-diagram-0-1366-light.png','feature-d1-topic-1-4-control-types-diagram-0-390-dark.png'],
 'Before/Detect/Correct panels remain linked by right arrows, with downward connectors in the narrow representation, although the corrected title and caption describe overlapping functions. This can compete with the lesson that one control can serve multiple functions and retrospective detection is valid.',
 'An old timing metaphor remains in the geometry after its academic wording was qualified.',
 'Use an unconnected function comparison or explicitly illustrative timing band with overlap. Keep purpose/function primary, retain CCTV and other multi-role examples, and preserve the current corrected timing explanation.',
 'Current Detective text expressly allows retrospective detection. Do not reclassify the old “during-only” statement as still present. The remaining issue is the competing visual cue.',
 'D1-N02 / Batch B corrected wording; geometry deferred.',referenceKeys=['relationships'])
add('P3-DIA-002','P2','Cloud provider legend clips inside its own SVG','Previously identified',
 ['SVG Layout','Diagram Content/Data'],['topic-4-3-shared-responsibility'],
 'domain-4.md:453–473; diagram-generator.js:2626 onward; cloudSharedResponsibility legend',
 ['direct-P3-DIA-002-1366-light.png','direct-P3-DIA-002-1024-dark.png'],
 'The CSP Responsibility label extends beyond the right SVG edge while SVG overflow is hidden. Document width remains contained, so a page-overflow-only check misses the truncation. The legend identifies responsibility and is instructional content.',
 'A long bilingual label has insufficient viewBox space; width scaling does not make its logical bounds fit.',
 'Wrap or reposition the full legend, or make it adjacent semantic HTML. Retain the academically corrected distinction between customer governance/configuration and provider-operated controls. Check text bounds against the SVG viewport after fonts settle.',
 'No new shared-responsibility academic error is inferred. The mobile HTML alternative is a different representation and not automatically affected by this SVG clipping.',
 'RN-I-018 remains confirmed.',referenceKeys=['relationships'])
add('P3-TBL-002','P2','GRC protected keyword exceeds its padded final cell','Previously identified',
 ['Table Layout','Local CSS','Component Renderer'],['topic-2-1-frameworks-standards'],
 'domain-2.md:61–79; reading.css:2965–3008; markdown-parser.js:459–493',
 ['direct-P3-TBL-002-1024-light.png','grc-scroll-end-390-dark.png'],
 'At 1024/390 px, the special table is 780 px wide and its wrapper has 791 px scroll width. “Enterprise IT Governance” extends 11.08 px beyond the final cell’s right border in both themes. Preserving nowrap avoids fragments but does not guarantee padded cell fit.',
 'The fixed percentage/minimum-width special case does not account for the actual keyword width plus horizontal padding. Recognition also depends on exact table-header content.',
 'Treat this separately from generic table compression: size the keyword column for measured text plus padding, or allow wrapping at word boundaries. Preserve readable body type, explicit column headers and contained scrolling. Replace content-sniffing only if a narrowly reviewed semantic hook is needed.',
 'Native Chrome scrolling worked: focus on the scroll wrapper plus ArrowRight moved it 40 px in both themes. Do not call the wrapper keyboard-inaccessible or all horizontal scrolling broken. The measured problem is cell fit, not merely the existence of overflow.',
 'RN-I-009 remains confirmed.',referenceKeys=['reflow'])
add('P3-ACC-001','P2','Instructional labels have insufficient contrast in specific settled themes','Previously identified; exact current occurrences measured',
 ['Local CSS','SVG Layout','Accessibility Metadata'],[],
 'reading.css .diag-text-sub and diagram support tokens; diagram-generator.js iamLifecycle governance strip/badges; scenario answer label reading.css:2767',
 ['direct-P3-DIA-001-1366-dark.png','feature-d1-topic-1-1-zero-trust-defense-in-depth-diagram-0-1366-light.png'],
 'JML governance text is 2.89:1 on white in Light and 3.87:1 on the dark panel in Dark. The Dark Joiner badge is 3.48:1 white-on-blue; the Light badge is 5.17:1 and should not be called a failure. Scenario answer labels are 11.5 px green with 2.54:1 on white; the same label is 7.30:1 in Dark. Other SVG muted sublabels have similar theme-specific failures.',
 'Support-text and colored-label tokens are reused for small instructional text; theme palettes and real painted backgrounds are not consistently paired for normal-text contrast.',
 'Adjust only the relevant foreground/background token pairs and badge text choices; target ≥4.5:1 for normal instructional text. Keep labels so color is not the sole meaning carrier. Recheck effective text sizes, composited backgrounds and both themes after transitions settle.',
 'Ratios are computed using actual rendered fills; SVG backgrounds are inferred from the last preceding containing rect and manually checked on the named samples. Do not certify every complex overlapping/gradient paint from that heuristic. No blanket color-only failure is asserted.',
 'RN-I-008 remains confirmed.',referenceKeys=['contrast'])
add('P3-ACC-002','P2','Thai instructional passages inherit the English page language','Previously identified',
 ['Accessibility Metadata','Source Content Structure','Component Renderer'],[x['anchor'] for x in src],
 'index.html document lang=en; Reading article/source passages; browser-results.json language/langParts',
 ['browser-results.json','supplement-results.json'],
 'All 94 ranges inherit the English document language; no language-of-parts attributes were found in these ranges. Long Thai explanatory passages therefore lack a programmatically determined Thai language.',
 'The bilingual corpus is rendered as unannotated mixed-language content under a monolingual page declaration.',
 'Plan a Reading-local Thai language scope with appropriate explicit English passage annotations where meaningful. Apply consistently to authored source, scenarios and generated instructional components, without changing the global app language or text content.',
 'WCAG language-of-parts has exceptions for technical terms, proper names and vernacular words. It does not require annotating every borrowed English cybersecurity word. Native screen-reader voice switching was not manually tested; the missing language metadata itself is confirmed.',
 'RN-I-007 remains confirmed.',referenceKeys=['language'])
add('P3-TXT-002','P3','Raw currency escape appears in a risk worked example','Previously identified',
 ['Source Content Structure','Component Renderer'],['topic-1-2-quantitative-risk'],
 'domain-1.md:416 onward, Asset Value definition; markdown-parser.js HTML passthrough/currency path',
 ['direct-P3-TXT-002-math-light.png','supplement-results.json'],
 'The Asset Value example visibly shows a backslash before $10,000. Other worked dollar amounts render normally. The artifact is a representation inconsistency, not a wrong amount or formula.',
 'Literal currency escaping is handled differently in raw authored HTML and normal inline Markdown.',
 'In a later narrow task, define one currency-escaping policy and verify raw HTML and inline Markdown paths while preserving KaTeX/math behavior, calculations and all example values.',
 'Do not remove meaningful dollar notation or globally replace math escapes. The screenshot and DOM text establish this occurrence; its severity is minor polish.',
 'RN-I-010 remains confirmed.')
low_names={x['diagram'] for c in focus['checks'] if c.get('width')==1366 for x in c.get('svgContrast',[]) if x['ratio']<4.5}
contrast_anchors={r['anchor'] for c in browser['configurations'] for r in c['ranges'] if any(z['name'] in low_names for z in r['diagrams'])}
contrast_anchors.update(x['anchor'] for x in src if 'review' in x['anchor'] or 'distinctions-scenarios' in x['anchor'])
next(f for f in findings if f['id']=='P3-ACC-001')['anchors']=sorted(contrast_anchors)
assert len(findings)==13
dump('findings.json',findings)

# Human source/relationship review, one record for each subsection (not blanket PASS).
notes={
1:[
'Definitions plus a threat-chain example; retain distinctions and table rows.',
'CIA properties use real subheadings; trade-off triangle and availability example are legitimate teaching aids.',
'Identification and authentication have distinct h4 explanations; do not undo corrected proof/claim language.',
'Structured MFA factors are grouped cards; preserve factor/context distinction rather than add another taxonomy.',
'Authorization and accounting have separate h4 titles and a comparison; preserve the accounting explanation.',
'Privacy, non-repudiation and accountability are separated with h4s; lifecycle arrow is an illustrative model.',
'Zero Trust and defense depth have real subheadings; layer artwork is conceptual, not physical topology.',
'Short risk definition groups work without added large spacing; formula alternative needs separate qualification.',
'SLE/ARO/ALE have useful h4 progression and worked examples; preserve arithmetic, repair only rendering artifacts.',
'Numbered management stages form a local cyclic learning model; current provenance caveat is meaningful.',
'Four treatment alternatives are not a compulsory procedure; the existing independent grouped presentation is appropriate.',
'Risk state and appetite/tolerance definitions are distinct; no forced diagram is needed.',
'Short governance definition and responsibility list remain adequate prose.',
'Legal examples are scoped explanations; do not turn them into smaller keyword-only cards.',
'Framework definitions already have grouping; preserve framework versus standard nuance.',
'Document hierarchy is a useful authority comparison; advisory guidelines are not compulsory execution steps.',
'Three GRC definitions plus integration callout are a conceptual collection.',
'Control categories use a structured component; preserve official mapping and all examples.',
'Control purpose and time differ; corrected overlap text must dominate any visual timing metaphor.',
'CCTV/firewall examples explicitly demonstrate multi-function controls and are useful.',
'Authority boundary examples are short prose and a callout; no additional workflow is justified.',
'Due care/diligence h4s and comparison table are meaningful; retain act versus verify contrast.',
'Four canons are a real numbered list; official canon numbering is not a procedural flow.',
'Comparison, scenarios and cheat sheet have internal h4s; retain all scenario rationales and pairwise contrasts.'
],
2:[
'GRC pillars use an ordered definition collection with nested detail; numbering is enumeration, not a mandatory process.',
'Seven GRC benefits are independent outcomes; grouping by organizational function could help, but no false workflow is asserted.',
'Four importance bullets are a coherent concise concept collection.',
'Framework table has genuine col headers; padded keyword fit needs its own correction.',
'Five tool capabilities are a genuine unordered feature list; keep it as a list.',
'Risk-register field table is very narrow on phone; preserve field names, owners and tracking examples.',
'Business continuity scope and disruption examples should be separated; disruptions are alternatives, not steps.',
'BCP components are a genuine non-sequential checklist; retain all eight.',
'BIA explanation, inequality and qualification need an explanatory group, not independent equal-rank bullets.',
'DR goals and scope are examples; existing IT recovery terminology is correct.',
'BC/DR relationship is useful; crowded nesting and comparison-table term wrapping reduce clarity.',
'RTO/RPO comparison and timeline have valid temporal meaning; preserve the newly qualified recovery tolerance explanation.',
'Backup strategies versus alternate sites are distinct conceptual groups and deserve subheadings.',
'Testing types are alternatives; the corrected tabletop/document-review distinction must remain visible.',
'Culture principles are an unordered collection, not a progression.',
'Leadership responsibilities and tone-from-top examples can stay together.',
'Awareness/training/education are parallel definitions; a compact definition group is appropriate.',
'Psychology principles and human-factor examples need a clear group boundary.',
'Phishing categories are a comparison table; Smishing/Pretexting word fragments are visible even wide.',
'Authentication advice and secret protection are separate groups; retain the updated passkey/password wording.',
'Reasons for measurement are independent benefits; do not imply a seven-step procedure.',
'Metric quality characteristics form a short coherent list.',
'MTTD/MTTR definitions include purpose, calculation and examples; group each measure coherently.',
'KPI/KRI are purpose-selected measures; comparison-table columns compress on phone.',
'Dashboard features form a short coherent list; not every dashboard requires a live feed.',
'Scorecard definition plus worked table are useful; narrow term/header fragmentation needs table treatment.',
'Report definition and recommendation/audience bullets are coherent.',
'Correct six-term prose conflicts with residual numbered architecture; trigger table has severe narrow fragmentation.',
'Review comparisons and scenarios are grouped; exam tips are a collection, not chronological steps.'
],
3:[
'Joiner/Mover/Leaver are lifecycle events; Mover is optional/repeatable, while governance is ongoing.',
'Role/job/access table is a genuine comparison; long administrator terms require readable column width.',
'Provisioning sequence is explicitly an implementation example; keep real ordered steps.',
'Audit findings are a diagnostic collection, not six remediation stages; retain scenario rationale.',
'Revocation triggers and revocation mechanisms are different groups; preserve disable versus lock distinction.',
'NIST digital identity and CSF are frameworks, not a compulsory cross-framework sequence.',
'Directories, IdPs and management platforms are categories requiring a stronger grouping hierarchy.',
'Least privilege explanation, implementation examples and benefits are coherent groups.',
'Logical versus physical controls form a definition comparison; not a workflow.',
'SoD objective bullets and three-person worked process have different semantics; preserve true worked order.',
'PoLP/SoD two-axis comparison is meaningful; avoid forcing it into a flow.',
'DAC definition/authority/mechanism/pros/cons/example is a coherent definition group.',
'MAC labels and clearance are paired inputs, not ordered operations; current no-guarantee qualification is essential.',
'RBAC maps role to permissions; preserve role explosion and other trade-offs.',
'ABAC attributes and action are inputs; do not imply four attributes must execute sequentially.',
'Four-model grid is a comparison; model labels/ordinals do not themselves imply security ranking.',
'Review comparisons, tips and scenarios are legitimate separate groups; no automatic numbering removal.'
],
4:[
'Network Scope, collision/broadcast and reach are different classifications; promote their group labels.',
'Seven layer teaching sections need semantic headings; mnemonic already says 1→7 correctly.',
'OSI/TCP-IP mapping is a correspondence, not temporal progression; retain protocol/PDU detail.',
'Address structure, classful history, private/link-local ranges and NAT are distinct groups.',
'Addressing properties, SLAAC and transition strategies are separate groups; retain corrected interface-ID text.',
'TCP/UDP nested details compare properties, not two compulsory stages.',
'Port ranges and service-port lookup are different teaching tasks; preserve the service table.',
'Device families and their nested responsibilities are definition groups, not a required seven-device path.',
'Wi-Fi standards, encryption generations, Bluetooth and VPN are concept groups needing clear local hierarchy.',
'Threat taxonomy, OT and IoT are distinct groups; retain every attack/mitigation explanation.',
'Segmentation purpose and benefit collection are coherent prose/list content.',
'Trust zones are a classification; traffic policy bullets are separate from zone definitions.',
'DMZ diagram teaches zone boundaries and sample policy flows; preserve the corrected example qualifiers.',
'VLAN characteristics and inter-VLAN routing are related but distinct explanatory parts.',
'Microsegmentation benefits and worked three-tier example should remain adjacent, with meaningful transitions.',
'Five labeled control groups are explicitly examples; do not infer exactly five mandatory layers.',
'Zero Trust principles are a collection of related checks; maintain the explanatory source, not just slogans.',
'Five NIST cloud characteristics are a genuine named concept set, not a process.',
'Service models are alternatives with trade-offs; numbering is enumeration, not a migration workflow.',
'Provider/customer distinction is academically qualified; the clipped legend remains a visual defect.',
'Deployment models are alternatives; preserve current private-cloud caveats and examples.',
'Hybrid/multi-cloud comparison needs terms intact across table columns.',
'Cloud network controls mix AWS examples with architecture concepts; retain the service-specific labels.',
'Review comparisons, keyword table and scenario rationales are useful; table terminology needs readable widths.'
]}
review=[]
for d,notesD in notes.items():
 rows=[x for x in src if x['domain']==d];assert len(rows)==len(notesD)
 for row,note in zip(rows,notesD):
  ids=[f['id'] for f in findings if row['anchor'] in f['anchors']]
  review.append({'domain':d,'anchor':row['anchor'],'source':row['source'],'line':row['line'],'endLine':row['endLine'],'title':html.unescape(row['title']),'review':note,'findings':sorted(set(ids)),'configurationsInspected':14,'sourceReviewed':True,'reviewStatus':'Reviewed; findings and qualifications recorded, not an all-clear certification'})
dump('subsection-review.json',review)

diagramNotes={
'threatChain':'Causal example connecting assets, vulnerability, threat/exploit and loss; preserve the insider-inclusive wording. Not a universal attack ordering.',
'ciaTriad':'Three interacting security goals and a trade-off example; a triangle appropriately expresses relationship, not chronology.',
'loadBalancer':'Illustrative distribution to servers; preserve the corrected single-balancer limitation. Do not infer complete system redundancy.',
'aaaLifecycle':'Claim/proof/permission/accounting teaching order; corrected prose matters. Accounting is ongoing, so avoid strengthening last-step exclusivity.',
'privacyFlow':'Illustrative data lifecycle; current consent/legal-basis qualifications prevent a universal-consent interpretation.',
'defenseInDepth':'Seven example complementary groups around core data. Correct text now prevents a guarantee; common-asset connection could be clearer, but onion containment is not required.',
'riskCalculationFlow':'Worked SLE/ALE and economic comparison; arithmetic dependency justifies process connectors. Retain the bounded net-benefit rule.',
'riskLifecycle':'Cyclic five-part learning model; current wording labels local scope and continuous communication. Not an official fixed ISC2/NIST five-step mandate.',
'documentHierarchy':'Authority/implementation hierarchy with advisory guidelines; keep guidelines distinct from mandatory standards/procedures.',
'controlTimeline':'Purpose comparison with residual timing/workflow arrows; P3-SEM-003 despite correct overlap caption.',
'dueCareDiligence':'Action versus verification comparison; side-by-side representation is meaningful.',
'ethicsCanons':'Four official canon identifiers; genuine numbering is appropriate. Private-course precedence provenance remains outside presentation verification.',
'grcAlignment':'Governance/risk/compliance integration; three coordinated functions rather than sequential stages.',
'bcVsDrScope':'Scope relationship valid as an introductory model; nesting/affordance overcomplicates it. Avoid universal formal subset claims.',
'rtoRpoTimeline':'Actual before/after incident time relationships warrant a timeline. Keep outage tolerance and reprocessing caveats.',
'effectivenessHierarchy':'Mixed measure types and communication formats encoded as tiered numbered architecture; P3-VS-002.',
'iamLifecycle':'Conditional and repeatable employment/account events represented as a single path; P3-SEM-002. Ongoing governance must be visible.',
'nistSp80063Framework':'Identity proofing/authentication/federation are distinguishable facets, not a compulsory transaction through all three at every login.',
'leastPrivilegeVsSod':'Access minimization versus responsibility distribution is a legitimate comparison; do not add chronology.',
'accessControlModels':'Four-model comparison with named authority/inputs; current caveats rule out a universal security ranking.',
'osiVsTcpIpModel':'Many-to-one model correspondence; preserve conceptual mapping and the sockets qualification, not rigid protocol exclusivity.',
'dmzFirewallArchitecture':'Zones and illustrative policy flows; current example labels matter. Very small text remains a legibility defect.',
'defenseInDepthLayers':'Five example complementary groups; current label explicitly rejects a universal count. Spatial nesting redesign is optional.',
'cloudSharedResponsibility':'Service-model/responsibility comparison with qualified scope; fix the clipping, not the already corrected governance/operation distinction.'}
diagramReview=[]
for name,note in diagramNotes.items():
 variants=[dict(domain=c['domain'],width=c['width'],height=c['height'],theme=c['theme'],anchor=r['anchor'],**z) for c in browser['configurations'] for r in c['ranges'] for z in r['diagrams'] if z['name']==name]
 diagramReview.append({'name':name,'purposeAndRelationshipReview':note,'configurations':len(variants),'beginnerComprehension':'Keep relationship labels and examples; scales/contrast/connector issues referenced separately.','englishThai':'Visible terms and Thai explanations retained; do not shorten to opaque keywords.','mobile':'HTML alternative is inspected independently; use its stated relationship, not hidden SVG metrics.','alternativeFormat':'Keep a diagram when it teaches a relationship; otherwise prefer existing prose/definition/comparison. No universal card conversion.','variants':variants})
assert len(diagramReview)==24 and all(x['configurations']==14 for x in diagramReview)
dump('diagram-review.json',diagramReview)

def clean(s):return html.unescape(re.sub(r'<[^>]+>','',s)).replace('|','\\|').replace('\n',' ')
def evidenceLink(name):return f'[{name}](../../../artifacts/qa/reading-notes-phase3a/{name})'
counts=collections.Counter(f['severity'] for f in findings)
intro='Audit only. Repository: `D:\\_Coding\\SEC-CERT-TEST`. Date: 2026-11-01 (Asia/Bangkok). Current dirty working tree is the baseline. No remediation or Human Acceptance is performed.\n'
reg=['# Phase 3A — Findings register','',intro,'**13 confirmed root-cause findings: P0 0, P1 2, P2 10, P3 1.** Repeated occurrences are not separate defect counts. The six mandatory IDs are retained. Qualified concerns/acceptable patterns below are excluded from these totals.','',
'| ID | Severity | Verified result | Origin | Remediation layers |','|---|---|---|---|---|']
for f in findings:reg.append(f"| {f['id']} | {f['severity']} | {f['title']} | {f['origin']} | {', '.join(f['layers'])} |")
for f in findings:
 reg+=['',f"## {f['id']} — {f['severity']} — {f['title']}",'',
 f"**Status:** {f['status']}. **Confidence:** {f['confidence']}. **Origin:** {f['origin']}.",'',
 f"**Source:** `{f['location']}`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.",'',
 '**Evidence:** '+', '.join(evidenceLink(x) for x in f['evidence'])+'; '+evidenceLink('browser-results.json')+' / '+evidenceLink('focused-results.json')+'.','',
 '**Observed impact:** '+f['issue'],'','**Root cause / layers:** '+f['rootCause']+' '+', '.join(f['layers'])+'.','',
 '**Recommendation (proposal only):** '+f['recommendation'],'','**Qualifications:** '+f['qualification']]
 if f['prior']:reg+=['','**Prior-state comparison:** '+f['prior']]
 if f['references']:reg+=['','**Primary references:** '+', '.join(f'[reference {i+1}]({u})' for i,u in enumerate(f['references']))+'.']
 reg+=['',f"**Occurrence tracing:** {len(f['anchors']) if f['anchors'] else 'Theme/component-specific'} subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence."]
reg+=['','## Qualified concerns, acceptable simplifications and non-findings','',
'| Review ID | Disposition | Evidence and interpretation | Next step |','|---|---|---|---|',
'| P3-Q-001 | Design concern; not a confirmed academic error | D1 defense-in-depth has an isolated CORE DATA circle and seven example groups; D4 has five example groups. Both now explicitly teach complementary examples. A common-asset connection could help, but a concentric onion is not mandatory. | Optional academic/design pilot; preserve corrected captions and avoid declaring these examples factually wrong. |',
'| P3-Q-002 | Confirmed raw fallback metadata; AT impact requires evidence | In an isolated run with KaTeX unavailable, role=math aria-label contains raw LaTeX while visible text is readable. Normal connected browser loads used KaTeX; this is not a universal visible math rendering failure. | Test actual screen-reader pronunciation/MathML fallback before approving metadata replacement; see gaps-results.json. |',
'| P3-Q-003 | Acceptable enumeration / true process | Four ethics canons, five named cloud characteristics, lists of threats/benefits and numbered exam tips are not automatically workflows. Worked calculation, recovery timeline and explicitly illustrative provisioning steps can have valid order. | Preserve real order and enumerations; do not convert every ol to headings. |',
'| P3-Q-004 | Maintainability risk; no demonstrated unrelated UI failure | Some h4 sibling CSS is unscoped and special GRC behavior recognizes exact header strings. | When an approved batch touches these paths, assess semantic hooks and Reading scoping; no shared CSS rewrite authorized here. |',
'| P3-Q-005 | Claims not substantiated | No evidence that the current prose says ISC2 mandates six measurement steps, that the BC scope pills are actual buttons, that every table lacks headers, or that all colored diagrams use color alone. | Preserve these qualifications in any implementation brief. |',
'| P3-Q-006 | Separate academic review lead | JML main numbered prose still gives a stronger role-first sentence than its qualified callout/mobile wording. The earlier academic batch scoped its exact replacements. | Refer to academic owner if wording is changed; do not silently add an academic correction to a visual implementation. |',
'', 'No P0 was established. Priority is educational/accessibility impact, not permission to redesign. All recommendations retain correct educational depth.']
(docs/'reading-notes-phase3a-findings-register.md').write_text('\n'.join(reg)+'\n',encoding='utf-8')

coverage=['# Phase 3A — Coverage matrix','',intro,
'**94/94 source ranges and 1,316/1,316 rendered range/configuration inspections recorded; 0 missing anchors.** Domain counts: 24 / 29 / 17 / 24. These are local textbook subsections, including review sections, not 94 official ISC2 objectives. JML is currently 3.1.1 (`topic-3-1-jml-lifecycle`), rather than the user-reported 3.4.1.','',
'All rows cover hierarchy, paragraph/list grouping, vertical rhythm, diagram meaning/legibility where present, table structure/terms where present, and accessibility metadata/reflow. “Reviewed” does not certify a subsection defect-free. ACC-002 is a corpus-wide language defect; its 94 occurrences count once. Diagram/table occurrences likewise refer to deduplicated root causes.','',
'| Subsection and source line | Source/educational presentation review | Confirmed finding IDs | Browser coverage |','|---|---|---|---|']
for x in review:coverage.append(f"| D{x['domain']} `{x['anchor']}` — {clean(x['title'])}; `{x['source']}:{x['line']}` | {x['review']} | {', '.join(x['findings'])} | 14/14 |")
coverage+=['','## Exact configuration coverage','',
'Each configuration has a recorded DOM/range measurement and heading viewport image for every subsection in that domain. Measurements inspect all tables and diagram text in each range, including elements below the first viewport. Source review and full-component feature captures supplement viewport images.','',
'| Viewport | Light | Dark |','|---|---|---|']
for w,h in [(1920,1080),(1366,768),(1024,768),(768,1024),(390,844),(375,812),(320,568)]:
 coverage.append(f'| {w}×{h} | D1 24, D2 29, D3 17, D4 24 = 94 | D1 24, D2 29, D3 17, D4 24 = 94 |')
coverage+=['','## Evidence lookup','',
'- `section-d{domain}-{anchor}-{width}-{theme}.png`: one real viewport capture per range/configuration (1,316).',
'- `feature-d{domain}-{anchor}-{diagram|table}-{index}-{width}-{theme}.png`: targeted feature images, especially at 1366 and 390 in both themes (214).',
'- `direct-{finding ID}-{width}-{theme}.png`: full component/range capture for all six required cases at 1366/390, Light/Dark, with additional 1024 evidence. The two measurement targets have distinct diagram/table images.',
'- `browser-results.json`: 56 configurations, source-identified ranges, actual transformed font size, bounding boxes, heading/list margins, table widths/cell word-line counts, language and clipped SVG text.',
'- `focused-results.json`: 24 settled-theme/domain/width contexts plus two native keyboard-scroll checks, 44 direct images; computed SVG/HTML contrast.',
'- `supplement-results.json`: eight 683×384 CSS viewport contexts at device scale 2, representing 200% desktop reflow equivalence; normal KaTeX and visible currency evidence. This is not native browser-menu zoom.',
'- `gaps-results.json`: four GRC cell-bound checks plus forced-KaTeX-unavailable fallback labels. Four scroll-end images.',
'- `source-ledger.json`, `subsection-review.json`, `diagram-review.json`: current exact source bodies/ranges, individual review rationale and all 24 diagram relationships/variants.',
'- `contact-index.json`: all 56 contact sheets with their constituent image names. Contact sheets are overview aids, not sufficient evidence for tiny-text judgments. Use full-size captures and transformed measurements.',
'', '## Review depth and limitations','',
'All 94 ranges were source-structure reviewed and measured in the live browser in all 14 configurations. The reviewer examined all subsection overview contact sheets for 1366/390 in both themes (16 sheets), additional sheets sampling every other viewport, full-size reported-case images and selected repeated defects. This is not a claim that a human read every pixel of all 1,530 viewport/feature images. Long ranges were inspected through source and whole-range DOM/feature measurements; the first viewport image alone cannot certify their lower content.',
'', 'No required subsection/theme/viewport configuration is missing. Native assistive-technology pronunciation, every possible zoom setting, physical touch devices and learner usability sessions were not tested. Numerical typography/contrast evidence and source relationships establish the recorded findings; inferred perceptions are labelled accordingly.']
(docs/'reading-notes-phase3a-coverage-matrix.md').write_text('\n'.join(coverage)+'\n',encoding='utf-8')
print('Generated register and coverage:',len(findings),'findings;',len(review),'rows; 24 diagram reviews')
