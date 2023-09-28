import React, { useEffect, useState } from 'react'
import './cart.css'
import { getStorage, headerToken, token, urlProductsIds } from '../../constants/urls'
import { getProductIds } from '../../apis/getProductIds'
import { URLSearchParamsToGet } from '../../middleware/URLSearchParams'
import CartItem from '../../components/cart-item/CartItem'

export default function Cart() {
  const [list, setList] = useState()

  useEffect(()=>{
    getProductIds(urlProductsIds, URLSearchParamsToGet(getStorage("cart")), headerToken(token), setList)
  },[])

  return (
    <div className='container-cart'>
        <h1>My cart</h1>
        <div className='cart-box'>
            <div className='cart-list'>
              {list? list.map((product, key) => <CartItem key={key} product={product}/>):"Shopping cart is empty"}
            </div>
            <div className='order-data'>
                <div className='order-input'></div>
                <div className='order-result'></div>
                <div className='order-button'></div>
            </div>
        </div>
    </div>
  )
}
