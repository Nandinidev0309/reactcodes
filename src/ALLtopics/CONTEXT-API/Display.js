import React, { useContext, useState } from 'react'
import { store } from '../../App'

function Display() {
    const[data,setData]=useContext(store)
    const[name,setName]=useState("")
    const handleSubmit=(e)=>{
      e.preventDefault()
      setData([...data,{brand:name}])
    }
  return (
    <div>
        {data.map((each)=><h2>{each.brand}</h2>)}
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='brand'/>
        <input type='submit' value={"Add"}/>
    </form>
    </div>
    
  )
}

export default Display



// APP
// import { createContext, useState } from "react";
// import Display from "./ALLtopics/CONTEXT-API/Display";
// import Count from "./ALLtopics/CONTEXT-API/Count";
// export const store=createContext()
// const App = () => {
//   const[data,setData]=useState([{
//     id:1,
//     brand:"Nokia"
//   },
//   {
//     id:2,
//     brand:"Realme"
//   },
//   {
//     id:3,
//     brand:"one-plus"
//   },
//   {
//     id:4,
//     brand:"i-phone"
//   },
//   {
//     id:5,
//     brand:"samsung"
//   },
// ])

//   return (
//     <div>
//       <store.Provider value={[data,setData]}>
   
//    <Count/>
//    <Display/>
//    {/* <button onClick={()=>setData(data+1)}>Increment</button> */}
//    </store.Provider> 
//    )
//   }
//    export default App