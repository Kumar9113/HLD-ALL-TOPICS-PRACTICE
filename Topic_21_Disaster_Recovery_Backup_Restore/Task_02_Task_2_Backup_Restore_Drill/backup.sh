#!/bin/sh
pg_dump "$DATABASE_URL" > /backup/hld.sql
echo "backup created at /backup/hld.sql"
