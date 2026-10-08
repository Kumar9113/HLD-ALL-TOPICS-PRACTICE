# Production Implementation Index
Use this as the master checklist. Each row is one independent lab.

| Topic | Task | What you implement | Real-system role |
|---|---|---|---|
| 01 | 1 | Task 1 Scalable Express Server — Basics + horizontal scaling + health check | Client → LB → stateless API → DB/cache/queue |
| 01 | 2 | Task 2 Requirements To Architecture — FR/NFR + bottleneck + scaling exercise | Client → LB → stateless API → DB/cache/queue |
| 02 | 1 | Task 1 HTTP Server — HTTP methods, status codes, headers | Client → DNS → TCP/TLS → HTTP → reverse proxy → service |
| 02 | 2 | Task 2 TCP HTTP Request Thinking — DNS/TCP/TLS/HTTP mental model | Client → DNS → TCP/TLS → HTTP → reverse proxy → service |
| 03 | 1 | Task 1 REST Flight API — CRUD, params, query filters, pagination | Client → Gateway → API → service → database |
| 03 | 2 | Task 2 Idempotent Create API — Idempotency header + stable response | Client → Gateway → API → service → database |
| 04 | 1 | Task 1 Sequelize CRUD — Model, constraints, CRUD | Service → ORM → relational database |
| 04 | 2 | Task 2 Sequelize Transaction — Transaction + rollback | Service → ORM → relational database |
| 05 | 1 | Task 1 Capacity Calculator — DAU/RPS/storage/bandwidth/server estimate | Users → requests → peak RPS → compute/storage estimates |
| 05 | 2 | Task 2 Load Test Reality — Connect estimation to measured capacity | Users → requests → peak RPS → compute/storage estimates |
| 06 | 1 | Task 1 UUID Base62 — UUID + public Base62 code | Service instances → distributed ID generator → database |
| 06 | 2 | Task 2 Snowflake Style ID — Time-sortable distributed ID | Service instances → distributed ID generator → database |
| 07 | 1 | Task 1 Round Robin LB — Round-robin request distribution | Client → LB → API-1/API-2/API-N |
| 07 | 2 | Task 2 Health Aware Routing — Explain and implement readiness-aware routing | Client → LB → API-1/API-2/API-N |
| 08 | 1 | Task 1 Redis Cache Asides — Cache-aside with TTL | Client → service → Redis → database |
| 08 | 2 | Task 2 Cache Failure Graceful Degradation — Redis failure should not destroy read path | Client → service → Redis → database |
| 09 | 1 | Task 1 RabbitMQ Producer — Publish event | Service → RabbitMQ → worker → downstream system |
| 09 | 2 | Task 2 RabbitMQ Consumer — Consume + ACK + safe processing skeleton | Service → RabbitMQ → worker → downstream system |
| 10 | 1 | Task 1 Booking Transaction — Atomic seat decrement + booking creation | Service → DB transaction → commit/rollback |
| 10 | 2 | Task 2 Rollback External Call — Understand why external calls should not sit inside DB transaction | Service → DB transaction → commit/rollback |
| 11 | 1 | Task 1 Isolation SQL — Observe transaction isolation concepts in PostgreSQL | Transaction A ↔ database ↔ Transaction B |
| 11 | 2 | Task 2 Sequelize Isolation — Set isolation explicitly | Transaction A ↔ database ↔ Transaction B |
| 12 | 1 | Task 1 Naive Race — See why read-modify-write races | Concurrent requests → atomic DB operation/lock |
| 12 | 2 | Task 2 Atomic Update — Database-side conditional update pattern | Concurrent requests → atomic DB operation/lock |
| 13 | 1 | Task 1 Sequelize Row Lock — SELECT FOR UPDATE through Sequelize | BEGIN → SELECT FOR UPDATE → update → COMMIT |
| 13 | 2 | Task 2 Deadlock Thinking — Consistent lock ordering | BEGIN → SELECT FOR UPDATE → update → COMMIT |
| 14 | 1 | Task 1 Idempotency Table — Persist idempotency key + response | Client retry/event retry → idempotency check → one business effect |
| 14 | 2 | Task 2 Idempotent Consumer — Deduplicate RabbitMQ events | Client retry/event retry → idempotency check → one business effect |
| 15 | 1 | Task 1 Saga State Machine — Booking -> Flight -> Payment -> compensation | Booking → Flight → Payment → compensation |
| 15 | 2 | Task 2 Saga Orchestrator — Design commands/events explicitly | Booking → Flight → Payment → compensation |
| 16 | 1 | Task 1 Sequelize Pool — Configure pool and understand per-instance connections | Many app instances → pools → DB |
| 16 | 2 | Task 2 Pool Sizing — Capacity exercise for DB connections | Many app instances → pools → DB |
| 17 | 1 | Task 1 Docker DNS — Service-name discovery | Service name → discovery → healthy instance |
| 17 | 2 | Task 2 Registry Learning Demo — Tiny registry with health status | Service name → discovery → healthy instance |
| 18 | 1 | Task 1 Path Routing — Gateway routes requests to services | Client → Gateway → services |
| 18 | 2 | Task 2 Request Correlation — Generate and propagate request ID | Client → Gateway → services |
| 19 | 1 | Task 1 JWT RBAC — JWT authentication + role authorization | Client → auth → JWT/RBAC → protected service |
| 19 | 2 | Task 2 Password Hashing — bcrypt registration/login pattern | Client → auth → JWT/RBAC → protected service |
| 20 | 1 | Task 1 Prometheus Metrics — Counter + /metrics endpoint | Service → metrics/logs → monitoring platform |
| 20 | 2 | Task 2 Structured Logs — JSON logs with request ID | Service → metrics/logs → monitoring platform |
| 21 | 1 | Task 1 RPO RTO Calculator — Translate business targets into recovery requirements | Primary DB → backup → restore target |
| 21 | 2 | Task 2 Backup Restore Drill — Practice restore, not just backup | Primary DB → backup → restore target |
| 22 | 1 | Task 1 Postgres Range Partition — Partition bookings by year | Service → router/partition key → data subset |
| 22 | 2 | Task 2 Shard Router — Route user to shard using hash | Service → router/partition key → data subset |
| 23 | 1 | Task 1 Outbox Local Transaction — Business row + outbox row atomically | DB transaction → business row + outbox row → worker → broker |
| 23 | 2 | Task 2 Outbox Worker — Publish pending events and understand duplicate window | DB transaction → business row + outbox row → worker → broker |
| 24 | 1 | Task 1 Exponential Backoff — Bounded retry with jitter | Main queue → consumer → retry → DLQ |
| 24 | 2 | Task 2 Idempotent Consumer With DLQ — ACK/NACK + max attempts design | Main queue → consumer → retry → DLQ |
