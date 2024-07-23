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
import UserAllData from './components/UserManagement/UserAllData';
import UserWallet from './components/UserManagement/UserWallet';
import UserLoanHistory from './components/UserManagement/UserLoanHistory';
import UserAllActivity from './components/UserManagement/UserAllActivity';
import ProductsManageForm from './components/ProductsManagement/ProductsManageForm';
import AllProductReturn from './components/ProductsManagement/AllProductReturn';
import AllProductReinvestment from './components/ProductsManagement/AllProductReinvestment';
import AllProductLoan from './components/ProductsManagement/AllProductLoan';

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
          <Route path="/userAllData" element={<UserAllData/>} />
          <Route path="/userWallet" element={<UserWallet/>} />
          <Route path="/userLoanHistory" element={<UserLoanHistory/>} />
          <Route path="/userAllActivity" element={<UserAllActivity/>} />
          <Route path="/productManageForm" element={<ProductsManageForm/>} />
          <Route path="/allProductReturn" element={<AllProductReturn/>} />
          <Route path="/allProductReinvestment" element={<AllProductReinvestment/>} />
          <Route path="/allProductLoan" element={<AllProductLoan/>} />

         

        </Routes>
      </div>
  );
}

export default App;
