import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path
      ? "bg-gradient-to-br from-purple-800 to-purple-500 inline-block text-transparent bg-clip-text border-b border-purple-800"
      : "text-gray-600";
  return (
    <div className="navbar bg-base-100 shadow-sm px-8">
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
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className={isActive("/apps")}>
                Apps
              </Link>
            </li>
            <li>
              <Link to="/installations" className={isActive("/installations")}>
                Installations
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn font-bold text-xl text-gray-900 border-none bg-none">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <span className="bg-gradient-to-br from-purple-900 to-purple-500 text-transparent bg-clip-text">
            HERO.IO
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className={isActive("/apps")}>
              Apps
            </Link>
          </li>
          <li>
            <Link to="/installations" className={isActive("/installations")}>
              Installations
            </Link>
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
