# Implementation Guide — Task 2 Outbox Worker

## 1. What this task is teaching

**Topic:** Transactional Outbox

**Task:** Task 2 Outbox Worker

**Focus:** Publish pending events and understand duplicate window

This is an interview-sized implementation. The goal is not to build a giant application; it is to make one HLD mechanism visible and testable.

## 2. Real production problem

Imagine this is part of a flight-booking platform.

The request path normally looks like:

```text
Client
  ↓
Nginx / Load Balancer
  ↓
API Gateway
  ↓
Flight / Booking / Payment service
  ↓
Database / Redis / RabbitMQ
```

This task isolates one part of that architecture so you can understand it without unrelated code.

## 3. Why the mechanism exists

Ask what would happen without it.

- Would two users overwrite each other?
- Would the database receive too many reads?
- Would the HTTP request wait for slow work?
- Would a retry create a duplicate booking?
- Would a failed service receive more traffic?
- Would a service know where another service is running?
- Could you diagnose the failure?
- Could you recover the data?

The answer to that question is the reason this HLD component exists.

## 4. Step-by-step implementation

### Step 1 — Start the infrastructure

Use Docker so your machine does not need a manually installed PostgreSQL, Redis or RabbitMQ instance.

```bash
docker compose up --build
```

### Step 2 — Identify the entry point

Open:

```text
solution.js
```

Start reading from the first executable statement.

For Node tasks, look for:

- imports
- configuration
- data/model definitions
- request handlers or functions
- the important HLD operation
- response/output
- server startup

For SQL tasks, look for:

- schema
- constraints
- transaction boundaries
- query predicate
- returned rows

### Step 3 — Trace the important operation

Do not memorize syntax. Trace:

```text
Input
  ↓
Validation / lookup
  ↓
HLD mechanism
  ↓
State change
  ↓
Output
```

## 5. Code walkthrough checklist

When reading `solution.js`, mark these locations:

1. **Input:** Where does data enter?
2. **Validation:** What invalid input is rejected?
3. **State:** Where is the authoritative state?
4. **HLD mechanism:** Which exact statement implements the concept?
5. **Failure path:** What happens when it fails?
6. **Output:** What does the caller observe?
7. **Scale boundary:** What breaks when there are many instances?

Write these six answers in your own notes.

## 6. Docker architecture

This task is intentionally self-contained.

```text
┌──────────────────────┐
│ Docker Compose       │
│                      │
│  ┌────────────────┐  │
│  │ task app       │  │
│  │ solution.js    │  │
│  └───────┬────────┘  │
│          │            │
│  ┌───────▼────────┐  │
│  │ dependency     │  │
│  │ DB/Redis/MQ    │  │
│  └────────────────┘  │
└──────────────────────┘
```

The dependency is named by its Compose service name, not by `localhost`.

That matters because **inside a container, `localhost` means that same container**.

## 7. Real-time experiment

After the first successful run, change exactly one thing.

Good experiments:

- send the same request twice
- run two requests concurrently
- stop Redis
- stop RabbitMQ
- stop PostgreSQL
- increase the number of simulated service instances
- change a retry count
- change a timeout
- insert invalid data

Before running the experiment, predict:

> “I expect X because Y owns the state and Z is the failure boundary.”

Then compare the prediction with the actual result.

## 8. Failure behavior

A good HLD design always answers:

```text
Dependency fails
      ↓
Can request continue?
      ↓
If yes → degraded response
If no  → controlled failure
      ↓
Retry / fallback / queue / compensation / alert
```

The correct choice depends on the consistency and business requirements.

## 9. Production version

This lab is deliberately small. A production version would usually add:

- environment-based configuration
- secret management
- request timeouts
- validation
- structured logging
- metrics
- distributed tracing
- graceful shutdown
- connection pooling
- database migrations
- health/readiness probes
- retries with bounded budgets
- idempotency for retried writes
- load testing
- alerting
- CI/CD
- security controls

Do not blindly add every component. Add infrastructure only when the requirement justifies it.

## 10. Interview questions

Answer these without opening the code:

1. **Why is this needed?**
2. **What problem does it solve?**
3. **What is the source of truth?**
4. **What happens if the dependency fails?**
5. **What happens when two requests arrive simultaneously?**
6. **How does this behave with 10 service instances?**
7. **What is the main bottleneck?**
8. **What trade-off does this introduce?**
9. **How would you monitor it?**
10. **How would you test it under failure?**

## 11. Flight-booking mapping

Place this task into:

```text
Client
 ↓
Nginx / LB
 ↓
API Gateway
 ↓
Booking Service ──→ DB
 ↓
Outbox ──→ RabbitMQ ──→ Workers
 ↓
Saga / Payment / Flight
```

State exactly which box owns this task and why.

## 12. Completion criteria

You are done only when you can:

- run it from Docker
- explain the flow without code
- point to the HLD mechanism in the code
- demonstrate one success case
- demonstrate one failure case
- explain the source of truth
- explain the scaling problem
- explain at least one trade-off
