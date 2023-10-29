

import React from 'react';
import clsx from 'clsx'; 
import styles from './Logo.module.css'


function Logo({ logoInv, whiteLogo, greyLogo, width, height }) {
    const logoStyle = {
        width: width || styles.defaultWidth,     
        height: height || styles.defaultHeight,   
    };
    return (
        <div className={clsx( {
            [styles.logoInv]: logoInv,
            [styles.whiteLogo]: whiteLogo,
            [styles.greyLogo]: greyLogo,
        })} style={logoStyle}> 
            
        </div>
    );
}

export default Logo;
