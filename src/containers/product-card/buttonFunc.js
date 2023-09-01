// export const addToFavorite = (id)=>{
//   // localStorage.removeItem("favorite")
//   const storage = localStorage.getItem("favorite")
//     if(!storage){
//       localStorage.setItem("favorite", JSON.stringify([id]))
//     }else{
//       const favStorage = []
//       favStorage.push(...JSON.parse(storage))
//       if(!favStorage.includes(id)){
//         favStorage.push(id)
//         localStorage.setItem("favorite", JSON.stringify(favStorage))
//         // console.log(localStorage.getItem('favorite')) 
//       }

import { postAddProductToFavorites } from "../../apis/postAddProducToFavorites"

      
//     }
//   }
  export const addToFavorite = (id)=>{
    const url = "https://demo-api.apiko.academy/api/products/"+id+"/favorite"
    const token = JSON.parse(localStorage.getItem("onAuth")).token
    
    console.log(token)
    postAddProductToFavorites(url,token)
  }
  export const addToCart = ()=>{
    
  }
  export const buyNow = ()=>{

  }
  export const calculation = (quantity, setQuantity, sign) =>{
    switch(sign){
      case "minus": quantity > 1 && setQuantity(quantity - 1)
      break
      case "plus": setQuantity(quantity + 1)
      break
      default: console.log('error sum')
    }
}