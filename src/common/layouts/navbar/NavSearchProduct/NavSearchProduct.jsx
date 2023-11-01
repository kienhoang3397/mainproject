import React, { useState } from 'react'
import FormInput, { FormInputSearch } from '../../../components/Forms/FormInput/FormInput'
import DropMenuSort from '../../../components/DropMenu/DropMenuSort/DropMenuSort'
import './NavSearchProduct.css'
import { ConfigProvider, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../../redux/slice/search';
import { dataProductPages } from '../../../datas/ProductListingData';

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