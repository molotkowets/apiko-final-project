import React from 'react'
import './settings.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Settings() {
    
  const data = JSON.parse(localStorage.getItem("onAuth"))

  return (
    // <div className='content-container'>
        <div className='settings-page-container'>
            <div className='settings-header'>
                <div className='settings-avatar'><p>{data.account.fullName[0]}</p></div>
                <h2>{data.account.fullName}</h2>
                <div className='settings-nav'>
                    <NavLink className={({ isActive }) => isActive ? "active-button nav-button" : "nav-button"} to={'edit-account'} end>Edit Account</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-button nav-button" : "nav-button"} to={'order-history'} end>Order History</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-button nav-button" : "nav-button"} to={'favorites'} end>Favorites</NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    // </div>
  )
}

// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNCwiaWF0IjoxNjkwMjIyMzYyNzUzLCJzdWIiOiJBUElfQVVUSE9SSVpBVElPTl9UT0tFTiJ9.ayFeINBTgryRNzDXQTLyMFinAk4nI9eK2B3aELrw9g4","account":{"id":124,"fullName":"molotkowets","createdAt":"2023-07-08T20:13:16.246Z","updatedAt":"2023-07-08T20:13:16.246Z","email":"molotkowets@gmail.com","phone":"+380508546242","country":null,"city":null,"address":null}}

// ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""