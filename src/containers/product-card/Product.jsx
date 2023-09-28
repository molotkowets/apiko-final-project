import React, { useEffect, useState } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import { addToCart, addOrDelFavorite, buyNow } from './buttonFunc'
import { getStorage, headerToken, token, urlProducts } from '../../constants/urls'
import { getRequest } from '../../apis/getRequest'
import Counter from '../../components/counter/Counter'


export default function Product() {
  const {id} = useParams(),
   [quantity, setQuantity] = useState(1),
   [product, setProduct] = useState(),
   [favButton, setFavButton] = useState({title:"", class:""}),
   [cartButton, setCartButton] = useState({title:"ADD TO CART", class:""}),
   [favStatus, setFavStatus] = useState(product?.favorite),
   [storage, setStorage] = useState(getStorage("cart")),
   activeButtonClass = "btn-fav-active",
   clickAddToCart = () => {
    addToCart(id)
    setStorage(getStorage("cart"))
   }
  
  useEffect(()=>{
    storage.includes(id)?setCartButton({title:"ED", class:activeButtonClass}):setCartButton({title:"", class:''})
    
  },[storage])

  useEffect(()=>{
    if(id){
      const url = urlProducts + id    
      getRequest(url, id, headerToken(token), setProduct)
    }
  },[id])
  useEffect(()=>{
    setFavStatus(product?.favorite)
  },[product])
  
  useEffect(()=>{
    setFavButton(favStatus ?{title:"ED", class: activeButtonClass}:{title:"", class:""})
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
                <Counter count={quantity} setCount={setQuantity}/>
                {/* <button onClick={()=>calculation(quantity, setQuantity, "minus")} className='circle-button'>-</button><div className='quantity'>{quantity}</div><button onClick={()=>calculation(quantity, setQuantity, "plus")} className='circle-button'>+</button> */}
              </div>
              <div>Total: <span>${quantity*product.price}</span></div>
            </div>
          </div>
          <div className='product-buttons'>
            <div>
              <button onClick={()=>clickAddToCart()} className={'border-button-add ' + cartButton.class}>ADD{cartButton.title} TO CART</button>
              <button onClick={()=>addOrDelFavorite(id, favStatus, setFavStatus)} className={'border-button-add product-add-to-fav-button ' + favButton.class }>ADD{favButton.title} TO FAVORITES</button>
            </div>
              <button onClick={()=>buyNow} className='product-button-background'>Buy now</button>
            </div>
        </div>
      </div>}
  </>
  )
}
