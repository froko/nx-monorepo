# Repo Notes

Nx + pnpm monorepo starter (semantic-release, Arc42 docs via Astro Starlight).

## Layout

- Workspaces (`pnpm-workspace.yaml`): `apps/*`, `libs/*`, `docs`.
- `apps/` and `libs/` are empty (only `.gitkeep`) — this is a starter; the only
  real project is `docs` (Astro Starlight).
- Package manager is **pnpm** (pinned via `packageManager` in `package.json`).
  Use `pnpm`, not npm/yarn.

## Commands (run from root)

- `pnpm all` — lint + build + test all projects.
- `pnpm affected` — lint + build + test affected projects only (preferred for
  changes).
- `pnpm format` — `prettier . --write` then per-project `nx format`. Always run
  before committing.
- `pnpm lint` / `pnpm build` / `pnpm test` — single-target across projects.
- Single project: `pnpm exec nx <target> <project>` (e.g.
  `pnpm exec nx build docs`).
- Docs dev server: `pnpm exec nx dev docs` (or `cd docs && pnpm dev`).

## Gotchas

- `build` depends on `^build` (see `nx.json` `targetDefaults`) — a project
  builds its dependencies first.
- Node `24` (see `.nvmrc` and CI in `.github/workflows/*.yml`).
- Prettier config is shared from `@froko/prettier-config` via a root
  `prettier.config.mjs`; `docs/prettier.config.mjs` imports
  `../prettier.config.mjs` and adds the Astro plugin. Don't add ad-hoc
  per-project prettier rules.
- Commits/PR titles must follow Conventional Commits — enforced by the `Lint PR`
  workflow and consumed by semantic-release. Use types like `feat:`, `fix:`,
  `chore:`.
- Releases are `semantic-release` (manual `Release` workflow / `pnpm release`);
  never hand-edit versions or `CHANGELOG`.

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

## General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill
  first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer
  running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`)
  instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g.,
  `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not
  all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS
  invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin
  configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard
  commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call
  nx_docs just to look up generator syntax

<!-- nx configuration end-->
