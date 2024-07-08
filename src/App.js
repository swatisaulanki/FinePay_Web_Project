import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'
import Home from './pages/Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
    </div>
  )
}

export default App