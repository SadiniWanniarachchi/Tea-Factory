import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-green-600 text-white px-4 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo or Brand Name */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold">Tea Factory Management System</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:bg-green-500 px-4 py-2 rounded-lg transition duration-200">Home</Link>
          <Link to="/about" className="hover:bg-green-500 px-4 py-2 rounded-lg transition duration-200">About</Link>
          <Link to="/services" className="hover:bg-green-500 px-4 py-2 rounded-lg transition duration-200">Services</Link>
          <Link to="/contact" className="hover:bg-green-500 px-4 py-2 rounded-lg transition duration-200">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-green-700 text-white px-4 py-2 space-y-4`}
      >
        <Link to="/" className="block px-4 py-2 rounded-lg">Home</Link>
        <Link to="/about" className="block px-4 py-2 rounded-lg">About</Link>
        <Link to="/services" className="block px-4 py-2 rounded-lg">Services</Link>
        <Link to="/contact" className="block px-4 py-2 rounded-lg">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
