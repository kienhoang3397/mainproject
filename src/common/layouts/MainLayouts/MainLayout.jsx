import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import BeforeLoginNav from '../navbar/LoginNav/LoginNav'

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