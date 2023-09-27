import axios from "axios";

export function postAddProductToFavorites(url, token, setProduct){
    axios.post(url, undefined, {
        headers: {
            Authorization: `Bearer ${token}`
          },
    }).then(response=>{
        setProduct(response.data)
        console.log(response)
    }).catch(err=>console.log(err))
}


 

