import React, { useState } from 'react'

const Login = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [formData , setFormData] = useState({
        userName : "",
        email : "",
        password : "",
        confirmPassword : "",
        contactNo : ""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData.confirmPassword)
        console.log(formData.password)
        if(formData.confirmPassword !== formData.password){
            alert("Password and confirm password should be same");
            return;
        }
        console.log(formData)
    }

    const handleChange = (e)=>{
       setFormData({...formData , [e.target.name] : e.target.value});
    }


    return (
        <div className='form' style={{ height: isSignup ? "85%" : "60%" }}>

            <h1 style={{ textAlign: "center", color: "grey" }}>{isSignup ? "Welcome , Signup!" : "Welcome Back, Login!"}</h1>

            <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }} onSubmit={handleSubmit}>

                {isSignup && <input type="text" placeholder='User Name' name='userName' onChange={handleChange} value={formData.userName} />}

                <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formData.email} />

                <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formData.password} />


                {isSignup && <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange} value={formData.confirmPassword} />}

                {isSignup && <input type='text' placeholder='Contact No.' name='contactNo' onChange={handleChange} value={formData.contactNo} />}

                <button>{isSignup ? "Signup" : "Login"}</button>

            </form>

            <div style={{ textAlign: "center", color: "gray" }}>
                {isSignup ? "Already have an account?" : "Don't have an account?"} <span style={{ color: "blue", cursor: "pointer" }} onClick={() => { setIsSignup(!isSignup);
                if(!isSignup){
                    setFormData({
                        userName : "",
                        email : "",
                        password : "",
                        confirmPassword : "",
                        contactNo : ""
                    });
                }else{
                    setFormData({
                        email : "",
                        password : "",
                    });
                }
                
                 }}>{isSignup ? "Login" : "Signup"}</span>
            </div>
        </div>
    )
}

export default Login