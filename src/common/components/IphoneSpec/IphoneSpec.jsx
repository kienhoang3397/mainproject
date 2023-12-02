import React from 'react';
import styles from './IphoneSpec.module.css';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';
import Btn from '../Buttons/Button';

function IphoneSpec({ name, price }) {
  return (
    <Link to={'product'} className={styles.container}>
      <p className={styles.text}>New</p>
      <p className={styles.title}>{name}</p>
      <p className={styles.content}>{price}</p>
      <Btn defaultValue to={'product'} content={'BUY'} />
    </Link>
  );
}

export default IphoneSpec;
