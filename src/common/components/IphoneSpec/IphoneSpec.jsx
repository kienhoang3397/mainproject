import React from 'react'
import styles from './IphoneSpec.module.css'
import Button from '../Buttons/Button'
import Btn from '../Buttons/Button'

function IphoneSpec({name, price}) {
  return (
    <div className={styles.container}>
 <p className={styles.text}>New</p>
 <p className={styles.title}>{name}</p>
 <p className={styles.content}>{price}</p>
 <Btn defaultValue content={'BUY'} ></Btn>
    </div>
   
    
    
  )
}

export default IphoneSpec