import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-2 md:px-4 lg:px-8 pt-8 pb-6">
      <div className="flex flex-col md:flex-row shadow-sm justify-between items-center border-b-2 border-gray-600 pb-4">
        <div className="flex items-center gap-2 cursor-default">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-2xl bg-gradient-to-br from-purple-900 to-purple-500 text-transparent bg-clip-text">
            HERO.IO
          </span>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-white font-semibold my-3 text-center">
            Social Links
          </h4>
          <ul className="text-sm flex gap-4">
            <li className="w-7 h-7 rounded-full bg-white backdrop-blur-sm border border-white hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-blue-500">
              <FaXTwitter />
            </li>
            <li className="w-7 h-7 rounded-full bg-white backdrop-blur-sm border border-white hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-blue-500">
              <FaLinkedin />
            </li>
            <li className="w-7 h-7 rounded-full bg-white backdrop-blur-sm border border-white hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-blue-500">
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p className="text-white">Copyright © 2025 - All right reserved</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
