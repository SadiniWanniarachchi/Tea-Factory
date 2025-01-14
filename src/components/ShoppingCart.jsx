import React from 'react';


const ShoppingCart = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-5xl">
        {/* Left Section: Shopping Cart Items */}
        <div className="w-2/3 p-6 border-r">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500">3 items</span>
          </div>

          {/* Item List */}
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-6 border-b pb-4"
            >
              <div className="flex items-center">
                <img
                  src={`https://via.placeholder.com/60`}
                  alt="T-shirt"
                  className="w-16 h-16 rounded mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">Shirt</h2>
                  <p className="text-gray-500">Cotton T-shirt</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="w-8 h-8 text-xl font-bold bg-gray-200 rounded">-</button>
                <span className="text-lg">1</span>
                <button className="w-8 h-8 text-xl font-bold bg-gray-200 rounded">+</button>
              </div>
              <p className="text-lg font-semibold">€44.00</p>
              <button className="text-gray-500 hover:text-red-500">×</button>
            </div>
          ))}

          {/* Back to Shop */}
          <button className="text-gray-600 hover:underline flex items-center">
            ← Back to shop
          </button>
        </div>

        {/* Right Section: Summary */}
        <div className="w-1/3 p-6 bg-gray-100">
          <h2 className="text-xl font-bold mb-6">Summary</h2>

          <div className="flex justify-between items-center mb-4">
            <span>ITEMS 3</span>
            <span>€132.00</span>
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 mb-2">SHIPPING</label>
            <select className="w-full p-2 border rounded">
              <option>Standard-Delivery- €5.00</option>
              <option>Express-Delivery- €10.00</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-500 mb-2">GIVE CODE</label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your code"
                className="w-full p-2 border rounded-l"
              />
              <button className="p-2 bg-black text-white rounded-r">→</button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span>TOTAL PRICE</span>
            <span className="text-lg font-semibold">€137.00</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
