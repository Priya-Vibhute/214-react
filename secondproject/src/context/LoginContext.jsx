const { createContext, useEffect, useState } = require("react");

export const LoginContext=createContext()

export const LoginProvider=({children})=>{

    const [user,setUser]=useState(null)

    useEffect(()=>{},[])

    const login=()=>{}

    const logout=()=>{}

    const isLoggedIn=()=>{}

    return <LoginContext.Provider value={{}}>
        {children}
    </LoginContext.Provider>
}