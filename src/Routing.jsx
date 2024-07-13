import React from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import DigitalGold from './pages/DigitalGold';
import Sidebar from './pages/Sidebar';


const Routing = () => {
  return (
    <>
      <Routes>

      <Route path="/dashboard" element={<Dashboard/>} />
          
      </Routes>
    </>
  )
}

export default Routing
