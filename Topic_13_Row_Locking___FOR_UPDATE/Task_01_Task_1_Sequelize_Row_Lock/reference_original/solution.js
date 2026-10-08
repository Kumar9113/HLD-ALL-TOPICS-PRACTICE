import { Sequelize, DataTypes } from 'sequelize';
const sequelize=new Sequelize(process.env.DATABASE_URL||'postgres://postgres:postgres@localhost:5432/postgres',{dialect:'postgres',logging:console.log});
const Flight=sequelize.define('Flight',{totalSeats:DataTypes.INTEGER},{tableName:'flights',timestamps:false});

async function reserveSeats(id,seats){
 return sequelize.transaction(async t=>{
   const flight=await Flight.findByPk(id,{transaction:t,lock:t.LOCK.UPDATE});
   if(!flight)throw new Error('not found');
   if(flight.totalSeats<seats)throw new Error('not enough seats');
   flight.totalSeats-=seats;
   await flight.save({transaction:t});
   return flight;
 });
}
console.log('Use reserveSeats(id,seats) from a real PostgreSQL setup.');
