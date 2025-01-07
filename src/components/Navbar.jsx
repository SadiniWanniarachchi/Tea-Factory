import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="HarvestBrew Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-[#21501a] ml-2">HarvestBrew</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-[#21501a] font-medium">
            <li className="hover:text-gray-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/AboutUS">About Us</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/ContactUS">Contact Us</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/Shop">Shop</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#21501a] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-white border-t border-gray-200">
            <li className="border-b border-gray-200">
              <Link
                to="/"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/AboutUS"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                About Us
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/ContactUS"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/Shop"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Shop
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/Login"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/RegistrationForm"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
