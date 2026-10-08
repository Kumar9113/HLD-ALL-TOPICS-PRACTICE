# Topic 24 / Task 1: Exponential Backoff

## Goal
Implement **bounded retry + jitter** as a real backend flow, not a code fragment.

## Request path
Client → Nginx → backend service(s) → infrastructure → response.

## What you will build
- Docker network with named services
- Nginx reverse proxy/load balancer where appropriate
- Real Node.js ES Module backend
- Real PostgreSQL / Redis / RabbitMQ component when the concept needs it
- Health endpoints and observable responses
- Failure experiment so you can see the HLD concept working

## Start
```bash
docker compose up --build
```

Then follow `TESTS.md`.

## Study order
1. Read `ARCHITECTURE.md`.
2. Open `docker-compose.yml`.
3. Open `nginx/nginx.conf`.
4. Open `backend/server.js`.
5. Start the stack.
6. Call the endpoint.
7. Stop/fail one dependency.
8. Explain the request path without looking at the files.

## Interview answer
Be able to explain **why this component exists, what happens when it fails, and how it scales**.
