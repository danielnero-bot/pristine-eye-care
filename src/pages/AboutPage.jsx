import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import CTA from '../components/Cta';
import Footer from '../components/Footer';
import { FiEye, FiHeart, FiAward, FiStar, FiShield } from 'react-icons/fi';
import Clinic from '../images/Clinic.png';
import Test1 from '../images/test1.png';
import Test2 from '../images/test2.png';
import Test3 from '../images/test3.jpg';
import Test4 from '../images/test4.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-content > *", {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.2
    });

    gsap.from(".fade-up", {
      scrollTrigger: { trigger: ".fade-up", start: "top 80%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.2
    });

    gsap.from(".mission-card", {
      scrollTrigger: { trigger: ".mission-card", start: "top 80%" },
      scale: 0.95, opacity: 0, duration: 0.6, stagger: 0.2, ease: "back.out(1.2)"
    });

    gsap.from(".value-header > *", {
      scrollTrigger: { trigger: ".value-header", start: "top 85%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1
    });

    gsap.utils.toArray(".value-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power2.out"
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Header Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={Clinic} 
            alt="Clinic Background" 
            className="w-full h-full object-cover mt-20"
          />
          <div className="absolute inset-0 bg-red-900/80 mix-blend-multiply mt-20"></div>
        </div>
        <div className="hero-content relative z-10 text-center text-white px-8 mt-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Us</h1>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Dedicated to illuminating your world through exceptional optical care.
          </p>
        </div>
      </section>

      {/* Clinic Intro */}
      <section className="py-24 bg-white relative">
        <div className="fade-up w-24 h-1.5 bg-red-700 mx-auto mb-12 rounded-full"></div>
        <div className="fade-up max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 text-slate-900 leading-tight">
            Pristine Eye Care & Diagnostics
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Founded with a commitment to excellence, Pristine Eye Care & Diagnostics is a premier ophthalmology center. We specialize in providing comprehensive diagnostic, medical, and surgical eye care. Our clinic was built on the principle that everyone deserves world-class vision care in a highly comfortable, patient-centered environment.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            From routine optical examinations to advanced surgical interventions, our board-certified specialists utilize state-of-the-art technology to deliver accurate diagnoses and outstanding visual outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="mission-card bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center text-3xl mb-8 border border-red-100">
                <FiEye className="stroke-[2.5]" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the global benchmark for optical excellence, continuously advancing the field of ophthalmology through innovation, precision, and unwavering dedication to preserving the gift of sight.
              </p>
            </div>
          </div>

          <div className="mission-card bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center text-3xl mb-8 border border-red-100">
                <FiHeart className="stroke-[2.5]" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide accessible, high-quality, and compassionate eye care. We strive to improve our patients' quality of life by delivering personalized treatments using the safest medical technologies available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="value-header text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              The fundamental principles that guide our daily practice, decision making, and patient care.
            </p>
          </div>
          
          <div className="value-grid grid md:grid-cols-3 gap-8">
            <div className="value-card bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(227,52,47,0.1)] transition-all duration-300 border-t-4 border-transparent hover:border-red-700 cursor-default group">
              <div className="w-16 h-16 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                <FiAward />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Excellence</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                We hold ourselves to the highest clinical standards, ensuring superior outcomes through continuous education.
              </p>
            </div>
            
            <div className="value-card bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(227,52,47,0.1)] transition-all duration-300 border-t-4 border-transparent hover:border-red-700 cursor-default group">
              <div className="w-16 h-16 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                <FiShield />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Integrity</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                We operate with complete transparency, uncompromising honesty, and ethical medical practices always.
              </p>
            </div>

            <div className="value-card bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(227,52,47,0.1)] transition-all duration-300 border-t-4 border-transparent hover:border-red-700 cursor-default group">
              <div className="w-16 h-16 bg-red-50 text-red-700 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                <FiStar />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Patient Care</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our patients are our priority. We listen attentively, care deeply, and treat everyone like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">World-Class Facilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              A highly comfortable environment equipped with FDA-approved diagnostic and surgical technology.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all">
              <img 
                src={Test2} 
                alt="Operating Room" 
                className="w-full h-full min-h-[400px] lg:min-h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all">
              <img 
                src={Test1} 
                alt="Diagnostic Equipment" 
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all">
              <img 
                src={Test3} 
                alt="Consultation Room" 
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="col-span-2 group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all">
              <img 
                src={Test4} 
                alt="Waiting Area" 
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
