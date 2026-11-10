import {
  copyFileSync, lstatSync, mkdirSync, mkdtempSync, realpathSync, renameSync, rmSync, statSync
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { productionPaths, requiredSourceFile } from './production-runtime.mjs';

const root = realpathSync(fileURLToPath(new URL('../', import.meta.url)));
const output = join(root, 'dist');

function removeBuildDirectory(directory) {
  const info = lstatSync(directory, { throwIfNoEntry: false });
  if (!info) return;
  if (dirname(directory) !== root || !info.isDirectory() || realpathSync(directory) !== directory) {
    throw new Error(`Refusing to replace a non-build directory at ${directory}`);
  }
  rmSync(directory, { recursive: true });
}

// Check every source before staging or replacing the previous local build.
const sources = Array.from(productionPaths(root), path => [path, requiredSourceFile(root, path)]);
const stage = mkdtempSync(join(root, '.production-build-'));
let bytes = 0;
try {
  for (const [path, source] of sources) {
    const destination = join(stage, path);
    mkdirSync(dirname(destination), { recursive: true });
    copyFileSync(source, destination);
    bytes += statSync(destination).size;
  }
  removeBuildDirectory(output);
  renameSync(stage, output);
} finally {
  removeBuildDirectory(stage);
}
console.log(`Built dist with ${sources.length} files (${bytes} bytes).`);
