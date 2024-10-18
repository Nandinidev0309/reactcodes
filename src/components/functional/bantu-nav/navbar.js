// import React from "react";
// import {NavLink } from "react-router-dom";
// import "./navbar.css"

// const NavBar=()=>{
// const linkstyle={
//     textDecoration:'none',
//  }

// const liststyle={
//     margin:10
// }

//     return(
//         <div>
// <nav className="navbar navbar-expand-sm  navbar-dark">
//   <div className="container-fluid">
//     {/* <NavLink className="navbar-brand" href="#">
//       Logo
//     </NavLink> */} 
//     <NavLink to="/" className="navbar-brand">
//   Logo
// </NavLink>
//     {/* <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#collapsibleNavbar"
//     >
//       <span className="navbar-toggler-icon" />
//     </button> */}

//     <div className="collapse navbar-collapse" id="collapsibleNavbar">
//       <ul className="navbar-nav">
//         <li className="nav-item" style={liststyle} key="home">
//           {/* <a className="nav-link" href="#">
//             Home
//           </a> */}
//           <NavLink to={"/"} style={linkstyle} >Home</NavLink>
//         </li>

//         <li className="nav-item" style={liststyle} key="skills">
//           {/* <a className="nav-link" href="#">
//             Skills
//           </a> */}
//           <NavLink to={"/skills"} style={linkstyle} >Skills</NavLink>
//         </li>
        
//         <li className="nav-item" style={liststyle} key="projects">
//           {/* <a className="nav-link" href="#">
//             Project
//           </a> */}
//           <NavLink to={"/projects"} style={linkstyle}>Projects</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// </div>
//     );
// }

// export default NavBar;  



// ................................................... 

import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

function NavBar() {
  const linkstyle={
    textDecoration:'none'
 }
 const liststyle={
    margin:10
}

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" >
      Navbar
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" style={liststyle}>
          {/* <a className="nav-link active" aria-current="page" href="#">
            Home
          </a> */}
           <NavLink to={"/"} style={linkstyle} >Home</NavLink>
        </li>
        <li className="nav-item" style={liststyle}>
          {/* <a className="nav-link" href="#">
            skills
          </a> */}
           <NavLink to={"/skills"} style={linkstyle} >Skills</NavLink>
        </li>
        <li className="nav-item" style={liststyle}>
          {/* <a className="nav-link" href="#">
            project
          </a> */} 
           <NavLink to={"/projects"} style={linkstyle}>Projects</NavLink>
         
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar


