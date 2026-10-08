-- PostgreSQL:
CREATE TABLE bookings (
  id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  flight_id BIGINT NOT NULL,
  created_at DATE NOT NULL,
  status VARCHAR(20) NOT NULL
) PARTITION BY RANGE (created_at);

CREATE TABLE bookings_2026 PARTITION OF bookings
FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');

INSERT INTO bookings VALUES (1,101,500,'2026-10-05','CONFIRMED');
SELECT * FROM bookings WHERE created_at >= '2026-10-01';
