import { useState } from "react"


const CounterSwitch=()=>{
    const initialstate=0
    const [count,setCount]=useState(initialstate)

    function counterHandler(type,scale){
        switch (type) {
            case "decrement":
                if(count>0){
                    setCount((count)=>count-scale)
                }
                break;
            case "reset":
                setCount(0)
                break;
            case "increment":
                setCount((count)=>count+scale)
                break;
            default:
                break;
        }
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={()=>counterHandler("decrement",10)}>Decrement</button>
        <button onClick={()=>counterHandler("reset",10)}>Reset</button>
        <button onClick={()=>counterHandler("increment",10)}>Increment</button>
        </>
    )
}
export default CounterSwitch