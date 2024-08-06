import React, { useEffect, useRef, useState } from 'react'

function Example() {
    const[data,setData]=useState("")
    const count=useRef(0)
    useEffect(()=>{
count.current=count.current+1 
    })
  return (
    <div>
        <input type="text" onChange={e=>setData(e.target.value)}/>
        <h1>Name : {data}</h1>
        <h2>Renders :{count.current}</h2>
    </div>
  )
}

export default Example