import assert from 'node:assert/strict';
import { test } from 'node:test';
import { TestDocument } from './fixtures/learning/dom.mjs';
const api = await import('../js/ui/learning/presentation-stage.js').catch(() => ({}));
test('stage fits the three approved desktop viewports without the old app width cap', () => {
  assert.equal(typeof api.calculateStageLayout, 'function');
  for (const [width, height, w, h] of [[1920,1080,1742.22,980],[1440,900,1408,792],[1366,768,1187.56,668]]) {
    const actual = api.calculateStageLayout({ width, height }); assert.ok(Math.abs(actual.width-w)<.1); assert.ok(Math.abs(actual.height-h)<.1); assert.equal(actual.mode, 'presentation');
  }
});
test('mobile uses readable flow and fullscreen accounts for its accessible control dock', () => {
  assert.equal(typeof api.calculateStageLayout, 'function');
  const mobile = api.calculateStageLayout({ width:390, height:844 }); assert.equal(mobile.mode,'reading'); assert.ok(mobile.width<=390);
  const full = api.calculateStageLayout({width:1920,height:1080,fullscreen:true}); assert.ok(full.width>1742); assert.ok(full.height<=1080);
});
test('visible status messages reserve their height and extra gap without overrunning the viewport', () => {
  const actual = api.calculateStageLayout({width:1440,height:900,noticeHeight:48});
  assert.equal(actual.height,740);
});
function setup({fonts, overflow=0, widthMismatch=0}={}) {
  assert.equal(typeof api.createPresentationStage, 'function');
  const doc = new TestDocument(), frames = new Map(), observed = new Set(); let id=0, disconnected=0, resize;
  const view = new EventTarget(); Object.assign(view,{innerWidth:1440,innerHeight:900,requestAnimationFrame: fn => {frames.set(++id,fn);return id;},cancelAnimationFrame:n=>frames.delete(n),ResizeObserver:class {constructor(fn){resize=fn;} observe(n){observed.add(n);} unobserve(n){observed.delete(n);} disconnect(){disconnected++;}}});
  doc.defaultView=view; doc.fonts=fonts;
  const workspace=doc.createElement('div'), stage=doc.createElement('article'), toolbar=doc.createElement('nav'),body=doc.createElement('div');body.className='learning-slide-body';stage.append(body);workspace.append(toolbar,stage);doc.body.append(workspace);
  workspace.getBoundingClientRect=()=>({width:1440,height:900}); toolbar.getBoundingClientRect=()=>({height:56});
  Object.defineProperties(stage,{clientWidth:{get:()=>parseFloat(stage.style.width||'0')+widthMismatch},clientHeight:{get:()=>parseFloat(stage.style.height||'0')},scrollWidth:{get:()=>stage.clientWidth},scrollHeight:{get:()=>stage.clientHeight+overflow}});
  const notice=doc.createElement('p');notice.hidden=true;notice.getBoundingClientRect=()=>({height:48});
  const modes=[]; const handle=api.createPresentationStage(workspace,stage,toolbar,{notice,onModeChange:(mode,reason)=>modes.push({mode,reason})});
  return {handle,modes,frames,view,stage,body,observed,showNotice(){notice.hidden=false;resize();},grow(extra){overflow=extra;if(observed.has(body))resize();},async settle(){for(let i=0;i<8;i++){await Promise.resolve();const jobs=[...frames.values()];frames.clear();jobs.forEach(fn=>fn());}},get disconnected(){return disconnected;}};
}
test('overflow fallback waits for font readiness and stable measurements', async () => {
  let ready;const fonts={status:'loading',ready:new Promise(r=>ready=r)};const s=setup({fonts,overflow:80});
  s.handle.setContent({key:'slide-en',ready:Promise.resolve()});await s.settle();assert.equal(s.handle.mode,'presentation');
  fonts.status='loaded';ready();await s.settle();assert.equal(s.handle.mode,'reading');assert.equal(s.modes.at(-1).reason,'overflow');s.handle.destroy();
});
test('fitting content remains a presentation and unmeasured/narrow constrained boxes do not trigger false fallback', async () => {
  for(const widthMismatch of [0,-300]){const s=setup({overflow:widthMismatch?100:0,widthMismatch});s.handle.setContent({key:'fit'});await s.settle();assert.equal(s.handle.mode,'presentation');s.handle.destroy();}
});
test('late renderer completion and measurements cannot change a disposed stage', async () => {
  let release;const s=setup({overflow:100});s.handle.setContent({key:'pending',ready:new Promise(r=>release=r)});s.handle.destroy();release();await s.settle();assert.equal(s.modes.length,0);assert.equal(s.frames.size,0);assert.equal(s.disconnected,1);
});
test('expanding slide content triggers a new fit check even when the fixed stage box does not resize',async()=>{
  const s=setup();s.handle.setContent({key:'expand'});await s.settle();assert.equal(s.handle.mode,'presentation');s.grow(120);await s.settle();assert.equal(s.handle.mode,'reading');s.handle.destroy();
});
test('the fallback notice cannot cause a fit/reading oscillation on the same viewport and content',async()=>{
  const s=setup({overflow:120});s.handle.setContent({key:'long'});await s.settle();assert.equal(s.handle.mode,'reading');s.showNotice();await s.settle();assert.equal(s.handle.mode,'reading');assert.equal(s.modes.length,1);s.handle.destroy();
});
