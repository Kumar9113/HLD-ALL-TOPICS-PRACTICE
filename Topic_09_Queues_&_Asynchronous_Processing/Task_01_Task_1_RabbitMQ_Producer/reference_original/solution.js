import crypto from 'crypto';
import amqp from 'amqplib';
(async()=>{
 const conn=await amqp.connect(process.env.RABBITMQ_URL||'amqp://localhost');
 const ch=await conn.createChannel();
 await ch.assertExchange('booking.events','topic',{durable:true});
 const msg={eventId:crypto.randomUUID(),bookingId:'BK123'};
 ch.publish('booking.events','booking.confirmed',Buffer.from(JSON.stringify(msg)),{persistent:true});
 console.log('published',msg); await ch.close(); await conn.close();
})();
