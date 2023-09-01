import React, { useEffect, useState } from 'react'
import './login.css'
import { inputData } from '../authorization/dataAuth'
import InputAuth from '../../components/inputAuth/InputAuth'
import { useForm } from 'react-hook-form'
import { onSubmit } from './handler'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const{ register, handleSubmit, formState:{errors} } = useForm()
    const [resp, setResp] = useState("")
    const submit = onSubmit(setResp)
    useEffect(()=>{
      if(resp?.data?.token)
      // console.log(resp.data)
       localStorage.setItem('onAuth', JSON.stringify(resp.data));
       if(resp.status === 200){
        navigate(-1)
       }
       
    },[resp])

    console.log(resp)
    
     
  return (
    <>
        <form onSubmit={handleSubmit(submit)}>
            {inputData("login").map((inp, key)=> <InputAuth  register={register} key={key} {...inp}  error={errors}/>)}
            <button className='registration-button'>Login</button>
        </form>
            
    </>
  )
}
