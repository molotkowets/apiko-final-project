import React, { useState } from 'react'
import "./inputAuth.css"
import {ReactComponent as OpenEye} from '../../icon/openEye.svg'
import {ReactComponent as ClosedEye} from "../../icon/closedEye.svg"
export default function InputAuth({type, id, pattern, name, placeholder, maxLength, minLength, value, setValue, dirty, setDirty, error, setError}) {
    const [activeLabel, setActiveLabel] = useState("")
    const [eyeState, setEyeState] = useState(false)
    // const [errorState, setErrorState] = useState("the input field must not be empty")
    const click = (event) => event.target.value ? setActiveLabel("labelOn") : setActiveLabel("");
    
    let Eye = eyeState ?<OpenEye/>:<ClosedEye/>
    let newType = eyeState ?"text": "";
    const errors = {
        email: "Such email is already used",
        text: "Mandatory info missing",
        tel: "Mandatory info missing",
        password: "Mandatory info missing"
    }

    const inputClass = type === "password" ? "input-right-padding input-auth": "input-auth"
   
    const valueHandler = (e) => {
        click(e)
        // console.log(pattern)
        setValue[Object.keys(setValue)](e.target.value)
        
        if(!e.target.value.match(pattern)){
            setError[Object.keys(setError)](errors[type])
            console.log("NoOK", type)
            if(!e.target.value){
                console.log("pusto")    
                setError[Object.keys(setError)]("The input field must not be empty")
            }
           
        }else{
            console.log("oK")
            setError[Object.keys(setError)]("")
        }
    }

  return (
    <>
    <div className='container-input-auth'>
        <label className={activeLabel + " label-auth"} htmlFor={id}>{placeholder+":"}</label>
        <div>
            <input onChange={(e)=>valueHandler(e)} value={value[Object.keys(value)]} onBlur={()=> setDirty[Object.keys(setDirty)](true)} className={inputClass}  minLength={minLength} maxLength={maxLength} id={id} type={newType||type}  name={name} placeholder={placeholder} required />
            {type === "password" ? <button onClick={()=>setEyeState(!eyeState)} className='eye-button'>{Eye}</button>:""}
        </div>
        {(dirty[Object.keys(dirty)] && error[Object.keys(error)]) &&  <span className='auth-input-error'>{error[Object.keys(error)]}</span>}
        
    </div>
    
    </>
  )
}
// value={value[Object.keys(value)]} 