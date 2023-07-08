import axios from "axios";

const requestURL = " https://demo-api.apiko.academy/api/categories"

export function getCategories(setCategories){
    axios.get(requestURL, {
       
    }).then(response=>{
        setCategories(response.data)
    }).catch(err=>console.log(err))
}

 
 
 
