# End-to-End Coverage Matrix

Every topic has two runnable tasks. Stateful/infrastructure concepts are connected to actual containers, not only explained.

| Topic | Implemented flow |
|---|---|
| 1 | Nginx → replicated API → health/scaling |
| 2 | Nginx → HTTP API → request inspection |
| 3 | Nginx → REST/idempotent API |
| 4 | Nginx → Sequelize → PostgreSQL |
| 5 | Nginx → capacity/load endpoint |
| 6 | Nginx → distributed/public ID generator |
| 7 | Client → Nginx → 3 replicas + failure routing |
| 8 | Nginx → API → Redis → fallback |
| 9 | Nginx → producer → RabbitMQ → worker |
| 10 | Nginx → transaction → row/booking state |
| 11 | Nginx → DB isolation experiment |
| 12 | Nginx → concurrent-safe database operation |
| 13 | Nginx → row lock / contention experiment |
| 14 | Nginx → persistent idempotency behavior |
| 15 | Nginx → saga orchestrator → flight/payment/compensation |
| 16 | Nginx → API replicas → PostgreSQL connection pool |
| 17 | API → Docker DNS → service |
| 18 | Client → Nginx gateway → different services / correlation ID |
| 19 | Nginx → JWT/bcrypt protected API |
| 20 | API → metrics/logging → Prometheus where applicable |
| 21 | API/PostgreSQL → backup → restore drill |
| 22 | API → PostgreSQL partition OR shard router → two databases |
| 23 | API → PostgreSQL transaction → outbox → RabbitMQ worker |
| 24 | API → RabbitMQ → retries → DLQ → idempotent processing |
