import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Home from './Home'
import About from './About'
import Parent from './Parent'
import NotFound from './NotFound'
import Profile from './Profile'

const Router = createBrowserRouter([

  // {
  //   path : "/dashboard",
  //   element : <Dashboard />,
  //   children : [
  //     {
  //       path : "profile",
  //       element : <Profile />
  //     }
  //   ]
  // },
  // {
  //   path : "/home",
  //   element : <Home />
  // }

  // {
  //   element : <Parent />,
  //   children : [
  //     {
  //       path : "/dashboard",
  //       element : <Dashboard />
  //     },
  //     {
  //       path : "/home",
  //       element : <Home />
  //     },
  //     {
  //      path : "/login",
  //      element : <Login />
  //     },
  //     {
  //       path : "/about",
  //       element : <About />
  //     }
  //   ]
  // },
  // {
  //   path : "*",
  //   element : <Navigate to="/home" />
  // }
  
  // {
  //   path : "/dashboard",
  //   element : <Dashboard />
  // },
  // {
  //   path : "/login",
  //   element : <Login />
  // },
  // {
  //   path : "/home",
  //   element : <Home />
  // },
  // {
  //   path : "/about",
  //   element : <About />
  // }
])

export default Router