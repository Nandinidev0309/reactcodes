import React, { useContext } from 'react'
import Navbar from '../day1-7/navbar/navbar'
import { Link, Outlet } from 'react-router-dom'
import { profileWrapper } from './stack'

export default function Contactscreen() {
  // const {name,salary}=useContext(profileWrapper)
  
  const profileInfos=useContext(profileWrapper)
  console.log(profileInfos);
  const changeName=()=>{
    profileInfos.changeName("Nandini")
  }

  return (
    <div>
        <Navbar/>
      {/* <h2>Welcome to Contact screen {name} </h2> */} 

      <h2>welcome to Contact screen {profileInfos.profileInfo.name}</h2>
      <button onClick={changeName}>change name</button>
      <Link to="doctor">Doctors</Link>
      <Link to="engineer">Engineer</Link>
      <Outlet/>
    </div>
  )
}
