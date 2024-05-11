import React, { useState } from "react";
import Logo from "../assets/nav-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden text-textcolor">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Navigation links in the center - hidden on mobile unless isOpen is true */}
        <div
          className={`md:flex gap-8 ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row`}
        >
          <a href="/" className="text-black hover:text-textcolor">
            Home
          </a>
          <a href="/contact" className="text-black hover:text-textcolor">
            Employer
          </a>
          <a href="/about" className="text-black hover:text-textcolor">
            Candidates
          </a>
        </div>

        {/* Login and Sign Up buttons on the right */}
        <div
          className={`md:flex gap-3 ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row`}
        >
          <button className="text-black">Login</button>
          <button className="bg-textcolor text-white font-bold py-2 px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
