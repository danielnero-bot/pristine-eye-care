import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="text-2xl font-extrabold tracking-tighter text-red-700">
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
          <a href="#" className="text-slate-600 hover:text-red-600 font-medium transition">Services</a>
          <a href="#" className="text-slate-600 hover:text-red-600 font-medium transition">Contact</a>

          <button className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-2.5 rounded-lg font-bold">
            Book Appointment
          </button>
        </div>

        <button className="md:hidden text-2xl text-slate-800">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;