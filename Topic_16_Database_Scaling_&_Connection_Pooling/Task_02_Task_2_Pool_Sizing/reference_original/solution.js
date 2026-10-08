// Given:
// appInstances = 20
// poolMax = 10
// database max connections = 250
//
// Potential application connections = 200.
// Leave headroom for admin jobs, migrations, monitoring, other services.
// Never set pool.max blindly to the database max.
// Add PgBouncer/read replicas only when measurements and architecture justify them.
const appInstances=20,poolMax=10,dbMax=250;
console.log({potential:appInstances*poolMax,dbMax});
