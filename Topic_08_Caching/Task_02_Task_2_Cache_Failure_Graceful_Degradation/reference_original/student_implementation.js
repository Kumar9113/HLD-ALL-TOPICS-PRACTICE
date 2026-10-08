import express from 'express';
import Redis from 'ioredis';
const app = express();
const redis = new Redis(process.env.REDIS_URL || 'redis://redis:6379');
const db = new Map([[101, {id:101, from:'HYD', to:'DEL', seats:40}]]);

app.get('/flights/:id', async (req,res) => {
  const key = `flight:${req.params.id}`;
  try {
    const cached = await redis.get(key);
    if (cached) return res.json({source:'cache', data:JSON.parse(cached)});
    const row = db.get(Number(req.params.id));
    if (!row) return res.status(404).json({error:'not found'});
    await redis.set(key, JSON.stringify(row), 'EX', 60);
    return res.json({source:'db', data:row});
  } catch (err) {
    console.error('cache unavailable:', err.message);
    const row = db.get(Number(req.params.id));
    if (!row) return res.status(404).json({error:'not found'});
    return res.json({source:'db-fallback', data:row});
  }
});
app.listen(3000, () => console.log('graceful cache fallback on 3000'));
