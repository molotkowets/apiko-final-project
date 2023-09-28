import React, { useEffect, useState } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import { addToCart, addOrDelFavorite, buyNow, calculation } from './buttonFunc'
import { urlProducts } from '../../constants/urls'
import { getRequest } from '../../apis/getRequest'


export default function Product() {
  const {id} = useParams() 
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState()
  const [favButton, setFavButton] = useState({title:"ADD TO FAVORITES", class:"btn-fav-active"})
  const [favStatus, setFavStatus] = useState(product?.favorite)

  
  useEffect(()=>{
    if(id){
      const url = urlProducts + id    
      const token = {Authorization: `Bearer ${JSON.parse(localStorage.getItem('onAuth')).token}`}
      getRequest(url, id, token, setProduct)
    }
  },[id])
  useEffect(()=>{
    setFavStatus(product?.favorite)
  },[product])
  
  useEffect(()=>{
    setFavButton(favStatus ?{title:"ADDED TO FAVORITES", class:"btn-fav-active"}:{title:"ADD TO FAVORITES", class:""})
  },[favStatus, product?.favorite])
  
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
              <button onClick={()=>addToCart(id)} className='border-button-add'>ADD TO CART</button>
              <button onClick={()=>addOrDelFavorite(id, favStatus, setFavStatus)} className={'border-button-add product-add-to-fav-button ' + favButton.class }>{favButton.title}</button>
            </div>
              <button onClick={()=>buyNow} className='product-button-background'>Buy now</button>
            </div>
        </div>
      </div>}
  </>
  )
}
