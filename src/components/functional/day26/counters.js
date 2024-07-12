import { useState } from "react"


const Counter=()=>{
    const initialstate=10
    const [count,setCount]=useState(initialstate)

    const incrementButton=()=>{
        setCount((count)=>count+1)
        // setCount((count)=>count+1)
        // setCount(count+1)

    }
    const decrementButton=()=>{
        if(count>0){
            setCount((count)=>count-1)
        }
    }
    const resetButton=()=>{
        setCount(0)
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={decrementButton}>Decrement</button>
        <button onClick={resetButton}>Reset</button>
        <button onClick={incrementButton}>Increment</button>
        </>
    )
}
export default Counter