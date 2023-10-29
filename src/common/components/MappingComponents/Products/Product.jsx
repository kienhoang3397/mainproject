import React from 'react'
import styles from './product.module.css'
import { trendings } from '../../../datas/Product'

function Product(props) {
    const { image, name } = props
    return (

        <div className={styles.container}>
            <img src={image} className={styles.img} />
            <p className={styles.name}>{name}</p>

        </div>





    )
}

export default Product

export function Products() {
    return (
        <div className={styles.containerProducts}>
            {trendings.map((trending) => (
                <Product key={trending.id} image={trending.image} name={trending.name} />
            ))}
        </div>
    )

} 