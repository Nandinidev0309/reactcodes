import React, { useContext } from 'react'
import { store} from '../../App'

function ComponentA() {
    const[data,setData]=useContext(store)
  return (
    <div>ComponentA {data}</div>
  )
}

export default ComponentA




//....................  app.js
//  import { createContext, useState } from "react";



//  import ComponentA from "./ALLtopics/CONTEXT-API/ComponentA";
//  import ComponentB from "./ALLtopics/CONTEXT-API/ComponentB";
//  export const store=createContext()
// const App = () => {
//   const[data,setData]=useState(0)
//   return (
//     <div>
//       <store.Provider value={[data,setData]}>
   
//    <ComponentA/> 
//    <ComponentB/>
//    <button onClick={()=>setData(data+1)}>Increment</button>
//    </store.Provider>
//    )
// } 
// export default App