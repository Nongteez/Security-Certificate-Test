"""Documentation-only audit assembly. Does not author or export question records."""
from pathlib import Path
import json, re, hashlib, csv
from collections import Counter

ROOT = Path(__file__).resolve().parents[4]
OUT = Path(__file__).resolve().parent
DOC = OUT.parent
def load(p): return json.loads((ROOT / p).read_text(encoding='utf-8-sig'))
def write(p, s): p.write_text(s.rstrip()+'\n', encoding='utf-8')
qs = load('tmp/audit-questions.json')
metrics = load(str(OUT.relative_to(ROOT) / 'question-metrics.json'))
mi = {q['id']:q for q in metrics}
heads = load(str(OUT.relative_to(ROOT) / 'source-headings.json'))
inventory = load(str(OUT.relative_to(ROOT) / 'local-source-inventory.json'))
outline = 'https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf'
landing = 'https://www.isc2.org/certifications/cc/cc-certification-exam-outline'
def table(headers, rows):
    clean = lambda x: str(x).replace('|',' / ').replace('\n',' ')
    return '\n'.join(['| '+' | '.join(headers)+' |', '| '+' | '.join(['---']*len(headers))+' |']+['| '+' | '.join(map(clean,r))+' |' for r in rows])+'\n'
def anchor(path, search):
    found = [h for h in heads[path]['headings'] if search.lower() in h['heading'].lower()]
    if not found: raise ValueError((path,search))
    h = found[0]
    return {'path':path,'line':h['line'],'heading':h['heading'].lstrip('# ')}
def src_text(s): return f"`{s['path']}:{s['line']}` — {s['heading']}"
def bankref(q):
    p=f"data/certs/isc2/cc/versions/next-bank/questions/domain-{q['dom']}.js"
    lines=(ROOT/p).read_text(encoding='utf-8').splitlines()
    line=next(i+1 for i,t in enumerate(lines) if re.search(r'"id"\s*:\s*'+str(q['id'])+r'\b',t))
    return f'[{q["id"]}](../../../{p}#L{line})'

d1topics=['Integrity after unauthorized change','Confidentiality through masking','UPS versus long-duration generation','AAA authorization after authentication','MFA factor independence','Processor acting on controller instructions','Data inventory ownership and location','Vulnerability versus threat and risk','Qualitative risk assessment','Changed exposure requires reassessment','Insurance risk transfer','Avoidance by declining an activity','Board-level risk communication','Governance direction and accountability','High-level policy','Mandatory technical standard','Framework organizing a program','Implementation control categories','Deterrent warning','Corrective restoration','Directive behavior requirement','Defense in depth','Due care in operations','Due diligence in supplier assessment']
d2topics=['Integrated GRC purpose','Governance accountability','Risk register ownership and tracking','ISO/IEC 27001 versus other references','Risk acceptance authority','Avoidance by retiring activity','Semi-quantitative risk scoring','Business continuity versus IT recovery','BIA-led recovery priorities','RTO and RPO comparison','Backup common failure domain','Cold versus warm recovery site','Restore testing versus backup status','Leadership and security culture','Authority and urgency manipulation','Executive-targeted whaling','Vishing with pretext','Credential stuffing and MFA','Incident reporting by staff','Context for governance metrics','Time to detect from event timestamps','MTTR operational definition','SLA percentage versus velocity','Training completion versus behavior','KPI versus KRI','Risk reporting for strategic audience','NIST CSF Govern','Insurance transfer','Residual-risk acceptance record','Hot-site capability and RPO zero','Tabletop recovery exercise','Recovery priority and MTD','Smishing','Spear phishing','Pretexting','Unique passwords and credential reuse','KRI versus operational performance','Dashboard and scorecard audiences','Phishing reporting effectiveness']
notes = {
588:('CRITICAL','F01: structured correct and all distractor rationales concern AAA accounting rather than password + PIN.'),
589:('CRITICAL','F01: structured explanation concerns non-repudiation rather than the processor role; Thai also overstates irrefutable proof.'),
590:('CRITICAL','F01: structured explanation concerns threat actors rather than data inventory.'),
591:('CRITICAL','F01: structured explanation concerns risk components/formula rather than the vulnerability asked about.'),
592:('MEDIUM','F04: qualitative key supported; explanation treats precise financial values as necessary for all quantitative analysis.'),
594:('MEDIUM','F06: close concept repetition with 635; insurance transfers some financial consequences, not every responsibility.'),
595:('MEDIUM','F04/F06: Thai acceptance rationale mischaracterizes informed acceptance as ignoring impact; overlap 613.'),
596:('HIGH','F02/F06: C/D distractor reasoning mismatched to displayed choices; board-report decision repeats 633.'),
597:('HIGH','F02: C rationale describes software development not the displayed absolute-guarantee option; D rationale belongs to C.'),
599:('HIGH','F02: B/D guideline/policy rationales swapped.'),
600:('MEDIUM','F04: maintain distinction between a management-system standard and a framework; ISO/IEC 27001 is not simply interchangeable terminology.'),
601:('HIGH','F02: C/D category rationales describe different mappings from displayed options.'),
603:('HIGH','F02: B/C preventive/detective rationales swapped.'),
605:('MEDIUM','F04: layered controls reduce risk; avoid implying remaining layers guarantee protection.'),
611:('HIGH','F02/F04: D is NIST SP 800-30 but its rationale describes PCI DSS; accreditation/certification and annual-audit wording need precision.'),
612:('MEDIUM','F04: risk owner best among options; decision authority must follow delegation, not a universal business-title rule.'),
613:('MEDIUM','F04/F06: retiring activity supports avoidance; outsourcing payments does not necessarily remove all payment risk; overlaps 595.'),
614:('MEDIUM','F04/F07: ordinal numbers do not prove quantitative assessment; implausible standards-forbid-numbers distractor.'),
616:('MEDIUM','F04: BIA is appropriate at stated stage; do not claim it is universally the first action in every planning lifecycle.'),
617:('MEDIUM','F07: numeric key defensible; long stem can be reduced without losing the RTO/RPO decision.'),
618:('MEDIUM','F04/F07: flood common failure domain supports key; geography alone is not a universal backup-compliance rule; verbose.'),
619:('HIGH','F03: cold-site classification supported; five-day recovery assurance unsupported without procurement/build/restore capability evidence.'),
620:('MEDIUM','F07: restore-test key supported; criminal-fraud distractor and long stem weaken item quality.'),
621:('MEDIUM','F07: leadership key supported; punitive/covert/unrealistic alternatives make discrimination easy.'),
622:('MEDIUM','F07: authority/urgency key supported; PRIMARY manipulating is grammatically awkward; long stem.'),
623:('MEDIUM','F07: whaling key supported; unnecessary OSINT-heavy elaboration, and near topic 641.'),
624:('MEDIUM','F07: vishing/pretext key supported; long stem; avoid treating every targeted-phishing definition as email-only.'),
625:('MEDIUM','F04/F07: MFA is best given options, but does not guarantee all future account takeover is prevented; verbose.'),
626:('MEDIUM','F04: reporting is best for the described employee; tie FIRST and power/isolation restrictions to the organization playbook.'),
627:('HIGH','F07: key defensible but three implausible distractors (L2-only firewalls, illegality, CPU multiplication); count metrics need context, not blanket dismissal.'),
628:('MEDIUM','F04/F07: two-hour single-incident detection interval is defensible; one observation is not a mean; long stem.'),
629:('HIGH','F03: MTTR expanded as respond, with containment asserted as its universal endpoint; start/end and cohort need definition.'),
630:('MEDIUM','F04/F07: within-SLA percentage is timeliness/compliance, not a velocity; PRIMARY distinguishes grammar.'),
631:('MEDIUM','F06/F07: behavior-over-attendance decision overlaps 646; overly implausible alternatives.'),
632:('MEDIUM','F06: KPI/KRI distinction substantially repeated by 644.'),
633:('MEDIUM','F06: strategic-board-report answer substantially repeats 596; audience does not imply an exclusive document format.'),
635:('MEDIUM','F06: insurance-as-transfer repeats 594.'),
636:('MEDIUM','F04: explicit residual-risk acceptance is supported; owner authority should be defined by policy.'),
637:('HIGH','F03: hot-site label and real-time mirroring do not themselves demonstrate zero data loss or sub-15-minute tested recovery.'),
638:('MEDIUM','F04: tabletop fits constraints; walkthrough and tabletop are not identical in every exercise taxonomy.'),
639:('MEDIUM','F04: dispatch is best given options; recovery dependency/critical-path evidence can override a simple shortest-MTD heuristic.'),
641:('MEDIUM','F07: spear-phishing key supported; postal/wireless alternatives are weak and concept close to 623.'),
644:('MEDIUM','F06: KRI decision repeats 632.'),
645:('MEDIUM','F07: chosen formats fit stated audiences; unencrypted-sheet distractor adds an easy unrelated clue.'),
646:('MEDIUM','F06: behavioral phishing metric overlaps 631; reporting rate needs denominator and false-positive interpretation.'),
667:('NOTE','Cross-link 1.1 AAA; retained under author metadata 3.2 logical access. One cryptographic authenticator can combine possession and activation PIN.'),
676:('NOTE','Technically coherent and contextualized; FTPS negotiation detail is specialized for entry-level practice, so avoid increasing protocol minutiae.'),
680:('NOTE','Pairing properties are supplied in the stem; tests evidence/requirements rather than requiring Bluetooth implementation memorization.'),
699:('NOTE','Boundary explicitly supplied; FaaS is supplemental context under service-model/shared-security scope, not a separate official numbered objective.'),
1005:('NOTE','Supported sanitize/purge operation and reuse constraints are explicit; future author must recheck current NIST sanitization guidance.'),
1009:('NOTE','Foundational PQC purpose, not algorithm mathematics; correct scope for 5.1.'),
1010:('NOTE','PQC dependency assessment distinct from 1009 definition; do not turn this into an advanced migration-engineering item.'),
1018:('MEDIUM','F08: English asks MOST appropriate use; Thai asks how to use the report without preserving the superlative qualifier.'),
1024:('NOTE','Current recovery purpose is clear because eradication is already stated complete; avoid implying phases never overlap.'),
}

# Planning specifications contain concepts only: no stems, options, keys or generated explanations.
slots=[]
def add(obj,target,context,skill,style,terms,source,heading,overlap,limit='Local supporting text available; final academic and bilingual gates required.'):
    slots.append({'proposed_id':1041+len(slots),'domain':int(obj[0]),'objective':obj,'target':target,'context':context,'cognitive':skill,'difficulty':'foundational' if style=='concept distinction' else 'applied','style':style,'terminology':terms,'source':anchor(source,heading),'overlap':overlap,'source_limit':limit})
D1='ISC2 Update 2026/Domain 1/Domain 1.md'
S1='ISC2 Update 2026/Domain 1/D1 sum.md'
D3='ISC2 Update 2026/Domain 3/Domain 3.md'
K3='ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md'
X3='ISC2 Update 2026/Domain 3/D3 surm.md'
X4='ISC2 Update 2026/Domain 4/D4 surm.md'
S5='ISC2 Update 2026/Domain 5/D5 sum.md'
add('1.1','Accounting and attributable activity','Evidence linking an approved actor to an operation; distinguish login and permission evidence','apply','evidence selection','AAA; accounting; audit trail',D1,'3.4 Accounting','587 tests authorization; corrupted 588 does not count as accounting coverage.')
add('1.1','Non-repudiation versus authentication','Evidence of a past signed action rather than successful current login','understand','concept distinction','non-repudiation; authentication; evidence',D1,'4.1 Non-repudiation','No current primary target; 589 has unrelated corrupted explanation. New crypto mechanics slot 1083 has a different target.','Local explanation is qualified; verify official ethics/privacy terminology and NIST signature evidence, without legal-proof guarantees.')
add('1.1','Privacy data minimization','Selection of necessary personal fields before collection','apply','control selection','privacy; purpose; minimization',D1,'4.2 Privacy','589 asks processor role; 590 asks inventory; 1004 removes identifiers before sharing, rather than necessity at collection.')
add('1.1','Retention with a stated lawful exception','Routine retention decision for non-incident personal records under an explicit applicable rule','apply','policy application','retention; personal data; exception',S1,'13. Data Retention','1022 is an incident preservation hold; this tests ordinary privacy lifecycle and defined duration.','No jurisdiction-specific retention period supplied locally; put the applicable rule in the future scenario, or hold for legal-source research.')
add('1.1','Erasure request is conditional','Privacy deletion request conflicting with a supplied lawful retention duty','apply','constraint analysis','erasure; retention; applicable requirement',S1,'14. Right to Be Forgotten','Distinct from retention scheduling and 1022 incident hold: assess a data-subject request and exception.','Do not invent GDPR/Thai PDPA exceptions or claim automatic erasure; research actual law if named.')
add('1.1','Privacy versus confidentiality','Restricted access to personal data does not by itself justify its collection/use','analyze','concept distinction','privacy; confidentiality; purpose',D1,'4.3 Accountability','585 protects visibility of card data; new target is authorized but inappropriate use, not another masking choice.')
add('1.1','Identification versus authentication','A claimed identifier compared with evidence demonstrating control','understand','concept distinction','identification; authentication; identifier',D1,'3.1 Identification','587 tests authorization; 588 factor independence; 657 identity proofing. Avoid another MFA-factor question.')
add('1.2','Inherent and residual risk','Comparison of exposure before and after an implemented control','understand','concept distinction','inherent risk; residual risk',D1,'5.4 Inherent','636 accepts residual risk; new target is distinguishing pre/post-control estimates, not who signs acceptance.')
add('1.2','Single loss estimate','One explicitly supplied asset value and exposure fraction, including units','apply','bounded calculation','AV; EF; SLE',S1,'19. Single Loss','No existing numeric loss-estimation item; 592 only labels qualitative assessment.','SLE is supporting risk-process content, not a separately named outline bullet or an asserted exam formula requirement; keep one simple calculation.')
add('1.2','Annualized versus single-event loss','Annual occurrence estimate applied to a supplied single-event loss','apply','bounded calculation','SLE; ARO; ALE',S1,'21. Annualized Loss','Previous proposed slot tests one-event exposure; this tests annualization and units.','Supplemental risk-assessment example; avoid a multi-stage finance exercise or false precision.')
add('1.2','Risk-based control investment','Compare a stated control cost with a stated expected loss reduction and nonfinancial constraints','analyze','decision scenario','likelihood; impact; treatment cost',D1,'5.2 ขั้นตอน','596/633 concern reporting format, not selecting investment using explicit evidence.','Local source supports risk response, but no universal ROI decision rule; include governing constraints and research any named economic formula.')
add('1.2','Prioritizing likelihood and impact together','Two risks with explicit scales and business consequences','apply','prioritization','likelihood; impact; risk level',D1,'5.1 องค์ประกอบ','591 identifies vulnerability, 592 assessment category; this evaluates a supplied risk comparison, not raw vulnerability counts.')
add('1.2','Review control effectiveness after treatment','Reassessment using observed control performance against the original risk','analyze','evidence interpretation','monitor; review; residual risk',D1,'5.2 ขั้นตอน','593 responds to changed connectivity; new evidence is control ineffectiveness without a changed asset/connection.')
add('1.3','Procedure versus standard','Operational steps implementing a stated mandatory baseline','understand','concept distinction','procedure; standard; policy',D1,'7.1 Policy','598/599 identify policy/standard; no primary procedure target.')
add('1.3','Guideline and mandatory requirements','Optional advice versus a stated binding internal specification','apply','policy application','guideline; standard; mandatory',D1,'7.1 Policy','599 has guideline only as a distractor; target is advisory status and what governs when recommendations differ.')
add('1.3','Law/regulation versus voluntary guidance','Determine which supplied requirement is binding for a stated organization','apply','requirement classification','law; regulation; framework; compliance',D1,'7.2 Governance','600 chooses a framework; 611 identifies ISO standard. No statutory-detail recall.','Local materials support categories, not exhaustive legal applicability; name no statute without primary legal research.')
add('1.3','Compliance does not establish complete security','An assessment finds remaining risk after a compliance check','analyze','evidence interpretation','compliance; risk; assurance',D1,'7.2 Governance','597 governance purpose and 608 GRC definition do not test inference from a compliant assessment.')
add('1.4','Detective purpose in context','An implemented measure detects an event rather than merely discouraging it','apply','control classification','detective; deterrent; control function',S1,'40. Detective','602 warning is deterrence; 603 restoration is corrective. Avoid classification by product name alone.')
add('1.4','Compensating control with an explicit constraint','Alternative meeting a security objective when the preferred control is temporarily unavailable','apply','control selection','compensating control; objective; exception',S1,'42. Compensating','682/1029 use network restrictions for unsupported assets; use a different non-network constraint and test objective equivalence, not another EOL scenario.')
add('1.4','One control can have different functions','Compare two explicitly different uses of the same measure','analyze','context comparison','control category; function; implementation',S1,'44. Overlapping','601 maps implementation categories; 602/604 single-purpose signs. New target is role-dependent classification, with the function specified.')
for canon,target,context,terms in [
 ('1','Public safety and common good','A professional recognizes a public-safety consequence under defined reporting authority','public safety; common good; infrastructure'),
 ('2','Honesty and lawful professional conduct','Pressure to misstate a material assessment result','honesty; responsibility; legality'),
 ('3','Competent service to principals','A task exceeds demonstrated competence and requires authorized qualified assistance','competence; diligence; principal'),
 ('4','Advancing and protecting the profession','Responsible professional development or knowledge sharing with stated confidentiality constraints','profession; development; confidentiality')]:
    add('1.5',target,context,'apply','professional decision',terms,S1,'Canon '+canon,'606/607 test due care/diligence labels; no current primary canon decision. Keep each new canon dilemma distinct; do not imply a universal hierarchy or disclosure override.')
add('2.4','Comparable security measurements','Different reporting periods/cohorts or changing denominators distort a trend','analyze','metric interpretation','cohort; denominator; measurement; trend','ISC2 Update 2026/Domain 2/D2 sum.md','Security Metrics','628/629 time intervals, 632/644 KPI/KRI, 631/646 awareness outcomes; this tests comparability before drawing an effectiveness conclusion.')
add('3.1','Identifier scope versus entity linkage','Same display username in independent identity namespaces','analyze','identity evidence', 'identifier; digital identity; account',K3,'KNOW-D3-001','669 links distinct personal/admin accounts to one person; new inference is same identifier does not establish same entity.')
add('3.1','Credential binding and authenticator','Distinguish the identity binding from the controlled secret/device','understand','concept distinction','credential; authenticator; subscriber',K3,'KNOW-D3-002','657 is proofing and 667 is factor composition; neither primarily tests credential/authenticator definitions.','Use the corrected local map rather than transcript username/password equivalence; recheck NIST SP 800-63-4 terminology.')
add('3.1','Approved provisioning scope versus copying a peer','A peer has legitimate exceptions that a new joiner does not require','apply','provisioning decision','provisioning; role; approved access',K3,'KNOW-D3-004','647 is approval sequencing; 648 mover cleanup. This chooses the scope of initial grants after approval; no new employee/job-title reskin of 647.')
add('3.1','Risk/policy-based access-review cadence','Review frequency follows specified policy/risk rather than an invented universal period','apply','policy interpretation','access review; recertification; risk',K3,'KNOW-D3-006','649 applies/validates removals; 650 ownership/activity. New target is scheduling under explicit policy, not another completed-form example.')
add('3.2','ACL is an enforcement mechanism, not always DAC','A permission list enforces an organization-defined policy','understand','concept distinction','ACL; subject; object; policy',X3,'15.1 ACL','661 asks who controls discretionary grants; new target distinguishes mechanism from decision model without assuming all ACLs are discretionary.')
add('3.2','Group membership and granted permissions','Incorrect group membership produces excess effective resource access','apply','remediation selection','group; membership; permission; least privilege',X3,'15.2 Group','665 infers total rights from multiple roles; new target is correcting an explicitly wrong membership while retaining justified groups. Hold if draft reduces to the same rights-inference decision.')
add('3.2','Time-bounded privileged access','A short approved administrative task and an explicit privilege-expiry policy','apply','control selection','PAM; privileged access; time limit',X3,'15.4 PAM','658 chooses read-only access; 669 distinct account IDs. This tests duration and privilege governance, without vendor workflow trivia.','PAM is labeled supplemental locally; retain only foundational logical-access connection and supply policy rather than asserting JIT is universally required.')
add('3.2','Evaluate an explicit attribute policy','Check a subject/resource/device/time conjunction against supplied facts','apply','policy evaluation','ABAC; subject; resource; environment',D3,'16. Attribute','664 recognizes the ABAC model; new target evaluates a short given policy, not another model-identification question.')
add('4.1','Switching versus routing function','A simple local versus inter-subnet forwarding requirement','apply','function selection','frame; packet; switch; router',X4,'2.7 MAC','670 compares model grouping; 686 fixes permissive inter-VLAN policy. New target is the communication function, not another VLAN remediation.')
add('4.1','Transport tradeoff','An application explicitly tolerates loss and supplies its own reliability if needed','understand','concept distinction','TCP; UDP; transport; reliability',X4,'2.4 TCP','671 distinguishes reliability from confidentiality. New target is choosing transport properties, never declaring UDP inherently insecure.')
add('4.1','Private addressing/NAT versus security policy','Address translation and access restrictions solve different stated needs','analyze','boundary interpretation','private IPv4; NAT; PAT; firewall',X4,'2.8 NAT','673 uses private addressing as a distractor in tunnel coverage; new target is the function/limit of translation without subnet arithmetic.')
add('4.1','DNS versus network reachability','An application resolves a name separately from connecting to its service','apply','bounded diagnosis','DNS; address; name resolution',X4,'2.12 DNS','677 port hints concern service identity; no primary name-resolution role item. Avoid protocol attacks and DNSSEC configuration.','Local supplemental networking application content; do not imply detailed record memorization is required by the outline.')
add('4.1','Application protocol purpose','Match a stated secure administration or time-synchronization need to an application function','understand','function selection','SSH; NTP; service; protocol',X4,'2.11 Applications','676 is FTPS/SFTP compatibility; 674/677 port/state identity. New target is application purpose, not a port-number recall variant.')
add('4.2','East-west versus north-south visibility','Observe traffic within a workload environment rather than only its perimeter','apply','architecture interpretation','east-west; north-south; segmentation',X4,'3.9 ACL','685 permitted-path residual risk and 687 host-agent rules test enforcement, not placement of visibility for internal flows.','Locally supplemental architecture terms; scope to basic defense-in-depth/segmentation and avoid deployment-engineering detail.')
add('4.2','Resource authorization versus trusted location','A resource decision considers explicitly supplied requester/device conditions after network admission','apply','access decision','Zero Trust; resource; context',X4,'3.6 Zero Trust','689 asks whether VPN/firewall can coexist with Zero Trust. New target is the resource-level decision, not whether to remove network controls.')
add('4.3','Community cloud eligibility','A defined group of organizations shares specific security/governance concerns','apply','deployment selection','community cloud; shared concerns; deployment',X4,'Community Cloud','695 tests private cloud ownership/location; 696 hybrid composition. New target is community eligibility, not another location/public/private trick.')
add('5.1','Symmetric bulk confidentiality and key protection','Bulk data protection with an explicit protected key-distribution requirement','apply','control selection','symmetric; secret key; AES',S5,'3. Symmetric','1007 public-key encryption, 1010 PQC dependency and 585 masking do not test selecting symmetric bulk protection; avoid algorithm-strength trivia.')
add('5.1','Signing and verification key roles','Integrity/origin evidence without assuming confidentiality','understand','concept distinction','signature; private signing key; public verification key',S5,'7. Digital Signatures','1007 encrypt/decrypt key direction and 1008 hash mismatch are different. Proposed 1042 tests evidentiary property, not key selection.','Use corrected summary and NIST signature source; reject transcript shorthand describing every signature as encryption with a private key.')
next(s for s in slots if s['target']=='Risk-based control investment')['source']={'path':'ISC2 Update 2026/Domain 1/Script - DOMAIN 1.txt','line':181,'heading':'00:43:30 - 00:44:46'}
assert len(slots)==43, len(slots)

objective_names={
'1.1':'Cybersecurity concepts','1.2':'Risk management processes','1.3':'Governance processes','1.4':'Security controls','1.5':'Professional and ethical conduct',
'2.1':'GRC purpose, frameworks and tools','2.2':'Redundancy, BC and DR','2.3':'Awareness, culture and leadership','2.4':'Measure cybersecurity effectiveness',
'3.1':'Identity lifecycle management','3.2':'Logical access controls','4.1':'Computer networking','4.2':'Network security architecture','4.3':'Cloud security',
'5.1':'Data security','5.2':'Security operations','5.3':'Incident response','5.4':'Asset protection','5.5':'Security testing'}
source_map={
'1.1':anchor(D1,'3. AAA'),'1.2':anchor(D1,'5. Risk Management'),'1.3':anchor(D1,'7. Security Governance'),'1.4':anchor(D1,'6. Security Controls'),'1.5':anchor(D1,'8. ISC2 Code'),
'2.1':anchor('ISC2 Update 2026/Domain 2/Domain 2.md','2. Governance'),'2.2':anchor('ISC2 Update 2026/Domain 2/Domain 2.md','6. Business Continuity'),'2.3':anchor('ISC2 Update 2026/Domain 2/Domain 2.md','11. Security Awareness'),'2.4':anchor('ISC2 Update 2026/Domain 2/Domain 2.md','17. Measuring'),
'3.1':anchor(D3,'2. Identity Life'),'3.2':anchor(D3,'10. Logical'),'4.1':anchor(X4,'2. Objective 4.1'),'4.2':anchor(X4,'3. Objective 4.2'),'4.3':anchor(X4,'4. Objective 4.3'),
'5.1':anchor(S5,'1. Cryptography'),'5.2':anchor(S5,'Part 2'),'5.3':anchor(S5,'Part 3'),'5.4':anchor(S5,'28. Asset'),'5.5':anchor(S5,'39. Security Readiness')}
gaps={
'1.1':'Accounting, non-repudiation, privacy purpose/retention and identity claim; 588–590 structured explanations unreliable. CIA examples exist.',
'1.2':'Inherent/residual distinction, simple quantified estimates, investment and post-treatment evidence. Risk-transfer/avoidance already repeated.',
'1.3':'Procedure, guideline, applicable requirements and limits of compliance; policy/standard/framework already targeted.',
'1.4':'Detective and compensating functions and context-dependent roles; current examples include mixed category/function language.',
'1.5':'Only due care/diligence: no primary decision targets for the four canons.',
'2.1':'Broad coverage; transfer, avoidance and acceptance repeated across domains. No volume priority.',
'2.2':'Broad coverage but 619/637 site-capability assurance needs repair and 639 dependency caveat.',
'2.3':'Broad social-engineering coverage; repeated targeted phishing and overtly implausible distractors.',
'2.4':'Ten items, several repeated KPI/reporting decisions; measurement comparability gap and ambiguous MTTR terminology.',
'3.1':'All main lifecycle stages present; identifier scope, credential definition, provisioning scope and review cadence add distinct reasoning.',
'3.2':'All four models present; ACL mechanism, group remediation, privilege duration and policy evaluation add variety without another model-label item.',
'4.1':'Detailed VPN/firewall/wireless/OT cases; basic device, transport and application-function decisions less directly tested.',
'4.2':'Substantial segmentation coverage; internal-flow visibility and explicit resource policy application add distinct targets.',
'4.3':'All service/deployment concepts substantially covered; community eligibility is a limited gap. FaaS/multicloud remain contextual, not extra official objectives.',
'5.1':'Masking/sanitization/hash/PQC targeted; symmetric bulk choice and signature key roles not direct targets. D5 sum opening mislabels scope as crypto only.',
'5.2':'Logging, triage, CTI, actors and ATT&CK present; no count-driven additions needed.',
'5.3':'Data sharing, hold, containment, recovery and exercises present; avoid new universal IR phase/order rules.',
'5.4':'Lifecycle, EOL, baseline/exception and change verification present; no count priority.',
'5.5':'Teams, scanning limits, static/dynamic testing, threat modeling and physical testing present; no count priority.'}

def make_registry():
    rows=[]
    recalls={588,589,590,591,592,594,595,597,598,599,600,601,602,603,604,606,607,608,609,610,611,613,614,615,621,622,623,624,629,630,632,634,635,638,640,641,642,643,644,653,654,655,657,661,662,663,664,667,669,670,676,679,680,691,695,696,1001,1007,1009,1011,1015,1017,1020,1024,1033,1036,1039}
    analysis={593,596,612,617,618,625,627,628,631,633,636,637,639,645,646,650,651,660,665,666,668,671,675,677,684,685,688,692,694,700,701,702,1006,1008,1010,1016,1019,1028,1030,1035}
    d5_manifest={r['id']:r for r in load('content/isc2-cc-2026/sources/domain-5/production/authoring-manifest.json')}
    for q in qs:
        i=q['id'];m=mi[i]
        topic=d1topics[i-584] if q['dom']==1 else d2topics[i-608] if q['dom']==2 else d5_manifest[i]['assessedDecision'] if q['dom']==5 else m['topic']
        skill='understand/classify' if i in recalls else 'analyze evidence/constraints' if i in analysis else 'apply/select action'
        difficulty='foundational' if i in recalls else 'applied'
        severity,note=notes.get(i,('NO SPECIFIC EN DEFECT','Key defensible on stated facts; English coherent; correct/incorrect structured reasoning fits displayed options in desk review.'))
        if m['correctUniquelyLongest']:note+=' Key uniquely longest: inspect wording cue, not proof of a defect.'
        if q['dom']==1:note+=' F05: affected by domain answer-position imbalance.'
        row={'id':i,'domain':q['dom'],'objective':m['objective'],'subtopic':topic,'knowledge_target':topic,'cognitive':skill,'difficulty_estimate':difficulty,'style':'direct concept' if q['question'].startswith(('Which of the following BEST describes','What is the purpose','Which activity','In MITRE')) else 'bounded scenario','intended_key':m['key'],'key_review':'Supported in English desk review; independent blind solve not performed','severity':severity,'findings':note,'bilingual_review':'Automated field/shape screen; targeted manual checks only; full independent EN/TH parity review OPEN','mapping_provenance':m['sourceMetadata']}
        rows.append(row)
    return rows
registry=make_registry()
write(OUT/'question-review-register.json',json.dumps(registry,ensure_ascii=False,indent=2))
write(OUT/'expansion-slots.json',json.dumps(slots,ensure_ascii=False,indent=2))

def source_report():
    rows=[]
    for d in range(1,6):
        files=[r for r in inventory if r['domain']==f'Domain {d}'];c=Counter(r['kind'] for r in files)
        rows.append([d,len(files),c['.md'],c['.txt'],c['.png'],0])
    text='# Local academic source inventory and evidence limits\n\nAudit snapshot: 2026-11-06. Source root: `D:/_Coding/SEC-CERT-TEST/ISC2 Update 2026/`. All five directories recursively enumerated; all file bytes hashed. No source was altered.\n\n'
    text+=table(['Domain','All files','Markdown','TXT','PNG','PDF'],rows)
    text+='\nTotal **277 files: 24 Markdown, 5 TXT, 248 PNG; no local PDF** in these five directories. Complete per-file paths, byte sizes, kinds and SHA256 are in [JSON](local-source-inventory.json) and [CSV](local-source-inventory.csv). All text files were decoded/indexed; heading index is [source-headings.json](source-headings.json). Academic review used targeted sections, course transcript passages, local terminology/knowledge maps, and existing audit reports. It was not a fresh line-by-line fact-check of every paragraph or a visual read of all 248 images. Those limits remain open, and no directory is declared complete.\n\n## Text-file register\n\n'
    r=[]
    for p,v in heads.items():
        role='Course transcript; unattributed lecture and transcription artifacts; targeted passages inspected' if p.endswith('.txt') else 'Prior review/curated terminology; secondary evidence, not independent acceptance' if any(t in p for t in ['review.md','analysis.md','knowledge-map.md']) else 'Learning summary/examples; headings, provenance and selected academic sections inspected; original examples must not be copied'
        r.append([f'`{p}`',v['lines'],len(v['headings']),role])
    text+=table(['Exact repository path','Lines','Headings','Role / inspection limit'],r)
    text+='\n## Fresh image sample inspection\n\nOnly these six PNGs were newly viewed in this audit. Remaining 242 PNGs are inventoried, not visually certified. Historical source inventories have their own image-review claims; those were not inherited as fresh verification.\n\n'
    samples=[('Domain 1/Screenshot 2026-09-19 235026.png','43 × 22 dark/blank crop; no academic evidence visible. Exclude.'),('Domain 1/Screenshot 2026-09-19 234500.png','Tiny dark/blank crop; no academic evidence visible. Exclude.'),('Domain 2/Screenshot 2026-09-20 201852.png','Thai ESP32-S2 product listing; unrelated to CC governance. Exclude.'),('Domain 3/Screenshot 2026-09-27 041241.png','Least-privilege slide; definition, task-limited permissions and review. Supports 3.2, not proof of domain completeness.'),('Domain 4/Screenshot 2026-10-25 182516.png','Segmentation slide; flow restriction/lateral-movement goals. Requires effective enforcement, not guaranteed prevention.'),('Domain 5/Screenshot 2026-11-02 200608.png','CTI slide; collected/analyzed information informing decisions. Supports 5.2.')]
    text+=table(['Exact source path relative to ISC2 Update 2026','Observed use'],samples)
    text+='\n## Objective-to-source alignment\n\nThe source headings below support concepts within the official numbered objectives; they do not reproduce the full outline or guarantee all bullets are covered. Additional specific section anchors are recorded for every proposed slot in the expansion plan.\n\n'
    text+=table(['Objective','Primary local supporting section','Coverage limitation'],[[o,src_text(source_map[o]),gaps[o]] for o in objective_names])
    text+='\n## Contradictions, provenance and research holds\n\n- `D1 sum.md:280` lists location alongside factors; `Domain 1.md:102` correctly lists three factor categories. Location/device context must not be authored as a fourth independent authentication factor. Current [NIST SP 800-63-4](https://pages.nist.gov/800-63-4/sp800-63.html) distinguishes knowledge, possession and inherence.\n- `D2 sum.md:486` expands MTTR as respond but supplies no operational endpoint. Course framing cannot justify the universal containment endpoint asserted by Q629. Define a metric before calculation. [NIST measurement guide](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf) uses multiple time measures and warns that numbers can mislead without context.\n- D2 course numeric 1–4 risk matrices are not automatically quantitative; ordinal scoring may be semi-quantitative. Transcript spelling such as HIPPA is not terminology authority.\n- D3 original transcript equates identity/username and credentials/username-password and simplifies provisioning order. Corrected `domain-3-knowledge-map.md:53` onward explicitly records those corrections; use the corrected distinction with current NIST identity guidance. Do not author from the unqualified transcript alone.\n- D4 transcript line 85 describes WPA3 as almost impossible to break. Reject that assurance claim. `D4 surm.md` supplies qualified networking notes; no wireless standard or version guarantees every implementation.\n- D5 transcript lines 53–57 use signing/encrypting-with-private-key shorthand. `D5 sum.md:142` correctly distinguishes signature creation/verification from confidentiality; [NIST signature guidance](https://csrc.nist.gov/Projects/Digital-Signatures) supports the distinction. Do not generalize RSA-style shorthand to all signatures.\n- `D5 sum.md` opening labels 5.1 as cryptography; official 5.1 also covers classification, labeling, masking and sanitization. Other local summaries contain extra topics; neither heading placement nor supplemental material creates an official objective.\n- Several expanded notes refer to PDFs supplied in an earlier conversation, including the August 2026 update article. No such PDF is present in the five mandatory directories; referenced content is not treated as an inspected local PDF. The official outline was verified online.\n- D1 staging notes still show 26% and combined legacy counts; D2 staging still references proposed 1001+ IDs. They are historical staging records, not current runtime counts. D3 prior review overstates that balanced keys completely prevent guessing bias; key balance cannot prove item quality.\n- Legal applicability, exact retention/erasure duties, contested control taxonomy, universal MTTR definitions, guaranteed RPO-zero designs, advanced cloud/AI implementation and exact cryptography transition rules require primary-source research if a future item depends on them. None is invented here.\n- Local expanded notes identify conversation-derived and supplemental material; similar text in multiple files is not independent corroboration. Embedded local practice examples are learning aids and overlap candidates, never a pool to copy into the bank.\n'
    text+='\nThe newly inspected D5 transcript passage `DOMAIN 5.txt:7–29` supplies additional 5.1 support for classification, labeling, masking and sanitization, beyond the cryptography summary heading. Its claims need qualification: employee-only Confidential is an example scheme rather than a universal classification; masking does not make data incapable of misuse; the last four card digits alone do not establish strong authentication; and cryptographic erase requires suitable prior encryption and all relevant recoverable key copies to be addressed, not simply encrypt-then-delete. Current Q1001/1002 appropriately supply policy context, and Q1006 explicitly tests a remaining escrow key; do not import the transcript simplifications into new explanations. Detailed media-specific sanitization procedures require current primary guidance, not assumptions based on SSD/cloud labels.\n'
    text+='\n**Ethics research exclusion:** `Domain 1/Script - DOMAIN 1.txt:289–293` claims that word order within a canon permits preferring honor/honesty over legality. The inspected [official ISC2 ethics page](https://www.isc2.org/ethics) identifies four mandatory canons and the need for professional judgment; it does not establish that word-order override. Reject that instructor shortcut, and do not build an item keyed to violating law because another word appears earlier. The proposed canon contexts use the qualified local summary and official conduct principles instead. The transcript also renders principals as principles; retain the correct term for those to whom professional service is owed.\n'
    write(OUT/'academic-source-inventory.md',text)

source_report()

counts=Counter(r['domain'] for r in registry)
objc=Counter(r['objective'] for r in registry)
adds=Counter(s['domain'] for s in slots)
objadds=Counter(s['objective'] for s in slots)
weights={1:24,2:17.3,3:20,4:21.3,5:17.3}

def audit_report():
    s='# ISC2 CC 2026 — 157-question audit\n\n**READY FOR HUMAN REVIEW — EXPANSION NOT AUTHORIZED.**\n\nSnapshot: 2026-11-06. Version: `next-bank` only. Existing records were inspected, not repaired. No new question stems, answer choices or explanations were authored. The bank is **not academically accepted**: repair the critical explanation mismatches before expanding it.\n\n'
    s+='## Method, evidence and limits\n\nThe real `js/core/question-loader.js` loaded **157 unique questions**, from the five `data/certs/isc2/cc/versions/next-bank/questions/domain-N.js` modules. The audit reviewed all English stems/options and structured correct/incorrect rationales, mapped all questions, measured option/stem patterns, and screened bilingual field/letter structure. This was a single-agent desk review with the intended keys visible, **not an independent blind answer-key review, psychometric validation, or native Thai sign-off**. Thai semantic checks were targeted, not a complete line-by-line bilingual certification. The per-item register explicitly leaves that gate open for every item. No browser validation was needed or performed for this documentation-only phase.\n\n'
    s+='Local sources were recursively inventoried before question analysis. See [academic-source-inventory.md](question-bank-audit-support/academic-source-inventory.md), including **all 277 file paths**, 29 indexed text files, section-level supporting evidence and six newly inspected images. Text academic inspection was targeted; the remaining 242 images and unreviewed paragraphs are not silently declared accurate or complete. These are material review limits, especially for later question generation.\n\n'
    s+=f'The primary scope authority is the [official revised January 2026 outline]({outline}), effective September 1, 2026. The [ISC2 outline landing page]({landing}) was also checked. Local learning summaries are supporting sources, not independent official authorities. Official weights sum to 99.9% as printed because of rounding; do not silently change them. AI contexts are cross-cutting examples under applicable objectives, not extra numbered objectives.\n\n'
    s+='## Current domain and objective coverage\n\n'
    s+=table(['Domain','Current IDs','Count','Bank share','Official weight','A / B / C / D','Uniquely longest key'],[[d,'584–607' if d==1 else '608–646' if d==2 else '647–669' if d==3 else '670–702' if d==4 else '1001–1040 (1003/1025 absent)',counts[d],f'{100*counts[d]/157:.2f}%',f'{weights[d]}%', ' / '.join(str(sum(r['domain']==d and r['intended_key']==k for r in registry)) for k in 'ABCD'),sum(m['domain']==d and m['correctUniquelyLongest'] for m in metrics)] for d in range(1,6)])
    s+='\nNo official within-domain objective percentages were found; no equal-objective quota is attributed to ISC2. Counts indicate primary assessed targets, not mere mention in a distractor or corrupted explanation. Supplemental/contextual links do not count twice.\n\n'
    s+=table(['Objective','Working scope label','Current count','Current assessment / gap'],[[o,objective_names[o],objc[o],gaps[o]] for o in objective_names])
    s+='\nMapping provenance: D1 uses current staging ranges checked against stems. D2 Q608–633 exactly match the 26-item phase-7 candidate snapshot; Q634–646 are fresh auditor mappings from their current stems. This produces **2.1=10, 2.2=9, 2.3=10, 2.4=10**, rather than assuming a historical distribution. D3/D4 use draft metadata verified against current published concepts. D5 uses accepted-ID entries in the 40-record production manifest (38 published; 1003 and 1025 not published). Runtime records do not contain objective fields; these are audit classifications, not schema additions. Q667 remains 3.2 per author metadata and cross-links 1.1 authentication factors.\n\n'
    s+='## Findings ranked by severity\n\nSeverity is editorial triage: CRITICAL teaches an unrelated answer; HIGH materially undermines explanation/unique-answer reliability or item discrimination; MEDIUM needs targeted academic/language/distractor improvement; NOTE records a boundary. A defensible intended key does not excuse a wrong displayed explanation.\n\n'
    findings=[
    ('F01','CRITICAL','588, 589, 590, 591','Structured correct explanations and per-option reasoning address other topics. 588 asks password+PIN but teaches Accounting; 589 asks Processor but teaches Non-repudiation; 590 asks Data inventory but teaches Threat; 591 asks Vulnerability but teaches a risk-components formula. Flat explanations are on-topic, which can hide the inconsistency. Both EN and TH structured content are affected.','Rebuild the correct and every incorrect rationale against the actual options in a separately approved repair task, then independently solve/review both languages. Do not silently fix during audit.'),
    ('F02','HIGH','596, 597, 599, 601, 603, 611','Stale/swapped distractor reasoning: 596 C/D technical inventory versus zero-risk; 597 C software-development rationale unrelated to actual guarantee option and D zero-risk rationale; 599 B/D guideline/policy swapped; 601 C/D category mappings differ from actual options; 603 B/C preventive/detective swapped; 611 D NIST SP 800-30 explained as PCI DSS.','Review literal option-letter/content alignment for all records, including short/flat/structured variants. The cause may be stale feedback after edits, but provenance does not establish a root cause.'),
    ('F03','HIGH','619, 629, 637','619 assumes a cold site will comfortably meet five days without resource lead times. 629 assigns a universal containment endpoint to MTTR/respond without operational definition. 637 treats a hot site with real-time replication as mandatory assurance for RPO zero although replication/acknowledgment and tested failover behavior are unspecified.','Hold for scoped revision/primary-source check. Provide capabilities, start/end events and test evidence rather than inferring them from a label.'),
    ('F04','MEDIUM','See per-item register','Overclaims and terminology: precise-money requirement for all quantitative assessment; acceptance described as ignoring impact; business-owner title treated as universal authority; outsourcing/no-risk guarantees; one observation treated as mean; percentage within SLA called velocity; rigid BC/DR/IR order or document-audience rules.','Qualify to the supplied scenario and current authority. Do not create a generic always-managerial, always-assess-first or zero-risk answer rule.'),
    ('F05','MEDIUM','D1: 584–607, especially 597–607','Keys A=14 B=8 C=2 D=0; eleven consecutive A keys at 597–607. New questions must not be used to conceal the existing positional cue.','After approval, consider option-order review with corresponding keys and all rationale letters verified. No position edits authorized now.'),
    ('F06','MEDIUM','594/635; 595/613; 596/633; 631/646; 632/644','Repeated knowledge/decision targets despite different wording. Not literal duplicate stems.','Avoid adding further insurance-transfer, board-report, KPI/KRI-label or training-completion-versus-behavior variants. Review whether existing variants contribute distinct decisions before any later replacement.'),
    ('F07','MEDIUM / HIGH at 627','614, 620–625, 627, 630, 631, 641, 645; long-stem list below','Implausible/unrelated alternatives, capitalization used in place of precise grammar, unnecessary scenario verbosity. Q627 is especially weak: L2-only firewalls, alleged illegality of telling the board, CPU multiplication.','Use plausible same-level misconceptions and grammatical parallelism. Keep only scenario facts needed to choose one answer.'),
    ('F08','MEDIUM','1018; targeted bilingual cases in 595/589','1018 English MOST appropriate is weakened to a general Thai how-to-use request. Q595 Thai acceptance rationale adds ignoring impact; Q589 Thai unrelated signature rationale overstates irrefutable evidence.','Perform full independent EN/TH review of every item; preserve qualifiers, constraints, negatives and letter alignment. Automated field presence is not parity proof.')]
    s+=table(['Finding','Severity','Affected items','Evidence / implication','Next action after approval'],findings)
    s+='\nRuntime impact: `js/ui/components/explanation-2026.js:172` prefers `explanation_detail` when present. Consequently an on-topic flat explanation does not prevent the structured mismatches from reaching permitted Study/Practice/review explanations. The audit did not change disclosure timing or inspect an active Exam in a browser.\n\n'
    s+='Primary checks supporting F03: [NIST SP 800-34 Rev.1](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf), printed pp.34–35 and 46–47, distinguishes site readiness and actual recovery strategies; it does not make a site label proof of zero lost data. [NIST SP 800-55 Vol.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf) distinguishes time measures and emphasizes consistent, meaningful measurement. This is a scoped technical check, not a full review of either publication.\n\n'
    s+='## Repetition and answer cues\n\nAll **12,246 pairs** were compared by normalized exact stems and English TF-IDF cosine over stem plus intended answer, with 80 top lexical candidates retained in [similarity-candidates.json](question-bank-audit-support/similarity-candidates.json). Exact normalized English stem duplicates: **0**. Cosine is a triage signal, not a semantic pass/fail threshold. Manual review of recurring concepts and prominent pairs found:\n\n'
    pairs=[('594 / 635','Near-duplicate knowledge decision','Both identify insurance as transfer; changed organization is weak novelty.'),('595 / 613','Near-duplicate knowledge decision','Both cease an activity to identify avoidance; useful context differs but same answer rule.'),('596 / 633','Near-duplicate decision','Board needs business-impact strategic risk report.'),('631 / 646','Near decision overlap','Both prefer phishing behavior/reporting over training attendance/completion; specific metric differs.'),('632 / 644','Near-duplicate knowledge decision','KPI versus KRI using patch/exposure examples.'),('597 / 609','Review adjacent concepts','Governance purpose versus accountability; cross-domain overlap is expected, but monitor repeated direction/oversight answer wording.'),('619 / 637','Retain differentiated targets after repair','Cold site identification versus tight recovery requirements; shared vocabulary does not make them duplicates.'),('647 / 648 / 649','Retain','Pre-grant authority, mover entitlement cleanup, and verification of review remediation are distinct lifecycle decisions.'),('661 / 666','Retain','DAC decision ownership versus choosing a model by risk/policy fit.'),('674 / 675','Retain','Stateful reply permission versus encrypted application-content visibility.'),('690 / 694','Retain','Positive/negative flow validation versus evidence of remediation at the affected guest layer.'),('693 / 694','Retain','Changed IaaS/PaaS responsibility boundary versus an unresolved guest-OS ticket.'),('695 / 696','Retain','Private exclusivity versus hybrid composition/portability.'),('1001 / 1002','Retain','Assigning versus indicating classification; mixed-data handling under explicit policy.'),('1007 / 1010','Retain','Recipient encryption key versus PQC dependency review.'),('1012 / 1034','Monitor repetition, retain distinct context','Select missing telemetry source versus repair forwarding and demonstrate purple-team improvement.'),('682 / 1029','Monitor repetition, retain different constraint','Safety-critical restart window versus unsupported-service migration; both use scoped interim restrictions.'),('681 / 1023','Retain','Obsolete Bluetooth trust removal versus malware containment. Lexical matching alone is misleading.')]
    s+=table(['Pair(s)','Disposition','Reason'],pairs)
    s+='\n**42/157** correct choices are uniquely longest: D1=3, D2=13, D3=4, D4=15, D5=7. This is not proof that correct answers are consistently longest across the bank, but D4 (15/33) merits a cue review. Nine English stems exceed 80 whitespace-delimited words: **617, 618, 619, 620, 622, 623, 624, 625, 628**. Word count is a diagnostic, not a hard writing limit. No candidate performance data exists here to estimate actual difficulty or discrimination.\n\n'
    s+='Tool limitations: `tools/audit-isc2-questions.mjs` and `tools/scan-all-duplicates.mjs` load `versions/2026`, the legacy bank, despite generic/2026 naming; they are not current `next-bank` audits. `tools/analyze-duplicates.mjs` and `tools/check-duplicates.mjs` concern diagram generation, not semantic question duplication. The new documentation-side analysis explicitly uses the real next-bank snapshot. D3/D4 staging metadata, D2 historical candidates, and D5 QA ledgers are provenance aids; their historical accepted labels do not override fresh defects or confer human acceptance.\n\n'
    s+='## Complete per-question assessment register\n\nEach row records the primary knowledge target/subtopic, inferred cognitive skill and difficulty, style, intended key and individual English finding. Difficulty is an editorial estimate; it is not calibrated exam difficulty. Unless a row says otherwise, the intended key is defensible on the English scenario, and no specific English semantic defect was identified in this desk review. **Every row has an OPEN independent blind-solve and full bilingual gate**; it must not be read as acceptance. The [machine-readable register](question-bank-audit-support/question-review-register.json) retains mapping provenance and explicit open gates.\n\n'
    for d in range(1,6):
        s+=f'### Domain {d}\n\n'
        s+=table(['ID','Objective / primary knowledge target','Cognitive skill / estimated difficulty / style','Key','Severity and assessment'],[[bankref(next(q for q in qs if q['id']==r['id'])),r['objective']+' — '+r['knowledge_target'],r['cognitive']+'; '+r['difficulty_estimate']+'; '+r['style'],r['intended_key'],r['severity']+': '+r['findings']] for r in registry if r['domain']==d])+'\n'
    s+='## Validation and preservation\n\n'
    s+=table(['Check','Result','Meaning'],[
    ['Real-loader snapshot, audit-metrics.mjs','PASS: 157 records, 157 unique IDs; 19 mapped objectives after explicit D2 auditor overrides','Read-only shape checks: four EN/TH options, nonempty explanation fields, and expected incorrect letters. Does not establish academic accuracy.'],
    ['Documentation validator and SHA256 comparison','See question-bank-audit-support/verification.json','Validates 157 review rows, 43 concept-only slots, source headings/paths, objective sums, prospective ID collisions and protected snapshot.'],
    ['node tools/verify-exam-versions.mjs','FAIL: 14 pass, 5 fail; exit 1','Tests still treat next-bank as unavailable; rejection/count/registry/start-screen assumptions conflict with published bank. A separate failure is missing original/isc2_cc_BothThai-eng_583quiz.html. Full log retained.'],
    ['node tools/verify-isc2-question-migration.mjs','FAIL: exit 1','Missing root isc2_cc_BothThai-eng_583quiz.html historical fixture; no migration performed.'],
    ['node tools/verify-domain5-integration.mjs','FAIL: exit 1','Historical protected hash differs at content/isc2-cc-2026/reading/domain-1.md; the file was already modified at audit entry and is preserved by this audit.'],
    ['Browser / native Thai / independent solver','NOT PERFORMED','No browser completion, native-language acceptance, solver independence or human acceptance is claimed.']])
    s+='\nAll regression command outputs are retained as `.log` files under `question-bank-audit-support/`, with exit statuses in `test-results.json`. Tests were not edited to make them pass. The fresh preservation snapshot compares this audit against entry state, not against an older integration baseline. Existing unrelated working-tree changes remain untouched.\n\nBefore authoring, authorize a separate repair/review of F01/F02 and the high academic holds, finish outstanding source/Thai checks for any affected target, and approve or revise the [43-slot plan](question-bank-200-expansion-plan.md). **Do not use expansion to bypass existing-bank integrity failures.**\n'
    write(DOC/'question-bank-157-audit.md',s)

def standard_report():
    s=f'''# ISC2 CC 2026 — question-authoring standard

**Planning standard only. READY FOR HUMAN REVIEW — EXPANSION NOT AUTHORIZED.**

## Authority and what is actually known

The [official CC 2026 outline]({outline}) supplies scope, numbered objectives and domain weights. It does not prescribe a public quota of BEST/FIRST questions, a difficulty mix, exact option-length limits, or a universal managerial-answer rule. [ISC2 exam-development information](https://www.isc2.org/volunteer/volunteer-opportunities/exam-development) describes SME item development/review and related workshops. That supports a review process, not a claim to know confidential item-writing rules.

The [ISC2 scoring FAQ](https://www.isc2.org/register-for-exam/exam-scoring-faqs) discusses scaled scoring and item difficulty. A scaled passing score is not a raw-percent rule; this training bank is not calibrated to predict an official result. No scoring/application change is proposed.

The [public official flashcards page](https://cloud.connect.isc2.org/cc-flashcards) was accessible only as a signup landing page; actual cards were not inspected and no signup was submitted. Its domain labels should not supersede the revised outline. No openly readable official sample-item set was obtained in this audit. Local instructor examples were inspected as teaching aids, not authenticated ISC2 item exemplars. No dumps, recalled exam items or protected question sets were used. The conventions below are **project editorial standards inferred from sound assessment design and observed bank defects**, not proprietary ISC2 requirements.

## Source record required before writing

Record proposed ID, domain, primary objective, official outline page/bullet, assessed knowledge/decision, local source path, heading and line range, exact supporting claim, provenance and any external primary correction. Confirm the source exists and actually supports the intended distinction. A folder name, table of contents or duplicate summary is insufficient. Preserve local academic files as read-only.

Use current outline for scope, corrected local materials for academic support, and primary standards when a material technical uncertainty remains. Mark instructor additions and deeper material as supplemental. If an important claim lacks adequate support, put the slot on RESEARCH HOLD. Do not invent missing source contents, legal obligations, organization policy, AI capabilities or guaranteed outcomes.

Treat `content/isc2-cc-2026/vocabulary/exam-language.md` and `confusing-terms.md` as local editorial resources, not official exam research. Claims such as misreading qualifiers being the leading cause of wrong answers are unsupported here. The more careful provenance distinctions in `content/isc2-cc-2026/sources/domain-1/extracted-knowledge/exam-language-guide.md` should be retained: instructor tips, definition clues and project recommendations are different evidence levels.

## English-first construction

Write the original English assessment first. State one assessed decision and supply enough facts to make it determinate. Identify the actor, goal, relevant constraints, authority and current stage when they affect the answer. Remove facts that merely decorate a scenario. Choose direct conceptual assessment when a scenario would add no meaningful reasoning; avoid arbitrary style quotas.

Use natural examination English. Prefer a precise interrogative to stacked capitals. BEST/MOST requires a stated comparison criterion; FIRST requires a starting state, prerequisites, role and authority; PRIMARY asks the dominant purpose in this context. Use primarily as an adverb, not PRIMARY manipulating or PRIMARY distinguishes. LEAST/EXCEPT negatives need conspicuous and faithfully translated wording and should be used only when educationally justified.

Risk-based reasoning means weighing supplied likelihood, impact, business requirements and authorized responses. It does not mean the longest or most expensive control wins. Governance questions must distinguish who authorizes, who implements and who reviews; a job title alone does not assign legal or organizational authority. Technical and managerial answers are judged against the stated problem, not a blanket preference for one level.

Incident-response questions must specify evidence confidence, immediate goal, permitted actions and safety constraints when relevant. Do not enforce an unstated universal phase order. Exercises may overlap stages; prioritization cannot ignore people or dependencies. Keep CC complexity foundational: no unexplained product commands, advanced subnet arithmetic, exploit internals, cryptographic mathematics or AI-model engineering.

## Options and distractors

Provide exactly four mutually distinguishable, grammatically parallel options. Each wrong choice must model a realistic misconception for the same actor and decision. Avoid unrelated crimes, impossible technology claims, obviously unsafe behavior without a realistic misconception, or a different abstraction level solely to make the key obvious. Four plausible options does not mean four equally correct practices: one must satisfy the stated criterion more strongly.

Test every option against every material constraint. If two are defensible, hold the item; explain the ambiguity rather than rescuing the intended key with an unstated assumption. Check overlapping options, grammatical agreement, repeated keywords, unique precision, option length and absolutes. A uniquely longest key triggers review, not automatic rejection. Do not add padding to wrong choices to meet a numerical length quota. Avoid all/none-of-the-above and dependence on another question's answer.

Review key-position patterns across the bank and batches. Balance can reduce an obvious cue but cannot guarantee quality or prevent guessing. Do not change existing keys or shuffle options without authorization and rechecking every letter/rationale association.

## Terminology safeguards

| Concept | Required distinction |
| --- | --- |
| Identity, account, identifier | A username identifies within a scope; it is not the complete identity. Same username does not establish same entity. |
| Credential and authenticator | Use the intended standard's definitions; do not universally reduce credentials to username/password. |
| Authentication factors | Knowledge, possession and inherence; location/device context is not automatically another factor. Multiple independent factors can be present within one authenticator. |
| Authorization and authentication | A valid login does not establish permission for every resource. |
| Risk acceptance and transfer | Acceptance is an informed authorized decision; transfer can share financial consequences without eliminating all technical/legal responsibility. |
| Quantitative assessment | Numbers must have meaningful scale/units; ordinal labels with numerals are not proof of quantitative analysis. Monetary estimates are one method, not the definition of all quantitative risk analysis. |
| RTO, RPO and recovery site | Objectives require actual demonstrated capability; hot/cold/warm labels do not prove a tested outcome or zero loss. |
| Metrics | Define numerator, denominator, cohort, timestamps, units, period and interpretation. A single interval is not a mean; MTTR expansion and endpoint must be explicit. |
| Framework, standard, law, policy | Do not treat them as interchangeable; specify which obligations actually apply. ISO/IEC 27001 certification and certification-body accreditation differ. |
| Control category and function | Administrative/technical/physical describes implementation; preventive/detective/etc. describes role. The same measure can serve more than one role in context. |
| Encryption, hash, signature | Confidentiality, content comparison and authenticated signature evidence differ. Signing is not universally private-key encryption; signature validity does not prove all legal facts. |
| Cloud | Shared responsibility depends on component/service/agreement; it is not half of every task. Service labels and multi-provider count are not assurance evidence. |
| AI-assisted alerts | A signal/summary requires source evidence and context; it is not proof of compromise or a substitute for authority. |

Current primary terminology checks: [NIST SP 800-63-4](https://pages.nist.gov/800-63-4/sp800-63.html), [NIST measurement guide](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf), [NIST digital signatures](https://csrc.nist.gov/Projects/Digital-Signatures), and [ISC2 ethics](https://www.isc2.org/ethics). Local contradictions and additional research holds are in the source inventory; these links do not establish that every claim in a proposed item has already been checked.

## Thai parity and explanations

Translate only after English academic review. Preserve all actors, authority, timing, quantities/units, negatives, exceptions, and BEST/FIRST/MOST/PRIMARY qualifiers. Preserve option order and logical scope. Technical English may accompany consistent Thai terminology, but neither language may add a definition or stronger clue unavailable in the other. Back-check meaning against the approved English, not only fluency. Require a qualified independent bilingual reviewer; automated Thai-character checks cannot establish equivalence.

Write correct-answer reasoning tied to the scenario and criterion. Write individual reasoning for each of the three actual wrong choices, stating why it fails or is less appropriate here. Do not dismiss a valid practice universally merely because it is not best in this scenario. Avoid circular restatement, invented policy and unsupported guarantees. Examples/tips are optional and must not introduce inaccurate shortcuts.

Review flat EN/TH, short EN and structured EN/TH explanations together. Explicitly compare every `incorrect.letter` with the final displayed option text and index. Any reordering or wording change invalidates the rationale alignment until rechecked. F01/F02 in the current audit demonstrate why nonempty fields and valid letters alone are inadequate.

## Current schema compatibility

The published next-bank shape uses these 11 fields: `id`, `dom`, `question`, `options`, `correct_idx`, `explanation`, `short_explanation_en`, `question_th`, `options_th`, `explanation_th`, `explanation_detail`. Keep source/objective/reviewer metadata in sidecar planning/QA records, not unauthorized runtime fields.

Require a unique integer ID and matching domain, exactly four distinct EN and TH options, integer zero-based `correct_idx` in 0–3, filled bilingual content, `explanation_detail.correct.en/th`, and three `explanation_detail.incorrect` entries with the non-key A/B/C/D letters and `text_en/text_th`. Optional structured fields must follow the existing renderer's actual format. Validate exact compatibility through the loader and renderer after integration is authorized. `tools/verify-domain5-integration.mjs` provides useful shape/negative-check patterns but has historical baseline dependencies and is not an academic validator.

## Separate quality gates

| Gate | Owner and independent action | Required artifact / stop condition |
| --- | --- | --- |
| 0. Human scope approval | Human approves repair priorities, source holds and the 43 concept specifications | Explicit authorization; this audit does not grant it. |
| 1. Evidence readiness | Research reviewer verifies local claim and official scope, resolves primary-source contradictions | Source path/section/hash, scoped claim, research disposition. Unsupported claim stays on hold. |
| 2. English authoring | Author creates one original item only after approval | English item and separate sealed intended key/rationale; no copied examples. |
| 3. Blind solve | Reviewer who did not author/revise solves without key or explanations; records choice, reasoning and uncertainty first | Timestamped independent solve then key reveal. Same-agent self-review must never be labeled independent. Any multiple-best answer is a hold. |
| 4. Academic/key check | Independent subject reviewer fact-checks stem, every option and all explanation claims against source | Evidence-based key agreement; unresolved disagreement fails gate. |
| 5. Distractor/language check | Reviewer checks plausibility, parallelism, qualifier precision, cues and entry-level relevance | Per-option misconception and why-less-appropriate assessment; no circular justifications. |
| 6. Thai review | Qualified bilingual reviewer compares final EN/TH and ideally solves the Thai independently before seeing key | Qualifier/constraint/option/explanation parity record. No independent Thai reviewer available means OPEN. |
| 7. Duplicate review | Reviewer searches current 157, all approved new drafts, legacy secondary references and embedded local examples | Exact + lexical candidates followed by concept/decision adjudication, including cross-domain overlap. Reskinning is insufficient novelty. |
| 8. Schema/render validation | Technical reviewer checks IDs, fields, key/rationale letters, language rendering and negative cases | Automated result plus semantic option-to-rationale inspection. Schema success alone is insufficient. |
| 9. Human acceptance/integration approval | Human reviews final evidence and authorizes a separate integration | Ready-for-review is not accepted. Recheck total=200, references, regression baseline and active-Exam secrecy only in the authorized integration phase. |

The reviewer roles are separable responsibilities; academic/blind/bilingual independence must be real and disclosed. Author self-checks can prepare a draft but cannot replace independent gates. Any material revision invalidates affected downstream approvals and requires a fresh blind solve when the decision/key could change. Keep rejected candidates and reasons in sidecars; never inflate published counts with held drafts.

No fixed scenario/difficulty quota is prescribed. After a future pilot, assess difficulty, discrimination and distractor uptake using real candidate data; do not invent psychometric values or equate local scores with official passing probabilities.

## Reusable acceptance checklist

- [ ] Original English authored first, with one assessed decision and source-supported official alignment.
- [ ] Four plausible, parallel options; one defensible best answer; blind solution recorded before key reveal.
- [ ] Precise professional terminology, complete scenario constraints, no unwarranted FIRST/always/guarantee rules.
- [ ] No answer-position, grammar, repeated-keyword or excessive-length clue.
- [ ] Accurate independently reviewed Thai preserving qualifiers, negatives, scope and option order.
- [ ] Complete EN/TH correct reasoning and individual exact-option reasoning for all three distractors; flat/short/structured versions agree.
- [ ] CC-level complexity and meaningful distinction from existing and concurrently planned items.
- [ ] Valid existing schema and actual loader/render compatibility, with semantic checks beyond shape.
- [ ] Research, ambiguity, duplication and reviewer disagreements resolved; all material evidence retained.
- [ ] Human review and explicit integration authorization recorded; no silent publication.
'''
    write(DOC/'isc2-question-authoring-standard.md',s)

def plan_report():
    s=f'''# ISC2 CC 2026 — plan from 157 to 200 questions

**READY FOR HUMAN REVIEW — EXPANSION NOT AUTHORIZED.**

This is a specification for **43 additional original practice items**, not permission to write them. No stems, choices, answer keys or new explanations are included. Preserve all 157 current records. Critical F01/F02 repairs require a separately approved task and must be resolved before expansion/integration. A repair retaining its ID is not counted as an additional question.

## Scope, allocation and rationale

Primary scope: [official CC outline effective September 1, 2026]({outline}). Local supporting sources: read-only `ISC2 Update 2026/Domain 1` through `Domain 5`. Full paths, limitations and objective links are in [academic-source-inventory.md](question-bank-audit-support/academic-source-inventory.md). The 43 specifications below each identify a real local section. Presence of supporting notes does not certify every claim in an unwritten item.

'''
    s+=table(['Domain','Existing','Add','Planned total','Planned share','Official weight','Reason'],[[d,counts[d],adds[d],counts[d]+adds[d],f'{(counts[d]+adds[d])/2:.1f}%',f'{weights[d]}%',{1:'Largest primary-topic gaps: AAA evidence/privacy, risk processes, document distinctions and all four ethics canons.',2:'Already 39 items; one measurement-comparability gap, not another insurance/KRI/phishing variant.',3:'Both objectives broadly covered; add eight distinct identity, mechanism and policy-evaluation targets.',4:'Add basic function decisions, internal flow visibility, resource policy and community eligibility.',5:'Already broad operations/testing coverage; add only symmetric bulk protection and signature key roles.'}[d]] for d in range(1,6)])
    s+='\n**157 + 43 = 200**, by domain **48 / 40 / 31 / 41 / 40**. This is a coverage-oriented training pool, not a domain-weighted mock-exam blueprint. The approximate 200-item weight targets would be 48 / 35 / 40 / 43 / 34 after rounding; existing D2=39 and D5=38 already exceed those two targets. Exact weight matching is impossible by additions alone while preserving all existing records. The proposed tradeoff fills substantive D1 gaps and selected distinct targets elsewhere; D3 remains below weight (15.5% versus 20%). If human review prioritizes D3 weighting instead, reallocate D1 optional risk-math/secondary privacy slots before authoring; do not pretend both objectives are simultaneously optimized. No quiz selection or scoring change is proposed.\n\n'
    s+='No arbitrary scenario, difficulty or AI quotas were imposed. Difficulty labels are estimates for review, not measured performance. Direct conceptual distinctions are retained where a scenario would be artificial; calculations are simple supporting risk examples, not claims about required exam formulas. Four canon specifications test different professional obligations and must not devolve into four identical label-recall variants.\n\n'
    s+=table(['Objective','Existing','Add','Planned','Coverage decision'],[[o,objc[o],objadds[o],objc[o]+objadds[o],gaps[o]] for o in objective_names])
    s+='\n## Prospective IDs and per-item specifications\n\nIDs **1041–1083** are proposed only. They are absent from the current runtime banks and inspected authoring registries; they are **not reserved, assigned or integrated** by this report. Recheck repository-wide collisions and any concurrent authoring before approval. The numbered IDs in historical D2 staging are not reliable reservations because published D5 already uses 1001–1040.\n\nEach specification names a knowledge target and bounded context, not a question prompt. Every source is a local supporting section, with numbered official alignment as scope. The topic must be held if final wording requires a claim beyond that evidence. Overlap is assessed at planned decision level; final drafts must be compared again, including local embedded examples and all new drafts.\n\n'
    for p in slots:
        page=4 if p['domain']==1 else 5 if p['domain'] in (2,3) else 6 if p['domain']==4 else 7
        s+=f"### Proposed {p['proposed_id']} — {p['target']}\n\n"
        s+=f"- **Domain / objective:** {p['domain']} / {p['objective']} — {objective_names[p['objective']]}; official PDF page {page}.\n"
        s+=f"- **Knowledge and context:** {p['context']}.\n"
        s+=f"- **Skill / estimated difficulty / style:** {p['cognitive']}; {p['difficulty']}; {p['style']}.\n"
        s+=f"- **Important terminology:** {p['terminology']}.\n"
        s+=f"- **Local support:** {src_text(p['source'])}.\n"
        s+=f"- **Difference / overlap control:** {p['overlap']}\n"
        s+=f"- **Evidence limit / authoring hold:** {p['source_limit']}\n\n"
    s+='''## Research holds and approval sequence

Do not substitute unsupported facts for missing local evidence. Local summaries conflict about MFA categories, identity/credential terminology and signature mechanics; corrected supporting sections and external primary references are identified in the source inventory. Exact legal retention/erasure obligations, universal MTTR endpoints, guaranteed zero-loss recovery, and advanced AI/cloud implementation remain outside the evidence established here. A future item can use an explicit supplied organizational rule within scope; naming a real legal duty or technical guarantee requires primary-source research first.

Source inspection is not an exhaustive revalidation of every local paragraph/image. Finish the evidence review for the specific proposed claims before drafting; unread images cannot be cited as supporting facts. The three fresh unusable image samples are explicitly excluded. No missing course PDF is reconstructed from references in notes.

1. Human reviews the current-bank critical/high findings and approves a separate repair scope. Do not change records in this audit.
2. Human approves/revises the 43-slot allocation and the D3 weight tradeoff, including optional supplemental risk calculations and privacy contexts.
3. Resolve any source/research hold for each slot; retain exact section/range and supporting claim in its sidecar record.
4. Only after explicit generation authorization, author English originals in manageable batches under [isc2-question-authoring-standard.md](isc2-question-authoring-standard.md).
5. Obtain real independent blind solves before key reveal; then separate academic/key, distractor/language and qualified Thai reviews. Disclose unavailable reviewers as open gates.
6. Reassess semantic novelty against current, repaired and concurrently drafted items. Reject a draft whose decision merely reskins a prior item, even if its words are new.
7. Run schema, key/letter/rationale, loader, bilingual rendering and later authorized integration checks. Resolve or explicitly baseline existing regression failures without weakening preservation checks.
8. Stop for human final acceptance and integration approval. Ready for review is not human accepted. Publishing a 200-item bank is a later action, not an output of this planning phase.

If any of the 43 concepts cannot support a distinct valid item, revise this plan with a source-grounded replacement and renewed approval; do not fill the count with a near duplicate. The deliverable is an exact proposed allocation, not a guarantee that unwritten drafts will pass quality gates.
'''
    write(DOC/'question-bank-200-expansion-plan.md',s)

audit_report()
standard_report()
plan_report()
print(json.dumps({'review_rows':len(registry),'objectives':len(objc),'slots':len(slots),'adds':dict(adds),'planned_total':sum(counts.values())+len(slots)},indent=2))
