import React, { useEffect, useState } from 'react'
import ProductCard from '../product-card/ProductCard'
import './favorites.css'
import { headerToken, token, urlFavorite } from '../../constants/urls'
import { getRequest } from '../../apis/getRequest'


export default function Favorites() {
  const [products, setProducts] = useState('')
  
  useEffect(()=>{
    gatFavorite(0, 20)
  },[])

const gatFavorite = (off, lim) =>{
  const params = {
    offset: off,
    limit: lim,
  }
  getRequest(urlFavorite, params, headerToken(token), setProducts)
}

const removeProduct = (id)=>{
  // console.log(products)
  let mod = products.filter((prod) => prod.id !== id)
  setProducts(mod)   
  // console.log(mod)
}

  return (
    <div className='favorites-wrap-product'>
      { products? products.map((product, index)=><ProductCard key={index} product={product} handlerFav={removeProduct}/>):"Loading"}
    </div>
  )
}
