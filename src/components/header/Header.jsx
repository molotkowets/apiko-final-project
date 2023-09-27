import React, { useEffect, useState } from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/icons/Logofull.svg"
import Heart from "../../assets/icons/Favorites.svg"
import HeartTrue from "../../assets/icons/favorite-card-true.svg"
import Basket from "../../assets/icons/icon_ basket.svg"
import AuthActive from '../header-auth-active/AuthActive'
import AuthNotActive from '../header-auth-active/AuthNotActive'
import { token } from '../../constants/urls'


export default function Header() {
  const [isAuth, setIsAuth] = useState(token)
  // useEffect(()=>{
  //   try{
  //     setIsAuth(token)
  //   }
  //   catch{
  //     console.log("onAuth")
  //   }
  // },[])
  const favFalse = false
 
  return (
    <div className='header'>
      <NavLink to="/" className={((isActive)=>isActive ?"active-link-header":"")}>
        <img src={Logo} alt='logo-Apiko'/>
      </NavLink>
      <div className='header-right-side'>
        <div className='header-user-icon'>
          <NavLink to="favorites" className={(isActive)=>isActive ?"active-link-header":""} >
            {favFalse?<img src={HeartTrue} alt='Heart-icon'/>:<img src={Heart} alt='Heart-icon'/>}
            {/* <img src={Heart} alt='Heart-icon'/> */}
            {/* <img src={HeartTrue} alt='Heart-icon'/> */}
          </NavLink>
          <NavLink to="cart" className={(isActive)=>isActive ?"active-link-header":""}>
            <img src={Basket} alt='Basket-icon' className='basket-button'/>
          </NavLink>
        </div>
        <div className='auth-header-active'>
          {isAuth ? <AuthActive setIsAuth={setIsAuth} /> : <AuthNotActive/>}
          
        </div>
      </div>

      
    </div>
  )
}


