import React, { useEffect, useState } from 'react'
import './authorization.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputAuth from '../../components/inputAuth/InputAuth';
// import { Register } from '../../apis/postRegister';

export default function Authorization() {

 const [resp, setResp] = useState("")
console.log(resp)
  const dataAuth = {
    login: {
      url: '/login',
      data:{
        "email": "molotkowets@gmail.com",
        "password": "admin1234!",
      }
    },
    register:{
      url:'/register',
      data:{
        "fullName": "molotkowets",
        "email": "molotkowets@gmail.com",
        "password": "admin1234!",
        "phone": "+380508546242"
      }
    }
  }
  // useEffect(() =>{
  //   Register(dataAuth.login, setResp)
  // },[])
  

  const [email, setEmail] = useState(''),
   [password, setPassword] = useState(''),
   [username, setUsername] = useState(''),
   [phone, setPhone] = useState('');

  const [emailDirty, setEmailDirty] = useState(false),
   [passwordDirty, setPasswordDirty] = useState(false),
   [usernameDirty, setUsernameDirty] = useState(false),
   [phoneDirty, setPhoneDirty] = useState(false);

  const [emailError, setEmailError] = useState("The input field must not be empty"),
  [passwordError, setPasswordError] = useState('The input field must not be empty'),
  [usernameError, setUsernameError] = useState('The input field must not be empty'),
  [phoneError, setPhoneError] = useState('The input field must not be empty');

  const [formValid, setFormValid] = useState(false)
const tester = (e)=>{
  // navigate('/')
  console.log(e)
}
  useEffect(()=>{
    if(emailError || passwordError || usernameError || phoneError){
      setFormValid(false)
    }else{
      setFormValid(true)
    }

  },[emailError, passwordError, usernameError, phoneError])

  const location = useLocation(),
   navigate = useNavigate(),
   currentAddress = location.pathname.replace("/","");

  document.title  = currentAddress[0].toUpperCase() + currentAddress;
 

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

  const inputData=[
    {
      id:"username",
      type:"text",
      name:"username",
      placeholder:"Full Name",
      pattern: "^[a-zA-Z\\s]+$",
      value: {username},
      setValue: {setUsername},
      dirty: {usernameDirty},
      setDirty: {setUsernameDirty},
      error: {usernameError},
      setError: {setUsernameError}
    },
    {
      id:"email",
      type:"email",
      name:"email",
      placeholder:"email",
      pattern: "\\S+@\\S+",
      value: {email},
      setValue: {setEmail},
      dirty: {emailDirty},
      setDirty: {setEmailDirty},
      error: {emailError},
      setError: {setEmailError}
    },
    {
      id:"phone",
      type:"tel",
      name:"phone",
      placeholder:"Phone number",
      pattern: "^(\\+)?([0-9]){10,14}$",
      value: {phone},
      setValue: {setPhone},
      dirty: {phoneDirty},
      setDirty: {setPhoneDirty},
      error: {phoneError},
      setError: {setPhoneError}
    },
    {
      id:"pass",
      type:"password",
      name:"password",
      minLength: 8,
      maxLength: 35,
      placeholder:"Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]",
      value: {password},
      setValue: {setPassword},
      dirty: {passwordDirty},
      setDirty: {setPasswordDirty},
      error: {passwordError},
      setError: {setPasswordError}
    },
  ]
 const checkLocation = currentAddress === "registration" 

 const booForInputMap = (key)=>Boolean(checkLocation + (key % 2))
  
  return (
    <div className='authorization-window'> 
    <button className='background-button-close' onClick={() => navigate(-1)}></button>
      <div className='authorization-container' >
        
        <div className='auth-input-box auth-box-general'>
          <h1 className='auth-title'>
            {electText.title}
          </h1>
          <form>
            {inputData.map((inp, key)=> booForInputMap(key) && <InputAuth key={key} {...inp} />)}
            {checkLocation && <p className='password-notification'>The password has to be at least at least 1 letter, 1special symbol, 1 number</p>} 
            <button /*disabled={!formValid}*/ onChange={(e)=>tester(e)} className='registration-button'>{electText.title}</button>
          </form>
        </div>
        <div className='auth-switch-box auth-box-general'>
          <p>{electText.p}</p><Link className='auth-switch-link' to={electText.to} state={{background: location.state.background}} replace={true}>{electText.button}</Link>   
        </div>
      </div>
    </div>
    
  )
}
