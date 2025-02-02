import React from 'react';
import teacupImage from '../assets/teacup.jpeg';

const Card = () => {
  return (
    <div className="font-kulim">
      <div
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${teacupImage})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="z-20 text-center text-white max-w-6xl px-1">
          {/* Adjusted padding using px-4 */}
          <p className="text-2xl mb-12">#1 Tea provider in Sri Lanka</p>
          <h1 className="text-6xl font-bold leading-tight mb-16">
            Welcome to HarvestBrew! <br />
            <p className="text-2xl mb-12">New Energy in Every Tea Cup</p>
          </h1>
          <div className="flex justify-center gap-6">
            {/* Adjusted gap between buttons */}
            <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Get in touch
            </button>
            <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Our services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
