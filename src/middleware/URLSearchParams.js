export const URLSearchParamsToGet = (arr) => {
    let params = new URLSearchParams();

    for(let i=0; i<arr.length; i++){
        params.append("id", arr[i]);
    }
    
   return params
}

