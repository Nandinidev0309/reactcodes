import { useState } from "react"


function NameChange() {
    const[name,setName]=useState("Nandini")
    const handleName=()=>{
        setName("BunnyReddy")
    }
  return (
    <div>
      <h1 >hello {name}</h1>
      <button onClick={handleName}>Click Me ONCE</button>
    </div>
  )
}

export default NameChange
