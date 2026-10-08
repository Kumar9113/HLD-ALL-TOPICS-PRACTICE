import { Sequelize, DataTypes } from 'sequelize';
const sequelize=new Sequelize({dialect:'sqlite',storage:'tx.sqlite',logging:false});
const Flight=sequelize.define('Flight',{seats:DataTypes.INTEGER});
const Booking=sequelize.define('Booking',{seats:DataTypes.INTEGER});

(async()=>{
 await sequelize.sync({force:true});
 const f=await Flight.create({seats:10});
 await sequelize.transaction(async t=>{
   const flight=await Flight.findByPk(f.id,{transaction:t});
   flight.seats-=2; await flight.save({transaction:t});
   await Booking.create({seats:2},{transaction:t});
 });
 console.log(await Flight.findByPk(f.id),await Booking.findAll());
})();
