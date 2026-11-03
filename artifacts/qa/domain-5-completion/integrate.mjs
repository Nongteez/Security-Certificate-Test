import fs from 'node:fs';
const qa='artifacts/qa/domain-5-completion/',read=p=>fs.readFileSync(p,'utf8'),write=(p,s)=>fs.writeFileSync(p,s);
let p='js/ui/learning/renderers.js',s=read(p);s="import {hasDomain5Presentation,renderDomain5Presentation} from './domain5-presentations.js';\n"+s;
s=s.replace("  const d4 =", "  const d5 = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasDomain5Presentation(context);\n  host.classList.toggle('learning-d5-slide',Boolean(d5));\n  if(d5) heading.classList.add('learning-sr-only');\n  const d4 =");
s=s.replace('  if (d4) {',`  if (d5) {
    const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});
    if(context.signal?.aborted)stop();
    const handle=renderDomain5Presentation(body,args);
    cleanup=()=>{handle?.destroy?.();context.signal?.removeEventListener('abort',stop)};
  } else if (d4) {`);write(p,s);
p='js/ui/learning/lesson-info.js';s=read(p);s="import {domain5Storyboard} from './domain5-storyboard.js';\n"+s;s=s.replace("lesson.domainId === 2 ||", "lesson.domainId === 2 || (lesson.domainId === 5 && domain5Storyboard.some(x=>x.id===lesson.id)) ||");s=s.replace('        detail.append(content);',`        if(lesson.domainId===5 && slide.info) {const note=element(doc,'aside','learning-info-clarification');note.append(localize(element(doc,'h4'),{en:'Additional context',th:'บริบทเพิ่มเติม'},language),localize(element(doc,'p'),slide.info,language));content.append(note);}
        detail.append(content);`);write(p,s);
p='index.html';s=read(p);s=s.replace('<link rel="stylesheet" href="css/learning-domain4-presentations.css">','<link rel="stylesheet" href="css/learning-domain4-presentations.css">\n    <link rel="stylesheet" href="css/learning-domain5-presentations.css">');
if(!s.includes('css/learning-domain5-presentations.css'))s=s.replace('</head>','<link rel="stylesheet" href="css/learning-domain5-presentations.css">\n</head>');write(p,s);
let css=read('css/learning-domain4-presentations.css').replaceAll('Domain 4','Domain 5').replaceAll('d4-','d5-');css=css.split('\n').filter(l=>!['tunnel','envelope','stack','layer{','layer .','denied','policy-deny','layout-boundary'].some(x=>l.includes('d5-'+x))).join('\n');write('css/learning-domain5-presentations.css',css);
console.log('Integrated exact D5 branch, stylesheet and Info context');
