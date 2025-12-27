import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="navbar shadow-sm border-b-2 border-gray-600">
          <div className="flex-1">
            <div className="flex items-center gap-2 cursor-default">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl bg-gradient-to-br from-purple-900 to-purple-500 text-transparent bg-clip-text">
                HERO.IO
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-x-2 text-sm flex">
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
      </Container>
    </footer>
  );
};

export default Footer;
