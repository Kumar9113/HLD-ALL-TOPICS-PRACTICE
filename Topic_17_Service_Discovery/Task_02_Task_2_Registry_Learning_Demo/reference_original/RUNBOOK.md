# Runbook — Task 2 Registry Learning Demo

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

The app listens on port `4000` unless the task code says otherwise.

```bash
curl http://localhost:4000/health
```

If this task has a different endpoint, read `solution.js` and use the endpoint shown there.

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
