// Development-only CDP session. Uses installed Chrome and Node; no packages or application hooks.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {spawn} from 'node:child_process';
import readline from 'node:readline';
const root=process.cwd(),qa=path.join(root,'artifacts/qa/domain-3-lesson-1');
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=http.createServer((req,res)=>{
 try{const url=new URL(req.url,'http://localhost'),p=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
 if(!p.startsWith(root+path.sep)||p.includes(path.sep+'.git'+path.sep)||!fs.statSync(p).isFile())throw Error('Invalid path');
 res.writeHead(200,{'Content-Type':(mime[path.extname(p)]||'application/octet-stream')+'; charset=utf-8','Cache-Control':'no-store'});fs.createReadStream(p).pipe(res);
 }catch{res.writeHead(404);res.end('Not found');}
});
await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(4207,'127.0.0.1',resolve);});
const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--remote-debugging-address=127.0.0.1','--remote-debugging-port=9237',`--user-data-dir=${path.join(qa,'chrome-profile')}`,'--no-first-run','--no-default-browser-check','--disable-background-networking','about:blank'],{stdio:'ignore',windowsHide:true});
let targets;for(let i=0;i<50;i++){try{targets=await(await fetch('http://127.0.0.1:9237/json/list')).json();break;}catch{await new Promise(r=>setTimeout(r,150));}}
if(!targets)throw Error('Isolated Chrome debugging endpoint unavailable');
const ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
let seq=0;const pending=new Map(),errors=[];
ws.onmessage=({data})=>{const m=JSON.parse(data);if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params);};
const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;const timeout=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout: '+method));},15000);pending.set(id,{resolve:v=>{clearTimeout(timeout);resolve(v);},reject:e=>{clearTimeout(timeout);reject(e);}});ws.send(JSON.stringify({id,method,params}));});
const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result?.value;};
const screenshot=async(name,full=false)=>{let clip;if(full){const m=await send('Page.getLayoutMetrics');clip={x:0,y:0,width:m.cssContentSize.width,height:m.cssContentSize.height,scale:1};}const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:full,...(clip?{clip}:{})});fs.writeFileSync(path.join(qa,name),Buffer.from(r.data,'base64'));return name;};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
await send('Page.enable');await send('Runtime.enable');await send('Emulation.setDeviceMetricsOverride',{width:1366,height:768,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://127.0.0.1:4207/'});await sleep(1200);
console.log(JSON.stringify({ready:true,url:'http://127.0.0.1:4207/',body:await evaluate('document.body.innerText.slice(0,3500)')}));
const lines=readline.createInterface({input:process.stdin,crlfDelay:Infinity});
try{for await(const line of lines){if(line==='EXIT')break;try{const value=await eval(`(async()=>{${line}})()`);console.log(JSON.stringify({ok:true,value}));}catch(e){console.log(JSON.stringify({ok:false,error:e.stack}));}}}
finally{try{await send('Browser.close');}catch{}ws.close();server.close();if(!chrome.killed)chrome.kill();}
