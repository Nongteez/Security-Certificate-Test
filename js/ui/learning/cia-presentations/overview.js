import {scene,pair,graphic} from './shared.js';
export function overview(host,context){
 const s=scene(host,context,'overview',pair('One information asset. Three security goals.','ข้อมูลเดียว สามเป้าหมายที่ต้องปกป้อง'),'CIA TRIAD');
 const figure=s.doc.createElement('figure');figure.className='v3-triad-figure';
 figure.append(graphic(s.doc,'<path d="M300 66 92 335H508Z" fill="#eff6ff" stroke="#aac8ef" stroke-width="3"/><path d="M300 66V230M92 335 300 230l208 105" stroke="#c5d8ed" stroke-width="2" fill="none"/><ellipse cx="300" cy="192" rx="58" ry="20" fill="#d8e9fc" stroke="#2563eb" stroke-width="3"/><path d="M242 192v65c0 30 116 30 116 0v-65M242 224c0 30 116 30 116 0" fill="none" stroke="#2563eb" stroke-width="3"/>','0 0 600 430'));
 for(const [i,p]of context.slide.visual.pillars.entries()){const n=s.doc.createElement('div');n.className=`v3-triad-node v3-node-${i}`;n.append(s.put('strong','v3-goal-symbol',p.symbol),s.put('span','v3-node-term',p.term.en));figure.append(n);}
 figure.querySelector('svg').setAttribute('preserveAspectRatio','none');
 const caption=s.put('figcaption','v3-triad-asset',pair('Critical information','ข้อมูลสำคัญ'));figure.append(caption);
 const explanation=s.doc.createElement('div');explanation.className='v3-triad-explanations';
 for(const p of context.slide.visual.pillars){const row=s.doc.createElement('section');row.className=`v3-goal-explanation v3-${p.key}`;row.append(s.put('h4','v3-term',p.term),s.put('p','v3-copy',p.question));explanation.append(row);}
 s.main.append(figure,explanation);s.footer.append(s.put('p','v3-copy',context.slide.visual.takeaway));return{destroy(){}};
}
