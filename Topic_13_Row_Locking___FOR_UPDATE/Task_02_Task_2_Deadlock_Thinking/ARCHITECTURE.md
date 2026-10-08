# Architecture — Deadlock Thinking

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

Task concept: **lock ordering**.

The Docker Compose service names are the network addresses. Never use `localhost` from one container to reach another container; use the Compose service name.
