 
import axios from "axios";

export function getProducts(url, parameters, token, setProduct){
    console.log(token)
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
        // console.log(response)
    }).catch(err=>console.log(err))
}


 
