"use client";

import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Pricing from "@/sections/Pricing";
// import Testimonials from "@/components/ui/sections/Testimonials";

import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CursorFollower } from "@/utils/CursorFollower";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      {/* <Testimonials /> */}
      <CursorFollower />
      <SpeedInsights />
      <Analytics />
      <FAQ />
      <Footer />
    </div>
  );
}
