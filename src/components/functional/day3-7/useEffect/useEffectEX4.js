import React, { useEffect } from 'react'

function UseEffectEX4() {

    useEffect(()=>{
        window.addEventListener("mousemove",captureMove)

        return(()=>{
            window.removeEventListener("mousemove",captureMove)
        })
    },[])

    const captureMove=(event)=>{
        console.log(event.clientX, "X-Axis");
        console.log(event.clientY, "Y-Axis");
    }


  return (
    <div>useEffectEX4</div>
  )
}

export default UseEffectEX4