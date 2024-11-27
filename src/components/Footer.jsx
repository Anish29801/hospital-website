import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="flex items-center text-center sm:text-left space-x-3">
            <img
              src="https://images.vexels.com/content/282288/preview/hospital-surgery-logo-e60501.png"
              alt="MyCare Logo"
              className="w-8 h-8"
              style={{ filter: "grayscale(100%)" }}
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">MyCare</h2>
              <p className="text-gray-600 mt-2">World-class Medcare for world Families</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 sm:mt-0">
            <ul className="flex space-x-6 justify-center sm:justify-start">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a href="/deptartments" className="text-gray-600 hover:text-gray-800">Departments</a>
              </li>
              <li>
                <a href="/doctors" className="text-gray-600 hover:text-gray-800">Doctors</a>
              </li>
              <li>
                <a href="/appointments" className="text-gray-600 hover:text-gray-800">Appointments</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-600">
          <p>&copy; 2024 MyCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
