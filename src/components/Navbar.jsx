import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutUser = () => {
    localStorage.removeItem("user"); // Remove user data
    navigate("/Login"); // Redirect to login page
  };



  return (
    <nav className="bg-white shadow-md font-kulim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="HarvestBrew Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-green-900 ml-2">HarvestBrew</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-green-900 font-bold text-lg">
            <li className="hover:text-black">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/AboutUS">About Us</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/ContactUS">Contact Us</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/Shop">Shop</Link>
            </li>


          </ul>

          {/* Desktop Buttons change with user login - user eke data tynwa nm profile eka pennaw, 1ni () eka thule tyna eka pennawa naththm : eken else eka pennawa*/}


          {user ? (
            <UserDropdown user={user} logoutUser={logoutUser} />
          )
            : (<div className="hidden md:flex gap-10">


              <Link to="/Login">
                <button className="w-24 h-10 border border-green-900 text-[#21501a] font-bold rounded-full hover:bg-gray-600 hover:border-gray-600 hover:text-white transition">
                  Login
                </button>
              </Link>
              <Link to="/RegistrationForm">
                <button className="w-24 h-10 bg-green-900 text-white font-medium rounded-full hover:bg-gray-600 transition">
                  Sign Up
                </button>
              </Link>
            </div>)}





          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-900 focus:outline-none"
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
                className="block px-4 py-2 text-green-900 hover:text-black horver:underline"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/AboutUS"
                className="block px-4 py-2 text-green-900 hover:text-black horver:underline"
              >
                About Us
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/ContactUS"
                className="block px-4 py-2 text-green-900 hover:text-black horver:underline"
              >
                Contact Us
              </Link>
            </li>
            <li className="border-b border-[#c2c9b6]">

            </li>
            <li className="border-b border-[#c2c9b6]">
              <Link
                to="/Login"
                className="block px-4 py-2 text-green-900 hover:text-black horver:underline"
              >
                Login
              </Link>
            </li>
            <li className="border-b border-[#c2c9b6]">
              <Link to="/Shop" className="block px-4 py-2 text-green-900 hover:bg-[#c2c9b6]">
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/RegistrationForm"
                className="block px-4 py-2 text-green-900 hover:bg-[#c2c9b6]"
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
