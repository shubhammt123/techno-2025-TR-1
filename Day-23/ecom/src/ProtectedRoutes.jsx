import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext';
import Navbar from './Navbar';

const ProtectedRoutes = ({allowedRole}) => {
    const {auth , role} = useContext(AuthContext)

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
      <Navbar />
        <Outlet />
    </div>
  )
}

export default ProtectedRoutes