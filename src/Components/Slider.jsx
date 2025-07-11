import React from "react";

const Slider = () => {
  return (
    <section
      id="slider"
      className=" bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-800 text-white min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 "
    >
      <div className="max-w-7xl flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-sans">
          Empower Your Digital Presence
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mb-8 font-light">
          We build brands, create engaging digital experiences, and grow your
          business through innovative web strategies.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-indigo-700 rounded-full  hover:bg-gray-100 transition duration-300 font-bold"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Slider;
