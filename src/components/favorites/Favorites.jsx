import React, { useEffect, useState } from 'react'
// import { getProductIds } from '../../apis/getProductIds'
import ProductCard from '../product-card/ProductCard'
import './favorites.css'
import { getFavorites } from '../../apis/getFavorites'


export default function Favorites() {
  const [product, setProduct] = useState('')
  
  useEffect(()=>{
    gatFavorite()
  },[])
const gatFavorite = () =>{
  const token = JSON.parse(localStorage.getItem('onAuth')).token
  console.log(token)
  const params = {
    offset: 0,
    limit: 20,
  }
  
  const headerToken = {Authorization: `Bearer ${token}`}
  const urlFavorite = 'https://demo-api.apiko.academy/api/products/favorites'
  getFavorites(urlFavorite, params,headerToken,setProduct)
}

  return (
    <div className='favorites-wrap-product'>
      { product? product.map((product, index)=><ProductCard funcRest={gatFavorite} key={index} product={product}/>):"Loading"}
    </div>
  )
}
