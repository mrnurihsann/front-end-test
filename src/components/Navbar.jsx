import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/", link: "Talenta" },
    { path: "/", link: "Klien" },
    { path: "/", link: "Mentor" },
    { path: "/", link: "Kontak" },
  ];

  const handleSignUpClick = () => {
    navigate("/login");
  };

  return (
    <header className="bg-white">
      <nav className="px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 ml-30 sm:ml-0 lg:ml-20 pl-10">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <a href="/" className="text-2xl font-bold">
            Vortex
          </a>
        </div>

        <ul className="flex justify-center space-x-6 text-lg">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-black">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "text-black"
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center mr-20 sm:mr-0 lg:mr-20 pl-30">
          <button
            className="bg-bluecustom text-white px-8 py-2 font-medium rounded-full hover:bg-blue-600"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>

        <div className="md:hidden lg:hidden sm:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            <FaBars className="w-8 h-8"></FaBars>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
