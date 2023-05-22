import React, { useState } from 'react'
import "./inputAuth.css"
import {ReactComponent as OpenEye} from '../../icon/openEye.svg'
import {ReactComponent as ClosedEye} from "../../icon/closedEye.svg"
export default function InputAuth({type, id, size, name, placeholder}) {
    const [activeLabel, setActiveLabel] = useState("")
    const [eyeState, setEyeState] = useState(false)
    const click = (event) => event.target.value ? setActiveLabel("labelOn") : setActiveLabel("");
    
    let Eye = eyeState ?<OpenEye/>:<ClosedEye/>
    let newType = eyeState ?"text": "";
    const errors = {
        email: "",

    }
    const inputClass = type === "password" ? "input-right-padding input-auth": "input-auth"
   

  return (
    <>
    <div className='container-input-auth'>
        <label className={activeLabel + " label-auth"} for={id}>{placeholder+":"}</label>
        <div>
            <input className={inputClass} onChange={(event)=> click(event)} id={id} type={newType||type} size={size} name={name} placeholder={placeholder} required />
            {type === "password" ? <button onClick={()=>setEyeState(!eyeState)} className='eye-button'>{Eye}</button>:""}
        </div>
        <span className='auth-input-error'>{errors[type]}</span>
        
    </div>
    
    </>
  )
}
