import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductPage.module.css'; // Import the styles object
import ProductListingCard from '../../../common/components/Cards/ProductListingCard/ProductListingCard';
import { Input } from 'antd';
import DropMenuSort from '../../../common/components/DropMenu/DropMenuSort/DropMenuSort';

import NavSearchProduct from '../../../common/layouts/navbar/NavSearchProduct/NavSearchProduct';

import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { dataProductPages } from '../../../common/datas/ProductListingData';
import Sidebar from '../../../common/components/Side/Sidebar/Sidebar';

function ProductPage() {

  const search = useSelector((state) => state.search);
  const selectedCategories = useSelector((state) => state.selectedCategories);

  return (
    <section className={styles.productRow}>
      <div className={styles.leftContentProductPage}><Sidebar/></div>
      <section className={styles.rightContentProductPage}>
        <NavSearchProduct />
        <div>
          <section className={styles.cardContainer}>
            {dataProductPages
              .filter((item) => {
                // Filter by search query
                const matchesSearch = search.toLowerCase() === '' ? true : item.name.toLowerCase().includes(search);

                // Filter by selected categories
                const matchesCategory = selectedCategories.length === 0 ? true : selectedCategories.includes(item.category);

                return matchesSearch && matchesCategory;
              })
              .map((dataProductPage) => (
                <section className={styles.card} key={dataProductPage.id}>
                 <div className={styles.containerImg}><img className={styles.imgCard} src={dataProductPage.image} alt="" /></div> 
                  <div className={styles.cardDetails}>
                    <div className={styles.rating}>
                      <AiFillStar className={styles.ratingStar} />
                      <AiFillStar className={styles.ratingStar} />
                      <AiFillStar className={styles.ratingStar} />
                      <AiFillStar className={styles.ratingStarNoFill} />
                      <AiFillStar className={styles.ratingStarNoFill} />
                      <span className={styles.ratingTime}> (784) </span>
                    </div>
                    <Link  style={{ textDecoration: 'none'}} to={`/${dataProductPage.id}`}>
                      <h1 className={styles.name}>{dataProductPage.name}</h1>
                    </Link>

                    <div className={styles.prices}>
                      <del className={styles.delPrice}>₹{dataProductPage.price + (dataProductPage.price * 0.25)}</del>
                      <p className={styles.price}>Form ₹{dataProductPage.price}</p>
                    </div>
                  </div>
                </section>
              ))}
          </section>
        </div>
      </section>
    </section>
  );
}

export default ProductPage
