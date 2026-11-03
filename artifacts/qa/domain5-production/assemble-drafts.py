from pathlib import Path
import json,random,hashlib
p=Path('content/isc2-cc-2026/sources/domain-5/production')
items=sum([json.loads((p/f'draft-batch-{i}.json').read_text(encoding='utf-8')) for i in range(1,5)],[])
q=next(q for q in items if q['id']==1015)
q['stem']=['A rule is intended to detect unauthorized privileged scans. It flags a scan outside its usual window. Investigation confirms the scan was approved under a documented exception and no unauthorized activity occurred. Relative to the intended detection purpose, how is this alert classified?','กฎมีเป้าหมายตรวจจับ Privileged scan ที่ไม่ได้รับอนุญาต และแจ้ง Scan นอกช่วงปกติ การตรวจสอบยืนยันว่า Scan อนุมัติตามข้อยกเว้นที่บันทึกไว้และไม่มีกิจกรรมที่ไม่มีสิทธิ์ เมื่อเทียบกับเป้าหมายตรวจจับ Alert นี้จัดเป็นประเภทใด?']
q=next(q for q in items if q['id']==1036)
q['choices'][2]=['Software composition analysis of third-party components','Software composition analysis ของส่วนประกอบภายนอก','Composition analysis focuses on component/dependency inventory and associated risks, rather than the described code security analysis.','Composition analysis เน้นรายการ Component หรือ Dependency และความเสี่ยงที่เกี่ยวข้อง ไม่ใช่การวิเคราะห์ความปลอดภัยของ Code ที่ระบุ']
q['choices'][3]=['Threat modeling of application data flows','Threat modeling ของ Data flows ในแอป','Threat modeling assesses threats and design context rather than inspecting source/compiled code as this task describes.','Threat modeling ประเมินภัยและบริบท Design แทนการตรวจ Source หรือ Compiled code ตามงานนี้']
# Avoid introducing an uncurated SCA term simply as a distractor: use code-review-adjacent DAST configuration check instead.
q['choices'][2]=['Dynamic testing of application input responses','การทดสอบ Dynamic ต่อผลตอบสนองของ Input ในแอป','Testing input responses requires executing behavior, whereas this task does not execute the application.','การทดสอบผลตอบสนองของ Input ต้องให้พฤติกรรมทำงาน แต่งานนี้ไม่รันแอป']
# DAST and dynamic testing duplicate: replace the DAST label option with runtime vulnerability scanning distinction.
q['choices'][1]=['Vulnerability scanning of deployed service versions','Vulnerability scanning เวอร์ชันบริการที่ Deploy แล้ว','Checking deployed versions differs from examining source or compiled code without execution.','การตรวจเวอร์ชันที่ Deploy แล้วต่างจากวิเคราะห์ Source หรือ Compiled code โดยไม่รัน']
rng=random.Random(20261103)
for q in items:
 order=list(range(4));rng.shuffle(order);q['correct']=order.index(0);q['choices']=[q['choices'][i] for i in order]
 q['revision']=1
(p/'drafts.json').write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
blind=[{'id':q['id'],'question':q['stem'][0],'options':[c[0] for c in q['choices']]} for q in items]
Path('artifacts/qa/domain5-production/blind-review-input.json').write_text(json.dumps(blind,ensure_ascii=False,indent=2),encoding='utf-8')
Path('artifacts/qa/domain5-production/author-repairs.md').write_text('# Author repairs before independent review\n\nQ1015: explicitly defined unauthorized-scan detection purpose so the false-positive label cannot be confused with a correct out-of-window condition match. Re-solved FP; Thai premise aligned.\nQ1036: replaced unrelated physical/exercise distractors with deployed-version scanning, dynamic-input testing and design threat analysis; each now represents a relevant method confusion. Removed SCA to avoid unsupported enrichment.\n',encoding='utf-8')
print('Drafts40; blind input created; key positions', {i:sum(q['correct']==i for q in items) for i in range(4)})
