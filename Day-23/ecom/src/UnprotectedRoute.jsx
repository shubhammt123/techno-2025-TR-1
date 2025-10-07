import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext';
import Navbar from './Navbar';

const UnprotectedRoute = () => {

    const {auth} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(auth){
        navigate("/home");
    }
    },[]);
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
        
    </div>
  )
}

export default UnprotectedRoute