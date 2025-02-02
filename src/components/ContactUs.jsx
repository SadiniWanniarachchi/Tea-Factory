import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (

    <>

      <Navbar />

      <div className="bg-accent min-h-screen py-16 px-4 font-kulim">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center text-green-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center mt-2 text-lg font-thin">
            We are here to help you. Feel free to reach out!
          </p>

          {/* Grid Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-10 text-center">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-900 text-white py-3 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-10 text-center">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center text-gray-800">
                  <FaMapMarkerAlt className="text-green-900 text-xl mr-4" />
                  <p>No.23, Tea Estate Road, Green Valley</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <FaPhoneAlt className="text-green-900 text-xl mr-4" />
                  <p>+98 678 456</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <FaEnvelope className="text-green-900 text-xl mr-4" />
                  <p>harvestbrew@teafactory.com</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-green-900 mt-16 text-center">
                Follow Us
              </h3>

              <div className="flex justify-center space-x-4 mt-4 text-gray-800">

                <a
                  href="#"
                  className="bg-green-900 p-3 rounded-full text-white hover:bg-gray-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-green-900 p-3 rounded-full text-white hover:bg-gray-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-green-900 p-3 rounded-full text-white hover:bg-gray-600 transition"
                >
                  <FaPinterest />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
