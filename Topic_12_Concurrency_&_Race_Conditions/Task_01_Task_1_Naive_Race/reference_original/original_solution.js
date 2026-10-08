let seats=1;
async function book(name){
 const observed=seats;
 await new Promise(r=>setTimeout(r,100));
 if(observed<1)return console.log(name,'failed');
 seats=observed-1;
 console.log(name,'booked');
}
Promise.all([book('A'),book('B')]).then(()=>console.log('final seats',seats));
// Both can observe 1. This is a race in application logic.
// Real systems solve this at the database/concurrency-control layer.
