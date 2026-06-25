import { ProductData } from './types';

const GITHUB = 'https://github.com/OrionArchitekton/schemafit';
const RELEASE = 'https://github.com/OrionArchitekton/schemafit/releases/tag/v0.3.0';
const PYPI = 'https://pypi.org/project/schemafit/';

/**
 * Single source of truth for the schemafit microsite.
 *
 * All install/usage/demo content is GROUNDED in the real tool repo (README.md,
 * cli.py, pyproject.toml at v0.3.0) and the live PyPI listing (schemafit 0.3.0).
 * The tool IS on PyPI, so the quickstart uses `pip install schemafit`. The demo
 * shows the tool's real OUTPUT FORMAT with an illustrative example schema — no
 * fabricated benchmarks or performance numbers.
 */
export const PRODUCT_DATA: ProductData = {
  name: 'schemafit',
  tagline:
    'Lint your LLM structured-output & JSON schemas against OpenAI, Anthropic, Gemini, Mistral, and Cohere — and fail CI before they 400 in production.',
  credibility:
    'Open source (MIT) · Static & offline · Zero runtime dependencies · CI-enforceable.',
  canonical: 'https://www.danmercede.com/works/schemafit/',
  metaDescription:
    'schemafit is a local-first, MIT-licensed CLI that lints a JSON Schema, structured-output spec, or tool definition against each provider’s documented constraint surface (OpenAI, Anthropic, Gemini, Mistral, Cohere) and fails CI before the schema 400s in production — naming the exact JSON-Pointer, keyword, and reason, with a repair pass. Static and offline: no API calls, no key.',

  problem: {
    heading: 'The problem',
    body:
      'A JSON Schema / tool definition / response_format that works on OpenAI can 400 on Anthropic or Gemini (and vice-versa): nested oneOf, a missing additionalProperties: false, a default in a property, Anthropic-rejected keywords (minLength, format, pattern), Gemini’s lack of anyOf. The API tells you it failed — not which constraint — so teams hand-port schemas and debug by trial-and-error at runtime.',
  },

  whatItDoes: {
    heading: 'What it does',
    body:
      'schemafit encodes each provider’s documented constraint surface as a versioned, declarative rule pack and lints your schema statically — pointing at the exact JSON-Pointer path, the keyword, and why — with a non-zero exit code so CI fails the PR instead of prod. A repair pass emits a best-effort provider-valid variant. It makes no model calls, needs no API key, and has zero runtime dependencies.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'Read the v0.3.0 release notes',
    secondaryUrl: RELEASE,
  },

  quickstart: {
    heading: 'Quickstart',
    intro:
      'On PyPI — pip install and lint your schema. No API key, no model calls; the core has zero runtime dependencies.',
    blocks: [
      {
        title: 'Install',
        note: 'Static, offline CLI',
        command: ['pip install schemafit'].join('\n'),
      },
      {
        title: 'Lint a schema against the providers you ship to',
        command: [
          'schemafit lint my-schema.json \\',
          '  --provider openai,anthropic,gemini,mistral,cohere',
        ].join('\n'),
      },
      {
        title: 'Prove the spine (hermetic, no config required)',
        command: ['schemafit demo'].join('\n'),
      },
    ],
  },

  // Command surface verified against schemafit/cli.py subparsers (v0.3.0).
  commands: [
    {
      name: 'lint',
      description:
        'Lint one or more schemas against one or more providers; reports each violation’s JSON-Pointer, keyword, and reason, and exits non-zero so CI fails the build.',
    },
    {
      name: 'repair',
      description:
        'Emit a best-effort provider-valid variant of a schema — stripping or rewriting the offending keywords while preserving intent.',
    },
    {
      name: 'providers',
      description:
        'List the supported providers and the versioned rule pack backing each (OpenAI, Anthropic, Gemini, Mistral, Cohere).',
    },
    {
      name: 'demo',
      description:
        'Run a hermetic, end-to-end proof from a fresh clone — no API key, no network, deterministic output.',
    },
  ],

  demo: {
    heading: 'Demo',
    intro:
      'lint statically checks your schema against each provider’s rule pack, names the exact violation, and exits non-zero so CI blocks the PR. repair emits a provider-valid variant. (Illustrative schema; the output format is the tool’s real one.)',
    lines: [
      { kind: 'comment', text: '# 1. Lint a schema against all three providers' },
      {
        kind: 'command',
        text: 'schemafit lint order.schema.json --provider openai,anthropic,gemini',
      },
      { kind: 'output', text: 'openai     PASS', tone: 'ok' },
      { kind: 'output', text: 'anthropic  FAIL  /properties/email   keyword: format' },
      { kind: 'output', text: '           → Anthropic rejects `format` in tool input schemas', tone: 'muted' },
      { kind: 'output', text: 'gemini     FAIL  /properties/items   keyword: anyOf' },
      { kind: 'output', text: '           → Gemini does not support anyOf / union types', tone: 'muted' },
      { kind: 'output', text: 'SCHEMAFIT_STATUS=FAIL  (exit 1 — build blocked)', tone: 'fail' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 2. Auto-repair to a provider-valid variant' },
      {
        kind: 'command',
        text: 'schemafit repair order.schema.json --provider anthropic --out fixed.json',
      },
      { kind: 'output', text: 'wrote fixed.json  (1 keyword rewritten, intent preserved)', tone: 'ok' },
    ],
  },

  differentiators: {
    heading: 'Why it is different',
    points: [
      {
        title: 'Static, pre-ship CI lint',
        body:
          'Instructor, BAML, LiteLLM and the Vercel AI SDK are excellent runtime clients — they normalize or repair at call-time. schemafit fills the gap they leave: a static lint that fails the build before the schema ever reaches a provider, over the raw schemas you already ship, with no DSL or codegen buy-in.',
      },
      {
        title: 'Zero runtime deps, no API key',
        body:
          'It makes no model calls and needs no key — easy to vendor, audit, and trust in a build pipeline. Runs from a fresh clone or a single pip install, fully offline.',
      },
      {
        title: 'Grounded, versioned rule packs',
        body:
          'Every rule is grounded in a real, cited provider issue. Provider constraints are encoded as declarative, versioned rule packs — so the lint stays honest and reviewable as provider APIs change.',
      },
      {
        title: 'CI-enforceable, with SARIF',
        body:
          'A non-zero exit fails the PR; lint --format sarif feeds GitHub code-scanning / the Security tab. An opt-in --live-verify can confirm against a real provider, but it is mock-default and never required in CI.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'PyPI package', url: PYPI, primary: true },
    { label: 'v0.3.0 release notes', url: RELEASE },
    { label: 'Dan Mercede', url: 'https://www.danmercede.com' },
  ],

  footerNote: 'MIT licensed. Built by Dan Mercede.',
};
