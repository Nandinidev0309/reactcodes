import React from 'react'
import Logos from "../../PICS/Animation.mp4"

function Video() {
  return (
    <div>
         <center>
        <video height={300} width={300} controls muted download>
            <source src={Logos}></source>
        </video>
        </center>
    </div>
  )
}

export default Video