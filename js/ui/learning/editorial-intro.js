import {element} from './dom.js';

// Concise presentation copy derived from the verified introduction. Full source text lives in Lesson Info.
const copy = {
  th: {
    lines: ['ถ้าข้อมูลถูกเปิดเผย', 'ถูกเปลี่ยน หรือใช้ไม่ได้', 'ภารกิจจะเดินต่ออย่างไร?'],
    mission: 'ปกป้องข้อมูลสำคัญ เพื่อให้องค์กรบรรลุพันธกิจอย่างปลอดภัย',
    goals: [
      ['การรักษาความลับ', 'ป้องกันการเปิดเผยต่อผู้ไม่มีสิทธิ์'],
      ['ความถูกต้องครบถ้วน', 'ป้องกันการแก้ไขหรือทำลาย\nโดยไม่ได้รับอนุญาต'],
      ['ความพร้อมใช้งาน', 'ให้ผู้มีสิทธิ์เข้าถึงได้ในเวลาที่จำเป็น']
    ]
  },
  en: {
    lines: ['If information is exposed,', 'altered, or unavailable,', 'can the mission continue?'],
    mission: 'Protect critical information so the organization can achieve its mission safely.',
    goals: [
      ['Keep information confidential', 'Prevent unauthorized disclosure.'],
      ['Keep information trustworthy', 'Prevent unauthorized changes or destruction.'],
      ['Keep information accessible', 'Dependable access for authorized users when needed.']
    ]
  }
};

/** HTML typography and a separate original vector illustration; no controls or persistent state. */
export function renderEditorialIntro(host, {language}) {
  const doc=host.ownerDocument, mode=language==='en'?'en':'th', content=copy[mode];
  const deck=element(doc,'section','cia-editorial');deck.setAttribute('lang',mode);
  const main=element(doc,'div','cia-editorial-main'), narrative=element(doc,'div','cia-editorial-narrative');
  const question=element(doc,'h3','cia-editorial-question');
  for(const [i,line] of content.lines.entries()){
    const span=element(doc,'span',i===2?'cia-editorial-question-line cia-editorial-emphasis':'cia-editorial-question-line',line);
    span.setAttribute('lang',mode);question.append(span);
  }
  const mission=element(doc,'p','cia-editorial-mission',content.mission);mission.setAttribute('lang',mode);
  narrative.append(question,mission);
  const art=element(doc,'img','cia-editorial-art');
  art.setAttribute('src',new URL('../../../assets/learning/cia-editorial-document.svg',import.meta.url).href);
  art.setAttribute('alt','');art.setAttribute('aria-hidden','true');art.setAttribute('width','520');art.setAttribute('height','500');
  main.append(narrative,art);
  const goals=element(doc,'div','cia-editorial-goals');
  for(const [i,term] of ['Confidentiality','Integrity','Availability'].entries()){
    const goal=element(doc,'section','cia-editorial-goal'), heading=element(doc,'h4','cia-editorial-term');
    const letter=element(doc,'span','cia-editorial-letter',['C','I','A'][i]);letter.setAttribute('aria-hidden','true');
    const name=element(doc,'span','',term);name.setAttribute('lang','en');heading.append(letter,name);
    const label=element(doc,'p','cia-editorial-label',content.goals[i][0]), meaning=element(doc,'p','cia-editorial-meaning',content.goals[i][1]);
    label.setAttribute('lang',mode);meaning.setAttribute('lang',mode);goal.append(heading,label,meaning);goals.append(goal);
  }
  deck.append(main,goals);host.append(deck);
  return {destroy(){}};
}
