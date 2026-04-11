import Ajv from 'ajv';
import { schemaPath } from './registry-paths.ts';

export const loadRegistrySchema = () => Bun.file(schemaPath).json() as Promise<Ajv.Schema>;
