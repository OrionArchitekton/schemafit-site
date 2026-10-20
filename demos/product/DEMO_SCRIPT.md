# schemafit product demo

Recorded local output from v0.5.0. Synthetic data, edited replay; no external provider calls.

### SHOT lint
- target: terminal
- url: index.html?scene=lint
- narration: This is schemafit, a local schema linter. This synthetic order schema fails the bundled OpenAI rule pack. The output points to two missing constraints before any model call.
- action: goto url="index.html?scene=lint"
- action: wait ms=400

### SHOT repair
- target: terminal
- url: index.html?scene=repair
- narration: Repair writes a new file and flags a lossy change. Making a property required can change what your application accepts, so review the diff instead of applying it blindly.
- action: goto url="index.html?scene=repair"
- action: wait ms=400

### SHOT verify
- target: terminal
- url: index.html?scene=verify
- narration: The repaired schema passes the same static pack. This is a check against versioned rules, not live provider verification. The source and quickstart are linked below.
- action: goto url="index.html?scene=verify"
- action: wait ms=400
