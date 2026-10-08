const users=10_000_000;
const activePercent=10;
const requestsPerUserPerDay=20;
const peakFactor=5;
const readPercent=90;
const responseKB=20;
const safeRpsPerServer=250;
const recordBytes=1000;
const recordsPerDay=1_000_000;

const dau=users*activePercent/100;
const requestsDay=dau*requestsPerUserPerDay;
const avgRps=requestsDay/86400;
const peakRps=avgRps*peakFactor;
const readRps=peakRps*readPercent/100;
const writeRps=peakRps-readRps;
const servers=Math.ceil(peakRps/safeRpsPerServer);
const bandwidthMBps=peakRps*responseKB/1024;
const storageGBDay=recordsPerDay*recordBytes/(1024**3);

console.table({dau,requestsDay,avgRps,peakRps,readRps,writeRps,servers,bandwidthMBps,storageGBDay});
