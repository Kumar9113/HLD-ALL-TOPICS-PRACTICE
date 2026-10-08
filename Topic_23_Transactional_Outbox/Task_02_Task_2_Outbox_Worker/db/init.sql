CREATE TABLE IF NOT EXISTS orders(id bigserial primary key,note text);
CREATE TABLE IF NOT EXISTS outbox(id bigserial primary key,event_type text,payload jsonb,published boolean default false);
