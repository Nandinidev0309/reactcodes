import React, { useMemo, useState } from 'react'

function Example() {
    const[number,setNumber]=useState(0)
    const[dark,setDark]=useState(false)

    const style={
        backgroundColor :dark?"black":"white",
        color :dark?"white":"black",

    }

    const cNumber=useMemo(()=>{
        return calculation(number)
    },[number])
    
  return (
    <div style={style}>
       
        <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        <h2>{cNumber}</h2>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}



export default Example

function calculation(num){
    console.log("logo");
    
    for(let i=0;i<1000000000;i++){}
    return num
}
