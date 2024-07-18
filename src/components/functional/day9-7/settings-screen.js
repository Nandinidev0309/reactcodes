import React, { useContext } from 'react'
import Navbar from '../day1-7/navbar/navbar'
import { profileWrapper } from './stack'

export default function Settingsscreen() {
  const dataShared=useContext(profileWrapper)

  const changeCount=()=>{
      dataShared.changeCounter()
      
  }
  const changeCounter=()=>{
    if(dataShared.count > 0){
      dataShared.decrementCounter()
    }
    
  }
  return (
    <div>
        <Navbar/>
      <h2>Welcome to Settings screen current count {dataShared.count}</h2>
      <button  onClick={changeCount} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">Increment</button>
      <button  onClick={changeCounter} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">Decrement</button>
    </div>
  )
}
