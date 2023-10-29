import React from 'react'
import styles from './NewestCollection.module.css'


function NewestCollection(props) {
    const { image, content, color } = props
    return (

        <div className={styles.container}>
            <img src={image} className={styles.img} />
            <img src={color} className={styles.color} />
            <p className={styles.content}>{content}</p>
        </div>





    )
}
export default NewestCollection