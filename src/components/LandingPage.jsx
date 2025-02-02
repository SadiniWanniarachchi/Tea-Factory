import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaStar, FaLeaf, FaMugHot, FaSmile, FaSeedling, FaHandshake } from "react-icons/fa";
import heroImage from "../assets/landingimage.png";
import product1 from "../assets/blacktea.jpg";
import product2 from "../assets/herbaltea.jpeg";
import product3 from "../assets/lemontea.jpeg";
import newImage from "../assets/teatypes.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f3f6f3] text-gray-800 font-kulim">
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${newImage})` }}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-4 sm:px-10">
            <div className="text-center">
              <motion.h1
                className="text-6xl font-extrabold mb-4 text-shadow-md"
                animate={{ opacity: [0, 1], y: [50, 0] }}
                transition={{ duration: 1 }}
              >
                Premium Organic Teas
              </motion.h1>
              <motion.p
                className="text-2xl mb-6 opacity-0"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Handcrafted with the finest leaves for a perfect brew.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-[#21501a] text-white py-3 px-6 rounded-full text-lg shadow-lg hover:bg-[#183d14] transition duration-300"
              >
                Explore Our Teas <FaArrowRight className="inline ml-2" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-[#21501a] mb-8"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="text-[#21501a] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Organic Teas</h3>
              <p>Our teas are 100% organic, grown with care and love.</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaSeedling className="text-[#21501a] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability Focused</h3>
              <p>Eco-conscious from farm to your cup.</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaHandshake className="text-[#21501a] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Partnerships</h3>
              <p>We collaborate with ethical farms to bring you the best.</p>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="bg-[#f4faf4] py-16 px-6">
          <motion.h2
            className="text-5xl font-bold text-center text-[#21501a] mb-12"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1 }}
          >
            Featured Products
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[product1, product2, product3].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden transition duration-300 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative group">
                  <img
                    src={product}
                    alt={`Product ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-[#21501a] mb-2">
                    Product {index + 1}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">$18.99</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 bg-[#21501a] text-white rounded-full shadow-md hover:bg-[#183b12] transition duration-300"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Parallax Scroll Effect */}
        <section
          className="relative bg-cover bg-center py-24"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >

        </section>

        {/* Testimonials Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 text-center overflow-hidden relative">
          <motion.h2
            className="text-5xl font-bold text-[#21501a] mb-12"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1 }}
          >
            What Our Customers Are Saying
          </motion.h2>

          {/* Marquee Wrapper */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 whitespace-nowrap animate-marquee">
              {[
                { text: "Best tea ever!", icon: <FaHeart className="text-red-500 text-3xl" /> },
                { text: "Amazing quality!", icon: <FaStar className="text-yellow-400 text-3xl" /> },
                { text: "Love the eco-friendly practices!", icon: <FaLeaf className="text-green-500 text-3xl" /> },
                { text: "Wonderful taste!", icon: <FaMugHot className="text-orange-500 text-3xl" /> },
                { text: "Highly recommended!", icon: <FaSmile className="text-blue-500 text-3xl" /> },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#21501a] to-[#183d14] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 min-w-[320px] mx-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center space-y-6">
                    <div className="text-white">{testimonial.icon}</div>
                    <p className="italic text-lg text-white text-center leading-relaxed">
                      <span className="text-4xl">“</span> {testimonial.text} <span className="text-4xl">”</span>
                    </p>
                    <p className="text-[#f3f6f3] font-semibold">- Customer {index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
