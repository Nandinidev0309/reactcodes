import React, { useState } from 'react'

function Loginform() {
const[data,setData]=useState({
    username:'',
    password:''
})
const{username,password}=data
const handleChange=(event)=>{
    setData({...data,[event.target.name]:[event.target.value]})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data);
}
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleChange}/> <br/>
                <input type="text" name="password" value={password} onChange={handleChange}/> <br/>
                <input type="submit" name="submit" />
            </form>
        </center>
    </div>
  )
}

export default Loginform