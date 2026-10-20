export const PRODUCT_DEMO = {
  "slug": "schemafit",
  "title": "Watch schemafit in action",
  "disclosure": "Recorded output from schemafit v0.5.0, edited as a replay of a synthetic schema. Static versioned rules; no live provider calls or acceptance claim. Locally synthesized Dan narration.",
  "transcript": "This is schemafit, a local schema linter. This synthetic order schema fails the bundled OpenAI rule pack. The output points to two missing constraints before any model call. Repair writes a new file and flags a lossy change. Making a property required can change what your application accepts, so review the diff instead of applying it blindly. The repaired schema passes the same static pack. This is a check against versioned rules, not live provider verification. The source and quickstart are linked below.",
  "publishedVideo": null
} as const;
