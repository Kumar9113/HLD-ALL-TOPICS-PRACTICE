# Implementation — Topic 10, Task 1

This task is an actual runnable backend implementation.

## Build order
1. Read `docker-compose.yml` and identify every container.
2. Read `nginx/nginx.conf` and identify every upstream.
3. Read `backend/server.js`.
4. Start the stack.
5. Call the endpoint through `http://localhost:8080`.
6. Inspect container logs.
7. Break the task-specific dependency and repeat the request.
8. Explain the recovery/consistency/scaling behavior.

## End-to-end requirement
Do not run the backend with `node server.js` alone for this lab. The learning objective is the complete networked system.
