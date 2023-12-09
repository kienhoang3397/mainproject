import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BeforeLoginNav from "../../navbar/LoginNav/LoginNav";
import Footer from "../../footer/Footer";
import SidebarDashboard from "../../../components/Side/SidebarDashboard/SidebarDashboard";
import UserNav from "../../navbar/UserNav/UserNav";
import styles from "./UserLayout.module.css";
import { AiFillAppstore } from "react-icons/ai";

function UserLayout() {
  const [isChecked, setChecked] = useState(false);
  return (
    <div className={styles.container}>
      <BeforeLoginNav></BeforeLoginNav>
      <div className={styles.main}>
        {" "}
        <div className={styles.containerContent}>
          {" "}
          <section className={styles.contentOnRepon}>
            <div
              className={
                isChecked
                  ? styles.usernav
                  : `${styles.usernav} ${styles.hidden}`
              }
            >
              <UserNav />
            </div>

            <input
              type="checkbox"
              id="sidebarCheckbox"
              checked={isChecked}
              onChange={() => setChecked(!isChecked)}
            />
            <label htmlFor="sidebarCheckbox">
              <AiFillAppstore className={styles.icon} />
            </label>
          </section>
          <section className={styles.content}>
            <UserNav />
          </section>
        </div>
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
}

export default UserLayout;
