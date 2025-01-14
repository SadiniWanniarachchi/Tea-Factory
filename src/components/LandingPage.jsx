import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHandshake, FaSeedling, FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/greentea.jpg"; // Replace with your image
import product1 from "../assets/blacktea.jpg";
import product2 from "../assets/herbaltea.jpeg";
import product3 from "../assets/lemontea.jpeg";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

const LandingPage = () => {
  return (

    <>
    
    <Navbar1 />
    <div className="bg-[#f3f6f3] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Tea Factory</h1>
            <p className="text-xl mb-6">Discover the finest organic teas crafted with passion.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#21501a] text-white py-3 px-6 rounded-full text-lg shadow-lg hover:bg-[#183d14]"
            >
              Explore Our Teas <FaArrowRight className="inline ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-[#21501a] mb-8">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaLeaf className="text-[#21501a] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Organic Teas</h3>
            <p>Our teas are 100% organic and sourced from sustainable farms.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaSeedling className="text-[#21501a] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p>We prioritize eco-friendly practices in all stages of production.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-[#21501a] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Partners</h3>
            <p>We build lasting relationships with our partners and customers.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-[#e8f0e8] py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-[#21501a] mb-8">Our Bestsellers</h2>
        <div className="flex gap-8 overflow-x-auto">
          {[product1, product2, product3].map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden min-w-[300px]"
              whileHover={{ scale: 1.05 }}
            >
              <img src={product} alt="Product" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#21501a]">Product {index + 1}</h3>
                <p className="text-gray-600">$15.99</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-[#21501a] mb-8">What Our Customers Say</h2>
        <div className="flex gap-8 overflow-x-auto">
          {["Best tea ever!", "Amazing quality!", "I love their service!"].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition min-w-[300px]"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic">"{testimonial}"</p>
              <p className="text-[#21501a] font-semibold mt-4">- Customer {index + 1}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-[#21501a] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Partner with Us?</h2>
        <p>Contact us today to start your journey with the finest teas!</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 bg-white text-[#21501a] py-3 px-6 rounded-full text-lg shadow-lg"
        >
          Contact Us
        </motion.button>
      </section>
    </div>

<Footer />

    </>
  );
};

export default LandingPage;
