import axios from "axios";

export function deleteRemoveProductFromFavorites(url, token, setProduct){
    axios.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
          },
    }).then(response=>{
        setProduct(response.data)
        console.log(response)
    }).catch(err=>console.log(err))
}


 

