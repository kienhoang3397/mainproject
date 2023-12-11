import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuickAccess from "../../../components/QuickAccess/QuickAccess";
import Theme from "../../../components/Themes/Theme";
import { TiThMenu } from "react-icons/ti";
import styles from "./LoginNav.module.css";
import store from "../../../../redux/store";
import { productsFetch } from "../../../../redux/slice/productApiSlice";
import { fetchUser } from "../../../../redux/slice/userApiSlice";

function BeforeLoginNav({ darkNav, lightNav }) {
  const [isCheckedNav, setCheckedNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch()

  const navClasses = clsx(styles.nav, {
    [styles.darkNav]: darkNav,
    [styles.lightNav]: lightNav,
    [styles.active]: isScrolled,
  });

  const user = useSelector((state) => state.userApi.user);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.navField}>
      {user ? (
        <nav className={navClasses}>
          <Link to={"/"} className={styles.logo}>
            <Theme />
          </Link>

          <div
            className={
              isCheckedNav ? styles.router : `${styles.router} ${styles.hidden}`
            }
          >
            <Link className={styles.item} to={"/"}>
              Home
            </Link>
            <Link to={"/product"} className={styles.item}>
              Product <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <QuickAccess />
          </div>
          <div className={styles.iconNav}>
            <input
              type="checkbox"
              id="checkk"
              checked={isCheckedNav}
              onChange={() => setCheckedNav(!isCheckedNav)}
            />
            <label htmlFor="checkk">
              <TiThMenu />
            </label>
          </div>
        </nav>
      ) : (
        <nav className={navClasses}>
          <div className={styles.logo}>
            <Link className={styles.logo} to={"/"}>
              <Theme greyText />
            </Link>
          </div>

          <div
            className={
              isCheckedNav ? styles.router : `${styles.router} ${styles.hidden}`
            }
          >
            <Link className={styles.item} to={"/"}>
              Home
            </Link>
            <Link className={styles.item} to={"/contact"}>
              Contact
            </Link>
            <Link className={styles.item} to={"/about"}>
              About
            </Link>
            <Link className={styles.item} to={"/login"}>
              Login
            </Link>

            <Link className={styles.item} to={"/register"}>
              Sign Up
            </Link>
          </div>

          <div className={styles.iconNav}>
            <input
              type="checkbox"
              id="checkk"
              checked={isCheckedNav}
              onChange={() => setCheckedNav(!isCheckedNav)}
            />
            <label htmlFor="checkk">
              <TiThMenu />
            </label>
          </div>
        </nav>
      )}
    </div>
  );
}

export default BeforeLoginNav;
