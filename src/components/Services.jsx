import React, { useRef } from "react";
import { FiEye, FiSearch, FiActivity, FiShield } from "react-icons/fi";
import { MdOutlineChildCare } from "react-icons/md";
import { FaGlasses } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Comprehensive Exams", icon: <FiEye />, desc: "Complete digital eye exams using advanced technology." },
  { title: "Retinal Imaging", icon: <FiSearch />, desc: "Early detection of complex conditions with precise imaging." },
  { title: "Glaucoma Screening", icon: <FiActivity />, desc: "Expert assessment and ongoing management plans." },
  { title: "Pediatric Eye Care", icon: <MdOutlineChildCare />, desc: "Specialized gentle vision care for children." },
  { title: "Contact Lens Lab", icon: <FaGlasses />, desc: "Custom fitting for specialized prescription lenses." },
  { title: "Emergency Services", icon: <FiShield />, desc: "Immediate specialized attention for ocular trauma." }
];

const Services = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-header", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 30, opacity: 0, duration: 0.6
    });

    gsap.from(".service-card", {
      scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="service-header text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Clinical Precision Across Every Service
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience comprehensive eye care solutions tailored to your unique visual needs, delivered by industry-leading professionals.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-red-700 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-red-50 text-red-700 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;