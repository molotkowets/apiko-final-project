import React, { useEffect, useState } from 'react'
import "./home.css"
// import { cardItemsSelector, removeFromCard } from '../../store'
// import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../apis/getProducts'
import ProductParameter from '../../components/product-parameter/ProductParameter'
import ProductCard from '../../components/product-card/ProductCard'
import Loading from '../../components/loading/Loading'
import NoResultsFound from '../../containers/NoResultsFound/NoResultsFound'

export default function Home({setId}) {
  const [product, setProduct] = useState("")
  const [parameterGoods, setParameterGoods] = useState({offset: 0, limit: 20, sortBy: "latest"})
  const [categories, setCategories] = useState('')
  const [searchVal, setSearchVal] = useState('')
  
  useEffect(() => {
    let categoriesURL= "https://demo-api.apiko.academy/api/categories/"
     
    if(categories){
      const requestURLCategories = categoriesURL + categories.id + "/products"
      getProducts( requestURLCategories, parameterGoods, setProduct)
    }
   
  },[categories, parameterGoods])

  useEffect(()=>{
    const requestURLProducts = "https://demo-api.apiko.academy/api/products" + (searchVal && "/search")
    const token = {Authorization: `Bearer ${JSON.parse(localStorage.getItem('onAuth')).token}`}
      console.log(requestURLProducts )
      getProducts( requestURLProducts, {...parameterGoods, keywords: searchVal}, token, setProduct)
      setCategories("")
  },[parameterGoods, searchVal])

  const sortList= ["latest", "popular"]



  document.title = "Hone";

  const btnVisibility = product && product.length>=20 

  return (
    <div className='content-container'>
      
      <ProductParameter categories={categories} searchVal={searchVal} setSearchVal={setSearchVal} parameterGoods={parameterGoods} setParameterGoods={setParameterGoods} setCategories={setCategories} sortList={sortList}/>
      {product.length ? <div className='goods-container'>
        { product? product.map((product, index)=><ProductCard setId={setId} key={index} product={product}/>):<Loading/>}
      </div> :<NoResultsFound/>} 
      {btnVisibility && <button onClick={()=>setParameterGoods({...parameterGoods, limit:parameterGoods.limit+20})} className='button-load-more'>Load more...</button>}
    </div>
  )
}


