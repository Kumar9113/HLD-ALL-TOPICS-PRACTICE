const saga = { bookingId:'BK100', state:'PENDING', history:[] };
function step(name, fn) {
  try { const result = fn(); saga.history.push({step:name, ok:true}); return result; }
  catch (e) { saga.history.push({step:name, ok:false, error:e.message}); throw e; }
}
try {
  step('reserve-flight', () => console.log('Flight reserved'));
  step('charge-payment', () => {
    if (process.env.PAYMENT_FAIL === '1') throw new Error('payment declined');
    console.log('Payment success');
  });
  saga.state='CONFIRMED';
} catch {
  console.log('Compensation: release flight seats -> cancel booking');
  saga.state='CANCELLED';
}
console.log(saga);
