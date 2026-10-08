#!/bin/sh
psql "$DATABASE_URL" < /backup/hld.sql
echo "restore completed"
