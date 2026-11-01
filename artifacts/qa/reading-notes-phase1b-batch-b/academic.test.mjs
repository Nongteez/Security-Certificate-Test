import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseMarkdown} from '../../../js/core/markdown-parser.js';
import {diagrams} from '../../../js/core/diagram-generator.js';
const raw=Object.fromEntries([1,2,3,4].map(d=>[d,fs.readFileSync(`content/isc2-cc-2026/reading/domain-${d}.md`,'utf8')]));
const html=Object.fromEntries([1,2,3,4].map(d=>[d,parseMarkdown(raw[d])]));
const scenarios=d=>fs.readFileSync(`content/isc2-cc-2026/reading/domain-${d}-scenarios.js`,'utf8');
const yes=(s,r)=>assert.ok(r.test(s),`Expected concept: ${r}`);
const no=(s,r)=>assert.ok(!r.test(s),`Rejected implication remains: ${r}`);
const checks={
 'D1-F01':()=>{no(html[1],/Prove identity \/ Who are you/);yes(html[1],/Claim identity \/ Who are you/);yes(html[1],/Prove the claimed identity/);},
 'D1-F02':()=>{no(html[1],/แบ่งออกเป็น 4 หมวดหลัก/);yes(html[1],/Password \+ Corporate IP เพียงอย่างเดียวยังไม่ใช่ MFA/);},
 'D1-F06':()=>{yes(diagrams.aaaLifecycle,/Log เพียงอย่างเดียว/);yes(diagrams.aaaLifecycle,/Accountability/);},
 'D1-F07':()=>{yes(html[1],/ALE ก่อนใช้ Control − ALE หลังใช้ Control/);yes(html[1],/−4,000/);no(diagrams.riskCalculationFlow,/กฎเหล็กของข้อสอบ/);},
 'D1-F08':()=>{yes(html[1],/Frame, Assess, Respond และ Monitor/);no(html[1],/ในหลักสูตรการสอน ISC2 CC 2026 นี้ ได้กำหนด/);yes(diagrams.riskLifecycle,/Learning Model/);},
 'D1-F09':()=>{no(html[1],/ลำดับคำใน Canon 2 ให้เกียรติ/);yes(html[1],/ไม่ควรอนุมานลำดับเหนือกว่ากัน/);},
 'D1-F10':()=>{no(html[1],/ซึ่งไม่ได้รับการคุ้มครองทางกฎหมาย/);yes(html[1],/ขึ้นอยู่กับข้อเท็จจริง บทบาท และกฎหมาย/);},
 'D1-N02':()=>{yes(html[1],/Detective อาจพบย้อนหลัง/);no(html[1],/DETECTIVE \(ขณะเกิดเหตุ\)/);yes(html[1],/Corrective อาจเริ่มขณะเกิดเหตุ/);},
 'D1-N03':()=>{yes(html[1],/ไม่รับประกันว่าจะกำจัดจุดล้มเหลวเดี่ยว/);no(html[1],/ป้องกันช่องโหว่ซอฟต์แวร์และการเข้ารหัสข้อมูล/);},
 'D1-N04':()=>{no(raw[1],/Residual Risk\} =/);yes(html[1],/ต้องกำหนดสเกลและความหมายของคะแนน/);yes(html[1],/ความเสี่ยงที่ประเมินใหม่/);},
 'D1-N06':()=>{yes(html[1],/Security Questions เป็นตัวอย่าง Knowledge แบบเดิม/);no(html[1],/ต้องปฏิบัติตามโดยไม่มีข้อยกเว้น/);yes(html[1],/บันทึกความเสี่ยงขององค์กร/);},
 'D1-N09':()=>{no(html[1],/สำเร็จแล้วเสมอ|Eliminate Single Point of Failure/);yes(html[1],/ยังไม่ล็อกอินให้อ่านข้อมูลสาธารณะ/);yes(html[1],/ความซ้ำซ้อนของ LB/);},
 'D2-01':()=>{yes(html[2],/MTD 4 ชั่วโมง/);yes(html[2],/RTO 3 ชั่วโมง/);yes(html[2],/ทำรายการค้าง/);no(diagrams.rtoRpoTimeline,/RTO ≤ MTD/);},
 'D2-03':()=>{yes(html[2],/ปัจจัยเดียวต้องมีอย่างน้อย 15/);yes(html[2],/ไม่น้อยกว่า 8/);yes(html[2],/ไม่ใช่เกณฑ์สากล/);},
 'D2-05':()=>{no(html[2],/ตามบริบทในสไลด์และเนื้อหาการสอบ ISC2 CC/);yes(html[2],/จุดเริ่ม\/สิ้นสุด/);},
 'D2-07':()=>{yes(scenarios(2),/Whaling เป็นประเภทย่อยของ Spear Phishing/);yes(html[2],/Bulk Phishing/);},
 'D2-10':()=>{no(html[2],/Checklist \/ Tabletop Exercise/);yes(html[2],/อภิปรายบทบาทและการตัดสินใจ/);yes(html[2],/Full-Interruption Test/);},
 'D2-11':()=>{yes(html[2],/ช่วงเวลาเป็นตัวอย่าง ไม่ใช่การรับประกัน/);yes(html[2],/ปรับปรุงจากสำรองล่าสุด/);},
 'D2-12':()=>{yes(html[2],/salt เฉพาะและค่า cost/);no(html[2],/ทำให้ไม่สามารถถูกดักขโมยรหัสยืนยันตัวตนได้/);yes(html[2],/เซสชัน และกระบวนการกู้คืนบัญชี/);},
 'D34-02':()=>{no(html[3],/หมวดหมู่คุณลักษณะหลัก 4 ด้าน/);yes(html[3],/Requested Action/);yes(scenarios(3),/Requested Action/);yes(diagrams.accessControlModels,/Subject, Object, Action, Context/);},
 'D34-05':()=>{no(html[4]+scenarios(4),/100% เสมอ/);yes(diagrams.cloudSharedResponsibility,/Data Policy \(Customer\)/);yes(html[4],/Storage หรือ IAM ทั้งหมดเอง/);},
 'D34-06':()=>{yes(html[4],/ตัวอย่าง AWS VPC/);yes(html[4],/Azure NSG เป็น Stateful/);yes(html[4],/ไม่ใช่อนุญาตขาออกใหม่ทั้งหมด/);},
 'D34-09':()=>{no(html[4],/x.x.x.255/);yes(html[4],/192.168.1.0\/24/);yes(html[4],/ต้องดู subnet mask/);},
 'D34-14':()=>{yes(html[4],/ย้าย platform branch/);no(html[4],/ลูกค้ามีหน้าที่เพียงนำ/);},
 'D34-15':()=>{yes(html[3],/LDAP.*เป็นโพรโทคอลสำหรับเข้าถึงบริการไดเรกทอรี/);},
 'D34-Q1':()=>{no(html[3],/6 ขั้นตอนตามลำดับมาตรฐาน|สิ่งแรกที่ต้องทำเสมอ/);yes(scenarios(3),/ยังไม่ได้กำหนดบทบาทและสิทธิ์/);},
 'D34-Q2':()=>{no(html[3],/ระงับการใช้งานบัญชี \(Lock Account\)/);yes(html[3],/Administrative Disable/);yes(scenarios(3),/ตามนโยบายองค์กรต้องเก็บบัญชี/);},
 'D34-Q12':()=>{yes(diagrams.dmzFirewallArchitecture,/Policy Ports/);no(diagrams.defenseInDepthLayers,/5 Concentric Security Tiers/);yes(html[4],/พอร์ตและปลายทางที่นโยบายอนุมัติ/);},
 'D34-Q14':()=>{yes(html[4],/องค์กรธุรกิจ การศึกษา หรือรัฐบาล/);yes(html[4],/on-premises ไม่ได้เป็น Private Cloud โดยอัตโนมัติ/);yes(scenarios(4),/บน Private Cloud ในศูนย์ข้อมูล/);},
};
for(const [id,fn] of Object.entries(checks))test(id,fn);
for(const d of [1,2,3,4])test(`Domain ${d} structure and scenarios retained`,()=>{assert.equal((html[d].match(/<h3\b/g)||[]).length,[0,24,29,17,24][d]);no(html[d],/\uFFFD|:::scenario|\[object Object\]/);yes(html[d],/<table/);yes(html[d],/<svg/);assert.equal((raw[d].match(/:::scenario/g)||[]).length,[0,8,12,12,12][d]);});
