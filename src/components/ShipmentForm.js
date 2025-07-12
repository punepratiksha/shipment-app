import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ShipmentForm = () => {
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [packageSize, setPackageSize] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // Simulate a payment popup
    const confirmPayment = window.confirm("Proceed to pay ₹5?");
    if (confirmPayment) {
      alert("Payment Successful! This was a demo transaction.");
      setIsPaid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!senderName || !receiverName || !deliveryAddress || !packageSize) {
      alert("Please fill all fields before submitting!");
      return;
    }

    if (!isPaid) {
      alert("Please complete the payment before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, 'shipments'), {
        senderName,
        receiverName,
        deliveryAddress,
        packageSize,
        status: 'Pending',
        paymentStatus: 'Paid'
      });

      alert('Shipment created successfully!');

      // Clear form
      setSenderName('');
      setReceiverName('');
      setDeliveryAddress('');
      setPackageSize('');
      setIsPaid(false);
    } catch (error) {
      console.error('Error creating shipment:', error);
      alert('Failed to create shipment. Check console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Create Shipment</h2>

      <input
        type="text"
        placeholder="Sender Name"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="text"
        placeholder="Receiver Name"
        value={receiverName}
        onChange={(e) => setReceiverName(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="text"
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        style={styles.input}
        required
      />

      <select
        value={packageSize}
        onChange={(e) => setPackageSize(e.target.value)}
        style={styles.input}
        required
      >
        <option value="">Select Package Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      {!isPaid && (
        <button type="button" onClick={handlePayment} style={styles.payButton}>
          Pay ₹5
        </button>
      )}

      <button type="submit" style={styles.button} disabled={!isPaid}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontFamily: 'Arial'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  payButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ShipmentForm;
