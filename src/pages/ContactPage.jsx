import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".contact-hero", {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
    });

    gsap.from(".contact-info > *", {
      scrollTrigger: { trigger: ".split-section", start: "top 80%" },
      x: -30, opacity: 0, duration: 0.6, stagger: 0.1
    });

    gsap.from(".contact-form", {
      scrollTrigger: { trigger: ".split-section", start: "top 80%" },
      x: 30, opacity: 0, duration: 0.8, ease: "power2.out"
    });

    gsap.from(".map-section", {
      scrollTrigger: { trigger: ".map-section", start: "top 85%" },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white font-sans text-slate-900 relative">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-linear-to-b from-red-50 to-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="contact-hero w-16 h-1 bg-red-700 mx-auto mb-6"></div>
          <h1 className="contact-hero text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">Contact Us</h1>
          <p className="contact-hero text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            We are here to help. Reach out to Pristine Eye Care to schedule your next appointment or to ask any questions regarding our procedures.
          </p>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="split-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="contact-info bg-gray-50 p-10 md:p-12 rounded-3xl border border-gray-100 flex flex-col justify-center shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Clinic Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-700 shadow-sm shrink-0 border border-gray-100">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Plot 12 Timothy Lane Rumuola<br />
                    Port Harcourt, Rivers State
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-700 shadow-sm shrink-0 border border-gray-100">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Main Clinic: 07025358713<br />
                    Emergencies: 08089442646
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-700 shadow-sm shrink-0 border border-gray-100">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Appointments: care@pristineeyecare.com<br />
                    General Info: info@pristineeyecare.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-slate-900 mb-4">Opening Hours</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex justify-between items-center"><span className="font-medium">Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between items-center"><span className="font-medium">Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between items-center"><span className="font-medium text-red-700">Sunday:</span> <span className="text-red-700">Closed (Emergencies Only)</span></li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form bg-white p-10 md:p-12 rounded-3xl shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] border border-gray-100 space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Send a Message</h2>
            <p className="text-slate-500 mb-8 max-w-sm">We'll get back to you within 24 hours.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Janet"
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Uzuoma"
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="070 0000 0000"
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200 resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5" type="button">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="map-section py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="w-full h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-sm relative">
            {/* Disclaimer: using a static map image for demo purposes since iframe requires a real API key for gmaps */}
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-slate-500">
               <FiMapPin className="text-5xl text-red-700 mb-4" />
               <p className="font-bold text-lg">Plot 12 Timothy Lane Rumuola, Port Harcourt</p>
               <p className="text-sm">Interactive Map Integration Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-14 h-14 bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-red-800 transition-all hover:scale-110 group relative">
          <FiPhone className="text-xl" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Us
          </span>
        </button>
        <button className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#1ebd5a] transition-all hover:scale-110 group relative">
          <FiMessageCircle className="text-xl" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
