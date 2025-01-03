import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes> {/* Define routes here */}
          <Route path="/" element={<Hero />} /> {/* Add default route */}
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>
        <Card />
        <Footer />
      </div>
  );
};

export default App;
