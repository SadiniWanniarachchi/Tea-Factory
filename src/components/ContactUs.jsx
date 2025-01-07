import React from "react";

const ContactUs = () => {

  return (
    
    <div className="min-h-screen bg-gray-100 text-gray-800">

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

export default ContactUs;
