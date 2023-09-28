const favoriteHandler = (id)=>{
    const url = "https://demo-api.apiko.academy/api/products/"+id+"/favorite"
    const token = JSON.parse(localStorage.getItem("onAuth")).token
  
    if(statusFav){
      console.log("delete")
      deleteRemoveProductFromFavorites(url, token, setStatusResponse)
      setStatusFav(!statusFav)
      funcRest()
    }else{
      console.log("add")
      postAddProductToFavorites(url, token, setStatusResponse)
      setStatusFav(!statusFav)
    }
    console.log(statusResponse)
   }