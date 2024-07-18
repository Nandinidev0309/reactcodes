
import { useContext } from 'react'
import Navbar from '../day1-7/navbar/navbar'
import { profileWrapper } from '../day9-7/stack'
import UseReducer from './useReducer';





export default function Homescreen() {
    const sharedData=useContext(profileWrapper)
    console.log(sharedData,"sharedDataaaaaaaaaaaaaaaaa...............");

  return (
    <div>
       <Navbar/>
       <UseReducer/>
      <h2>Welcome to Home screen {sharedData.profileInfo.name} {sharedData.profileInfo.salary}</h2>
      
    </div>
  )
}