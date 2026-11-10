"""Complete held proposals. These records are never integrated by this script."""
import json,pathlib,copy
OUT=pathlib.Path(__file__).resolve().parent;ROOT=OUT.parents[2]
entry={q['id']:q for q in json.loads((OUT/'questions.entry.json').read_text(encoding='utf-8'))}
earlier=json.loads((ROOT/'artifacts/qa/question-bank-academic-remediation/ten-question-review.json').read_text(encoding='utf-8'))
drafts=json.loads((ROOT/'artifacts/qa/question-bank-academic-signoff/deferred-proposed-revisions.json').read_text(encoding='utf-8'))
result=[]
def project(q,lang):
 d=q['explanation_detail'];key='ABCD'[q['correct_idx']]
 return (f'Option {key} is correct. ' if lang=='en' else f'ข้อ {key} ถูกต้อง: ')+d['correct'][lang]+'\n'+'\n'.join((r['letter']+': ')+r['text_'+lang] for r in d['incorrect'])
def aux(q,k,en,th):q['explanation_detail'][k]=dict(en=en,th=th)
def wrong(q,letter,en,th):
 r=next(x for x in q['explanation_detail']['incorrect'] if x['letter']==letter);r.update(text_en=en,text_th=th)
for i in [614,627,619,629,630,637]:
 old=entry[i];q=copy.deepcopy(old)
 if i in [614,627]:
  previous=next(v for v in earlier if v['id']==i);q=copy.deepcopy(previous['proposed_after_record_not_applied'])
  rationale=previous['target_assessment'];source='NIST-30' if i==614 else 'NIST-55'
 else:
  previous=drafts[str(i)];q.update(question=previous['proposed_stem_en'],question_th=previous['proposed_stem_th'])
  q['explanation_detail']['correct']=dict(en=previous['proposed_correct_en'],th=previous['proposed_correct_th'])
  for n,r in enumerate(q['explanation_detail']['incorrect']):r.update(text_en=previous['wrong_en'][n],text_th=previous['wrong_th'][n])
  if i==629:q['options'][0]=previous['proposed_option_A_en'];q['options_th'][0]=previous['proposed_option_A_th']
  if i==630:q['options']=previous['proposed_options_en'];q['options_th']=previous['proposed_options_th']
  rationale=previous['target_change'];source='NIST-34' if i in [619,637] else 'NIST-55'
 if i==614:
  wrong(q,'B','Arithmetic on ordinal categories does not establish quantities with meaningful differences or ratios. Quantitative risk analysis can use estimated probabilities and consequences; monetary loss is one possible measure, not its sole definition.','การคำนวณหมวดเชิงอันดับไม่ได้ทำให้เป็นปริมาณที่มีช่วงห่างหรืออัตราส่วนมีความหมาย การวิเคราะห์เชิงปริมาณใช้ค่าประมาณความน่าจะเป็นและผลกระทบได้ ความเสียหายเป็นเงินเป็นตัววัดแบบหนึ่ง ไม่ใช่นิยามทั้งหมด')
  aux(q,'exam_tip','Distinguish descriptive categories, ordinal rankings and quantitatively meaningful estimates. Multiplying category numbers alone does not establish a financial loss estimate.','แยกหมวดพรรณนา อันดับตัวเลข และค่าประมาณเชิงปริมาณที่มีความหมาย การคูณเลขหมวดเพียงอย่างเดียวไม่ได้ทำให้เป็นค่าประมาณความเสียหายทางการเงิน')
  decision='D remains the most precise offered characterization. C in production is a metacomment rejecting straw alternatives rather than a competing method; its replacement is substantive distractor redesign.'
 if i==627:
  q['options'][2]='The count alone lacks the scope, exposure and business context needed to judge control effectiveness or risk trends.'
  q['options_th'][2]='จำนวนครั้งเพียงอย่างเดียวขาดขอบเขต สภาวะเปิดรับ และบริบทธุรกิจที่จำเป็นต่อการตัดสินประสิทธิผลของมาตรการหรือแนวโน้มความเสี่ยง'
  decision='C is best offered but its ambient-noise assertion is not proven; A/B/D are implausible in production. Prior draft improved distractors but left C overclaim intact; this complete proposal also fixes C.'
 if i==619:
  q['short_explanation_en']='The stated fixed infrastructure-only facility fits cold-site readiness; its achievable RTO requires separate validation.'
  aux(q,'example','A fixed alternate building has power, cooling and passive cabling but no installed recovery IT. It is classified by readiness; procurement, installation, data restoration and exercises determine achievable recovery.','อาคารสำรองอยู่กับที่มีไฟฟ้า ความเย็น และสายพาสซีฟ แต่ยังไม่ติดตั้ง IT กู้คืน จัดประเภทจากความพร้อม ส่วนการจัดหา ติดตั้ง กู้ข้อมูล และฝึกซ้อมเป็นสิ่งที่กำหนดเวลาที่ทำได้จริง')
  aux(q,'exam_tip','Do not infer fixed hours or days from site labels. This proposed item asks readiness classification, not proof of least-cost five-day recovery.','อย่าสรุปจำนวนชั่วโมงหรือวันตายตัวจากชื่อไซต์ ข้อเสนอใหม่นี้ถามประเภทความพร้อม ไม่ใช่หลักฐานการกู้ภายในห้าวันด้วยต้นทุนต่ำสุด')
  decision='C is a plausible readiness description, but original five-day compliance and least cost are unsupported. Proposal resolves readiness ambiguity by narrowing the decision; human must approve the target tradeoff.'
 if i==629:
  wrong(q,'B','Full service restoration is a different milestone from the explicitly defined completion of approved initial containment; this SLA does not define restoration as its endpoint.','การกู้คืนบริการเต็มรูปแบบเป็นคนละจุดวัดกับการจำกัดผลกระทบเบื้องต้นที่อนุมัติและเสร็จสิ้นตามนิยาม SLA นี้ไม่ได้ใช้การกู้คืนเต็มรูปแบบเป็นจุดสิ้นสุด')
  q['short_explanation_en']='Use the organization’s explicit start/end events and reporting population; one interval is not the period mean.'
  aux(q,'example','An alert at10:00 followed by completed approved isolation at10:12 yields one12-minute interval. The SLA mean requires all qualifying intervals in the reporting period; isolation alone does not establish complete eradication.','แจ้งเตือน10:00 และแยกเครื่องที่อนุมัติเสร็จ10:12 ให้ช่วงเวลาหนึ่งเหตุ12นาที ค่าเฉลี่ย SLA ต้องรวมช่วงเวลาที่เข้าเกณฑ์ตลอดรอบรายงาน การแยกเครื่องอย่างเดียวไม่ยืนยันว่ากำจัดภัยหมดแล้ว')
  aux(q,'exam_tip','Define the metric expansion, boundaries, units and cohort. Do not treat MTTR as one universal incident-response endpoint.','กำหนดชื่อเต็ม จุดเริ่ม/จบ หน่วย และกลุ่มที่วัด อย่าใช้ MTTR เป็นจุดสิ้นสุดการตอบสนองเดียวที่เป็นสากล')
  decision='A is conditionally defensible for a locally defined initial-response metric, not a universal MTTR/Respond endpoint. Proposal supplies missing local boundaries and mean definition, requiring human approval.'
 if i==630:
  q['short_explanation_en']='An asset-state percentage and an on-time finding-cohort percentage measure different populations and do not establish velocity.'
  aux(q,'example','At month end X=9200/10000=92% of managed workstations on the approved build. Y=84/100=84% of critical findings due that month fixed on time. Neither ratio gives average remediation days or closures per day.','สิ้นเดือน X=9200/10000=92% ของเครื่องที่จัดการซึ่งมีชุดแพตช์ที่อนุมัติ ส่วน Y=84/100=84% ของข้อค้นพบวิกฤตที่ครบกำหนดเดือนนั้นและแก้ทันเวลา ทั้งสองอัตราส่วนไม่ได้ให้วันเฉลี่ยหรือจำนวนปิดต่อวัน')
  aux(q,'exam_tip','Read numerator, denominator, inclusion date and units before interpreting a metric. Timeliness compliance is not remediation speed.','อ่านตัวเศษ ตัวส่วน วันที่ใช้รวมกลุ่ม และหน่วยก่อนตีความ การทำทันกำหนดไม่ใช่ความเร็วในการแก้ไข')
  decision='No production option is wholly precise: D calls an SLA proportion speed/velocity. Critical blocker. Proposal makes cohorts and units explicit and revises all alternatives while retaining proposed key D; requires human approval and fresh solve.'
 if i==637:
  q['short_explanation_en']='D is the best stated candidate for validation, not proof of zero acknowledged-write loss or sub15-minute recovery.'
  aux(q,'example','A team evaluates a ready alternate platform with a maintained data copy by testing the defined failure case, acknowledged-write loss and full recovery time under realistic load. A site label or replication alone does not demonstrate either objective.','ทีมประเมินแพลตฟอร์มสำรองที่เตรียมพร้อมและมีข้อมูลสำเนาปรับปรุงต่อเนื่อง โดยทดสอบเหตุขัดข้องที่กำหนด การสูญหายของข้อมูลที่ยืนยันบันทึกแล้ว และเวลากู้คืนครบภายใต้โหลดจริง ชื่อไซต์หรือการทำสำเนาเพียงอย่างเดียวไม่ยืนยันเป้าหมายทั้งสอง')
  aux(q,'exam_tip','RPO zero is not near zero; less than15minutes is not at most15minutes. Validate actual design behavior, capacity and recovery dependencies.','RPO ศูนย์ไม่ใช่เกือบศูนย์ และน้อยกว่า15นาทีไม่ใช่ไม่เกิน15นาที ต้องตรวจพฤติกรรมแบบจริง ความจุ และส่วนที่พึ่งพาในการกู้คืน')
  decision='D is the strongest candidate but original mandatory zero-loss/sub15-minute assurance is unproven. Actual D does not specify active-active or synchronous replication; prior matrix shorthand suggesting otherwise is corrected here.'
 for lang,f in [('en','explanation'),('th','explanation_th')]:q[f]=project(q,lang)
 assert q.keys()==old.keys() and all(q[k]==old[k] for k in ['id','dom','correct_idx'])
 result.append(dict(id=i,classification='SUBSTANTIVE REVISION',applied=False,stored_key='ABCD'[old['correct_idx']],decision=decision,target_change=rationale,source=source,before=old,proposed_after=q,prior_proposal=previous,approval_required='Explicit human approval of the complete bilingual record and target/alternatives, followed by qualified independent academic solve and Thai parity review; never apply automatically.'))
# Additional wording issue found in the actual full-bank review, beyond the six required holds.
q=copy.deepcopy(entry[608]);q['options'][2]='Collaborate with stakeholders to align the launch plan with approved risk tolerances and applicable regulatory obligations'
q['options_th'][2]='ร่วมมือกับผู้มีส่วนได้ส่วนเสียเพื่อให้แผนเปิดตัวสอดคล้องกับระดับความเสี่ยงที่อนุมัติและข้อกำหนดกำกับที่ใช้บังคับ'
q['explanation_detail']['correct']=dict(en='Integrated GRC aligns the business plan with applicable obligations and approved risk decisions. It does not alter binding requirements merely to meet a launch date.',th='GRC แบบบูรณาการทำให้แผนธุรกิจสอดคล้องกับข้อกำหนดที่ใช้และการตัดสินความเสี่ยงที่อนุมัติ ไม่ใช่ปรับข้อบังคับเพียงเพื่อให้ทันเปิดตัว')
q['short_explanation_en']='Align business plans with applicable obligations and approved risk decisions; deadlines do not rewrite binding requirements.'
# Retain the current SAFE example in this extra held proposal.
current={v['id']:v for v in json.loads((OUT/'questions.expected.json').read_text(encoding='utf-8'))}
q['explanation_detail']['example']=current[608]['explanation_detail']['example']
for lang,f in [('en','explanation'),('th','explanation_th')]:q[f]=project(q,lang)
(OUT/'additional-608-proposal.json').write_text(json.dumps(dict(id=608,classification='SUBSTANTIVE REVISION',applied=False,before=current[608],proposed_after=q,reason='Current C is best offered, but aligning regulatory obligations to a launch can imply changing binding obligations. Proposed wording explicitly aligns the plan; human approval required.'),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(OUT/'six-deferred-complete-proposals.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Six complete held proposals and additional Q608 proposal prepared; no bank writes')
