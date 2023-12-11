import React, { useEffect, useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";
import BeforeLoginNav from "../../navbar/LoginNav/LoginNav";
import UserNav from "../../navbar/UserNav/UserNav";
import styles from "./UserLayout.module.css";

function UserLayout() {
  const [isChecked, setChecked] = useState(false);
  const user = useSelector((state) => state.userApi?.user);
  
  const navigate = useNavigate()
   useEffect(() => {
     if (!user) {
       navigate("/login");
     }
    
   }, []);
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
