import axios from "axios";

export function getProductIds(url, params, token, setProduct){
    
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            ...token
        },
        params
    }).then(response=>{
        setProduct(response.data)
        // console.log(response)
    }).catch(err=>console.log(err))
}
