import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavMenu } from "../constants/Constant.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full py-4 bg-white/10 backdrop-blur-lg px-6 md:px-12">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-white font-bold text-2xl">CryptoScope</h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-12">
            {NavMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-white hover:text-[#6528F7] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0B0B0F] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white font-semibold text-xl">Menu</h2>

          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col p-6 gap-6">
          {NavMenu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-[#6528F7] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
