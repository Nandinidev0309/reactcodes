import React from 'react'
import Navbar from '../navbar/navbar'
import { Link, Outlet } from 'react-router-dom'

export default function Contactscreen() {
  return (
    <div>
        <Navbar/>
      <h2>Welcome to Contact screen</h2>
      <Link to="doctor">Doctors</Link>
      <Link to="engineer">Engineer</Link>
      <Outlet/>
    </div>
  )
}
