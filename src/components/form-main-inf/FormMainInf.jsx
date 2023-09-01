import React from 'react'
import { useForm } from 'react-hook-form'
import './form-main-inf.css'

export default function FormMainInf({title, inputs}) {
    const {register, handleSubmit} = useForm()
    const handlerMainInf = (data)=>{
        // console.log(data)
    }
 
  return (
    <div>
        <h2 className='title-form'>{title}</h2>
        <form onSubmit={handleSubmit(handlerMainInf)}>
                {inputs( register )}
                <button className='buttonEditAccount'>Save</button>
            </form>
    </div>
  )
}



// {/* {formData.map((i, key) => <InputSettings register={register} title={i[0]} valueInp={i[1]} pattern={i.pattern} id={key}/>)  } */}
// {Object.keys(formData).map((i, key) => <InputSettings register={register} title={checkTitle(i)} valueInp={formData[i]} id={key}/>)  }