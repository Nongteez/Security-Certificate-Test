import {scene,pair,icon,graphic,safeguards} from './shared.js';
export function availability(host,context){
 const s=scene(host,context,'availability',pair('Protected data must also be reachable.','ปกป้องข้อมูลแล้ว ต้องเข้าถึงได้เมื่อจำเป็น'),'AVAILABILITY / A');
 const system=s.doc.createElement('figure');system.className='v3-service-diagram';
 const doctor=s.doc.createElement('div');doctor.className='v3-service-endpoint';doctor.append(icon(s.doc,'hospital'),s.put('h4','v3-term',pair('Emergency care','ห้องฉุกเฉิน')),s.put('p','v3-copy',pair('Doctor needs allergy records','แพทย์ต้องใช้ประวัติแพ้ยา')));
 const portal=s.doc.createElement('div');portal.className='v3-service-portal';portal.append(s.put('p','v3-attack-label',pair('DDoS · junk requests','DDoS · ทราฟฟิกขยะ')),graphic(s.doc,'<path d="m20 5 65 70M95 5l-3 70M170 5l-65 70" stroke="#c74e3c" stroke-width="4" fill="none"/>','0 0 190 80','v3-ddos-arrows'),icon(s.doc,'server'),s.put('h4','v3-term',pair('Clinical portal','พอร์ทัลโรงพยาบาล')),s.put('strong','v3-service-offline',pair('UNAVAILABLE','เข้าใช้งานไม่ได้')));
 const record=s.doc.createElement('div');record.className='v3-service-endpoint v3-record-unreachable';record.append(icon(s.doc,'file'),s.put('h4','v3-term',pair('Allergy records','ประวัติการแพ้ยา')),s.put('p','v3-copy',pair('No timely access','เปิดดูในเวลาที่ต้องใช้ไม่ได้')));
 system.append(doctor,s.put('span','v3-broken-path','— × —'),portal,s.put('span','v3-broken-path','— × —'),record);
 const facts=s.doc.createElement('div');facts.className='v3-availability-facts';facts.append(s.put('p','',pair('No disclosure','ข้อมูลไม่รั่วไหล')),s.put('p','',pair('No alteration','ข้อมูลไม่ถูกแก้ไข')),s.put('strong','',pair('Access denied by disruption → A','ระบบล่มจนเข้าถึงไม่ได้ → A')));s.main.append(system,facts);
 s.footer.append(safeguards(s,[pair('Redundancy · fault tolerance','ระบบสำรอง · ทนต่อความเสียหาย'),pair('UPS · environmental resilience','UPS · ความยืดหยุ่นด้านสภาพแวดล้อม'),pair('Backups · DR · DDoS mitigation','แบ็กอัป · DR · ลดผลกระทบ DDoS')]));return{destroy(){}};
}
