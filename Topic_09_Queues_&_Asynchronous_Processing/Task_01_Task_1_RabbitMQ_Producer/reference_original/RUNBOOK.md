# Runbook — Task 1 RabbitMQ Producer

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

RabbitMQ management UI is exposed at `http://localhost:15672` with the default local credentials `guest` / `guest`.

For producer/consumer tasks, inspect the queue and logs:

```bash
docker compose logs -f
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
