import { useState } from "react"

const useCustom=(initial,scale)=>{
  const[value,setValue]=useState(initial,scale)

  const incrementHandler=()=>{
    setValue(value+scale)
  }

  const decrementHandler=()=>{
    setValue(value-scale)
  }

  const resetHandler=()=>{
    setValue(0)
  }

  return [value,incrementHandler,decrementHandler,resetHandler]
}

export default useCustom