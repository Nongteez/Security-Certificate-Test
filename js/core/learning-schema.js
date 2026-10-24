import { isStructuredRenderer, validateVisual, semanticBlocks } from './learning-visuals.js';
/** Content is data. Only repository code may register supported renderer validators. */
export const OUTLINE_ID = 'isc2-cc-2026-09-01';
export const OBJECTIVE_COUNTS = [5, 4, 2, 3, 5];
const statuses = new Set(['coming-soon', 'in-preparation', 'published']);
const slug = value => typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) && value.length < 120;
const text = value => typeof value === 'string' && value.trim().length > 0;
export const isPair = value => value && text(value.en) && text(value.th);
const list = value => Array.isArray(value) ? value : [];
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const rendererTypes = new Map(['text', 'comparison', 'diagram', 'interactive'].map(id => [id, () => true]));
export function registerRendererType(id, validate) { if (!slug(id) || typeof validate !== 'function' || rendererTypes.has(id)) throw Error('Invalid or duplicate renderer registration'); rendererTypes.set(id, validate); }
export function safeLessonPath(value) { return typeof value === 'string' && /^lessons\/[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(value); }
export function safeAssetPath(value) { return typeof value === 'string' && /^assets\/learning\/isc2-cc-2026\/[a-z0-9-]+\/[a-zA-Z0-9_-]+\.(png|webp|jpg|jpeg|mp4|webm|mp3|ogg)$/.test(value); }
function httpsURL(value) { if (typeof value !== 'string') return false; try { return new URL(value).protocol === 'https:'; } catch { return false; } }
function result(errors, warnings = []) { return { valid: !errors.length, errors, warnings }; }
export function publishedLessons(catalog) { return list(catalog?.domains).flatMap(d => list(d.objectives).flatMap(o => list(o.lessons))).filter(l => l.status === 'published'); }
export function validateCatalog(catalog) {
  const errors = [], ids = new Map(), objectives = new Map(); const fail = m => errors.push(m);
  if (catalog?.schemaVersion !== 1 || catalog?.outlineId !== OUTLINE_ID || catalog?.certificationId !== 'isc2-cc' || !text(catalog?.revision)) fail('Unsupported catalog identity/version');
  if (list(catalog?.domains).length !== 5) fail('Exactly five Domains are required');
  const domains = new Set();
  for (const d of list(catalog?.domains)) {
    if (!object(d)) { fail('Domain must be an object'); continue; }
    if (!Number.isInteger(d.id) || d.id < 1 || d.id > 5 || domains.has(d.id) || !isPair(d.name) || !statuses.has(d.status)) fail('Invalid/duplicate Domain'); domains.add(d.id);
    if (list(d.objectives).length !== OBJECTIVE_COUNTS[d.id - 1]) fail('Invalid objective coverage');
    for (const o of list(d.objectives)) {
      if (!object(o)) { fail('Objective must be an object'); continue; }
      if (!new RegExp(`^${d.id}\\.[1-${OBJECTIVE_COUNTS[d.id - 1] || 1}]$`).test(o.id) || objectives.has(o.id) || !isPair(o.title) || !statuses.has(o.status) || !Array.isArray(o.lessons) || !Array.isArray(o.relatedLessonIds)) fail('Invalid/duplicate objective');
      objectives.set(o.id, o);
      for (const l of list(o.lessons)) {
        if (!object(l)) { fail('Lesson summary must be an object'); continue; }
        if (!slug(l.id) || ids.has(l.id) || l.domainId !== d.id || l.primaryObjectiveId !== o.id || !list(l.objectiveIds).includes(o.id) || new Set(list(l.objectiveIds)).size !== list(l.objectiveIds).length || !isPair(l.title) || !isPair(l.synopsis) || !statuses.has(l.status)) fail('Invalid/duplicate lesson summary');
        if (l.status === 'published' ? !text(l.revision) || !safeLessonPath(l.lessonPath) : l.lessonPath != null) fail('Invalid publication path/revision'); ids.set(l.id, l);
      }
    }
  }
  for (const l of ids.values()) if (!list(l.objectiveIds).length || l.objectiveIds.some(id => !objectives.has(id) || !id.startsWith(`${l.domainId}.`))) fail('Invalid lesson objective relation');
  for (const o of objectives.values()) {
    if (new Set(list(o.relatedLessonIds)).size !== list(o.relatedLessonIds).length) fail('Duplicate related lesson');
    for (const id of list(o.relatedLessonIds)) { const l = ids.get(id); if (!l || l.primaryObjectiveId === o.id || !l.objectiveIds.includes(o.id)) fail('Invalid related lesson'); }
  }
  return result(errors);
}
export function validateLesson(lesson) {
  const errors = [], warnings = [], published = lesson?.status === 'published';
  const requireContent = (ok, message) => { if (!ok) (published ? errors : warnings).push(message); };
  const fail = message => errors.push(message);
  if (lesson?.schemaVersion !== 1 || !slug(lesson?.id) || lesson?.outlineId !== OUTLINE_ID || !statuses.has(lesson?.status) || !text(lesson?.revision)) fail('Invalid lesson identity/publication state');
  if (!Number.isInteger(lesson?.domainId) || !OBJECTIVE_COUNTS[lesson.domainId - 1] || !list(lesson?.objectiveIds).includes(lesson?.primaryObjectiveId) || list(lesson?.objectiveIds).some(id => !new RegExp(`^${lesson.domainId}\\.[1-${OBJECTIVE_COUNTS[lesson.domainId - 1] || 1}]$`).test(id))) fail('Invalid lesson objectives');
  requireContent(isPair(lesson?.title) && isPair(lesson?.synopsis), 'Missing lesson languages');
  for (const field of ['outcomes', 'prerequisites']) { requireContent(Array.isArray(lesson?.[field]), `Missing ${field}`); for (const p of list(lesson?.[field])) requireContent(isPair(p), `Missing ${field} language`); }
  requireContent(lesson?.review?.reviewedRevision === lesson?.revision && text(lesson?.review?.evidencePath), 'Review revision/evidence missing');
  for (const kind of ['technical', 'bilingual', 'rights']) { const r = lesson?.review?.[kind]; requireContent(r?.status === 'approved' && text(r?.reviewer) && /^\d{4}-\d{2}-\d{2}$/.test(r?.reviewedAt || ''), `Missing ${kind} review`); }
  const assets = new Map(), refs = new Set();
  for (const r of list(lesson?.references)) {
    if (!object(r)) { fail('Reference must be an object'); continue; }
    if (!slug(r.id) || refs.has(r.id)) fail('Invalid/duplicate source reference'); refs.add(r.id);
    if (r.url !== undefined && !httpsURL(r.url)) fail('Invalid HTTPS source URL');
    requireContent(text(r.title) && text(r.locator) && ['official-scope', 'technical-primary', 'course', 'editorial'].includes(r.authority) && (r.url !== undefined ? httpsURL(r.url) : text(r.repositoryPath)), 'Incomplete reference');
  }
  requireContent(refs.size > 0, 'Published lesson requires sources');
  for (const a of list(lesson?.assets)) {
    if (!object(a)) { fail('Asset must be an object'); continue; }
    if (!slug(a.id) || assets.has(a.id) || !safeAssetPath(a.path) || !['image', 'video', 'audio'].includes(a.type)) fail('Unsafe/unsupported/duplicate asset'); assets.set(a.id, a);
    requireContent(isPair(a.alt) && text(a.license) && text(a.creator) && text(a.rightsEvidencePath), 'Asset descriptions/rights missing');
    if (a.type !== 'image') requireContent(isPair(a.transcript), 'Media requires transcript');
  }
  const slideIds = new Set(); requireContent(list(lesson?.slides).length > 0, 'No slides');
  for (const s of list(lesson?.slides)) {
    if (!object(s)) { fail('Slide must be an object'); continue; }
    if (!slug(s.id) || slideIds.has(s.id)) fail('Invalid/duplicate slide ID'); slideIds.add(s.id);
    const isCustom = rendererTypes.has(s.rendererId);
    const isStructured = isStructuredRenderer(s.rendererId);
    if (!isCustom && !isStructured) fail('Unsupported renderer');
    else if (isCustom && !rendererTypes.get(s.rendererId)(s)) fail('Renderer data invalid');
    else if (isStructured) {
      const vResult = validateVisual(s);
      for (const err of vResult.structure) fail(err);
      for (const err of vResult.content) requireContent(false, err);
    }
    requireContent(isPair(s.title) && text(s.layoutId), 'Slide title/layout missing');
    requireContent(s.review?.status === 'approved' && s.review?.reviewedRevision === lesson.revision, 'Slide review missing/stale');
    requireContent(Array.isArray(s.referenceIds) && s.referenceIds.length > 0, 'Slide sources missing');
    if (list(s.referenceIds).some(id => !refs.has(id))) fail('Broken slide reference');
    if (s.thumbnailAssetId && !assets.has(s.thumbnailAssetId)) fail('Broken thumbnail asset');
    const slideBlocks = list(s.blocks).length > 0 ? s.blocks : (isStructured ? semanticBlocks(s) : []);
    requireContent(slideBlocks.length > 0, 'Slide content missing');
    for (const b of slideBlocks) {
      if (!object(b)) { fail('Block must be an object'); continue; }
      if (!['text', 'list', 'table', 'media', 'diagram', 'reveal'].includes(b.kind)) { fail('Unsupported content block'); continue; }
      if (['text', 'reveal'].includes(b.kind)) requireContent(isPair(b.text), 'Text language missing');
      if (b.kind === 'reveal') requireContent(isPair(b.label), 'Interaction label missing');
      if (b.kind === 'list') requireContent(list(b.items).length > 0 && b.items.every(isPair), 'List languages missing');
      if (b.kind === 'table') requireContent(isPair(b.caption) && list(b.columns).length > 0 && b.columns.every(isPair) && list(b.rows).length > 0 && b.rows.every(row => Array.isArray(row) && row.length === b.columns.length && row.every(isPair)), 'Table language/structure missing');
      if (b.kind === 'diagram') requireContent(isPair(b.description) && list(b.steps).length > 0 && b.steps.every(isPair), 'Diagram description/steps missing');
      if (b.kind === 'media' && !assets.has(b.assetId)) fail('Broken asset reference');
    }
  }
  if (lesson?.slideOrder && (!Array.isArray(lesson.slideOrder) || lesson.slideOrder.length !== slideIds.size || new Set(lesson.slideOrder).size !== slideIds.size || lesson.slideOrder.some(id => !slideIds.has(id)))) fail('Invalid slide order');
  return result(errors, warnings);
}
