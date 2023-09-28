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

import { deleteRemoveProductFromFavorites } from "../../apis/deleteRemoveProductFromFavorites"
import { postAddProductToFavorites } from "../../apis/postAddProductToFavorites"
import { token, urlFavoriteId } from "../../constants/urls"

      
//     }
//   }
const checkResponse = (favStatus, setFavStatus) => response => {
  console.log("wheat switch")
  if(response?.success){
    setFavStatus(!favStatus)
    console.log("switch")
  }
}
  export const addOrDelFavorite = (id, favStatus, setFavStatus)=>{
    favStatus? deleteRemoveProductFromFavorites(urlFavoriteId(id), token, checkResponse(favStatus, setFavStatus)) :postAddProductToFavorites(urlFavoriteId(id), token, checkResponse(favStatus, setFavStatus))
  }
 
  export const addToCart = (id)=>{
    const storage = JSON.parse(localStorage.getItem('cart'))
    console.log(storage)
    let list = []
    if(storage){
      list = storage 
      !storage.includes(id)? list.push(id) : console.log("вже є в кошику")
      
    }else{
      list = [id]
    }
    console.log(list)
    
    localStorage.setItem('cart', JSON.stringify(list));
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