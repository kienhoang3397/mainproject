import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import BeforeLoginNav from "../../navbar/LoginNav/LoginNav";
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.container}>
     
        <BeforeLoginNav darkNav />
      
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default MainLayout;
