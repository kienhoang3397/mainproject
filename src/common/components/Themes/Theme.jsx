import clsx from 'clsx';
import React from 'react';
import Logo from '../Logos/Logo';
import styles from './Theme.module.css';


function Theme({  textInv, whiteText, greyText, width, height }) {
    const logoStyle = {
        width: width || styles.defaultWidth,     
        height: height || styles.defaultHeight,   
    };

    return (
        
            <div className={clsx(styles.textContainer, {
                [styles.textInv]: textInv,
                [styles.whiteText]: whiteText,
                [styles.greyText]: greyText,
            })} style={logoStyle}><Logo greyLogo width={'29px'} height={'29px'}/> <p className={styles.text}>ex.iphones.</p></div>
        
    );
}

export default Theme;
