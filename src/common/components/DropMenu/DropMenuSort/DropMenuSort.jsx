import React from 'react'
import styles from './DropMenuSort.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import { Button, ConfigProvider, Dropdown, Input } from 'antd';





function DropMenuSort({ dark, light, ascending, descending, handlePriceSort }) {
  const items = [
    {
      key: '1',
      label: (
        <button onClick={handlePriceSort} value={ascending} className={styles.dropdownItem}>Price: High to Low</button>
      ),
    },
    {
      key: '2',
      label: (
        <button onClick={handlePriceSort} value={descending} className={styles.dropdownItem}>Price: Low to High</button>
      ),
    },
    {
      key: '3',
      label: (
        <option className={styles.dropdownItem}>New</option>
      ),
    },
  ];

  return (
    <Dropdown className='dropdown' menu={{ items }} placement="bottomLeft">
      <div className={styles.dropdown}>
        <span className={styles.text1}>Sort By:&ensp;</span><span>Popular</span>&ensp;
        <FontAwesomeIcon icon={faChevronDown} className={styles.text1} />
      </div>

    </Dropdown>
  )
}
export function DropMenuCustom({ item1, item2, item3, title, content }) {
  const items = [
    {
      key: '1',
      label: (
        <li className={styles.dropdownItemCustom}>{item1}</li>
      ),
    },
    {
      key: '2',
      label: (
        <li className={styles.dropdownItemCustom}>{item2}</li>
      ),
    },
    {
      key: '3',
      label: (
        <li className={styles.dropdownItemCustom}>{item3}</li>
      ),
    },
  ];

  return (
    <div className={styles.dropdownCustomContainer}>
      <p className={styles.titleDropDownCustom}>{title}</p>
      <Dropdown className='dropdown' menu={{ items }} placement="bottomLeft">
        <div className={styles.dropdownCustom}>
          <p className={styles.contentDropDownCustom}>{item1}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M16.3741 6H15.1899C15.1093 6 15.0335 6.03906 14.9862 6.10313L10.5003 12.2219L6.01444 6.10313C5.96707 6.03906 5.89128 6 5.81075 6H4.62652C4.52388 6 4.46388 6.11563 4.52388 6.19844L10.0913 13.7937C10.2935 14.0687 10.7071 14.0687 10.9077 13.7937L16.4751 6.19844C16.5367 6.11563 16.4767 6 16.3741 6Z" fill="#8B8E99" />
          </svg>
        </div>

      </Dropdown>

    </div>



  )
}


export default DropMenuSort

