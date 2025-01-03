import React from "react";
import field from "../assets/field.jpg"; // Import tea field image

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
            src={field}
            alt="Field"
            className="rounded-3xl shadow-3xl object-cover w-[750px] h-[680px]"
          />
        </div>
      </div>

      {/* Stats Section */}

  <div className="bg-[#bae2b0] py-28">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10">

    {/* Stat 1: Service*/}
    <div>
      <div className="relative w-32 h-32 mx-auto">
        <svg
          className="absolute top-0 left-0 transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#000000"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#21501a"
            strokeWidth="4"
            strokeDasharray="100, 100"
            strokeDashoffset="0"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl font-bold">100%</p>
        </div>
      </div>
      <p className="text-black mt-4 font-bold">The company’s servive</p>
    </div>

    {/* Stat 2: Types of tea */}
    <div>
      <div className="relative w-32 h-32 mx-auto">
        <svg
          className="absolute top-0 left-0 transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#21501a"
            strokeWidth="4"
            strokeDasharray="70, 100"
            strokeDashoffset="0"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl font-bold">6+</p>
        </div>
      </div>
      <p className="text-black mt-4 font-bold">Tea Categories</p>
    </div>

    {/* Stat 3: Employees */}
    <div>
      <div className="relative w-32 h-32 mx-auto">
        <svg
          className="absolute top-0 left-0 transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#21501a"
            strokeWidth="4"
            strokeDasharray="80, 100"
            strokeDashoffset="0"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl font-bold">1000+</p>
        </div>
      </div>
      <p className="text-black mt-4 font-bold">Employees work in all parts of Sri Lanka</p>
    </div>
  </div>
</div>


    </header>
  );
};

export default Hero;
