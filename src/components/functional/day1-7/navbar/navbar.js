import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {

    const Linkstyle={
        textDecoration:"none",
    }
    const liststyle={
        margin:10
    }

  return (
   
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={liststyle}>
        {/* <a className="nav-Link active" href="#">
         Home
        </a> */}
        <NavLink to={"/"} style={Linkstyle}>Home</NavLink>
      </li>
      <li className="nav-item" style={liststyle}>
       <NavLink to={"/about"} style={Linkstyle}>About </NavLink>
      </li>
      <li className="nav-item" style={liststyle}>
        <NavLink to={"/Contact"} style={Linkstyle}> Contact </NavLink>
      </li>
      <li className="nav-item" style={liststyle}>
        <NavLink to={"/setting"} style={Linkstyle}> Settings </NavLink>
      </li>
     
    </ul>
  </div>
</nav>
   
  )
}
