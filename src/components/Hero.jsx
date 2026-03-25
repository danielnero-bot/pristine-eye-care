import React from "react";

const Hero = () => {
  return (
    <header className="relative min-h-screen pt-24 flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-red-600 font-bold text-xs uppercase mb-6">
            World-Class Diagnostic Center
          </p>

          <h1 className="text-6xl font-extrabold mb-6">
            Clear Vision <br />
            <span className="text-red-700">Expert Care</span>
          </h1>

          <p className="text-slate-600 mb-8">
            Experience advanced diagnostics and personalized treatments.
          </p>

          <div className="flex gap-4">
            <button className="bg-red-700 text-white px-6 py-3 rounded-lg">
              Book Appointment
            </button>
            <button className="bg-gray-200 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYseFHAR8CIxTklh72U5Aoy3voE-wJp9Na9NkTTf4oRaxJNXxfHy5JweKbq7Jk6AnScHhG-wksbb0kDHbB8kk8AVyvnMFIdKK_p0d99cKpHOiNhHI9QZMLTKFhHPe2B-I0YcA-OvW72LlFhKremPpz6wB7DDVxt5BJ96MfkuTMUMrLw_H7hntWMirYYlwUCNOa9qgUGzsQgshy7oM6upXXSu8Q_bo0DUD2g_iQ8fKlShu90SvwKPsYT5JqlbZKfg76cScWVuCgOkE"
          alt="doctor"
          className="rounded-xl shadow-lg"
        />
      </div>
    </header>
  );
};

export default Hero;