import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-2 shadow-md">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HarvestBrew Logo" className="w-20 h-20" />
          <span className="text-2xl font-bold text-[#21501a]">HarvestBrew</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-20 text-[#21501a] font-medium">
          <li className="hover:text-[#5b5c5b] cursor-pointer">Home</li>
          <li className="hover:text-[#5b5c5b] cursor-pointer">About Us</li>
          <li className="hover:text-[#5b5c5b] cursor-pointer">Contact Us</li>
          <li className="hover:text-[#5b5c5b] cursor-pointer">Shop</li>
        </ul>
      

        <div className="hidden md:flex space-x-4">
          <button className="w-24 h-10 border border-[#21501a] text-[#21501a] font-medium rounded-full hover:bg-[#17310e] hover:text-white transition">
            Login
          </button>
          <button className="w-24 h-10 bg-[#21501a] text-white font-medium rounded-full hover:bg-[#17310e] transition">
           Sign Up
          </button>
        </div>
        
      </nav>
  );
};

export default Navbar;
