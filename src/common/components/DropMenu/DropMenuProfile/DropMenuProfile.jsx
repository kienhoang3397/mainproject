import React from 'react'
import styles from './DropMenuProfile.module.css'

import clsx from 'clsx';
import { HistoryOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

function DropMenuProfile({dark, light}) {
  const  DropMenuProfileClasses = clsx(styles.container, {
    [styles.dark]: dark, 
    [styles.light]: light, 
  });
  return (
    <div className={DropMenuProfileClasses}>
        <div className={styles.dropdown}>
             <UserOutlined className={styles.icon}/>&ensp;<span className={styles.content}>Profile</span>
           
        </div>
        <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}><HistoryOutlined className={styles.icon} />&ensp;<span className={styles.content}>Order History</span></li>
            <li className={styles.dropdownItem}><LogoutOutlined className={styles.icon} />&ensp;<span className={styles.content}>Sign Outy</span></li>
            
        </ul>
    </div>
  )
}

export default DropMenuProfile