import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({allowedRole}) => {
    const [auth , setAuth] = useState(true);
    const [role , setRole] =  useState("CUSTOMER");

    const naviagte  = useNavigate();

    useEffect(()=>{
        if(!auth){
        naviagte("/auth/login")
    }
    },[]);

    useEffect(()=>{
        if(!allowedRole.includes(role)){
        naviagte("/home")
    }
    },[]);


    console.log(allowedRole)

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoutes