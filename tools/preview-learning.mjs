/** Development only. Generates a separate static preview and optionally serves it on loopback. */
import fs from 'node:fs/promises'; import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url'; import http from 'node:http'; import { randomUUID } from 'node:crypto';
import { createFixture } from './fixtures/learning/fixture.mjs';
import { validateCatalog, validateLesson, publishedLessons } from '../js/core/learning-loader.js';
const root = fileURLToPath(new URL('../', import.meta.url));
export async function buildLearningPreview() {
  const out = path.join(root, '.learning-preview', `run-${randomUUID()}`); await fs.mkdir(out, { recursive: true });
  const copy = async relative => { const dest = path.join(out, relative); await fs.mkdir(path.dirname(dest), { recursive: true }); await fs.cp(path.join(root, relative), dest, { recursive: true }); };
  for (const dir of ['js', 'css', 'data', 'assets/logos', 'assets/questions']) await copy(dir);
  for (const d of [1, 2, 3]) await copy(`content/isc2-cc-2026/vocabulary/domain-${d}.json`);
  const catalogPath = 'content/isc2-cc-2026/learning/published/catalog.json', catalog = JSON.parse(await fs.readFile(path.join(root, catalogPath), 'utf8'));
  if (!validateCatalog(catalog).valid) throw Error('Cannot preview invalid public catalog'); await copy(catalogPath);
  for (const summary of publishedLessons(catalog)) {
    const relative = `content/isc2-cc-2026/learning/published/${summary.lessonPath}`, lesson = JSON.parse(await fs.readFile(path.join(root, relative), 'utf8'));
    if (!validateLesson(lesson).valid || lesson.status !== 'published' || lesson.id !== summary.id || lesson.revision !== summary.revision) throw Error('Invalid published lesson');
    await copy(relative); for (const asset of lesson.assets) await copy(asset.path);
  }
  const index = await fs.readFile(path.join(root, 'index.html'), 'utf8');
  await fs.writeFile(path.join(out, 'public.html'), index);
  await fs.writeFile(path.join(out, 'index.html'), index.replace('./js/app.js', './preview.js').replace('<title>SEC CERT TEST</title>', '<title>Learning Slides — DEVELOPMENT PREVIEW</title>'));
  await fs.copyFile(path.join(root, 'tools/fixtures/learning/preview-app.js'), path.join(out, 'preview.js'));
  await fs.mkdir(path.join(out, 'preview')); await fs.writeFile(path.join(out, 'preview/fixture.json'), JSON.stringify(createFixture()));
  return out;
}
export function serveLearningPreview(directory, port = 4173) {
  const target = path.resolve(directory), allowed = path.join(root, '.learning-preview') + path.sep;
  if (!target.startsWith(allowed)) throw Error('Only generated preview directories may be served');
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
  const server = http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url, 'http://127.0.0.1'), decoded = decodeURIComponent(url.pathname);
      if (decoded.includes('..') || decoded.includes('\\') || decoded.includes('\0')) throw Error('Invalid path');
      const file = path.resolve(target, '.' + (decoded === '/' ? '/index.html' : decoded));
      if (!file.startsWith(target + path.sep)) throw Error('Invalid path');
      const data = await fs.readFile(file); response.writeHead(200, { 'Content-Type': (types[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }); response.end(data);
    } catch { response.writeHead(404); response.end('Not found'); }
  });
  return new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, '127.0.0.1', () => resolve(server)); });
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const out = await buildLearningPreview(); console.log(`Generated development preview: ${out}`);
  if (process.argv.includes('--serve')) { const portIndex = process.argv.indexOf('--port'), port = portIndex >= 0 ? Number(process.argv[portIndex + 1]) : 4173; await serveLearningPreview(out, port); console.log(`Local preview: http://127.0.0.1:${port} (Ctrl+C to stop)`); }
}
