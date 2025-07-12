import React, { useState } from 'react';

const Payment = () => {
  const [paymentDone, setPaymentDone] = useState(false);

  const handleFakePayment = () => {
    // Simulate processing
    setTimeout(() => {
      setPaymentDone(true);
      alert('💸 Payment Successful! This was a demo transaction.');
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <h2>Payment</h2>
      {!paymentDone ? (
        <button onClick={handleFakePayment} style={styles.button}>
          Pay ₹5
        </button>
      ) : (
        <p style={styles.success}>✔️ Payment Completed!</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'Arial'
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  success: {
    color: '#28a745',
    fontSize: '20px',
    marginTop: '20px'
  }
};

export default Payment;
