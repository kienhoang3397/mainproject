import React from 'react'
import styles from './QuickAccess.module.css'
import { ShoppingCartOutlined, HeartOutlined , UserOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function QuickAccess() {
  const user = useSelector((state) => state.auth.login.currentUser?.user);
  return (
    <div className={styles.container}>
       <ShoppingCartOutlined className={styles.item}/>
      <Link to={"profile"}><UserOutlined className={styles.item}/></Link> 
      <div>Hi, <span>{user?.username}</span></div>
    </div>
  )
}

export default QuickAccess