import { element, button } from './dom.js';

/** Accessible modal popup displaying supported keyboard shortcuts. */
export function openKeyboardHelp(host, { onClose = () => {} }) {
  const doc = host.ownerDocument, abort = new AbortController(), opener = doc.activeElement;
  const overlay = element(doc, 'div', 'viewer-help-overlay');
  const dialog = element(doc, 'section', 'viewer-help-dialog');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'viewer-help-title');

  const header = element(doc, 'header', 'viewer-help-header');
  const title = element(doc, 'h2', 'viewer-help-title', 'Keyboard Shortcuts');
  title.id = 'keyboard-help-title';
  title.setAttribute('id', 'keyboard-help-title');
  const closeBtn = button(doc, '✕', 'en', () => destroy(), abort.signal, 'viewer-control viewer-help-close');
  closeBtn.setAttribute('aria-label', 'Close keyboard shortcuts');
  closeBtn.title = 'Close';
  header.append(title, closeBtn);

  const content = element(doc, 'div', 'viewer-help-content');
  const shortcuts = [
    { desc: 'Previous slide', keys: ['←', '<'] },
    { desc: 'Next slide', keys: ['→', '>'] },
    { desc: 'Toggle fullscreen', keys: ['F'] },
    { desc: 'Exit fullscreen / Close dialog', keys: ['Esc'] },
    { desc: 'Keyboard shortcuts', keys: ['?'] }
  ];

  for (const item of shortcuts) {
    const row = element(doc, 'div', 'viewer-shortcut-row');
    const desc = element(doc, 'span', 'viewer-shortcut-desc', item.desc);
    const keysWrap = element(doc, 'span', 'viewer-shortcut-keys');
    item.keys.forEach((k, idx) => {
      if (idx > 0) {
        const sep = element(doc, 'span', 'viewer-shortcut-sep', ' or ');
        keysWrap.append(sep);
      }
      const kbd = element(doc, 'kbd', 'viewer-kbd', k);
      keysWrap.append(kbd);
    });
    row.append(desc, keysWrap);
    content.append(row);
  }

  dialog.append(header, content);
  overlay.append(dialog);
  host.append(overlay);

  const background = [];
  for (let node = overlay; node.parentElement; node = node.parentElement) {
    for (const sibling of node.parentElement.children) {
      if (sibling !== node) {
        background.push([sibling, !!sibling.inert]);
        sibling.inert = true;
      }
    }
    if (node.parentElement === doc.body) break;
  }

  let destroyed = false;
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    abort.abort();
    overlay.parentElement?.removeChild(overlay);
    for (const [n, inert] of background) n.inert = inert;
    if (opener?.isConnected) opener.focus();
    onClose();
  }

  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      destroy();
      return;
    }
    if (event.key === 'Tab') {
      const focusable = [closeBtn].filter(n => !n.disabled);
      if (focusable.length) {
        event.preventDefault();
        focusable[0].focus();
      }
    }
  }, { signal: abort.signal });

  overlay.addEventListener('click', event => {
    if (event.target === overlay) destroy();
  }, { signal: abort.signal });

  closeBtn.focus();
  return { destroy };
}
