export const urlProducts = "https://demo-api.apiko.academy/api/products/"

export const urlFavorite = 'https://demo-api.apiko.academy/api/products/favorites'

export const token = JSON.parse(localStorage.getItem("onAuth")).token

export const urlFavoriteId = id =>{
    const url = urlProducts + id + "/favorite"
    return url
} 
export const headerToken = (token) => {
    
  const headerToken = {Authorization: `Bearer ${token}`}
    return  headerToken
}