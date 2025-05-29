import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      {/* Social Media Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Social Media */}
          <div className="bg-gray-200 p-4 rounded-md flex flex-col items-center">
            <span className="text-gray-500 font-medium mr-2 mb-2">FOLLOW US ON</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-md hover:opacity-90"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-md hover:opacity-90"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="bg-red-600 p-2 rounded-md hover:opacity-90"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="#"
                className="bg-green-500 p-2 rounded-md hover:opacity-90"
              >
                <FaWhatsapp className="text-white" />
              </a>
              <a href="#" className="bg-black p-2 rounded-md hover:opacity-90">
                <FaTiktok className="text-white" />
              </a>
            </div>
          </div>

          {/* Center - Company Name */}
          <div className="flex-grow text-center justify-center my-4 md:my-0 content-center">
            <div className="inline-flex items-center">
              <span className="text-xl text-gray-500">Zigo Technology</span>
              <span className="text-gray-500 ml-2">All Rights Reserved ©</span>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex flex-wrap justify-center gap-x-6 content-center">
            <div className="flex flex-col items-center gap-y-2 md:items-start">
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                OMS
              </a>
            </div>
            <div className="flex flex-col items-center gap-y-2 md:items-start">
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                ONESAM
              </a>
            </div>
            <div className="flex flex-col items-center gap-y-2 md:items-start">
              <a href="#" className="text-gray-400 hover:text-white">
                Our Brands
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                X-PERT
              </a>
            </div>
            <div className="flex flex-col items-center gap-y-2 md:items-start">
              <a href="#" className="text-gray-400 hover:text-white">
                Production
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
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
