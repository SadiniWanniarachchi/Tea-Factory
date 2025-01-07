import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import blackTea from "../assets/blacktea.jpg";
import herbalTea from "../assets/herbaltea.jpeg";
import lemonTea from "../assets/lemontea.jpeg";
import oolongTea from "../assets/oolongtea.jpeg";
import yellowTea from "../assets/yellowtea.jpeg";

const ShopPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showCartIcon, setShowCartIcon] = useState(true);
  const footerRef = useRef(null);

  const products = [
    { id: 1, name: "Oolong Tea", image: oolongTea, price: "$15.99" },
    { id: 2, name: "Black Tea", image: blackTea, price: "$12.99" },
    { id: 3, name: "Herbal Tea", image: herbalTea, price: "$18.99" },
    { id: 4, name: "Lemon Tea", image: lemonTea, price: "$18.99" },
    { id: 5, name: "Yellow Tea", image: yellowTea, price: "$18.99" },
  ];

  // Function to add product to cart
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Hide cart icon when footer is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCartIcon(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-accent text-gray-800">
      <h1 className="text-4xl font-bold text-center py-10 text-[#21501a]">Our Tea Collection</h1>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#21501a] mb-2">{product.name}</h3>
              <p className="text-[#21501a] text-xl font-bold mb-4">{product.price}</p>
              <button
                onClick={addToCart}
                className="bg-[#21501a] text-white py-2 px-6 rounded-full hover:bg-gray-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Cart Icon */}
      {showCartIcon && (
        <div className="fixed bottom-8 right-8 bg-[#21501a] p-4 rounded-full text-white shadow-lg hover:bg-gray-600 transition cursor-pointer">
          <FaShoppingCart size={28} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      )}

    </div>
  );
};

export default ShopPage;
