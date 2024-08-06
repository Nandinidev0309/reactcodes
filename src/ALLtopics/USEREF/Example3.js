import React, { useRef } from 'react'

function Example3() {
const data=useRef()
const handle=()=>{
    console.log(data.current);
    data.current.style.color="red";
    data.current.focus()

    
}
  return (
    <div>
        <input type="text" ref={data}/> <br/>
        <button onClick={handle}>click</button>
    </div>
  )
}

export default Example3