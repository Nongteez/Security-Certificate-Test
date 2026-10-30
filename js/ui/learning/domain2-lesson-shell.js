import {element,localize} from './dom.js';

// Private to the newly authored Domain 2 lessons. Content/compositions stay in each lesson.
export const pair=(en,th)=>({en,th});
export function makeScene(host,context,kind,attribute) {
  const doc=host.ownerDocument, language=context.language==='th'?'th':'en';
  const el=(tag,cls='',text='')=>element(doc,tag,cls,text);
  const put=(tag,cls,copy)=>localize(el(tag,cls),copy,language);
  const root=el('section',`d2s-scene d2s-${kind}`);
  root.setAttribute(attribute,kind); root.setAttribute('lang',language);
  const header=el('header','d2s-header');
  header.append(put('h3','d2s-title',context.slide.title),put('p','d2s-lead',context.slide.blocks[0].text));
  const main=el('div','d2s-main'); root.append(header,main); host.append(root);
  const foot=copy=>main.append(put('p','d2s-foot',copy));
  const arrow=()=>{const n=el('span','d2s-arrow','→');n.setAttribute('aria-hidden','true');return n;};
  return {root,main,el,put,foot,arrow};
}

export function makeDecision(scene,context,{choices,prompt,prefix,correctIndex}) {
  const {el,put,main}=scene, state=context.interactionState||{}, abort=new AbortController();
  const layout=el('div','d2s-decision'),options=el('div','d2s-options'),feedback=el('section','d2s-feedback');
  options.setAttribute('role','group');options.setAttribute('aria-label','Scenario decision options');
  feedback.setAttribute(`data-${prefix}-scenario-feedback`,'');
  feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{
    const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<choices.length?state.choice:-1;
    buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));
    feedback.setAttribute(`data-${prefix}-outcome`,selected<0?'idle':selected===correctIndex?'recommended':'distractor');
    const title=selected<0?prompt:selected===correctIndex?pair('A supported decision','การตัดสินใจที่มีเหตุผลรองรับ'):pair('Consider what is missing','พิจารณาสิ่งที่ยังขาด');
    const reason=selected<0?pair('Choose an action and review its reasoning.','เลือกแนวทาง แล้วพิจารณาเหตุผลประกอบ'):context.slide.blocks[1].rows[selected][2];
    feedback.replaceChildren(put('h4','d2s-term',title),put('p','d2s-copy',reason));
  };
  const buttons=choices.map((copy,i)=>{
    const b=el('button','d2s-option');b.type='button';b.setAttribute(`data-${prefix}-scenario-choice`,String(i));
    const label=el('span','d2s-option-letter',String.fromCharCode(65+i));label.setAttribute('aria-hidden','true');
    b.append(label,put('span','d2s-option-copy',copy));
    b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});options.append(b);return b;
  });
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();
  paint();layout.append(options,feedback);main.append(layout);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
}
