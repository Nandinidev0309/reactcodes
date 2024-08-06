import React, { useState } from 'react'

function Calculator() {
    const[input,setInput]=useState("")
    const[result,setResult]=useState(0)

    const handleChange=(event)=>{
        setInput(event.target.value)
    }
  return (
    <div>
        <center>
            <input type="text" name="input" value={input} onChange={handleChange} style={{margin:"10px"}}/>
            <br/>
            {/* {(input)} */}
            <button onClick={()=>setResult(eval(input))} style={{margin:"10px"}}>RESULT</button> 
            <h1 style={{margin:"10px"}}>Result : {result}</h1>
            <div >
                <button onClick={()=>setInput(input+'1')} style={{margin:"10px"}}>1</button>
                <button onClick={()=>setInput(input+'2')} style={{margin:"10px"}}>2</button>
                <button onClick={()=>setInput(input+'3')} style={{margin:"10px"}}>3</button>
                <button onClick={()=>setInput(input+'4')} style={{margin:"10px"}}>4</button>   
                <button onClick={()=>setInput(input+'5')} style={{margin:"10px"}}>5</button><br/>

                <button onClick={()=>setInput(input+'6')} style={{margin:"10px"}}>6</button>
                <button onClick={()=>setInput(input+'7')} style={{margin:"10px"}}>7</button>
                <button onClick={()=>setInput(input+'8')} style={{margin:"10px"}}>8</button>
                <button onClick={()=>setInput(input+'9')} style={{margin:"10px"}}>9</button> 
                <button onClick={()=>setInput(input+'0')} style={{margin:"10px"}}>0</button> <br/>

                <button onClick={()=>setInput(input+'+')} style={{margin:"10px"}}>+</button>
                <button onClick={()=>setInput(input+'-')} style={{margin:"10px"}}>-</button>
                <button onClick={()=>setInput(input+'*')} style={{margin:"10px"}}>*</button>
                <button onClick={()=>setInput(input+'/')} style={{margin:"10px"}}>/</button>
                <button onClick={()=>setInput('')} style={{margin:"10px"}}>clr</button> <br/>
            </div>
        </center>
    </div>
  )
}

export default Calculator