import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Shipment Dashboard</h1>
      <ul>
        <li><Link to="/create-shipment">Create Shipment</Link></li>
        <li><Link to="/track-shipment">Track Shipments</Link></li>
        <li><Link to="/payment">Make Payment</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
