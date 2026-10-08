import amqp from 'amqplib';
(async()=>{
 const conn=await amqp.connect(process.env.RABBITMQ_URL||'amqp://localhost');
 const ch=await conn.createChannel();
 await ch.assertQueue('notification.queue',{durable:true});
 await ch.consume('notification.queue',async msg=>{
   if(!msg)return;
   try{
     const event=JSON.parse(msg.content.toString());
     console.log('processing',event);
     // TODO: make processing idempotent using event.eventId.
     ch.ack(msg);
   }catch(e){
     console.error(e);
     ch.nack(msg,false,false);
   }
 });
})();
