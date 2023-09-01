import './authorization.css'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { textSwitchBox } from './dataAuth';

export default function Authorization() {
    
  const location = useLocation(),
    navigate = useNavigate(),
    currentAddress = location.pathname.replace("/",""),
    electText = textSwitchBox[currentAddress]

  return(
    <div className='authorization-window'> 
      <button className='background-button-close' onClick={() => navigate(-1)}></button>
      <div className='authorization-container' >      
        <div className='auth-input-box auth-box-general'>
          <h1 className='auth-title'>
            {electText.title}
            </h1>
            <Outlet />
        </div>
        <div className='auth-switch-box auth-box-general'>
          <p>{electText.p}</p><Link className='auth-switch-link' to={electText.to} state={{background: location.state.background}} replace={true}>{electText.button}</Link>   
        </div>
      </div>
    </div>
  )
}






