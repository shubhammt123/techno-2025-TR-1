import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const UnprotectedRoute = () => {
    const [auth , setAuth] = useState(true);
    const [role , setRole] = useState("CUSTOMER");

    const navigate = useNavigate();
    useEffect(()=>{
        if(auth){
        navigate("/home");
    }
    },[]);
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default UnprotectedRoute