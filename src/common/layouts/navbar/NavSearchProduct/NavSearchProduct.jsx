import React from "react";
import { ConfigProvider, Input, Select } from "antd";
import { useSelector } from "react-redux";
import { dataProductPages } from "../../../datas/ProductListingData";
import styles from "./NavSearchProduct.module.css";
import Search from "antd/es/input/Search";
import { SearchOutlined } from "@ant-design/icons";
import { menuProduct, searchProduct } from "../../../config/configANT";

function NavSearchProduct({ handleInputChange, query, productCur, menu }) {
  const productList = useSelector((state) => state.productsApi?.product?.items);
  const { Option } = Select;

  return (
    <section className={styles.searchNavProduct}>
     
        <ConfigProvider theme={searchProduct}>
          <Input
            onChange={handleInputChange}
            value={query}
            className={styles.searchField}
            placeholder="Search..."
            suffix={<SearchOutlined />}
          />
        </ConfigProvider>
        {/* <ConfigProvider theme={menuProduct}>
          
          <Select
            id="category"
            className={styles.inputTextArea}
            placeholder="Select Product Category"
            // onChange={(value) => handleInputChange("category", value)}
          >
            <Option className={styles.option} value="Iphone">
              Iphone
            </Option>
            <Option className={styles.option} value="MacBook">
              MacBook
            </Option>
            <Option className={styles.option} value="AppleWatch">
              Apple Watch
            </Option>
          </Select>
        </ConfigProvider> */}
     
      <div className={styles.menu}> {menu}</div>

      <p className={styles.contentNavProduct}>
        {productCur}/{productList.length}
        <span className={styles.spanContent}>Results Loaded</span>
      </p>
    </section>
  );
}

export default NavSearchProduct;
