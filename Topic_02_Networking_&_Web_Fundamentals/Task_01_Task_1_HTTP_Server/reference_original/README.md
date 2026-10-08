# Task 1: Task 1 HTTP Server

## What concept does this task revise?
HTTP methods, status codes, headers

## What you should understand BEFORE running
Read the matching section in the Topic 2 notes/image. Be able to explain the concept in 2–3 sentences.

## How the implementation works
1. Start with the input/request.
2. Follow the code from top to bottom.
3. Identify the exact line where the HLD concept is implemented.
4. Run it.
5. Change one value and predict the output.
6. Explain the failure case.

## Interview connection
Be ready to answer:
- Why is this needed?
- What problem does it solve?
- What happens when it fails?
- How does it scale?
- What trade-off does it introduce?

## Flight Booking connection
Ask where this belongs in:
Client → Nginx/LB → API Gateway → Booking/Flight/Payment → DB/RabbitMQ.

## Revision rule
Do not memorize the code. Memorize the **flow and reason** for each component.


## JavaScript module system
This lab uses **ES Modules (ESM)**. `package.json` contains `\"type\": \"module\"`, so use `import` / `export` syntax rather than CommonJS `require()` / `module.exports`.
