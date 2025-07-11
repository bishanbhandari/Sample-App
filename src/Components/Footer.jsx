import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-bold  text-white mb-2 flex  justify-center items-center  md:justify-start">AakashLabs<MdComputer size={30} /></h3>
          <p className="text-sm text-gray-400">
            Building impactful digital experiences to elevate your brand.
          </p>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#team" className="hover:text-white">Our Team</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

    
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AakashLabs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
