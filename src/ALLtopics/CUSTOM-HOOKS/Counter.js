import React from 'react'
import useCustom from './Function'

function Counter() {
    const[value,incrementHandler,decrementHandler,resetHandler]=useCustom(10,10)
    const[age,incrementage,decrementage]=useCustom(25,1)
    const[salary,incrementsalary,decrementsalary]=useCustom(10000,100)

  return (
    <div>
        <center>
        <h2>{value}</h2>
        <button onClick={decrementHandler}>COUNT-Decrement</button>
        <button onClick={resetHandler}>COUNT-Reset</button>
        <button onClick={incrementHandler}>COUNT-Increment</button> 
        <hr/>
        <h2>{age}</h2>
        <button onClick={decrementage}>AGE-Decrement</button>  
        <button onClick={incrementage}>AGE-Increment</button>
        <hr/>
        <h2>{salary}</h2>
        <button onClick={decrementsalary}>SALARY-Decrement</button>
        <button onClick={incrementsalary}>SALARY-Increment</button> 
        </center>
        
    </div>
  )
}

export default Counter