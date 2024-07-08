import React from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import DigitalGold from './pages/DigitalGold';
import Sidebar from './pages/Sidebar';
import Layout from './pages/Layout';


const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>} />

      <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/digital-gold" element={<DigitalGold/>} />
          
      </Routes>
    </>
  )
}

export default Routing
