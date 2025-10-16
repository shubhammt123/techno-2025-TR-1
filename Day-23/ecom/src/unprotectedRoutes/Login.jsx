import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import axios from 'axios';

const Login = () => {

    const [formData , setFormData] = useState({
        email : "",
        password : "",
    });

    const dispatch = useDispatch();

    // const {auth ,setAuth , role , setRole} = useContext(AuthContext);

    const {auth , role} = useSelector((state)=>state.auth);
    const handleSubmit = async (e)=>{
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:3000/auth/login",formData);
        console.log(response.data.user.role)
        localStorage.setItem("auth",true);
        localStorage.setItem("role",response.data.user.role);
        dispatch(login(response.data.user.role));
        if(role ===  "SELLER" || role === "ADMIN"){
          navigate("/selleradmin/dashbo");
        }else{
          navigate("/home");
        }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e)=>{
       setFormData({...formData , [e.target.name] : e.target.value});
    }

    const navigate = useNavigate();


    return (
        <div className='form' style={{ height:"60%"} }>

            <h1 style={{ textAlign: "center", color: "grey" }}>Welcome Back, Login!</h1>

            <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }} onSubmit={handleSubmit}>


                <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formData.email} />

                <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formData.password} />

                <button>Login</button>

            </form>

            <div style={{ textAlign: "center", color: "gray" }}>
                Don't have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={()=>{
                  navigate("/auth/signup")
                }}>Signup</span>
            </div>
        </div>
    )
}

export default Login