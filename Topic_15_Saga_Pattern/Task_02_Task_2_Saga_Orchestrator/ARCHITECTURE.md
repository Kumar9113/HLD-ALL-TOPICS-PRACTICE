# Architecture — Saga Orchestrator

```text
Client
  |
  v
Nginx
  |
  v
Backend service
  |
  +---- task-specific infrastructure
  |
  v
Response
```

Task concept: **commands/events**.

The Docker Compose service names are the network addresses. Never use `localhost` from one container to reach another container; use the Compose service name.
