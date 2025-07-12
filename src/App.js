import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';
import ShipmentForm from './components/ShipmentForm';
import ShipmentList from './components/ShipmentList';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-shipment" element={<ShipmentForm />} />
        <Route path="/track-shipment" element={<ShipmentList />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;