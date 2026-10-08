import express from 'express';
import Redis from 'ioredis';
const app=express(),redis=new Redis();
const db=new Map([[101,{id:101,from:'HYD',to:'DEL',seats:40}]]);

app.get('/flights/:id',async(req,res)=>{
 const key='flight:'+req.params.id;
 const cached=await redis.get(key);
 if(cached)return res.json({source:'cache',data:JSON.parse(cached)});
 const row=db.get(Number(req.params.id));
 if(!row)return res.status(404).json({error:'not found'});
 await redis.set(key,JSON.stringify(row),'EX',60);
 res.json({source:'db',data:row});
});
app.put('/flights/:id',async(req,res)=>{
 const id=Number(req.params.id); db.set(id,{id,...req.body});
 await redis.del('flight:'+id);
 res.json(db.get(id));
});
app.listen(3000,()=>console.log('cache-aside demo on 3000'));
