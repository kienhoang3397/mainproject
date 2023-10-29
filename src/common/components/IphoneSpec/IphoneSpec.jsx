import React from 'react'
import styles from './IphoneSpec.module.css'
import Button from '../Buttons/Button'

function IphoneSpec({name, price}) {
  return (
    <div className={styles.container}>
 <p className={styles.text}>New</p>
 <p className={styles.title}>{name}</p>
 <p className={styles.content}>{price}</p>
 <Button defaultValue content={'BUY'} width={'137px'} height={'38px'}></Button>
    </div>
   
    
    
  )
}

export default IphoneSpec