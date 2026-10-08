# Capstone — Assemble the 24 HLD Ideas into One Flight Booking System

The tasks are isolated for learning. After finishing them, combine the ideas in this order.

## Stage 1 — Request path

```text
Client
 → Nginx / Load Balancer
 → API Gateway
 → Booking Service
```

Topics: 1, 2, 3, 7, 18.

## Stage 2 — Data correctness

```text
Booking Service
 → PostgreSQL
 → transaction
 → row lock / atomic update
```

Topics: 4, 10, 11, 12, 13, 16.

## Stage 3 — Safe retries

```text
Client retry
 → Idempotency-Key
 → one booking side effect
```

Topic: 14.

## Stage 4 — Async events

```text
DB transaction
 → Outbox
 → RabbitMQ
 → consumer
 → idempotent processing
```

Topics: 9, 23, 24.

## Stage 5 — Cross-service workflow

```text
Booking
 → reserve flight
 → payment
 → confirm
 → compensate on failure
```

Topic: 15.

## Stage 6 — Performance

```text
Redis cache
 + DB connection pools
 + capacity estimation
 + load balancing
```

Topics: 5, 7, 8, 16.

## Stage 7 — Scale data

```text
Partition large tables
Shard when a single database boundary is no longer sufficient
```

Topic: 22.

## Stage 8 — Reliability and security

```text
JWT/RBAC
Metrics + logs
Backups + restore drills
Service discovery
```

Topics: 17, 19, 20, 21.

## Final interview flow

If asked “Design a flight booking system”, walk through:

1. Requirements and traffic.
2. API contracts.
3. Load balancer and gateway.
4. Services and database ownership.
5. Seat concurrency.
6. Transactions and row locks.
7. Idempotency.
8. Outbox + RabbitMQ.
9. Saga/payment failure.
10. Cache strategy.
11. Scaling and connection pools.
12. Observability.
13. Security.
14. Backup/DR.
15. Bottlenecks and trade-offs.
