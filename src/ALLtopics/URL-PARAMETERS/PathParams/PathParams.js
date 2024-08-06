import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../../ROUTER/Navbar";
import Home from "./home";


function Navigate() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path="/contact/:name" element={<Home />} />
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigate