import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">
        <div>
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
                <p className="text-slate-600">128 Clinical Avenue, Medical District<br />Metropolis, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-700 shadow-sm shrink-0">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Contact Phone</h4>
                <p className="text-slate-600">+1 (555) 234-5678</p>
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

        <form className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200"
          />
          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all border border-transparent focus:border-red-200 resize-none"
          ></textarea>
          <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;