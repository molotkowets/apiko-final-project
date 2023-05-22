import React from 'react'
import './authorization.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputAuth from '../../components/inputAuth/InputAuth';

export default function Authorization() {
  
  const location = useLocation()
  const navigate = useNavigate();
  const currentAddress = location.pathname.replace("/","")
  const title = currentAddress[0].toUpperCase() + currentAddress
  document.title = title;
  const patterns ={
    email: "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;"
  }

  const textSwitchBox = {
    registration: {
      p:"I already have an account, ",
      button: " Log in",
      to: "/login",
      title: "Register"
    },    
    login: {
      p:"I have no account, ",
      button: "Register now",
      to: "/registration",
      title: "Login"
    }
  }

  const electText = textSwitchBox[currentAddress]

  return (
    <div className='authorization-window'> 
    <button className='background-button-close' onClick={() => navigate(-1)}></button>
      <div className='authorization-container' >
        
        <div className='auth-input-box auth-box-general'>
          <h1 className='auth-title'>
            {electText.title}
          </h1>
          {currentAddress === "registration" && <InputAuth id={"username"} type={"text"}  name={"username"} placeholder={"Full Name"}/>}
          <InputAuth id={"email"} type={"email"}  name={"email"} placeholder={"Email"} pattern={patterns.email} required={true}/>
          {currentAddress === "registration" &&  <InputAuth id={"phone"} type={"tel"}  name={"phone"} placeholder={"Phone number"} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}/>}
          <InputAuth id={"pass"} type={"password"}  name={"password"} placeholder={"Password"} required={true}/>
          {currentAddress === "registration" && <p className='password-notification'>The password has to be at least at least 1 letter, 1special symbol, 1 number</p>}
          <button className='registration-button'>{electText.title}</button>
        </div>
        <div className='auth-switch-box auth-box-general'>
          <p>{electText.p}</p><Link className='auth-switch-link' to={electText.to} state={{background: location.state.background}} replace={true}>{electText.button}</Link>   
        </div>
      </div>
    </div>
    
  )
}
