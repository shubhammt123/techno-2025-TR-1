import React, { createContext, useState } from 'react'

const AuthContext =createContext();

export const AuthProvider =  ({children})=>{
    const [auth , setAuth ]= useState(false);
    const [role , setRole] = useState(null);

    // console.log(auth)
    return (
        <AuthContext.Provider value={{auth , role , setAuth , setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext