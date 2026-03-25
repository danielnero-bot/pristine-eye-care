import React, { useRef } from "react";
import { FiShield, FiActivity } from "react-icons/fi";
import { FaUserMd, FaHospitalAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TrustIndicators = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".trust-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="trust-card flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-2xl">
              <FiShield />
            </div>
            <h3 className="font-bold text-slate-800">NHIS Accredited</h3>
          </div>

          <div className="trust-card flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-2xl">
              <FaUserMd />
            </div>
            <h3 className="font-bold text-slate-800">Certified Specialists</h3>
          </div>

          <div className="trust-card flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-2xl">
              <FaHospitalAlt />
            </div>
            <h3 className="font-bold text-slate-800">Modern Equipment</h3>
          </div>

          <div className="trust-card flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-2xl">
              <FiActivity />
            </div>
            <h3 className="font-bold text-slate-800">Affordable Care</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
