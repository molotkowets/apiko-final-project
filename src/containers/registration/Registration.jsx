import React from 'react'
import './registration.css'
import { inputData } from '../authorization/dataAuth'
import InputAuth from '../../components/inputAuth/InputAuth'
import { useForm } from 'react-hook-form'

export default function Registration() {

    const{ register, handleSubmit, formState:{errors} } = useForm()

    const onSubmit =  data => { 
      alert(Object.values(data)) }
    console.log(errors)
  return (
    
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {inputData("registration").map((inp, key)=> <InputAuth register={register} key={key} {...inp} error={errors}/>)}
            <p className='password-notification'>The password has to be at least at least 1 letter, 1special symbol, 1 number</p>
            <button className='registration-button'>Login</button>
        </form>  
    </>
  )
}
