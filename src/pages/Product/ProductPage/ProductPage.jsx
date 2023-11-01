import React, { useState } from 'react';

import ProductListingCard from '../../../common/components/Cards/ProductListingCard/ProductListingCard';
import NavSearchProduct from '../../../common/layouts/navbar/NavSearchProduct/NavSearchProduct';
import { dataProductPages } from '../../../common/datas/ProductListingData';
import Sidebar from '../../../common/components/Side/Sidebar/Sidebar';
import styles from './ProductPage.module.css';

function ProductPage() {
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState('');
  const [priceFilterVal, setPriceFilterVal] = useState([0, 2000]);
  const [priceFilterVal2, setPriceFilterVal2] = useState([0, 2000]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    
  };
  const handleUpdatePrice2 = ([valueMin, valueMax]) => {
    if (priceFilterVal2[0] === valueMin && priceFilterVal2[1] === valueMax) {

      setPriceFilterVal2([0, 2000]);
    } else {
      // Otherwise, set the new selected range
      setPriceFilterVal2([valueMin, valueMax]);
    }
    // console.log(priceFilterVal2);
  };

  const handleUpdatePrice = (value) => {
    setPriceFilterVal(value);
    // console.log(2, priceFilterVal2)
    // console.log(1, priceFilterVal)
  };
  

  const handleChange = (event) => {
    const newCategory = event.target.value;
    const checked = selectedCategories.includes(newCategory);

    if (checked) {
      // If category is already selected, remove it
      setSelectedCategories(selectedCategories.filter((category) => category !== newCategory));
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, newCategory]);
    }

  };

  function filteredData(products, selected, query, priceFilterVal, priceFilterVal2) {
    let filteredProducts = products;

    if (priceFilterVal) {
      filteredProducts = filteredProducts.filter((product) =>
        product.price >= priceFilterVal[0] && product.price <= priceFilterVal[1]
      );
    }
    if (priceFilterVal2) {
      filteredProducts = filteredProducts.filter((product) =>
        product.price >= priceFilterVal2[0] && product.price <= priceFilterVal2[1]
      );
    }
    


    if (selected.length > 0) {
      filteredProducts = filteredProducts.filter(({ category }) =>
        selected.includes(category)
      );
    }

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredProducts.map(({ id, image, price, name, delprice }) => (
      <ProductListingCard
        image={image}
        price={price}
        name={name}
        delprice={delprice}
        key={id}
        id={id}
      />
    ));
  }


  const result = filteredData(dataProductPages, selectedCategories, query, priceFilterVal, priceFilterVal2);

  return (
    <div>
      <section className={styles.productRow}>
        <div className={styles.leftContentProductPage}>
          <Sidebar
            priceFilterVal={priceFilterVal}
            handleChange={handleChange}
            handleUpdatePrice={handleUpdatePrice}
            handleUpdatePrice2={handleUpdatePrice2}
          />
        </div>
        <section className={styles.rightContentProductPage}>
          <NavSearchProduct productCur={result.length} query={query} handleInputChange={handleInputChange} />
          <div className={styles.cardContainer}>{result}</div>
        </section>
      </section>
    </div>
  );
}

export default ProductPage;
