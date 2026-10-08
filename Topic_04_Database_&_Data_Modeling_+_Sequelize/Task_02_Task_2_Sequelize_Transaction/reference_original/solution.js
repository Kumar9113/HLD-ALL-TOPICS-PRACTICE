import { Sequelize, DataTypes } from 'sequelize';
const sequelize=new Sequelize({dialect:'sqlite',storage:'booking.sqlite',logging:false});
const Flight=sequelize.define('Flight',{seats:{type:DataTypes.INTEGER,allowNull:false}});
const Booking=sequelize.define('Booking',{seats:{type:DataTypes.INTEGER,allowNull:false}});

(async()=>{
 await sequelize.sync({force:true});
 const f=await Flight.create({seats:5});
 try{
   await sequelize.transaction(async t=>{
     const flight=await Flight.findByPk(f.id,{transaction:t});
     if(flight.seats<3) throw new Error('Not enough seats');
     flight.seats-=3;
     await flight.save({transaction:t});
     await Booking.create({seats:3},{transaction:t});
     throw new Error('Simulated failure');
   });
 }catch(e){console.log('ROLLED BACK:',e.message)}
 console.log('Flight after rollback:',await Flight.findByPk(f.id));
 console.log('Bookings:',await Booking.count());
 await sequelize.close();
})();
