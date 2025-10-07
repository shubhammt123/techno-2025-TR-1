import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    
    const [formData , setFormData] = useState({
        email : "",
        password : "",
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.confirmPassword !== formData.password){
            alert("Password and confirm password should be same");
            return;
        }
        console.log(formData)
    }

    const handleChange = (e)=>{
       setFormData({...formData , [e.target.name] : e.target.value});
    }

    const navigate = useNavigate();


    return (
        <div className='form' style={{ height:"85%"  }}>

            <h1 style={{ textAlign: "center", color: "grey" }}>Welcome , Signup!</h1>

            <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }} onSubmit={handleSubmit}>

                <input type="text" placeholder='User Name' name='userName' onChange={handleChange} value={formData.userName} />

                <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formData.email} />

                <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formData.password} />


                <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange} value={formData.confirmPassword} />

                <input type='text' placeholder='Contact No.' name='contactNo' onChange={handleChange} value={formData.contactNo} />

                <button>Signup</button>

            </form>

            <div style={{ textAlign: "center", color: "gray" }}>
                Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={()=>{
                  navigate("/auth/login")
                }}>Login</span>
            </div>
        </div>
    )
}

export default Signup