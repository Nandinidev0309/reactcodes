import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Invalidscreen from "../../components/functional/day1-7/screens/invalid-screen";

function ForNavigate() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:location/:restaurent/info" element={<Footer/>} />
          <Route path="*" element={<Invalidscreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ForNavigate;
