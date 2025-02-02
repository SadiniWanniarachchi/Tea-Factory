import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product"; // Import Product component
import oolongTea from "../assets/oolongtea.jpeg";
import blackTea from "../assets/blacktea.jpg";
import herbalTea from "../assets/herbaltea.jpeg";
import lemonTea from "../assets/lemontea.jpeg";
import yellowTea from "../assets/yellowtea.jpeg";

const ShopPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showCartIcon, setShowCartIcon] = useState(true);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  // Products Data
  const products = [
    { id: 1, name: "Oolong Tea", image: oolongTea, price: "$15.99" },
    { id: 2, name: "Black Tea", image: blackTea, price: "$12.99" },
    { id: 3, name: "Herbal Tea", image: herbalTea, price: "$18.99" },
    { id: 4, name: "Lemon Tea", image: lemonTea, price: "$18.99" },
    { id: 5, name: "Yellow Tea", image: yellowTea, price: "$18.99" },
  ];

  // Add to Cart Function
  const addToCart = () => {
    setCartCount(cartCount + 1);
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

  // Handle Cart Icon Click
  const handleCartClick = () => {
    navigate("/shoppingcart");
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
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* Floating Cart Icon */}
        {showCartIcon && (
          <div
            onClick={handleCartClick}
            className="fixed bottom-8 right-8 bg-green-900 p-4 rounded-full text-white shadow-lg hover:bg-gray-600 transition cursor-pointer -z-10"
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
