# Flow — Task 2 Idempotent Create API

## One-line idea

**Idempotency header + stable response**

## Runtime flow

```text
Client / test command
      |
      v
Node.js / focused algorithm
      |
      v
Observed result
```

## What to watch

- Identify the **source of truth**.
- Identify the **failure boundary**.
- Identify whether the operation is **synchronous or asynchronous**.
- Identify what happens when two requests arrive together.
- Identify what changes when there are many service instances.
