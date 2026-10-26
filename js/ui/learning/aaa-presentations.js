import {element, localize} from './dom.js';

const LESSON_ID = 'lesson-d1-02-aaa-mfa';
const compositions = new Map([
  ['slide-01-aaa-map', 'map'], ['slide-02-claim-and-proof', 'identity'],
  ['slide-03-permission-boundary', 'permission'], ['slide-04-activity-trail', 'accounting'],
  ['slide-05-factor-families', 'factors'], ['slide-06-mfa-or-more-steps', 'combinations'],
  ['slide-07-access-case', 'case']
]);
export const hasAaaPresentation = ({lesson, slide}) => lesson?.id === LESSON_ID && compositions.has(slide?.id);

// Original, trusted geometry only; source text is always inserted as text nodes.
const drawings = {
  identity: '<rect x="18" y="14" width="124" height="90" rx="10"/><circle cx="56" cy="47" r="13"/><path d="M34 85c0-27 44-27 44 0M91 43h32M91 59h24M91 75h18"/>',
  key: '<circle cx="46" cy="58" r="27"/><circle cx="46" cy="58" r="9"/><path d="M73 58h66v18h-18V62M102 58v21"/>',
  policy: '<path d="M35 12h65l25 25v72H35zM100 12v27h25M50 61l8 8 15-18M84 61h24M50 87l8 8 15-18M84 87h24"/>',
  journal: '<rect x="20" y="12" width="120" height="96" rx="8"/><path d="M20 39h120M43 12v96M56 55h65M56 73h45M56 91h58"/>',
  person: '<circle cx="80" cy="35" r="21"/><path d="M36 108V91c0-42 88-42 88 0v17"/>',
  password: '<rect x="12" y="33" width="136" height="59" rx="12"/><path d="M34 54v18M25 63h18M66 54v18M57 63h18M98 54v18M89 63h18M121 75h12"/>',
  fingerprint: '<path d="M35 71V58c0-57 90-57 90 0v13M49 86V59c0-38 62-38 62 0v34M63 98V60c0-21 34-21 34 0v38M80 56v51M35 83v12M125 84v11"/>',
  session: '<path d="M80 9 128 27v34c0 26-26 43-48 51-22-8-48-25-48-51V27zM56 58l16 16 35-35"/>',
  allow: '<circle cx="80" cy="60" r="44"/><path d="m56 60 16 16 34-35"/>',
  deny: '<circle cx="80" cy="60" r="44"/><path d="m63 43 34 34M97 43 63 77"/>',
  location: '<path d="M80 109S43 78 43 48a37 37 0 0 1 74 0c0 30-37 61-37 61z"/><circle cx="80" cy="47" r="13"/>',
  order: '<path d="M39 10h83v100l-14-7-14 7-14-7-14 7-14-7-13 7zM53 33h54M53 50h54M53 67h30M53 87h54"/>'
};
function icon(doc, name) {
  const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 160 120'); svg.setAttribute('class', `aaa-icon aaa-icon-${name}`);
  svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false');
  svg.innerHTML = `<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${drawings[name] || drawings.order}</g>`;
  return svg;
}
export function renderAaaPresentation(host, context) {
  const {slide} = context, kind = compositions.get(slide.id), doc = host.ownerDocument;
  const language = context.language === 'th' ? 'th' : 'en';
  const put = (tag, cls, value) => {const n = element(doc, tag, cls); if (value) localize(n, value, language); return n;};
  const root = element(doc, 'section', `aaa-v3 aaa-${kind}`);
  root.setAttribute('data-aaa-composition', kind); root.setAttribute('lang', language);
  const header = element(doc, 'header', 'aaa-header');
  header.append(element(doc, 'p', 'aaa-kicker', `IDENTITY & ACCESS / ${String([...compositions.keys()].indexOf(slide.id) + 1).padStart(2, '0')}`), put('h3', 'aaa-headline', slide.title), put('p', 'aaa-lead', slide.blocks[0].text));
  const main = element(doc, 'div', 'aaa-main'), footer = put('footer', 'aaa-footer', slide.blocks[3].text);
  root.append(header, main, footer); host.append(root);
  const data = slide.blocks[1], rows = data.rows;
  const item = (parent, tag, cls, value) => {const n = put(tag, cls, value); parent.append(n); return n;};
  if (kind === 'map') {
    for (const [i, row] of rows.entries()) {
      const col = element(doc, 'section', `aaa-function aaa-function-${i}`);
      col.append(icon(doc, ['session','policy','journal'][i]));
      item(col, 'p', 'aaa-letter', {en:'A',th:'A'}); item(col, 'h4', 'aaa-term', row[0]);
      item(col, 'p', 'aaa-question', row[1]); item(col, 'p', 'aaa-caption', row[2]); main.append(col);
    }
  } else if (kind === 'identity') {
    for (const [i,row] of rows.entries()) {
      const step = element(doc, 'section', 'aaa-identity-step');
      step.append(icon(doc, ['identity','key','session'][i]));
      item(step, 'h4', 'aaa-term', row[0]); item(step, 'p', 'aaa-example', row[1]); item(step, 'p', 'aaa-caption', row[2]);
      if (i < 2) step.append(element(doc,'span','aaa-arrow','→'));
      main.append(step);
    }
  } else if (kind === 'permission') {
    const identity = element(doc, 'div', 'aaa-verified'); identity.append(icon(doc, 'person'), icon(doc,'session')); item(identity,'h4','aaa-term',rows[0][0]); main.append(identity);
    const branches = element(doc, 'div', 'aaa-permission-paths');
    for (const [i,row] of rows.entries()) {
      const path = element(doc,'section',`aaa-permission-path aaa-result-${i}`); path.append(icon(doc, i ? 'deny' : 'allow'));
      const copy = element(doc,'div','aaa-path-copy'); item(copy,'h4','aaa-term',row[1]); item(copy,'p','aaa-verdict',row[2]); path.append(copy); branches.append(path);
    }
    main.append(branches);
  } else if (kind === 'accounting') {
    const journal = element(doc,'div','aaa-journal'); journal.append(icon(doc,'journal'));
    const table = element(doc,'table','aaa-event-table'); table.append(put('caption','aaa-caption',data.caption));
    const head = element(doc,'thead'), tr = element(doc,'tr'); for (const col of data.columns) {const th = put('th','',col); th.setAttribute('scope','col'); tr.append(th);} head.append(tr); table.append(head);
    const body = element(doc,'tbody'); for (const row of rows) {const line = element(doc,'tr'); for(const cell of row) line.append(put('td','',cell)); body.append(line);} table.append(body); journal.append(table); main.append(journal);
  } else if (kind === 'factors') {
    for (const [i,row] of rows.entries()) {
      const factor = element(doc,'section',`aaa-factor aaa-factor-${i}`); factor.append(icon(doc,['password','key','fingerprint'][i]));
      item(factor,'h4','aaa-term',row[0]); item(factor,'p','aaa-question',row[1]); item(factor,'p','aaa-caption',row[2]); main.append(factor);
    }
  } else if (kind === 'combinations') {
    for (const [i,row] of rows.entries()) {
      const line = element(doc,'section',`aaa-combination aaa-combination-${i}`), symbols = element(doc,'div','aaa-evidence');
      symbols.append(icon(doc,'password'),element(doc,'span','aaa-plus','+'),icon(doc,['password','key','location'][i]));
      line.append(symbols); const copy = element(doc,'div','aaa-combination-copy'); item(copy,'h4','aaa-example',row[0]); item(copy,'p','aaa-caption',row[2]); line.append(copy); item(line,'p','aaa-verdict',row[1]); main.append(line);
    }
  } else if (kind === 'case') {
    const timeline = element(doc,'div','aaa-case-timeline');
    for (const [i,row] of rows.entries()) {
      const step = element(doc,'section','aaa-case-step'); step.append(icon(doc,['key','deny','journal'][i])); item(step,'h4','aaa-example',row[0]);
      timeline.append(step);
    }
    main.append(timeline);
    const button = element(doc,'button','aaa-reasoning-button'); button.type = 'button'; button.setAttribute('data-action','aaa-reasoning');
    const reasoning = element(doc,'div','aaa-reasoning'); reasoning.id = 'aaa-case-reasoning'; button.setAttribute('aria-controls',reasoning.id);
    for (const row of rows) {const col = element(doc,'section'); item(col,'h4','aaa-term',row[1]); item(col,'p','aaa-caption',row[2]); reasoning.append(col);}
    const state = context.interactionState || {}, abort = new AbortController();
    const paint = () => {reasoning.hidden = !state.revealed; button.setAttribute('aria-expanded',String(!!state.revealed)); button.textContent = state.revealed ? 'Hide reasoning' : 'Show reasoning';};
    button.addEventListener('click',()=>{state.revealed = !state.revealed; paint();},{signal:abort.signal});
    const stop = () => abort.abort(); context.signal?.addEventListener('abort',stop,{once:true});
    if (context.signal?.aborted) stop(); paint(); main.append(button,reasoning);
    return {destroy(){abort.abort(); context.signal?.removeEventListener('abort',stop);}};
  }
  return {destroy(){}};
}
