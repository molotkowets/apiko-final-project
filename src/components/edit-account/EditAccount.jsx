import React from 'react'
import FormMainInf from '../form-main-inf/FormMainInf'
import InputSettings from '../input-settings/InputSettings'
import {genChangePass, genMainInf} from './generatesInputData'

export default function EditAccount() {
    const excludes = ["id", "createdAt", "updatedAt"],
     onAuthAccount =  Object.entries(JSON.parse(localStorage.getItem("onAuth")).account),
     listMainInput = onAuthAccount.filter(i => !excludes.includes(i[0])),
     objData = Object.fromEntries(listMainInput),
     changePassword = ["Current password", "New password", "Confirm password"]
    //  entries = Object.fromEntries(listMainInput)
console.log(objData)


   
    const inputsGen = (data) => (register)=>{
        console.log(data)
        let input = data.map((el, key) => <InputSettings register={register} key={key} data={el} />)
        return input
    }

  return (
    <div>
        <div className='main-information-settings'>
            <FormMainInf title={"Main information"} inputs={inputsGen(genMainInf(objData))}/>
        </div>
        <div className='change-password-settings'>
            <FormMainInf title={"Change password"} inputs={inputsGen(genChangePass(changePassword))}/>
        </div>
    </div>
  )
}
// const arryData = [
//     {
//         type: "",
//         name: "",
//         placeholder: "",
//         value: ""
//     }
// ]



// const inputsGen = (val, type)=> ( data, register)=>{
//     const checkTitle = i => i.length <= 1  ? " " : i;
//     // console.log(data[0])
//     let input = Object.keys(data).map((i, key) => <InputSettings type={type} register={register} title={checkTitle(i)} placeholder={data[i]} valueInp={(val && data[i])} id={key}/>)
//     return input
// }
// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNCwiaWF0IjoxNjg5ODUwNjU2NjQ1LCJzdWIiOiJBUElfQVVUSE9SSVpBVElPTl9UT0tFTiJ9.a_mwT39007a6IudBp9f-MAAIODAkWY88Fhq-n_ina1A","account":{"id":124,"fullName":"molotkowets","createdAt":"2023-07-08T20:13:16.246Z","updatedAt":"2023-07-08T20:13:16.246Z","email":"molotkowets@gmail.com","phone":"+380508546242","country":null,"city":null,"address":null}}

// const account = {
//         id : 124,
//     fullName : "molotkowets",
//         createdAt : "2023-07-08T20:13:16.246Z",
//         updatedAt : "2023-07-08T20:13:16.246Z",
//     email : "molotkowets@gmail.com",
//     phone :"+380508546242", 
//     country : null,
//     city : null,
//     address : null
// }
// const list = ["fullName", "email", "phone", "country", "city", "address"]

