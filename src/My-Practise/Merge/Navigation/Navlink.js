import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div style={{background:"black", padding:"20px"}}>
        <nav style={{textAlign:"right",fontWeight:"bold", fontSize:"20px"}}>
        <Link to="/" style={{padding:"10px"}}>Homepage</Link>
       <Link to="/Recipe" style={{padding:"10px"}}>Recipe</Link>
       <Link to="/Country" style={{padding:"10px"}}>Country</Link>
        </nav>
    </div>
  )
}

export default Navbar