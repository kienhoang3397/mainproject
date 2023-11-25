import React from 'react'
import styles from './QuickAccess.module.css'
import { ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, ConfigProvider, Space } from 'antd'
import { MdOutlineShoppingCart } from "react-icons/md";


function QuickAccess() {

  const cartlength = useSelector(state => state.cart.carts)
  const user = useSelector((state) => state.auth.login.currentUser?.user);

  return (
    <div className={styles.container}>
      <Link to={'shoppingcart'} className={styles.item}>

        <Badge  count={cartlength.length}>
          <MdOutlineShoppingCart className={styles.item} />
        </Badge></Link>

      <HeartOutlined className={styles.item} />
      <Link to={"profile"}><UserOutlined  className={styles.item}/></Link>

    </div>
  )
}

export default QuickAccess