import React, { useEffect, useState } from 'react'

function UseEffectEX2() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect(()=>{
      console.log("Use Effect Executing");
    },[count1,count2])

    const countHandler1=(()=>{
        setCount1(count1+1)
    })

    const countHandler2=(()=>{
        setCount2(count2+1)
    })

  return (
    <div>
        <h2>Count{count1}</h2>
        <button onClick={countHandler1}>Increase count 1</button>

        <h2>Count{count2}</h2>
        <button onClick={countHandler2}>Increase count 2</button>
    </div>
  )
}

export default UseEffectEX2