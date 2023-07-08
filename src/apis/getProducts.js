// import axios from "axios";

// const requestURL = "https://demo-api.apiko.academy/api/products"

// export function getProducts(url, parameters , setProduct){
//     axios.get(requestURL, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         params: {
//             ...parameters
//         }
//     }).then(response=>{
//         setProduct(response.data)
//     }).catch(err=>console.log(err))
// }

 
import axios from "axios";

// const requestURL = "https://demo-api.apiko.academy/api/categories/3/products"

export function getProducts(url, parameters, setProduct){
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            ...parameters
        }
    }).then(response=>{
        setProduct(response.data)
        // console.log(response)
    }).catch(err=>console.log(err))
}


 
