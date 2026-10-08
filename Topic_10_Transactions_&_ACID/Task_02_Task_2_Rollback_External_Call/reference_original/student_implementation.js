// Simulate why an external payment call should not hold a DB transaction open.
async function localTransaction(work) {
  console.log('BEGIN local transaction');
  try { await work(); console.log('COMMIT local transaction'); }
  catch (e) { console.log('ROLLBACK local transaction:', e.message); }
}
async function paymentCall() {
  await new Promise(r => setTimeout(r, 100));
  if (process.env.PAYMENT_FAIL === '1') throw new Error('payment timeout');
  return {paymentId:'PAY123'};
}
(async () => {
  await localTransaction(async () => {
    console.log('Create booking=PENDING');
  });
  try {
    const payment = await paymentCall();
    console.log('payment succeeded ->', payment);
  } catch (e) {
    console.log('payment failed -> publish compensation/outbox event:', e.message);
  }
})();
