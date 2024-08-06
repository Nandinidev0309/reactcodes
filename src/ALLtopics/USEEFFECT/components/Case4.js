import React, { useEffect, useState } from 'react'

function Case() {
    const[data,setData]=useState(0)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setData(data+1)
        },1000)

       return()=>{
        clearInterval (timer)
       }
    })
    
  return (
    <div>
<h1> {data} time in seconds</h1>

    </div>
  )
}

export default Case