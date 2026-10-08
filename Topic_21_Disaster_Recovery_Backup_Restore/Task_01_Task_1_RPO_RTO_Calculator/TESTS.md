# End-to-End Tests

## 1. Start
```bash
docker compose up --build
```

## 2. Health
```bash
curl http://localhost:8080/health
```

## 3. Main operation
```bash
curl http://localhost:8080/
```

## 4. Failure experiment
Stop the task-specific dependency listed in `FAILURE_TEST.md`, repeat the request, and observe whether the backend fails, degrades, retries, or routes elsewhere.
