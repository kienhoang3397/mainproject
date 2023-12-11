import { UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useEffect, useMemo } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbHeartSearch } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserInfo } from "../../../redux/slice/infoUserSlice";
import styles from "./QuickAccess.module.css";

function QuickAccess() {
  const cartLength = useSelector((state) => state.infoUserApi?.user?.cart);
  const wishlistLength = useSelector(
    (state) => state.infoUserApi?.user?.wishlist
  );

  // Memoize the values to prevent unnecessary renders
  const memoizedCartLength = useMemo(() => cartLength, [cartLength]);
  const memoizedWishlistLength = useMemo(
    () => wishlistLength,
    [wishlistLength]
  );

  const dispatch = useDispatch();
  const token = useSelector((state) => state.userApi.user?.accessToken);

  useEffect(() => {
    dispatch(fetchUserInfo(token));
  }, []);

  // useEffect(() => {
  //   console.log("QuickAccess mounted");

  //   return () => {
  //     console.log("QuickAccess unmounted");
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <Link to="/shoppingcart" className={styles.item}>
        <Badge count={memoizedCartLength?.length}>
          <MdOutlineShoppingCart className={styles.icon2} />
        </Badge>
      </Link>

      <Link to="/user/wishlist" className={styles.item}>
        <Badge count={memoizedWishlistLength?.length}>
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
