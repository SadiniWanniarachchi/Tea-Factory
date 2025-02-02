import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Navbar1 = () => {
  // State to toggle mobile menu and profile dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md font-kulim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="HarvestBrew Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-[#21501a] ml-2">HarvestBrew</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-[#21501a] font-medium">
            <li className="hover:text-gray-600">
              <Link to="/LandingPage">Home</Link>
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

          {/* Profile Dropdown - Desktop */}
          <div className="hidden md:flex items-center relative" ref={profileMenuRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <FaUserCircle className="text-3xl text-[#21501a]" />
              <span className="text-[#21501a] font-medium">John Doe</span>
              <FiChevronDown className="text-[#21501a] text-xl" />
            </button>

            {/* Dropdown menu */}
            {isProfileMenuOpen && (
              <div className="absolute left-0 top-7 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={() => console.log("Logout")}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

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
              <Link to="/" className="block px-4 py-2 text-[#21501a] hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link to="/AboutUS" className="block px-4 py-2 text-[#21501a] hover:bg-gray-100">
                About Us
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link to="/ContactUS" className="block px-4 py-2 text-[#21501a] hover:bg-gray-100">
                Contact Us
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link to="/Shop" className="block px-4 py-2 text-[#21501a] hover:bg-gray-100">
                Shop
              </Link>
            </li>

            {/* Profile Dropdown */}
            <li className="border-b border-gray-200">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                to="/settings"
                className="block px-4 py-2 text-[#21501a] hover:bg-gray-100"
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={() => console.log("Logout")}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar1;
