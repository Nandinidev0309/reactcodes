
import { useContext } from 'react'
import Navbar from '../day1-7/navbar/navbar'
// import BothCombineEX12 from './bothCombineEX1&2'
// import BothCombineEX21 from './bothCombineEX2&1'
// import UseEffectEX4 from '../day3-7/useEffect/useEffectEX4'
import { profileWrapper } from './stack'
// import UseEffectEX1 from './useEffectEX1'
// import UseEffectEX2 from './useEffectEX2'




export default function Homescreen() {
    const sharedData=useContext(profileWrapper)
    console.log(sharedData,"sharedDataaaaaaaaaaaaaaaaa...............");

  return (
    <div>
       <Navbar/>
      <h2>Welcome to Home screen {sharedData.profileInfo.name} {sharedData.profileInfo.salary}</h2>
      {/* <UseEffectEX2/>
      <UseEffectEX1/> */}
      {/* <BothCombineEX12/> 
      <BothCombineEX21/> */}
      {/* <UseEffectEX4/> */}
    </div>
  )
}