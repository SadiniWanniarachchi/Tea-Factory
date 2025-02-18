import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Load cart data from localStorage (assuming cart management remains in localStorage)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "cardNumber" || id === "cvv") {
      if (!/^\d*$/.test(value)) return;
    }
    if (id === "expiryDate") {
      if (!/^[0-9/]*$/.test(value)) return;
    }
    setPaymentDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (value.length === 2 && !value.includes("/")) {
      setPaymentDetails((prev) => ({ ...prev, expiryDate: `${value}/` }));
    } else {
      setPaymentDetails((prev) => ({ ...prev, expiryDate: value }));
    }
  };

  const handleQuantityChange = (_id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item._id === _id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (_id) => {
    const updatedCart = cartItems.filter((item) => item._id !== _id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum +
      (typeof item.price === "string"
        ? parseFloat(item.price.replace("$", "")) * item.quantity
        : item.price * item.quantity),
    0
  );

  const handleProceedToCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // On submit, validate payment details and send the order to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!/^\d{16}$/.test(paymentDetails.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentDetails.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }
    if (!/^\d{3}$/.test(paymentDetails.cvv)) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create the order object based on cart items
    const order = {
      customerId: "CUSTOMER123", // Replace with dynamic customer info if available
      product: cartItems.map(item => item.name).join(", "),
      quantity: cartItems.reduce((acc, item) => acc + item.quantity, 0),
      status: "Pending",
      date: new Date().toISOString(),
    };

    try {
      // Send the order to your backend
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      });
      const data = await response.json();
      if (data.success) {
        // Clear cart
        localStorage.removeItem("cart");
        setCartItems([]);
        setShowModal(false);
        alert("Payment submitted and order saved!");
      } else {
        alert("Failed to save order. Try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Error submitting order.");
    }
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
                <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-base text-black font-bold">
                        ${parseFloat(item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
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
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-900 mt-4 sm:mt-0 text-xl"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              <div className="mt-16 text-right">
                <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
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

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-center mb-4">Payment Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your card number"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  maxLength="16"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="expiryDate" className="block text-sm">Expiry Date (MM/YY)</label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={handleDateChange}
                  maxLength="5"
                />
                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your CVV"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  maxLength="3"
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-700">
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
