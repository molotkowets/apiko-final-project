import React, { useEffect, useState } from 'react'
import './product.css'
import { getProductId } from '../../apis/getProductId'
import { useParams } from 'react-router-dom'
import { addToCart, addToFavorite, buyNow, calculation } from './buttonFunc'


export default function Product() {
  const {id} = useParams() 
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState()
  
  useEffect(()=>{
    if(id){
    const urlProductId = 'https://demo-api.apiko.academy/api/products/' + id
    getProductId( urlProductId, id, setProduct)
  }
  },[id])
  
  return (
  <>
    {product && 
      <div className='product-container'>
        <div className='product-wrapper'>
          <div className='product-description-wrapper'>
            <div className='product-img-wrapper'>
              <img className='product-img-description' src={product?.picture} alt=''/>
            </div>
            <div className='product-description'>
              <div>
                <h2>{product?.title}</h2>
                <p className='product-description-text'>{product?.description}</p>
              </div>
              <div className='product-desc-price-wrapper'><span className='product-desc-price'>PRICE </span><span className='product-desc-price-num'>${product?.price}</span></div>
              <div className='quantity-product'>
                <button onClick={()=>calculation(quantity, setQuantity, "minus")} className='circle-button'>-</button><div className='quantity'>{quantity}</div><button onClick={()=>calculation(quantity, setQuantity, "plus")} className='circle-button'>+</button>
              </div>
              <div>Total: <span>${quantity*product.price}</span></div>
            </div>
          </div>
          <div className='product-buttons'>
            <div>
              <button onClick={()=>addToCart} className='border-button-add'>ADD TO CART</button>
              <button onClick={()=>addToFavorite(id)} className='border-button-add product-add-to-fav-button'>ADD TO FAVORITES</button>
            </div>
              <button onClick={()=>buyNow} className='product-button-background'>Buy now</button>
            </div>
          
        </div>
      </div>}
  </>
  )
}
