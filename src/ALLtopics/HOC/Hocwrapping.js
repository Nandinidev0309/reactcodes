import React from 'react'
import hocFunction from './HocFunction'

function Hocwrapping(props) {
  return (
    <div>
       <h1>Welcome user.......{props.name}</h1>
    </div>
  )
}

export default hocFunction(Hocwrapping)