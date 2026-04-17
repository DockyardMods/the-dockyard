# Dockyard Mod Registry

List of all the mods available on Dockyard Mods. This repo is mainly for maintainers of Dockyard Mods. To submit a mod to Dockyard Mods, you should go to [the mod submission repo](https://github.com/DockyardMods/mod-submission) and follow the steps there. Everything else here is a technical breakdown of this repo.

## Registry Files

- Registry data: `registry.json`
- JSON Schema: `schemas/registry.schema.json`

`registry.json` includes a top-level `$schema` field pointing at `./schemas/registry.schema.json` so the file is self-describing in editors and tooling.

## Local Validation

This repo uses Bun for local scripts and CI, which allows for validation and formatting. 

### Prerequisites

Bun deps need to be installed to run the scripts, so run the following command.

```bash
bun install
```

### Validation

To check/validate the repository, use this command.

```bash
bun validate
```

### Formatting

Run this command to format the registry.

```bash
bun format:registry
```

## Submitting Changes

The registry should be kept up-to-date by the Dockyard Mods maintainers, so manual PRs shouldn't be needed, but here are the steps to take anyways.

1. Edit a mod entry in `registry.json`
3. Run local validation and formatting
4. Open a PR for maintainer review

## Example

Here is an example of the registry

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
