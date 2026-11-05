from pathlib import Path
OUT=Path(__file__).resolve().parent
s=(OUT/'browser-qa.mjs').read_text(encoding='utf-8');s=s[:s.index(' const version=')]
s+='''
 const cases=[{d:1,name:'privacy-table',selector:`[...document.querySelectorAll('table')].find(e=>e.innerText.includes('Lawful Basis'))`},{d:2,name:'bc-dr-subset',selector:`document.querySelector('.reading-mob-pill-accent')`},{d:3,name:'provision-observed',selector:`[...document.querySelectorAll('p')].find(e=>e.innerText.includes('Approved vs observed'))`},{d:4,name:'scenario01-reasoning',selector:`[...document.querySelectorAll('.reading-scenario-card p')].find(e=>e.innerText.includes('ป้องกันไม่ให้ผู้โจมตี'))`},{d:5,name:'signature-caveat',selector:`[...document.querySelectorAll('section.reading-definition-unit')].find(e=>e.querySelector('h5')?.textContent.startsWith('Digital Signatures'))`}];
 for(const c of cases)for(const [width,height]of [[1366,768],[360,800]])for(const theme of ['light','dark']){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${c.d}`});for(let i=0;i<80;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${c.d}"] table')`))break;await sleep(100);}
  await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(150);
  if(c.d===2&&width>500)c.selector=`document.querySelector('[data-diagram="bcVsDrScope"]')`;
  if(c.d===2&&width<500)c.selector=`document.querySelector('.reading-mob-pill-accent')`;
  const r=await evaluate(`(()=>{const e=${c.selector};if(!e)throw Error('Missing ${c.name}');e.scrollIntoView({block:'center',behavior:'instant'});return{text:e.innerText||e.textContent,html:e.outerHTML};})()`);await sleep(180);const file=`close-D${c.d}-${width}x${height}-${theme}-${c.name}.png`,im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',file),Buffer.from(im.data,'base64'));matrix.push({domain:c.d,name:c.name,width,height,theme,...r,screenshots:['screenshots/'+file]});
 }
 fs.writeFileSync(path.join(OUT,'close-browser-qa.json'),JSON.stringify({matrix,exceptions,consoleErrors,status:matrix.length===20&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL'},null,2)+'\\n');console.log('Close captures: '+matrix.length);
}catch(e){console.error(e);fs.writeFileSync(path.join(OUT,'close-browser-error.txt'),e.stack);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
'''
(OUT/'close-browser-qa.mjs').write_bytes(s.encode())
