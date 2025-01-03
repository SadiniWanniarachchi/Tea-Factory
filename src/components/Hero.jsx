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
            className="rounded-xl shadow-xl transform transition duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-md object-cover w-[750px] h-[680px]"
          />
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 rounded-xl"></div>
       </div>
      </div>
    </header>
  );
};

export default Hero;
