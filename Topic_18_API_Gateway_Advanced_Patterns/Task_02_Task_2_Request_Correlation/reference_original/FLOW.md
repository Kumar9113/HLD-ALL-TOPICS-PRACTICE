# Flow — Task 2 Request Correlation

## One-line idea

**Generate and propagate request ID**

## Runtime flow

```text
Client / test command
      |
      v
API Gateway
   |    |    |
   v    v    v
Flight Booking Payment
```

## What to watch

- Identify the **source of truth**.
- Identify the **failure boundary**.
- Identify whether the operation is **synchronous or asynchronous**.
- Identify what happens when two requests arrive together.
- Identify what changes when there are many service instances.
