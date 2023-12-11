import React, { useEffect, useState } from "react";

import ProductListingCard from "../../../common/components/Cards/ProductListingCard/ProductListingCard";
import NavSearchProduct from "../../../common/layouts/navbar/NavSearchProduct/NavSearchProduct";

import { TiThMenu } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../common/components/Side/Sidebar/Sidebar";
import { productsFetch } from "../../../redux/slice/productApiSlice";
import store from "../../../redux/store";
import styles from "./ProductPage.module.css";

function ProductPage() {
  const [isChecked, setChecked] = useState(false);
  const productList = useSelector((state) => state.productsApi?.product?.items);
  
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userApi.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    store.dispatch(productsFetch());
  }, []);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [priceFilterVal, setPriceFilterVal] = useState([0, 5000000]);
  const [priceFilterVal2, setPriceFilterVal2] = useState([0, 5000000]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleUpdatePrice2 = ([valueMin, valueMax]) => {
    const newPriceFilterVal2 = [valueMin, valueMax];

    const checkPrice = newPriceFilterVal2.every(
      (price, index) => price === priceFilterVal2[index]
    );

    if (checkPrice) {
      setPriceFilterVal2([0, 50000]);
    } else {
      setPriceFilterVal2(newPriceFilterVal2);
    }
  };

  const handleChange = (event) => {
    const newCategory = event.target.value;
    const checked = selectedCategories.includes(newCategory);

    if (checked) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== newCategory)
      );
    } else {
      setSelectedCategories([...selectedCategories, newCategory]);
    }
  };

  const handleUpdatePrice = (value) => {
    setPriceFilterVal(value);
    // console.log(2, priceFilterVal2)
    // console.log(1, priceFilterVal)
  };

  function filteredData(
    products,
    selected,
    query,
    priceFilterVal,
    priceFilterVal2
  ) {
    let filteredProducts = products;

    if (priceFilterVal) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= priceFilterVal[0] &&
          product.price <= priceFilterVal[1]
      );
    }
    if (priceFilterVal2) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= priceFilterVal2[0] &&
          product.price <= priceFilterVal2[1]
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

    return filteredProducts.map(({ _id, image, price, name, delprice }) => (
      <ProductListingCard
        image={image}
        price={price}
        name={name}
        delprice={delprice}
        key={_id}
        id={_id}
      />
    ));
  }

  const result = filteredData(
    productList,
    selectedCategories,
    query,
    priceFilterVal,
    priceFilterVal2
  );

  return (
    <div>
      <section className={styles.productRow}>
        {/* <div className={styles.leftContentProductPage}>
          <Sidebar
            priceFilterVal2={priceFilterVal2}
            priceFilterVal1={priceFilterVal}
            handleChange={handleChange}
            handleUpdatePrice={handleUpdatePrice}
            handleUpdatePrice2={handleUpdatePrice2}
          />
        </div> */}

        <div
          className={
            isChecked
              ? styles.leftContentProductPage
              : `${styles.leftContentProductPage} ${styles.hidden}`
          }
        >
          <Sidebar
            productCur={result.length}
          
            menu={
              <div className={styles.iconNav}>
                <input
                  type="checkbox"
                  id="check"
                  checked={isChecked}
                  onChange={() => setChecked(!isChecked)}
                />
                <label htmlFor="check">
                  <TiThMenu />
                </label>
              </div>
            }
            priceFilterVal2={priceFilterVal2}
            priceFilterVal1={priceFilterVal}
            handleChange={handleChange}
            handleUpdatePrice={handleUpdatePrice}
            handleUpdatePrice2={handleUpdatePrice2}
          />
        </div>

        <section className={styles.rightContentProductPage}>
          <nav className={styles.searchnav}>
            <NavSearchProduct
              menu={
                <div className={styles.iconNav}>
                  <input
                    type="checkbox"
                    id="check"
                    checked={isChecked}
                    onChange={() => setChecked(!isChecked)}
                  />
                  <label className={styles.label} htmlFor="check">
                    <TiThMenu />
                  </label>
                </div>
              }
              productCur={result.length}
              query={query}
              handleInputChange={handleInputChange}
            />
          </nav>

          <section className={styles.cardContainer}>{result}</section>
        </section>
      </section>
    </div>
  );
}

export default ProductPage;
