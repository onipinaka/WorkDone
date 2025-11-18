import React from 'react'
import Header from '../components/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'

function MainLayout() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className='flex flex-col min-h-screen w-full'>
        <Header/>
        {isSidebarOpen && <Sidebar/>}
        <div className='flex-1 flex justify-center items-start relative z-0'>
          <Outlet/> 
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout