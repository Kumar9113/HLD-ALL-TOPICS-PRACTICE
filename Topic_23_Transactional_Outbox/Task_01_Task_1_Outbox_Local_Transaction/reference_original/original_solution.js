import { Sequelize, DataTypes } from 'sequelize';
const sequelize=new Sequelize({dialect:'sqlite',storage:'outbox.sqlite',logging:false});
const Booking=sequelize.define('Booking',{status:DataTypes.STRING});
const Outbox=sequelize.define('Outbox',{
 eventId:{type:DataTypes.UUID,defaultValue:DataTypes.UUIDV4,primaryKey:true},
 eventType:DataTypes.STRING,
 payload:DataTypes.TEXT,
 status:{type:DataTypes.STRING,defaultValue:'PENDING'}
});
(async()=>{
 await sequelize.sync({force:true});
 await sequelize.transaction(async t=>{
  const b=await Booking.create({status:'CONFIRMED'},{transaction:t});
  await Outbox.create({eventType:'booking.confirmed',payload:JSON.stringify({bookingId:b.id})},{transaction:t});
 });
 console.log(await Booking.findAll(),await Outbox.findAll());
})();
