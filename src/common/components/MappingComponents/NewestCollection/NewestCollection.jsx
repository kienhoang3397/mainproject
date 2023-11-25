import React from 'react'
import styles from './NewestCollection.module.css'
import { Link } from 'react-router-dom'


function NewestCollection(props) {
    const { image, content, color } = props
    return (

        <Link to={'product'} className={styles.container}>
            <img src={image} className={styles.img} />
            <img src={color} className={styles.color} />
            <p className={styles.content}>{content}</p>
        </Link>





    )
}
export function NewestCollectionRep(props) {
    const { image, content, color } = props
    return (

        <div className={styles.container}>
            <img src={image} className={styles.imgRep} />
            <img src={color} className={styles.color} />
            <p className={styles.content}>{content}</p>
        </div>





    )
}
export default NewestCollection