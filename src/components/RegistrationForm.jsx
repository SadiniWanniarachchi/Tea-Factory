import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/teapot.jpg";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

export default function Register() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleNameChange = (e) => {
    const value = e.target.value;
    const onlyLetters = value.replace(/[^A-Za-z\s]/g, ""); // Allow only letters and spaces
    setData({ ...data, name: onlyLetters });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (!value.includes('@')) {
      toast.error("Email must contain '@'");
    }
    setData({ ...data, email: value });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length < 6) {
      toast.error("Password must be at least 6 characters long");
    }
    setData({ ...data, password: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    if (!name) {
      toast.error("Name is required and should contain only letters");
      return;
    }

    if (!email.includes('@')) {
      toast.error("Enter a valid email containing '@'");
      return;
    }

    if (!password || password.length < 6) {
      toast.error("Password is required and should be at least 6 characters long");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user/user", { name, email, password });

      if (response.data.err) {
        toast.error(response.data.error);
      } else {
        setData({ name: "", email: "", password: "" });
        toast.success('User registered successfully');
        navigate('/Login');
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again.");
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f8] font-kulim">
      <div className="w-full max-w-5xl flex bg-green-900 rounded-lg shadow-2xl overflow-hidden">
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="w-full md:w-1/2 bg-white text-green-900 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-green-900 mt-4">
            Already have an account? <a href="/Login" className="text-green-900 hover:underline">Log in</a>
          </p>

          <form onSubmit={registerUser} className="mt-6 space-y-8">

            <input
              type="text"
              placeholder="Enter Name"
              value={data.name}
              onChange={handleNameChange}
              className="w-full p-3 rounded-md border border-black" />

            <input
              type="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={handleEmailChange}
              className="w-full p-3 rounded-md border border-black" />

            <input
              type="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={handlePasswordChange}
              className="w-full p-3 rounded-md border border-black" />


            <button type="submit" className="w-full bg-green-900 text-white py-3 rounded-md">Create Account</button>
          </form>

          <div className="mt-6 text-center text-base text-black font-semibold">Or register with</div>

          <div className="flex space-x-4 mt-4">
            <button className="flex-1 py-3 bg-gray-200 text-black rounded-md border border-gray-700 hover:border-gray-600 flex items-center justify-center">
              <FcGoogle className="mr-2" /> Google
            </button>
            <button className="flex-1 py-3 bg-gray-200 text-black rounded-md border border-gray-700 hover:border-gray-600 flex items-center justify-center">
              <SiApple className="mr-2" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


