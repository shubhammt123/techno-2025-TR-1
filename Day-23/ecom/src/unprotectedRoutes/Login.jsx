import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {

    const [formData , setFormData] = useState({
        email : "",
        password : "",
    });

    const {auth ,setAuth , role , setRole} = useContext(AuthContext);
    console.log(auth)
    console.log(role)
    const handleSubmit = (e)=>{
        e.preventDefault();  
        console.log(formData);
        const role = prompt("Enter Role");
        setRole(role);
        setAuth(true);
        if(role ===  "SELLER" || role === "ADMIN"){
          navigate("/selleradmin/dashboard");
        }else{
          navigate("/home");
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