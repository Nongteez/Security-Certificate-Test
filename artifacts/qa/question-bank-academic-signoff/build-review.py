"""Review documentation only. Does not write bank/source files or the baseline plan."""
from pathlib import Path
from collections import Counter
import json,hashlib,re
OUT=Path(__file__).resolve().parent;ROOT=OUT.parents[2];DOC=ROOT/'docs/plans/isc2-cc-2026'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def save(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def table(h,rows):
 clean=lambda x:str(x).replace('|',' / ').replace('\n','<br>')
 return '\n'.join(['| '+' | '.join(h)+' |','| '+' | '.join(['---']*len(h))+' |']+['| '+' | '.join(map(clean,r))+' |' for r in rows])+'\n'
qs=read(OUT/'questions-review-snapshot.json');byid={q['id']:q for q in qs}
comparisons=read(OUT/'answer-comparison.json')['recorded_selections']
slots=read(DOC/'question-bank-audit-support/expansion-slots.json')
audit=read(DOC/'question-bank-audit-support/question-review-register.json');meta={r['id']:r for r in audit}
references=read(ROOT/'artifacts/qa/question-bank-academic-repair/source-evidence.json')
references.update({
'R13':['NIST SP 800-207','https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf','Resource sessions, dynamic context and policy-defined ongoing reassessment; §2.1.'],
'R14':['NIST SP 800-145','https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf','Community deployment is restricted to a defined community sharing concerns; location/provider ownership alone is insufficient.'],
'R15':['ISC2 Code of Ethics','https://www.isc2.org/ethics','Four mandatory canons require professional judgment; no word-order exception to legality is established.']})
save(OUT/'source-evidence.json',references)

flags={
591:('Answer cue / low discrimination','Both EN and TH name vulnerability in the scenario and then ask what the flaw represents. The key is correct, but the stem supplies its label.','Propose removing the answer term from the scenario in both languages while retaining the exploitable-flaw facts. This is an editorial proposal, not an applied change.'),
600:('Narrow SOP definition / EN–TH precision','Incorrect-option B says operational keystrokes; an SOP is not limited to keyboard actions. Thai says operational steps and is broader than that EN rationale.','Proposed B rationale: EN — An SOP gives repeatable operational steps for a specified activity, rather than the structure for an enterprise-wide cybersecurity program. TH — ระเบียบปฏิบัติประจำกำหนดขั้นตอนการปฏิบัติงานที่ทำซ้ำได้สำหรับกิจกรรมเฉพาะ ไม่ใช่โครงสร้างของโปรแกรมความมั่นคงปลอดภัยทั้งองค์กร. Apply consistently to its flat EN version only after approval.'),
612:('Missing Thai authority qualifier','EN option C says designated business asset owner; TH option C omits the designated modifier, while both repaired explanations rely on assigned authority. C is still best among supplied roles.','Proposed TH C: เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายให้กำกับดูแลฝ่ายจ่ายเงินเดือนและเข้าใจผลกระทบต่อธุรกิจ. Do not infer unlimited risk-acceptance authority from the title.'),
614:('Implausible distractor','C invents an international ban on numbers in risk matrices. D is defensible, and the repaired explanation rejects the invented rule, but this distractor does not meet the authoring standard’s plausibility requirement.','Revise C to a realistic confusion between assessment method and another risk concept; recheck all four options and key-length clues. No new option is authored here.'),
627:('Three implausible distractors','A alleges L2-only firewalls, B a blanket legal board-disclosure ban, D a CPU multiplier. C is defensible and the repaired explanation is contextualized, but the item poorly tests reasoning.','Replace the three distractors with realistic measurement misconceptions, keeping the decision criterion and complete bilingual reasoning. No replacement options are generated in this review.'),
628:('Triage start/completion mismatch','Both stems say triage is completed at 10:45. Thai option C says triage starts at 10:45; its Thai rationale describes only delay before opening the work. Correct TTD key B is unaffected.','Propose C wording around completion of initial triage in EN/TH. EN rationale: The 45 minutes run from alert generation to completion of initial triage, including any queueing and processing; they are not compromise-to-detection time. TH: ช่วง 45 นาทีเริ่มจากการสร้างแจ้งเตือนจนคัดกรองเบื้องต้นเสร็จสิ้น รวมเวลารอและเวลาปฏิบัติงานที่เกิดขึ้น ไม่ใช่ช่วงเวลาจากการถูกเจาะถึงตรวจพบ.')}
comments={
588:'Same-factor failure and all three actual distractors are now explained consistently; PIN-as-device-activation is not confused with a password/PIN-only login.',
589:'Processor/controller/subject/regulator roles are aligned in EN/TH. Classification is conditional on the stated instructions-only arrangement, not cloud hosting in general.',
590:'Inventory, retention, sanitization scheduling and masking are now distinct. No unrelated threat text remains.',
592:'Descriptive categories and expert judgment support qualitative analysis; financial estimates are correctly treated as one quantitative example, not the definition.',
595:'Declining the stated activity is avoidance; informed acceptance is no longer translated as ignoring impacts. Remaining organizational risks are not denied.',
596:'C/D explanations now match technical inventory versus zero-risk promise. Strategic reporting fits the stated investment decision; it is not the only format every board may use.',
597:'C/D reasoning now concerns the actual guarantee and firewall-rule choices. The administration/oversight distinction is clear.',
599:'B/D guideline/policy rationales now match their choices; mandatory technical specifications support A. Appropriate straightforward classification.',
601:'Three-category classification matches outline scope. Operational and administrative may be used differently in other taxonomies; the repaired reasoning is appropriately bounded.',
603:'B/C detection/prevention rationale letters are aligned. Thai now preserves write-once; restoration remains corrective under the stated function.',
611:'D now explains SP800-30, not PCI DSS. Accreditation/certification are distinguished and the false annual-renewal implication is removed. Framework as an umbrella term is awkward but does not produce a competing key.',
613:'Service cessation supports avoidance; the revised reasoning retains transition-risk/history limits. Thai wording about segmentation is less exact than EN sufficiently isolate, but does not change the explicitly stated retirement decision. Prefer sufficiency wording in later editorial review.',
616:'BIA is first among these options for unresolved priorities, not asserted as the universal first continuity step. FIRST is preserved in Thai.',
618:'Common physical hazard, not backup frequency or media type, explains D. Geographic separation is shorthand for avoiding the relevant common hazard; no universal distance requirement is established.',
625:'MFA reduces the usefulness of a stolen password alone; no universal takeover guarantee remains. Complexity/rotation are stated organizational policy or distractors, not endorsed as universal best practice.',
626:'The scenario assigns recognize/report duties and established channels. D is best among offered actions; reporting does not guarantee containment and the revised reason does not invent a universal shutdown prohibition.',
633:'The stated multi-year strategic briefing supports A. The revised tip allows suitable dashboards/scorecards for other board needs. Significant overlap with 596 remains an editorial issue, not a wrong key.',
636:'C fits documented designated authority. Both languages qualify delegation; neither more appliances nor a junior implementer’s role automatically supplies risk acceptance.',
638:'Discussion fits the low-disruption roles/procedures objective. Tabletop/walkthrough terminology varies; the common discussion setting makes A defensible. It is not a technical-recovery demonstration.',
639:'B is best among the supplied actions given the stated emergency/safety need and tolerance. Real dependency sequencing still matters; the revised explanation avoids a universal shortest-MTD rule.',
645:'The required live telemetry and monthly ratings support D. Unencrypted-spreadsheet and reversed-audience alternatives are weak; improve distractor realism in a later editorial pass. This is a warning rather than an additional factual/key blocker here.',
1018:'Indicator plus campaign period supports a scoped retrospective query; negatives do not prove absence. Thai now preserves MOST appropriate. No added translation clue is identified.'}
review=[]
for c in comparisons:
 i=c['id'];q=byid[i];m=meta[i]
 review.append({'id':i,'domain':q['dom'],'objective':m['objective'],'selected':c['selected'],'stored':c['stored_key'],'agreement':c['agreement'],'classification':'REVISE' if i in flags else 'KEEP','meaning_of_classification':'Desk-review recommendation only; not human approval or independent blind acceptance','reasoning':c['reasoning'],'sources':c['source_refs'],'single_best_assessment':'One best supplied option supported on stated facts; no equally defensible alternative found in this desk review.','incorrect_reasoning_assessment':flags[i][1] if i in flags else comments[i],'bilingual_assessment':flags[i][1] if i in flags else comments[i],'difficulty':'CC-level foundational or bounded applied reasoning; no advanced implementation knowledge required. No empirical difficulty/discrimination estimate.','proposed_action':flags[i][2] if i in flags else 'Retain the repaired content for human review; comments do not authorize further edits.'})
assert len(review)==28 and sum(x['classification']=='REVISE' for x in review)==6
save(OUT/'repaired-record-review.json',review)

# These are proposals for four EXISTING IDs only; none is written to a bank module.
deferred={
619:{'classification':'REVISE','stored_key':'C','key_assessment':'C plausibly describes bare facility readiness; no supplied evidence proves that it meets the original five-business-day RTO. Do not approve the all-requirements claim.','evidence':'R10 site descriptions and BIA/capability reasoning; local D2 recovery notes. General and detailed NIST cold-site descriptions differ about telecom wording, so specify passive cabling versus active IT.','bilingual':'Both versions overstate five-day assurance. Thai adds ordering/procurement to the delivery/setup wording; procurement lead time is not validated in either version.','proposed_stem_en':'A manufacturer selects a fixed alternate facility with power, cooling, raised flooring and passive communications cabling. It has no installed computing or networking equipment, application software or restored production data. Recovery time will be validated separately after equipment procurement and recovery testing. Which readiness model BEST describes this facility?','proposed_stem_th':'ผู้ผลิตเลือกอาคารสำรองแบบอยู่กับที่ซึ่งมีระบบไฟฟ้า ระบบทำความเย็น พื้นยก และสายสื่อสารแบบพาสซีฟ แต่ยังไม่มีอุปกรณ์คอมพิวเตอร์ อุปกรณ์เครือข่าย ซอฟต์แวร์แอปพลิเคชัน หรือข้อมูลระบบจริงที่กู้คืนไว้ ระยะเวลากู้คืนจะต้องตรวจสอบแยกต่างหากหลังจัดหาอุปกรณ์และทดสอบการกู้คืน รูปแบบความพร้อมของสถานที่ใดอธิบายอาคารนี้ได้เหมาะสมที่สุด?','options_policy':'Retain current A Warm / B Hot / C Cold / D Mobile, in both languages.','proposed_correct_en':'C describes a fixed facility with supporting infrastructure but no installed IT recovery environment. The label alone does not establish a recovery deadline.','proposed_correct_th':'C อธิบายอาคารที่มีโครงสร้างสนับสนุนแต่ยังไม่มีสภาพแวดล้อมไอทีสำหรับกู้คืน ชื่อประเภทสถานที่เพียงอย่างเดียวไม่ได้ยืนยันว่าจะกู้คืนได้ตามกำหนดเวลา','wrong_en':['A warm site has some installed IT equipment; the proposed facility does not.','A hot site has operational recovery equipment rather than only the specified infrastructure.','A mobile site is transportable, whereas the proposed building is fixed.'],'wrong_th':['Warm site มีอุปกรณ์ไอทีติดตั้งไว้บางส่วน แต่อาคารที่เสนอในโจทย์ยังไม่มี','Hot site มีอุปกรณ์กู้คืนพร้อมทำงาน ไม่ใช่มีเพียงโครงสร้างสนับสนุนตามที่ระบุ','Mobile site เคลื่อนย้ายได้ แต่อาคารในข้อเสนอเป็นสถานที่อยู่กับที่'],'target_change':'Same Domain 2 / 2.2 and site-readiness concepts, but narrowed from cost/RTO satisfaction to readiness classification. Keeping the original RTO decision requires explicit validated lead times and cost evidence instead. Human must choose that target tradeoff.'},
629:{'classification':'REVISE','stored_key':'A','key_assessment':'A can be a locally defined initial-response milestone; it is not established as the universal endpoint of MTTR or the whole Respond phase.','evidence':'R11 defines measures and averages; R12 separates reporting, response and recovery roles. Local MTTR/respond shorthand does not define an endpoint.','bilingual':'EN and TH share the unsupported universal endpoint. Both must specify local boundaries and distinguish an individual interval from its mean.','proposed_stem_en':'For critical endpoint ransomware alerts, an organization defines an individual initial-response interval as starting when the SOC alert is generated and ending when responders complete an approved initial containment action. Its SLA requires the mean of these intervals over the reporting period to be under 20 minutes. Which listed milestone ends an individual interval used in this SLA?','proposed_stem_th':'สำหรับการแจ้งเตือนแรนซัมแวร์ระดับวิกฤตที่เครื่องปลายทาง องค์กรกำหนดช่วงเวลาตอบสนองเบื้องต้นแต่ละเหตุให้เริ่มเมื่อ SOC สร้างแจ้งเตือน และสิ้นสุดเมื่อผู้ตอบสนองดำเนินการจำกัดผลกระทบเบื้องต้นที่ได้รับอนุมัติเสร็จสิ้น SLA กำหนดให้ค่าเฉลี่ยของช่วงเวลาเหล่านี้ตลอดรอบรายงานต่ำกว่า 20 นาที จุดเวลาที่ระบุในตัวเลือกใดเป็นจุดสิ้นสุดของช่วงเวลาแต่ละเหตุสำหรับ SLA นี้?','options_policy':'Retain existing options and key A, subject to a new distractor-quality review; no universal MTTR expansion is asserted.','proposed_correct_en':'A matches the explicitly defined initial-containment endpoint for this organization. It ends that measured interval, not every incident-response activity. The SLA mean is calculated over the defined set of intervals.','proposed_correct_th':'A ตรงกับจุดสิ้นสุดที่องค์กรนี้กำหนดไว้สำหรับการจำกัดผลกระทบเบื้องต้น เป็นการสิ้นสุดช่วงเวลาที่วัด ไม่ใช่สิ้นสุดกิจกรรมตอบสนองเหตุการณ์ทุกอย่าง ส่วนค่าเฉลี่ยตาม SLA คำนวณจากกลุ่มช่วงเวลาที่กำหนดไว้','wrong_en':['Full service restoration is later than this SLA’s initial-containment endpoint.','Physical hardware replacement is not the endpoint defined in this SLA.','A vendor’s scheduled update release is a separate process, not this organization’s measured response endpoint.'],'wrong_th':['การกู้คืนบริการทั้งหมดอยู่ถัดจากจุดจำกัดผลกระทบเบื้องต้นที่ SLA นี้กำหนด','การเปลี่ยนฮาร์ดแวร์ทางกายภาพไม่ใช่จุดสิ้นสุดที่กำหนดใน SLA นี้','การเผยแพร่อัปเดตตามรอบของผู้ขายเป็นอีกกระบวนการ ไม่ใช่จุดสิ้นสุดการตอบสนองที่องค์กรนี้วัด'],'target_change':'Domain/objective 2 / 2.4 unchanged. Replaces unsupported universal terminology recall with interpretation of explicitly defined metric boundaries and averaging.'},
630:{'classification':'REVISE','stored_key':'D','key_assessment':'D captures the intended asset-versus-vulnerability distinction, but its velocity/speed wording is not supported by a percentage within SLA. No supplied option is wholly precise under the original wording.','evidence':'R11 meaningful units, populations and interpretation. A proportion meeting a deadline is not a duration or items-per-unit-time velocity.','bilingual':'Both labels and D wrongly say velocity/speed. EN correct reasoning says timeliness while its Thai counterpart says speed. PRIMARY distinguishes is also unnatural English.','proposed_stem_en':'A monthly scorecard reports two measures. X is the percentage of managed workstations running the approved patch build on the report date: 9,200 of 10,000, or 92%. Y is the percentage of critical vulnerability findings whose 15-day SLA deadlines fell in that month that were remediated by their deadlines: 84 of 100, or 84%. Which statement correctly distinguishes these measures?','proposed_stem_th':'สกอร์การ์ดประจำเดือนรายงานตัวชี้วัดสองตัว X คือร้อยละของเครื่องปลายทางที่อยู่ในการจัดการและติดตั้งชุดแพตช์ที่อนุมัติ ณ วันที่รายงาน เท่ากับ 9,200 จาก 10,000 เครื่อง หรือ 92% Y คือร้อยละของข้อค้นพบช่องโหว่ระดับวิกฤตที่ครบกำหนด SLA 15 วันในเดือนนั้น และได้รับการแก้ไขทันกำหนด เท่ากับ 84 จาก 100 รายการ หรือ 84% ข้อความใดอธิบายความแตกต่างของตัวชี้วัดทั้งสองได้ถูกต้อง?','options_policy':'Proposed replacement wording for all four options is below; D remains the proposed key. This is a human-review proposal for existing Q630, not a bank edit.','proposed_options_en':['Both percentages use workstations as their population and differ only in their target thresholds.','X measures average patching duration, while Y measures the proportion of critical findings still unresolved.','X measures workstations missing the approved build, while Y measures findings remediated after their deadlines.','X is a snapshot of approved patch state across workstations, while Y is an on-time remediation proportion for the critical findings due in the period.'],'proposed_options_th':['ร้อยละทั้งสองใช้เครื่องปลายทางเป็นประชากรที่วัด และแตกต่างกันเฉพาะค่าเป้าหมาย','X วัดระยะเวลาเฉลี่ยในการแพตช์ ส่วน Y วัดสัดส่วนข้อค้นพบระดับวิกฤตที่ยังไม่ได้แก้ไข','X วัดเครื่องที่ยังขาดชุดแพตช์ที่อนุมัติ ส่วน Y วัดข้อค้นพบที่แก้ไขหลังครบกำหนด','X เป็นภาพสถานะชุดแพตช์ที่อนุมัติของเครื่องปลายทาง ณ จุดเวลา ส่วน Y เป็นสัดส่วนการแก้ไขทันกำหนดของข้อค้นพบระดับวิกฤตที่ครบกำหนดในรอบรายงาน'],'proposed_correct_en':'D distinguishes a point-in-time asset-state population from a deadline-defined finding cohort. The percentages alone do not give average days to remediate or findings closed per unit time.','proposed_correct_th':'D แยกประชากรเครื่องปลายทางที่วัดสถานะ ณ จุดเวลาออกจากกลุ่มข้อค้นพบที่กำหนดตามวันครบกำหนด ร้อยละเหล่านี้เพียงอย่างเดียวไม่ได้ให้จำนวนวันเฉลี่ยในการแก้ไขหรือจำนวนข้อค้นพบที่ปิดต่อหน่วยเวลา','wrong_en':['Y counts findings rather than workstations, so the populations differ.','Neither measure is an average duration, and Y counts on-time remediation rather than unresolved findings.','This reverses the stated numerators: X counts approved builds and Y counts remediation by the deadline.'],'wrong_th':['Y นับข้อค้นพบ ไม่ใช่เครื่องปลายทาง ประชากรที่วัดจึงต่างกัน','ไม่มีตัวใดเป็นระยะเวลาเฉลี่ย และ Y นับการแก้ไขทันกำหนด ไม่ใช่ข้อค้นพบที่ยังไม่ได้แก้ไข','ข้อความนี้กลับความหมายตัวเศษที่ระบุ X นับเครื่องที่มีชุดแพตช์ที่อนุมัติ และ Y นับข้อค้นพบที่แก้ไขทันกำหนด'],'target_change':'Domain/objective 2 / 2.4 unchanged. Preserves population/timeliness interpretation, removes unsupported velocity terminology, and makes the finding cohort explicit instead of using an ambiguous count of global CVE identifiers.'},
637:{'classification':'REVISE','stored_key':'D','key_assessment':'D is the strongest candidate among the supplied strategies, but no option demonstrates the original mandatory zero-loss and sub-15-minute guarantee. Near-zero is not zero.','evidence':'R10 readiness and tested capability. Replication loss behavior, failover capacity and the defined failure scenario require validation.','bilingual':'EN RTO under 15 minutes differs from TH no more than 15 minutes. EN explanation relaxes RPO to near zero while TH claims zero. Both versions overstate site-label assurance.','proposed_stem_en':'A stock exchange requires an RTO of less than 15 minutes and an RPO of zero lost data for its defined recovery scenario. The team has not yet validated the candidate designs’ replication loss behavior or end-to-end recovery performance. Which listed strategy is the BEST candidate to assess against these requirements?','proposed_stem_th':'ตลาดหลักทรัพย์กำหนด RTO ให้น้อยกว่า 15 นาที และ RPO ให้ไม่มีข้อมูลสูญหายสำหรับสถานการณ์กู้คืนที่กำหนด ทีมงานยังไม่ได้ตรวจสอบพฤติกรรมการสูญหายของข้อมูลจากการทำสำเนาหรือสมรรถนะการกู้คืนตั้งแต่ต้นจนจบของแบบที่เสนอ กลยุทธ์ใดในตัวเลือกเหมาะสมที่สุดที่จะนำมาประเมินเทียบกับข้อกำหนดเหล่านี้?','options_policy':'Retain current four strategy descriptions and proposed key D; this changes the criterion from guaranteed compliance to candidate selection for validation.','proposed_correct_en':'D has the greatest stated readiness and a continuously maintained data copy, making it the best candidate among these choices. Meeting the targets still requires validation of replication and acknowledged-write loss behavior, recovery capacity and failover under the defined failure scenario.','proposed_correct_th':'D มีความพร้อมตามที่ระบุมากที่สุดและมีข้อมูลสำเนาที่ปรับปรุงต่อเนื่อง จึงเป็นตัวเลือกที่เหมาะสมที่สุดสำหรับนำไปประเมิน แต่ยังต้องตรวจสอบการทำสำเนา การสูญหายของข้อมูลที่ยืนยันบันทึกแล้ว ความสามารถกู้คืน และการสลับระบบภายใต้สถานการณ์ขัดข้องที่กำหนดก่อนยืนยันว่าบรรลุเป้าหมาย','wrong_en':['Post-disaster hardware procurement leaves substantial readiness work compared with D; no fixed recovery duration is inferred from the cold-site name.','Manual tape restoration/configuration adds recovery work compared with the continuously maintained copy in D.','Dispatching a trailer after the event adds deployment work; the described desktop setup supplies no comparable prepared transaction platform.'],'wrong_th':['การจัดหาฮาร์ดแวร์หลังเกิดภัยพิบัติยังเหลืองานเตรียมความพร้อมมากกว่า D โดยไม่ได้สรุประยะเวลากู้คืนตายตัวจากชื่อ Cold site','การกู้คืนจากเทปและตั้งค่าด้วยตนเองเพิ่มงานกู้คืนเมื่อเทียบกับข้อมูลสำเนาที่ปรับปรุงต่อเนื่องใน D','การส่งรถเทรลเลอร์หลังเกิดเหตุเพิ่มงานเคลื่อนย้าย และชุดคอมพิวเตอร์ที่บรรยายไม่ได้แสดงแพลตฟอร์มธุรกรรมที่เตรียมพร้อมเทียบเท่า D'],'target_change':'Domain/objective 2 / 2.2 retained. Changes unjustified mandatory-compliance assertion into readiness comparison and validation judgment. It does not prove a real design achieves either objective.'}}
deferred[629]['proposed_option_A_en']='Completion of the approved initial containment action for the affected endpoint, such as network isolation'
deferred[629]['proposed_option_A_th']='การดำเนินการจำกัดผลกระทบเบื้องต้นที่ได้รับอนุมัติสำหรับเครื่องปลายทางนั้นเสร็จสิ้น เช่น แยกเครื่องออกจากเครือข่าย'
deferred[629]['options_policy']='Clarify A with the proposed completed-action wording below; retain B/C/D. A remains the proposed key, subject to human approval and new blind review.'
deferred[630]['proposed_stem_th']=deferred[630]['proposed_stem_th'].replace('และติดตั้งชุดแพตช์ที่อนุมัติ ณ','และกำลังใช้งานระบบด้วยชุดแพตช์ที่อนุมัติ ณ')
save(OUT/'deferred-proposed-revisions.json',deferred)

revision={
1044:('Separating ordinary retention from exception/erasure cases','As written it repeats retaining data under an exception, overlapping 1022 and 1045. Specify ordinary lifecycle scheduling using a supplied retention period and trigger; do not use another preserve-despite-deletion-rule decision.'),
1045:('Distinct handling of a data-subject request','Differentiate from 1044 and 1022 by handling a supplied erasure request across explicitly defined record categories, including what can be erased and what must be retained. Use supplied applicable rules; no invented jurisdictional exception.'),
1046:('Privacy evidence pointer and decision scope','Extend the local reference to Domain 1.md:136–146, including purpose/collection, rather than relying on the Accountability heading at 142. Specify authorized but purpose-inappropriate use, distinct from minimization at collection in 1043.'),
1051:('Comparable cost/benefit criterion and complete source context','The cited timestamp begins mid-example and is not a universal accept-if-control-cost-exceeds-loss rule. Include the preceding cost context, comparable time horizons and explicit mandatory/nonfinancial constraints; corroborate the decision criterion with R05 §2.3.2. Research any named ROI formula before use.'),
1071:('Novelty against more than Q665','An erroneous-group cleanup can repeat 648 mover cleanup, 649 remediation verification, 658 minimum access or 665 combined rights. State a distinct group-mechanism decision and why those items do not already assess it; otherwise replace this specification with another source-grounded 3.2 target before drafting.'),
1078:('One protocol purpose','The current target offers secure administration OR time synchronization. Select time synchronization as the single function, using the local application-protocol table, without suggesting NTP alone proves log integrity or teaching port-number trivia. Recheck overlap with 1012/1034 logging cases.'),
1080:('Distinct Zero Trust decision','Basic resource authorization versus VPN/network admission is already taught by 689 and reinforced by 697/702. Narrow the proposal to a policy-defined reassessment after a relevant device/context change, without an automatic-deny-for-any-change rule. Use local Zero Trust context and R13 §2.1; keep it architectural rather than another ABAC model-label item.'),
1082:('Separate bulk protection from key establishment','Specify that the shared/session key is already established and protected and that the decision concerns efficient bulk confidentiality. Otherwise key distribution and data encryption can make a hybrid/asymmetric answer defensible. Local D5 sum:61–97 supports the boundary; do not claim every symmetric cipher is categorically faster in every implementation.')}
slot_notes={
1041:'Primary accounting decision is missing from current targets; old corrupted 588 is now repaired and must no longer be cited as current corruption. Distinguish attribution from permission and detection.',
1042:'Evidentiary property differs from 1083 signing-key direction. Avoid irrefutable proof or universal legal outcome. Old 589 mismatch is historical, not current.',
1043:'Collection necessity differs from 1004 de-identification before sharing and 589 processor role; provide purpose and needed fields.',
1047:'Claim versus proof differs from authorization 587 and proofing 657; do not make public username a second factor.',
1048:'Pre/post-control estimates differ from acceptance authority 636; define the assessment boundary without asserting a unique universal inherent-risk convention.',
1049:'One-event units/exposure estimate is supportable supplemental risk material. Provide the model/formula if needed; do not claim the outline mandates SLE arithmetic.',
1050:'Annualization/units is a different target from one-event loss in 1049. Keep bounded and interpretive; no claim of a required ISC2 finance formula or precise prediction.',
1052:'Use defined scales and consequences; do not assume arbitrary ordinal multiplication is a cardinal risk quantity.',
1053:'Observed control ineffectiveness differs from changed exposure 593. Define what observation supports reassessment; do not guarantee causality.',
1054:'Procedure is not a current primary target; assess operational steps rather than repeat standard identification 599.',
1055:'Applying an advisory recommendation versus a binding specification differs from merely naming a standard; state the actual requirement.',
1056:'Use supplied applicability/obligations. Standards/guidelines can become binding through policy/contract; do not imply every non-statute is optional.',
1057:'Compliance-versus-risk inference differs from framework selection; define the assessed scope and residual evidence.',
1058:'A specified detection function differs from deterrent signs 602; do not classify solely by product name.',
1059:'Explicit unavailable preferred control and objective make an alternative-control decision feasible. Avoid another unsupported-device segmentation scenario from 682/1029.',
1060:'Two uses/functions of the same measure differ from simple category matching; the source explicitly teaches context-dependent roles.',
1061:'Public-safety duty is a missing primary target. Use an authorized professional decision, not a claim that canon ordering overrides law.',
1062:'Honest assessment reporting is distinct from operational due care; keep all options plausibly professional, with one criterion.',
1063:'Recognizing competence limits differs from supplier due diligence 607. Authority and access to qualified help must be specified.',
1064:'Professional development/authorized sharing differs from the other canon dilemmas. Do not imply that serving the profession overrides confidentiality.',
1065:'Cohort/denominator/period comparability is distinct from KPI/KRI labels and single-incident TTD. Supply valid comparable populations.',
1066:'Same username across namespaces is the inverse identity-evidence problem to multiple linked accounts in 669, not a second factor question.',
1067:'Corrected local credential/authenticator distinction agrees with R02 glossary; keep entry-level and explicitly NIST-framed where terminology matters.',
1068:'Approved initial entitlement template versus copying a peer’s legitimate exceptions differs from pre-approval sequencing 647 and task read-only selection 658; preserve that narrow decision.',
1069:'Risk/policy cadence differs from executing review removals 649. Do not invent a universal 30/90-day review frequency.',
1070:'Mechanism versus decision model is distinct from DAC model identification 661. A permission list alone does not establish all governance of its grants.',
1072:'Task duration/governed privilege expiry differs from minimum permission scope 658. Supply the time-limit policy and avoid product workflows.',
1073:'Evaluate a given conjunction rather than identify ABAC as in 664. Define attributes/default behavior and avoid formal-policy-language complexity.',
1074:'Basic local/inter-network forwarding function differs from 670 model correspondence and 686 enforcement. Name ordinary device functions, allowing multilayer devices to be specified.',
1075:'Given application loss/reliability requirements differ from 671 reliability-versus-confidentiality. UDP is not inherently insecure and upper layers can supply services.',
1076:'Address translation purpose differs from filtering; no NAT-is-a-security-guarantee assumption or advanced prefix arithmetic.',
1077:'Name resolution and service connectivity are different functions. If framed as diagnosis, provide bounded observations; do not infer DNS failure from any connection failure.',
1079:'Internal-flow visibility differs from 685 allowed-path risk and 687 host enforcement. Specify observation scope and do not infer inspection from a VLAN label.',
1081:'Community eligibility is a distinct primary decision from 695 private ownership and 696 hybrid composition. Require a defined restricted community, not just two organizations using one public provider; R14 supports this.',
1083:'Signature creation/verification roles differ from 1007 recipient encryption keys and 1042 evidentiary property. Signature does not imply confidentiality or guaranteed personal attribution.'}
spec_review=[];excerpts=[]
for p in slots:
 i=p['proposed_id'];src=p['source'];path=ROOT/src['path'];lines=path.read_text(encoding='utf-8-sig').splitlines();assert lines[src['line']-1].lstrip('# ')==src['heading']
 start=src['line'];end=next((n for n in range(start,len(lines)) if lines[n].startswith('#')),min(start+20,len(lines)))
 body='\n'.join(lines[start:end]);excerpts.append({'id':i,'path':src['path'],'line':src['line'],'heading':src['heading'],'excerpt':body[:3000]})
 spec_review.append({'proposed_id':i,'domain':p['domain'],'objective':p['objective'],'target':p['target'],'source':src,'source_exists':True,'support_level':'Local cited section inspected; primary corroboration/limits noted in review, not directory-presence inference','cognitive':p['cognitive'],'difficulty':p['difficulty'],'status':'REVISE' if i in revision else 'READY','readiness_meaning':'Specification feasibility only; not authoring authorization, proof of draft originality, or verification of unwritten options','finding':revision[i][0]+': '+revision[i][1] if i in revision else slot_notes[i]})
assert len(spec_review)==43 and Counter(x['status'] for x in spec_review)=={'READY':35,'REVISE':8}
save(OUT/'specification-review.json',spec_review);save(OUT/'source-excerpts.json',excerpts)

weights={1:24,2:17.3,3:20,4:21.3,5:17.3};counts=Counter(q['dom'] for q in qs);adds=Counter(p['domain'] for p in slots)
current_obj=Counter(q['objective'] for q in audit);add_obj=Counter(p['objective'] for p in slots)
ready_obj=Counter(p['objective'] for p in spec_review if p['status']=='READY')
baseline_plan_hash=hashlib.sha256((DOC/'question-bank-200-expansion-plan.md').read_bytes()).hexdigest()
plan='''# ISC2 CC 2026 — proposed expansion-plan review

**PROPOSED REVIEW ONLY — BASELINE PLAN PRESERVED. EXPANSION NOT AUTHORIZED.**

This is a separate assessment of the 43 existing specifications, not an authored question set or approval of unwritten answers. The baseline `question-bank-200-expansion-plan.md` and its `expansion-slots.json` are unchanged. References to corrupted Q588/Q589 in the old plan describe the historical before state; the current repaired records no longer have those unrelated explanations. Neither repaired item primarily assesses accounting/non-repudiation, so the underlying coverage gaps remain.

## Allocation recommendation

Retain **24 / 1 / 8 / 8 / 2 provisionally**, while resolving the eight specification revisions below. This recommendation is based on targets, not simply matching the prior allocation: D1 has missing primary accounting/non-repudiation, privacy lifecycle, procedure and canon decisions; D3 already covers both objectives across lifecycle stages and four models; D2/D5 are already relatively large, so their small additions address particular measurement and crypto gaps. Existing D3 underweight remains a real tradeoff, not evidence that its current target coverage is absent.

'''
plan+=table(['Domain','Current','Add','At 200','Bank share','Official weight','Difference (percentage points)','Spec-ready / revise'],[[d,counts[d],adds[d],counts[d]+adds[d],f'{(counts[d]+adds[d])/2:.1f}%',f'{weights[d]}%',f'{(counts[d]+adds[d])/2-weights[d]:+.1f}',f'{sum(p["domain"]==d and p["status"]=="READY" for p in spec_review)} / {sum(p["domain"]==d and p["status"]=="REVISE" for p in spec_review)}'] for d in range(1,6)])
plan+='''
Official weights are 24 / 17.3 / 20 / 21.3 / 17.3; printed rounding sums to 99.9. Approximate integer 200-pool targets are 48 / 35 / 40 / 43 / 34. Existing D2=39 and D5=38 already exceed those latter target counts, so exact proportionality is impossible through additions alone while preserving the bank. D3 at 31/200 is 15.5%, 4.5 percentage points below its official weight. Do not describe this pool as weight-balanced.

Transferring D1 slots to D3 solely to improve percentages would require additional distinct D3 decisions with evidence and would risk repeating already-covered lifecycle/PoLP/model cases. This review does not invent replacement D3 specifications to fill a quota. If human review chooses closer domain weighting, a new source-grounded reallocation must be approved before authoring. No within-domain objective percentages, scenario quotas or cognitive difficulty quotas are attributed to ISC2. All 19 objectives already have current primary targets; subtopic depth, accuracy, distinct decisions and coverage quality remain separate questions.

## Objective view

'''
plan+=table(['Objective','Current primary targets','Proposed additions','Spec-ready additions','At 200 if all revisions later pass'],[[o,current_obj[o],add_obj[o],ready_obj[o],current_obj[o]+add_obj[o]] for o in sorted(current_obj)])
plan+='''
## Readiness definitions and source limits

**READY (35)** means the current specification has a plausible CC-level knowledge/decision target, a supporting inspected local section and a feasible distinction from current primary targets. It is not authorization to draft and does not certify the originality, distractor plausibility or single-best answer of an unwritten item. **REVISE (8)** means resolve the named evidence pointer, target boundary or novelty issue before authoring; none is counted ready on the strength of the original plan’s label.

All **43 source paths/headings exist and were checked against actual text**. That does not make all claims in an entire source file reliable: these notes contain conversation-derived/supplemental material and known contradictions. Supporting local sections were reviewed across all five domains; primary corrections are identified in the sign-off report. No fresh exhaustive read of all 248 source images or all paragraphs is claimed. Named legal duties, exact retention periods, universal metric endpoints and implementation guarantees require additional primary evidence if a draft uses them. Use supplied organizational rules where the design calls for them; do not invent a law.

Concept overlap was assessed against current 157 primary targets and relevant explanations and against other proposed specifications. Ordinary topic overlap is not automatically duplication: e.g. recognizing ABAC and evaluating a given attribute policy can be different decisions. A new organization name or setting without a distinct decision is insufficient. Exact text originality cannot be established before drafting; later compare against all current/parallel drafts and embedded local teaching examples, including legacy material as a secondary reference. No protected question text is to be copied.

## Review of all 43 specifications

'''
plan+=table(['Proposed ID / objective','Target','Skill / estimated difficulty','Inspected supporting source','Readiness and assessment'],[[f'{p["proposed_id"]} / {p["objective"]}',p['target'],p['cognitive']+' / '+p['difficulty'],f'`{p["source"]["path"]}:{p["source"]["line"]}` — {p["source"]["heading"]}',p['status']+' — '+p['finding']] for p in spec_review])
plan+='\n## Proposed specification changes — concepts only\n\n'
plan+=table(['ID','Issue','Required proposed revision before authoring'],[[i,*revision[i]] for i in revision])
plan+='''
The eight proposed changes keep their current domain/objective slots and the total at 43. They are not applied to the baseline. If 1071 cannot produce a distinct decision, replace its specification through review rather than writing a reskin. 1080’s policy-defined context reassessment requires explicit policy and source support; it does not mean every context change automatically revokes access. R13 §2.1 supplies the qualified architectural principle. 1082 must clearly separate already-established key handling from choosing bulk protection; otherwise competing hybrid answers may be defensible.

Cognitive labels and difficulty are separate: a short evidence distinction can require analysis without being advanced. Neither current labels nor this desk review are psychometric estimates. Bounded SLE/ALE examples are supporting risk concepts, not published promises of ISC2 calculation requirements. The four canon contexts must remain different professional decisions, not four keyword-label recognition clones.

**35 specification-ready; 8 require revision; 0 new questions authored; 0 authoring/integration approvals granted.** All future drafts still require academic fact-checking, actual blind solving by a genuinely separate reviewer, qualified bilingual review, semantic duplicate review, schema/render checks and human approval.
'''
(DOC/'question-bank-200-expansion-plan-review.md').write_text(plan,encoding='utf-8')

s='''# ISC2 CC 2026 — academic sign-off review

**BLOCKED — ACADEMIC ISSUES REMAIN**

Review date: 2026-11-06 (Asia/Bangkok). This is a completed review/report, not human sign-off. **No existing question, answer key, schema, application code or academic source was changed. No new expansion question was generated.** Proposed text below applies only to four already-existing IDs and is not integrated.

## Methodology and independence limitation

The audit, repair report, authoring standard, baseline expansion plan, academic-source inventory, actual current bank and repair evidence were inspected. The real loader returned 157 records. All 28 repaired questions/options were reassessed through a key-hidden current worksheet; selections/reasoning were saved before comparison with current stored keys. All 28 selections agreed. Each correct/incorrect rationale was then checked against the scenario/options and supporting evidence; English/Thai meaning was reviewed separately for qualifiers, scope, timing and role authority.

**This agent previously authored/reviewed the repairs and had already seen the keys and explanations. A key-hidden worksheet cannot erase that exposure. This is a same-agent corroborative desk review, NOT an independent blind verification, NOT an independent native-Thai review and NOT human approval.** No new independent reviewer was represented as having solved these items. A real independent academic/key and qualified bilingual gate remains open.

Record keys and option order were not used as authority for correctness. Current answer-key agreement is evidence of this reassessment only, not statistical validation. No candidate response data exists to estimate item difficulty/discrimination. Historical accepted labels and passing schema tests cannot override the new content/translation findings below.

## Outcome summary

- **28 / 28 repaired-item keys supported on the supplied facts**, with no equally defensible supplied alternative identified in this desk review. This does not accept their overall item-writing quality.
- **22 KEEP recommendations; 6 REVISE recommendations** among those 28. KEEP means eligible for human consideration at this review level, not approved.
- **Q619, Q629, Q630 and Q637: REVISE**, with conditional key assessments and unapplied EN/TH proposals. No REPLACE classification is necessary because their core concepts are repairable; capability claims still need evidence if retained.
- Bilingual/English issues requiring follow-up include Q600’s narrow SOP term, Q612’s missing Thai authority modifier, Q628’s triage start/completion mismatch, and Q637’s strict/inclusive RTO boundary and zero/near-zero mismatch.
- All **43 specifications reviewed: 35 specification-ready, 8 REVISE**. Provisionally retain 24/1/8/8/2 additions; the baseline plan remains unchanged. Specification readiness is separate from authoring permission: **none is authorized for generation by this report**.

## Findings for all 28 repaired records

Each rationale below records why the chosen option dominates the three offered alternatives; current repaired explanations were also inspected for literal option-letter alignment. KEEP rows record no additional desk-review blocker, subject to comments. All are foundational or bounded applied CC concepts; numeric/long-stem and specialized vocabulary can increase reading load without demonstrating psychometric difficulty.

'''
s+=table(['ID / domain / objective','Reassessed / stored key','Assessment of key and alternatives','Explanations and EN/TH review','Disposition'],[[f'{r["id"]} / {r["domain"]} / {r["objective"]}',r['selected']+' / '+r['stored'],r['reasoning']+' Sources: '+r['sources'],r['incorrect_reasoning_assessment'],r['classification']] for r in review])
s+='\n### Required follow-up on the six repaired records\n\n'
s+=table(['ID','Issue type','Verified evidence','Proposed action — not applied'],[[i,*flags[i]] for i in flags])
s+='''
Q591’s cue appears in both languages; it is not a Thai-only answer leak. For Q612 the key remains C because the designated business owner is the best offered role, but the Thai option should preserve the EN qualification. Q628 key B remains two hours; the 45-minute distractor must describe the same completion endpoint across stem, option and rationale. Q614/Q627 have academically defensible keys but fail the guide’s plausible-distractor criterion. Q645’s weak alternatives and overlap between 596/633 are retained editorial warnings rather than silently rewritten or treated as new key errors.

No new answer clue introduced by the repaired translations was identified in the other desk-reviewed records. Q613’s Thai segmentation wording is less precise than EN sufficiently isolate, but the explicit service retirement preserves the intended decision; this should be considered in a human language pass without assuming every acceptable synonym is an error. Tabletop/walkthrough and operational/administrative classifications can vary by taxonomy: Q638/Q601 are interpreted in their stated discussion setting and outline control model, rather than declaring all alternative terminology incorrect.

## Four deferred questions

The following proposals are **review candidates for existing Q619/Q629/Q630/Q637 only**. They do not constitute the 43 new questions. Each requires human choice, a new genuinely independent solve and bilingual approval before any bank edit. Existing keys remain untouched.

'''
for i,d in deferred.items():
 s+=f'### Q{i} — REVISE; current key {d["stored_key"]}\n\n'
 s+=f'**Current-key assessment:** {d["key_assessment"]}\n\n**Evidence / uncertainty:** {d["evidence"]}\n\n**Bilingual finding:** {d["bilingual"]}\n\n'
 s+=table(['Proposed field','English','Thai'],[['Stem',d['proposed_stem_en'],d['proposed_stem_th']],['Correct reasoning',d['proposed_correct_en'],d['proposed_correct_th']]])
 s+='\n'+d['options_policy']+'\n\n'
 if 'proposed_option_A_en' in d:s+=table(['Proposed option','English','Thai'],[['A',d['proposed_option_A_en'],d['proposed_option_A_th']]])+'\n'
 if 'proposed_options_en' in d:s+=table(['Proposed option','English','Thai'],[[l,en,th] for l,en,th in zip('ABCD',d['proposed_options_en'],d['proposed_options_th'])])+'\n'
 wrong_letters=[l for l in 'ABCD' if l!=d['stored_key']]
 s+=table(['Incorrect-option reason','English','Thai'],[[l,en,th] for l,en,th in zip(wrong_letters,d['wrong_en'],d['wrong_th'])])
 s+='\n**Effect on intended target:** '+d['target_change']+'\n\n'
s+='''## Expansion allocation and all 43 specifications

See the separate [expansion-plan review](question-bank-200-expansion-plan-review.md) for every specification’s target, cognitive demand, local supporting section, novelty assessment, feasibility limits and proposed revisions. The old baseline and its sidecar are unchanged.

The 157-bank domain distribution is 24/39/23/33/38. Retaining the proposed additions produces 48/40/31/41/40: 24%/20%/15.5%/20.5%/20%. Official weights are 24%/17.3%/20%/21.3%/17.3%. The plan must not be presented as proportionally balanced: D3 remains 4.5 percentage points below its published weight. Existing D2/D5 already exceed approximate 200-pool weighted targets, so exact proportionality is impossible through additions alone. All 19 objectives have current primary targets; this does not establish complete subtopic depth or quality.

The retained provisional allocation prioritizes missing D1 primary concepts and canon decisions, rather than transferring slots to D3 merely for arithmetic. D3 already has substantial lifecycle/model coverage and proposed new cases must avoid repeating it. D2’s measurement-comparability and D5’s bulk-encryption/signature roles are specific gaps despite domain overrepresentation. A closer-weight alternative needs distinct, evidenced replacement specifications; this review does not invent them to fill a quota.

The **eight specification revision IDs** are **1044, 1045, 1046, 1051, 1071, 1078, 1080, 1082**. They preserve domain/objective allocation in the proposed review. Source paths/headings exist for all 43, but a heading’s existence is not sufficient support for an arbitrary future claim. Final single-best answers, originality and distractor plausibility cannot be certified for questions that have not been written.

## Authoring-standard language review

'''
s+=table(['Area','Assessment / proposed clarification'],[
['English and qualifiers','Keep the criterion-based BEST/MOST, stage/authority-based FIRST, primary-purpose distinction and restrained LEAST/EXCEPT guidance. Do not force a qualifier into every item; direct definition/interval questions can ask directly. Correct PRIMARY used where primarily is needed.'],
['Risk and control selection','Keep supplied likelihood/impact, authority, constraints and residual-risk reasoning. Add explicit common time horizons for financial comparisons; control cost alone must not override legal/safety requirements. Context determines a control’s role.'],
['Governance / incident response','Keep assigned decision authority and scope-specific prioritization. No universal manager-always-wins, assess-always-first, word-order ethics override, end-user shutdown rule or fixed IR endpoint.'],
['Distractors / one best answer','The standard is sound, but the existing repaired bank does not yet consistently meet it. Require proof of a realistic misconception for each option; Q614/Q627 are concrete failures. Evaluate competing interpretations rather than repairing an explanation to force a key.'],
['Bilingual review','Keep qualifier/negation/role/time/units parity and final option-letter alignment. Add an explicit timeline endpoint matrix (start, acknowledgement, triage completion, containment) to catch Q628-type drift. Independent native-Thai acceptance remains separate.'],
['Entry-level complexity','Do not equate Bloom-style verbs with difficulty. Favor one decision, only necessary facts and bounded calculations. SLE/ALE, detailed protocols and supplemental IAM terms are supporting material, not public claims about mandatory exam-item content.'],
['Evidence and independence','Preserve the separation of public outline facts, project editorial rules and instructor tips. No confidential exam access or proprietary item-writing-rule knowledge is claimed. A same-author key-hidden reread is not an independent gate.'],
['Future originality','No sample protected ISC2 items are copied or recreated. Check current/legacy bank and local example overlap after drafting; different wording alone is insufficient novelty.']])
s+='\n## Source evidence and unresolved coverage\n\n'
s+=table(['Ref','Inspected supporting reference','Scope / limitation'],[[k,f'[{v[0]}]({v[1]})' if v[1].startswith('https:') else f'{v[0]} — `{v[1]}`',v[2]] for k,v in references.items()])
s+='''
The official ISC2 outline/ethics and NIST identity, measurement, contingency, Zero Trust and cloud passages were rechecked where relevant. Previously verified EDPB, ISO and remaining repair references are retained as supporting evidence with their recorded limits. All five local domains contributed inspected source sections. This was not a new exhaustive inspection of every source paragraph/image; the source inventory’s unusable/misfiled image and provenance warnings still apply. Conversation-derived duplicate notes are not independent corroboration.

Outstanding source constraints include named-law applicability, exact retention/erasure periods, universal metric acronyms/endpoints, guaranteed recovery capabilities and any formula-specific finance or implementation claim. Supplied organizational rules can bound a draft, but are not fabricated citations to actual law. Cloud/AI contexts do not create additional official objectives, and advanced engineering is not justified merely because a supplemental local note mentions it.

## Preservation and read-only validation

Entry snapshot covers **1,435 existing protected files**, including current bank/code/config, academic sources, vocabulary/slides, previous reports and previous repair evidence. All must retain their entry hashes; the final result is recorded in `artifacts/qa/question-bank-academic-signoff/verification.json`. The task tracker is the only pre-existing document intentionally updated outside that protected snapshot.

- Fresh read-only `verify-repairs.mjs`: **8/8 pass**. It confirms the existing 28 repairs/proposals and prior 129-record invariants; it does not prove independent academic correctness or erase the new review findings.
- Fresh `tools/verify-study-answers.mjs`: **8/8 pass**.
- New review validator checks 157 unchanged records/IDs/keys/options/order, 19 mappings, all 28 review rows, all four deferred proposals, all 43 source pointers/readiness results, 43 total additions, report consistency and entry-state preservation.
- No browser rerun was necessary for this read-only review. The prior Chrome 350-check/144-state/471-render-case result remains historical technical evidence, not new academic sign-off.
- Prior version/migration failures, authorized-repair hash conflicts in `verify-domain5-integration.mjs`, and Q1018’s frozen authoring-snapshot difference remain documented in the repair report. They were not repaired, bypassed, relabeled as passing or given new baseline exceptions here. This task introduces no additional production hash conflicts.

## Approval blockers and next human decisions

1. Establish a genuinely separate academic/key reviewer and qualified bilingual acceptance process; prior key exposure prevents independent blind sign-off in this chat.
2. Review and authorize any revisions for Q591, Q600, Q612, Q614, Q627 and Q628; current keys are supported, but content/assessment quality has unresolved issues.
3. Decide Q619/Q629/Q630/Q637 target/wording changes. Their unchanged records are not accepted as fully precise; no new key approval is implied by the proposals.
4. Resolve the eight expansion-specification revisions and the explicit D3 weighting tradeoff; approve a final plan separately from authority to generate.
5. Reconcile historical release-check fixtures/baselines/staging through an authorized technical process before claiming a clean release gate. Do not overwrite historic evidence to make it appear that new content was already accepted.

The review deliverables are complete; academic sign-off is blocked. **No human approval, existing-bank edit, new question generation or integration has occurred in this task.**

**BLOCKED — ACADEMIC ISSUES REMAIN**
'''
(DOC/'question-bank-academic-signoff.md').write_text(s,encoding='utf-8')
save(OUT/'review-summary.json',{'status':'BLOCKED — ACADEMIC ISSUES REMAIN','repaired_keys_supported':28,'repaired_KEEP':22,'repaired_REVISE':6,'repaired_revision_ids':sorted(flags),'deferred_REVISE':[619,629,630,637],'specifications_reviewed':43,'specification_ready':35,'specification_revise':8,'specification_revision_ids':sorted(revision),'allocation_recommendation':[24,1,8,8,2],'allocation_status':'retain provisionally; baseline unchanged; authoring not authorized','baseline_plan_sha256':baseline_plan_hash,'blind_independence_established':False,'new_questions_generated':0,'bank_records_changed':0})
print('Created two review reports: 28 repaired records, four deferred proposals, all 43 specifications; 35 READY / 8 REVISE.')
