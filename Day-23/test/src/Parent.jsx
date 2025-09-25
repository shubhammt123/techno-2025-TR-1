import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Parent = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <p>All right reserved</p>
    </div>
  )
}

export default Parent