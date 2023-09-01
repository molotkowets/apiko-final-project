export const dataAuth = {
    login: {
      url: '/login',
      data:{
        "email": "molotkowets@gmail.com",
        "password": "admin1234!",
      }
    },
    register:{
      url:'/register',
      data:{
        "fullName": "molotkowets",
        "email": "molotkowets@gmail.com",
        "password": "admin1234!",
        "phone": "+380508546242"
      }
    }
  }

  export const inputData = (path) => {
    const Data=[
        {
          id:"fullName",
          type:"text",
          name:"fullName",
          placeholder:"Full Name",
          pattern: "^[a-zA-Z\\s]+$"
        },
        {
          id:"email",
          type:"email",
          name:"email",
          placeholder:"email",
          pattern: "\\S+@\\S+"
        },
        {
          id:"phone",
          type:"tel",
          name:"phone",
          placeholder:"Phone number",
          pattern: "^(\\+)?([0-9]){10,14}$"
        },
        {
          id:"pass",
          type:"password",
          name:"password",
          minLength: 8,
          maxLength: 35,
          placeholder:"Password",
          pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]"
        },
      ]
      let dataInp = path === "registration" ? Data : [Data[1], Data[3]]
    //   console.log(dataInp)
      return dataInp
  }

export const textSwitchBox = {
    "auth/registration": {
      p:"I already have an account, ",
      button: " Log in",
      to: "/auth/login"
    },    
    "auth/login": {
      p:"I have no account, ",
      button: "Register now",
      to: "/auth/registration"
    }
  }