# Flow — Task 1 Redis Cache Asides

## One-line idea

**Cache-aside with TTL**

## Runtime flow

```text
Client / test command
      |
      v
Application
      |
      +---- Redis (fast path)
      |
      +---- Database (source of truth)
```

## What to watch

- Identify the **source of truth**.
- Identify the **failure boundary**.
- Identify whether the operation is **synchronous or asynchronous**.
- Identify what happens when two requests arrive together.
- Identify what changes when there are many service instances.
