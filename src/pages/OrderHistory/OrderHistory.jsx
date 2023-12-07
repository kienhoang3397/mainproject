import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './OrtherHistory.module.css';

function OrtherHistory() {
  const dispatch = useDispatch()
  const wishListSlice = useSelector(state => state.wishlist?.wishlists);
 


  return (
    <div className={styles.container}>
      <section className={styles.fieldSettingHeading}>
        <p className={styles.settingHeading}>Order History</p>
      </section>
                                                   
      
    </div>
  );
}

export default OrtherHistory;
