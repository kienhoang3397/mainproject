import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuickAccess from '../../../components/QuickAccess/QuickAccess';
import Theme from '../../../components/Themes/Theme';
import styles from './LoginNav.module.css';



function BeforeLoginNav({ darkNav, lightNav }) {


 
  const navClasses = clsx(styles.nav, {
    [styles.darkNav]: darkNav,
    [styles.lightNav]: lightNav,
  });
  
  const user = useSelector((state) => state.auth.login.currentUser?.user);



  return (
    <div className={styles.navField}>
      {user ? (
        <nav className={navClasses}>
          <Link to={'/'} className={styles.logo}>

            <Theme greyText />
          </Link>

          <div className={styles.router}>
            <Link className={styles.item} to={'/'}>
              Home 
            </Link>
            <Link to={'product'} className={styles.item}>Product <FontAwesomeIcon icon={faChevronDown} /></Link>
            <p className={styles.item}>Origial Products</p>
          </div>
          
          <QuickAccess />
        </nav>

      ) : (
        <nav className={navClasses}>
          <Link to={'/'} className={styles.logo}>
            <div className={styles.logo} />
            <Theme greyText />
          </Link>

          <div className={styles.router}>
            <Link className={styles.item} to={'/'}>
              Home
            </Link>
            <Link className={styles.item} to={'/contact'}>
              Contact
            </Link>
            <Link className={styles.item} to={'/about'}>
              About
            </Link>
          </div>

          <div className={styles.auth}>
            <Link className={styles.item} to={'/login'}>
              Login
            </Link>
            <p className={styles.item}>|</p>
            <Link className={styles.item} to={'/product'}>
              Product

            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default BeforeLoginNav;
