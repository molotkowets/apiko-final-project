import React, { useEffect, useState } from 'react'
import "./home.css"
// import { cardItemsSelector, removeFromCard } from '../../store'
// import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../apis/getProducts'
import ProductParameter from '../../components/product-parameter/ProductParameter'
import ProductCard from '../../components/product-card/ProductCard'
import Loading from '../../components/loading/Loading'
import NoResultsFound from '../../containers/NoResultsFound/NoResultsFound'
// import { handlerFavHome } from '../../services/handler-favorites-home'

export default function Home() {
  const [products, setProducts] = useState("")
  const [parameterGoods, setParameterGoods] = useState({offset: 0, limit: 20, sortBy: "latest"})
  const [categories, setCategories] = useState('')
  const [searchVal, setSearchVal] = useState('')
  // console.log(products)
  useEffect(() => {
    let categoriesURL= "https://demo-api.apiko.academy/api/categories/"
     
    if(categories){
      const requestURLCategories = categoriesURL + categories.id + "/products"
      getProducts( requestURLCategories, parameterGoods, setProducts)
    }
   
  },[categories, parameterGoods])

  useEffect(()=>{
    const requestURLProducts = "https://demo-api.apiko.academy/api/products" + (searchVal && "/search")
    const token = {Authorization: `Bearer ${JSON.parse(localStorage.getItem('onAuth')).token}`}
      console.log(requestURLProducts )
      getProducts( requestURLProducts, {...parameterGoods, keywords: searchVal}, token, setProducts)
      setCategories("")
  },[parameterGoods, searchVal])

  const sortList= ["latest", "popular"]



  document.title = "Hone";

  const btnVisibility = products && products.length>=20 
  const getIdFav = ()=>{}

  return (
    <div className='content-container'>
      
      <ProductParameter categories={categories} searchVal={searchVal} setSearchVal={setSearchVal} parameterGoods={parameterGoods} setParameterGoods={setParameterGoods} setCategories={setCategories} sortList={sortList}/>
      {products.length ? <div className='goods-container'>
        { products? products.map((product, index)=><ProductCard key={index} product={product} handlerFav={getIdFav}/>):<Loading/>}
      </div> :<NoResultsFound/>} 
      {btnVisibility && <button onClick={()=>setParameterGoods({...parameterGoods, limit:parameterGoods.limit+20})} className='button-load-more'>Load more...</button>}
    </div>
  )
}


