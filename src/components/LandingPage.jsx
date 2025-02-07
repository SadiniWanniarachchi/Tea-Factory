import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaStar, FaLeaf, FaMugHot, FaSmile, FaSeedling, FaHandshake } from "react-icons/fa";
import heroImage from "../assets/landingimage.png";
import product1 from "../assets/blacktea.jpg";
import product2 from "../assets/herbaltea.jpeg";
import product3 from "../assets/lemontea.jpeg";
import newImage from "../assets/cupoftea.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";



const LandingPage = () => {

  const testimonials = [
    { text: "Best tea ever!", icon: <FaHeart className="text-red-400 text-4xl" /> },
    { text: "Amazing quality!", icon: <FaStar className="text-yellow-300 text-4xl" /> },
    { text: "Love the eco-friendly practices!", icon: <FaLeaf className="text-green-400 text-4xl" /> },
    { text: "Wonderful taste!", icon: <FaMugHot className="text-orange-400 text-4xl" /> },
    { text: "Highly recommended!", icon: <FaSmile className="text-blue-400 text-4xl" /> },
  ];

  const navigate = useNavigate();

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
                className="bg-green-900 text-white py-3 px-6 rounded-full text-lg shadow-lg transition duration-300"
                onClick={() => navigate("/Shop")} // Navigates to the Shop page
              >
                Explore Our Teas <FaArrowRight className="inline ml-2" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto py-20 px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-black mb-10"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#eee8e8] p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="text-green-900 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Organic Teas</h3>
              <p>Our teas are 100% organic, grown with care and love.</p>
            </motion.div>
            <motion.div
              className="bg-[#eee8e8] p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaSeedling className="text-green-900 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability Focused</h3>
              <p>Eco-conscious from farm to your cup.</p>
            </motion.div>
            <motion.div
              className="bg-[#eee8e8] p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaHandshake className="text-green-900 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Partnerships</h3>
              <p>We collaborate with ethical farms to bring you the best.</p>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="bg-[#f4faf4] py-14 px-6">
          <motion.h2
            className="text-5xl font-bold text-center text-black mb-12"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1 }}
          >
            Featured Products
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: "Black Tea", image: product1, price: "$8.99" },
              { name: "Herbal Tea", image: product2, price: "$12.00" },
              { name: "Lemon Tea", image: product3, price: "$15.00" }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden transition duration-300 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-black font-bold text-lg mb-4">{product.price}</p>
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

        <section className="relative max-w-6xl mx-auto py-20 px-6 text-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br opacity-80 blur-lg rounded-lg"></div>

          {/* Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            What Our Customers Are Saying
          </motion.h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6 whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass-card min-w-[320px] md:min-w-[400px] p-8 rounded-xl shadow-lg mx-4 backdrop-blur-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center space-y-5">
                    <div>{testimonial.icon}</div>
                    <p className="italic text-lg text-gray-700 leading-relaxed">
                      <span className="text-3xl text-gray-400">“</span> {testimonial.text} <span className="text-3xl text-gray-400">”</span>
                    </p>
                    <p className="text-gray-500 font-medium">- Customer {index % 5 + 1}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
