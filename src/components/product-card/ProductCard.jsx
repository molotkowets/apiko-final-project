import React, { useEffect, useState } from 'react'
import './product-card.css'
import {ReactComponent as FavoriteFalse} from '../../assets/icons/favourite-card-false.svg'
import{ReactComponent as FavoriteTrue} from '../../assets/icons/favourite-card-true.svg'
import { NavLink } from 'react-router-dom'
// import { deleteRemoveProductFromFavorites } from '../../apis/deleteRemoveProductFromFavorites'
import { addOrDelFavorite } from '../../containers/product-card/buttonFunc'
// import { postAddProductToFavorites } from '../../apis/postAddProductToFavorites'
export default function ProductCard({product, handlerFav}) {
  const [statusResponse, setStatusResponse] = useState("")
  const [statusFav, setStatusFav] = useState(product.favorite)
 if(!statusFav){
  handlerFav(product.id)
 }
  // console.log(statusFav)
useEffect(()=>{
  statusResponse && statusResponse?.success && setStatusFav(!statusFav)
},[statusResponse])


  return (
    <div className='wrapper-product-cart-container'>
      <NavLink className={"wrap-product-card"} to={'/product/'+ product.id}>
        <div className='product-card border-radius-card'>
          <div className='product-img-container'>
            <img className="product-picture border-radius-card" src={product.picture} alt=''/>
            
          </div>
          <div className='product-text-box'>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-price'>${product.price}</p>
          </div>
          
        </div>
      </NavLink>
      {/* <div onClick={()=>handlerFav(product.id, statusFav, setStatusResponse)} className='product-favorite'> */}
      <div onClick={()=>addOrDelFavorite(product.id, statusFav, setStatusFav)} className='product-favorite'>
              {!statusFav?<FavoriteFalse/>:<FavoriteTrue/>}
              {/* {favoriteIcon} */}
            </div>
    </div>
  )
}
