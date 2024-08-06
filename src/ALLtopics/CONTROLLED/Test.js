import React from 'react'

function Test(props) {
  return (
    <div>
        <center>
            <input type="text" onChange={props.handler}/>
        </center>
    </div>
  )
}

export default Test