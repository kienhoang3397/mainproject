import styles from './Sidebar.module.css';
import { Checkbox, ConfigProvider, Slider } from 'antd';
import { sideProductConfig } from '../../../config/configANT';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../../../../redux/slice/check';
import { FormInputDefault } from '../../Forms/FormInput/FormInput';
import { categoryproductpage, dataProductPages } from '../../../datas/ProductListingData';


function Sidebar() {
  const dispatch = useDispatch();

  //  Redux
  const selectedCategories = useSelector((state) => state.selectedCategories);



  const handleCategoryChange = (checked, category) => {
    if (checked) {
      dispatch(addCategory(category));
    } else {
      dispatch(removeCategory(category));
    }
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.categorySection}>
        <h1 className={styles.titleCategory}>CATEGORY</h1>

        {categoryproductpage.map((category, index) => (
          <div key={index}>
            <label className={styles.checkBoxField}>
              <ConfigProvider theme={sideProductConfig}>
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => handleCategoryChange(e.target.checked, category)}
                />
              </ConfigProvider>
              <p className={styles.contentCheckBox}>{category}</p>
            </label>
          </div>
        ))}
      </div>

      <section className={styles.priceSection}>
        <h1 className={styles.titleCategory}>PRICE RANGE</h1>
        <ConfigProvider theme={sideProductConfig}>
          <Slider range defaultValue={[20, 50]} reverse />
        </ConfigProvider>
        <span className={styles.inputPrice}>
          <FormInputDefault placeholder="Min price" />
          <FormInputDefault placeholder="Max price" />
        </span>
      </section>

      <section className={styles.priceFilters}>
        <h1 className={styles.titleCategory}>PRICE FILTERS</h1>
        <label className={styles.checkBoxField}>
    <ConfigProvider theme={sideProductConfig}>
      <Checkbox  />
    </ConfigProvider>
    <p className={styles.contentCheckBox}>Under 10000₹</p>
  </label>
  <label className={styles.checkBoxField}>
    <ConfigProvider theme={sideProductConfig}>
      <Checkbox  />
    </ConfigProvider>
    <p className={styles.contentCheckBox}>10000₹ - 20000₹</p>
  </label>
  <label className={styles.checkBoxField}>
    <ConfigProvider theme={sideProductConfig}>
      <Checkbox  />
    </ConfigProvider>
    <p className={styles.contentCheckBox}>20000₹ - 30000₹</p>
  </label>
  <label className={styles.checkBoxField}>
    <ConfigProvider theme={sideProductConfig}>
      <Checkbox />
    </ConfigProvider>
    <p className={styles.contentCheckBox}>40000₹ - 50000₹</p>
  </label>
  <label className={styles.checkBoxField}>
    <ConfigProvider theme={sideProductConfig}>
      <Checkbox />
    </ConfigProvider>
    <p className={styles.contentCheckBox}>Above 50000₹</p>
  </label>
      </section>
    </div>
  );

}

export default Sidebar;