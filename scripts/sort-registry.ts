import { t } from 'try';
import { loadRegistry } from './util/load-registry.ts';
import { registryPath } from './util/registry-paths.ts';
import type { ModEntry } from './util/types.ts';

const compare = (a: ModEntry, b: ModEntry) => {
  return a.id >= b.id ? 1 : -1;
};

const registryResult = await t(() => loadRegistry());

if (!registryResult.ok) {
  console.error('Unable to load the registry.');
  console.error(registryResult.error);
  process.exit(1);
}

const registry = registryResult.value;

registry.mods = registry.mods.toSorted(compare);

const formatted = `${JSON.stringify(registry, null, 2)}\n`;
const writeResult = await t(() => Bun.write(registryPath, formatted));

if (!writeResult.ok) {
  console.error('Unable to save the sorted registry.');
  console.error(writeResult.error);
  process.exit(1);
}

console.log('registry.json sorted and rewritten.');
