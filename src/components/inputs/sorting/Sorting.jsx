import React from 'react'
import './sorting.css'
import '../inputs.css'
import {ReactComponent as SortingIcon} from '../../../assets/icons/sorting.svg'
import {ReactComponent as ArrowOpenIcon} from '../../../assets/icons/openList.svg'

export default function Sorting({sortList, setParameterGoods, parameterGoods}) {
  
  return (
    <div className='parameter-input-box flex-one'>
        <div className='icon-box'>
            <SortingIcon/>
        </div>        
        <input onChange={(e)=>setParameterGoods({...parameterGoods, sortBy:e.target.value})} className='input-search' type="text" list="sort" placeholder="Sorting"/>
        <datalist  id="sort">
          {sortList.map((by, index)=><option key={index} id={index} value={by}/>)}
        </datalist>
        <div className='search-button'>
            <ArrowOpenIcon/>
        </div>
    </div>
  )
}
