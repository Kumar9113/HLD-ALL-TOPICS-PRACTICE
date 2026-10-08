import crypto from 'crypto';
const shards=['db-shard-1','db-shard-2','db-shard-3','db-shard-4'];
function shardFor(userId){
 const h=crypto.createHash('sha256').update(String(userId)).digest();
 return shards[h.readUInt32BE(0)%shards.length];
}
for(const id of [101,102,103,104]) console.log(id,shardFor(id));
// Production exercise: explain hot shards, resharding, cross-shard queries and transactions.
