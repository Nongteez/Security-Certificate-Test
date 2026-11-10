import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { lstatSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { productionPaths, requiredSourceFile } from './production-runtime.mjs';

const root = realpathSync(fileURLToPath(new URL('../', import.meta.url)));
const output = join(root, 'dist');
const config = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
assert.equal(config.outputDirectory, 'dist');
assert.equal(config.buildCommand, 'node tools/build-production.mjs');

const args = process.argv.slice(2);
assert.ok(args.length === 0 || (args.length === 1 && args[0] === '--verify-only'),
  'Usage: node tools/verify-production-output.mjs [--verify-only]');
if (args.length === 0) {
  execFileSync(process.execPath, ['tools/build-production.mjs'], { cwd: root, stdio: 'inherit' });
}

// Compare the actual output to the reviewed source contract, independently of
// the build's copy loop and without reading a file list from dist.
const expected = productionPaths(root);
const count = expected.size;
assert.ok(lstatSync(output, { throwIfNoEntry: false })?.isDirectory(), 'Missing or invalid dist directory');
for (const entry of readdirSync(output, { recursive: true, withFileTypes: true })) {
  if (entry.isDirectory()) continue;
  const file = join(entry.parentPath, entry.name);
  const path = relative(output, file).split(sep).join('/');
  assert.ok(entry.isFile() && expected.delete(path), `Unexpected packaged file ${path}`);
  const source = requiredSourceFile(root, path);
  assert.ok(readFileSync(file).equals(readFileSync(source)), `Packaged bytes differ from source for ${path}`);
}
assert.equal(expected.size, 0, [...expected].map(path => `Missing packaged file ${path}`).join('\n'));
console.log(`Verified ${count} required files and exact source bytes.`);
