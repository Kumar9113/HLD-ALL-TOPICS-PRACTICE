-- PostgreSQL pattern:
-- UPDATE flights
-- SET total_seats = total_seats - $1
-- WHERE id = $2 AND total_seats >= $1
-- RETURNING *;
--
-- If zero rows return, reservation failed.
-- This can avoid a separate read before the guarded write.
console.log('Use an atomic conditional UPDATE when its invariant fits the use case.');
