import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, realpathSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const build = 'tools/build-production.mjs';
const verify = 'tools/verify-production-output.mjs';
const style = 'css/components.css';
const canaries = [
  'js/test-results/premerge-canary.js',
  'data/tmp/qa-draft.js',
  'css/chrome-profile/cache.css',
  'assets/images/reading/qa-screenshot.png'
];

function fixture(t) {
  const parent = realpathSync(tmpdir());
  const project = mkdtempSync(join(parent, 'sec-cert-packaging-'));
  t.after(() => {
    assert.equal(dirname(project), parent);
    assert.equal(realpathSync(project), project);
    rmSync(project, { recursive: true });
  });
  for (const path of [
    'index.html', 'vercel.json', 'js', 'css', 'data', 'assets/images/reading',
    'assets/logos', 'assets/learning', 'content/isc2-cc-2026'
  ]) cpSync(join(root, path), join(project, path), { recursive: true });
  mkdirSync(join(project, 'tools'));
  for (const name of readdirSync(join(root, 'tools'))) {
    if (/^(?:build-production|verify-production-output|production-runtime)\./.test(name)) {
      cpSync(join(root, 'tools', name), join(project, 'tools', name));
    }
  }
  return project;
}

function run(project, script, ...args) {
  const result = spawnSync(process.execPath, [script, ...args], { cwd: project, encoding: 'utf8' });
  assert.ifError(result.error);
  return { status: result.status, output: result.stdout + result.stderr };
}

test('a missing stylesheet aborts the build before publishing output', t => {
  const project = fixture(t);
  unlinkSync(join(project, style));
  const result = run(project, build);
  assert.equal(result.status, 1, result.output);
  assert.match(result.output, /Missing runtime file css\/components\.css/);
  assert.ok(!existsSync(join(project, 'dist')));
});

test('the verifier rejects a missing file from an already built output', t => {
  const project = fixture(t);
  const built = run(project, build);
  assert.equal(built.status, 0, built.output);
  unlinkSync(join(project, 'dist', style));
  const result = run(project, verify, '--verify-only');
  assert.equal(result.status, 1, result.output);
  assert.match(result.output, /Missing packaged file css\/components\.css/);
  assert.ok(!existsSync(join(project, 'dist', style)), 'Verification must not rebuild the output');
});

test('nested QA, temporary and profile files cannot be published or pass verification', t => {
  const project = fixture(t);
  for (const path of canaries) {
    const file = join(project, path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, 'production packaging canary');
  }
  const built = run(project, build);
  assert.equal(built.status, 0, built.output);
  for (const path of canaries) assert.ok(!existsSync(join(project, 'dist', path)), path);

  const rogue = join(project, 'dist', canaries[0]);
  mkdirSync(dirname(rogue), { recursive: true });
  cpSync(join(project, canaries[0]), rogue);
  const verified = run(project, verify, '--verify-only');
  assert.equal(verified.status, 1, verified.output);
  assert.match(verified.output, /Unexpected packaged file js\/test-results\/premerge-canary\.js/);

  const rebuilt = run(project, build);
  assert.equal(rebuilt.status, 0, rebuilt.output);
  assert.ok(!existsSync(rogue), 'Rebuild must discard files left by a previous build');
});
