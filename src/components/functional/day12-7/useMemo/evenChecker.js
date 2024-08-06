import React, { useMemo, useState } from 'react'

function EvenChecker() {
    const[counter1,setCounter1]=useState(0)
    const[counter2,setCounter2]=useState(0)
    const [Login, setLogin] = useState(false);

    const handlerCounter1=()=>{
        setCounter1(counter1+1)
    }
    const handlerCounter2=()=>{
        setCounter2(counter2+1)
    }


    const isEven=useMemo(()=>{
        console.log("even executing");
        var res=""
        for(let i=0;i<=1000000;i++){ 
            res=res+i
                
        }
        return counter1%2===0?"Even":"Odd" 
         
    },[counter1])

  return (
    <div>
        <h1>Even Checker</h1>
        <h1> counter- {counter1} - {isEven}</h1>
        <h1> counter- {counter2}</h1>
        <button onClick={handlerCounter1}>Increase-Counter1</button> <br/>
        <button onClick={handlerCounter2}>Increase-Counter2</button> <br></br>
        <button onClick={()=>setLogin(!Login)}>Change Login</button>

        {Login?<h1>welcome Login</h1>:<h1>please Login</h1>}
    </div>
  )
}

export default EvenChecker