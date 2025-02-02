import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import field from '../assets/field.jpg'; // Adjust the path as needed

const HeroSection = () => {
  // Framer Motion Animations
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Motion Variants
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className="font-kulim container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12"
    >
      {/* Left Section */}
      <motion.div
        className="max-w-lg font-kulim"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <h1 className="text-5xl font-bold text-black leading-tight mt-[-20px] font-kulim">
          Welcome To Our <span className="text-green-900">HarvestBrew</span> <br />
          Tea Factory
        </h1>
        <p className="mt-14 text-gray-600 font-bold font-kulim">
          "From leaf to cup, experience the art of tea-making. Discover premium blends, crafted with care in every sip. Welcome to the heart of tradition and taste."
        </p>
        <div className="mt-16 flex space-x-20 font-kulim">
          <button className="font-kulim w-24 h-10 bg-green-900 text-white font-medium rounded-full transition">
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="font-kulim relative w-full md:w-1/2 mt-14 md:mt-0 group"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <img
          src={field}
          alt="Field"
          className="font-kulim rounded-3xl shadow-3xl object-cover w-[750px] h-[680px]"
        />
      </motion.div>


    </div>


  );
};

export default HeroSection;
