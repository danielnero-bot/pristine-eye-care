import React, { useRef } from "react";
import Product1 from "../images/glass1.png";
import Product2 from "../images/glass2.png";
import Product3 from "../images/glass3.png";
import Product4 from "../images/glass4.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Aura Titanium",
    price: "$240.00",
    image: Product1,
  },
  {
    name: "Zenith Clear",
    price: "$185.00",
    image: Product2,
      },
  {
    name: "Noir Classic",
    price: "$150.00",
    image: Product3,
  },
  {
    name: "Lumina Pearl",
    price: "$210.00",
    image: Product4,
  }
];

const Products = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".product-header > *", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1
    });

    gsap.from(".product-item", {
      scrollTrigger: { trigger: ".product-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="product-header flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Premium Eyewear</h2>
            <p className="text-slate-600">Discover our curated selection of designer frames.</p>
          </div>
          <button className="hidden md:block text-red-700 font-bold hover:text-red-800 transition">
            View All Collection &rarr;
          </button>
        </div>

        <div className="product-grid flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x hide-scrollbar">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-item min-w-[300px] md:min-w-[320px] bg-gray-50 rounded-2xl p-8 text-center snap-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="h-48 flex items-center justify-center mb-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full object-contain mix-blend-multiply"
                  style={{ filter: product.filter }}
                />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">{product.name}</h3>
              <p className="text-red-700 font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
