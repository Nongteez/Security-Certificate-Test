const stage=process.argv[2];if(!['before','after'].includes(stage))throw Error('stage required');
const shotDir=path.join(OUT,'screenshots','matrix-'+stage+'-final');fs.mkdirSync(shotDir,{recursive:true});
const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json();
function components(){return [...document.querySelectorAll('.reading-article .reading-diagram-card[data-diagram],.reading-article .reading-figure,.reading-article .reading-example-box')];}
function inspect(){
 const a=document.querySelector('.reading-article'),heads=[...a.querySelectorAll('h3[id],.reading-topic-anchor[id]')],comp=[...a.querySelectorAll('.reading-diagram-card[data-diagram],.reading-figure,.reading-example-box')];
 const visible=e=>{const b=e.getBoundingClientRect();return b.width>0&&b.height>0&&getComputedStyle(e).visibility!=='hidden';};
 function rgba(s){const m=s?.match(/[\d.]+/g);return m&&m.length>=3?[...m.slice(0,3).map(Number),m.length>3?Number(m[3]):1]:null;}
 function over(f,b){return f.slice(0,3).map((v,i)=>v*f[3]+b[i]*(1-f[3]));}
 function rgb(s){return rgba(s)?.slice(0,3);}
 function contrast(x,y){const lum=a=>a.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);const p=lum(x),q=lum(y);return(Math.max(p,q)+.05)/(Math.min(p,q)+.05);}
 function bg(e){const chain=[];for(let p=e;p;p=p.parentElement)chain.unshift(p);let result=[255,255,255];for(const p of chain){const color=rgba(getComputedStyle(p).backgroundColor);if(color)result=over(color,result);}return result;}
 const contrastCandidates=[],tiny=[];
 for(const e of a.querySelectorAll('svg text'))if(visible(e)){
  const st=getComputedStyle(e),svg=e.ownerSVGElement,b=e.getBBox(),matrix=e.getScreenCTM(),px=parseFloat(st.fontSize)*Math.hypot(matrix.a,matrix.b);if(px<10)tiny.push({text:e.textContent.trim(),px,diagram:e.closest('[data-diagram]')?.dataset.diagram});
  let back=bg(svg);const pt=svg.createSVGPoint();pt.x=b.x+b.width/2;pt.y=b.y+b.height/2;const screen=pt.matrixTransform(matrix);
  for(const rect of svg.querySelectorAll('rect')){const r=rect.getBoundingClientRect(),rs=getComputedStyle(rect);if(r.left<=screen.x&&r.right>=screen.x&&r.top<=screen.y&&r.bottom>=screen.y&&rs.fill!=='none'&&(rect.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)){const c=rgba(rs.fill);if(c){c[3]*=Number(rs.fillOpacity);back=over(c,back);}}}
  const foreground=rgb(st.fill);if(foreground&&back){const ratio=contrast(foreground,back),required=px>=24||(px>=18.66&&Number(st.fontWeight)>=700)?3:4.5;if(ratio<required)contrastCandidates.push({text:e.textContent.trim(),ratio,foreground,background:back,px,required,diagram:e.closest('[data-diagram]')?.dataset.diagram});}
 }
 return{domain:Number(a.dataset.domainId),width:innerWidth,height:innerHeight,theme:document.documentElement.dataset.theme,pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),h1:a.querySelectorAll('h1').length,headings:heads.map(h=>({id:h.id,text:h.textContent})),tables:a.querySelectorAll('table').length,nested:a.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length,scenarios:a.querySelectorAll('.reading-scenario-card').length,components:comp.map((e,i)=>{const prev=heads.filter(h=>!!(h.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)).at(-1),style=getComputedStyle(e);return{index:i,type:e.matches('.reading-diagram-card[data-diagram]')?'diagram':e.matches('figure')?'image':'example',id:e.dataset.diagram||e.querySelector('img')?.getAttribute('src')||e.querySelector('.reading-example-title')?.textContent||'example',anchor:prev?.id,text:e.innerText,display:style.display,images:[...e.querySelectorAll('img')].map(i=>({src:i.getAttribute('src'),alt:i.alt,loaded:i.complete&&i.naturalWidth>0})),desktop:[...e.querySelectorAll('.reading-diag-desktop')].some(visible),mobile:[...e.querySelectorAll('.reading-diag-mobile')].some(visible),overflow:e.scrollWidth>e.clientWidth+2};}),tiny,contrastCandidates,leaks:a.innerText.includes('<!--'),text:a.innerText,buttons:[...document.querySelectorAll('button')].map(b=>({id:b.id,aria:b.getAttribute('aria-label'),text:b.textContent.trim()}))};
}
for(const d of[1,2,3,4,5])for(const[width,height]of[[1920,1080],[1366,768],[768,1024],[390,844]])for(const theme of['light','dark']){
 const run=`D${d}-${width}x${height}-${theme}`,url=`http://127.0.0.1:${PORT}/#/reading/domain-${d}`;
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url});
 for(let i=0;i<90;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`))break;await sleep(100);}
 await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);
 await evaluate(`Promise.all([...document.querySelectorAll('.reading-article img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{});} ))`);await sleep(550);
 const r=await evaluate('('+inspect.toString()+')()');r.run=run;r.screenshots=[];r.accordions=[];
 const ids=await evaluate(`[...document.querySelector('.reading-nav-group[data-domain-id="${d}"]').querySelectorAll('[data-toggle-obj]')].map(b=>b.dataset.toggleObj)`);
 for(const id of ids){
  const n=await evaluate(`(()=>{const b=document.querySelector('[data-toggle-obj="${id}"]'),list=b.closest('.reading-nav-objective-item').querySelector('.reading-nav-topics');if(b.getAttribute('aria-expanded')==='false')b.click();b.click();return{id:'${id}',aria:b.getAttribute('aria-expanded'),hidden:list.hidden,display:getComputedStyle(list).display,height:list.getBoundingClientRect().height};})()`);
  // Scroll-spy must not silently undo a user collapse.
  await evaluate(`window.scrollBy({top:30,behavior:'instant'})`);await sleep(110);n.afterScroll=await evaluate(`document.querySelector('[data-toggle-obj="${id}"]').getAttribute('aria-expanded')`);n.pass=n.aria==='false'&&n.hidden&&n.display==='none'&&n.height===0&&n.afterScroll==='false';r.accordions.push(n);await evaluate(`document.querySelector('[data-toggle-obj="${id}"]').click()`);
 }
 const takeAll=(width===1366&&theme==='dark')||(width===390&&theme==='light');
 for(const c of r.components.filter((c,i)=>takeAll||i===0)){
  await evaluate(`(()=>{const e=(${components.toString()})()[${c.index}];e.scrollIntoView({block:'start',behavior:'instant'});window.scrollBy({top:-65,behavior:'instant'});})()`);await sleep(120);
  const im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false}),name=`${run}-${String(c.index).padStart(2,'0')}-${c.type}.png`;fs.writeFileSync(path.join(shotDir,name),Buffer.from(im.data,'base64'));r.screenshots.push('screenshots/matrix-'+stage+'-final/'+name);
 }
 const anchor=r.headings.filter(h=>h.id.startsWith('topic-')).at(1)?.id;
 if(anchor){await evaluate(`document.querySelector('[data-scroll-to="${anchor}"]').click()`);await sleep(250);const nav=await evaluate(`({hash:location.hash,top:document.getElementById('${anchor}').getBoundingClientRect().top})`);await send('Page.reload',{ignoreCache:true});for(let i=0;i<70;i++){if(await evaluate(`!!document.getElementById('${anchor}')`))break;await sleep(100);}await sleep(900);const reload=await evaluate(`({hash:location.hash,top:document.getElementById('${anchor}').getBoundingClientRect().top})`);r.navigation={anchor,nav,reload,pass:[nav,reload].every(n=>n.hash.endsWith('#'+anchor)&&Math.abs(n.top)<220)};}
 r.pass=r.pageOverflow===0&&!r.nested&&!r.leaks&&r.h1===1&&r.components.every(c=>c.images.every(i=>i.loaded))&&r.accordions.every(n=>n.pass)&&r.navigation?.pass;
 if(stage==='after')r.pass&&=!r.tiny.length&&!r.contrastCandidates.length;
 matrix.push(r);console.log(stage+' '+run+': '+(r.pass?'PASS':'FAIL')+'; tiny='+r.tiny.length+'; contrastCandidates='+r.contrastCandidates.length);
}
const report={date:'2026-11-05',stage,browser:version.Browser,matrix,exceptions,consoleErrors,status:matrix.every(r=>r.pass)&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL',contrastMethod:'Alpha-composited ancestor backgrounds and preceding containing SVG rectangles at label centre; candidate list reviewed for overlapping geometry.'};fs.writeFileSync(path.join(OUT,stage+'-browser-qa.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:report.status,states:matrix.length,screenshots:matrix.reduce((n,r)=>n+r.screenshots.length,0),exceptions:exceptions.length,consoleErrors:consoleErrors.length}));if(report.status!=='PASS')process.exitCode=1;
