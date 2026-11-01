/** Reading-only browser API adapter for the existing structural Node suites.
 * No layout, keyboard traversal or accessibility-engine assertions are simulated;
 * those are exercised in the real Chrome regression driver.
 */
import {createVocabularyDOM as createBaseDOM} from './vocabulary-dom.mjs';
import {clearReadingProgress} from '../../js/core/reading-progress.js';
import {state} from '../../js/core/state.js';

export function createReadingDOM() {
  const names=['history','location','MutationObserver','requestAnimationFrame','getComputedStyle','innerWidth'];
  const prior=Object.fromEntries(names.map(name=>[name,globalThis[name]]));
  const base=createBaseDOM();
  const win=globalThis.window,doc=base.document;
  const location={hash:'',pathname:'/index.html',search:''};
  const history={state:null,scrollRestoration:'auto',pushState(data,unused,url){this.state=data;location.hash=url.startsWith('#')?url:'';},replaceState(data,unused,url){this.state=data;location.hash=url.startsWith('#')?url:'';}};
  win.location=location;win.history=history;win.scrollY=0;
  Object.defineProperty(win,'innerWidth',{get:()=>globalThis.innerWidth||1200});
  win.scrollTo=(top)=>{win.scrollY=typeof top==='number'?top:top.top||0;};
  doc.getElementById=id=>doc.body.querySelector(`#${id}`);
  doc.fonts={ready:Promise.resolve()};
  const observers=new Set();
  globalThis.MutationObserver=class {constructor(callback){this.callback=callback;observers.add(this)}observe(){}disconnect(){observers.delete(this)}};
  globalThis.history=history;globalThis.location=location;
  globalThis.requestAnimationFrame=callback=>queueMicrotask(()=>{if(globalThis.document===doc)callback()});
  globalThis.getComputedStyle=()=>({overflowY:'visible'});
  clearReadingProgress();
  state.reading={selectedDomainId:1,sidebarCollapsed:false,expandedDomains:[1]};
  return {...base,restore(){
    // Match a real route unmount before removing the fixture's browser globals.
    base.container.replaceChildren();
    for(const observer of [...observers])observer.callback([]);
    base.restore();
    for(const [name,value] of Object.entries(prior)){
      if(value===undefined)delete globalThis[name];else globalThis[name]=value;
    }
  }};
}
