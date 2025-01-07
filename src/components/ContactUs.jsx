import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-accent min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#21501a]">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mt-2 text-lg font-thin">
          We are here to help you. Feel free to reach out!
        </p>

        {/* Grid Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-10 text-center">
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
                className="w-full bg-[#21501a] text-white py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#21501a] mb-10 text-center">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center text-gray-800">
                <FaMapMarkerAlt className="text-[#21501a] text-xl mr-4" />
                <p>No.23, Tea Estate Road, Green Valley</p>
              </div>
              <div className="flex items-center text-gray-800">
                <FaPhoneAlt className="text-[#21501a] text-xl mr-4" />
                <p>+98 678 456</p>
              </div>
              <div className="flex items-center text-gray-800">
                <FaEnvelope className="text-[#21501a] text-xl mr-4" />
                <p>harvestbrew@teafactory.com</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#21501a] mt-16 text-center">
              Follow Us
            </h3>

            <div className="flex justify-center space-x-4 mt-4 text-gray-800">

  <a
    href="#"
    className="bg-[#21501a] p-3 rounded-full text-white hover:bg-gray-600 transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="#"
    className="bg-[#21501a] p-3 rounded-full text-white hover:bg-gray-600 transition"
  >
    <FaInstagram />
  </a>
  <a
    href="#"
    className="bg-[#21501a] p-3 rounded-full text-white hover:bg-gray-600 transition"
  >
    <FaPinterest />
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
