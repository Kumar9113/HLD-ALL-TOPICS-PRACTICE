import { Sequelize } from 'sequelize';
const sequelize=new Sequelize(process.env.DATABASE_URL||'postgres://postgres:postgres@localhost:5432/postgres',{
 dialect:'postgres',
 pool:{max:10,min:2,acquire:30000,idle:10000}
});
console.log('Potential max connections = app instances * pool.max');
console.log('Example: 10 instances * 10 = 100 connections');
