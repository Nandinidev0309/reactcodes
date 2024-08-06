import { useState } from "react"

const Usestate=()=>{
    const a=1
    const x=1
    const[data,setData]=useState(x)
   
    const handleData=()=>{
        setData(data+1)
    }
    const handleDataa=()=>{
       console.log(a+1);
    }


    return(
        <>
        {a} <br/>
        {data} <br/>
        <h1>hie</h1>
        <button onClick={handleDataa}>Click Me once {a}</button>  

        <button onClick={handleData}>Click Me once {data}</button>  <br/>
        </>
    )
}
export default Usestate