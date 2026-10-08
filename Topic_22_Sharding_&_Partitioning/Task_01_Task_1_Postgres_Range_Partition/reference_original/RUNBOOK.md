# Runbook — Task 1 Postgres Range Partition

## Start PostgreSQL

```bash
docker compose up -d --build
docker compose ps
```

## Load the demo schema

```bash
docker compose exec postgres psql -U postgres -d hld_lab -f /work/demo.sql
```

## Open psql

```bash
docker compose exec postgres psql -U postgres -d hld_lab
```

Then apply the statements from `solution.sql`.

## Stop

```bash
docker compose down
```

Delete the lab database volume too:

```bash
docker compose down -v
```
