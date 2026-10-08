# Runbook — Task 2 Sequelize Isolation

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

Inspect PostgreSQL:

```bash
docker compose exec postgres psql -U postgres -d postgres
```

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
