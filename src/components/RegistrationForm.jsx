import React from "react";
import backgroundImage from "../assets/teapot.jpg"; 
import { FaGoogle, FaApple } from "react-icons/fa"; 


const RegistrationForm = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl flex bg-[#21501a] rounded-lg shadow-2xl overflow-hidden">

        {/* Left Side: Image */}
        <div
           className="hidden md:flex md:w-1/2 bg-cover bg-center"
           style={{
             backgroundImage: `url(${backgroundImage})`,
                 }}
        >

        <div className="p-12 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black/90 via-black/50">    
        <div className="mt-4 flex items-center justify-center space-x-10">
       </div>
       </div>
       </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-white text-[#000000] p-8 md:p-12 flex flex-col justify-center">
        

          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-black mt-4">
            Already have an account?{" "}
            <a href="#" className="text-black hover:underline">
              Log in
            </a>
          </p>

          <form className="mt-6 space-y-8">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-md bg-[#21501a] border border-white focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-white"
              >
                👁️
              </button>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-black border-black bg-black focus:ring-black"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-black">
                I agree to the Terms & Conditions
                
              </label>
            </div>
            <button className="w-full bg-[#000000] text-white py-3 rounded-md">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-base text-black font-semibold">
            Or register with
          </div>

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
