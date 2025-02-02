import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import teaBackground from "../assets/field.jpg";

export default function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const loginUser = (e) => {
    e.preventDefault();
    navigate("/LandingPage"); // Navigate to the landing page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center font-kulim"
      style={{ backgroundImage: `url(${teaBackground})` }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-green-900">Welcome Back!</h1>
        <form className="mt-8 space-y-4" onSubmit={loginUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={data.email} onchange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={data.password} onchange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-900 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-black">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-900 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-900 text-white font-bold rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-black mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-900 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

