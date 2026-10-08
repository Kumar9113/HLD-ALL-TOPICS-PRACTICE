import express from 'express';
const app=express(); app.use(express.json());
let flights=[
 {id:1,from:'HYD',to:'DEL',seats:40},
 {id:2,from:'BLR',to:'BOM',seats:20}
];

app.get('/api/v1/flights',(req,res)=>{
  const {from,to}=req.query;
  const page=Math.max(1,Number(req.query.page)||1);
  const limit=Math.min(50,Math.max(1,Number(req.query.limit)||10));
  let data=flights.filter(f=>(!from||f.from===from)&&(!to||f.to===to));
  const total=data.length;
  data=data.slice((page-1)*limit,page*limit);
  res.json({data,page,limit,total});
});
app.get('/api/v1/flights/:id',(req,res)=>{
  const f=flights.find(x=>x.id===Number(req.params.id));
  if(!f)return res.status(404).json({error:'Flight not found'});
  res.json(f);
});
app.post('/api/v1/flights',(req,res)=>{
  const {from,to,seats}=req.body;
  if(!from||!to||!Number.isInteger(seats)||seats<=0)
    return res.status(400).json({error:'Invalid input'});
  const f={id:Date.now(),from,to,seats}; flights.push(f);
  res.status(201).json(f);
});
app.patch('/api/v1/flights/:id',(req,res)=>{
  const f=flights.find(x=>x.id===Number(req.params.id));
  if(!f)return res.status(404).json({error:'Flight not found'});
  Object.assign(f,req.body); res.json(f);
});
app.delete('/api/v1/flights/:id',(req,res)=>{
  const i=flights.findIndex(x=>x.id===Number(req.params.id));
  if(i<0)return res.status(404).json({error:'Flight not found'});
  flights.splice(i,1); res.status(204).end();
});
app.listen(3000,()=>console.log('REST API on 3000'));
