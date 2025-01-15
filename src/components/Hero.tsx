"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToPosts = () => {
    const element = document.getElementById("posts"); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-4 md:px-6 lg:px-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug lg:leading-tight">
            See <span className="text-blue-400">Blog Website</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Create stunning websites with cutting-edge technologies. Join us and
            take your business to the next level.
          </p>
          <div className="mt-6">
            <button
              onClick={scrollToPosts}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 md:py-4 md:px-6 rounded-lg shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <FaArrowDown />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/images/sak.jpg"
            alt="Hero"
            className="w-10/12 md:w-8/12 lg:w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Decorative Bubbles */}
      <div className="absolute top-5 left-5 w-32 h-32 md:w-40 md:h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-60 md:h-60 bg-purple-700 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};

export default Hero;
