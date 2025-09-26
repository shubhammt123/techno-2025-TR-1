import React, { createContext, useState } from 'react'

const CountContext = createContext();

export const CountProvider = ({children})=>{
    const [count , setCount] = useState(0);


    return (
        <CountContext.Provider value={{count , setCount}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContext