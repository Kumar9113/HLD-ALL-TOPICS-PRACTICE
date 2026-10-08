const states=['PENDING','FLIGHT_RESERVED','PAYMENT_SUCCESS','CONFIRMED','CANCELLED'];
const saga={
 bookingId:'BK100',
 state:'PENDING',
 compensation:[]
};
function transition(next){ console.log(saga.state,'->',next); saga.state=next; }

transition('FLIGHT_RESERVED');
// Simulate payment failure:
console.log('Payment failed');
saga.compensation.push('RELEASE_FLIGHT_SEATS','CANCEL_BOOKING');
transition('CANCELLED');
console.log(saga);
