import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Homescreen from '../screens/home-screen'
import Aboutscreen from '../screens/about-screen'
import Contactscreen from '../screens/contact-screen'
import Settingsscreen from '../screens/settings-screen'
import Invalidscreen from '../screens/invalid-screen'
import ProductdetailScreen from '../screens/product-detailScreen'

export default function Stack() {
  return (
    <BrowserRouter>
    <Routes>
        {/* Stactic Routing */}
        <Route path="/" Component={Homescreen}/>
        <Route path="/about" Component={Aboutscreen}/>
        <Route path="/contact" Component={Contactscreen}/>
        <Route path="/setting" Component={Settingsscreen}/> 
        <Route path="/:location/:restaurentId/info" Component={ProductdetailScreen}/> 
        <Route path="*" Component={Invalidscreen}/>
    </Routes>
    </BrowserRouter>
  )
}
