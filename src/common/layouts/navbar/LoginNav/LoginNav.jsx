import React, { useEffect } from 'react';
import Theme from '../../../components/Themes/Theme';
import Logo from '../../../components/Logos/Logo';
import styles from './LoginNav.module.css';
import QuickAccess from '../../../components/QuickAccess/QuickAccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, refreshToken } from '../../../../redux/slice/apiRequest';



function BeforeLoginNav({ darkNav, lightNav }) {


 
  const navClasses = clsx(styles.nav, {
    [styles.darkNav]: darkNav,
    [styles.lightNav]: lightNav,
  });
  
  const user = useSelector((state) => state.auth.login.currentUser?.user);



  return (
    <div className={styles.navField}>
      {user ? (
        <nav className={styles.nav}>
          <div className={styles.logo}>

            <Theme greyText />
          </div>

          <div className={styles.router}>
            <Link className={styles.item} to={'/home'}>
              Home <FontAwesomeIcon icon={faChevronDown} />
            </Link>
            <p className={styles.item}>|</p>
            <p className={styles.item}>Origial Products</p>
          </div>
          
          <QuickAccess />
        </nav>

      ) : (
        <nav className={navClasses}>
          <Link to={'/home'} className={styles.logo}>
            <div className={styles.logo} />
            <Theme greyText />
          </Link>

          <div className={styles.router}>
            <Link className={styles.item} to={'/home'}>
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
