import React, { useState } from 'react'
import FormInput, { FormInputSearch } from '../../../components/Forms/FormInput/FormInput'
import DropMenuSort from '../../../components/DropMenu/DropMenuSort/DropMenuSort'
import './NavSearchProduct.css'
import { ConfigProvider, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../../redux/slice/search';

function NavSearchProduct() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    dispatch(setSearch(newValue));
  }

  return (



    <section className='seachNavProduct'>
      <Input onChange={handleSearchChange} className='searchField' placeholder='Search...' />
      <DropMenuSort light />
      <p className='contentNavProduct'>20/400 Results Loaded</p>
    </section>


  )
}

export default NavSearchProduct