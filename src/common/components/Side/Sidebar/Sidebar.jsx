import { Checkbox, Slider } from 'antd';
import { FormInputDefault } from '../../Forms/FormInput/FormInput';
import styles from './Sidebar.module.css';

function Sidebar({ handleChange, handleUpdatePrice, priceFilterVal2, priceFilterVal, handleUpdatePrice2, handleChangeMinPrice }) {
  return (

    <div className={styles.sideBar}>
      <div className={styles.categorySection}>
        <h1 className={styles.titleCategory}>CATEGORY</h1>
        <label className={styles.checkBoxField}>
          <Checkbox   className={styles.checkboxxx} type='checkbox' onChange={handleChange} value={'IPhone'} />
          <p className={styles.contentCheckBox}>Iphone</p>
        </label>
        <label className={styles.checkBoxField}>
          <Checkbox className={styles.checkboxxx} type='checkbox' onChange={handleChange} value={'Apple Watch'} />
          <p className={styles.contentCheckBox}>AppleWatch</p>
        </label>
        <label className={styles.checkBoxField}>
          <Checkbox className={styles.checkboxxx} type='checkbox' onChange={handleChange} value={'MacBook'} />
          <p className={styles.contentCheckBox}>MacBook</p>
        </label>
      </div>

      <section className={styles.priceSection}>
        <h1 className={styles.titleCategory}>PRICE RANGE</h1>
        <Slider min={0} max={50000} step={100} value={priceFilterVal} onChange={handleUpdatePrice} defaultValue={[0, 50000]} range reverse />
        <span className={styles.inputPrice}>
          <FormInputDefault placeholder="Min price" />
          <FormInputDefault placeholder="Max price" />
        </span>
      </section>

      <section className={styles.priceFilters}>
        <h1 className={styles.titleCategory}>PRICE FILTERS</h1>
        <label className={styles.checkBoxField}>
          <Checkbox
            className={styles.checkboxxx}
            type='checkbox'
            onChange={() => handleUpdatePrice2([0, 50000])}
            checked={priceFilterVal2[0] === 0 && priceFilterVal2[1] === 50000}
          />
          <p className={styles.contentCheckBox}>All</p>
        </label>
        <label className={styles.checkBoxField}>
          <Checkbox
            className={styles.checkboxxx}
            type='checkbox'
            onChange={() => handleUpdatePrice2([0, 10000])}
            checked={priceFilterVal2[0] === 0 && priceFilterVal2[1] === 10000}
          />
          <p className={styles.contentCheckBox}>Under 10000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <Checkbox
            className={styles.checkboxxx}
            type='checkbox'
            onChange={() => handleUpdatePrice2([10000, 20000])}
            checked={priceFilterVal2[0] === 10000 && priceFilterVal2[1] === 20000}
          />
          <p className={styles.contentCheckBox}>10000₹ - 20000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <Checkbox
            className={styles.checkboxxx}
            type='checkbox'
            onChange={() => handleUpdatePrice2([20000, 30000])}
            checked={priceFilterVal2[0] === 20000 && priceFilterVal2[1] === 30000}
          />
          <p className={styles.contentCheckBox}>20000₹ - 30000₹</p>
        </label>
        <label className={styles.checkBoxField}>
          <Checkbox
            className={styles.checkboxxx}
            type='checkbox'
            onChange={() => handleUpdatePrice2([40000, 50000])}
            checked={priceFilterVal2[0] === 40000 && priceFilterVal2[1] === 50000}
          />
          <p className={styles.contentCheckBox}>40000₹ - 50000₹</p>
        </label>
      </section>
    </div>

  );
}

export default Sidebar;
