import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <center>
        <ul>
        <Link to={"/"}><li>HOme</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <Link to={"/contact"}><li>Contact</li></Link>
  
        </ul>
        </center>
    </div>
  )
}

export default Navbar