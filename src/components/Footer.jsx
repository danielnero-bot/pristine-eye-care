import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-extrabold tracking-tighter text-red-700 mb-4">
              Pristine <span className="text-slate-900">Eye Care</span>
            </h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              We provide world-class optical and ophthalmology care with compassion and expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-red-700 transition">About Clinic</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Our Services</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Eyewear Collection</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-red-700 transition">Eye Examination</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Glaucoma Care</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Retinal Imaging</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Pediatric Vision</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe to our newsletter for the latest eye health tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 border border-gray-200 rounded-l-xl focus:outline-none focus:border-red-300"
              />
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-r-xl transition font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Pristine Eye Care & Diagnostics. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-700 transition">Privacy Policy</a>
            <a href="#" className="hover:text-red-700 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;