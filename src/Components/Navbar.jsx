import React, { useState, useEffect } from 'react';
import { MdComputer } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { TbXboxX } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-900/90 backdrop-blur-xl shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="text-xl font-bold text-white flex items-center">
          AakashLabs<MdComputer size={30} />
        </div>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#slider" className="hover:text-indigo-300 font-bold">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-300 font-bold">About Us</a></li>
          <li><a href="#team" className="hover:text-indigo-300 font-bold">Our Team</a></li>
          <li><a href="#contact" className="hover:text-indigo-300 font-bold">Contact</a></li>
          <li>
            <a
              href="/jokes"
              title="Public API Jokes"
              className="bg-indigo-300 hover:bg-indigo-200 text-black font-bold px-3 py-1 rounded-full transition"
            >
              API
            </a>
          </li>
        </ul>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white z-50"
        >
          {isMenuOpen ? <TbXboxX size={26} /> : <IoMdMenu size={26} />}
        </button>

        
        <div
          className={`fixed inset-0 w-full h-screen bg-black/80 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <a href="#slider" className="text-white text-xl font-bold hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="text-white text-xl font-bold hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#team" className="text-white text-xl font-bold hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Our Team</a>
          <a href="#contact" className="text-white text-xl font-bold hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a
            href="/jokes"
            title="Public API Jokes"
            className="bg-indigo-300 hover:bg-indigo-200 text-black font-bold px-6 py-2 rounded-full transition"
            onClick={() => setIsMenuOpen(false)}
          >
            API
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
