import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  // Fetch cart data from backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  // Handle quantity change
  const handleQuantityChange = async (_id, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await axios.put(`http://localhost:5000/api/cart/${_id}`, { quantity: newQuantity });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === _id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Remove item from cart
  const handleRemoveItem = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${_id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (typeof item.price === "string"
      ? parseFloat(item.price.replace("$", "")) * item.quantity
      : item.price * item.quantity),
    0
  );

  // Handle "Proceed to Checkout" button click
  const handleProceedToCheckout = () => {
    setShowModal(true); // Show the modal
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="min-h-screen bg-accent text-gray-800 font-kulim">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/shop")}
          className="fixed top-8 left-8 bg-green-900 text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-4xl font-bold text-center py-7 text-green-900">
          My Shopping Cart
        </h1>

        <div className="bg-[#f2f6f1] rounded-lg shadow-md p-14">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item._id} // Unique key for each item
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4"
                >
                  {/* Item details */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-base text-black font-bold">
                        ${parseFloat(item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <button
                      onClick={() => handleQuantityChange(item._id, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-900 mt-4 sm:mt-0 text-xl"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}

              {/* Total and checkout */}
              <div className="mt-16 text-right">
                <h3 className="text-xl font-semibold">
                  Total: ${totalPrice.toFixed(2)}
                </h3>
                <button
                  onClick={handleProceedToCheckout}
                  className="mt-4 px-6 py-2 bg-green-900 text-white rounded hover:bg-green-700 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-center mb-4">Payment Details</h2>

            {/* Payment form */}
            <form>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your card number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="expiryDate" className="block text-sm">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your CVV"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Submit Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
