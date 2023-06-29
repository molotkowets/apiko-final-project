import axios from "axios";

const requestURL = "https://demo-api.apiko.academy/api/products"

export function sendRequest(method,url, offset, limit, sortBy, setProduct){
    axios.get(requestURL, {
        params: {
            offset: offset,
            limit: limit,
            sortBy: sortBy
        }
    }).then(response=>{
        setProduct(response.data)
    }).catch(err=>console.log(err))
}

 
 
 
