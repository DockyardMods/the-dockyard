import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { t } from 'try';
import { loadRegistry } from './util/load-registry.ts';
import { loadRegistrySchema } from './util/load-registry-schema.ts';

const registryResult = await t(() => loadRegistry());

if (!registryResult.ok) {
  console.error('Unable to load registry.');
  console.error(registryResult.error);
  process.exit(1);
}

const schemaResult = await t(() => loadRegistrySchema());

if (!schemaResult.ok) {
  console.error('Unable to load registry schema.');
  console.error(schemaResult.error);
  process.exit(1);
}

const ajv = new Ajv.Ajv({
  allErrors: true,
  strict: true,
});

addFormats.default(ajv);

const compileValidateResult = t(() => ajv.compile(schemaResult.value));

if (!compileValidateResult.ok) {
  console.error('Unable to compile registry schema into validator.');
  console.error(compileValidateResult.error);
  process.exit(1);
}

const validate = compileValidateResult.value;

const validRegistry = validate(registryResult.value);

if (!validRegistry) {
  console.error('Schema validation failed:');

  for (const error of validate.errors ?? []) {
    const location = error.instancePath || '/';
    const detail = error.message ?? 'Unknown validation error';
    console.error(`- ${location}: ${detail}`);
  }

  process.exit(1);
}

console.log('Schema validation passed.');
