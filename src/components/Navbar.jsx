import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="text-2xl font-extrabold tracking-tighter text-red-700" onClick={closeMobileMenu}>
          Pristine <span className="text-slate-900">Eye Care</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700" : "text-slate-600 hover:text-red-600 font-medium transition"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700" : "text-slate-600 hover:text-red-600 font-medium transition"}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700" : "text-slate-600 hover:text-red-600 font-medium transition"}
          >
            Services
          </NavLink>
          <NavLink 
            to="/products" 
            className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700" : "text-slate-600 hover:text-red-600 font-medium transition"}
          >
            Eyewear
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700" : "text-slate-600 hover:text-red-600 font-medium transition"}
          >
            Contact
          </NavLink>

          <button className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-2.5 rounded-lg font-bold">
            Book Appointment
          </button>
        </div>

        <button 
          className="md:hidden text-2xl text-slate-800 focus:outline-none p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col px-6 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "py-6 gap-6 opacity-100 visible h-auto" : "py-0 gap-0 opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <NavLink 
          to="/" 
          onClick={closeMobileMenu}
          className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700 pb-1 self-start" : "text-slate-600 hover:text-red-600 font-medium transition self-start"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          onClick={closeMobileMenu}
          className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700 pb-1 self-start" : "text-slate-600 hover:text-red-600 font-medium transition self-start"}
        >
          About
        </NavLink>
        <NavLink 
          to="/services" 
          onClick={closeMobileMenu}
          className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700 pb-1 self-start" : "text-slate-600 hover:text-red-600 font-medium transition self-start"}
        >
          Services
        </NavLink>
        <NavLink 
          to="/products" 
          onClick={closeMobileMenu}
          className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700 pb-1 self-start" : "text-slate-600 hover:text-red-600 font-medium transition self-start"}
        >
          Eyewear
        </NavLink>
        <NavLink 
          to="/contact" 
          onClick={closeMobileMenu}
          className={({isActive}) => isActive ? "text-red-700 font-bold border-b-2 border-red-700 pb-1 self-start" : "text-slate-600 hover:text-red-600 font-medium transition self-start"}
        >
          Contact
        </NavLink>

        <button className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-3 mt-4 rounded-lg font-bold shadow-md shadow-red-700/20 w-full">
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;