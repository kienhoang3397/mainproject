import React from 'react';
import styles from './OrtherHistory.module.css';
import Btn from '../../common/components/Buttons/Button';
import Status from '../../common/components/Status/Status';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeItemformWishlist } from '../../redux/slice/wishlist';
import { addtoCart } from '../../redux/slice/cartSlice';
import { FaArrowRight } from "react-icons/fa6";

function OrtherHistory() {
  const dispatch = useDispatch()
  const wishListSlice = useSelector(state => state.wishlist?.wishlists);
  const handleRemoveFromWishList = (e) => {
    dispatch(removeItemformWishlist(e));
  }
  const send = (e) => {
    dispatch(addtoCart(e))


  }
  function getCurrentDate() {
    return new Date();
  }

  function formatDate(date) {
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Use 24-hour format
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }


  const currentDate = getCurrentDate();
  const formattedDateString = formatDate(currentDate);

  console.log(formattedDateString); // Output: Current date and time in the format "Dec 30, 2023 07:52"


  return (
    <div className={styles.container}>
      <section className={styles.fieldSettingHeading}>
        <p className={styles.settingHeading}>Order HIstory</p>
      </section>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.trTableWL}>
            <th className={styles.thTableWL}>PRODUCT NAME</th>
            <th className={styles.thTableWL}>STATUS</th>
            <th className={styles.thTableWL}>DATE</th>
            <th className={styles.thTableWL}>TOTAL</th>
            <th className={styles.thTableWL}>ACTION</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {wishListSlice.map((wishlist) => (
            <tr className={styles.trBody} key={wishlist._id}>
              <td className={styles.productSvg}>




                <p className={styles.productContent}>{wishlist.name}</p>

              </td>
              <td className={styles.productSvg}>
                <div className={styles.productPrice}>

                  <p className={styles.status}>IN PROGRESS</p>
                </div>
              </td>
              <td className={styles.productSvg}>
                <p className={styles.date}>{formattedDateString}</p>
              </td>
              <td className={styles.productSvg}>
                <p className={styles.total}>₹15,999 (5 Items)</p>
              </td>
              <td className={styles.productSvg}>
                <section className={styles.productSvgg} onClick={() => handleRemoveFromWishList(wishlist)}>
                  <div className={styles.detail}>
                  <p className={styles.detailContent}>View Details</p>
                  <span className={styles.arrow}> <FaArrowRight /></span>
                  </div>
                 
                </section>
              </td>
            </tr>
          ))}
        </tbody>                                                    
      </table>
    </div>
  );
}

export default OrtherHistory;
