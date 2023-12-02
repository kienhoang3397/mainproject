import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../common/components/Buttons/Button";
import Couter from "../../common/components/Buttons/Couter/Couter";

import styles from "./CartPage.module.css";
import FormItemInput from "antd/es/form/FormItemInput";
import { getUserApi } from "../../redux/slice/apiRequest";
import { fetchUser } from "../../redux/slice/userApiSlice";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slice/cartApiSlice";

import Status from "../../common/components/Status/Status";

import { removeItemformWishlist } from "../../redux/slice/wishlist";
// Import your Redux actions here
// import { incrementQuantity, decrementQuantity, removeFromCart } from 'your-redux-actions';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userApi?.user.cart);
  const token = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

  const handleIncrement = (productId) => {
    const quantity = 1;

    dispatch(addToCart({ productId, quantity, token }))
      .then(() => {
        dispatch(fetchUser(token));
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const handleDecrement = (productId) => {
    dispatch(decreaseQuantity({ productId, token }))
      .then(() => {
        dispatch(fetchUser(token));
      })
      .catch((error) => {
        console.error("Error decreasing quantity:", error);
      });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId, token }))
      .then(() => {
        dispatch(fetchUser(token));
      })
      .catch((error) => {
        console.error("Error removing from cart:", error);
      });
  };


  return (
    <div className={styles.container}>
      <main className={styles.containerCartPage}>
        <div className={styles.container1}>
          <section className={styles.fieldSettingHeading}>
            <p className={styles.settingHeading}>Shopping Card</p>
          </section>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.trTableWL}>
                <th className={styles.thTableWLFirst}>Products</th>
                <th className={styles.thTableWL}>Price</th>
                <th className={styles.thTableWL}>Quantity</th>
                <th className={styles.thTableWL}>Sub - Total</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {cart?.map((item) => (
                <tr className={styles.trBody} key={item.product}>
                  <td className={styles.product}>
                    <div className={styles.productInfo}>
                      <div className={styles.iconProduct}>
                        <svg
                          className={styles.icon}
                          onClick={() => handleRemoveFromCart(item.product)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                        >
                          <path
                            d="M11.5264 19.9307C16.4969 19.9307 20.5264 15.9012 20.5264 10.9307C20.5264 5.9601 16.4969 1.93066 11.5264 1.93066C6.5558 1.93066 2.52637 5.9601 2.52637 10.9307C2.52637 15.9012 6.5558 19.9307 11.5264 19.9307Z"
                            stroke="#8B8E99"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M14.5264 7.93066L8.52637 13.9307"
                            stroke="#8B8E99"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.5264 13.9307L8.52637 7.93066"
                            stroke="#8B8E99"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <img
                        className={styles.imgProduct}
                        src={item.image}
                        alt=""
                      />

                      <p className={styles.productContent}>{item.name}</p>
                    </div>
                  </td>
                  <td className={styles.productSvg}>
                    <div className={styles.productPrice}>
                      <del className={styles.delPrice}>
                        ₹{item.price + item.price * 0.25}
                      </del>
                      <p className={styles.price}>₹{item.price}</p>
                    </div>
                  </td>
                  <td className={styles.productSvg}>
                    <Couter
                      value={item.quantity}
                      handleCouterDecrease={() => handleDecrement(item.product)}
                      handleCouterIncrease={() =>
                        handleIncrement(item.product, 1)
                      }
                    />
                  </td>
                  <td className={styles.productSvg}>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className={styles.asideCartPage}>
          <div className={styles.cardTotals}>
            <section className={styles.heading}>
              <p className={styles.contentCardTotalHeading}>Card Totals</p>
            </section>
            <div className={styles.total}>
              <section className={styles.containerDetailTotal}>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Sub-total</p>
                  <p className={styles.detailContentTotal}>₹123</p>
                </div>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Shipping</p>
                  <p className={styles.detailContentTotal}>Free</p>
                </div>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Discount</p>
                  <p className={styles.detailContentTotal}>₹999</p>
                </div>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Tax</p>
                  <p className={styles.detailContentTotal}>₹2,999</p>
                </div>
              </section>
              <section className={styles.lineTotal}></section>
              <section className={styles.toltalPriceDetail}>
                <p className={styles.toltalPriceDetailContent}>Total</p>
                <p className={styles.toltalPriceDetailContent}>₹123,999 INR</p>
              </section>
              <Btn defaultValue content={"PROCEED TO CHECKOUT"} />
            </div>
          </div>
          <div className={styles.couponCode}>
            <section className={styles.headingCoupon}>
              <p className={styles.contentCardTotalHeading}>Coupon Code</p>
            </section>
            <div className={styles.applyCoupon}>
              <section className={styles.form}></section>
              <section className={styles.btnCoupon}>
                <Btn variant2 content={"APPLY COUPON"} />
              </section>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default CartPage;
