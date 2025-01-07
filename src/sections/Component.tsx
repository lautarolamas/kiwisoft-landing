"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
