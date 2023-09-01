import React, { useState } from 'react'
import './product-card.css'
import {ReactComponent as FavoriteFalse} from '../../assets/icons/favourite-card-false.svg'
import{ReactComponent as FavoriteTrue} from '../../assets/icons/favourite-card-true.svg'
import { NavLink } from 'react-router-dom'
import { deleteRemoveProductFromFavorites } from '../../apis/deleteRemoveProductFromFavorites'
import { addToFavorite } from '../../containers/product-card/buttonFunc'
import { postAddProductToFavorites } from '../../apis/postAddProducToFavorites'
export default function ProductCard({product, funcRest}) {
  const [statusResponse, setStatusResponse] = useState("")
  const [statusFav, setStatusFav] = useState(product.favorite)
  
 const favoriteHandler = (id)=>{
  const url = "https://demo-api.apiko.academy/api/products/"+id+"/favorite"
  const token = JSON.parse(localStorage.getItem("onAuth")).token

  if(statusFav){
    console.log("delete")
    deleteRemoveProductFromFavorites(url, token, setStatusResponse)
    setStatusFav(!statusFav)
    funcRest()
  }else{
    console.log("add")
    postAddProductToFavorites(url, token, setStatusResponse)
    setStatusFav(!statusFav)
  }
  console.log(statusResponse)
 }

  return (
    <div className='wrapper-product-cart-container'>
      <NavLink className={"wrap-product-card"} to={'product/'+ product.id}>
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
      <div onClick={()=>favoriteHandler(product.id)} className='product-favorite'>
              {!statusFav?<FavoriteFalse/>:<FavoriteTrue/>}
            </div>
    </div>
  )
}
