import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "./navLinks";
import ReusableButton from "../Components/Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    if (headerRef.current) {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('backdrop-blur', 'text-black');
        headerRef.current.classList.remove('bg-transparent', 'text-white');
      } else {
        headerRef.current.classList.add('text-white', 'bg-transparent');
        headerRef.current.classList.remove('backdrop-blur', 'text-black');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up event listener on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <nav ref={headerRef} className="w-full bg-transparent fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="text-[20px] font-Copperplate-bold text-white">
            TalentMint
          </div>

          {/* Center: Nav Links (desktop) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-fuchsia-800 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <ReusableButton label="Get Started" to=""/>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-xl"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 text-sm font-medium"
              onClick={() => setIsOpen(false)} // close on click
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
