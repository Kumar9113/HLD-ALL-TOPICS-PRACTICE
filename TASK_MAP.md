# HLD Topics 1–24 — Task Map

Use this file first if you are revising. Each task is intentionally small so implementation details do not mix concepts.


## Topic 1 — System Design Fundamentals
- **Task 1: Task 1 Scalable Express Server** — Basics + horizontal scaling + health check
- **Task 2: Task 2 Requirements To Architecture** — FR/NFR + bottleneck + scaling exercise

## Topic 2 — Networking & Web Fundamentals
- **Task 1: Task 1 HTTP Server** — HTTP methods, status codes, headers
- **Task 2: Task 2 TCP HTTP Request Thinking** — DNS/TCP/TLS/HTTP mental model

## Topic 3 — API Design
- **Task 1: Task 1 REST Flight API** — CRUD, params, query filters, pagination
- **Task 2: Task 2 Idempotent Create API** — Idempotency header + stable response

## Topic 4 — Database & Data Modeling + Sequelize
- **Task 1: Task 1 Sequelize CRUD** — Model, constraints, CRUD
- **Task 2: Task 2 Sequelize Transaction** — Transaction + rollback

## Topic 5 — Capacity Estimation
- **Task 1: Task 1 Capacity Calculator** — DAU/RPS/storage/bandwidth/server estimate
- **Task 2: Task 2 Load Test Reality** — Connect estimation to measured capacity

## Topic 6 — Unique ID Generation & Encoding
- **Task 1: Task 1 UUID Base62** — UUID + public Base62 code
- **Task 2: Task 2 Snowflake Style ID** — Time-sortable distributed ID

## Topic 7 — Load Balancing & Traffic Management
- **Task 1: Task 1 Round Robin LB** — Round-robin request distribution
- **Task 2: Task 2 Health Aware Routing** — Explain and implement readiness-aware routing

## Topic 8 — Caching
- **Task 1: Task 1 Redis Cache Asides** — Cache-aside with TTL
- **Task 2: Task 2 Cache Failure Graceful Degradation** — Redis failure should not destroy read path

## Topic 9 — Queues & Asynchronous Processing
- **Task 1: Task 1 RabbitMQ Producer** — Publish event
- **Task 2: Task 2 RabbitMQ Consumer** — Consume + ACK + safe processing skeleton

## Topic 10 — Transactions & ACID
- **Task 1: Task 1 Booking Transaction** — Atomic seat decrement + booking creation
- **Task 2: Task 2 Rollback External Call** — Understand why external calls should not sit inside DB transaction

## Topic 11 — Isolation Levels
- **Task 1: Task 1 Isolation SQL** — Observe transaction isolation concepts in PostgreSQL
- **Task 2: Task 2 Sequelize Isolation** — Set isolation explicitly

## Topic 12 — Concurrency & Race Conditions
- **Task 1: Task 1 Naive Race** — See why read-modify-write races
- **Task 2: Task 2 Atomic Update** — Database-side conditional update pattern

## Topic 13 — Row Locking / FOR UPDATE
- **Task 1: Task 1 Sequelize Row Lock** — SELECT FOR UPDATE through Sequelize
- **Task 2: Task 2 Deadlock Thinking** — Consistent lock ordering

## Topic 14 — Idempotency
- **Task 1: Task 1 Idempotency Table** — Persist idempotency key + response
- **Task 2: Task 2 Idempotent Consumer** — Deduplicate RabbitMQ events

## Topic 15 — Saga Pattern
- **Task 1: Task 1 Saga State Machine** — Booking -> Flight -> Payment -> compensation
- **Task 2: Task 2 Saga Orchestrator** — Design commands/events explicitly

## Topic 16 — Database Scaling & Connection Pooling
- **Task 1: Task 1 Sequelize Pool** — Configure pool and understand per-instance connections
- **Task 2: Task 2 Pool Sizing** — Capacity exercise for DB connections

## Topic 17 — Service Discovery
- **Task 1: Task 1 Docker DNS** — Service-name discovery
- **Task 2: Task 2 Registry Learning Demo** — Tiny registry with health status

## Topic 18 — API Gateway Advanced Patterns
- **Task 1: Task 1 Path Routing** — Gateway routes requests to services
- **Task 2: Task 2 Request Correlation** — Generate and propagate request ID

## Topic 19 — Security Architecture
- **Task 1: Task 1 JWT RBAC** — JWT authentication + role authorization
- **Task 2: Task 2 Password Hashing** — bcrypt registration/login pattern

## Topic 20 — Observability
- **Task 1: Task 1 Prometheus Metrics** — Counter + /metrics endpoint
- **Task 2: Task 2 Structured Logs** — JSON logs with request ID

## Topic 21 — Disaster Recovery Backup Restore
- **Task 1: Task 1 RPO RTO Calculator** — Translate business targets into recovery requirements
- **Task 2: Task 2 Backup Restore Drill** — Practice restore, not just backup

## Topic 22 — Sharding & Partitioning
- **Task 1: Task 1 Postgres Range Partition** — Partition bookings by year
- **Task 2: Task 2 Shard Router** — Route user to shard using hash

## Topic 23 — Transactional Outbox
- **Task 1: Task 1 Outbox Local Transaction** — Business row + outbox row atomically
- **Task 2: Task 2 Outbox Worker** — Publish pending events and understand duplicate window

## Topic 24 — Retry DLQ Message Delivery
- **Task 1: Task 1 Exponential Backoff** — Bounded retry with jitter
- **Task 2: Task 2 Idempotent Consumer With DLQ** — ACK/NACK + max attempts design