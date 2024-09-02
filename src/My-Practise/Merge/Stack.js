import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipeTask from '../RecipeTask/RecipeTask'
import CountryTask from '../CountryTask/CountryTask'
import Homepage from './Pages/Homepage'
import Invalid from './Pages/Invalid'
import Navbar from './Navigation/Navlink'

function Stack() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
    <Routes>
        {/* Stactic Routing */}
        
        <Route path="/" Component={Homepage}/>
        <Route path="/Recipe" Component={RecipeTask}/>
        <Route path="/Country" Component={CountryTask}/>
        <Route path="*" Component={Invalid}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Stack