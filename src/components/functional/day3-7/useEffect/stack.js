import React, {  Suspense } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import Homescreen from '../../day1-7/screens/home-screen'

import Aboutscreen from '../../day1-7/screens/about-screen'
import Contactscreen from '../../day9-7/contact-screen'
import Invalidscreen from '../../day1-7/screens/invalid-screen'
import ProductdetailScreen from '../../day1-7/screens/product-detailScreen'
import Doctorsscreen from '../../day1-7/screens/doctors-screen'
import Engineerscreen from '../../day1-7/screens/engineer-screen'
import Homescreen from '../../day9-7/homeScreen'

const LazySetting = React.lazy(() => import('../../day1-7/screens/settings-screen'));

export default function Stack() {
  return (
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
  )
}