import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'shipments'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setShipments(data);
    } catch (error) {
      console.error('Error fetching shipments:', error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const shipmentRef = doc(db, 'shipments', id);
      await updateDoc(shipmentRef, { status: newStatus });
      alert('Status updated!');
      fetchShipments();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📦 Track Shipments</h2>
      {shipments.map((shipment) => (
        <div key={shipment.id} style={styles.card}>
          <p><strong>{shipment.senderName || 'N/A'}</strong> → <strong>{shipment.receiverName || 'N/A'}</strong></p>
          <p>📦 Size: {shipment.packageSize || 'N/A'}</p>
          <p>🏠 Address: {shipment.deliveryAddress || 'N/A'}</p>
          <p>Status: <strong>{shipment.status}</strong></p>

          <select
            value={shipment.status}
            onChange={(e) => updateStatus(shipment.id, e.target.value)}
            style={styles.dropdown}
          >
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial',
    maxWidth: '600px',
    margin: 'auto'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '15px',
    background: '#f5f5f5',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  dropdown: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '10px'
  }
};

export default ShipmentList;
