# Runbook — Task 2 Cache Failure Graceful Degradation

## Start

From this task directory:

```bash
docker compose up --build
```

For a background run:

```bash
docker compose up --build -d
docker compose ps
docker compose logs -f app
```

## Test

Exercise the cache path twice:

```bash
curl http://localhost:3000/flights/101
curl http://localhost:3000/flights/101
```

The first request should demonstrate the database path and the second should demonstrate the cache path.

## Observe

Use:

```bash
docker compose ps
docker compose logs --tail=100
```

## Failure experiment

Stop one dependency or send an invalid input. Predict the result **before** doing it.

## Stop and clean up

```bash
docker compose down
```

To also delete task-local database volumes:

```bash
docker compose down -v
```
