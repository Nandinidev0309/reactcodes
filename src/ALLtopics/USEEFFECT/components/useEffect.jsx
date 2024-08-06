import { useState,useEffect } from "react"


function UseEffect() {
  const[data,setData]=useState(0)
  useEffect(()=>{

  },[])
  return (
    <div>
      <h2>user component {data}</h2>
    </div>
  )
}

export default UseEffect  