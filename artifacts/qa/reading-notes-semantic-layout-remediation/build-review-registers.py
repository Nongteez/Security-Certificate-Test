from pathlib import Path
import json,re,hashlib,subprocess
P=Path(__file__).resolve().parent;R=P.parents[2]
def read(n):return json.loads((P/n).read_text(encoding='utf-8'))
def save(n,o):(P/n).write_bytes((json.dumps(o,ensure_ascii=False,indent=2)+'\n').encode())
changes=read('changes.json'); units=read('after-source-unit-inventory.json'); visuals=read('source-visual-inventory.json')
notes={
 'threatChain':'Causal relationship next to threat/vulnerability definitions; keep conditional impact language.',
 'ciaTriad':'Three peer goals immediately after their definitions; triangle is conceptual, not a workflow.',
 'loadBalancer':'Availability implementation after CIA explanation; retain concrete redundancy topology.',
 'aaaLifecycle':'Separate ongoing Accounting from claim/proof/permission; no final mandatory Accounting step.',
 'privacyFlow':'Delegation example next to controller/processor definitions; relationships depend on processing context.',
 'defenseInDepth':'Complementary example controls; no universal number, independent barrier or mandatory sequence.',
 'riskCalculationFlow':'AV, EF, SLE and ALE inputs precede worked cost example; preserve arithmetic and units.',
 'riskLifecycle':'Illustrative five-part risk model and iterative review, not a universal mandated framework.',
 'riskTreatmentDecisionFlow':'MOVE after inherent/residual risk, appetite and tolerance; authorized decision context before flow.',
 'documentHierarchy':'Policy/standard/procedure/guideline scope and authority comparison after definitions.',
 'controlTimeline':'REDESIGN coexisting control functions; remove temporal stage badges and directional arrows.',
 'dueCareDiligence':'Illustrative check/do/recheck loop after definitions; not exclusive sequential definitions.',
 'ethicsCanons':'REMOVE placement duplicating all four immediately following canon cards; retain complete canon text and registry template.',
 'grcAlignment':'Coordinated functions supporting one objective; qualified as non-mandatory stages.',
 'bcVsDrScope':'REDESIGN coordinated BC/DR scope comparison; no universal subset equation.',
 'rtoRpoTimeline':'Failure anchor and forward/backward time objectives follow definitions and precede calculation case.',
 'backupRestoreChains':'Dependencies follow backup definitions/table; specify Thursday before next backup, set counts not elapsed recovery time.',
 'drSiteTiers':'Compare readiness resources after site definitions; illustrative times and costs, not guaranteed RTO.',
 'effectivenessHierarchy':'REDESIGN six peer measures/communication views grouped by purpose, not compulsory hierarchy.',
 'iamLifecycle':'Entry/change/exit roles after JML definitions; optional repeated Mover and continuous review, no mandatory path.',
 'nistSp80063Framework':'IAL/AAL/FAL are interrelated distinct functions rather than required pipeline.',
 'biometricSensitivityCurve':'MOVE together with operational example after FAR/FRR introduction under access controls; EER not universal optimum.',
 'leastPrivilegeVsSod':'Peer comparison after separate definitions; scope differs from multi-person separation.',
 'accessControlModels':'Four-model matrix after definitions; preserve resource/label/role/attribute distinctions.',
 'osiVsTcpIpModel':'Architectural mapping follows layer definitions; correspondence lines are not packet movement.',
 'tcpHandshakeVsUdp':'Protocol contrast after TCP/UDP definitions; performance context rather than guaranteed speed.',
 'idsVsIpsInspectionFlow':'Out-of-band vs inline paths after definitions; allowed traffic is not proven harmless.',
 'dmzFirewallArchitecture':'Zone-boundary topology after segmentation principles; explicit permitted paths and limits.',
 'defenseInDepthLayers':'Example complementary control groups; remove guaranteed independence claims in related scenario.',
 'cloudSharedResponsibility':'Scope customer policy decisions vs provider implementation; service/contract-dependent boundary.',
 'cryptographyPipelines':'REDESIGN independent operation comparisons; signing/verification differs from encryption; exact hash examples.',
 'siemTelemetryPipeline':'Illustrative telemetry stages; linked evidence creates hypotheses requiring validation.',
 'mitreAttackTacticTechnique':'Tactic/technique/procedure comparison with exact IDs; remove unstable catalogue totals.',
 'irpLifecycle':'Local six-activity learning model; current NIST context and continuous improvement, not NIST six-phase mandate.',
 'assetLifecycleAndEol':'Retain lifecycle and compensating controls after asset definitions; EOL risk remains context-dependent.',
 'purpleTeamLoop':'Retain collaboration feedback loop after red/blue/purple definitions; no guaranteed outcome.',
 'securityTestingMatrix':'Retain technique comparison after definitions; columns illustrate common lifecycle use, not exclusive applicability.'}
rows=[]
for i,v in enumerate(visuals):
 ident=v['id'];decision='KEEP';reason=notes.get(ident,'')
 if ident=='ethicsCanons':decision='REMOVE'
 elif ident in ['riskTreatmentDecisionFlow','biometricSensitivityCurve']:decision='MOVE'
 elif ident in ['bcVsDrScope','effectivenessHierarchy','cryptographyPipelines','controlTimeline','aaaLifecycle','iamLifecycle']:decision='REDESIGN'
 elif v['type']=='image':
  decision='ADD CONTEXT'if any(t in ident for t in ['biometric','piv-','turnstiles','destroyed'])else'KEEP'
  reason='Real device/media example adjacent to its definition and application; retain attribution. '+('Caption now qualifies spoofing, implementation or sanitization limitations.'if decision=='ADD CONTEXT'else'No unsupported learning sequence implied.')
 elif v['type']=='example':
  final=next((u for u in units if u['anchor']==v['anchor']),None)
  reason='Worked application follows the owning concept and its prerequisite explanation; retain concrete situation, actions, result and takeaway.'
  if 'biometric' in v['anchor'] or (v['domain']==3 and ident=='topic-3-1-provisioning-example-1'):decision='MOVE';reason='Move with biometric curve from provisioning to logical/physical access; compare FAR/FRR after definitions.'
  if any(v['anchor'] in c['before'] or v['anchor'] in c['after'] for c in changes):decision='ADD CONTEXT'if decision=='KEEP'else decision
 target=next((w['anchor']for w in read('after-source-visual-inventory.json')if w['type']==v['type']and w['id']==ident),None)
 if ident=='topic-3-1-provisioning-example-1':target='topic-3-2-logical-controls'
 rows.append({**v,'finalAnchor':target,'reviewId':f'V{i+1:02}','decision':decision,'reason':reason or 'Retain conceptual comparison after prerequisite definitions; preserve examples and clarify scope in adjacent prose.'})
save('visual-decisions.json',rows)
reviews=[]
for u in units:
 relevant=[c for c in changes if c['path']==u['path'] and (c['after'][:100] in u['body'] or u['anchor'] in c['before'] or u['anchor'] in c['after'])]
 reviews.append({'domain':u['domain'],'anchor':u['anchor'],'line':u['line'],'headings':u['headings'],'componentCount':len(u['components']),'decision':'CORRECTED'if relevant else'KEEP','review':'Reviewed definition → distinction/mechanism → comparison/visual → application/review within this unit and its objective. No requirement to add an absent diagram. Topic anchors retained.','corrections':list(dict.fromkeys(c['reason']for c in relevant))})
save('unit-review.json',reviews)
extras=[]
for d in range(1,6):
 s=(R/f'content/isc2-cc-2026/reading/domain-{d}.md').read_text(encoding='utf-8')
 for m in re.finditer(r'<div class="reading-masking-card"|:::(mfa-factors|risk-treatment|control-categories)|<div class="reading-callout(?:\s|\")',s):
  anchor=re.findall(r'id="(topic-[^"]+)"',s[:m.start()])[-1]
  extras.append({'domain':d,'anchor':anchor,'line':s[:m.start()].count('\n')+1,'type':m[1]or('masking flow'if'masking'in m[0]else'callout'),'decision':'KEEP','reason':'Definition/comparison or explanatory example within owning topic; no misplaced independent illustration or compulsory temporal hierarchy. Retain existing content and renderer.'})
save('supplemental-component-review.json',extras)
print('registered',len(rows),'major visuals',len(reviews),'units',len(extras),'supplemental components')
