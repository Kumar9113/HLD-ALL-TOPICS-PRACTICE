# Interview Explanation

**What:** RabbitMQ Producer.

**How it works:** Client enters through the network boundary, Nginx routes the request, and the backend uses the task-specific infrastructure.

**Why:** publish events.

**Failure:** Know the exact failure experiment in `FAILURE_TEST.md`.

**Scaling:** Add backend replicas behind Nginx, then scale the stateful dependency independently.
