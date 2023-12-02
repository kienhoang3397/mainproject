import React from 'react';
import styles from './Status.module.css';

function Status({ disable, variant2, defaultValue, content, color, height, handleBtn, type }) {
    const buttonStyle = {
        color: color || styles.defaultColor,
        
    };

    return (
      <div className={styles.status} style={buttonStyle} >{content}</div>
    );
}
export default Status