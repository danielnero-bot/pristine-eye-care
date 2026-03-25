import React from "react";

const products = [
  {
    name: "Aura Titanium",
    price: "$240.00",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    filter: "none"
  },
  {
    name: "Zenith Clear",
    price: "$185.00",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    filter: "hue-rotate(180deg)"
  },
  {
    name: "Noir Classic",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    filter: "grayscale(100%)"
  },
  {
    name: "Lumina Pearl",
    price: "$210.00",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    filter: "sepia(50%)"
  }
];

const Products = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Premium Eyewear</h2>
            <p className="text-slate-600">Discover our curated selection of designer frames.</p>
          </div>
          <button className="hidden md:block text-red-700 font-bold hover:text-red-800 transition">
            View All Collection &rarr;
          </button>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x hide-scrollbar">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[320px] bg-gray-50 rounded-2xl p-8 text-center snap-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
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
