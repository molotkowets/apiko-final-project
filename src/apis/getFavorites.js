import axios from "axios";

export function getFavorites(url, parameters, token, setProduct){
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
