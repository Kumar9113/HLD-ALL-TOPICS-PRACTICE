// Exercise: wrap Redis GET/SET in try/catch.
// On Redis failure:
// 1. Read from DB.
// 2. Log the cache error.
// 3. Continue serving the request.
// Never treat Redis as the source of truth for seat inventory.
console.log('Rule: cache improves latency; database remains source of truth.');
