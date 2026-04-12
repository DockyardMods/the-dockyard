import { t } from 'try';
import { loadRegistry } from './util/load-registry.ts';
import { isValidDate } from './util/is-valid-date.ts';

const registryResult = await t(() => loadRegistry());

if (!registryResult.ok) {
  console.error('Unable to load registry.');
  console.error(registryResult.error);
  process.exit(1);
}

const registry = registryResult.value;
const seenIds = new Set();
const seenUrls = new Set();

registry.mods.forEach((mod) => {
  if (seenIds.has(mod.id)) {
    console.error('Duplicate mod id found.');
    console.error(mod.id);
    process.exit(1);
  }

  seenIds.add(mod.id);

  if (seenUrls.has(mod.repo)) {
    console.error('Duplicate repo url found.');
    console.error(mod.repo);
    process.exit(1);
  }

  seenUrls.add(mod.repo);

  if (mod.certification && !isValidDate(mod.certification.expiresAt)) {
    console.error('Certification expiration date is not valid.');
    console.error(mod.certification.expiresAt);
    process.exit(1);
  }
});

console.log('Mod contents validated.');
