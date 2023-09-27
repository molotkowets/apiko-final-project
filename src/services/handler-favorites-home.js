import { deleteRemoveProductFromFavorites } from "../apis/deleteRemoveProductFromFavorites"
import { postAddProductToFavorites } from "../apis/postAddProductToFavorites"

export const handlerFavHome = (id, statusFav, statusResponse)=>{
    const url = "https://demo-api.apiko.academy/api/products/"+id+"/favorite"
    const token = JSON.parse(localStorage.getItem("onAuth")).token
  
    if(statusFav){
      console.log("delete")
      deleteRemoveProductFromFavorites(url, token, statusResponse)
    }else{
      console.log("add")
      postAddProductToFavorites(url, token, statusResponse)
    }
  }



