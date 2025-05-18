import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contacus";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/reviews" element={<Reviews />} /> 
      
    </Routes>
  );
}

export default App;
//navigate wena pages tike path ekl //
// route path ek hdal denne app jsx eke