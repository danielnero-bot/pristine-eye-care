import React, { useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-block", {
      scrollTrigger: { trigger: container.current, start: "top 90%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1
    });
  }, { scope: container });

  return (
    <footer ref={container} className="bg-white border-t border-gray-100 pt-16 pb-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="footer-block col-span-1 md:col-span-1">
            <h3 className="text-2xl font-extrabold tracking-tighter text-red-700 mb-4">
              Pristine <span className="text-slate-900">Eye Care</span>
            </h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              We provide world-class optical and ophthalmology care with compassion and expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/pristineeyecare/" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaFacebookF />
              </a>
              <a href="https://x.com/pristineeye" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com/pristineeye" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/pristine-eye-care/?originalSubdomain=ng" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer-block">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-600">
              <li><Link to="/about" className="hover:text-red-700 transition">About Clinic</Link></li>
              <li><Link to="/services" className="hover:text-red-700 transition">Our Services</Link></li>
              <li><Link to="/products" className="hover:text-red-700 transition">Eyewear Collection</Link></li>
              <li><Link to="/contact" className="hover:text-red-700 transition">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="footer-block">
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-red-700 transition">Eye Examination</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Glaucoma Care</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Retinal Imaging</a></li>
              <li><a href="#" className="hover:text-red-700 transition">Pediatric Vision</a></li>
            </ul>
          </div>

          <div className="footer-block">
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

        <div className="footer-block border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
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