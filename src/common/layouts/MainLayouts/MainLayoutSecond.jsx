import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import BeforeLoginNav from '../navbar/LoginNav/LoginNav'

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