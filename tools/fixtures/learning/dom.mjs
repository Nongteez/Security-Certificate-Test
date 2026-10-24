// Minimal DOM/event double for Node behavior checks, not a browser or layout engine.
export class TestElement extends EventTarget {
  constructor(tag, doc) { super(); this.tagName = tag.toUpperCase(); this.ownerDocument = doc; this.children = []; this.attributes = new Map(); this.style = {}; this.hidden = false; this.disabled = false; this.scrollLeft = 0; this.clientWidth = 600; this.textContent = ''; this.className = ''; }
  append(...nodes) { for (const node of nodes) { if (typeof node === 'string') { this.textContent += node; continue; } node.parentElement = this; this.children.push(node); } }
  replaceChildren(...nodes) { this.children.forEach(n => { n.parentElement = null; }); this.children = []; this.textContent = ''; this.append(...nodes); }
  removeChild(node) { const index = this.children.indexOf(node); if (index < 0) throw Error('Not a child'); this.children.splice(index, 1); node.parentElement = null; return node; }
  setAttribute(k, v) { this.attributes.set(k, String(v)); if (k === 'class') this.className = String(v); }
  getAttribute(k) { return this.attributes.get(k) ?? null; }
  hasAttribute(k) { return this.attributes.has(k); }
  removeAttribute(k) { this.attributes.delete(k); }
  get classList() { return { add: (...names) => { this.className = [...new Set([...this.className.split(' '), ...names])].join(' ').trim(); }, remove: (...names) => { this.className = this.className.split(' ').filter(n => !names.includes(n)).join(' '); }, toggle: (name, on) => { if (on ?? !this.className.split(' ').includes(name)) this.classList.add(name); else this.classList.remove(name); }, contains: name => this.className.split(' ').includes(name) }; }
  matches(selector) { return selector.split(',').some(raw => { const s = raw.trim(); if (s.startsWith('.')) return this.className.split(' ').includes(s.slice(1)); if (s.startsWith('#')) return this.id === s.slice(1); if (s.startsWith('[')) { const [k, v] = s.slice(1, -1).split('='); return this.hasAttribute(k) && (!v || this.getAttribute(k) === v.replaceAll('"', '')); } return s.toUpperCase() === this.tagName; }); }
  closest(s) { return this.matches(s) ? this : this.parentElement?.closest(s) || null; }
  contains(node) { return node === this || this.children.some(child => child.contains(node)); }
  querySelectorAll(s) { return this.children.flatMap(child => [...(child.matches(s) ? [child] : []), ...child.querySelectorAll(s)]); }
  querySelector(s) { return this.querySelectorAll(s)[0] || null; }
  focus() { this.ownerDocument.activeElement = this; }
  get isConnected() { return this.ownerDocument.body.contains(this); }
  getBoundingClientRect() { return { left: 0, top: 0, width: 1280, height: 720 }; }
  scrollTo({ left }) { this.scrollLeft = left; }
}
export class TestDocument extends EventTarget {
  constructor() { super(); this.body = new TestElement('body', this); this.activeElement = this.body; this.fullscreenElement = null; this.fullscreenEnabled = true; }
  createElement(tag) { return new TestElement(tag, this); }
  createElementNS(ns, tag) { return this.createElement(tag); }
  getSelection() { return { toString: () => '' }; }
  async exitFullscreen() { this.fullscreenElement = null; this.dispatchEvent(new Event('fullscreenchange')); }
}
export function fire(node, type, props = {}) { const event = new Event(type, { cancelable: true }); for (const [key, value] of Object.entries(props)) Object.defineProperty(event, key, { value }); node.dispatchEvent(event); return event; }
