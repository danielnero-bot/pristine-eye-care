import React, { useRef } from "react";
import { FiCheckCircle, FiActivity } from "react-icons/fi";
import { FaUserMd, FaHospitalAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".why-header > *", {
      scrollTrigger: { trigger: container.current, start: "top 85%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1
    });

    gsap.from(".why-card", {
      scrollTrigger: { trigger: ".why-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="why-header text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Why Choose Pristine?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We deliver exceptional outcomes through specialized medical expertise, patient-centered service, and high-end clinical facilities.
          </p>
        </div>

        <div className="why-grid grid md:grid-cols-4 gap-8">
          <div className="why-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <div className="w-16 h-16 mx-auto bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6">
              <FaHospitalAlt />
            </div>
            <h3 className="font-bold text-xl mb-3">Modern Facility</h3>
            <p className="text-slate-600 text-sm">
              Luxurious clinic environment designed exclusively for patient comfort.
            </p>
          </div>

          <div className="why-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <div className="w-16 h-16 mx-auto bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6">
              <FaUserMd />
            </div>
            <h3 className="font-bold text-xl mb-3">Expert Doctors</h3>
            <p className="text-slate-600 text-sm">
              Board-certified professionals with sub-specialty fellowship training.
            </p>
          </div>

          <div className="why-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <div className="w-16 h-16 mx-auto bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6">
              <FiActivity />
            </div>
            <h3 className="font-bold text-xl mb-3">Advanced Tech</h3>
            <p className="text-slate-600 text-sm">
              Equipped with the latest FDA-approved optical and surgical technology.
            </p>
          </div>

          <div className="why-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <div className="w-16 h-16 mx-auto bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6">
              <FiCheckCircle />
            </div>
            <h3 className="font-bold text-xl mb-3">Great Results</h3>
            <p className="text-slate-600 text-sm">
              A proven track record of successful treatments and outstanding vision restoration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
