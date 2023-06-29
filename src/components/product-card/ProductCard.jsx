import React from 'react'
import './product-card.css'
import {ReactComponent as FavoriteFalse} from '../../assets/icons/favourite-card-false.svg'
import{ReactComponent as FavoriteTrue} from '../../assets/icons/favourite-card-true.svg'
export default function ProductCard({product}) {
  return (
    <div className='product-card border-radius-card'>
      <div className='product-img-container'>
        <img className="product-picture border-radius-card" src={product.picture} alt=''/>
        <div className='product-favorite'>
          {!product.favorite?<FavoriteFalse/>:<FavoriteTrue/>}
        </div>
      </div>
      <div className='product-text-box'>
        <h3 className='product-title'>{product.title}</h3>
        <p className='product-price'>${product.price}</p>
      </div>
      
    </div>
  )
}
