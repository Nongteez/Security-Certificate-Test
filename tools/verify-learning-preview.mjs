import assert from 'node:assert/strict'; import { test } from 'node:test'; import fs from 'node:fs'; import path from 'node:path';
const preview = await import('./preview-learning.mjs').catch(() => ({}));
test('preview is generated separately, omits tools/editorial sources and does not mutate public catalog', async () => {
  assert.equal(typeof preview.buildLearningPreview, 'function', 'isolated development preview must be implemented');
  const source = fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url), 'utf8');
  const out = await preview.buildLearningPreview();
  assert.ok(out.startsWith(path.resolve('.learning-preview') + path.sep));
  assert.equal(fs.existsSync(path.join(out, 'tools')), false); assert.equal(fs.existsSync(path.join(out, 'ISC2 Update 2026')), false);
  assert.equal(JSON.parse(fs.readFileSync(path.join(out, 'preview/fixture.json'))).status, 'in-preparation');
  assert.equal(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url), 'utf8'), source);
  const server = await preview.serveLearningPreview(out, 0);
  try { const base = `http://127.0.0.1:${server.address().port}`;
    assert.equal((await fetch(base + '/')).status, 200); assert.equal((await fetch(base + '/js/ui/learning/viewer.js')).status, 200); assert.equal((await fetch(base + '/tools/fixtures/learning/fixture.mjs')).status, 404);
    const catalog = await (await fetch(base + '/content/isc2-cc-2026/learning/published/catalog.json')).json();
    assert.equal(catalog.domains[0].objectives[0].lessons[0].id, 'lesson-d1-01-cia-triad');
    assert.equal((await fetch(base + '/content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json')).status, 200);
    assert.ok((await fetch(base + '/%2e%2e%2findex.html')).status >= 400);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
