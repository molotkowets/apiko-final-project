import { Auth } from '../../apis/postAuth'

const authParameters = data => {
    const parameters = {
        url: "/login",
        data:{
            ...data
        }
    }
    return parameters
}

export const onSubmit = setResp => data => { 
    console.log( setResp, data)
    alert(Object.values(data)) 
      Auth(authParameters(data), setResp)
  }
