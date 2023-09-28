import React, { useState } from 'react'
import './cart-item.css'
import {ReactComponent as Dump} from '../../assets/icons/dump.svg'
import Counter from '../counter/Counter'

export default function CartItem({product}) {
    
  const [count, setCount] = useState(1)

    const sumPrice = (quantity)=>{
        let sum = product.price * quantity
        return sum
    }
  return (
    <div className='cartItem'>
        <div className='wrapper-inf-cartItem'>
             <img className="cartItemImg" src={product.picture} alt=''/>
            <div className='description-cartItem'>
                <div className='title-cartItem'>{product.title}</div>
                <div className='button-cartItem'>
                    <Dump className='dump-cartItem'/> 
                    <Counter count={count} setCount={setCount}/>
                </div>
            </div>
        </div>
       
        <div className='price-cartItem'>
            <h3>Price:</h3>
            <p>${sumPrice(count)}</p>
        </div>

    </div>
  )
}
