import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BeforeLoginNav from '../navbar/LoginNav/LoginNav'
import Footer from '../footer/Footer'
import SidebarDashboard from '../../components/Side/SidebarDashboard/SidebarDashboard'

function MainLayout() {
  return (
    <>
     <BeforeLoginNav darkNav/>
      <Outlet></Outlet>
      <Footer/>
    
      
    </>
  )
}

export default MainLayout