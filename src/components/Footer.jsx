import React from 'react';
import { FaInstagram, FaPinterest, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Footer() {
  return (

    <motion.footer
      className="bg-[#c2c9b6] pt-12 sm:pt-20 pb-8 z-10 font-kulim"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="font-kulim max-w-screen-2xl mx-auto px-8 sm:px-6 md:px-12 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-40 gap-x-12"> {/* Increase gap-x here */}

        {/* Left Section */}
        <motion.div variants={sectionVariants}>
          <h1 className="text-2xl sm:text-3xl text-green-900 font-bold">HarvestBrew</h1>
          <p className="text-sm sm:text-base text-green-900 mt-2">Since 2020</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-6 mt-6 sm:mt-8">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-black transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-black transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FaPinterest size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 hover:text-black transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </motion.div>

        {/* Navigation Section */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-lg sm:text-xl text-green-900 font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm sm:text-base text-green-900 hover:text-black font-bold">Home</a></li>
            <li><a href="#" className="text-sm sm:text-base text-green-900 hover:text-black font-bold">About Us</a></li>
            <li><a href="#" className="text-sm sm:text-base text-green-900 hover:text-black font-bold">Contact Us</a></li>
            <li><a href="#" className="text-sm sm:text-base text-green-900 hover:text-black font-bold">Shop</a></li>
          </ul>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-lg sm:text-xl text-green-900 font-bold">Subscribe to our newsletter</h3>
          <div className="flex flex-col mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-sm sm:text-base w-full border border-[#1E1916] rounded-md mb-4"
            />
            <button className="p-2 bg-green-900 text-white text-sm sm:text-base rounded-md">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>

  );
}

export default Footer;
