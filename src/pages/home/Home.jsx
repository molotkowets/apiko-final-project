import React, { useEffect, useState } from 'react'
import "./home.css"
import { cardItemsSelector, removeFromCard } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../../apis/testApi'
import ProductParameter from '../../components/product-parameter/ProductParameter'
import ProductCard from '../../components/product-card/ProductCard'
import Loading from '../../components/loading/Loading'

export default function Home() {
  const [product, setProduct] = useState("")

  useEffect(() => {
    const offset = '0',
  limit = "20",
  sortBy = "latest"
  let requestURL = "https://demo-api.apiko.academy/api/products"
  sendRequest("GET", requestURL, offset, limit, sortBy, setProduct)
  },[])


  console.log(product)


  document.title = "Hone";

  const cardItems = useSelector(cardItemsSelector)
  
  const dispatch = useDispatch()
  const handleRemoveFromCard = id => {
    dispatch(removeFromCard(id))
  }

  // console.log(cardItems, dispatch, handleRemoveFromCard)
const btnVisibility = product && product.length>=20 
  return (
    <div className='content-container'>
      <ProductParameter/>
      <div className='goods-container'>
        { product? product.map((product)=><ProductCard product={product}/>):<Loading/>}
      </div>
      {btnVisibility && <button className='button-load-more'>Load more...</button>}
      
      {/* <p>{cardItems}</p> */}
    </div>
  )
}


