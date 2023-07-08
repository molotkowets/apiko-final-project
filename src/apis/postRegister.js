import axios from "axios";

// export function Register(){
//     console.log("register")
//     axios.post('https://demo-api.apiko.academy/api/auth/register',{
        
//         "fullName": "molotkowets",
//         "email": "molotkowets@gmail.cpm",
//         "password": "admin",
//         "phone": "0501234567"
//     })
//     .then((response)=>{
//         console.log(response)
//     })
//     .then((err)=>{
//         console.log(err)
//     })
// }

 export function Register(auth,setResp){
    console.log(auth.url)
    axios({
        method: 'post',
        url: auth.url,
        baseURL: 'https://demo-api.apiko.academy/api/auth',
        data: auth.data
    })
    .then((response)=>{
        console.log(setResp(response))
    })
    .then((err)=>{
        console.log(err)
    })
}