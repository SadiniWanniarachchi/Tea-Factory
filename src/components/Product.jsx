import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Product = ({ product, addToCart }) => {
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
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 font-kulim">
        {/* Product Name & Price in One Row */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-green-900">{product.name}</h3>
          <p className="text-green-900 text-xl font-bold">{product.price}</p>
        </div>

        {/* Product Category */}
        <p className="text-base text-black font-bold mb-2">{product.category}</p>

        {/* Product Description */}
        <p className="text-black text-sm font-bold">{product.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex font-kulim justify-between items-center p-4 border-t border-gray-200 bg-[#f3f6f3]">
        <button className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition">
          <FaHeart />
        </button>

        <button
          onClick={addToCart}
          className="bg-green-900 text-white py-2 px-6 rounded-full hover:bg-gray-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default Product;
