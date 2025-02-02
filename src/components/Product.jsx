import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";

const Product = ({ product, addToCart }) => {
  // Simulating a rating system (replace with dynamic ratings if needed)
  const rating = product.rating || 4;

  return (
    <motion.div
      className="bg-[#f3f6f3] font-kulim border border-gray-200 rounded-lg shadow-sm hover:shadow-md overflow-hidden transition-transform transform hover:-translate-y-2"
      whileHover={{ scale: 1.05 }}
    >
      {/* Product Image */}
      <div className="relative font-kulim">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover font-kulim"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 text-center font-kulim">
        <h3 className="text-xl font-semibold text-[#21501a] mb-2">
          {product.name}
        </h3>
        <p className="text-[#21501a] text-xl font-bold mb-4">{product.price}</p>

        {/* Star Ratings */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <FaStar key={index} className="text-yellow-500" />
            ) : (
              <FaRegStar key={index} className="text-gray-400" />
            )
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex font-kulim justify-between items-center p-4 border-t border-gray-200 bg-[#f3f6f3]">
        <button className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition">
          <FaHeart />
        </button>

        <button
          onClick={addToCart}
          className="bg-[#21501a] text-white py-2 px-6 rounded-full hover:bg-gray-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default Product;
