import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

  
    <nav className="flex justify-between items-center px-6 py-2 shadow-md">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HarvestBrew Logo" className="w-20 h-20" />
          <span className="text-2xl font-bold text-[#21501a]">HarvestBrew</span>
        </div>

        {/* Navigation Links */}
        {/* Navigation Links */}
  <ul className="hidden md:flex space-x-20 text-[#21501a] font-medium">
  <li className="hover:text-gray-600 hover:underline cursor-pointer">Home</li>

  <Link to="/AboutandContactUS">
    <li className="hover:text-gray-600 hover:underline cursor-pointer">About Us</li>
  </Link>

  <Link to="/AboutandContactUS">
    <li className="hover:text-gray-600 hover:underline cursor-pointer">Contact Us</li>
  </Link>

  <li className="hover:text-gray-600 hover:underline cursor-pointer">Shop</li>
</ul>

      

  <div className="hidden md:flex gap-8">

  <Link to="/Login">
  <button className="w-24 h-10 border border-[#21501a] text-[#21501a] font-bold rounded-full hover:bg-gray-600 hover:border-gray-600 hover:text-white transition">
    Login
  </button>
  </Link>

  <Link to="/RegistrationForm">
    <button className="w-24 h-10 bg-[#21501a] text-white font-medium rounded-full hover:bg-gray-600 transition">
      Sign Up
    </button>
  </Link>
 </div>
        
      </nav>
  );
};

export default Navbar;
