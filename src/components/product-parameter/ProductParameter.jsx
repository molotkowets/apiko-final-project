import React, { useEffect, useState } from 'react'
import './productParameter.css'
import Search from '../inputs/search/Search'
import Category from '../inputs/category/Category'
import Sorting from '../inputs/sorting/Sorting'
import {getCategories} from '../../apis/getCategories' 

export default function ProductParameter({ sortList, setCategories, setParameterGoods, parameterGoods, setSearchVal, searchVal}) {
  const [categoriesList, setCategoriesList] = useState([])
  useEffect(()=>{
    getCategories(setCategoriesList)
  },[])
  // console.log(categories)
  return (
    <div className='parameter-container'>
      <form className='form-parameter'>
          <Search setSearchVal={setSearchVal} searchVal={searchVal}/>
          <Category setSearchVal={setSearchVal} setCategories={setCategories} categoriesList={categoriesList}/>
          <Sorting parameterGoods={parameterGoods} setParameterGoods = {setParameterGoods} sortList={sortList}/>
      </form>
    </div>
  )
}
