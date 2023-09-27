import axios from "axios";

export function getRequest(url, parameters, token, setProduct){
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            ...token
        },
        params: {
            ...parameters
        }
    }).then(response=>{
        setProduct(response.data)
    }).catch(err=>console.log(err))
}