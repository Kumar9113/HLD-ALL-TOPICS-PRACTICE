// Design exercise:
// Bad:
// BEGIN -> update DB -> call payment API (5 sec) -> COMMIT
//
// Better:
// 1. Keep local DB transaction short.
// 2. Commit local state.
// 3. Use an event/outbox + Saga for cross-service workflow.
//
// Write down exactly what happens if the payment API times out at each point.
// This task is intentionally design-first.
console.log('Draw the failure timeline before implementing.');
