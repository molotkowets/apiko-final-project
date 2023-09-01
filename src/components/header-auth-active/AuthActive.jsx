import React, { useState } from 'react'
import "./auth-active.css"
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg' 
import SettingsBoard from '../../containers/settings-board/SettingsBoard'

export default function AuthActive({ setIsAuth }){

  const name = JSON.parse(localStorage.getItem("onAuth"))?.account?.fullName
  const[showBoard, setShowBoard] = useState(false)

console.log(showBoard)

  return (
    <div className='auth-active-container'>
      <h3 className='header-welcome'>Welcome, {name}!</h3>
      <button onClick={()=>setShowBoard(!showBoard)} className='accountButton'>
        <div className='accountAvatarOnHeader'>
          <p className='letter'>{name[0].toUpperCase()}</p>
        </div>
        <Arrow className='arrow-account'/>
      </button>
      {showBoard && <SettingsBoard setIsAuth={setIsAuth} setShowBoard={setShowBoard}/>}
    </div>
  )
}
