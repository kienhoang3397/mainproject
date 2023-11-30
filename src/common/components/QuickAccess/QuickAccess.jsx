import React from 'react';
import styles from './QuickAccess.module.css';
import { ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { TbHeartSearch } from 'react-icons/tb';

function QuickAccess() {
  const cartlength = useSelector(state => state.cart.carts);
  const wishlistlength = useSelector(state => state.wishlist.wishlists);
  const user = useSelector(state => state.auth.login.currentUser?.user);

  return (
    <div className={styles.container}>
      <Link to="/shoppingcart" className={styles.item}>
        <Badge count={cartlength.length}>
          <MdOutlineShoppingCart className={styles.icon2} />
        </Badge>
      </Link>

      <Link to="/user/wishlist" className={styles.item}>
        <Badge count={wishlistlength.length}>
          <TbHeartSearch className={styles.icon2} />
        </Badge>
      </Link>

      <Link to="/profile" className={styles.item}>
        <UserOutlined className={styles.icon} />
      </Link>
    </div>
  );
}

export default QuickAccess;
