import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../common/components/Buttons/Button";
import Couter from "../../common/components/Buttons/Couter/Couter";
import { TiTick } from "react-icons/ti";
import {
  addCartToOrderHistory,
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slice/cartApiSlice";
import { fetchUser } from "../../redux/slice/userApiSlice";
import styles from "./CartPage.module.css";
import { Checkbox } from "antd";
import { fetchUserInfo } from "../../redux/slice/infoUserSlice";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCheckoutSuccsess, setShowCheckoutSuccsess] = useState(false);
  const dispatch = useDispatch();
  const [standardShipping, setStandardShipping] = useState(false);
  const [expressShipping, setExpressShipping] = useState(false);
  const cart = useSelector((state) => state.infoUserApi?.user?.cart);

  const token = useSelector((state) => state.userApi.user?.accessToken);
 
  const formatNumberWithCommas = (number) => {
    return number.toLocaleString("en-US");
  };

  const handleIncrement = (productId) => {
    const quantity = 1;

    dispatch(addToCart({ productId, quantity, token }))
      .then(() => {
        dispatch(fetchUserInfo(token));
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const handleDecrement = (productId) => {
    dispatch(decreaseQuantity({ productId, token }))
      .then(() => {
        dispatch(fetchUserInfo(token));
      })
      .catch((error) => {
        console.error("Error decreasing quantity:", error);
      });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId, token }))
      .then(() => {
        dispatch(fetchUserInfo(token));
      })
      .catch((error) => {
        console.error("Error removing from cart:", error);
      });
  };
  const handleCheck = (token) => {
    dispatch(addCartToOrderHistory(token))
      .then(() => {
        dispatch(fetchUserInfo(token));
      })
      .catch((error) => {
        console.error("Error checking out:", error);
      });

    
    setShowConfirmation(false);
    setShowCheckoutSuccsess(true);
  };

  const calculateSubtotal = () => {
    if (!cart || !Array.isArray(cart)) {
      return formatNumberWithCommas(0);
    }

    const subtotal = cart.reduce((accumulator, item) => {
      const updatedAmount = item.quantity * item.price;
      return accumulator + updatedAmount;
    }, 0);

    return formatNumberWithCommas(subtotal);
  };

  const calculateTax = () => {
    const subtotal = parseFloat(calculateSubtotal().replace(/,/g, "")) || 0;
    const taxRate = 0.04;
    const tax = subtotal * taxRate;
    return formatNumberWithCommas(tax);
  };
  const calculateShipping = () => {
    let shippingCost = 0;
    if (standardShipping) {
      shippingCost += 1000;
    }
    if (expressShipping) {
      shippingCost += 1700;
    }
    return formatNumberWithCommas(shippingCost);
  };
  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal().replace(/,/g, "")) || 0;
    const shipping = parseFloat(calculateShipping().replace(/,/g, "")) || 0;
    const tax = parseFloat(calculateTax().replace(/,/g, "")) || 0;

    const total = subtotal + shipping + tax;
    return formatNumberWithCommas(total);
  };

  const handleCheckboxChange = (shippingType) => {
    if (shippingType === "standard") {
      setStandardShipping(!standardShipping);
      setExpressShipping(false);
    } else if (shippingType === "express") {
      setExpressShipping(!expressShipping);
      setStandardShipping(false);
    }
  };
  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };
  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };
  const handleCloseCheckout = () => {
    setShowCheckoutSuccsess(false);
  };
  const user = useSelector((state) => state.userApi?.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

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
                  <td className={styles.productSvg}>
                    {" "}
                    <p className={styles.price}> ₹{item.amount}</p>
                  </td>
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
            <div className={styles.containerIcon}>
              <section className={styles.itemTotalCart}>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Sub-total</p>
                  <p className={styles.detailContentTotal}>
                    ₹{calculateTotal()}
                  </p>
                </div>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Discount</p>
                  <p className={styles.detailContentTotal}>₹999</p>
                </div>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Tax ( 4% )</p>
                  <p className={styles.detailContentTotal}>
                    ₹{calculateTax(calculateSubtotal())}
                  </p>
                </div>
              </section>

              <section className={styles.lineTotal}></section>
              <section className={styles.itemTotalCart}>
                <div className={styles.detailTotal}>
                  <p className={styles.contentTotal}>Shipping</p>
                </div>
                <div className={styles.containerCheckbox}>
                  <div className={styles.detailTotal}>
                    <p className={styles.contentTotal}>
                      <Checkbox
                        style={{ marginRight: "13px" }}
                        checked={standardShipping}
                        onChange={() => handleCheckboxChange("standard")}
                      />
                      Standard :
                    </p>
                    <p className={styles.detailContentTotal}>₹1000</p>
                  </div>
                  <div className={styles.detailTotal}>
                    <p className={styles.contentTotal}>
                      <Checkbox
                        style={{ marginRight: "13px" }}
                        checked={expressShipping}
                        onChange={() => handleCheckboxChange("express")}
                      />
                      Express :
                    </p>
                    <p className={styles.detailContentTotal}>₹1700</p>
                  </div>
                  <section className={styles.lineTotal}></section>
                  <section className={styles.toltalPriceDetail}>
                    <p className={styles.toltalPriceDetailContent}>Total</p>
                    <p className={styles.toltalPriceDetailContent}>
                      ₹{calculateTotal()}
                    </p>
                  </section>

                  <Btn
                    handleBtn={handleLogoutClick}
                    defaultValue
                    content={"PROCEED TO CHECKOUT"}
                  />
                </div>
              </section>
            </div>
          </div>
        </aside>
      </main>
      {showConfirmation && (
        <div className={styles.confirmationDialog}>
          <p className={styles.contentDialog}>
            ARE YOU SURE WANT TO CHECKOUT ?
          </p>
          <section className={styles.containerBtnDiaLog}>
            <button
              className={styles.btnDialogOk}
              onClick={() => handleCheck(token)}
            >
              Yes
            </button>
            <button className={styles.btnDialogNo} onClick={handleCancelLogout}>
              No
            </button>
          </section>
        </div>
      )}
      {showCheckoutSuccsess && (
        <section className={styles.checkout}>
          <div className={styles.iconCheckoutField}>
            <TiTick className={styles.iconCheckout} />
            <p className={styles.textCheckout}>
              You have successfully paid, please check<Link to={'/user/orderhistory'} className={styles.link}>Order History</Link>
            </p>
          </div>
          <section className={styles.btncancel} onClick={handleCloseCheckout}>Close</section>
        </section>
      )}
    </div>
  );
}

export default CartPage;
