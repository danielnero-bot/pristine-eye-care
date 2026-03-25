import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import glass1 from "../images/glass1.png";
import glass2 from "../images/glass2.png";
import glass3 from "../images/glass3.png";
import glass4 from "../images/glass4.png";
import glass5 from "../images/glass5.png";
import glass6 from "../images/glass6.png";
import glass7 from "../images/glass7.png";
import glass8 from "../images/glass8.png";  

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Aura Titanium",
    category: "frames",
    desc: "Ultra-lightweight aerospace-grade titanium frames for all-day comfort.",
    price: "₦240,000",
    image: glass1
  },
  {
    id: 2,
    name: "Zenith Clear",
    category: "lenses",
    desc: "Premium anti-reflective computer lenses designed to reduce eye strain.",
    price: "₦185,000",
    image: glass2
  },
  {
    id: 3,
    name: "Noir Classic",
    category: "sunglasses",
    desc: "Timeless polarized sunglasses offering 100% UVA/UVB protection.",
    price: "₦150,000",
    image: glass3
  },
  {
    id: 4,
    name: "Lumina Pearl",
    category: "glasses",
    desc: "Elegant transparent acetate frames perfect for a minimal aesthetic.",
    price: "₦210,000",
    image: glass4
  },
  {
    id: 5,
    name: "Onyx Reader",
    category: "glasses",
    desc: "Professional matte black reading glasses with enhanced durability.",
    price: "₦120,000",
    image: glass5
  },
  {
    id: 6,
    name: "Vista Sport",
    category: "sunglasses",
    desc: "Wraparound performance sunglasses for high-glare active environments.",
    price: "₦190,000",
    image: glass6
  },
  {
    id: 7,
    name: "Eclipse Transitions",
    category: "lenses",
    desc: "Smart photochromic lenses that adapt seamlessly to varying light conditions.",
    price: "₦275,000",
    image: glass7
  },
  {
    id: 8,
    name: "Gold Wireframe",
    category: "frames",
    desc: "Classic 14k gold-plated wireframes offering a vintage, sophisticated look.",
    price: "₦320,000",
    image: glass8
  }
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "glasses", name: "Prescription Glasses" },
  { id: "sunglasses", name: "Sunglasses" },
  { id: "frames", name: "Frames" },
  { id: "lenses", name: "Premium Lenses" }
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".product-hero", {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
    });

    gsap.from(".filter-btn", {
      scrollTrigger: { trigger: ".filter-container", start: "top 85%" },
      y: 20, opacity: 0, duration: 0.5, stagger: 0.1
    });

    gsap.utils.toArray(".product-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        scale: 0.95, opacity: 0, duration: 0.6, delay: i * 0.05, ease: "power2.out"
      });
    });

    gsap.from(".custom-cta > *", {
      scrollTrigger: { trigger: ".custom-cta", start: "top 80%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.15
    });
  }, { scope: container, dependencies: [activeCategory] });

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div ref={container} className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-white border-b border-gray-100 flex flex-col items-center">
        <div className="product-hero w-16 h-1 bg-red-700 mb-6"></div>
        <h1 className="product-hero text-5xl font-extrabold mb-4 text-slate-900">Our Products</h1>
        <p className="product-hero text-slate-500 text-lg max-w-2xl mx-auto text-center px-4">
          Discover our curated collection of designer frames, premium lenses, and protective eyewear tailored to your specific visual needs.
        </p>
      </section>

      {/* Main Content - Filters & Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Filters */}
          <div className="filter-container flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-red-700 text-white shadow-md transform scale-105" 
                    : "bg-white text-slate-600 border border-gray-200 hover:border-red-300 hover:text-red-700 hover:bg-red-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="product-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="bg-gray-50 rounded-2xl h-48 flex items-center justify-center mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-32 object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500"
                    style={{ filter: product.filter }}
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-slate-900">{product.name}</h3>
                    <span className="text-red-700 font-bold">{product.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {product.desc}
                  </p>
                  <button className="w-full py-3 rounded-xl border-2 border-red-700 text-red-700 font-bold hover:bg-red-700 hover:text-white transition-colors duration-300">
                    Reserve Frame
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Specialty CTA */}
      <section className="py-24 bg-white border-t border-gray-100 text-center">
        <div className="custom-cta max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Need a Custom Prescription?</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Our expert optical team is ready to help you find the perfect frames and craft lenses tailored specifically to your exact medical prescription. Visit our clinic for a professional fitting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold px-10 py-4 rounded-xl shadow-md transition-all">
              Book a Fitting
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-red-700 hover:text-red-700 text-slate-700 font-bold px-10 py-4 rounded-xl transition-all">
              Contact Clinic
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
