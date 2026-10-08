# Flow — Task 2 Outbox Worker

## One-line idea

**Publish pending events and understand duplicate window**

## Runtime flow

```text
Client / test command
      |
      v
Producer / Service
      |
      v
RabbitMQ exchange/queue
      |
      v
Consumer / Worker
```

## What to watch

- Identify the **source of truth**.
- Identify the **failure boundary**.
- Identify whether the operation is **synchronous or asynchronous**.
- Identify what happens when two requests arrive together.
- Identify what changes when there are many service instances.
