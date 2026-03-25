import React, { useRef } from "react";
import Doctor from "../images/doctor.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-text > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    })
    .from(".hero-image", {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <header ref={container} className="relative min-h-screen pt-24 flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="hero-text">
          <p className="text-red-600 font-bold text-xs uppercase mb-6 tracking-widest">
            World-Class Diagnostic Center
          </p>

          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Clear Vision <br />
            <span className="text-red-700">Expert Care</span>
          </h1>

          <p className="text-slate-600 mb-8 text-lg">
            Experience advanced diagnostics and personalized treatments.
          </p>

          <div className="flex gap-4">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all">
              Book Appointment
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-slate-800 font-bold px-8 py-4 rounded-xl transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image flex justify-center lg:justify-end">
          <img
            src={Doctor}
            alt="doctor"
            className="rounded-3xl shadow-2xl object-cover max-h-[600px] w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;