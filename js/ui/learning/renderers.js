import { element, localize } from './dom.js';
import { registerRendererType } from '../../core/learning-schema.js';
import { isStructuredRenderer, semanticBlocks } from '../../core/learning-visuals.js';
import { renderPillars, renderIncidentFlow, renderScenarioDecision, renderVisualThumbnail } from './visual-components.js';
const registry = new Map();
/** Trusted code registers adapters. JSON never supplies module URLs or executable content. */
export function registerLearningRenderer(id, { validate, load, thumbnail }) {
  if (typeof load !== 'function' || typeof thumbnail !== 'function') throw Error('Renderer needs load and thumbnail functions');
  registerRendererType(id, validate); registry.set(id, { load, thumbnail });
}
function blocks(host, { slide, lesson, language, mode, signal }) {
  const doc = host.ownerDocument;
  for (const b of slide.blocks || []) {
    if (b.kind === 'text') host.append(localize(element(doc, 'p'), b.text, language));
    if (b.kind === 'list') { const ul = element(doc, 'ul'); for (const item of b.items) ul.append(localize(element(doc, 'li'), item, language)); host.append(ul); }
    if (b.kind === 'table') {
      const wrap = element(doc, 'div', 'learning-table-scroll'), table = element(doc, 'table'); table.append(localize(element(doc, 'caption'), b.caption, language));
      const head = element(doc, 'thead'), tr = element(doc, 'tr'); for (const col of b.columns) { const th = localize(element(doc, 'th'), col, language); th.setAttribute('scope', 'col'); tr.append(th); } head.append(tr); table.append(head);
      const body = element(doc, 'tbody'); for (const row of b.rows) { const r = element(doc, 'tr'); for (const cell of row) r.append(localize(element(doc, 'td'), cell, language)); body.append(r); } table.append(body); wrap.append(table); host.append(wrap);
    }
    if (b.kind === 'diagram') {
      const figure = element(doc, 'figure', 'learning-diagram'); figure.append(localize(element(doc, 'figcaption'), b.description, language));
      if (mode !== 'reading') {
        const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', `0 0 ${Math.max(1, b.steps.length) * 200} 100`); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false');
        b.steps.forEach((step, index) => {
          const rect = doc.createElementNS('http://www.w3.org/2000/svg', 'rect'); rect.setAttribute('x', index * 200 + 5); rect.setAttribute('y', '10'); rect.setAttribute('width', '165'); rect.setAttribute('height', '70'); rect.setAttribute('rx', '12'); rect.setAttribute('fill', '#EFF6FF'); rect.setAttribute('stroke', '#2563EB');
          const label = doc.createElementNS('http://www.w3.org/2000/svg', 'text'); label.setAttribute('x', index * 200 + 87); label.setAttribute('y', '52'); label.setAttribute('text-anchor', 'middle'); label.setAttribute('fill', '#1E293B'); label.textContent = step[language === 'th' ? 'th' : 'en']; svg.append(rect, label);
          if (index < b.steps.length - 1) { const arrow = doc.createElementNS('http://www.w3.org/2000/svg', 'text'); arrow.setAttribute('x', index * 200 + 175); arrow.setAttribute('y', '52'); arrow.setAttribute('fill', '#2563EB'); arrow.textContent = '→'; svg.append(arrow); }
        }); figure.append(svg);
      }
      const ol = element(doc, 'ol'); for (const step of b.steps) ol.append(localize(element(doc, 'li'), step, language)); figure.append(ol); host.append(figure);
    }
    if (b.kind === 'reveal') { const details = element(doc, 'details'); details.setAttribute('data-slide-interactive', ''); details.append(localize(element(doc, 'summary'), b.label, 'en'), localize(element(doc, 'p'), b.text, language)); if (mode === 'reading') details.open = true; host.append(details); }
    if (b.kind === 'media') {
      const a = lesson.assets.find(asset => asset.id === b.assetId); if (!a) continue;
      const figure = element(doc, 'figure'); const fallback = () => { figure.replaceChildren(localize(element(doc, 'figcaption'), a.transcript || a.alt, language)); };
      if (mode === 'reading' && a.type !== 'image') { fallback(); host.append(figure); continue; }
      const media = element(doc, a.type === 'image' ? 'img' : a.type); media.src = new URL(`../../../${a.path}`, import.meta.url).href; media.setAttribute('data-slide-interactive', '');
      if (a.type === 'image') { media.alt = language === 'both' ? `${a.alt.en} / ${a.alt.th}` : a.alt[language]; media.loading = 'lazy'; }
      else { media.controls = true; media.preload = 'none'; }
      media.addEventListener('error', fallback, { signal }); signal.addEventListener('abort', () => { media.pause?.(); media.removeAttribute('src'); media.load?.(); }, { once: true });
      figure.append(media, localize(element(doc, 'figcaption'), a.transcript || a.alt, language)); host.append(figure);
    }
  }
}
export function renderThumbnail(host, slide, language) {
  if (isStructuredRenderer(slide.rendererId)) { renderVisualThumbnail(host, { slide, language }); return; }
  const custom = registry.get(slide.rendererId); if (custom) { custom.thumbnail(host, { slide, language }); return; }
  const doc = host.ownerDocument; host.append(element(doc, 'strong', '', slide.title[language === 'th' ? 'th' : 'en']));
  const first = slide.blocks?.[0] || semanticBlocks(slide)?.[0]; let preview = first?.text || first?.description || first?.caption || first?.items?.[0];
  if (preview) host.append(element(doc, 'small', '', preview[language === 'th' ? 'th' : 'en']));
  if (first?.kind === 'table') host.append(element(doc, 'span', 'learning-thumb-pattern', '▥  ▥  ▥'));
  if (first?.kind === 'diagram') host.append(element(doc, 'span', 'learning-thumb-pattern', '□ → □ → □'));
  if (first?.kind === 'reveal') host.append(element(doc, 'span', 'learning-thumb-pattern', '＋'));
}
export function renderSlide(host, context) {
  const abort = new AbortController(); let cleanup = () => {}; host.replaceChildren();
  host.setAttribute('data-layout', context.slide.layoutId || 'default');
  host.setAttribute('data-renderer', context.slide.rendererId || 'text');
  const heading = localize(element(host.ownerDocument, 'h2', 'learning-slide-title'), context.slide.title, context.language); host.append(heading);
  const body = element(host.ownerDocument, 'div', 'learning-slide-body');
  body.setAttribute('data-layout', context.slide.layoutId || 'default');
  host.append(body);
  const args = { ...context, signal: abort.signal };
  const getSemanticSlide = () => ({ ...context.slide, blocks: (context.slide.blocks && context.slide.blocks.length) ? context.slide.blocks : semanticBlocks(context.slide) });
  const fallback = () => { if (!abort.signal.aborted) { body.replaceChildren(); blocks(body, { ...args, slide: getSemanticSlide(), mode: 'reading' }); } };
  const custom = registry.get(context.slide.rendererId);

  if (context.mode !== 'reading') {
    if (context.slide.rendererId === 'pillars') {
      const handle = renderPillars(body, args); cleanup = () => handle?.destroy?.();
    } else if (context.slide.rendererId === 'incident-flow') {
      const handle = renderIncidentFlow(body, args); cleanup = () => handle?.destroy?.();
    } else if (context.slide.rendererId === 'scenario-decision') {
      const handle = renderScenarioDecision(body, args); cleanup = () => handle?.destroy?.();
    } else if (custom) {
      Promise.resolve().then(() => custom.load()).then(module => {
        if (abort.signal.aborted) return; const handle = module.render(body, args); cleanup = () => handle?.destroy?.();
      }).catch(fallback);
    } else blocks(body, args);
  } else {
    blocks(body, { ...args, slide: getSemanticSlide(), mode: 'reading' });
  }
  return { destroy() { abort.abort(); cleanup(); } };
}
