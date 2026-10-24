import assert from 'node:assert/strict'; import { test } from 'node:test';
import { createFixture } from './fixtures/learning/fixture.mjs';
const api = await import('../js/core/learning-progress.js').catch(() => ({}));
function storage(raw) { const map = new Map(raw ? [[api.LEARNING_PROGRESS_KEY, raw]] : []); map.set('sec_cert_active_session_v1', 'quiz'); return { map, getItem: k => map.get(k) ?? null, setItem: (k, v) => map.set(k, v) }; }
test('visits use IDs, clamp invalid positions and require all slides plus explicit acknowledgement', () => {
  assert.equal(typeof api.visitSlide, 'function', 'independent progress must be implemented'); const l = createFixture(); let p = api.reconcileProgress(l);
  p = api.visitSlide(l, p, 'interact'); assert.equal(p.status, 'in-progress'); assert.deepEqual(p.visitedSlideIds, ['interact']); assert.equal(api.completeReading(l, p).status, 'in-progress');
  for (const s of l.slides) p = api.visitSlide(l, p, s.id);
  assert.equal(p.status, 'in-progress'); p = api.completeReading(l, p); assert.equal(p.status, 'completed');
  assert.equal(api.visitSlide(l, p, 'unknown').lastSlideId, 'interact');
  const reordered = { ...l, slides: [...l.slides].reverse() }; assert.equal(api.reconcileProgress(reordered, p).lastSlideId, 'interact');
  const revised = { ...l, revision: 'fixture-2', slides: l.slides.slice(0, 2) }; const next = api.reconcileProgress(revised, p); assert.equal(next.status, 'in-progress'); assert.equal(next.lastSlideId, 'type'); assert.deepEqual(next.visitedSlideIds, ['type', 'languages']);
});
test('corrupt storage is preserved and memory fallback remains usable without touching quiz data', () => {
  const s = storage('{broken'); const store = api.createProgressStore(s), l = createFixture(); const p = api.visitSlide(l, store.read(l), 'compare');
  assert.equal(store.save(l, p).persisted, false); assert.equal(s.map.get(api.LEARNING_PROGRESS_KEY), '{broken'); assert.equal(store.read(l).lastSlideId, 'compare'); assert.equal(s.map.get('sec_cert_active_session_v1'), 'quiz');
});
test('normal persistence validates unsupported schemas, handles quota errors and isolates lesson IDs', () => {
  const l = createFixture(), s = storage(), store = api.createProgressStore(s); const p = api.visitSlide(l, store.read(l), 'languages'); assert.equal(store.save(l, p).persisted, true); assert.equal(api.createProgressStore(s).read(l).lastSlideId, 'languages');
  assert.equal(store.read({ ...l, id: 'another' }).lastSlideId, 'type');
  const blocked = api.createProgressStore({ getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } }); assert.equal(blocked.save(l, p).persisted, false); assert.equal(blocked.read(l).lastSlideId, 'languages');
  const future = storage('{"schemaVersion":99}'); assert.equal(api.createProgressStore(future).save(l, p).persisted, false);
});
test('new and deleted-position readers start at the first authored slideOrder entry', () => {
  const l = createFixture(); l.slideOrder = l.slides.map(s => s.id).reverse();
  assert.equal(api.reconcileProgress(l).lastSlideId, 'interact');
  assert.equal(api.reconcileProgress(l, { lessonId: l.id, contentRevision: l.revision, lastSlideId: 'removed', visitedSlideIds: ['compare'] }).lastSlideId, 'interact');
});
