"use client"
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";


const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Handle smooth scroll to Hero section
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('hero-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

  // Handle smooth scroll to About Us section
  const handleAboutUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-us-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Social Media Section - Mobile */}
          <div className="bg-gray-200 p-4 rounded-md mb-6">
            <div className="text-center">
              <span className="text-gray-500 font-medium block mb-3 text-sm">FOLLOW US ON</span>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="bg-blue-600 p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <FaFacebookF className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  className="bg-red-600 p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <FaYoutube className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <FaWhatsapp className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  className="bg-black p-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <FaTiktok className="text-white text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links - Mobile Grid */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="space-y-3">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="/?#about-us" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="/pages/brands" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Our Brands
              </a>
              <a href="/pages/production" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Production
              </a>
            </div>
            <div className="space-y-3">
              <a href="/pages/brands/oms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                OMS
              </a>
              <a href="/pages/brands/onesam" className="block text-gray-400 hover:text-white transition-colors text-sm">
                ONESAM
              </a>
              <a href="/pages/brands/xpert" className="block text-gray-400 hover:text-white transition-colors text-sm">
                X-PERT
              </a>
              <a href="/pages/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact us
              </a>
            </div>
          </div>

          {/* Company Info - Mobile */}
          <div className="text-center border-t border-gray-700 pt-4">
            <div className="text-sm">
              <span className="text-gray-500">Zigo Technology</span>
              <span className="text-gray-500 block mt-1">All Rights Reserved ©</span>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden lg:flex lg:items-center">
          {/* Left side - Social Media */}
          <div className="bg-gray-200 p-4 rounded-md flex flex-col items-center flex-shrink-0">
            <span className="text-gray-500 font-medium mb-3 text-sm">FOLLOW US ON</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="bg-red-600 p-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="#"
                className="bg-green-500 p-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <FaWhatsapp className="text-white" />
              </a>
              <a
                href="#"
                className="bg-black p-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <FaTiktok className="text-white" />
              </a>
            </div>
          </div>

          {/* Center - Company Name */}
          <div className="flex-grow flex justify-center items-center px-8">
            <div className="text-center">
              <span className="text-xl text-gray-500">Zigo Technology</span>
              <span className="text-gray-500 ml-2">All Rights Reserved ©</span>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex gap-8 flex-shrink-0">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="/pages/brands/oms" className="text-gray-400 hover:text-white transition-colors">
                OMS
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/#about-us" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="/pages/brands/onesam" className="text-gray-400 hover:text-white transition-colors">
                ONESAM
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/pages/brands" className="text-gray-400 hover:text-white transition-colors">
                Our Brands
              </a>
              <a href="/pages/brands/xpert" className="text-gray-400 hover:text-white transition-colors">
                X-PERT
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/pages/production" className="text-gray-400 hover:text-white transition-colors">
                Production
              </a>
              <a href="/pages/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;