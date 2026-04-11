import { registryPath } from './registry-paths.ts';
import type { Registry } from './types.ts';

export const loadRegistry = () => Bun.file(registryPath).json() as Promise<Registry>;
