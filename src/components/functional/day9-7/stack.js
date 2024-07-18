import React, {  createContext, Suspense, useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import Homescreen from '../../day1-7/screens/home-screen'

import Aboutscreen from '../day1-7/screens/about-screen'
import Contactscreen from './contact-screen'
import Invalidscreen from '../day1-7/screens/invalid-screen'
import ProductdetailScreen from '../day1-7/screens/product-detailScreen'
import Doctorsscreen from '../day1-7/screens/doctors-screen'
import Engineerscreen from '../day1-7/screens/engineer-screen'
import Homescreen from '../day10-7/homeScreen'

const LazySetting = React.lazy(() => import('./settings-screen'));


export const profileWrapper=createContext()


export default function Stack() {
  const [profileInfo,setProfileInfo]=useState({
    name:"Nandu",
    salary:2000
  })

  const changeName=(name)=>{
    setProfileInfo({...profileInfo,name:name})
  }


  const[counter,setCounter]=useState(100);

  const changeCounter=()=>{
    setCounter(counter + 100)
  }


  const decrementCounter=()=>{
    setCounter(counter-100)
  }

  return (
    <profileWrapper.Provider value={{
      profileInfo:profileInfo,
      changeName,
      count:counter,
      changeCounter:changeCounter,
      decrementCounter:decrementCounter,
    }}>

    
    <BrowserRouter>
    <Routes>
       {/* Stactic Routing */}
       <Route path="/" element={<Homescreen/>}/>
        <Route path="/about" element={<Aboutscreen/>} />
        <Route path="/contact" element={<Contactscreen/>} >
            <Route path="doctor" element={<Doctorsscreen/>}/>
            <Route path="engineer" element={<Engineerscreen/>}/>
        </Route>
        <Route path="/setting" element={
          <Suspense fallback={<div>Loading </div>}>
            <LazySetting/>
          </Suspense>
        
        }/>
        <Route path="/:category/:productId/info" element={<ProductdetailScreen/>} /> 
        <Route path="*" element={<Invalidscreen/>} />
    </Routes>
    </BrowserRouter>
    </profileWrapper.Provider>
  )
}
