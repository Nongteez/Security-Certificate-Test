import assert from 'node:assert/strict'; import { test } from 'node:test';
import { createFixture } from './fixtures/learning/fixture.mjs';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';
const viewer = await import('../js/ui/learning/viewer.js').catch(() => ({}));
const fullscreen = await import('../js/ui/learning/fullscreen.js').catch(() => ({}));
test('slide controller clamps, preserves ID on language switch and rejects invalid modes', () => {
  assert.equal(typeof viewer.createSlideController, 'function', 'viewer controller must be implemented');
  const c = viewer.createSlideController(createFixture()); c.move(-1); assert.equal(c.current().id, 'type'); c.goToSlide('compare'); c.setLanguage('both'); assert.equal(c.current().id, 'compare'); assert.equal(c.language, 'both'); c.setLanguage('invalid'); assert.equal(c.language, 'both'); c.move(99); assert.equal(c.current().id, 'interact'); c.goToSlide('missing'); assert.equal(c.current().id, 'interact');
});
test('navigation ignores controls, modifiers, selected text and wheel, while Shift < and > work', () => {
  const doc = new TestDocument(), div = doc.createElement('div'), button = doc.createElement('button'); div.append(button);
  for (const key of ['ArrowLeft', '<']) assert.equal(viewer.keyboardDelta({ key, target: div, shiftKey: true }), -1);
  for (const key of ['ArrowRight', '>']) assert.equal(viewer.keyboardDelta({ key, target: div }), 1);
  for (const e of [{ key: 'ArrowRight', target: button }, { key: 'ArrowRight', target: div, ctrlKey: true }, { key: 'ArrowRight', target: div, isComposing: true }, { type: 'wheel', target: div }]) assert.equal(viewer.keyboardDelta(e), 0);
});
test('fullscreen follows browser events, rejected requests leave normal mode, and dispose removes listeners', async () => {
  const doc = new TestDocument(), stage = doc.createElement('div'); doc.body.append(stage); let changes = [], errors = [];
  stage.requestFullscreen = async () => { doc.fullscreenElement = stage; doc.dispatchEvent(new Event('fullscreenchange')); };
  const f = fullscreen.createFullscreenController(stage, { onChange: active => changes.push(active), onError: error => errors.push(error) });
  await f.enter(); assert.equal(f.active, true); await doc.exitFullscreen(); assert.equal(f.active, false); assert.deepEqual(changes, [true, false]);
  stage.requestFullscreen = async () => { throw Error('denied'); }; await f.enter(); assert.equal(f.active, false); assert.equal(errors.length, 1);
  f.destroy(); doc.dispatchEvent(new Event('fullscreenchange')); assert.equal(changes.length, 2);
});
test('mounted viewer renders distinct thumbnails, supports language/reading controls and cleans up after leaving', () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root); const saved = [];
  const handle = viewer.mountLearningViewer(root, { lesson: createFixture(), language: 'en', onProgress: p => saved.push(p) });
  assert.equal(root.querySelectorAll('.learning-thumbnail').length, 5); assert.notEqual(root.querySelectorAll('.learning-thumbnail')[0].children[0].textContent, root.querySelectorAll('.learning-thumbnail')[2].children[0].textContent);
  handle.goToSlide('compare'); handle.setLanguage('both'); assert.equal(handle.currentSlideId, 'compare'); assert.equal(saved.at(-1).lastSlideId, 'compare');
  assert.ok(root.querySelectorAll('[lang]').some(n => n.getAttribute('lang') === 'th'));
  const next = root.querySelector('[data-action="next"]'); handle.destroy(); fire(next, 'click'); assert.equal(handle.currentSlideId, 'compare');
});
test('large filmstrips mount a bounded window while direct slide navigation and active item still work', () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root); const lesson = createFixture(); lesson.slides = Array.from({ length: 500 }, (_, i) => ({ ...lesson.slides[i % 5], id: `slide-${i}` }));
  const handle = viewer.mountLearningViewer(root, { lesson }); assert.ok(root.querySelectorAll('.learning-thumbnail').length < 30); handle.goToSlide('slide-499'); assert.equal(handle.currentSlideId, 'slide-499'); assert.ok(root.querySelector('[aria-current="true"]')); handle.destroy();
});

test('finishing the final unvisited slide immediately enables acknowledgement without another navigation', () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root); const lesson = createFixture();
  const handle = viewer.mountLearningViewer(root, { lesson });
  for (const s of lesson.slides) handle.goToSlide(s.id);
  const complete = root.querySelectorAll('button').find(b => b.children.some(c => c.textContent === 'Mark as read'));
  assert.equal(complete.disabled, false); handle.destroy();
});

test('fullscreen half-click navigation excludes a revealed control and preserves position after browser exit', async () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root); const handle = viewer.mountLearningViewer(root, { lesson: createFixture() });
  const surface = root.querySelector('.learning-presentation'); surface.requestFullscreen = async () => { doc.fullscreenElement = surface; doc.dispatchEvent(new Event('fullscreenchange')); };
  fire(root.querySelectorAll('button').find(b => b.children.some(c => c.textContent === 'Fullscreen')), 'click'); await Promise.resolve();
  fire(surface, 'click', { clientX: 1000, clientY: 100, detail: 1 }); assert.equal(handle.currentSlideId, 'languages');
  handle.goToSlide('interact'); const control = root.querySelector('summary'); fire(surface, 'click', { target: control, clientX: 10, clientY: 10, detail: 1 }); assert.equal(handle.currentSlideId, 'interact');
  await doc.exitFullscreen(); assert.equal(handle.currentSlideId, 'interact'); handle.destroy();
});
test('language switching keeps keyboard focus on the same live language control', () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root); const handle = viewer.mountLearningViewer(root, { lesson: createFixture() });
  const thai = root.querySelectorAll('.lang-btn').find(b => b.children[0].textContent === 'TH'); thai.focus(); fire(thai, 'click');
  assert.equal(root.contains(doc.activeElement), true); assert.equal(doc.activeElement, thai); assert.equal(handle.currentSlideId, 'type'); handle.destroy();
});
