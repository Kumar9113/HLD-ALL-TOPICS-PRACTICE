import express from 'express';
const app=express(); app.use(express.json());
const results=new Map();

app.post('/api/v1/bookings',(req,res)=>{
  const key=req.header('Idempotency-Key');
  if(!key)return res.status(400).json({error:'Idempotency-Key required'});

  if(results.has(key)) return res.status(200).json(results.get(key));

  const booking={id:'BK-'+Date.now(),...req.body,status:'PENDING'};
  results.set(key,booking);
  res.status(201).json(booking);
});
app.listen(3000,()=>console.log('Idempotency API on 3000'));
