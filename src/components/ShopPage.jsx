import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { motion } from "framer-motion";

const ShopPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showCartIcon, setShowCartIcon] = useState(true);
  const [products, setProducts] = useState([]);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/Product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Add to cart function
  const addToCart = async (product) => {
    console.log("Add to Cart clicked:", product); // Debugging line
    try {
      const response = await axios.post("http://localhost:5000/api/cart", {
        name: product.name,
        image: product.image,
        price: product.price,
      });
      console.log("API Response:", response.data); // Debugging line
      setCartCount((prev) => prev + 1);
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  // Intersection Observer for Floating Cart Icon
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

  const handleCartClick = () => {
    console.log("Cart icon clicked"); // This will log in the console when the icon is clicked
    navigate("/shoppingcart"); // Ensure this is the correct path for your cart page
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-accent text-gray-800 font-kulim">
        <h1 className="text-4xl font-bold text-center py-10 text-green-900">
          Our Tea Collection
        </h1>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              className="bg-[#f3f6f3] font-kulim border border-gray-200 rounded-lg shadow-sm hover:shadow-md overflow-hidden transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              key={product.id}
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
                  <p className="text-green-900 text-xl font-bold">
                    ${parseFloat(product.price).toFixed(2)}
                  </p>
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
                  onClick={() => addToCart(product)}
                  className="bg-green-900 text-white py-2 px-6 rounded-full hover:bg-gray-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Cart Icon */}
        {showCartIcon && (
          <div
            onClick={handleCartClick}
            className="fixed top-28 right-8 bg-green-900 p-4 rounded-full text-white shadow-lg hover:bg-gray-600 transition cursor-pointer z-50"
          >
            <FaShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        )}
      </div>

      <Footer ref={footerRef} />
    </>
  );
};

export default ShopPage;