import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';

import DigitalGold from './components/Dashboard/DigitalGold/DigitalGold';
import GoldSip from './components/Dashboard/GoldSip/GoldSip';
import Merchant from './components/Dashboard/Merchant/Merchant';
import GoldPro from './components/Dashboard/GoldPro/GoldPro';
import FineX from './components/Dashboard/Finex/FineX';
import FinePlus from './components/Dashboard/FinePlus/FinePlus';
import GoldPlus from './components/Dashboard/GoldPuls/GoldPlus';
import RolesForm from './components/TeamManagment/RolesForm';
import SuperAdminTable from './components/TeamManagment/SubAdminTable';
import SubAdminTable from './components/TeamManagment/SubAdminTable';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    // const [submissions, setSubmissions] = useState([]);

    const [superAdminSubmissions, setSuperAdminSubmissions] = useState([]);
    const [subAdminSubmissions, setSubAdminSubmissions] = useState([]);
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }
  

  // const handleAddSubmission = (formData) => {
  //   console.log('Form data received:', formData); // Debug log
  //   setSubmissions([...submissions, formData]);
  // };

  const handleAddSubmission = (formData) => {
    console.log('Form data received in App:', formData); // Debug log
    if (formData.f_Designation === 'Super Admin') {
      setSuperAdminSubmissions([...superAdminSubmissions, formData]);
    } else if (formData.f_Designation === 'Sub Admin') {
      setSubAdminSubmissions([...subAdminSubmissions, formData]);
    }
  };

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

          {/* <Route path="/rolesform" element={<RolesForm onAddSubmission={handleAddSubmission} />} />
          <Route path="/superadminTable" element={<SuperAdminTable submissions={submissions} />} /> */}
          <Route path="/rolesform" element={<RolesForm onAddSubmission={handleAddSubmission} />} />
          <Route path="/superadminTable" element={<SuperAdminTable superAdminSubmissions={superAdminSubmissions} />} />
          <Route path="/subadminTable" element={<SubAdminTable subAdminSubmissions={subAdminSubmissions} />} />

        </Routes>
      </div>
  );
}

export default App;
