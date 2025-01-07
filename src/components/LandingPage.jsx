import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Morning begins with Ombe coffee
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700">
          See Menu
        </button>
      </section>

      {/* Booking Section */}
      <section className="bg-white text-primary py-8 rounded-lg shadow-lg max-w-4xl mx-auto -mt-16">
        <form className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
          <input
            type="text"
            placeholder="Name"
            className="col-span-1 md:col-span-1 p-2 border rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="col-span-1 md:col-span-1 p-2 border rounded focus:outline-none"
          />
          <select
            className="col-span-1 md:col-span-1 p-2 border rounded focus:outline-none"
          >
            <option>Black Coffee</option>
            <option>Latte</option>
          </select>
          <select
            className="col-span-1 md:col-span-1 p-2 border rounded focus:outline-none"
          >
            <option>2 Person</option>
            <option>4 Person</option>
          </select>
          <input
            type="time"
            className="col-span-1 md:col-span-1 p-2 border rounded focus:outline-none"
          />
          <button
            type="submit"
            className="col-span-full md:col-span-1 p-2 bg-accent text-white font-semibold rounded-lg hover:bg-red-700"
          >
            Book Now
          </button>
        </form>
      </section>

      {/* Special Coffee Menu */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold mb-6">
          Special Coffee Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {['coffee1.jpg', 'coffee2.jpg', 'coffee3.jpg'].map((img, idx) => (
            <div
              key={idx}
              className="bg-white text-primary rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`/assets/${img}`}
                alt={`Coffee ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">Special Coffee</h3>
                <p>Delicious coffee for special moments.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
