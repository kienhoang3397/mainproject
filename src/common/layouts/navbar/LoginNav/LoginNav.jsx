import React from 'react';
import Theme from '../../../components/Themes/Theme';
import Logo from '../../../components/Logos/Logo';
import styles from './LoginNav.module.css';
import QuickAccess from '../../../components/QuickAccess/QuickAccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Link } from 'react-router-dom';



function BeforeLoginNav({ darkNav, lightNav }) {
  const navClasses = clsx(styles.nav, {
    [styles.darkNav]: darkNav,
    [styles.lightNav]: lightNav,
  });

  return (

    <div className={styles.navField}>

      <nav className={navClasses}>

        <Link to={'home'} className={styles.logo}><div className={styles.logo} />    <Theme greyText /> </Link>




        <div className={styles.router}>
          <Link className={styles.item} to={"home"}>Home</Link>
          <Link className={styles.item} to={"contact"}>Contact</Link>
          <Link className={styles.item} to={"about"}>About</Link>
        </div>

        <div className={styles.auth}>
          <Link className={styles.item} to={"login"}>Login</Link>
          <p className={styles.item}>|</p>
          <Link className={styles.item} to={"product"}>Product</Link>

        </div>
      </nav>
    </div>
  );
}

export default BeforeLoginNav;


export function AfterLoginNav() {


  return (
    <nav className={styles.nav} >
      <div className={styles.logo}>
        <Logo greyLogo width={'29px'} height={'29px'} />
        <Theme greyText />
      </div>

      <div className={styles.router}>
        <p className={styles.item}>HomeProducts <FontAwesomeIcon icon={faChevronDown} /> </p>
        <p className={styles.item}>|</p>
        <p className={styles.item}>Origial Products</p>



      </div>

      <QuickAccess />
    </nav>
  );
}


