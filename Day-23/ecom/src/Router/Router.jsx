import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import OpenRoutes from '../OpenRoutes'
import Product from '../openRoutes/Product'
import ProductById from '../openRoutes/ProductById'
import Cart from '../openRoutes/Cart'
import Wishlist from '../openRoutes/Wishlist'
import ProtectedRoutes from '../ProtectedRoutes'
import Orders from '../customer/Orders'
import SellerProduct from '../seller/SellerProduct'
import SellerOrder from '../seller/SellerOrder'
import UnprotectedRoute from '../UnprotectedRoute'
import AdminProduct from '../admin/AdminProduct'
import AdminUser from '../admin/AdminUser'
import AdminOrder from '../admin/AdminOrder'
import Dashboard from '../sellerAdmin/Dashboard'
import Profile from '../sellerAdminCustomer/Profile'
import Login from '../unprotectedRoutes/Login'
import Signup from '../unprotectedRoutes/Signup'
import Home from '../openRoutes/Home'
import About from '../openRoutes/About'

const Router = createBrowserRouter([
    {
        path : "/home",
        element : <OpenRoutes />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : "products",
                element : <Product />
            },
            {
                path  : "productbyid",
                element : <ProductById />
            },
            {
                path : "cart",
                element : <Cart />
            },
            {
                path : "wishlist",
                element : <Wishlist />
            },
            {
                path : "about",
                element : <About />
            }
        ]
    },
    {
        path : "/customer",
        element : <ProtectedRoutes allowedRole={["CUSTOMER"]} />,
        children : [
            {
                path : "orders",
                element : <Orders />
            }
        ]
    },
    {
        path : "/seller",
        element : <ProtectedRoutes allowedRole={["SELLER"]} />,
        children : [
            {
                path :  "sellerproduct",
                element : <SellerProduct />
            },
            {
                path :  "sellerorder",
                element : <SellerOrder />
            },
        ]
    },
    {
        path : "/admin",
        element : <ProtectedRoutes allowedRole={["ADMIN"]} />,
        children : [
            {
                path : "adminproduct",
                element : <AdminProduct />
            },
            {
                path : "adminuser",
                element : <AdminUser />
            },
            {
                path : "adminorder",
                element : <AdminOrder />
            }
        ]
    },
    {
        path : "/selleradmin",
        element :  <ProtectedRoutes allowedRole={["SELLER" , "ADMIN"]} />,
        children : [
            {
                path : "dashboard",
                element : <Dashboard />
            }
        ]
    },
    {
        path :  "/selleradmincustomer",
        element : <ProtectedRoutes allowedRole={["SELLER" , "ADMIN" , "CUSTOMER"]} />,
        children : [
            {
                path : "profile",
                element : <Profile />
            }
        ]
    },
    {
        path : "/auth",
        element  : <UnprotectedRoute />,
        children : [
            {
                path : "login",
                element : <Login />
            },
            {
                path : "signup",
                element : <Signup />
            }
        ]
    },
    {
        path  : "*",
        element : <Navigate to="/home" />
    }
])

export default Router

// open routes -  /product , /productbyid , /cart ,/wishlist

// customer - /orders,

// seller -  /seller-orders , /seller-products

// admin - /admin-users , /admin-orders , /admin-products

// seller & admin - /dashboard

// seller , admin , customer - /profile

// only without logged in - /login , /signup