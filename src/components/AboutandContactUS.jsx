import React from "react";
import teafield from "../assets/teafield.jpeg";
import teaCup from "../assets/teaCup.jpeg";



const AboutContact = () => {

  return (

    
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${teafield})` }}
      >
        <div className="bg-black/50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Welcome to Our Tea Factory</h1>
          <p className="mt-2 text-lg">
            Discover the journey of the finest teas from field to cup.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800">About Us</h2>
          <p className="mt-4 text-center text-gray-600">
            We are passionate about producing the finest teas, handpicked from lush green fields and crafted with care.
          </p>
          <div className="mt-10 flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={teaCup}
                alt="A cup of tea"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-bold text-green-800">Our Story</h3>
              <p className="mt-4 text-gray-600">
                Our tea factory was established with a vision to bring the essence of authentic, high-quality tea to the world. 
                From sustainable farming to meticulous processing, every step is a testament to our dedication to excellence.
              </p>
              <p className="mt-4 text-gray-600">
                Join us on this flavorful journey and experience the finest teas, one sip at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800">Contact Us</h2>
          <p className="mt-4 text-center text-gray-600">
            We'd love to hear from you! Reach out with any questions, feedback, or just to say hello.
          </p>
          <div className="mt-10 flex flex-wrap">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-4">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Info */}
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-bold text-green-800">Reach Us</h3>
              <p className="mt-4 text-gray-600">
                📍 123 Tea Estate Road, Green Valley
              </p>
              <p className="mt-2 text-gray-600">📞 +1-800-TEA-LOVE</p>
              <p className="mt-2 text-gray-600">✉️ contact@teafactory.com</p>
              <div className="mt-6">
                <h4 className="font-bold text-green-800">Follow Us:</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-green-600 hover:underline">
                    🌐 Facebook
                  </a>
                  <a href="#" className="text-green-600 hover:underline">
                    📸 Instagram
                  </a>
                  <a href="#" className="text-green-600 hover:underline">
                    🐦 Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    

  );
};

export default AboutContact;
