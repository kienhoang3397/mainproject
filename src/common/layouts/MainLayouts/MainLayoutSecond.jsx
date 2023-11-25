import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BeforeLoginNav from '../navbar/LoginNav/LoginNav'
import Footer from '../footer/Footer'
import SidebarDashboard from '../../components/Side/SidebarDashboard/SidebarDashboard'

function MainLayoutSecond() {
  return (
    <>
     <BeforeLoginNav lightNav/>
      <Outlet></Outlet>
      <Footer/>
    
      
    </>
  )
}

export default MainLayoutSecond