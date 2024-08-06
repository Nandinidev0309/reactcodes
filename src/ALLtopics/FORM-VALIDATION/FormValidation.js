import React, { useState } from 'react'

function FormValidation() {
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
        if(username.length<=5){
            alert("username must be ATLEAST 5 characters")
        }
        else if(password !== currentPassword){
            alert("passwords or not MATCHING");
        }
        else{
            console.log(data);
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
                {password!==currentPassword?<p style={{color:"red"}}>passwords are not matching</p>:null}
                <input type="submit" name="submit" />
            </form>
        </center>
    </div>
  )
}

export default FormValidation