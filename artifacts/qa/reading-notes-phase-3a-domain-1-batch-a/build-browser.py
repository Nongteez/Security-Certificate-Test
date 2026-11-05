from pathlib import Path
OUT=Path(__file__).resolve().parent
s=(OUT.parent/'reading-notes-phase-3a-domain-5-batch-3/browser-qa.mjs').read_text(encoding='utf-8')
s=s[:s.index('  const version=')]
s=s.replace('const topic=\'topic-5-2-mitre-attack-framework\';',"const topic='topic-1-1-privacy-data-protection';\nconst stage=process.argv[2];if(!['before','after'].includes(stage))throw Error('stage required');")
s=s.replace('sec-cert-batch3-','sec-cert-d1a-').replace("path.join(OUT,'screenshots')","path.join(OUT,'screenshots',stage)").replace("path.join(OUT,'chrome-launch.txt')","path.join(OUT,stage+'-chrome-launch.txt')")
s=s.replace("res.writeHead(200,{'Content-Type':", "if(stage==='before'&&p===path.join(ROOT,'content','isc2-cc-2026','reading','domain-1.md')){res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});res.end(fs.readFileSync(path.join(OUT,'before-domain-1.md')));return;}res.writeHead(200,{'Content-Type':")
s+='''
  const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json(),url=`http://127.0.0.1:${PORT}/#/reading/domain-1`;
  const topics=[topic,'topic-1-4-control-categories','topic-1-5-isc2-ethics'];
  async function ready(domain=1){for(let i=0;i<80;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${domain}"]')`))return;await sleep(100);}throw Error('Domain '+domain+' did not load');}
  await send('Page.navigate',{url:url+'#'+topic});await ready();
  const targets=`(()=>{const article=document.querySelector('.reading-article[data-domain-id="1"]');const privacyTable=[...article.querySelectorAll('table')].find(t=>t.querySelectorAll('th').length===3&&t.innerText.includes('Confidentiality')&&t.innerText.includes('Privacy'));const ownership=[...article.querySelectorAll('h5')].find(h=>h.textContent.includes('Data Ownership')).nextElementSibling;const ethics=[...article.querySelectorAll('.reading-callout')].find(c=>c.textContent.includes('Critical Infrastructure')&&c.textContent.includes('Canon 3'));return{privacyTable,ownership,categories:document.getElementById('topic-1-4-control-categories').nextElementSibling,ethicsConclusion:ethics.querySelector('p:last-child'),privacyDiagram:article.querySelector('[data-diagram="privacyFlow"]'),ethicsDiagram:article.querySelector('[data-diagram="ethicsCanons"]')};})()`;
  for(const [width,height]of [[1920,1080],[1440,900],[1366,768],[768,1024],[390,844],[360,800]])for(const theme of ['light','dark']){
    const run=`${width}x${height}-${theme}`;
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(120);
    const state=await evaluate(`(()=>{const t=${targets},a=document.querySelector('.reading-article[data-domain-id="1"]'),tables=[...a.querySelectorAll('table')],changed=[t.ownership,t.ethicsConclusion];return{width:innerWidth,height:innerHeight,theme:document.documentElement.dataset.theme,pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),clippedProse:changed.filter(p=>p.scrollWidth>p.clientWidth+2).map(p=>p.textContent),tableCount:tables.length,nestedTableWrappers:a.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length,headers:tables.map(t=>({verticalAlign:getComputedStyle(t.querySelector('th')).verticalAlign,fontFamily:getComputedStyle(t.querySelector('th')).fontFamily})),scenarioCount:a.querySelectorAll('.reading-scenario-card').length,diagramCount:a.querySelectorAll('[data-diagram]').length,diagramPresentations:[t.privacyDiagram,t.ethicsDiagram].map(d=>({key:d.dataset.diagram,desktop:getComputedStyle(d.querySelector('.reading-diag-desktop')).display!=='none',mobile:getComputedStyle(d.querySelector('.reading-diag-mobile')).display!=='none',text:d.innerText})),ownership:t.ownership.innerText,privacyTable:t.privacyTable.innerText,ethicsConclusion:t.ethicsConclusion.innerText,categoryNote:[...a.querySelectorAll('p')].find(p=>p.innerText.includes('Outline terminology'))?.innerText||null,literalFences:a.innerText.includes(':::control-categories')};})()`);
    state.pass=state.width===width&&state.height===height&&state.pageOverflow===0&&!state.clippedProse.length&&state.tableCount===8&&state.nestedTableWrappers===0&&state.headers.every(s=>s.verticalAlign==='bottom'&&s.fontFamily.includes('Space Grotesk'))&&state.scenarioCount===8&&state.diagramPresentations.every(d=>d.desktop||d.mobile)&&!state.literalFences;
    if(stage==='after')state.pass&&=!!state.categoryNote&&state.privacyTable.includes('lawful basis')&&state.ethicsConclusion.includes('authorized channels');
    state.screenshots=[];state.navigation=[];
    for(const id of topics){await evaluate(`document.querySelector('[data-scroll-to="${id}"]').click()`);await sleep(350);const nav=await evaluate(`({id:'${id}',hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`);nav.pass=nav.hash.endsWith('#'+id)&&Math.abs(nav.y)<220;state.navigation.push(nav);state.pass&&=nav.pass;}
    for(const part of ['ownership','privacyTable','categories','ethicsConclusion','privacyDiagram','ethicsDiagram']){
      await evaluate(`(()=>{const t=${targets};let el=t['${part}'];if('${part}'==='categories'&&'${stage}'==='after')el=[...document.querySelectorAll('p')].find(p=>p.innerText.includes('Outline terminology'));el.scrollIntoView({block:'start',behavior:'instant'});for(let p=el.parentElement;p;p=p.parentElement)if(/auto|scroll/.test(getComputedStyle(p).overflowY)&&p.scrollHeight>p.clientHeight+1)p.scrollTop=Math.max(0,p.scrollTop-96);window.scrollBy({top:-96,behavior:'instant'});})()`);
      await sleep(220);const file=`${run}-${part}.png`,img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',stage,file),Buffer.from(img.data,'base64'));state.screenshots.push('screenshots/'+stage+'/'+file);
      if(part==='privacyTable'){
        const edge=await evaluate(`(()=>{const w=(${targets}).privacyTable.parentElement;w.scrollLeft=w.scrollWidth;return{max:w.scrollWidth-w.clientWidth,reached:w.scrollLeft>=w.scrollWidth-w.clientWidth-1};})()`);state.tableEdge=edge;state.pass&&=edge.reached;
        if(edge.max>1){const img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false}),right=`${run}-privacyTable-right.png`;fs.writeFileSync(path.join(OUT,'screenshots',stage,right),Buffer.from(img.data,'base64'));state.screenshots.push('screenshots/'+stage+'/'+right);}
        await evaluate(`(${targets}).privacyTable.parentElement.scrollLeft=0`);
      }
    }
    matrix.push({run,...state});console.log(`${stage} ${run}: ${state.pass?'PASS':'FAIL'}; overflow=${state.pageOverflow}; scenarios=${state.scenarioCount}; diagrams=${state.diagramCount}`);
  }
  async function settledAnchor(id){const samples=[];for(let i=0;i<40;i++){const s=await evaluate(`({hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`);samples.push(s);if(Math.abs(s.y)<220){await sleep(150);return{...await evaluate(`({hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`),samples};}await sleep(100);}return{...samples.at(-1),samples};}
  const navigation=[];
  for(const id of topics){
    await send('Page.navigate',{url:'about:blank'});await send('Page.navigate',{url:url+'#'+id});await ready();await sleep(550);
    const direct=await settledAnchor(id);
    await send('Page.reload',{ignoreCache:true});await ready();await sleep(500);
    const reload=await settledAnchor(id);
    await evaluate(`document.querySelector('[data-select-domain="2"]').click()`);await ready(2);
    await evaluate(`document.querySelector('[data-select-domain="1"]').click()`);await ready();await evaluate(`document.querySelector('[data-scroll-to="${id}"]').click()`);await sleep(450);
    const returned=await settledAnchor(id);
    navigation.push({id,direct,reload,returned,pass:[direct,reload,returned].every(r=>r.hash.endsWith('#'+id)&&Math.abs(r.y)<220)});
  }
  const protectedDomain5=[];
  if(stage==='after'){
    await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-5`});await ready(5);
    for(const [width,height]of [[1366,768],[360,800]])for(const theme of ['light','dark']){
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.fonts.ready`);
      const ids=[...protectedIds,'topic-5-2-mitre-attack-framework'];
      const smoke=await evaluate(`(()=>{const a=document.querySelector('.reading-article[data-domain-id="5"]');return{width:innerWidth,theme:'${theme}',overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),tables:a.querySelectorAll('table').length,nested:a.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length,scenarios:a.querySelectorAll('.reading-scenario-card').length,diagrams:a.querySelectorAll('[data-diagram]').length,units:${JSON.stringify(ids)}.map(id=>({id,present:!!document.getElementById(id)})),text:a.innerText};})()`);
      smoke.pass=smoke.overflow===0&&smoke.tables===14&&smoke.nested===0&&smoke.scenarios===12&&smoke.diagrams===4&&smoke.units.every(u=>u.present)&&smoke.text.includes('T1059.001')&&smoke.text.includes('800-88');smoke.screenshots=[];
      for(const id of ids){await evaluate(`document.getElementById('${id}').scrollIntoView({block:'start',behavior:'instant'})`);await sleep(200);const file=`${width}x${height}-${theme}-protected-${id}.png`,img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',stage,file),Buffer.from(img.data,'base64'));smoke.screenshots.push('screenshots/'+stage+'/'+file);}
      protectedDomain5.push(smoke);
    }
  }
  const report={date:'2026-11-04',stage,browser:version.Browser,executable:chromePath,mode:'Real headless Google Chrome via CDP; isolated temporary profile',captureMethod:'Normal viewport screenshots after settled scrolling',matrix,navigation,protectedDomain5,exceptions,consoleErrors,status:matrix.every(r=>r.pass)&&navigation.every(r=>r.pass)&&protectedDomain5.every(r=>r.pass)&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL'};
  fs.writeFileSync(path.join(OUT,stage+'-browser-qa.json'),JSON.stringify(report,null,2)+'\\n');console.log(JSON.stringify({status:report.status,configurations:matrix.length,screenshots:matrix.reduce((n,r)=>n+r.screenshots.length,0)+protectedDomain5.reduce((n,r)=>n+r.screenshots.length,0),navigation,protectedDomain5:protectedDomain5.map(s=>({width:s.width,theme:s.theme,pass:s.pass})),exceptions:exceptions.length,consoleErrors:consoleErrors.length},null,2));if(report.status!=='PASS')process.exitCode=1;
}catch(error){fs.writeFileSync(path.join(OUT,stage+'-browser-error.txt'),error.stack);console.error(error);process.exitCode=1;}
finally{ws?.close();chrome.kill();server.close();}
'''
s=s.replace('const targets=`', 'const targetElements=`').replace('${targets}', '${targetElements}')
s=s.replace("!!document.querySelector('.reading-article[data-domain-id=\"${domain}\"]')", "!!document.querySelector('.reading-article[data-domain-id=\"${domain}\"] table')")
s=s.replace('return{privacyTable,ownership,categories:', 'return{privacyTable,privacyExample:[...privacyTable.querySelectorAll(\'tr\')].at(-1),ownership,categories:')
s=s.replace("['ownership','privacyTable','categories'", "['ownership','privacyTable','privacyExample','categories'")
s=s.replace("if(part==='privacyTable'){", "if(part==='privacyTable'||part==='privacyExample'){")
s=s.replace('`${run}-privacyTable-right.png`', '`${run}-${part}-right.png`')
s=s.replace("if(edge.max>1){const img=", "if(edge.max>1){await sleep(180);const img=")
s=s.replace("const stage=process.argv[2];", "const rowsOnly=process.argv[3]==='rows';const stage=process.argv[2];")
s=s.replace("for(const part of ['ownership'", "for(const part of (rowsOnly?['privacyExample']:['ownership'")
s=s.replace("'privacyDiagram','ethicsDiagram']){", "'privacyDiagram','ethicsDiagram'])){")
s=s.replace("const navigation=[];", "const navigation=[];")
s=s.replace('for(const id of topics){\n    await send', 'for(const id of (rowsOnly?[]:topics)){\n    await send')
s=s.replace("if(stage==='after'){", "if(stage==='after'&&!rowsOnly){")
s=s.replace("stage+'-browser-qa.json'", "stage+(rowsOnly?'-rows-browser-qa.json':'-browser-qa.json')")
s=s.replace('state.screenshots=[];state.navigation=[];', 'state.screenshots=[];state.navigation=[];state.captureTargets=[];')
s=s.replace("await sleep(220);const file=", "await sleep(220);if(part==='privacyExample')state.captureTargets.push(await evaluate(`(()=>{const e=(${targetElements}).privacyExample,b=e.getBoundingClientRect();return{rowIndex:e.rowIndex,top:b.top,bottom:b.bottom,text:e.innerText};})()`));const file=")
(OUT/'browser-qa.mjs').write_bytes(s.encode())
