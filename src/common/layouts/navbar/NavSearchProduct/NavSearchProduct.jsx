import { Input } from 'antd';
import React from 'react';
import DropMenuSort from '../../../components/DropMenu/DropMenuSort/DropMenuSort';
import { dataProductPages } from '../../../datas/ProductListingData';
import './NavSearchProduct.css';

function NavSearchProduct({ handleInputChange, query, productCur, ascending, descending, handlePriceSort}) {


  return (



    <section className='seachNavProduct'>
      <Input onChange={handleInputChange}
          value={query}  className='searchField' placeholder='Search...' />
      <DropMenuSort handlePriceSort={handlePriceSort} light descending={descending} ascending={ascending}/>
      <p className='contentNavProduct'>{productCur}/{dataProductPages.length} Results Loaded</p>
    </section>


  )
}

export default NavSearchProduct