# Flow — Task 2 Health Aware Routing

## One-line idea

**Explain and implement readiness-aware routing**

## Runtime flow

```text
Client / test command
      |
      v
Load Balancer
   |       |
   v       v
App-1   App-2
```

## What to watch

- Identify the **source of truth**.
- Identify the **failure boundary**.
- Identify whether the operation is **synchronous or asynchronous**.
- Identify what happens when two requests arrive together.
- Identify what changes when there are many service instances.
