import express from 'express';
const app=express();
const routes={
 '/api/flights':'http://localhost:3001',
 '/api/bookings':'http://localhost:3002',
 '/api/payments':'http://localhost:3003'
};
app.get('/routes',(req,res)=>res.json(routes));
app.listen(3000,()=>console.log('gateway skeleton on 3000'));
