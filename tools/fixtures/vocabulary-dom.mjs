/** Minimal HTML/DOM/event double for the existing vocabulary screen in Node.
 * No browser, script execution, layout, CSS or accessibility engine is present.
 */
import { TestElement, TestDocument } from './learning/dom.mjs';

const decode = s => s.replace(/&(?:amp|lt|gt|quot|#39);/g, m => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"}[m]));
const voids = new Set(['input','img','br','hr','meta','link','source','wbr']);

class VocabularyElement extends TestElement {
  constructor(tag, doc) { super(tag, doc); this._text = ''; this._html = ''; }
  get textContent() { return (this._text || '') + (this.children || []).map(c => c.textContent).join(''); }
  set textContent(value) { this._text = String(value); if (this.children) this.replaceChildren(); this._text = String(value); }
  replaceChildren(...nodes) { this.children.forEach(c => { c.parentElement = null; }); this.children = []; this._text = ''; this.append(...nodes); }
  get innerHTML() { return this._html; }
  set innerHTML(html) {
    this._html = String(html); this.replaceChildren();
    const stack = [this];
    for (const token of this._html.replace(/<!--[\s\S]*?-->/g, '').match(/<[^>]+>|[^<]+/g) || []) {
      if (!token.startsWith('<')) { stack.at(-1)._text += decode(token); continue; }
      if (/^<\//.test(token)) {
        const tag = token.match(/^<\/([^\s>]+)/)?.[1].toUpperCase();
        const index = stack.findLastIndex(e => e.tagName === tag);
        if (index > 0) stack.length = index;
        continue;
      }
      const match = token.match(/^<([\w:-]+)([\s\S]*?)\/?\s*>$/);
      if (!match) continue;
      const node = new VocabularyElement(match[1], this.ownerDocument);
      for (const attr of match[2].matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
        const key = attr[1]; const value = decode(attr[2] ?? attr[3] ?? attr[4] ?? '');
        node.setAttribute(key, value);
        if (key === 'id') node.id = value;
        if (key === 'value') node.value = value;
        if (['checked','disabled','hidden','selected','inert'].includes(key)) node[key] = true;
      }
      stack.at(-1).append(node);
      if (!voids.has(match[1].toLowerCase()) && !/\/\s*>$/.test(token)) stack.push(node);
    }
  }
  get value() {
    if (this._value !== undefined) return this._value;
    if (this.tagName === 'SELECT') return (this.children.find(c => c.selected) || this.children[0])?.value || '';
    return this.getAttribute('value') || '';
  }
  set value(v) { this._value = String(v); }
  matches(selector) {
    return selector.split(',').some(raw => {
      let s = raw.trim();
      if (s.includes(':not(:disabled)')) { if (this.disabled) return false; s = s.replace(':not(:disabled)', ''); }
      const attributes = [...s.matchAll(/\[([^\]=]+)(?:=["']?([^\]"']*)["']?)?\]/g)];
      for (const [, key, value] of attributes) {
        if (!this.hasAttribute(key) && !(['inert','hidden','disabled','checked'].includes(key) && this[key])) return false;
        if (value !== undefined && this.getAttribute(key) !== value) return false;
      }
      s = s.replace(/\[[^\]]*\]/g, '');
      const tag = s.match(/^[\w-]+/)?.[0];
      if (tag && tag.toUpperCase() !== this.tagName) return false;
      const id = s.match(/#([\w-]+)/)?.[1];
      if (id && id !== this.id) return false;
      return [...s.matchAll(/\.([\w-]+)/g)].every(([, name]) => this.className.split(' ').includes(name));
    });
  }
  click() { if (this.disabled) return; this.focus(); const event = new Event('click', { cancelable:true }); this.dispatchEvent(event); this.onclick?.(event); }
  setSelectionRange() {}
}

export function createVocabularyDOM() {
  const prior = { document:globalThis.document, window:globalThis.window, ResizeObserver:globalThis.ResizeObserver };
  const doc = new TestDocument();
  doc.body = new VocabularyElement('body', doc);
  doc.documentElement = new VocabularyElement('html', doc);
  doc.documentElement.append(doc.body); doc.activeElement = doc.body;
  doc.createElement = tag => new VocabularyElement(tag, doc);
  const container = doc.createElement('div'); doc.body.append(container);
  globalThis.document = doc;
  globalThis.window = new EventTarget();
  globalThis.ResizeObserver = class { constructor(fn) { this.fn = fn; } observe() { this.fn([]); } disconnect() {} };
  return { container, document:doc, restore() {
    for (const [key,value] of Object.entries(prior)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  }};
}

export function change(element, value) { element.value = value; element.dispatchEvent(new Event('change')); }
export function input(element, value) { element.value = value; element.dispatchEvent(new Event('input')); }
export function check(element, checked) { element.checked = checked; element.dispatchEvent(new Event('change')); }
