import React from 'react'
import "./home.css"
import { cardItemsSelector, removeFromCard } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  document.title = "Hone";

  const cardItems = useSelector(cardItemsSelector)
  
  const dispatch = useDispatch()
  const handleRemoveFromCard = id => {
    dispatch(removeFromCard(id))
  }

  console.log(cardItems, dispatch, handleRemoveFromCard)

  

  return (
    <div>Home
      <p>{cardItems}</p>
    </div>
  )
}
