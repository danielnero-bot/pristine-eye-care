import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import CTA from '../components/Cta';
import Footer from '../components/Footer';
import { FiEye, FiSearch, FiActivity, FiShield, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { MdOutlineChildCare, MdLocalHospital } from 'react-icons/md';
import { FaGlasses } from 'react-icons/fa';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Testing from '../images/testing.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Comprehensive Eye Exams",
    icon: <FiEye />,
    desc: "Complete digital eye examinations utilizing state-of-the-art diagnostic technology for precise visual assessment.",
  },
  {
    title: "Cataract Surgery",
    icon: <MdLocalHospital />,
    desc: "Advanced laser-assisted cataract removal and premium intraocular lens implantation by expert surgeons.",
  },
  {
    title: "Glaucoma Treatment",
    icon: <FiActivity />,
    desc: "Early detection, expert assessment, and ongoing medical or surgical management plans to preserve vision.",
  },
  {
    title: "Pediatric Vision Care",
    icon: <MdOutlineChildCare />,
    desc: "Specialized, gentle vision care and screening designed specifically for children's optical development.",
  },
  {
    title: "Optical Services",
    icon: <FaGlasses />,
    desc: "Custom fitting for specialized prescription lenses, contacts, and a premium designer eyewear collection.",
  },
  {
    title: "Retinal Imaging",
    icon: <FiSearch />,
    desc: "Advanced imaging for the early detection and management of complex retinal conditions and diseases.",
  }
];

const ServicesPage = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-hero > *", {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2
    });

    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 40, opacity: 0, duration: 0.5, delay: i * 0.1, ease: "power2.out"
      });
    });
    
    gsap.utils.toArray(".split-section").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: { trigger: section, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.6
      });
    });

    gsap.utils.toArray(".process-step").forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: { trigger: step, start: "top 85%" },
        scale: 0.9, y: 30, opacity: 0, duration: 0.5, delay: i * 0.2, ease: "back.out(1.2)"
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-linear-to-b from-red-50 to-white overflow-hidden">
        <div className="service-hero max-w-7xl mx-auto px-8 relative z-10 text-center">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4">World-Class Care</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">Our Services</h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Pristine Eye Care offers comprehensive, specialized ophthalmology services designed to preserve, restore, and enhance your vision.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-16 h-16 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>
                <button className="text-left font-bold text-red-700 hover:text-red-800 flex items-center gap-2 group/btn">
                  Book Appointment 
                  <span className="transform transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Detail Sections */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="split-section grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-1 bg-red-700 mb-6"></div>
              <h2 className="text-4xl font-extrabold mb-6 text-slate-900 leading-tight">Advanced Surgical <br/>Excellence</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our surgical suites are equipped with the latest FDA-approved technology to perform advanced, minimally invasive procedures. From laser-assisted cataract surgery to complex retinal repairs, our specialists deliver unmatched precision.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><FiCheckCircle className="text-red-700" /> Outpatient procedures with rapid recovery times</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><FiCheckCircle className="text-red-700" /> Premium intraocular lens (IOL) options</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><FiCheckCircle className="text-red-700" /> Specialized surgical teams and anesthesiologists</li>
              </ul>
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all">
                Learn About Surgeries
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img src={Testing} alt="Advanced Surgery" className="rounded-3xl shadow-lg w-full h-[500px] object-cover" />
            </div>
          </div>

          <div className="split-section grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop" alt="Pediatric Eye Care" className="rounded-3xl shadow-lg w-full h-[500px] object-cover" />
            </div>
            <div>
              <div className="w-16 h-1 bg-red-700 mb-6"></div>
              <h2 className="text-4xl font-extrabold mb-6 text-slate-900 leading-tight">Specialized Pediatric <br/>Vision Care</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Children's eyes require unique, gentle care. Our pediatric ophthalmologists are specially trained to diagnose and treat vision issues in infants, children, and adolescents in a highly comforting environment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><FiCheckCircle className="text-red-700" /> Early childhood vision screening</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><FiCheckCircle className="text-red-700" /> Strabismus (crossed eyes) treatment</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><FiCheckCircle className="text-red-700" /> Myopia (nearsightedness) management</li>
              </ul>
              <button className="bg-white border-2 border-red-700 text-red-700 hover:bg-red-50 font-bold px-8 py-4 rounded-xl transition-all">
                Book Pediatric Exam
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Your Path to Clear Vision</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our streamlined clinical process ensures you receive the care you need with minimal wait times and maximum comfort.
            </p>
          </div>

          <div className="process-container grid lg:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-[60px] left-[20%] right-[20%] h-[2px] bg-red-100 z-0"></div>
            
            <div className="process-step relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white border-4 border-red-100 text-red-700 rounded-full flex items-center justify-center text-2xl font-extrabold mb-8 shadow-sm">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Book Appointment</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                Easily schedule your consultation online or call our clinic. We offer flexible times to match your routine.
              </p>
            </div>

            <div className="process-step relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-700 text-white border-4 border-white shadow-md rounded-full flex items-center justify-center text-2xl font-extrabold mb-8">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Comprehensive Exam</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                Undergo an in-depth eye assessment utilizing high-end diagnostic tools to determine your visual health.
              </p>
            </div>

            <div className="process-step relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white border-4 border-red-100 text-red-700 rounded-full flex items-center justify-center text-2xl font-extrabold mb-8 shadow-sm">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Personalized Treatment</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                Receive a custom-tailored medical or surgical plan designed to treat, manage, or correct your specific condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
