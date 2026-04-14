import { createContext, useEffect, useState } from "react"



export const LoginContext=createContext()

export const LoginProvider=({children})=>{

    const [user,setUser]=useState(null)

    useEffect(()=>{
      const userData=JSON.parse(localStorage.getItem('user'))
      if(userData)
         setUser(userData)
    },[])

    const login=(userData)=>{
       setUser(userData) 
       localStorage.setItem('user',JSON.stringify(userData))
    }

    const logout=()=>{
        setUser(null);
        localStorage.clear()
    }

    const isLoggedIn=()=>{
        if(user)
            return true;
        return false;
    }

    return <LoginContext.Provider value={{user,login,logout,isLoggedIn}}>
        {children}
    </LoginContext.Provider>
}