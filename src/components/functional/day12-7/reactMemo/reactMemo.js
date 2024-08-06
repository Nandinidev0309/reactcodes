import React, { useEffect, useState } from 'react'

function ReactMemo() {
    const[x, setX]=useState("Nandini")
    const[y, setY]=useState("Reddy")

    useEffect(() => {
        console.log("x:", x);
    }, [x]);

    useEffect(() => {
        console.log("y:", y);
    }, [y]);

    const xButton=(event)=>{
        setX(event.target.value)
        
    }
    const yButton=(event)=>{
        setY(event.target.value)
       
    }
  return (
    <>
    {x} <br/>
    <label htmlFor='nn'>X-Button:</label>
     <input type='text' id="nn" onChange={xButton}/> <br/>
     <label htmlFor='nm'>Y-Button:</label>
     <input type='text' id="nm" onChange={yButton}/>
    
    </>
  )
}

export default React.memo(ReactMemo)