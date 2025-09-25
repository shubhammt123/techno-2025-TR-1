import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Home from './Home'
import About from './About'
import Parent from './Parent'

const Router = createBrowserRouter([
  {
    element : <Parent />,
    children : [
      {
        path : "/dashboard",
        element : <Dashboard />
      },
      {
        path : "/home",
        element : <Home />
      },
      {
       path : "/login",
       element : <Login />
      },
      {
        path : "/about",
        element : <About />
      }
    ]
  },
  
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