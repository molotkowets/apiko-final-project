import React from 'react'
import './category.css'
import '../inputs.css'
import {ReactComponent as CategoryIcon} from '../../../assets/icons/category.svg'
import {ReactComponent as ArrowOpenIcon} from '../../../assets/icons/openList.svg'

export default function Category({categoriesList, setCategories, setSearchVal}) {
  
  const getCategory = (value) => {
      for(let i = 0; i<categoriesList.length; i++){
        if(categoriesList[i].name === value){
          setCategories(categoriesList[i])
          setSearchVal("")
        }
      }
    }
  return (
    <div className='parameter-input-box flex-two'>
        <div className='icon-box'>
            <CategoryIcon/>
        </div>
        <input onChange={(e)=>getCategory(e.target.value)} className='input-search' type="text" list="countries" placeholder="Choose Category"/>
        <datalist  id="countries">
          {categoriesList.map((cat, index)=><option key={index} id={cat.id} value={cat.name}/>)}
        </datalist>
        {/* <input className='input-search' type="text" name="search" placeholder='Choose Category'/> */}
        <button className='search-button'>
            <ArrowOpenIcon/>
        </button>
        
    </div>
  )
}
