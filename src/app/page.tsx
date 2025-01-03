"use client";

import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Services from "@/components/ui/sections/Services";
import Pricing from "@/components/ui/sections/Pricing";
// import Testimonials from "@/components/ui/sections/Testimonials";
import FAQ from "@/components/ui/sections/FAQ";
import Footer from "@/components/ui/sections/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
