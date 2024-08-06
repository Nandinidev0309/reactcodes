import React, { useCallback, useState } from 'react'
import ButtonUseCallback from './Button'

function UseCallback() {
  const[age,setAge]=useState(10)
  const[salary,setSalary]=useState(1000)
  

  const handlerAge=useCallback(()=>{
    setAge(age+1)
},[age])

const handlerSalary=useCallback(()=>{
  setSalary(salary+100)
},[salary])
  return (
    <div>
        <h1>Age : {age}</h1>
        <h1>salary : {salary}</h1>
        <ButtonUseCallback onPress={handlerAge} text={"increase-Age"}/>
        <ButtonUseCallback onPress={handlerSalary} text={"increase-salary"}/>
        
        {/* <button onClick={handlerAge}>Age increase</button> <br/>
       <button onClick={handlerSalary}>salary increase</button> <br></br> */}
       
    </div>
  )
}

export default UseCallback