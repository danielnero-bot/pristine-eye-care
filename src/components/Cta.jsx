import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".cta-content > *", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.15
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-red-700 text-center text-white">
      <div className="cta-content max-w-4xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-6">Your Vision Matters</h2>
        <p className="mb-8 text-xl text-red-100">
          Schedule your consultation with our specialists today.
        </p>

        <button className="bg-white hover:bg-gray-50 text-red-700 px-8 py-4 rounded-xl font-bold shadow-lg transition-transform transform hover:-translate-y-1">
          Book My Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;