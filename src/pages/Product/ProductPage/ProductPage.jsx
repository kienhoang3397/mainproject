import React, { useEffect, useState } from 'react';

import ProductListingCard from '../../../common/components/Cards/ProductListingCard/ProductListingCard';
import NavSearchProduct from '../../../common/layouts/navbar/NavSearchProduct/NavSearchProduct';
import { dataProductPages } from '../../../common/datas/ProductListingData';
import Sidebar from '../../../common/components/Side/Sidebar/Sidebar';
import styles from './ProductPage.module.css';

function ProductPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState('');
  const [priceFilterVal, setPriceFilterVal] = useState([0, 50000]);
  const [priceFilterVal2, setPriceFilterVal2] = useState([0, 50000]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(dataProductPages)
 

  
  };

  const handleUpdatePrice2 = ([valueMin, valueMax]) => {
    const newPriceFilterVal2 = [valueMin, valueMax];
  
    // Kiểm tra từng phần tử trong newPriceFilterVal2
    const checkPrice = newPriceFilterVal2.every((price, index) => price === priceFilterVal2[index]);
  
    if (checkPrice) {
      // Nếu mảng newPriceFilterVal2 tồn tại trong mảng priceFilterVal2
      setPriceFilterVal2([0,50000]);
    } else {
      // Nếu không tồn tại, gán newPriceFilterVal2 cho priceFilterVal2
      setPriceFilterVal2(newPriceFilterVal2);
    }
  };
  
  
  
  const handleChange = (event) => {
    const newCategory = event.target.value;
    const checked = selectedCategories.includes(newCategory);

    if (checked) {
      
      setSelectedCategories(selectedCategories.filter((category) => category !== newCategory));
    } else {
      
      setSelectedCategories([...selectedCategories, newCategory]);
    }

  };

  const handleUpdatePrice = (value) => {
    setPriceFilterVal(value);
    // console.log(2, priceFilterVal2)
    // console.log(1, priceFilterVal)
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
            priceFilterVal2={priceFilterVal2}
            priceFilterVal1={priceFilterVal}
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