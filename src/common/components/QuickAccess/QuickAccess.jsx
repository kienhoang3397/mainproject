import React from 'react'
import styles from './QuickAccess.module.css'
import { ShoppingCartOutlined, HeartOutlined , UserOutlined} from '@ant-design/icons'


function QuickAccess() {
  return (
    <div className={styles.container}>
       <ShoppingCartOutlined className={styles.item}/>
       <HeartOutlined className={styles.item} />
       <UserOutlined className={styles.item}/>
    </div>
  )
}

export default QuickAccess