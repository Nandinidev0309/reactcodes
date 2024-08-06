import React from 'react'
import Logo from "../../PICS/song.mp3"

function Audio() {
  return (
    <div>
       <center>
        <audio height={300} width={300} controls muted>
            <source src={Logo} type='audio/mp3'/>
        </audio>
        </center>
    </div>

  )
}

export default Audio