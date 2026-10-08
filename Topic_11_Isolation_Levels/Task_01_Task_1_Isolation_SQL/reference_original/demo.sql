CREATE TABLE IF NOT EXISTS flights(id INT PRIMARY KEY, seats INT);
TRUNCATE flights;
INSERT INTO flights VALUES (1,10);
-- Open two terminals:
-- Terminal A: docker compose exec postgres psql -U postgres -d hld_lab
-- Terminal B: docker compose exec postgres psql -U postgres -d hld_lab
