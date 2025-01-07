import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ShopPage from "./components/ShopPage";
import LandingPage from "./components/LandingPage";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
};

export default App;
