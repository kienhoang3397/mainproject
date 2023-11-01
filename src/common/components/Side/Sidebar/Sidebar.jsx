import styles from './Sidebar.module.css';
import { Checkbox, ConfigProvider, Slider } from 'antd';
import { sideProductConfig } from '../../../config/configANT';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../../../../redux/slice/check';
import { FormInputDefault } from '../../Forms/FormInput/FormInput';
import { categoryproductpage, dataProductPages } from '../../../datas/ProductListingData';
import priceFilter from '../../../../redux/slice/priceFilter';

function Sidebar({ handleChange, maxPrice, minPrice, handleUpdatePrice, priceFilterVal , handleUpdatePrice2}) {
  return (

    <div className={styles.sideBar}>
      <div className={styles.categorySection}>
        <h1 className={styles.titleCategory}>CATEGORY</h1>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} value={'IPhone'} />
          <p className={styles.contentCheckBox}>Iphone</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} value={'Apple Watch'}  />
          <p className={styles.contentCheckBox}>AppleWatch</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} value={'MacBook'} />
          <p className={styles.contentCheckBox}>MacBook</p>
        </label>
      </div>

      <section className={styles.priceSection}>
        <h1 className={styles.titleCategory}>PRICE RANGE</h1>
        <Slider min={0} max={2000} step={100} value={priceFilterVal} onChange={handleUpdatePrice} range reverse />
        <span className={styles.inputPrice}>
          <FormInputDefault placeholder="Min price" />
          <FormInputDefault placeholder="Max price" />
        </span>
      </section>

      <section className={styles.priceFilters}>
        <h1 className={styles.titleCategory}>PRICE FILTERS</h1>

        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox'  onChange={()=>handleUpdatePrice2(1000, 2000)} />
          <p className={styles.contentCheckBox}>All</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={()=>handleUpdatePrice2([500, 1000])} />
         
          <p className={styles.contentCheckBox}>Under 10000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} />
          <p className={styles.contentCheckBox}>10000₹ - 20000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} />
          <p className={styles.contentCheckBox}>20000₹ - 30000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} />
          <p className={styles.contentCheckBox}>40000₹ - 50000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <input className={styles.checkboxxx} type='checkbox' onChange={handleChange} />
          <p className={styles.contentCheckBox}>Above 50000₹</p>
        </label>
      </section>
    </div>

  );
}

export default Sidebar;
