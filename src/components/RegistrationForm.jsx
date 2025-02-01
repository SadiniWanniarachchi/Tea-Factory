import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/teapot.jpg";
import { FaGoogle, FaApple } from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Registration successful!");
      console.log("Registration successful:", response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl flex bg-[#21501a] rounded-lg shadow-2xl overflow-hidden">
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="w-full md:w-1/2 bg-white text-[#000000] p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-black mt-4">
            Already have an account? <a href="#" className="text-black hover:underline">Log in</a>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-8">
            <div className="flex space-x-4">
              <input name="firstName" type="text" placeholder="First name" onChange={handleChange} className="w-1/2 p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white" required />
              <input name="lastName" type="text" placeholder="Last name" onChange={handleChange} className="w-1/2 p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white" required />
            </div>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white" required />
            <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} className="w-full p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white" required />

            <div className="flex items-center">
              <input name="terms" type="checkbox" id="terms" onChange={handleChange} className="w-4 h-4 text-black border-black bg-black focus:ring-black" />
              <label htmlFor="terms" className="ml-2 text-sm text-black">I agree to the Terms & Conditions</label>
            </div>

            <button type="submit" className="w-full bg-[#000000] text-white py-3 rounded-md">Create Account</button>
          </form>

          <div className="mt-6 text-center text-base text-black font-semibold">Or register with</div>

          <div className="flex space-x-4 mt-4">
            <button className="flex-1 py-3 bg-gray-800 text-white rounded-md border border-gray-700 hover:border-gray-600 flex items-center justify-center">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex-1 py-3 bg-gray-800 text-white rounded-md border border-gray-700 hover:border-gray-600 flex items-center justify-center">
              <FaApple className="mr-2" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
