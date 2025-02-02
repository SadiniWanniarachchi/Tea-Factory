import React from "react";
import teaLeaves from '../assets/greentea.jpg'; // Ensure the path is correct
import { FaLeaf, FaCertificate, FaUsers } from 'react-icons/fa';
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutContact = () => {
  return (
    <>

      <Navbar />
      <div className="bg-accent text-black font-kulim">
        {/* Header Section */}
        <div className="relative bg-primary text-green-900">
          <div className="max-w-7xl mx-auto py-12 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">HarvestBrew Tea Factory</h1>
            <p className="text-lg font-thin">
              Discover the essence of quality and tradition in every leaf!
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-20">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="mb-6 text-black text-lg">
              Nestled in the lush green hills, our tea factory has been crafting
              exceptional teas for over a decade. We take pride in blending
              tradition with innovation to deliver the finest tea to your cup.
            </p>

            <h2 className="text-4xl font-bold mb-4 mt-32">Our Vision</h2>
            <p className="mb-6 text-black text-lg">
              To bring a world-class tea experience while supporting sustainable
              farming and local communities.
            </p>
          </div>

          {/* Right Section */}
          <div className="relative">
            <img
              src={teaLeaves} // Use the imported variable
              alt="Tea Leaves"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white text-black py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Value 1: Sustainability */}
              <div className="relative p-8 bg-white rounded-lg shadow-xl border-2 border-green-900 transition-all duration-300 ease-in-out">
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-4 rounded-full">
                  <FaLeaf className="text-3xl" /> {/* React Icon for Sustainability */}
                </div>
                <h3 className="text-2xl font-semibold text-[#21501a] mb-4">Sustainability</h3>
                <p className="text-black">
                  Committed to environmentally-friendly farming practices.
                </p>
              </div>

              {/* Value 2: Quality */}
              <div className="relative p-8 bg-white rounded-lg shadow-xl border-2 border-green-900  transition-all duration-300 ease-in-out">
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-4 rounded-full">
                  <FaCertificate className="text-3xl" /> {/* React Icon for Quality */}
                </div>
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Quality</h3>
                <p className="text-black">
                  Every leaf is handpicked to ensure premium quality.
                </p>
              </div>

              {/* Value 3: Community */}
              <div className="relative p-8 bg-white rounded-lg shadow-xl border-2 border-green-900  transition-all duration-300 ease-in-out">
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-4 rounded-full">
                  <FaUsers className="text-3xl" /> {/* React Icon for Community */}
                </div>
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Community</h3>
                <p className="text-black">
                  Empowering local farmers and uplifting the community around us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
};

export default AboutContact;
