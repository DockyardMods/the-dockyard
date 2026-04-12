# Dockyard Mod Registry

This repository is the authoritative registry for platform-approved World of Warships mods used by Dockyard.

## What This Repository Controls

- The current target World of Warships `currentGameVersionId`
- The set of mods
- The current version of each mod
- Wargaming certification expiration date, when applicable
- The GitHub location of each mod manifest

## Registry Files

- Registry data: `registry.json`
- JSON Schema: `schemas/registry.schema.json`

`registry.json` includes a top-level `$schema` field pointing at `./schemas/registry.schema.json` so the file is self-describing in editors and tooling.

## Local Validation

This repo uses Bun for local scripts and CI.

```bash
bun install
bun validate
```

To rewrite `registry.json` into canonical order and formatting:

```bash
bun format:registry
```

## Submitting Changes

1. Edit `registry.json` only for registry data changes.
2. Keep `mods` sorted by `id`.
3. Run local validation before opening a pull request.
4. Open a PR for maintainer review.

## Example

```json
{
  "$schema": "./schemas/registry.schema.json",
  "version": 1,
  "currentGameVersionId": "12116141",
  "mods": [
    {
      "id": "dockyardmods-advanced-score-timers",
      "version": "1.4.2",
      "repo": "https://github.com/DockyardMods/advanced-score-timers",
      "manifestPath": "mod.yaml",
      "gameVersionId": "12116141"
    },
    {
      "id": "dockyardmods-team-hp-panel",
      "version": "2.0.0",
      "repo": "https://github.com/DockyardMods/team-hp-panel",
      "manifestPath": "mod.yaml",
      "gameVersionId": "12116141",
      "certification": {
        "expiresAt": "2026-06-01"
      }
    }
  ]
}
```
