import React, { useRef, useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);
  const form = useRef();
  const [status, setStatus] = useState("idle");

  useGSAP(() => {
    gsap.from(".contact-info > *", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      x: -30, opacity: 0, duration: 0.6, stagger: 0.1
    });

    gsap.from(".contact-form", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      x: 30, opacity: 0, duration: 0.8, ease: "power2.out"
    });
  }, { scope: container });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
      }, (error) => {
          setStatus("error");
          console.error(error.text);
          setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section ref={container} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">
        <div className="contact-info">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Ready to experience world-class eye care? Contact our clinic to schedule an appointment or to speak with our specialists.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-700 shadow-sm shrink-0">
                <FiMapPin className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Clinic</h4>
                <p className="text-slate-600">Plot 12 Timothy Lane Rumuola<br />Port Harcourt, Rivers State</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-700 shadow-sm shrink-0">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Contact Phone</h4>
                <p className="text-slate-600">07025358713</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-700 shadow-sm shrink-0">
                <FiMail className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                <p className="text-slate-600">care@pristineeyecare.com</p>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form bg-white p-10 rounded-2xl shadow-lg border border-gray-100 space-y-6 relative z-10 overflow-hidden">
          
          {status === "success" && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 text-sm">We will get back to you shortly.</p>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium">
              Oops! Something went wrong. Please try again.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_firstname"
              required
              placeholder="Janet"
              className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
            />
            <input
              type="text"
              name="user_lastname"
              required
              placeholder="Uchendu"
              className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
            />
          </div>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Email Address"
            className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
          />
          <textarea
            name="message"
            required
            rows="4"
            placeholder="How can we help you?"
            className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200 resize-none"
          ></textarea>
          <button 
            disabled={status === "sending"}
            className="w-full bg-red-700 hover:bg-red-800 disabled:bg-red-400 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" 
            type="submit"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;