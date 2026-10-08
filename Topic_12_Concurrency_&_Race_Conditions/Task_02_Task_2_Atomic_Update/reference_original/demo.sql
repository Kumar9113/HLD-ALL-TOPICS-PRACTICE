CREATE TABLE IF NOT EXISTS flights(id INT PRIMARY KEY, total_seats INT);
TRUNCATE flights;
INSERT INTO flights VALUES (1,10);
-- Run the atomic statement from solution.sql:
-- UPDATE flights SET total_seats = total_seats - 2
-- WHERE id = 1 AND total_seats >= 2 RETURNING *;
