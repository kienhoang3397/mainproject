

import React from 'react';
import clsx from 'clsx'; 
import styles from './Logo.module.css'
import { FaApple } from "react-icons/fa";
import { LuApple } from "react-icons/lu";


function Logo({ logoInv, whiteLogo, greyLogo, width, height }) {
    const logoStyle = {
        width: width || styles.defaultWidth,     
        height: height || styles.defaultHeight,   
    };
    return (
      <div
        className={clsx({
          [styles.logoInv]: logoInv,
          [styles.whiteLogo]: whiteLogo,
          [styles.greyLogo]: greyLogo,
        })}
        style={logoStyle}
      >
        <LuApple className={styles.icon} />
      </div>
    );
}

export default Logo;
