import React, { useState } from 'react'
import "./inputAuth.css"
import {ReactComponent as OpenEye} from '../../assets/icons/openEye.svg'
import {ReactComponent as ClosedEye} from "../../assets/icons/closedEye.svg"
export default function InputAuth({ register, type, id, pattern, name, placeholder, maxLength, minLength, error}) {
    const [activeLabel, setActiveLabel] = useState("")
    const [eyeState, setEyeState] = useState(false)
    const click = (event) => event.target.value ? setActiveLabel("labelOn") : setActiveLabel("");
    
    let Eye = eyeState ?<OpenEye/>:<ClosedEye/>
    let newType = eyeState ?"text": "";
    // const errors = {
    //     email: "Such email is already used",
    //     text: "Mandatory info missing",
    //     tel: "Mandatory info missing",
    //     password: "Mandatory info missing"
    // }

    // console.log(...register[name])

    const inputClass = type === "password" ? "input-right-padding input-auth": "input-auth"
   
    // const valueHandler = (e) => {
    //     click(e)
    //     // console.log(pattern)
    //     setValue[Object.keys(setValue)](e.target.value)
        
    //     if(!e.target.value.match(pattern)){
    //         setError[Object.keys(setError)](errors[type])
    //         console.log("NoOK", type)
    //         if(!e.target.value){
    //             console.log("pusto")    
    //             setError[Object.keys(setError)]("The input field must not be empty")
    //         }
           
    //     }else{
    //         console.log("oK")
    //         setError[Object.keys(setError)]("")
    //     }
    // }

  return (
    <div className='container-input-auth'>
        <label className={activeLabel + " label-auth"} htmlFor={id}>{placeholder+":"}</label>
        <div>
            <input {...register(name, {
                required: 'go',
                pattern:pattern
                 })} autoComplete="on" className={inputClass}  minLength={minLength} maxLength={maxLength} id={id} type={newType||type}  name={name} placeholder={placeholder} required />
            {type === "password" ? <div onClick={()=>setEyeState(!eyeState)} className='eye-button'>{Eye}</div>:""}
        </div>
        {error[name]?.message && <p>message</p>}
        {/* {(dirty[Object.keys(dirty)] && error[Object.keys(error)]) errors[name] &&  <span className='auth-input-error'>{error[Object.keys(error)]}</span>} */}
        
    </div>
  )
}


// old

// import React, { useState } from 'react'
// import "./inputAuth.css"
// import {ReactComponent as OpenEye} from '../../assets/icons/openEye.svg'
// import {ReactComponent as ClosedEye} from "../../assets/icons/closedEye.svg"
// export default function InputAuth({type, id, pattern, name, placeholder, maxLength, minLength, value, setValue, dirty, setDirty, error, setError, register}) {
//     const [activeLabel, setActiveLabel] = useState("")
//     const [eyeState, setEyeState] = useState(false)
//     const click = (event) => event.target.value ? setActiveLabel("labelOn") : setActiveLabel("");
    
//     let Eye = eyeState ?<OpenEye/>:<ClosedEye/>
//     let newType = eyeState ?"text": "";
//     const errors = {
//         email: "Such email is already used",
//         text: "Mandatory info missing",
//         tel: "Mandatory info missing",
//         password: "Mandatory info missing"
//     }

//     const inputClass = type === "password" ? "input-right-padding input-auth": "input-auth"
   
//     const valueHandler = (e) => {
//         click(e)
//         // console.log(pattern)
//         setValue[Object.keys(setValue)](e.target.value)
        
//         if(!e.target.value.match(pattern)){
//             setError[Object.keys(setError)](errors[type])
//             console.log("NoOK", type)
//             if(!e.target.value){
//                 console.log("pusto")    
//                 setError[Object.keys(setError)]("The input field must not be empty")
//             }
           
//         }else{
//             console.log("oK")
//             setError[Object.keys(setError)]("")
//         }
//     }

//   return (
//     <>
//     <div className='container-input-auth'>
//         <label className={activeLabel + " label-auth"} htmlFor={id}>{placeholder+":"}</label>
//         <div>
//             <input {...register(name)} autocomplete="on" /*onChange={(e)=>valueHandler(e)} value={value[Object.keys(value)]}*/ onBlur={()=> setDirty[Object.keys(setDirty)](true)} className={inputClass}  minLength={minLength} maxLength={maxLength} id={id} type={newType||type}  name={name} placeholder={placeholder} required />
//             {type === "password" ? <div onClick={()=>setEyeState(!eyeState)} className='eye-button'>{Eye}</div>:""}
//         </div>
//         {(dirty[Object.keys(dirty)] && error[Object.keys(error)]) &&  <span className='auth-input-error'>{error[Object.keys(error)]}</span>}
        
//     </div>
    
//     </>
//   )
// }