import React from 'react'
import './cart.css'

export default function Cart() {
  return (
    <div className='container-cart'>
        <h1>My cart</h1>
        <div className='cart-box'>
            <div className='cart-list'></div>
            <div className='order-data'>
                <div className='order-input'></div>
                <div className='order-result'></div>
                <div className='order-button'></div>
            </div>
        </div>
    </div>
  )
}
