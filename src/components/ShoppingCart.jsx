import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";


const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    // Example cart items (replace with actual cart state management)
    {
      id: 1,
      name: "Oolong Tea",
      image: "oolongtea.jpeg",
      price: "$15.99",
      quantity: 2,
    },
    {
      id: 2,
      name: "Black Tea",
      image: "blacktea.jpg",
      price: "$12.99",
      quantity: 1,
    },
  ]);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  // Handle checkout
  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    // Add checkout logic here (e.g., redirect to payment page)
  };

  return (
    <>

      <div className="min-h-screen bg-accent text-gray-800 font-kulim">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back to Shop Button */}
          <button
            onClick={() => navigate("/shop")}
            className="fixed top-8 left-8 bg-green-900 text-white p-3 rounded-full shadow-lg transition duration-300"
          >
            <FaArrowLeft size={20} />
          </button>
          {/* Cart Title */}
          <h1 className="text-4xl font-bold text-center py-7 text-green-900">
            My Shopping Cart
          </h1>

          {/* Cart Items */}
          <div className="bg-[#f2f6f1] rounded-lg shadow-md p-14">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4"
                  >
                    {/* Product Image and Name */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-lg text-black">{item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-900 mt-4 sm:mt-0 text-xl"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}

                {/* Total Price and Checkout Button */}
                <div className="mt-16 text-right">
                  <h3 className="text-xl font-semibold">
                    Total: ${totalPrice.toFixed(2)}
                  </h3>
                  <button
                    onClick={handleCheckout}
                    className="mt-4 px-6 py-2 bg-green-900 text-white rounded hover:bg-green-700 transition"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default ShoppingCart;