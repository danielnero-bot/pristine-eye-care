import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustIndicators from "../components/TrustIndicators";
import Services from "../components/Services";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Products from "../components/Products";
import CTA from "../components/Cta";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <Services />
      <About />
      <WhyUs />
      <Products />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;