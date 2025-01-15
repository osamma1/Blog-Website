"use client";

import React, { useState } from "react";
import {  FaGithub,  FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:osamafaraz99@gmail.com?subject=Newsletter Signup&body=I would like to sign up for the newsletter with this email: ${email}`;
    window.location.href = mailtoLink;
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Blogify</h2>
          <p className="text-sm mt-2">Your go-to place for the latest blog posts.</p>
        </div>

        {/* Middle Section: Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          
          <a
            href="https://github.com/osamma1"
            className="hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/usama-faraz-7006b2232/"
            className="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Email Subscription Form */}
        <form onSubmit={handleNewsletterSignup} className="flex flex-col items-center md:items-start">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mb-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 text-black w-full max-w-xs md:max-w-sm"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md w-full max-w-xs md:max-w-sm"
          >
            Sign up
          </button>
        </form>

        {/* Right Section: Footer Text */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">© 2025 Blogify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
