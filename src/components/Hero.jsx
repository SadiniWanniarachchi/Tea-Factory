import React from "react";
import teafield from "../assets/teafield.jpeg"; // Import tea field image


const Hero = () => {
  return (
    <header className="relative bg-white">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12">
        
        {/* Left Section */}
        <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight mt-[-20px]">
             Welcome To Our <span className="text-[#21501a]">HarvestBrew</span> <br />
             Tea Factory
        </h1>
        <p className="mt-14 text-gray-600 font-bold">
             "From leaf to cup, experience the art of tea-making. Discover premium blends, crafted with care in every sip. Welcome to the heart of tradition and taste."
        </p>
        <div className="mt-16 flex space-x-20">
          <button className="w-24 h-10 bg-[#21501a] text-white font-medium rounded-full hover:bg-gray-600 transition">
           Shop Now
          </button>
        </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 mt-14 md:mt-0 group">
          <img
            src={teafield} 
            alt="Tea Field"
            className="rounded-xl shadow-xl object-cover w-[750px] h-[680px]"
          />
       </div>

{/* Stats Section */}
<div className="bg-white py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center gap-4">
          <div>
            <p className="text-3xl font-bold">6 mil</p>
            <p className="text-gray-600">The company’s annual net income</p>
          </div>
          <div>
            <p className="text-3xl font-bold">315</p>
            <p className="text-gray-600">Projects completed worldwide</p>
          </div>
          <div>
            <p className="text-3xl font-bold">120K</p>
            <p className="text-gray-600">Employees work in all parts of the world</p>
          </div>
        </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
