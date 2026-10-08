# Flow — Task 2 Idempotent Consumer With DLQ

## One-line idea

**ACK/NACK + max attempts design**

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
