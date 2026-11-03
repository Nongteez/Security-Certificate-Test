import json,re,hashlib,subprocess
from pathlib import Path
from difflib import SequenceMatcher
qa=Path('artifacts/qa/domain5-vocabulary')
k=json.loads(Path('content/isc2-cc-2026/sources/domain-5/production/knowledge.json').read_text(encoding='utf8'))
existing=[e for d in range(1,5) for e in json.loads(Path(f'content/isc2-cc-2026/vocabulary/domain-{d}.json').read_text(encoding='utf8'))['entries']]
groups=[
['Data Handling','Data Classification','Data Labeling'],['Data Masking','Data Minimization'],['Media Sanitization','Cryptographic Erase','Clear','Purge','Destroy'],
['Encryption','Symmetric Encryption','Asymmetric Cryptography','Public Key','Private Key','Key Agreement','Digital Signature'],['Hashing','Message Digest','Collision Resistance','Password Hashing','Salt'],['Post-Quantum Cryptography','Cryptographic Inventory'],
['Logging','Security Monitoring','Log Aggregation','Security Information and Event Management','Timestamp','Time Synchronization'],['Security Event Triage','Incident Prioritization','Severity','Business Impact'],['Security Event','Security Alert','Security Incident','False Positive','False Negative'],['Event Correlation','Corroboration'],
['Threat Actor','Insider Risk','Malicious Insider'],['Cyber Threat Intelligence','Indicator of Compromise'],['MITRE ATT&CK','Tactic','Technique','Procedure'],['Incident Response Plan','Evidence Integrity','Preservation Hold','Authorized Information Sharing'],['Containment'],['Eradication','Recovery','Lessons Learned'],['Tabletop Exercise','Functional Exercise'],
['Asset Lifecycle Management','Asset Inventory','Asset Disposal'],['End of Life','End of Support','Compensating Control'],['Configuration Management','Configuration Baseline','Configuration Drift'],['Change Management','Change Control','Patch Management','Rollback','Post-Change Validation'],
['Red Team','Blue Team','Purple Team'],['Vulnerability Scanning','Penetration Testing'],['Static Application Security Testing','Dynamic Application Security Testing'],['Threat Modeling','Trust Boundary','Attack Path'],['Physical Penetration Testing','Phishing','Tailgating','Impersonation']]
aliases={'Logging':['Audit Trail / Logging'],'Security Monitoring':['Monitor'],'Business Impact':['Potential Impact'],'Patch Management':['Patch Management / Patching'],'Procedure':['Security Procedure'],'Asset Inventory':['Data Inventory'],'Insider Risk':[]}
def norm(s):return re.sub(r'[^a-z0-9]+',' ',s.lower()).strip()
rows=[]
for c,terms in zip(k['concepts'],groups):
 for term in terms:
  exact=[e for e in existing if norm(term) in [norm(e['term']),norm(e.get('full_form') or ''),norm(e.get('acronym') or '')]]
  mapped=[e for e in existing if e['term'] in aliases.get(term,[])]
  neighbors=sorted(existing,key=lambda e:SequenceMatcher(None,norm(term),norm(e['term'])).ratio(),reverse=True)[:3]
  rows.append(dict(candidate_id=f"D5-CAND-{len(rows)+1:03}",term=term,objective=c['objective'],knowledge_id=c['id'],knowledge_target=c['explanation'],conditions=c['conditions'],misconceptions=c['misconceptions'],local_source=c['source'],references=[{'code':r,**k['references'][r]} for r in c['references']],exact_existing=[{'id':e['id'],'term':e['term']} for e in exact],semantic_reuse_candidates=[{'id':e['id'],'term':e['term']} for e in mapped],ranked_neighbors=[{'id':e['id'],'term':e['term']} for e in neighbors],decision='REUSE_EXISTING_PENDING_SCOPE_REVIEW' if exact else 'REVIEW_SEMANTIC_OVERLAP' if mapped else 'AUTHORING_CANDIDATE_NOT_APPROVED',review_status='pending',note='Candidate extraction only. Similarity is not semantic proof; validate every term against claim-level references and all403 before inclusion. Clear/Purge/Destroy and cryptographic inventory need direct locators beyond broad concept support.'))
(qa/'candidate-screening.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
status=subprocess.check_output(['git','status','--short'],text=True)
(qa/'resume-git-status.txt').write_text(status,encoding='utf8')
print(f'{len(rows)} candidates linked to26curated foundations; {sum(bool(r["exact_existing"]) for r in rows)} exact-existing matches. All decisions pending; no approved or published entries.')
