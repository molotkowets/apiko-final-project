import React, { useState } from 'react'
import './input-settings.css'
export default function InputSettings({register, key, data}) {
    const[val, setVal] = useState(data.value)
    
    // if(!valueInp){
        let alternativePlaceholder = "please enter your " + data.name
    // }
  return (
    <div className='container-input-auth'>
        {data.name && <label className='label-auth label-settings'>{data.label}</label>}
        <div>
            <input {...register(data.name, {
                required: 'go',
                pattern:''
                 })} autoComplete="on" onChange={(e)=>setVal(e.target.value)} className={"input-auth"} type={data.type} id={data.id} name={data.name} placeholder={data.placeholder || alternativePlaceholder} value={val} required />
        </div>
        {/* {error[title]?.message && <p>message</p>} */}
        
    </div>
  )
}
