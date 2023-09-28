import React, { useState } from 'react'
import './counter.css'
import { ReactComponent as Minus} from '../../assets/icons/minus.svg'
import {ReactComponent as Plus} from '../../assets/icons/plus.svg'

export default function Counter({count, setCount}) {
    // const[count, setCount] = useState(1)
    const min = 1,
    max = 9

    const checkingTheCountingOperation = (oper)=>{
        const sum = count + oper
         if(sum >= min && sum <= max){
            setCount(count + oper)
         }  
    }
    // fix 'enteringNum' get limit
    const enteringNum = (e)=>{
      console.log(e.target.value)
      setCount(e.target.value)

    }
  return (
    <div className='counter'>
        <Minus className='counter-operator' onClick={()=>checkingTheCountingOperation(-1)}/>
        <input onChange={(e)=>enteringNum(e)} className='input-num-counter' type='number' min={1} max={9} value={count} size={2}/>
        <Plus className='counter-operator' onClick={()=>checkingTheCountingOperation(+1)}/>
    </div>
  )
}
