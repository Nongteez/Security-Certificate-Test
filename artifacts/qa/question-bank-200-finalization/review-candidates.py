"""Separate documented desk review and lexical-candidate analysis; no blind/human claim."""
import collections,datetime,difflib,hashlib,json,math,pathlib,re
OUT=pathlib.Path(__file__).resolve().parent;ROOT=OUT.parents[2]
def read(p):return json.loads(p.read_text(encoding='utf-8'))
def save(n,v):(OUT/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
new=read(OUT/'candidates.json');old=read(OUT/'questions.before.json');meta=read(OUT/'new-question-metadata.json')
notes={
1041:'Attribution of the specific change needs an action record; login, role and inventory evidence answer different questions. Distinct from repairing SIEM export collection in1012.',
1042:'Past signed approval, trusted key binding/control and conditional evidence support non-repudiation. No legal outcome guaranteed;1083 instead tests key direction.',
1043:'Need is defined before collection; encryption, access restriction and later deletion do not remove the unnecessary collection.1004 instead minimizes a shared dataset.',
1044:'Only visit-end is the supplied trigger. Creation, reading and review dates cannot reset it. Ordinary scheduling differs from1022 hold and1045 category scope.',
1045:'Deletion permission and retained invoice requirement apply to disjoint categories. No actual statute is invented. Encryption is not erasure.',
1046:'The permitted scheduling purpose excludes promotion even with authorized reading and logging. Not an integrity, availability or attribution failure.',
1047:'Entered identifier is a claim before verification; not proofing, authorization or factor-independence analysis.',
1048:'Before-control and remaining-after-control estimates are inherent/residual; neither is risk appetite or an acceptance decision as in636.',
1049:'60000×0.30=18000 per incident; alternatives model wrong fraction, retained value or total loss. Units are not annualized.',
1050:'12000×0.25=3000 per year; alternatives omit/invert the rate or use wrong units. Different knowledge target from1049 exposure fraction.',
1051:'Only B meets the binding logging constraint. Its1000 annual net benefit is stated on comparable basis; A financial advantage cannot waive the constraint.',
1052:'Explicit qualitative categories prioritize B despite fewer findings. Same likelihood alone does not make risks equal; unlike614 this applies rather than labels a method.',
1053:'Control failure is observed with unchanged asset/use. Reassessment is needed; installation and unilateral acceptance cannot close the demonstrated risk.',
1054:'The missing artifact is how-to sequence, not another requirement or optional advice. Primary procedure target differs from599 standard identification.',
1055:'No authorized exception exists, so14 minimum governs over optional10 or arbitrary12. This is conflict application rather than document-label recall.',
1056:'Regulatory applicability is supplied. Brochure and voluntary framework have not been adopted as binding. No jurisdictional fact is assumed.',
1057:'A valid scoped compliance result neither proves total security nor becomes wholly invalid because an out-of-scope risk exists.',
1058:'Sensor reports but does not block, restore or direct behavior. Function rather than product label determines classification.',
1059:'Approved staffed entry is a temporary alternative serving the same objective, not unrestricted acceptance or permanent repair waiver. Different from682/1029 network/EOL restrictions.',
1060:'One platform has preventive enforcement and detective retrospective use. Contrasts functions rather than the implementation-category taxonomy in601.',
1061:'Credible public-service safety risk has an authorized urgent route. Routine delay, public exposure and uncoordinated shutdown fail the supplied role/goal.',
1062:'Current unfinished testing cannot be represented by expected or last-year results. Material omission also creates false scope assurance.',
1063:'A qualified-support path is explicitly permitted. It is preferable to pretending competence or abandoning a deliverable that can be delivered competently.',
1064:'Permitted generalized teaching advances learning without restricted details. Unnecessary full-record delay is a confidentiality overcorrection.',
1065:'July excludes overdue failures while June includes all due findings; compare cohorts before interpreting percentages. Not another KPI/KRI label or time-interval item.',
1066:'Namespace equality is absent, so equal local strings cannot establish entity linkage or permission. Inverse evidence problem to669 linked distinct accounts.',
1067:'Explicit NIST frame distinguishes a binding object from the controlled authenticator, resource policy and event record.',
1068:'Approved standard role is bounded; peer exception is legitimate for another duty but not transferable to this new joiner. Scope after approval differs from647 sequencing.',
1069:'Verified risk category plus explicit policy determines monthly/quarterly cadence. Routine and event-driven reviews are complementary, unlike649 execution of removals.',
1070:'Representation as a list alone does not identify grant authority or the DAC/MAC/RBAC model. Distinct from661 discretionary-owner identification.',
1071:'Fixed one-group/no-other-rules model makes the prospective change apply to all12, not requester, future members or editor alone. Unlike665, no multi-role effective-rights inference.',
1072:'Enforced expiry ends elevation but retains ordinary access. Quarterly review, deleting the account and reminders fail distinct stated requirements.',
1073:'Only one request satisfies role AND managed/compliant device AND hours. Each wrong choice violates one condition;664 instead identifies the ABAC label.',
1074:'Needed inter-subnet forwarding is routing. DNS, address leasing and more L2 forwarding do not provide that function; no access-policy redesign.',
1075:'UDP matches loss/late-sample constraints; TCP retransmission is not required and neither transport alone encrypts or guarantees deadlines.671 instead evaluates reliability versus confidentiality.',
1076:'PAT translates and filtering authorizes; private addressing or more public addresses does not instantiate the approved-service policy.',
1077:'Expected authenticated resolution is complete; timeout does not locate a cause or prove connectivity. Bounded service reachability distinction rather than677 port identity.',
1078:'Working forwarding is explicit, so clock alignment is the missing service. NTP does not guarantee log authenticity. Different from1012/1034 telemetry collection/forwarding.',
1079:'Observation must include internal app/database flows, not merely duplicate the internet-edge scope. Visibility placement differs from685 allowed-path risk or687 enforcement.',
1080:'Verified posture change triggers the supplied ongoing reevaluation/suspension. Tunnel survival or new VPN authentication is not that resource enforcement. Distinct from689 initial architecture and664 model label.',
1081:'Reserved multi-institute use with shared concerns is community. Membership count alone is not hybrid composition; one institute private/public general use do not fit.',
1082:'Existing protected session key removes key-distribution ambiguity. Symmetric bulk confidentiality differs from1007 short-message public-key encryption and1083 signing.',
1083:'Authenticated corresponding publisher public key verifies its signature. Recipient/private/unrelated symmetric keys do not.1042 instead tests past-action evidence property.'}
assert set(notes)=={q['id'] for q in new}
stop=set('a an the of to for in on at and or is are as it its that this which what with from by has have be been not no only most best all each before after when their they these those how does do under through into than then'.split())
tokens=lambda s:[w for w in re.findall(r'[a-z]+',s.lower()) if len(w)>2 and w not in stop]
allq=old+new;cs=[collections.Counter(tokens(q['question'])) for q in allq]
df=collections.Counter(w for c in cs for w in c)
vec=[{w:n*(math.log((len(allq)+1)/(df[w]+1))+1) for w,n in c.items()} for c in cs]
def cosine(a,b):return sum(v*b.get(w,0) for w,v in a.items())/math.sqrt(sum(v*v for v in a.values())*sum(v*v for v in b.values()))
candidates=[]
for i,q in enumerate(new,157):
 sims=sorted([(round(cosine(vec[i],vec[j]),4),allq[j]['id']) for j in range(len(allq)) if j!=i],reverse=True)[:4]
 candidates.append(dict(id=q['id'],nearest=[dict(id=j,similarity=s) for s,j in sims],semantic_adjudication=notes[q['id']]))
save('duplicate-review.json',dict(method='Exact normalized EN/TH and TF-IDF cosine lexical candidates plus same-agent concept/decision review of all43. Lexical score is not proof of semantic originality.',items=candidates))
records=[]
num=lambda s:sorted(x.replace(',','') for x in re.findall(r'\d+(?:[,.]\d+)*',s))
for q,m in zip(new,meta):
 assert num(q['question'])==num(q['question_th']),(q['id'],'numbers')
 for a,b in zip(q['options'],q['options_th']):assert num(a)==num(b),(q['id'],'option numbers')
 lengths=[len(o.split()) for o in q['options']];key=q['correct_idx'];others=[n for i,n in enumerate(lengths) if i!=key]
 records.append(dict(id=q['id'],objective=m['objective'],chosen_key='ABCD'[key],assessment=notes[q['id']],single_best_answer='Supported on explicit facts in separate same-agent desk pass',all_four_options_checked=True,all_four_rationales_checked=True,thai_parity='Author desk back-check: actor, authority, timing, scope, negatives, units and option/rationale order; independent qualified Thai review OPEN',word_lengths=lengths,key_uniquely_longest=lengths[key]>max(others),review_status='ELIGIBLE_FOR_AUTHORIZED_INTEGRATION_PENDING_HUMAN_ACCEPTANCE',independent=False,keys_previously_seen=True))
save('academic-review.json',dict(reviewed_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),reviewer='Authoring agent in a separate review pass; NOT independent human or blind reviewer',key_hidden_worksheet='key-hidden-worksheet.json',limitations=['Prior key exposure','No independent qualified Thai reviewer','No psychometric/candidate-response evidence'],revisions_before_integration=['1064/1080 weak distractors replaced','1081 direct community label removed from stem','1065 Thai reporting-period clarification','1079 Thai network-segment clarification'],items=records))
print('Reviewed43; numeric parity passes; no bank edits')
for c in candidates:
 if c['nearest'][0]['similarity']>=0.34:print(c['id'],c['nearest'][:2])
print('Unique-longest keys:',[r['id'] for r in records if r['key_uniquely_longest']])
