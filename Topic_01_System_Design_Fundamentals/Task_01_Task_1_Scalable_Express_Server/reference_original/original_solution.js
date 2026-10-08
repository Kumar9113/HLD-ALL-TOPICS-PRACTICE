import express from 'express';
import os from 'os';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const INSTANCE = process.env.INSTANCE || os.hostname();

app.get('/health', (req,res)=>res.json({status:'UP', instance:INSTANCE}));
app.get('/api/flights', (req,res)=>res.json({
  instance: INSTANCE,
  flights: [{id:101, from:'HYD', to:'DEL', seats:40}]
}));

app.listen(PORT, ()=>console.log(`Server ${INSTANCE} on ${PORT}`));
