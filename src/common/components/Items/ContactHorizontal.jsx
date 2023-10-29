import { FacebookFilled, InstagramOutlined, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'
import React from 'react'
import styles from './ContactHorizontal.module.css'
import { clsx } from 'clsx';

function ContactHorizontal({dark, light}) {
    const inputClasses = clsx(styles.listItemHorizontal, {
        [styles.dark]: dark,
        [styles.light]: light,
      });
    return (
      
             <ul className={inputClasses}>
                <li className={styles.item}><InstagramOutlined /></li>
                <li className={styles.item}><FacebookFilled /></li>
                <li className={styles.item}><YoutubeFilled /></li>
                <li className={styles.item}><TwitterOutlined /></li>
            </ul>
            

     
           
      

    )
}

export default ContactHorizontal

export function ContactVertical({dark, light}) {
    const inputClasses = clsx(styles.listItemVertical, {
        [styles.dark]: dark,
        [styles.light]: light,
      });
    return (
        <ul className={inputClasses}>
            <li className={styles.item}><InstagramOutlined /></li>
            <li className={styles.item}><FacebookFilled /></li>
            <li className={styles.item}><YoutubeFilled /></li>
            <li className={styles.item}><TwitterOutlined /></li>
        </ul>
    )
}