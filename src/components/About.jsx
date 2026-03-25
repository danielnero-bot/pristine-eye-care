import React from "react";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle red accent line */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-linear-to-r from-red-700 to-red-500"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-red-50 rounded-3xl transform rotate-3 -z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
            alt="Pristine Clinic Interior"
            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
          />
        </div>

        <div>
          <h4 className="text-red-700 font-bold uppercase tracking-wider mb-2 text-sm">About Pristine</h4>
          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 leading-tight">
            Redefining the <br/><span className="text-red-700">Optical Experience</span>
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed text-lg">
            We combine clinical precision with a personalized experience in a highly comfortable and high-end setting.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <FiCheck className="text-sm" />
              </div>
              <p className="text-slate-700 font-medium">Equipped with modern diagnostic tools</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <FiCheck className="text-sm" />
              </div>
              <p className="text-slate-700 font-medium">Over 20 years of combined specialist expertise</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <FiCheck className="text-sm" />
              </div>
              <p className="text-slate-700 font-medium">Highly personalized treatment methodologies</p>
            </li>
          </ul>

          <button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;