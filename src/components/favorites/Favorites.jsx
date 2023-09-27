import React, { useEffect, useState } from 'react'
// import { getProductIds } from '../../apis/getProductIds'
import ProductCard from '../product-card/ProductCard'
import './favorites.css'
import { getFavorites } from '../../apis/getFavorites'
import { deleteRemoveProductFromFavorites } from '../../apis/deleteRemoveProductFromFavorites'
import { headerToken, token, urlFavorite, urlFavoriteId } from '../../constants/urls'


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

  getFavorites(urlFavorite, params, headerToken(token), setProducts)
}

const removeProduct = (id)=>{
  // const response = (e)=>{
    // if(e.success){
      let mod = products.filter((prod) => prod.id !== id)
      setProducts(mod)
    // }
  // }
 
  // deleteRemoveProductFromFavorites(urlFavoriteId(id), token, response)
}

  return (
    <div className='favorites-wrap-product'>
      { products? products.map((product, index)=><ProductCard key={index} product={product} handlerFav={removeProduct}/>):"Loading"}
    </div>
  )
}
