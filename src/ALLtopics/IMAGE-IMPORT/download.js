import React from 'react'
import Logo from "../../PICS/wallpic.jpg"

function Download() {
  return (
    <div>
        <img src={Logo} alt={Logo} height={100} width={100}/>  <br></br>
        
        <a href={Logo} download="Thumbnail" >for thumbnails download</a>

    </div>
  )
}

export default Download