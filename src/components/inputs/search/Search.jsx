import React, { useEffect, useState } from 'react'
import {ReactComponent as SearchIcon} from '../../../assets/icons/search.svg'
import './search.css'
import '../inputs.css'

export default function Search({setSearchVal, searchVal}) {
  const [val, setVal] = useState("")
  useEffect(()=>{
    setVal(searchVal)
  },[searchVal])
  const SearchVal = (e) =>{
    setVal(e)
    if( e.length > 2 || e.length === 0){
      setSearchVal(e)
    }
  }
  return (
    <div className='parameter-input-box flex-two'>
        <button className='search-button'>
            <SearchIcon/>
        </button>
        <input value={val} onChange={(e) => SearchVal(e.target.value)} className='input-search' type="text" name="search"  placeholder='Search products by name'/>
    </div>
  )
}
