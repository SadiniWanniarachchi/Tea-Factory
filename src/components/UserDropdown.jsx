import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

const UserDropdown = ({ user }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Logout function
    const logoutUser = () => {
        localStorage.removeItem("user"); // Remove user data from local storage
        localStorage.removeItem("token"); // Remove auth token if stored
        navigate("/"); // Navigate to Home page after logout
    };

    // Navigate to Profile Page
    const navigateToProfile = () => {
        navigate("/ProfilePage"); // Navigate to the profile page
        setDropdownOpen(false); // Close the dropdown
    };

    return (
        <div className="relative">
            {/* User Profile and Dropdown Toggle */}
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <FaUserCircle className="w-8 h-8 text-green-900" />
                <span className="text-green-900 font-bold">{user?.name}</span>
                <FaCaretDown className={`w-4 h-4 text-green-900 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    {/* Profile Button */}
                    <button
                        onClick={navigateToProfile} // Use the navigateToProfile function
                        className="block w-full text-left px-4 py-2 text-black font-bold hover:bg-gray-100"
                    >
                        Profile
                    </button>

                    <button
                        onClick={() => {
                            logoutUser();
                            setDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-700 font-bold"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
