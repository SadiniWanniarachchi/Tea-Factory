import React from "react";
import backgroundImage from "../assets/teapot.jpg"; // Replace with your image

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-5xl flex bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Image */}
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="p-8 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/20">
            <h1 className="text-white text-4xl font-bold">AMU</h1>
            <p className="text-white mt-8 text-lg">
              Capturing Moments, <br /> Creating Memories
            </p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-gray-900 text-gray-200 p-8 md:p-12 flex flex-col justify-center">
          <button className="text-gray-400 text-sm mb-4 flex items-center space-x-2">
            <span>&larr;</span>
            <span>Back to website</span>
          </button>

          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="text-gray-400 mt-2">
            Already have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Log in
            </a>
          </p>

          <form className="mt-6 space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-400"
              >
                👁️
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-purple-500 border-gray-700 bg-gray-800 focus:ring-purple-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600">
              Create account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Or register with
          </div>

          <div className="flex space-x-4 mt-4">
            <button className="flex-1 py-3 bg-gray-800 text-white rounded-md border border-gray-700 hover:border-gray-600 flex items-center justify-center">
              <span className="mr-2">🌐</span> Google
            </button>
            <button className="flex-1 py-3 bg-gray-800 text-white rounded-md border border-gray-700 hover:border-gray-600 flex items-center justify-center">
              <span className="mr-2">🍎</span> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
