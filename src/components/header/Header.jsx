import React from 'react'
import "./header.css"
import { NavLink, Outlet } from 'react-router-dom'
import Logo from "../../assets/icons/Logofull.svg"
import Heart from "../../assets/icons/Favorites.svg"
import Basket from "../../assets/icons/icon_ basket.svg"
import AuthActive from '../header-auth-active/AuthActive'
import AuthNotActive from '../header-auth-active/AuthNotActive'


export default function Header() {
  let isAuth = false;
  return (
    <div className='header'>
      <NavLink to="/" className={((isActive)=>isActive ?"active-link-header":"")}>
        <img src={Logo} alt='logo-Apiko'/>
      </NavLink>
      <div className='header-right-side'>
        <div className='header-user-icon'>
          <NavLink to="/" className={(isActive)=>isActive ?"active-link-header":""} >
            <img src={Heart} alt='Heart-icon'/>
          </NavLink>
          <NavLink to="/" className={(isActive)=>isActive ?"active-link-header":""}>
            <img src={Basket} alt='Basket-icon' className='basket-button'/>
          </NavLink>
        </div>
        
        <div className='auth-header-active'>
          {isAuth?<AuthActive/>:<AuthNotActive/>}
          {/* <Outlet/> */}
        </div>
      </div>

      
    </div>
  )
}


