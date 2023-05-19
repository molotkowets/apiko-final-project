import React from 'react'
import './authorization.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Authorization() {
  const location = useLocation()
  const navigate = useNavigate();
  const currentAddress = location.pathname.replace("/","")

  const textSwitchBox = {
    registration: {
      p:"I already have an account,",
      button: "Log in",
      to: "/login"
    },    
    login: {
      p:"I have no account,",
      button: "Register now",
      to: "/registration",
    }
  }

  const electText = textSwitchBox[currentAddress]

  return (
    <div className='authorization-window'> 
    <button className='background-button-close' onClick={() => navigate(-1)}></button>
      <div className='authorization-container' >
        <div className='auth-input-box'>

        </div>
        <div className='auth-switch-box'>

          <p>{electText.p}</p><Link to={electText.to} state={{background: location.state.background}} replace={true}>{electText.button}</Link>   

        </div>
        
      </div>
    </div>
    
  )
}
