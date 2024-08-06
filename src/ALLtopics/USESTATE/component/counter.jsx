import { useState } from "react";

function States() {
 const [counter,setCounter]=useState(0)
  const handleDec=()=>{
    if(counter>0){
        setCounter(counter-1)
    }
   
  }
  const handleRes=()=>{
    setCounter(0)
  }
  const handleInc=()=>{
    setCounter(counter+1)
  }

  return (
    <div>
        <h1>{counter} </h1>
      <button onClick={handleDec}>Decrement</button> 
      <button onClick={handleRes}>Reset</button>  
      <button onClick={handleInc}>Increment</button>
    </div>
  );
}

export default States;
