import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../common/components/Buttons/Button";
import Status from "../../common/components/Status/Status";

import { addToCart } from "../../redux/slice/cartApiSlice";
import { fetchUser } from "../../redux/slice/userApiSlice";
import { removeFromwishlist } from "../../redux/slice/wishlistApiSlice";
import styles from "./WishList.module.css";
import { fetchUserInfo } from "../../redux/slice/infoUserSlice";

function WishList() {
  const [toggle, setToggle] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.infoUserApi?.user.wishlist);

  const token = useSelector(
    (state) => state.userApi.user?.accessToken
  );
  const handleRemoveFromWishList = (productId) => {
    dispatch(removeFromwishlist({ productId, token }))
      .then(() => {
    dispatch(fetchUserInfo(token));
        setToggle(false); 
      })
      .catch((error) => {
        console.error("Error removing from wishlist:", error);
      });
  };

  const handleaddToCart = (productId) => {
    const quantity = 1;

    dispatch(addToCart({ productId, quantity, token }))
      .then(() => {
    dispatch(fetchUserInfo(token));
        setToggle(false); 
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const handleToggle = (productId) => {
    setToggle(!toggle);
    setSelectedProductId(productId);
  };

  return (
    <div className={styles.container}>
      <section className={styles.fieldSettingHeading}>
        <p className={styles.settingHeading}>Wishlist</p>
      </section>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.trTableWL}>
            <th className={styles.thTableWLFirst}>Products</th>
            <th className={styles.thTableWL}>Price</th>
            <th className={styles.thTableWL}>Status</th>
            <th className={styles.thTableWLR}>Action</th>
            <th className={styles.thTableWL}>Delete</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {wishlist?.map((wishlist) => (
            <tr className={styles.trBody} key={wishlist._id}>
              <td className={styles.product}>
                <div className={styles.productInfo}>
                  <img
                    className={styles.imgProduct}
                    src={wishlist.image}
                    alt=""
                  />

                  <p className={styles.productContent}>{wishlist.name}</p>
                </div>
              </td>
              <td className={styles.productSvg}>
                <div className={styles.productPrice}>
                  <del className={styles.delPrice}>
                    ₹{wishlist.price + wishlist.price * 0.25}
                  </del>
                  <p className={styles.price}>₹{wishlist.price}</p>
                </div>
              </td>
              <td className={styles.productSvg}>
                {wishlist.stock >= 1 ? (
                  <Status color={"#25B800"} content={"In Stock"} />
                ) : (
                  <Status color={"#FF4343"} content={"Out of Stock"} />
                )}
              </td>
              <td className={styles.productSvgR}>
                <Btn
                  defaultValue
                  handleBtn={() => handleaddToCart(wishlist.product)}
                  content={"Add to Cart"}
                  width={"150px"}
                ></Btn>
              </td>
              <td className={styles.productSvg}>
                <section className={styles.productSvg}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    onClick={() => handleRemoveFromWishList(wishlist.product)}
                  >
                    <path
                      d="M11.9736 19.9312C16.9442 19.9312 20.9736 15.9017 20.9736 10.9312C20.9736 5.96059 16.9442 1.93115 11.9736 1.93115C7.00307 1.93115 2.97363 5.96059 2.97363 10.9312C2.97363 15.9017 7.00307 19.9312 11.9736 19.9312Z"
                      stroke="#8B8E99"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M14.9736 7.93115L8.97363 13.9312"
                      stroke="#8B8E99"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.9736 13.9312L8.97363 7.93115"
                      stroke="#8B8E99"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div
                    className={styles.feature}
                    onClick={() => handleToggle(wishlist.product)}
                  >
                    More
                  </div>
                </section>
                {toggle && (
                  <div className={styles.toggleOptions}>
                    <section className={styles.containerBtnDiaLog}>
                      <button
                        className={styles.btnDialogOk}
                        onClick={() => handleaddToCart(wishlist.product)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className={styles.btnDialogNo}
                        onClick={() =>
                          handleRemoveFromWishList(wishlist.product)
                        }
                      >
                        Remove
                      </button>
                    </section>
                    <p
                      onClick={() => setToggle(false)}
                      className={styles.contentDialog}
                    >
                      Cancel
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WishList;
