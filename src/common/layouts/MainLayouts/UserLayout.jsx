import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BeforeLoginNav from '../navbar/LoginNav/LoginNav'
import Footer from '../footer/Footer'
import SidebarDashboard from '../../components/Side/SidebarDashboard/SidebarDashboard'
import UserNav from '../navbar/UserNav/UserNav'
import styles from './MainLayout.module.css'



function UserLayout() {
  return (
    <div className={styles.container}>
      <BeforeLoginNav></BeforeLoginNav>
      <section className={styles.content}>
         <UserNav/>
        
         <Outlet></Outlet>
      
     </section>
    
      <Footer/>
    
      
    </div>
  )
}

export default UserLayout