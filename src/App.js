import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import ReportSummary from './components/Dashboard/ReportSummary';
import GoldSip from './components/Dashboard/GoldSip';
import Merchant from './components/Dashboard/Merchant';
import GoldPro from './components/Dashboard/GoldPro';
import FineX from './components/Dashboard/FineX';
import FinePlus from './components/Dashboard/FinePlus';
import GoldPlus from './components/Dashboard/GoldPlus';
import DigitalGold from './components/Dashboard/DigitalGold';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/digitalGold" element={<DigitalGold/>} />
          <Route path="/goldsip" element={<GoldSip/>} />
          <Route path="/merchant" element={<Merchant/>} />
          <Route path="/goldPro" element={<GoldPro/>} />
          <Route path="/finex" element={<FineX/>} />
          <Route path="/fineplus" element={<FinePlus/>} />
          <Route path="/goldPlus" element={<GoldPlus/>} />



        </Routes>
      </div>
  );
}

export default App;
