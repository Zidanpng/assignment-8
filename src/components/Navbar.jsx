import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const btnStyles = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? " text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-purple-500 inline-block border-b-2 border-b border-purple-800"
      : "text-gray-600 hover:text-purple-500 transition-colors px-1 pb-1";
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => navigate("/")} className={btnStyles("/")}>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/apps")}
                className={btnStyles("/apps")}
              >
                Apps
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/installations")}
                className={btnStyles("/installations")}
              >
                Installations
              </button>
            </li>
          </ul>
        </div>
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
        >
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <span
            className="text-xl font-bold
            bg-gradient-to-br from-purple-900 to-purple-500 text-transparent bg-clip-text"
          >
            HERO.IO
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center font-medium gap-8">
          <li>
            <button onClick={() => navigate("/")} className={btnStyles("/")}>
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/apps")}
              className={btnStyles("/apps")}
            >
              Apps
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/installations")}
              className={btnStyles("/installations")}
            >
              Installations
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Zidanpng"
          className="btn text-white bg-gradient-to-br from-purple-900 to-purple-500"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
