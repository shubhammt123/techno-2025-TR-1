import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({allowedRole}) => {
    // const {auth , role} = useContext(AuthContext)
    const {auth , role}  = useSelector((state)=>state.auth);
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