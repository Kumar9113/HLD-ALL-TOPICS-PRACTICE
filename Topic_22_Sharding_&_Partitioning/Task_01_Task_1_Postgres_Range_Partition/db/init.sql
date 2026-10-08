CREATE TABLE bookings(id bigserial, booked_at date not null, user_id bigint, status text) PARTITION BY RANGE(booked_at);
CREATE TABLE bookings_2026 PARTITION OF bookings FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');
CREATE TABLE bookings_2027 PARTITION OF bookings FOR VALUES FROM ('2027-01-01') TO ('2028-01-01');
INSERT INTO bookings(booked_at,user_id,status) VALUES ('2026-10-08',1,'CONFIRMED');
