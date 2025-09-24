import React, { useState } from 'react'

const Login = () => {

    const [isSignup , setIsSignup] = useState(false);

    console.log(isSignup)
  return (
    <div className='form' style={{height : isSignup ? "85%" : "60%"}}>
        <h1 style={{textAlign : "center" , color : "grey"}}>{isSignup ? "Welcome , Signup!" : "Welcome Back, Login!"}</h1>
        <form style={{display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems  : "center", gap  : "20px"}}>
            {isSignup && <input type="text" placeholder='User Name' />}
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            {isSignup && <input type='password' placeholder='Confirm Password' />}
            {isSignup && <input type='text' placeholder='Contact No.' />}
            <button>{isSignup ? "Signup" : "Login" }</button>
        </form>
        <div style={{textAlign : "center" , color : "gray"}}>{isSignup ? "Already have an account?" : "Don't have an account?"} <span style={{color : "blue" , cursor : "pointer"}} onClick={()=>{setIsSignup(!isSignup)}}>{isSignup ? "Login" : "Signup"}</span></div>
    </div>
  )
}

export default Login