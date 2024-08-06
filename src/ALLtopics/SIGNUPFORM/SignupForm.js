import React, { useState } from 'react'

function SignupForm() {
    const[data,setData]=useState({
        username:'',
        email:'',
        password:'',
        currentPassword:''
    })
    const{username,email,password,currentPassword}=data
    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password === currentPassword){
            console.log(data);
        }
        else{
            console.log("passwords or not correct CHECK ONCE");
        }
        
    }
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleChange} placeholder='username'/> <br/>
                <input type="email" name="email" value={email} onChange={handleChange} placeholder='email'/> <br/>
                <input type="password" name="password" value={password} onChange={handleChange} placeholder='password'/> <br/>
                <input type="password" name="currentPassword" value={currentPassword} onChange={handleChange} placeholder='currentpassword'/> <br/>
                <input type="submit" name="submit" />
            </form>
        </center>
    </div>
  )
}

export default SignupForm