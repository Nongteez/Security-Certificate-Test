"""Record a key-hidden reassessment, explicitly NOT an independent blind review."""
from pathlib import Path
import json
OUT=Path(__file__).resolve().parent
answers=[
(588,'B','R02','Password and PIN both demonstrate knowledge; length, requiring three categories and hardware-only PIN entry do not explain the factor failure.'),
(589,'C','R03','The provider acts on retailer instructions; data subjects are the customers, the retailer determines purpose, and the provider is not a regulator.'),
(590,'B','R04/L02','Inventory records data/location/ownership; retention duration, sanitization timing and masking format do not supply that catalog.'),
(591,'C','R05/L03','The exploitable flaw is a vulnerability. Server/database are assets, adversary/attack are threat sources/events, and harm is impact. The stem itself gives the answer term.'),
(592,'B','R05','Descriptive High/Medium/Low judgments are qualitative; no numeric measurements, residual-risk calculation or ownership-cost estimate is supplied.'),
(595,'A','R05/L03','Declining the AI activity avoids that exposure; adding controls, sharing losses and retaining exposure are different treatments.'),
(596,'B','R06','Business impact, priorities and resource needs fit investment decisions; raw telemetry/inventory and a zero-risk guarantee do not.'),
(597,'A','R06','Direction, oversight and accountability are governance; administrative tasks and firewall rules implement decisions and cannot guarantee zero incidents.'),
(599,'A','L04','Mandatory technical specifications are a standard; recommendations, sequential steps and management policy are different document roles.'),
(600,'A','R06/R09/L04','A framework organizes program outcomes; an SOP, AUP or narrow guideline does not supply the enterprise structure.'),
(601,'A','R01/L05','In the outline three-category model, packet inspection is technical, personnel requirements administrative, and barriers physical. B/C/D misassign those functions.'),
(603,'A','L05/R10','Restoring damaged systems is corrective; detection, prevention and directions describe other functions.'),
(611,'A','R09/R05','ISO/IEC27001 supplies certifiable ISMS requirements; CSF outcomes, COBIT governance and SP800-30 risk assessment do not provide that standard.'),
(612,'C','R06','The designated payroll business owner is the best supplied risk decision role; auditor, scanner operator and vendor advisory publisher are not assigned that authority.'),
(613,'B','R05','Permanently ending the device-dependent service is avoidance, rather than safeguards, transfer or retaining the activity.'),
(614,'D','R05','The 1–5 ordinal bins support semi-quantitative ranking, not ALE or quantitative measurement merely because multiplication occurs. C is an implausible distractor.'),
(616,'B','R10','Unresolved business recovery priorities require impact/dependency analysis before the offered site procurement, full failover exercise or broad replication deployment.'),
(618,'D','R10','The pipe event affects production and backups in one hazard domain. Frequency, disk-versus-tape and an invented daily-differential premise do not fix it.'),
(625,'A','R02','An independent additional factor makes a reused password alone insufficient; scheduled changes, length and remote-device bans do not meet that goal as directly.'),
(626,'D','R12','The explicitly assigned recognize/report duty makes established reporting first among options. Self-directed negotiation, cleanup or power removal are not the assigned first response.'),
(627,'C','R11','An isolated block count lacks decision context. L2-only, blanket legal prohibition and processor multiplication are untenable alternatives, weakening assessment quality.'),
(628,'B','R11','The supplied detection milestone is two hours after compromise. Other intervals describe later review or containment, not that detection interval.'),
(633,'A','R06/R11','The requested formal strategic briefing needs synthesis; streaming alerts, unedited records and per-endpoint messages do not answer it.'),
(636,'C','R06','Residual risk needs documented authorized acceptance; more appliances, a zero-risk goal or an unassigned junior sign-off do not replace it.'),
(638,'A','R10/L07','Discussion of roles/procedures fits the cost/no-production-interruption objective; full interruption, live parallel operation and evacuation test different capabilities.'),
(639,'B','R10','Emergency dispatch has the strongest stated safety/criticality and tightest tolerance among offered choices; dependency-informed sequencing remains necessary in practice.'),
(645,'D','R11','Live tactical visualization and monthly comparative ratings fit dashboard and scorecard respectively. The alternate pairs fail the stated needs.'),
(1018,'B','L08/R12','Use the indicator and period to search relevant endpoint evidence; absence of a match is not proof of absence, and unrelated logs or assumed compromise do not answer it.')]
payload={'review_mode':'Same-agent reassessment using a key-hidden current worksheet. Prior audit and repair authorship exposed keys and explanations. NOT independent blind verification.','recorded_selections':[{'id':i,'selected':k,'source_refs':ref,'reasoning':r} for i,k,ref,r in answers]}
(OUT/'reassessment-before-current-key-comparison.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
# Only after writing the assessment, compare with the fresh read-only snapshot.
qs={q['id']:q for q in json.loads((OUT/'questions-review-snapshot.json').read_text(encoding='utf-8'))}
for r in payload['recorded_selections']:r.update(stored_key='ABCD'[qs[r['id']]['correct_idx']],agreement=r['selected']=='ABCD'[qs[r['id']]['correct_idx']])
(OUT/'answer-comparison.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Reassessment agrees with',sum(r['agreement'] for r in payload['recorded_selections']),'of 28 current keys; independence limitation retained.')
