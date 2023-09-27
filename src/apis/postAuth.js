import axios from "axios";

 export function Auth(params, setResp){
    console.log(params)
    axios({
        method: 'post',
        url: params.url,
        baseURL: 'https://demo-api.apiko.academy/api/auth',
        data: params.data
    })
    .then((response)=>{
        console.log(response)
        setResp(response)
    })
    .then((err)=>{
        console.log(err)
        // setResp(err)
    })
    console.log("break")
}

