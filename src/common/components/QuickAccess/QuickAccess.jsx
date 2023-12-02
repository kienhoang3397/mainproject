import { UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbHeartSearch } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./QuickAccess.module.css";
import { fetchUser } from "../../../redux/slice/userApiSlice";

function QuickAccess() {
  const cartlength = useSelector((state) => state.userApi?.user.cart);
  const dispatch = useDispatch();
  const wishlistlength = useSelector((state) => state.wishlist.wishlists);
  const user = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );

  // const [cartLength, setCartLength] = useState(0); // Local state to track cart length

  // // Fetch user data including the cart
    useEffect(() => {
      dispatch(fetchUser(user));
    }, []);



  return (
    <div className={styles.container}>
      <Link to="/shoppingcart" className={styles.item}>
        <Badge count={cartlength?.length}>
          <MdOutlineShoppingCart className={styles.icon2} />
        </Badge>
      </Link>

      <Link to="/user/wishlist" className={styles.item}>
        <Badge count={wishlistlength.length}>
          <TbHeartSearch className={styles.icon2} />
        </Badge>
      </Link>

      <Link to="/user/profile" className={styles.item}>
        <UserOutlined className={styles.icon} />
      </Link>
    </div>
  );
}

export default QuickAccess;
