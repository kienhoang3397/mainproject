import React from 'react'
import styles from './ProductListingCard.module.css'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { dataProductPages } from '../../../datas/ProductListingData'

function ProductListingCard(props, { checked }) {
    const { image, name, price, delprice, id } = props
    
    return (
        <>
            <section className={styles.card}>
               <div className={styles.containerImg}><img className={styles.imgCard} src={image} alt="" /></div> 
                <div className={styles.cardDetails}>
                  <div className={styles.rating}>
                    <AiFillStar className={styles.ratingStar} />
                    <AiFillStar className={styles.ratingStar} />
                    <AiFillStar className={styles.ratingStar} />
                    <AiFillStar className={styles.ratingStarNoFill} />
                    <AiFillStar className={styles.ratingStarNoFill} />
                    <span className={styles.ratingTime}> (784) </span>
                  </div>
                  <Link  style={{ textDecoration: 'none'}} to={`/${id}`}>
                    <h1 className={styles.name}>{name}</h1>
                  </Link>

                  <div className={styles.prices}>
                    <del className={styles.delPrice}>₹{price + (price * 0.25)}</del>
                    <p className={styles.price}>Form ₹{price}</p>
                  </div>
                </div>
              </section>
        </>
    )
}

export default ProductListingCard



