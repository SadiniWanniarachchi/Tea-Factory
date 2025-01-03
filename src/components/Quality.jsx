import React from 'react';

const QualitySection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 space-y-8 md:flex-row md:space-y-0 md:space-x-16 md:px-12 lg:px-32">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
          Focusing on quality,{' '}
          <span className="text-[#21501a]">we maintain customer trust</span>
        </h2>
        <p className="mt-4 text-black">
          We ensure that every installation we build has strict quality checks. Sustainable solutions for an
          environmentally friendly and renewable future.
        </p>
      </div>

      
    </section>
  );
};

export default QualitySection;