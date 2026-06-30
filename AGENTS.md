# AGENTS.md - schemafit-site

## Repo Role

`schemafit-site` is the Vite/React microsite for the `schemafit` project page.
It owns presentation, metadata, static assets, and redirect/cache config for the
site surface.

## Boundaries

- Owns site copy, layout, Open Graph metadata, Vercel config, and static assets.
- Does not own the `schemafit` Python implementation, GitHub Action, provider
  rule packs, or PyPI release behavior.
- Keep product claims grounded in the source project README, pyproject metadata,
  provider rule packs, and released behavior.

## Authority Order

1. `/home/orion/src/orion-estate/platform/orion-estate-audit/AGENTS.md`
2. Source project: `../schemafit-oss/README.md` and `../schemafit-oss/pyproject.toml`
3. This repo's `README.md`, `constants.ts`, `index.html`, and `vercel.json`
4. Vite build output and package scripts

## Validation

```bash
npm install
npm run build
```

For docs-only changes, run `git diff --check` at minimum.
