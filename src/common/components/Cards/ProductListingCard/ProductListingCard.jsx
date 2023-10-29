import React from 'react'
import styles from './ProductListingCard.module.css'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ProductListingCard(props, {checked}) {
    const { image,name,price, delPrice } = props
    return (
        <>
            <section className={styles.card}>
                <img className={styles.imgCard} src={image} alt="" />
                <div className={styles.cardDetails}>
                    <div className={styles.rating}>
                        <AiFillStar className={styles.ratingStar} />
                        <AiFillStar className={styles.ratingStar} />
                        <AiFillStar className={styles.ratingStar} />
                        <AiFillStar className={styles.ratingStarNoFill} />
                        <AiFillStar className={styles.ratingStarNoFill} />
                        <span className={styles.ratingTime}> (784) </span>

                    </div>
                  
                  
                    <div className={styles.prices}>
                        <del className={styles.delPrice}>{delPrice}</del><p className={styles.price}>{price}</p>
                    </div>
                </div>
            </section>
            </>
    )
}

export default ProductListingCard



