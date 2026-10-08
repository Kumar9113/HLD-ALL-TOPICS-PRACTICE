-- Run in two psql sessions.
-- Session A:
BEGIN;
UPDATE flights SET seats=9 WHERE id=1;
-- Do not COMMIT yet.
--
-- Session B:
BEGIN;
SELECT seats FROM flights WHERE id=1;
-- Under READ COMMITTED, B sees the last committed value.
--
-- Then commit A and repeat B's SELECT.
-- Compare READ COMMITTED vs REPEATABLE READ.
--
-- PostgreSQL READ UNCOMMITTED behaves like READ COMMITTED.
