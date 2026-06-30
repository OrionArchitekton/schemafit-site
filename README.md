# schemafit-site

Vite/React microsite for the `schemafit` project page at
`https://www.danmercede.com/works/schemafit/`.

## Role

This repo owns the marketing/presentation surface for `schemafit`: layout,
copy, metadata, static assets, and Vercel routing/cache config. The source
project owns the Python CLI, provider rule packs, GitHub Action metadata, tests,
and release behavior.

## Source Of Truth

- Product repo: `../schemafit-oss`
- Site copy: `constants.ts`
- Metadata: `index.html`
- Routing/cache: `vercel.json`

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Boundaries

Keep claims grounded in the source project README, pyproject metadata, provider
rule packs, and released behavior. Do not change schemafit package behavior from
this repo.
