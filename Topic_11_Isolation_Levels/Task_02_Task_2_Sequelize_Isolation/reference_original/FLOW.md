# Flow — Task 2 Sequelize Isolation

## One-line idea

**Set isolation explicitly**

## Runtime flow

```text
Client / test command
      |
      v
Application
      |
      v
PostgreSQL
      |
      v
Transaction / lock / query result
```

## What to watch

- Identify the **source of truth**.
- Identify the **failure boundary**.
- Identify whether the operation is **synchronous or asynchronous**.
- Identify what happens when two requests arrive together.
- Identify what changes when there are many service instances.
