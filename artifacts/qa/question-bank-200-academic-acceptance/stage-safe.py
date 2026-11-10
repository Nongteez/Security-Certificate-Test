"""Prepare bounded, key-preserving field corrections; never write production banks."""
import json,pathlib,copy
OUT=pathlib.Path(__file__).resolve().parent
entry=json.loads((OUT/'questions.entry.json').read_text(encoding='utf-8')); bank={q['id']:copy.deepcopy(q) for q in entry}
changes=[];unmatched=[];context={}
def why(i,reason,sources):context[i]=(reason,sources)
def put(i,path,value,sync=True):
 q=bank[i];v=q
 for k in path[:-1]:v=v[k]
 old=v[path[-1]]
 if old==value:return
 v[path[-1]]=value
 changes.append(dict(id=i,path=path,before=old,after=value,classification='SAFE FIX',justification=context[i][0],sources=context[i][1]))
 if sync and path[0]=='explanation_detail' and isinstance(old,str):
  lang='th' if path[-1] in ['th','text_th'] else 'en'; f='explanation_th' if lang=='th' else 'explanation'
  if old in q[f]:put(i,[f],q[f].replace(old,value),False)
  elif path[1] in ['correct','incorrect']:unmatched.append(dict(id=i,path=path,old=old))
def r(i,l,en=None,th=None):
 n=next(n for n,v in enumerate(bank[i]['explanation_detail']['incorrect']) if v['letter']==l)
 for lang,s in [('en',en),('th',th)]:
  if s is not None:put(i,['explanation_detail','incorrect',n,'text_'+lang],s)
def c(i,en,th):
 put(i,['explanation_detail','correct','en'],en);put(i,['explanation_detail','correct','th'],th)
def aux(i,k,en,th):
 put(i,['explanation_detail',k,'en'],en);put(i,['explanation_detail',k,'th'],th)
def rep(i,f,a,b):
 assert a in bank[i][f],(i,f,a)
 put(i,[f],bank[i][f].replace(a,b))

why(584,'Distinguish past-action evidence from current identity authentication.',['NIST-signatures','outline-1.1'])
r(584,'D','Non-repudiation concerns evidence that a particular past action or message originated from the attributed party. The demonstrated unauthorized dosage changes primarily compromise integrity.','Non-repudiation เกี่ยวกับหลักฐานที่สนับสนุนว่าการกระทำหรือข้อความในอดีตมาจากผู้ที่ถูกอ้างถึง ส่วนการเปลี่ยนขนาดยาโดยไม่ได้รับอนุญาตในโจทย์ละเมิด Integrity เป็นหลัก')
why(585,'Restore payment-card scope; credit cards are only a subset.',['entry-EN'])
rep(585,'question_th','บัตรเครดิต','บัตรชำระเงิน')
why(586,'UPS bridges generator startup; sustained supply depends on operational capacity and fuel rather than waiting for UPS exhaustion.',['NIST-34-3.4'])
c(586,'An auxiliary generator supplies longer-duration backup power while a UPS bridges the startup interval. Sustaining operation for days also requires suitable capacity, fuel, maintenance and tested transfer arrangements; the generator label alone is not an availability guarantee.','เครื่องกำเนิดไฟฟ้าสำรองจ่ายไฟระยะยาวกว่า โดย UPS จ่ายไฟเชื่อมช่วงเริ่มเดินเครื่อง การทำงานต่อเนื่องหลายวันยังต้องมีความจุ เชื้อเพลิง การบำรุงรักษา และระบบสลับจ่ายไฟที่ทดสอบแล้ว ชื่ออุปกรณ์เพียงอย่างเดียวไม่รับประกัน Availability')
put(586,['short_explanation_en'],'A UPS bridges generator startup; a suitably supported generator can provide longer-duration backup power.')
why(587,'Accounting can record unsuccessful and denied attempts as well as granted activity.',['NIST-92'])
r(587,'C','Accounting records activity, including successful or denied access attempts where configured; recording an event does not itself grant access.','Accounting บันทึกกิจกรรม รวมถึงความพยายามเข้าถึงที่สำเร็จหรือถูกปฏิเสธตามการตั้งค่า การบันทึกเหตุการณ์ไม่ได้ให้สิทธิ์เข้าถึงด้วยตัวเอง')
why(593,'Cloud connectivity changes assessment assumptions; neither direct public exposure nor a measured risk increase is specified. Insurance does not substitute for reassessment.',['NIST-30','outline-1.2'])
c(593,'Risk monitoring and review reassess accepted exposure when relevant conditions change. The new cloud connection changes dependencies and trust-boundary assumptions that supported the earlier acceptance. Assess the actual architecture and remaining exposure before deciding treatment; direct public-internet exposure or a quantified increase is not established by the stem.','การติดตามและทบทวนความเสี่ยงต้องประเมินความเสี่ยงที่ยอมรับไว้ใหม่เมื่อเงื่อนไขสำคัญเปลี่ยน การเชื่อม Cloud เพิ่มความพึ่งพาและเปลี่ยนสมมติฐานเรื่องขอบเขตความเชื่อถือที่ใช้ยอมรับเดิม ต้องประเมินสถาปัตยกรรมจริงและความเสี่ยงคงเหลือก่อนเลือกวิธีจัดการ โจทย์ไม่ได้ยืนยันการเปิดสู่อินเทอร์เน็ตโดยตรงหรือขนาดความเสี่ยงที่เพิ่มขึ้น')
r(593,'C','Insurance can share covered financial losses, but purchasing it does not itself assess or remove the changed technical exposure.','ประกันภัยแบ่งภาระความเสียหายทางการเงินตามความคุ้มครองได้ แต่การซื้อประกันไม่ได้ประเมินหรือกำจัดความเสี่ยงทางเทคนิคที่เปลี่ยนไปด้วยตัวเอง')
r(593,'D','Accepted risks can be reassessed and revised. The stated change calls for reassessment, not an automatic permanent halt based on a claim that accepted risks can never change.','ความเสี่ยงที่ยอมรับไว้สามารถประเมินและปรับการตัดสินใจใหม่ได้ การเปลี่ยนแปลงนี้ต้องนำไปประเมิน ไม่ใช่หยุดงานถาวรโดยอ้างว่าความเสี่ยงที่ยอมรับแล้วเปลี่ยนไม่ได้')
why(594,'Acceptance is an informed authorized retention decision and can coexist with safeguards.',['NIST-30'])
r(594,'D','Risk acceptance is an informed, authorized decision to retain exposure. It can coexist with safeguards; it does not describe sharing covered financial losses with an insurer.','Risk Acceptance คือการตัดสินใจรับความเสี่ยงไว้อย่างมีข้อมูลและมีอำนาจอนุมัติ ซึ่งใช้ร่วมกับมาตรการอื่นได้ ไม่ใช่การแบ่งภาระความเสียหายที่คุ้มครองให้บริษัทประกัน')
why(595,'Restore current-vendor qualifier from English without broadening the claim to every possible safeguard.',['entry-EN'])
# Exact Thai qualifier is inserted before the existing vendor-control claim after checking the entry wording.
rep(595,'question_th','ไม่มีมาตรการควบคุมใดของผู้ขายที่รัดกุมเพียงพอ','มาตรการควบคุมที่ผู้ขายมีอยู่ในปัจจุบันยังไม่รัดกุมเพียงพอ')

why(599,'Procedure means operational steps, not exclusively menu clicks or commands.',['outline-1.3','entry-EN'])
r(599,'C',th='Procedure ระบุลำดับขั้นตอนปฏิบัติงาน ไม่ใช่เกณฑ์ข้อกำหนดทางเทคนิคภาคบังคับที่เอกสารนี้กำหนด')
why(602,'Creating a backup differs from restoring data as a corrective action.',['NIST-34'])
# Flat-only mismatch is corrected explicitly below.
rep(602,'explanation_th','เช่น การสำรองข้อมูล','เช่น การกู้คืนข้อมูลจากสำเนาสำรอง')
why(599,'Procedure means operational steps rather than exclusively interface actions.',['entry-EN','outline-1.3'])
rep(599,'explanation_th','ขั้นตอนการคลิกเมนูหรือคำสั่งเป็นลำดับทีละขั้น','ลำดับขั้นตอนการปฏิบัติงาน')
why(604,'Remove exact option-label cue while preserving all instructions and the knowledge target.',['entry-TH','outline-1.4'])
rep(604,'question','posted directive','posted notice')
why(605,'Defense in depth reduces single-control dependence; it cannot guarantee no compromise after any single failure.',['outline-1.4'])
put(605,['short_explanation_en'],'Defense in depth uses complementary layers to reduce reliance on a single control; effectiveness still depends on their design, operation and shared dependencies.')
why(606,'Restore verified-update qualifier from the English stem.',['entry-EN'])
rep(606,'question_th','หมั่นลงแพตช์ความมั่นคงปลอดภัย','หมั่นลงแพตช์ความมั่นคงปลอดภัยของระบบปฏิบัติการที่ผ่านการตรวจสอบแล้ว')
why(607,'Acceptance does not waive investigation and due care is not confined to a subsequent stage.',['NIST-30','outline-1.5'])
r(607,'B',en='Due Care is taking prudent protective actions in the circumstances; this question instead describes investigating vendor risks and controls.')
r(607,'D',en='Risk acceptance is an informed, authorized decision to retain assessed exposure; it does not name the vendor-investigation activity described here.')

# NEXT_SAFE_BATCH
why(608,'Early GRC involvement identifies constraints; it cannot guarantee on-time compliant delivery. Keyed regulatory-alignment wording remains a separate substantive proposal.',['NIST-CSF-GV'])
aux(608,'example','An integrated GRC committee reviews proposed cloud architecture early in Agile work. Identified privacy or compliance constraints inform user stories and may require design or delivery-plan changes.','คณะกรรมการ GRC ทบทวนสถาปัตยกรรม Cloud ที่เสนอตั้งแต่ต้นงาน Agile ข้อจำกัดด้านความเป็นส่วนตัวหรือการปฏิบัติตามข้อกำหนดที่พบใช้ประกอบ User story และอาจทำให้ต้องปรับ Design หรือแผนส่งมอบ')
why(609,'Tools can support more than telemetry; software procurement alone neither removes applicable duties nor designates universal acceptance authority.',['NIST-CSF-GV'])
c(609,'The organization retains strategic oversight and accountability for its cybersecurity decisions. GRC tools can support evidence, reporting and workflows, but buying software does not replace assigned governance roles or decision authority.','องค์กรยังต้องกำกับดูแลเชิงกลยุทธ์และรับผิดชอบต่อการตัดสินใจด้านความปลอดภัยของตน เครื่องมือ GRC ช่วยจัดการหลักฐาน รายงาน และกระบวนงานได้ แต่การซื้อซอฟต์แวร์ไม่ได้แทนบทบาทกำกับดูแลหรืออำนาจตัดสินใจที่ได้รับมอบหมาย')
r(609,'A','Buying software does not itself transfer or remove the organization’s applicable legal, regulatory or contractual obligations. Those duties must be assessed under the relevant requirements.','การซื้อซอฟต์แวร์ไม่ได้ถ่ายโอนหรือยกเลิกหน้าที่ตามกฎหมาย กฎกำกับ หรือสัญญาที่ใช้กับองค์กรด้วยตัวเอง ต้องประเมินหน้าที่เหล่านั้นตามข้อกำหนดที่เกี่ยวข้อง')
r(609,'C','The scenario assigns no final business-risk acceptance authority to the algorithm. Acceptance must follow the organization’s designated decision authority and limits.','โจทย์ไม่ได้มอบอำนาจยอมรับความเสี่ยงทางธุรกิจขั้นสุดท้ายให้อัลกอริทึม การยอมรับต้องเป็นไปตามผู้มีอำนาจและขอบเขตที่องค์กรกำหนด')
aux(609,'exam_tip','Check the assigned governance and decision roles. Automation can support their work; procurement alone does not remove organizational oversight.','ตรวจบทบาทกำกับดูแลและอำนาจตัดสินใจที่ได้รับมอบหมาย ระบบอัตโนมัติช่วยงานได้ แต่การจัดซื้อเพียงอย่างเดียวไม่ได้ยกเลิกการกำกับดูแลขององค์กร')
why(610,'Do not infer HIPAA exclusion or total compliance from a department name; use the explicitly scoped assessment example.',['NIST-CSF-GV','outline-1.3'])
aux(610,'example','A defined assessment checks access-review evidence for one patient-record service. A separate warehouse application outside that assessment suffers an outage. The scoped result did not establish the security of the unassessed application.','การประเมินที่กำหนดขอบเขตตรวจหลักฐานทบทวนสิทธิ์ของบริการเวชระเบียนหนึ่งระบบ แอปคลังสินค้าที่อยู่นอกการประเมินนั้นหยุดทำงาน ผลตรวจในขอบเขตไม่ได้ยืนยันความปลอดภัยของแอปที่ไม่ได้ประเมิน')
why(612,'Restore fiscal month-end processing qualifier rather than substituting payroll day-end.',['entry-EN'])
# Exact stem replacement below.
why(613,'Transfer concerns sharing exposure under arrangements, not automatically outsourcing all operational management. Restore sufficient-isolation qualifier.',['NIST-30','entry-EN'])
r(613,'C',en='Risk transfer or sharing allocates covered financial exposure through arrangements such as insurance or contractual indemnification. Outsourcing operations alone does not establish that allocation, and transfer does not itself retire the asset.')
why(615,'Technical disaster recovery supports business continuity; equipment root-cause work need not be assigned a universal response phase. Correct the withdrawal-form example.',['NIST-34'])
r(615,'B','Restoring databases and operating systems is the offered technical recovery task. It can support the broader business-continuity objective, but C most directly describes continuing essential customer operations.','การกู้ฐานข้อมูลและระบบปฏิบัติการเป็นงานกู้คืนทางเทคนิคที่เสนอ ซึ่งสนับสนุนความต่อเนื่องทางธุรกิจได้ แต่ข้อ C อธิบายการคงงานบริการลูกค้าที่จำเป็นได้ตรงที่สุด')
r(615,'D','Investigating why equipment failed can inform corrective action, but does not itself maintain the customer operations asked about.','การสืบหาสาเหตุที่อุปกรณ์ล้มเหลวช่วยวางแผนแก้ไขได้ แต่ไม่ได้รักษาการดำเนินงานบริการลูกค้าที่โจทย์ถามด้วยตัวเอง')
aux(615,'example','Following an earthquake, a bank uses approved temporary teller stations and manual transaction records to continue permitted cash withdrawals, while its DRP restores the required banking technology.','หลังแผ่นดินไหว ธนาคารใช้จุดบริการชั่วคราวและบันทึกธุรกรรมด้วยมือที่อนุมัติเพื่อให้บริการถอนเงินที่อนุญาตต่อไป ขณะที่แผน DRP กู้คืนเทคโนโลยีธนาคารที่จำเป็น')
why(616,'BIA determines unmet priorities before offered investments; site labels do not prove near-zero recovery, and testing sequencing/cost claims must be bounded.',['NIST-34'])
r(616,'A','Selecting a site before identifying recovery priorities does not resolve the competing business needs. A hot-site label alone establishes neither required nor achievable recovery time.','การเลือกสถานที่ก่อนระบุลำดับกู้คืนไม่ได้ตัดสินความต้องการธุรกิจที่ขัดกัน ชื่อ Hot site เพียงอย่างเดียวไม่ยืนยันเวลาที่ต้องการหรือเวลาที่ทำได้จริง')
r(616,'C','A full-scale failover exercise does not substitute for establishing these missing business priorities and dependencies. Such an exercise needs approved objectives and safety arrangements; this is not a universal prohibition on testing existing plans.','การฝึก Failover เต็มรูปแบบไม่ได้แทนการกำหนดลำดับธุรกิจและความพึ่งพาที่ขาดอยู่ การฝึกต้องมีวัตถุประสงค์และการจัดการความปลอดภัยที่อนุมัติ ไม่ใช่ข้อห้ามสากลในการทดสอบแผนที่มีอยู่')
r(616,'D','Blanket replication selects a technical solution before establishing which recovery needs and dependencies it must satisfy. The stem supplies no cost evidence proving that every such investment is wasteful.','การทำ Replication ทุกระบบเป็นการเลือกเทคโนโลยีก่อนกำหนดความต้องการกู้คืนและความพึ่งพาที่ต้องตอบ โจทย์ไม่มีข้อมูลต้นทุนที่พิสูจน์ว่าการลงทุนทุกกรณีสิ้นเปลือง')
why(617,'RPO is a target loss window/recoverable point, not the last backup itself. Apply the particular SLA rather than asserting all SLAs use hours.',['NIST-34'])
r(617,'D','This SLA specifies a 4-hour RTO and a 2-hour RPO. Meeting a calendar business-day boundary does not satisfy those particular limits.','SLA นี้กำหนด RTO 4 ชั่วโมงและ RPO 2 ชั่วโมง การกู้ได้ภายในวันทำการไม่ได้ทำให้ผ่านขีดจำกัดเฉพาะสองค่านี้')
aux(617,'exam_tip','RTO is the target recovery duration; RPO specifies the target recoverable point or maximum acceptable data-loss window. Compare actual recovery and retained data against those targets.','RTO คือระยะเวลากู้คืนเป้าหมาย ส่วน RPO คือจุดเวลาข้อมูลที่ต้องกู้กลับได้หรือช่วงข้อมูลสูญหายสูงสุดที่ยอมรับได้ เปรียบเทียบผลกู้คืนและข้อมูลที่เหลือจริงกับเป้าหมายเหล่านี้')

# NEXT_SAFE_BATCH_2
why(612,'Restore the English fiscal month-end processing context.',['entry-EN'])
rep(612,'question_th','ในวันสิ้นงวดการจ่ายเงินเดือนประจำเดือน','ในช่วงประมวลผลปิดงวดบัญชีสิ้นเดือน')
why(613,'Restore sufficient rather than complete isolation qualifier.',['entry-EN'])
rep(613,'question_th','การแยกเซกเมนต์เครือข่ายไม่สามารถทำได้อย่างสมบูรณ์','การแยกเซกเมนต์เครือข่ายไม่สามารถลดการเปิดรับความเสี่ยงได้เพียงพอ')
why(618,'Backup cadence cannot be judged adequate without recovery requirements; tape damage is possible rather than guaranteed identical.',['NIST-34'])
r(618,'B','Hourly copying does not protect copies from the shared physical hazard. Whether that interval meets data-loss needs requires the recovery requirements; the demonstrated failure is co-location.','การสำรองทุกชั่วโมงไม่ได้ปกป้องสำเนาจากภัยทางกายภาพร่วม ความเหมาะสมของช่วงเวลาต้องเทียบข้อกำหนดการสูญหายของข้อมูล ส่วนปัญหาที่โจทย์แสดงคือการเก็บร่วมสถานที่')
r(618,'C','Changing the medium alone does not remove the shared flood exposure. Tape in an unprotected location can also be damaged; actual protection and recovery usability need assessment.','การเปลี่ยนสื่อเพียงอย่างเดียวไม่ลบความเสี่ยงน้ำท่วมร่วม เทปในที่ที่ไม่มีการป้องกันก็เสียหายได้ ต้องประเมินการป้องกันจริงและความสามารถนำกลับมากู้คืน')
why(620,'Job completion reports do not prove recoverability. Remove unsupported frequency, universal software limits and misattributed nonexistent-backup rule.',['NIST-34'])
c(620,'The reports show reported backup-job completion, not demonstrated restoration of the required service and its dependencies. Restore tests and plan exercises provide additional evidence of recoverability under the tested conditions.','รายงานแสดงสถานะเสร็จของงานสำรอง ไม่ได้แสดงการกู้บริการและส่วนที่พึ่งพากลับมาใช้งานจริง การทดสอบ Restore และซ้อมแผนให้หลักฐานเพิ่มเติมเรื่องความสามารถกู้คืนภายใต้เงื่อนไขที่ทดสอบ')
put(620,['short_explanation_en'],'Reported backup completion does not demonstrate service recovery; verify restoration and required dependencies through appropriate tests.')
r(620,'A','Backup status alone does not validate the recovery plan. Corruption, unavailable keys or missing dependencies can prevent restoration unless addressed and tested.','สถานะสำรองเพียงอย่างเดียวไม่ยืนยันว่าแผนกู้คืนใช้ได้ ข้อมูลเสีย กุญแจที่ไม่พร้อม หรือส่วนที่พึ่งพาซึ่งขาดไปอาจทำให้กู้ไม่สำเร็จหากไม่จัดการและทดสอบ')
r(620,'C','Some products support automated recovery tests, but no vendor obligation or performed validation is established here. Product capability does not replace evidence that this organization can recover.','ผลิตภัณฑ์บางชนิดทดสอบกู้คืนอัตโนมัติได้ แต่โจทย์ไม่ได้กำหนดหน้าที่ผู้ขายหรือยืนยันว่าได้ทดสอบแล้ว ความสามารถผลิตภัณฑ์ไม่แทนหลักฐานว่าองค์กรนี้กู้คืนได้')
r(620,'D','The supplied facts establish missing recovery validation, not the legal elements of criminal fraud or automatic invalidation of policies.','ข้อเท็จจริงที่ให้มายืนยันว่าขาดการตรวจยืนยันการกู้คืน ไม่ได้ยืนยันองค์ประกอบความผิดฉ้อฉลหรือทำให้นโยบายเป็นโมฆะโดยอัตโนมัติ')
aux(620,'exam_tip','An untested backup may exist, but its recoverability has not been demonstrated. Test restoration, keys and dependencies under relevant recovery conditions.','สำเนาสำรองที่ยังไม่ทดสอบอาจมีอยู่จริง แต่ยังไม่แสดงว่ากู้คืนได้ ควรทดสอบการ Restore กุญแจ และส่วนที่พึ่งพาภายใต้เงื่อนไขกู้คืนที่เกี่ยวข้อง')
why(621,'Leadership behavior can reinforce culture; extra training alone does not address the stated leadership pattern, and imitation is not guaranteed.',['NIST-CSF-GV','outline-2.3'])
r(621,'B','More modules alone do not directly address the demonstrated executive bypass and ridicule of security rules; visible leadership compliance addresses that cause.','การเพิ่มบทเรียนเพียงอย่างเดียวไม่แก้พฤติกรรมผู้บริหารที่ข้ามและล้อเลียนกฎตามโจทย์ การปฏิบัติตามให้เห็นเป็นแบบอย่างแก้สาเหตุนั้นได้ตรงกว่า')
aux(621,'example','A CEO visibly follows the applicable badge and MFA requirements and supports appropriate identity checks. This can reinforce expected employee behavior rather than guarantee identical conduct.','ซีอีโอปฏิบัติตามข้อกำหนดบัตรและ MFA ที่ใช้กับตนให้เห็น และสนับสนุนการตรวจตัวตนที่เหมาะสม สิ่งนี้ช่วยเสริมพฤติกรรมที่คาดหวังได้ แต่ไม่รับประกันว่าพนักงานทุกคนจะทำเหมือนกัน')
why(622,'Preserve the attacker pretext and grammatical emphasis; replace unsupported exam-frequency shortcut with evidence-based mechanism reasoning.',['entry-EN','outline-2.3'])
rep(622,'question','PRIMARY manipulating','primarily manipulating')
aux(622,'exam_tip','Identify the mechanism in the facts: the claimed executive position supplies authority pressure, and the short deadline supplies urgency. Do not infer an answer from an alleged exam frequency.','พิจารณากลไกจากข้อเท็จจริง ตำแหน่งผู้บริหารที่อ้างสร้างแรงกดดันด้านอำนาจ ส่วนเส้นตายสั้นสร้างความเร่งด่วน ไม่ควรเลือกคำตอบจากการอ้างความถี่ของข้อสอบ')
why(623,'Whaling is an executive-targeted subtype of spear phishing and phishing, not evidence that all phishing is untargeted bulk email.',['MITRE-1566'])
r(623,'B','Phishing is the broader family and can include targeted attacks. For the explicitly personalized senior-executive target, whaling is the most specific offered description.','Phishing เป็นกลุ่มกว้างที่รวมการโจมตีเจาะจงเป้าหมายได้ สำหรับการปรับข้อความเจาะจงผู้บริหารระดับสูงตามโจทย์ Whaling เป็นคำอธิบายที่เฉพาะที่สุดในตัวเลือก')
aux(623,'exam_tip','Distinguish specificity: phishing is the broader family, spear phishing is targeted, and whaling targets high-profile senior executives. Channel and target are separate features.','แยกระดับความเฉพาะ Phishing เป็นกลุ่มกว้าง Spear phishing เจาะจงเป้าหมาย และ Whaling เจาะผู้บริหารระดับสูง ช่องทางและกลุ่มเป้าหมายเป็นคนละคุณลักษณะ')

# NEXT_SAFE_BATCH_3
why(621,'Completion rate is participation, not a test-pass score; preserve administrative-credential sharing scope.',['entry-EN'])
rep(621,'question_th','อัตราการผ่านการอบรม','อัตราการเรียนจบการอบรม')
rep(621,'question_th','แบ่งปันรหัสผ่าน','แบ่งปันข้อมูลยืนยันตัวตนของบัญชีผู้ดูแล')
why(622,'Thai must retain the same fictional regulatory-nondisclosure pretext as English; it is an attacker claim, not a legal rule.',['entry-EN'])
rep(622,'question_th','เนื่องจากติดสัญญารักษาความลับทางธุรกิจ','โดยอ้างว่าการพูดคุยนั้นละเมิดข้อกำหนดไม่เปิดเผยข้อมูลของหน่วยงานกำกับ')
why(624,'Spear phishing is not exclusively email and baiting is not exclusively physical media; reject the specific absent mechanisms instead.',['MITRE-1566.004','entry-options'])
r(624,'C','Spear phishing can use different channels, including voice. This offered pair also specifies watering-hole redirection, which is absent; the stated voice call and false IT role match vishing and pretexting.','Spear phishing ใช้ได้หลายช่องทางรวมถึงเสียง แต่ตัวเลือกคู่นี้ยังระบุการชักนำผ่าน Watering hole ซึ่งไม่มีในโจทย์ การโทรเสียงและอ้างบทบาท IT ปลอมตรงกับ Vishing และ Pretexting')
r(624,'D','Baiting can involve different lures. This option specifically requires a USB-media lure, which the telephone scenario does not contain.','Baiting ใช้สิ่งล่อได้หลายแบบ แต่ตัวเลือกนี้ระบุสิ่งล่อผ่านสื่อ USB โดยเฉพาะ ซึ่งไม่มีในสถานการณ์โทรศัพท์นี้')
aux(624,'example','Vishing with pretexting: a caller falsely claims to be Officer Smith from fraud prevention and asks for a verification code. Smishing: a deceptive SMS claims a bank card is suspended and supplies a link.','Vishing ร่วมกับ Pretexting: ผู้โทรอ้างเท็จว่าเป็นเจ้าหน้าที่ Smith ฝ่ายป้องกันการฉ้อโกงและขอรหัสยืนยัน ส่วน Smishing คือ SMS ลวงว่าบัตรธนาคารถูกระงับพร้อมส่งลิงก์')
aux(624,'exam_tip','Separate channel, targeting and pretext: voice phishing is vishing, SMS phishing is smishing, targeted phishing is spear phishing, and a fabricated role or story can supply pretexting.','แยกช่องทาง กลุ่มเป้าหมาย และเรื่องอ้าง การหลอกผ่านเสียงคือ Vishing ผ่าน SMS คือ Smishing การเจาะจงเป้าหมายคือ Spear phishing และบทบาทหรือเรื่องราวที่แต่งขึ้นใช้เป็น Pretexting ได้')
why(625,'NIST rejects arbitrary periodic rotation but requires change on compromise. A longer reused stolen password remains replayable; a changed secret is a different situation.',['NIST-63B-3.1.1.2'])
r(625,'B','Arbitrary calendar-based rotation does not itself prevent reuse of compromised credentials. NIST distinguishes such periodic changes from required changes when compromise is evidenced.','การเปลี่ยนตามปฏิทินโดยไม่มีเหตุไม่ได้ป้องกันการใช้ข้อมูลที่รั่วซ้ำด้วยตัวเอง NIST แยกการเปลี่ยนตามรอบออกจากการเปลี่ยนที่ต้องทำเมื่อมีหลักฐานว่าถูกเปิดเผย')
r(625,'C','A longer password that is still reused and obtained by the attacker remains replayable. Replacing a compromised secret is important, but length alone does not add the distinct factor asked about.','รหัสผ่านที่ยาวขึ้นแต่ยังใช้ซ้ำและตกถึงผู้โจมตียังถูกนำมาใช้ซ้ำได้ การเปลี่ยนความลับที่รั่วสำคัญ แต่ความยาวเพียงอย่างเดียวไม่ได้เพิ่มปัจจัยต่างประเภทที่โจทย์ต้องการ')
aux(625,'exam_tip','NIST distinguishes arbitrary periodic expiry from changes required on evidence of compromise. Use distinct-factor authentication where required and screen new passwords against known compromised values.','NIST แยกการหมดอายุตามรอบโดยไม่มีเหตุออกจากการเปลี่ยนเมื่อมีหลักฐานว่ารั่ว ใช้การพิสูจน์ด้วยปัจจัยต่างประเภทตามข้อกำหนดและตรวจรหัสผ่านใหม่เทียบค่าที่ทราบว่ารั่ว')
why(631,'Restore attendance versus score parity and avoid claiming inevitable filtering failure or causal improvement without comparison.',['entry-EN','NIST-55'])
r(631,'A','Eliminating training removes a complementary human safeguard. Technical filtering can miss deceptive messages; its presence does not demonstrate that employees can respond safely.','การยกเลิกการอบรมตัดมาตรการด้านคนที่ช่วยเสริมกัน ตัวกรองอาจพลาดข้อความลวงได้ และการมีตัวกรองไม่ได้แสดงว่าพนักงานตอบสนองได้อย่างปลอดภัย')
aux(631,'example','A driver completes a four-hour online safety course with full attendance, yet becomes distracted by a smartphone message while driving the next week. Attendance alone did not demonstrate safe behavior.','คนขับเรียนหลักสูตรความปลอดภัยออนไลน์สี่ชั่วโมงครบทุกช่วง แต่สัปดาห์ถัดมาวอกแวกเพราะข้อความมือถือขณะขับรถ การเข้าเรียนครบไม่ได้ยืนยันพฤติกรรมปลอดภัยด้วยตัวเอง')
why(632,'Warning indicators concern possible future harm; a warning light may indicate a fault already present.',['ISACA-KRI'])
aux(632,'example','Speed relative to an agreed travel target can illustrate a performance measure. A low-fuel indication can warn of a possible later stall if no action is taken; neither instrument is intrinsically a KPI or KRI without its decision context.','ความเร็วเทียบเป้าหมายการเดินทางที่ตกลงไว้อธิบายตัวชี้วัดผลงานได้ ส่วนระดับน้ำมันต่ำเตือนโอกาสเครื่องหยุดในภายหลังหากไม่ดำเนินการ เครื่องมือใดจะเป็น KPI หรือ KRI ขึ้นกับบริบทการตัดสินใจ')
why(633,'Match the strategic decision rather than stereotype all directors or universally prohibit incident alerts.',['NIST-CSF-GV'])
r(633,'B','The offered minute-by-minute operational telemetry does not by itself provide the prioritized business-impact and capital-planning synthesis requested for this briefing.','Telemetry ปฏิบัติการรายนาทีที่เสนอยังไม่ได้สังเคราะห์ลำดับผลกระทบธุรกิจและการวางแผนลงทุนที่การบรรยายสรุปนี้ต้องการด้วยตัวเอง')
r(633,'D','Individual malware alerts alone do not supply the requested quarterly strategic synthesis. Appropriate major-incident escalation can still be part of board oversight.','การแจ้งมัลแวร์รายเหตุเพียงอย่างเดียวไม่ได้ให้ภาพสรุปเชิงกลยุทธ์รายไตรมาสที่ต้องการ การส่งต่อเหตุร้ายแรงที่เหมาะสมยังเป็นส่วนหนึ่งของการกำกับดูแลของบอร์ดได้')
why(635,'Financial sharing does not universally transfer all duties; acceptance can coexist with controls and mitigation concerns likelihood or impact.',['NIST-30','NIST-CSF-GV'])
c(635,'Risk transfer or sharing allocates covered financial exposure to another party, for example through insurance or contractual indemnification. Coverage and exclusions matter; applicable organizational duties do not disappear merely because a policy is bought.','Risk Transfer หรือ Sharing แบ่งภาระความเสียหายทางการเงินตามความคุ้มครองให้ผู้อื่น เช่น ผ่านประกันหรือข้อสัญญาชดเชย ต้องดูความคุ้มครองและข้อยกเว้น หน้าที่ที่ใช้กับองค์กรไม่ได้หายไปเพียงเพราะซื้อกรมธรรม์')
r(635,'C','Mitigation applies controls to reduce the likelihood or impact of the assessed risk. The stated insurance purchase instead shares covered financial exposure.','Mitigation ใช้มาตรการลดโอกาสหรือผลกระทบของความเสี่ยงที่ประเมิน ส่วนการซื้อประกันตามโจทย์แบ่งภาระความเสียหายทางการเงินที่คุ้มครอง')
r(635,'D','Acceptance is informed, authorized retention of exposure and can coexist with safeguards or insurance. It does not name the financial-sharing action described here.','Acceptance คือการรับความเสี่ยงไว้อย่างมีข้อมูลและมีอำนาจ ซึ่งใช้ร่วมกับมาตรการหรือประกันได้ ไม่ใช่ชื่อของการแบ่งภาระทางการเงินที่โจทย์ระบุ')
aux(635,'exam_tip','Distinguish sharing covered financial losses from reducing technical exposure or accepting remaining risk. Check contractual coverage and retained organizational responsibilities.','แยกการแบ่งภาระความเสียหายที่คุ้มครองออกจากการลดการเปิดรับทางเทคนิคหรือยอมรับความเสี่ยงคงเหลือ ตรวจความคุ้มครองตามสัญญาและหน้าที่ที่องค์กรยังมี')

# NEXT_SAFE_BATCH_4
why(636,'A department title alone does not assign risk authority; preserve low-likelihood versus low-risk distinction in the example.',['entry-EN','NIST-CSF-GV'])
aux(636,'example','If authorized under the hospital’s risk-governance rules, a radiology head can accept documented low-likelihood zero-day exposure on an encrypted PACS server after verified MFA and EDR, or escalate if outside the assigned limit.','หากได้รับอำนาจตามกฎกำกับความเสี่ยงของโรงพยาบาล หัวหน้ารังสีวิทยายอมรับความเสี่ยง Zero-day ที่มีโอกาสเกิดต่ำซึ่งบันทึกไว้บน PACS ที่เข้ารหัสหลังตรวจ MFA และ EDR แล้วได้ หรือต้องส่งต่อหากเกินขอบเขตอำนาจ')
why(638,'Reject the offered disruptive test against the stated objective, not a universal mandatory exercise sequence.',['NIST-34'])
r(638,'B','The offered full-interruption test intentionally stops primary operations, contrary to this initial low-disruption discussion objective. Exercise choice and safeguards depend on approved goals and risk.','การทดสอบตัดระบบจริงที่เสนอจงใจหยุดงานหลัก จึงไม่ตรงเป้าหมายการอภิปรายเริ่มต้นที่กระทบน้อยในโจทย์ การเลือกการฝึกและมาตรการป้องกันขึ้นกับเป้าหมายและความเสี่ยงที่อนุมัติ')
why(640,'Phishing is broader than email; separate channel and targeting dimensions.',['MITRE-1566'])
aux(640,'exam_tip','Phishing is a broader family: voice delivery is vishing and SMS delivery is smishing; spear phishing is targeted and whaling targets senior executives. Describe the channel and target actually stated.','Phishing เป็นกลุ่มกว้าง การส่งผ่านเสียงคือ Vishing และผ่าน SMS คือ Smishing ส่วน Spear phishing เจาะจงเป้าหมาย และ Whaling เจาะผู้บริหารระดับสูง พิจารณาช่องทางและเป้าหมายที่โจทย์ระบุจริง')
why(641,'Targeted phishing is not exclusively email. Preserve the actual tailored-email case without inventing an evil-twin mechanism or changing the example transaction.',['MITRE-1566.004','entry-EN'])
c(641,'Spear phishing tailors deceptive communications to a particular individual, team or organization. The researched, personalized email in this scenario fits that targeted form of phishing; not all phishing is generic bulk mail.','Spear phishing ปรับการสื่อสารลวงให้เข้ากับบุคคล ทีม หรือองค์กรเฉพาะ อีเมลที่สืบข้อมูลและปรับให้ตรงผู้รับในโจทย์จึงตรงกับ Phishing แบบเจาะจง ไม่ใช่ว่า Phishing ทุกชนิดต้องเป็นอีเมลหว่านแห')
r(641,'A','Voice attacks can also be targeted. This offered description specifies automated voice interaction, whereas the stated attack uses a personalized email.','การโจมตีเสียงก็เจาะจงเป้าหมายได้ แต่คำอธิบายในตัวเลือกนี้ระบุการโต้ตอบด้วยเสียงอัตโนมัติ ส่วนโจทย์เป็นอีเมลที่ปรับเฉพาะผู้รับ')
aux(641,'example','An attacker researches a school accountant’s vendor contact and sends an email impersonating that vendor with an updated invoice. The researched targeting makes this spear phishing.','ผู้โจมตีสืบค้นคู่ค้าที่เจ้าหน้าที่บัญชีโรงเรียนติดต่อ แล้วส่งอีเมลสวมรอยคู่ค้าพร้อมใบแจ้งหนี้ที่ปรับปรุงใหม่ การสืบข้อมูลเพื่อเจาะเป้าหมายนี้เป็น Spear phishing')
aux(641,'exam_tip','Use the stated targeting and channel evidence. Spear phishing is personalized targeting within the broader phishing family; whaling is the senior-executive subtype.','ใช้หลักฐานเรื่องเป้าหมายและช่องทางตามโจทย์ Spear phishing เป็นการปรับข้อความเจาะเป้าหมายในกลุ่ม Phishing ส่วน Whaling เป็นชนิดที่เจาะผู้บริหารระดับสูง')
why(642,'Credential stuffing replays stolen credential pairs rather than random password guessing.',['NIST-63B'])
r(642,'D',th='Credential Stuffing คือการนำคู่ชื่อผู้ใช้และรหัสผ่านที่รั่วไหลมาทดลองใช้กับบริการออนไลน์อื่น ไม่ใช่การสุ่มเดารหัสผ่านใหม่')
why(643,'Unique passwords limit same-pair replay, not every cross-system compromise; retain only verified source attribution.',['NIST-63B'])
aux(643,'example','An employee uses an approved manager to generate distinct random 20-character passwords for personal social media and corporate email. A stolen password from one service then does not supply the other service’s password; other takeover paths still require controls.','พนักงานใช้ตัวจัดการที่อนุมัติสร้างรหัสผ่านสุ่ม 20 ตัวอักษรต่างกันสำหรับโซเชียลส่วนตัวและอีเมลบริษัท รหัสที่ขโมยจากบริการหนึ่งจึงไม่ใช่รหัสของอีกบริการ แต่ช่องทางยึดบัญชีแบบอื่นยังต้องมีมาตรการ')
put(643,['short_explanation_en'],'Distinct passwords limit replay of a breached password across services; an approved password manager can support this practice.')
aux(643,'exam_tip','NIST password guidance distinguishes arbitrary periodic changes from changes required on compromise and supports distinct passwords across services. A password manager can help manage those secrets.','แนวทางรหัสผ่านของ NIST แยกการเปลี่ยนตามรอบโดยไม่มีเหตุออกจากการเปลี่ยนเมื่อรั่ว และสนับสนุนรหัสผ่านต่างกันระหว่างบริการ ตัวจัดการรหัสผ่านช่วยดูแลความลับเหล่านี้ได้')

# NEXT_SAFE_BATCH_5
why(644,'KRIs can be leading, current or lagging. This stem specifically asks for forward-looking exposure; historical data is not universally nonpredictive.',['ISACA-KRI','NIST-55'])
c(644,'KRIs communicate risk exposure and can be leading, current or lagging depending on use. This question specifically asks for forward-looking warning: increasing overdue critical flaws on exposed systems is the offered condition relevant to possible exploitation, not proof that compromise is imminent.','KRI สื่อสภาวะความเสี่ยงและเป็นแบบล่วงหน้า ปัจจุบัน หรือย้อนหลังได้ตามการใช้ โจทย์นี้ขอสัญญาณเตือนมองไปข้างหน้าโดยเฉพาะ สัดส่วนช่องโหว่วิกฤตที่ค้างบนระบบเปิดรับเป็นเงื่อนไขที่เกี่ยวข้องกับโอกาสถูกใช้โจมตี ไม่ใช่หลักฐานว่าจะถูกบุกรุกทันที')
r(644,'A','Past losses are historical outcomes. They can inform risk analysis, but this offered total does not directly show the current exposed condition requested here.','ความสูญเสียในอดีตเป็นผลย้อนหลังที่ช่วยวิเคราะห์ความเสี่ยงได้ แต่ยอดที่เสนอไม่ได้แสดงสภาวะเปิดรับปัจจุบันที่โจทย์ต้องการโดยตรง')
r(644,'D','Past administrative actions can inform analysis, but this offered count alone does not provide the forward-looking technical-exposure signal requested.','การดำเนินการทางบุคลากรในอดีตช่วยวิเคราะห์ได้ แต่จำนวนที่เสนอเพียงอย่างเดียวไม่ได้ให้สัญญาณการเปิดรับทางเทคนิคที่มองไปข้างหน้าตามคำถาม')
put(644,['short_explanation_en'],'For this forward-warning objective, exposed overdue critical flaws indicate a condition to assess; KRI classification is contextual rather than universally leading.')
aux(644,'example','An unexpected increase in failed MFA attempts can prompt investigation of a possible campaign. It is not by itself proof of credential stuffing, and legitimate changes or errors must also be considered.','ความพยายาม MFA ที่ล้มเหลวเพิ่มผิดปกติอาจนำไปตรวจ Campaign ที่เป็นไปได้ แต่ยังไม่พิสูจน์ว่าเป็น Credential stuffing ด้วยตัวเอง ต้องพิจารณาการเปลี่ยนแปลงที่ถูกต้องหรือข้อผิดพลาดด้วย')
aux(644,'exam_tip','Classify indicators by the decision they support: KPI concerns performance against objectives; KRI concerns risk exposure. Either may use historical observations; not every KRI is a leading predictor.','จัดประเภทตามการตัดสินใจที่สนับสนุน KPI เกี่ยวกับผลงานเทียบเป้าหมาย KRI เกี่ยวกับสภาวะความเสี่ยง ทั้งสองใช้ข้อมูลย้อนหลังได้ และ KRI ไม่จำเป็นต้องเป็นตัวทำนายล่วงหน้าทุกตัว')
why(645,'Match stated live-versus-periodic requirements without false spreadsheet capability or director-literacy claims.',['NIST-55','NIST-CSF-GV'])
c(645,'For the stated needs, a live security dashboard supports operational monitoring and a periodic scorecard supports comparison against governance targets. These are suitable uses, not exclusive formats reserved for particular job titles.','สำหรับความต้องการที่ระบุ Dashboard แบบสดช่วยเฝ้าระวังงานปฏิบัติการ และ Scorecard ตามรอบช่วยเปรียบเทียบกับเป้าหมายกำกับดูแล เป็นการใช้ที่เหมาะสม ไม่ใช่รูปแบบที่สงวนเฉพาะชื่อตำแหน่ง')
r(645,'B','The offered unencrypted spreadsheets do not establish the requested live monitoring and periodic target-based reporting, and their handling needs appropriate protection. Spreadsheets are not inherently incapable of automation or live data.','สเปรดชีตที่ไม่เข้ารหัสตามตัวเลือกยังไม่แสดงว่าจะตอบการเฝ้าระวังสดและรายงานเทียบเป้าหมายตามรอบที่ต้องการ และต้องป้องกันการจัดการข้อมูลอย่างเหมาะสม ไม่ใช่ว่าสเปรดชีตทำงานอัตโนมัติหรือใช้ข้อมูลสดไม่ได้โดยธรรมชาติ')
r(645,'C','Periodic scores alone do not supply the requested live incident view, and raw syslog alone lacks the requested governance synthesis. The issue is the decision format, not an assumption about directors’ technical literacy.','คะแนนตามรอบเพียงอย่างเดียวไม่ให้ภาพเหตุการณ์สดที่ต้องการ และ Syslog ดิบเพียงอย่างเดียวขาดภาพสรุปกำกับดูแลที่ขอ ปัญหาคือรูปแบบเพื่อการตัดสินใจ ไม่ใช่การสมมติว่ากรรมการอ่านเทคนิคไม่เป็น')
put(645,['short_explanation_en'],'For these stated requirements, use a live operational dashboard and a periodic target-based scorecard; select formats by the decisions they support.')
why(646,'Observed reporting behavior is not proof of improvement or culture/causality without comparison. MCQs may test judgment; implementation metrics can also be useful.',['NIST-55'])
c(646,'Reporting rate and latency directly observe employee responses in the simulation, making A the closest measure of the requested practical behavior. A single result alone does not prove improvement, a durable culture or that training caused a change; comparable repeated observations and context are needed.','อัตราและระยะเวลารายงานสังเกตการตอบสนองของพนักงานในสถานการณ์จำลองโดยตรง จึงทำให้ A ใกล้พฤติกรรมปฏิบัติที่ถามที่สุด ผลครั้งเดียวไม่ได้พิสูจน์ว่าดีขึ้น วัฒนธรรมยั่งยืน หรือการอบรมเป็นเหตุให้เปลี่ยน ต้องมีข้อมูลซ้ำที่เทียบกันได้และบริบท')
r(646,'C','Spam-block counts describe a technical filtering result rather than directly observing employee reporting behavior. The filtering service need not be a physical hardware appliance.','จำนวนสแปมที่บล็อกอธิบายผลการกรองทางเทคนิค ไม่ใช่การสังเกตพฤติกรรมรายงานของพนักงานโดยตรง และบริการกรองไม่จำเป็นต้องเป็นอุปกรณ์ Hardware')
r(646,'D','A multiple-choice assessment can test knowledge or judgment, but its immediate score does not directly demonstrate sustained behavior when handling messages at work.','ข้อสอบปรนัยทดสอบความรู้หรือการตัดสินใจได้ แต่คะแนนทันทีไม่ได้แสดงพฤติกรรมต่อเนื่องในการจัดการข้อความขณะทำงานโดยตรง')
aux(646,'example','A CISO compares reporting within ten minutes across repeated simulations with comparable populations and difficulty, checking response rates and context before describing a trend. A single percentage is not proof of improvement.','CISO เปรียบเทียบการรายงานภายในสิบนาทีจากการจำลองหลายครั้งที่กลุ่มและความยากเทียบกันได้ พร้อมตรวจอัตราตอบสนองและบริบทก่อนอธิบายแนวโน้ม ร้อยละครั้งเดียวไม่พิสูจน์ว่าดีขึ้น')
aux(646,'exam_tip','Match a measure to its intended question. Completion measures implementation; observed reporting measures behavior in the test. Both can be useful, but neither alone proves risk reduction or training causality.','เลือกตัววัดให้ตรงคำถาม การเรียนจบวัดการดำเนินกิจกรรม ส่วนการรายงานที่สังเกตวัดพฤติกรรมในการทดสอบ ทั้งสองมีประโยชน์ได้ แต่ไม่มีตัวใดพิสูจน์การลดความเสี่ยงหรือเหตุจากการอบรมเพียงลำพัง')
put(646,['short_explanation_en'],'Reporting rate and latency observe behavior in a simulation; comparable evidence is needed before claiming improvement or lasting culture change.')
why(675,'Port443 and allowed state do not establish payload encryption or application safety; keep the demonstrated inspection boundary.',['entry-stem','outline-4.2'])
c(675,'Header and connection-state checks do not establish whether application requests contain malicious instructions. Suitable authorized application-layer or endpoint validation is needed for that separate content-assurance goal.','การตรวจ Header และสถานะการเชื่อมต่อไม่ได้ยืนยันว่าคำขอแอปมีคำสั่งอันตรายหรือไม่ ต้องใช้การตรวจระดับแอปหรือ Endpoint ที่เหมาะสมและได้รับอนุญาตเพื่อประเมินเนื้อหาแยกต่างหาก')
r(675,'A','Changing a port number does not add the missing application-content inspection.','การเปลี่ยนหมายเลข Port ไม่ได้เพิ่มการตรวจเนื้อหาแอปที่ขาดอยู่')
put(675,['short_explanation_en'],'Allowed ports and established state do not establish the safety of application content.')
why(678,'Refer to explicitly approved configurations rather than an unqualified generation ranking.',['entry-stem'])
c(678,'This meets the approved compatibility exception, limits the scanner to its required gateway and retains the approved WPA3 configuration for workstations.','วิธีนี้ตรงข้อยกเว้นความเข้ากันได้ที่อนุมัติ จำกัดเครื่องสแกนให้เข้าถึง Gateway ที่จำเป็น และคงการตั้งค่า WPA3 ที่อนุมัติสำหรับเครื่องทำงาน')
why(679,'Clarify actual configured mode, consistent with existing Thai and reasoning; supported capability alone is not active configuration.',['entry-TH','entry-rationale'])
put(679,['options',3],'The supported authentication/encryption mode actually configured and the maintained firmware')

# FLAT_VARIANTS
def rr(i,l,lang):return next(v['text_'+lang] for v in bank[i]['explanation_detail']['incorrect'] if v['letter']==l)
def project(i,lang):
 q=bank[i];d=q['explanation_detail'];key='ABCD'[q['correct_idx']]
 lead=(f'Option {key} is correct. ' if lang=='en' else f'ข้อ {key} ถูกต้อง: ')+d['correct'][lang]
 return lead+'\n'+'\n'.join((f'Option {v["letter"]} is incorrect. ' if lang=='en' else f'- ข้อ {v["letter"]} ไม่ถูกต้อง: ')+v['text_'+lang] for v in d['incorrect'])
why(593,'Correct the parallel flat summary of the same insurance/reassessment point.',['NIST-30'])
rep(593,'explanation','Risk acceptance is not an indefinite exemption, insurance requires informed assessment, and operational changes require review rather than arbitrary termination.','Risk acceptance is not an indefinite exemption. Insurance can share covered losses but does not itself assess changed technical exposure. Reassess the change before choosing treatment rather than assuming that accepted risk can never be revised.')
why(594,'Correct the flat acceptance definition in both languages, retaining the other reasoning.',['NIST-30'])
rep(594,'explanation','Risk acceptance absorbs potential losses without additional safeguards or insurance.',rr(594,'D','en'))
why(607,'Flat risk-retention summary must not imply assessment is unnecessary.',['NIST-30'])
rep(607,'explanation','risk acceptance acknowledges and absorbs risk without requiring remediation.','risk acceptance is an informed, authorized decision to retain assessed exposure.')
why(635,'Apply the corrected transfer/mitigation/acceptance definitions consistently to the existing flat presentation.',['NIST-30'])
rep(635,'explanation','Risk Mitigation (Reduction) involves applying security controls (such as technical DDoS mitigation services or redundant hardware) to reduce the likelihood or technical severity of the threat.',rr(635,'C','en'))
rep(635,'explanation','Risk Acceptance involves retaining the residual risk without purchasing insurance or taking further remedial action when the risk falls within organizational tolerance.',rr(635,'D','en'))
rep(635,'explanation_th','การบรรเทาความเสี่ยงคือการติดตั้งระบบป้องกัน เช่น ระบบกรอง DDoS หรือระบบสำรอง เพื่อลดโอกาสหรือความรุนแรงทางเทคนิค',rr(635,'C','th'))
why(642,'Use replay of stolen pairs consistently in flat Thai.',['NIST-63B'])
rep(642,'explanation_th','Credential Stuffing คือการนำรหัสผ่านที่หลุดจากเว็บอื่นมาสุ่มล็อกอินเข้าระบบโดยอัตโนมัติ',rr(642,'D','th'))
why(643,'Align flat Thai accountability term with English rather than claiming shared passwords are a non-repudiation control.',['entry-EN'])
rep(643,'explanation_th','หลักการห้ามปฏิเสธความรับผิดชอบ (Non-repudiation)','หลักความรับผิดชอบที่ตรวจสอบผู้กระทำได้ (Accountability)')
for i,reason,refs in [
 (641,'Synchronize corrected targeted-phishing taxonomy in flat text; remove unsupported evil-twin inference while retaining all three option rejections.',['MITRE-1566.004']),
 (644,'Synchronize contextual KRI reasoning in flat text; remove false universal nonpredictiveness and imminent-compromise claim.',['ISACA-KRI','NIST-55']),
 (645,'Synchronize the bounded reporting-format reasoning in flat text without universal audience rules.',['NIST-55']),
 (646,'Synchronize observed-behavior versus demonstrated-improvement distinction and all distractor reasoning in flat text.',['NIST-55'])]:
 why(i,reason,refs)
 for lang,f in [('en','explanation'),('th','explanation_th')]:put(i,[f],project(i,lang))

# Final preservation constraints are checked before any production write.
for old in entry:
 q=bank[old['id']]
 for k in ['id','dom','correct_idx']:assert q[k]==old[k]
 assert set(q)==set(old) and len(q['options'])==len(q['options_th'])==4
 assert q['options_th']==old['options_th']
 if q['id']!=679:assert q['options']==old['options']
 assert q['id'] not in [614,627,619,629,630,637] or q==old

if __name__=='__main__':
 (OUT/'safe-corrections.json').write_text(json.dumps(changes,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 (OUT/'questions.expected.json').write_text(json.dumps(list(bank.values()),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 (OUT/'unmatched-flat.json').write_text(json.dumps(unmatched,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print(len(changes),'field edits staged on',len({c['id'] for c in changes}),'records; unmatched flat',len(unmatched))
